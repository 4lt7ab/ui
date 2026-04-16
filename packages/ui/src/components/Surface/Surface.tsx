import { createElement, forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import { spacingMap, radiusMap, shadowMap, semanticColorMap } from '../../types';
import type { SpacingToken, RadiusToken, ShadowToken, SemanticColor, BaseComponentProps } from '../../types';

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
export interface SurfaceProps extends BaseComponentProps {
  /** Accessible label for landmark regions (e.g. when rendered as `section`). */
  'aria-label'?: string;
  /** ID of an element that labels this surface. */
  'aria-labelledby'?: string;
  /**
   * Background surface level from the token system.
   * @default 'solid'
   */
  level?: SurfaceLevel;

  /**
   * Apply a semantic color tint over the surface background.
   * Renders as `color-mix(in srgb, <token> 10%, transparent)`.
   * Takes precedence over `level` when provided.
   */
  tint?: SemanticColor;

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
   * Show a border. `true` uses `colorBorder`; a semantic color name uses that
   * token as the border color.
   * @default false
   */
  border?: boolean | SemanticColor;

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
      tint,
      padding,
      radius = 'lg',
      border = false,
      shadow,
      as = 'div',
      children,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const borderValue = border === true
      ? `${t.borderWidthDefault} solid ${t.colorBorder}`
      : typeof border === 'string'
        ? `${t.borderWidthDefault} solid ${semanticColorMap[border as SemanticColor]}`
        : undefined;

    const tintBg = tint
      ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)`
      : undefined;

    return createElement(
      as,
      {
        ref,
        id: rest.id,
        'data-testid': rest['data-testid'],
        'aria-label': rest['aria-label'],
        'aria-labelledby': rest['aria-labelledby'],
        style: {
          background: tintBg ?? levelMap[level],
          padding: padding ? spacingMap[padding] : undefined,
          borderRadius: radiusMap[radius],
          border: borderValue,
          boxShadow: shadow ? shadowMap[shadow] : undefined,
          color: t.colorText,
        },
      },
      children,
    );
  },
);
