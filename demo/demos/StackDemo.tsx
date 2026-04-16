import { Stack, Button, Card } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const placeholder = (label: string): React.CSSProperties => ({
  padding: '1rem',
  background: 'var(--color-surface-raised)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-border)',
  textAlign: 'center' as const,
  fontSize: '0.875rem',
});

const props: PropMeta[] = [
  { name: 'direction', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'Stack direction — column or row layout.' },
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Gap between children using spacing tokens.' },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'", description: 'Cross-axis alignment.' },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'", description: 'Main-axis alignment.' },
  { name: 'wrap', type: 'boolean', default: 'false', description: 'Whether children wrap to the next line on overflow.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Stack content.' },
];

export function StackDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="direction" description="Controls whether children stack vertically (column) or horizontally (row).">
        <Stack gap="md">
          <Stack gap="sm">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>vertical (default)</span>
            <Stack gap="sm">
              <div style={placeholder('A')}>Item A</div>
              <div style={placeholder('B')}>Item B</div>
              <div style={placeholder('C')}>Item C</div>
            </Stack>
          </Stack>
          <Stack gap="sm">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>horizontal</span>
            <Stack direction="horizontal" gap="sm">
              <div style={{ ...placeholder('A'), flex: 1 }}>Item A</div>
              <div style={{ ...placeholder('B'), flex: 1 }}>Item B</div>
              <div style={{ ...placeholder('C'), flex: 1 }}>Item C</div>
            </Stack>
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="gap" description="Spacing between children using the spacing token scale.">
        <Stack gap="md">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((g) => (
            <Stack key={g} gap="xs">
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>gap="{g}"</span>
              <Stack direction="horizontal" gap={g}>
                <div style={placeholder('')}>A</div>
                <div style={placeholder('')}>B</div>
                <div style={placeholder('')}>C</div>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="align" description="Cross-axis alignment (align-items). In a vertical stack, this controls horizontal alignment; in a horizontal stack, vertical.">
        <Stack direction="horizontal" gap="md" align="center" justify="space-between">
          <Stack gap="xs">
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>Projects</h2>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              3 active projects
            </p>
          </Stack>
          <Button variant="primary" size="sm">New project</Button>
        </Stack>
      </PropDemo>

      <PropDemo name="justify" description="Main-axis alignment (justify-content). Controls spacing distribution along the stack direction.">
        <Stack direction="horizontal" gap="md" justify="space-between" align="center">
          <span style={{ fontSize: '0.875rem' }}>Left</span>
          <span style={{ fontSize: '0.875rem' }}>Center</span>
          <span style={{ fontSize: '0.875rem' }}>Right</span>
        </Stack>
      </PropDemo>

      <PropDemo name="wrap" description="When enabled, children wrap to the next line when they overflow the container.">
        <Stack direction="horizontal" gap="sm" wrap>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} style={{ ...placeholder(''), minWidth: '6rem', flex: '1 1 6rem' }}>
              Tag {i + 1}
            </div>
          ))}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
