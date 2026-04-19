import { forwardRef, useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Calendar } from '../Calendar';
import type { CalendarSelection } from '../Calendar';
import { formatDate, isSameDay } from '../DateRangePicker/dateUtils';
import { useClickOutside } from '../../../utils/useClickOutside';

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

/**
 * Single-date picker. A thin composition over the compound Calendar.*
 * primitives: `<Calendar.Root mode="single">` + `<Calendar.Nav>` +
 * `<Calendar.Header>` + `<Calendar.Grid>`.
 *
 * Public prop API unchanged from 0.2.x: `value`, `onChange`, `minDate`,
 * `maxDate`, `disabledDates`, `placeholder`, `hasError`, `disabled`.
 */
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

    // Click outside to close
    useClickOutside(containerRef, () => setOpen(false), open);

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
      setOpen((o) => !o);
    }, [disabled]);

    const handleSelect = useCallback(
      (v: CalendarSelection) => {
        if (v === undefined) {
          onChange(undefined);
        } else if (v instanceof Date) {
          onChange(v);
        }
        setOpen(false);
      },
      [onChange],
    );

    const disabledDate = useMemo(() => {
      if (!disabledDates || disabledDates.length === 0) return undefined;
      return (d: Date) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);

    // Each time the popover opens, re-seed Calendar.Root's uncontrolled
    // focused/view state to today or the current value by keying the Root.
    const openKey = useMemo(
      () => (open ? `${value?.getTime() ?? 'empty'}-${Date.now()}` : 'closed'),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [open],
    );

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
              key={openKey}
              mode="single"
              selected={value}
              onSelect={handleSelect}
              defaultFocusedDate={value ?? new Date()}
              defaultViewDate={value ?? new Date()}
              minDate={minDate}
              maxDate={maxDate}
              disabledDate={disabledDate}
            >
              <div style={headerRowStyle}>
                <Calendar.Nav direction="prev" />
                <Calendar.Header />
                <Calendar.Nav direction="next" />
              </div>
              <Calendar.Grid onEscape={() => setOpen(false)} />
            </Calendar.Root>
          </div>
        )}
      </div>
    );
  },
);
