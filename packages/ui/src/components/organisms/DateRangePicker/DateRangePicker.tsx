import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Calendar } from '../Calendar';
import type { CalendarSelection } from '../Calendar';
import { formatDate, isSameDay } from './dateUtils';
import { useClickOutside } from '../../../utils/useClickOutside';

/** A date range with inclusive start and end. */
export interface DateRange {
  from: Date;
  to: Date;
}

/** Props for the DateRangePicker component. */
export interface DateRangePickerProps {
  /** Currently selected date range. */
  value?: DateRange;
  /** Called when the range changes (or is cleared). */
  onChange: (range: DateRange | undefined) => void;
  /** Earliest selectable date. */
  minDate?: Date;
  /** Latest selectable date. */
  maxDate?: Date;
  /** Specific dates that cannot be selected. */
  disabledDates?: Date[];
  /** Placeholder text when no range is selected. */
  placeholder?: string;
  /** Renders error border styling.
   * @default false
   */
  hasError?: boolean;
  /** Disables the picker.
   * @default false
   */
  disabled?: boolean;
}

const SCOPE = 'alttab-drp';

const injectedCSS = /* css */ `
  .${SCOPE}-trigger:focus-visible {
    border-color: ${t.colorBorderFocused};
    box-shadow: 0 0 0 ${t.focusRingWidth} ${t.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${t.colorBorderFocused};
  }
`;

const wrapperStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

const triggerBaseStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: `${t.spaceSm} ${t.spaceMd}`,
  fontSize: t.fontSizeSm,
  lineHeight: t.lineHeightTight,
  fontFamily: t.fontSans,
  color: t.colorText,
  background: t.colorSurfaceInput,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  outline: 'none',
  transition: `border-color ${t.transitionBase}, box-shadow ${t.transitionBase}`,
  boxSizing: 'border-box' as const,
  cursor: 'pointer',
  textAlign: 'left' as const,
};

const triggerErrorStyle: React.CSSProperties = {
  borderColor: t.colorBorderError,
};

const triggerDisabledStyle: React.CSSProperties = {
  background: t.colorSurfaceDisabled,
  color: t.colorTextDisabled,
  cursor: 'not-allowed',
};

const popoverStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: t.zIndexDropdown,
  marginTop: t.spaceXs,
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  boxShadow: t.shadowMd,
  padding: t.spaceMd,
  minWidth: 290,
  boxSizing: 'border-box' as const,
};

const placeholderStyle: React.CSSProperties = {
  color: t.colorTextPlaceholder,
};

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${t.spaceXs} 0`,
  marginBottom: t.spaceSm,
};

function sortedRange(a: Date, b: Date): DateRange {
  return a.getTime() <= b.getTime()
    ? { from: a, to: b }
    : { from: b, to: a };
}

/**
 * Date-range picker. A composition over the compound `Calendar.*` primitives
 * that adds the two-click range selection flow and a hover-preview state
 * machine:
 *
 * 1. First click commits `selectionStart`.
 * 2. Subsequent mouse hover (or keyboard focus change) previews the range
 *    `{ from: start, to: hover }` without committing.
 * 3. Second click commits the final `{ from, to }` via `onChange` and closes
 *    the popover.
 *
 * Keyboard: Enter/Space acts as a click. Arrow keys update the previewed
 * end via Calendar.Root's focused-date tracking.
 */
export const DateRangePicker: React.ForwardRefExoticComponent<
  Omit<DateRangePickerProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, DateRangePickerProps>(
  function DateRangePicker(
    {
      value,
      onChange,
      minDate,
      maxDate,
      disabledDates,
      placeholder = 'Select date range',
      hasError,
      disabled,
    },
    ref,
  ): React.JSX.Element {
    useInjectStyles(SCOPE, injectedCSS);

    const [open, setOpen] = useState(false);
    const [selectionStart, setSelectionStart] = useState<Date | null>(null);
    const [hoverDate, setHoverDate] = useState<Date | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Click outside to close
    const handleOutsideClose = useCallback(() => {
      setOpen(false);
      setSelectionStart(null);
      setHoverDate(null);
    }, []);
    useClickOutside(containerRef, handleOutsideClose, open);

    // Focus the active day when popover opens
    useEffect(() => {
      if (!open) return;
      const btn = containerRef.current?.querySelector<HTMLButtonElement>(
        '[role="grid"] button[tabindex="0"]',
      );
      btn?.focus();
    }, [open]);

    const handleToggle = useCallback(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (prev) {
          setSelectionStart(null);
          setHoverDate(null);
        }
        return !prev;
      });
    }, [disabled]);

    // Two-click selection: first click sets start, second commits.
    const handleSelect = useCallback(
      (v: CalendarSelection) => {
        if (!(v instanceof Date)) return;
        if (selectionStart === null) {
          setSelectionStart(v);
          setHoverDate(v);
        } else {
          const range = sortedRange(selectionStart, v);
          onChange(range);
          setSelectionStart(null);
          setHoverDate(null);
          setOpen(false);
        }
      },
      [selectionStart, onChange],
    );

    // Keyboard equivalent of hover: track focused-date changes on Root so
    // the preview range extends with arrow keys during mid-selection.
    const handleFocusedDateChange = useCallback(
      (d: Date) => {
        if (selectionStart !== null) setHoverDate(d);
      },
      [selectionStart],
    );

    // Map disabledDates -> predicate for Calendar.Root.
    const disabledDate = useMemo(() => {
      if (!disabledDates || disabledDates.length === 0) return undefined;
      return (d: Date) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);

    // Effective selection shown in the grid: the committed value when no
    // mid-selection is in progress, otherwise the preview range.
    const displaySelected = useMemo<CalendarSelection>(() => {
      if (selectionStart !== null) {
        const end = hoverDate ?? selectionStart;
        return sortedRange(selectionStart, end);
      }
      return value;
    }, [selectionStart, hoverDate, value]);

    // Re-seed Calendar.Root's uncontrolled state on every open.
    const openKey = useMemo(
      () =>
        open
          ? `${value?.from.getTime() ?? 'empty'}-${Date.now()}`
          : 'closed',
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [open],
    );

    // Display text
    let displayText: React.ReactNode;
    if (value) {
      displayText = `${formatDate(value.from)} \u2013 ${formatDate(value.to)}`;
    } else {
      displayText = <span style={placeholderStyle}>{placeholder}</span>;
    }

    return (
      <div
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        style={wrapperStyle}
      >
        <button
          type="button"
          className={`${SCOPE}-trigger`}
          style={{
            ...triggerBaseStyle,
            ...(hasError ? triggerErrorStyle : {}),
            ...(disabled ? triggerDisabledStyle : {}),
          }}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-invalid={hasError || undefined}
        >
          {displayText}
        </button>

        {open && (
          <div style={popoverStyle} role="dialog" aria-label="Date range picker">
            <Calendar.Root
              key={openKey}
              mode="range"
              selected={displaySelected}
              onSelect={handleSelect}
              onFocusedDateChange={handleFocusedDateChange}
              defaultFocusedDate={value?.from ?? new Date()}
              defaultViewDate={value?.from ?? new Date()}
              minDate={minDate}
              maxDate={maxDate}
              disabledDate={disabledDate}
            >
              <div style={headerRowStyle}>
                <Calendar.Nav direction="prev" />
                <Calendar.Header />
                <Calendar.Nav direction="next" />
              </div>
              <Calendar.Grid onEscape={() => { setOpen(false); setSelectionStart(null); setHoverDate(null); }}>
                {({ date }) => (
                  <Calendar.Cell
                    date={date}
                    onMouseEnter={() => {
                      if (selectionStart !== null) setHoverDate(date);
                    }}
                  />
                )}
              </Calendar.Grid>
            </Calendar.Root>
          </div>
        )}
      </div>
    );
  },
);
