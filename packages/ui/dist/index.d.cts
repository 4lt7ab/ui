import { RefObject } from "react";
/**
* Traps keyboard focus within the referenced container element.
* On Tab, cycles through focusable elements; on Shift+Tab, cycles backwards.
* Re-queries focusable elements on each Tab press to handle dynamic content.
*/
declare function useFocusTrap(ref: RefObject<HTMLElement | null>): void;
export * from "@4lt7ab/core";
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
import { ButtonHTMLAttributes, ReactNode } from "react";
/** Visual style variant for buttons. */
type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost";
/** Controls padding and font size. */
type ButtonSize = "sm" | "md" | "lg";
/** A clickable button that triggers an action. */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
	/** Button content. */
	children: ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
import { CSSProperties as CSSProperties4, HTMLAttributes as HTMLAttributes2, ReactNode as ReactNode2 } from "react";
type SpacingToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
/** Flexbox layout component for vertical or horizontal stacking with consistent spacing. */
interface StackProps extends HTMLAttributes2<HTMLDivElement> {
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
	/** Cross-axis alignment (maps to CSS `align-items`). */
	align?: CSSProperties4["alignItems"];
	/** Main-axis alignment (maps to CSS `justify-content`). */
	justify?: CSSProperties4["justifyContent"];
	/** Whether children should wrap to the next line when they overflow.
	* @default false
	*/
	wrap?: boolean;
	/** Stack content. */
	children: ReactNode2;
}
declare const Stack: React.ForwardRefExoticComponent<Omit<StackProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { HTMLAttributes as HTMLAttributes3, ReactNode as ReactNode3 } from "react";
type SpacingToken2 = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
/** Visual treatment for the Card surface. */
type CardVariant = "default" | "flat" | "elevated";
/** A contained surface for grouping related content. */
interface CardProps extends HTMLAttributes3<HTMLDivElement> {
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
	padding?: SpacingToken2;
	/** Card content. */
	children: ReactNode3;
}
declare const Card: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { HTMLAttributes as HTMLAttributes4, ReactNode as ReactNode4 } from "react";
/** Wraps an input with a label, help text, and error message. Handles `aria-describedby` wiring automatically. */
interface FieldProps extends Omit<HTMLAttributes4<HTMLDivElement>, "children"> {
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
	children: ReactNode4;
}
declare const Field: React.ForwardRefExoticComponent<Omit<FieldProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { InputHTMLAttributes } from "react";
/** A single-line text input field. */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	/** Renders error border styling. Typically driven by a parent Field.
	* @default false
	*/
	hasError?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
import { TextareaHTMLAttributes } from "react";
/** A multi-line text input area. Vertically resizable by default. */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	/** Renders error border styling. Typically driven by a parent Field.
	* @default false
	*/
	hasError?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
import { ReactNode as ReactNode5, SelectHTMLAttributes } from "react";
/** A single option in the Select dropdown. */
interface SelectOption {
	/** The value submitted with the form. */
	value: string;
	/** Display text shown in the dropdown. */
	label: string;
	/** Whether this option is disabled. */
	disabled?: boolean;
}
/** A native dropdown select with custom chevron styling. */
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
	/** Options to render. Ignored when `children` is provided. */
	options?: SelectOption[];
	/** Custom option/optgroup elements. When provided, `options` is ignored. */
	children?: ReactNode5;
	/** Optional placeholder shown as a first disabled option. */
	placeholder?: string;
	/** Renders error border styling. Typically driven by a parent Field.
	* @default false
	*/
	hasError?: boolean;
}
declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<HTMLSelectElement>>;
import { ReactNode as ReactNode6 } from "react";
/** Semantic color variant for badges. */
type BadgeVariant = "default" | "success" | "warning" | "error" | "info";
/** A small label for status, category, or metadata. Rendered as uppercase pill text. */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Badge content (typically short text). */
	children: ReactNode6;
	/** Color variant mapping to feedback tokens.
	* - `default` — neutral with border
	* - `success` — green tinted background
	* - `warning` — amber tinted background
	* - `error` — red tinted background
	* - `info` — blue tinted background
	* @default 'default'
	*/
	variant?: BadgeVariant;
}
declare const Badge: React.ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { HTMLAttributes as HTMLAttributes5 } from "react";
/** Renders a named icon from the icon registry. Decorative by default; provide `aria-label` for meaningful icons. */
interface IconProps extends Omit<HTMLAttributes5<HTMLSpanElement>, "children"> {
	/** Icon to render from the built-in icon registry. */
	name: IconName;
	/** Icon dimensions in pixels (width and height).
	* @default 24
	*/
	size?: number;
}
declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { ButtonHTMLAttributes as ButtonHTMLAttributes2 } from "react";
/** A circular icon-only button. Requires `aria-label` for accessibility. */
interface IconButtonProps extends ButtonHTMLAttributes2<HTMLButtonElement> {
	/** Icon to render from the built-in icon registry. */
	icon: IconName;
	/** Icon dimensions in pixels.
	* @default 24
	*/
	size?: number;
	/** Shows a small red notification dot in the top-right corner.
	* @default false
	*/
	badge?: boolean;
	/** Required accessible label for icon-only buttons. */
	"aria-label": string;
}
declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
import { CSSProperties as CSSProperties5 } from "react";
/** A full-screen semi-transparent backdrop. Used behind modals and drawers. */
interface OverlayProps {
	/** Called when the overlay is clicked (typically to close the parent modal). */
	onClick?: () => void;
	/** CSS z-index for stacking control.
	* @default 100
	*/
	zIndex?: number;
	/** Additional inline styles. */
	style?: CSSProperties5;
}
declare const Overlay: React.ForwardRefExoticComponent<Omit<OverlayProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties6 } from "react";
/** A placeholder loading shape. Renders a static block with the raised surface color. */
interface SkeletonProps {
	/** Width of the skeleton. Numbers are treated as pixels.
	* @default '100%'
	*/
	width?: string | number;
	/** Height of the skeleton. Numbers are treated as pixels.
	* @default 16
	*/
	height?: string | number;
	/** Border radius CSS value.
	* @default radiusMd token
	*/
	borderRadius?: string;
	/** Additional inline styles. */
	style?: CSSProperties6;
}
declare const Skeleton: React.ForwardRefExoticComponent<Omit<SkeletonProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CardSkeleton: React.ForwardRefExoticComponent<Omit<{
	style?: CSSProperties6;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RowSkeleton: React.ForwardRefExoticComponent<Omit<{
	style?: CSSProperties6;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties7 } from "react";
/** A single segment in a multi-part progress bar. */
interface ProgressBarSegment {
	/** Numeric value for this segment. Width is proportional to value / total. */
	value: number;
	/** Segment fill color (CSS color string or semantic token). */
	color: string;
	/** Optional label shown in the segment's title tooltip. */
	label?: string;
}
/** A horizontal segmented progress bar. Each segment's width is proportional to its value relative to the total. */
interface ProgressBarProps {
	/** One or more segments to display. */
	segments: ProgressBarSegment[];
	/** Bar height in pixels.
	* @default 6
	*/
	height?: number;
	/** Accessible label for screen readers. */
	"aria-label"?: string;
	/** Additional inline styles for the track container. */
	style?: CSSProperties7;
}
declare const ProgressBar: React.ForwardRefExoticComponent<Omit<ProgressBarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties8, ReactNode as ReactNode7 } from "react";
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
	/** Additional inline styles. */
	style?: CSSProperties8;
	/** Additional content rendered below the message. */
	children?: ReactNode7;
	/** Action slot (e.g. a CTA button) rendered below the message and children. */
	action?: ReactNode7;
}
declare const EmptyState: React.ForwardRefExoticComponent<Omit<EmptyStateProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties9 } from "react";
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
	/** CSS class name for the wrapper. */
	className?: string;
	/** Additional inline styles for the wrapper. */
	style?: CSSProperties9;
}
declare const Pagination: React.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties10, ReactNode as ReactNode8 } from "react";
/** HTML heading level (h1-h6). */
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
/** A page-level heading with optional subtitle and trailing action slot. */
interface PageHeaderProps {
	/** Primary heading text. */
	title: string;
	/** Secondary text rendered below the title in muted style. */
	subtitle?: string;
	/** Content aligned to the right of the header (e.g. action buttons). */
	trailing?: ReactNode8;
	/** Additional inline styles for the wrapper. */
	style?: CSSProperties10;
	/** CSS class name for the wrapper. */
	className?: string;
	/** HTML heading level (1-6).
	* @default 2
	*/
	level?: HeadingLevel;
}
declare const PageHeader: React.ForwardRefExoticComponent<Omit<PageHeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties11 } from "react";
/** A small pill-shaped tag with an optional remove button. */
interface TagChipProps {
	/** Tag display text. */
	name: string;
	/** When provided, renders a close button that calls this handler on click. */
	onRemove?: () => void;
	/** Additional inline styles. */
	style?: CSSProperties11;
}
declare const TagChip: React.ForwardRefExoticComponent<Omit<TagChipProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { CSSProperties as CSSProperties12, ReactNode as ReactNode9 } from "react";
/** A Card with a collapsible body. Supports both controlled and uncontrolled open state. */
interface ExpandableCardProps {
	/** Header text shown alongside the chevron toggle. */
	title: string;
	/** Collapsible body content. */
	children: ReactNode9;
	/** Initial open state when uncontrolled.
	* @default false
	*/
	defaultOpen?: boolean;
	/** Controlled open state. When provided, the component is fully controlled. */
	open?: boolean;
	/** Called when the open state changes. Receives the next open value. */
	onToggle?: (open: boolean) => void;
	/** Card surface variant passed to the underlying Card.
	* @default 'default'
	*/
	variant?: CardVariant;
	/** Additional inline styles for the Card wrapper. */
	style?: CSSProperties12;
	/** Content rendered in the header row to the right of the title (e.g. action buttons). */
	headerAction?: ReactNode9;
}
declare const ExpandableCard: React.ForwardRefExoticComponent<Omit<ExpandableCardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties13, ReactNode as ReactNode10 } from "react";
/** A centered modal panel with backdrop overlay. Closes on Escape and overlay click. */
interface ModalShellProps {
	/** Called when the modal should close (Escape key or overlay click). */
	onClose: () => void;
	/** Modal body content. */
	children: ReactNode10;
	/** Maximum width of the modal panel in pixels.
	* @default 480
	*/
	maxWidth?: number;
	/** Base z-index for the overlay. The panel renders at `zIndex + 1`.
	* @default 200
	*/
	zIndex?: number;
	/** Additional inline styles for the modal panel. */
	style?: CSSProperties13;
	/** ID of the element that labels this dialog. Used for `aria-labelledby`. */
	titleId?: string;
	/** Accessible label for the dialog. Alternative to `titleId`/`aria-labelledby`. */
	"aria-label"?: string;
	/** ARIA role override. Defaults to `"dialog"`. ConfirmDialog passes `"alertdialog"`. */
	role?: "dialog" | "alertdialog";
}
declare const ModalShell: React.ForwardRefExoticComponent<Omit<ModalShellProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ReactNode as ReactNode11 } from "react";
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
	children?: ReactNode11;
	/** Controls the confirm button color variant.
	* - `destructive` — red destructive button
	* - `info` — primary accent button
	* - `warning` — primary accent button
	* @default 'destructive'
	*/
	variant?: ConfirmDialogVariant;
}
declare const ConfirmDialog: React.ForwardRefExoticComponent<Omit<ConfirmDialogProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { CSSProperties as CSSProperties14 } from "react";
/** Semantic color variant for the status dot. */
type StatusDotVariant = "default" | "success" | "warning" | "error" | "info";
/** A small colored circle indicating status. */
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
declare const StatusDot: React.ForwardRefExoticComponent<Omit<StatusDotProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
import { ReactNode as ReactNode12 } from "react";
interface ThemeSurfaceProps {
	children: ReactNode12;
	/**
	* When true, applies the page background to document.body.
	* When false (default), renders a div with the page background color.
	*
	* @default false
	*/
	global?: boolean;
	/** Additional inline styles for the wrapper div (only used when global=false). */
	style?: React.CSSProperties;
}
/**
* Applies the theme's page background color.
*
* Use `global` to set the body background.
* Without `global`, renders a styled div with the page background.
*/
declare const ThemeSurface: React.ForwardRefExoticComponent<Omit<ThemeSurfaceProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { HTMLAttributes as HTMLAttributes6, TdHTMLAttributes, ThHTMLAttributes, ReactNode as ReactNode13 } from "react";
type SpacingToken3 = "xs" | "sm" | "md" | "lg";
/** Visual treatment for the table wrapper. */
type TableVariant = "default" | "flat";
/** Root table wrapper. Provides overflow scrolling, border, and shadow. */
interface TableProps extends HTMLAttributes6<HTMLDivElement> {
	/** Visual treatment for the outer wrapper.
	* - `default` — border, rounded corners, and small shadow
	* - `flat` — no wrapper chrome
	* @default 'default'
	*/
	variant?: TableVariant;
	/** Cell padding density.
	* @default 'md'
	*/
	density?: SpacingToken3;
	/** Table content (TableHeader, TableBody, etc.). */
	children: ReactNode13;
}
declare const Table: React.ForwardRefExoticComponent<Omit<TableProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/** Table header section. Renders a `<thead>` with a single `<tr>` wrapping the children. */
interface TableHeaderProps extends HTMLAttributes6<HTMLTableSectionElement> {
	/** TableHeaderCell elements. */
	children: ReactNode13;
}
declare const TableHeader: React.ForwardRefExoticComponent<Omit<TableHeaderProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/** A single column header cell (`<th>`). Renders uppercase, muted, semibold text. */
interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
	/** Text alignment.
	* @default 'left'
	*/
	align?: "left" | "center" | "right";
	/** Fixed column width. Numbers are treated as pixels; strings are used as-is. */
	width?: number | string;
	/** Header label. */
	children?: ReactNode13;
}
declare const TableHeaderCell: React.ForwardRefExoticComponent<Omit<TableHeaderCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
/** Table body section (`<tbody>`). Wraps TableRow elements. */
interface TableBodyProps extends HTMLAttributes6<HTMLTableSectionElement> {
	/** TableRow elements. */
	children: ReactNode13;
}
declare const TableBody: React.ForwardRefExoticComponent<Omit<TableBodyProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/** A table row (`<tr>`). Supports selection highlighting and hover effects. When `onClick` is provided, the row becomes focusable and responds to Enter/Space. */
interface TableRowProps extends HTMLAttributes6<HTMLTableRowElement> {
	/** Highlights the row with a raised background and a left accent border.
	* @default false
	*/
	selected?: boolean;
	/** Enables a hover background color change.
	* @default false
	*/
	hoverable?: boolean;
	/** TableCell elements. */
	children: ReactNode13;
}
declare const TableRow: React.ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
/** A table data cell (`<td>`). */
interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
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
	/** Fixed column width. Numbers are treated as pixels; strings are used as-is. */
	width?: number | string;
	/** Cell content. */
	children?: ReactNode13;
}
declare const TableCell: React.ForwardRefExoticComponent<Omit<TableCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
/** A full-width subheading row for grouping table rows under a shared label. */
interface TableGroupHeaderProps extends HTMLAttributes6<HTMLTableRowElement> {
	/** Number of columns the header should span. */
	colSpan: number;
	/** Group label text. */
	children: ReactNode13;
}
declare const TableGroupHeader: React.ForwardRefExoticComponent<Omit<TableGroupHeaderProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
/** A centered message row displayed when the table has no data. */
interface TableEmptyRowProps extends HTMLAttributes6<HTMLTableRowElement> {
	/** Number of columns the message should span. */
	colSpan: number;
	/** Empty state message content. */
	children: ReactNode13;
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
	/** Additional inline styles on the wrapper. */
	style?: React.CSSProperties;
}
declare const DateRangePicker: React.ForwardRefExoticComponent<Omit<DateRangePickerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { useFocusTrap, iconRegistry, ThemeSurfaceProps, ThemeSurface, ThemePickerProps, ThemePicker, TextareaProps, Textarea, TagChipProps, TagChip, TableVariant, TableRowProps, TableRow, TableProps, TableHeaderProps, TableHeaderCellProps, TableHeaderCell, TableHeader, TableGroupHeaderProps, TableGroupHeader, TableEmptyRowProps, TableEmptyRow, TableCellProps, TableCell, TableBodyProps, TableBody, Table, StatusDotVariant, StatusDotProps, StatusDot, StackProps, Stack, SkeletonProps, Skeleton, SelectProps, SelectOption, Select, RowSkeleton, ProgressBarSegment, ProgressBarProps, ProgressBar, PaginationProps, PaginationLabels, Pagination, PageHeaderProps, PageHeader, OverlayProps, Overlay, ModalShellProps, ModalShell, InputProps, Input, IconWarning, IconTrash, IconSettings, IconSearch, IconProps, IconPlus, IconName, IconMoreVertical, IconMinus, IconMenu, IconInfo, IconFilter, IconEyeOff, IconEye, IconExternalLink, IconError, IconEdit, IconCopy, IconClose, IconChevronUp, IconChevronRight, IconChevronLeft, IconChevronDown, IconCheckCircle, IconCheck, IconButtonProps, IconButton, IconArrowRight, IconArrowLeft, Icon, HeadingLevel, FieldProps, Field, ExpandableCardProps, ExpandableCard, EmptyStateProps, EmptyState, DateRangePickerProps, DateRangePicker, DateRange, ConfirmDialogVariant, ConfirmDialogProps, ConfirmDialog, CardVariant, CardSkeleton, CardProps, Card, ButtonVariant, ButtonSize, ButtonProps, Button, BadgeVariant, BadgeProps, Badge };
