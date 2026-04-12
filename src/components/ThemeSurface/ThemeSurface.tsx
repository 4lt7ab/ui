import { useEffect, useRef, type ReactNode } from 'react';
import { semantic as t } from '../../tokens/semantic';
import { useTheme } from '../../themes/ThemeProvider';

export interface ThemeSurfaceProps {
  children: ReactNode;
  /**
   * When true, applies the page background to document.body and optionally
   * creates a canvas animation. When false (default), renders a div with
   * the page background color.
   *
   * @default false
   */
  global?: boolean;
  /**
   * When global is true, enables the theme's canvas background animation.
   * Respects prefers-reduced-motion and skips on screens narrower than 768px.
   *
   * @default true
   */
  animated?: boolean;
  /** Additional inline styles for the wrapper div (only used when global=false). */
  style?: React.CSSProperties;
}

/**
 * Applies the theme's page background color.
 *
 * Use `global` to set the body background and optionally run canvas animations.
 * Without `global`, renders a styled div with the page background.
 */
export function ThemeSurface({
  children,
  global = false,
  animated = true,
  style,
}: ThemeSurfaceProps): React.JSX.Element {
  const { resolved, themes } = useTheme();
  const bgContainerRef = useRef<HTMLDivElement | null>(null);
  const bgCleanupRef = useRef<(() => void) | null>(null);
  const prevBodyBgRef = useRef<string>('');

  useEffect(() => {
    if (!global) return;

    const definition = themes.get(resolved);
    if (!definition) return;

    // Compute the page background from the token
    const pageColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-surface-page').trim();

    // Save previous body background and apply the page color
    prevBodyBgRef.current = document.body.style.backgroundColor;
    if (pageColor) {
      document.body.style.backgroundColor = pageColor;
    }

    // Canvas background — only on desktop, respects reduced motion
    if (
      animated &&
      definition.background &&
      window.innerWidth > 768 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const container = document.createElement('div');
      container.setAttribute('data-theme-surface-bg', resolved);
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText =
        'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
      document.body.prepend(container);
      bgContainerRef.current = container;

      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'width:100%;height:100%;';
      container.appendChild(canvas);

      bgCleanupRef.current = definition.background(canvas);
    }

    return () => {
      document.body.style.backgroundColor = prevBodyBgRef.current;
      if (bgCleanupRef.current) {
        bgCleanupRef.current();
        bgCleanupRef.current = null;
      }
      if (bgContainerRef.current) {
        bgContainerRef.current.remove();
        bgContainerRef.current = null;
      }
    };
  }, [global, animated, resolved, themes]);

  if (global) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        background: t.colorSurfacePage,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
