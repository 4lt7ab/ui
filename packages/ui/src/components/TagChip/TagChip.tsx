import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import { IconButton } from '../IconButton';
import type { CSSProperties } from 'react';

/** A small pill-shaped tag with an optional remove button. */
export interface TagChipProps {
  /** Tag display text. */
  name: string;
  /** When provided, renders a close button that calls this handler on click. */
  onRemove?: () => void;
  /** Additional inline styles. */
  style?: CSSProperties;
}

export const TagChip: React.ForwardRefExoticComponent<Omit<TagChipProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, TagChipProps>(
  function TagChip({
    name,
    onRemove,
    style,
  }, ref): React.JSX.Element {
    return (
      <span
        ref={ref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontSize: t.fontSizeXs,
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
            aria-label={`Remove ${name}`}
            style={{ width: 18, height: 18, color: t.colorActionPrimary }}
          />
        )}
      </span>
    );
  }
);
