import { useCallback, useRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { buildCalendarGrid, isInRange, isDateDisabled, isSameDay, WEEKDAY_LABELS } from './dateUtils';
import { DayCell } from './DayCell';

export interface CalendarGridProps {
  year: number;
  month: number;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  scopeClass: string;
  focusedDate: Date;
  onSelect: (date: Date) => void;
  onFocusedDateChange: (date: Date) => void;
}

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

export function CalendarGrid({
  year,
  month,
  rangeStart,
  rangeEnd,
  minDate,
  maxDate,
  disabledDates,
  scopeClass,
  focusedDate,
  onSelect,
  onFocusedDateChange,
}: CalendarGridProps): React.JSX.Element {
  const today = useRef(new Date()).current;
  const grid = buildCalendarGrid(year, month);

  // Build 6 rows of 7 days
  const rows: Date[][] = [];
  for (let r = 0; r < 6; r++) {
    rows.push(grid.slice(r * 7, r * 7 + 7));
  }

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, date: Date) => {
      let next: Date | null = null;

      switch (e.key) {
        case 'ArrowLeft':
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
          break;
        case 'ArrowRight':
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
          break;
        case 'ArrowUp':
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
          break;
        case 'ArrowDown':
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (!isDateDisabled(date, minDate, maxDate, disabledDates)) {
            onSelect(date);
          }
          return;
        default:
          return;
      }

      e.preventDefault();
      if (next) {
        onFocusedDateChange(next);
      }
    },
    [minDate, maxDate, disabledDates, onSelect, onFocusedDateChange],
  );

  // Determine the sorted range for highlighting
  const sortedStart = rangeStart && rangeEnd
    ? (rangeStart.getTime() <= rangeEnd.getTime() ? rangeStart : rangeEnd)
    : rangeStart;
  const sortedEnd = rangeStart && rangeEnd
    ? (rangeStart.getTime() <= rangeEnd.getTime() ? rangeEnd : rangeStart)
    : rangeEnd;

  return (
    <table style={tableStyle} role="grid" aria-label="Calendar">
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
              const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
              const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);
              const inRange =
                sortedStart !== null &&
                sortedEnd !== null &&
                isInRange(date, sortedStart, sortedEnd);
              const isFocused = isSameDay(date, focusedDate);

              return (
                <DayCell
                  key={key}
                  date={date}
                  currentMonth={month}
                  today={today}
                  rangeStart={sortedStart ?? null}
                  rangeEnd={sortedEnd ?? null}
                  isInRange={inRange}
                  isDisabled={disabled}
                  scopeClass={scopeClass}
                  onSelect={onSelect}
                  onKeyDown={handleKeyDown}
                  tabIndex={isFocused ? 0 : -1}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
