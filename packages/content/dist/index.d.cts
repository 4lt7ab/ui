/** Shared layout and typography constants for content components. */
/** Max-width for prose reading measure (~65ch). Used by Prose, Markdown, Container. */
declare const BREAKPOINT_PROSE = "680px";
/** Max-width for wide content layouts. Used by Container. */
declare const BREAKPOINT_WIDE = "900px";
/** Min-width at which margin/side notes become visible. */
declare const BREAKPOINT_MARGIN_NOTES = "1100px";
/** Body text size for prose content. */
declare const PROSE_BODY_SIZE = "1.0625rem";
/** H1 heading size — fluid, clamped between 2rem and 2.75rem. */
declare const PROSE_H1_SIZE = "clamp(2rem, 5vw, 2.75rem)";
/** H2 heading size. */
declare const PROSE_H2_SIZE = "1.35em";
/** Inline code font size. */
declare const PROSE_CODE_SIZE = "0.875rem";
/** Blockquote font size. */
declare const PROSE_BLOCKQUOTE_SIZE = "1.25rem";
/** Subtle background tint (zebra stripes, alternating rows). */
declare const MIX_SUBTLE = "5%";
/** Hover background tint. */
declare const MIX_HOVER = "8%";
/** Badge/tag background tint. */
declare const MIX_BADGE = "14%";
import { ReactNode } from "react";
interface ProseProps {
	children: ReactNode;
	id?: string;
	"data-testid"?: string;
}
declare const Prose: React.ForwardRefExoticComponent<Omit<ProseProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { ComponentType } from "react";
import { Options as ReactMarkdownOptions } from "react-markdown";
type RemarkPluginList = NonNullable<ReactMarkdownOptions["remarkPlugins"]>;
interface MarkdownProps {
	/**
	* Saved markdown source text. Required in read-only mode (`editable` off).
	* Optional in `editable` mode, where an empty/null value triggers the
	* empty-state placeholder. When `editable` + `editing` are both on, the
	* rendered textarea is bound to `value` — `children` is only used for the
	* read display.
	*/
	children?: string | null;
	id?: string;
	"data-testid"?: string;
	/**
	* Enable click-to-edit mode. When on, Markdown renders a three-state UI:
	* empty-state placeholder (no `children`), read-only display (click to
	* start editing), or a textarea with Save/Cancel controls (when `editing`
	* is true). When off (the default), Markdown renders the read-only view
	* exactly as it always has.
	* @default false
	*/
	editable?: boolean;
	/** Whether the section is in editing mode. Only meaningful when `editable` is on. */
	editing?: boolean;
	/** Current value in the textarea during editing. Only meaningful when `editable` + `editing`. */
	value?: string;
	/** Called when the user clicks the content or the empty-state placeholder. */
	onStartEdit?: () => void;
	/** Called with the new textarea value on change. */
	onEditChange?: (value: string) => void;
	/** Called when the user saves (Save button or Cmd/Ctrl+Enter). */
	onSave?: () => void;
	/** Called when the user cancels (Cancel button or Escape). */
	onCancel?: () => void;
	/** Accessible label for the editable section (e.g. "Summary", "Context"). */
	fieldLabel?: string;
	/** Number of textarea rows when editing. @default 4 */
	rows?: number;
	/** Placeholder text shown in the empty state. @default "Click to add content..." */
	placeholder?: string;
	/**
	* Additional element overrides merged on top of the built-in set (headings,
	* `pre`, `blockquote`, `tbody`). Keys are HTML tag names (lowercase) or
	* `hName` values produced by a remark plugin (see `remarkPlugins` below).
	*
	* Useful for doc sites that embed React islands inside markdown — pair a
	* plugin that rewrites `<LiveExample id="..." />` HTML blocks into hast
	* elements with `{ liveexample: MyLiveExample }` here, and the element
	* renders in-line. Merge is shallow: built-in overrides win on tag names
	* they already cover; consumer keys are merged on top for everything else.
	*/
	components?: Record<string, ComponentType<any>>;
	/**
	* Additional remark plugins appended to the built-in set (currently
	* `remark-gfm`). Useful for embedding React islands: a plugin can rewrite
	* an mdast node's `data.hName` / `data.hProperties` to emit a custom hast
	* element, which then pairs with a matching key in the `components` map.
	*
	* Plugins run after the built-ins, so the default GFM parse happens first.
	*/
	remarkPlugins?: RemarkPluginList;
}
/**
* Renders a markdown string with its own typographic styles.
*
* **Features:**
* - GitHub Flavored Markdown (tables, strikethrough, autolinks, task lists)
* - Heading anchors with hover-visible link icons
* - GitHub-style callout blocks (`> [!NOTE]`, `> [!TIP]`, etc.)
* - Code blocks with copy-to-clipboard button
* - Copy-as-markdown button for the entire document
*
* **Editable mode (optional).** Pass `editable` to opt into a three-state
* click-to-edit UI: empty-state placeholder, read-only display (click to
* edit), and a textarea with Save/Cancel controls (when `editing` is on).
* Keyboard shortcuts: Cmd/Ctrl+Enter to save, Escape to cancel. When
* `editable` is off, Markdown behaves exactly as the read-only renderer.
*
* Styled independently from Prose — uses the `.alttab-markdown` namespace.
*/
declare function Markdown({ children, id, "data-testid": dataTestId, editable, editing, value, onStartEdit, onEditChange, onSave, onCancel, fieldLabel, rows, placeholder, components, remarkPlugins }: MarkdownProps): React.JSX.Element;
import { ReactNode as ReactNode2 } from "react";
type QuoteVariant = "pull" | "epigraph";
interface QuoteProps {
	/** The quote text. Rendered in serif italic. */
	children: ReactNode2;
	/**
	* Visual treatment.
	* - `'pull'` (default) — in-flow pull quote with horizontal rules. Must be
	*   placed inside `<Prose>` for styling; Prose owns the CSS and targets
	*   `[data-pull-quote]`.
	* - `'epigraph'` — large standalone blockquote with its own injected styles;
	*   works both inside and outside `<Prose>`.
	* @default 'pull'
	*/
	variant?: QuoteVariant;
	/** Attribution line (author, source). Rendered in a `<footer>` below the quote. */
	cite?: ReactNode2;
}
/**
* Serif-italic blockquote with two visual treatments selected via `variant`:
*
* - `'pull'` — centered in-flow pull quote framed by horizontal rules. Requires
*   a `<Prose>` wrapper for styling (Prose owns the CSS and targets the
*   `[data-pull-quote]` attribute).
* - `'epigraph'` — larger, standalone blockquote that injects its own styles
*   and works both inside and outside `<Prose>`. Good for opening quotes,
*   page epigraphs, or hero-level callouts.
*
* The optional `cite` prop renders as a `<footer>` below the quote and is
* harmless on either variant.
*/
declare const Quote: React.ForwardRefExoticComponent<Omit<QuoteProps, "ref"> & React.RefAttributes<HTMLQuoteElement>>;
import { ReactNode as ReactNode3 } from "react";
interface MarginNoteProps {
	children: ReactNode3;
	/**
	* Which margin the note floats into on wide screens (>=BREAKPOINT_MARGIN_NOTES).
	* On narrow screens the note is always inline and the `side` only affects
	* which edge carries the border accent.
	* @default 'left'
	*/
	side?: "left" | "right";
}
/**
* Annotation that appears inline on mobile and floats into the page margin on
* wide screens (>=BREAKPOINT_MARGIN_NOTES). `side` picks which margin — left
* (default) or right. Must be used inside `<Prose>` for styling and positioning.
*/
declare const MarginNote: React.ForwardRefExoticComponent<Omit<MarginNoteProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface ThinkingCycleProps {
	/** Words to cycle through. Needs at least 2. */
	words: string[];
	/** How long each word stays visible (ms). Default: 2000 */
	holdMs?: number;
	/** Scramble iterations per character. Default: 4 */
	scrambleTicks?: number;
	/** Ms between scramble frames. Default: 50 */
	tickMs?: number;
	/** Stagger delay between each character starting (ms). Default: 30 */
	staggerMs?: number;
}
/**
* Inline text that scrambles then settles into each word, letter by letter.
* Ported from 7ab.net's thinking-cycle animation.
*
* The container width animates between words so surrounding inline content
* (punctuation, etc.) slides naturally with it.
*
* Usage: Building with AI tools is <ThinkingCycle words={['powerful', 'wild']} />.
*/
declare const ThinkingCycle: React.ForwardRefExoticComponent<Omit<ThinkingCycleProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { ThinkingCycleProps, ThinkingCycle, QuoteVariant, QuoteProps, Quote, ProseProps, Prose, PROSE_H2_SIZE, PROSE_H1_SIZE, PROSE_CODE_SIZE, PROSE_BODY_SIZE, PROSE_BLOCKQUOTE_SIZE, MarkdownProps, Markdown, MarginNoteProps, MarginNote, MIX_SUBTLE, MIX_HOVER, MIX_BADGE, BREAKPOINT_WIDE, BREAKPOINT_PROSE, BREAKPOINT_MARGIN_NOTES };
