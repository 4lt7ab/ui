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
import { Container, Prose } from '@4lt7ab/ui/content';

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

---

## Components

### Container

Width-constrained wrapper for centering content.

```tsx
<Container width="prose">...</Container>
<Container width="wide">...</Container>
<Container maxWidth="1200px" padding="2rem">...</Container>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `'prose' \| 'wide'` | `'prose'` | Named width preset (prose: 680px, wide: 900px) |
| `maxWidth` | `string` | — | Arbitrary max-width (overrides `width`) |
| `padding` | `string` | `'1.5rem'` | Horizontal padding |

Extends `HTMLAttributes<HTMLDivElement>`.

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
| `children` | `string` | *required* | Markdown source text |

Extends `HTMLAttributes<HTMLDivElement>` (all props passed through to Prose).

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

### LinkCard

Clickable card-style link with title and description. Supports external links.

```tsx
<LinkCard
  href="/docs/tokens"
  title="Token Reference"
  description="Complete list of semantic tokens and their uses."
/>
<LinkCard
  href="https://example.com"
  title="External Resource"
  external
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | *required* | Card title |
| `description` | `ReactNode` | — | Description text |
| `external` | `boolean` | — | Opens in new tab |

Extends `AnchorHTMLAttributes<HTMLAnchorElement>` (except `title`).

### TextSection

Three-state click-to-edit markdown block. Renders content through the Markdown component, switches to a textarea for editing, and shows a placeholder when empty.

```tsx
<TextSection
  content={content}
  editing={editing}
  editValue={editValue}
  onStartEdit={() => { setEditValue(content ?? ''); setEditing(true); }}
  onEditChange={setEditValue}
  onSave={() => { setContent(editValue || null); setEditing(false); }}
  onCancel={() => setEditing(false)}
  fieldLabel="Summary"
  rows={6}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string \| null` | — | Current markdown content. Empty/null = empty state |
| `editing` | `boolean` | *required* | Whether the section is in editing mode |
| `editValue` | `string` | *required* | Current textarea value during editing |
| `onStartEdit` | `() => void` | *required* | Called when user clicks content or empty state |
| `onEditChange` | `(value: string) => void` | *required* | Called on textarea change |
| `onSave` | `() => void` | *required* | Called on save (button or Cmd/Ctrl+Enter) |
| `onCancel` | `() => void` | *required* | Called on cancel (button or Escape) |
| `fieldLabel` | `string` | — | Accessible label for the section |
| `rows` | `number` | `4` | Number of textarea rows |
| `placeholder` | `string` | `'Click to add content...'` | Placeholder for empty state |

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
