import { Prose, SideNote } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Note content. Appears inline on mobile, floats into the right margin on wide screens (>=1100px). Must be used inside <Prose>.' },
];

export function SideNoteDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="Side notes mirror margin notes but float into the right margin instead of the left. On narrow screens they appear inline with a right border.">
        <Prose>
          <p>
            Design tokens create a shared vocabulary between design and engineering.
            <SideNote>Tokens replace magic numbers with named values.</SideNote>
            They ensure consistency across every surface of the product.
          </p>
        </Prose>
      </PropDemo>

      <PropDemo name="Longer content" description="Side notes can hold longer explanatory text that would interrupt the main flow.">
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
      </PropDemo>
    </DocBlock>
  );
}
