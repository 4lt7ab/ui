import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { formatDate } from './dateUtils';

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
  /** Additional inline styles on the wrapper. */
  style?: React.CSSProperties;
}

const SCOPE = 'alttab-drp';

const injectedCSS = /* css */ `
  .${SCOPE}-day--enabled:hover {
    background: ${t.colorSurfaceRaised} !important;
  }
  .${SCOPE}-day--enabled:focus-visible {
    outline: ${t.focusRingWidth} solid ${t.focusRingColor};
    outline-offset: ${t.focusRingOffset};
  }
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
      style,
    },
    ref,
  ): React.JSX.Element {
    useInjectStyles(SCOPE, injectedCSS);

    const [open, setOpen] = useState(false);
    const [selectionStart, setSelectionStart] = useState<Date | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Calendar view state — default to current month or the start of the range
    const initialDate = value?.from ?? new Date();
    const [viewYear, setViewYear] = useState(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = useState(initialDate.getMonth());

    // Focused date for keyboard nav
    const [focusedDate, setFocusedDate] = useState(
      value?.from ?? new Date(),
    );

    // When focused date leaves the visible month, navigate the calendar
    const handleFocusedDateChange = useCallback((date: Date) => {
      setFocusedDate(date);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }, []);

    // Focus the active day button when focused date changes while popover is open
    useEffect(() => {
      if (!open) return;
      const container = containerRef.current;
      if (!container) return;
      const btn = container.querySelector<HTMLButtonElement>(
        'button[tabindex="0"]',
      );
      btn?.focus();
    }, [focusedDate, open]);

    // Click outside to close
    useEffect(() => {
      if (!open) return;
      function handleMouseDown(e: MouseEvent): void {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
          setSelectionStart(null);
        }
      }
      document.addEventListener('mousedown', handleMouseDown);
      return () => document.removeEventListener('mousedown', handleMouseDown);
    }, [open]);

    // Escape to close
    useEffect(() => {
      if (!open) return;
      function handleKey(e: KeyboardEvent): void {
        if (e.key === 'Escape') {
          setOpen(false);
          setSelectionStart(null);
        }
      }
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }, [open]);

    const handleToggle = useCallback(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) {
          // Reset view to current range or today when opening
          const base = value?.from ?? new Date();
          setViewYear(base.getFullYear());
          setViewMonth(base.getMonth());
          setFocusedDate(value?.from ?? new Date());
          setSelectionStart(null);
        }
        return !prev;
      });
    }, [disabled, value]);

    const handlePrevMonth = useCallback(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);

    const handleNextMonth = useCallback(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);

    const handleDaySelect = useCallback(
      (date: Date) => {
        if (selectionStart === null) {
          // First click — set the start
          setSelectionStart(date);
        } else {
          // Second click — finalize the range
          const from =
            selectionStart.getTime() <= date.getTime()
              ? selectionStart
              : date;
          const to =
            selectionStart.getTime() <= date.getTime()
              ? date
              : selectionStart;
          onChange({ from, to });
          setSelectionStart(null);
          setOpen(false);
        }
      },
      [selectionStart, onChange],
    );

    // Build display text
    let displayText: React.ReactNode;
    if (value) {
      displayText = `${formatDate(value.from)} \u2013 ${formatDate(value.to)}`;
    } else {
      displayText = <span style={placeholderStyle}>{placeholder}</span>;
    }

    // The rangeStart/rangeEnd shown in the calendar while selecting
    const calendarStart = selectionStart ?? value?.from ?? null;
    const calendarEnd = selectionStart ? null : value?.to ?? null;

    return (
      <div
        ref={(node) => {
          // Merge forwarded ref and local ref
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        style={{ ...wrapperStyle, ...style }}
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
            <CalendarHeader
              year={viewYear}
              month={viewMonth}
              onPrev={handlePrevMonth}
              onNext={handleNextMonth}
            />
            <CalendarGrid
              year={viewYear}
              month={viewMonth}
              rangeStart={calendarStart}
              rangeEnd={calendarEnd}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
              scopeClass={SCOPE}
              focusedDate={focusedDate}
              onSelect={handleDaySelect}
              onFocusedDateChange={handleFocusedDateChange}
            />
          </div>
        )}
      </div>
    );
  },
);
