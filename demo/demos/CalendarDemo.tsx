import { useState } from 'react';
import { Calendar, semantic as t } from '@4lt7ab/ui';
import type { CalendarRange, CalendarSelection } from '@4lt7ab/ui';
import { Stack } from '@4lt7ab/ui';

/**
 * Calendar compound primitive demo.
 *
 * Exercises the full compound API:
 *
 * - `Calendar.Root` — state + context provider
 * - `Calendar.Header` — visible month/year label
 * - `Calendar.Nav` — month navigation
 * - `Calendar.Grid` — WAI-ARIA APG grid with full keyboard nav
 * - `Calendar.Cell` — default cell renderer for the grid
 */
export function CalendarDemo(): React.JSX.Element {
  const [single, setSingle] = useState<Date | undefined>(undefined);
  const [range, setRange] = useState<CalendarRange | undefined>({
    from: new Date(2026, 3, 10),
    to: new Date(2026, 3, 22),
  });

  return (
    <Stack direction="vertical" gap="lg">
      <section>
        <h3 style={headingStyle}>Single-date mode</h3>
        <p style={hintStyle}>
          Tab into the grid and use arrow keys, Home/End (row edges),
          PageUp/PageDown (month, +Shift = year), and Enter to select.
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
          <p style={resultStyle}>
            Selected: <code>{single ? formatDate(single) : '—'}</code>
          </p>
        </div>
      </section>

      <section>
        <h3 style={headingStyle}>Range mode</h3>
        <p style={hintStyle}>
          The highlighted range is the committed {'{from, to}'} on
          Calendar.Root. Mid-selection hover-preview lands in the
          DateRangePicker rebuild slice.
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
          <p style={resultStyle}>
            Range: <code>{range ? `${formatDate(range.from)} → ${formatDate(range.to)}` : '—'}</code>
          </p>
        </div>
      </section>

      <section>
        <h3 style={headingStyle}>Custom cell render-prop</h3>
        <p style={hintStyle}>
          <code>Calendar.Grid</code> accepts a children render function that
          receives <code>{'{ date, isToday, isSelected, isInMonth, isDisabled, ... }'}</code>.
        </p>
        <div style={panelStyle}>
          <Calendar.Root
            mode="single"
            defaultFocusedDate={new Date(2026, 3, 15)}
            defaultViewDate={new Date(2026, 3, 1)}
          >
            <div style={headerRowStyle}>
              <Calendar.Nav direction="prev" />
              <Calendar.Header />
              <Calendar.Nav direction="next" />
            </div>
            <Calendar.Grid>
              {({ date, isToday, isInMonth }) => (
                <Calendar.Cell
                  date={date}
                  style={
                    isToday
                      ? { fontWeight: 700 }
                      : isInMonth
                        ? undefined
                        : { opacity: 0.3 }
                  }
                >
                  {date.getDate()}
                </Calendar.Cell>
              )}
            </Calendar.Grid>
          </Calendar.Root>
        </div>
      </section>
    </Stack>
  );
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const headingStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: t.spaceSm,
  fontSize: t.fontSizeSm,
  fontWeight: t.fontWeightSemibold,
  color: t.colorTextMuted,
};

const hintStyle: React.CSSProperties = {
  margin: `0 0 ${t.spaceSm} 0`,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};

const panelStyle: React.CSSProperties = {
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  padding: t.spaceMd,
  maxWidth: 320,
};

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${t.spaceXs} 0`,
  marginBottom: t.spaceSm,
};

const resultStyle: React.CSSProperties = {
  margin: `${t.spaceSm} 0 0 0`,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
