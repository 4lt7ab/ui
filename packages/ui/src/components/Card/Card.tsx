import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { HTMLAttributes, ReactNode } from 'react';

type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const paddingMap: Record<SpacingToken, string> = {
  xs: t.spaceXs,
  sm: t.spaceSm,
  md: t.spaceMd,
  lg: t.spaceLg,
  xl: t.spaceXl,
  '2xl': t.space2xl,
};

/** Visual treatment for the Card surface. */
export type CardVariant = 'default' | 'flat' | 'elevated';

/** A contained surface for grouping related content. */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual treatment.
   * - `default` — standard surface with border and small shadow
   * - `flat` — raised background with border, no shadow
   * - `elevated` — standard surface with border and medium shadow
   * @default 'default'
   */
  variant?: CardVariant;
  /** Inner padding using spacing tokens.
   * @default 'lg'
   */
  padding?: SpacingToken;
  /** Card content. */
  children: ReactNode;
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: t.colorSurface,
    border: `1px solid ${t.colorBorder}`,
    boxShadow: t.shadowSm,
  },
  flat: {
    background: t.colorSurfaceRaised,
    border: `1px solid ${t.colorBorder}`,
    boxShadow: 'none',
  },
  elevated: {
    background: t.colorSurface,
    border: `1px solid ${t.colorBorder}`,
    boxShadow: t.shadowMd,
  },
};

export const Card: React.ForwardRefExoticComponent<Omit<CardProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, CardProps>(
  function Card({
    variant = 'default',
    padding = 'lg',
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        style={{
          borderRadius: t.radiusLg,
          padding: paddingMap[padding],
          ...variantStyles[variant],
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
