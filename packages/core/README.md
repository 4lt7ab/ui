# @4lt7ab/core

Theme platform for React: tokens, themes, `ThemeProvider`, `useTheme`, `usePageBackground`, `useInjectStyles`. Every other `@4lt7ab` package builds on this one.

The full narrative — three token layers, theme switching, custom themes, the body-paint contract, and the singleton style hook — lives in the [Theming concept doc](../../demo/docs/02-theming.md). Run `bun run dev` from the repo root to read it locally with the live `<LiveExample>` widgets; the same file renders fine on GitHub for a static read.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.4.0"
  }
}
```

`@4lt7ab/core` ships inside the `@4lt7ab/ui` git dep and is reachable via the `/core` subpath. **Peer dependencies:** `react` and `react-dom` ^19. You provide React — the library doesn't bundle it.

## Hello world

Wrap your app in `ThemeProvider`, then call `useTheme` (or any other `@4lt7ab` component) anywhere underneath:

```tsx
import { ThemeProvider, useTheme } from '@4lt7ab/ui/core';

function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {Array.from(themes.values()).map((t) => (
        <option key={t.name} value={t.name}>{t.label}</option>
      ))}
    </select>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand" applyPageStyles={false}>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
```

The selected theme persists to `localStorage` automatically. Setting `applyPageStyles={false}` opts out of the body-paint side effect so you control where the page background is drawn — see [`usePageBackground()`](../../demo/docs/02-theming.md) in the Theming doc.

## Built-in themes

Eight themes ship in the box. Hard cap is 10 — adding a ninth retires an existing one.

| Theme | Vibe |
|-------|------|
| `synthwave` | Neon on dark purple |
| `slate` | Clean neutral gray |
| `warm-sand` | Warm earth tones (default) |
| `moss` | Dark green, natural |
| `coral` | Warm coral accent on dark |
| `pipboy` | Green-on-black terminal |
| `neural` | Deep blue, data-viz feel |
| `pacman` | Retro arcade yellow |

The four canvas-backed themes (`synthwave`, `pipboy`, `neural`, `pacman`) get full animations from [`@4lt7ab/animations`](../animations/README.md); the rest get a static CSS gradient.

## Where to next

- [Theming concept doc](../../demo/docs/02-theming.md) — tokens, `ThemeProvider`, `useTheme`, `usePageBackground`, the semantic token surface, custom themes, built-in keyframes, and `useInjectStyles`.
- [Getting started](../../demo/docs/01-getting-started.md) — install, peer deps, the smallest call site that mounts, and a worked first composition.
- [`@4lt7ab/animations`](../animations/README.md) — pair with `ThemeBackground` for the canvas-backed themes.
- [CLAUDE.md](../../CLAUDE.md) — architecture, conventions, dev commands, release process.
