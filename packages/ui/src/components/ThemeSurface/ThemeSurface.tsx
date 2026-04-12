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
    const { resolved, themes } = useTheme();
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

      return () => {
        document.body.style.backgroundColor = prevBodyBgRef.current;
      };
    }, [global, resolved, themes]);

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
