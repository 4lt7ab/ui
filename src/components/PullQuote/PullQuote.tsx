import type { ReactNode } from 'react';

export interface PullQuoteProps {
  children: ReactNode;
}

/**
 * Centered pull quote with serif italic text and horizontal rules.
 * Must be used inside <Prose> for styling.
 */
export function PullQuote({ children }: PullQuoteProps): React.JSX.Element {
  return (
    <blockquote data-pull-quote="">
      <p>{children}</p>
    </blockquote>
  );
}
