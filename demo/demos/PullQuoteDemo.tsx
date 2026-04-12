import { Stack } from '@4lt7ab/ui';
import { Prose, PullQuote } from '@4lt7ab/content';

export function PullQuoteDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Standalone</h3>
        <Prose>
          <PullQuote>
            Good design is as little design as possible.
          </PullQuote>
        </Prose>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>In prose context</h3>
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
      </Stack>
    </Stack>
  );
}
