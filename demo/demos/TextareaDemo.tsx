import { Textarea, Stack } from '@4lt7ab/ui';

export function TextareaDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <Stack gap="md" style={{ maxWidth: '32rem' }}>
          <Textarea placeholder="Default textarea" />
          <Textarea placeholder="Error state" hasError />
          <Textarea value="Disabled textarea" disabled />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Sizes</h3>
        <Stack gap="md" style={{ maxWidth: '32rem' }}>
          <Textarea placeholder="2 rows" rows={2} />
          <Textarea placeholder="6 rows" rows={6} />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Notes editor</h3>
        <Textarea
          placeholder="Write your notes here. Resize vertically as needed..."
          rows={5}
          style={{ maxWidth: '32rem' }}
        />
      </Stack>
    </Stack>
  );
}
