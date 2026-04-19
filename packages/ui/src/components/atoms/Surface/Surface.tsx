import { createElement, forwardRef } from 'react';
import { semantic as t, Slot } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import { spacingMap, radiusMap, shadowMap, semanticColorMap } from '../../../types';
import type { SpacingToken, RadiusToken, ShadowToken, SemanticColor, BaseComponentProps } from '../../../types';

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
 * Inputs that shape a Surface's visual treatment. Internal — consumed by the
 * Surface component and by sibling composites (Card) that need to derive the
 * same style bag without duplicating the mapping. Not re-exported from the
 * Surface barrel; import via the deep path when needed.
 */
interface SurfaceStyleOptions {
  level?: SurfaceLevel;
  tint?: SemanticColor;
  padding?: SpacingToken;
  radius?: RadiusToken;
  border?: boolean | SemanticColor;
  shadow?: ShadowToken;
}

function getSurfaceStyle({
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
 * // Render as the child element (polymorphic via asChild)
 * <Surface asChild padding="lg" border>
 *   <a href="/docs">Read the docs</a>
 * </Surface>
 * ```
 */
export interface SurfaceProps extends BaseComponentProps {
  /** Which semantic surface token to use as the background. @default 'solid' */
  level?: SurfaceLevel;
  /** Optional tinted background derived from a semantic color. */
  tint?: SemanticColor;
  /** Inner padding using spacing tokens. */
  padding?: SpacingToken;
  /** Border radius using radius tokens. @default 'lg' */
  radius?: RadiusToken;
  /** Border using theme border color (`true`) or a semantic color. */
  border?: boolean | SemanticColor;
  /** Shadow using shadow tokens. */
  shadow?: ShadowToken;
  /** Accessible label for landmark regions (e.g. when rendered as `section`). */
  'aria-label'?: string;
  /** ID of an element that labels this surface. */
  'aria-labelledby'?: string;
  /**
   * Render as a different HTML element.
   * @default 'div'
   */
  as?: 'div' | 'section' | 'article' | 'aside' | 'main';
  /**
   * Render as the single child element instead of a `<div>`. Merges Surface's
   * computed styling and ref into the child. Matches the `asChild` pattern on
   * `Button`, `IconButton`, `TopBar.Link`, and `Card`.
   * @default false
   */
  asChild?: boolean;
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
      asChild = false,
      children,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const style = getSurfaceStyle({ level, tint, padding, radius, border, shadow });

    const commonProps = {
      id: rest.id,
      'data-testid': rest['data-testid'],
      'aria-label': rest['aria-label'],
      'aria-labelledby': rest['aria-labelledby'],
      style,
    };

    if (asChild) {
      return (
        <Slot ref={ref} {...commonProps}>
          {children as React.ReactElement}
        </Slot>
      );
    }

    return createElement(as, { ref, ...commonProps }, children);
  },
);

// Re-exported to sibling composites via the deep path only (not the barrel).
// Keeps Surface's public API tight while letting Card share the style source.
export { getSurfaceStyle };
export type { SurfaceStyleOptions };
