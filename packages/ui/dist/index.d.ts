import { RefObject } from "react";
/**
* Traps keyboard focus within the referenced container element.
* On Tab, cycles through focusable elements; on Shift+Tab, cycles backwards.
* Re-queries focusable elements on each Tab press to handle dynamic content.
*/
declare function useFocusTrap(ref: RefObject<HTMLElement | null>): void;
export * from "../../core/dist/index.js";
interface ThemePickerProps {
	/** Optional descriptions for each theme, keyed by theme name. */
	descriptions?: Record<string, string>;
	/** Display variant. `'grid'` (default) renders a card grid; `'compact'` renders a dropdown for toolbars/headers. */
	variant?: "grid" | "compact";
}
/**
* Theme selector wired into useTheme(). Must be rendered inside a <ThemeProvider>.
*
* - `variant="grid"` (default) -- card grid for settings pages / theme playgrounds.
* - `variant="compact"` -- dropdown button for toolbars and headers.
*/
declare const ThemePicker: React.ForwardRefExoticComponent<Omit<ThemePickerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties3 } from "react";
import { CSSProperties as CSSProperties2 } from "react";
interface IconComponentProps {
	size?: number;
	style?: CSSProperties2;
}
declare function IconClose({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconChevronRight({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconChevronDown({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconChevronLeft({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconChevronUp({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconCheck({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconCheckCircle({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconWarning({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconError({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconInfo({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconSearch({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconTrash({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconSettings({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconPlus({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconMinus({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconEdit({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconArrowLeft({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconArrowRight({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconMenu({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconEye({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconEyeOff({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconCopy({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconExternalLink({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconMoreVertical({ size, style }?: IconComponentProps): React.JSX.Element;
declare function IconFilter({ size, style }?: IconComponentProps): React.JSX.Element;
type IconName = "close" | "chevron-right" | "chevron-down" | "chevron-left" | "chevron-up" | "check" | "check-circle" | "warning" | "error" | "info" | "search" | "trash" | "settings" | "plus" | "minus" | "edit" | "arrow-left" | "arrow-right" | "menu" | "eye" | "eye-off" | "copy" | "external-link" | "more-vertical" | "filter";
declare const iconRegistry: Record<IconName, (props: {
	size?: number;
	style?: CSSProperties3;
}) => React.JSX.Element>;
import { ReactNode as ReactNode2 } from "react";
/** Visual style variant for buttons. */
type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost";
/** Controls padding and font size. */
type ButtonSize = "sm" | "md" | "lg";
/** A clickable button that triggers an action. */
interface ButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	form?: string;
	name?: string;
	value?: string;
	tabIndex?: number;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"aria-expanded"?: boolean;
	"aria-controls"?: string;
	"aria-haspopup"?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
	autoFocus?: boolean;
	"data-testid"?: string;
	id?: string;
	/** Visual style variant.
	* - `primary` — filled accent background, high emphasis
	* - `secondary` — subtle background with border, medium emphasis
	* - `destructive` — filled danger background, for irreversible actions
	* - `ghost` — transparent background, low emphasis
	* @default 'primary'
	*/
	variant?: ButtonVariant;
	/** Controls padding and font size.
	* - `sm` — compact, smaller text
	* - `md` — standard size
	* - `lg` — larger padding and text
	* @default 'md'
	*/
	size?: ButtonSize;
	/** Show a loading spinner and disable interaction.
	* @default false
	*/
	loading?: boolean;
	/** Render as a square icon-only button with equal padding.
	* @default false
	*/
	iconOnly?: boolean;
	/**
	* Render as the single child element instead of a `<button>`. Merges
	* props, event handlers, className, style, and ref into the child.
	* Useful for rendering a Button-styled `<a>` or router `<Link>` without
	* a wrapper. Not compatible with `loading` (which renders a spinner
	* child).
	* @default false
	*/
	asChild?: boolean;
	/** Button content. */
	children: ReactNode2;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLElement>>;
import { ReactNode as ReactNode3 } from "react";
/**
* Minimal prop set every component accepts. Replaces `extends HTMLAttributes`
* to prevent consumers from overriding styles or behavior via escape hatches.
*
* Aria props are NOT included here — add them per-component based on what
* actually makes sense (interactive, structural, or decorative).
*/
interface BaseComponentProps {
	id?: string;
	"data-testid"?: string;
}
/** Constrained flexbox align-items values. */
type AlignItems = "start" | "center" | "end" | "stretch" | "baseline";
/** Constrained flexbox justify-content values. */
type JustifyContent = "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
/** Maps shorthand align/justify names to CSS values. */
declare const alignMap: Record<AlignItems, string>;
declare const justifyMap: Record<JustifyContent, string>;
/** Named color tokens for components that accept a color prop. */
type SemanticColor = "primary" | "success" | "warning" | "error" | "info" | "muted";
/** Resolves a SemanticColor to a theme token CSS variable. */
declare const semanticColorMap: Record<SemanticColor, string>;
/** Named icon size presets in pixels. */
type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
declare const iconSizeMap: Record<IconSize, number>;
/** Named modal width presets in pixels. */
type ModalWidth = "sm" | "md" | "lg" | "xl";
declare const modalWidthMap: Record<ModalWidth, number>;
/** Named progress bar height presets. */
type ProgressBarHeight = "sm" | "md" | "lg";
declare const progressBarHeightMap: Record<ProgressBarHeight, number>;
/** Named divider opacity presets. */
type DividerOpacity = "subtle" | "default" | "strong";
declare const dividerOpacityMap: Record<DividerOpacity, number>;
/** Spacing token keys that map to semantic spacing CSS variables. */
type SpacingToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
/** Radius token keys that map to semantic border-radius CSS variables. */
type RadiusToken = "none" | "sm" | "md" | "lg" | "full";
/** Shadow token keys that map to semantic box-shadow CSS variables. */
type ShadowToken = "sm" | "md" | "lg";
declare const spacingMap: Record<SpacingToken, string>;
declare const radiusMap: Record<RadiusToken, string>;
declare const shadowMap: Record<ShadowToken, string>;
/** Flexbox layout component for vertical or horizontal stacking with consistent spacing. */
interface StackProps extends BaseComponentProps {
	/** Stack direction.
	* - `vertical` — column layout
	* - `horizontal` — row layout
	* @default 'vertical'
	*/
	direction?: "vertical" | "horizontal";
	/** Gap between children using spacing tokens.
	* @default 'md'
	*/
	gap?: SpacingToken;
	/** Cross-axis alignment. */
	align?: AlignItems;
	/** Main-axis alignment. */
	justify?: JustifyContent;
	/** Whether children should wrap to the next line when they overflow.
	* @default false
	*/
	wrap?: boolean;
	/** Stack content. */
	children: ReactNode3;
}
declare const Stack: React.ForwardRefExoticComponent<Omit<StackProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode4 } from "react";
/** Visual treatment for the Card surface. */
type CardVariant = "default" | "flat" | "elevated" | "ghost";
/** A contained surface for grouping related content. */
interface CardProps extends BaseComponentProps {
	/** Visual treatment.
	* - `default` — standard surface with border and small shadow
	* - `flat` — raised background with border, no shadow
	* - `elevated` — standard surface with border and medium shadow
	* - `ghost` — transparent `colorSurface` background, no border or shadow; the
	*   consumer is expected to draw the border themselves (via stylesheet, so
	*   `:hover` / `:focus` rules can still override individual border longhands
	*   without losing to an inline border shorthand). Used by `LinkCard`.
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
	/**
	* Opt into a border glow that pulses with the active theme's rhythm
	* (see `packages/core/docs/component-canvas-bridge.md`). Default off —
	* Cards without this prop behave identically to pre-bridge Cards.
	* No-ops on themes without rhythm and under `prefers-reduced-motion`.
	* @default false
	*/
	glow?: boolean;
	/**
	* Render as the single child element instead of a `<div>`. Merges Card's
	* variant / padding / hover / glow styling, style, and ref into the child.
	* Useful for rendering a Card-styled `<a>` or router `<Link>` without a
	* wrapper div around a focusable element. Matches the `asChild` pattern on
	* `Button`, `IconButton`, and `TopBar.Link`.
	* @default false
	*/
	asChild?: boolean;
	/**
	* Called when the Card (or its `asChild` child) is clicked. Under `asChild`,
	* this chains with the child's own `onClick` via Slot's `mergeProps` —
	* parent handler fires first, then the child's. Useful for layering a
	* Card-level analytics handler without losing the child's navigation.
	*/
	onClick?: React.MouseEventHandler<HTMLElement>;
	/** Card content. */
	children: ReactNode4;
}
declare const Card: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLElement>>;
import { ReactNode as ReactNode5 } from "react";
/** Clickable card with a serif title and muted description. */
interface LinkCardProps {
	/** Card title — rendered in serif. */
	title: ReactNode5;
	/** Optional description — rendered smaller in muted text. */
	description?: ReactNode5;
	/** Whether link opens in a new tab (sets `target="_blank"` and `rel="noopener noreferrer"`). */
	external?: boolean;
	href?: string;
	target?: string;
	rel?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	id?: string;
	"aria-label"?: string;
	"data-testid"?: string;
}
/**
* Clickable card with serif title and muted description. Hover lifts and
* accent-borders. Good for project links, post previews, etc.
*
* Implemented as a thin `<Card asChild variant="ghost">` over an anchor —
* Card owns the radius and padding; LinkCard's stylesheet owns the border
* (so `:hover { border-color }` can accent it), the serif/title layout,
* and the link-specific resets.
*/
declare const LinkCard: React.ForwardRefExoticComponent<Omit<LinkCardProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
import { ReactNode as ReactNode6 } from "react";
/** Wraps an input with a label, help text, and error message. Handles `aria-describedby` wiring automatically. */
interface FieldProps extends BaseComponentProps {
	/** Links the field wrapper to external descriptive text. */
	"aria-describedby"?: string;
	/** Field label text displayed above the input. */
	label: string;
	/** Associates the label with the input via `htmlFor`/`id`. */
	htmlFor?: string;
	/** Error message. When set, the field renders in error state and the message is announced via `role="alert"`. */
	error?: string;
	/** Help text shown below the input. Hidden when `error` is set. */
	help?: string;
	/** Shows a red asterisk (*) on the label.
	* @default false
	*/
	required?: boolean;
	/** Reduces field opacity. Does not disable the child input — do that yourself.
	* @default false
	*/
	disabled?: boolean;
	/** The form control to wrap (Input, Select, Textarea, etc.). */
	children: ReactNode6;
}
declare const Field: React.ForwardRefExoticComponent<Omit<FieldProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** A single-line text input field. */
interface InputProps {
	type?: "text" | "email" | "password" | "url" | "tel" | "number" | "search";
	value?: string | number;
	defaultValue?: string | number;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	placeholder?: string;
	readOnly?: boolean;
	maxLength?: number;
	min?: string | number;
	max?: string | number;
	step?: string | number;
	pattern?: string;
	inputMode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
	name?: string;
	disabled?: boolean;
	required?: boolean;
	autoFocus?: boolean;
	autoComplete?: string;
	id?: string;
	form?: string;
	tabIndex?: number;
	/** Renders error border styling. Typically driven by a parent Field.
	* @default false
	*/
	hasError?: boolean;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"aria-invalid"?: boolean;
	"data-testid"?: string;
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
/** A multi-line text input area. Vertically resizable by default. */
interface TextareaProps {
	value?: string;
	defaultValue?: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	placeholder?: string;
	readOnly?: boolean;
	rows?: number;
	maxLength?: number;
	name?: string;
	disabled?: boolean;
	required?: boolean;
	autoFocus?: boolean;
	id?: string;
	form?: string;
	tabIndex?: number;
	/** Renders error border styling. Typically driven by a parent Field.
	* @default false
	*/
	hasError?: boolean;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"aria-invalid"?: boolean;
	"data-testid"?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
import { ReactNode as ReactNode7 } from "react";
interface SelectRootProps {
	/** The current selected value (controlled). */
	value?: string;
	/** Initial value for uncontrolled usage. */
	defaultValue?: string;
	/** Called when the user selects a new value. */
	onValueChange?: (value: string) => void;
	/** Legacy change handler shape — fires with a synthetic event whose target.value is the new value. Prefer onValueChange. */
	onChange?: (event: {
		target: {
			value: string;
			name?: string;
		};
	}) => void;
	/** When true, disables the trigger and blocks opening. */
	disabled?: boolean;
	/** When true, applies error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
	/** Form field name. A hidden native <select> is rendered so the value submits with the surrounding form. */
	name?: string;
	/** Marks the hidden native select as required. */
	required?: boolean;
	/** DOM id for the hidden native select (used by a wrapping <Field>'s htmlFor). */
	id?: string;
	/** Form id for the hidden native select. */
	form?: string;
	/** Subtree containing Trigger + Content. */
	children: ReactNode7;
}
interface SelectTriggerProps {
	/** Usually `<Select.Value placeholder="…" />`. Any ReactNode works. */
	children: ReactNode7;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"data-testid"?: string;
	tabIndex?: number;
}
interface SelectValueProps {
	/** Shown when no value is selected. */
	placeholder?: string;
}
interface SelectContentProps {
	children: ReactNode7;
}
interface SelectItemProps {
	/** The value submitted when this item is selected. */
	value: string;
	/** When true, the item is unselectable and skipped by keyboard nav. */
	disabled?: boolean;
	/**
	* Optional explicit string label for registration (used by Select.Value
	* and the hidden native <option>). Defaults to `children` when `children`
	* is a string.
	*/
	textValue?: string;
	/** Display content. Usually the label string. */
	children: ReactNode7;
}
/**
* Compound Select. Use as:
*
* ```tsx
* <Select.Root value={v} onValueChange={setV}>
*   <Select.Trigger aria-label="Role">
*     <Select.Value placeholder="Pick one..." />
*   </Select.Trigger>
*   <Select.Content>
*     <Select.Item value="admin">Admin</Select.Item>
*     <Select.Item value="viewer" disabled>Viewer</Select.Item>
*   </Select.Content>
* </Select.Root>
* ```
*
* Form submission: `<Select.Root name="role">` renders a hidden native
* `<select>` so the value participates in native form submission.
*/
declare const Select: {};
import { ReactNode as ReactNode8 } from "react";
/** Semantic color variant for badges. */
type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "info";
/** Size variant for badges. */
type BadgeSize = "default" | "xs";
/** A small label for status, category, or metadata. Rendered as uppercase pill text. */
interface BadgeProps extends BaseComponentProps {
	/** Badge content (typically short text). */
	children: ReactNode8;
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
declare const Badge: React.ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { ReactNode as ReactNode9 } from "react";
/**
* `<Text>` — the typographic primitive for inline and block copy.
*
* Canonical use case: replace inline-styled `<span style={{ fontSize, color, fontWeight }}>`
* in pattern code. Every `size` / `weight` / `tone` / `family` prop maps 1:1 to an existing
* semantic token, so consumers never reach for raw values.
*
* No `className` or `style` pass-through (matches the 0.2.26 form-element lockdown). If
* you need arbitrary CSS, the `<Text>` atom is the wrong primitive — reach for a custom
* element or open an issue to add the missing token.
*/
/** Font-size token. Maps to the semantic `fontSize{Xs|Sm|Base|Lg|Xl}` tokens. */
type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
/** Font-weight token. Maps to the semantic `fontWeight{Normal|Medium|Semibold|Bold}` tokens. */
type TextWeight = "normal" | "medium" | "semibold" | "bold";
/**
* Semantic color tone. Maps to `colorText*` tokens and status colors.
* - `default` — `colorText`
* - `muted` — `colorTextMuted`
* - `secondary` — `colorTextSecondary`
* - `inverse` — `colorTextInverse` (for filled backgrounds)
* - `link` — `colorTextLink`
* - `success` / `warning` / `error` — status foreground tokens
*/
type TextTone = "default" | "muted" | "secondary" | "inverse" | "link" | "success" | "warning" | "error";
/** Font-family token. */
type TextFamily = "sans" | "serif" | "mono";
/** Render element. Kept deliberately small — interactive elements are other primitives. */
type TextAs = "span" | "p" | "div";
/** Text alignment. */
type TextAlign = "left" | "center" | "right";
interface TextProps extends BaseComponentProps {
	/** Text content. */
	children: ReactNode9;
	/** Font size token.
	* @default 'md'
	*/
	size?: TextSize;
	/** Font weight token.
	* @default 'normal'
	*/
	weight?: TextWeight;
	/** Semantic color tone.
	* @default 'default'
	*/
	tone?: TextTone;
	/** Font family token.
	* @default 'sans'
	*/
	family?: TextFamily;
	/** Render element — one of `'span' | 'p' | 'div'`.
	* @default 'span'
	*/
	as?: TextAs;
	/** Text alignment. Omit for the inherited default. */
	align?: TextAlign;
	/** Single-line truncate with ellipsis. Sets `white-space: nowrap`, `overflow: hidden`,
	* and `text-overflow: ellipsis`. Requires the element to have a bounded width.
	* @default false
	*/
	truncate?: boolean;
}
/** Ref type — a Text element is one of three concrete HTML element types. */
type TextRef = HTMLSpanElement | HTMLParagraphElement | HTMLDivElement;
declare const Text: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<TextRef>>;
import { ReactNode as ReactNode10 } from "react";
/** Provider that sets a default `fontClass` for all descendant Icon components.
*
* Wrap your app (or a subtree) so you don't have to pass `fontClass` on every Icon:
*
* ```tsx
* <IconFontProvider fontClass="material-symbols-outlined">
*   <Icon name="home" />
* </IconFontProvider>
* ```
*/
declare function IconFontProvider({ fontClass, children }: {
	fontClass: string;
	children: ReactNode10;
}): React.JSX.Element;
/** Renders a named icon from the built-in registry, or falls back to an icon font
*  when the name is unregistered and a `fontClass` is available (via prop or context). */
interface IconProps {
	/** Icon name. Built-in registry names render SVG components; unregistered names
	*  fall back to icon-font rendering when `fontClass` is set. */
	name: IconName | (string & {});
	/** Icon size preset.
	* @default 'lg'
	*/
	size?: IconSize;
	/** CSS class for an icon font (e.g. `'material-symbols-outlined'`).
	*  Used when `name` is not in the built-in registry. Falls back to the
	*  value from `IconFontProvider` when omitted. */
	fontClass?: string;
	/** Accessible label. When omitted, icon is treated as decorative. */
	"aria-label"?: string;
	id?: string;
	"data-testid"?: string;
}
declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { ReactNode as ReactNode11 } from "react";
/** Controls the tap-target and icon size of the icon button. */
type IconButtonSize = "sm" | "md" | "lg";
/** A circular icon-only button. Requires `aria-label` for accessibility. */
interface IconButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	tabIndex?: number;
	/** Required accessible label for icon-only buttons. */
	"aria-label": string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"aria-expanded"?: boolean;
	"aria-controls"?: string;
	"data-testid"?: string;
	id?: string;
	/** Icon to render — built-in registry name or any icon-font name when `fontClass` is set. */
	icon: IconName | (string & {});
	/** Button and icon size.
	* - `sm` — 28px button, 16px icon
	* - `md` — 36px button, 20px icon (default)
	* - `lg` — 44px button, 24px icon
	* @default 'md'
	*/
	size?: IconButtonSize;
	/** Shows a small red notification dot in the top-right corner.
	* @default false
	*/
	badge?: boolean;
	/** CSS class for an icon font (e.g. `'material-symbols-outlined'`).
	*  Passed through to Icon for font-based rendering. */
	fontClass?: string;
	/**
	* Render as the single child element instead of a `<button>`. Merges
	* IconButton's style, event handlers, ARIA attrs, and ref into the
	* child. In asChild mode the consumer is responsible for rendering
	* the icon themselves inside the child element (the `icon`/`badge`
	* props are ignored), e.g.
	* `<IconButton asChild aria-label="Home"><a href="/"><Icon name="home" /></a></IconButton>`.
	* @default false
	*/
	asChild?: boolean;
	/** When `asChild` is true, the single child element to clone. Ignored otherwise. */
	children?: ReactNode11;
}
declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLElement>>;
/** A full-screen semi-transparent backdrop. Used behind modals and drawers. */
interface OverlayProps {
	/** Called when the overlay is clicked (typically to close the parent modal). */
	onClick?: () => void;
	/** CSS z-index for stacking control.
	* @default 'var(--z-index-sticky)'
	*/
	zIndex?: number | string;
}
declare const Overlay: React.ForwardRefExoticComponent<Omit<OverlayProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
* A placeholder loading shape that pulses with the active theme's accent color.
*
* Siblings stagger automatically via `:nth-of-type` — when multiple Skeletons
* are rendered next to each other, a subtle wave travels through them in DOM
* order. The pulse duration syncs to the active theme's rhythm when one is
* defined, falling back to a 1.6s cadence otherwise.
*/
interface SkeletonProps {
	/** Width in pixels, or a percentage string like '100%' or '60%'.
	* @default '100%'
	*/
	width?: number | `${number}%`;
	/** Height in pixels.
	* @default 16
	*/
	height?: number;
	/** Border radius token.
	* @default 'md'
	*/
	radius?: RadiusToken;
}
declare const Skeleton: React.ForwardRefExoticComponent<Omit<SkeletonProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CardSkeleton: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
declare const RowSkeleton: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
/** A single segment in a multi-part progress bar. */
interface ProgressBarSegment {
	/** Numeric value for this segment. Width is proportional to value / total. */
	value: number;
	/** Segment fill color from the semantic color palette. */
	color: SemanticColor;
	/** Optional label shown in the segment's title tooltip. */
	label?: string;
}
/** A horizontal segmented progress bar. Each segment's width is proportional to its value relative to the total. */
interface ProgressBarProps {
	/** One or more segments to display. */
	segments: ProgressBarSegment[];
	/** Bar height preset.
	* @default 'md'
	*/
	height?: ProgressBarHeight;
	/** Accessible label for screen readers. */
	"aria-label"?: string;
}
declare const ProgressBar: React.ForwardRefExoticComponent<Omit<ProgressBarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode12 } from "react";
/** A placeholder shown when a section has no content. Displays an icon, message, and optional action. */
interface EmptyStateProps {
	/** Icon displayed above the message. */
	icon: IconName;
	/** Primary message text. */
	message: string;
	/** Container variant.
	* - `plain` — no card wrapper
	* - `card` — wraps content in a flat Card
	* @default 'plain'
	*/
	variant?: "plain" | "card";
	/** Additional content rendered below the message. */
	children?: ReactNode12;
	/** Action slot (e.g. a CTA button) rendered below the message and children. */
	action?: ReactNode12;
}
declare const EmptyState: React.ForwardRefExoticComponent<Omit<EmptyStateProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** Customizable text labels for the Pagination component. */
interface PaginationLabels {
	/** Label for the previous button.
	* @default 'Previous'
	*/
	previous?: string;
	/** Label for the next button.
	* @default 'Next'
	*/
	next?: string;
	/** Formatter for the "Page X of Y" text. */
	pageOf?: (page: number, total: number) => string;
}
/** Previous/Next pagination controls with page indicator. */
interface PaginationProps {
	/** Current page number (1-based). */
	page: number;
	/** Total number of pages. */
	totalPages: number;
	/** Total number of items across all pages (shown in the indicator text). */
	total: number;
	/** Called when the user navigates to a different page. */
	onPageChange: (page: number) => void;
	/** Custom text labels for buttons and page indicator. */
	labels?: PaginationLabels;
}
declare const Pagination: React.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode13 } from "react";
/** Heading scale. `page` is the top-of-page heading; `section` is a sub-section heading. */
type HeaderLevel = "page" | "section";
/**
* A minimal heading with an optional subtitle, inline indicator, and trailing slot.
* Replaces the retired `PageHeader` and `SectionHeader` components.
*
* Border, spacing, and icon presets are intentionally absent — those are
* layout decisions the consumer expresses via `<Divider>` and `<Stack>`.
*/
interface HeaderProps {
	/** Primary heading text. */
	title: string;
	/** Heading scale. @default 'section' */
	level?: HeaderLevel;
	/** Secondary text rendered below the title in muted style. */
	subtitle?: string;
	/** Inline content rendered next to the title (e.g. Badge, StatusDot, Icon). */
	indicator?: ReactNode13;
	/** Content aligned to the right end of the header (e.g. action buttons, SearchInput). */
	trailing?: ReactNode13;
}
declare const Header: React.ForwardRefExoticComponent<Omit<HeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode14 } from "react";
/** Shared heading style for modal titles. Used by ConfirmDialog and consumer modal compositions. */
declare const modalHeadingStyle: React.CSSProperties;
/** Shared footer layout for modal action buttons. Used by ConfirmDialog and consumer modal compositions. */
declare const modalFooterStyle: React.CSSProperties;
/** A centered modal panel with backdrop overlay. Closes on Escape and overlay click. */
interface ModalShellProps {
	/** Called when the modal should close (Escape key or overlay click). */
	onClose: () => void;
	/** Modal body content. */
	children: ReactNode14;
	/** Width preset for the modal panel.
	* @default 'md'
	*/
	width?: ModalWidth;
	/** Base z-index for the overlay. The panel renders at `zIndex + 1`.
	* @default 'var(--z-index-modal)'
	*/
	zIndex?: number | string;
	/** ID of the element that labels this dialog. Used for `aria-labelledby`. */
	titleId?: string;
	/** Accessible label for the dialog. Alternative to `titleId`/`aria-labelledby`. */
	"aria-label"?: string;
	/** ARIA role override. Defaults to `"dialog"`. ConfirmDialog passes `"alertdialog"`. */
	role?: "dialog" | "alertdialog";
}
declare const ModalShell: React.ForwardRefExoticComponent<Omit<ModalShellProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
* Uppercase + letter-spacing style block for labeling content groups.
*
* Spread onto any element — `<span>`, `<div>`, `<h3>` — to apply the
* retired `SectionLabel` component's visual contract.
*/
declare const sectionLabelStyle: React.CSSProperties;
/**
* Small pill-shaped tag visual — uppercase prefix + label, rounded,
* raised background. Spread onto a `<span>` or `<div>` to apply the
* retired `TagChip` component's visual contract.
*
* For the remove affordance, compose with `<IconButton icon="close" />`:
*
* ```tsx
* <span style={tagChipStyle}>
*   frontend
*   <IconButton icon="close" onClick={...} aria-label="Remove frontend" size="sm" />
* </span>
* ```
*/
declare const tagChipStyle: React.CSSProperties;
import { CSSProperties as CSSProperties4 } from "react";
/**
* Pill-shaped toggle-button visual — full-radius border, rhythm padding,
* and sans-serif sentence-case label. Used by `ChipPicker` and any other
* pill-toggle UI that needs a selectable pill button.
*
* Differs from `Badge`: Badge is uppercase + semibold + xs metadata type;
* the pill-toggle is sentence-case + medium + sm interactive type because
* it reads as a button label, not a status tag. They share the pill shape
* and rhythm padding but not the typographic voice.
*
* Apply to a `<button type="button" aria-pressed={isSelected}>` element
* and spread the variant cluster (`pillToggleSelectedStyle` or
* `pillToggleUnselectedStyle`) on top to paint the selected / unselected
* state.
*
* Consumers that want hover / focus-visible affordances inject their own
* rules via `useInjectStyles` scoped to a container — see `ChipPicker` for
* the reference pattern.
*/
declare const pillToggleBaseStyle: CSSProperties4;
/** Selected-state variant — tinted background + primary-action border. */
declare const pillToggleSelectedStyle: CSSProperties4;
/** Unselected-state variant — transparent background + neutral border. */
declare const pillToggleUnselectedStyle: CSSProperties4;
/**
* Shared input-shell style blocks used by every text-like control in the
* package: `Input`, `Textarea`, `SearchInput` (wrapper), `Select.Trigger`,
* `Combobox.Input`, `DatePicker` trigger, `DateRangePicker` trigger.
*
* Three blocks, composed in order by every consumer:
*
* ```ts
* const style = {
*   ...inputShellBaseStyle,
*   ...(hasError ? inputShellErrorStyle : {}),
*   ...(disabled ? inputShellDisabledStyle : {}),
*   // ...per-consumer deltas (cursor, textAlign, lineHeight, etc.)
* };
* ```
*
* `inputShellBaseStyle` covers the common visual contract — padding, font,
* color, background, border, radius, transition, box-sizing. It does not set
* `display`, `lineHeight`, or `outline`; each consumer picks those. This
* keeps the shared block a byte-for-byte intersection of the seven prior
* duplicate definitions, so visual output is identical when consumers spread
* it and layer on their overrides.
*/
declare const inputShellBaseStyle: React.CSSProperties;
/**
* Error modifier — applied when `hasError` is true. Swaps the border color
* to the error token.
*/
declare const inputShellErrorStyle: React.CSSProperties;
/**
* Disabled modifier — applied when `disabled` is true. Swaps surface and
* text to the disabled tokens and sets the not-allowed cursor.
*/
declare const inputShellDisabledStyle: React.CSSProperties;
/**
* Focus-ring CSS for composers that wrap an `<input>` in a bordered container
* (e.g. `SearchInput` with leading icon + trailing slot). Returns a CSS string
* scoped to the given selector, producing the same focused border-color +
* box-shadow as the `Input` primitive receives from the browser default, and
* includes a `prefers-reduced-motion` transition override.
*
* Pass a class selector (including the leading dot) or any valid CSS selector
* that targets the wrapping element. Inject the returned string via
* `useInjectStyles(id, inputShellFocusRingCSS('.my-wrapper'))`.
*
* Keeps the focus-ring values (border-color, ring width, ring color) defined
* in exactly one place alongside the shell visual contract.
*/
declare function inputShellFocusRingCSS(selector: string): string;
/**
* Popover panel for dropdown-density surfaces: `Select.Content`, `Combobox.List`.
* Tight padding, medium radius, sticky stacking context.
*/
declare const popoverPanelMd: React.CSSProperties;
/**
* Popover panel for calendar-density surfaces: `DatePicker`, `DateRangePicker`.
* Comfortable padding, large radius, dropdown stacking context.
*/
declare const popoverPanelLg: React.CSSProperties;
import { ReactNode as ReactNode15 } from "react";
/** Semantic variant controlling the confirm button style. */
type ConfirmDialogVariant = "destructive" | "info" | "warning";
/** A modal confirmation dialog with title, message, and Cancel/Confirm buttons. Supports async confirm handlers with loading state. */
interface ConfirmDialogProps {
	/** Dialog heading text. */
	title: string;
	/** Descriptive text explaining what the user is confirming. */
	message: string;
	/** Label for the confirm button.
	* @default 'Confirm'
	*/
	confirmLabel?: string;
	/** Called when the user clicks confirm. Can return a Promise to show a loading state. */
	onConfirm: () => Promise<void> | void;
	/** Called when the user cancels (Cancel button, Escape key, or overlay click). */
	onCancel: () => void;
	/** Custom body content rendered between the message and the action buttons. */
	children?: ReactNode15;
	/** Controls the confirm button color variant.
	* - `destructive` — red destructive button
	* - `info` — primary accent button
	* - `warning` — primary accent button
	* @default 'destructive'
	*/
	variant?: ConfirmDialogVariant;
}
declare const ConfirmDialog: React.ForwardRefExoticComponent<Omit<ConfirmDialogProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** Semantic color variant for the status dot. */
type StatusDotVariant = "default" | "primary" | "success" | "warning" | "error" | "info";
/** Size preset for the status dot. */
type StatusDotSize = "sm" | "md" | "lg";
/** Animation style for the status dot. */
type StatusDotAnimate = "pulse" | "none";
/** A small colored circle indicating status. */
interface StatusDotProps {
	/** Semantic variant — maps to feedback tokens. */
	variant?: StatusDotVariant;
	/** Dot size preset.
	* - `sm` — 6px
	* - `md` — 8px (default)
	* - `lg` — 12px
	* @default 'md'
	*/
	size?: StatusDotSize;
	/** Animation style. @default 'none' */
	animate?: StatusDotAnimate;
	/** Accessible label describing the status. */
	"aria-label"?: string;
}
declare const StatusDot: React.ForwardRefExoticComponent<Omit<StatusDotProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { ReactNode as ReactNode16 } from "react";
type SpacingToken2 = "xs" | "sm" | "md" | "lg";
/** Visual treatment for the table wrapper. */
type TableVariant = "default" | "flat";
/** Root table wrapper. Provides overflow scrolling, border, and shadow. */
interface TableProps extends BaseComponentProps {
	/** Visual treatment for the outer wrapper.
	* - `default` — border, rounded corners, and small shadow
	* - `flat` — no wrapper chrome
	* @default 'default'
	*/
	variant?: TableVariant;
	/** Cell padding density.
	* @default 'md'
	*/
	density?: SpacingToken2;
	/** Table content (TableHeader, TableBody, etc.). */
	children: ReactNode16;
}
/** Table header section. Renders a `<thead>` with a single `<tr>` wrapping the children. */
interface TableHeaderProps {
	/** TableHeaderCell elements. */
	children: ReactNode16;
}
declare const TableHeader: React.ForwardRefExoticComponent<Omit<TableHeaderProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/** A single column header cell (`<th>`). Renders uppercase, muted, semibold text. */
interface TableHeaderCellProps {
	/** Text alignment.
	* @default 'left'
	*/
	align?: "left" | "center" | "right";
	/** Fixed column width in pixels. */
	width?: number;
	/** Number of columns this header should span. */
	colSpan?: number;
	/** Header label. */
	children?: ReactNode16;
}
declare const TableHeaderCell: React.ForwardRefExoticComponent<Omit<TableHeaderCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
/** Table body section (`<tbody>`). Wraps TableRow elements. */
interface TableBodyProps {
	/** TableRow elements. */
	children: ReactNode16;
}
declare const TableBody: React.ForwardRefExoticComponent<Omit<TableBodyProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/** A table row (`<tr>`). Supports selection highlighting and hover effects. When `onClick` is provided, the row becomes focusable and responds to Enter/Space. */
interface TableRowProps {
	/** Highlights the row with a raised background and a left accent border.
	* @default false
	*/
	selected?: boolean;
	/** Enables a hover background color change.
	* @default false
	*/
	hoverable?: boolean;
	/** Click handler. When provided, the row becomes focusable and responds to Enter/Space. */
	onClick?: React.MouseEventHandler<HTMLTableRowElement>;
	/** TableCell elements. */
	children: ReactNode16;
}
declare const TableRow: React.ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
/** A table data cell (`<td>`). */
interface TableCellProps {
	/** Text alignment.
	* @default 'left'
	*/
	align?: "left" | "center" | "right";
	/** Truncates overflowing text with an ellipsis. Requires a fixed `width` to take effect.
	* @default false
	*/
	truncate?: boolean;
	/** Renders the cell text in a muted color.
	* @default false
	*/
	muted?: boolean;
	/** Fixed column width in pixels. */
	width?: number;
	/** Number of columns this cell should span. */
	colSpan?: number;
	/** Cell content. */
	children?: ReactNode16;
}
declare const TableCell: React.ForwardRefExoticComponent<Omit<TableCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
/** A full-width subheading row for grouping table rows under a shared label. */
interface TableGroupHeaderProps {
	/** Number of columns the header should span. */
	colSpan: number;
	/** Group label text. */
	children: ReactNode16;
}
declare const TableGroupHeader: React.ForwardRefExoticComponent<Omit<TableGroupHeaderProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
/** A centered message row displayed when the table has no data. */
interface TableEmptyRowProps {
	/** Number of columns the message should span. */
	colSpan: number;
	/** Empty state message content. */
	children: ReactNode16;
}
declare const TableEmptyRow: React.ForwardRefExoticComponent<Omit<TableEmptyRowProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
import { HTMLAttributes, ReactNode as ReactNode17 } from "react";
/** Configuration for a debounced text search filter. */
interface TextFilterConfig {
	type: "text";
	/** Unique key used in the values record. */
	key: string;
	/** Input placeholder text. */
	placeholder?: string;
	/** Debounce delay in milliseconds. @default 300 */
	debounceMs?: number;
}
/** Configuration for an immediate select dropdown filter. */
interface SelectFilterConfig {
	type: "select";
	/** Unique key used in the values record. */
	key: string;
	/** Placeholder shown when no option is selected. */
	placeholder?: string;
	/** Available options. */
	options: Array<{
		value: string;
		label: string;
	}>;
}
/** A single filter definition — either text or select. */
type FilterConfig = TextFilterConfig | SelectFilterConfig;
/** Props for `<Table.FilterBar>`. */
interface FilterBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Current filter values keyed by filter key / field name. Required. */
	values: Record<string, string>;
	/** Called when any filter value changes. Receives the full updated values object. */
	onChange: (values: Record<string, string>) => void;
	/**
	* Schema-driven mode: supply an ordered list of filter definitions and
	* FilterBar renders them for you. Mutually exclusive with `children`.
	*/
	filters?: FilterConfig[];
	/**
	* Children-composition mode: render `<Table.FilterBar.Text>` /
	* `<Table.FilterBar.Select>` subparts directly for filters the schema
	* can't express. Mutually exclusive with `filters`.
	*/
	children?: ReactNode17;
}
/** Props for `<Table.FilterBar.Text>`. */
interface FilterBarTextProps {
	/** Key in the shared `values` record that this input reads / writes. */
	field: string;
	/** Input placeholder text. */
	placeholder?: string;
	/** Debounce delay in milliseconds before committing to `values`. @default 300 */
	debounceMs?: number;
}
/** Props for `<Table.FilterBar.Select>`. */
interface FilterBarSelectProps {
	/** Key in the shared `values` record that this select reads / writes. */
	field: string;
	/** Placeholder shown when no option is selected. */
	placeholder?: string;
	/** Available options. */
	options: Array<{
		value: string;
		label: string;
	}>;
}
/**
* `Table` plus attached compound primitives. `Table.FilterBar` is the
* schema-driven / composable filter bar that pairs with the table — see
* `FilterBar.tsx` for details. Existing `TableHeader`, `TableBody`, etc.
* remain available as standalone named exports for backward compatibility.
*/
declare const Table2: unknown;
/** A date range with inclusive start and end. */
interface DateRange {
	from: Date;
	to: Date;
}
/** Props for the DateRangePicker component. */
interface DateRangePickerProps {
	/** Currently selected date range. */
	value?: DateRange;
	/** Called when the range changes (or is cleared). */
	onChange: (range: DateRange | undefined) => void;
	/** Earliest selectable date. */
	minDate?: Date;
	/** Latest selectable date. */
	maxDate?: Date;
	/** Specific dates that cannot be selected. */
	disabledDates?: Date[];
	/** Placeholder text when no range is selected. */
	placeholder?: string;
	/** Renders error border styling.
	* @default false
	*/
	hasError?: boolean;
	/** Disables the picker.
	* @default false
	*/
	disabled?: boolean;
}
/**
* Date-range picker. A composition over the compound `Calendar.*` primitives
* that adds the two-click range selection flow and a hover-preview state
* machine:
*
* 1. First click commits `selectionStart`.
* 2. Subsequent mouse hover (or keyboard focus change) previews the range
*    `{ from: start, to: hover }` without committing.
* 3. Second click commits the final `{ from, to }` via `onChange` and closes
*    the popover.
*
* Keyboard: Enter/Space acts as a click. Arrow keys update the previewed
* end via Calendar.Root's focused-date tracking.
*/
declare const DateRangePicker: React.ForwardRefExoticComponent<Omit<DateRangePickerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** Props for the DatePicker component. */
interface DatePickerProps {
	/** Currently selected date. */
	value?: Date;
	/** Called when a date is selected (or cleared). */
	onChange: (date: Date | undefined) => void;
	/** Earliest selectable date. */
	minDate?: Date;
	/** Latest selectable date. */
	maxDate?: Date;
	/** Specific dates that cannot be selected. */
	disabledDates?: Date[];
	/** Placeholder text when no date is selected. */
	placeholder?: string;
	/** Renders error border styling.
	* @default false
	*/
	hasError?: boolean;
	/** Disables the picker.
	* @default false
	*/
	disabled?: boolean;
}
/**
* Single-date picker. A thin composition over the compound Calendar.*
* primitives: `<Calendar.Root mode="single">` + `<Calendar.Nav>` +
* `<Calendar.Header>` + `<Calendar.Grid>`.
*
* Public prop API unchanged from 0.2.x: `value`, `onChange`, `minDate`,
* `maxDate`, `disabledDates`, `placeholder`, `hasError`, `disabled`.
*/
declare const DatePicker: React.ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode18 } from "react";
/** Whether the calendar selects a single date or a date range. */
type CalendarMode = "single" | "range";
/** An inclusive date range with a start and end. */
interface CalendarRange {
	from: Date;
	to: Date;
}
/**
* Current selection for the calendar. Shape depends on {@link CalendarMode}:
* - `single` -> `Date | undefined`
* - `range`  -> `CalendarRange | undefined`
*/
type CalendarSelection = Date | CalendarRange | undefined;
/**
* Value exposed by the Calendar compound primitive via context. Child
* primitives (Calendar.Header, Calendar.Nav, Calendar.Grid, Calendar.Cell)
* read from this via {@link useCalendarContext}.
*/
interface CalendarContextValue {
	/** Active selection mode. */
	mode: CalendarMode;
	/** Current selection (shape depends on `mode`). */
	selected: CalendarSelection;
	/** Commit a selection. Range mode commits a full `{from, to}`. */
	onSelect: (value: CalendarSelection) => void;
	/** Earliest selectable date (inclusive). */
	minDate?: Date;
	/** Latest selectable date (inclusive). */
	maxDate?: Date;
	/** Predicate for disabling specific dates. Return `true` to disable. */
	disabledDate?: (date: Date) => boolean;
	/** The currently focused date (roving tabindex target within the grid). */
	focusedDate: Date;
	/** Move focus to a different date. Implementations should also update the visible month if needed. */
	setFocusedDate: (date: Date) => void;
	/**
	* First-of-month Date representing the currently visible calendar page.
	* Independent from `focusedDate` so the user can browse months via
	* Calendar.Nav without losing keyboard focus.
	*/
	viewDate: Date;
	/** Change the visible month. Implementations typically normalize to the 1st. */
	setViewDate: (date: Date) => void;
}
/**
* Read the Calendar context. Throws with a helpful message if the caller is
* not rendered inside a `<Calendar.Root>`.
*
* @param part Name of the consuming primitive, used in the error message
*   (e.g. `"Grid"`, `"Cell"`).
*/
declare function useCalendarContext(part?: string): CalendarContextValue;
/** Props for `<Calendar.Root>`, the state-owning primitive. */
interface CalendarRootProps {
	/** Selection mode. Defaults to `'single'`. */
	mode?: CalendarMode;
	/**
	* Current selection. Shape depends on `mode`:
	* - `'single'`: `Date | undefined`
	* - `'range'`:  `CalendarRange | undefined`
	*/
	selected?: CalendarSelection;
	/** Called when the selection changes. */
	onSelect?: (value: CalendarSelection) => void;
	/** Earliest selectable date (inclusive). */
	minDate?: Date;
	/** Latest selectable date (inclusive). */
	maxDate?: Date;
	/** Predicate for disabling specific dates. Return `true` to disable. */
	disabledDate?: (date: Date) => boolean;
	/**
	* Controlled focused date. When provided, Root does not manage focused-date
	* state internally and relies on `onFocusedDateChange` to request updates.
	*/
	focusedDate?: Date;
	/**
	* Default focused date for the uncontrolled case. Ignored when `focusedDate`
	* is provided. Falls back to the selected date, or today, if omitted.
	*/
	defaultFocusedDate?: Date;
	/** Called when the focused date changes (both controlled and uncontrolled). */
	onFocusedDateChange?: (date: Date) => void;
	/**
	* Controlled visible month. When provided, Root does not manage view state
	* internally and relies on `onViewDateChange` to request updates.
	*/
	viewDate?: Date;
	/**
	* Default visible month for the uncontrolled case. Ignored when `viewDate`
	* is provided. Falls back to the focused date / selected date / today.
	*/
	defaultViewDate?: Date;
	/** Called when the visible month changes (both controlled and uncontrolled). */
	onViewDateChange?: (date: Date) => void;
	/** Calendar subtree — typically `Calendar.Header` / `Calendar.Nav` / `Calendar.Grid`. */
	children?: ReactNode18;
}
import { ReactNode as ReactNode19 } from "react";
/** Render state passed to the Calendar.Grid children render-prop. */
interface CalendarCellRenderArgs {
	date: Date;
	isInMonth: boolean;
	isToday: boolean;
	isFocused: boolean;
	isSelected: boolean;
	isRangeStart: boolean;
	isRangeEnd: boolean;
	isInRange: boolean;
	isDisabled: boolean;
}
/** Props for `<Calendar.Grid>`. */
interface CalendarGridProps {
	/** Accessible label for the grid. Defaults to `"Calendar"`. */
	"aria-label"?: string;
	/**
	* Called when Escape is pressed while focus is inside the grid. Picker
	* contexts wire this up to close the popover.
	*/
	onEscape?: () => void;
	/**
	* Custom cell render function. When provided, the grid delegates every cell
	* to this function. When omitted, the grid renders a default
	* {@link CalendarCell} with content = the day of the month.
	*/
	children?: (args: CalendarCellRenderArgs) => ReactNode19;
	/** Merge into the root `<table>` style. */
	style?: React.CSSProperties;
	/** Merge into the root `<table>` className. */
	className?: string;
}
/**
* Compute the next focused date given a keyboard event against a current
* focused date. Returns `null` if the key is unhandled.
*
* Handles: Arrow keys (±1 day / ±7 days), Home (Sunday of the week),
* End (Saturday of the week), PageUp/PageDown (±1 month; +Shift = ±1 year).
*/
declare function nextFocusedDate(date: Date, key: string, shiftKey: boolean): Date | null;
import { ReactNode as ReactNode20 } from "react";
/** Props for `<Calendar.Header>`. */
interface CalendarHeaderPrimitiveProps {
	/**
	* Render-prop override. Receives the visible year + month (0-indexed) and
	* returns the label content. Defaults to `"{Month} {Year}"`.
	*/
	children?: (args: {
		year: number;
		month: number;
	}) => ReactNode20;
	/** Merge into the root element's style. */
	style?: React.CSSProperties;
	/** Merge into the root element's className. */
	className?: string;
}
/** Direction a Calendar.Nav button shifts the visible month. */
type CalendarNavDirection = "prev" | "next";
/** Props for `<Calendar.Nav>`. */
interface CalendarNavProps {
	/** Which direction to move the visible month. */
	direction: CalendarNavDirection;
	/** Number of months to shift per press. Defaults to `1`. */
	step?: number;
	/** Accessible label. Defaults to `"Previous month"` / `"Next month"`. */
	"aria-label"?: string;
	/**
	* Optional custom onClick. The default handler still runs afterwards —
	* return false from a custom handler to cancel. Useful for tracking.
	*/
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | boolean;
}
import { ReactNode as ReactNode21 } from "react";
/** Props for `<Calendar.Cell>`. */
interface CalendarCellProps {
	/** The date this cell represents. */
	date: Date;
	/** Override the rendered content. Defaults to the day of the month. */
	children?: ReactNode21;
	/** Merge into the inner `<button>` style. */
	style?: React.CSSProperties;
	/** Merge into the inner `<button>` className. */
	className?: string;
	/** Passthrough `onMouseEnter` — used by range pickers for hover preview. */
	onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	/** Passthrough `onMouseLeave`. */
	onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	/** Passthrough `onFocus`. */
	onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
	/** Passthrough `onBlur`. */
	onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
}
/**
* Compound Calendar primitive. Members:
*
* - `Calendar.Root` — owns selection, focused-date, and visible-month state
*   and provides the CalendarContext.
* - `Calendar.Header` — renders the currently visible month/year label.
* - `Calendar.Nav` — month navigation button (`direction="prev" | "next"`).
* - `Calendar.Grid` — the 6×7 day grid implementing the WAI-ARIA APG grid
*   keyboard pattern (roving tabindex, 2D arrow-key nav, Home/End,
*   PageUp/PageDown, Enter/Space, optional Escape).
* - `Calendar.Cell` — single day cell; default renderer for `Calendar.Grid`.
*/
declare const Calendar: {};
import React2 from "react";
/** Props for the ErrorBoundary component. */
interface ErrorBoundaryProps {
	/** Content to render when no error has occurred. */
	children: React2.ReactNode;
	/** Custom fallback UI renderer. Receives the caught error and a reset function. */
	fallback?: (props: {
		error: Error;
		resetErrorBoundary: () => void;
	}) => React2.ReactNode;
	/** Callback fired when an error is caught. Useful for logging. */
	onError?: (error: Error, errorInfo: React2.ErrorInfo) => void;
}
interface ErrorBoundaryState {
	error: Error | null;
	showStack: boolean;
}
/**
* A themed React error boundary that catches render errors in its subtree
* and displays a fallback UI with retry capability.
*/
declare class ErrorBoundary extends React2.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps);
	static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
	componentDidCatch(error: Error, errorInfo: React2.ErrorInfo): void;
	resetErrorBoundary: () => void;
	render(): React2.ReactNode;
}
import { ReactNode as ReactNode22 } from "react";
/** Visual type of a toast notification. */
type ToastType = "success" | "error" | "info" | "warning";
/** Configuration for a single toast instance. */
interface ToastItem {
	/** Unique identifier. */
	id: string;
	/** Message text to display. */
	message: string;
	/** Visual type controlling color.
	* @default 'info'
	*/
	type: ToastType;
	/** Auto-dismiss duration in milliseconds.
	* @default 4000
	*/
	duration: number;
}
/** Options when showing a toast. */
interface ShowToastOptions {
	/** Visual type controlling color.
	* @default 'info'
	*/
	type?: ToastType;
	/** Auto-dismiss duration in milliseconds.
	* @default 4000
	*/
	duration?: number;
}
/** Position of the toast container on screen. */
type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
interface ToastContextValue {
	showToast: (message: string, typeOrOptions?: ToastType | ShowToastOptions) => void;
}
/**
* Returns the `showToast` function from the nearest `ToastProvider`.
* Must be called within a `<ToastProvider>` tree.
*/
declare function useToast(): ToastContextValue;
/** Props for the ToastProvider context component. */
interface ToastProviderProps {
	/** Application content. */
	children: ReactNode22;
	/** Screen position of the toast stack.
	* @default 'top-right'
	*/
	position?: ToastPosition;
}
/**
* Provides toast notification context to the component tree.
* Renders a portal-based toast container with stacked, auto-dismissing messages.
*/
declare function ToastProvider({ children, position }: ToastProviderProps): React.JSX.Element;
import { ReactNode as ReactNode23 } from "react";
interface ComboboxRootProps {
	/** Controlled input value (text). */
	value?: string;
	/** Initial input value for uncontrolled usage. */
	defaultValue?: string;
	/** Called on every input change — both free-text typing and option selection. */
	onValueChange?: (value: string) => void;
	/** Called specifically when an option is selected from the list. */
	onSelect?: (option: {
		value: string;
		textValue: string;
	}) => void;
	/** When true, disables the input and blocks opening. */
	disabled?: boolean;
	/** When true, applies error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
	/**
	* Open the listbox on mount. Use this when the consumer surface itself is the
	* "open" affordance (e.g. a modal palette where the user has already declared
	* intent to see options) — autoFocus on the Input is otherwise gated on
	* `items.length > 0`, and Items register via useEffect after mount, so the
	* listbox would stay closed until the user typed or refocused.
	* @default false
	*/
	defaultOpen?: boolean;
	/** Subtree containing Input and List. */
	children: ReactNode23;
}
interface ComboboxInputProps {
	placeholder?: string;
	readOnly?: boolean;
	maxLength?: number;
	inputMode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
	name?: string;
	required?: boolean;
	autoFocus?: boolean;
	autoComplete?: string;
	id?: string;
	form?: string;
	tabIndex?: number;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"data-testid"?: string;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
interface ComboboxListProps {
	children: ReactNode23;
}
interface ComboboxItemProps {
	/** The value of the option — passed to onSelect when picked. */
	value: string;
	/**
	* Text written into the input when this item is selected. Defaults to
	* `children` when `children` is a string.
	*/
	textValue?: string;
	children: ReactNode23;
}
interface ComboboxEmptyProps {
	children: ReactNode23;
}
/**
* Compound Combobox — typeahead select with free-text input. Consumer owns
* filtering (render whichever `Combobox.Item` children match the current
* input value).
*
* ```tsx
* const [value, setValue] = useState('');
* const filtered = options.filter(o =>
*   o.label.toLowerCase().includes(value.toLowerCase())
* );
*
* <Combobox.Root value={value} onValueChange={setValue} onSelect={(opt) => ...}>
*   <Combobox.Input placeholder="Search..." aria-label="Fruit" />
*   <Combobox.List>
*     {filtered.length === 0 && <Combobox.Empty>No results</Combobox.Empty>}
*     {filtered.map(o => (
*       <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
*         {o.label}
*       </Combobox.Item>
*     ))}
*   </Combobox.List>
* </Combobox.Root>
* ```
*/
declare const Combobox: {};
import { ReactNode as ReactNode24 } from "react";
/**
* Match spec for the global shortcut. Consumers pass a `key` (lowercase match
* against `event.key.toLowerCase()`) plus optional `ctrl` / `meta` / `shift` /
* `alt` modifier requirements. The default spec accepts Cmd+K on macOS and
* Ctrl+K elsewhere — both typed with a single `{ key: 'k', mod: true }` where
* `mod` means "platform primary modifier" (Cmd on Mac, Ctrl on Win/Linux).
*/
interface CommandPaletteShortcut {
	/** Case-insensitive key match against `event.key`. */
	key: string;
	/** When true, require the platform primary modifier (Cmd on Mac, Ctrl elsewhere). */
	mod?: boolean;
	/** Require `ctrlKey` regardless of platform. */
	ctrl?: boolean;
	/** Require `metaKey` regardless of platform. */
	meta?: boolean;
	/** Require `shiftKey`. */
	shift?: boolean;
	/** Require `altKey`. */
	alt?: boolean;
}
interface CommandPaletteRootProps {
	/** Controlled open state. */
	open?: boolean;
	/** Uncontrolled initial open state.
	* @default false
	*/
	defaultOpen?: boolean;
	/** Called when the palette wants to open or close (shortcut, Escape,
	* overlay click, selection). */
	onOpenChange?: (open: boolean) => void;
	/** Accessible label for the dialog — required. Picked up by `Content`'s
	* `aria-label`. */
	"aria-label": string;
	/** Override the default Cmd+K / Ctrl+K shortcut. Pass `null` to turn off
	* the document-level listener entirely.
	* @default { key: 'k', mod: true }
	*/
	shortcut?: CommandPaletteShortcut | null;
	/** When true, the default shortcut is ignored even if `shortcut` is set.
	* Useful for programmatic-only palettes or when a parent wants to gate
	* activation on app state (e.g. "only while logged in").
	* @default false
	*/
	disabled?: boolean;
	/** `CommandPalette.Trigger` and `CommandPalette.Content`. */
	children: ReactNode24;
}
interface CommandPaletteTriggerProps {
	/** When true, merges Trigger's open-toggle behavior onto the single child
	* element instead of rendering a `<button>`. The child must accept `onClick`
	* and `aria-*` props.
	* @default false
	*/
	asChild?: boolean;
	/** Trigger content. With `asChild=false` (default), renders inside a plain
	* unstyled `<button>` — consumers wrap their own Button atom for any styled
	* trigger, keeping the library out of the "which variant" decision.
	*/
	children: ReactNode24;
	/** Optional click handler chained before the open-toggle. Returning `false`
	* or calling `event.preventDefault()` does **not** cancel the toggle —
	* consumers who want gating should use `onOpenChange` on Root. */
	onClick?: React.MouseEventHandler<HTMLElement>;
}
interface CommandPaletteContentProps {
	/** Placeholder shown in the filter input.
	* @default 'Type a command or search…'
	*/
	placeholder?: string;
	/** Optional rendered-below fallback when no children match the query.
	* @default 'No results.'
	*/
	emptyLabel?: ReactNode24;
	/** `CommandPalette.Group` and/or `CommandPalette.Item` children. */
	children: ReactNode24;
}
interface CommandPaletteGroupProps {
	/** Heading label rendered above the grouped items (e.g. "Navigation"). */
	label: string;
	/** `CommandPalette.Item` children. */
	children: ReactNode24;
}
interface CommandPaletteItemProps {
	/** Stable identifier for the command. Also used as fallback match text. */
	value: string;
	/** Fires when the consumer picks this command (click or Enter on the
	* focused row). Root closes automatically after `onSelect` returns. */
	onSelect: () => void;
	/** Optional leading icon (library registry name). Consumers wanting a
	* custom icon pass a `ReactNode` via the `children` tree instead. */
	icon?: IconName;
	/** Keyboard hint rendered on the right as a `<kbd>` sequence. Pass either
	* the literal hint text (`'⌘K'`) or an array of key parts rendered as
	* separate `<kbd>` spans (`['⌘', 'K']`). */
	shortcut?: string | string[];
	/** Extra match text that isn't visible in the row. Useful for aliases —
	* `keywords={['cmd', 'terminal']}` on a "Run command…" item. */
	keywords?: string[];
	/** Row content. String children double as the match text; use a ReactNode
	* if you need formatting. */
	children: ReactNode24;
}
/**
* Cmd+K command palette built on the \`Combobox\` compound plus a document-level
* shortcut, a modal-style portal, and a filtered subtree.
*
* \`\`\`tsx
* <CommandPalette.Root aria-label="Command palette">
*   <CommandPalette.Trigger>
*     <span>Commands</span>
*     <kbd>⌘K</kbd>
*   </CommandPalette.Trigger>
*   <CommandPalette.Content>
*     <CommandPalette.Group label="Navigation">
*       <CommandPalette.Item
*         value="home"
*         icon="arrow-left"
*         shortcut={['G', 'H']}
*         onSelect={() => router.push('/')}
*       >
*         Go to home
*       </CommandPalette.Item>
*     </CommandPalette.Group>
*     <CommandPalette.Group label="Actions">
*       <CommandPalette.Item
*         value="new-task"
*         icon="plus"
*         shortcut="⌘N"
*         keywords={['create', 'todo']}
*         onSelect={() => openNewTask()}
*       >
*         New task
*       </CommandPalette.Item>
*     </CommandPalette.Group>
*   </CommandPalette.Content>
* </CommandPalette.Root>
* \`\`\`
*/
declare const CommandPalette: {};
/** A single chip option. */
interface ChipItem {
	/** Unique value identifying this chip. */
	value: string;
	/** Display label. */
	label: string;
	/** Optional group name — chips sharing a group render under an uppercase section heading. */
	group?: string;
}
/** Props for ChipPicker. */
interface ChipPickerProps {
	/** All available chip options. */
	items: ChipItem[];
	/** Controlled selection. Omit for uncontrolled mode (use defaultSelected). */
	selected?: string[];
	/** Uncontrolled initial selection. Ignored when `selected` is provided. */
	defaultSelected?: string[];
	/** Called with the updated selection array when a chip is toggled. */
	onChange?: (selected: string[]) => void;
	/** Accessible label for the group. */
	"aria-label"?: string;
}
/** Multi-select toggle chip group with optional category grouping. */
declare function ChipPicker({ items, selected: controlledSelected, defaultSelected, onChange, "aria-label": ariaLabel }: ChipPickerProps): React.JSX.Element;
import { ReactNode as ReactNode25 } from "react";
/** A text input with built-in debounce, search icon, and optional trailing slot. */
interface SearchInputProps {
	/** Current search value (controlled). */
	value: string;
	/** Debounced search callback — fires after `debounceMs` of inactivity. */
	onSearch: (value: string) => void;
	/** Debounce delay in milliseconds.
	* @default 300
	*/
	debounceMs?: number;
	/** Optional content rendered inside the input on the right side (toggle, clear button, etc.). */
	trailing?: ReactNode25;
	placeholder?: string;
	disabled?: boolean;
	name?: string;
	id?: string;
	autoFocus?: boolean;
	tabIndex?: number;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"data-testid"?: string;
}
declare const SearchInput: React.ForwardRefExoticComponent<Omit<SearchInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
/** A single segment definition. */
interface Segment {
	/** Unique value identifying this segment. */
	value: string;
	/** Display label — text shown in the segment button. */
	label: string;
	/** Optional icon name (built-in registry or icon-font name). */
	icon?: IconName | (string & {});
}
/** A generic segmented toggle control with a sliding pill indicator. */
interface SegmentedControlProps {
	/** Segment definitions. */
	segments: Segment[];
	/** Controlled selected segment value. Omit for uncontrolled mode (use defaultValue). */
	value?: string;
	/** Uncontrolled initial value. Ignored when `value` is provided. Defaults to the first segment. */
	defaultValue?: string;
	/** Called when the user selects a segment. */
	onChange?: (value: string) => void;
	/** Control size.
	* @default 'md'
	*/
	size?: "sm" | "md";
	/** Accessible label for the group. */
	"aria-label"?: string;
}
declare function SegmentedControl({ segments, value: controlledValue, defaultValue, onChange, size, "aria-label": ariaLabel }: SegmentedControlProps): React.JSX.Element;
import { ReactNode as ReactNode26 } from "react";
/** Severity variant controlling banner color. */
type AlertBannerVariant = "info" | "warning" | "error" | "success";
/** Props for the AlertBanner component. */
interface AlertBannerProps {
	/** Severity variant controlling color. */
	variant: AlertBannerVariant;
	/** Message content. */
	children: ReactNode26;
	/** If provided, shows a dismiss button and is called on dismiss. */
	onDismiss?: () => void;
	/** Optional leading icon. Defaults to a variant-appropriate icon. */
	icon?: ReactNode26;
}
/**
* Full-width dismissable notification banner with severity variants.
* Slides in from the top. Consumers own dismiss timing — wrap `onDismiss`
* in `useEffect` + `setTimeout` if auto-dismiss is needed.
*/
declare const AlertBanner: React.ForwardRefExoticComponent<Omit<AlertBannerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode27 } from "react";
/** Props for {@link TopBarRoot}. */
interface TopBarRootProps extends BaseComponentProps {
	/** Accessible label for the header landmark. */
	"aria-label"?: string;
	/** Children — typically `<TopBar.Leading>`, `<TopBar.Nav>`, `<TopBar.Trailing>`. */
	children?: ReactNode27;
	/** Sticks to the top of the viewport on scroll.
	* @default false
	*/
	sticky?: boolean;
}
declare const TopBarRoot: React.ForwardRefExoticComponent<Omit<TopBarRootProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface TopBarLeadingProps {
	children?: ReactNode27;
}
declare function TopBarLeading({ children }: TopBarLeadingProps): React.JSX.Element;
interface TopBarNavProps {
	children?: ReactNode27;
	/** Accessible label for the nav region. @default 'Primary' */
	"aria-label"?: string;
}
declare function TopBarNav({ children, "aria-label": ariaLabel }: TopBarNavProps): React.JSX.Element;
interface TopBarLinkProps {
	/** Marks this link as the active route. Applies accent color + underline + aria-current="page". */
	active?: boolean;
	/**
	* Render as the single child element instead of a `<button>`. Merges
	* the link's style + data-attrs + ref into the child — plug in your
	* router's Link, a plain `<a>`, or anything that can receive props.
	* @default false
	*/
	asChild?: boolean;
	/** Called when the link is clicked (when not asChild; consumer's element handles its own events otherwise). */
	onClick?: React.MouseEventHandler<HTMLElement>;
	children?: ReactNode27;
}
declare const TopBarLink: React.ForwardRefExoticComponent<TopBarLinkProps & React.RefAttributes<HTMLElement>>;
interface TopBarTrailingProps {
	children?: ReactNode27;
}
declare function TopBarTrailing({ children }: TopBarTrailingProps): React.JSX.Element;
/**
* Compound app-level navigation header. Consumer composes `<TopBar.Root>`
* with `<TopBar.Leading>`, `<TopBar.Nav>` + `<TopBar.Link>`, and
* `<TopBar.Trailing>`. Links support `asChild` for router integration —
* routing is entirely the consumer's concern.
*
* @example
* ```tsx
* <TopBar.Root aria-label="Main" sticky>
*   <TopBar.Leading>My App</TopBar.Leading>
*   <TopBar.Nav>
*     <TopBar.Link asChild active>
*       <a href="/home">Home</a>
*     </TopBar.Link>
*     <TopBar.Link asChild>
*       <a href="/projects">Projects</a>
*     </TopBar.Link>
*   </TopBar.Nav>
*   <TopBar.Trailing>
*     <ThemePicker />
*   </TopBar.Trailing>
* </TopBar.Root>
* ```
*/
declare const TopBar: {};
import { ReactNode as ReactNode28 } from "react";
type EmptyPageLevel = "page" | "section";
/** Props for {@link EmptyPageRoot}. */
interface EmptyPageRootProps extends BaseComponentProps {
	/** Heading scale — `'page'` renders Title as `<h1>` with page-level padding;
	* `'section'` renders Title as `<h2>` with section-level padding.
	* @default 'page'
	*/
	level?: EmptyPageLevel;
	/** Accessible label fallback. If omitted, Root's `<section>` is labelled
	* by the title via `aria-labelledby`. */
	"aria-label"?: string;
	/** Children — typically `<EmptyPage.Icon>`, `<EmptyPage.Title>`,
	* `<EmptyPage.Description>`, `<EmptyPage.Actions>`, `<EmptyPage.Tips>`. */
	children?: ReactNode28;
}
declare const EmptyPageRoot: React.ForwardRefExoticComponent<Omit<EmptyPageRootProps, "ref"> & React.RefAttributes<HTMLElement>>;
/** Props for {@link EmptyPageIcon}. */
interface EmptyPageIconProps {
	/** The hero icon or illustration. Typically `<Icon name="…" size="xl" />`
	* or a custom SVG. The wrapper applies muted color + hero-sized footprint
	* and marks itself `aria-hidden`; the Title carries the semantic label. */
	children: ReactNode28;
}
declare function EmptyPageIcon({ children }: EmptyPageIconProps): React.JSX.Element;
/** Props for {@link EmptyPageTitle}. */
interface EmptyPageTitleProps {
	/** The heading text. Renders as `<h1>` when Root's `level='page'`,
	* `<h2>` when `level='section'`. */
	children: ReactNode28;
}
declare function EmptyPageTitle({ children }: EmptyPageTitleProps): React.JSX.Element;
/** Props for {@link EmptyPageDescription}. */
interface EmptyPageDescriptionProps {
	/** Paragraph body copy explaining the zero state. */
	children: ReactNode28;
}
declare function EmptyPageDescription({ children }: EmptyPageDescriptionProps): React.JSX.Element;
/** Props for {@link EmptyPageActions}. */
interface EmptyPageActionsProps {
	/** Action buttons — consumer composes primary + secondary `<Button>` children. */
	children?: ReactNode28;
}
declare function EmptyPageActions({ children }: EmptyPageActionsProps): React.JSX.Element;
/** Props for {@link EmptyPageTips}. */
interface EmptyPageTipsProps {
	/** Accessible label for the tip list.
	* @default 'Getting started'
	*/
	"aria-label"?: string;
	/** Tip entries — typically `<EmptyPage.Tip>` children. */
	children?: ReactNode28;
}
declare function EmptyPageTips({ "aria-label": ariaLabel, children }: EmptyPageTipsProps): React.JSX.Element | null;
/** Props for {@link EmptyPageTip}. */
interface EmptyPageTipProps {
	/** Optional leading icon rendered before the content. */
	icon?: IconName;
	/** When true, renders the tip's styling onto the single child element
	* instead of the default `<span>` — plug in your router's Link or an `<a>`.
	* The wrapping `<li>` is always present for list semantics.
	* @default false
	*/
	asChild?: boolean;
	/** Tip content. */
	children: ReactNode28;
}
declare function EmptyPageTip({ icon, asChild, children }: EmptyPageTipProps): React.JSX.Element;
/**
* Full-page zero-state takeover. Distinct from the inline `<EmptyState>`
* molecule: EmptyPage owns hero-level layout with title/description/action
* tiers plus an optional tip row. Consumer composes the slots.
*
* @example
* ```tsx
* <EmptyPage.Root>
*   <EmptyPage.Icon>
*     <Icon name="edit" size="xl" />
*   </EmptyPage.Icon>
*   <EmptyPage.Title>No projects yet</EmptyPage.Title>
*   <EmptyPage.Description>
*     Spin up your first project to see it appear here.
*   </EmptyPage.Description>
*   <EmptyPage.Actions>
*     <Button variant="primary">Create project</Button>
*     <Button variant="secondary">Import from CSV</Button>
*   </EmptyPage.Actions>
*   <EmptyPage.Tips>
*     <EmptyPage.Tip icon="info">Start from a template</EmptyPage.Tip>
*     <EmptyPage.Tip icon="external-link" asChild>
*       <a href="/docs">Read the docs</a>
*     </EmptyPage.Tip>
*   </EmptyPage.Tips>
* </EmptyPage.Root>
* ```
*/
declare const EmptyPage: {};
import { ReactNode as ReactNode29 } from "react";
interface AppShellContextValue {
	sidebarCollapsed: boolean;
	setSidebarCollapsed: (next: boolean) => void;
	rightPanelOpen: boolean;
	setRightPanelOpen: (next: boolean) => void;
}
/**
* Read the `<AppShell.Root>` context from a consumer component. Use this to
* build a sidebar-collapse toggle inside `<AppShell.TopBar>` — the canonical
* six-line recipe is:
*
* ```tsx
* function SidebarToggle(): React.JSX.Element {
*   const { sidebarCollapsed, setSidebarCollapsed } = useAppShellContext();
*   return (
*     <IconButton
*       icon="menu"
*       aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
*       aria-expanded={!sidebarCollapsed}
*       onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
*     />
*   );
* }
* ```
*
* Throws if called outside `<AppShell.Root>`.
*/
declare function useAppShellContext(): AppShellContextValue;
/**
* Non-throwing companion to {@link useAppShellContext}. Returns `true` when
* the calling component is rendered inside `<AppShell.Root>`, `false`
* otherwise. Used by sibling organisms (e.g. `DetailPage.Body`) to decide
* between rendering their own `<main>` landmark (standalone) or a plain
* `<div>` (when `<AppShell.Main>` already provides the single `<main>` per
* page). Never throws.
*/
declare function useIsInsideAppShell(): boolean;
/** Props for {@link AppShellRoot}. */
interface AppShellRootProps extends BaseComponentProps {
	/** Controlled sidebar collapsed state. When set, `<AppShell.Sidebar>` reads
	* this value and ignores `defaultSidebarCollapsed`. Pair with
	* `onSidebarCollapsedChange` to own the state yourself. */
	sidebarCollapsed?: boolean;
	/** Uncontrolled initial sidebar collapsed state. Only used when
	* `sidebarCollapsed` is not provided.
	* @default false
	*/
	defaultSidebarCollapsed?: boolean;
	/** Fires when the sidebar collapses or expands — either via consumer
	* code calling `setSidebarCollapsed` (from `useAppShellContext`) or from
	* a peer sub-part. */
	onSidebarCollapsedChange?: (next: boolean) => void;
	/** Controlled right-panel open state. When set, `<AppShell.RightPanel>`
	* reads this value and ignores `defaultRightPanelOpen`. */
	rightPanelOpen?: boolean;
	/** Uncontrolled initial right-panel open state. Only used when
	* `rightPanelOpen` is not provided.
	* @default true
	*/
	defaultRightPanelOpen?: boolean;
	/** Fires when the right panel opens or closes. */
	onRightPanelOpenChange?: (next: boolean) => void;
	/** Children — any combination of `<AppShell.TopBar>`, `<AppShell.Sidebar>`,
	* `<AppShell.Main>`, `<AppShell.RightPanel>`. JSX order is not significant;
	* grid placement is determined by component identity. */
	children?: ReactNode29;
}
declare const AppShellRoot: React.ForwardRefExoticComponent<Omit<AppShellRootProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** Props for {@link AppShellTopBar}. Mirrors `TopBarRootProps` exactly — the
* shell passes them straight through to `<TopBar.Root>` and anchors the
* result into the top grid row. */
type AppShellTopBarProps = TopBarRootProps;
declare function AppShellTopBar(props: AppShellTopBarProps): React.JSX.Element;
/** Props for {@link AppShellSidebar}. */
interface AppShellSidebarProps {
	/** Accessible label for the `<nav>` landmark.
	* @default 'Sidebar'
	*/
	"aria-label"?: string;
	/** Sidebar content. Pass a ReactNode for a static sidebar, or a function
	* that receives `{ collapsed }` to render different layouts in the
	* expanded vs collapsed state — e.g. hide labels and show icons only
	* when collapsed. */
	children?: ReactNode29 | ((state: {
		collapsed: boolean;
	}) => ReactNode29);
}
declare function AppShellSidebar({ "aria-label": ariaLabel, children }: AppShellSidebarProps): React.JSX.Element;
/** Props for {@link AppShellSidebarSection}. */
interface AppShellSidebarSectionProps {
	/** Optional uppercase section label rendered above the items. When the
	* sidebar is collapsed, the label is visually hidden (still reachable to
	* screen readers) so the item rail reads as a single nav region. */
	label?: string;
	/** Section contents — typically the consumer's own link rows. */
	children?: ReactNode29;
}
declare function AppShellSidebarSection({ label, children }: AppShellSidebarSectionProps): React.JSX.Element;
/** Props for {@link AppShellMain}. */
interface AppShellMainProps extends BaseComponentProps {
	/** Accessible label for the `<main>` landmark. Rarely needed — a page
	* typically has a visible heading inside Main that screen readers use. */
	"aria-label"?: string;
	/** Pair with a heading's generated id to label the region. */
	"aria-labelledby"?: string;
	children?: ReactNode29;
}
declare function AppShellMain({ children,...rest }: AppShellMainProps): React.JSX.Element;
/** Props for {@link AppShellRightPanel}. */
interface AppShellRightPanelProps {
	/** Accessible label for the `<aside>` landmark.
	* @default 'Context panel'
	*/
	"aria-label"?: string;
	children?: ReactNode29;
}
declare function AppShellRightPanel({ "aria-label": ariaLabel, children }: AppShellRightPanelProps): React.JSX.Element;
/**
* App viewport envelope — a CSS grid of `TopBar` + `Sidebar` + `Main` +
* optional `RightPanel`. Replaces hand-assembled layouts and makes
* sidebar-collapse a library decision instead of a per-consumer
* re-implementation.
*
* JSX order of sub-parts is not significant; grid placement is determined
* by component identity, and DOM order is locked to `TopBar → Sidebar →
* Main → RightPanel` so keyboard focus flow stays predictable regardless
* of how the consumer writes the tree.
*
* Both `sidebarCollapsed` and `rightPanelOpen` follow the standard
* controlled/uncontrolled contract (see the compound-component ADR §4).
* Responsive collapse (e.g. collapse below 900px) is intentionally not
* shipped — wire `useMediaQuery` into the `sidebarCollapsed` prop yourself.
*
* @example
* ```tsx
* <AppShell.Root defaultSidebarCollapsed={false}>
*   <AppShell.TopBar>
*     <TopBar.Leading>My App</TopBar.Leading>
*   </AppShell.TopBar>
*   <AppShell.Sidebar>
*     <AppShell.SidebarSection label="Workspace">
*       <a href="/inbox">Inbox</a>
*       <a href="/projects">Projects</a>
*     </AppShell.SidebarSection>
*   </AppShell.Sidebar>
*   <AppShell.Main>
*     <h1>Dashboard</h1>
*   </AppShell.Main>
*   <AppShell.RightPanel>Context</AppShell.RightPanel>
* </AppShell.Root>
* ```
*/
declare const AppShell: {};
import { ReactNode as ReactNode30 } from "react";
/** Props for {@link DataTablePageRoot}. */
interface DataTablePageRootProps extends BaseComponentProps {
	/** Number of data rows the consumer has for the current page/slice. Required —
	* the consumer knows this value (it's typically `items.length`); passing it
	* to Root lets `DataTablePage.Empty` and `DataTablePage.Table` coordinate
	* the empty/populated transition without the consumer writing a ternary
	* at the call site.
	*
	* When `0`, Root sets `data-state="empty"`; Empty renders itself, Table
	* slot renders what the consumer provides (typically header rows only).
	* When `> 0`, Root sets `data-state="populated"`; Empty returns `null`.
	*
	* Loading isn't a distinct state here — render a `<Skeleton>` table inside
	* `DataTablePage.Table` while loading; switch to the real rows when data
	* arrives. `rowCount` is for "no data, not loading." */
	rowCount: number;
	/** Accessible label fallback. If omitted, Root's `<section>` is labelled
	* by the Header's title via `aria-labelledby` (when a Header is present). */
	"aria-label"?: string;
	/** Children — any combination of `<DataTablePage.Header>`,
	* `<DataTablePage.FilterBar>`, `<DataTablePage.Table>`,
	* `<DataTablePage.Pagination>`, `<DataTablePage.Empty>`. Rendered in source
	* order (JSX order is visual order). */
	children?: ReactNode30;
}
declare const DataTablePageRoot: React.ForwardRefExoticComponent<Omit<DataTablePageRootProps, "ref"> & React.RefAttributes<HTMLElement>>;
/** Props for {@link DataTablePageHeader}. Identical surface to `<Header>` —
* the shell forwards every prop through and pins `level` to `'page'` by
* default (this is a page-scoped organism). */
type DataTablePageHeaderProps = HeaderProps;
declare function DataTablePageHeader({ level,...rest }: DataTablePageHeaderProps): React.JSX.Element;
/** Props for {@link DataTablePageFilterBar}. Identical surface to
* `Table.FilterBar` — both schema-driven (`filters={…}`) and children-
* composition (`<Table.FilterBar.Text>` / `.Select`) modes work identically
* because this is a thin forward. */
type DataTablePageFilterBarProps = FilterBarProps;
declare function DataTablePageFilterBar(props: DataTablePageFilterBarProps): React.JSX.Element;
/** Props for {@link DataTablePageTable}. Identical surface to `<Table>` —
* consumer still composes `Table.Row`, `TableCell`, `TableHeader`, etc.
* inside. */
type DataTablePageTableProps = TableProps;
declare function DataTablePageTable(props: DataTablePageTableProps): React.JSX.Element;
/** Props for {@link DataTablePagePagination}. Identical surface to the
* `<Pagination>` primitive. */
type DataTablePagePaginationProps = PaginationProps;
declare function DataTablePagePagination(props: DataTablePagePaginationProps): React.JSX.Element;
/** Props for {@link DataTablePageEmpty}. Identical surface to `<EmptyState>`
* with `variant` pinned to `'plain'` (Root already owns the page-level
* spacing). Only renders when Root's `rowCount === 0`; otherwise returns
* `null` so consumers can leave it in the JSX unconditionally and the
* organism toggles its visibility based on `rowCount`. */
type DataTablePageEmptyProps = Omit<EmptyStateProps, "variant">;
declare function DataTablePageEmpty(props: DataTablePageEmptyProps): React.JSX.Element | null;
/**
* CRUD page envelope. Collapses the Header + FilterBar + Table + Pagination
* + EmptyState assembly that every data-list screen currently hand-rolls
* into a compound whose parts forward to the underlying primitives.
*
* Root owns a single piece of coordinating state (`rowCount`) and flips
* `data-state="empty" | "populated"` accordingly. `DataTablePage.Empty`
* reads the same context and renders itself only on the empty branch —
* consumers never write `{rows.length === 0 ? <Empty /> : <Table />}`
* conditionals; they leave all the slots in the JSX and the organism
* toggles `Empty`.
*
* Scope is intentionally narrow: the organism does not fetch, filter,
* paginate, or select rows. It is a slot arrangement with one conditional
* render. Routing, data shape, and loading all stay with the consumer.
*
* @example
* ```tsx
* <DataTablePage.Root rowCount={items.length}>
*   <DataTablePage.Header title="Projects" subtitle="42 total" trailing={<Button>New</Button>} />
*   <DataTablePage.FilterBar
*     values={filters}
*     onChange={setFilters}
*     filters={[{ type: 'text', key: 'q', placeholder: 'Search…' }]}
*   />
*   <DataTablePage.Table>
*     <TableHeader>
*       <TableHeaderCell>Name</TableHeaderCell>
*     </TableHeader>
*     <TableBody>
*       {items.map((i) => (
*         <TableRow key={i.id}><TableCell>{i.name}</TableCell></TableRow>
*       ))}
*     </TableBody>
*   </DataTablePage.Table>
*   <DataTablePage.Pagination page={page} totalPages={total} total={items.length} onPageChange={setPage} />
*   <DataTablePage.Empty icon="inbox" message="No projects match your filters." />
* </DataTablePage.Root>
* ```
*/
declare const DataTablePage: {};
import { ReactNode as ReactNode31 } from "react";
/** Props for {@link DetailPageRoot}. */
interface DetailPageRootProps extends BaseComponentProps {
	/** Accessible label fallback for the outer `<section>`. When omitted,
	* Root's `aria-labelledby` points at the Header title (if a Header is
	* present). */
	"aria-label"?: string;
	/** Children — any combination of `<DetailPage.Header>`,
	* `<DetailPage.Meta>`, `<DetailPage.Body>`, `<DetailPage.Actions>`,
	* `<DetailPage.RightPanel>`. JSX order is visual order — except
	* `DetailPage.Actions`, which portals into the Header's trailing slot. */
	children?: ReactNode31;
}
declare const DetailPageRoot: React.ForwardRefExoticComponent<Omit<DetailPageRootProps, "ref"> & React.RefAttributes<HTMLElement>>;
/** Props for {@link DetailPageHeader}. */
interface DetailPageHeaderProps {
	/** Page title. Rendered as `<h1>` via the underlying `<Header>` primitive. */
	title: string;
	/** Optional subtitle rendered below the title in muted style. */
	subtitle?: string;
	/** Inline content rendered next to the title (e.g. `<Badge>`,
	* `<StatusDot>`). */
	indicator?: ReactNode31;
	/** When set, renders a left-aligned `<IconButton>` with an arrow-left
	* icon and `aria-label={backLabel}`. Consumer owns routing — the handler
	* fires on click; the library never imports a router.
	*
	* Consumers wanting breadcrumbs compose them above `<DetailPage.Root>`
	* themselves; DetailPage does not ship a breadcrumb primitive. */
	onBack?: () => void;
	/** Accessible label for the back button. Ignored when `onBack` is
	* undefined.
	* @default 'Back'
	*/
	backLabel?: string;
}
declare function DetailPageHeader({ title, subtitle, indicator, onBack, backLabel }: DetailPageHeaderProps): React.JSX.Element;
/** Props for {@link DetailPageMeta}. */
interface DetailPageMetaProps {
	/** Children — typically `<DetailPage.MetaItem>` entries. Non-MetaItem
	* children render but trigger a dev-mode console.warn once per mount. */
	children?: ReactNode31;
}
declare function DetailPageMeta({ children }: DetailPageMetaProps): React.JSX.Element;
/** Props for {@link DetailPageMetaItem}. */
interface DetailPageMetaItemProps {
	/** The key label, rendered as `<dt>` in muted style. */
	label: string;
	/** The value, rendered as `<dd>`. Accepts any ReactNode so consumers can
	* slot in Badges, relative-time components, or plain strings. */
	children: ReactNode31;
}
declare function DetailPageMetaItem({ label, children }: DetailPageMetaItemProps): React.JSX.Element;
/** Props for {@link DetailPageBody}. */
interface DetailPageBodyProps extends BaseComponentProps {
	/** Accessible label for the Body landmark when rendered as `<main>`.
	* Ignored when inside an `<AppShell>` (Body is a `<div>` there). */
	"aria-label"?: string;
	children?: ReactNode31;
}
declare function DetailPageBody({ children,...rest }: DetailPageBodyProps): React.JSX.Element;
/** Props for {@link DetailPageActions}. */
interface DetailPageActionsProps {
	/** Action buttons — consumer composes `<Button>` / `<IconButton>` children.
	* Rendered via portal into the Header's trailing slot, so Actions reads
	* as a sibling of `<DetailPage.Header>` in JSX even though it ends up
	* inside the header row at render time.
	*
	* When `DetailPage.Header` is not present, Actions renders nothing
	* (there's no slot to target). */
	children?: ReactNode31;
}
declare function DetailPageActions({ children }: DetailPageActionsProps): React.JSX.Element | null;
/** Props for {@link DetailPageRightPanel}. */
interface DetailPageRightPanelProps {
	/** Accessible label for the `<aside>` landmark.
	* @default 'Details'
	*/
	"aria-label"?: string;
	children?: ReactNode31;
}
declare function DetailPageRightPanel({ "aria-label": ariaLabel, children }: DetailPageRightPanelProps): React.JSX.Element;
/**
* Entity-detail envelope — the shell every app with entities (tasks,
* projects, users, documents) hand-rolls today. Compound slots for title +
* back affordance + metadata (semantic `<dl>`) + main body + trailing
* actions + optional right panel.
*
* `DetailPage.Actions` is the one reparenting exception in this organism's
* JSX → DOM mapping: consumers write Actions as a sibling of Header, and
* the organism portals its children into the Header's trailing slot. This
* keeps action composition ergonomic (not nested inside a `trailing` prop)
* while preserving the visual result.
*
* `DetailPage.Body` is a `<div>` when rendered inside `<AppShell.Main>`
* (so the page keeps exactly one `<main>` landmark) and a `<main>` when
* used standalone. No prop needed — the decision comes from
* `useIsInsideAppShell()`.
*
* Replaces the retired `<MetadataTable>` component (v0.4 audit) with a
* first-class `<DetailPage.Meta>` / `<DetailPage.MetaItem>` compound that
* renders the semantic `<dl>/<dt>/<dd>` markup directly.
*
* @example
* ```tsx
* <DetailPage.Root>
*   <DetailPage.Header
*     title="Ship DetailPage"
*     subtitle="organism · feature"
*     onBack={() => history.back()}
*   />
*   <DetailPage.Actions>
*     <Button variant="secondary">Edit</Button>
*     <Button variant="primary">Publish</Button>
*   </DetailPage.Actions>
*   <DetailPage.Meta>
*     <DetailPage.MetaItem label="Status">
*       <Badge variant="success">In progress</Badge>
*     </DetailPage.MetaItem>
*     <DetailPage.MetaItem label="Created">2 days ago</DetailPage.MetaItem>
*     <DetailPage.MetaItem label="Owner">Alex</DetailPage.MetaItem>
*   </DetailPage.Meta>
*   <DetailPage.Body>
*     <TabStrip ... />
*   </DetailPage.Body>
*   <DetailPage.RightPanel>
*     <h3>Activity</h3>
*   </DetailPage.RightPanel>
* </DetailPage.Root>
* ```
*/
declare const DetailPage: {};
import { FormEvent, ReactNode as ReactNode32 } from "react";
/** Sticky mode for `FormLayout.Actions`. */
type FormLayoutSticky = "viewport" | "container" | false;
/** Public context shape exposed via `useFormLayout()`. */
interface FormLayoutContextValue {
	/** Current dirty state. */
	dirty: boolean;
	/** Set the dirty state. Updates controlled consumers via `onDirtyChange`. */
	setDirty: (next: boolean) => void;
	/** Current saving state. */
	saving: boolean;
	/** Set the saving state. Updates controlled consumers via `onSavingChange`. */
	setSaving: (next: boolean) => void;
}
/**
* Read the `<FormLayout.Root>` context from a consumer component. Exposes
* `dirty`, `setDirty`, `saving`, `setSaving` so consumers can render custom
* UI that reacts to form state (e.g. a `*` next to a changed field, a
* floating "unsaved changes" badge outside the Actions bar).
*
* Throws if called outside `<FormLayout.Root>`.
*/
declare function useFormLayout(): FormLayoutContextValue;
/** Props for {@link FormLayoutRoot}. */
interface FormLayoutRootProps extends BaseComponentProps {
	/** Controlled dirty state. When set, Root reads this value and ignores
	* `defaultDirty`. Pair with `onDirtyChange` to own the state yourself
	* (the common path for React Hook Form / Formik / TanStack Form
	* consumers — `dirty={formState.isDirty}`). */
	dirty?: boolean;
	/** Uncontrolled initial dirty state. Only used when `dirty` is not
	* provided. Works with `FormLayout.DirtyOnChange` for vanilla-React forms.
	* @default false
	*/
	defaultDirty?: boolean;
	/** Fires when the dirty state changes — either from controlled consumer
	* code, from `FormLayout.DirtyOnChange`, or from a custom `useFormLayout()`
	* caller. */
	onDirtyChange?: (next: boolean) => void;
	/** Controlled saving state. When set, Root reads this value and ignores
	* `defaultSaving`. */
	saving?: boolean;
	/** Uncontrolled initial saving state.
	* @default false
	*/
	defaultSaving?: boolean;
	/** Fires when the saving state changes. */
	onSavingChange?: (next: boolean) => void;
	/** Called when the form submits — native `<form onSubmit>`, `SaveButton`
	* click (it's `type='submit'`), or Enter pressed inside any non-textarea
	* field. Consumer owns validation, serialization, and network calls. */
	onSave?: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
	/** Called when `FormLayout.CancelButton` is clicked or the consumer
	* calls the returned setter. */
	onCancel?: () => void;
	/** Sticky mode for `FormLayout.Actions`.
	* - `'container'` — sticky to the Root's scroll container via
	*   `position: sticky; bottom: 0` (works inside a modal or DetailPage body).
	* - `'viewport'` — portals into a fixed-position container at the bottom
	*   of the viewport (full-page settings screens).
	* - `false` — no sticky behavior; Actions renders inline at its JSX
	*   position (useful for small cards where sticky is awkward).
	* @default 'container'
	*/
	sticky?: FormLayoutSticky;
	/** Disable HTML constraint validation. `<form noValidate>` is the default
	* — consumers own validation. Set `noValidate={false}` to re-enable native
	* validation bubbles.
	* @default true
	*/
	noValidate?: boolean;
	/** Children — typically `<FormLayout.Header>`, `<FormLayout.Section>`s,
	* `<FormLayout.Actions>`, plus optional `<FormLayout.DirtyOnChange>` /
	* `<FormLayout.NavigationGuard>`. */
	children?: ReactNode32;
}
declare const FormLayoutRoot: React.ForwardRefExoticComponent<Omit<FormLayoutRootProps, "ref"> & React.RefAttributes<HTMLFormElement>>;
/** Props for {@link FormLayoutHeader}. */
interface FormLayoutHeaderProps {
	/** Page title. Rendered as `<h1>` via the underlying `<Header>` primitive. */
	title: string;
	/** Optional subtitle rendered below the title in muted style. */
	description?: string;
}
declare function FormLayoutHeader({ title, description }: FormLayoutHeaderProps): React.JSX.Element;
/** Props for {@link FormLayoutSection}. */
interface FormLayoutSectionProps extends BaseComponentProps {
	/** Children — typically `<FormLayout.SectionHeader>` + `<FormLayout.SectionBody>`. */
	children?: ReactNode32;
}
declare function FormLayoutSection({ children,...rest }: FormLayoutSectionProps): React.JSX.Element;
/** Props for {@link FormLayoutSectionHeader}. */
interface FormLayoutSectionHeaderProps {
	/** Section title rendered as `<h2>`. */
	title: string;
	/** Optional description rendered below the title in muted style. */
	description?: string;
}
declare function FormLayoutSectionHeader({ title, description }: FormLayoutSectionHeaderProps): React.JSX.Element;
/** Props for {@link FormLayoutSectionBody}. */
interface FormLayoutSectionBodyProps {
	/** Children — consumer's `<Field>` / `<Input>` / `<Textarea>` / custom fields.
	* The organism does not wrap or transform them. */
	children?: ReactNode32;
}
declare function FormLayoutSectionBody({ children }: FormLayoutSectionBodyProps): React.JSX.Element;
/** Props for {@link FormLayoutActions}. */
interface FormLayoutActionsProps {
	/** Children — typically `<FormLayout.SaveButton>` + `<FormLayout.CancelButton>`,
	* or any buttons the consumer composes. */
	children?: ReactNode32;
}
declare function FormLayoutActions({ children }: FormLayoutActionsProps): React.JSX.Element | null;
/** Props for {@link FormLayoutSaveButton}. */
interface FormLayoutSaveButtonProps extends Omit<ButtonProps, "children" | "type" | "loading" | "form"> {
	/** Button label when idle.
	* @default 'Save'
	*/
	children?: ReactNode32;
	/** Button label while `saving` is true.
	* @default 'Saving…'
	*/
	savingLabel?: ReactNode32;
}
declare function FormLayoutSaveButton({ children, savingLabel, disabled: disabledProp, variant,...rest }: FormLayoutSaveButtonProps): React.JSX.Element;
/** Props for {@link FormLayoutCancelButton}. */
interface FormLayoutCancelButtonProps extends Omit<ButtonProps, "children" | "type" | "form"> {
	/** Button label.
	* @default 'Cancel'
	*/
	children?: ReactNode32;
}
declare function FormLayoutCancelButton({ children, variant, onClick,...rest }: FormLayoutCancelButtonProps): React.JSX.Element;
/** Props for {@link FormLayoutDirtyOnChange}. */
interface FormLayoutDirtyOnChangeProps {
	/** Fields to monitor. Any bubbled `change` event from an input/select/
	* textarea under this wrapper marks the form dirty. */
	children?: ReactNode32;
}
declare function FormLayoutDirtyOnChange({ children }: FormLayoutDirtyOnChangeProps): React.JSX.Element;
/** Props for {@link FormLayoutNavigationGuard}. */
interface FormLayoutNavigationGuardProps {
	/** Legacy message shown by older browsers. Modern browsers ignore the
	* custom string and show their canned prompt, but we still set it for
	* the cases that do.
	* @default 'You have unsaved changes. Are you sure you want to leave?'
	*/
	message?: string;
}
declare function FormLayoutNavigationGuard({ message }: FormLayoutNavigationGuardProps): null;
/**
* Sectioned form shell with a sticky save/cancel action bar and an opt-in
* dirty-state gate. Generalizes the hand-assembled settings-page pattern.
*
* FormLayout is NOT a form library: it does not own field values, validation,
* serialization, or submission. Bring React Hook Form, Formik, TanStack Form,
* or plain `useState` — FormLayout is the chrome around the form plus the
* dirty-state gate.
*
* **Dirty-state detection is consumer-reported.** Pass `dirty={…}` to Root
* (controlled) or call `useFormLayout().setDirty(true)` from inside the form
* (uncontrolled). The escape hatch for vanilla-React forms is
* `<FormLayout.DirtyOnChange>` — a capturing wrapper that calls `setDirty(true)`
* on any descendant `change` event.
*
* @example
* ```tsx
* <FormLayout.Root onSave={handleSave} onCancel={handleCancel}>
*   <FormLayout.Header title="Settings" description="Manage your workspace." />
*   <FormLayout.DirtyOnChange>
*     <FormLayout.Section>
*       <FormLayout.SectionHeader title="Profile" />
*       <FormLayout.SectionBody>
*         <Field label="Name"><Input name="name" /></Field>
*         <Field label="Email"><Input name="email" type="email" /></Field>
*       </FormLayout.SectionBody>
*     </FormLayout.Section>
*     <FormLayout.Section>
*       <FormLayout.SectionHeader title="Notifications" />
*       <FormLayout.SectionBody>
*         <Field label="Digest frequency">
*           <Select.Root defaultValue="weekly">…</Select.Root>
*         </Field>
*       </FormLayout.SectionBody>
*     </FormLayout.Section>
*   </FormLayout.DirtyOnChange>
*   <FormLayout.Actions>
*     <FormLayout.CancelButton />
*     <FormLayout.SaveButton />
*   </FormLayout.Actions>
*   <FormLayout.NavigationGuard />
* </FormLayout.Root>
* ```
*/
declare const FormLayout: {};
import { ReactNode as ReactNode33 } from "react";
/** Progress indicator mode. */
type WizardDialogProgressMode = "numeric" | "bar";
/** Props for {@link WizardDialogRoot}. */
interface WizardDialogRootProps {
	/** Controlled open state. When set, Root reads this and ignores
	* `defaultOpen`. */
	open?: boolean;
	/** Uncontrolled initial open state.
	* @default false
	*/
	defaultOpen?: boolean;
	/** Fires when the dialog should open or close — Escape (if `canClose`),
	* overlay click, Finish, or the consumer calls `close()`. */
	onOpenChange?: (next: boolean) => void;
	/** Controlled current step (0-based). Pair with `onStepChange` to own the
	* state yourself. */
	step?: number;
	/** Uncontrolled initial step (0-based).
	* @default 0
	*/
	defaultStep?: number;
	/** Fires when the step index changes — Next/Back, or consumer-driven
	* setters. */
	onStepChange?: (next: number) => void;
	/** Called when the last step's Finish button fires. Return a Promise to
	* delay the close; Root flips Actions into its loading state while the
	* promise is in flight. The dialog auto-closes after the promise resolves. */
	onComplete?: () => void | Promise<void>;
	/** Whether Escape / overlay click / Back-on-step-0 can close the dialog.
	* Useful for forced-onboarding flows where the user must complete the
	* wizard or explicitly Cancel out.
	* @default true
	*/
	canClose?: boolean;
	/** Modal width preset, forwarded to ModalShell.
	* @default 'lg'
	*/
	width?: ModalWidth;
	/** Children — typically `<WizardDialog.Title>`, `<WizardDialog.Progress>`,
	* one or more `<WizardDialog.Step>`s, and `<WizardDialog.Actions>`. */
	children?: ReactNode33;
}
declare const WizardDialogRoot: unknown;
/** Props for {@link WizardDialogTitle}. */
interface WizardDialogTitleProps {
	/** Title text. Rendered as `<h2>` with the shared modal heading style. */
	children: ReactNode33;
}
declare function WizardDialogTitle({ children }: WizardDialogTitleProps): React.JSX.Element;
/** Props for {@link WizardDialogProgress}. */
interface WizardDialogProgressProps {
	/** Indicator mode.
	* - `'numeric'` — "Step N of M" text with the current step label (if any).
	* - `'bar'` — a segmented `<ProgressBar>` filling step / total.
	* @default 'numeric'
	*/
	mode?: WizardDialogProgressMode;
	/** Labels for each step — used by the numeric mode as the right-aligned
	* label, and by both modes for the progressbar's `aria-label`. Length
	* should match the number of Step children; shorter arrays silently skip
	* the current step's label. */
	stepLabels?: string[];
}
declare function WizardDialogProgress({ mode, stepLabels }: WizardDialogProgressProps): React.JSX.Element;
/** Props for {@link WizardDialogStep}. */
interface WizardDialogStepProps {
	/** Zero-based index of this step. Must be unique per step; JSX order is
	* the source of truth for the user-visible sequence. */
	index: number;
	/** Optional validator called when the user presses Next (or Finish on the
	* last step). Returning `false` (or a Promise that resolves to `false`)
	* blocks the advance. Returning a Promise puts the Next button into its
	* loading state while the promise is in flight. */
	validate?: () => boolean | Promise<boolean>;
	/** The step's content — typically a Stack of Field / Input / Select. */
	children: ReactNode33;
}
declare function WizardDialogStep({ index, validate, children }: WizardDialogStepProps): React.JSX.Element | null;
/** Props for {@link WizardDialogActions}. */
interface WizardDialogActionsProps {
	/** Label for the Back button on step 0 — when `canClose` is true this
	* doubles as the Cancel button.
	* @default 'Cancel'
	*/
	cancelLabel?: ReactNode33;
	/** Label for the Back button on step > 0.
	* @default 'Back'
	*/
	backLabel?: ReactNode33;
	/** Label for the Next button.
	* @default 'Continue'
	*/
	nextLabel?: ReactNode33;
	/** Label for the Finish button on the last step.
	* @default 'Finish'
	*/
	finishLabel?: ReactNode33;
	/** Label shown on Next / Finish while async validation or `onComplete`
	* is in flight.
	* @default 'Working\u2026'
	*/
	busyLabel?: ReactNode33;
	/** Optional extra content rendered at the start of the action row — e.g.
	* a "Skip" link or a secondary action. Renders before the Back button
	* with `marginRight: auto` spacing. */
	children?: ReactNode33;
}
declare function WizardDialogActions({ cancelLabel, backLabel, nextLabel, finishLabel, busyLabel, children }: WizardDialogActionsProps): React.JSX.Element;
/**
* Stepped form in a modal. Generalizes the hand-assembled OnboardingFlow
* pattern (ModalShell + progress + stepped content + Back/Next/Finish).
*
* Consumer owns step content, field state, and validation. WizardDialog owns
* the modal chrome, step bookkeeping, focus management between steps, and
* the navigation affordance.
*
* @example
* ```tsx
* const [open, setOpen] = useState(false);
* const [name, setName] = useState('');
*
* <WizardDialog.Root
*   open={open}
*   onOpenChange={setOpen}
*   onComplete={async () => { await createWorkspace({ name }); }}
* >
*   <WizardDialog.Title>Create a workspace</WizardDialog.Title>
*   <WizardDialog.Progress stepLabels={['Workspace', 'Team', 'Plan']} />
*   <WizardDialog.Step index={0} validate={() => name.trim().length > 0}>
*     <Field label="Workspace name" required>
*       <Input value={name} onChange={(e) => setName(e.target.value)} />
*     </Field>
*   </WizardDialog.Step>
*   <WizardDialog.Step index={1}> <TeamFields /> </WizardDialog.Step>
*   <WizardDialog.Step index={2}> <PlanFields /> </WizardDialog.Step>
*   <WizardDialog.Actions />
* </WizardDialog.Root>
* ```
*/
declare const WizardDialog: {};
import { ReactNode as ReactNode34 } from "react";
/**
* Which semantic surface token to use as the background.
*
* Maps directly to the `colorSurface*` token family:
* - `page`    — full-page background
* - `default` — standard component background (cards, inputs, modals)
* - `solid`   — opaque counterpart for nested/layered content
* - `raised`  — elevated surface for hover states and nested containers
* - `panel`   — side panel and navigation background
* - `input`   — text input / select / textarea background
* - `overlay` — semi-transparent backdrop behind modals
*/
type SurfaceLevel = "page" | "default" | "solid" | "raised" | "panel" | "input" | "overlay";
/**
* A composable container primitive for managing color surface area.
*
* Unlike Card (which is opinionated — always has border, shadow, and a fixed
* surface token), Surface is the low-level building block for any background
* region. It maps directly to the semantic surface token system, letting you
* layer backgrounds at different depth levels.
*
* @example
* ```tsx
* // Standard solid surface with border
* <Surface padding="lg" border shadow="sm">
*   <h2>Card content</h2>
* </Surface>
*
* // Raised nested container
* <Surface level="raised" padding="md" radius="md">
*   <p>Nested content</p>
* </Surface>
*
* // Render as the child element (polymorphic via asChild)
* <Surface asChild padding="lg" border>
*   <a href="/docs">Read the docs</a>
* </Surface>
* ```
*/
interface SurfaceProps extends BaseComponentProps {
	/** Which semantic surface token to use as the background. @default 'solid' */
	level?: SurfaceLevel;
	/** Optional tinted background derived from a semantic color. */
	tint?: SemanticColor;
	/** Inner padding using spacing tokens. */
	padding?: SpacingToken;
	/** Border radius using radius tokens. @default 'lg' */
	radius?: RadiusToken;
	/** Border using theme border color (`true`) or a semantic color. */
	border?: boolean | SemanticColor;
	/** Shadow using shadow tokens. */
	shadow?: ShadowToken;
	/** Accessible label for landmark regions (e.g. when rendered as `section`). */
	"aria-label"?: string;
	/** ID of an element that labels this surface. */
	"aria-labelledby"?: string;
	/**
	* Render as a different HTML element.
	* @default 'div'
	*/
	as?: "div" | "section" | "article" | "aside" | "main";
	/**
	* Render as the single child element instead of a `<div>`. Merges Surface's
	* computed styling and ref into the child. Matches the `asChild` pattern on
	* `Button`, `IconButton`, `TopBar.Link`, and `Card`.
	* @default false
	*/
	asChild?: boolean;
	children: ReactNode34;
}
declare const Surface: React.ForwardRefExoticComponent<Omit<SurfaceProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode35 } from "react";
/**
* Responsive grid layout with auto-fill columns.
*
* Two modes:
* - **Auto-fill** (default): columns fill available space with a minimum width.
*   `gridTemplateColumns: repeat(auto-fill, minmax(minColumnWidth, 1fr))`
* - **Fixed columns**: explicit column count.
*   `gridTemplateColumns: repeat(columns, 1fr)`
*
* @example
* ```tsx
* // Auto-fill cards at 300px minimum
* <Grid minColumnWidth={300} gap="lg">
*   {items.map(item => <Card key={item.id}>{item.name}</Card>)}
* </Grid>
*
* // Fixed 3-column layout
* <Grid columns={3} gap="md">
*   <div>A</div>
*   <div>B</div>
*   <div>C</div>
* </Grid>
* ```
*/
interface GridProps extends BaseComponentProps {
	/**
	* Minimum width of each column before wrapping (pixels).
	* @default 300
	*/
	minColumnWidth?: number;
	/**
	* Fixed column count. When set, overrides `minColumnWidth`.
	*/
	columns?: number;
	/**
	* Gap between grid cells.
	* @default 'md'
	*/
	gap?: SpacingToken;
	children: ReactNode35;
}
declare const Grid: React.ForwardRefExoticComponent<Omit<GridProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
* A thin visual separator line.
*
* Supports horizontal (full-width) and vertical (inline between flex items)
* orientations. Opacity controls how prominent the divider appears via
* `color-mix()` with the border token.
*
* @example
* ```tsx
* // Horizontal section break
* <Divider spacing="lg" />
*
* // Vertical divider between filter pills
* <Stack direction="horizontal" align="center" gap="sm">
*   <PillSelect ... />
*   <Divider orientation="vertical" />
*   <PillSelect ... />
* </Stack>
* ```
*/
interface DividerProps extends BaseComponentProps {
	/**
	* Orientation of the divider.
	* @default 'horizontal'
	*/
	orientation?: "horizontal" | "vertical";
	/**
	* Opacity preset for the border color.
	* Uses `color-mix(in srgb, colorBorder <opacity>%, transparent)`.
	* @default 'default'
	*/
	opacity?: DividerOpacity;
	/**
	* Spacing around the divider.
	* Horizontal: margin-block. Vertical: margin-inline.
	*/
	spacing?: SpacingToken;
}
declare const Divider: React.ForwardRefExoticComponent<Omit<DividerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode36 } from "react";
/** Named width preset for the Container. */
type ContainerWidth = "narrow" | "prose" | "wide" | "full";
/** Horizontal padding preset for the Container. */
type ContainerPadding = "none" | "sm" | "md" | "lg";
/** A centered content wrapper with max-width constraint. */
interface ContainerProps {
	/** Named width preset.
	* - `narrow` — 32rem, compact layouts
	* - `prose` — 680px, optimized for reading
	* - `wide` — 900px, for wider layouts
	* - `full` — 100%, no max-width constraint
	* @default 'prose'
	*/
	width?: ContainerWidth;
	/** Horizontal padding preset.
	* @default 'md'
	*/
	padding?: ContainerPadding;
	/** Container content. */
	children: ReactNode36;
	id?: string;
	"data-testid"?: string;
}
declare const Container: React.ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** A single tab definition. */
interface Tab {
	/** Unique identifier for the tab. */
	key: string;
	/** Display label. */
	label: string;
	/** Optional Material Symbols icon name shown before the label. */
	icon?: string;
}
/**
* A horizontal tab strip with an active indicator and keyboard navigation.
*
* This is a controlled component — the consumer manages which tab is active
* via `activeKey` / `onChange` and renders the corresponding panel content.
*
* Supports `allowDeselect` for collapsible panels (click active tab to close).
*
* @example
* ```tsx
* const [tab, setTab] = useState<string | null>('summary');
*
* <TabStrip
*   tabs={[
*     { key: 'summary', label: 'Summary', icon: 'description' },
*     { key: 'context', label: 'Context' },
*   ]}
*   activeKey={tab}
*   onChange={setTab}
*   allowDeselect
* />
* {tab === 'summary' && <div>Summary content</div>}
* {tab === 'context' && <div>Context content</div>}
* ```
*/
interface TabStripProps extends BaseComponentProps {
	/** Tab definitions. */
	tabs: Tab[];
	/** Currently active tab key. `null` means no tab is selected. */
	activeKey: string | null;
	/**
	* Called when a tab is clicked.
	* Receives `null` when `allowDeselect` is true and the active tab is clicked.
	*/
	onChange: (key: string | null) => void;
	/**
	* Allow clicking the active tab to deselect it (sets activeKey to null).
	* @default false
	*/
	allowDeselect?: boolean;
	/**
	* Visual size of the tabs.
	* @default 'md'
	*/
	size?: "sm" | "md";
}
declare const TabStrip: React.ForwardRefExoticComponent<Omit<TabStripProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { useToast, useIsInsideAppShell, useFormLayout, useFocusTrap, useCalendarContext, useAppShellContext, tagChipStyle, spacingMap, shadowMap, semanticColorMap, sectionLabelStyle, radiusMap, progressBarHeightMap, popoverPanelMd, popoverPanelLg, pillToggleUnselectedStyle, pillToggleSelectedStyle, pillToggleBaseStyle, nextFocusedDate, modalWidthMap, modalHeadingStyle, modalFooterStyle, justifyMap, inputShellFocusRingCSS, inputShellErrorStyle, inputShellDisabledStyle, inputShellBaseStyle, iconSizeMap, iconRegistry, dividerOpacityMap, alignMap, WizardDialogTitleProps, WizardDialogTitle, WizardDialogStepProps, WizardDialogStep, WizardDialogRootProps, WizardDialogRoot, WizardDialogProgressProps, WizardDialogProgressMode, WizardDialogProgress, WizardDialogActionsProps, WizardDialogActions, WizardDialog, TopBarTrailingProps, TopBarTrailing, TopBarRootProps, TopBarRoot, TopBarNavProps, TopBarNav, TopBarLinkProps, TopBarLink, TopBarLeadingProps, TopBarLeading, TopBar, ToastType, ToastProviderProps, ToastProvider, ToastPosition, ToastItem, ThemePickerProps, ThemePicker, TextareaProps, Textarea, TextWeight, TextTone, TextSize, TextRef, TextProps, TextFilterConfig, TextFamily, TextAs, TextAlign, Text, TableVariant, TableRowProps, TableRow, TableProps, TableHeaderProps, TableHeaderCellProps, TableHeaderCell, TableHeader, TableGroupHeaderProps, TableGroupHeader, TableEmptyRowProps, TableEmptyRow, TableCellProps, TableCell, TableBodyProps, TableBody, Table2 as Table, TabStripProps, TabStrip, Tab, SurfaceProps, SurfaceLevel, Surface, StatusDotVariant, StatusDotSize, StatusDotProps, StatusDotAnimate, StatusDot, StackProps, Stack, SpacingToken, SkeletonProps, Skeleton, ShowToastOptions, ShadowToken, SemanticColor, SelectValueProps, SelectTriggerProps, SelectRootProps, SelectItemProps, SelectFilterConfig, SelectContentProps, Select, SegmentedControlProps, SegmentedControl, Segment, SearchInputProps, SearchInput, RowSkeleton, RadiusToken, ProgressBarSegment, ProgressBarProps, ProgressBarHeight, ProgressBar, PaginationProps, PaginationLabels, Pagination, OverlayProps, Overlay, ModalWidth, ModalShellProps, ModalShell, LinkCardProps, LinkCard, JustifyContent, InputProps, Input, IconWarning, IconTrash, IconSize, IconSettings, IconSearch, IconProps, IconPlus, IconName, IconMoreVertical, IconMinus, IconMenu, IconInfo, IconFontProvider, IconFilter, IconEyeOff, IconEye, IconExternalLink, IconError, IconEdit, IconCopy, IconClose, IconChevronUp, IconChevronRight, IconChevronLeft, IconChevronDown, IconCheckCircle, IconCheck, IconButtonSize, IconButtonProps, IconButton, IconArrowRight, IconArrowLeft, Icon, HeaderProps, HeaderLevel, Header, GridProps, Grid, FormLayoutSticky, FormLayoutSectionProps, FormLayoutSectionHeaderProps, FormLayoutSectionHeader, FormLayoutSectionBodyProps, FormLayoutSectionBody, FormLayoutSection, FormLayoutSaveButtonProps, FormLayoutSaveButton, FormLayoutRootProps, FormLayoutRoot, FormLayoutNavigationGuardProps, FormLayoutNavigationGuard, FormLayoutHeaderProps, FormLayoutHeader, FormLayoutDirtyOnChangeProps, FormLayoutDirtyOnChange, FormLayoutContextValue, FormLayoutCancelButtonProps, FormLayoutCancelButton, FormLayoutActionsProps, FormLayoutActions, FormLayout, FilterConfig, FilterBarTextProps, FilterBarSelectProps, FilterBarProps, FieldProps, Field, ErrorBoundaryProps, ErrorBoundary, EmptyStateProps, EmptyState, EmptyPageTitleProps, EmptyPageTitle, EmptyPageTipsProps, EmptyPageTips, EmptyPageTipProps, EmptyPageTip, EmptyPageRootProps, EmptyPageRoot, EmptyPageIconProps, EmptyPageIcon, EmptyPageDescriptionProps, EmptyPageDescription, EmptyPageActionsProps, EmptyPageActions, EmptyPage, DividerProps, DividerOpacity, Divider, DetailPageRootProps, DetailPageRoot, DetailPageRightPanelProps, DetailPageRightPanel, DetailPageMetaProps, DetailPageMetaItemProps, DetailPageMetaItem, DetailPageMeta, DetailPageHeaderProps, DetailPageHeader, DetailPageBodyProps, DetailPageBody, DetailPageActionsProps, DetailPageActions, DetailPage, DateRangePickerProps, DateRangePicker, DateRange, DatePickerProps, DatePicker, DataTablePageTableProps, DataTablePageTable, DataTablePageRootProps, DataTablePageRoot, DataTablePagePaginationProps, DataTablePagePagination, DataTablePageHeaderProps, DataTablePageHeader, DataTablePageFilterBarProps, DataTablePageFilterBar, DataTablePageEmptyProps, DataTablePageEmpty, DataTablePage, ContainerWidth, ContainerProps, ContainerPadding, Container, ConfirmDialogVariant, ConfirmDialogProps, ConfirmDialog, CommandPaletteTriggerProps, CommandPaletteShortcut, CommandPaletteRootProps, CommandPaletteItemProps, CommandPaletteGroupProps, CommandPaletteContentProps, CommandPalette, ComboboxRootProps, ComboboxListProps, ComboboxItemProps, ComboboxInputProps, ComboboxEmptyProps, Combobox, ChipPickerProps, ChipPicker, ChipItem, CardVariant, CardSkeleton, CardProps, Card, CalendarSelection, CalendarRootProps, CalendarRange, CalendarNavProps, CalendarNavDirection, CalendarMode, CalendarHeaderPrimitiveProps, CalendarGridProps, CalendarContextValue, CalendarCellRenderArgs, CalendarCellProps, Calendar, ButtonVariant, ButtonSize, ButtonProps, Button, BaseComponentProps, BadgeVariant, BadgeSize, BadgeProps, Badge, AppShellTopBarProps, AppShellTopBar, AppShellSidebarSectionProps, AppShellSidebarSection, AppShellSidebarProps, AppShellSidebar, AppShellRootProps, AppShellRoot, AppShellRightPanelProps, AppShellRightPanel, AppShellMainProps, AppShellMain, AppShell, AlignItems, AlertBannerVariant, AlertBannerProps, AlertBanner };
