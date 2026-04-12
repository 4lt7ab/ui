import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties, ReactNode } from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  style?: CSSProperties;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: t.colorSurfaceRaised,
    color: t.colorTextSecondary,
  },
  success: {
    background: t.colorSuccessBg,
    color: t.colorSuccess,
  },
  warning: {
    background: t.colorWarningBg,
    color: t.colorWarning,
  },
  error: {
    background: t.colorErrorBg,
    color: t.colorError,
  },
  info: {
    background: t.colorInfoBg,
    color: t.colorInfo,
  },
};

const baseStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: `${t.spaceXs} ${t.spaceSm}`,
  borderRadius: t.radiusFull,
  fontSize: '0.75rem',
  fontWeight: 600,
  fontFamily: t.fontSans,
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
};

export function Badge({
  children,
  variant = 'default',
  style,
}: BadgeProps): React.JSX.Element {
  return (
    <span
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
