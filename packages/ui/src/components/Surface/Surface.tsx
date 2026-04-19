import { createElement, forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
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
 * Inputs that shape a Surface's visual treatment (background, padding, radius,
 * border, shadow). Shared with composites that render their own element but
 * want the exact same style bag — most notably `<Card asChild>`, which has to
 * flow styles through a `Slot` rather than a real `<Surface>`.
 */
export interface SurfaceStyleOptions {
  level?: SurfaceLevel;
  tint?: SemanticColor;
  padding?: SpacingToken;
  radius?: RadiusToken;
  border?: boolean | SemanticColor;
  shadow?: ShadowToken;
}

/**
 * Derive the inline-style bag a Surface renders for the given options. Exposed
 * so composites (Card) can share a single source of truth for the box
 * treatment without duplicating the mapping.
 */
export function getSurfaceStyle({
  level = 'solid',
  tint,
  padding,
  radius = 'lg',
  border = false,
  shadow,
}: SurfaceStyleOptions): CSSProperties {
  const borderValue = border === true
    ? `${t.borderWidthDefault} solid ${t.colorBorder}`
    : typeof border === 'string'
      ? `${t.borderWidthDefault} solid ${semanticColorMap[border as SemanticColor]}`
      : undefined;

  const tintBg = tint
    ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)`
    : undefined;

  return {
    background: tintBg ?? levelMap[level],
    padding: padding ? spacingMap[padding] : undefined,
    borderRadius: radiusMap[radius],
    border: borderValue,
    boxShadow: shadow ? shadowMap[shadow] : undefined,
    color: t.colorText,
  };
}

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
export interface SurfaceProps extends BaseComponentProps, SurfaceStyleOptions {
  /** Accessible label for landmark regions (e.g. when rendered as `section`). */
  'aria-label'?: string;
  /** ID of an element that labels this surface. */
  'aria-labelledby'?: string;

  /**
   * Extra inline styles merged after Surface's computed style. Used by
   * composites (Card) to stack additional treatments (e.g. a rhythm-driven
   * glow box-shadow) on top of the base surface. Consumer-visible style use
   * should go through the structured props (`level`, `tint`, etc.) instead.
   */
  style?: CSSProperties;

  /**
   * Extra `data-*` attributes to forward onto the rendered element. Used by
   * composites that need a CSS-selector hook on the Surface element itself
   * (e.g. Card's `data-card-hover`). Not intended as a general consumer
   * escape hatch — component-level props are the supported surface.
   */
  dataAttributes?: Record<string, string | boolean | undefined>;

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
      style,
      dataAttributes,
      children,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const baseStyle = getSurfaceStyle({ level, tint, padding, radius, border, shadow });

    return createElement(
      as,
      {
        ref,
        id: rest.id,
        'data-testid': rest['data-testid'],
        'aria-label': rest['aria-label'],
        'aria-labelledby': rest['aria-labelledby'],
        ...dataAttributes,
        style: style ? { ...baseStyle, ...style } : baseStyle,
      },
      children,
    );
  },
);
