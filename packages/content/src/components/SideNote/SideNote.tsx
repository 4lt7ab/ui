import { forwardRef } from 'react';
import type { ReactNode } from 'react';

export interface SideNoteProps {
  children: ReactNode;
}

/**
 * Side annotation that appears inline on mobile and in the right margin on wide screens (>=1100px).
 * Must be used inside <Prose> for styling and positioning.
 */
export const SideNote: React.ForwardRefExoticComponent<Omit<SideNoteProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, SideNoteProps>(
  function SideNote({ children }, ref): React.JSX.Element {
    return (
      <small ref={ref} data-side-note="">
        {children}
      </small>
    );
  }
);
