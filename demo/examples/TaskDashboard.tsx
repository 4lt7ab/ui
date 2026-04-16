import { useState } from 'react';
import {
  PageHeader, Card, ExpandableCard, Badge, ProgressBar,
  Stack, Button, EmptyState, Skeleton,
} from '@4lt7ab/ui';

const tasks = [
  { id: 1, title: 'Design token audit', status: 'success' as const, label: 'Done' },
  { id: 2, title: 'Migrate to CSS custom properties', status: 'info' as const, label: 'In progress' },
  { id: 3, title: 'Write component tests', status: 'warning' as const, label: 'Blocked' },
  { id: 4, title: 'Update documentation', status: 'default' as const, label: 'Todo' },
];

export function TaskDashboard(): React.JSX.Element {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ maxWidth: 700 }}>
    <Stack gap="xl">
      <PageHeader
        title="Sprint 14"
        subtitle="Apr 7 – Apr 18"
        trailing={<Button size="sm">New task</Button>}
      />

      <Card>
        <Stack gap="md">
          <Stack direction="horizontal" justify="space-between" align="center">
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
              Progress
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              1 of 4 complete
            </span>
          </Stack>
          <ProgressBar
            segments={[
              { value: 1, color: 'success', label: 'Done' },
              { value: 1, color: 'info', label: 'In progress' },
              { value: 1, color: 'warning', label: 'Blocked' },
              { value: 1, color: 'muted', label: 'Todo' },
            ]}
            height={8}
          />
        </Stack>
      </Card>

      <ExpandableCard title="Active tasks" defaultOpen headerAction={<Badge variant="info">4</Badge>}>
        <Stack gap="sm">
          {tasks.map((task) => (
            <div key={task.id} style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-border)' }}>
            <Stack direction="horizontal" justify="space-between" align="center"
            >
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>{task.title}</span>
              <Badge variant={task.status}>{task.label}</Badge>
            </Stack>
            </div>
          ))}
        </Stack>
      </ExpandableCard>

      <ExpandableCard title="Completed (archived)">
        <EmptyState icon="check-circle" message="Completed tasks from previous sprints will appear here." />
      </ExpandableCard>

      {loading && (
        <Card>
          <Stack gap="sm">
            <Skeleton width="40%" height={20} />
            <Skeleton width="100%" height={14} />
            <Skeleton width="80%" height={14} />
          </Stack>
        </Card>
      )}
    </Stack>
    </div>
  );
}
