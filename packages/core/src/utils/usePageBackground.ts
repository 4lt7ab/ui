import { useEffect, useRef } from 'react';
import { useTheme } from '../themes/ThemeProvider';

/**
 * Paint the active theme's page background onto `document.body`.
 *
 * Writes `background-color: var(--color-surface-page)` and
 * `color: var(--color-text)` to the body on mount and restores the previous
 * inline values on unmount. Uses CSS variables directly so the browser
 * resolves them dynamically, avoiding race conditions with ThemeProvider's
 * token application when the theme changes.
 *
 * This replaces the body-painting capability that previously required a
 * wrapper component; wrapping children in a fragment just to run a side
 * effect was never the right abstraction.
 *
 * @example
 * ```tsx
 * function RootLayout({ children }) {
 *   usePageBackground();
 *   return <>{children}</>;
 * }
 * ```
 */
export function usePageBackground(): void {
  const { resolved } = useTheme();
  const prevBodyBgRef = useRef<string>('');
  const prevBodyColorRef = useRef<string>('');

  useEffect(() => {
    prevBodyBgRef.current = document.body.style.backgroundColor;
    prevBodyColorRef.current = document.body.style.color;
    document.body.style.backgroundColor = 'var(--color-surface-page)';
    document.body.style.color = 'var(--color-text)';

    return () => {
      document.body.style.backgroundColor = prevBodyBgRef.current;
      document.body.style.color = prevBodyColorRef.current;
    };
  }, [resolved]);
}
