import type { ReactNode } from 'react';

export interface MarginNoteProps {
  children: ReactNode;
}

/**
 * Side annotation that appears inline on mobile and in the left margin on wide screens (>=1100px).
 * Must be used inside <Prose> for styling and positioning.
 */
export function MarginNote({ children }: MarginNoteProps): React.JSX.Element {
  return (
    <small data-margin-note="">
      {children}
    </small>
  );
}
