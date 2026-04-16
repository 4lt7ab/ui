import { semantic as t } from '@4lt7ab/core';

/** Spacing token keys that map to semantic spacing CSS variables. */
export type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** Radius token keys that map to semantic border-radius CSS variables. */
export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'full';

/** Shadow token keys that map to semantic box-shadow CSS variables. */
export type ShadowToken = 'sm' | 'md' | 'lg';

export const spacingMap: Record<SpacingToken, string> = {
  xs: t.spaceXs,
  sm: t.spaceSm,
  md: t.spaceMd,
  lg: t.spaceLg,
  xl: t.spaceXl,
  '2xl': t.space2xl,
};

export const radiusMap: Record<RadiusToken, string> = {
  none: '0',
  sm: t.radiusSm,
  md: t.radiusMd,
  lg: t.radiusLg,
  full: t.radiusFull,
};

export const shadowMap: Record<ShadowToken, string> = {
  sm: t.shadowSm,
  md: t.shadowMd,
  lg: t.shadowLg,
};
