import { StatCard, Stack, Grid } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'value', type: 'ReactNode', required: true, description: 'The metric value displayed prominently. Can be a number, string, or rich content.' },
  { name: 'label', type: 'string', required: true, description: 'Label text describing the metric.' },
  { name: 'color', type: "'primary' | 'success' | 'warning' | 'error' | 'info' | 'muted'", description: 'Accent color for the icon circle and tint. Maps to a semantic token.' },
  { name: 'icon', type: 'IconName | string', description: 'Icon rendered inside the tinted circle. When omitted, a small colored dot is shown.' },
];

export function StatCardDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="icon + color" description="Icon rendered inside a tinted circle. Color controls both the icon and the circle background tint.">
        <Grid minColumnWidth={200} gap="md">
          <StatCard icon="check_circle" color="success" value={42} label="Completed" />
          <StatCard icon="pending" color="warning" value={7} label="In Progress" />
          <StatCard icon="error" color="error" value={3} label="Blocked" />
          <StatCard icon="folder" color="info" value={12} label="Projects" />
        </Grid>
      </PropDemo>

      <PropDemo name="Without icon" description="When icon is omitted, a small colored dot is shown instead.">
        <Grid minColumnWidth={180} gap="md">
          <StatCard color="success" value="89%" label="Uptime" />
          <StatCard color="primary" value="1.2k" label="Requests" />
          <StatCard color="warning" value="340ms" label="Avg Latency" />
        </Grid>
      </PropDemo>

      <PropDemo name="value (rich content)" description="The value prop accepts ReactNode, so you can compose formatted numbers with trend indicators.">
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
      </PropDemo>

      <PropDemo name="Realistic: Project overview" description="Dashboard-style grid of metric cards showing project status.">
        <Grid minColumnWidth={200} gap="md">
          <StatCard icon="task_alt" color="success" value={31} label="Done" />
          <StatCard icon="schedule" color="warning" value={8} label="In Progress" />
          <StatCard icon="block" color="error" value={2} label="Blocked" />
          <StatCard icon="description" color="info" value={14} label="Documents" />
        </Grid>
      </PropDemo>
    </DocBlock>
  );
}
