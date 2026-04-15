import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';

/** Semantic color variant for badges. */
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

/** Size variant for badges. */
export type BadgeSize = 'default' | 'xs';

/** A small label for status, category, or metadata. Rendered as uppercase pill text. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge content (typically short text). */
  children: ReactNode;
  /** Color variant mapping to feedback tokens.
   * - `default` — neutral with border
   * - `success` — green tinted background
   * - `warning` — amber tinted background
   * - `error` — red tinted background
   * - `info` — blue tinted background
   * @default 'default'
   */
  variant?: BadgeVariant;
  /** Size variant.
   * - `default` — standard badge size with uppercase text
   * - `xs` — tiny monospace pill for inline metadata
   * @default 'default'
   */
  size?: BadgeSize;
  /** Custom CSS color override. When provided, variant styling is ignored.
   * The color is used directly for text and at low opacity for the background.
   */
  color?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
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

const xsBaseStyles: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '0.6rem',
  fontFamily: t.fontMono,
  fontWeight: t.fontWeightMedium,
  color: t.colorTextMuted,
  borderRadius: t.radiusFull,
  background: `color-mix(in srgb, ${t.colorBorder} 40%, transparent)`,
  padding: `0.0625rem ${t.spaceXs}`,
  lineHeight: t.lineHeightTight,
  letterSpacing: t.letterSpacingWide,
  textTransform: 'lowercase',
};

export const Badge: React.ForwardRefExoticComponent<Omit<BadgeProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({
    children,
    variant = 'default',
    size = 'default',
    color,
    style,
    ...rest
  }, ref): React.JSX.Element {
    const isXs = size === 'xs';
    const base = isXs ? xsBaseStyles : baseStyles;

    const colorStyles: React.CSSProperties | undefined = color
      ? { background: `color-mix(in srgb, ${color} 14%, transparent)`, color }
      : undefined;

    return (
      <span
        ref={ref}
        {...rest}
        style={{
          ...base,
          ...(colorStyles ?? variantStyles[variant]),
          ...style,
        }}
      >
        {children}
      </span>
    );
  }
);
