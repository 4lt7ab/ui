import { forwardRef, createElement } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode, CSSProperties } from 'react';
import type { BaseComponentProps } from '../../../types';

/**
 * `<Text>` — the typographic primitive for inline and block copy.
 *
 * Canonical use case: replace inline-styled `<span style={{ fontSize, color, fontWeight }}>`
 * in pattern code. Every `size` / `weight` / `tone` / `family` prop maps 1:1 to an existing
 * semantic token, so consumers never reach for raw values.
 *
 * No `className` or `style` pass-through (matches the 0.2.26 form-element lockdown). If
 * you need arbitrary CSS, the `<Text>` atom is the wrong primitive — reach for a custom
 * element or open an issue to add the missing token.
 */

/** Font-size token. Maps to the semantic `fontSize{Xs|Sm|Base|Lg|Xl}` tokens. */
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Font-weight token. Maps to the semantic `fontWeight{Normal|Medium|Semibold|Bold}` tokens. */
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

/**
 * Semantic color tone. Maps to `colorText*` tokens and status colors.
 * - `default` — `colorText`
 * - `muted` — `colorTextMuted`
 * - `secondary` — `colorTextSecondary`
 * - `inverse` — `colorTextInverse` (for filled backgrounds)
 * - `link` — `colorTextLink`
 * - `success` / `warning` / `error` — status foreground tokens
 */
export type TextTone =
  | 'default'
  | 'muted'
  | 'secondary'
  | 'inverse'
  | 'link'
  | 'success'
  | 'warning'
  | 'error';

/** Font-family token. */
export type TextFamily = 'sans' | 'serif' | 'mono';

/** Render element. Kept deliberately small — interactive elements are other primitives. */
export type TextAs = 'span' | 'p' | 'div';

/** Text alignment. */
export type TextAlign = 'left' | 'center' | 'right';

const sizeMap: Record<TextSize, string> = {
  xs: t.fontSizeXs,
  sm: t.fontSizeSm,
  md: t.fontSizeBase,
  lg: t.fontSizeLg,
  xl: t.fontSizeXl,
};

const weightMap: Record<TextWeight, string> = {
  normal: t.fontWeightNormal,
  medium: t.fontWeightMedium,
  semibold: t.fontWeightSemibold,
  bold: t.fontWeightBold,
};

const toneMap: Record<TextTone, string> = {
  default: t.colorText,
  muted: t.colorTextMuted,
  secondary: t.colorTextSecondary,
  inverse: t.colorTextInverse,
  link: t.colorTextLink,
  success: t.colorSuccess,
  warning: t.colorWarning,
  error: t.colorError,
};

const familyMap: Record<TextFamily, string> = {
  sans: t.fontSans,
  serif: t.fontSerif,
  mono: t.fontMono,
};

export interface TextProps extends BaseComponentProps {
  /** Text content. */
  children: ReactNode;
  /** Font size token.
   * @default 'md'
   */
  size?: TextSize;
  /** Font weight token.
   * @default 'normal'
   */
  weight?: TextWeight;
  /** Semantic color tone.
   * @default 'default'
   */
  tone?: TextTone;
  /** Font family token.
   * @default 'sans'
   */
  family?: TextFamily;
  /** Render element — one of `'span' | 'p' | 'div'`.
   * @default 'span'
   */
  as?: TextAs;
  /** Text alignment. Omit for the inherited default. */
  align?: TextAlign;
  /** Single-line truncate with ellipsis. Sets `white-space: nowrap`, `overflow: hidden`,
   * and `text-overflow: ellipsis`. Requires the element to have a bounded width.
   * @default false
   */
  truncate?: boolean;
}

/** Ref type — a Text element is one of three concrete HTML element types. */
export type TextRef = HTMLSpanElement | HTMLParagraphElement | HTMLDivElement;

export const Text: React.ForwardRefExoticComponent<
  Omit<TextProps, 'ref'> & React.RefAttributes<TextRef>
> = forwardRef<TextRef, TextProps>(
  function Text(
    {
      children,
      size = 'md',
      weight = 'normal',
      tone = 'default',
      family = 'sans',
      as = 'span',
      align,
      truncate = false,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const style: CSSProperties = {
      fontSize: sizeMap[size],
      fontWeight: weightMap[weight],
      color: toneMap[tone],
      fontFamily: familyMap[family],
      ...(align ? { textAlign: align } : null),
      ...(truncate
        ? {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'inline-block',
            maxWidth: '100%',
          }
        : null),
    };

    return createElement(
      as,
      {
        ref,
        id: rest.id,
        'data-testid': rest['data-testid'],
        style,
      },
      children,
    );
  },
);
