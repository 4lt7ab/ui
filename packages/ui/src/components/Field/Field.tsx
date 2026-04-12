import { semantic as t } from '@4lt7ab/core';
import { forwardRef, useId, isValidElement, cloneElement, type HTMLAttributes, type ReactNode, type ReactElement } from 'react';

/** Wraps an input with a label, help text, and error message. Handles `aria-describedby` wiring automatically. */
export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Field label text displayed above the input. */
  label: string;
  /** Associates the label with the input via `htmlFor`/`id`. */
  htmlFor?: string;
  /** Error message. When set, the field renders in error state and the message is announced via `role="alert"`. */
  error?: string;
  /** Help text shown below the input. Hidden when `error` is set. */
  help?: string;
  /** Shows a red asterisk (*) on the label.
   * @default false
   */
  required?: boolean;
  /** Reduces field opacity. Does not disable the child input — do that yourself.
   * @default false
   */
  disabled?: boolean;
  /** The form control to wrap (Input, Select, Textarea, etc.). */
  children: ReactNode;
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: t.fontSizeSm,
  fontWeight: t.fontWeightMedium,
  lineHeight: t.lineHeightTight,
  color: t.colorText,
  fontFamily: t.fontSans,
};

const requiredStyle: React.CSSProperties = {
  color: t.colorError,
  marginLeft: '0.125rem',
};

const helpStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  lineHeight: t.lineHeightTight,
  color: t.colorTextMuted,
  fontFamily: t.fontSans,
  margin: 0,
};

const errorStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  lineHeight: t.lineHeightTight,
  color: t.colorError,
  fontFamily: t.fontSans,
  margin: 0,
};

export const Field: React.ForwardRefExoticComponent<Omit<FieldProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, FieldProps>(
  function Field({
    label,
    htmlFor,
    error,
    help,
    required,
    disabled,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    const autoId = useId();
    const helpId = help ? `${autoId}-help` : undefined;
    const errorId = error ? `${autoId}-error` : undefined;
    const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined;

    // Pass aria-describedby to the child input element via cloneElement
    const enhancedChildren = isValidElement(children)
      ? cloneElement(children as ReactElement<Record<string, unknown>>, {
          'aria-describedby': describedBy,
        })
      : children;

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: t.spaceXs,
          opacity: disabled ? 0.6 : undefined,
          ...style,
        }}
        {...props}
      >
        <label htmlFor={htmlFor} style={labelStyle}>
          {label}
          {required && <span style={requiredStyle} aria-hidden="true">*</span>}
        </label>

        {enhancedChildren}

        {error && <p id={errorId} role="alert" style={errorStyle}>{error}</p>}
        {!error && help && <p id={helpId} style={helpStyle}>{help}</p>}
      </div>
    );
  }
);
