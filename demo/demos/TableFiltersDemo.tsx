import { useState, useMemo } from 'react';
import {
  Stack, Badge,
  Table, TableHeader, TableHeaderCell, TableBody,
  TableRow, TableCell, TableEmptyRow,
} from '@4lt7ab/ui';
import type { FilterConfig } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const TASKS = [
  { id: '1', title: 'Set up CI pipeline', status: 'done', category: 'infra', effort: 'M' },
  { id: '2', title: 'Design token audit', status: 'in_progress', category: 'design', effort: 'S' },
  { id: '3', title: 'Write Table component', status: 'in_progress', category: 'ui', effort: 'M' },
  { id: '4', title: 'Add dark-mode screenshots', status: 'todo', category: 'docs', effort: 'S' },
  { id: '5', title: 'Migrate auth flow', status: 'todo', category: 'infra', effort: 'L' },
  { id: '6', title: 'Accessibility review', status: 'done', category: 'design', effort: 'L' },
  { id: '7', title: 'Refactor token layer', status: 'in_progress', category: 'ui', effort: 'M' },
];

const STATUS_VARIANT: Record<string, 'success' | 'info' | 'warning' | 'default'> = {
  done: 'success',
  in_progress: 'info',
  todo: 'warning',
};

const FILTER_CONFIGS: FilterConfig[] = [
  { type: 'text', key: 'title', placeholder: 'Search by title\u2026', debounceMs: 300 },
  {
    type: 'select', key: 'status', placeholder: 'All statuses',
    options: [
      { value: '', label: 'All statuses' },
      { value: 'todo', label: 'To Do' },
      { value: 'in_progress', label: 'In Progress' },
      { value: 'done', label: 'Done' },
    ],
  },
  {
    type: 'select', key: 'category', placeholder: 'All categories',
    options: [
      { value: '', label: 'All categories' },
      { value: 'ui', label: 'UI' },
      { value: 'infra', label: 'Infra' },
      { value: 'design', label: 'Design' },
      { value: 'docs', label: 'Docs' },
    ],
  },
  {
    type: 'select', key: 'effort', placeholder: 'All efforts',
    options: [
      { value: '', label: 'All efforts' },
      { value: 'S', label: 'Small' },
      { value: 'M', label: 'Medium' },
      { value: 'L', label: 'Large' },
    ],
  },
];

const COL_COUNT = 4;

// ---------------------------------------------------------------------------
// Props metadata (Root)
// ---------------------------------------------------------------------------

const props: PropMeta[] = [
  { name: 'values', type: 'Record<string, string>', required: true, description: 'Current filter values keyed by filter key / field name.' },
  { name: 'onChange', type: '(values: Record<string, string>) => void', required: true, description: 'Called with the full updated values object on every change.' },
  { name: 'filters', type: 'FilterConfig[]', description: 'Schema-driven shortcut. Mutually exclusive with children.' },
  { name: 'children', type: 'ReactNode', description: 'Composition mode — render <Table.FilterBar.Text> / <Table.FilterBar.Select> directly.' },
];

// ---------------------------------------------------------------------------
// Demo — schema mode (the common case)
// ---------------------------------------------------------------------------

function SchemaDemo(): React.JSX.Element {
  const [filterValues, setFilterValues] = useState<Record<string, string>>({
    title: '',
    status: '',
    category: '',
    effort: '',
  });

  const filtered = useMemo(() => {
    return TASKS.filter((task) => {
      if (filterValues.title && !task.title.toLowerCase().includes(filterValues.title.toLowerCase())) return false;
      if (filterValues.status && task.status !== filterValues.status) return false;
      if (filterValues.category && task.category !== filterValues.category) return false;
      if (filterValues.effort && task.effort !== filterValues.effort) return false;
      return true;
    });
  }, [filterValues]);

  return (
    <Stack gap="sm">
      <Table.FilterBar
        filters={FILTER_CONFIGS}
        values={filterValues}
        onChange={setFilterValues}
      />

      <Table>
        <TableHeader>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Effort</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableEmptyRow colSpan={COL_COUNT}>No tasks match your filters</TableEmptyRow>
          ) : (
            filtered.map((task) => (
              <TableRow key={task.id} hoverable>
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  <Badge variant={STATUS_VARIANT[task.status] ?? 'default'}>
                    {task.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell muted>{task.category}</TableCell>
                <TableCell muted>{task.effort}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Demo — children composition mode
// ---------------------------------------------------------------------------

function CompositionDemo(): React.JSX.Element {
  const [values, setValues] = useState<Record<string, string>>({ title: '', status: '' });
  return (
    <Table.FilterBar values={values} onChange={setValues}>
      <Table.FilterBar.Text field="title" placeholder="Search by title\u2026" debounceMs={200} />
      <Table.FilterBar.Select
        field="status"
        placeholder="All statuses"
        options={[
          { value: '', label: 'All statuses' },
          { value: 'todo', label: 'To Do' },
          { value: 'in_progress', label: 'In Progress' },
          { value: 'done', label: 'Done' },
        ]}
      />
    </Table.FilterBar>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function TableFiltersDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo
        name="filters (schema mode)"
        description="Pass a FilterConfig[] for the common case — Table.FilterBar renders Text and Select subparts automatically. Text filters debounce by 300ms; selects commit immediately."
      >
        <SchemaDemo />
      </PropDemo>

      <PropDemo
        name="children (composition mode)"
        description="Render Table.FilterBar.Text and Table.FilterBar.Select directly for custom layouts."
      >
        <CompositionDemo />
      </PropDemo>
    </DocBlock>
  );
}
