import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';

export interface PageShellProps {
  children: ReactNode;
  /** Maximum width of the content area in pixels. @default 1100 */
  maxWidth?: number;
  /** Gap between child elements. @default 'md' */
  gap?: 'sm' | 'md' | 'lg';
  /** Whether to add top padding. @default true */
  topPadding?: boolean;
  /** Style override. */
  style?: CSSProperties;
}

const SCROLLBAR_ID = 'page-shell-scrollbar';
const SCROLLBAR_CSS = `
.page-shell::-webkit-scrollbar { display: none; }
.page-shell { scrollbar-width: none; }
`;

const gapMap = {
  sm: t.spaceSm,
  md: t.spaceMd,
  lg: t.spaceLg,
} as const;

export function PageShell({
  children,
  maxWidth = 1100,
  gap = 'md',
  topPadding = true,
  style,
}: PageShellProps): React.JSX.Element {
  useInjectStyles(SCROLLBAR_ID, SCROLLBAR_CSS);

  return (
    <div
      className="page-shell"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth,
        alignSelf: 'center',
        overflowY: 'auto',
        padding: `${topPadding ? t.spaceLg : '0'} ${t.spaceLg}`,
        gap: gapMap[gap],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
