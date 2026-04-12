import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { useInjectStyles } from '@4lt7ab/ui';

export interface EpigraphProps {
  /** The quote text. */
  children: ReactNode;
  /** Attribution line (author, source). */
  cite?: ReactNode;
}

const STYLES_ID = 'alttab-epigraph';

const epigraphCSS = /* css */ `
  .alttab-epigraph {
    border: none;
    border-block: 1px solid var(--color-border);
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

/**
 * Large centered blockquote — serif italic with horizontal rules.
 * Good for opening quotes, page epigraphs, or hero-level callouts.
 * Works both inside and outside <Prose>.
 */
export const Epigraph: React.ForwardRefExoticComponent<Omit<EpigraphProps, 'ref'> & React.RefAttributes<HTMLQuoteElement>> = forwardRef<HTMLQuoteElement, EpigraphProps>(
  function Epigraph({ children, cite }, ref): React.JSX.Element {
    useInjectStyles(STYLES_ID, epigraphCSS);

    return (
      <blockquote ref={ref} className="alttab-epigraph">
        <p>{children}</p>
        {cite && <footer>{cite}</footer>}
      </blockquote>
    );
  }
);
