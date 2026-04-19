import { useState } from 'react';
import {
  Button,
  ProgressBar,
  Stack,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// ProgressBar showcase — live example for 06-data.md
// ---------------------------------------------------------------------------
//
// The component itself paints a static bar, but its behavior surfaces when
// the segment values change — widths are proportional to `value / total`,
// so adjusting the counters shifts the distribution in real time. Two
// demonstrations on one surface:
//
//   - **Multi-segment bar.** Three buckets (completed / in-progress / failed)
//     with buttons that increment each counter. The segment shares grow and
//     shrink as you click.
//   - **Single-segment bar.** A classic "N%" progress bar driven by a slider.
//
// Heights cycle through the three presets (`sm`, `md`, `lg`) so the sizing
// story shows at a glance.

type Height = 'sm' | 'md' | 'lg';
const HEIGHTS: readonly Height[] = ['sm', 'md', 'lg'];

export function ProgressBarShowcase(): React.JSX.Element {
  const [completed, setCompleted] = useState(32);
  const [inProgress, setInProgress] = useState(12);
  const [failed, setFailed] = useState(6);
  const [percent, setPercent] = useState(64);
  const [height, setHeight] = useState<Height>('md');

  const remaining = Math.max(0, 100 - percent);

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <h4 style={headingStyle}>Multi-segment</h4>
        <p style={hintStyle}>
          Widths are proportional to each segment's value. Adjust the counters
          to see the distribution rebalance.
        </p>
        <ProgressBar
          height={height}
          aria-label="Task progress"
          segments={[
            { value: completed, color: 'success', label: 'Completed' },
            { value: inProgress, color: 'warning', label: 'In progress' },
            { value: failed, color: 'error', label: 'Failed' },
          ]}
        />
        <Stack direction="horizontal" gap="xs" wrap>
          <Counter label="Completed" value={completed} onChange={setCompleted} />
          <Counter label="In progress" value={inProgress} onChange={setInProgress} />
          <Counter label="Failed" value={failed} onChange={setFailed} />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h4 style={headingStyle}>Single-segment (classic "N%")</h4>
        <p style={hintStyle}>
          A single segment with a muted "remaining" segment makes the filled
          bar read as a percentage without changing the primitive.
        </p>
        <ProgressBar
          height={height}
          aria-label={`${percent} percent complete`}
          segments={[
            { value: percent, color: 'primary', label: `${percent}%` },
            { value: remaining, color: 'muted', label: 'Remaining' },
          ]}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          aria-label="Progress percentage"
          style={{ width: '16rem' }}
        />
        <span style={resultStyle}>
          <code>{percent}% complete</code>
        </span>
      </Stack>

      <Stack direction="horizontal" gap="xs" align="center">
        <span style={labelStyle}>Height</span>
        {HEIGHTS.map((h) => (
          <button
            key={h}
            type="button"
            onClick={() => setHeight(h)}
            aria-pressed={height === h}
            style={{
              padding: `${t.spaceXs} ${t.spaceSm}`,
              borderRadius: t.radiusSm,
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              background: height === h ? t.colorActionPrimary : t.colorSurfaceRaised,
              color: height === h ? t.colorTextInverse : t.colorTextSecondary,
              fontSize: t.fontSizeXs,
              fontFamily: t.fontSans,
              cursor: 'pointer',
            }}
          >
            {h}
          </button>
        ))}
      </Stack>
    </Stack>
  );
}

function Counter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (next: number) => void;
}): React.JSX.Element {
  return (
    <Stack direction="horizontal" gap="xs" align="center">
      <span style={labelStyle}>{label}</span>
      <Button size="sm" variant="ghost" onClick={() => onChange(Math.max(0, value - 1))}>
        −
      </Button>
      <span style={{ ...resultStyle, minWidth: '2ch', textAlign: 'center' }}>{value}</span>
      <Button size="sm" variant="ghost" onClick={() => onChange(value + 1)}>
        +
      </Button>
    </Stack>
  );
}

const headingStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeSm,
  fontWeight: t.fontWeightSemibold,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};

const resultStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  fontFamily: t.fontMono,
};

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
  fontWeight: t.fontWeightSemibold,
};
