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
// Context
// ---------------------------------------------------------------------------

interface RegisteredItem {
  value: string;
  label: string;
  disabled: boolean;
}

interface SelectContextValue {
  value: string;
  setValue: (v: string, fromUser: boolean) => void;
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  disabled: boolean;
  hasError: boolean;
  focusedValue: string | null;
  setFocusedValue: (v: string | null) => void;
  items: RegisteredItem[];
  registerItem: (item: RegisteredItem) => void;
  unregisterItem: (value: string) => void;
  listboxId: string;
  instanceId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  dropDirection: 'down' | 'up';
  selectItem: (value: string) => void;
}

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext(part: string): SelectContextValue {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error(
      `Select.${part} must be rendered inside <Select.Root>. See the upgrade guide for the 0.4.0 compound API.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Select.Root
// ---------------------------------------------------------------------------

export interface SelectRootProps {
  /** The current selected value (controlled). */
  value?: string;
  /** Initial value for uncontrolled usage. */
  defaultValue?: string;
  /** Called when the user selects a new value. */
  onValueChange?: (value: string) => void;
  /** Legacy change handler shape — fires with a synthetic event whose target.value is the new value. Prefer onValueChange. */
  onChange?: (event: { target: { value: string; name?: string } }) => void;
  /** When true, disables the trigger and blocks opening. */
  disabled?: boolean;
  /** When true, applies error border styling. Typically driven by a parent Field. */
  hasError?: boolean;
  /** Form field name. A hidden native <select> is rendered so the value submits with the surrounding form. */
  name?: string;
  /** Marks the hidden native select as required. */
  required?: boolean;
  /** DOM id for the hidden native select (used by a wrapping <Field>'s htmlFor). */
  id?: string;
  /** Form id for the hidden native select. */
  form?: string;
  /** Subtree containing Trigger + Content. */
  children: ReactNode;
}

function Root({
  value: controlledValue,
  defaultValue,
  onValueChange,
  onChange,
  disabled = false,
  hasError = false,
  name,
  required,
  id,
  form,
  children,
}: SelectRootProps): React.JSX.Element {
  useInjectStyles(SELECT_STYLES_ID, selectCSS);

  const instanceId = useId();
  const listboxId = `${instanceId}-listbox`;

  const [internalValue, setInternalValue] = useState<string>(defaultValue ?? '');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const [open, setOpen] = useState(false);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [dropDirection, setDropDirection] = useState<'down' | 'up'>('down');

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Registered items — Items self-register on mount, in DOM order.
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

  // Value setter — internal for both user-driven selection and programmatic syncs.
  const setValue = useCallback(
    (next: string, fromUser: boolean): void => {
      if (!isControlled) setInternalValue(next);
      if (fromUser) {
        onValueChange?.(next);
        onChange?.({ target: { value: next, name } });
      }
    },
    [isControlled, onValueChange, onChange, name],
  );

  // Viewport-aware drop direction — estimated height from registered items.
  const calculateDirection = useCallback((): void => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
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
    // Focus the current value if present, otherwise the first enabled item.
    const current = items.find((i) => i.value === value && !i.disabled);
    const firstEnabled = items.find((i) => !i.disabled);
    setFocusedValue((current ?? firstEnabled)?.value ?? null);
  }, [disabled, calculateDirection, items, value]);

  const closeMenu = useCallback((): void => {
    setOpen(false);
    setFocusedValue(null);
  }, []);

  const toggleMenu = useCallback((): void => {
    if (open) closeMenu();
    else openMenu();
  }, [open, openMenu, closeMenu]);

  const selectItem = useCallback(
    (itemValue: string): void => {
      const item = items.find((i) => i.value === itemValue);
      if (!item || item.disabled) return;
      setValue(item.value, true);
      closeMenu();
      triggerRef.current?.focus();
    },
    [items, setValue, closeMenu],
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

  // Keyboard navigation — attached to the wrapper so Trigger + Content both route keys through here.
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      if (e.key === 'Escape') {
        if (open) {
          e.preventDefault();
          closeMenu();
          triggerRef.current?.focus();
        }
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

      const enabled = items.filter((i) => !i.disabled);
      if (enabled.length === 0) return;
      const currentIdx = focusedValue
        ? enabled.findIndex((i) => i.value === focusedValue)
        : -1;

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const next =
            currentIdx < enabled.length - 1 && currentIdx >= 0
              ? enabled[currentIdx + 1]
              : enabled[0];
          setFocusedValue(next.value);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const prev =
            currentIdx > 0
              ? enabled[currentIdx - 1]
              : enabled[enabled.length - 1];
          setFocusedValue(prev.value);
          break;
        }
        case 'Home':
          e.preventDefault();
          setFocusedValue(enabled[0].value);
          break;
        case 'End':
          e.preventDefault();
          setFocusedValue(enabled[enabled.length - 1].value);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (focusedValue) selectItem(focusedValue);
          break;
        case 'Tab':
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedValue, items, selectItem],
  );

  const ctx = useMemo<SelectContextValue>(
    () => ({
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      toggleMenu,
      disabled,
      hasError,
      focusedValue,
      setFocusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      triggerRef,
      dropDirection,
      selectItem,
    }),
    [
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      toggleMenu,
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

  return (
    <SelectContext.Provider value={ctx}>
      <div
        ref={containerRef}
        style={wrapperStyle}
        onKeyDown={handleKeyDown}
      >
        {/* Hidden native select for form submission. */}
        <select
          name={name}
          id={id}
          form={form}
          required={required}
          disabled={disabled}
          value={value}
          onChange={() => {
            /* noop -- controlled by custom UI */
          }}
          tabIndex={-1}
          aria-hidden
          style={hiddenSelectStyle}
        >
          {/* Always emit an empty option so an un-selected state is submittable. */}
          <option value="" />
          {items.map((item) => (
            <option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </option>
          ))}
        </select>

        {children}
      </div>
    </SelectContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Select.Trigger
// ---------------------------------------------------------------------------

export interface SelectTriggerProps {
  /** Usually `<Select.Value placeholder="…" />`. Any ReactNode works. */
  children: ReactNode;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
  tabIndex?: number;
}

function Trigger({
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'data-testid': dataTestId,
  tabIndex,
}: SelectTriggerProps): React.JSX.Element {
  const ctx = useSelectContext('Trigger');
  const {
    open,
    toggleMenu,
    disabled,
    hasError,
    focusedValue,
    items,
    listboxId,
    instanceId,
    triggerRef,
  } = ctx;

  const activeDescendant =
    open && focusedValue
      ? `${instanceId}-opt-${focusedValue}`
      : undefined;
  // A trigger is "empty" (showing placeholder) when no item matches the current value.
  const hasSelection = items.some((i) => i.value === ctx.value);

  return (
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
      aria-describedby={ariaDescribedBy}
      aria-activedescendant={activeDescendant}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={toggleMenu}
      data-testid={dataTestId}
      style={{
        ...triggerBaseStyle,
        ...(hasError ? errorBorderStyle : {}),
        ...(disabled ? disabledStyle : {}),
        ...(hasSelection ? {} : placeholderStyle),
      }}
    >
      <span style={triggerTextStyle}>{children}</span>
      <span aria-hidden style={chevronStyle}>
        <ChevronSVG rotated={open} />
      </span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Select.Value
// ---------------------------------------------------------------------------

export interface SelectValueProps {
  /** Shown when no value is selected. */
  placeholder?: string;
}

function Value({ placeholder }: SelectValueProps): React.JSX.Element {
  const { value, items } = useSelectContext('Value');
  const selected = items.find((i) => i.value === value);
  // Render NBSP when nothing to show so the trigger keeps its line height.
  return <>{selected?.label ?? placeholder ?? '\u00A0'}</>;
}

// ---------------------------------------------------------------------------
// Select.Content
// ---------------------------------------------------------------------------

export interface SelectContentProps {
  children: ReactNode;
}

function Content({ children }: SelectContentProps): React.JSX.Element {
  const { open, listboxId, dropDirection, focusedValue } =
    useSelectContext('Content');
  const ref = useRef<HTMLDivElement>(null);

  // Scroll focused item into view when keyboard nav moves.
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

  // Always render — Items register with Root on mount, and must stay
  // registered across open/close so the first keyboard open knows the
  // item list. The `hidden` attribute removes the listbox from the
  // accessibility tree when closed.
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
// Select.Item
// ---------------------------------------------------------------------------

export interface SelectItemProps {
  /** The value submitted when this item is selected. */
  value: string;
  /** When true, the item is unselectable and skipped by keyboard nav. */
  disabled?: boolean;
  /**
   * Optional explicit string label for registration (used by Select.Value
   * and the hidden native <option>). Defaults to `children` when `children`
   * is a string.
   */
  textValue?: string;
  /** Display content. Usually the label string. */
  children: ReactNode;
}

function Item({
  value,
  disabled = false,
  textValue,
  children,
}: SelectItemProps): React.JSX.Element {
  const ctx = useSelectContext('Item');
  const {
    value: selectedValue,
    focusedValue,
    setFocusedValue,
    selectItem,
    registerItem,
    unregisterItem,
    instanceId,
  } = ctx;

  const resolvedLabel =
    textValue ?? (typeof children === 'string' ? children : value);

  // Register with Root on mount, update on label/disabled change, unregister on unmount.
  useEffect(() => {
    registerItem({ value, label: resolvedLabel, disabled });
    return () => unregisterItem(value);
  }, [value, resolvedLabel, disabled, registerItem, unregisterItem]);

  const isSelected = selectedValue === value;
  const isFocused = focusedValue === value;
  const classes = [
    'alttab-select-option',
    isSelected ? 'alttab-select-option--selected' : '',
    isFocused ? 'alttab-select-option--focused' : '',
    disabled ? 'alttab-select-option--disabled' : '',
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
      aria-disabled={disabled || undefined}
      className={classes}
      onClick={() => selectItem(value)}
      onMouseEnter={() => {
        if (!disabled) setFocusedValue(value);
      }}
    >
      {children}
    </button>
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

const hiddenSelectStyle: React.CSSProperties = {
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
};

const triggerBaseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: t.spaceSm,
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

const triggerTextStyle: React.CSSProperties = {
  flex: '1 1 auto',
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const chevronStyle: React.CSSProperties = {
  flex: '0 0 auto',
  pointerEvents: 'none',
  color: t.colorTextSecondary,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
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
// Chevron SVG
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
        transition: `transform ${t.transitionBase}`,
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

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Compound Select. Use as:
 *
 * ```tsx
 * <Select.Root value={v} onValueChange={setV}>
 *   <Select.Trigger aria-label="Role">
 *     <Select.Value placeholder="Pick one..." />
 *   </Select.Trigger>
 *   <Select.Content>
 *     <Select.Item value="admin">Admin</Select.Item>
 *     <Select.Item value="viewer" disabled>Viewer</Select.Item>
 *   </Select.Content>
 * </Select.Root>
 * ```
 *
 * Form submission: `<Select.Root name="role">` renders a hidden native
 * `<select>` so the value participates in native form submission.
 */
export const Select = {
  Root,
  Trigger,
  Value,
  Content,
  Item,
};
