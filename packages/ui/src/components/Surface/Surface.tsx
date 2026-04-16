import { createElement, forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { HTMLAttributes, ReactNode } from 'react';
import { spacingMap, radiusMap, shadowMap } from '../../types';
import type { SpacingToken, RadiusToken, ShadowToken } from '../../types';

/**
 * Which semantic surface token to use as the background.
 *
 * Maps directly to the `colorSurface*` token family:
 * - `page`    — full-page background
 * - `default` — standard component background (cards, inputs, modals)
 * - `solid`   — opaque counterpart for nested/layered content
 * - `raised`  — elevated surface for hover states and nested containers
 * - `panel`   — side panel and navigation background
 * - `input`   — text input / select / textarea background
 * - `overlay` — semi-transparent backdrop behind modals
 */
export type SurfaceLevel =
  | 'page'
  | 'default'
  | 'solid'
  | 'raised'
  | 'panel'
  | 'input'
  | 'overlay';

const levelMap: Record<SurfaceLevel, string> = {
  page: t.colorSurfacePage,
  default: t.colorSurface,
  solid: t.colorSurfaceSolid,
  raised: t.colorSurfaceRaised,
  panel: t.colorSurfacePanel,
  input: t.colorSurfaceInput,
  overlay: t.colorSurfaceOverlay,
};

/**
 * A composable container primitive for managing color surface area.
 *
 * Unlike Card (which is opinionated — always has border, shadow, and a fixed
 * surface token), Surface is the low-level building block for any background
 * region. It maps directly to the semantic surface token system, letting you
 * layer backgrounds at different depth levels.
 *
 * Use the `bg` prop for custom tinted surfaces (e.g. `color-mix()` expressions).
 *
 * @example
 * ```tsx
 * // Standard solid surface with border
 * <Surface padding="lg" border shadow="sm">
 *   <h2>Card content</h2>
 * </Surface>
 *
 * // Raised nested container
 * <Surface level="raised" padding="md" radius="md">
 *   <p>Nested content</p>
 * </Surface>
 *
 * // Custom tinted background
 * <Surface bg={`color-mix(in srgb, ${t.colorSuccess} 10%, transparent)`} padding="md" radius="md">
 *   <p>Success region</p>
 * </Surface>
 * ```
 */
export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Background surface level from the token system.
   * @default 'solid'
   */
  level?: SurfaceLevel;

  /**
   * Custom background override. When provided, takes precedence over `level`.
   * Useful for tinted surfaces via `color-mix()`.
   */
  bg?: string;

  /**
   * Inner padding.
   * @default undefined (no padding)
   */
  padding?: SpacingToken;

  /**
   * Border radius.
   * @default 'lg'
   */
  radius?: RadiusToken;

  /**
   * Show a border. `true` uses `colorBorder`; a string value is used as a
   * custom border color.
   * @default false
   */
  border?: boolean | string;

  /**
   * Box shadow intensity.
   * @default undefined (no shadow)
   */
  shadow?: ShadowToken;

  /**
   * Render as a different HTML element.
   * @default 'div'
   */
  as?: 'div' | 'section' | 'article' | 'aside' | 'main';

  children: ReactNode;
}

export const Surface: React.ForwardRefExoticComponent<
  Omit<SurfaceProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, SurfaceProps>(
  function Surface(
    {
      level = 'solid',
      bg,
      padding,
      radius = 'lg',
      border = false,
      shadow,
      as = 'div',
      children,
      style,
      ...props
    },
    ref,
  ): React.JSX.Element {
    const borderValue = border === true
      ? `${t.borderWidthDefault} solid ${t.colorBorder}`
      : typeof border === 'string'
        ? `${t.borderWidthDefault} solid ${border}`
        : undefined;

    return createElement(
      as,
      {
        ref,
        style: {
          background: bg ?? levelMap[level],
          padding: padding ? spacingMap[padding] : undefined,
          borderRadius: radiusMap[radius],
          border: borderValue,
          boxShadow: shadow ? shadowMap[shadow] : undefined,
          color: t.colorText,
          ...style,
        },
        ...props,
      },
      children,
    );
  },
);
