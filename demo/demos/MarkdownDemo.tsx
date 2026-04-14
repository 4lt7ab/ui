import { Container } from '@4lt7ab/content';
import { Markdown } from '@4lt7ab/content';

const sampleMarkdown = `
# Markdown Component

The \`<Markdown>\` component renders a markdown string inside a **Prose** container with [GitHub Flavored Markdown](https://github.github.com/gfm/) support via \`remark-gfm\`.

## Features

- **Headings** with Prose's serif treatment and overline rules
- **Bold**, *italic*, and ~~strikethrough~~ text
- Inline \`code\` and fenced code blocks
- [Links](#) with hover underlines
- Blockquotes, lists, and horizontal rules

### GFM Extras

Tables, task lists, and autolinks are supported out of the box.

| Component | Package | Description |
|-----------|---------|-------------|
| ThemeProvider | core | Context provider for theme tokens |
| Button | ui | Primary action trigger |
| Prose | content | Long-form typographic container |
| ThemeBackground | animations | Canvas/CSS background per theme |

> Blockquotes render with an accent-colored left border and muted text, just like in Prose.

---

### Task Lists

- [x] Create component
- [x] Add GFM support
- [ ] Ship it

### Code Block

\`\`\`tsx
import { Markdown } from '@4lt7ab/ui/content';

function Article({ body }: { body: string }) {
  return <Markdown>{body}</Markdown>;
}
\`\`\`

That's all there is to it — pass a markdown string as children and get fully styled prose output.
`.trim();

export function MarkdownDemo(): React.JSX.Element {
  return (
    <Container width="prose" style={{ padding: 0 }}>
      <Markdown>{sampleMarkdown}</Markdown>
    </Container>
  );
}
