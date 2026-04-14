import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';

/** Props for the SectionLabel component. */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label content. */
  children: ReactNode;
}

const baseStyles: React.CSSProperties = {
  display: 'block',
  fontSize: t.fontSizeXs,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorTextSecondary,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};

/** Uppercase section heading for labeling content groups. */
export function SectionLabel({
  children,
  style,
  ...rest
}: SectionLabelProps): React.JSX.Element {
  return (
    <div {...rest} style={{ ...baseStyles, ...style }}>
      {children}
    </div>
  );
}
