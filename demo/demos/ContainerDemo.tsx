import { Container } from '@4lt7ab/content';
import { Stack } from '@4lt7ab/ui';

export function ContainerDemo(): React.JSX.Element {
  const box = (label: string): React.CSSProperties => ({
    padding: '1rem',
    background: 'var(--color-surface-raised)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.875rem',
    color: 'var(--color-text-muted)',
    textAlign: 'center',
  });

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Prose width (680px)
        </span>
        <div style={{ background: 'var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0' }}>
          <Container width="prose">
            <div style={box('prose')}>
              Container width="prose" — 680px max, centered
            </div>
          </Container>
        </div>
      </Stack>

      <Stack gap="sm">
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Wide width (900px)
        </span>
        <div style={{ background: 'var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0' }}>
          <Container width="wide">
            <div style={box('wide')}>
              Container width="wide" — 900px max, centered
            </div>
          </Container>
        </div>
      </Stack>
    </Stack>
  );
}
