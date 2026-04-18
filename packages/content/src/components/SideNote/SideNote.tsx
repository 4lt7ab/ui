import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { MarginNote } from '../MarginNote/MarginNote';

export interface SideNoteProps {
  children: ReactNode;
}

/**
 * @deprecated Use `<MarginNote side="right">` instead. `SideNote` is a
 * backward-compatibility alias for `<MarginNote side="right">` and will be
 * removed in a future major release.
 */
export const SideNote: React.ForwardRefExoticComponent<Omit<SideNoteProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, SideNoteProps>(
  function SideNote({ children }, ref): React.JSX.Element {
    return (
      <MarginNote ref={ref} side="right">
        {children}
      </MarginNote>
    );
  }
);
