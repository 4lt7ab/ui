import { semantic as t } from '../../tokens/semantic';
import type { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Renders error border styling. Typically driven by a parent Field. */
  hasError?: boolean;
}

const baseStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: `${t.spaceSm} ${t.spaceMd}`,
  fontSize: '0.875rem',
  lineHeight: '1.5rem',
  fontFamily: t.fontSans,
  color: t.colorText,
  background: t.colorSurfaceInput,
  border: `1px solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  outline: 'none',
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
  boxSizing: 'border-box' as const,
  resize: 'vertical' as const,
  minHeight: '5rem',
};

const errorBorderStyle: React.CSSProperties = {
  borderColor: t.colorBorderError,
};

const disabledStyle: React.CSSProperties = {
  background: t.colorSurfaceDisabled,
  color: t.colorTextDisabled,
  cursor: 'not-allowed',
  resize: 'none' as const,
};

export function Textarea({
  hasError,
  disabled,
  style,
  ...props
}: TextareaProps): React.JSX.Element {
  return (
    <textarea
      style={{
        ...baseStyle,
        ...(hasError ? errorBorderStyle : {}),
        ...(disabled ? disabledStyle : {}),
        ...style,
      }}
      disabled={disabled}
      {...props}
    />
  );
}
