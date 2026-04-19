import { useState } from 'react';
import { Button, DateRangePicker, Stack, semantic as t } from '@4lt7ab/ui';
import type { DateRange } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// DateRangePicker showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// Covers the three surfaces a consumer actually reaches for:
//
//   1. Free-form range selection with live summary.
//   2. Preset chips that write back into the same controlled `value` —
//      demonstrates that the presets and the picker share one piece of state.
//   3. `minDate` / `maxDate` constraints — days outside the allowed window
//      are disabled inside the popover.

type Preset = { label: string; build: () => DateRange };

const todayAt = (offset: number): Date => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  d.setHours(0, 0, 0, 0);
  return d;
};

const PRESETS: readonly Preset[] = [
  { label: 'Next 7 days', build: () => ({ from: todayAt(0), to: todayAt(6) }) },
  { label: 'Next 30 days', build: () => ({ from: todayAt(0), to: todayAt(29) }) },
  {
    label: 'This month',
    build: () => {
      const now = new Date();
      return {
        from: new Date(now.getFullYear(), now.getMonth(), 1),
        to: new Date(now.getFullYear(), now.getMonth() + 1, 0),
      };
    },
  },
];

function formatRange(r: DateRange | undefined): string {
  if (!r) return 'None selected';
  const fmt = (d: Date): string => d.toLocaleDateString();
  return `${fmt(r.from)} → ${fmt(r.to)}`;
}

export function DateRangePickerShowcase(): React.JSX.Element {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());

  return (
    <div style={{ maxWidth: '28rem' }}>
    <Stack gap="lg">
      <Stack gap="sm">
        <h4 style={headingStyle}>Range + presets</h4>
        <p style={hintStyle}>
          The preset chips and the picker write back into the same <code>value</code>. Two clicks in the popover replace the selection; click again to start over.
        </p>
        <DateRangePicker
          value={range}
          onChange={setRange}
          minDate={minDate}
          maxDate={maxDate}
          placeholder="Pick a date range"
        />
        <Stack direction="horizontal" gap="sm" wrap>
          {PRESETS.map((preset) => (
            <Button
              key={preset.label}
              variant="secondary"
              size="sm"
              onClick={() => setRange(preset.build())}
            >
              {preset.label}
            </Button>
          ))}
          {range ? (
            <Button variant="ghost" size="sm" onClick={() => setRange(undefined)}>
              Clear
            </Button>
          ) : null}
        </Stack>
        <span style={resultStyle}>{formatRange(range)}</span>
      </Stack>
    </Stack>
    </div>
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
};
