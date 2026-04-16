import { useState } from 'react';
import {
  PageHeader, Card, Stack, Button, Badge, StatusDot, Icon, IconButton,
  ProgressBar, Pagination, TagChip, ExpandableCard, Skeleton, RowSkeleton,
  Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
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

const INCIDENTS = [
  { id: 'INC-042', title: 'Email delivery delays', severity: 'error', service: 'email-service', time: '14 min ago', tags: ['p1', 'customer-facing'] },
  { id: 'INC-041', title: 'Elevated latency on worker queue', severity: 'warning', service: 'worker-jobs', time: '2h ago', tags: ['p2', 'internal'] },
  { id: 'INC-040', title: 'Analytics pipeline backpressure', severity: 'warning', service: 'analytics-pipe', time: '3h ago', tags: ['p2', 'data'] },
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

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

function StatCard({ label, value, dot }: {
  label: string;
  value: string;
  dot?: 'success' | 'warning' | 'error';
}): React.JSX.Element {
  return (
    <div style={{ flex: '1 1 10rem' }}>
      <Card padding="md">
        <Stack gap="xs">
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{label}</span>
          <Stack direction="horizontal" gap="sm" align="center">
            {dot && <StatusDot variant={dot} />}
            <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {value}
            </span>
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
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{label}</span>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
          {value}%
        </span>
      </Stack>
      <ProgressBar
        segments={[
          { value, color },
          { value: 100 - value, color: 'muted' },
        ]}
        height={6}
      />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Services table
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
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{svc.name}</span>
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
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: svc.uptime >= 99.9
              ? 'var(--color-success)'
              : svc.uptime >= 99
                ? 'var(--color-warning)'
                : 'var(--color-error)',
          }}>
            {svc.uptime}%
          </span>
        </TableCell>
      )}
    </TableRow>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function CommandCenter(): React.JSX.Element {
  const [tab, setTab] = useState<Tab>('overview');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const degradedCount = SERVICES.filter((s) => s.status === 'degraded').length;
  const incidentCount = SERVICES.filter((s) => s.status === 'incident').length;

  const paginated = SERVICES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(SERVICES.length / PAGE_SIZE);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <Stack gap="xl">
      <PageHeader
        title="System Monitor"
        subtitle="All regions \u00B7 Last updated 30s ago"
        trailing={
          <Stack direction="horizontal" gap="sm">
            <IconButton icon="filter" size={18} aria-label="Filter" />
            <Button variant="secondary" size="sm" onClick={refresh}>
              Refresh
            </Button>
          </Stack>
        }
      />

      {/* ── Tab bar ── */}
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-xs)' }}>
      <Stack
        direction="horizontal"
        gap="xs"
      >
        {(['overview', 'services', 'incidents'] as Tab[]).map((t) => (
          <Button
            key={t}
            variant={tab === t ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => { setTab(t); setPage(1); }}
          >
            <span style={{ textTransform: 'capitalize' }}>{t}</span>
            {t === 'incidents' && INCIDENTS.length > 0 && (
              <span style={{ marginLeft: '0.375rem' }}><Badge variant="error">{INCIDENTS.length}</Badge></span>
            )}
          </Button>
        ))}
      </Stack>
      </div>

      {/* ── Overview ── */}
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
              <StatCard label="Uptime" value="99.97%" dot="success" />
              <StatCard label="Services" value={String(SERVICES.length)} dot={degradedCount > 0 ? 'warning' : 'success'} />
              <StatCard label="Incidents" value={String(INCIDENTS.length)} dot={incidentCount > 0 ? 'error' : 'success'} />
              <StatCard label="Requests/s" value="8,472" />
            </Stack>
          )}

          {/* System health */}
          <Card>
            <Stack gap="md">
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>System Health</span>
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
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Services</span>
              <Button variant="ghost" size="sm" onClick={() => setTab('services')}>
                View all <Icon name="chevron-right" size={14} />
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
          <ExpandableCard
            title="Recent Incidents"
            defaultOpen
            headerAction={<Badge variant="error">{INCIDENTS.length}</Badge>}
          >
            <Stack gap="md">
              {INCIDENTS.map((inc) => (
                <div key={inc.id} style={{ padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--color-border)' }}>
                <Stack
                  gap="xs"
                >
                  <Stack direction="horizontal" justify="space-between" align="center">
                    <Stack direction="horizontal" gap="sm" align="center">
                      <Badge variant={severityBadge(inc.severity)}>{inc.id}</Badge>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{inc.title}</span>
                    </Stack>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{inc.time}</span>
                  </Stack>
                  <Stack direction="horizontal" gap="xs" align="center">
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {inc.service}
                    </span>
                    {inc.tags.map((tag) => (
                      <TagChip key={tag} name={tag} />
                    ))}
                  </Stack>
                </Stack>
                </div>
              ))}
            </Stack>
          </ExpandableCard>
        </Stack>
      )}

      {/* ── Services (full table) ── */}
      {tab === 'services' && (
        <Stack gap="md">
          <Table>
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
          </Table>
          <Pagination
            page={page}
            totalPages={totalPages}
            total={SERVICES.length}
            onPageChange={setPage}
          />
        </Stack>
      )}

      {/* ── Incidents ── */}
      {tab === 'incidents' && (
        <Stack gap="md">
          {INCIDENTS.map((inc) => (
            <Card key={inc.id}>
              <Stack gap="sm">
                <Stack direction="horizontal" justify="space-between" align="center">
                  <Stack direction="horizontal" gap="sm" align="center">
                    <Badge variant={severityBadge(inc.severity)}>{inc.id}</Badge>
                    <span style={{ fontWeight: 600 }}>{inc.title}</span>
                  </Stack>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{inc.time}</span>
                </Stack>
                <Stack direction="horizontal" gap="sm" align="center">
                  <Icon name="settings" size={14} style={{ color: 'var(--color-text-muted)' }} />
                  <span style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                  }}>
                    {inc.service}
                  </span>
                </Stack>
                <Stack direction="horizontal" gap="xs">
                  {inc.tags.map((tag) => (
                    <TagChip key={tag} name={tag} />
                  ))}
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
