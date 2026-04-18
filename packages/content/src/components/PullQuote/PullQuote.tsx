import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Quote } from '../Quote/Quote';

export interface PullQuoteProps {
  children: ReactNode;
}

/**
 * @deprecated Use `<Quote variant="pull">` instead. `PullQuote` is a
 * backward-compatibility alias for `<Quote variant="pull">` and will be
 * removed in a future major release.
 *
 * Centered pull quote with serif italic text and horizontal rules. Must be
 * used inside `<Prose>` for styling.
 */
export const PullQuote: React.ForwardRefExoticComponent<Omit<PullQuoteProps, 'ref'> & React.RefAttributes<HTMLQuoteElement>> = forwardRef<HTMLQuoteElement, PullQuoteProps>(
  function PullQuote({ children }, ref): React.JSX.Element {
    return (
      <Quote ref={ref} variant="pull">
        {children}
      </Quote>
    );
  }
);
