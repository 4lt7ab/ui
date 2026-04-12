/**
 * Semantic tokens — purpose-mapped CSS custom property references.
 * These are the only tokens components should use.
 *
 * Each value is a `var(--...)` reference resolved by theme CSS files.
 * This means components are theme-agnostic by construction.
 */

export const semantic = {
  // Text
  colorText: 'var(--color-text)',
  colorTextSecondary: 'var(--color-text-secondary)',
  colorTextMuted: 'var(--color-text-muted)',
  colorTextInverse: 'var(--color-text-inverse)',
  colorTextLink: 'var(--color-text-link)',
  colorTextPlaceholder: 'var(--color-text-placeholder)',
  colorTextDisabled: 'var(--color-text-disabled)',

  // Surfaces
  colorSurface: 'var(--color-surface)',
  colorSurfaceRaised: 'var(--color-surface-raised)',
  colorSurfaceOverlay: 'var(--color-surface-overlay)',
  colorSurfaceInput: 'var(--color-surface-input)',
  colorSurfaceDisabled: 'var(--color-surface-disabled)',
  colorSurfacePage: 'var(--color-surface-page)',

  // Borders
  colorBorder: 'var(--color-border)',
  colorBorderFocused: 'var(--color-border-focused)',
  colorBorderError: 'var(--color-border-error)',

  // Actions
  colorActionPrimary: 'var(--color-action-primary)',
  colorActionPrimaryHover: 'var(--color-action-primary-hover)',
  colorActionSecondary: 'var(--color-action-secondary)',
  colorActionSecondaryHover: 'var(--color-action-secondary-hover)',
  colorActionDestructive: 'var(--color-action-destructive)',
  colorActionDestructiveHover: 'var(--color-action-destructive-hover)',

  // Feedback
  colorSuccess: 'var(--color-success)',
  colorSuccessBg: 'var(--color-success-bg)',
  colorWarning: 'var(--color-warning)',
  colorWarningBg: 'var(--color-warning-bg)',
  colorError: 'var(--color-error)',
  colorErrorBg: 'var(--color-error-bg)',
  colorInfo: 'var(--color-info)',
  colorInfoBg: 'var(--color-info-bg)',

  // Spacing (semantic aliases)
  spaceXs: 'var(--space-xs)',
  spaceSm: 'var(--space-sm)',
  spaceMd: 'var(--space-md)',
  spaceLg: 'var(--space-lg)',
  spaceXl: 'var(--space-xl)',
  space2xl: 'var(--space-2xl)',

  // Radii
  radiusSm: 'var(--radius-sm)',
  radiusMd: 'var(--radius-md)',
  radiusLg: 'var(--radius-lg)',
  radiusFull: 'var(--radius-full)',

  // Shadows
  shadowSm: 'var(--shadow-sm)',
  shadowMd: 'var(--shadow-md)',
  shadowLg: 'var(--shadow-lg)',

  // Typography
  fontSans: 'var(--font-sans)',
  fontSerif: 'var(--font-serif)',
  fontMono: 'var(--font-mono)',
} as const;

export type SemanticTokens = typeof semantic;
