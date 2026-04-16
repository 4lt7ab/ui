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
          <Card variant="live">
            <strong>Live</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Pulsing border glow to indicate real-time or active state. Respects prefers-reduced-motion.
            </p>
          </Card>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Hover interaction</h3>
        <Stack direction="horizontal" gap="md" wrap>
          <div style={{ flex: '1 1 10rem' }}>
            <Card hover>
              <strong>Hoverable card</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Lifts and highlights on hover. Good for clickable tiles.
              </p>
            </Card>
          </div>
          <div style={{ flex: '1 1 10rem' }}>
            <Card hover variant="flat">
              <strong>Flat + hover</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Hover works with any variant.
              </p>
            </Card>
          </div>
          <div style={{ flex: '1 1 10rem' }}>
            <Card hover variant="live">
              <strong>Live + hover</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Combines pulse animation with hover lift.
              </p>
            </Card>
          </div>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Padding options</h3>
        <Stack direction="horizontal" gap="md" wrap>
          {(['sm', 'md', 'lg', 'xl'] as const).map((p) => (
            <div key={p} style={{ flex: '1 1 8rem' }}>
              <Card padding={p} variant="flat">
                <span style={{ fontSize: '0.875rem' }}>padding="{p}"</span>
              </Card>
            </div>
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
            <Stack direction="horizontal" gap="sm" justify="end">
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
            <div key={label} style={{ flex: '1 1 6rem', textAlign: 'center' }}>
              <Card variant="flat" padding="md">
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{label}</div>
              </Card>
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
