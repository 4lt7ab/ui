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

Peer dependencies: `@4lt7ab/core`, `react`, `react-dom` ^19.0.0.

`@4lt7ab/core` is required — content components consume its semantic tokens and must be rendered inside a `ThemeProvider`. `@4lt7ab/ui` is not needed unless you want interactive components alongside your content.

## Setup

```tsx
import { ThemeProvider } from '@4lt7ab/core';
import { Container, Prose } from '@4lt7ab/content';

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

### PullQuote

Centered, serif pull quote for highlighting key takeaways.

```tsx
<PullQuote>
  Design tokens bridge the gap between design and engineering.
</PullQuote>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | Quote text |

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

### Epigraph

Opening quote with optional attribution. Typically placed before the main content.

```tsx
<Epigraph cite="Gustave Flaubert">
  The art of writing is the art of discovering what you believe.
</Epigraph>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | Quote text |
| `cite` | `ReactNode` | — | Attribution (author, source) |

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
