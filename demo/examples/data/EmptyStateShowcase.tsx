import { useState } from 'react';
import {
  Badge,
  Button,
  EmptyState,
  SegmentedControl,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  semantic as t,
} from '@4lt7ab/ui';
import type { IconName } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// EmptyState showcase — live example for 06-data.md
// ---------------------------------------------------------------------------
//
// Three states a consumer typically toggles on a data panel:
//
//   - `populated` — the happy path. Data renders, no empty state.
//   - `empty`     — no rows to show. `EmptyState` takes over with a
//                   neutral icon, a plain-English message, and an action.
//   - `error`     — fetch failed. Same primitive, different icon/message/
//                   action (retry) so the error case stays consistent with
//                   the empty case visually while reading differently.
//
// The segmented control is the toggle; the panel below swaps between the
// three states. Notice that `EmptyState` is a single primitive — the
// "variant" here isn't a prop, it's the consumer picking different
// content for the same component.

type PanelState = 'populated' | 'empty' | 'error';

interface StateConfig {
  readonly icon: IconName;
  readonly message: string;
  readonly actionLabel: string;
}

const STATE_CONFIG: Record<Exclude<PanelState, 'populated'>, StateConfig> = {
  empty: {
    icon: 'search',
    message: 'No alerts match your current filters. Adjust the date range or clear the search to see everything.',
    actionLabel: 'Clear filters',
  },
  error: {
    icon: 'warning',
    message: 'Couldn\'t reach the alerts service. The most recent snapshot may be stale — retry in a moment.',
    actionLabel: 'Retry',
  },
};

const ALERTS = [
  { id: '1', name: 'API latency above p95', severity: 'warning' },
  { id: '2', name: 'Job queue backlog', severity: 'info' },
  { id: '3', name: 'Nightly export failed', severity: 'error' },
];

const SEVERITY_VARIANT: Record<string, 'warning' | 'info' | 'error'> = {
  warning: 'warning',
  info: 'info',
  error: 'error',
};

export function EmptyStateShowcase(): React.JSX.Element {
  const [state, setState] = useState<PanelState>('populated');

  return (
    <Stack gap="md">
      <SegmentedControl
        value={state}
        onChange={(next) => setState(next as PanelState)}
        aria-label="Panel state"
        segments={[
          { value: 'populated', label: 'Populated' },
          { value: 'empty', label: 'Empty' },
          { value: 'error', label: 'Error' },
        ]}
      />

      <div style={panelStyle}>
        {state === 'populated' ? (
          <Table variant="flat" density="sm">
            <TableHeader>
              <TableHeaderCell>Alert</TableHeaderCell>
              <TableHeaderCell width={120}>Severity</TableHeaderCell>
            </TableHeader>
            <TableBody>
              {ALERTS.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.name}</TableCell>
                  <TableCell>
                    <Badge variant={SEVERITY_VARIANT[a.severity]!}>{a.severity}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <EmptyState
            icon={STATE_CONFIG[state].icon}
            message={STATE_CONFIG[state].message}
            action={
              <Button variant="secondary" onClick={() => setState('populated')}>
                {STATE_CONFIG[state].actionLabel}
              </Button>
            }
          />
        )}
      </div>

      <p style={hintStyle}>
        `EmptyState` is a single primitive — the "variants" above are the
        consumer picking different <code>icon</code> / <code>message</code> /{' '}
        <code>action</code> content for empty vs. error, not a prop.
      </p>
    </Stack>
  );
}

const panelStyle: React.CSSProperties = {
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  background: t.colorSurfacePanel,
  minHeight: '12rem',
};

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
