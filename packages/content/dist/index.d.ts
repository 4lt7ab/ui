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
import { HTMLAttributes, ReactNode } from "react";
/** Named width preset for the Container. */
type ContainerWidth = "prose" | "wide";
/** A centered content wrapper with max-width constraint. */
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/** Named width preset.
	* - `prose` — 680px, optimized for reading
	* - `wide` — 900px, for wider layouts
	* @default 'prose'
	*/
	width?: ContainerWidth;
	/** Arbitrary max-width value (e.g. '1200px', '100%'). Overrides `width` when set. */
	maxWidth?: string;
	/** Horizontal padding CSS value.
	* @default '1.5rem'
	*/
	padding?: string;
	/** Container content. */
	children: ReactNode;
}
declare const Container: React.ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { HTMLAttributes as HTMLAttributes2, ReactNode as ReactNode2 } from "react";
interface ProseProps extends HTMLAttributes2<HTMLDivElement> {
	children: ReactNode2;
}
declare const Prose: React.ForwardRefExoticComponent<Omit<ProseProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
import { HTMLAttributes as HTMLAttributes3 } from "react";
interface MarkdownProps extends Omit<HTMLAttributes3<HTMLDivElement>, "children"> {
	/** Markdown source text to render. */
	children: string;
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
* Styled independently from Prose — uses the `.alttab-markdown` namespace.
*/
declare function Markdown({ children, className,...rest }: MarkdownProps): React.JSX.Element;
import { ReactNode as ReactNode3 } from "react";
interface PullQuoteProps {
	children: ReactNode3;
}
/**
* Centered pull quote with serif italic text and horizontal rules.
* Must be used inside <Prose> for styling.
*/
declare const PullQuote: React.ForwardRefExoticComponent<Omit<PullQuoteProps, "ref"> & React.RefAttributes<HTMLQuoteElement>>;
import { ReactNode as ReactNode4 } from "react";
interface MarginNoteProps {
	children: ReactNode4;
}
/**
* Side annotation that appears inline on mobile and in the left margin on wide screens (>=BREAKPOINT_MARGIN_NOTES).
* Must be used inside <Prose> for styling and positioning.
*/
declare const MarginNote: React.ForwardRefExoticComponent<Omit<MarginNoteProps, "ref"> & React.RefAttributes<HTMLElement>>;
import { ReactNode as ReactNode5 } from "react";
interface SideNoteProps {
	children: ReactNode5;
}
/**
* Side annotation that appears inline on mobile and in the right margin on wide screens (>=BREAKPOINT_MARGIN_NOTES).
* Must be used inside <Prose> for styling and positioning.
*/
declare const SideNote: React.ForwardRefExoticComponent<Omit<SideNoteProps, "ref"> & React.RefAttributes<HTMLElement>>;
import { ReactNode as ReactNode6 } from "react";
interface EpigraphProps {
	/** The quote text. */
	children: ReactNode6;
	/** Attribution line (author, source). */
	cite?: ReactNode6;
}
/**
* Large centered blockquote — serif italic with horizontal rules.
* Good for opening quotes, page epigraphs, or hero-level callouts.
* Works both inside and outside <Prose>.
*/
declare const Epigraph: React.ForwardRefExoticComponent<Omit<EpigraphProps, "ref"> & React.RefAttributes<HTMLQuoteElement>>;
import { AnchorHTMLAttributes, ReactNode as ReactNode7 } from "react";
interface LinkCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "title"> {
	/** Card title — rendered in serif. */
	title: ReactNode7;
	/** Optional description — rendered smaller in muted text. */
	description?: ReactNode7;
	/** Whether link opens in a new tab. */
	external?: boolean;
}
/**
* Clickable card with serif title and muted description.
* Hover lifts and accent-borders. Good for project links, post previews, etc.
*/
declare const LinkCard: React.ForwardRefExoticComponent<Omit<LinkCardProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
interface TextSectionProps {
	/** Current content (markdown string). Empty/null = empty state. */
	content?: string | null;
	/** Whether the section is in editing mode. */
	editing: boolean;
	/** Current value in the textarea during editing. */
	editValue: string;
	/** Called when user clicks content or empty state to start editing. */
	onStartEdit: () => void;
	/** Called with new textarea value on change. */
	onEditChange: (value: string) => void;
	/** Called when user saves (button or Cmd+Enter). */
	onSave: () => void;
	/** Called when user cancels (button or Escape). */
	onCancel: () => void;
	/** Accessible label for the section (e.g. "Summary", "Context"). */
	fieldLabel?: string;
	/** Number of textarea rows. @default 4 */
	rows?: number;
	/** Placeholder text for empty state. @default "Click to add content..." */
	placeholder?: string;
}
/**
* A three-state editable text section that couples Markdown rendering
* with textarea editing. Click content or empty state to start editing;
* save with a button or Cmd/Ctrl+Enter; cancel with a button or Escape.
*/
declare function TextSection({ content, editing, editValue, onStartEdit, onEditChange, onSave, onCancel, fieldLabel, rows, placeholder }: TextSectionProps): React.JSX.Element;
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
export { ThinkingCycleProps, ThinkingCycle, TextSectionProps, TextSection, SideNoteProps, SideNote, PullQuoteProps, PullQuote, ProseProps, Prose, PROSE_H2_SIZE, PROSE_H1_SIZE, PROSE_CODE_SIZE, PROSE_BODY_SIZE, PROSE_BLOCKQUOTE_SIZE, MarkdownProps, Markdown, MarginNoteProps, MarginNote, MIX_SUBTLE, MIX_HOVER, MIX_BADGE, LinkCardProps, LinkCard, EpigraphProps, Epigraph, ContainerWidth, ContainerProps, Container, BREAKPOINT_WIDE, BREAKPOINT_PROSE, BREAKPOINT_MARGIN_NOTES };
