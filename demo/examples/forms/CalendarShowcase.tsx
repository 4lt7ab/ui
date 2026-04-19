import { useState } from 'react';
import { Calendar, Stack, semantic as t } from '@4lt7ab/ui';
import type { CalendarRange } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Calendar showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// Exercises the full compound surface:
//
//   - `Calendar.Root` — state + context provider (controlled/uncontrolled)
//   - `Calendar.Header` — visible month/year label
//   - `Calendar.Nav` — month navigation (prev/next)
//   - `Calendar.Grid` — WAI-ARIA APG grid with full keyboard nav
//   - `Calendar.Cell` — default cell renderer (consumers override via render
//     prop)
//
// The two modes demonstrate the `mode` prop driving the selection shape —
// single-date vs. `{ from, to }` range — and `minDate`/`maxDate` showing how
// days outside the allowed window get disabled state in both modes.

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function CalendarShowcase(): React.JSX.Element {
  const [single, setSingle] = useState<Date | undefined>(undefined);
  const [range, setRange] = useState<CalendarRange | undefined>({
    from: new Date(2026, 3, 10),
    to: new Date(2026, 3, 22),
  });

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <h4 style={headingStyle}>Single-date mode</h4>
        <p style={hintStyle}>
          Tab into the grid and use arrow keys, Home/End (row edges), PageUp/PageDown (month, +Shift = year), and Enter to select.
        </p>
        <div style={panelStyle}>
          <Calendar.Root
            mode="single"
            selected={single}
            onSelect={(v) => setSingle(v as Date | undefined)}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2030, 11, 31)}
          >
            <div style={headerRowStyle}>
              <Calendar.Nav direction="prev" />
              <Calendar.Header />
              <Calendar.Nav direction="next" />
            </div>
            <Calendar.Grid />
          </Calendar.Root>
        </div>
        <span style={resultStyle}>
          Selected: <code>{single ? formatDate(single) : '—'}</code>
        </span>
      </Stack>

      <Stack gap="sm">
        <h4 style={headingStyle}>Range mode</h4>
        <p style={hintStyle}>
          The highlighted span is the committed <code>{'{ from, to }'}</code> on <code>Calendar.Root</code>. Click two dates to replace the range.
        </p>
        <div style={panelStyle}>
          <Calendar.Root
            mode="range"
            selected={range}
            onSelect={(v) => setRange(v as CalendarRange | undefined)}
            defaultViewDate={new Date(2026, 3, 1)}
          >
            <div style={headerRowStyle}>
              <Calendar.Nav direction="prev" />
              <Calendar.Header />
              <Calendar.Nav direction="next" />
            </div>
            <Calendar.Grid aria-label="Range calendar" />
          </Calendar.Root>
        </div>
        <span style={resultStyle}>
          Range:{' '}
          <code>
            {range ? `${formatDate(range.from)} → ${formatDate(range.to)}` : '—'}
          </code>
        </span>
      </Stack>
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

const panelStyle: React.CSSProperties = {
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  padding: t.spaceMd,
  maxWidth: '22rem',
};

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${t.spaceXs} 0`,
  marginBottom: t.spaceSm,
};

const resultStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
