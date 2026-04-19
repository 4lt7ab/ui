import { Card, semantic as t } from '@4lt7ab/ui';
import { LIVE_EXAMPLES } from './registry';

// ---------------------------------------------------------------------------
// LiveExample
// ---------------------------------------------------------------------------
//
// Rendered in place of `<LiveExample id="..." />` HTML blocks in the concept
// markdown docs. Looks `id` up in the registry and renders the matching
// widget inside a bordered `<Card>` frame. Missing ids render a visible
// fallback so authoring gaps surface during `bun run dev` rather than
// silently — the design doc (§2.3) is explicit that the registry is the
// single source of "which ids exist."
//
// The element name in the markdown source is `<LiveExample>`, which
// `react-markdown` normalizes to a lowercase `liveexample` tag name. The
// concept-doc renderer passes `{ liveexample: LiveExample }` to `<Markdown>`
// via the `components` override prop.

interface LiveExampleProps {
  id?: string;
  /**
   * `react-markdown` forwards every HTML attribute on the element. We only
   * care about `id`; other props are tolerated so an author-side typo on an
   * attribute doesn't crash the render.
   */
  [key: string]: unknown;
}

export function LiveExample({ id }: LiveExampleProps): React.JSX.Element {
  // Registry is keyed by the `id` attribute. An undefined or unregistered id
  // renders a visible warning — in dev it's loud enough to catch during
  // authoring, and in prod it still documents the gap rather than silently
  // collapsing the widget. `Card` gives the frame consistent padding and a
  // visible border so the live widget visually separates from surrounding
  // prose.
  if (!id || !LIVE_EXAMPLES[id]) {
    return (
      <div style={{ margin: `${t.spaceMd} 0` }}>
        <Card variant="flat" padding="md">
          <p
            style={{
              margin: 0,
              fontFamily: t.fontMono,
              fontSize: t.fontSizeSm,
              color: t.colorError,
            }}
          >
            [missing live example: {id ?? '(no id)'}]
          </p>
        </Card>
      </div>
    );
  }

  const Widget = LIVE_EXAMPLES[id];

  return (
    <div style={{ margin: `${t.spaceMd} 0` }}>
      <Card variant="flat" padding="md">
        <Widget />
      </Card>
    </div>
  );
}
