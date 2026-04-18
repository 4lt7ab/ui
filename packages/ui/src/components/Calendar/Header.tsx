import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import { useCalendarContext } from './Calendar';
import { MONTH_NAMES } from '../DateRangePicker/dateUtils';

/** Props for `<Calendar.Header>`. */
export interface CalendarHeaderPrimitiveProps {
  /**
   * Render-prop override. Receives the visible year + month (0-indexed) and
   * returns the label content. Defaults to `"{Month} {Year}"`.
   */
  children?: (args: { year: number; month: number }) => ReactNode;
  /** Merge into the root element's style. */
  style?: React.CSSProperties;
  /** Merge into the root element's className. */
  className?: string;
}

const titleStyle: React.CSSProperties = {
  fontSize: t.fontSizeSm,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorText,
  margin: 0,
  userSelect: 'none',
};

/**
 * Renders the currently visible month + year label for the Calendar
 * subtree. Reads `viewDate` from {@link useCalendarContext}.
 *
 * Always rendered as a single `<span>`. Composes with `<Calendar.Nav>` to
 * build the full calendar heading row.
 */
export function CalendarHeaderPrimitive({
  children,
  style,
  className,
}: CalendarHeaderPrimitiveProps): React.JSX.Element {
  const ctx = useCalendarContext('Header');
  const year = ctx.viewDate.getFullYear();
  const month = ctx.viewDate.getMonth();
  return (
    <span
      style={{ ...titleStyle, ...style }}
      className={className}
      aria-live="polite"
    >
      {children ? children({ year, month }) : `${MONTH_NAMES[month]} ${year}`}
    </span>
  );
}
