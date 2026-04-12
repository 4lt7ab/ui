import { forwardRef } from 'react';
import type { ReactNode } from 'react';

export interface MarginNoteProps {
  children: ReactNode;
}

/**
 * Side annotation that appears inline on mobile and in the left margin on wide screens (>=1100px).
 * Must be used inside <Prose> for styling and positioning.
 */
export const MarginNote: React.ForwardRefExoticComponent<Omit<MarginNoteProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, MarginNoteProps>(
  function MarginNote({ children }, ref): React.JSX.Element {
    return (
      <small ref={ref} data-margin-note="">
        {children}
      </small>
    );
  }
);
