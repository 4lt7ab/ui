import { Input, Stack } from '@4lt7ab/ui';

export function InputDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Input placeholder="Default input" />
            <Input placeholder="Error state" hasError />
            <Input value="Disabled input" disabled />
          </Stack>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Types</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Input type="text" placeholder="Text" />
            <Input type="email" placeholder="email@example.com" />
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="0" />
            <Input type="url" placeholder="https://..." />
          </Stack>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Search bar</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack direction="horizontal" gap="sm" align="center">
            <Input placeholder="Search components..." />
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
}
