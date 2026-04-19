# @4lt7ab/animations

Canvas background animations that respond to the active theme.

For the full narrative — when each background runs, how reduced-motion and mobile are handled, and the canvas/static/fallback registry — see the **Motion** concept doc (`demo/docs/08-motion.md`). Run `bun run dev` at the repo root to browse.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/core": "github:4lt7ab/ui#v0.2.0",
    "@4lt7ab/animations": "github:4lt7ab/ui#v0.2.0"
  }
}
```

Peer dependencies: `@4lt7ab/core`, `react`, `react-dom` ^19.0.0.

## ThemeBackground

Drop-in component that renders the correct canvas animation for the active theme. Place it inside a `ThemeProvider` and it handles everything — theme switches, cleanup, resize.

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { ThemeBackground } from '@4lt7ab/ui/animations';

function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
      <ThemeBackground />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

`ThemeBackground` renders nothing to the React tree. It creates a fixed-position canvas behind your content (`z-index: 0`, `pointer-events: none`). When the theme changes, it swaps the animation automatically.

---

## Available Backgrounds

| Function | Theme | Description |
|----------|-------|-------------|
| `synthwaveBackground` | synthwave | Neon grid perspective animation |
| `pipboyBackground` | pipboy | Green terminal scanline effect |
| `neuralBackground` | neural | Connected node network |
| `pacmanBackground` | pacman | Retro arcade elements |

Themes without a canvas animation (`slate`, `warm-sand`, `moss`, `coral`) get a static CSS background — a subtle gradient or radial effect using the theme's own color tokens. No configuration needed; `ThemeBackground` detects the theme and picks the right strategy automatically.

### Fallback for Custom Themes

For themes without a built-in background (canvas or static), pass a `fallback` component:

```tsx
function CustomBackground({ theme }: { theme: string }) {
  return <div style={{ width: '100%', height: '100%', background: '#111' }} />;
}

<ThemeBackground fallback={CustomBackground} />
```

The fallback renders inside a fixed-position container at `z-index: 0`, just like the built-in backgrounds. It only activates for themes that have no registered canvas or static background.

---

## Static Backgrounds

| Function | Theme | Description |
|----------|-------|-------------|
| `slateStaticBackground` | slate | Subtle directional gradient with cool blue-gray tint |
| `warmSandStaticBackground` | warm-sand | Diagonal gradient with earthy warmth |
| `mossStaticBackground` | moss | Radial green tint like forest light |
| `coralStaticBackground` | coral | Warm radial glow from the top-right |

Static backgrounds use `var(--...)` theme tokens so they adapt automatically when token values change.

---

## Standalone Usage

For full control, use the background functions directly with your own canvas:

```tsx
import { synthwaveBackground } from '@4lt7ab/ui/animations';

const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
const cleanup = synthwaveBackground(canvas);

// Later, to stop the animation:
cleanup();
```

Every background function has the same signature:

```ts
type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;
```

Pass a canvas element, get back a cleanup function that stops the animation and releases resources.

---

## Behavior

- **Reduced motion:** Animations are disabled when `prefers-reduced-motion: reduce` is active.
- **Mobile:** Only activates on viewports wider than 768px. No animations on mobile.
- **Z-index:** The canvas renders at `z-index: 0` with `position: fixed`. Your app content should layer above it. Use `Surface` with `level="page"` from `@4lt7ab/ui` for themed containers that stack correctly.
- **Cleanup:** Animations clean up automatically on theme change or component unmount.

## Layering app content above the canvas

Use `Surface` from `@4lt7ab/ui` as the page container so your content sits above the canvas animation. For body-level theming (painting `document.body`), call the `usePageBackground()` hook from `@4lt7ab/core`:

```tsx
import { ThemeProvider, usePageBackground } from '@4lt7ab/ui/core';
import { Surface } from '@4lt7ab/ui/ui';
import { ThemeBackground } from '@4lt7ab/ui/animations';

function App() {
  usePageBackground();
  return (
    <ThemeProvider defaultTheme="warm-sand">
      <ThemeBackground />
      <Surface level="page" style={{ minHeight: '100vh', position: 'relative' }}>
        {/* Content here sits above the animation */}
      </Surface>
    </ThemeProvider>
  );
}
```
