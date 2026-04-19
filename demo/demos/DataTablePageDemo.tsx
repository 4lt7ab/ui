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
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

// ---------------------------------------------------------------------------
// Sample data — a mini projects list so the demo reads like a real CRUD page
// ---------------------------------------------------------------------------

interface ProjectRow {
  id: string;
  name: string;
  status: 'active' | 'archived' | 'planning';
  owner: string;
}

const PROJECTS: ProjectRow[] = [
  { id: '1', name: 'Design token audit', status: 'active', owner: 'Alex' },
  { id: '2', name: 'Component library v0.6', status: 'active', owner: 'Sam' },
  { id: '3', name: 'Ship docs site', status: 'planning', owner: 'Jordan' },
  { id: '4', name: 'Retire MetadataTable', status: 'archived', owner: 'Alex' },
  { id: '5', name: 'Tokens theming pass', status: 'active', owner: 'Pat' },
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

const PAGE_SIZE = 3;

// ---------------------------------------------------------------------------
// Props metadata
// ---------------------------------------------------------------------------

const props: PropMeta[] = [
  {
    name: 'DataTablePage.Root',
    type: "{ rowCount: number; 'aria-label'?: string; children }",
    description:
      'Outer <section>. rowCount is required — when 0, Root flips data-state to "empty" and DataTablePage.Empty renders; when > 0, data-state is "populated" and Empty returns null. aria-labelledby wires to the Header title automatically when no aria-label is passed.',
  },
  {
    name: 'DataTablePage.Header',
    type: '{ title; level?; subtitle?; indicator?; trailing? }',
    description:
      "Thin forward to <Header> with level pinned to 'page' by default. Title, subtitle, indicator, and trailing all behave identically.",
  },
  {
    name: 'DataTablePage.FilterBar',
    type: '{ values; onChange; filters? | children }',
    description:
      'Thin forward to Table.FilterBar — both schema-driven (filters={…}) and children-composition (<Table.FilterBar.Text> / .Select) modes work identically.',
  },
  {
    name: 'DataTablePage.Table',
    type: '{ variant?; density?; children }',
    description:
      'Thin forward to the Table compound. Consumer still composes TableHeader / TableRow / TableCell / etc. inside.',
  },
  {
    name: 'DataTablePage.Pagination',
    type: '{ page; totalPages; total; onPageChange; labels? }',
    description: 'Thin forward to <Pagination>.',
  },
  {
    name: 'DataTablePage.Empty',
    type: '{ icon; message; action?; children }',
    description:
      "Thin forward to <EmptyState> with variant pinned to 'plain'. Renders only when Root's rowCount === 0 — leave it in the JSX unconditionally; the organism toggles its visibility.",
  },
];

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

export function DataTablePageDemo(): React.JSX.Element {
  const [filters, setFilters] = useState<Record<string, string>>({ q: '', status: '' });
  const [page, setPage] = useState<number>(1);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    const status = filters.status;
    return PROJECTS.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (status && p.status !== status) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const pageItems = filtered.slice((pageSafe - 1) * PAGE_SIZE, pageSafe * PAGE_SIZE);

  // rowCount reflects the CURRENT VIEW (what's rendered on this page). When
  // filters clear all results, rowCount drops to 0 and Empty takes over.
  const rowCount = pageItems.length;

  return (
    <DocBlock props={props}>
      <PropDemo
        name="Full compound — Header + FilterBar + Table + Pagination + Empty"
        description="Typical CRUD page. Type in the search input or change the status filter; when no rows match, the Empty slot appears automatically (no ternary in the consumer's JSX). Pagination is unconditionally rendered — a no-op when totalPages is 1."
      >
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
            message="No projects match your filters. Clear the search or switch the status to see all projects."
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
      </PropDemo>

      <PropDemo
        name="Empty-state takeover (rowCount=0)"
        description="When rowCount is 0, data-state flips to 'empty' and DataTablePage.Empty becomes visible. The Table slot still renders — consumer typically shows header rows only so screen readers keep column context while the empty message reads."
      >
        <DataTablePage.Root rowCount={0}>
          <DataTablePage.Header title="Archived projects" subtitle="Nothing archived yet" />
          <DataTablePage.Table>
            <TableHeader>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Archived</TableHeaderCell>
            </TableHeader>
          </DataTablePage.Table>
          <DataTablePage.Empty
            icon="inbox"
            message="Nothing has been archived yet. Projects you archive will appear here."
          />
        </DataTablePage.Root>
      </PropDemo>

      <PropDemo
        name="Minimal — no header, no filter bar"
        description="Header, FilterBar, and Pagination are all optional. A compact embedded list collapses to Root + Table + optional Empty."
      >
        <DataTablePage.Root rowCount={PROJECTS.length} aria-label="Recent projects">
          <DataTablePage.Table variant="flat">
            <TableHeader>
              <TableHeaderCell>Project</TableHeaderCell>
              <TableHeaderCell width={140}>Status</TableHeaderCell>
            </TableHeader>
            <TableBody>
              {PROJECTS.slice(0, 3).map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>
                    <Badge variant={STATUS_VARIANT[p.status]}>{p.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </DataTablePage.Table>
        </DataTablePage.Root>
      </PropDemo>
    </DocBlock>
  );
}
