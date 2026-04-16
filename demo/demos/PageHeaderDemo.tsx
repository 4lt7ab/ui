import { PageHeader, Button, Badge, StatusDot, Stack } from '@4lt7ab/ui';

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
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With indicator</h3>
        <PageHeader
          title="Deployments"
          subtitle="Production environment"
          indicator={<Badge>Live</Badge>}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With StatusDot indicator</h3>
        <PageHeader
          title="API Health"
          subtitle="All systems operational"
          indicator={<StatusDot variant="success" />}
        />
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
