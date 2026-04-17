# Component ↔ Canvas Bridge

Status: **accepted** — first consumer is the Card border-glow prototype.
Owner: `@4lt7ab/core`
Last updated: 2026-04-17

## Problem

Themes in `@4lt7ab/core` already carry a temporal personality via `ThemeRhythm` (bpm, easing, intensity), and `@4lt7ab/animations` paints that personality on a background canvas. But components — Card, Button, Badge, any surface that might "breathe" — have no sanctioned way to read from that same temporal signal.

`StatusDot` consumes `useThemeRhythm().durationCss` today, but only as a CSS duration knob. There is no documented contract for:

- a component that wants the **live phase** (0..1) rather than a duration,
- a component that wants to opt in **without paying a React render per frame**,
- a component that needs a well-defined **no-op fallback** when no rhythm is active or the user prefers reduced motion.

This doc defines the bridge layer so future components have one, obvious entry point.

## Decision

**Extend `useThemeRhythm`. Do not add a sibling hook.**

The existing hook already exposes everything a component needs: `config`, `phaseRef`, `subscribe(cb)`, `durationCss`. A second hook would fragment the API and force components to pick between two overlapping sources of truth. The engine is a singleton; the hook around it should be singular too.

What this task formalizes is the **consumption contract** — how components call into the hook, what they're allowed to assume, and what they must fall back to.

## API

The public surface lives in `@4lt7ab/core` and is imported as:

```ts
import { useThemeRhythm } from '@4lt7ab/core';
```

### Signature

```ts
function useThemeRhythm(): ThemeRhythmHandle;

interface ThemeRhythmHandle {
  /** Active rhythm config from the current theme. `null` if the theme has no rhythm. */
  config: ThemeRhythm | null;

  /**
   * Mutable ref whose `.current` holds the current phase 0..1 (shaped by easing
   * and scaled by intensity). Read it inside your own rAF or event handlers.
   * Only updated while at least one subscribe() callback is active.
   */
  phaseRef: MutableRefObject<number>;

  /**
   * Subscribe a callback that fires every frame with the latest phase.
   * Returns an unsubscribe function. Starts the shared rAF loop if this is the
   * first subscriber; stops it when the last subscriber unsubscribes.
   */
  subscribe: (cb: (phase: number) => void) => () => void;

  /**
   * Animation duration string derived from `config.bpm` (e.g. `'750ms'`),
   * suitable for CSS `animation-duration`. `undefined` if no rhythm is active,
   * so callers can fall back to their default.
   */
  durationCss: string | undefined;
}

interface ThemeRhythm {
  /** Beats per minute. */
  bpm: number;
  /** Waveform shape. Default `'sine'`. */
  easing?: 'sine' | 'triangle' | 'square' | 'sawtooth';
  /** Output scale 0..1. Default `1`. */
  intensity?: number;
}
```

### Which field to use

| Use case | Read from |
|---|---|
| CSS `animation-duration` synced to tempo | `durationCss` |
| Continuous visual driven by phase (glow strength, scale, opacity) | `subscribe` + direct DOM write |
| One-off reads inside an event handler | `phaseRef.current` |
| Conditional rendering based on whether a theme has rhythm | `config` (boolean-check) |

Components **must not** store `phase` in React state. Doing so forces a render every frame and violates the perf budget below.

## Consumption pattern

The canonical pattern for a component that wants a live visual driven by phase:

```tsx
import { useEffect, useRef } from 'react';
import { useThemeRhythm, useInjectStyles, semantic as t } from '@4lt7ab/core';

export function Card({ glow = false, children }: { glow?: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { config, subscribe } = useThemeRhythm();

  useEffect(() => {
    // Gate subscription on both opt-in and rhythm availability.
    // When config is null, do nothing — the component renders with no glow.
    if (!glow || !config || !ref.current) return;

    const el = ref.current;
    const unsubscribe = subscribe((phase) => {
      // Direct DOM write, no React state — phase updates at rAF rate.
      el.style.setProperty('--card-glow-strength', String(phase));
    });
    return unsubscribe;
  }, [glow, config, subscribe]);

  return (
    <div
      ref={ref}
      style={{
        border: `1px solid ${t.colorBorder}`,
        boxShadow: '0 0 calc(var(--card-glow-strength, 0) * 12px) var(--color-action-primary)',
      }}
    >
      {children}
    </div>
  );
}
```

Key points in the pattern:

1. The `glow` prop is **opt-in**. A Card with no `glow` prop never subscribes and behaves identically to a Card shipped before this bridge existed.
2. The effect early-returns when `config === null`. The component is still rendered; it just isn't animated.
3. Updates go through `element.style.setProperty`, never through `setState`. The React tree is untouched by per-frame work.
4. The cleanup function from `subscribe` is returned directly from the effect — if the last subscriber unmounts, the engine's rAF loop stops automatically.

## Fallback contract

Every component consuming this bridge **must** satisfy all three fallback conditions. They are not optional — a component that animates when it shouldn't is a bug, and an inert component with a mysterious prop is worse than no opt-in at all.

### 1. No rhythm on the active theme

When `config === null`, the component renders in its default, un-animated state. No CSS custom properties from the bridge are set; no frame-rate work is scheduled.

Themes with no rhythm today: `slate`, `warm-sand`, `moss`, `coral`, `pacman`.

### 2. Prefers reduced motion

The engine already honors `prefers-reduced-motion: reduce` — subscribers are called **once** with a pinned neutral value (`0.5`), and no rAF loop starts. Components inherit this for free as long as they don't also install their own CSS `@keyframes` animation. If a component ships keyframes as a secondary path (like `StatusDot` does), it **must** wrap them in `@media (prefers-reduced-motion: reduce) { animation: none; }`.

### 3. Opt-in prop defaults to off

Components add a boolean (or enum including `'off'`) prop for the bridge-driven effect. The default value is the one that produces no subscription and no visual change from pre-bridge behavior. This preserves backwards compatibility across package versions.

## Performance budget

**The bridge layer must add ≤ 1ms of main-thread work per frame per subscribed component.**

This is measured in the Chrome DevTools Performance profile with a theme that has rhythm (e.g. `synthwave`, 80bpm sine) and a single subscribed component on screen.

Implications for component authors:

- Per-frame work happens **in the subscriber callback only**. No React reconciliation, no style recomputation that touches layout.
- Prefer `style.setProperty` on a CSS custom property over direct style mutations that affect layout (width, height, margin). Keep updates to `opacity`, `box-shadow`, `filter`, `transform`, and custom-property-driven paint.
- Do not read layout values inside the subscriber callback. `getBoundingClientRect`, `offsetTop`, etc. force synchronous layout and blow the budget.
- If a component needs derived values, compute them once per config change (in an effect that depends on `config`), not per frame.

The engine itself has a separate, tighter budget — the shared rAF loop runs regardless of subscriber count and is expected to stay under ~0.2ms per tick.

## Non-goals

- **Animation authoring.** This bridge exposes phase; it does not describe how a component should *use* phase. Component authors are on their own for deciding what "pulse" means visually for their component.
- **Multiple concurrent rhythms.** There is one active rhythm at a time, keyed off the active theme. Components wanting independent tempos should not use this bridge.
- **Non-canvas signals.** If a future feature wants to surface mouse position, scroll velocity, or other UI-derived signals to components, it gets its own hook. This bridge is specifically the theme/canvas rhythm.

## Open questions

None blocking the first consumer. Worth revisiting after ≥ 3 components ship against the bridge:

- Do we need a `phaseToCss(phase, { min, max, unit })` helper, or do component authors happily write `calc(var(--x) * 12px)` themselves?
- Should `subscribe` accept a throttle option for components that don't need 60Hz updates? (Current answer: no — add it when a real consumer needs it.)
