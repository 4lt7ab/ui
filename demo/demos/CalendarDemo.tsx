import { useState } from 'react';
import { Calendar, useCalendarContext, semantic as t } from '@4lt7ab/ui';
import type { CalendarRange, CalendarSelection } from '@4lt7ab/ui';
import { Stack } from '@4lt7ab/ui';

/**
 * Calendar compound primitive demo.
 *
 * Shows the landed slices of the compound Calendar API:
 *
 * - `Calendar.Root` — state + context provider
 * - `Calendar.Header` — visible month/year label
 * - `Calendar.Nav` — month navigation (prev/next)
 *
 * `Calendar.Grid` / `Calendar.Cell` land in the next slice.
 */
export function CalendarDemo(): React.JSX.Element {
  const [single, setSingle] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<CalendarRange | undefined>(undefined);

  return (
    <Stack direction="vertical" gap="lg">
      <section>
        <h3 style={headingStyle}>Single-date mode</h3>
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
            <ContextPeek />
          </Calendar.Root>
        </div>
      </section>

      <section>
        <h3 style={headingStyle}>Range mode with custom header label</h3>
        <div style={panelStyle}>
          <Calendar.Root
            mode="range"
            selected={range}
            onSelect={(v) => setRange(v as CalendarRange | undefined)}
          >
            <div style={headerRowStyle}>
              <Calendar.Nav direction="prev" step={12} aria-label="Previous year" />
              <Calendar.Header>
                {({ year, month }) => `${month + 1}/${year}`}
              </Calendar.Header>
              <Calendar.Nav direction="next" step={12} aria-label="Next year" />
            </div>
            <ContextPeek />
          </Calendar.Root>
        </div>
      </section>

      <p style={noteStyle}>
        Grid/Cell primitives land in the next slice. Until then, the existing
        DatePicker and DateRangePicker components carry the visible grid —
        exercised from their own demos.
      </p>
    </Stack>
  );
}

function ContextPeek(): React.JSX.Element {
  const ctx = useCalendarContext('Peek');
  return (
    <pre style={peekStyle}>
      {JSON.stringify(
        {
          mode: ctx.mode,
          viewDate: ctx.viewDate.toISOString().slice(0, 10),
          selected: serialize(ctx.selected),
          focusedDate: ctx.focusedDate.toISOString().slice(0, 10),
        },
        null,
        2,
      )}
    </pre>
  );
}

function serialize(sel: CalendarSelection): unknown {
  if (!sel) return null;
  if (sel instanceof Date) return sel.toISOString().slice(0, 10);
  return {
    from: sel.from.toISOString().slice(0, 10),
    to: sel.to.toISOString().slice(0, 10),
  };
}

const headingStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: t.spaceSm,
  fontSize: t.fontSizeSm,
  fontWeight: t.fontWeightSemibold,
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

const peekStyle: React.CSSProperties = {
  margin: 0,
  padding: t.spaceSm,
  background: t.colorSurfaceRaised,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  fontSize: t.fontSizeXs,
  fontFamily: t.fontMono,
  color: t.colorText,
  whiteSpace: 'pre',
};

const noteStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  fontStyle: 'italic',
};
