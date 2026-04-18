import { forwardRef } from 'react';
import type { ReactNode } from 'react';

export interface MarginNoteProps {
  children: ReactNode;
  /**
   * Which margin the note floats into on wide screens (>=BREAKPOINT_MARGIN_NOTES).
   * On narrow screens the note is always inline and the `side` only affects
   * which edge carries the border accent.
   * @default 'left'
   */
  side?: 'left' | 'right';
}

/**
 * Annotation that appears inline on mobile and floats into the page margin on
 * wide screens (>=BREAKPOINT_MARGIN_NOTES). `side` picks which margin — left
 * (default) or right. Must be used inside `<Prose>` for styling and positioning.
 */
export const MarginNote: React.ForwardRefExoticComponent<Omit<MarginNoteProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, MarginNoteProps>(
  function MarginNote({ children, side = 'left' }, ref): React.JSX.Element {
    return (
      <small ref={ref} data-margin-note="" data-side={side}>
        {children}
      </small>
    );
  }
);
