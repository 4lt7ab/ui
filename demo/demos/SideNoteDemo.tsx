import { Stack } from '@4lt7ab/ui';
import { Prose, SideNote } from '@4lt7ab/content';

export function SideNoteDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Short side note</h3>
        <Prose>
          <p>
            Design tokens create a shared vocabulary between design and engineering.
            <SideNote>Tokens replace magic numbers with named values.</SideNote>
            They ensure consistency across every surface of the product.
          </p>
        </Prose>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Longer side note</h3>
        <Prose>
          <p>
            The semantic token layer is the API contract between themes and components.
            <SideNote>
              Semantic tokens reference CSS custom properties that are resolved at runtime
              by the active theme. This indirection means components never need to know
              which theme is active -- they just consume the variable.
            </SideNote>
            Components import semantic tokens and use them for all visual values.
          </p>
        </Prose>
      </Stack>
    </Stack>
  );
}
