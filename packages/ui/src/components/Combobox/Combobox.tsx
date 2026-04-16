import { forwardRef, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';

/** A single option in the Combobox dropdown. */
export interface ComboboxOption {
  /** The value submitted when the option is selected. */
  value: string;
  /** Display text shown in the dropdown and used for filtering. */
  label: string;
}

/** A typeahead select that combines free-text input with a filterable dropdown. */
export interface ComboboxProps {
  /** Options to render in the dropdown. */
  options: ComboboxOption[];
  /** Current input value. */
  value: string;
  /** Called on input change AND option selection. */
  onChange: (value: string) => void;
  /** Called specifically when an option is selected from the list. */
  onSelect?: (option: ComboboxOption) => void;
  /** Input placeholder text. */
  placeholder?: string;
  /** Whether the combobox is disabled. */
  disabled?: boolean;
  /** Renders error border styling. Typically driven by a parent Field.
   * @default false
   */
  hasError?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  maxLength?: number;
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  name?: string;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  id?: string;
  form?: string;
  tabIndex?: number;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'data-testid'?: string;
}

// ---------------------------------------------------------------------------
// Injected CSS for hover/focus states
// ---------------------------------------------------------------------------

const COMBOBOX_STYLES_ID = 'alttab-combobox';

const comboboxCSS = /* css */ `
  .alttab-combobox-option {
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

  .alttab-combobox-option:hover,
  .alttab-combobox-option--focused {
    background: var(--color-surface-raised);
  }

  .alttab-combobox-input:focus-visible {
    border-color: var(--color-border-focused);
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }

  @media (prefers-reduced-motion: reduce) {
    .alttab-combobox-option,
    .alttab-combobox-input {
      transition: none;
    }
  }
`;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const Combobox: React.ForwardRefExoticComponent<
  Omit<ComboboxProps, 'ref'> & React.RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, ComboboxProps>(function Combobox(
  {
    options,
    value,
    onChange,
    onSelect,
    placeholder,
    disabled,
    hasError,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onKeyDown: onKeyDownProp,
    readOnly,
    maxLength,
    inputMode,
    name,
    required,
    autoFocus,
    autoComplete,
    id,
    form,
    tabIndex,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'data-testid': dataTestId,
  },
  ref,
): React.JSX.Element {
  useInjectStyles(COMBOBOX_STYLES_ID, comboboxCSS);

  // -- State -----------------------------------------------------------------

  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [dropDirection, setDropDirection] = useState<'down' | 'up'>('down');

  // -- Refs ------------------------------------------------------------------

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Merge refs
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(inputRef.current);
    } else {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current =
        inputRef.current;
    }
  }, [ref]);

  // -- Filtered options -------------------------------------------------------

  const filtered = useMemo((): ComboboxOption[] => {
    if (!value) return options;
    const lower = value.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(lower));
  }, [options, value]);

  // -- Dropdown positioning ---------------------------------------------------

  const calculateDirection = useCallback((): void => {
    const input = inputRef.current;
    if (!input) return;
    const rect = input.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(filtered.length * 32 + 8, 256);
    setDropDirection(
      spaceBelow >= estimatedHeight
        ? 'down'
        : spaceAbove > spaceBelow
          ? 'up'
          : 'down',
    );
  }, [filtered.length]);

  // -- Open/close logic -------------------------------------------------------

  const openMenu = useCallback((): void => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    setFocusedIndex(-1);
  }, [disabled, calculateDirection]);

  const closeMenu = useCallback((): void => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);

  const selectOption = useCallback(
    (opt: ComboboxOption): void => {
      onChange(opt.value);
      onSelect?.(opt);
      closeMenu();
      inputRef.current?.focus();
    },
    [onChange, onSelect, closeMenu],
  );

  // -- Close on outside click -------------------------------------------------

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

  // -- Scroll focused item into view ------------------------------------------

  useEffect(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: 'nearest' });
  }, [open, focusedIndex]);

  // -- Keyboard navigation ----------------------------------------------------

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeMenu();
        inputRef.current?.focus();
        return;
      }

      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          openMenu();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev < filtered.length - 1 ? prev + 1 : 0,
          );
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : filtered.length - 1,
          );
          break;
        }
        case 'Enter':
          if (focusedIndex >= 0 && focusedIndex < filtered.length) {
            e.preventDefault();
            selectOption(filtered[focusedIndex]);
          }
          break;
        case 'Home':
          e.preventDefault();
          if (filtered.length > 0) setFocusedIndex(0);
          break;
        case 'End':
          e.preventDefault();
          if (filtered.length > 0) setFocusedIndex(filtered.length - 1);
          break;
        case 'Tab':
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedIndex, filtered, selectOption],
  );

  // -- Input change handler ---------------------------------------------------

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.value);
      if (!open) {
        openMenu();
      }
      setFocusedIndex(-1);
    },
    [onChange, open, openMenu],
  );

  // -- Derived values ---------------------------------------------------------

  const listboxId = id ? `${id}-listbox` : 'alttab-combobox-listbox';
  const activedescendant =
    open && focusedIndex >= 0
      ? `alttab-combobox-opt-${filtered[focusedIndex]?.value}`
      : undefined;

  // -- Dropdown menu style ----------------------------------------------------

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

  // -- Render -----------------------------------------------------------------

  return (
    <div
      ref={containerRef}
      style={wrapperStyle}
      onKeyDown={handleKeyDown}
    >
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        className="alttab-combobox-input"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-activedescendant={activedescendant}
        aria-autocomplete="list"
        aria-invalid={ariaInvalid ?? (hasError || undefined)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        autoComplete={autoComplete ?? 'off'}
        id={id}
        form={form}
        name={name}
        tabIndex={tabIndex}
        readOnly={readOnly}
        maxLength={maxLength}
        inputMode={inputMode}
        required={required}
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={onBlurProp}
        onFocus={(e) => {
          if (!disabled && filtered.length > 0) openMenu();
          onFocusProp?.(e);
        }}
        data-testid={dataTestId}
        style={{
          ...inputBaseStyle,
          ...(hasError ? errorBorderStyle : {}),
          ...(disabled ? disabledStyle : {}),
        }}
      />

      {/* Dropdown listbox */}
      {open && filtered.length > 0 && (
        <div
          ref={menuRef}
          id={listboxId}
          role="listbox"
          style={{
            ...menuStyle,
            background: t.colorSurfacePanel,
            border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
            borderRadius: t.radiusMd,
            padding: t.spaceXs,
            zIndex: t.zIndexSticky,
            boxShadow: t.shadowMd,
            maxHeight: '16rem',
            overflowY: 'auto',
            boxSizing: 'border-box',
          }}
        >
          {filtered.map((opt, idx) => {
            const isFocused = focusedIndex === idx;
            const isMatch = opt.value === value;
            const classes = [
              'alttab-combobox-option',
              isFocused ? 'alttab-combobox-option--focused' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={opt.value}
                id={`alttab-combobox-opt-${opt.value}`}
                type="button"
                role="option"
                aria-selected={isMatch}
                className={classes}
                onClick={() => selectOption(opt)}
                onMouseEnter={() => setFocusedIndex(idx)}
                style={
                  isMatch
                    ? { fontWeight: t.fontWeightSemibold }
                    : undefined
                }
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

const inputBaseStyle: React.CSSProperties = {
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
};

const errorBorderStyle: React.CSSProperties = {
  borderColor: t.colorBorderError,
};

const disabledStyle: React.CSSProperties = {
  background: t.colorSurfaceDisabled,
  color: t.colorTextDisabled,
  cursor: 'not-allowed',
};
