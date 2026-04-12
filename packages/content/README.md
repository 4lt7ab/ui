# @4lt7ab/content

Layout and prose components for blogs, docs, and reading-oriented pages.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/content": "github:username/component-library#v0.1.0",
    "@4lt7ab/ui": "github:username/component-library#v0.1.0"
  }
}
```

Peer dependencies: `@4lt7ab/ui`, `react`, `react-dom` (^19.0.0).

`@4lt7ab/ui` is required because content components consume its semantic tokens and must be rendered inside a `ThemeProvider`.

## Setup

Wrap your app in `ThemeProvider` from `@4lt7ab/ui`:

```tsx
import { ThemeProvider } from '@4lt7ab/ui';
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

## Components

| Component | Description |
|-----------|-------------|
| `Container` | Width-constrained wrapper. Widths: `prose` (readable measure) or `wide`. |
| `Prose` | Typography system for long-form content. Styles headings, paragraphs, lists, links, code blocks. |
| `PullQuote` | Centered, serif pull quote for key takeaways. |
| `SideNote` | Inline annotation that appears in the right margin on wide screens. Must be used inside `Prose`. |
| `MarginNote` | Side note that floats into the margin on wide screens. |
| `Epigraph` | Opening quote with optional citation. |
| `LinkCard` | Clickable card-style link with title and description. |
| `ThinkingCycle` | Animated word scramble/cycle effect that transitions between words with per-character animation. |

## Usage Example

```tsx
import { Container, Prose, MarginNote, Epigraph, SideNote } from '@4lt7ab/content';

function Article() {
  return (
    <Container width="prose">
      <Epigraph
        quote="The art of writing is the art of discovering what you believe."
        citation="Gustave Flaubert"
      />
      <Prose>
        <h1>Design Tokens</h1>
        <p>
          A design token is a named value in a design system.
          <SideNote>First coined by Salesforce in 2014.</SideNote>
        </p>
        <MarginNote>
          Tokens bridge design and engineering.
        </MarginNote>
        <p>
          Tokens can represent colors, spacing, typography, and more.
        </p>
      </Prose>
    </Container>
  );
}
```

## Notes

- All components use semantic tokens from `@4lt7ab/ui` and respond to the active theme.
- Components that require pseudo-elements or hover states use the `useInjectStyles` utility (provided by `@4lt7ab/ui`) for scoped CSS injection.
- `SideNote` must be placed inside a `Prose` component to render correctly.
