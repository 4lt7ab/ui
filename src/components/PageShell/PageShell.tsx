import type { ReactNode } from 'react';
import { semantic as t } from '../../tokens/semantic';

export interface PageShellProps {
  /** Navigation element, rendered above main content. */
  nav?: ReactNode;
  /** Footer element, rendered below main content. */
  footer?: ReactNode;
  children: ReactNode;
}

/**
 * Full-page skeleton — nav, main content area, footer.
 * Provides the vertical structure and base styling (background, font, color).
 * Content width is controlled by Container inside the children.
 */
export function PageShell({
  nav,
  footer,
  children,
}: PageShellProps): React.JSX.Element {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: t.colorSurface,
        fontFamily: t.fontSans,
        color: t.colorText,
        position: 'relative',
        zIndex: 1,
      }}
    >
      {nav}
      <main
        id="main-content"
        style={{
          flex: 1,
          paddingBlock: '3.5rem',
        }}
      >
        {children}
      </main>
      {footer}
    </div>
  );
}
