import { semantic as t } from '@4lt7ab/core';
import { isSameDay } from './dateUtils';

export interface DayCellProps {
  date: Date;
  currentMonth: number;
  today: Date;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  isInRange: boolean;
  isDisabled: boolean;
  scopeClass: string;
  onSelect: (date: Date) => void;
  onKeyDown: (e: React.KeyboardEvent, date: Date) => void;
  tabIndex: number;
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

export function DayCell({
  date,
  currentMonth,
  today,
  rangeStart,
  rangeEnd,
  isInRange: inRange,
  isDisabled,
  scopeClass,
  onSelect,
  onKeyDown,
  tabIndex,
}: DayCellProps): React.JSX.Element {
  const isOutsideMonth = date.getMonth() !== currentMonth;
  const isToday = isSameDay(date, today);
  const isStart = rangeStart !== null && isSameDay(date, rangeStart);
  const isEnd = rangeEnd !== null && isSameDay(date, rangeEnd);
  const isEndpoint = isStart || isEnd;

  const cellStyle: React.CSSProperties = {
    ...baseCellStyle,
    ...(isOutsideMonth ? { color: t.colorTextMuted, opacity: 0.5 } : {}),
    ...(isToday && !isEndpoint
      ? { border: `${t.borderWidthDefault} solid ${t.colorActionPrimary}` }
      : {}),
    ...(inRange && !isEndpoint
      ? { background: `color-mix(in srgb, ${t.colorActionPrimary} 15%, transparent)` }
      : {}),
    ...(isEndpoint
      ? { background: t.colorActionPrimary, color: t.colorTextInverse }
      : {}),
    ...(isDisabled
      ? {
          color: t.colorTextDisabled,
          pointerEvents: 'none' as const,
          cursor: 'default',
          opacity: 0.5,
        }
      : {}),
  };

  const classNames = [
    scopeClass + '-day',
    ...(isDisabled ? [] : [scopeClass + '-day--enabled']),
  ].join(' ');

  return (
    <td role="gridcell" style={{ padding: 0 }}>
      <button
        type="button"
        className={classNames}
        style={cellStyle}
        tabIndex={tabIndex}
        aria-selected={isEndpoint || (inRange && !isDisabled) || undefined}
        aria-disabled={isDisabled || undefined}
        onClick={() => {
          if (!isDisabled) onSelect(date);
        }}
        onKeyDown={(e) => onKeyDown(e, date)}
      >
        {date.getDate()}
      </button>
    </td>
  );
}
