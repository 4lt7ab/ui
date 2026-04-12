import { HTMLAttributes, ReactNode } from "react";
type ContainerWidth = "prose" | "wide";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/** Max content width. Default: 'prose' (680px) */
	width?: ContainerWidth;
	/** Horizontal padding. Default: '1.5rem' */
	padding?: string;
	children: ReactNode;
}
declare function Container({ width, padding, children, style,...props }: ContainerProps): React.JSX.Element;
import { ReactNode as ReactNode2 } from "react";
interface PageShellProps {
	/** Navigation element, rendered above main content. */
	nav?: ReactNode2;
	/** Footer element, rendered below main content. */
	footer?: ReactNode2;
	children: ReactNode2;
}
/**
* Full-page skeleton — nav, main content area, footer.
* Provides the vertical structure and base styling (background, font, color).
* Content width is controlled by Container inside the children.
*/
declare function PageShell({ nav, footer, children }: PageShellProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes2, ReactNode as ReactNode3 } from "react";
interface NavLink {
	label: string;
	href: string;
}
interface SiteNavProps extends HTMLAttributes2<HTMLElement> {
	/** Brand text or logo, displayed on the left. */
	brand: ReactNode3;
	/** Brand link destination. Default: '/' */
	brandHref?: string;
	/** Navigation links displayed on the right. */
	links?: NavLink[];
	/** Optional children rendered after the links (e.g., theme toggle). */
	children?: ReactNode3;
}
declare function SiteNav({ brand, brandHref, links, children, style,...props }: SiteNavProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes3, ReactNode as ReactNode4 } from "react";
interface FooterLink {
	label: string;
	href: string;
	external?: boolean;
}
interface FooterProps extends HTMLAttributes3<HTMLElement> {
	/** Copyright line. e.g., "2026 Your Name" */
	copyright?: string;
	/** Footer links (GitHub, LinkedIn, etc.) */
	links?: FooterLink[];
	/** Custom content instead of/alongside default rendering. */
	children?: ReactNode4;
}
declare function Footer({ copyright, links, children, style,...props }: FooterProps): React.JSX.Element;
import { HTMLAttributes as HTMLAttributes4, ReactNode as ReactNode5 } from "react";
interface ProseProps extends HTMLAttributes4<HTMLDivElement> {
	children: ReactNode5;
}
declare function Prose({ children, style,...props }: ProseProps): React.JSX.Element;
import { ReactNode as ReactNode6 } from "react";
interface PullQuoteProps {
	children: ReactNode6;
}
/**
* Centered pull quote with serif italic text and horizontal rules.
* Must be used inside <Prose> for styling.
*/
declare function PullQuote({ children }: PullQuoteProps): React.JSX.Element;
import { ReactNode as ReactNode7 } from "react";
interface MarginNoteProps {
	children: ReactNode7;
}
/**
* Side annotation that appears inline on mobile and in the left margin on wide screens (>=1100px).
* Must be used inside <Prose> for styling and positioning.
*/
declare function MarginNote({ children }: MarginNoteProps): React.JSX.Element;
import { ReactNode as ReactNode8 } from "react";
interface SideNoteProps {
	children: ReactNode8;
}
/**
* Side annotation that appears inline on mobile and in the right margin on wide screens (>=1100px).
* Must be used inside <Prose> for styling and positioning.
*/
declare function SideNote({ children }: SideNoteProps): React.JSX.Element;
import { ReactNode as ReactNode9, HTMLAttributes as HTMLAttributes5 } from "react";
interface MarginSpotlightProps extends HTMLAttributes5<HTMLElement> {
	/** Small uppercase label above the content (e.g. "Currently"). */
	label?: string;
	/** Scroll distance (px) before the fade begins. Default: 100 */
	fadeStart?: number;
	/** Scroll distance (px) at which the element is fully invisible. Default: 400 */
	fadeEnd?: number;
	children: ReactNode9;
}
declare function MarginSpotlight({ label, fadeStart, fadeEnd, children, style,...props }: MarginSpotlightProps): React.JSX.Element;
import { ReactNode as ReactNode10 } from "react";
interface EpigraphProps {
	/** The quote text. */
	children: ReactNode10;
	/** Attribution line (author, source). */
	cite?: ReactNode10;
}
/**
* Large centered blockquote — serif italic with horizontal rules.
* Good for opening quotes, page epigraphs, or hero-level callouts.
* Works both inside and outside <Prose>.
*/
declare function Epigraph({ children, cite }: EpigraphProps): React.JSX.Element;
import { AnchorHTMLAttributes, ReactNode as ReactNode11 } from "react";
interface LinkCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "title"> {
	/** Card title — rendered in serif. */
	title: ReactNode11;
	/** Optional description — rendered smaller in muted text. */
	description?: ReactNode11;
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
export { ThinkingCycleProps, ThinkingCycle, SiteNavProps, SiteNav, SideNoteProps, SideNote, PullQuoteProps, PullQuote, ProseProps, Prose, PageShellProps, PageShell, NavLink, MarginSpotlightProps, MarginSpotlight, MarginNoteProps, MarginNote, LinkCardProps, LinkCard, FooterProps, FooterLink, Footer, EpigraphProps, Epigraph, ContainerWidth, ContainerProps, Container };
