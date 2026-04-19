import { Calendar as CalendarBase, useCalendarContext } from './Calendar';
import { CalendarHeaderPrimitive } from './Header';
import { CalendarNav } from './Nav';
import { CalendarGridPrimitive, nextFocusedDate } from './Grid';
import { CalendarCell } from './Cell';

/**
 * Compound Calendar primitive. Members:
 *
 * - `Calendar.Root` — owns selection, focused-date, and visible-month state
 *   and provides the CalendarContext.
 * - `Calendar.Header` — renders the currently visible month/year label.
 * - `Calendar.Nav` — month navigation button (`direction="prev" | "next"`).
 * - `Calendar.Grid` — the 6×7 day grid implementing the WAI-ARIA APG grid
 *   keyboard pattern (roving tabindex, 2D arrow-key nav, Home/End,
 *   PageUp/PageDown, Enter/Space, optional Escape).
 * - `Calendar.Cell` — single day cell; default renderer for `Calendar.Grid`.
 */
export const Calendar = {
  Root: CalendarBase.Root,
  Header: CalendarHeaderPrimitive,
  Nav: CalendarNav,
  Grid: CalendarGridPrimitive,
  Cell: CalendarCell,
};

export { useCalendarContext, nextFocusedDate };
export type {
  CalendarContextValue,
  CalendarMode,
  CalendarRange,
  CalendarRootProps,
  CalendarSelection,
} from './Calendar';
export type { CalendarHeaderPrimitiveProps } from './Header';
export type { CalendarNavProps, CalendarNavDirection } from './Nav';
export type { CalendarGridProps, CalendarCellRenderArgs } from './Grid';
export type { CalendarCellProps } from './Cell';
