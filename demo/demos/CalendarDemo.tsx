import { useState } from 'react';
import { Calendar, useCalendarContext, semantic as t } from '@4lt7ab/ui';
import type { CalendarRange, CalendarSelection } from '@4lt7ab/ui';
import { Stack } from '@4lt7ab/ui';

/**
 * Calendar.Root primitive demo.
 *
 * This is the state-owning slice of the compound Calendar API. The visible
 * sub-primitives (Calendar.Header, Calendar.Nav, Calendar.Grid, Calendar.Cell)
 * land in subsequent slices of the calendar-compound group. For now this demo
 * exercises Calendar.Root + useCalendarContext by rendering a small consumer
 * that introspects the current context state.
 */
export function CalendarDemo(): React.JSX.Element {
  const [single, setSingle] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<CalendarRange | undefined>(undefined);

  return (
    <Stack direction="vertical" gap="lg">
      <section>
        <h3 style={headingStyle}>Single-date mode</h3>
        <Calendar.Root
          mode="single"
          selected={single}
          onSelect={(v) => setSingle(v as Date | undefined)}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2030, 11, 31)}
        >
          <ContextPeek />
          <PickTodayButton />
        </Calendar.Root>
      </section>

      <section>
        <h3 style={headingStyle}>Range mode</h3>
        <Calendar.Root
          mode="range"
          selected={range}
          onSelect={(v) => setRange(v as CalendarRange | undefined)}
        >
          <ContextPeek />
        </Calendar.Root>
      </section>

      <p style={noteStyle}>
        Visible primitives (Header, Nav, Grid, Cell) land in subsequent slices.
        Root alone is a headless state provider.
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
          selected: serialize(ctx.selected),
          focusedDate: ctx.focusedDate.toISOString().slice(0, 10),
          minDate: ctx.minDate?.toISOString().slice(0, 10),
          maxDate: ctx.maxDate?.toISOString().slice(0, 10),
        },
        null,
        2,
      )}
    </pre>
  );
}

function PickTodayButton(): React.JSX.Element {
  const ctx = useCalendarContext('PickTodayButton');
  return (
    <button type="button" style={buttonStyle} onClick={() => ctx.onSelect(new Date())}>
      Select today
    </button>
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

const buttonStyle: React.CSSProperties = {
  marginTop: t.spaceSm,
  padding: `${t.spaceXs} ${t.spaceMd}`,
  fontSize: t.fontSizeSm,
  fontFamily: t.fontSans,
  color: t.colorText,
  background: t.colorSurfaceInput,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  cursor: 'pointer',
};

const noteStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  fontStyle: 'italic',
};
