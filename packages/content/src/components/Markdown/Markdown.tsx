import { useState, useCallback, useRef, Children, cloneElement, isValidElement } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import {
  PROSE_BODY_SIZE,
  PROSE_H1_SIZE,
  MIX_SUBTLE,
  MIX_HOVER,
} from '../../constants';

export interface MarkdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Markdown source text to render. */
  children: string;
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/** Walk a React children tree and extract plain text. */
function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

/** Convert heading text to a URL-safe slug. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ---------------------------------------------------------------------------
// Inline SVG icons (content can't depend on @4lt7ab/ui)
// ---------------------------------------------------------------------------

const iconStyle = {
  width: 14,
  height: 14,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function CopyIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...iconStyle}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...iconStyle}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function LinkIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

// Callout icons — 18px, stroke-based

const calloutIconStyle = {
  width: 18,
  height: 18,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function NoteIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...calloutIconStyle}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function TipIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...calloutIconStyle}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ImportantIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...calloutIconStyle}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M12 8v3" />
      <path d="M12 14h.01" />
    </svg>
  );
}

function WarningIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...calloutIconStyle}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function CautionIcon(): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...calloutIconStyle}>
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <path d="M15 9l-6 6" />
      <path d="M9 9l6 6" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// CodeBlock — pre wrapper with copy button
// ---------------------------------------------------------------------------

const CODE_BLOCK_STYLES_ID = 'alttab-markdown-codeblock';
const CODE_BLOCK_CSS = `
  .alttab-codeblock {
    position: relative;
  }
  .alttab-codeblock-copy {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: ${t.borderWidthDefault} solid ${t.colorBorder};
    border-radius: ${t.radiusSm};
    background: ${t.colorSurface};
    color: ${t.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${t.transitionBase}, color ${t.transitionBase}, border-color ${t.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${t.colorText};
    border-color: ${t.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${t.colorSuccess};
    border-color: ${t.colorSuccess};
  }
`;

function CodeBlock({ children }: { children?: ReactNode }): React.JSX.Element {
  useInjectStyles(CODE_BLOCK_STYLES_ID, CODE_BLOCK_CSS);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback((): void => {
    let text = '';
    const walk = (node: ReactNode): void => {
      if (typeof node === 'string') { text += node; return; }
      if (Array.isArray(node)) { node.forEach(walk); return; }
      if (node && typeof node === 'object' && 'props' in node) {
        walk((node as { props: { children?: ReactNode } }).props.children);
      }
    };
    walk(children);

    navigator.clipboard.writeText(text.replace(/\n$/, ''));
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1500);
  }, [children]);

  return (
    <div className="alttab-codeblock">
      <button
        type="button"
        className="alttab-codeblock-copy"
        onClick={handleCopy}
        aria-label="Copy code"
        {...(copied ? { 'data-copied': '' } : {})}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <pre>{children}</pre>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HeadingAnchor — heading with auto-generated id and hover link
// ---------------------------------------------------------------------------

function HeadingAnchor({ level, children }: { level: number; children?: ReactNode }): React.JSX.Element {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const text = extractText(children);
  const id = slugify(text);

  return (
    <Tag id={id}>
      {children}
      <a href={`#${id}`} className="alttab-md-anchor" aria-label={`Link to "${text}"`}>
        <LinkIcon />
      </a>
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Callout — GitHub-style admonition blocks
// ---------------------------------------------------------------------------

type CalloutType = 'NOTE' | 'TIP' | 'IMPORTANT' | 'WARNING' | 'CAUTION';

const CALLOUT_REGEX = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/;

const CALLOUT_CONFIG: Record<CalloutType, { label: string; icon: () => React.JSX.Element; attr: string }> = {
  NOTE:      { label: 'Note',      icon: NoteIcon,      attr: 'note' },
  TIP:       { label: 'Tip',       icon: TipIcon,       attr: 'tip' },
  IMPORTANT: { label: 'Important', icon: ImportantIcon,  attr: 'important' },
  WARNING:   { label: 'Warning',   icon: WarningIcon,    attr: 'warning' },
  CAUTION:   { label: 'Caution',   icon: CautionIcon,    attr: 'caution' },
};

/**
 * Detect a GitHub-style callout from a blockquote's rendered children.
 * Returns the callout type and content with the [!TYPE] prefix stripped,
 * or null if this is a regular blockquote.
 */
function detectCallout(children: ReactNode): { type: CalloutType; content: ReactNode[] } | null {
  const childArray = Children.toArray(children);

  // Find the first React element (skip whitespace text nodes)
  const firstIdx = childArray.findIndex(isValidElement);
  if (firstIdx === -1) return null;

  const firstElement = childArray[firstIdx] as React.ReactElement<{ children?: ReactNode }>;
  const innerChildren = Children.toArray(firstElement.props.children);
  const firstText = innerChildren[0];

  if (typeof firstText !== 'string') return null;

  const match = firstText.match(CALLOUT_REGEX);
  if (!match) return null;

  const type = match[1] as CalloutType;
  const remaining = firstText.slice(match[0].length);

  // Rebuild content with the [!TYPE] prefix stripped
  if (remaining || innerChildren.length > 1) {
    const newInner = remaining
      ? [remaining, ...innerChildren.slice(1)]
      : innerChildren.slice(1);
    const modifiedFirst = cloneElement(firstElement, {}, ...newInner);
    return {
      type,
      content: [...childArray.slice(0, firstIdx), modifiedFirst, ...childArray.slice(firstIdx + 1)],
    };
  }

  // [!TYPE] was the entire first paragraph — drop it
  return { type, content: childArray.slice(firstIdx + 1) };
}

function Blockquote({ children }: { children?: ReactNode }): React.JSX.Element {
  const callout = detectCallout(children);

  if (callout) {
    const config = CALLOUT_CONFIG[callout.type];
    const Icon = config.icon;
    return (
      <div className="alttab-callout" data-callout={config.attr}>
        <div className="alttab-callout-title">
          <Icon />
          <span>{config.label}</span>
        </div>
        <div className="alttab-callout-body">{callout.content}</div>
      </div>
    );
  }

  return <blockquote>{children}</blockquote>;
}

// ---------------------------------------------------------------------------
// Markdown base styles
// ---------------------------------------------------------------------------

const MARKDOWN_STYLES_ID = 'alttab-markdown-styles';
const markdownCSS = /* css */ `
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: ${PROSE_BODY_SIZE};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Paragraph spacing */
  .alttab-markdown p + p {
    margin-top: 1em;
  }

  /* ── Headings ── */
  .alttab-markdown h1,
  .alttab-markdown h2,
  .alttab-markdown h3,
  .alttab-markdown h4,
  .alttab-markdown h5,
  .alttab-markdown h6 {
    scroll-margin-top: 5rem;
  }

  .alttab-markdown h1 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: ${PROSE_H1_SIZE};
    color: var(--color-text);
    margin-bottom: 0.75rem;
  }

  .alttab-markdown h2 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: clamp(1.4rem, 3vw, 1.875rem);
    color: var(--color-text);
    margin-top: 3.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    padding-top: 1.5rem;
  }

  .alttab-markdown h2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 1px;
    background: var(--color-border);
  }

  .alttab-markdown h3 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: 1.25rem;
    color: var(--color-text);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  /* ── Heading anchors ── */
  .alttab-markdown a.alttab-md-anchor {
    display: inline-flex;
    align-items: center;
    margin-left: 0.35em;
    opacity: 0;
    transition: opacity var(--transition-base), color var(--transition-base);
    color: var(--color-text-muted);
    text-decoration: none;
    vertical-align: middle;
  }

  .alttab-markdown h1:hover .alttab-md-anchor,
  .alttab-markdown h2:hover .alttab-md-anchor,
  .alttab-markdown h3:hover .alttab-md-anchor,
  .alttab-markdown h4:hover .alttab-md-anchor,
  .alttab-markdown h5:hover .alttab-md-anchor,
  .alttab-markdown h6:hover .alttab-md-anchor,
  .alttab-markdown a.alttab-md-anchor:focus-visible {
    opacity: 1;
  }

  .alttab-markdown a.alttab-md-anchor:hover {
    color: var(--color-text-link);
  }

  /* ── Section break — three-dot ornament ── */
  .alttab-markdown hr {
    border: none;
    text-align: center;
    margin-block: 3.5rem;
  }

  .alttab-markdown hr::after {
    content: '\\00B7  \\00B7  \\00B7';
    color: var(--color-text-muted);
    font-size: 1.25rem;
    letter-spacing: 0.5em;
  }

  /* ── Links ── */
  .alttab-markdown a {
    color: var(--color-text-link);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration-color: color-mix(in srgb, var(--color-text-link) 40%, transparent);
    transition: text-decoration-color var(--transition-base), color var(--transition-base);
  }

  .alttab-markdown a:hover {
    text-decoration-color: var(--color-text-link);
  }

  .alttab-markdown a:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
    border-radius: 2px;
  }

  /* ── Inline code ── */
  .alttab-markdown code {
    font-size: 0.85em;
    font-family: var(--font-mono);
    background: var(--color-surface-raised);
    border: var(--border-width-default) solid var(--color-border);
    padding: 0.125em 0.375em;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    vertical-align: baseline;
    word-break: break-word;
  }

  /* ── Code blocks ── */
  .alttab-markdown pre {
    background: var(--color-surface-page);
    border: var(--border-width-default) solid var(--color-border);
    border-left: var(--border-width-accent) solid var(--color-action-primary);
    border-radius: var(--radius-md);
    padding: 1rem 1.25rem;
    margin-block: 1.5rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .alttab-markdown pre code {
    background: none;
    border: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.8rem;
    line-height: 1.6;
    letter-spacing: -0.01em;
    color: var(--color-text-secondary);
    word-break: normal;
  }

  /* ── Blockquotes ── */
  .alttab-markdown blockquote {
    border-left: var(--border-width-accent) solid var(--color-action-primary);
    padding-left: 1.5rem;
    margin-block: 1.5rem;
    margin-inline: 0;
    color: var(--color-text-muted);
  }

  .alttab-markdown blockquote p + p {
    margin-top: 0.75em;
  }

  /* ── Callouts ── */
  .alttab-callout {
    margin-block: 1.5rem;
    padding: 1rem 1.25rem;
    border-radius: var(--radius-md);
    border: var(--border-width-default) solid color-mix(in srgb, var(--callout-color) 25%, var(--color-border));
    border-left: var(--border-width-accent) solid var(--callout-color);
    background: var(--callout-bg);
  }

  .alttab-callout-title {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-weight: 600;
    font-size: 0.8125rem;
    font-family: var(--font-sans);
    color: var(--callout-color);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    margin-bottom: 0.5rem;
  }

  .alttab-callout-title svg {
    flex-shrink: 0;
  }

  .alttab-callout-body {
    color: var(--color-text-secondary);
  }

  .alttab-callout-body > *:first-child {
    margin-top: 0;
  }

  .alttab-callout-body > *:last-child {
    margin-bottom: 0;
  }

  .alttab-callout[data-callout="note"] {
    --callout-color: var(--color-info);
    --callout-bg: var(--color-info-bg);
  }

  .alttab-callout[data-callout="tip"] {
    --callout-color: var(--color-success);
    --callout-bg: var(--color-success-bg);
  }

  .alttab-callout[data-callout="important"] {
    --callout-color: var(--color-action-primary);
    --callout-bg: color-mix(in srgb, var(--color-action-primary) 8%, transparent);
  }

  .alttab-callout[data-callout="warning"] {
    --callout-color: var(--color-warning);
    --callout-bg: var(--color-warning-bg);
  }

  .alttab-callout[data-callout="caution"] {
    --callout-color: var(--color-error);
    --callout-bg: var(--color-error-bg);
  }

  /* Callout body inherits markdown element styles */
  .alttab-callout-body code {
    font-size: 0.85em;
    font-family: var(--font-mono);
    background: var(--color-surface-raised);
    border: var(--border-width-default) solid var(--color-border);
    padding: 0.125em 0.375em;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
  }

  .alttab-callout-body a {
    color: var(--color-text-link);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration-color: color-mix(in srgb, var(--color-text-link) 40%, transparent);
  }

  .alttab-callout-body a:hover {
    text-decoration-color: var(--color-text-link);
  }

  .alttab-callout-body strong {
    font-weight: 600;
    color: var(--color-text);
  }

  /* ── Lists ── */
  .alttab-markdown ul,
  .alttab-markdown ol {
    padding-left: 1.5rem;
    margin-block: 0.6em;
  }

  .alttab-markdown li + li {
    margin-top: 0.15em;
  }

  .alttab-markdown li::marker {
    color: var(--color-action-primary);
  }

  .alttab-markdown ul ul,
  .alttab-markdown ol ol,
  .alttab-markdown ul ol,
  .alttab-markdown ol ul {
    margin-block: 0.1em;
  }

  /* ── Task lists (GFM) ── */
  .alttab-markdown ul:has(> li > input[type="checkbox"]) {
    list-style: none;
    padding-left: 0;
  }

  .alttab-markdown ul:has(> li > input[type="checkbox"]) li {
    display: flex;
    align-items: baseline;
    gap: 0.5em;
  }

  .alttab-markdown li > input[type="checkbox"] {
    margin: 0;
    accent-color: var(--color-action-primary);
    flex-shrink: 0;
  }

  /* ── Tables ── */
  .alttab-markdown table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-block: 1.5rem;
    font-size: 0.9375rem;
    border: var(--border-width-default) solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .alttab-markdown th {
    text-align: left;
    font-weight: 600;
    padding: 0.625rem 0.875rem;
    background: var(--color-surface-raised);
    border-bottom: var(--border-width-thick) solid var(--color-border);
    color: var(--color-text);
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
  }

  .alttab-markdown td {
    padding: 0.5rem 0.875rem;
    border-bottom: var(--border-width-default) solid var(--color-border);
    color: var(--color-text-secondary);
  }

  .alttab-markdown tr:last-child td {
    border-bottom: none;
  }

  /* ── Strong ── */
  .alttab-markdown strong {
    font-weight: 600;
    color: var(--color-text);
  }

  /* ── Strikethrough (GFM) ── */
  .alttab-markdown del {
    color: var(--color-text-muted);
    text-decoration-color: var(--color-text-muted);
  }

  /* ── Copy source button ── */
  .alttab-md-copy-source {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: var(--border-width-default) solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity var(--transition-base), color var(--transition-base), border-color var(--transition-base);
    z-index: 1;
  }

  .alttab-markdown:hover .alttab-md-copy-source {
    opacity: 1;
  }

  .alttab-md-copy-source:hover {
    color: var(--color-text);
    border-color: var(--color-text-muted);
  }

  .alttab-md-copy-source[data-copied] {
    opacity: 1;
    color: var(--color-success);
    border-color: var(--color-success);
  }
`;

// ---------------------------------------------------------------------------
// MarkdownTbody — zebra-striped table body via inline styles
// ---------------------------------------------------------------------------

function MarkdownTbody({ children }: { children?: ReactNode }): React.JSX.Element {
  let rowIndex = 0;
  const styledChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const isEven = rowIndex % 2 === 1;
    rowIndex++;
    if (!isEven) return child;

    // Apply background to each <td> in the even row
    const cells = Children.map(
      (child as React.ReactElement<{ children?: ReactNode }>).props.children,
      (cell) => {
        if (!isValidElement(cell)) return cell;
        const cellProps = cell.props as { style?: React.CSSProperties };
        return cloneElement(cell as React.ReactElement<{ style?: React.CSSProperties }>, {
          style: { ...cellProps.style, background: `color-mix(in srgb, var(--color-text) ${MIX_SUBTLE}, transparent)` },
        });
      },
    );
    return cloneElement(child as React.ReactElement, {}, cells);
  });

  return <tbody>{styledChildren}</tbody>;
}

// ---------------------------------------------------------------------------
// Component overrides for react-markdown
// ---------------------------------------------------------------------------

const mdComponents = {
  pre: CodeBlock,
  blockquote: Blockquote,
  tbody: MarkdownTbody,
  h1: ({ children }: { children?: ReactNode }) => <HeadingAnchor level={1}>{children}</HeadingAnchor>,
  h2: ({ children }: { children?: ReactNode }) => <HeadingAnchor level={2}>{children}</HeadingAnchor>,
  h3: ({ children }: { children?: ReactNode }) => <HeadingAnchor level={3}>{children}</HeadingAnchor>,
  h4: ({ children }: { children?: ReactNode }) => <HeadingAnchor level={4}>{children}</HeadingAnchor>,
  h5: ({ children }: { children?: ReactNode }) => <HeadingAnchor level={5}>{children}</HeadingAnchor>,
  h6: ({ children }: { children?: ReactNode }) => <HeadingAnchor level={6}>{children}</HeadingAnchor>,
};

// ---------------------------------------------------------------------------
// Markdown
// ---------------------------------------------------------------------------

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
export function Markdown({ children, className, ...rest }: MarkdownProps): React.JSX.Element {
  useInjectStyles(MARKDOWN_STYLES_ID, markdownCSS);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopySource = useCallback((): void => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1500);
  }, [children]);

  return (
    <div
      className={className ? `alttab-markdown ${className}` : 'alttab-markdown'}
      {...rest}
    >
      <button
        type="button"
        className="alttab-md-copy-source"
        onClick={handleCopySource}
        aria-label="Copy markdown source"
        title="Copy markdown"
        {...(copied ? { 'data-copied': '' } : {})}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
