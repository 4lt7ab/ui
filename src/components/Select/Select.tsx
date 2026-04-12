import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { ReactNode, SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  /** Options to render. Ignored when `children` is provided. */
  options?: SelectOption[];
  /** Custom option/optgroup elements. When provided, `options` is ignored. */
  children?: ReactNode;
  /** Optional placeholder shown as first disabled option. */
  placeholder?: string;
  /** Renders error border styling. Typically driven by a parent Field. */
  hasError?: boolean;
}

const wrapperStyle: React.CSSProperties = {
  position: 'relative',
  display: 'block',
  width: '100%',
};

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
  cursor: 'pointer',
  appearance: 'none' as const,
  // Space for custom chevron
  paddingRight: t.space2xl,
};

const chevronStyle: React.CSSProperties = {
  position: 'absolute',
  right: t.spaceSm,
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: t.colorTextSecondary,
  display: 'flex',
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({
    options,
    children,
    placeholder,
    hasError,
    disabled,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <div style={wrapperStyle}>
        <select
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
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children ??
            options?.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
        </select>
        <span aria-hidden style={chevronStyle}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L6 9.31 2.22 5.53a.75.75 0 0 1 0-1.06z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    );
  }
);
