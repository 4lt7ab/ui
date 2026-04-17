/**
* Injects a <style> tag into <head>, identified by id.
* Updates the tag's content if the CSS has changed.
* Styles persist after unmount — they're inert when no matching elements exist.
*/
declare function useInjectStyles(id: string, css: string): void;
import { CSSProperties } from "react";
interface StaggerOptions {
	/** Delay between each item in ms. @default 30 */
	delayMs?: number;
	/** Maximum total delay in ms (caps the stagger). @default 300 */
	maxMs?: number;
	/** Animation duration in seconds. @default 0.3 */
	duration?: number;
}
/**
* Returns CSSProperties for a staggered fadeInUp entrance animation.
* Spread onto a list item's style prop: `style={{ ...staggerStyle(i) }}`
*
* Requires ThemeProvider to be mounted (it injects the fadeInUp keyframe).
*/
declare function staggerStyle(index: number, options?: StaggerOptions): CSSProperties;
/**
* Primitive tokens — raw design values with no semantic meaning.
* These are the palette. Components never reference these directly.
*/
declare const colors: {
	readonly gray50: "#f9fafb";
	readonly gray100: "#f3f4f6";
	readonly gray200: "#e5e7eb";
	readonly gray300: "#d1d5db";
	readonly gray400: "#9ca3af";
	readonly gray500: "#6b7280";
	readonly gray600: "#4b5563";
	readonly gray700: "#374151";
	readonly gray800: "#1f2937";
	readonly gray900: "#111827";
	readonly gray950: "#030712";
	readonly blue50: "#eff6ff";
	readonly blue100: "#dbeafe";
	readonly blue200: "#bfdbfe";
	readonly blue300: "#93c5fd";
	readonly blue400: "#60a5fa";
	readonly blue500: "#3b82f6";
	readonly blue600: "#2563eb";
	readonly blue700: "#1d4ed8";
	readonly blue800: "#1e40af";
	readonly blue900: "#1e3a8a";
	readonly red50: "#fef2f2";
	readonly red100: "#fee2e2";
	readonly red400: "#f87171";
	readonly red500: "#ef4444";
	readonly red600: "#dc2626";
	readonly red700: "#b91c1c";
	readonly green50: "#f0fdf4";
	readonly green100: "#dcfce7";
	readonly green400: "#4ade80";
	readonly green500: "#22c55e";
	readonly green600: "#16a34a";
	readonly green700: "#15803d";
	readonly amber50: "#fffbeb";
	readonly amber100: "#fef3c7";
	readonly amber400: "#fbbf24";
	readonly amber500: "#f59e0b";
	readonly amber600: "#d97706";
	readonly white: "#ffffff";
	readonly black: "#000000";
};
declare const spacing: {
	readonly 0: "0";
	readonly px: "1px";
	readonly 0.5: "0.125rem";
	readonly 1: "0.25rem";
	readonly 1.5: "0.375rem";
	readonly 2: "0.5rem";
	readonly 2.5: "0.625rem";
	readonly 3: "0.75rem";
	readonly 4: "1rem";
	readonly 5: "1.25rem";
	readonly 6: "1.5rem";
	readonly 8: "2rem";
	readonly 10: "2.5rem";
	readonly 12: "3rem";
	readonly 16: "4rem";
	readonly 20: "5rem";
	readonly 24: "6rem";
};
declare const radii: {
	readonly none: "0";
	readonly sm: "0.125rem";
	readonly base: "0.25rem";
	readonly md: "0.375rem";
	readonly lg: "0.5rem";
	readonly xl: "0.75rem";
	readonly "2xl": "1rem";
	readonly "3xl": "1.5rem";
	readonly full: "9999px";
};
declare const shadows: {
	readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
	readonly base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
	readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
	readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
	readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
	readonly none: "none";
};
type Colors = typeof colors;
type Spacing = typeof spacing;
type Radii = typeof radii;
type Shadows = typeof shadows;
/**
* Typography tokens — font families, sizes, weights, line-heights.
*/
declare const typography: {
	readonly fontFamily: {
		readonly sans: readonly ["Inter", "system-ui", "-apple-system", "sans-serif"];
		readonly serif: readonly ["Lora", "Georgia", "Times New Roman", "serif"];
		readonly mono: readonly ["Fira Code", "ui-monospace", "monospace"];
	};
	readonly fontSize: {
		readonly xs: "0.75rem";
		readonly sm: "0.875rem";
		readonly base: "1rem";
		readonly lg: "1.125rem";
		readonly xl: "1.25rem";
		readonly "2xl": "1.5rem";
		readonly "3xl": "1.875rem";
		readonly "4xl": "2.25rem";
	};
	readonly fontWeight: {
		readonly normal: 400;
		readonly medium: 500;
		readonly semibold: 600;
		readonly bold: 700;
	};
	readonly lineHeight: {
		readonly none: 1;
		readonly tight: 1.25;
		readonly snug: 1.375;
		readonly normal: 1.5;
		readonly relaxed: 1.625;
		readonly loose: 2;
	};
	readonly letterSpacing: {
		readonly tighter: "-0.05em";
		readonly tight: "-0.025em";
		readonly normal: "0em";
		readonly wide: "0.025em";
		readonly wider: "0.05em";
	};
};
type Typography = typeof typography;
/**
* Semantic tokens — purpose-mapped CSS custom property references.
* These are the only tokens components should use.
*
* Each value is a `var(--...)` reference resolved by theme CSS files.
* This means components are theme-agnostic by construction.
*/
declare const semantic: {
	/** Primary text color for body copy and headings. */
	readonly colorText: "var(--color-text)";
	/** Secondary text color for less prominent content. */
	readonly colorTextSecondary: "var(--color-text-secondary)";
	/** Muted text color for captions, help text, and de-emphasized content. */
	readonly colorTextMuted: "var(--color-text-muted)";
	/** Text color on filled backgrounds (e.g. primary buttons). */
	readonly colorTextInverse: "var(--color-text-inverse)";
	/** Hyperlink and interactive text color. */
	readonly colorTextLink: "var(--color-text-link)";
	/** Input placeholder text color. */
	readonly colorTextPlaceholder: "var(--color-text-placeholder)";
	/** Disabled control text color. */
	readonly colorTextDisabled: "var(--color-text-disabled)";
	/** Default component background (cards, inputs, modals). */
	readonly colorSurface: "var(--color-surface)";
	/** Side panel and navigation background. */
	readonly colorSurfacePanel: "var(--color-surface-panel)";
	/** Opaque counterpart to colorSurface. */
	readonly colorSurfaceSolid: "var(--color-surface-solid)";
	/** Slightly elevated surface for hover states and nested containers. */
	readonly colorSurfaceRaised: "var(--color-surface-raised)";
	/** Semi-transparent backdrop behind modals and drawers. */
	readonly colorSurfaceOverlay: "var(--color-surface-overlay)";
	/** Background for text inputs, selects, and textareas. */
	readonly colorSurfaceInput: "var(--color-surface-input)";
	/** Background for disabled input controls. */
	readonly colorSurfaceDisabled: "var(--color-surface-disabled)";
	/** Full-page background color. */
	readonly colorSurfacePage: "var(--color-surface-page)";
	/** Default border for cards, inputs, and dividers. */
	readonly colorBorder: "var(--color-border)";
	/** Border for focused inputs. */
	readonly colorBorderFocused: "var(--color-border-focused)";
	/** Border for inputs in error state. */
	readonly colorBorderError: "var(--color-border-error)";
	/** Primary action color (button fills, active indicators). */
	readonly colorActionPrimary: "var(--color-action-primary)";
	/** Hover state for primary actions. */
	readonly colorActionPrimaryHover: "var(--color-action-primary-hover)";
	/** Secondary action background. */
	readonly colorActionSecondary: "var(--color-action-secondary)";
	/** Hover state for secondary actions. */
	readonly colorActionSecondaryHover: "var(--color-action-secondary-hover)";
	/** Destructive action color (delete, danger). */
	readonly colorActionDestructive: "var(--color-action-destructive)";
	/** Hover state for destructive actions. */
	readonly colorActionDestructiveHover: "var(--color-action-destructive-hover)";
	/** Success foreground color. */
	readonly colorSuccess: "var(--color-success)";
	/** Success tinted background. */
	readonly colorSuccessBg: "var(--color-success-bg)";
	/** Warning foreground color. */
	readonly colorWarning: "var(--color-warning)";
	/** Warning tinted background. */
	readonly colorWarningBg: "var(--color-warning-bg)";
	/** Error foreground color. */
	readonly colorError: "var(--color-error)";
	/** Error tinted background. */
	readonly colorErrorBg: "var(--color-error-bg)";
	/** Informational foreground color. */
	readonly colorInfo: "var(--color-info)";
	/** Informational tinted background. */
	readonly colorInfoBg: "var(--color-info-bg)";
	/** Extra-small spacing (typically 4px). */
	readonly spaceXs: "var(--space-xs)";
	/** Small spacing (typically 8px). */
	readonly spaceSm: "var(--space-sm)";
	/** Medium spacing (typically 16px). */
	readonly spaceMd: "var(--space-md)";
	/** Large spacing (typically 24px). */
	readonly spaceLg: "var(--space-lg)";
	/** Extra-large spacing (typically 32px). */
	readonly spaceXl: "var(--space-xl)";
	/** 2x extra-large spacing (typically 48px). */
	readonly space2xl: "var(--space-2xl)";
	/** Small border radius for subtle rounding. */
	readonly radiusSm: "var(--radius-sm)";
	/** Medium border radius for inputs and buttons. */
	readonly radiusMd: "var(--radius-md)";
	/** Large border radius for cards and modals. */
	readonly radiusLg: "var(--radius-lg)";
	/** Full border radius for pills and circles. */
	readonly radiusFull: "var(--radius-full)";
	/** Small shadow for cards and subtle elevation. */
	readonly shadowSm: "var(--shadow-sm)";
	/** Medium shadow for dropdowns and popovers. */
	readonly shadowMd: "var(--shadow-md)";
	/** Large shadow for modals and dialogs. */
	readonly shadowLg: "var(--shadow-lg)";
	/** Sans-serif font family for UI text. */
	readonly fontSans: "var(--font-sans)";
	/** Serif font family for headings and prose. */
	readonly fontSerif: "var(--font-serif)";
	/** Monospace font family for code. */
	readonly fontMono: "var(--font-mono)";
	/** Extra-small font size. */
	readonly fontSizeXs: "var(--font-size-xs)";
	/** Small font size. */
	readonly fontSizeSm: "var(--font-size-sm)";
	/** Base font size. */
	readonly fontSizeBase: "var(--font-size-base)";
	/** Large font size. */
	readonly fontSizeLg: "var(--font-size-lg)";
	/** Extra-large font size. */
	readonly fontSizeXl: "var(--font-size-xl)";
	/** 2x extra-large font size. */
	readonly fontSize2xl: "var(--font-size-2xl)";
	/** 3x extra-large font size. */
	readonly fontSize3xl: "var(--font-size-3xl)";
	/** Tight line height for compact UI text. */
	readonly lineHeightTight: "var(--line-height-tight)";
	/** Base line height for body text. */
	readonly lineHeightBase: "var(--line-height-base)";
	/** Relaxed line height for long-form reading. */
	readonly lineHeightRelaxed: "var(--line-height-relaxed)";
	/** Normal weight (400). */
	readonly fontWeightNormal: "var(--font-weight-normal)";
	/** Medium weight (500). */
	readonly fontWeightMedium: "var(--font-weight-medium)";
	/** Semibold weight (600). */
	readonly fontWeightSemibold: "var(--font-weight-semibold)";
	/** Bold weight (700). */
	readonly fontWeightBold: "var(--font-weight-bold)";
	/** Tight letter spacing for large headings. */
	readonly letterSpacingTight: "var(--letter-spacing-tight)";
	/** Normal letter spacing for body text. */
	readonly letterSpacingNormal: "var(--letter-spacing-normal)";
	/** Wide letter spacing for uppercase labels. */
	readonly letterSpacingWide: "var(--letter-spacing-wide)";
	/** Focus ring outline color. */
	readonly focusRingColor: "var(--focus-ring-color)";
	/** Focus ring outline width. */
	readonly focusRingWidth: "var(--focus-ring-width)";
	/** Offset between element and focus ring. */
	readonly focusRingOffset: "var(--focus-ring-offset)";
	/** Fast transition for option hovers. */
	readonly transitionFast: "var(--transition-fast)";
	/** Base transition for form inputs, buttons, most interactions. */
	readonly transitionBase: "var(--transition-base)";
	/** Slow transition for modals, toasts, expanding cards. */
	readonly transitionSlow: "var(--transition-slow)";
	/** Default border width. */
	readonly borderWidthDefault: "var(--border-width-default)";
	/** Thick border width for emphasis. */
	readonly borderWidthThick: "var(--border-width-thick)";
	/** Accent border width for strong visual indicators. */
	readonly borderWidthAccent: "var(--border-width-accent)";
	/** Z-index for dropdowns and popovers. */
	readonly zIndexDropdown: "var(--z-index-dropdown)";
	/** Z-index for sticky headers and floating controls. */
	readonly zIndexSticky: "var(--z-index-sticky)";
	/** Z-index for modal overlays and dialogs. */
	readonly zIndexModal: "var(--z-index-modal)";
	/** Z-index for toast notifications. */
	readonly zIndexToast: "var(--z-index-toast)";
	/** Z-index ceiling for elements that must always be on top. */
	readonly zIndexMax: "var(--z-index-max)";
};
type SemanticTokens = typeof semantic;
import { ReactNode } from "react";
/**
* Theme type definitions.
*
* A theme is a complete mapping of every semantic token to a concrete value.
* TypeScript enforces completeness — a partial theme is a type error.
*/
/** Every token a theme must define. Keys match semantic.ts naming (camelCase). */
interface ThemeTokens {
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
	/** Default border color for cards, inputs, and dividers. */
	colorBorder: string;
	/** Border color for focused inputs. */
	colorBorderFocused: string;
	/** Border color for inputs in an error state. */
	colorBorderError: string;
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
	/** Small border radius for subtle rounding. */
	radiusSm: string;
	/** Medium border radius for inputs and buttons. */
	radiusMd: string;
	/** Large border radius for cards and modals. */
	radiusLg: string;
	/** Full border radius for pills and circular elements. */
	radiusFull: string;
	/** Small shadow for cards and subtle elevation. */
	shadowSm: string;
	/** Medium shadow for dropdowns and popovers. */
	shadowMd: string;
	/** Large shadow for modals and dialogs. */
	shadowLg: string;
	/** Sans-serif font family for UI text. */
	fontSans: string;
	/** Serif font family for headings and prose lead paragraphs. */
	fontSerif: string;
	/** Monospace font family for code and technical content. */
	fontMono: string;
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
	/** Tight line height for compact UI text (buttons, badges). */
	lineHeightTight: string;
	/** Base line height for body text. */
	lineHeightBase: string;
	/** Relaxed line height for long-form reading. */
	lineHeightRelaxed: string;
	/** Normal weight (400). */
	fontWeightNormal: string;
	/** Medium weight (500). */
	fontWeightMedium: string;
	/** Semibold weight (600). */
	fontWeightSemibold: string;
	/** Bold weight (700). */
	fontWeightBold: string;
	/** Tight letter spacing for large headings. */
	letterSpacingTight: string;
	/** Normal letter spacing for body text. */
	letterSpacingNormal: string;
	/** Wide letter spacing for uppercase labels and badges. */
	letterSpacingWide: string;
	/** Color of the focus ring outline. */
	focusRingColor: string;
	/** Width of the focus ring outline. */
	focusRingWidth: string;
	/** Offset between the element and the focus ring. */
	focusRingOffset: string;
	/** Fast transition for option hovers (100ms ease). */
	transitionFast: string;
	/** Base transition for form inputs, buttons, most interactions (150ms ease). */
	transitionBase: string;
	/** Slow transition for modals, toasts, expanding cards (250ms ease). */
	transitionSlow: string;
	/** Default border width (1px). */
	borderWidthDefault: string;
	/** Thick border width for emphasis (2px). */
	borderWidthThick: string;
	/** Accent border width for strong visual indicators (3px). */
	borderWidthAccent: string;
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
/**
* Optional rhythm config that gives a theme a temporal personality.
* Components can subscribe via `useThemeRhythm()` to sync pulses, glows, or
* flickers to the theme's heartbeat — making the theme feel alive rather than
* a static color swap.
*/
interface ThemeRhythm {
	/**
	* Beats per minute. Drives the primary pulse cadence.
	* Examples: synthwave ~80 (slow disco pulse), pipboy ~140 (CRT flicker),
	* neural ~60 (calm oscillation).
	*/
	bpm: number;
	/**
	* Shape of the pulse waveform.
	* - `sine` — smooth in/out (default)
	* - `triangle` — linear up, linear down
	* - `square` — on/off flicker
	* - `sawtooth` — ramp up, snap down
	* @default 'sine'
	*/
	easing?: "sine" | "triangle" | "square" | "sawtooth";
	/**
	* Intensity multiplier [0..1]. Components interpret this as "how strong the
	* pulse feels" — e.g. scaling the amplitude of a glow or pulse.
	* @default 1
	*/
	intensity?: number;
}
/** A named theme definition. */
interface ThemeDefinition {
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
	* Optional animation rhythm. When set, components that subscribe to
	* `useThemeRhythm()` will pulse in time with this cadence.
	* When absent, components fall back to their default timing.
	*/
	rhythm?: ThemeRhythm;
}
/** Converts a camelCase token key to its CSS custom property name. */
declare function tokenToCssProperty(key: string): string;
import { MutableRefObject } from "react";
/**
* Set the active rhythm. Called by ThemeProvider when the theme changes.
* Passing `null` stops the engine. Idempotent — safe to call with the same
* config repeatedly.
*/
declare function setActiveRhythm(config: ThemeRhythm | null | undefined): void;
/** Handle returned by `useThemeRhythm`. */
interface ThemeRhythmHandle {
	/** Active rhythm config from the current theme. `null` if the theme has no rhythm. */
	config: ThemeRhythm | null;
	/**
	* Mutable ref whose `.current` holds the current phase 0..1 (shaped by easing
	* and scaled by intensity). Read it inside your own rAF or event handlers.
	* Only updated while at least one subscribe() callback is active.
	*/
	phaseRef: MutableRefObject<number>;
	/**
	* Subscribe a callback that fires every frame with the latest phase.
	* Returns an unsubscribe function. Starts the shared rAF loop if this is the
	* first subscriber; stops it when the last subscriber unsubscribes.
	*/
	subscribe: (cb: (phase: number) => void) => () => void;
	/**
	* Animation duration string derived from `config.bpm` (e.g. `'750ms'`),
	* suitable for CSS `animation-duration`. Returns `undefined` if no rhythm is
	* active, so callers can fall back to their default.
	*/
	durationCss: string | undefined;
}
/**
* Built-in keyframe animation names injected globally by ThemeProvider.
* Use these constants to reference the keyframes type-safely.
*/
declare const KEYFRAMES: {
	readonly spin: "spin";
	readonly fadeInUp: "fade-in-up";
};
/** A theme name. */
type Theme = string;
/** The resolved theme name that's actually applied. */
type ResolvedTheme = string;
interface ThemeContextValue {
	/** The active theme name. */
	theme: Theme;
	/** The actual resolved theme name applied to the DOM. */
	resolved: ResolvedTheme;
	/** All registered theme definitions, keyed by name. */
	themes: ReadonlyMap<string, ThemeDefinition>;
	/** Update the active theme. Persists to localStorage. */
	setTheme: (theme: Theme) => void;
}
/** Provides theme context to all descendant components. Applies CSS custom properties to the document root and persists the user's theme preference to localStorage. */
interface ThemeProviderProps {
	/** Application content. All children can access the active theme via `useTheme()`. */
	children: ReactNode;
	/** Additional theme definitions beyond the built-in set. */
	themes?: ThemeDefinition[];
	/** Theme to use when no stored preference exists in localStorage.
	* @default 'warm-sand'
	*/
	defaultTheme?: Theme;
	/** localStorage key for persisting the user's theme preference.
	* @default 'ui-theme'
	*/
	storageKey?: string;
	/**
	* When true, applies body background-color from theme CSS.
	* When false, only token CSS variables are applied.
	* Defaults to true for backward compatibility.
	*
	* @default true
	*/
	applyPageStyles?: boolean;
}
declare function ThemeProvider({ children, themes: extraThemes, defaultTheme, storageKey, applyPageStyles }: ThemeProviderProps): React.JSX.Element;
declare function useTheme(): ThemeContextValue;
/**
* Subscribe to the active theme's rhythm. Rerenders only when the rhythm
* *config* changes (new theme, new bpm) — never on every phase frame.
*
* Components read live phase via `phaseRef.current` inside their own rAF, or
* via the `subscribe()` callback. For simple pulses that only need the
* cadence (not the current wave position), use `durationCss` as a CSS
* animation-duration.
*
* @example
* ```tsx
* const { durationCss } = useThemeRhythm();
* return <span style={{ animationDuration: durationCss ?? '1.5s' }} />;
* ```
*
* @example
* ```tsx
* const { subscribe } = useThemeRhythm();
* const ref = useRef<HTMLDivElement>(null);
* useEffect(() => subscribe((phase) => {
*   if (ref.current) ref.current.style.opacity = String(0.5 + phase * 0.5);
* }), [subscribe]);
* ```
*/
declare function useThemeRhythm(): ThemeRhythmHandle;
declare const synthwaveTheme: ThemeDefinition;
declare const slateTheme: ThemeDefinition;
declare const warmSandTheme: ThemeDefinition;
declare const mossTheme: ThemeDefinition;
declare const coralTheme: ThemeDefinition;
declare const pipboyTheme: ThemeDefinition;
declare const neuralTheme: ThemeDefinition;
declare const pacmanTheme: ThemeDefinition;
declare const blackHoleTheme: ThemeDefinition;
export { warmSandTheme, useThemeRhythm, useTheme, useInjectStyles, typography, tokenToCssProperty, synthwaveTheme, staggerStyle, spacing, slateTheme, shadows, setActiveRhythm, semantic, radii, pipboyTheme, pacmanTheme, neuralTheme, mossTheme, coralTheme, colors, blackHoleTheme, Typography, ThemeTokens, ThemeRhythmHandle, ThemeRhythm, ThemeProviderProps, ThemeProvider, ThemeDefinition, ThemeContextValue, Theme, StaggerOptions, Spacing, Shadows, SemanticTokens, ResolvedTheme, Radii, KEYFRAMES, Colors };
