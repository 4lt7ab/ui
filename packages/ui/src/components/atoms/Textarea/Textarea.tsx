import { forwardRef } from 'react';
import {
  inputShellBaseStyle,
  inputShellErrorStyle,
  inputShellDisabledStyle,
} from '../../../styles/inputShellStyle';
import { semantic as t } from '@4lt7ab/core';

/** A multi-line text input area. Vertically resizable by default. */
export interface TextareaProps {
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  maxLength?: number;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
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
  lineHeight: t.lineHeightBase,
  outline: 'none',
  resize: 'vertical' as const,
  minHeight: '5rem',
};

const disabledStyle: React.CSSProperties = {
  ...inputShellDisabledStyle,
  resize: 'none' as const,
};

export const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, 'ref'> & React.RefAttributes<HTMLTextAreaElement>> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({
    hasError,
    disabled,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    rows,
    maxLength,
    name,
    required,
    autoFocus,
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
      <textarea
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        maxLength={maxLength}
        name={name}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
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
          ...(disabled ? disabledStyle : {}),
        }}
      />
    );
  }
);
