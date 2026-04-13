/** Pure utility functions for date math. Zero external dependencies. */

/** Return the number of days in a given month (0-indexed month). */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/** Return the weekday index (0 = Sunday) of the first day of a month. */
export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

/** Check whether two dates represent the same calendar day. */
export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Check whether `date` falls within the inclusive range [from, to]. */
export function isInRange(date: Date, from: Date, to: Date): boolean {
  const d = stripTime(date).getTime();
  const f = stripTime(from).getTime();
  const t = stripTime(to).getTime();
  return d >= f && d <= t;
}

/** Check whether a date should be disabled given constraints. */
export function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[],
): boolean {
  const d = stripTime(date).getTime();
  if (minDate && d < stripTime(minDate).getTime()) return true;
  if (maxDate && d > stripTime(maxDate).getTime()) return true;
  if (disabledDates) {
    for (const dd of disabledDates) {
      if (isSameDay(date, dd)) return true;
    }
  }
  return false;
}

/** Format a Date as YYYY-MM-DD for the trigger display. */
export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Strip time components, returning midnight UTC-equivalent local date. */
function stripTime(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** Month names for calendar header display. */
export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

/** Abbreviated weekday labels for the grid header. */
export const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;

/** Build the 6x7 grid of dates for a given month.
 * Includes trailing days from previous month and leading days from next month.
 * Returns an array of 42 Date objects.
 */
export function buildCalendarGrid(year: number, month: number): Date[] {
  const firstDay = getFirstDayOfMonth(year, month);
  const grid: Date[] = [];

  // Previous month fill
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    grid.push(d);
  }

  // Current month
  const daysInMonth = getDaysInMonth(year, month);
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push(new Date(year, month, d));
  }

  // Next month fill to reach 42 cells (6 rows)
  while (grid.length < 42) {
    const overflow = grid.length - firstDay - daysInMonth + 1;
    grid.push(new Date(year, month + 1, overflow));
  }

  return grid;
}
