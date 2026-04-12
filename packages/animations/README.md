# @4lt7ab/animations

Canvas background animations that respond to the active theme.

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
    <ThemeProvider defaultTheme="synthwave">
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

Themes without a registered background (`slate`, `warm-sand`, `moss`, `coral`) render no canvas — the theme's CSS background color applies normally.

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
- **Z-index:** The canvas renders at `z-index: 0` with `position: fixed`. Your app content should layer above it. Use `ThemeSurface` from `@4lt7ab/ui` for themed containers that stack correctly.
- **Cleanup:** Animations clean up automatically on theme change or component unmount.

## Layering with ThemeSurface

`ThemeSurface` from `@4lt7ab/ui` provides a themed container that sits above the canvas animation:

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { ThemeSurface } from '@4lt7ab/ui/ui';
import { ThemeBackground } from '@4lt7ab/ui/animations';

function App() {
  return (
    <ThemeProvider defaultTheme="synthwave">
      <ThemeBackground />
      <ThemeSurface>
        {/* Content here sits above the animation */}
      </ThemeSurface>
    </ThemeProvider>
  );
}
```
