import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties } from 'react';

/** A full-screen semi-transparent backdrop. Used behind modals and drawers. */
export interface OverlayProps {
  /** Called when the overlay is clicked (typically to close the parent modal). */
  onClick?: () => void;
  /** CSS z-index for stacking control.
   * @default 'var(--z-index-sticky)'
   */
  zIndex?: number | string;
  /** Additional inline styles. */
  style?: CSSProperties;
}

export const Overlay: React.ForwardRefExoticComponent<Omit<OverlayProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, OverlayProps>(
  function Overlay({
    onClick,
    zIndex = t.zIndexSticky,
    style,
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        role="presentation"
        onClick={onClick}
        style={{
          position: 'fixed',
          inset: 0,
          background: t.colorSurfaceOverlay,
          zIndex,
          ...style,
        }}
      />
    );
  }
);
