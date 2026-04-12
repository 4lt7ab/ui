import { LinkCard } from '@4lt7ab/content';
import { Stack } from '@4lt7ab/ui';

export function LinkCardDemo(): React.JSX.Element {
  return (
    <Stack gap="lg">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        <LinkCard
          href="#"
          title="Tab"
          description="An AI teammate that lives in your editor. Open source."
          external
        />
        <LinkCard
          href="#"
          title="Hello, world"
          description="First post — who I am, what this site is, and what to expect."
        />
        <LinkCard
          href="#"
          title="Photography"
          description="Landscapes and street. Opens my photo gallery in a new tab."
          external
        />
      </div>
    </Stack>
  );
}
