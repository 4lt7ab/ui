import { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { ReactNode, SelectHTMLAttributes } from 'react';

/** A single option in the Select dropdown. */
export interface SelectOption {
  /** The value submitted with the form. */
  value: string;
  /** Display text shown in the dropdown. */
  label: string;
  /** Whether this option is disabled. */
  disabled?: boolean;
}

/** A custom dropdown select with viewport-aware positioning. */
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  /** Options to render. Ignored when `children` is provided. */
  options?: SelectOption[];
  /** Custom option/optgroup elements. When provided, `options` is ignored. */
  children?: ReactNode;
  /** Optional placeholder shown as a first disabled option. */
  placeholder?: string;
  /** Renders error border styling. Typically driven by a parent Field.
   * @default false
   */
  hasError?: boolean;
}

// ---------------------------------------------------------------------------
// Injected CSS for hover/focus states
// ---------------------------------------------------------------------------

const SELECT_STYLES_ID = 'alttab-select';

const selectCSS = /* css */ `
  .alttab-select-option {
    display: block;
    width: 100%;
    text-align: left;
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-tight);
    font-family: var(--font-sans);
    color: var(--color-text);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background 0.1s ease;
  }

  .alttab-select-option:hover,
  .alttab-select-option--focused {
    background: var(--color-surface-raised);
  }

  .alttab-select-option--disabled {
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }

  .alttab-select-option--disabled:hover {
    background: transparent;
  }

  .alttab-select-option--selected {
    font-weight: var(--font-weight-semibold);
  }

  .alttab-select-trigger:focus-visible {
    border-color: var(--color-border-focused);
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }
`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract flat option list from the `options` prop. */
function getOptions(options?: SelectOption[]): SelectOption[] {
  return options ?? [];
}

/** Find the label for a value in the options list. */
function findLabel(options: SelectOption[], value: string): string | undefined {
  return options.find((o) => o.value === value)?.label;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const Select: React.ForwardRefExoticComponent<
  Omit<SelectProps, 'ref'> & React.RefAttributes<HTMLSelectElement>
> = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    options,
    children,
    placeholder,
    hasError,
    disabled,
    style,
    value: controlledValue,
    defaultValue,
    onChange,
    name,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...props
  },
  ref,
): React.JSX.Element {
  useInjectStyles(SELECT_STYLES_ID, selectCSS);

  // -- State -----------------------------------------------------------------

  const optionList = getOptions(options);
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [internalValue, setInternalValue] = useState<string>(
    () => (defaultValue as string) ?? '',
  );

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? (controlledValue as string) : internalValue;

  // -- Refs ------------------------------------------------------------------

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hiddenSelectRef = useRef<HTMLSelectElement>(null);
  const [dropDirection, setDropDirection] = useState<'down' | 'up'>('down');

  // Merge hidden select ref with forwarded ref
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(hiddenSelectRef.current);
    } else {
      (ref as React.MutableRefObject<HTMLSelectElement | null>).current =
        hiddenSelectRef.current;
    }
  }, [ref]);

  // -- If children are provided, fall back to native <select> ----------------
  // Custom positioning only works with the `options` prop. When `children`
  // are provided (optgroup, etc.), render the native select as before.

  if (children) {
    return (
      <div style={wrapperStyle}>
        <select
          ref={hiddenSelectRef}
          aria-invalid={hasError || undefined}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          name={name}
          id={id}
          value={controlledValue}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          style={{
            ...triggerBaseStyle,
            ...(hasError ? errorBorderStyle : {}),
            ...(disabled ? disabledStyle : {}),
            ...style,
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <span aria-hidden style={chevronStyle}>
          <ChevronSVG />
        </span>
      </div>
    );
  }

  // -- Dropdown positioning --------------------------------------------------

  const calculateDirection = useCallback((): void => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    // Estimate dropdown height: each option ~32px + padding
    const estimatedHeight = Math.min(optionList.length * 32 + 8, 256);
    setDropDirection(spaceBelow >= estimatedHeight ? 'down' : spaceAbove > spaceBelow ? 'up' : 'down');
  }, [optionList.length]);

  // -- Open/close logic ------------------------------------------------------

  const openMenu = useCallback((): void => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const activeIdx = optionList.findIndex((o) => o.value === currentValue);
    setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
  }, [disabled, calculateDirection, optionList, currentValue]);

  const closeMenu = useCallback((): void => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);

  const selectOption = useCallback(
    (opt: SelectOption): void => {
      if (opt.disabled) return;
      if (!isControlled) {
        setInternalValue(opt.value);
      }
      // Fire onChange with a synthetic-ish event on the hidden select
      if (onChange && hiddenSelectRef.current) {
        const nativeSelect = hiddenSelectRef.current;
        // Set value so the event target has the correct value
        const nativeSetter = Object.getOwnPropertyDescriptor(
          HTMLSelectElement.prototype,
          'value',
        )?.set;
        nativeSetter?.call(nativeSelect, opt.value);
        const event = new Event('change', { bubbles: true });
        nativeSelect.dispatchEvent(event);
      }
      closeMenu();
      triggerRef.current?.focus();
    },
    [isControlled, onChange, closeMenu],
  );

  // -- Close on outside click ------------------------------------------------

  useEffect(() => {
    if (!open) return;
    function handleMouseDown(e: MouseEvent): void {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [open, closeMenu]);

  // -- Scroll focused item into view -----------------------------------------

  useEffect(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: 'nearest' });
  }, [open, focusedIndex]);

  // -- Keyboard navigation ---------------------------------------------------

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeMenu();
        triggerRef.current?.focus();
        return;
      }

      if (!open) {
        if (
          e.key === 'ArrowDown' ||
          e.key === 'ArrowUp' ||
          e.key === 'Enter' ||
          e.key === ' '
        ) {
          e.preventDefault();
          openMenu();
        }
        return;
      }

      const enabledIndices = optionList
        .map((o, i) => (o.disabled ? -1 : i))
        .filter((i) => i >= 0);

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const currentPos = enabledIndices.indexOf(focusedIndex);
          const next =
            currentPos < enabledIndices.length - 1
              ? enabledIndices[currentPos + 1]
              : enabledIndices[0];
          setFocusedIndex(next);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const currentPos = enabledIndices.indexOf(focusedIndex);
          const prev =
            currentPos > 0
              ? enabledIndices[currentPos - 1]
              : enabledIndices[enabledIndices.length - 1];
          setFocusedIndex(prev);
          break;
        }
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < optionList.length) {
            selectOption(optionList[focusedIndex]);
          }
          break;
        case 'Home':
          e.preventDefault();
          if (enabledIndices.length > 0) setFocusedIndex(enabledIndices[0]);
          break;
        case 'End':
          e.preventDefault();
          if (enabledIndices.length > 0)
            setFocusedIndex(enabledIndices[enabledIndices.length - 1]);
          break;
        case 'Tab':
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedIndex, optionList, selectOption],
  );

  // -- Derived display values ------------------------------------------------

  const displayLabel = findLabel(optionList, currentValue);
  const showPlaceholder = !displayLabel && !!placeholder;
  const listboxId = id ? `${id}-listbox` : undefined;

  // -- Dropdown menu style ---------------------------------------------------

  const menuStyle: React.CSSProperties =
    dropDirection === 'down'
      ? {
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: t.spaceXs,
        }
      : {
          position: 'absolute',
          bottom: '100%',
          left: 0,
          right: 0,
          marginBottom: t.spaceXs,
        };

  // -- Render ----------------------------------------------------------------

  return (
    <div ref={containerRef} style={wrapperStyle} onKeyDown={handleKeyDown}>
      {/* Hidden native select for form submission and ref compatibility */}
      <select
        ref={hiddenSelectRef}
        name={name}
        value={currentValue}
        onChange={() => {
          /* noop -- controlled by custom UI */
        }}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        }}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {optionList.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom trigger button */}
      <button
        ref={triggerRef}
        type="button"
        className="alttab-select-trigger"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-invalid={hasError || undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-activedescendant={
          open && focusedIndex >= 0
            ? `alttab-select-opt-${optionList[focusedIndex]?.value}`
            : undefined
        }
        disabled={disabled}
        onClick={() => (open ? closeMenu() : openMenu())}
        style={{
          ...triggerBaseStyle,
          ...(hasError ? errorBorderStyle : {}),
          ...(disabled ? disabledStyle : {}),
          ...(showPlaceholder ? placeholderStyle : {}),
          ...style,
        }}
      >
        {displayLabel ?? placeholder ?? '\u00A0'}
      </button>

      {/* Chevron icon */}
      <span aria-hidden style={chevronStyle}>
        <ChevronSVG rotated={open} />
      </span>

      {/* Dropdown listbox */}
      {open && (
        <div
          ref={menuRef}
          id={listboxId}
          role="listbox"
          style={{
            ...menuStyle,
            background: t.colorSurfacePanel,
            border: `1px solid ${t.colorBorder}`,
            borderRadius: t.radiusMd,
            padding: t.spaceXs,
            zIndex: 100,
            boxShadow: t.shadowMd,
            maxHeight: '16rem',
            overflowY: 'auto',
            boxSizing: 'border-box',
          }}
        >
          {optionList.map((opt, idx) => {
            const isSelected = opt.value === currentValue;
            const isFocused = focusedIndex === idx;
            const classes = [
              'alttab-select-option',
              isSelected ? 'alttab-select-option--selected' : '',
              isFocused ? 'alttab-select-option--focused' : '',
              opt.disabled ? 'alttab-select-option--disabled' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={opt.value}
                id={`alttab-select-opt-${opt.value}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                aria-disabled={opt.disabled || undefined}
                className={classes}
                onClick={() => selectOption(opt)}
                onMouseEnter={() => {
                  if (!opt.disabled) setFocusedIndex(idx);
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
});

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const wrapperStyle: React.CSSProperties = {
  position: 'relative',
  display: 'block',
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
  border: `1px solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  outline: 'none',
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
  boxSizing: 'border-box' as const,
  cursor: 'pointer',
  textAlign: 'left' as const,
  // Space for custom chevron
  paddingRight: t.space2xl,
};

const chevronStyle: React.CSSProperties = {
  position: 'absolute',
  right: t.spaceSm,
  top: t.spaceSm,
  pointerEvents: 'none',
  color: t.colorTextSecondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(${t.fontSizeSm} * ${t.lineHeightTight})`,
};

const errorBorderStyle: React.CSSProperties = {
  borderColor: t.colorBorderError,
};

const disabledStyle: React.CSSProperties = {
  background: t.colorSurfaceDisabled,
  color: t.colorTextDisabled,
  cursor: 'not-allowed',
};

const placeholderStyle: React.CSSProperties = {
  color: t.colorTextPlaceholder,
};

// ---------------------------------------------------------------------------
// Chevron SVG sub-component
// ---------------------------------------------------------------------------

function ChevronSVG({ rotated }: { rotated?: boolean }): React.JSX.Element {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: 'transform 150ms ease',
        transform: rotated ? 'rotate(180deg)' : 'none',
      }}
    >
      <path
        d="M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L6 9.31 2.22 5.53a.75.75 0 0 1 0-1.06z"
        fill="currentColor"
      />
    </svg>
  );
}
