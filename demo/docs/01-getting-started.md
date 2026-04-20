# Getting started

`@4lt7ab` is a React component library distributed as four packages built on a shared theme platform. Add one git dependency, wrap your app in `ThemeProvider`, and every component reads from the active theme's CSS custom properties — switch themes at runtime and the tree recolors without remounting.

This page walks the on-ramp end to end: install, peer deps, the smallest call site that mounts, adding a theme background, building a real composition, and where to read next once the basics render.

## What this concept covers

| Step | Surface |
|---|---|
| Install | Single git dependency with subpath imports. |
| Peer deps | React 19 (always), markdown peers when you pull in `@4lt7ab/content`. |
| Wrap | `ThemeProvider` — one component, one prop, the whole tree opts in. |
| Paint | `ThemeBackground` for the canvas-backed themes; `usePageBackground()` for the body fill. |
| Compose | `Container` + `Card` + `Prose` + `Button` — a realistic first render. |
| Next | Pointers to the concept docs that go deeper. |

## Install

The library ships as a single git dependency with subpath exports. Add it to your `package.json`:

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.4.0"
  }
}
```

Then install with whatever package manager you use:

```bash
bun install
# or: npm install / yarn install / pnpm install
```

Import from the subpath that matches the package you want:

```ts
import { ThemeProvider, useTheme } from '@4lt7ab/ui/core';
import { Button, Card, Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';
```

The four subpaths map one-to-one to the four packages. `@4lt7ab/ui/ui` re-exports the entire `@4lt7ab/core` API, so `ThemeProvider`, `useTheme`, `semantic`, `typography`, and `useInjectStyles` are reachable from either subpath — pick the one that keeps your import block shortest.

## Peer dependencies

| Peer | Required for | Notes |
|---|---|---|
| `react`, `react-dom` ^19 | All four packages | The library does not bundle React. You provide it. |
| `react-markdown` ^9 | `@4lt7ab/ui/content` | Only needed if you import `Markdown`. `Prose`, `Quote`, and `MarginNote` work without it. |
| `remark-gfm` ^4 | `@4lt7ab/ui/content` | Same — pulled in alongside `react-markdown` for GFM table/strikethrough/task-list support. |

`@4lt7ab/core` is an implicit peer for the other three packages, but the single git dependency above carries it — no extra install step is needed.

## Wrap the app in `ThemeProvider`

Every component reads from CSS custom properties that `ThemeProvider` installs onto `document.documentElement`. Mount it once, at the root, and every descendant picks up the active theme:

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="warm-sand" applyPageStyles={false}>
      {children}
    </ThemeProvider>
  );
}
```

`defaultTheme` is the fallback used the first time a visitor lands — after that, the choice persists to `localStorage` under the `ui-theme` key. `applyPageStyles={false}` opts out of the body-paint side effect so you control where the page background is drawn (next section). The default is `true` today and will flip to `false` in v2; setting it explicitly silences the deprecation warning and locks your intent.

That's the minimum viable mount. A button rendered inside this provider already styles itself with the active theme's tokens — no global CSS, no token plumbing.

## Add a theme background

Themes paint two surfaces: the body and (optionally) a full-screen canvas behind your content. Both are opt-in.

For the body, call `usePageBackground()` from any component inside `ThemeProvider`:

```tsx
import { usePageBackground } from '@4lt7ab/core';

function RootLayout({ children }: { children: React.ReactNode }) {
  usePageBackground();
  return <>{children}</>;
}
```

It writes `document.body.style.backgroundColor = var(--color-surface-page)` on mount and restores the previous value on unmount. Because it writes the `var(...)` reference (not a resolved color), the body stays in sync with theme changes without a React rerender.

For the canvas — neon grids, terminal scanlines, neural networks, and so on — drop in `ThemeBackground`:

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { ThemeBackground } from '@4lt7ab/ui/animations';

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="synthwave" applyPageStyles={false}>
      <ThemeBackground />
      {children}
    </ThemeProvider>
  );
}
```

`ThemeBackground` renders a fixed-position canvas at `z-index: 0` with `pointer-events: none`, swaps its animation when the theme changes, and renders nothing for themes that don't have a background registered. The four canvas-backed themes (`synthwave`, `pipboy`, `neural`, `pacman`) get full animations; the rest get a static CSS gradient — no configuration either way.

## Build something real

The pieces above compose into a working first render:

```tsx
import { ThemeProvider, usePageBackground } from '@4lt7ab/ui/core';
import { Button, Card, Container, Stack } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';

function Body() {
  usePageBackground();
  return (
    <Container width="prose">
      <Card>
        <Stack gap="md">
          <Prose>
            <h1>Hello</h1>
            <p>
              Every visual decision in this card — the surface color, the
              text color, the radii, the typography — comes from the active
              theme's tokens. Switch the theme and the card recolors.
            </p>
          </Prose>
          <Button variant="primary">Click me</Button>
        </Stack>
      </Card>
    </Container>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand" applyPageStyles={false}>
      <ThemeBackground />
      <Body />
    </ThemeProvider>
  );
}
```

A few things worth noting in this snippet:

- **`Container width="prose"`** caps line length at a comfortable reading width and centers the content. Other widths: `narrow` (tight forms and dialogs), `wide` (dashboards and tables), `full` (no max-width).
- **`Card`** is the opinionated `Surface` preset — border, shadow, padding, optional hover and rhythm-synced glow. It's a thin layer over `Surface`; reach for `Surface level="raised"` directly when you want the chrome without the card affordance.
- **`Prose`** automatically styles every nested HTML element (headings, paragraphs, lists, links, blockquotes, code) using the active theme's typography tokens. You write plain HTML; it handles the rhythm.
- **`Stack gap="md"`** is the right primitive for "arrange these in a column with consistent gaps." Use `direction="horizontal"` for rows.

That's the whole on-ramp. From here, every component you reach for already lives inside the theme system — no per-component setup, no token mapping work.

## Where to next

- **[Theming](#/theming)** — tokens, themes, `useTheme`, `usePageBackground`, custom themes, and the `ThemePicker` component for letting users switch on the fly.
- **[Prose](#/prose)** — `@4lt7ab/content` in depth: the `Markdown` renderer, its `components` + `remarkPlugins` seam for embedding live React widgets, and the prose primitives (`Quote`, `MarginNote`, `ThinkingCycle`).
- **[Layout](#/layout)** — `Stack`, `Container`, `Grid`, `Divider`, `Surface`, `Card`, and the four page-envelope organisms (`AppShell`, `DataTablePage`, `DetailPage`, `EmptyPage`) that stitch them into full screens.
- **[Forms](#/forms)** — `Input`, `Textarea`, `Select`, `Combobox`, `ChipPicker`, the date pickers, `Field`, and the `FormLayout` page shell with its sticky save bar and dirty-state guard.
- **[Data](#/data)** — `Table` + `Table.FilterBar`, `Pagination`, the status indicators (`Badge`, `StatusDot`, `ProgressBar`, `Skeleton`), and the inline + full-page empty states.
- **[Modals](#/modals)** — `Overlay`, `ModalShell`, `ConfirmDialog`, `CommandPalette`, `WizardDialog`, `Toast`, `AlertBanner`, `ErrorBoundary`.
- **[Motion](#/motion)** — `ThemeBackground`, the per-theme canvas implementations, and standalone usage outside the theme system.
