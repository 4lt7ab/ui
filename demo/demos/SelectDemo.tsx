import { Select, Stack } from '@4lt7ab/ui';

const roleOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
];

const timezoneOptions = [
  { value: 'utc', label: 'UTC' },
  { value: 'est', label: 'Eastern (ET)' },
  { value: 'cst', label: 'Central (CT)' },
  { value: 'mst', label: 'Mountain (MT)' },
  { value: 'pst', label: 'Pacific (PT)' },
];

export function SelectDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <Select placeholder="With placeholder..." options={roleOptions} />
          <Select options={roleOptions} defaultValue="editor" />
          <Select placeholder="Error state" options={roleOptions} hasError />
          <Select options={[{ value: 'locked', label: 'Locked option' }]} disabled />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Settings row</h3>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <Stack direction="horizontal" gap="md" align="center" justify="space-between">
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Role</span>
            <Select options={roleOptions} defaultValue="editor" style={{ width: '10rem' }} />
          </Stack>
          <Stack direction="horizontal" gap="md" align="center" justify="space-between">
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Timezone</span>
            <Select options={timezoneOptions} defaultValue="utc" style={{ width: '10rem' }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
