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

/**
 * Focus-ring CSS for composers that wrap an `<input>` in a bordered container
 * (e.g. `SearchInput` with leading icon + trailing slot). Returns a CSS string
 * scoped to the given selector, producing the same focused border-color +
 * box-shadow as the `Input` primitive receives from the browser default, and
 * includes a `prefers-reduced-motion` transition override.
 *
 * Pass a class selector (including the leading dot) or any valid CSS selector
 * that targets the wrapping element. Inject the returned string via
 * `useInjectStyles(id, inputShellFocusRingCSS('.my-wrapper'))`.
 *
 * Keeps the focus-ring values (border-color, ring width, ring color) defined
 * in exactly one place alongside the shell visual contract.
 */
export function inputShellFocusRingCSS(selector: string): string {
  return `
    ${selector}:focus-within {
      border-color: ${t.colorBorderFocused};
      box-shadow: 0 0 0 ${t.focusRingWidth} ${t.focusRingColor};
    }
    @media (prefers-reduced-motion: reduce) {
      ${selector} {
        transition: none !important;
      }
    }
  `;
}
