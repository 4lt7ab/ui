import { Calendar as CalendarBase, useCalendarContext } from './Calendar';
import { CalendarHeaderPrimitive } from './Header';
import { CalendarNav } from './Nav';

/**
 * Compound Calendar primitive. Members:
 *
 * - `Calendar.Root` — owns selection, focused-date, and visible-month state
 *   and provides the CalendarContext.
 * - `Calendar.Header` — renders the currently visible month/year label.
 * - `Calendar.Nav` — month navigation button; pass `direction="prev"` or
 *   `direction="next"`.
 *
 * Calendar.Grid / Calendar.Cell land in a subsequent slice of the
 * calendar-compound refactor.
 */
export const Calendar = {
  Root: CalendarBase.Root,
  Header: CalendarHeaderPrimitive,
  Nav: CalendarNav,
};

export { useCalendarContext };
export type {
  CalendarContextValue,
  CalendarMode,
  CalendarRange,
  CalendarRootProps,
  CalendarSelection,
} from './Calendar';
export type { CalendarHeaderPrimitiveProps } from './Header';
export type { CalendarNavProps, CalendarNavDirection } from './Nav';
