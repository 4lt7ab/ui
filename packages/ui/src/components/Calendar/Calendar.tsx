import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Whether the calendar selects a single date or a date range. */
export type CalendarMode = 'single' | 'range';

/** An inclusive date range with a start and end. */
export interface CalendarRange {
  from: Date;
  to: Date;
}

/**
 * Current selection for the calendar. Shape depends on {@link CalendarMode}:
 * - `single` -> `Date | undefined`
 * - `range`  -> `CalendarRange | undefined`
 */
export type CalendarSelection = Date | CalendarRange | undefined;

/**
 * Value exposed by the Calendar compound primitive via context. Child
 * primitives (Calendar.Header, Calendar.Nav, Calendar.Grid, Calendar.Cell)
 * read from this via {@link useCalendarContext}.
 */
export interface CalendarContextValue {
  /** Active selection mode. */
  mode: CalendarMode;
  /** Current selection (shape depends on `mode`). */
  selected: CalendarSelection;
  /** Commit a selection. Range mode commits a full `{from, to}`. */
  onSelect: (value: CalendarSelection) => void;
  /** Earliest selectable date (inclusive). */
  minDate?: Date;
  /** Latest selectable date (inclusive). */
  maxDate?: Date;
  /** Predicate for disabling specific dates. Return `true` to disable. */
  disabledDate?: (date: Date) => boolean;
  /** The currently focused date (roving tabindex target within the grid). */
  focusedDate: Date;
  /** Move focus to a different date. Implementations should also update the visible month if needed. */
  setFocusedDate: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextValue | null>(null);

/**
 * Read the Calendar context. Throws with a helpful message if the caller is
 * not rendered inside a `<Calendar.Root>`.
 *
 * @param part Name of the consuming primitive, used in the error message
 *   (e.g. `"Grid"`, `"Cell"`).
 */
export function useCalendarContext(part: string = 'child'): CalendarContextValue {
  const ctx = useContext(CalendarContext);
  if (!ctx) {
    throw new Error(
      `Calendar.${part} must be rendered inside <Calendar.Root>.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for `<Calendar.Root>`, the state-owning primitive. */
export interface CalendarRootProps {
  /** Selection mode. Defaults to `'single'`. */
  mode?: CalendarMode;
  /**
   * Current selection. Shape depends on `mode`:
   * - `'single'`: `Date | undefined`
   * - `'range'`:  `CalendarRange | undefined`
   */
  selected?: CalendarSelection;
  /** Called when the selection changes. */
  onSelect?: (value: CalendarSelection) => void;
  /** Earliest selectable date (inclusive). */
  minDate?: Date;
  /** Latest selectable date (inclusive). */
  maxDate?: Date;
  /** Predicate for disabling specific dates. Return `true` to disable. */
  disabledDate?: (date: Date) => boolean;
  /**
   * Controlled focused date. When provided, Root does not manage focused-date
   * state internally and relies on `onFocusedDateChange` to request updates.
   */
  focusedDate?: Date;
  /**
   * Default focused date for the uncontrolled case. Ignored when `focusedDate`
   * is provided. Falls back to the selected date, or today, if omitted.
   */
  defaultFocusedDate?: Date;
  /** Called when the focused date changes (both controlled and uncontrolled). */
  onFocusedDateChange?: (date: Date) => void;
  /** Calendar subtree — typically `Calendar.Header` / `Calendar.Nav` / `Calendar.Grid`. */
  children?: ReactNode;
}

function seedFocusedDate(selected: CalendarSelection): Date | undefined {
  if (!selected) return undefined;
  if (selected instanceof Date) return selected;
  return selected.from;
}

function Root({
  mode = 'single',
  selected,
  onSelect,
  minDate,
  maxDate,
  disabledDate,
  focusedDate: focusedDateProp,
  defaultFocusedDate,
  onFocusedDateChange,
  children,
}: CalendarRootProps): React.JSX.Element {
  const [focusedDateState, setFocusedDateState] = useState<Date>(
    () => defaultFocusedDate ?? seedFocusedDate(selected) ?? new Date(),
  );

  const isControlled = focusedDateProp !== undefined;
  const focusedDate = isControlled ? (focusedDateProp as Date) : focusedDateState;

  const setFocusedDate = useCallback(
    (date: Date) => {
      if (!isControlled) setFocusedDateState(date);
      onFocusedDateChange?.(date);
    },
    [isControlled, onFocusedDateChange],
  );

  const handleSelect = useCallback(
    (value: CalendarSelection) => {
      onSelect?.(value);
    },
    [onSelect],
  );

  const ctx = useMemo<CalendarContextValue>(
    () => ({
      mode,
      selected,
      onSelect: handleSelect,
      minDate,
      maxDate,
      disabledDate,
      focusedDate,
      setFocusedDate,
    }),
    [
      mode,
      selected,
      handleSelect,
      minDate,
      maxDate,
      disabledDate,
      focusedDate,
      setFocusedDate,
    ],
  );

  return (
    <CalendarContext.Provider value={ctx}>{children}</CalendarContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Compound Calendar primitive. Owns selection and focused-date state via
 * React context. Render Calendar sub-primitives (Header, Nav, Grid, Cell —
 * landing in subsequent slices) as children.
 *
 * @example
 * ```tsx
 * <Calendar.Root
 *   mode="single"
 *   selected={value}
 *   onSelect={(v) => setValue(v as Date | undefined)}
 * >
 *   {/* Calendar.Header / Calendar.Nav / Calendar.Grid land in later slices *\/}
 * </Calendar.Root>
 * ```
 */
export const Calendar = {
  Root,
};
