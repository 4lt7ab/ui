import { StatCard, Stack, Grid } from '@4lt7ab/ui';

export function StatCardDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With icons</h3>
        <Grid minColumnWidth={200} gap="md">
          <StatCard icon="check_circle" color="success" value={42} label="Completed" />
          <StatCard icon="pending" color="warning" value={7} label="In Progress" />
          <StatCard icon="error" color="error" value={3} label="Blocked" />
          <StatCard icon="folder" color="info" value={12} label="Projects" />
        </Grid>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Without icons (dot fallback)</h3>
        <Grid minColumnWidth={180} gap="md">
          <StatCard color="success" value="89%" label="Uptime" />
          <StatCard color="primary" value="1.2k" label="Requests" />
          <StatCard color="warning" value="340ms" label="Avg Latency" />
        </Grid>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom icon sizes</h3>
        <Stack direction="horizontal" gap="md" wrap>
          <StatCard icon="analytics" color="info" value="28" label="Reports" iconSize={32} />
          <StatCard icon="analytics" color="info" value="28" label="Reports" iconSize={48} />
          <StatCard icon="analytics" color="info" value="28" label="Reports" iconSize={56} />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Rich value content</h3>
        <Grid minColumnWidth={220} gap="md">
          <StatCard
            icon="trending_up"
            color="success"
            value={
              <span>
                47{' '}
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)', fontWeight: 500 }}>
                  +12%
                </span>
              </span>
            }
            label="This week"
          />
          <StatCard
            icon="trending_down"
            color="error"
            value={
              <span>
                23{' '}
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-error)', fontWeight: 500 }}>
                  -8%
                </span>
              </span>
            }
            label="Last week"
          />
        </Grid>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Project overview</h3>
        <Grid minColumnWidth={200} gap="md">
          <StatCard icon="task_alt" color="success" value={31} label="Done" />
          <StatCard icon="schedule" color="warning" value={8} label="In Progress" />
          <StatCard icon="block" color="error" value={2} label="Blocked" />
          <StatCard icon="description" color="info" value={14} label="Documents" />
        </Grid>
      </Stack>
    </Stack>
  );
}
