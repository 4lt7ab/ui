import type { ReactNode } from 'react';

export interface SideNoteProps {
  children: ReactNode;
}

/**
 * Side annotation that appears inline on mobile and in the right margin on wide screens (>=1100px).
 * Must be used inside <Prose> for styling and positioning.
 */
export function SideNote({ children }: SideNoteProps): React.JSX.Element {
  return (
    <small data-side-note="">
      {children}
    </small>
  );
}
