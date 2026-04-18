import { forwardRef, useEffect, useRef } from 'react';
import { semantic as t, useInjectStyles, useThemeRhythm, Slot } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import { spacingMap } from '../../types';
import type { SpacingToken, BaseComponentProps } from '../../types';

const paddingMap: Record<SpacingToken, string> = spacingMap;

/** Visual treatment for the Card surface. */
export type CardVariant = 'default' | 'flat' | 'elevated';

/** A contained surface for grouping related content. */
export interface CardProps extends BaseComponentProps {
  /** Visual treatment.
   * - `default` — standard surface with border and small shadow
   * - `flat` — raised background with border, no shadow
   * - `elevated` — standard surface with border and medium shadow
   * @default 'default'
   */
  variant?: CardVariant;
  /** Inner padding using spacing tokens.
   * @default 'lg'
   */
  padding?: SpacingToken;
  /** Enable interactive hover state with border highlight and lift effect.
   * @default false
   */
  hover?: boolean;
  /**
   * Opt into a border glow that pulses with the active theme's rhythm
   * (see `packages/core/docs/component-canvas-bridge.md`). Default off —
   * Cards without this prop behave identically to pre-bridge Cards.
   * No-ops on themes without rhythm and under `prefers-reduced-motion`.
   * @default false
   */
  glow?: boolean;
  /**
   * Render as the single child element instead of a `<div>`. Merges Card's
   * variant / padding / hover / glow styling, style, and ref into the child.
   * Useful for rendering a Card-styled `<a>` or router `<Link>` without a
   * wrapper div around a focusable element. Matches the `asChild` pattern on
   * `Button`, `IconButton`, and `TopBar.Link`.
   * @default false
   */
  asChild?: boolean;
  /** Card content. */
  children: ReactNode;
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: t.colorSurfaceSolid,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    boxShadow: t.shadowSm,
  },
  flat: {
    background: t.colorSurfaceRaised,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    boxShadow: 'none',
  },
  elevated: {
    background: t.colorSurfaceSolid,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    boxShadow: t.shadowMd,
  },
};

// ── Injected styles ──

const HOVER_STYLES_ID = '4lt7ab-card-hover';
const HOVER_STYLES_CSS = `
[data-card-hover] {
  cursor: pointer;
  transition: transform ${t.transitionSlow}, border-color ${t.transitionSlow}, box-shadow ${t.transitionSlow};
}
[data-card-hover]:hover {
  transform: translateY(-2px);
  border-color: ${t.colorBorderFocused};
  box-shadow: ${t.shadowMd};
}
`;

/*
 * Glow uses the component-canvas bridge (useThemeRhythm).
 * A CSS custom property `--card-glow-strength` (0..1) drives a box-shadow whose
 * spread/blur/alpha scale with the phase. Default 0 via the CSS fallback, so
 * the shadow is a no-op until the subscriber writes a value. The engine handles
 * the shared rAF loop; the component just writes one custom property per tick.
 */
const GLOW_STYLES_ID = '4lt7ab-card-glow';
const GLOW_STYLES_CSS = `
[data-card-glow] {
  --card-glow-strength: 0;
}
`;
/*
 * The glow box-shadow is applied via inline style (not injected CSS) so it
 * overrides the variant's default boxShadow. Phase is written to
 * --card-glow-strength by the subscribe callback; the calc in box-shadow reads it.
 */
const GLOW_BOX_SHADOW =
  `0 0 calc(var(--card-glow-strength, 0) * 16px) calc(var(--card-glow-strength, 0) * 2px) ` +
  `color-mix(in srgb, ${t.colorActionPrimary} calc(var(--card-glow-strength, 0) * 70%), transparent)`;

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const Card: React.ForwardRefExoticComponent<Omit<CardProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, CardProps>(
  function Card({
    variant = 'default',
    padding = 'lg',
    hover = false,
    glow = false,
    asChild = false,
    children,
    ...rest
  }, ref): React.JSX.Element {
    useInjectStyles(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    useInjectStyles(GLOW_STYLES_ID, GLOW_STYLES_CSS);

    /*
     * Internal ref for the glow subscription. Merged with the forwarded `ref`
     * via a callback ref so consumers can still attach their own ref. In
     * asChild mode the same ref lands on the child element via Slot's
     * composeRefs.
     */
    const internalRef = useRef<HTMLElement | null>(null);
    const setRef = (node: HTMLElement | null): void => {
      internalRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    };

    const { config, subscribe } = useThemeRhythm();

    useEffect(() => {
      // No-op fallbacks per the bridge contract:
      // - glow off → never subscribe
      // - theme has no rhythm → never subscribe
      // - user prefers reduced motion → never subscribe (static; no pulse)
      if (!glow || !config) return;
      if (prefersReducedMotion()) return;
      const el = internalRef.current;
      if (!el) return;

      const unsubscribe = subscribe((phase) => {
        // Direct DOM write — no React state, no reconciliation per frame.
        el.style.setProperty('--card-glow-strength', String(phase));
      });
      return () => {
        unsubscribe();
        // Reset so a later render doesn't leave a stale value.
        el.style.removeProperty('--card-glow-strength');
      };
    }, [glow, config, subscribe]);

    const style: React.CSSProperties = {
      borderRadius: t.radiusLg,
      padding: paddingMap[padding],
      color: t.colorText,
      ...variantStyles[variant],
      ...(glow ? { boxShadow: GLOW_BOX_SHADOW } : undefined),
    };

    const commonProps = {
      id: rest.id,
      'data-testid': rest['data-testid'],
      'data-card-hover': hover || undefined,
      'data-card-glow': glow || undefined,
      style,
    };

    if (asChild) {
      return (
        <Slot ref={setRef} {...commonProps}>
          {children as React.ReactElement}
        </Slot>
      );
    }

    return (
      <div ref={setRef as React.Ref<HTMLDivElement>} {...commonProps}>
        {children}
      </div>
    );
  }
);
