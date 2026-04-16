import { forwardRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { HTMLAttributes, ReactNode } from 'react';
import { spacingMap } from '../../types';
import type { SpacingToken } from '../../types';

const paddingMap: Record<SpacingToken, string> = spacingMap;

/** Visual treatment for the Card surface. */
export type CardVariant = 'default' | 'flat' | 'elevated' | 'live';

/** A contained surface for grouping related content. */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual treatment.
   * - `default` — standard surface with border and small shadow
   * - `flat` — raised background with border, no shadow
   * - `elevated` — standard surface with border and medium shadow
   * - `live` — subtle pulse/glow animation on the border for real-time or active state
   * @default 'default'
   */
  variant?: CardVariant;
  /** Inner padding using spacing tokens.
   * @default 'lg'
   */
  padding?: SpacingToken;
  /** Enable interactive hover state with border highlight and lift effect.
   * @default false
   */
  hover?: boolean;
  /** Card content. */
  children: ReactNode;
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: t.colorSurfaceSolid,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    boxShadow: t.shadowSm,
  },
  flat: {
    background: t.colorSurfaceRaised,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    boxShadow: 'none',
  },
  elevated: {
    background: t.colorSurfaceSolid,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    boxShadow: t.shadowMd,
  },
  live: {
    background: t.colorSurfaceSolid,
    border: `${t.borderWidthDefault} solid ${t.colorBorderFocused}`,
    boxShadow: t.shadowSm,
  },
};

// ── Injected styles ──

const HOVER_STYLES_ID = '4lt7ab-card-hover';
const HOVER_STYLES_CSS = `
[data-card-hover] {
  cursor: pointer;
  transition: transform ${t.transitionSlow}, border-color ${t.transitionSlow}, box-shadow ${t.transitionSlow};
}
[data-card-hover]:hover {
  transform: translateY(-2px);
  border-color: ${t.colorBorderFocused};
  box-shadow: ${t.shadowMd};
}
`;

const LIVE_STYLES_ID = '4lt7ab-card-live';
const LIVE_STYLES_CSS = `
@keyframes card-live-pulse {
  0%, 100% { border-color: ${t.colorBorderFocused}; box-shadow: ${t.shadowSm}; }
  50% { border-color: ${t.colorActionPrimary}; box-shadow: 0 0 8px ${t.colorActionPrimary}; }
}
[data-card-live] {
  animation: card-live-pulse 2.5s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-card-live] {
    animation: none;
  }
}
`;

export const Card: React.ForwardRefExoticComponent<Omit<CardProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, CardProps>(
  function Card({
    variant = 'default',
    padding = 'lg',
    hover = false,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    useInjectStyles(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    useInjectStyles(LIVE_STYLES_ID, LIVE_STYLES_CSS);

    return (
      <div
        ref={ref}
        data-card-hover={hover || undefined}
        data-card-live={variant === 'live' || undefined}
        style={{
          borderRadius: t.radiusLg,
          padding: paddingMap[padding],
          color: t.colorText,
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
