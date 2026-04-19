import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';

// ---------------------------------------------------------------------------
// Injected CSS
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

  .alttab-combobox-option--selected {
    font-weight: var(--font-weight-semibold);
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
// Context
// ---------------------------------------------------------------------------

interface RegisteredItem {
  value: string;
  textValue: string;
}

interface ComboboxContextValue {
  value: string;
  setValue: (v: string) => void;
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  disabled: boolean;
  hasError: boolean;
  focusedValue: string | null;
  setFocusedValue: (v: string | null) => void;
  items: RegisteredItem[];
  registerItem: (item: RegisteredItem) => void;
  unregisterItem: (value: string) => void;
  listboxId: string;
  instanceId: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  dropDirection: 'down' | 'up';
  selectItem: (value: string) => void;
}

const ComboboxContext = createContext<ComboboxContextValue | null>(null);

function useComboboxContext(part: string): ComboboxContextValue {
  const ctx = useContext(ComboboxContext);
  if (!ctx) {
    throw new Error(
      `Combobox.${part} must be rendered inside <Combobox.Root>. See the upgrade guide for the 0.4.0 compound API.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Combobox.Root
// ---------------------------------------------------------------------------

export interface ComboboxRootProps {
  /** Controlled input value (text). */
  value?: string;
  /** Initial input value for uncontrolled usage. */
  defaultValue?: string;
  /** Called on every input change — both free-text typing and option selection. */
  onValueChange?: (value: string) => void;
  /** Called specifically when an option is selected from the list. */
  onSelect?: (option: { value: string; textValue: string }) => void;
  /** When true, disables the input and blocks opening. */
  disabled?: boolean;
  /** When true, applies error border styling. Typically driven by a parent Field. */
  hasError?: boolean;
  /** Subtree containing Input and List. */
  children: ReactNode;
}

function Root({
  value: controlledValue,
  defaultValue,
  onValueChange,
  onSelect,
  disabled = false,
  hasError = false,
  children,
}: ComboboxRootProps): React.JSX.Element {
  useInjectStyles(COMBOBOX_STYLES_ID, comboboxCSS);

  const instanceId = useId();
  const listboxId = `${instanceId}-listbox`;

  const [internalValue, setInternalValue] = useState<string>(defaultValue ?? '');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const [open, setOpen] = useState(false);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [dropDirection, setDropDirection] = useState<'down' | 'up'>('down');

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Suppresses the next openMenu() triggered by onFocus after a click
  // selection refocuses the input. Without this, the APG pattern breaks —
  // menu would flash closed and immediately reopen.
  const suppressNextOpenRef = useRef(false);

  const [items, setItems] = useState<RegisteredItem[]>([]);
  const registerItem = useCallback((item: RegisteredItem): void => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => (p.value === item.value ? item : p));
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = useCallback((itemValue: string): void => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);

  const setValue = useCallback(
    (next: string): void => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const calculateDirection = useCallback((): void => {
    const input = inputRef.current;
    if (!input) return;
    const rect = input.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(items.length * 32 + 8, 256);
    setDropDirection(
      spaceBelow >= estimatedHeight
        ? 'down'
        : spaceAbove > spaceBelow
          ? 'up'
          : 'down',
    );
  }, [items.length]);

  const openMenu = useCallback((): void => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    // Combobox APG: do NOT pre-focus any option on open — focus stays on
    // the input, keyboard moves it explicitly.
    setFocusedValue(null);
  }, [disabled, calculateDirection]);

  const closeMenu = useCallback((): void => {
    setOpen(false);
    setFocusedValue(null);
  }, []);

  const selectItem = useCallback(
    (itemValue: string): void => {
      const item = items.find((i) => i.value === itemValue);
      if (!item) return;
      setValue(item.textValue);
      onSelect?.(item);
      closeMenu();
      // Refocus the input (click moved focus to the option button). Mark
      // the next onFocus as a no-op so the menu doesn't flash reopen.
      if (inputRef.current && document.activeElement !== inputRef.current) {
        suppressNextOpenRef.current = true;
        inputRef.current.focus();
      }
    },
    [items, setValue, onSelect, closeMenu],
  );

  // Close on outside mousedown.
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

  // Keyboard — attached to the wrapper. APG Combobox pattern: focus stays on
  // the input, options receive focus visually only via aria-activedescendant.
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      if (e.key === 'Escape') {
        if (open) {
          e.preventDefault();
          closeMenu();
        }
        return;
      }

      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          openMenu();
        }
        return;
      }

      if (items.length === 0) return;
      const currentIdx = focusedValue
        ? items.findIndex((i) => i.value === focusedValue)
        : -1;

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const next =
            currentIdx < 0 || currentIdx === items.length - 1
              ? items[0]
              : items[currentIdx + 1];
          setFocusedValue(next.value);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const prev =
            currentIdx < 0
              ? items[items.length - 1]
              : currentIdx === 0
                ? items[items.length - 1]
                : items[currentIdx - 1];
          setFocusedValue(prev.value);
          break;
        }
        case 'Home':
          e.preventDefault();
          setFocusedValue(items[0].value);
          break;
        case 'End':
          e.preventDefault();
          setFocusedValue(items[items.length - 1].value);
          break;
        case 'Enter':
          if (focusedValue) {
            e.preventDefault();
            selectItem(focusedValue);
          }
          break;
        case 'Tab':
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedValue, items, selectItem],
  );

  // Expose the suppress ref via context surrogate — Input reads it.
  // We keep it here (not in context) because it's a transient flag, not state.
  // Input accesses it through a small attached property.
  (suppressNextOpenRef as unknown as { __combobox_shared: boolean }).__combobox_shared = true;

  const ctx = useMemo<ComboboxContextValue>(
    () => ({
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      disabled,
      hasError,
      focusedValue,
      setFocusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      inputRef,
      dropDirection,
      selectItem,
    }),
    [
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      disabled,
      hasError,
      focusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      dropDirection,
      selectItem,
    ],
  );

  // Attach the suppress ref on the context object so Input can read it
  // without a separate provider. Using a symbol-y private key.
  (ctx as unknown as { __suppressNextOpen: React.RefObject<boolean> }).__suppressNextOpen =
    suppressNextOpenRef;

  return (
    <ComboboxContext.Provider value={ctx}>
      <div ref={containerRef} style={wrapperStyle} onKeyDown={handleKeyDown}>
        {children}
      </div>
    </ComboboxContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Combobox.Input
// ---------------------------------------------------------------------------

export interface ComboboxInputProps {
  placeholder?: string;
  readOnly?: boolean;
  maxLength?: number;
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
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
  'data-testid'?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function Input({
  placeholder,
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
  'data-testid': dataTestId,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
}: ComboboxInputProps): React.JSX.Element {
  const ctx = useComboboxContext('Input');
  const {
    value,
    setValue,
    open,
    openMenu,
    disabled,
    hasError,
    focusedValue,
    instanceId,
    items,
    listboxId,
    inputRef,
  } = ctx;
  const suppressNextOpenRef = (
    ctx as unknown as { __suppressNextOpen: React.MutableRefObject<boolean> }
  ).__suppressNextOpen;

  const activedescendant =
    open && focusedValue ? `${instanceId}-opt-${focusedValue}` : undefined;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
      if (!open) openMenu();
    },
    [setValue, open, openMenu],
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>): void => {
      if (suppressNextOpenRef.current) {
        suppressNextOpenRef.current = false;
      } else if (!disabled && items.length > 0) {
        openMenu();
      }
      onFocusProp?.(e);
    },
    [disabled, items.length, openMenu, onFocusProp, suppressNextOpenRef],
  );

  return (
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
      aria-invalid={hasError || undefined}
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
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={onBlurProp}
      data-testid={dataTestId}
      style={{
        ...inputBaseStyle,
        ...(hasError ? errorBorderStyle : {}),
        ...(disabled ? disabledStyle : {}),
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Combobox.List
// ---------------------------------------------------------------------------

export interface ComboboxListProps {
  children: ReactNode;
}

function List({ children }: ComboboxListProps): React.JSX.Element {
  const { open, listboxId, dropDirection, focusedValue } =
    useComboboxContext('List');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !focusedValue) return;
    const menu = ref.current;
    if (!menu) return;
    const focused = menu.querySelector<HTMLElement>(
      `[data-value="${CSS.escape(focusedValue)}"]`,
    );
    focused?.scrollIntoView({ block: 'nearest' });
  }, [open, focusedValue]);

  const positionStyle: React.CSSProperties =
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

  // Always render so Items register on mount. Hidden when closed.
  return (
    <div
      ref={ref}
      id={listboxId}
      role="listbox"
      hidden={!open}
      style={
        open
          ? {
              ...positionStyle,
              background: t.colorSurfacePanel,
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              borderRadius: t.radiusMd,
              padding: t.spaceXs,
              zIndex: t.zIndexSticky,
              boxShadow: t.shadowMd,
              maxHeight: '16rem',
              overflowY: 'auto',
              boxSizing: 'border-box',
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Combobox.Item
// ---------------------------------------------------------------------------

export interface ComboboxItemProps {
  /** The value of the option — passed to onSelect when picked. */
  value: string;
  /**
   * Text written into the input when this item is selected. Defaults to
   * `children` when `children` is a string.
   */
  textValue?: string;
  children: ReactNode;
}

function Item({
  value,
  textValue,
  children,
}: ComboboxItemProps): React.JSX.Element {
  const {
    value: inputValue,
    focusedValue,
    setFocusedValue,
    selectItem,
    registerItem,
    unregisterItem,
    instanceId,
  } = useComboboxContext('Item');

  const resolvedText =
    textValue ?? (typeof children === 'string' ? children : value);

  useEffect(() => {
    registerItem({ value, textValue: resolvedText });
    return () => unregisterItem(value);
  }, [value, resolvedText, registerItem, unregisterItem]);

  const isFocused = focusedValue === value;
  // "Selected" means the input text currently equals this item's textValue.
  // That's the same rule the flat API used (opt.value === value, given the
  // consumer's value was the option's value after selection).
  const isSelected = inputValue === resolvedText;

  const classes = [
    'alttab-combobox-option',
    isFocused ? 'alttab-combobox-option--focused' : '',
    isSelected ? 'alttab-combobox-option--selected' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      role="option"
      id={`${instanceId}-opt-${value}`}
      data-value={value}
      aria-selected={isSelected}
      className={classes}
      onClick={() => selectItem(value)}
      onMouseEnter={() => setFocusedValue(value)}
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Combobox.Empty
// ---------------------------------------------------------------------------

export interface ComboboxEmptyProps {
  children: ReactNode;
}

function Empty({ children }: ComboboxEmptyProps): React.JSX.Element {
  return (
    <div
      role="presentation"
      style={{
        padding: `${t.spaceXs} ${t.spaceSm}`,
        fontSize: t.fontSizeSm,
        color: t.colorTextMuted,
        fontFamily: t.fontSans,
      }}
    >
      {children}
    </div>
  );
}

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

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Compound Combobox — typeahead select with free-text input. Consumer owns
 * filtering (render whichever `Combobox.Item` children match the current
 * input value).
 *
 * ```tsx
 * const [value, setValue] = useState('');
 * const filtered = options.filter(o =>
 *   o.label.toLowerCase().includes(value.toLowerCase())
 * );
 *
 * <Combobox.Root value={value} onValueChange={setValue} onSelect={(opt) => ...}>
 *   <Combobox.Input placeholder="Search..." aria-label="Fruit" />
 *   <Combobox.List>
 *     {filtered.length === 0 && <Combobox.Empty>No results</Combobox.Empty>}
 *     {filtered.map(o => (
 *       <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
 *         {o.label}
 *       </Combobox.Item>
 *     ))}
 *   </Combobox.List>
 * </Combobox.Root>
 * ```
 */
export const Combobox = {
  Root,
  Input,
  List,
  Item,
  Empty,
};
