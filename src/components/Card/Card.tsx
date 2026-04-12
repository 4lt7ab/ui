import { semantic as t } from '../../tokens/semantic';
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

export type CardVariant = 'default' | 'flat' | 'elevated';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual treatment. Default: 'default' */
  variant?: CardVariant;
  /** Inner padding. Default: 'lg' */
  padding?: SpacingToken;
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

export function Card({
  variant = 'default',
  padding = 'lg',
  children,
  style,
  ...props
}: CardProps): React.JSX.Element {
  return (
    <div
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
