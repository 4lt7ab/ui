import { useState } from 'react';
import {
  Stack, Badge,
  Table, TableHeader, TableHeaderCell, TableBody,
  TableRow, TableCell, TableGroupHeader, TableEmptyRow,
} from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

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
// Props metadata
// ---------------------------------------------------------------------------

const props: PropMeta[] = [
  // Table
  { name: 'variant', type: "'default' | 'flat'", default: "'default'", description: 'Table wrapper style. Default has border, rounded corners, and shadow. Flat has no chrome.' },
  { name: 'density', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Cell padding density.' },
  // TableHeaderCell
  { name: 'align (HeaderCell)', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment in header cells.' },
  { name: 'width (HeaderCell)', type: 'number', description: 'Fixed column width in pixels.' },
  { name: 'colSpan (HeaderCell)', type: 'number', description: 'Number of columns this header should span.' },
  // TableRow
  { name: 'selected', type: 'boolean', default: 'false', description: 'Highlights the row with a raised background and left accent border.' },
  { name: 'hoverable', type: 'boolean', default: 'false', description: 'Enables a hover background color change on the row.' },
  { name: 'onClick (Row)', type: 'MouseEventHandler', description: 'Click handler. Makes the row focusable and keyboard-activatable.' },
  // TableCell
  { name: 'align (Cell)', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment in data cells.' },
  { name: 'truncate', type: 'boolean', default: 'false', description: 'Truncates overflowing text with an ellipsis. Requires a fixed width.' },
  { name: 'muted', type: 'boolean', default: 'false', description: 'Renders the cell text in a muted color.' },
  // GroupHeader / EmptyRow
  { name: 'colSpan (GroupHeader)', type: 'number', required: true, description: 'Number of columns the group header should span.' },
  { name: 'colSpan (EmptyRow)', type: 'number', required: true, description: 'Number of columns the empty state message should span.' },
];

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

export function TableDemo(): React.JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <DocBlock props={props}>
      <PropDemo name="Basic table" description="Default variant with border, rounded corners, and shadow. Zebra-striped rows are applied automatically.">
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
      </PropDemo>

      <PropDemo name="selected + hoverable" description="Click a row to select it. Selected rows show a raised background and left accent border. Hoverable rows highlight on mouse-over.">
        <Stack gap="xs">
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            Selected: <strong>{selectedId ?? 'none'}</strong>
          </span>
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
      </PropDemo>

      <PropDemo name="truncate" description="Cells with truncate show an ellipsis when content overflows. Pair with a fixed width column.">
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
      </PropDemo>

      <PropDemo name="TableGroupHeader" description="Full-width subheading rows for grouping table data under shared labels.">
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
      </PropDemo>

      <PropDemo name="TableEmptyRow" description="Centered message row for when the table has no data.">
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
      </PropDemo>

      <PropDemo name="variant='flat'" description="Flat variant removes the wrapper border, shadow, and rounded corners.">
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
      </PropDemo>
    </DocBlock>
  );
}
