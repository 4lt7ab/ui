import { semantic as t } from '@4lt7ab/core';
import { IconButton } from '../IconButton';
import { MONTH_NAMES } from './dateUtils';

export interface CalendarHeaderProps {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${t.spaceXs} 0`,
};

const titleStyle: React.CSSProperties = {
  fontSize: t.fontSizeSm,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorText,
  margin: 0,
  userSelect: 'none',
};

export function CalendarHeader({
  year,
  month,
  onPrev,
  onNext,
}: CalendarHeaderProps): React.JSX.Element {
  return (
    <div style={headerStyle}>
      <IconButton
        icon="chevron-left"
        aria-label="Previous month"
        size={16}
        onClick={onPrev}
        buttonSize="sm"
      />
      <span style={titleStyle}>
        {MONTH_NAMES[month]} {year}
      </span>
      <IconButton
        icon="chevron-right"
        aria-label="Next month"
        size={16}
        onClick={onNext}
        buttonSize="sm"
      />
    </div>
  );
}
