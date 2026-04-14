import { forwardRef, useEffect, useRef, type ReactNode } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { useTheme } from '@4lt7ab/core';

export interface ThemeSurfaceProps {
  children: ReactNode;
  /**
   * When true, applies the page background to document.body.
   * When false (default), renders a div with the page background color.
   *
   * @default false
   */
  global?: boolean;
  /** Additional inline styles for the wrapper div (only used when global=false). */
  style?: React.CSSProperties;
}

/**
 * Applies the theme's page background color.
 *
 * Use `global` to set the body background.
 * Without `global`, renders a styled div with the page background.
 */
export const ThemeSurface: React.ForwardRefExoticComponent<Omit<ThemeSurfaceProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ThemeSurfaceProps>(
  function ThemeSurface({
    children,
    global = false,
    style,
  }, ref): React.JSX.Element {
    const { resolved } = useTheme();
    const prevBodyBgRef = useRef<string>('');
    const prevBodyColorRef = useRef<string>('');

    useEffect(() => {
      if (!global) return;

      // Use CSS variables directly so the browser resolves them dynamically,
      // avoiding race conditions with ThemeProvider's token application.
      prevBodyBgRef.current = document.body.style.backgroundColor;
      prevBodyColorRef.current = document.body.style.color;
      document.body.style.backgroundColor = 'var(--color-surface-page)';
      document.body.style.color = 'var(--color-text)';

      return () => {
        document.body.style.backgroundColor = prevBodyBgRef.current;
        document.body.style.color = prevBodyColorRef.current;
      };
    }, [global, resolved]);

    if (global) {
      return <>{children}</>;
    }

    return (
      <div
        ref={ref}
        style={{
          background: t.colorSurfacePage,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);
