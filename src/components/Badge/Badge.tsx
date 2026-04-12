import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { ReactNode } from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    border: `1px solid ${t.colorBorder}`,
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
  fontSize: t.fontSizeXs,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({
    children,
    variant = 'default',
    style,
    ...rest
  }, ref): React.JSX.Element {
    return (
      <span
        ref={ref}
        {...rest}
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
);
