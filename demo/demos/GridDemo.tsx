import { Grid, Surface, Stack } from '@4lt7ab/ui';

const cell = (label: string): React.JSX.Element => (
  <Surface level="raised" padding="md" radius="md" border style={{ textAlign: 'center' }}>
    <span style={{ fontSize: '0.875rem' }}>{label}</span>
  </Surface>
);

export function GridDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Auto-fill (default)</h3>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          Columns fill available space with a 300px minimum. Resize the window to see wrapping.
        </p>
        <Grid>
          {Array.from({ length: 6 }, (_, i) => (
            <Surface key={i} level="raised" padding="lg" radius="md" border>
              <strong>Card {i + 1}</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Auto-fill at minColumnWidth=300
              </p>
            </Surface>
          ))}
        </Grid>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom min width</h3>
        <Grid minColumnWidth={180} gap="sm">
          {Array.from({ length: 8 }, (_, i) => cell(`Item ${i + 1}`))}
        </Grid>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Fixed columns</h3>
        <Grid columns={3} gap="md">
          {cell('A')}
          {cell('B')}
          {cell('C')}
          {cell('D')}
          {cell('E')}
          {cell('F')}
        </Grid>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Gap options</h3>
        <Stack direction="horizontal" gap="lg" wrap>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((g) => (
            <Stack key={g} gap="xs" style={{ flex: '1 1 12rem' }}>
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
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Dashboard stats</h3>
        <Grid minColumnWidth={200} gap="md">
          {[
            { label: 'Projects', value: '12', color: 'var(--color-info)' },
            { label: 'Tasks', value: '47', color: 'var(--color-warning)' },
            { label: 'Completed', value: '31', color: 'var(--color-success)' },
            { label: 'Documents', value: '89', color: 'var(--color-action-primary)' },
          ].map(({ label, value, color }) => (
            <Surface key={label} bg={`color-mix(in srgb, ${color} 8%, transparent)`} padding="lg" radius="md" border>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wide)' }}>
                {label}
              </div>
            </Surface>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
