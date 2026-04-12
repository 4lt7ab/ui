/**
 * Semantic tokens — purpose-mapped CSS custom property references.
 * These are the only tokens components should use.
 *
 * Each value is a `var(--...)` reference resolved by theme CSS files.
 * This means components are theme-agnostic by construction.
 */

export const semantic = {
  // ── Text ──

  /** Primary text color for body copy and headings. */
  colorText: 'var(--color-text)',
  /** Secondary text color for less prominent content. */
  colorTextSecondary: 'var(--color-text-secondary)',
  /** Muted text color for captions, help text, and de-emphasized content. */
  colorTextMuted: 'var(--color-text-muted)',
  /** Text color on filled backgrounds (e.g. primary buttons). */
  colorTextInverse: 'var(--color-text-inverse)',
  /** Hyperlink and interactive text color. */
  colorTextLink: 'var(--color-text-link)',
  /** Input placeholder text color. */
  colorTextPlaceholder: 'var(--color-text-placeholder)',
  /** Disabled control text color. */
  colorTextDisabled: 'var(--color-text-disabled)',

  // ── Surfaces ──

  /** Default component background (cards, inputs, modals). */
  colorSurface: 'var(--color-surface)',
  /** Side panel and navigation background. */
  colorSurfacePanel: 'var(--color-surface-panel)',
  /** Slightly elevated surface for hover states and nested containers. */
  colorSurfaceRaised: 'var(--color-surface-raised)',
  /** Semi-transparent backdrop behind modals and drawers. */
  colorSurfaceOverlay: 'var(--color-surface-overlay)',
  /** Background for text inputs, selects, and textareas. */
  colorSurfaceInput: 'var(--color-surface-input)',
  /** Background for disabled input controls. */
  colorSurfaceDisabled: 'var(--color-surface-disabled)',
  /** Full-page background color. */
  colorSurfacePage: 'var(--color-surface-page)',

  // ── Borders ──

  /** Default border for cards, inputs, and dividers. */
  colorBorder: 'var(--color-border)',
  /** Border for focused inputs. */
  colorBorderFocused: 'var(--color-border-focused)',
  /** Border for inputs in error state. */
  colorBorderError: 'var(--color-border-error)',

  // ── Actions ──

  /** Primary action color (button fills, active indicators). */
  colorActionPrimary: 'var(--color-action-primary)',
  /** Hover state for primary actions. */
  colorActionPrimaryHover: 'var(--color-action-primary-hover)',
  /** Secondary action background. */
  colorActionSecondary: 'var(--color-action-secondary)',
  /** Hover state for secondary actions. */
  colorActionSecondaryHover: 'var(--color-action-secondary-hover)',
  /** Destructive action color (delete, danger). */
  colorActionDestructive: 'var(--color-action-destructive)',
  /** Hover state for destructive actions. */
  colorActionDestructiveHover: 'var(--color-action-destructive-hover)',

  // ── Feedback ──

  /** Success foreground color. */
  colorSuccess: 'var(--color-success)',
  /** Success tinted background. */
  colorSuccessBg: 'var(--color-success-bg)',
  /** Warning foreground color. */
  colorWarning: 'var(--color-warning)',
  /** Warning tinted background. */
  colorWarningBg: 'var(--color-warning-bg)',
  /** Error foreground color. */
  colorError: 'var(--color-error)',
  /** Error tinted background. */
  colorErrorBg: 'var(--color-error-bg)',
  /** Informational foreground color. */
  colorInfo: 'var(--color-info)',
  /** Informational tinted background. */
  colorInfoBg: 'var(--color-info-bg)',

  // ── Spacing ──

  /** Extra-small spacing (typically 4px). */
  spaceXs: 'var(--space-xs)',
  /** Small spacing (typically 8px). */
  spaceSm: 'var(--space-sm)',
  /** Medium spacing (typically 16px). */
  spaceMd: 'var(--space-md)',
  /** Large spacing (typically 24px). */
  spaceLg: 'var(--space-lg)',
  /** Extra-large spacing (typically 32px). */
  spaceXl: 'var(--space-xl)',
  /** 2x extra-large spacing (typically 48px). */
  space2xl: 'var(--space-2xl)',

  // ── Radii ──

  /** Small border radius for subtle rounding. */
  radiusSm: 'var(--radius-sm)',
  /** Medium border radius for inputs and buttons. */
  radiusMd: 'var(--radius-md)',
  /** Large border radius for cards and modals. */
  radiusLg: 'var(--radius-lg)',
  /** Full border radius for pills and circles. */
  radiusFull: 'var(--radius-full)',

  // ── Shadows ──

  /** Small shadow for cards and subtle elevation. */
  shadowSm: 'var(--shadow-sm)',
  /** Medium shadow for dropdowns and popovers. */
  shadowMd: 'var(--shadow-md)',
  /** Large shadow for modals and dialogs. */
  shadowLg: 'var(--shadow-lg)',

  // ── Typography — font families ──

  /** Sans-serif font family for UI text. */
  fontSans: 'var(--font-sans)',
  /** Serif font family for headings and prose. */
  fontSerif: 'var(--font-serif)',
  /** Monospace font family for code. */
  fontMono: 'var(--font-mono)',

  // ── Typography — font sizes ──

  /** Extra-small font size. */
  fontSizeXs: 'var(--font-size-xs)',
  /** Small font size. */
  fontSizeSm: 'var(--font-size-sm)',
  /** Base font size. */
  fontSizeBase: 'var(--font-size-base)',
  /** Large font size. */
  fontSizeLg: 'var(--font-size-lg)',
  /** Extra-large font size. */
  fontSizeXl: 'var(--font-size-xl)',
  /** 2x extra-large font size. */
  fontSize2xl: 'var(--font-size-2xl)',
  /** 3x extra-large font size. */
  fontSize3xl: 'var(--font-size-3xl)',

  // ── Typography — line heights ──

  /** Tight line height for compact UI text. */
  lineHeightTight: 'var(--line-height-tight)',
  /** Base line height for body text. */
  lineHeightBase: 'var(--line-height-base)',
  /** Relaxed line height for long-form reading. */
  lineHeightRelaxed: 'var(--line-height-relaxed)',

  // ── Typography — font weights ──

  /** Normal weight (400). */
  fontWeightNormal: 'var(--font-weight-normal)',
  /** Medium weight (500). */
  fontWeightMedium: 'var(--font-weight-medium)',
  /** Semibold weight (600). */
  fontWeightSemibold: 'var(--font-weight-semibold)',
  /** Bold weight (700). */
  fontWeightBold: 'var(--font-weight-bold)',

  // ── Typography — letter spacing ──

  /** Tight letter spacing for large headings. */
  letterSpacingTight: 'var(--letter-spacing-tight)',
  /** Normal letter spacing for body text. */
  letterSpacingNormal: 'var(--letter-spacing-normal)',
  /** Wide letter spacing for uppercase labels. */
  letterSpacingWide: 'var(--letter-spacing-wide)',

  // ── Focus ──

  /** Focus ring outline color. */
  focusRingColor: 'var(--focus-ring-color)',
  /** Focus ring outline width. */
  focusRingWidth: 'var(--focus-ring-width)',
  /** Offset between element and focus ring. */
  focusRingOffset: 'var(--focus-ring-offset)',
} as const;

export type SemanticTokens = typeof semantic;
