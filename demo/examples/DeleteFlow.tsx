import { useState } from 'react';
import {
  Card,
  Stack,
  IconButton,
  ConfirmDialog,
  Badge,
  Icon,
  Text,
} from '@4lt7ab/ui';

const items = [
  { id: 1, name: 'production-db', status: 'success' as const },
  { id: 2, name: 'staging-api', status: 'warning' as const },
  { id: 3, name: 'dev-worker', status: 'default' as const },
];

export function DeleteFlow(): React.JSX.Element {
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [list, setList] = useState(items);

  return (
    <div style={{ maxWidth: 500 }}>
      <Stack gap="xl">
        <Text as="p" size="md" weight="semibold">
          Resources
        </Text>

        <Stack gap="xs">
          {list.map((item) => (
            <Card key={item.id} variant="flat" padding="md">
              <Stack direction="horizontal" justify="space-between" align="center">
                <Stack direction="horizontal" gap="sm" align="center">
                  <Text tone="muted">
                    <Icon name="settings" size="md" />
                  </Text>
                  <Text size="sm" family="mono">
                    {item.name}
                  </Text>
                  <Badge variant={item.status}>
                    {item.status === 'success'
                      ? 'healthy'
                      : item.status === 'warning'
                        ? 'degraded'
                        : 'stopped'}
                  </Badge>
                </Stack>
                <IconButton
                  icon="trash"
                  size="sm"
                  onClick={() => setDeleteTarget(item.name)}
                  aria-label={`Delete ${item.name}`}
                />
              </Stack>
            </Card>
          ))}
        </Stack>

        {deleteTarget && (
          <ConfirmDialog
            title={`Delete ${deleteTarget}?`}
            message="This resource and all associated data will be permanently removed. This action cannot be undone."
            confirmLabel="Delete"
            onConfirm={async () => {
              await new Promise((r) => setTimeout(r, 800));
              setList((prev) => prev.filter((i) => i.name !== deleteTarget));
              setDeleteTarget(null);
            }}
            onCancel={() => setDeleteTarget(null)}
          />
        )}
      </Stack>
    </div>
  );
}
