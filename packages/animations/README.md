# @4lt7ab/animations

Canvas background animations that match the active theme. Four animated backgrounds for themes that support them.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/animations": "github:username/component-library#v0.1.0",
    "@4lt7ab/ui": "github:username/component-library#v0.1.0"
  }
}
```

Peer dependencies: `@4lt7ab/ui`, `react`, `react-dom` (^19.0.0).

## ThemeBackground

The simplest way to add a background animation. Drop it inside a `ThemeProvider` and it automatically renders the correct animation for the active theme:

```tsx
import { ThemeProvider } from '@4lt7ab/ui';
import { ThemeBackground } from '@4lt7ab/animations';

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

## Available Backgrounds

| Background | Theme |
|------------|-------|
| `synthwaveBackground` | synthwave |
| `pipboyBackground` | pipboy |
| `neuralBackground` | neural |
| `pacmanBackground` | pacman |

Themes without a registered background (slate, warm-sand, moss, coral) render no canvas -- the theme's CSS background applies normally.

## Standalone Usage

For full control, use the background functions directly with your own canvas:

```tsx
import { synthwaveBackground } from '@4lt7ab/animations';

const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
const cleanup = synthwaveBackground(canvas);

// Later, to stop the animation:
cleanup();
```

Each background function has the signature:

```ts
type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;
```

Pass a canvas element, get back a cleanup function that stops the animation and releases resources.

## Behavior

- **Reduced motion**: Disabled when `prefers-reduced-motion: reduce` is active.
- **Viewport guard**: Only activates on viewports wider than 768px. No animations on mobile.
- **Z-index stacking**: The canvas renders at `z-index: 0` with `position: fixed`. Your app content should be above it -- use `ThemeSurface` from `@4lt7ab/ui` for themed containers that layer correctly over the background.
- **Cleanup**: Animations are cleaned up automatically when the theme changes or the component unmounts.

## Working with ThemeSurface

`ThemeSurface` from `@4lt7ab/ui` provides a themed container with a background that can be made transparent, allowing the canvas animation to show through:

```tsx
import { ThemeProvider, ThemeSurface } from '@4lt7ab/ui';
import { ThemeBackground } from '@4lt7ab/animations';

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
