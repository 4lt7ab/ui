/**
 * Theme type definitions.
 *
 * A theme is a complete mapping of every semantic token to a concrete value.
 * TypeScript enforces completeness — a partial theme is a type error.
 */

/** Every token a theme must define. Keys match semantic.ts naming (camelCase). */
export interface ThemeTokens {
  // Text
  colorText: string;
  colorTextSecondary: string;
  colorTextMuted: string;
  colorTextInverse: string;
  colorTextLink: string;
  colorTextPlaceholder: string;
  colorTextDisabled: string;

  // Surfaces
  colorSurface: string;
  colorSurfaceRaised: string;
  colorSurfaceOverlay: string;
  colorSurfaceInput: string;
  colorSurfaceDisabled: string;
  colorSurfacePage: string;

  // Borders
  colorBorder: string;
  colorBorderFocused: string;
  colorBorderError: string;

  // Actions
  colorActionPrimary: string;
  colorActionPrimaryHover: string;
  colorActionSecondary: string;
  colorActionSecondaryHover: string;
  colorActionDestructive: string;
  colorActionDestructiveHover: string;

  // Feedback
  colorSuccess: string;
  colorSuccessBg: string;
  colorWarning: string;
  colorWarningBg: string;
  colorError: string;
  colorErrorBg: string;
  colorInfo: string;
  colorInfoBg: string;

  // Spacing
  spaceXs: string;
  spaceSm: string;
  spaceMd: string;
  spaceLg: string;
  spaceXl: string;
  space2xl: string;

  // Radii
  radiusSm: string;
  radiusMd: string;
  radiusLg: string;
  radiusFull: string;

  // Shadows
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;

  // Typography
  fontSans: string;
  fontSerif: string;
  fontMono: string;
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
  /**
   * Optional canvas background animation. Called when the theme activates with a
   * full-viewport canvas element. Returns a cleanup function called on theme switch.
   * Only runs on screens wider than 768px and when prefers-reduced-motion is not set.
   */
  background?: (canvas: HTMLCanvasElement) => () => void;
}

/** Converts a camelCase token key to its CSS custom property name. */
export function tokenToCssProperty(key: string): string {
  return '--' + key.replace(/([A-Z0-9])/g, '-$1').toLowerCase();
}
