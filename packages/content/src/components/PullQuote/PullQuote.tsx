import { forwardRef } from 'react';
import type { ReactNode } from 'react';

export interface PullQuoteProps {
  children: ReactNode;
}

/**
 * Centered pull quote with serif italic text and horizontal rules.
 * Must be used inside <Prose> for styling.
 */
export const PullQuote: React.ForwardRefExoticComponent<Omit<PullQuoteProps, 'ref'> & React.RefAttributes<HTMLQuoteElement>> = forwardRef<HTMLQuoteElement, PullQuoteProps>(
  function PullQuote({ children }, ref): React.JSX.Element {
    return (
      <blockquote ref={ref} data-pull-quote="">
        <p>{children}</p>
      </blockquote>
    );
  }
);
