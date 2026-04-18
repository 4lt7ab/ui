import { forwardRef } from 'react';
import type { ReactNode, Ref } from 'react';
import { useInjectStyles } from '@4lt7ab/core';

export type QuoteVariant = 'pull' | 'epigraph';

export interface QuoteProps {
  /** The quote text. Rendered in serif italic. */
  children: ReactNode;
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
  cite?: ReactNode;
}

const STYLES_ID = 'alttab-epigraph';

const epigraphCSS = /* css */ `
  .alttab-epigraph {
    border: none;
    border-block: var(--border-width-default) solid var(--color-border);
    padding-block: 3.5rem;
    margin-bottom: 2.25rem;
    margin-inline: 0;
    text-align: center;
  }

  .alttab-epigraph p {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    line-height: 1.4;
    font-style: italic;
    color: var(--color-text-muted);
    letter-spacing: -0.01em;
    margin: 0;
  }

  .alttab-epigraph footer,
  .alttab-epigraph cite {
    display: block;
    margin-top: 0.5em;
    font-size: 0.875rem;
    font-style: normal;
    color: var(--color-text-muted);
  }
`;

function PullQuoteRender({ children, cite, innerRef }: { children: ReactNode; cite?: ReactNode; innerRef: Ref<HTMLQuoteElement> }): React.JSX.Element {
  return (
    <blockquote ref={innerRef} data-pull-quote="">
      <p>{children}</p>
      {cite && <footer>{cite}</footer>}
    </blockquote>
  );
}

function EpigraphRender({ children, cite, innerRef }: { children: ReactNode; cite?: ReactNode; innerRef: Ref<HTMLQuoteElement> }): React.JSX.Element {
  useInjectStyles(STYLES_ID, epigraphCSS);
  return (
    <blockquote ref={innerRef} className="alttab-epigraph">
      <p>{children}</p>
      {cite && <footer>{cite}</footer>}
    </blockquote>
  );
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
export const Quote: React.ForwardRefExoticComponent<Omit<QuoteProps, 'ref'> & React.RefAttributes<HTMLQuoteElement>> = forwardRef<HTMLQuoteElement, QuoteProps>(
  function Quote({ children, variant = 'pull', cite }, ref): React.JSX.Element {
    if (variant === 'epigraph') {
      return <EpigraphRender innerRef={ref} cite={cite}>{children}</EpigraphRender>;
    }
    return <PullQuoteRender innerRef={ref} cite={cite}>{children}</PullQuoteRender>;
  }
);
