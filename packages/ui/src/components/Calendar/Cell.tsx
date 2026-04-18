import type { ReactNode } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { isSameDay, isInRange } from '../DateRangePicker/dateUtils';
import { useCalendarContext } from './Calendar';
import type { CalendarContextValue } from './Calendar';

/** Props for `<Calendar.Cell>`. */
export interface CalendarCellProps {
  /** The date this cell represents. */
  date: Date;
  /** Override the rendered content. Defaults to the day of the month. */
  children?: ReactNode;
  /** Merge into the inner `<button>` style. */
  style?: React.CSSProperties;
  /** Merge into the inner `<button>` className. */
  className?: string;
}

const baseCellStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: t.spaceXl,
  height: t.spaceXl,
  border: 'none',
  borderRadius: t.radiusSm,
  fontSize: t.fontSizeSm,
  fontFamily: t.fontSans,
  cursor: 'pointer',
  background: 'transparent',
  color: t.colorText,
  padding: 0,
  transition: 'background 120ms ease, color 120ms ease',
  outline: 'none',
  boxSizing: 'border-box' as const,
};

function computeBounds(ctx: CalendarContextValue): {
  start: Date | null;
  end: Date | null;
} {
  if (!ctx.selected) return { start: null, end: null };
  if (ctx.selected instanceof Date) {
    return { start: ctx.selected, end: ctx.selected };
  }
  const a = ctx.selected.from;
  const b = ctx.selected.to;
  return a.getTime() <= b.getTime()
    ? { start: a, end: b }
    : { start: b, end: a };
}

function isDisabled(ctx: CalendarContextValue, date: Date): boolean {
  if (ctx.minDate) {
    const min = new Date(
      ctx.minDate.getFullYear(),
      ctx.minDate.getMonth(),
      ctx.minDate.getDate(),
    );
    if (date.getTime() < min.getTime()) return true;
  }
  if (ctx.maxDate) {
    const max = new Date(
      ctx.maxDate.getFullYear(),
      ctx.maxDate.getMonth(),
      ctx.maxDate.getDate(),
    );
    if (date.getTime() > max.getTime()) return true;
  }
  return ctx.disabledDate?.(date) ?? false;
}

/**
 * A single day cell in the calendar grid. Renders as `<td role="gridcell">`
 * wrapping a `<button>`. Reads focus, selection, and disabled state from the
 * Calendar context.
 *
 * Roving tabindex: the focused cell has `tabIndex=0`; all others have `-1`.
 */
export function CalendarCell({
  date,
  children,
  style,
  className,
}: CalendarCellProps): React.JSX.Element {
  const ctx = useCalendarContext('Cell');
  const today = new Date();

  const month = ctx.viewDate.getMonth();
  const isOutsideMonth = date.getMonth() !== month;
  const isToday = isSameDay(date, today);
  const isFocused = isSameDay(date, ctx.focusedDate);
  const { start, end } = computeBounds(ctx);
  const isStart = start !== null && isSameDay(date, start);
  const isEnd = end !== null && isSameDay(date, end);
  const isEndpoint = isStart || isEnd;
  const inRange =
    start !== null && end !== null && isInRange(date, start, end);
  const disabled = isDisabled(ctx, date);

  const cellStyle: React.CSSProperties = {
    ...baseCellStyle,
    ...(isOutsideMonth ? { color: t.colorTextMuted, opacity: 0.5 } : {}),
    ...(isToday && !isEndpoint
      ? { border: `${t.borderWidthDefault} solid ${t.colorActionPrimary}` }
      : {}),
    ...(inRange && !isEndpoint
      ? {
          background: `color-mix(in srgb, ${t.colorActionPrimary} 15%, transparent)`,
        }
      : {}),
    ...(isEndpoint
      ? { background: t.colorActionPrimary, color: t.colorTextInverse }
      : {}),
    ...(disabled
      ? {
          color: t.colorTextDisabled,
          pointerEvents: 'none' as const,
          cursor: 'default',
          opacity: 0.5,
        }
      : {}),
    ...style,
  };

  const classNames = [
    'alttab-calendar-day',
    ...(disabled ? [] : ['alttab-calendar-day--enabled']),
    ...(className ? [className] : []),
  ].join(' ');

  const iso = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return (
    <button
      type="button"
      className={classNames}
      style={cellStyle}
      tabIndex={isFocused ? 0 : -1}
      aria-selected={isEndpoint || (inRange && !disabled) || undefined}
      aria-disabled={disabled || undefined}
      data-calendar-cell={iso}
      onClick={() => {
        if (disabled) return;
        ctx.setFocusedDate(date);
        ctx.onSelect(date);
      }}
    >
      {children ?? date.getDate()}
    </button>
  );
}
