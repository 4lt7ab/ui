import { useState } from 'react';
import {
  AppShell, TopBar, Header, Card, Stack, Button, Badge, StatusDot, Icon, IconButton,
  ProgressBar, Skeleton, RowSkeleton, Text,
  DataTablePage, DetailPage, Surface,
  Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
  tagChipStyle,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const SERVICES = [
  { name: 'api-gateway', region: 'us-east-1', status: 'healthy', latency: 12, uptime: 99.99 },
  { name: 'auth-service', region: 'us-east-1', status: 'healthy', latency: 8, uptime: 99.97 },
  { name: 'web-app', region: 'us-west-2', status: 'healthy', latency: 45, uptime: 99.95 },
  { name: 'worker-jobs', region: 'eu-west-1', status: 'degraded', latency: 230, uptime: 98.5 },
  { name: 'search-index', region: 'us-east-1', status: 'healthy', latency: 34, uptime: 99.91 },
  { name: 'cdn-edge', region: 'global', status: 'healthy', latency: 3, uptime: 100 },
  { name: 'postgres-primary', region: 'us-east-1', status: 'healthy', latency: 2, uptime: 99.99 },
  { name: 'redis-cache', region: 'us-east-1', status: 'healthy', latency: 1, uptime: 99.99 },
  { name: 'email-service', region: 'us-west-2', status: 'incident', latency: 0, uptime: 95.2 },
  { name: 'webhook-relay', region: 'eu-west-1', status: 'healthy', latency: 67, uptime: 99.88 },
  { name: 'file-storage', region: 'us-east-1', status: 'healthy', latency: 18, uptime: 99.96 },
  { name: 'analytics-pipe', region: 'us-west-2', status: 'degraded', latency: 450, uptime: 97.1 },
];

interface Incident {
  id: string;
  title: string;
  severity: string;
  service: string;
  time: string;
  tags: string[];
  summary: string;
}

const INCIDENTS: Incident[] = [
  {
    id: 'INC-042',
    title: 'Email delivery delays',
    severity: 'error',
    service: 'email-service',
    time: '14 min ago',
    tags: ['p1', 'customer-facing'],
    summary:
      'Outbound email queue is backed up; messages are being retried with exponential backoff. Engineering is investigating the upstream provider rate limits.',
  },
  {
    id: 'INC-041',
    title: 'Elevated latency on worker queue',
    severity: 'warning',
    service: 'worker-jobs',
    time: '2h ago',
    tags: ['p2', 'internal'],
    summary:
      'Worker jobs are processing at ~3x normal p95. Triggering suspects: new cron schedule pushed this morning. Mitigation underway.',
  },
  {
    id: 'INC-040',
    title: 'Analytics pipeline backpressure',
    severity: 'warning',
    service: 'analytics-pipe',
    time: '3h ago',
    tags: ['p2', 'data'],
    summary:
      'Analytics pipeline reporting backpressure on the aggregation stage. Temporary throughput cap in place while we resize the cluster.',
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Tab = 'overview' | 'services' | 'incidents';
const PAGE_SIZE = 6;

function statusDot(status: string): 'success' | 'warning' | 'error' | 'default' {
  if (status === 'healthy') return 'success';
  if (status === 'degraded') return 'warning';
  if (status === 'incident') return 'error';
  return 'default';
}

function severityBadge(severity: string): 'error' | 'warning' | 'default' {
  if (severity === 'error') return 'error';
  if (severity === 'warning') return 'warning';
  return 'default';
}

function uptimeTone(uptime: number): 'success' | 'warning' | 'error' {
  if (uptime >= 99.9) return 'success';
  if (uptime >= 99) return 'warning';
  return 'error';
}

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

function MetricTile({ label, value, dot }: {
  label: string;
  value: string;
  dot?: 'success' | 'warning' | 'error';
}): React.JSX.Element {
  return (
    <div style={{ flex: '1 1 10rem' }}>
      <Card padding="md">
        <Stack gap="xs">
          <Text size="xs" tone="muted">{label}</Text>
          <Stack direction="horizontal" gap="sm" align="center">
            {dot && <StatusDot variant={dot} />}
            <Text size="xl" weight="bold" family="mono">
              {value}
            </Text>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Metric row
// ---------------------------------------------------------------------------

function Metric({ label, value, color }: {
  label: string;
  value: number;
  color: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'muted';
}): React.JSX.Element {
  return (
    <Stack gap="xs">
      <Stack direction="horizontal" justify="space-between" align="center">
        <Text size="sm" tone="secondary">{label}</Text>
        <Text size="xs" family="mono" tone="muted">{value}%</Text>
      </Stack>
      <ProgressBar
        segments={[
          { value, color },
          { value: 100 - value, color: 'muted' },
        ]}
        height="md"
      />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Services table row
// ---------------------------------------------------------------------------

function ServiceRow({ svc, showUptime }: {
  svc: typeof SERVICES[0];
  showUptime?: boolean;
}): React.JSX.Element {
  return (
    <TableRow hoverable>
      <TableCell>
        <Stack direction="horizontal" gap="sm" align="center">
          <StatusDot variant={statusDot(svc.status)} size="md" />
          <Text size="sm" family="mono">{svc.name}</Text>
        </Stack>
      </TableCell>
      <TableCell>
        <Badge variant={statusDot(svc.status)}>{svc.status}</Badge>
      </TableCell>
      <TableCell muted>{svc.region}</TableCell>
      <TableCell align="right" muted>
        {svc.latency > 0 ? `${svc.latency}ms` : '\u2014'}
      </TableCell>
      {showUptime && (
        <TableCell align="right">
          <Text size="sm" family="mono" tone={uptimeTone(svc.uptime)}>
            {svc.uptime}%
          </Text>
        </TableCell>
      )}
    </TableRow>
  );
}

// ---------------------------------------------------------------------------
// Incident list item (overview preview)
// ---------------------------------------------------------------------------

function IncidentRow({ inc, onOpen }: {
  inc: Incident;
  onOpen: () => void;
}): React.JSX.Element {
  return (
    <div style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-border)' }}>
      <Stack gap="xs">
        <Stack direction="horizontal" justify="space-between" align="center">
          <Stack direction="horizontal" gap="sm" align="center">
            <Badge variant={severityBadge(inc.severity)}>{inc.id}</Badge>
            <Button variant="ghost" size="sm" onClick={onOpen}>
              {inc.title}
            </Button>
          </Stack>
          <Text size="xs" tone="muted">{inc.time}</Text>
        </Stack>
        <Stack direction="horizontal" gap="xs" align="center">
          <Text size="xs" family="mono" tone="muted">{inc.service}</Text>
          {inc.tags.map((tag) => (
            <span key={tag} style={tagChipStyle}>{tag}</span>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Incident detail (DetailPage)
// ---------------------------------------------------------------------------

function IncidentDetail({ inc, onBack }: {
  inc: Incident;
  onBack: () => void;
}): React.JSX.Element {
  return (
    <DetailPage.Root>
      <DetailPage.Header
        title={inc.title}
        subtitle={`${inc.id} · ${inc.service}`}
        indicator={<Badge variant={severityBadge(inc.severity)}>{inc.severity}</Badge>}
        onBack={onBack}
      />
      <DetailPage.Actions>
        <Button variant="secondary" size="sm">Acknowledge</Button>
        <Button variant="primary" size="sm">Resolve</Button>
      </DetailPage.Actions>
      <DetailPage.Meta>
        <DetailPage.MetaItem label="Severity">
          <Badge variant={severityBadge(inc.severity)}>{inc.severity}</Badge>
        </DetailPage.MetaItem>
        <DetailPage.MetaItem label="Service">
          <Text size="sm" family="mono">{inc.service}</Text>
        </DetailPage.MetaItem>
        <DetailPage.MetaItem label="Opened">{inc.time}</DetailPage.MetaItem>
        <DetailPage.MetaItem label="Tags">
          <Stack direction="horizontal" gap="xs" wrap>
            {inc.tags.map((tag) => (
              <span key={tag} style={tagChipStyle}>{tag}</span>
            ))}
          </Stack>
        </DetailPage.MetaItem>
      </DetailPage.Meta>
      <DetailPage.Body>
        <Surface level="raised" padding="md">
          <Stack gap="sm">
            <Text size="md" weight="semibold">Summary</Text>
            <Text size="sm" tone="secondary">{inc.summary}</Text>
          </Stack>
        </Surface>
      </DetailPage.Body>
    </DetailPage.Root>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function CommandCenter(): React.JSX.Element {
  const [tab, setTab] = useState<Tab>('overview');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeIncident, setActiveIncident] = useState<Incident | null>(null);

  const degradedCount = SERVICES.filter((s) => s.status === 'degraded').length;
  const incidentCount = SERVICES.filter((s) => s.status === 'incident').length;

  const paginated = SERVICES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(SERVICES.length / PAGE_SIZE);

  const refresh = (): void => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div style={{ height: '44rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <AppShell.Root>
        <AppShell.TopBar aria-label="Command center">
          <TopBar.Leading>
            <Text weight="semibold">System Monitor</Text>
          </TopBar.Leading>
          <TopBar.Trailing>
            <Stack direction="horizontal" gap="sm" align="center">
              <IconButton icon="filter" size="sm" aria-label="Filter" />
              <Button variant="secondary" size="sm" onClick={refresh}>
                Refresh
              </Button>
            </Stack>
          </TopBar.Trailing>
        </AppShell.TopBar>

        <AppShell.Main>
          <div style={{ padding: 'var(--space-lg)' }}>
            {activeIncident ? (
              <IncidentDetail inc={activeIncident} onBack={() => setActiveIncident(null)} />
            ) : (
              <Stack gap="xl">
                <Header
                  level="page"
                  title="All regions"
                  subtitle="Last updated 30s ago"
                />

                {/* Tab bar */}
                <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-xs)' }}>
                  <Stack direction="horizontal" gap="xs">
                    {(['overview', 'services', 'incidents'] as Tab[]).map((t) => (
                      <Button
                        key={t}
                        variant={tab === t ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => { setTab(t); setPage(1); }}
                      >
                        <Text size="sm" weight="medium">
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </Text>
                        {t === 'incidents' && INCIDENTS.length > 0 && (
                          <Badge variant="error">{INCIDENTS.length}</Badge>
                        )}
                      </Button>
                    ))}
                  </Stack>
                </div>

                {/* Overview */}
                {tab === 'overview' && (
                  <Stack gap="xl">
                    {/* Stats row */}
                    {loading ? (
                      <Stack direction="horizontal" gap="md" wrap>
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} style={{ flex: '1 1 10rem' }}>
                            <Card padding="md">
                              <Stack gap="sm">
                                <Skeleton width="40%" height={12} />
                                <Skeleton width="60%" height={28} />
                              </Stack>
                            </Card>
                          </div>
                        ))}
                      </Stack>
                    ) : (
                      <Stack direction="horizontal" gap="md" wrap>
                        <MetricTile label="Uptime" value="99.97%" dot="success" />
                        <MetricTile label="Services" value={String(SERVICES.length)} dot={degradedCount > 0 ? 'warning' : 'success'} />
                        <MetricTile label="Incidents" value={String(INCIDENTS.length)} dot={incidentCount > 0 ? 'error' : 'success'} />
                        <MetricTile label="Requests/s" value="8,472" />
                      </Stack>
                    )}

                    {/* System health */}
                    <Card>
                      <Stack gap="md">
                        <Text size="sm" weight="semibold">System Health</Text>
                        {loading ? (
                          <Stack gap="sm">
                            <RowSkeleton />
                            <RowSkeleton />
                            <RowSkeleton />
                          </Stack>
                        ) : (
                          <Stack gap="sm">
                            <Metric label="CPU" value={78} color="warning" />
                            <Metric label="Memory" value={56} color="success" />
                            <Metric label="Disk" value={34} color="info" />
                          </Stack>
                        )}
                      </Stack>
                    </Card>

                    {/* Services preview */}
                    <Stack gap="sm">
                      <Stack direction="horizontal" justify="space-between" align="center">
                        <Text size="sm" weight="semibold">Services</Text>
                        <Button variant="ghost" size="sm" onClick={() => setTab('services')}>
                          View all <Icon name="chevron-right" size="xs" />
                        </Button>
                      </Stack>
                      <Table density="sm">
                        <TableHeader>
                          <TableHeaderCell>Service</TableHeaderCell>
                          <TableHeaderCell>Status</TableHeaderCell>
                          <TableHeaderCell>Region</TableHeaderCell>
                          <TableHeaderCell align="right">Latency</TableHeaderCell>
                        </TableHeader>
                        <TableBody>
                          {SERVICES.slice(0, 5).map((svc) => (
                            <ServiceRow key={svc.name} svc={svc} />
                          ))}
                        </TableBody>
                      </Table>
                    </Stack>

                    {/* Recent incidents */}
                    <Card>
                      <Stack gap="md">
                        <Stack direction="horizontal" justify="space-between" align="center">
                          <Text size="sm" weight="semibold">Recent incidents</Text>
                          <Badge variant="error">{INCIDENTS.length}</Badge>
                        </Stack>
                        <Stack gap="md">
                          {INCIDENTS.map((inc) => (
                            <IncidentRow
                              key={inc.id}
                              inc={inc}
                              onOpen={() => setActiveIncident(inc)}
                            />
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  </Stack>
                )}

                {/* Services — full table */}
                {tab === 'services' && (
                  <DataTablePage.Root rowCount={paginated.length} aria-label="Services">
                    <DataTablePage.Table>
                      <TableHeader>
                        <TableHeaderCell>Service</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Region</TableHeaderCell>
                        <TableHeaderCell align="right">Latency</TableHeaderCell>
                        <TableHeaderCell align="right">Uptime</TableHeaderCell>
                      </TableHeader>
                      <TableBody>
                        {paginated.map((svc) => (
                          <ServiceRow key={svc.name} svc={svc} showUptime />
                        ))}
                      </TableBody>
                    </DataTablePage.Table>
                    <DataTablePage.Pagination
                      page={page}
                      totalPages={totalPages}
                      total={SERVICES.length}
                      onPageChange={setPage}
                    />
                    <DataTablePage.Empty
                      icon="search"
                      message="No services match the current filters."
                    />
                  </DataTablePage.Root>
                )}

                {/* Incidents — list */}
                {tab === 'incidents' && (
                  <Stack gap="md">
                    {INCIDENTS.map((inc) => (
                      <Card key={inc.id}>
                        <Stack gap="sm">
                          <Stack direction="horizontal" justify="space-between" align="center">
                            <Stack direction="horizontal" gap="sm" align="center">
                              <Badge variant={severityBadge(inc.severity)}>{inc.id}</Badge>
                              <Button variant="ghost" size="sm" onClick={() => setActiveIncident(inc)}>
                                <Text weight="semibold">{inc.title}</Text>
                              </Button>
                            </Stack>
                            <Text size="xs" tone="muted">{inc.time}</Text>
                          </Stack>
                          <Stack direction="horizontal" gap="sm" align="center">
                            <Text tone="muted">
                              <Icon name="settings" size="xs" />
                            </Text>
                            <Text size="sm" family="mono" tone="secondary">{inc.service}</Text>
                          </Stack>
                          <Stack direction="horizontal" gap="xs">
                            {inc.tags.map((tag) => (
                              <span key={tag} style={tagChipStyle}>{tag}</span>
                            ))}
                          </Stack>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                )}
              </Stack>
            )}
          </div>
        </AppShell.Main>
      </AppShell.Root>
    </div>
  );
}
