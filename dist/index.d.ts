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
	readonly colorText: "var(--color-text)";
	readonly colorTextSecondary: "var(--color-text-secondary)";
	readonly colorTextMuted: "var(--color-text-muted)";
	readonly colorTextInverse: "var(--color-text-inverse)";
	readonly colorTextLink: "var(--color-text-link)";
	readonly colorTextPlaceholder: "var(--color-text-placeholder)";
	readonly colorTextDisabled: "var(--color-text-disabled)";
	readonly colorSurface: "var(--color-surface)";
	readonly colorSurfaceRaised: "var(--color-surface-raised)";
	readonly colorSurfaceOverlay: "var(--color-surface-overlay)";
	readonly colorSurfaceInput: "var(--color-surface-input)";
	readonly colorSurfaceDisabled: "var(--color-surface-disabled)";
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
	colorSurfaceRaised: string;
	colorSurfaceOverlay: string;
	colorSurfaceInput: string;
	colorSurfaceDisabled: string;
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
}
declare function ThemeProvider({ children, themes: extraThemes, defaultTheme, storageKey }: ThemeProviderProps): React.JSX.Element;
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
import { CSSProperties as CSSProperties2 } from "react";
import { CSSProperties } from "react";
interface IconComponentProps {
	size?: number;
	style?: CSSProperties;
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
	style?: CSSProperties2;
}) => React.JSX.Element>;
import { ButtonHTMLAttributes, ReactNode as ReactNode2 } from "react";
type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: ReactNode2;
}
declare function Button({ variant, size, children, style, disabled,...props }: ButtonProps): React.JSX.Element;
import { CSSProperties as CSSProperties3, HTMLAttributes, ReactNode as ReactNode3 } from "react";
type SpacingToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
interface StackProps extends HTMLAttributes<HTMLDivElement> {
	/** Stack direction. Default: 'vertical' */
	direction?: "vertical" | "horizontal";
	/** Gap between children. Default: 'md' */
	gap?: SpacingToken;
	/** Cross-axis alignment. */
	align?: CSSProperties3["alignItems"];
	/** Main-axis alignment. */
	justify?: CSSProperties3["justifyContent"];
	/** Whether children should wrap. */
	wrap?: boolean;
	children: ReactNode3;
}
declare function Stack({ direction, gap, align, justify, wrap, children, style,...props }: StackProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes2, ReactNode as ReactNode4 } from "react";
type SpacingToken2 = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type CardVariant = "default" | "flat" | "elevated";
interface CardProps extends HTMLAttributes2<HTMLDivElement> {
	/** Visual treatment. Default: 'default' */
	variant?: CardVariant;
	/** Inner padding. Default: 'lg' */
	padding?: SpacingToken2;
	children: ReactNode4;
}
declare function Card({ variant, padding, children, style,...props }: CardProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes3, ReactNode as ReactNode5 } from "react";
interface FieldProps extends Omit<HTMLAttributes3<HTMLDivElement>, "children"> {
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
declare function Field({ label, htmlFor, error, help, required, disabled, children, style,...props }: FieldProps): React.JSX.Element;
import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	/** Renders error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
}
declare function Input({ hasError, disabled, style,...props }: InputProps): React.JSX.Element;
import { TextareaHTMLAttributes } from "react";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	/** Renders error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
}
declare function Textarea({ hasError, disabled, style,...props }: TextareaProps): React.JSX.Element;
import { SelectHTMLAttributes } from "react";
interface SelectOption {
	value: string;
	label: string;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
	/** Options to render. */
	options: SelectOption[];
	/** Optional placeholder shown as first disabled option. */
	placeholder?: string;
	/** Renders error border styling. Typically driven by a parent Field. */
	hasError?: boolean;
}
declare function Select({ options, placeholder, hasError, disabled, style,...props }: SelectProps): React.JSX.Element;
import { CSSProperties as CSSProperties4, ReactNode as ReactNode6 } from "react";
type BadgeVariant = "default" | "success" | "warning" | "error" | "info";
interface BadgeProps {
	children: ReactNode6;
	variant?: BadgeVariant;
	style?: CSSProperties4;
}
declare function Badge({ children, variant, style }: BadgeProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes4 } from "react";
interface IconProps extends Omit<HTMLAttributes4<HTMLSpanElement>, "children"> {
	name: IconName;
	size?: number;
}
declare function Icon({ name, size, style,...props }: IconProps): React.JSX.Element;
import { ButtonHTMLAttributes as ButtonHTMLAttributes2 } from "react";
interface IconButtonProps extends ButtonHTMLAttributes2<HTMLButtonElement> {
	icon: IconName;
	size?: number;
	badge?: boolean;
}
declare function IconButton({ icon, size, badge, style,...props }: IconButtonProps): React.JSX.Element;
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
	style?: CSSProperties7;
}
declare function ProgressBar({ segments, height, style }: ProgressBarProps): React.JSX.Element;
import { CSSProperties as CSSProperties8 } from "react";
interface EmptyStateProps {
	icon: IconName;
	message: string;
	variant?: "plain" | "card";
	style?: CSSProperties8;
}
declare function EmptyState({ icon, message, variant, style }: EmptyStateProps): React.JSX.Element;
interface PaginationProps {
	page: number;
	totalPages: number;
	total: number;
	onPageChange: (page: number) => void;
}
declare function Pagination({ page, totalPages, total, onPageChange }: PaginationProps): React.JSX.Element;
import { CSSProperties as CSSProperties9, ReactNode as ReactNode7 } from "react";
interface PageHeaderProps {
	title: string;
	subtitle?: string;
	trailing?: ReactNode7;
	style?: CSSProperties9;
}
declare function PageHeader({ title, subtitle, trailing, style }: PageHeaderProps): React.JSX.Element;
import { CSSProperties as CSSProperties10 } from "react";
interface TagChipProps {
	name: string;
	onRemove?: () => void;
	style?: CSSProperties10;
}
declare function TagChip({ name, onRemove, style }: TagChipProps): React.JSX.Element;
import { CSSProperties as CSSProperties11, ReactNode as ReactNode8 } from "react";
interface ExpandableCardProps {
	title: string;
	children: ReactNode8;
	defaultOpen?: boolean;
	open?: boolean;
	onToggle?: (open: boolean) => void;
	variant?: CardVariant;
	style?: CSSProperties11;
	headerAction?: ReactNode8;
}
declare function ExpandableCard({ title, children, defaultOpen, open: controlledOpen, onToggle, variant, style, headerAction }: ExpandableCardProps): React.JSX.Element;
import { CSSProperties as CSSProperties12, ReactNode as ReactNode9 } from "react";
interface ModalShellProps {
	onClose: () => void;
	children: ReactNode9;
	maxWidth?: number;
	zIndex?: number;
	style?: CSSProperties12;
}
declare function ModalShell({ onClose, children, maxWidth, zIndex, style }: ModalShellProps): React.JSX.Element;
interface ConfirmDialogProps {
	title: string;
	message: string;
	confirmLabel?: string;
	onConfirm: () => Promise<void> | void;
	onCancel: () => void;
}
declare function ConfirmDialog({ title, message, confirmLabel, onConfirm, onCancel }: ConfirmDialogProps): React.JSX.Element;
import { CSSProperties as CSSProperties13 } from "react";
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
	style?: CSSProperties13;
}
declare function StatusDot({ variant, color, size, "aria-label": ariaLabel, style }: StatusDotProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes5, TdHTMLAttributes, ThHTMLAttributes, ReactNode as ReactNode10 } from "react";
type SpacingToken3 = "xs" | "sm" | "md" | "lg";
type TableVariant = "default" | "flat";
interface TableProps extends HTMLAttributes5<HTMLDivElement> {
	/** Visual treatment. Default wraps with border + shadow; flat has no chrome. */
	variant?: TableVariant;
	/** Cell density. Default: 'md' */
	density?: SpacingToken3;
	children: ReactNode10;
}
declare function Table({ variant, density, children, style,...props }: TableProps): React.JSX.Element;
interface TableHeaderProps extends HTMLAttributes5<HTMLTableSectionElement> {
	children: ReactNode10;
}
declare function TableHeader({ children, style,...props }: TableHeaderProps): React.JSX.Element;
interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
	/** Text alignment. Default: 'left' */
	align?: "left" | "center" | "right";
	/** Fixed width in px or CSS string */
	width?: number | string;
	children?: ReactNode10;
}
declare function TableHeaderCell({ align, width, children, style,...props }: TableHeaderCellProps): React.JSX.Element;
interface TableBodyProps extends HTMLAttributes5<HTMLTableSectionElement> {
	children: ReactNode10;
}
declare function TableBody({ children,...props }: TableBodyProps): React.JSX.Element;
interface TableRowProps extends HTMLAttributes5<HTMLTableRowElement> {
	/** Highlight as selected */
	selected?: boolean;
	/** Enable hover background */
	hoverable?: boolean;
	children: ReactNode10;
}
declare function TableRow({ selected, hoverable, children, style, onClick,...props }: TableRowProps): React.JSX.Element;
interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
	/** Text alignment. Default: 'left' */
	align?: "left" | "center" | "right";
	/** Truncate overflowing text with ellipsis */
	truncate?: boolean;
	/** Use muted text color */
	muted?: boolean;
	/** Fixed width in px or CSS string */
	width?: number | string;
	children?: ReactNode10;
}
declare function TableCell({ align, truncate, muted, width, children, style,...props }: TableCellProps): React.JSX.Element;
interface TableGroupHeaderProps extends HTMLAttributes5<HTMLTableRowElement> {
	/** Number of columns to span */
	colSpan: number;
	children: ReactNode10;
}
declare function TableGroupHeader({ colSpan, children, style,...props }: TableGroupHeaderProps): React.JSX.Element;
interface TableEmptyRowProps extends HTMLAttributes5<HTMLTableRowElement> {
	/** Number of columns to span */
	colSpan: number;
	children: ReactNode10;
}
declare function TableEmptyRow({ colSpan, children, style,...props }: TableEmptyRowProps): React.JSX.Element;
export { warmSandTheme, useTheme, typography, tokenToCssProperty, synthwaveTheme, spacing, slateTheme, shadows, semantic, radii, pipboyTheme, pacmanTheme, neuralTheme, mossTheme, iconRegistry, coralTheme, colors, Typography, ThemeTokens, ThemeProviderProps, ThemeProvider, ThemePickerProps, ThemePicker, ThemeDefinition, ThemeContextValue, Theme, TextareaProps, Textarea, TagChipProps, TagChip, TableVariant, TableRowProps, TableRow, TableProps, TableHeaderProps, TableHeaderCellProps, TableHeaderCell, TableHeader, TableGroupHeaderProps, TableGroupHeader, TableEmptyRowProps, TableEmptyRow, TableCellProps, TableCell, TableBodyProps, TableBody, Table, StatusDotVariant, StatusDotProps, StatusDot, StackProps, Stack, Spacing, SkeletonProps, Skeleton, Shadows, SemanticTokens, SelectProps, SelectOption, Select, RowSkeleton, ResolvedTheme, Radii, ProgressBarSegment, ProgressBarProps, ProgressBar, PaginationProps, Pagination, PageHeaderProps, PageHeader, OverlayProps, Overlay, ModalShellProps, ModalShell, InputProps, Input, IconWarning, IconTrash, IconSettings, IconSearch, IconProps, IconPlus, IconName, IconMoreVertical, IconMinus, IconMenu, IconInfo, IconFilter, IconEyeOff, IconEye, IconExternalLink, IconError, IconEdit, IconCopy, IconClose, IconChevronUp, IconChevronRight, IconChevronLeft, IconChevronDown, IconCheckCircle, IconCheck, IconButtonProps, IconButton, IconArrowRight, IconArrowLeft, Icon, FieldProps, Field, ExpandableCardProps, ExpandableCard, EmptyStateProps, EmptyState, ConfirmDialogProps, ConfirmDialog, Colors, CardVariant, CardSkeleton, CardProps, Card, ButtonVariant, ButtonSize, ButtonProps, Button, BadgeVariant, BadgeProps, Badge };
