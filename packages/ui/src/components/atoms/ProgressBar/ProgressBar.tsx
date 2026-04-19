import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { semanticColorMap, progressBarHeightMap } from '../../../types';
import type { SemanticColor, ProgressBarHeight } from '../../../types';

/** A single segment in a multi-part progress bar. */
export interface ProgressBarSegment {
  /** Numeric value for this segment. Width is proportional to value / total. */
  value: number;
  /** Segment fill color from the semantic color palette. */
  color: SemanticColor;
  /** Optional label shown in the segment's title tooltip. */
  label?: string;
}

/** A horizontal segmented progress bar. Each segment's width is proportional to its value relative to the total. */
export interface ProgressBarProps {
  /** One or more segments to display. */
  segments: ProgressBarSegment[];
  /** Bar height preset.
   * @default 'md'
   */
  height?: ProgressBarHeight;
  /** Accessible label for screen readers. */
  'aria-label'?: string;
}

export const ProgressBar: React.ForwardRefExoticComponent<Omit<ProgressBarProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar({
    segments,
    height = 'md',
    'aria-label': ariaLabel,
  }, ref): React.JSX.Element {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    const px = progressBarHeightMap[height];

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={total}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        style={{
          width: '100%',
          height: px,
          borderRadius: px / 2,
          overflow: 'hidden',
          display: 'flex',
          background: t.colorSurfaceRaised,
        }}
      >
        {segments.map((segment, i) => {
          const pct = total > 0 ? (segment.value / total) * 100 : 0;
          return (
            <div
              key={i}
              title={segment.label ? `${segment.label}: ${segment.value}` : String(segment.value)}
              style={{
                width: `${pct}%`,
                height: '100%',
                background: semanticColorMap[segment.color],
              }}
            />
          );
        })}
      </div>
    );
  }
);
