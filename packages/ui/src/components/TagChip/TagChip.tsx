import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { IconButton } from '../IconButton';

/** A small pill-shaped tag with an optional remove button. */
export interface TagChipProps {
  /** Tag display text. */
  name: string;
  /** Optional prefix rendered before the label in muted color (e.g. "lang" in "lang: typescript"). */
  prefix?: string;
  /** When provided, renders a close button that calls this handler on click. */
  onRemove?: () => void;
}

export const TagChip: React.ForwardRefExoticComponent<Omit<TagChipProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, TagChipProps>(
  function TagChip({
    name,
    prefix,
    onRemove,
  }, ref): React.JSX.Element {
    return (
      <span
        ref={ref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: t.spaceXs,
          fontSize: t.fontSizeXs,
          color: t.colorActionPrimary,
          background: t.colorSurfaceRaised,
          borderRadius: t.radiusFull,
          padding: `${t.spaceXs} ${t.spaceSm}`,
          fontFamily: t.fontSans,
        }}
      >
        {prefix && <span style={{ color: t.colorTextMuted }}>{prefix}:</span>}
        {name}
        {onRemove && (
          <span style={{ display: 'inline-flex', width: 18, height: 18, color: t.colorActionPrimary }}>
            <IconButton
              icon="close"
              onClick={onRemove}
              aria-label={`Remove ${name}`}
              size="sm"
            />
          </span>
        )}
      </span>
    );
  }
);
