# @4lt7ab/animations

Canvas background animations and static CSS backdrops tied to the active theme, built on the [`@4lt7ab/core`](../core/README.md) theme platform.

The full narrative — when each backdrop renders, how the desktop-only and reduced-motion guards work, how to use a background standalone without `ThemeBackground`, how each canvas function is structured, and the `Surface` + `usePageBackground` layering pattern — lives in the [Motion concept doc](../../demo/docs/08-motion.md). Run `bun run dev` from the repo root to read it locally with the live `<LiveExample>` widget; the same file renders fine on GitHub for a static read.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.4.0"
  }
}
```

`@4lt7ab/animations` ships inside the `@4lt7ab/ui` git dep and is reachable via the `/animations` subpath. **Peer dependencies:** `@4lt7ab/core`, `react`, and `react-dom` ^19. You provide React — the library doesn't bundle it.

## Hello world

Wrap your app in `ThemeProvider` and drop a `ThemeBackground` inside it. That's the whole API for the common case:

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { ThemeBackground } from '@4lt7ab/ui/animations';

export function App() {
  return (
    <ThemeProvider defaultTheme="synthwave">
      <ThemeBackground />
      <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {/* your app */}
      </main>
    </ThemeProvider>
  );
}
```

`ThemeBackground` renders nothing to the React tree. It paints into a fixed `inset: 0; z-index: 0; pointer-events: none;` element prepended to `<body>`. Anything you want visible above it needs its own stacking context — any non-`auto` `z-index` wrapper does it.

## Background registry

Five canvas backgrounds, four static gradients. `ThemeBackground` picks the one matching the active theme automatically; the same functions are also importable on their own.

| Function | Theme | Effect |
|---|---|---|
| `synthwaveBackground` | `synthwave` | Slow-pulse stars on a deep-blue field. |
| `pipboyBackground` | `pipboy` | Faint green katakana rain. |
| `neuralBackground` | `neural` | Drifting nodes with pulses traveling between connected pairs. |
| `pacmanBackground` | `pacman` | Pac-Man and four ghosts crossing the screen. |
| `blackHoleBackground` | `black-hole` | N-body gravitational simulation around a central black hole. |

Every canvas function has the same shape:

```ts
export type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;
```

Pass a `<canvas>` element, get a cleanup function back.

| Function | Theme | Effect |
|---|---|---|
| `slateStaticBackground` | `slate` | Vertical gradient with a 6% primary-color midpoint. |
| `warmSandStaticBackground` | `warm-sand` | Warm diagonal gradient with an 8% primary-color wash. |
| `mossStaticBackground` | `moss` | Radial green tint over a vertical gradient. |
| `coralStaticBackground` | `coral` | Warm radial glow over a 200° gradient. |

Static functions return CSS suitable for `element.style.cssText` and use `var(--...)` tokens, so the gradient tracks `setTheme()` without re-running:

```ts
export type StaticBackgroundFunction = () => string;
```

Themes outside both registries render nothing — pass a `fallback` component to `ThemeBackground` to handle that case. The full `fallback` contract lives in the Motion concept doc.

## Where to next

- [Motion concept doc](../../demo/docs/08-motion.md) — `ThemeBackground`'s desktop-only and reduced-motion guards, the `fallback` portal, standalone canvas usage, the per-background implementation notes, and the `Surface` + `usePageBackground` layering pattern.
- [`@4lt7ab/core`](../core/README.md) — the theme platform. Required peer; `ThemeBackground` reads the active theme from its context.
- [`@4lt7ab/ui`](../ui/README.md) — pair with `Surface level="page"` and `usePageBackground()` for the cleanest layering of app content above the canvas.
- [CLAUDE.md](../../CLAUDE.md) — architecture, conventions, dev commands, release process.
