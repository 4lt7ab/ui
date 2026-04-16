import { Prose, PullQuote } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'The quote text. Rendered centered in serif italic with horizontal rules. Must be used inside <Prose> for styling.' },
];

export function PullQuoteDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="Pull quotes are centered, serif, italic with top and bottom borders. They must be used inside a Prose wrapper for styling.">
        <Prose>
          <PullQuote>
            Good design is as little design as possible.
          </PullQuote>
        </Prose>
      </PropDemo>

      <PropDemo name="In prose context" description="PullQuote is designed to break up long-form content, drawing the eye to a key takeaway.">
        <Prose>
          <p>
            A well-designed component library is more than a collection of buttons and
            inputs. It encodes decisions about spacing, hierarchy, and interaction
            patterns into reusable building blocks.
          </p>
          <PullQuote>
            Consistency is the foundation of trust in a user interface.
          </PullQuote>
          <p>
            When every surface of a product shares the same visual language, users
            build confidence in the interface. They know what to expect from each
            interaction because the patterns are familiar.
          </p>
        </Prose>
      </PropDemo>
    </DocBlock>
  );
}
