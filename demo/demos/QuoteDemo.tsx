import { Prose, Quote } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'The quote text. Rendered in serif italic.' },
  { name: 'variant', type: "'pull' | 'epigraph'", description: "'pull' (default) — in-flow pull quote with horizontal rules; must be placed inside <Prose>. 'epigraph' — large standalone blockquote that injects its own styles and works anywhere." },
  { name: 'cite', type: 'ReactNode', description: 'Attribution line (author, source). Rendered in a <footer> below the quote.' },
];

export function QuoteDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant='pull'" description="Centered, serif, italic pull quote framed by horizontal rules. Must be placed inside a <Prose> wrapper — Prose owns the CSS and targets the [data-pull-quote] attribute.">
        <Prose>
          <p>
            A well-designed component library is more than a collection of buttons and
            inputs. It encodes decisions about spacing, hierarchy, and interaction
            patterns into reusable building blocks.
          </p>
          <Quote variant="pull">
            Consistency is the foundation of trust in a user interface.
          </Quote>
          <p>
            When every surface of a product shares the same visual language, users
            build confidence in the interface. They know what to expect from each
            interaction because the patterns are familiar.
          </p>
        </Prose>
      </PropDemo>

      <PropDemo name="variant='epigraph'" description="Larger, standalone blockquote that injects its own styles and works both inside and outside <Prose>. Good for opening quotes, page epigraphs, or hero-level callouts.">
        <Quote variant="epigraph" cite="Dieter Rams">
          Less, but better.
        </Quote>

        <div style={{ marginTop: 'var(--space-lg)' }}>
          <Quote variant="epigraph" cite="Frank Chimero, The Shape of Design">
            People ignore design that ignores people. The warmth and quality of a
            well-considered interface speaks to the care behind the product.
          </Quote>
        </div>
      </PropDemo>

      <PropDemo name="cite" description="Optional attribution displayed below either variant in smaller, muted text. Here shown on a pull quote inside Prose.">
        <Prose>
          <Quote variant="pull" cite="Dieter Rams, Ten Principles for Good Design">
            Good design is as little design as possible.
          </Quote>
        </Prose>
      </PropDemo>
    </DocBlock>
  );
}
