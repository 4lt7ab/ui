import { Container, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const box: React.CSSProperties = {
  padding: '1rem',
  background: 'var(--color-surface-raised)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  fontSize: '0.875rem',
  color: 'var(--color-text-muted)',
  textAlign: 'center',
};

const props: PropMeta[] = [
  { name: 'width', type: "'narrow' | 'prose' | 'wide' | 'full'", default: "'prose'", description: 'Named width preset controlling max-width.' },
  { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Horizontal padding preset.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Container content.' },
];

const track: React.CSSProperties = {
  background: 'var(--color-border)',
  borderRadius: 'var(--radius-md)',
  padding: '1rem 0',
};

export function ContainerDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="width" description="Controls the max-width of the container. Content is always horizontally centered.">
        <Stack gap="md">
          {([
            { w: 'narrow' as const, label: 'narrow (32rem)' },
            { w: 'prose' as const, label: 'prose (680px)' },
            { w: 'wide' as const, label: 'wide (900px)' },
            { w: 'full' as const, label: 'full (100%)' },
          ]).map(({ w, label }) => (
            <Stack key={w} gap="xs">
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
              </span>
              <div style={track}>
                <Container width={w}>
                  <div style={box}>width="{w}"</div>
                </Container>
              </div>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="padding" description="Horizontal (inline) padding applied to the container edges.">
        <Stack gap="md">
          {(['none', 'sm', 'md', 'lg'] as const).map((p) => (
            <Stack key={p} gap="xs">
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                padding="{p}"
              </span>
              <div style={track}>
                <Container width="wide" padding={p}>
                  <div style={box}>Content with padding="{p}"</div>
                </Container>
              </div>
            </Stack>
          ))}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
