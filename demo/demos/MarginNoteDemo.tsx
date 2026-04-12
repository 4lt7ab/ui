import { Stack } from '@4lt7ab/ui';
import { Prose, MarginNote } from '@4lt7ab/content';

export function MarginNoteDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>In prose context</h3>
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
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Multiple margin notes</h3>
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
      </Stack>
    </Stack>
  );
}
