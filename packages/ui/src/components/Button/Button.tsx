import { forwardRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

/** Visual style variant for buttons. */
export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost';

/** Controls padding and font size. */
export type ButtonSize = 'sm' | 'md' | 'lg';

/** A clickable button that triggers an action. */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant.
   * - `primary` — filled accent background, high emphasis
   * - `secondary` — subtle background with border, medium emphasis
   * - `destructive` — filled danger background, for irreversible actions
   * - `ghost` — transparent background, low emphasis
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /** Controls padding and font size.
   * - `sm` — compact, smaller text
   * - `md` — standard size
   * - `lg` — larger padding and text
   * @default 'md'
   */
  size?: ButtonSize;
  /** Show a loading spinner and disable interaction.
   * @default false
   */
  loading?: boolean;
  /** Render as a square icon-only button with equal padding.
   * @default false
   */
  iconOnly?: boolean;
  /** Button content. */
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

const SPINNER_STYLES_ID = 'alttab-button-spinner';
const spinnerCSS = /* css */ `
  @keyframes alttab-btn-spin {
    to { transform: rotate(360deg); }
  }
  .alttab-btn-spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: alttab-btn-spin 600ms linear infinite;
  }
`;

/** Size-based padding values for iconOnly mode (equal padding on all sides). */
const iconOnlyPadding: Record<ButtonSize, string> = {
  sm: t.spaceXs,
  md: t.spaceSm,
  lg: t.spaceSm,
};

export const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    iconOnly = false,
    children,
    style,
    disabled,
    ...props
  }, ref): React.JSX.Element {
    useInjectStyles(SPINNER_STYLES_ID, spinnerCSS);

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        aria-busy={loading || undefined}
        style={{
          ...baseStyles,
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...(iconOnly ? { padding: iconOnlyPadding[size], aspectRatio: '1', minWidth: 0 } : {}),
          ...(isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
          ...style,
        }}
        disabled={isDisabled}
        {...props}
      >
        {loading ? <span className="alttab-btn-spinner" /> : children}
      </button>
    );
  }
);
