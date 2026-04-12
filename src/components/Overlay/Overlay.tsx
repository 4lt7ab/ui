import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties } from 'react';

export interface OverlayProps {
  onClick?: () => void;
  zIndex?: number;
  style?: CSSProperties;
}

export function Overlay({
  onClick,
  zIndex = 100,
  style,
}: OverlayProps): React.JSX.Element {
  return (
    <div
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
