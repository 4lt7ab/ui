# Motion

`@4lt7ab/animations` is the background-animation layer — five full-screen canvas effects plus four CSS gradient backdrops, one per built-in theme that opted into one. Render `<ThemeBackground />` once in your app and it paints the active theme's backdrop; when the theme changes, the previous animation cleans up and the next one takes over.

This package externalizes `@4lt7ab/core` and depends on nothing from `@4lt7ab/ui` — it's pure canvas and CSS. If you want a single full-screen backdrop tied to the theme switcher, that's all you need.

## What this concept covers

| Surface | What it's for |
|---|---|
| `ThemeBackground` | Side-effect-only component that renders the active theme's backdrop to `<body>`. |
| Canvas backgrounds | Per-theme animated canvas functions — `synthwave`, `pipboy`, `neural`, `pacman`, `black-hole`. |
| Static backgrounds | Per-theme CSS gradient functions — `slate`, `warm-sand`, `moss`, `coral`. |
| `BackgroundFunction` | The type every canvas background implements: `(canvas) => cleanup`. |
| `StaticBackgroundFunction` | The type every static background implements: `() => cssString`. |

Import from `@4lt7ab/animations` (or from `@4lt7ab/ui/animations`):

```tsx
import { ThemeBackground, synthwaveBackground } from '@4lt7ab/animations';
import type { BackgroundFunction, StaticBackgroundFunction } from '@4lt7ab/animations';
```

## `ThemeBackground`

One component, one job: paint the active theme's backdrop to the body, full-screen, behind everything else. Side-effect-only — it renders nothing to the React tree (except when a fallback portal is active).

```tsx
import { ThemeProvider } from '@4lt7ab/core';
import { ThemeBackground } from '@4lt7ab/animations';

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeBackground />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeProvider>
  );
}
```

The backdrop is inserted as a `position: fixed; inset: 0; z-index: 0; pointer-events: none;` element prepended to `<body>`, with `aria-hidden="true"` so screen readers skip it. Your app's content needs its own stacking context above `z-index: 0` — any non-auto `z-index` wrapper does it.

**Which backdrop renders:**

| Active theme | Backdrop |
|---|---|
| `synthwave` | Canvas: slow-pulse stars on a deep-blue field. |
| `pipboy` | Canvas: faint green katakana rain. |
| `neural` | Canvas: 22 drifting nodes with pulses traveling between connected pairs. |
| `pacman` | Canvas: Pac-Man and four ghosts crossing the screen, occasionally chasing. |
| `black-hole` | Canvas: n-body gravitational simulation around a central black hole. |
| `slate` | Static: vertical gradient from page to raised, with a 6% primary-color midpoint. |
| `warm-sand` | Static: warm diagonal gradient with an 8% primary-color wash. |
| `moss` | Static: radial green tint at 20% 80%, layered over a vertical gradient. |
| `coral` | Static: warm radial glow at 80% 20%, layered over a 200° gradient. |

A theme that isn't in either registry renders nothing by default. Pass a `fallback` component to handle that case explicitly:

```tsx
function CustomFallback({ theme }: { theme: string }) {
  return <div data-theme-fallback={theme} style={{ background: 'var(--color-surface-page)' }} />;
}

<ThemeBackground fallback={CustomFallback} />
```

The fallback receives the resolved theme name and is rendered into the backdrop's DOM container via a portal, so it gets a real React lifecycle.

**Guards** (baked into `ThemeBackground`, not optional):

- **Desktop only.** If `window.innerWidth <= 768`, the backdrop doesn't mount. Mobile gets a plain token-colored body instead.
- **Reduced motion.** If the user has `prefers-reduced-motion: reduce` set, the backdrop doesn't mount — even for static gradients, since the guard is uniform.
- **Unknown theme.** If neither a canvas nor static background is registered for the resolved theme, and no `fallback` is provided, nothing renders.

Cycle the backdrops inside a bordered frame — same background functions `ThemeBackground` uses, scoped to a single panel so the rest of the page stays on the consumer's current theme.

<LiveExample id="motion-themebackground" />

## How a canvas background works

Every canvas background is a pure function with the same signature:

```ts
export type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;
```

It takes a `<canvas>` element and returns a cleanup function. The implementation owns its own `requestAnimationFrame` loop, its own resize handler, its own state — `ThemeBackground` just hands the canvas over and calls the cleanup when the theme changes or the component unmounts.

That shape makes each background portable: you can use them standalone without `ThemeBackground` at all.

```tsx
import { useEffect, useRef } from 'react';
import { synthwaveBackground } from '@4lt7ab/animations';

export function StandaloneSynthwaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    return synthwaveBackground(ref.current);
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}
```

Each background resizes the canvas to the window on mount and on `resize` events, sets up its own animation loop, and returns a cleanup that tears down listeners and timers. The cleanup contract is strict — calling it must leave no hanging `requestAnimationFrame`, `setInterval`, or `setTimeout` behind.

## Static backgrounds

The non-canvas themes use a simpler shape: a function that returns a CSS string.

```ts
export type StaticBackgroundFunction = () => string;
```

The string is suitable for `element.style.cssText` and uses `var(--...)` theme tokens, so the gradient adapts automatically on theme change without the function being called again.

```tsx
import { slateStaticBackground } from '@4lt7ab/animations';

const css = slateStaticBackground();
// → 'background: linear-gradient( 160deg, var(--color-surface-page) 0%, … );'
```

`ThemeBackground` renders static backgrounds as a fixed-inset `<div>` with the CSS applied directly.

## The five canvas themes

Every canvas background is ~200–400 lines of pure 2D canvas code. None use WebGL, none load assets. The highlights:

### `synthwave`

Deep blue-black background with 60+ seeded stars at fixed percentage coordinates, twinkling on staggered phases. Star colors include magenta, green, and neon-cyan accents to match the theme's palette.

### `pipboy`

14 columns of falling katakana characters (mixed with digits) in Pip-Boy green at 18% opacity, stepping on a 75ms interval. The classic CRT-drip effect, scoped to a narrow column count so the backdrop stays quiet.

### `neural`

22 nodes drifting on shallow velocities. Edges draw between nodes within 180px. Every 3 seconds a pulse spawns on a random edge and travels from one node to the other. The accent color is read live from `--color-text-link`, so the network recolors with the theme.

### `pacman`

Pac-Man crossing the screen horizontally, trailed by four colored ghosts at 110px spacing and 130px chase gap. Dots line the row at 40px spacing; ghosts randomly scare and turn blue for 180 frames, giving Pac-Man a chance to eat them. Direction randomizes on each crossing.

### `black-hole`

N-body gravitational simulation: six heavy bodies and 50 light bodies orbit a central black hole with `mass = 8000`. The black hole slow-drifts across the screen. Light bodies that cluster within 60px of a heavy body trigger an ejection — three or more clustered and the heavy body erupts, flinging them outward at 2.5–5.5× speed. Each heavy body has a 120-frame cooldown between eruptions.

## Custom backgrounds

To ship a new canvas background for a custom theme:

1. Write a function matching `BackgroundFunction`. Own your own raf loop and cleanup.
2. Register it yourself — pair it with the matching theme definition in your app.

`ThemeBackground`'s built-in registry isn't exposed for extension today (the registry is a module-local `const`). The design shortcut: render a sibling component that mounts the canvas under the same guards, scoped to the themes you care about. The `fallback` prop gives you the rendering hook; everything else is a call to your `BackgroundFunction` inside `useEffect`.

Canvas backgrounds read theme tokens at call time via `getComputedStyle(document.documentElement).getPropertyValue('--…')` when they want theme-coupled colors (see `neural.ts` as the reference). That pattern keeps the background responsive to `setTheme()` without requiring the animation function to subscribe to React context.

## Performance and accessibility

- **Desktop-only guard.** Animated canvases don't mount on narrow viewports. Mobile users see the theme's token colors on the body directly.
- **Reduced-motion guard.** `prefers-reduced-motion: reduce` disables the backdrop entirely — no fallback to a still image, because every backdrop's "final frame" is theme-dependent and would require per-theme snapshots.
- **Pointer events.** The backdrop container is `pointer-events: none`, so clicks always reach the app's content.
- **ARIA.** The backdrop carries `aria-hidden="true"`. Screen readers skip it.

No runtime flag toggles the guards. If you need a variant that ignores one of them, the path is a custom wrapper that calls the background functions directly, not a `ThemeBackground` prop.

## Where to next

- **[Theming](#/theming)** — where the canvas backgrounds get their accent colors, and where a theme declares its rhythm for `useThemeRhythm()`.
- **[Getting started](#/getting-started)** — the minimal setup that mounts `ThemeProvider + ThemeBackground`.
