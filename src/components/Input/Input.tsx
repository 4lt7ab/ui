import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Renders error border styling. Typically driven by a parent Field. */
  hasError?: boolean;
}

const baseStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: `${t.spaceSm} ${t.spaceMd}`,
  fontSize: t.fontSizeSm,
  lineHeight: t.lineHeightTight,
  fontFamily: t.fontSans,
  color: t.colorText,
  background: t.colorSurfaceInput,
  border: `1px solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  outline: 'none',
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({
    hasError,
    disabled,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <input
        ref={ref}
        aria-invalid={hasError || undefined}
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
);
