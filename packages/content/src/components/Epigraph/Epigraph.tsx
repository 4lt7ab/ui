import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Quote } from '../Quote/Quote';

export interface EpigraphProps {
  /** The quote text. */
  children: ReactNode;
  /** Attribution line (author, source). */
  cite?: ReactNode;
}

/**
 * @deprecated Use `<Quote variant="epigraph">` instead. `Epigraph` is a
 * backward-compatibility alias for `<Quote variant="epigraph">` and will be
 * removed in a future major release.
 *
 * Large centered blockquote — serif italic with horizontal rules. Good for
 * opening quotes, page epigraphs, or hero-level callouts. Works both inside
 * and outside `<Prose>`.
 */
export const Epigraph: React.ForwardRefExoticComponent<Omit<EpigraphProps, 'ref'> & React.RefAttributes<HTMLQuoteElement>> = forwardRef<HTMLQuoteElement, EpigraphProps>(
  function Epigraph({ children, cite }, ref): React.JSX.Element {
    return (
      <Quote ref={ref} variant="epigraph" cite={cite}>
        {children}
      </Quote>
    );
  }
);
