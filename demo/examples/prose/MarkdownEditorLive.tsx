import { useState } from 'react';
import { Stack, semantic as t } from '@4lt7ab/ui';
import { Markdown } from '@4lt7ab/content';

// ---------------------------------------------------------------------------
// Markdown editor — live example for 03-prose.md
// ---------------------------------------------------------------------------
//
// Dogfoods the same `<Markdown>` component the docs site itself renders.
// The left textarea is a raw source editor; the right pane feeds the current
// value straight into `<Markdown>` with every default on (GFM tables,
// heading anchors, code-fence copy buttons, callouts). The point is to let
// a reader see exactly what the library renders from the same input they're
// typing — no compilation step, no preview pipeline.
//
// We intentionally do NOT use `<Markdown editable>` here. That mode is a
// three-state click-to-edit UI (placeholder → read → textarea) optimized
// for in-place editing of a single field; the showcase's goal is a
// side-by-side authoring view, which is better served by a plain textarea
// driving a read-only render.

const INITIAL_SOURCE = `# Live Markdown preview

A first paragraph styles as a lead — larger serif, tighter leading.

## Callouts

> [!TIP]
> Callouts use the GitHub-compatible blockquote syntax.
> Try \`NOTE\`, \`TIP\`, \`IMPORTANT\`, \`WARNING\`, \`CAUTION\`.

## Code fences

\`\`\`tsx
import { Markdown } from '@4lt7ab/content';

<Markdown>{source}</Markdown>
\`\`\`

## Tables (GFM)

| Feature        | Handled |
|----------------|---------|
| Tables         | yes     |
| Task lists     | yes     |
| Heading anchors| yes     |

- [x] Type in the left pane
- [ ] Watch the right pane update
- [ ] Notice the copy button on each code fence
`;

export function MarkdownEditorLive(): React.JSX.Element {
  const [source, setSource] = useState(INITIAL_SOURCE);

  return (
    <Stack gap="sm">
      <div style={gridStyle}>
        <Stack gap="xs">
          <span style={labelStyle}>Source</span>
          <textarea
            value={source}
            onChange={(e) => setSource(e.target.value)}
            spellCheck={false}
            aria-label="Markdown source"
            style={textareaStyle}
          />
        </Stack>
        <Stack gap="xs">
          <span style={labelStyle}>Rendered</span>
          <div style={previewStyle}>
            <Markdown>{source}</Markdown>
          </div>
        </Stack>
      </div>
      <span style={hintStyle}>
        The right pane is a live <code>&lt;Markdown&gt;</code> with every default on — same component the docs site renders. Hover a code fence to see the copy button; hover a heading for the anchor link.
      </span>
    </Stack>
  );
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
  gap: t.spaceMd,
  alignItems: 'start',
};

const textareaStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '22rem',
  boxSizing: 'border-box',
  padding: t.spaceSm,
  fontFamily: t.fontMono,
  fontSize: t.fontSizeSm,
  lineHeight: t.lineHeightRelaxed,
  color: t.colorText,
  background: t.colorSurfacePage,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  resize: 'vertical',
  outline: 'none',
};

const previewStyle: React.CSSProperties = {
  minHeight: '22rem',
  padding: t.spaceMd,
  background: t.colorSurfacePage,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  overflow: 'auto',
};

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  fontWeight: t.fontWeightSemibold,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};

const hintStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
