import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { TextareaHTMLAttributes } from 'react';

/** A multi-line text input area. Vertically resizable by default. */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Renders error border styling. Typically driven by a parent Field.
   * @default false
   */
  hasError?: boolean;
}

const baseStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: `${t.spaceSm} ${t.spaceMd}`,
  fontSize: t.fontSizeSm,
  lineHeight: t.lineHeightBase,
  fontFamily: t.fontSans,
  color: t.colorText,
  background: t.colorSurfaceInput,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  outline: 'none',
  transition: `border-color ${t.transitionBase}, box-shadow ${t.transitionBase}`,
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

export const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, 'ref'> & React.RefAttributes<HTMLTextAreaElement>> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({
    hasError,
    disabled,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <textarea
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
