import { useEffect, useRef } from 'react';
import { useTheme } from '@4lt7ab/core';
import { synthwaveBackground } from './backgrounds/synthwave';
import { pipboyBackground } from './backgrounds/pipboy';
import { neuralBackground } from './backgrounds/neural';
import { pacmanBackground } from './backgrounds/pacman';
import { blackHoleBackground } from './backgrounds/black-hole';
import type { BackgroundFunction } from './index';

const backgroundRegistry: Record<string, BackgroundFunction> = {
  synthwave: synthwaveBackground,
  pipboy: pipboyBackground,
  neural: neuralBackground,
  pacman: pacmanBackground,
  'black-hole': blackHoleBackground,
};

/** Props for the ThemeBackground component. Currently empty — reserved for future options. */
export interface ThemeBackgroundProps {}

/**
 * Side-effect-only component that renders a full-screen canvas background
 * animation matching the active theme. Renders nothing to the React tree.
 *
 * Guards:
 * - Only runs on viewports wider than 768px (desktop).
 * - Respects `prefers-reduced-motion: reduce`.
 * - Only activates for themes that have a registered background animation.
 */
export function ThemeBackground(_props: ThemeBackgroundProps): React.JSX.Element | null {
  const { resolved } = useTheme();
  const bgContainerRef = useRef<HTMLDivElement | null>(null);
  const bgCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Clean up previous background
    if (bgCleanupRef.current) {
      bgCleanupRef.current();
      bgCleanupRef.current = null;
    }
    if (bgContainerRef.current) {
      bgContainerRef.current.remove();
      bgContainerRef.current = null;
    }

    const backgroundFn = backgroundRegistry[resolved];

    if (
      !backgroundFn ||
      window.innerWidth <= 768 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const container = document.createElement('div');
    container.setAttribute('data-theme-bg', resolved);
    container.setAttribute('aria-hidden', 'true');
    container.style.cssText =
      'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
    document.body.prepend(container);
    bgContainerRef.current = container;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'width:100%;height:100%;';
    container.appendChild(canvas);

    bgCleanupRef.current = backgroundFn(canvas);

    return () => {
      if (bgCleanupRef.current) {
        bgCleanupRef.current();
        bgCleanupRef.current = null;
      }
      if (bgContainerRef.current) {
        bgContainerRef.current.remove();
        bgContainerRef.current = null;
      }
    };
  }, [resolved]);

  return null;
}
