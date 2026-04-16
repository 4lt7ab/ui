import { Divider, Stack, Badge, Button } from '@4lt7ab/ui';

export function DividerDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Horizontal (default)</h3>
        <Stack gap="md">
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Content above</p>
          <Divider />
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Content below</p>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Opacity levels</h3>
        <Stack gap="md">
          {(['subtle', 'default', 'strong'] as const).map((o) => (
            <Stack key={o} gap="xs">
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>opacity="{o}"</span>
              <Divider opacity={o} />
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Vertical</h3>
        <div style={{ height: 40 }}>
          <Stack direction="horizontal" align="center" gap="md">
            <Badge>Status</Badge>
            <Divider orientation="vertical" />
            <Badge variant="info">Priority</Badge>
            <Divider orientation="vertical" />
            <Badge variant="success">Active</Badge>
          </Stack>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Vertical divider</h3>
        <Stack direction="horizontal" align="center" gap="sm">
          <Button variant="ghost" size="sm">Filter A</Button>
          <Divider orientation="vertical" opacity="subtle" />
          <Button variant="ghost" size="sm">Filter B</Button>
          <Divider orientation="vertical" opacity="subtle" />
          <Button variant="ghost" size="sm">Filter C</Button>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With spacing</h3>
        <div style={{
          padding: 'var(--space-md)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Section one</p>
          <Divider spacing="md" opacity="subtle" />
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Section two</p>
          <Divider spacing="md" opacity="subtle" />
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Section three</p>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Filter bar</h3>
        <div style={{
          padding: 'var(--space-sm) var(--space-md)',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
        }}>
          <Stack
            direction="horizontal"
            align="center"
            gap="sm"
          >
            <Badge variant="info">All</Badge>
            <Badge>Active</Badge>
            <Badge>Archived</Badge>
            <Divider orientation="vertical" opacity="subtle" />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>12 results</span>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
}
