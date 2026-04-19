import { useMemo, useState } from 'react';
import {
  Badge,
  Button,
  DataTablePage,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// DataTablePage showcase — live example for 06-data.md
// ---------------------------------------------------------------------------
//
// The organism ships as a full CRUD envelope: header + filter bar + table +
// pagination + empty state, all wired together so the consumer never writes
// a ternary that says "if rows, render Table; else render Empty." This
// showcase exercises every slot against a real data set.
//
// Type into the search, switch the status filter, or clear filters so no
// rows match — the Empty slot takes over automatically (the `rowCount`
// prop on Root is the single trigger).

interface ProjectRow {
  id: string;
  name: string;
  status: 'active' | 'archived' | 'planning';
  owner: string;
}

const PROJECTS: readonly ProjectRow[] = [
  { id: '1', name: 'Design token audit', status: 'active', owner: 'Alex' },
  { id: '2', name: 'Component library v0.6', status: 'active', owner: 'Sam' },
  { id: '3', name: 'Docs site rebuild', status: 'planning', owner: 'Jordan' },
  { id: '4', name: 'Retire MetadataTable', status: 'archived', owner: 'Alex' },
  { id: '5', name: 'Token rhythm pass', status: 'active', owner: 'Pat' },
  { id: '6', name: 'DatePicker rewrite', status: 'archived', owner: 'Sam' },
  { id: '7', name: 'Synthwave canvas tuning', status: 'planning', owner: 'Wren' },
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

const PAGE_SIZE = 3;

export function DataTablePageShowcase(): React.JSX.Element {
  const [filters, setFilters] = useState<Record<string, string>>({ q: '', status: '' });
  const [page, setPage] = useState<number>(1);

  const filtered = useMemo(() => {
    const q = filters.q!.trim().toLowerCase();
    const status = filters.status!;
    return PROJECTS.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (status && p.status !== status) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const pageItems = filtered.slice((pageSafe - 1) * PAGE_SIZE, pageSafe * PAGE_SIZE);

  // `rowCount` is the current view (what's rendered on this page). When
  // filters exclude everything, it drops to 0 and Empty takes over.
  const rowCount = pageItems.length;

  return (
    <DataTablePage.Root rowCount={rowCount}>
      <DataTablePage.Header
        title="Projects"
        subtitle={`${filtered.length} ${filtered.length === 1 ? 'project' : 'projects'}`}
        trailing={<Button variant="primary">New project</Button>}
      />

      <DataTablePage.FilterBar
        values={filters}
        onChange={(next) => {
          setFilters(next);
          setPage(1);
        }}
        filters={[
          { type: 'text', key: 'q', placeholder: 'Search projects' },
          {
            type: 'select',
            key: 'status',
            placeholder: 'Status',
            options: STATUS_OPTIONS,
          },
        ]}
      />

      <DataTablePage.Table>
        <TableHeader>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell width={140}>Status</TableHeaderCell>
          <TableHeaderCell width={160}>Owner</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {pageItems.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.name}</TableCell>
              <TableCell>
                <Badge variant={STATUS_VARIANT[p.status]}>{p.status}</Badge>
              </TableCell>
              <TableCell muted>{p.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </DataTablePage.Table>

      <DataTablePage.Pagination
        page={pageSafe}
        totalPages={totalPages}
        total={filtered.length}
        onPageChange={setPage}
      />

      <DataTablePage.Empty
        icon="search"
        message="No projects match your filters. Clear the search or switch the status to see them all."
        action={
          <Button
            variant="secondary"
            onClick={() => {
              setFilters({ q: '', status: '' });
              setPage(1);
            }}
          >
            Clear filters
          </Button>
        }
      />
    </DataTablePage.Root>
  );
}
