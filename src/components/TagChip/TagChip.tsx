import { semantic as t } from '../../tokens/semantic';
import { IconButton } from '../IconButton';
import type { CSSProperties } from 'react';

export interface TagChipProps {
  name: string;
  onRemove?: () => void;
  style?: CSSProperties;
}

export function TagChip({
  name,
  onRemove,
  style,
}: TagChipProps): React.JSX.Element {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: '0.75rem',
        color: t.colorActionPrimary,
        background: t.colorSurfaceRaised,
        borderRadius: t.radiusFull,
        padding: '2px 8px',
        fontFamily: t.fontSans,
        ...style,
      }}
    >
      {name}
      {onRemove && (
        <IconButton
          icon="close"
          size={12}
          onClick={onRemove}
          style={{ width: 18, height: 18, color: t.colorActionPrimary }}
        />
      )}
    </span>
  );
}
