import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Calendar } from '../Calendar';
import { CalendarGrid } from '../DateRangePicker/CalendarGrid';
import { formatDate } from '../DateRangePicker/dateUtils';

/** Props for the DatePicker component. */
export interface DatePickerProps {
  /** Currently selected date. */
  value?: Date;
  /** Called when a date is selected (or cleared). */
  onChange: (date: Date | undefined) => void;
  /** Earliest selectable date. */
  minDate?: Date;
  /** Latest selectable date. */
  maxDate?: Date;
  /** Specific dates that cannot be selected. */
  disabledDates?: Date[];
  /** Placeholder text when no date is selected. */
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

const SCOPE = 'alttab-dp';

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

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${t.spaceXs} 0`,
};

export const DatePicker: React.ForwardRefExoticComponent<
  Omit<DatePickerProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePicker(
    {
      value,
      onChange,
      minDate,
      maxDate,
      disabledDates,
      placeholder = 'Select date',
      hasError,
      disabled,
    },
    ref,
  ): React.JSX.Element {
    useInjectStyles(SCOPE, injectedCSS);

    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Calendar view state (first-of-month of the currently visible page)
    const initialDate = value ?? new Date();
    const [viewDate, setViewDate] = useState<Date>(
      () => new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
    );

    // Focused date for keyboard nav
    const [focusedDate, setFocusedDate] = useState(value ?? new Date());

    const handleFocusedDateChange = useCallback((date: Date) => {
      setFocusedDate(date);
      setViewDate(new Date(date.getFullYear(), date.getMonth(), 1));
    }, []);

    // Focus the active day button when focused date changes
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
        }
      }
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }, [open]);

    const handleToggle = useCallback(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) {
          const base = value ?? new Date();
          setViewDate(new Date(base.getFullYear(), base.getMonth(), 1));
          setFocusedDate(value ?? new Date());
        }
        return !prev;
      });
    }, [disabled, value]);

    const handleDaySelect = useCallback(
      (date: Date) => {
        onChange(date);
        setOpen(false);
      },
      [onChange],
    );

    // Display text
    let displayText: React.ReactNode;
    if (value) {
      displayText = formatDate(value);
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
          <div style={popoverStyle} role="dialog" aria-label="Date picker">
            <Calendar.Root
              mode="single"
              selected={value}
              viewDate={viewDate}
              onViewDateChange={setViewDate}
              focusedDate={focusedDate}
              onFocusedDateChange={setFocusedDate}
              minDate={minDate}
              maxDate={maxDate}
            >
              <div style={headerRowStyle}>
                <Calendar.Nav direction="prev" />
                <Calendar.Header />
                <Calendar.Nav direction="next" />
              </div>
              <CalendarGrid
                year={viewDate.getFullYear()}
                month={viewDate.getMonth()}
                rangeStart={value ?? null}
                rangeEnd={null}
                minDate={minDate}
                maxDate={maxDate}
                disabledDates={disabledDates}
                scopeClass={SCOPE}
                focusedDate={focusedDate}
                onSelect={handleDaySelect}
                onFocusedDateChange={handleFocusedDateChange}
              />
            </Calendar.Root>
          </div>
        )}
      </div>
    );
  },
);
