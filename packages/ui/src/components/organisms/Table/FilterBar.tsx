import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { Input } from '../../atoms/Input';
import { Select } from '../Select';

// ---------------------------------------------------------------------------
// Schema types (preserved from the retired TableFilters component)
// ---------------------------------------------------------------------------

/** Configuration for a debounced text search filter. */
export interface TextFilterConfig {
  type: 'text';
  /** Unique key used in the values record. */
  key: string;
  /** Input placeholder text. */
  placeholder?: string;
  /** Debounce delay in milliseconds. @default 300 */
  debounceMs?: number;
}

/** Configuration for an immediate select dropdown filter. */
export interface SelectFilterConfig {
  type: 'select';
  /** Unique key used in the values record. */
  key: string;
  /** Placeholder shown when no option is selected. */
  placeholder?: string;
  /** Available options. */
  options: Array<{ value: string; label: string }>;
}

/** A single filter definition — either text or select. */
export type FilterConfig = TextFilterConfig | SelectFilterConfig;

// ---------------------------------------------------------------------------
// Context + orphan check (compound ADR: dot-notation, context + orphan check)
// ---------------------------------------------------------------------------

interface FilterBarContextValue {
  values: Record<string, string>;
  commit: (key: string, value: string) => void;
}

const FilterBarContext = createContext<FilterBarContextValue | null>(null);

function useFilterBarContext(part: string): FilterBarContextValue {
  const ctx = useContext(FilterBarContext);
  if (!ctx) {
    throw new Error(
      `Table.FilterBar.${part} must be rendered inside <Table.FilterBar>. See the upgrade guide for the 0.4.0 compound API.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// FilterBar Root — schema-driven mode OR children-composition mode
// ---------------------------------------------------------------------------

/** Props for `<Table.FilterBar>`. */
export interface FilterBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current filter values keyed by filter key / field name. Required. */
  values: Record<string, string>;
  /** Called when any filter value changes. Receives the full updated values object. */
  onChange: (values: Record<string, string>) => void;
  /**
   * Schema-driven mode: supply an ordered list of filter definitions and
   * FilterBar renders them for you. Mutually exclusive with `children`.
   */
  filters?: FilterConfig[];
  /**
   * Children-composition mode: render `<Table.FilterBar.Text>` /
   * `<Table.FilterBar.Select>` subparts directly for filters the schema
   * can't express. Mutually exclusive with `filters`.
   */
  children?: ReactNode;
}

/**
 * Horizontal filter bar paired with `<Table>`. Supports two modes:
 *
 * 1. **Schema-driven** — pass `filters={…}` and FilterBar renders `Text` /
 *    `Select` subparts automatically.
 * 2. **Children-composition** — render `<Table.FilterBar.Text>` and
 *    `<Table.FilterBar.Select>` directly for custom layouts.
 *
 * Both modes share the same controlled `values` / `onChange` contract.
 */
function FilterBar({
  values,
  onChange,
  filters,
  children,
  style,
  ...rest
}: FilterBarProps): React.JSX.Element {
  if (filters !== undefined && children !== undefined) {
    throw new Error(
      '<Table.FilterBar> received both `filters` and `children`. Pick one mode.',
    );
  }

  const commit = useCallback(
    (key: string, value: string): void => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange],
  );

  const ctxValue: FilterBarContextValue = { values, commit };

  const content: ReactNode = filters
    ? filters.map((filter) => {
        if (filter.type === 'text') {
          return (
            <FilterBarText
              key={filter.key}
              field={filter.key}
              placeholder={filter.placeholder}
              debounceMs={filter.debounceMs}
            />
          );
        }
        return (
          <FilterBarSelect
            key={filter.key}
            field={filter.key}
            placeholder={filter.placeholder}
            options={filter.options}
          />
        );
      })
    : children;

  return (
    <FilterBarContext.Provider value={ctxValue}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: t.spaceSm,
          alignItems: 'flex-start',
          ...style,
        }}
        {...rest}
      >
        {content}
      </div>
    </FilterBarContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// FilterBar.Text — debounced text input subpart
// ---------------------------------------------------------------------------

/** Props for `<Table.FilterBar.Text>`. */
export interface FilterBarTextProps {
  /** Key in the shared `values` record that this input reads / writes. */
  field: string;
  /** Input placeholder text. */
  placeholder?: string;
  /** Debounce delay in milliseconds before committing to `values`. @default 300 */
  debounceMs?: number;
}

const FilterBarText: React.ForwardRefExoticComponent<
  FilterBarTextProps & React.RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, FilterBarTextProps>(function FilterBarText(
  { field, placeholder, debounceMs = 300 },
  ref,
): React.JSX.Element {
  const { values, commit } = useFilterBarContext('Text');
  const external = values[field] ?? '';
  const [local, setLocal] = useState(external);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync when the controlled value changes externally (reset, clear, etc.)
  useEffect(() => {
    setLocal(external);
  }, [external]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const next = e.target.value;
      setLocal(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        commit(field, next);
      }, debounceMs);
    },
    [commit, field, debounceMs],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div style={{ minWidth: '10rem', flex: '1 1 10rem' }}>
      <Input
        ref={ref}
        value={local}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
});

// ---------------------------------------------------------------------------
// FilterBar.Select — immediate dropdown subpart
// ---------------------------------------------------------------------------

/** Props for `<Table.FilterBar.Select>`. */
export interface FilterBarSelectProps {
  /** Key in the shared `values` record that this select reads / writes. */
  field: string;
  /** Placeholder shown when no option is selected. */
  placeholder?: string;
  /** Available options. */
  options: Array<{ value: string; label: string }>;
}

const FilterBarSelect: React.ForwardRefExoticComponent<
  FilterBarSelectProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, FilterBarSelectProps>(function FilterBarSelect(
  { field, placeholder, options },
  ref,
): React.JSX.Element {
  const { values, commit } = useFilterBarContext('Select');
  const value = values[field] ?? '';

  const handleValueChange = useCallback(
    (next: string): void => {
      commit(field, next);
    },
    [commit, field],
  );

  // Select.Trigger does not yet forwardRef internally (pre-existing ADR §2.4
  // gap tracked separately). The trigger renders exactly one <button> as the
  // wrapper's only interactive descendant, so we expose it to consumers via
  // useImperativeHandle + a querySelector on the wrapping div. The
  // `!` is safe because the wrapper div always renders before this handle
  // resolves (React commits the div ref before running imperative-handle
  // factories for the same component).
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useImperativeHandle(
    ref,
    () => wrapperRef.current!.querySelector('button') as HTMLButtonElement,
  );

  return (
    <div ref={wrapperRef} style={{ minWidth: '8rem', flex: '0 1 12rem' }}>
      <Select.Root value={value} onValueChange={handleValueChange}>
        <Select.Trigger>
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>
        <Select.Content>
          {options.map((opt) => (
            <Select.Item key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
});

// ---------------------------------------------------------------------------
// Namespace export (attached to `Table` in Table/index.ts via Object.assign)
// ---------------------------------------------------------------------------

/**
 * Compound filter-bar primitive for `<Table>`. Members:
 *
 * - `Table.FilterBar` — root. Accepts either `filters={…}` for the
 *   schema-driven shortcut or children (`<Table.FilterBar.Text>` /
 *   `<Table.FilterBar.Select>`) for custom compositions.
 * - `Table.FilterBar.Text` — debounced text input subpart.
 * - `Table.FilterBar.Select` — immediate dropdown subpart.
 */
export const TableFilterBar = Object.assign(FilterBar, {
  Text: FilterBarText,
  Select: FilterBarSelect,
});
