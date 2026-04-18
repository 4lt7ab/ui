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
type CardVariant = "default" | "flat" | "elevated";
/** A contained surface for grouping related content. */
interface CardProps extends BaseComponentProps {
	/** Visual treatment.
	* - `default` — standard surface with border and small shadow
	* - `flat` — raised background with border, no shadow
	* - `elevated` — standard surface with border and medium shadow
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
	/** Card content. */
	children: ReactNode4;
}
declare const Card: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode5 } from "react";
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
	children: ReactNode5;
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
import { ReactNode as ReactNode6 } from "react";
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
	children: ReactNode6;
}
interface SelectTriggerProps {
	/** Usually `<Select.Value placeholder="…" />`. Any ReactNode works. */
	children: ReactNode6;
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
	children: ReactNode6;
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
	children: ReactNode6;
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
import { ReactNode as ReactNode7 } from "react";
/** Semantic color variant for badges. */
type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "info";
/** Size variant for badges. */
type BadgeSize = "default" | "xs";
/** A small label for status, category, or metadata. Rendered as uppercase pill text. */
interface BadgeProps extends BaseComponentProps {
	/** Badge content (typically short text). */
	children: ReactNode7;
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
import { ReactNode as ReactNode8 } from "react";
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
	children: ReactNode8;
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
import { ReactNode as ReactNode9 } from "react";
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
	children?: ReactNode9;
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
import { ReactNode as ReactNode10 } from "react";
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
	children?: ReactNode10;
	/** Action slot (e.g. a CTA button) rendered below the message and children. */
	action?: ReactNode10;
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
import { ReactNode as ReactNode11 } from "react";
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
	indicator?: ReactNode11;
	/** Content aligned to the right end of the header (e.g. action buttons, SearchInput). */
	trailing?: ReactNode11;
}
declare const Header: React.ForwardRefExoticComponent<Omit<HeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode12 } from "react";
/** Shared heading style for modal titles. Used by ConfirmDialog and consumer modal compositions. */
declare const modalHeadingStyle: React.CSSProperties;
/** Shared footer layout for modal action buttons. Used by ConfirmDialog and consumer modal compositions. */
declare const modalFooterStyle: React.CSSProperties;
/** A centered modal panel with backdrop overlay. Closes on Escape and overlay click. */
interface ModalShellProps {
	/** Called when the modal should close (Escape key or overlay click). */
	onClose: () => void;
	/** Modal body content. */
	children: ReactNode12;
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
import { ReactNode as ReactNode13 } from "react";
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
	children?: ReactNode13;
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
import { ReactNode as ReactNode14 } from "react";
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
	children: ReactNode14;
}
declare const Table: React.ForwardRefExoticComponent<Omit<TableProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** Table header section. Renders a `<thead>` with a single `<tr>` wrapping the children. */
interface TableHeaderProps {
	/** TableHeaderCell elements. */
	children: ReactNode14;
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
	children?: ReactNode14;
}
declare const TableHeaderCell: React.ForwardRefExoticComponent<Omit<TableHeaderCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
/** Table body section (`<tbody>`). Wraps TableRow elements. */
interface TableBodyProps {
	/** TableRow elements. */
	children: ReactNode14;
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
	children: ReactNode14;
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
	children?: ReactNode14;
}
declare const TableCell: React.ForwardRefExoticComponent<Omit<TableCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
/** A full-width subheading row for grouping table rows under a shared label. */
interface TableGroupHeaderProps {
	/** Number of columns the header should span. */
	colSpan: number;
	/** Group label text. */
	children: ReactNode14;
}
declare const TableGroupHeader: React.ForwardRefExoticComponent<Omit<TableGroupHeaderProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
/** A centered message row displayed when the table has no data. */
interface TableEmptyRowProps {
	/** Number of columns the message should span. */
	colSpan: number;
	/** Empty state message content. */
	children: ReactNode14;
}
declare const TableEmptyRow: React.ForwardRefExoticComponent<Omit<TableEmptyRowProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
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
declare const DatePicker: React.ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
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
import { ReactNode as ReactNode15 } from "react";
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
	children: ReactNode15;
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
import { ReactNode as ReactNode16 } from "react";
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
	/** Subtree containing Input and List. */
	children: ReactNode16;
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
	children: ReactNode16;
}
interface ComboboxItemProps {
	/** The value of the option — passed to onSelect when picked. */
	value: string;
	/**
	* Text written into the input when this item is selected. Defaults to
	* `children` when `children` is a string.
	*/
	textValue?: string;
	children: ReactNode16;
}
interface ComboboxEmptyProps {
	children: ReactNode16;
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
import { HTMLAttributes } from "react";
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
/** A declarative filter bar that pairs with Table. */
interface TableFiltersProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Ordered list of filter definitions. */
	filters: FilterConfig[];
	/** Current filter values keyed by filter key. */
	values: Record<string, string>;
	/** Called when any filter value changes. Receives the full updated values object. */
	onChange: (values: Record<string, string>) => void;
}
declare function TableFilters({ filters, values, onChange, style,...props }: TableFiltersProps): React.JSX.Element;
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
import { ReactNode as ReactNode17 } from "react";
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
	trailing?: ReactNode17;
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
import { ReactNode as ReactNode18 } from "react";
/** Severity variant controlling banner color. */
type AlertBannerVariant = "info" | "warning" | "error" | "success";
/** Props for the AlertBanner component. */
interface AlertBannerProps {
	/** Severity variant controlling color. */
	variant: AlertBannerVariant;
	/** Message content. */
	children: ReactNode18;
	/** If provided, shows a dismiss button and is called on dismiss. */
	onDismiss?: () => void;
	/** Optional leading icon. Defaults to a variant-appropriate icon. */
	icon?: ReactNode18;
}
/**
* Full-width dismissable notification banner with severity variants.
* Slides in from the top. Consumers own dismiss timing — wrap `onDismiss`
* in `useEffect` + `setTimeout` if auto-dismiss is needed.
*/
declare const AlertBanner: React.ForwardRefExoticComponent<Omit<AlertBannerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode19 } from "react";
/** Props for {@link TopBarRoot}. */
interface TopBarRootProps extends BaseComponentProps {
	/** Accessible label for the header landmark. */
	"aria-label"?: string;
	/** Children — typically `<TopBar.Leading>`, `<TopBar.Nav>`, `<TopBar.Trailing>`. */
	children?: ReactNode19;
	/** Sticks to the top of the viewport on scroll.
	* @default false
	*/
	sticky?: boolean;
}
declare const TopBarRoot: React.ForwardRefExoticComponent<Omit<TopBarRootProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface TopBarLeadingProps {
	children?: ReactNode19;
}
declare function TopBarLeading({ children }: TopBarLeadingProps): React.JSX.Element;
interface TopBarNavProps {
	children?: ReactNode19;
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
	children?: ReactNode19;
}
declare const TopBarLink: React.ForwardRefExoticComponent<TopBarLinkProps & React.RefAttributes<HTMLElement>>;
interface TopBarTrailingProps {
	children?: ReactNode19;
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
import { ReactNode as ReactNode20 } from "react";
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
* Use the `bg` prop for custom tinted surfaces (e.g. `color-mix()` expressions).
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
* // Custom tinted background
* <Surface bg={`color-mix(in srgb, ${t.colorSuccess} 10%, transparent)`} padding="md" radius="md">
*   <p>Success region</p>
* </Surface>
* ```
*/
interface SurfaceProps extends BaseComponentProps {
	/** Accessible label for landmark regions (e.g. when rendered as `section`). */
	"aria-label"?: string;
	/** ID of an element that labels this surface. */
	"aria-labelledby"?: string;
	/**
	* Background surface level from the token system.
	* @default 'solid'
	*/
	level?: SurfaceLevel;
	/**
	* Apply a semantic color tint over the surface background.
	* Renders as `color-mix(in srgb, <token> 10%, transparent)`.
	* Takes precedence over `level` when provided.
	*/
	tint?: SemanticColor;
	/**
	* Inner padding.
	* @default undefined (no padding)
	*/
	padding?: SpacingToken;
	/**
	* Border radius.
	* @default 'lg'
	*/
	radius?: RadiusToken;
	/**
	* Show a border. `true` uses `colorBorder`; a semantic color name uses that
	* token as the border color.
	* @default false
	*/
	border?: boolean | SemanticColor;
	/**
	* Box shadow intensity.
	* @default undefined (no shadow)
	*/
	shadow?: ShadowToken;
	/**
	* Render as a different HTML element.
	* @default 'div'
	*/
	as?: "div" | "section" | "article" | "aside" | "main";
	children: ReactNode20;
}
declare const Surface: React.ForwardRefExoticComponent<Omit<SurfaceProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode21 } from "react";
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
	children: ReactNode21;
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
export { useToast, useFocusTrap, tagChipStyle, spacingMap, shadowMap, semanticColorMap, sectionLabelStyle, radiusMap, progressBarHeightMap, modalWidthMap, modalHeadingStyle, modalFooterStyle, justifyMap, iconSizeMap, iconRegistry, dividerOpacityMap, alignMap, TopBarTrailingProps, TopBarTrailing, TopBarRootProps, TopBarRoot, TopBarNavProps, TopBarNav, TopBarLinkProps, TopBarLink, TopBarLeadingProps, TopBarLeading, TopBar, ToastType, ToastProviderProps, ToastProvider, ToastPosition, ToastItem, ThemePickerProps, ThemePicker, TextareaProps, Textarea, TextFilterConfig, TableVariant, TableRowProps, TableRow, TableProps, TableHeaderProps, TableHeaderCellProps, TableHeaderCell, TableHeader, TableGroupHeaderProps, TableGroupHeader, TableFiltersProps, TableFilters, TableEmptyRowProps, TableEmptyRow, TableCellProps, TableCell, TableBodyProps, TableBody, Table, TabStripProps, TabStrip, Tab, SurfaceProps, SurfaceLevel, Surface, StatusDotVariant, StatusDotSize, StatusDotProps, StatusDotAnimate, StatusDot, StackProps, Stack, SpacingToken, SkeletonProps, Skeleton, ShowToastOptions, ShadowToken, SemanticColor, SelectValueProps, SelectTriggerProps, SelectRootProps, SelectItemProps, SelectFilterConfig, SelectContentProps, Select, SegmentedControlProps, SegmentedControl, Segment, SearchInputProps, SearchInput, RowSkeleton, RadiusToken, ProgressBarSegment, ProgressBarProps, ProgressBarHeight, ProgressBar, PaginationProps, PaginationLabels, Pagination, OverlayProps, Overlay, ModalWidth, ModalShellProps, ModalShell, JustifyContent, InputProps, Input, IconWarning, IconTrash, IconSize, IconSettings, IconSearch, IconProps, IconPlus, IconName, IconMoreVertical, IconMinus, IconMenu, IconInfo, IconFontProvider, IconFilter, IconEyeOff, IconEye, IconExternalLink, IconError, IconEdit, IconCopy, IconClose, IconChevronUp, IconChevronRight, IconChevronLeft, IconChevronDown, IconCheckCircle, IconCheck, IconButtonSize, IconButtonProps, IconButton, IconArrowRight, IconArrowLeft, Icon, HeaderProps, HeaderLevel, Header, GridProps, Grid, FilterConfig, FieldProps, Field, ErrorBoundaryProps, ErrorBoundary, EmptyStateProps, EmptyState, DividerProps, DividerOpacity, Divider, DateRangePickerProps, DateRangePicker, DateRange, DatePickerProps, DatePicker, ConfirmDialogVariant, ConfirmDialogProps, ConfirmDialog, ComboboxRootProps, ComboboxListProps, ComboboxItemProps, ComboboxInputProps, ComboboxEmptyProps, Combobox, ChipPickerProps, ChipPicker, ChipItem, CardVariant, CardSkeleton, CardProps, Card, ButtonVariant, ButtonSize, ButtonProps, Button, BaseComponentProps, BadgeVariant, BadgeSize, BadgeProps, Badge, AlignItems, AlertBannerVariant, AlertBannerProps, AlertBanner };
