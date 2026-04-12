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
	readonly colorText: "var(--color-text)";
	readonly colorTextSecondary: "var(--color-text-secondary)";
	readonly colorTextMuted: "var(--color-text-muted)";
	readonly colorTextInverse: "var(--color-text-inverse)";
	readonly colorTextLink: "var(--color-text-link)";
	readonly colorTextPlaceholder: "var(--color-text-placeholder)";
	readonly colorTextDisabled: "var(--color-text-disabled)";
	readonly colorSurface: "var(--color-surface)";
	readonly colorSurfacePanel: "var(--color-surface-panel)";
	readonly colorSurfaceRaised: "var(--color-surface-raised)";
	readonly colorSurfaceOverlay: "var(--color-surface-overlay)";
	readonly colorSurfaceInput: "var(--color-surface-input)";
	readonly colorSurfaceDisabled: "var(--color-surface-disabled)";
	readonly colorSurfacePage: "var(--color-surface-page)";
	readonly colorBorder: "var(--color-border)";
	readonly colorBorderFocused: "var(--color-border-focused)";
	readonly colorBorderError: "var(--color-border-error)";
	readonly colorActionPrimary: "var(--color-action-primary)";
	readonly colorActionPrimaryHover: "var(--color-action-primary-hover)";
	readonly colorActionSecondary: "var(--color-action-secondary)";
	readonly colorActionSecondaryHover: "var(--color-action-secondary-hover)";
	readonly colorActionDestructive: "var(--color-action-destructive)";
	readonly colorActionDestructiveHover: "var(--color-action-destructive-hover)";
	readonly colorSuccess: "var(--color-success)";
	readonly colorSuccessBg: "var(--color-success-bg)";
	readonly colorWarning: "var(--color-warning)";
	readonly colorWarningBg: "var(--color-warning-bg)";
	readonly colorError: "var(--color-error)";
	readonly colorErrorBg: "var(--color-error-bg)";
	readonly colorInfo: "var(--color-info)";
	readonly colorInfoBg: "var(--color-info-bg)";
	readonly spaceXs: "var(--space-xs)";
	readonly spaceSm: "var(--space-sm)";
	readonly spaceMd: "var(--space-md)";
	readonly spaceLg: "var(--space-lg)";
	readonly spaceXl: "var(--space-xl)";
	readonly space2xl: "var(--space-2xl)";
	readonly radiusSm: "var(--radius-sm)";
	readonly radiusMd: "var(--radius-md)";
	readonly radiusLg: "var(--radius-lg)";
	readonly radiusFull: "var(--radius-full)";
	readonly shadowSm: "var(--shadow-sm)";
	readonly shadowMd: "var(--shadow-md)";
	readonly shadowLg: "var(--shadow-lg)";
	readonly fontSans: "var(--font-sans)";
	readonly fontSerif: "var(--font-serif)";
	readonly fontMono: "var(--font-mono)";
	readonly fontSizeXs: "var(--font-size-xs)";
	readonly fontSizeSm: "var(--font-size-sm)";
	readonly fontSizeBase: "var(--font-size-base)";
	readonly fontSizeLg: "var(--font-size-lg)";
	readonly fontSizeXl: "var(--font-size-xl)";
	readonly fontSize2xl: "var(--font-size-2xl)";
	readonly fontSize3xl: "var(--font-size-3xl)";
	readonly lineHeightTight: "var(--line-height-tight)";
	readonly lineHeightBase: "var(--line-height-base)";
	readonly lineHeightRelaxed: "var(--line-height-relaxed)";
	readonly fontWeightNormal: "var(--font-weight-normal)";
	readonly fontWeightMedium: "var(--font-weight-medium)";
	readonly fontWeightSemibold: "var(--font-weight-semibold)";
	readonly fontWeightBold: "var(--font-weight-bold)";
	readonly letterSpacingTight: "var(--letter-spacing-tight)";
	readonly letterSpacingNormal: "var(--letter-spacing-normal)";
	readonly letterSpacingWide: "var(--letter-spacing-wide)";
	readonly focusRingColor: "var(--focus-ring-color)";
	readonly focusRingWidth: "var(--focus-ring-width)";
	readonly focusRingOffset: "var(--focus-ring-offset)";
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
	colorText: string;
	colorTextSecondary: string;
	colorTextMuted: string;
	colorTextInverse: string;
	colorTextLink: string;
	colorTextPlaceholder: string;
	colorTextDisabled: string;
	colorSurface: string;
	colorSurfacePanel: string;
	colorSurfaceRaised: string;
	colorSurfaceOverlay: string;
	colorSurfaceInput: string;
	colorSurfaceDisabled: string;
	colorSurfacePage: string;
	colorBorder: string;
	colorBorderFocused: string;
	colorBorderError: string;
	colorActionPrimary: string;
	colorActionPrimaryHover: string;
	colorActionSecondary: string;
	colorActionSecondaryHover: string;
	colorActionDestructive: string;
	colorActionDestructiveHover: string;
	colorSuccess: string;
	colorSuccessBg: string;
	colorWarning: string;
	colorWarningBg: string;
	colorError: string;
	colorErrorBg: string;
	colorInfo: string;
	colorInfoBg: string;
	spaceXs: string;
	spaceSm: string;
	spaceMd: string;
	spaceLg: string;
	spaceXl: string;
	space2xl: string;
	radiusSm: string;
	radiusMd: string;
	radiusLg: string;
	radiusFull: string;
	shadowSm: string;
	shadowMd: string;
	shadowLg: string;
	fontSans: string;
	fontSerif: string;
	fontMono: string;
	fontSizeXs: string;
	fontSizeSm: string;
	fontSizeBase: string;
	fontSizeLg: string;
	fontSizeXl: string;
	fontSize2xl: string;
	fontSize3xl: string;
	lineHeightTight: string;
	lineHeightBase: string;
	lineHeightRelaxed: string;
	fontWeightNormal: string;
	fontWeightMedium: string;
	fontWeightSemibold: string;
	fontWeightBold: string;
	letterSpacingTight: string;
	letterSpacingNormal: string;
	letterSpacingWide: string;
	focusRingColor: string;
	focusRingWidth: string;
	focusRingOffset: string;
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
	* Optional canvas background animation. Called when the theme activates with a
	* full-viewport canvas element. Returns a cleanup function called on theme switch.
	* Only runs on screens wider than 768px and when prefers-reduced-motion is not set.
	*/
	background?: (canvas: HTMLCanvasElement) => () => void;
}
/** Converts a camelCase token key to its CSS custom property name. */
declare function tokenToCssProperty(key: string): string;
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
interface ThemeProviderProps {
	children: ReactNode;
	/** Additional themes beyond the built-ins. */
	themes?: ThemeDefinition[];
	/** Default theme when no stored preference exists. */
	defaultTheme?: Theme;
	/** localStorage key for persisting preference. */
	storageKey?: string;
	/**
	* When true, applies body background-color from theme CSS and runs canvas
	* background animations. When false, only token CSS variables are applied.
	* Defaults to true for backward compatibility.
	*
	* @default true
	*/
	applyPageStyles?: boolean;
}
declare function ThemeProvider({ children, themes: extraThemes, defaultTheme, storageKey, applyPageStyles }: ThemeProviderProps): React.JSX.Element;
declare function useTheme(): ThemeContextValue;
declare const synthwaveTheme: ThemeDefinition;
declare const slateTheme: ThemeDefinition;
declare const warmSandTheme: ThemeDefinition;
declare const mossTheme: ThemeDefinition;
declare const coralTheme: ThemeDefinition;
declare const pipboyTheme: ThemeDefinition;
declare const neuralTheme: ThemeDefinition;
declare const pacmanTheme: ThemeDefinition;
interface ThemePickerProps {
	/** Optional descriptions for each theme, keyed by theme name. */
	descriptions?: Record<string, string>;
}
/**
* Grid of theme cards wired into useTheme(). Clicking a card switches the active theme.
* Must be rendered inside a <ThemeProvider>.
*/
declare function ThemePicker({ descriptions }: ThemePickerProps): React.JSX.Element;
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
import { ButtonHTMLAttributes, ReactNode as ReactNode2 } from "react";
type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: ReactNode2;
}
declare const Button: unknown;
import { CSSProperties as CSSProperties4, HTMLAttributes as HTMLAttributes2, ReactNode as ReactNode3 } from "react";
type SpacingToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
interface StackProps extends HTMLAttributes2<HTMLDivElement> {
	/** Stack direction. Default: 'vertical' */
	direction?: "vertical" | "horizontal";
	/** Gap between children. Default: 'md' */
	gap?: SpacingToken;
	/** Cross-axis alignment. */
	align?: CSSProperties4["alignItems"];
	/** Main-axis alignment. */
	justify?: CSSProperties4["justifyContent"];
	/** Whether children should wrap. */
	wrap?: boolean;
	children: ReactNode3;
}
declare function Stack({ direction, gap, align, justify, wrap, children, style,...props }: StackProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes3, ReactNode as ReactNode4 } from "react";
type SpacingToken2 = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type CardVariant = "default" | "flat" | "elevated";
interface CardProps extends HTMLAttributes3<HTMLDivElement> {
	/** Visual treatment. Default: 'default' */
	variant?: CardVariant;
	/** Inner padding. Default: 'lg' */
	padding?: SpacingToken2;
	children: ReactNode4;
}
declare function Card({ variant, padding, children, style,...props }: CardProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes4, ReactNode as ReactNode5 } from "react";
interface FieldProps extends Omit<HTMLAttributes4<HTMLDivElement>, "children"> {
	/** Field label text. */
	label: string;
	/** Associates label with input via htmlFor/id. */
	htmlFor?: string;
	/** Error message. When set, field renders in error state. */
	error?: string;
	/** Help text shown below the input. */
	help?: string;
	/** Shows required indicator on the label. */
	required?: boolean;
	/** Disables the field visually. Does not disable the child input — do that yourself. */
	disabled?: boolean;
	children: ReactNode5;
}
declare const Field: unknown;
import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	/** Renders error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
}
declare const Input: unknown;
import { TextareaHTMLAttributes } from "react";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	/** Renders error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
}
declare const Textarea: unknown;
import { ReactNode as ReactNode6, SelectHTMLAttributes } from "react";
interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
	/** Options to render. Ignored when `children` is provided. */
	options?: SelectOption[];
	/** Custom option/optgroup elements. When provided, `options` is ignored. */
	children?: ReactNode6;
	/** Optional placeholder shown as first disabled option. */
	placeholder?: string;
	/** Renders error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
}
declare const Select: unknown;
import { ReactNode as ReactNode7 } from "react";
type BadgeVariant = "default" | "success" | "warning" | "error" | "info";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: ReactNode7;
	variant?: BadgeVariant;
}
declare const Badge: unknown;
import { HTMLAttributes as HTMLAttributes5 } from "react";
interface IconProps extends Omit<HTMLAttributes5<HTMLSpanElement>, "children"> {
	name: IconName;
	size?: number;
}
declare function Icon({ name, size, style, "aria-label": ariaLabel,...props }: IconProps): React.JSX.Element;
import { ButtonHTMLAttributes as ButtonHTMLAttributes2 } from "react";
interface IconButtonProps extends ButtonHTMLAttributes2<HTMLButtonElement> {
	icon: IconName;
	size?: number;
	badge?: boolean;
	/** Required accessible label for icon-only buttons. */
	"aria-label": string;
}
declare const IconButton: unknown;
import { CSSProperties as CSSProperties5 } from "react";
interface OverlayProps {
	onClick?: () => void;
	zIndex?: number;
	style?: CSSProperties5;
}
declare function Overlay({ onClick, zIndex, style }: OverlayProps): React.JSX.Element;
import { CSSProperties as CSSProperties6 } from "react";
interface SkeletonProps {
	width?: string | number;
	height?: string | number;
	borderRadius?: string;
	style?: CSSProperties6;
}
declare function Skeleton({ width, height, borderRadius, style }: SkeletonProps): React.JSX.Element;
declare function CardSkeleton({ style }: {
	style?: CSSProperties6;
}): React.JSX.Element;
declare function RowSkeleton({ style }: {
	style?: CSSProperties6;
}): React.JSX.Element;
import { CSSProperties as CSSProperties7 } from "react";
interface ProgressBarSegment {
	value: number;
	color: string;
	label?: string;
}
interface ProgressBarProps {
	segments: ProgressBarSegment[];
	height?: number;
	/** Accessible label for screen readers. */
	"aria-label"?: string;
	style?: CSSProperties7;
}
declare function ProgressBar({ segments, height, "aria-label": ariaLabel, style }: ProgressBarProps): React.JSX.Element;
import { CSSProperties as CSSProperties8, ReactNode as ReactNode8 } from "react";
interface EmptyStateProps {
	icon: IconName;
	message: string;
	variant?: "plain" | "card";
	style?: CSSProperties8;
	/** Additional content rendered below the message. */
	children?: ReactNode8;
	/** Action slot (e.g. a CTA button) rendered below message and children. */
	action?: ReactNode8;
}
declare const EmptyState: unknown;
import { CSSProperties as CSSProperties9 } from "react";
interface PaginationLabels {
	previous?: string;
	next?: string;
	pageOf?: (page: number, total: number) => string;
}
interface PaginationProps {
	page: number;
	totalPages: number;
	total: number;
	onPageChange: (page: number) => void;
	labels?: PaginationLabels;
	className?: string;
	style?: CSSProperties9;
}
declare function Pagination({ page, totalPages, total, onPageChange, labels, className, style }: PaginationProps): React.JSX.Element;
import { CSSProperties as CSSProperties10, ReactNode as ReactNode9 } from "react";
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
interface PageHeaderProps {
	title: string;
	subtitle?: string;
	trailing?: ReactNode9;
	style?: CSSProperties10;
	className?: string;
	/** Heading level (1-6). Defaults to 2. */
	level?: HeadingLevel;
}
declare const PageHeader: unknown;
import { CSSProperties as CSSProperties11 } from "react";
interface TagChipProps {
	name: string;
	onRemove?: () => void;
	style?: CSSProperties11;
}
declare const TagChip: unknown;
import { CSSProperties as CSSProperties12, ReactNode as ReactNode10 } from "react";
interface ExpandableCardProps {
	title: string;
	children: ReactNode10;
	defaultOpen?: boolean;
	open?: boolean;
	onToggle?: (open: boolean) => void;
	variant?: CardVariant;
	style?: CSSProperties12;
	headerAction?: ReactNode10;
}
declare const ExpandableCard: unknown;
import { CSSProperties as CSSProperties13, ReactNode as ReactNode11 } from "react";
interface ModalShellProps {
	onClose: () => void;
	children: ReactNode11;
	maxWidth?: number;
	zIndex?: number;
	style?: CSSProperties13;
}
declare function ModalShell({ onClose, children, maxWidth, zIndex, style }: ModalShellProps): React.JSX.Element;
import { ReactNode as ReactNode12 } from "react";
type ConfirmDialogVariant = "destructive" | "info" | "warning";
interface ConfirmDialogProps {
	title: string;
	message: string;
	confirmLabel?: string;
	onConfirm: () => Promise<void> | void;
	onCancel: () => void;
	/** Custom body content rendered between the message and the buttons. */
	children?: ReactNode12;
	/** Controls confirm button styling. Defaults to 'destructive'. */
	variant?: ConfirmDialogVariant;
}
declare const ConfirmDialog: unknown;
import { CSSProperties as CSSProperties14 } from "react";
type StatusDotVariant = "default" | "success" | "warning" | "error" | "info";
interface StatusDotProps {
	/** Semantic variant — maps to feedback tokens. */
	variant?: StatusDotVariant;
	/** Raw color override. Takes precedence over variant. */
	color?: string;
	/** Dot diameter in pixels. @default 8 */
	size?: number;
	/** Accessible label describing the status. */
	"aria-label"?: string;
	style?: CSSProperties14;
}
declare function StatusDot({ variant, color, size, "aria-label": ariaLabel, style }: StatusDotProps): React.JSX.Element;
import { ReactNode as ReactNode13 } from "react";
interface ThemeSurfaceProps {
	children: ReactNode13;
	/**
	* When true, applies the page background to document.body and optionally
	* creates a canvas animation. When false (default), renders a div with
	* the page background color.
	*
	* @default false
	*/
	global?: boolean;
	/**
	* When global is true, enables the theme's canvas background animation.
	* Respects prefers-reduced-motion and skips on screens narrower than 768px.
	*
	* @default true
	*/
	animated?: boolean;
	/** Additional inline styles for the wrapper div (only used when global=false). */
	style?: React.CSSProperties;
}
/**
* Applies the theme's page background color.
*
* Use `global` to set the body background and optionally run canvas animations.
* Without `global`, renders a styled div with the page background.
*/
declare function ThemeSurface({ children, global, animated, style }: ThemeSurfaceProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes6, TdHTMLAttributes, ThHTMLAttributes, ReactNode as ReactNode14 } from "react";
type SpacingToken3 = "xs" | "sm" | "md" | "lg";
type TableVariant = "default" | "flat";
interface TableProps extends HTMLAttributes6<HTMLDivElement> {
	/** Visual treatment. Default wraps with border + shadow; flat has no chrome. */
	variant?: TableVariant;
	/** Cell density. Default: 'md' */
	density?: SpacingToken3;
	children: ReactNode14;
}
declare function Table({ variant, density, children, style,...props }: TableProps): React.JSX.Element;
interface TableHeaderProps extends HTMLAttributes6<HTMLTableSectionElement> {
	children: ReactNode14;
}
declare function TableHeader({ children, style,...props }: TableHeaderProps): React.JSX.Element;
interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
	/** Text alignment. Default: 'left' */
	align?: "left" | "center" | "right";
	/** Fixed width in px or CSS string */
	width?: number | string;
	children?: ReactNode14;
}
declare function TableHeaderCell({ align, width, children, style,...props }: TableHeaderCellProps): React.JSX.Element;
interface TableBodyProps extends HTMLAttributes6<HTMLTableSectionElement> {
	children: ReactNode14;
}
declare function TableBody({ children,...props }: TableBodyProps): React.JSX.Element;
interface TableRowProps extends HTMLAttributes6<HTMLTableRowElement> {
	/** Highlight as selected */
	selected?: boolean;
	/** Enable hover background */
	hoverable?: boolean;
	children: ReactNode14;
}
declare function TableRow({ selected, hoverable, children, style, onClick, onKeyDown,...props }: TableRowProps): React.JSX.Element;
interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
	/** Text alignment. Default: 'left' */
	align?: "left" | "center" | "right";
	/** Truncate overflowing text with ellipsis */
	truncate?: boolean;
	/** Use muted text color */
	muted?: boolean;
	/** Fixed width in px or CSS string */
	width?: number | string;
	children?: ReactNode14;
}
declare function TableCell({ align, truncate, muted, width, children, style,...props }: TableCellProps): React.JSX.Element;
interface TableGroupHeaderProps extends HTMLAttributes6<HTMLTableRowElement> {
	/** Number of columns to span */
	colSpan: number;
	children: ReactNode14;
}
declare function TableGroupHeader({ colSpan, children, style,...props }: TableGroupHeaderProps): React.JSX.Element;
interface TableEmptyRowProps extends HTMLAttributes6<HTMLTableRowElement> {
	/** Number of columns to span */
	colSpan: number;
	children: ReactNode14;
}
declare function TableEmptyRow({ colSpan, children, style,...props }: TableEmptyRowProps): React.JSX.Element;
export { warmSandTheme, useTheme, typography, tokenToCssProperty, synthwaveTheme, slateTheme, semantic, pipboyTheme, pacmanTheme, neuralTheme, mossTheme, iconRegistry, coralTheme, Typography, ThemeTokens, ThemeSurfaceProps, ThemeSurface, ThemeProviderProps, ThemeProvider, ThemePickerProps, ThemePicker, ThemeDefinition, ThemeContextValue, Theme, TextareaProps, Textarea, TagChipProps, TagChip, TableVariant, TableRowProps, TableRow, TableProps, TableHeaderProps, TableHeaderCellProps, TableHeaderCell, TableHeader, TableGroupHeaderProps, TableGroupHeader, TableEmptyRowProps, TableEmptyRow, TableCellProps, TableCell, TableBodyProps, TableBody, Table, StatusDotVariant, StatusDotProps, StatusDot, StackProps, Stack, SkeletonProps, Skeleton, SemanticTokens, SelectProps, SelectOption, Select, RowSkeleton, ResolvedTheme, ProgressBarSegment, ProgressBarProps, ProgressBar, PaginationProps, PaginationLabels, Pagination, PageHeaderProps, PageHeader, OverlayProps, Overlay, ModalShellProps, ModalShell, InputProps, Input, IconWarning, IconTrash, IconSettings, IconSearch, IconProps, IconPlus, IconName, IconMoreVertical, IconMinus, IconMenu, IconInfo, IconFilter, IconEyeOff, IconEye, IconExternalLink, IconError, IconEdit, IconCopy, IconClose, IconChevronUp, IconChevronRight, IconChevronLeft, IconChevronDown, IconCheckCircle, IconCheck, IconButtonProps, IconButton, IconArrowRight, IconArrowLeft, Icon, HeadingLevel, FieldProps, Field, ExpandableCardProps, ExpandableCard, EmptyStateProps, EmptyState, ConfirmDialogVariant, ConfirmDialogProps, ConfirmDialog, CardVariant, CardSkeleton, CardProps, Card, ButtonVariant, ButtonSize, ButtonProps, Button, BadgeVariant, BadgeProps, Badge };
