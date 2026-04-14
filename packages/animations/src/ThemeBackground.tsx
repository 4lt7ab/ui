import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@4lt7ab/core';
import { synthwaveBackground } from './backgrounds/synthwave';
import { pipboyBackground } from './backgrounds/pipboy';
import { neuralBackground } from './backgrounds/neural';
import { pacmanBackground } from './backgrounds/pacman';
import { blackHoleBackground } from './backgrounds/black-hole';
import { staticBackgroundRegistry } from './backgrounds/static';
import type { BackgroundFunction } from './index';

const canvasBackgroundRegistry: Record<string, BackgroundFunction> = {
  synthwave: synthwaveBackground,
  pipboy: pipboyBackground,
  neural: neuralBackground,
  pacman: pacmanBackground,
  'black-hole': blackHoleBackground,
};

/** Props for the ThemeBackground component. */
export interface ThemeBackgroundProps {
  /**
   * Optional fallback rendered for themes without a registered canvas or
   * static background. Receives the current resolved theme name.
   */
  fallback?: React.ComponentType<{ theme: string }>;
}

/**
 * Side-effect-only component that renders a full-screen background matching
 * the active theme. For themes with a canvas animation, renders an animated
 * canvas. For themes with a static background definition, renders a CSS div.
 * Renders nothing to the React tree (except when a fallback portal is active).
 *
 * Guards:
 * - Only runs on viewports wider than 768px (desktop).
 * - Respects `prefers-reduced-motion: reduce`.
 * - Falls back to nothing (or the `fallback` prop) for unknown themes.
 */
export function ThemeBackground(_props: ThemeBackgroundProps): React.JSX.Element | null {
  const { resolved } = useTheme();
  const bgContainerRef = useRef<HTMLDivElement | null>(null);
  const bgCleanupRef = useRef<(() => void) | null>(null);
  const [fallbackPortalTarget, setFallbackPortalTarget] = useState<HTMLDivElement | null>(null);

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
    setFallbackPortalTarget(null);

    const isDesktop = window.innerWidth > 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const canvasBgFn = canvasBackgroundRegistry[resolved];
    const staticBgFn = staticBackgroundRegistry[resolved];

    const containerBase =
      'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';

    if (canvasBgFn) {
      // Canvas animation path — same behavior as before
      const container = document.createElement('div');
      container.setAttribute('data-theme-bg', resolved);
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText = containerBase;
      document.body.prepend(container);
      bgContainerRef.current = container;

      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'width:100%;height:100%;';
      container.appendChild(canvas);

      bgCleanupRef.current = canvasBgFn(canvas);
    } else if (staticBgFn) {
      // Static CSS background path
      const container = document.createElement('div');
      container.setAttribute('data-theme-bg', resolved);
      container.setAttribute('data-theme-bg-type', 'static');
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText =
        'position:fixed;inset:0;z-index:0;pointer-events:none;' + staticBgFn();
      document.body.prepend(container);
      bgContainerRef.current = container;
    } else if (_props.fallback) {
      // Fallback — create a portal target for the consumer-provided component
      const container = document.createElement('div');
      container.setAttribute('data-theme-bg', resolved);
      container.setAttribute('data-theme-bg-type', 'fallback');
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText = containerBase;
      document.body.prepend(container);
      bgContainerRef.current = container;
      setFallbackPortalTarget(container);
    }

    return () => {
      if (bgCleanupRef.current) {
        bgCleanupRef.current();
        bgCleanupRef.current = null;
      }
      if (bgContainerRef.current) {
        bgContainerRef.current.remove();
        bgContainerRef.current = null;
      }
      setFallbackPortalTarget(null);
    };
  }, [resolved, _props.fallback]);

  // Render fallback via portal so it has a proper React lifecycle
  if (fallbackPortalTarget && _props.fallback) {
    const Fallback = _props.fallback;
    return createPortal(<Fallback theme={resolved} />, fallbackPortalTarget);
  }

  return null;
}
