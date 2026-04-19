import { forwardRef, useEffect, useRef } from 'react';
import { semantic as t, useInjectStyles, useThemeRhythm, Slot } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import { Surface } from '../../atoms/Surface/Surface';
import type { SpacingToken, BaseComponentProps } from '../../../types';

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
type SurfacePresetProps = Pick<
  React.ComponentProps<typeof Surface>,
  'level' | 'border' | 'shadow'
>;
const variantSurfaceProps: Record<CardVariant, SurfacePresetProps> = {
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

    // Card's hover/glow decorations need to live on the final rendered
    // element. With `<Surface asChild>` + Slot's child-wins-on-style merge,
    // decorating the inner element (div or consumer's element) is enough —
    // Surface's computed style lands first, then the element's data-* and
    // glow boxShadow layer on top.
    const surfaceProps = {
      ...variantSurfaceProps[variant],
      padding,
      radius: 'lg' as const,
      asChild: true as const,
    };

    // Card's own decorations bag. Slot merges with child-wins semantics, so
    // consumer-supplied values (id, data-testid, existing refs) take priority
    // over Card's defaults — important for composites like LinkCard that
    // forward consumer id/ref/aria to the child <a>.
    //
    // `style` is only included when glow is on: Slot's mergeProps clobbers the
    // parent's style when the child explicitly has `style: undefined`, so we
    // omit the key entirely to let Surface's computed style flow through.
    const cardSlotProps: Record<string, unknown> = {
      'data-card-hover': hover ? '' : undefined,
      'data-card-glow': glow ? '' : undefined,
      id: rest.id,
      'data-testid': rest['data-testid'],
    };
    if (glow) {
      cardSlotProps.style = { boxShadow: GLOW_BOX_SHADOW } as CSSProperties;
    }

    if (asChild) {
      // Two-layer Slot: Surface's Slot merges its computed style onto this
      // inner Slot's element; the inner Slot merges Card's decorations onto
      // the consumer's child. Successive child-wins merges land Surface style,
      // then Card decorations, then the consumer's explicit props on the leaf.
      return (
        <Surface {...surfaceProps}>
          <Slot ref={setRef} {...cardSlotProps}>
            {children as React.ReactElement}
          </Slot>
        </Surface>
      );
    }

    // Non-asChild Card: render our own <div> as Surface's Slot target. Surface
    // style merges in first; the div's data-* + glow overlay + id + testid
    // stack on top via Slot's child-wins semantics.
    return (
      <Surface {...surfaceProps}>
        <div ref={setRef as React.Ref<HTMLDivElement>} {...cardSlotProps}>
          {children}
        </div>
      </Surface>
    );
  }
);
