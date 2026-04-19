# @4lt7ab/content

Layout and prose components for blogs, docs, and reading-oriented pages.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/core": "github:4lt7ab/ui#v0.2.0",
    "@4lt7ab/content": "github:4lt7ab/ui#v0.2.0"
  }
}
```

Peer dependencies: `@4lt7ab/core`, `react`, `react-dom` ^19.0.0, `react-markdown` ^9.0.0, `remark-gfm` ^4.0.0.

`@4lt7ab/core` is required — content components consume its semantic tokens and must be rendered inside a `ThemeProvider`. `@4lt7ab/ui` is not needed unless you want interactive components alongside your content.

## Setup

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';

function BlogPost() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
      <Container width="prose">
        <Prose>
          <h1>Article Title</h1>
          <p>Body text with automatic typography styling.</p>
        </Prose>
      </Container>
    </ThemeProvider>
  );
}
```

> `Container` and `LinkCard` moved to `@4lt7ab/ui` in v0.4.0 — both are general UI primitives, not prose-specific. Import them from `@4lt7ab/ui/ui` (or `@4lt7ab/ui` if you use the bare package name). See the 0.4.0 upgrade guide for the one-line import-path migration.

---

## Components

### Prose

Typography system for long-form content. Automatically styles headings, paragraphs, lists, links, blockquotes, code blocks, and other HTML elements nested inside it.

```tsx
<Prose>
  <h1>Title</h1>
  <p>Paragraph with <a href="#">a link</a> and <code>inline code</code>.</p>
  <blockquote>A blockquote.</blockquote>
  <ul>
    <li>List item</li>
  </ul>
</Prose>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | HTML content to style |

Extends `HTMLAttributes<HTMLDivElement>`.

### Markdown

Convenience wrapper that renders a markdown string inside a Prose container with GitHub Flavored Markdown support (tables, strikethrough, task lists, autolinks).

```tsx
<Markdown>{markdownString}</Markdown>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string \| null` | — | Markdown source text. Required in read-only mode; optional in `editable` mode (empty/null shows the placeholder). |
| `id` | `string` | — | Optional id on the rendered root element |
| `data-testid` | `string` | — | Optional test id |
| `editable` | `boolean` | `false` | Opt into three-state click-to-edit mode (empty / read-only / textarea). |
| `editing` | `boolean` | `false` | Whether the editable section is in the textarea state. |
| `value` | `string` | — | Current textarea value during editing. |
| `onStartEdit` | `() => void` | — | Called when the user clicks the content or the empty-state placeholder. |
| `onEditChange` | `(value: string) => void` | — | Called on textarea change. |
| `onSave` | `() => void` | — | Called on save (Save button or Cmd/Ctrl+Enter). |
| `onCancel` | `() => void` | — | Called on cancel (Cancel button or Escape). |
| `fieldLabel` | `string` | — | Accessible label for the editable section. |
| `rows` | `number` | `4` | Number of textarea rows when editing. |
| `placeholder` | `string` | `'Click to add content...'` | Placeholder text for the empty state. |

Editable-mode call site:

```tsx
<Markdown
  editable
  editing={editing}
  value={editValue}
  onStartEdit={() => { setEditValue(content ?? ''); setEditing(true); }}
  onEditChange={setEditValue}
  onSave={() => { setContent(editValue || null); setEditing(false); }}
  onCancel={() => setEditing(false)}
  fieldLabel="Summary"
  rows={6}
>
  {content}
</Markdown>
```

Peer dependencies: `react-markdown` ^9.0.0, `remark-gfm` ^4.0.0.

### Quote

Serif-italic blockquote with two visual treatments selected via `variant`. Replaces the separate `PullQuote` and `Epigraph` components (both still exported as deprecated aliases for backward compatibility).

```tsx
// Pull quote — requires a <Prose> wrapper for styling
<Prose>
  <Quote>Design tokens bridge the gap between design and engineering.</Quote>
</Prose>

// Epigraph — standalone, works inside or outside <Prose>
<Quote variant="epigraph" cite="Dieter Rams">
  Less, but better.
</Quote>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | Quote text |
| `variant` | `'pull' \| 'epigraph'` | `'pull'` | `'pull'` — in-flow pull quote framed by horizontal rules (requires `<Prose>`). `'epigraph'` — larger standalone blockquote with its own injected styles. |
| `cite` | `ReactNode` | — | Optional attribution (author, source). Rendered as a `<footer>` below the quote. Works on both variants. |

### PullQuote (deprecated)

Backward-compatibility alias for `<Quote variant="pull">`. Prefer `Quote` for new call sites.

### MarginNote

Annotation that floats into the left margin on wide screens (≥1100px). Falls back to inline on smaller viewports.

```tsx
<Prose>
  <p>Main text content here.</p>
  <MarginNote>
    A side observation that supplements the main text.
  </MarginNote>
</Prose>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | Annotation content |

### SideNote

Inline annotation that appears in the right margin on wide screens (≥1100px). **Must be placed inside a `Prose` component.**

```tsx
<Prose>
  <p>
    Design tokens were first coined by Salesforce.
    <SideNote>The Lightning Design System introduced the concept in 2014.</SideNote>
  </p>
</Prose>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | Annotation content |

### Epigraph (deprecated)

Backward-compatibility alias for `<Quote variant="epigraph">`. Prefer `Quote` for new call sites.

### TextSection (deprecated)

Backward-compatibility alias for `<Markdown editable>`. Prefer `<Markdown editable>` for new call sites — see the 0.4.0 upgrade guide §textsection for the one-line migration. All props are forwarded to Markdown's editable mode; behavior (three states, Cmd/Ctrl+Enter save, Escape cancel, Button-shaped Save/Cancel controls) is unchanged.

### ThinkingCycle

Animated word scramble effect that cycles through a list of words with per-character animation.

```tsx
<ThinkingCycle
  words={['design', 'build', 'ship', 'iterate']}
  holdMs={2000}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `words` | `string[]` | *required* | Words to cycle through (minimum 2) |
| `holdMs` | `number` | `2000` | How long each word stays visible (ms) |
| `scrambleTicks` | `number` | `4` | Scramble iterations per character |
| `tickMs` | `number` | `50` | Milliseconds between scramble frames |
| `staggerMs` | `number` | `30` | Delay between each character starting (ms) |
