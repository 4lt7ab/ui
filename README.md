# @4lt7ab

The components I reuse across my projects, built to primitive quality.

A React component library distributed as four packages built on a shared theme platform. The full on-ramp — install, peer deps, the smallest call site that mounts, where to read next — lives in [Getting started](demo/docs/01-getting-started.md). Run `bun run dev` from the repo root to read it locally with the live widgets; the same file renders fine on GitHub for a static read. Contributors should start at [CLAUDE.md](CLAUDE.md) for architecture, conventions, and release process.

## Packages

| Package | What it does |
|---|---|
| [`@4lt7ab/core`](packages/core/README.md) | Theme platform: tokens, themes, `ThemeProvider`, `useTheme`, `useInjectStyles`. |
| [`@4lt7ab/ui`](packages/ui/README.md) | Icons and interactive UI components. Re-exports `@4lt7ab/core` for convenience. |
| [`@4lt7ab/content`](packages/content/README.md) | Layout and prose components for blogs and docs. |
| [`@4lt7ab/animations`](packages/animations/README.md) | Canvas background animations tied to themes. |

## Install

Single git dependency with subpath exports:

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.4.0"
  }
}
```

```bash
bun install
# or: npm install / yarn install / pnpm install
```

Import from the subpath you need:

```ts
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Button, Card, Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';
```

**Peer dependencies:** `react` and `react-dom` ^19. You provide React — the library doesn't bundle it.

## Hello world

```tsx
import { ThemeProvider, usePageBackground } from '@4lt7ab/ui/core';
import { Button, Card, Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';

function Body() {
  usePageBackground();
  return (
    <Container width="prose">
      <Card>
        <Prose>
          <h1>Hello</h1>
          <p>Switch the theme and this card recolors.</p>
        </Prose>
        <Button variant="primary">Click me</Button>
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

## Where to next

- [Getting started](demo/docs/01-getting-started.md) — the full on-ramp with peer deps, `ThemeProvider` configuration, page background options, and a worked first composition.
- [Theming](demo/docs/02-theming.md) — tokens, themes, `useTheme`, `usePageBackground`, `ThemePicker`, custom themes.
- [Prose](demo/docs/03-prose.md) — `@4lt7ab/content`: `Markdown` (with the `components` + `remarkPlugins` island-embedding seam), `Prose`, `Quote`, `MarginNote`, `ThinkingCycle`.
- [Layout](demo/docs/04-layout.md) — `Stack`, `Container`, `Grid`, `Surface`, `Card`, and the page-envelope organisms (`AppShell`, `DataTablePage`, `DetailPage`, `EmptyPage`).
- [Forms](demo/docs/05-forms.md) — `Input`, `Textarea`, `Select`, `Combobox`, `ChipPicker`, the date pickers, `Field`, and `FormLayout`.
- [Data](demo/docs/06-data.md) — `Table` + `Table.FilterBar`, `Pagination`, status indicators, empty states.
- [Modals](demo/docs/07-modals.md) — `Overlay`, `ModalShell`, `ConfirmDialog`, `CommandPalette`, `WizardDialog`, `Toast`, `AlertBanner`, `ErrorBoundary`.
- [Motion](demo/docs/08-motion.md) — `ThemeBackground`, per-theme canvas backgrounds, standalone usage.
- [CLAUDE.md](CLAUDE.md) — architecture, conventions, dev commands, release process.
