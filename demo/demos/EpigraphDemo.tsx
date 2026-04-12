import { Stack } from '@4lt7ab/ui';
import { Epigraph } from '@4lt7ab/content';

export function EpigraphDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Without citation</h3>
        <Epigraph>
          The best interface is no interface.
        </Epigraph>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With citation</h3>
        <Epigraph cite="Dieter Rams">
          Less, but better.
        </Epigraph>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Longer quote with citation</h3>
        <Epigraph cite="Frank Chimero, The Shape of Design">
          People ignore design that ignores people. The warmth and quality of a
          well-considered interface speaks to the care behind the product.
        </Epigraph>
      </Stack>
    </Stack>
  );
}
