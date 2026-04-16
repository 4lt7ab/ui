import { semantic as t } from '@4lt7ab/core';

// ── Base props ──

/**
 * Minimal prop set every component accepts. Replaces `extends HTMLAttributes`
 * to prevent consumers from overriding styles or behavior via escape hatches.
 *
 * Aria props are NOT included here — add them per-component based on what
 * actually makes sense (interactive, structural, or decorative).
 */
export interface BaseComponentProps {
  id?: string;
  'data-testid'?: string;
}

// ── Layout unions ──

/** Constrained flexbox align-items values. */
export type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/** Constrained flexbox justify-content values. */
export type JustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

/** Maps shorthand align/justify names to CSS values. */
export const alignMap: Record<AlignItems, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

export const justifyMap: Record<JustifyContent, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
};

// ── Semantic colors ──

/** Named color tokens for components that accept a color prop. */
export type SemanticColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'muted';

/** Resolves a SemanticColor to a theme token CSS variable. */
export const semanticColorMap: Record<SemanticColor, string> = {
  primary: t.colorActionPrimary,
  success: t.colorSuccess,
  warning: t.colorWarning,
  error: t.colorError,
  info: t.colorInfo,
  muted: t.colorTextMuted,
};

// ── Existing token types ──

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
