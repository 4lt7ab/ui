import { useState, useCallback, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Prose } from '../Prose';

export interface MarkdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Markdown source text to render. */
  children: string;
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
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.radiusSm};
    background: ${t.colorSurface};
    color: ${t.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
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
    // Extract text from the <code> element inside <pre>
    const el = document.querySelector('.alttab-codeblock pre code');
    // Fallback: walk the children to find text
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
// Markdown
// ---------------------------------------------------------------------------

const mdComponents = {
  pre: CodeBlock,
};

/**
 * Convenience wrapper that renders a markdown string inside a Prose container.
 * Uses react-markdown with the remark-gfm plugin for GitHub Flavored Markdown
 * (tables, strikethrough, autolinks, task lists).
 *
 * Code blocks include a copy-to-clipboard button on hover.
 */
export function Markdown({ children, ...proseProps }: MarkdownProps): React.JSX.Element {
  return (
    <Prose {...proseProps}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
        {children}
      </ReactMarkdown>
    </Prose>
  );
}
