import { Prose, MarginNote } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Note content. Appears inline on mobile, floats into the left margin on wide screens (>=1100px). Must be used inside <Prose>.' },
];

export function MarginNoteDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="Margin notes appear inline with a left border on narrow screens, and float into the left margin on wide screens (>=1100px). Must be placed inside a Prose wrapper.">
        <Prose>
          <p>
            Component libraries reduce duplication and enforce visual consistency.
            <MarginNote>
              A margin note appears in the left margin on wide screens and inline on mobile.
            </MarginNote>
            Every team that adopts the library inherits the same spacing, color, and
            typography decisions without re-implementing them.
          </p>
        </Prose>
      </PropDemo>

      <PropDemo name="Multiple notes" description="Multiple margin notes can be used in the same paragraph. Each one positions independently.">
        <Prose>
          <p>
            The token architecture has three layers.
            <MarginNote>Primitives are raw palette values.</MarginNote>
            Primitives define the raw values. Semantic tokens reference CSS custom
            properties that are resolved by the active theme.
            <MarginNote>Semantic tokens are the API contract.</MarginNote>
            Components consume only semantic tokens, never primitives directly.
          </p>
        </Prose>
      </PropDemo>
    </DocBlock>
  );
}
