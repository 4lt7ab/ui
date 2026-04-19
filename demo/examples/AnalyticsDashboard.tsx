import { useState } from 'react';
import {
  AppShell, TopBar, Card, Stack, Badge, Button, Select, Field, Text,
  ThemePicker, DateRangePicker, Table, TableHeader, TableHeaderCell,
  TableBody, TableRow, TableCell, ProgressBar, StatusDot,
} from '@4lt7ab/ui';
import type { DateRange } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CHANNELS = [
  { name: 'Organic Search', visitors: 12_430, conversion: 3.2, revenue: 28_700, trend: 'up' },
  { name: 'Direct', visitors: 8_210, conversion: 4.1, revenue: 22_100, trend: 'up' },
  { name: 'Social', visitors: 6_890, conversion: 1.8, revenue: 9_450, trend: 'down' },
  { name: 'Email', visitors: 4_560, conversion: 5.6, revenue: 18_300, trend: 'up' },
  { name: 'Referral', visitors: 3_210, conversion: 3.9, revenue: 11_200, trend: 'flat' },
  { name: 'Paid Search', visitors: 2_740, conversion: 2.4, revenue: 7_800, trend: 'down' },
];

const PAGES = [
  { path: '/pricing', views: 14_200, bounce: 32, avgTime: '2m 45s' },
  { path: '/docs/getting-started', views: 11_800, bounce: 18, avgTime: '4m 12s' },
  { path: '/', views: 9_600, bounce: 45, avgTime: '1m 20s' },
  { path: '/blog/launch-week', views: 7_300, bounce: 28, avgTime: '3m 05s' },
  { path: '/signup', views: 5_100, bounce: 52, avgTime: '0m 55s' },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function trendDot(trend: string): 'success' | 'warning' | 'error' {
  if (trend === 'up') return 'success';
  if (trend === 'down') return 'error';
  return 'warning';
}

function fmt(n: number): string {
  return n.toLocaleString();
}

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

function MetricTile({ label, value, sub }: {
  label: string;
  value: string;
  sub?: string;
}): React.JSX.Element {
  return (
    <Card padding="md">
      <Stack gap="xs">
        <Text size="xs" weight="semibold" tone="muted">
          {label.toUpperCase()}
        </Text>
        <Text size="xl" weight="bold" family="mono">
          {value}
        </Text>
        {sub && (
          <Text size="xs" tone="secondary">
            {sub}
          </Text>
        )}
      </Stack>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Analytics Dashboard
// ---------------------------------------------------------------------------

export function AnalyticsDashboard(): React.JSX.Element {
  const today = new Date();
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(today.getFullYear(), today.getMonth(), 1),
    to: today,
  });
  const [granularity, setGranularity] = useState('daily');

  return (
    <div style={{ height: '40rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <AppShell.Root>
        <AppShell.TopBar aria-label="Analytics header">
          <TopBar.Leading>
            <Text weight="semibold">Analytics</Text>
          </TopBar.Leading>
          <TopBar.Trailing>
            <ThemePicker variant="compact" />
          </TopBar.Trailing>
        </AppShell.TopBar>

        <AppShell.Main>
          <div style={{ padding: 'var(--space-lg)' }}>
            <Stack gap="xl">
              {/* Header with controls */}
              <Stack gap="md">
                <Stack direction="horizontal" align="center" justify="space-between" wrap gap="md">
                  <Stack gap="xs">
                    <Text as="p" size="xl" weight="bold">
                      Traffic overview
                    </Text>
                    <Text as="p" size="sm" tone="secondary">
                      Visitors and revenue for the selected period.
                    </Text>
                  </Stack>
                </Stack>

                <Stack direction="horizontal" gap="md" wrap align="end">
                  <div style={{ minWidth: 220, flex: '0 1 auto' }}>
                    <Field label="Date range">
                      <DateRangePicker
                        value={range}
                        onChange={setRange}
                        placeholder="Select period"
                      />
                    </Field>
                  </div>
                  <div style={{ minWidth: 140 }}>
                    <Field label="Granularity">
                      <Select.Root value={granularity} onValueChange={setGranularity}>
                        <Select.Trigger>
                          <Select.Value />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Item value="daily">Daily</Select.Item>
                          <Select.Item value="weekly">Weekly</Select.Item>
                          <Select.Item value="monthly">Monthly</Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </Field>
                  </div>
                  <Button variant="primary" size="sm">Export</Button>
                </Stack>
              </Stack>

              {/* KPI cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))',
                gap: 'var(--space-md)',
              }}>
                <MetricTile label="Visitors" value="38,040" sub="+12.3% vs prior period" />
                <MetricTile label="Conversion" value="3.4%" sub="+0.2pp vs prior period" />
                <MetricTile label="Revenue" value="$97,550" sub="+8.7% vs prior period" />
                <MetricTile label="Avg. Session" value="2m 34s" sub="-5s vs prior period" />
              </div>

              {/* Channel breakdown */}
              <Card>
                <Stack gap="md">
                  <Stack direction="horizontal" align="center" justify="space-between">
                    <Text as="p" size="md" weight="semibold">
                      Channels
                    </Text>
                    <Badge variant="default">{CHANNELS.length} sources</Badge>
                  </Stack>

                  <Table>
                    <TableHeader>
                      <TableHeaderCell>Channel</TableHeaderCell>
                      <TableHeaderCell align="right">Visitors</TableHeaderCell>
                      <TableHeaderCell align="right">Conv. %</TableHeaderCell>
                      <TableHeaderCell align="right">Revenue</TableHeaderCell>
                      <TableHeaderCell align="center">Trend</TableHeaderCell>
                    </TableHeader>
                    <TableBody>
                      {CHANNELS.map((ch) => (
                        <TableRow key={ch.name}>
                          <TableCell>{ch.name}</TableCell>
                          <TableCell align="right">
                            <Text family="mono">{fmt(ch.visitors)}</Text>
                          </TableCell>
                          <TableCell align="right">
                            <Text family="mono">{ch.conversion}%</Text>
                          </TableCell>
                          <TableCell align="right">
                            <Text family="mono">${fmt(ch.revenue)}</Text>
                          </TableCell>
                          <TableCell align="center">
                            <StatusDot variant={trendDot(ch.trend)} aria-label={ch.trend} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Stack>
              </Card>

              {/* Top pages */}
              <Card>
                <Stack gap="md">
                  <Text as="p" size="md" weight="semibold">
                    Top Pages
                  </Text>

                  <Stack gap="sm">
                    {PAGES.map((page) => (
                      <Stack key={page.path} gap="xs">
                        <Stack direction="horizontal" align="center" justify="space-between">
                          <Text size="sm" family="mono">
                            {page.path}
                          </Text>
                          <Text size="xs" tone="secondary">
                            {fmt(page.views)} views · {page.bounce}% bounce · {page.avgTime} avg
                          </Text>
                        </Stack>
                        <ProgressBar
                          segments={[
                            { value: page.views, color: 'primary' },
                            { value: PAGES[0].views - page.views, color: 'muted' },
                          ]}
                          height="sm"
                        />
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </div>
        </AppShell.Main>
      </AppShell.Root>
    </div>
  );
}
