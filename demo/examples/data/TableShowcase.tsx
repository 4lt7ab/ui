import { useMemo, useState } from 'react';
import {
  Badge,
  Icon,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Table showcase — live example for 06-data.md
// ---------------------------------------------------------------------------
//
// Exercises the two `Table` behaviors the prose can't carry on its own:
//
//   - **Sorting.** Click a column header to cycle through asc / desc / none.
//     The chevron surfaces the current direction; a focused header responds
//     to Enter / Space. Sorting is entirely call-site state — `Table` stays
//     presentational so every consumer owns their own sort model.
//   - **Selection.** Click a row (or press Enter / Space on a focused row) to
//     toggle selection. The selected row gets the library's built-in raised
//     background + left accent bar, driven entirely by the `selected` prop.
//
// The zebra striping, hover affordance, and focusable-row keyboard behavior
// are all the primitive's defaults — no extra wiring at the call site.

interface ProjectRow {
  readonly id: string;
  readonly name: string;
  readonly status: 'active' | 'archived' | 'planning';
  readonly owner: string;
  readonly tasks: number;
}

const PROJECTS: readonly ProjectRow[] = [
  { id: '1', name: 'Design token audit', status: 'active', owner: 'Alex', tasks: 24 },
  { id: '2', name: 'Component library v0.6', status: 'active', owner: 'Sam', tasks: 41 },
  { id: '3', name: 'Docs site rebuild', status: 'planning', owner: 'Jordan', tasks: 9 },
  { id: '4', name: 'Retire MetadataTable', status: 'archived', owner: 'Alex', tasks: 3 },
  { id: '5', name: 'Token rhythm pass', status: 'active', owner: 'Pat', tasks: 17 },
];

const STATUS_VARIANT: Record<ProjectRow['status'], 'success' | 'warning' | 'info'> = {
  active: 'success',
  planning: 'info',
  archived: 'warning',
};

type SortKey = 'name' | 'tasks';
type SortDir = 'asc' | 'desc';

interface SortState {
  readonly key: SortKey;
  readonly dir: SortDir;
}

function nextSort(current: SortState | null, key: SortKey): SortState | null {
  if (!current || current.key !== key) return { key, dir: 'asc' };
  if (current.dir === 'asc') return { key, dir: 'desc' };
  return null;
}

export function TableShowcase(): React.JSX.Element {
  const [sort, setSort] = useState<SortState | null>({ key: 'name', dir: 'asc' });
  const [selectedId, setSelectedId] = useState<string | null>('2');

  const rows = useMemo(() => {
    if (!sort) return PROJECTS;
    const { key, dir } = sort;
    const copy = [...PROJECTS];
    copy.sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      if (av < bv) return dir === 'asc' ? -1 : 1;
      if (av > bv) return dir === 'asc' ? 1 : -1;
      return 0;
    });
    return copy;
  }, [sort]);

  const selected = selectedId ? rows.find((r) => r.id === selectedId) : undefined;

  return (
    <Stack gap="sm">
      <p style={hintStyle}>
        Click a column header to sort; click a row to select. Sort cycles{' '}
        <code>asc → desc → none</code>.
      </p>
      <Table density="md">
        <TableHeader>
          <TableHeaderCell>
            <SortTrigger
              label="Name"
              state={sort?.key === 'name' ? sort.dir : null}
              onToggle={() => setSort((s) => nextSort(s, 'name'))}
            />
          </TableHeaderCell>
          <TableHeaderCell width={140}>Status</TableHeaderCell>
          <TableHeaderCell width={140}>Owner</TableHeaderCell>
          <TableHeaderCell align="right" width={100}>
            <SortTrigger
              label="Tasks"
              align="right"
              state={sort?.key === 'tasks' ? sort.dir : null}
              onToggle={() => setSort((s) => nextSort(s, 'tasks'))}
            />
          </TableHeaderCell>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow
              key={r.id}
              hoverable
              selected={r.id === selectedId}
              onClick={() => setSelectedId((current) => (current === r.id ? null : r.id))}
            >
              <TableCell>{r.name}</TableCell>
              <TableCell>
                <Badge variant={STATUS_VARIANT[r.status]}>{r.status}</Badge>
              </TableCell>
              <TableCell muted>{r.owner}</TableCell>
              <TableCell align="right">{r.tasks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <span style={resultStyle}>
        Selected: <code>{selected ? selected.name : '—'}</code>
      </span>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// SortTrigger — in-header toggle affordance.
// Kept inline because it's specific to this showcase; the library's
// `TableHeaderCell` intentionally stays presentational so each consumer
// decides how sort interaction surfaces in their own design system.
// ---------------------------------------------------------------------------

function SortTrigger({
  label,
  align = 'left',
  state,
  onToggle,
}: {
  label: string;
  align?: 'left' | 'right';
  state: SortDir | null;
  onToggle: () => void;
}): React.JSX.Element {
  const icon = state === 'asc' ? 'chevron-up' : state === 'desc' ? 'chevron-down' : null;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Sort by ${label}`}
      aria-pressed={state !== null}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: t.spaceXs,
        flexDirection: align === 'right' ? 'row-reverse' : 'row',
        background: 'transparent',
        border: 'none',
        padding: 0,
        font: 'inherit',
        color: 'inherit',
        textTransform: 'inherit',
        letterSpacing: 'inherit',
        cursor: 'pointer',
      }}
    >
      <span>{label}</span>
      <span
        style={{
          display: 'inline-flex',
          width: 12,
          height: 12,
          color: state ? t.colorActionPrimary : t.colorTextMuted,
          opacity: state ? 1 : 0.45,
        }}
      >
        {icon ? <Icon name={icon} size="sm" /> : <Icon name="chevron-down" size="sm" />}
      </span>
    </button>
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
