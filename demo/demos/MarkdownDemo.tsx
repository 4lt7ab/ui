import { Container } from '@4lt7ab/content';
import { Markdown } from '@4lt7ab/content';

const sampleMarkdown = `
# Markdown Component

The \`<Markdown>\` component renders markdown with its own typographic styles, [GitHub Flavored Markdown](https://github.github.com/gfm/) support, and a set of features designed for documentation and technical content.

Hover over any heading to reveal a link icon — click it to get a permalink. There's also a copy button in the top-right corner that copies the raw markdown source.

## Callout Blocks

GitHub-style admonition blocks for highlighting important information. Each type has a distinct color and icon drawn from the theme's feedback tokens.

> [!NOTE]
> Notes provide additional context that's helpful but not critical. They use the theme's \`colorInfo\` token — blue on most themes, but always readable.

> [!TIP]
> Tips suggest a better way to do something. Use them for shortcuts, best practices, or things the reader might not have thought of. Supports **bold**, \`inline code\`, and [links](#callout-blocks).

> [!IMPORTANT]
> Important callouts highlight information the reader must not skip. They use the theme's primary action color — the most prominent accent in the palette.

> [!WARNING]
> Warnings flag potential pitfalls. Something *could* go wrong if the reader ignores this. They use the theme's \`colorWarning\` token.

> [!CAUTION]
> Caution blocks are the strongest signal — something *will* go wrong. Use sparingly. They use \`colorError\`, the most urgent color in the feedback palette.

Regular blockquotes still work as expected:

> "The best code is no code at all." — Jeff Atwood

## Links

Links have a [visible underline](#links) by default that intensifies on hover. They adapt to the active theme's \`colorTextLink\` token automatically.

## Inline Code

Use backticks for inline code like \`ThemeProvider\`, \`useTheme()\`, or \`var(--color-text)\`. Inline code renders as a pill with a raised surface background and subtle border.

## Code Blocks

Fenced code blocks get a left accent border in the theme's primary action color, plus a copy button on hover:

\`\`\`tsx
import { Markdown } from '@4lt7ab/ui/content';

function Docs({ source }: { source: string }) {
  return (
    <Container width="prose">
      <Markdown>{source}</Markdown>
    </Container>
  );
}
\`\`\`

## Tables

Tables have rounded corners, a tinted header row, and hover-highlighted rows:

| Feature | Description | Status |
|---------|-------------|--------|
| Heading anchors | Auto-generated IDs with hover link icons | ✓ |
| Callout blocks | GitHub-style \`[!NOTE]\`, \`[!TIP]\`, etc. | ✓ |
| Copy source | Top-right button copies raw markdown | ✓ |
| Code blocks | Left accent border + copy button | ✓ |
| GFM tables | Rounded, hoverable, themed headers | ✓ |

## Lists

Unordered lists use the theme's primary color for bullet markers:

- Theme tokens are \`var(--...)\` CSS custom properties
- Components never reference raw hex values
- Nested lists indent cleanly:
  - \`@4lt7ab/core\` owns the token layer
  - \`@4lt7ab/ui\` re-exports core's API
  - \`@4lt7ab/content\` imports from core directly

Ordered lists follow the same treatment:

1. Define tokens in \`primitives.ts\`
2. Map them to semantic names in \`semantic.ts\`
3. Add values to every theme definition

### Task Lists

- [x] Split Markdown from Prose
- [x] Heading anchors with hover-visible links
- [x] GitHub-style callout blocks
- [x] Copy-as-markdown button
- [ ] Syntax highlighting (coming soon)

---

That's all there is to it — pass a markdown string as children and get fully styled, feature-rich output.
`.trim();

export function MarkdownDemo(): React.JSX.Element {
  return (
    <Container width="prose" padding="none">
      <Markdown>{sampleMarkdown}</Markdown>
    </Container>
  );
}
