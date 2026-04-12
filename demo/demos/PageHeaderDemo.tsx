import { PageHeader, Button, Stack } from '../../src';

export function PageHeaderDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <PageHeader title="Projects" />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With subtitle</h3>
        <PageHeader title="Projects" subtitle="Manage your active projects" />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With trailing action</h3>
        <PageHeader
          title="Team Members"
          subtitle="12 members"
          trailing={<Button size="sm">Invite</Button>}
        />
      </Stack>
    </Stack>
  );
}
