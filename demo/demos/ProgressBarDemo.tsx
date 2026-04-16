import { ProgressBar, Stack } from '@4lt7ab/ui';

export function ProgressBarDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Single segment</h3>
        <ProgressBar
          segments={[
            { value: 65, color: 'primary', label: 'Progress' },
          ]}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Multi-segment</h3>
        <ProgressBar
          segments={[
            { value: 40, color: 'success', label: 'Complete' },
            { value: 25, color: 'warning', label: 'In progress' },
            { value: 10, color: 'error', label: 'Failed' },
          ]}
          height={10}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Storage usage</h3>
        <ProgressBar
          segments={[
            { value: 12, color: 'primary', label: 'Photos' },
            { value: 8, color: 'info', label: 'Documents' },
            { value: 5, color: 'warning', label: 'Other' },
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
