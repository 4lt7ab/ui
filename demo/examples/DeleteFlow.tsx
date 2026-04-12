import { useState } from 'react';
import { Card, Stack, Button, IconButton, ConfirmDialog, Badge, Icon } from '../../src';

const items = [
  { id: 1, name: 'production-db', status: 'success' as const },
  { id: 2, name: 'staging-api', status: 'warning' as const },
  { id: 3, name: 'dev-worker', status: 'default' as const },
];

export function DeleteFlow(): React.JSX.Element {
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [list, setList] = useState(items);

  return (
    <Stack gap="xl" style={{ maxWidth: 500 }}>
      <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>
        Resources
      </h3>

      <Stack gap="xs">
        {list.map((item) => (
          <Card key={item.id} variant="flat" padding="md">
            <Stack direction="horizontal" justify="space-between" align="center">
              <Stack direction="horizontal" gap="sm" align="center">
                <Icon name="settings" size={18} style={{ color: 'var(--color-text-muted)' }} />
                <span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
                  {item.name}
                </span>
                <Badge variant={item.status}>
                  {item.status === 'success' ? 'healthy' : item.status === 'warning' ? 'degraded' : 'stopped'}
                </Badge>
              </Stack>
              <IconButton
                icon="trash"
                size={18}
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
  );
}
