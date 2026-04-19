import { useMemo, useState } from 'react';
import {
  Badge,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableEmptyRow,
  TableHeader,
  TableHeaderCell,
  TableRow,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Table.FilterBar showcase — schema mode, live example for 06-data.md
// ---------------------------------------------------------------------------
//
// Demonstrates the common-case schema-driven filter bar paired with a
// `<Table>`. The bar carries two filters:
//
//   - A debounced `text` filter (the library's default 300ms debounce).
//     Type in the input and notice the committed `values.q` lags slightly
//     behind the character you just typed — that's the debounce contract.
//   - A `select` filter that commits immediately on change.
//
// Clear-all + rendering the controlled `values` record below the table
// surface the full data-flow: one record keyed by filter key, one callback
// that receives the entire updated record.

interface ProjectRow {
  readonly id: string;
  readonly name: string;
  readonly status: 'active' | 'archived' | 'planning';
  readonly owner: string;
}

const PROJECTS: readonly ProjectRow[] = [
  { id: '1', name: 'Design token audit', status: 'active', owner: 'Alex' },
  { id: '2', name: 'Component library v0.6', status: 'active', owner: 'Sam' },
  { id: '3', name: 'Docs site rebuild', status: 'planning', owner: 'Jordan' },
  { id: '4', name: 'Retire MetadataTable', status: 'archived', owner: 'Alex' },
  { id: '5', name: 'Token rhythm pass', status: 'active', owner: 'Pat' },
  { id: '6', name: 'DatePicker rewrite', status: 'archived', owner: 'Sam' },
];

const STATUS_VARIANT: Record<ProjectRow['status'], 'success' | 'warning' | 'info'> = {
  active: 'success',
  planning: 'info',
  archived: 'warning',
};

const STATUS_OPTIONS = [
  { value: '', label: 'All statuses' },
  { value: 'active', label: 'Active' },
  { value: 'planning', label: 'Planning' },
  { value: 'archived', label: 'Archived' },
];

const INITIAL_FILTERS: Record<string, string> = { q: '', status: '' };

export function TableFilterBarShowcase(): React.JSX.Element {
  const [filters, setFilters] = useState<Record<string, string>>(INITIAL_FILTERS);

  const filtered = useMemo(() => {
    const q = (filters.q ?? '').trim().toLowerCase();
    const status = filters.status ?? '';
    return PROJECTS.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (status && p.status !== status) return false;
      return true;
    });
  }, [filters]);

  return (
    <Stack gap="sm">
      <p style={hintStyle}>
        Type in the search (text filters debounce by 300ms) or pick a status. The
        values record at the bottom reflects the committed filter state.
      </p>
      <Table.FilterBar
        values={filters}
        onChange={setFilters}
        filters={[
          { type: 'text', key: 'q', placeholder: 'Search projects' },
          {
            type: 'select',
            key: 'status',
            placeholder: 'All statuses',
            options: STATUS_OPTIONS,
          },
        ]}
      />
      <Table density="sm">
        <TableHeader>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell width={140}>Status</TableHeaderCell>
          <TableHeaderCell width={140}>Owner</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableEmptyRow colSpan={3}>No projects match the current filters.</TableEmptyRow>
          ) : (
            filtered.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>
                  <Badge variant={STATUS_VARIANT[p.status]}>{p.status}</Badge>
                </TableCell>
                <TableCell muted>{p.owner}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <span style={resultStyle}>
        Committed values:{' '}
        <code>{JSON.stringify(filters)}</code>
      </span>
    </Stack>
  );
}

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};

const resultStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
