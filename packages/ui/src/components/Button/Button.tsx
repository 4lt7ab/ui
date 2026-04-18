import { forwardRef } from 'react';
import { semantic as t, useInjectStyles, Slot } from '@4lt7ab/core';
import type { ReactNode } from 'react';

/** Visual style variant for buttons. */
export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost';

/** Controls padding and font size. */
export type ButtonSize = 'sm' | 'md' | 'lg';

/** A clickable button that triggers an action. */
export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  name?: string;
  value?: string;
  tabIndex?: number;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  autoFocus?: boolean;
  'data-testid'?: string;
  id?: string;
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
  /**
   * Render as the single child element instead of a `<button>`. Merges
   * props, event handlers, className, style, and ref into the child.
   * Useful for rendering a Button-styled `<a>` or router `<Link>` without
   * a wrapper. Not compatible with `loading` (which renders a spinner
   * child).
   * @default false
   */
  asChild?: boolean;
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
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  },
  destructive: {
    background: t.colorActionDestructive,
    color: t.colorTextInverse,
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: t.colorText,
    border: `${t.borderWidthDefault} solid transparent`,
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
  transition: `background ${t.transitionBase}, border-color ${t.transitionBase}, opacity ${t.transitionBase}`,
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
    border: ${t.borderWidthThick} solid currentColor;
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

export const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, ButtonProps>(
  function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    iconOnly = false,
    asChild = false,
    children,
    disabled,
    onClick,
    type,
    form,
    name,
    value,
    tabIndex,
    autoFocus,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-controls': ariaControls,
    'aria-haspopup': ariaHasPopup,
    'data-testid': dataTestId,
  }, ref): React.JSX.Element {
    useInjectStyles(SPINNER_STYLES_ID, spinnerCSS);

    const isDisabled = disabled || loading;

    const style = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...(iconOnly ? { padding: iconOnlyPadding[size], aspectRatio: '1', minWidth: 0 } : {}),
      ...(isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
    };

    const commonProps = {
      tabIndex,
      id,
      onClick: onClick as React.MouseEventHandler<HTMLElement> | undefined,
      'aria-busy': loading || undefined,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
      'aria-haspopup': ariaHasPopup,
      'data-testid': dataTestId,
      style,
    };

    if (asChild) {
      return (
        <Slot
          ref={ref}
          {...commonProps}
          // When asChild renders an <a> or similar, disabled/loading can't apply
          // natively; reflect them via aria-disabled so assistive tech still sees
          // the state.
          aria-disabled={isDisabled || undefined}
        >
          {children as React.ReactElement}
        </Slot>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        form={form}
        name={name}
        value={value}
        autoFocus={autoFocus}
        disabled={isDisabled}
        {...commonProps}
      >
        {loading ? <span className="alttab-btn-spinner" /> : children}
      </button>
    );
  }
);
