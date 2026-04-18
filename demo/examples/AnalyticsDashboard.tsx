import { useState } from 'react';
import {
  Header, Card, Stack, Badge, Button, Select, Field,
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
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {label}
        </span>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text)',
        }}>
          {value}
        </span>
        {sub && (
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
            {sub}
          </span>
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
    <Stack gap="xl">
      {/* Header with controls */}
      <Stack gap="md">
        <Stack direction="horizontal" align="center" justify="space-between" wrap gap="md">
          <Header
            level="page"
            title="Analytics"
            subtitle="Traffic and conversion overview"
          />
          <ThemePicker variant="compact" />
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
              <Select
                value={granularity}
                onChange={(e) => setGranularity(e.target.value)}
                options={[
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'monthly', label: 'Monthly' },
                ]}
              />
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
            <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
              Channels
            </h3>
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
                  <TableCell align="right"><span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(ch.visitors)}</span></TableCell>
                  <TableCell align="right"><span style={{ fontFamily: 'var(--font-mono)' }}>{ch.conversion}%</span></TableCell>
                  <TableCell align="right"><span style={{ fontFamily: 'var(--font-mono)' }}>${fmt(ch.revenue)}</span></TableCell>
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
          <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
            Top Pages
          </h3>

          <Stack gap="sm">
            {PAGES.map((page) => (
              <Stack key={page.path} gap="xs">
                <Stack direction="horizontal" align="center" justify="space-between">
                  <span style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text)',
                  }}>
                    {page.path}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-secondary)',
                  }}>
                    {fmt(page.views)} views · {page.bounce}% bounce · {page.avgTime} avg
                  </span>
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
  );
}
