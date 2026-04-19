# Prose

`@4lt7ab/content` is the long-form half of the library — everything you need to turn a paragraph of text into a reading surface. The same `Markdown` component that renders this page ships to consumers unchanged, and the typographic rules it uses (lead paragraphs, overlined h2s, three-dot section breaks, margin notes, pull quotes) are what every other component's copy should feel at home next to.

## What this concept covers

| Component | What it's for |
|---|---|
| `Markdown` | Render a markdown string with GFM, heading anchors, copy-to-clipboard, and optional click-to-edit. |
| `Prose` | Render arbitrary React children with the library's reading typography applied. |
| `Quote` | Serif-italic blockquote with `pull` and `epigraph` variants. |
| `MarginNote` | Annotation that inlines on mobile and floats into the page margin on wide screens. |
| `ThinkingCycle` | Inline text that scrambles-and-settles through a list of words. |

Import everything from `@4lt7ab/content` (or from `@4lt7ab/ui/content`, which routes to the same package):

```tsx
import { Markdown, Prose, Quote, MarginNote, ThinkingCycle } from '@4lt7ab/content';
```

## `Markdown`

The component responsible for rendering this page. Takes a markdown source string as `children` and produces a fully-styled block with heading anchors, GFM tables and task lists, callout blocks, and a copy-to-clipboard button on every code fence.

```tsx
import { Markdown } from '@4lt7ab/content';

const source = `
# Hello

A first paragraph styles as a lead — larger serif, tighter leading.

## Sections

Every h2 carries an overline rule.
`;

<Markdown>{source}</Markdown>
```

**Features applied automatically:**

- **GitHub Flavored Markdown** — tables, strikethrough, autolinks, task lists (via `remark-gfm`).
- **Heading anchors** — every `h1`–`h6` gets an `id` slugified from its text and a hover-visible link icon for shareable URLs.
- **Callouts** — `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]` blockquote prefixes render as labeled callout cards (GitHub-compatible syntax).
- **Code blocks with copy button** — every fenced ` ```lang ` block renders a hover-visible copy button.
- **Copy-as-markdown button** — the whole document has a top-right button that copies its raw source.

**Editable mode.** Pass `editable` to opt into a three-state UI: empty-state placeholder (no children), read-only display (click to start editing), and a textarea with Save/Cancel controls (when `editing` is true). Keyboard shortcuts: `Cmd/Ctrl+Enter` to save, `Escape` to cancel.

```tsx
const [editing, setEditing] = useState(false);
const [draft, setDraft] = useState(saved);

<Markdown
  editable
  editing={editing}
  value={draft}
  onStartEdit={() => setEditing(true)}
  onEditChange={setDraft}
  onSave={() => { persist(draft); setEditing(false); }}
  onCancel={() => { setDraft(saved); setEditing(false); }}
  fieldLabel="Summary"
  placeholder="Click to add a summary…"
  rows={6}
>
  {saved}
</Markdown>
```

When `editable` is off, `Markdown` behaves exactly as the read-only renderer — there's no hidden branch that changes layout.

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `string \| null` | — | Saved markdown source. Required in read-only mode. In editable mode, an empty/null value shows the placeholder. |
| `editable` | `boolean` | `false` | Opt into click-to-edit. |
| `editing` | `boolean` | `false` | Whether the editor is active. Only meaningful with `editable`. |
| `value` | `string` | — | Textarea value during editing. Only meaningful with `editable` + `editing`. |
| `onStartEdit` | `() => void` | — | Fires on click to the read view or placeholder. |
| `onEditChange` | `(value: string) => void` | — | Fires on every textarea change. |
| `onSave` | `() => void` | — | Fires on Save button or `Cmd/Ctrl+Enter`. |
| `onCancel` | `() => void` | — | Fires on Cancel button or `Escape`. |
| `fieldLabel` | `string` | — | Accessible label for the editable section. |
| `rows` | `number` | `4` | Textarea rows when editing. |
| `placeholder` | `string` | `'Click to add content...'` | Placeholder copy for the empty state. |

## `Prose`

`Markdown` is for source strings. `Prose` is for arbitrary React children: a blog post rendered from CMS blocks, a docs page that mixes prose with custom React islands, a changelog built from a structured data file.

```tsx
import { Prose, Quote, MarginNote } from '@4lt7ab/content';

<Prose>
  <p>A first-child paragraph styles as a lead — the same rule as Markdown.</p>
  <p>Subsequent paragraphs use the body size.</p>

  <h2>A section</h2>
  <p>h2s carry an overline rule anchored to the top-left.</p>

  <hr />
  <p>An &lt;hr&gt; renders as three centered middle-dots.</p>

  <Quote variant="pull" cite="— Primary source, page 42">
    A centered in-flow pull quote framed by horizontal rules.
  </Quote>

  <p>
    Paragraphs can contain <MarginNote>a side comment</MarginNote>{' '}
    that inlines on narrow screens and floats into the left margin on wide ones.
  </p>
</Prose>
```

**Typographic rules `Prose` applies:**

- **Lead paragraph** — the first `<p>` renders in the serif font at the h2 size for a 1.45 leading.
- **Body rhythm** — `lineHeight: 1.75`, paragraphs separated by `1em`.
- **Headings** — h1/h2/h3 are serif, with h2 carrying an overline rule and h3 tightening to a reading-line-height.
- **Section break** — `<hr />` renders as three centered middle-dots with wide letter-spacing.
- **Inline code** — monospace, tinted with a border-colored chip, `0.875em` size.
- **Code blocks** — bordered, rounded, `colorSurfacePage` background with a subtle 2-color text contrast.
- **Pull quotes** — `<blockquote data-pull-quote>` renders centered with horizontal rules top and bottom.
- **Figures** — `<figure>` has a bordered-radius image and a centered caption; add `className="figure--wide"` to bleed past the container.
- **Margin notes** — `<small data-margin-note>` floats into the left or right margin at >=`BREAKPOINT_MARGIN_NOTES`, falls back to inline with a border accent on narrow screens.

The CSS is injected once into `<head>` (deduped via `useInjectStyles`) and consumes semantic tokens end-to-end, so every `Prose` block recolors with the theme automatically.

`Prose` forwards its ref to the outer `<div>` so consumers can measure, scroll, or transition the whole reading surface.

## `Quote`

A serif-italic blockquote with two visual treatments.

```tsx
import { Quote } from '@4lt7ab/content';

// Pull — centered in-flow with horizontal rules. Requires <Prose>.
<Prose>
  <Quote variant="pull" cite="— Annie Dillard, The Writing Life">
    How we spend our days is, of course, how we spend our lives.
  </Quote>
</Prose>

// Epigraph — larger, standalone. Works inside or outside <Prose>.
<Quote variant="epigraph" cite="— John Gall">
  A complex system that works is invariably found to have evolved from a simple system that worked.
</Quote>
```

**Variants:**

- `pull` (default) — an in-flow pull quote framed by top/bottom horizontal rules. The styling is owned by `<Prose>` (which targets the `[data-pull-quote]` attribute); `<Quote variant="pull">` outside a `<Prose>` renders a bare `<blockquote>` without the typographic treatment.
- `epigraph` — a larger standalone blockquote with its own injected styles. Serif italic at `clamp(1.5rem, 3.5vw, 2rem)`, centered, bordered top and bottom. Works both inside and outside `<Prose>` — good for opening quotes, page epigraphs, or hero-level callouts.

The optional `cite` prop renders as a `<footer>` under the quote — harmless on either variant.

## `MarginNote`

Annotation that inlines on mobile and floats into the page margin on wide screens (`>=BREAKPOINT_MARGIN_NOTES`). `side` picks which margin — `left` (default) or `right`.

```tsx
import { MarginNote } from '@4lt7ab/content';

<Prose>
  <p>
    Main text runs through the page.
    <MarginNote>Left-side annotation, floats into the margin when the viewport is wide enough.</MarginNote>
  </p>
  <p>
    Another paragraph.
    <MarginNote side="right">Right-side variant.</MarginNote>
  </p>
</Prose>
```

Must be used inside `<Prose>` for the styling and positioning to apply — `<Prose>` owns the CSS that targets `[data-margin-note]`. On narrow screens the note is inline with a thick border on the chosen side. On wide screens it's absolutely positioned into a 200px gutter.

## `ThinkingCycle`

Inline text that scrambles into each word, holds, then scrambles to the next. The container width animates between words so surrounding inline content (punctuation, spaces) slides naturally with it.

```tsx
import { ThinkingCycle } from '@4lt7ab/content';

Building with AI tools is{' '}
<ThinkingCycle words={['powerful', 'wild', 'unprecedented']} />.
```

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `words` | `string[]` | — | Needs at least two. |
| `holdMs` | `number` | `2000` | How long each word stays visible. |
| `scrambleTicks` | `number` | `4` | Scramble iterations per character. |
| `tickMs` | `number` | `50` | Ms between scramble frames. |
| `staggerMs` | `number` | `30` | Delay between each character starting. |

The animation respects `prefers-reduced-motion: reduce` — when set, words swap instantly without a scramble step. Widths are re-measured on font load and on theme change (since `font-family` may differ between themes), so the width transition always settles on the right pixel count.

## Styling model

Both `Prose` and `Markdown` inject scoped stylesheets once on first render (via `useInjectStyles` from `@4lt7ab/core`). The CSS uses semantic tokens throughout — `var(--color-text)`, `var(--color-border)`, `var(--font-serif)`, `var(--color-action-primary)` — so every prose block recolors with the active theme without component rerenders.

The two styling namespaces are independent. `Prose` uses `.alttab-prose` as its hook. `Markdown` uses `.alttab-markdown`. That separation is intentional: `Markdown`'s styles are tuned for the editable-mode UI and the code-block copy button machinery, while `Prose` assumes its children are already laid out in reading order.

## Where to next

- **[Layout](#/layout)** — how `Container`, `Stack`, and the page-envelope organisms frame a prose block inside an app shell.
- **[Theming](#/theming)** — the token layer that powers every color and font-family you just read.
