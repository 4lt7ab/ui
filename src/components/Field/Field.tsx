import { semantic as t } from '../../tokens/semantic';
import type { HTMLAttributes, ReactNode } from 'react';

export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Field label text. */
  label: string;
  /** Associates label with input via htmlFor/id. */
  htmlFor?: string;
  /** Error message. When set, field renders in error state. */
  error?: string;
  /** Help text shown below the input. */
  help?: string;
  /** Shows required indicator on the label. */
  required?: boolean;
  /** Disables the field visually. Does not disable the child input — do that yourself. */
  disabled?: boolean;
  children: ReactNode;
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  color: t.colorText,
  fontFamily: t.fontSans,
};

const requiredStyle: React.CSSProperties = {
  color: t.colorError,
  marginLeft: '0.125rem',
};

const helpStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: '1rem',
  color: t.colorTextMuted,
  fontFamily: t.fontSans,
  margin: 0,
};

const errorStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: '1rem',
  color: t.colorError,
  fontFamily: t.fontSans,
  margin: 0,
};

export function Field({
  label,
  htmlFor,
  error,
  help,
  required,
  disabled,
  children,
  style,
  ...props
}: FieldProps): React.JSX.Element {
  return (
    <div
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

      {children}

      {error && <p role="alert" style={errorStyle}>{error}</p>}
      {!error && help && <p style={helpStyle}>{help}</p>}
    </div>
  );
}
