import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties } from 'react';

/** A single segment in a multi-part progress bar. */
export interface ProgressBarSegment {
  /** Numeric value for this segment. Width is proportional to value / total. */
  value: number;
  /** Segment fill color (CSS color string or semantic token). */
  color: string;
  /** Optional label shown in the segment's title tooltip. */
  label?: string;
}

/** A horizontal segmented progress bar. Each segment's width is proportional to its value relative to the total. */
export interface ProgressBarProps {
  /** One or more segments to display. */
  segments: ProgressBarSegment[];
  /** Bar height in pixels.
   * @default 6
   */
  height?: number;
  /** Accessible label for screen readers. */
  'aria-label'?: string;
  /** Additional inline styles for the track container. */
  style?: CSSProperties;
}

export const ProgressBar: React.ForwardRefExoticComponent<Omit<ProgressBarProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar({
    segments,
    height = 6,
    'aria-label': ariaLabel,
    style,
  }, ref): React.JSX.Element {
    const total = segments.reduce((sum, s) => sum + s.value, 0);

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
        height,
        borderRadius: height / 2,
        overflow: 'hidden',
        display: 'flex',
        background: t.colorSurfaceRaised,
        ...style,
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
              background: segment.color,
            }}
          />
        );
      })}
    </div>
    );
  }
);
