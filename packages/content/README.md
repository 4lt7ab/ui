# @4lt7ab/content

Prose and reading-surface components for blogs, docs, and long-form pages, built on the [`@4lt7ab/core`](../core/README.md) theme platform.

The full narrative — every component's prop table, the typographic rules `Prose` applies, and the `components` + `remarkPlugins` seam that lets `Markdown` embed React islands inline with the prose — lives in the [Prose concept doc](../../demo/docs/03-prose.md). Run `bun run dev` from the repo root to read it locally with the live `<LiveExample>` widgets; the same file renders fine on GitHub for a static read. The docs site itself is a `@4lt7ab/content` consumer — every concept doc you can read renders through this package's `Markdown` component.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.4.0"
  }
}
```

`@4lt7ab/content` ships inside the `@4lt7ab/ui` git dep and is reachable via the `/content` subpath. **Peer dependencies:** `react` and `react-dom` ^19, plus `react-markdown` ^9 and `remark-gfm` ^4 for the `Markdown` component. You provide React — the library doesn't bundle it.

## Hello world

Wrap your app in `ThemeProvider`, drop a `Container` around a `Prose` block, and write HTML:

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';

export function BlogPost() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
      <Container width="prose">
        <Prose>
          <h1>Article title</h1>
          <p>The first paragraph styles as a lead — larger serif, tighter leading.</p>
          <p>Subsequent paragraphs use the body size with a 1.75 line-height.</p>
        </Prose>
      </Container>
    </ThemeProvider>
  );
}
```

Swap `Prose` for `Markdown` when the source is a markdown string instead of React children. `Markdown` adds GitHub Flavored Markdown, heading anchors, callout blocks (`> [!NOTE]` / `> [!TIP]` / …), copy-to-clipboard buttons on every code fence, and an opt-in click-to-edit mode.

Five components ship from this package, all imported from the same barrel:

| Component | What it's for |
|---|---|
| `Markdown` | Render a markdown string with GFM, heading anchors, callouts, code-fence copy buttons, and an optional click-to-edit mode. |
| `Prose` | Apply the library's reading typography to arbitrary React children — blog posts assembled from CMS blocks, docs pages mixing prose with React islands. |
| `Quote` | Serif-italic blockquote with `pull` (in-flow, framed by horizontal rules) and `epigraph` (standalone, larger) variants. |
| `MarginNote` | Annotation that inlines on narrow screens and floats into the page margin (left or right) on wide ones. |
| `ThinkingCycle` | Inline text that scrambles-and-settles through a list of words, with width animation between them. |

## Where to next

- [Prose concept doc](../../demo/docs/03-prose.md) — `Markdown` (with the `components` + `remarkPlugins` island-embedding seam, callouts, editable mode, heading anchors), `Prose`'s typographic rules, `Quote` (`pull` and `epigraph` variants), `MarginNote`, and `ThinkingCycle`.
- [`@4lt7ab/core`](../core/README.md) — the theme platform `Prose` and `Markdown` consume tokens from. Required peer.
- [Layout concept doc](../../demo/docs/04-layout.md) — how `Container`, `Stack`, and the page-envelope organisms frame a prose block inside an app shell.
- [Theming concept doc](../../demo/docs/02-theming.md) — the token layer that powers every color and font-family in the prose surface.
- [CLAUDE.md](../../CLAUDE.md) — architecture, conventions, dev commands, release process.
