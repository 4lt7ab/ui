import { IconButton } from '../IconButton';
import { useCalendarContext } from './Calendar';

/** Direction a Calendar.Nav button shifts the visible month. */
export type CalendarNavDirection = 'prev' | 'next';

/** Props for `<Calendar.Nav>`. */
export interface CalendarNavProps {
  /** Which direction to move the visible month. */
  direction: CalendarNavDirection;
  /** Number of months to shift per press. Defaults to `1`. */
  step?: number;
  /** Accessible label. Defaults to `"Previous month"` / `"Next month"`. */
  'aria-label'?: string;
  /**
   * Optional custom onClick. The default handler still runs afterwards —
   * return false from a custom handler to cancel. Useful for tracking.
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | boolean;
}

/**
 * Month-navigation control. Reads `viewDate` from the Calendar context and
 * commits a shifted value via `setViewDate` when clicked.
 *
 * Renders as a single `<IconButton>` (chevron-left / chevron-right). Compose
 * two of these around `<Calendar.Header>` to build the typical
 * prev / label / next heading.
 */
export function CalendarNav({
  direction,
  step = 1,
  'aria-label': ariaLabel,
  onClick,
}: CalendarNavProps): React.JSX.Element {
  const ctx = useCalendarContext('Nav');
  const delta = direction === 'prev' ? -step : step;
  const defaultLabel = direction === 'prev' ? 'Previous month' : 'Next month';
  const icon = direction === 'prev' ? 'chevron-left' : 'chevron-right';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const result = onClick?.(e);
    if (result === false) return;
    const next = new Date(
      ctx.viewDate.getFullYear(),
      ctx.viewDate.getMonth() + delta,
      1,
    );
    ctx.setViewDate(next);
  };

  return (
    <IconButton
      icon={icon}
      aria-label={ariaLabel ?? defaultLabel}
      onClick={handleClick}
      size="sm"
    />
  );
}
