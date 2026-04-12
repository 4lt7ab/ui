import { EmptyState, Stack } from '@4lt7ab/ui';

export function EmptyStateDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Plain variant</h3>
        <EmptyState icon="warning" message="No messages yet" />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Card variant</h3>
        <EmptyState icon="search" message="No results found for your search" variant="card" />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Empty project list</h3>
        <EmptyState
          icon="edit"
          message="You haven't created any projects yet. Get started by clicking New Project above."
          variant="card"
        />
      </Stack>
    </Stack>
  );
}
