import { MetadataTable, Stack, Badge } from '@4lt7ab/ui';

export function MetadataTableDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <MetadataTable
        title="User Profile"
        items={[
          { label: 'Name', value: 'Ada Lovelace' },
          { label: 'Email', value: 'ada@example.com' },
          { label: 'Role', value: <Badge variant="info">Admin</Badge> },
          { label: 'Joined', value: 'January 12, 2024' },
          { label: 'Status', value: <Badge variant="success">Active</Badge> },
        ]}
      />

      <MetadataTable
        items={[
          { label: 'Version', value: 'v0.2.12' },
          { label: 'License', value: 'MIT' },
          { label: 'Runtime', value: 'Bun 1.2' },
        ]}
      />
    </Stack>
  );
}
