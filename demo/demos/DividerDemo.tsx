import { Divider, Stack, Badge, Button } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientation of the divider line.' },
  { name: 'opacity', type: "'subtle' | 'default' | 'strong'", default: "'default'", description: 'Opacity preset for the border color via color-mix.' },
  { name: 'spacing', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", description: 'Spacing around the divider (margin-block for horizontal, margin-inline for vertical).' },
];

export function DividerDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="orientation" description="Horizontal dividers span full width; vertical dividers are inline separators between flex items.">
        <Stack gap="lg">
          <Stack gap="xs">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>horizontal (default)</span>
            <Stack gap="md">
              <p style={{ margin: 0, fontSize: '0.875rem' }}>Content above</p>
              <Divider />
              <p style={{ margin: 0, fontSize: '0.875rem' }}>Content below</p>
            </Stack>
          </Stack>
          <Stack gap="xs">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>vertical</span>
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
        </Stack>
      </PropDemo>

      <PropDemo name="opacity" description="Controls how prominent the divider appears. Uses color-mix with the border token.">
        <Stack gap="md">
          {(['subtle', 'default', 'strong'] as const).map((o) => (
            <Stack key={o} gap="xs">
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>opacity="{o}"</span>
              <Divider opacity={o} />
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="spacing" description="Adds margin around the divider. Horizontal gets margin-block; vertical gets margin-inline.">
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
      </PropDemo>
    </DocBlock>
  );
}
