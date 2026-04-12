import { useState } from 'react';
import {
  Stack, Badge,
  Table, TableHeader, TableHeaderCell, TableBody,
  TableRow, TableCell, TableGroupHeader, TableEmptyRow,
} from '../../src';

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const TASKS = [
  { id: '1', title: 'Set up CI pipeline', status: 'done', category: 'infra', effort: 'M', impact: 'High' },
  { id: '2', title: 'Design token audit', status: 'in_progress', category: 'design', effort: 'S', impact: 'Med' },
  { id: '3', title: 'Write Table component', status: 'in_progress', category: 'ui', effort: 'M', impact: 'High' },
  { id: '4', title: 'Add dark-mode screenshots to README', status: 'todo', category: 'docs', effort: 'S', impact: 'Low' },
  { id: '5', title: 'Migrate auth flow to new SDK', status: 'todo', category: 'infra', effort: 'L', impact: 'High' },
];

const STATUS_VARIANT: Record<string, 'success' | 'info' | 'warning' | 'default'> = {
  done: 'success',
  in_progress: 'info',
  todo: 'warning',
};

const GROUPED_ITEMS = [
  { group: 'Sprint 1', items: TASKS.slice(0, 2) },
  { group: 'Sprint 2', items: TASKS.slice(2) },
];

const COL_COUNT = 5;

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

export function TableDemo(): React.JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Stack gap="xl">
      {/* ── Basic ── */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic table</h3>
        <Table>
          <TableHeader>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Effort</TableHeaderCell>
            <TableHeaderCell>Impact</TableHeaderCell>
          </TableHeader>
          <TableBody>
            {TASKS.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  <Badge variant={STATUS_VARIANT[task.status] ?? 'default'}>
                    {task.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell muted>{task.category}</TableCell>
                <TableCell muted>{task.effort}</TableCell>
                <TableCell muted>{task.impact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>

      {/* ── Interactive rows ── */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Selectable + hoverable rows</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
          Click a row to select it. Selected: <strong>{selectedId ?? 'none'}</strong>
        </p>
        <Table>
          <TableHeader>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Effort</TableHeaderCell>
            <TableHeaderCell>Impact</TableHeaderCell>
          </TableHeader>
          <TableBody>
            {TASKS.map((task) => (
              <TableRow
                key={task.id}
                hoverable
                selected={selectedId === task.id}
                onClick={() => setSelectedId(task.id === selectedId ? null : task.id)}
              >
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  <Badge variant={STATUS_VARIANT[task.status] ?? 'default'}>
                    {task.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell muted>{task.category}</TableCell>
                <TableCell muted>{task.effort}</TableCell>
                <TableCell muted>{task.impact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>

      {/* ── Truncation ── */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Truncated cells</h3>
        <Table>
          <TableHeader>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell width={100}>Status</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell truncate>
                This is an extremely long title that should be truncated with an ellipsis when it overflows the available space
              </TableCell>
              <TableCell><Badge variant="info">active</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell truncate>Short title</TableCell>
              <TableCell><Badge variant="success">done</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>

      {/* ── Group headers ── */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Group headers</h3>
        <Table>
          <TableHeader>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Effort</TableHeaderCell>
            <TableHeaderCell>Impact</TableHeaderCell>
          </TableHeader>
          <TableBody>
            {GROUPED_ITEMS.map(({ group, items }) => [
              <TableGroupHeader key={group} colSpan={COL_COUNT}>{group}</TableGroupHeader>,
              ...items.map((task) => (
                <TableRow key={task.id} hoverable>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>
                    <Badge variant={STATUS_VARIANT[task.status] ?? 'default'}>
                      {task.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell muted>{task.category}</TableCell>
                  <TableCell muted>{task.effort}</TableCell>
                  <TableCell muted>{task.impact}</TableCell>
                </TableRow>
              )),
            ])}
          </TableBody>
        </Table>
      </Stack>

      {/* ── Empty state ── */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Empty state</h3>
        <Table>
          <TableHeader>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableEmptyRow colSpan={3}>No tasks match your filters</TableEmptyRow>
          </TableBody>
        </Table>
      </Stack>

      {/* ── Flat variant ── */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Flat variant (no wrapper chrome)</h3>
        <Table variant="flat">
          <TableHeader>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell align="right">Value</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>colorText</TableCell><TableCell align="right" muted>var(--color-text)</TableCell></TableRow>
            <TableRow><TableCell>colorBorder</TableCell><TableCell align="right" muted>var(--color-border)</TableCell></TableRow>
            <TableRow><TableCell>spaceMd</TableCell><TableCell align="right" muted>var(--space-md)</TableCell></TableRow>
          </TableBody>
        </Table>
      </Stack>
    </Stack>
  );
}
