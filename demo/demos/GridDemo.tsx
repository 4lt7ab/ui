import { Grid, Surface, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const cell = (label: string): React.JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <Surface level="raised" padding="md" radius="md" border>
      <span style={{ fontSize: '0.875rem' }}>{label}</span>
    </Surface>
  </div>
);

const props: PropMeta[] = [
  { name: 'minColumnWidth', type: 'number', default: '300', description: 'Minimum width of each column (px) before wrapping in auto-fill mode.' },
  { name: 'columns', type: 'number', description: 'Fixed column count. When set, overrides minColumnWidth.' },
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Gap between grid cells.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Grid content.' },
];

export function GridDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="minColumnWidth" description="In auto-fill mode (default), columns fill available space with this minimum width. Resize the window to see wrapping.">
        <Stack gap="lg">
          <Stack gap="xs">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>minColumnWidth=300 (default)</span>
            <Grid>
              {Array.from({ length: 6 }, (_, i) => (
                <Surface key={i} level="raised" padding="lg" radius="md" border>
                  <strong>Card {i + 1}</strong>
                  <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                    Auto-fill at 300px min
                  </p>
                </Surface>
              ))}
            </Grid>
          </Stack>
          <Stack gap="xs">
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>minColumnWidth=180</span>
            <Grid minColumnWidth={180} gap="sm">
              {Array.from({ length: 8 }, (_, i) => cell(`Item ${i + 1}`))}
            </Grid>
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="columns" description="When set, uses a fixed column count instead of auto-fill. All columns are equal width (1fr).">
        <Grid columns={3} gap="md">
          {cell('A')}
          {cell('B')}
          {cell('C')}
          {cell('D')}
          {cell('E')}
          {cell('F')}
        </Grid>
      </PropDemo>

      <PropDemo name="gap" description="Spacing between grid cells using the spacing token scale.">
        <Stack direction="horizontal" gap="lg" wrap>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((g) => (
            <div key={g} style={{ flex: '1 1 12rem' }}>
              <Stack gap="xs">
                <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>
                  gap="{g}"
                </span>
                <Grid columns={2} gap={g}>
                  {cell('1')}
                  {cell('2')}
                  {cell('3')}
                  {cell('4')}
                </Grid>
              </Stack>
            </div>
          ))}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
