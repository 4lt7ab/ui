import { Card, Stack, Button } from '@4lt7ab/ui';

export function CardDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Variants</h3>
        <Stack gap="md">
          <Card variant="default">
            <strong>Default</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Subtle border with a light shadow. The standard container.
            </p>
          </Card>
          <Card variant="flat" padding="md">
            <strong>Flat</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Raised background, no shadow. Good for inset or nested panels.
            </p>
          </Card>
          <Card variant="elevated">
            <strong>Elevated</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Stronger shadow. Good for floating content, popovers, or prominent sections.
            </p>
          </Card>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Padding options</h3>
        <Stack direction="horizontal" gap="md" wrap>
          {(['sm', 'md', 'lg', 'xl'] as const).map((p) => (
            <Card key={p} padding={p} variant="flat" style={{ flex: '1 1 8rem' }}>
              <span style={{ fontSize: '0.875rem' }}>padding="{p}"</span>
            </Card>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Project card</h3>
        <Card>
          <Stack gap="md">
            <Stack direction="horizontal" align="center" justify="space-between">
              <Stack gap="xs">
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>@4lt7ab/ui</h4>
                <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.75rem' }}>
                  Updated 2 hours ago
                </p>
              </Stack>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                padding: '0.125rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-success-bg)',
                color: 'var(--color-success)',
              }}>
                Active
              </span>
            </Stack>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              Shared React component library. Tokens, themes, and components.
            </p>
            <Stack direction="horizontal" gap="sm" justify="flex-end">
              <Button variant="ghost" size="sm">Settings</Button>
              <Button variant="primary" size="sm">Open</Button>
            </Stack>
          </Stack>
        </Card>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Stats row</h3>
        <Stack direction="horizontal" gap="md" wrap>
          {[
            { label: 'Components', value: '7' },
            { label: 'Tokens', value: '38' },
            { label: 'Themes', value: '2' },
          ].map(({ label, value }) => (
            <Card key={label} variant="flat" padding="md" style={{ flex: '1 1 6rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{label}</div>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
