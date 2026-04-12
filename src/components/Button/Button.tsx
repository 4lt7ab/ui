import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: t.colorActionPrimary,
    color: t.colorTextInverse,
    border: 'none',
  },
  secondary: {
    background: t.colorActionSecondary,
    color: t.colorText,
    border: `1px solid ${t.colorBorder}`,
  },
  destructive: {
    background: t.colorActionDestructive,
    color: t.colorTextInverse,
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: t.colorText,
    border: '1px solid transparent',
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: `${t.spaceXs} ${t.spaceSm}`,
    fontSize: t.fontSizeSm,
    lineHeight: t.lineHeightTight,
  },
  md: {
    padding: `${t.spaceSm} ${t.spaceMd}`,
    fontSize: t.fontSizeSm,
    lineHeight: t.lineHeightTight,
  },
  lg: {
    padding: `${t.spaceSm} ${t.spaceLg}`,
    fontSize: t.fontSizeBase,
    lineHeight: t.lineHeightBase,
  },
};

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: t.spaceSm,
  borderRadius: t.radiusMd,
  fontFamily: t.fontSans,
  fontWeight: t.fontWeightMedium,
  cursor: 'pointer',
  transition: 'background 150ms ease, border-color 150ms ease, opacity 150ms ease',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({
    variant = 'primary',
    size = 'md',
    children,
    style,
    disabled,
    ...props
  }, ref): React.JSX.Element {
    return (
      <button
        ref={ref}
        style={{
          ...baseStyles,
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
          ...style,
        }}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
