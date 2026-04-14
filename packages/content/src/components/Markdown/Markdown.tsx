import type { HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prose } from '../Prose';

export interface MarkdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Markdown source text to render. */
  children: string;
}

/**
 * Convenience wrapper that renders a markdown string inside a Prose container.
 * Uses react-markdown with the remark-gfm plugin for GitHub Flavored Markdown
 * (tables, strikethrough, autolinks, task lists).
 */
export function Markdown({ children, ...proseProps }: MarkdownProps): React.JSX.Element {
  return (
    <Prose {...proseProps}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </Prose>
  );
}
