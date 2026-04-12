import { HTMLAttributes, ReactNode } from "react";
type ContainerWidth = "prose" | "wide";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/** Named width preset. Default: 'prose' (680px) */
	width?: ContainerWidth;
	/** Arbitrary max-width value (e.g. '1200px', '100%'). Overrides `width` when set. */
	maxWidth?: string;
	/** Horizontal padding. Default: '1.5rem' */
	padding?: string;
	children: ReactNode;
}
declare const Container: unknown;
import { HTMLAttributes as HTMLAttributes2, ReactNode as ReactNode2 } from "react";
interface ProseProps extends HTMLAttributes2<HTMLDivElement> {
	children: ReactNode2;
}
declare function Prose({ children, style,...props }: ProseProps): React.JSX.Element;
import { ReactNode as ReactNode3 } from "react";
interface PullQuoteProps {
	children: ReactNode3;
}
/**
* Centered pull quote with serif italic text and horizontal rules.
* Must be used inside <Prose> for styling.
*/
declare function PullQuote({ children }: PullQuoteProps): React.JSX.Element;
import { ReactNode as ReactNode4 } from "react";
interface MarginNoteProps {
	children: ReactNode4;
}
/**
* Side annotation that appears inline on mobile and in the left margin on wide screens (>=1100px).
* Must be used inside <Prose> for styling and positioning.
*/
declare function MarginNote({ children }: MarginNoteProps): React.JSX.Element;
import { ReactNode as ReactNode5 } from "react";
interface SideNoteProps {
	children: ReactNode5;
}
/**
* Side annotation that appears inline on mobile and in the right margin on wide screens (>=1100px).
* Must be used inside <Prose> for styling and positioning.
*/
declare function SideNote({ children }: SideNoteProps): React.JSX.Element;
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
declare function Epigraph({ children, cite }: EpigraphProps): React.JSX.Element;
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
declare function LinkCard({ title, description, external, children,...props }: LinkCardProps): React.JSX.Element;
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
declare function ThinkingCycle({ words, holdMs, scrambleTicks, tickMs, staggerMs }: ThinkingCycleProps): React.JSX.Element;
export { ThinkingCycleProps, ThinkingCycle, SideNoteProps, SideNote, PullQuoteProps, PullQuote, ProseProps, Prose, MarginNoteProps, MarginNote, LinkCardProps, LinkCard, EpigraphProps, Epigraph, ContainerWidth, ContainerProps, Container };
