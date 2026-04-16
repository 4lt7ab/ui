import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types';

/** Props for the SectionLabel component. */
export interface SectionLabelProps extends BaseComponentProps {
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
  ...rest
}: SectionLabelProps): React.JSX.Element {
  return (
    <div
      id={rest.id}
      data-testid={rest['data-testid']}
      style={baseStyles}
    >
      {children}
    </div>
  );
}
