import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../../types';

/** Semantic color variant for badges. */
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

/** Size variant for badges. */
export type BadgeSize = 'default' | 'xs';

/** A small label for status, category, or metadata. Rendered as uppercase pill text. */
export interface BadgeProps extends BaseComponentProps {
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
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    color: t.colorTextSecondary,
  },
  primary: {
    background: `color-mix(in srgb, ${t.colorActionPrimary} 14%, transparent)`,
    color: t.colorActionPrimary,
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
    ...rest
  }, ref): React.JSX.Element {
    const isXs = size === 'xs';
    const base = isXs ? xsBaseStyles : baseStyles;

    return (
      <span
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        style={{
          ...base,
          ...variantStyles[variant],
        }}
      >
        {children}
      </span>
    );
  }
);
