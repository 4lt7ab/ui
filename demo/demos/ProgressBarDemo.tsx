import { ProgressBar, Stack } from '../../src';

export function ProgressBarDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Single segment</h3>
        <ProgressBar
          segments={[
            { value: 65, color: 'var(--color-action-primary)', label: 'Progress' },
          ]}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Multi-segment</h3>
        <ProgressBar
          segments={[
            { value: 40, color: 'var(--color-success)', label: 'Complete' },
            { value: 25, color: 'var(--color-warning)', label: 'In progress' },
            { value: 10, color: 'var(--color-error)', label: 'Failed' },
          ]}
          height={10}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Storage usage</h3>
        <ProgressBar
          segments={[
            { value: 12, color: 'var(--color-action-primary)', label: 'Photos' },
            { value: 8, color: 'var(--color-info)', label: 'Documents' },
            { value: 5, color: 'var(--color-warning)', label: 'Other' },
          ]}
          height={8}
        />
        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
          25 GB of 100 GB used
        </span>
      </Stack>
    </Stack>
  );
}
