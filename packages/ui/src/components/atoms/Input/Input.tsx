import { forwardRef } from 'react';
import {
  inputShellBaseStyle,
  inputShellErrorStyle,
  inputShellDisabledStyle,
} from '../../../styles/inputShellStyle';
import { semantic as t } from '@4lt7ab/core';

/** A single-line text input field. */
export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search';
  value?: string | number;
  defaultValue?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  name?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  id?: string;
  form?: string;
  tabIndex?: number;
  /** Renders error border styling. Typically driven by a parent Field.
   * @default false
   */
  hasError?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'data-testid'?: string;
}

const baseStyle: React.CSSProperties = {
  ...inputShellBaseStyle,
  display: 'block',
  lineHeight: t.lineHeightTight,
  outline: 'none',
};

export const Input: React.ForwardRefExoticComponent<Omit<InputProps, 'ref'> & React.RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, InputProps>(
  function Input({
    hasError,
    disabled,
    type,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    maxLength,
    min,
    max,
    step,
    pattern,
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
  }, ref): React.JSX.Element {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        pattern={pattern}
        inputMode={inputMode}
        name={name}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        id={id}
        form={form}
        tabIndex={tabIndex}
        aria-invalid={ariaInvalid ?? (hasError || undefined)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        data-testid={dataTestId}
        style={{
          ...baseStyle,
          ...(hasError ? inputShellErrorStyle : {}),
          ...(disabled ? inputShellDisabledStyle : {}),
        }}
      />
    );
  }
);
