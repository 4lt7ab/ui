import { Epigraph } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'The quote text. Rendered in serif italic at a large responsive size.' },
  { name: 'cite', type: 'ReactNode', description: 'Attribution line (author, source). Rendered smaller below the quote in muted text.' },
];

export function EpigraphDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="The quote text, rendered centered in serif italic with horizontal rules above and below.">
        <Epigraph>
          The best interface is no interface.
        </Epigraph>
      </PropDemo>

      <PropDemo name="cite" description="Optional attribution displayed below the quote in smaller, muted text.">
        <Epigraph cite="Dieter Rams">
          Less, but better.
        </Epigraph>

        <div style={{ marginTop: 'var(--space-lg)' }}>
          <Epigraph cite="Frank Chimero, The Shape of Design">
            People ignore design that ignores people. The warmth and quality of a
            well-considered interface speaks to the care behind the product.
          </Epigraph>
        </div>
      </PropDemo>
    </DocBlock>
  );
}
