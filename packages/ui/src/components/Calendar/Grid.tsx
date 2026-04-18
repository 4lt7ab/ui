import { useCallback, useMemo, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import {
  buildCalendarGrid,
  WEEKDAY_LABELS,
  isSameDay,
  isDateDisabled,
  isInRange,
} from '../DateRangePicker/dateUtils';
import { useCalendarContext } from './Calendar';
import type { CalendarContextValue } from './Calendar';
import { CalendarCell } from './Cell';

// ---------------------------------------------------------------------------
// Injected CSS
// ---------------------------------------------------------------------------

const GRID_STYLES_ID = 'alttab-calendar';

const gridCSS = /* css */ `
  .alttab-calendar-day--enabled:hover {
    background: ${t.colorSurfaceRaised} !important;
  }
  .alttab-calendar-day--enabled:focus-visible {
    outline: ${t.focusRingWidth} solid ${t.focusRingColor};
    outline-offset: ${t.focusRingOffset};
  }
`;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Render state passed to the Calendar.Grid children render-prop. */
export interface CalendarCellRenderArgs {
  date: Date;
  isInMonth: boolean;
  isToday: boolean;
  isFocused: boolean;
  isSelected: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  isDisabled: boolean;
}

/** Props for `<Calendar.Grid>`. */
export interface CalendarGridProps {
  /** Accessible label for the grid. Defaults to `"Calendar"`. */
  'aria-label'?: string;
  /**
   * Called when Escape is pressed while focus is inside the grid. Picker
   * contexts wire this up to close the popover.
   */
  onEscape?: () => void;
  /**
   * Custom cell render function. When provided, the grid delegates every cell
   * to this function. When omitted, the grid renders a default
   * {@link CalendarCell} with content = the day of the month.
   */
  children?: (args: CalendarCellRenderArgs) => ReactNode;
  /** Merge into the root `<table>` style. */
  style?: React.CSSProperties;
  /** Merge into the root `<table>` className. */
  className?: string;
}

// ---------------------------------------------------------------------------
// Keyboard logic — exported for tests
// ---------------------------------------------------------------------------

/**
 * Compute the next focused date given a keyboard event against a current
 * focused date. Returns `null` if the key is unhandled.
 *
 * Handles: Arrow keys (±1 day / ±7 days), Home (Sunday of the week),
 * End (Saturday of the week), PageUp/PageDown (±1 month; +Shift = ±1 year).
 */
export function nextFocusedDate(
  date: Date,
  key: string,
  shiftKey: boolean,
): Date | null {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  switch (key) {
    case 'ArrowLeft':
      return new Date(y, m, d - 1);
    case 'ArrowRight':
      return new Date(y, m, d + 1);
    case 'ArrowUp':
      return new Date(y, m, d - 7);
    case 'ArrowDown':
      return new Date(y, m, d + 7);
    case 'Home':
      return new Date(y, m, d - date.getDay());
    case 'End':
      return new Date(y, m, d + (6 - date.getDay()));
    case 'PageUp':
      return shiftKey ? new Date(y - 1, m, d) : new Date(y, m - 1, d);
    case 'PageDown':
      return shiftKey ? new Date(y + 1, m, d) : new Date(y, m + 1, d);
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Helpers for selection highlighting
// ---------------------------------------------------------------------------

interface HighlightBounds {
  start: Date | null;
  end: Date | null;
}

function getHighlightBounds(ctx: CalendarContextValue): HighlightBounds {
  if (!ctx.selected) return { start: null, end: null };
  if (ctx.selected instanceof Date) {
    return { start: ctx.selected, end: ctx.selected };
  }
  // Normalize range direction for display — user may have stored from > to.
  const a = ctx.selected.from;
  const b = ctx.selected.to;
  return a.getTime() <= b.getTime()
    ? { start: a, end: b }
    : { start: b, end: a };
}

// ---------------------------------------------------------------------------
// Calendar.Grid
// ---------------------------------------------------------------------------

const tableStyle: React.CSSProperties = {
  borderCollapse: 'collapse',
  width: '100%',
  tableLayout: 'fixed',
};

const weekdayHeaderStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  fontFamily: t.fontSans,
  fontWeight: t.fontWeightMedium,
  color: t.colorTextMuted,
  textAlign: 'center',
  padding: `${t.spaceXs} 0`,
  userSelect: 'none',
};

/**
 * Calendar grid primitive. Renders a 6×7 `role="grid"` table for the month
 * currently visible in the Calendar context and implements the WAI-ARIA APG
 * grid keyboard pattern: roving tabindex, 2D arrow-key navigation, Home/End
 * (row edges), PageUp/PageDown (month; Shift+PageUp/Down = year).
 *
 * When focus moves outside the visible month, the grid automatically scrolls
 * the visible month (`viewDate`) to match the new focused date — keeping the
 * focused cell visible at all times.
 */
export function CalendarGridPrimitive({
  'aria-label': ariaLabel = 'Calendar',
  onEscape,
  children,
  style,
  className,
}: CalendarGridProps): React.JSX.Element {
  useInjectStyles(GRID_STYLES_ID, gridCSS);
  const ctx = useCalendarContext('Grid');
  const tableRef = useRef<HTMLTableElement>(null);
  const todayRef = useRef(new Date());

  const year = ctx.viewDate.getFullYear();
  const month = ctx.viewDate.getMonth();

  const grid = useMemo(() => buildCalendarGrid(year, month), [year, month]);

  const rows = useMemo<Date[][]>(() => {
    const out: Date[][] = [];
    for (let r = 0; r < 6; r++) {
      out.push(grid.slice(r * 7, r * 7 + 7));
    }
    return out;
  }, [grid]);

  const { start: highlightStart, end: highlightEnd } = getHighlightBounds(ctx);

  const isCellDisabled = useCallback(
    (date: Date) => {
      if (ctx.minDate && date.getTime() < stripTime(ctx.minDate).getTime()) {
        return true;
      }
      if (ctx.maxDate && date.getTime() > stripTime(ctx.maxDate).getTime()) {
        return true;
      }
      return ctx.disabledDate?.(date) ?? false;
    },
    [ctx.minDate, ctx.maxDate, ctx.disabledDate],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTableElement>) => {
      if (e.key === 'Escape') {
        if (onEscape) {
          e.preventDefault();
          onEscape();
        }
        return;
      }

      const target = e.target as HTMLElement;
      if (!target || target.tagName !== 'BUTTON') return;
      const iso = target.getAttribute('data-calendar-cell');
      if (!iso) return;
      const [yy, mm, dd] = iso.split('-').map(Number);
      const from = new Date(yy, mm, dd);

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (isCellDisabled(from)) return;
        if (ctx.mode === 'single') {
          ctx.onSelect(from);
        } else {
          // Range commit semantics live in the Picker (step 5). For now,
          // range mode treats Enter/Space as "select this endpoint" with
          // no preview — the picker wraps and extends this behavior.
          ctx.onSelect(from);
        }
        return;
      }

      const next = nextFocusedDate(from, e.key, e.shiftKey);
      if (!next) return;
      e.preventDefault();

      // Move focus: update focusedDate and, if the new date is outside the
      // currently visible month, scroll the view to its month.
      ctx.setFocusedDate(next);
      if (next.getMonth() !== month || next.getFullYear() !== year) {
        ctx.setViewDate(new Date(next.getFullYear(), next.getMonth(), 1));
      }
    },
    [ctx, month, year, isCellDisabled, onEscape],
  );

  // After a focused-date change, move DOM focus to the active cell's button.
  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;
    const btn = table.querySelector<HTMLButtonElement>('button[tabindex="0"]');
    if (btn && document.activeElement?.closest('[role="grid"]') === table) {
      btn.focus();
    }
  }, [ctx.focusedDate]);

  return (
    <table
      ref={tableRef}
      role="grid"
      aria-label={ariaLabel}
      style={{ ...tableStyle, ...style }}
      className={className}
      onKeyDown={handleKeyDown}
    >
      <thead>
        <tr>
          {WEEKDAY_LABELS.map((label) => (
            <th key={label} scope="col" style={weekdayHeaderStyle}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((date) => {
              const isInMonth = date.getMonth() === month;
              const isToday = isSameDay(date, todayRef.current);
              const isFocused = isSameDay(date, ctx.focusedDate);
              const disabled = isCellDisabled(date);
              const isRangeStart =
                highlightStart !== null && isSameDay(date, highlightStart);
              const isRangeEnd =
                highlightEnd !== null && isSameDay(date, highlightEnd);
              const inRange =
                highlightStart !== null &&
                highlightEnd !== null &&
                isInRange(date, highlightStart, highlightEnd);
              const isSelected = isRangeStart || isRangeEnd || inRange;

              const renderArgs: CalendarCellRenderArgs = {
                date,
                isInMonth,
                isToday,
                isFocused,
                isSelected,
                isRangeStart,
                isRangeEnd,
                isInRange: inRange,
                isDisabled: disabled,
              };

              const iso = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

              return (
                <td key={iso} role="gridcell" style={cellTdStyle}>
                  {children ? children(renderArgs) : <CalendarCell date={date} />}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function stripTime(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

const cellTdStyle: React.CSSProperties = { padding: 0 };
