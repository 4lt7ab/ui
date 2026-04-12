import { Stack, Button, Card } from '@4lt7ab/ui';

const placeholder = (label: string): React.CSSProperties => ({
  padding: '1rem',
  background: 'var(--color-surface-raised)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-border)',
  textAlign: 'center' as const,
  fontSize: '0.875rem',
});

export function StackDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Vertical (default)</h3>
        <Stack gap="sm">
          <div style={placeholder('A')}>Item A</div>
          <div style={placeholder('B')}>Item B</div>
          <div style={placeholder('C')}>Item C</div>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Horizontal</h3>
        <Stack direction="horizontal" gap="sm">
          <div style={{ ...placeholder('A'), flex: 1 }}>Item A</div>
          <div style={{ ...placeholder('B'), flex: 1 }}>Item B</div>
          <div style={{ ...placeholder('C'), flex: 1 }}>Item C</div>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Wrapping with gap</h3>
        <Stack direction="horizontal" gap="sm" wrap>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} style={{ ...placeholder(''), minWidth: '6rem', flex: '1 1 6rem' }}>
              Tag {i + 1}
            </div>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Page header</h3>
        <Stack direction="horizontal" gap="md" align="center" justify="space-between">
          <Stack gap="xs">
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>Projects</h2>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              3 active projects
            </p>
          </Stack>
          <Button variant="primary" size="sm">New project</Button>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Sidebar list</h3>
        <Card variant="flat" padding="sm">
          <Stack gap="xs">
            {['Dashboard', 'Projects', 'Settings'].map((item) => (
              <div key={item} style={{
                padding: '0.5rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                ...(item === 'Projects' ? {
                  background: 'var(--color-action-primary)',
                  color: 'var(--color-text-inverse)',
                  fontWeight: 500,
                } : {}),
              }}>
                {item}
              </div>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}
