import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties } from 'react';

export interface ProgressBarSegment {
  value: number;
  color: string;
  label?: string;
}

export interface ProgressBarProps {
  segments: ProgressBarSegment[];
  height?: number;
  style?: CSSProperties;
}

export function ProgressBar({
  segments,
  height = 6,
  style,
}: ProgressBarProps): React.JSX.Element {
  const total = segments.reduce((sum, s) => sum + s.value, 0);

  return (
    <div
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
