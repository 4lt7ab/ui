import { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import {
  inputShellBaseStyle,
  inputShellDisabledStyle,
  inputShellFocusRingCSS,
} from '../../../styles/inputShellStyle';
import { Icon } from '../../atoms/Icon';
import type { ReactNode } from 'react';

/** A text input with built-in debounce, search icon, and optional trailing slot. */
export interface SearchInputProps {
  /** Current search value (controlled). */
  value: string;
  /** Debounced search callback — fires after `debounceMs` of inactivity. */
  onSearch: (value: string) => void;
  /** Debounce delay in milliseconds.
   * @default 300
   */
  debounceMs?: number;
  /** Optional content rendered inside the input on the right side (toggle, clear button, etc.). */
  trailing?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  autoFocus?: boolean;
  tabIndex?: number;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

const STYLE_ID = '4lt7ab-search-input';
const WRAPPER_CLASS = 'search-input-wrapper';

// Focus-ring rule comes from the shared helper so the values (border-color,
// ring width, ring color, reduced-motion override) live in exactly one place.
const focusRingCSS = inputShellFocusRingCSS(`.${WRAPPER_CLASS}`);

// Wrapper owns the shared input-shell shell (border/radius/background/padding/
// transition). Only the layout deltas — flex + gap + line-height — are local.
const wrapperStyle: React.CSSProperties = {
  ...inputShellBaseStyle,
  display: 'flex',
  alignItems: 'center',
  gap: t.spaceXs,
  lineHeight: t.lineHeightTight,
};

// Inner <input> is borderless — the shell is the wrapper. Strips the browser's
// default chrome and inherits typography so leading icon + trailing slot sit
// flush with the text baseline.
const inputStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontFamily: 'inherit',
  padding: 0,
};

export const SearchInput: React.ForwardRefExoticComponent<Omit<SearchInputProps, 'ref'> & React.RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput({
    value,
    onSearch,
    debounceMs = 300,
    trailing,
    disabled,
    placeholder = 'Search\u2026',
    name,
    id,
    autoFocus,
    tabIndex,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'data-testid': dataTestId,
  }, ref): React.JSX.Element {
    useInjectStyles(STYLE_ID, focusRingCSS);

    const [localValue, setLocalValue] = useState(value);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onSearchRef = useRef(onSearch);
    onSearchRef.current = onSearch;

    // Sync external value changes into local state
    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setLocalValue(next);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearchRef.current(next);
      }, debounceMs);
    }, [debounceMs]);

    // Cleanup timer on unmount
    useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);

    return (
      <div
        className={WRAPPER_CLASS}
        data-testid={dataTestId}
        style={{
          ...wrapperStyle,
          ...(disabled ? inputShellDisabledStyle : {}),
        }}
      >
        <span style={{ color: t.colorTextMuted, flexShrink: 0, display: 'inline-flex' }}><Icon name="search" size="sm" /></span>
        <input
          ref={ref}
          type="text"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          id={id}
          autoFocus={autoFocus}
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          style={inputStyle}
        />
        {trailing && (
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {trailing}
          </div>
        )}
      </div>
    );
  }
);
