/**
 * Theme type definitions.
 *
 * A theme is a complete mapping of every semantic token to a concrete value.
 * TypeScript enforces completeness — a partial theme is a type error.
 */

/** Every token a theme must define. Keys match semantic.ts naming (camelCase). */
export interface ThemeTokens {
  // ── Text ──

  /** Primary text color used for body copy and headings. */
  colorText: string;
  /** Secondary text color for less prominent content. */
  colorTextSecondary: string;
  /** Muted text color for captions, help text, and de-emphasized content. */
  colorTextMuted: string;
  /** Text color used on filled backgrounds (e.g. primary buttons). */
  colorTextInverse: string;
  /** Color for hyperlinks and interactive text. */
  colorTextLink: string;
  /** Color for input placeholder text. */
  colorTextPlaceholder: string;
  /** Text color for disabled controls. */
  colorTextDisabled: string;

  // ── Surfaces ──

  /** Default component background (cards, inputs, modals). */
  colorSurface: string;
  /** Background for side panels and navigation. */
  colorSurfacePanel: string;
  /** Opaque counterpart to colorSurface. Identical on static themes; fully opaque on canvas themes where colorSurface is transparent. */
  colorSurfaceSolid: string;
  /** Slightly elevated surface for hover states and nested containers. */
  colorSurfaceRaised: string;
  /** Semi-transparent backdrop behind modals and drawers. */
  colorSurfaceOverlay: string;
  /** Background for text inputs, selects, and textareas. */
  colorSurfaceInput: string;
  /** Background for disabled input controls. */
  colorSurfaceDisabled: string;
  /** Full-page background color applied to `<body>`. */
  colorSurfacePage: string;

  // ── Borders ──

  /** Default border color for cards, inputs, and dividers. */
  colorBorder: string;
  /** Border color for focused inputs. */
  colorBorderFocused: string;
  /** Border color for inputs in an error state. */
  colorBorderError: string;

  // ── Actions ──

  /** Primary action color (button backgrounds, active indicators). */
  colorActionPrimary: string;
  /** Hover state for primary actions. */
  colorActionPrimaryHover: string;
  /** Secondary action color (ghost/outline button backgrounds). */
  colorActionSecondary: string;
  /** Hover state for secondary actions. */
  colorActionSecondaryHover: string;
  /** Destructive action color (delete buttons, danger zones). */
  colorActionDestructive: string;
  /** Hover state for destructive actions. */
  colorActionDestructiveHover: string;

  // ── Feedback ──

  /** Success foreground color (text, icons). */
  colorSuccess: string;
  /** Success tinted background for badges and alerts. */
  colorSuccessBg: string;
  /** Warning foreground color (text, icons). */
  colorWarning: string;
  /** Warning tinted background for badges and alerts. */
  colorWarningBg: string;
  /** Error foreground color (text, icons, validation messages). */
  colorError: string;
  /** Error tinted background for badges and alerts. */
  colorErrorBg: string;
  /** Informational foreground color (text, icons). */
  colorInfo: string;
  /** Informational tinted background for badges and alerts. */
  colorInfoBg: string;

  // ── Spacing ──

  /** Extra-small spacing (typically 4px). */
  spaceXs: string;
  /** Small spacing (typically 8px). */
  spaceSm: string;
  /** Medium spacing (typically 16px). */
  spaceMd: string;
  /** Large spacing (typically 24px). */
  spaceLg: string;
  /** Extra-large spacing (typically 32px). */
  spaceXl: string;
  /** 2x extra-large spacing (typically 48px). */
  space2xl: string;

  // ── Radii ──

  /** Small border radius for subtle rounding. */
  radiusSm: string;
  /** Medium border radius for inputs and buttons. */
  radiusMd: string;
  /** Large border radius for cards and modals. */
  radiusLg: string;
  /** Full border radius for pills and circular elements. */
  radiusFull: string;

  // ── Shadows ──

  /** Small shadow for cards and subtle elevation. */
  shadowSm: string;
  /** Medium shadow for dropdowns and popovers. */
  shadowMd: string;
  /** Large shadow for modals and dialogs. */
  shadowLg: string;

  // ── Typography — font families ──

  /** Sans-serif font family for UI text. */
  fontSans: string;
  /** Serif font family for headings and prose lead paragraphs. */
  fontSerif: string;
  /** Monospace font family for code and technical content. */
  fontMono: string;

  // ── Typography — font sizes ──

  /** Extra-small font size (typically 0.75rem). */
  fontSizeXs: string;
  /** Small font size (typically 0.875rem). */
  fontSizeSm: string;
  /** Base font size (typically 1rem). */
  fontSizeBase: string;
  /** Large font size (typically 1.125rem). */
  fontSizeLg: string;
  /** Extra-large font size (typically 1.25rem). */
  fontSizeXl: string;
  /** 2x extra-large font size (typically 1.5rem). */
  fontSize2xl: string;
  /** 3x extra-large font size (typically 1.875rem). */
  fontSize3xl: string;

  // ── Typography — line heights ──

  /** Tight line height for compact UI text (buttons, badges). */
  lineHeightTight: string;
  /** Base line height for body text. */
  lineHeightBase: string;
  /** Relaxed line height for long-form reading. */
  lineHeightRelaxed: string;

  // ── Typography — font weights ──

  /** Normal weight (400). */
  fontWeightNormal: string;
  /** Medium weight (500). */
  fontWeightMedium: string;
  /** Semibold weight (600). */
  fontWeightSemibold: string;
  /** Bold weight (700). */
  fontWeightBold: string;

  // ── Typography — letter spacing ──

  /** Tight letter spacing for large headings. */
  letterSpacingTight: string;
  /** Normal letter spacing for body text. */
  letterSpacingNormal: string;
  /** Wide letter spacing for uppercase labels and badges. */
  letterSpacingWide: string;

  // ── Focus ──

  /** Color of the focus ring outline. */
  focusRingColor: string;
  /** Width of the focus ring outline. */
  focusRingWidth: string;
  /** Offset between the element and the focus ring. */
  focusRingOffset: string;

  // ── Transitions ──

  /** Fast transition for option hovers (100ms ease). */
  transitionFast: string;
  /** Base transition for form inputs, buttons, most interactions (150ms ease). */
  transitionBase: string;
  /** Slow transition for modals, toasts, expanding cards (250ms ease). */
  transitionSlow: string;

  // ── Border widths ──

  /** Default border width (1px). */
  borderWidthDefault: string;
  /** Thick border width for emphasis (2px). */
  borderWidthThick: string;
  /** Accent border width for strong visual indicators (3px). */
  borderWidthAccent: string;

  // ── Z-index ──

  /** Z-index for dropdowns and popovers (50). */
  zIndexDropdown: string;
  /** Z-index for sticky headers and floating controls (100). */
  zIndexSticky: string;
  /** Z-index for modal overlays and dialogs (200). */
  zIndexModal: string;
  /** Z-index for toast notifications (500). */
  zIndexToast: string;
  /** Z-index ceiling for elements that must always be on top (9999). */
  zIndexMax: string;
}

/** A named theme definition. */
export interface ThemeDefinition {
  /** Unique identifier used in `setTheme()` and `data-theme` attribute. */
  name: string;
  /** Human-readable label for UI display. */
  label: string;
  /** Complete token values for this theme. */
  tokens: ThemeTokens;
  /**
   * Optional raw CSS injected when this theme is active, removed when it isn't.
   * Use for @keyframes, animations, pseudo-element effects — anything tokens can't express.
   * The selector `[data-theme="<name>"]` is available for scoping.
   */
  css?: string;
}

/** Converts a camelCase token key to its CSS custom property name. */
export function tokenToCssProperty(key: string): string {
  return '--' + key.replace(/([A-Z0-9])/g, '-$1').toLowerCase();
}
