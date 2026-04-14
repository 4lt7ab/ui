import { useState, useEffect, useRef, useCallback } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { Input } from '../Input';
import { Select } from '../Select';
import type { HTMLAttributes } from 'react';

// ---------------------------------------------------------------------------
// Filter config types
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
// Props
// ---------------------------------------------------------------------------

/** A declarative filter bar that pairs with Table. */
export interface TableFiltersProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Ordered list of filter definitions. */
  filters: FilterConfig[];
  /** Current filter values keyed by filter key. */
  values: Record<string, string>;
  /** Called when any filter value changes. Receives the full updated values object. */
  onChange: (values: Record<string, string>) => void;
}

// ---------------------------------------------------------------------------
// Internal: debounced text filter
// ---------------------------------------------------------------------------

function DebouncedTextFilter({
  config,
  value,
  onCommit,
}: {
  config: TextFilterConfig;
  value: string;
  onCommit: (key: string, value: string) => void;
}): React.JSX.Element {
  const delay = config.debounceMs ?? 300;
  const [local, setLocal] = useState(value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync local state when the controlled value changes externally
  useEffect(() => {
    setLocal(value);
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const next = e.target.value;
      setLocal(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onCommit(config.key, next);
      }, delay);
    },
    [config.key, delay, onCommit],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div style={{ minWidth: '10rem', flex: '1 1 10rem' }}>
      <Input
        value={local}
        onChange={handleChange}
        placeholder={config.placeholder}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Internal: select filter
// ---------------------------------------------------------------------------

function SelectFilter({
  config,
  value,
  onCommit,
}: {
  config: SelectFilterConfig;
  value: string;
  onCommit: (key: string, value: string) => void;
}): React.JSX.Element {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>): void => {
      onCommit(config.key, e.target.value);
    },
    [config.key, onCommit],
  );

  return (
    <div style={{ minWidth: '8rem', flex: '0 1 12rem' }}>
      <Select
        value={value}
        onChange={handleChange}
        options={config.options}
        placeholder={config.placeholder}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// TableFilters
// ---------------------------------------------------------------------------

export function TableFilters({
  filters,
  values,
  onChange,
  style,
  ...props
}: TableFiltersProps): React.JSX.Element {
  const handleCommit = useCallback(
    (key: string, value: string): void => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange],
  );

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: t.spaceSm,
        alignItems: 'flex-start',
        ...style,
      }}
      {...props}
    >
      {filters.map((filter) => {
        const val = values[filter.key] ?? '';
        if (filter.type === 'text') {
          return (
            <DebouncedTextFilter
              key={filter.key}
              config={filter}
              value={val}
              onCommit={handleCommit}
            />
          );
        }
        return (
          <SelectFilter
            key={filter.key}
            config={filter}
            value={val}
            onCommit={handleCommit}
          />
        );
      })}
    </div>
  );
}
