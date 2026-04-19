import { forwardRef, useEffect, useRef } from 'react';
import { semantic as t, useInjectStyles, useThemeRhythm, Slot } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import { Surface, getSurfaceStyle } from '../Surface/Surface';
import type { SurfaceStyleOptions } from '../Surface/Surface';
import type { SpacingToken, BaseComponentProps } from '../../types';

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

// Card is an opinionated <Surface>; each variant is a preset Surface-prop bag.
const variantSurfaceOptions: Record<CardVariant, Omit<SurfaceStyleOptions, 'padding' | 'radius'>> = {
  default: { level: 'solid', border: true, shadow: 'sm' },
  flat: { level: 'raised', border: true },
  elevated: { level: 'solid', border: true, shadow: 'md' },
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

// Glow: the bridge's rAF loop writes `--card-glow-strength` (0..1) and the
// box-shadow below scales spread/blur/alpha off it. CSS fallback of 0 keeps
// the shadow invisible until a subscriber fires.
const GLOW_STYLES_ID = '4lt7ab-card-glow';
const GLOW_STYLES_CSS = `
[data-card-glow] {
  --card-glow-strength: 0;
}
`;
// Glow box-shadow rides as an inline-style override that beats the variant shadow.
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

    const internalRef = useRef<HTMLElement | null>(null);
    const setRef = (node: HTMLElement | null): void => {
      internalRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    };

    const { config, subscribe } = useThemeRhythm();

    useEffect(() => {
      // Bridge no-op contract: skip subscribing when glow is off, the theme
      // has no rhythm, or the user prefers reduced motion.
      if (!glow || !config || prefersReducedMotion()) return;
      const el = internalRef.current;
      if (!el) return;
      const unsubscribe = subscribe((phase) => {
        // Direct DOM write — no React state, no reconciliation per frame.
        el.style.setProperty('--card-glow-strength', String(phase));
      });
      return () => {
        unsubscribe();
        el.style.removeProperty('--card-glow-strength');
      };
    }, [glow, config, subscribe]);

    const surfaceOptions: SurfaceStyleOptions = { ...variantSurfaceOptions[variant], padding, radius: 'lg' };
    const glowOverride: CSSProperties | undefined = glow ? { boxShadow: GLOW_BOX_SHADOW } : undefined;
    const dataAttributes = { 'data-card-hover': hover ? '' : undefined, 'data-card-glow': glow ? '' : undefined };

    if (asChild) {
      return (
        <Slot
          ref={setRef}
          id={rest.id}
          data-testid={rest['data-testid']}
          {...dataAttributes}
          style={{ ...getSurfaceStyle(surfaceOptions), ...glowOverride }}
        >
          {children as React.ReactElement}
        </Slot>
      );
    }

    return (
      <Surface
        ref={setRef as React.Ref<HTMLDivElement>}
        {...surfaceOptions}
        id={rest.id}
        data-testid={rest['data-testid']}
        dataAttributes={dataAttributes}
        style={glowOverride}
      >
        {children}
      </Surface>
    );
  }
);
