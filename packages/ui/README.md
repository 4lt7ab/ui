# @4lt7ab/ui

Icons and interactive UI components for React, built on the [`@4lt7ab/core`](../core/README.md) theme platform.

The full narrative — every component's prop table, keyboard contract, and a `<LiveExample>` that exercises the realistic API — is split across four concept docs in `demo/docs/`: layout, forms, data, and modals. Run `bun run dev` from the repo root to read them locally with the live widgets; the same files render fine on GitHub for a static read.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.4.0"
  }
}
```

**Peer dependencies:** `react` and `react-dom` ^19. You provide React — the library doesn't bundle it.

**Re-exports `@4lt7ab/core`.** `ThemeProvider`, `useTheme`, `usePageBackground`, `semantic`, `typography`, and `useInjectStyles` are all available from `@4lt7ab/ui/core` (or directly via `@4lt7ab/ui/ui`). You don't install `@4lt7ab/core` separately — it ships inside this git dep.

## Hello world

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Button, Card, Container, Stack } from '@4lt7ab/ui/ui';

export function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
      <Container width="prose">
        <Card>
          <Stack gap="md">
            <h1>Hello</h1>
            <p>Switch the theme and this card recolors automatically.</p>
            <Button variant="primary" onClick={() => alert('clicked')}>
              Click me
            </Button>
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
```

The selected theme persists to `localStorage` automatically. Wrap once at the app root; every component below `ThemeProvider` reads from the same context.

## Where to next

- [Layout concept doc](../../demo/docs/04-layout.md) — `Stack`, `Container`, `Grid`, `Divider`, `Surface`, `Card`, `Header`, `TabStrip`, `TopBar`, the `Icon` registry, and the page-envelope organisms (`AppShell`, `DataTablePage`, `DetailPage`, `EmptyPage`).
- [Forms concept doc](../../demo/docs/05-forms.md) — `Input`, `Textarea`, `Field`, `Select`, `Combobox`, `ChipPicker`, `SegmentedControl`, `SearchInput`, `Calendar`, `DatePicker`, `DateRangePicker`, `FormLayout`, plus the `tagChipStyle` and `sectionLabelStyle` exports.
- [Data concept doc](../../demo/docs/06-data.md) — `Table` and `Table.FilterBar`, `Pagination`, `Badge`, `StatusDot`, `ProgressBar`, `Skeleton`, `EmptyState`.
- [Modals concept doc](../../demo/docs/07-modals.md) — `Overlay`, `ModalShell`, `ConfirmDialog`, `CommandPalette`, `WizardDialog`, `Toast`, `AlertBanner`, `ErrorBoundary`.
- [Theming concept doc](../../demo/docs/02-theming.md) — the re-exported `@4lt7ab/core` surface: tokens, themes, `useTheme`, `usePageBackground`, `useInjectStyles`. Also covered in [`@4lt7ab/core`'s README](../core/README.md).
- [Motion concept doc](../../demo/docs/08-motion.md) — pair `ThemeBackground` from [`@4lt7ab/animations`](../animations/README.md) with the four canvas-backed themes (`synthwave`, `pipboy`, `neural`, `pacman`).
- [Prose concept doc](../../demo/docs/03-prose.md) — when you want article body, blockquotes, or markdown rendering, reach for [`@4lt7ab/content`](../content/README.md) instead.
- [Getting started](../../demo/docs/01-getting-started.md) — install, peer deps, `ThemeProvider` configuration, and a worked first composition.
- [`packages/ui/src/icons/icons.tsx`](src/icons/icons.tsx) — the 25-icon registry source, when the names matter and you'd rather grep than open the docs site.
- [CLAUDE.md](../../CLAUDE.md) — architecture, conventions, dev commands, release process, and the design tenets (chrome-minimization + merge-before-retire) that govern what earns a place here.

