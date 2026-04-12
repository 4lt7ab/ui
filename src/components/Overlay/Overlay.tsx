import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties } from 'react';

export interface OverlayProps {
  onClick?: () => void;
  zIndex?: number;
  style?: CSSProperties;
}

export const Overlay: React.ForwardRefExoticComponent<Omit<OverlayProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, OverlayProps>(
  function Overlay({
    onClick,
    zIndex = 100,
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
