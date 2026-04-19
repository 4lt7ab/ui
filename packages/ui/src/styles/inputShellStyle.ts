import { semantic as t } from '@4lt7ab/core';

/**
 * Shared input-shell style blocks used by every text-like control in the
 * package: `Input`, `Textarea`, `SearchInput` (wrapper), `Select.Trigger`,
 * `Combobox.Input`, `DatePicker` trigger, `DateRangePicker` trigger.
 *
 * Three blocks, composed in order by every consumer:
 *
 * ```ts
 * const style = {
 *   ...inputShellBaseStyle,
 *   ...(hasError ? inputShellErrorStyle : {}),
 *   ...(disabled ? inputShellDisabledStyle : {}),
 *   // ...per-consumer deltas (cursor, textAlign, lineHeight, etc.)
 * };
 * ```
 *
 * `inputShellBaseStyle` covers the common visual contract — padding, font,
 * color, background, border, radius, transition, box-sizing. It does not set
 * `display`, `lineHeight`, or `outline`; each consumer picks those. This
 * keeps the shared block a byte-for-byte intersection of the seven prior
 * duplicate definitions, so visual output is identical when consumers spread
 * it and layer on their overrides.
 */
export const inputShellBaseStyle: React.CSSProperties = {
  width: '100%',
  padding: `${t.spaceSm} ${t.spaceMd}`,
  fontSize: t.fontSizeSm,
  fontFamily: t.fontSans,
  color: t.colorText,
  background: t.colorSurfaceInput,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  transition: `border-color ${t.transitionBase}, box-shadow ${t.transitionBase}`,
  boxSizing: 'border-box' as const,
};

/**
 * Error modifier — applied when `hasError` is true. Swaps the border color
 * to the error token.
 */
export const inputShellErrorStyle: React.CSSProperties = {
  borderColor: t.colorBorderError,
};

/**
 * Disabled modifier — applied when `disabled` is true. Swaps surface and
 * text to the disabled tokens and sets the not-allowed cursor.
 */
export const inputShellDisabledStyle: React.CSSProperties = {
  background: t.colorSurfaceDisabled,
  color: t.colorTextDisabled,
  cursor: 'not-allowed',
};
