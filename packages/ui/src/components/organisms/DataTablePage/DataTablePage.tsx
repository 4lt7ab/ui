import { createContext, forwardRef, useContext, useId, useMemo } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../../types';
import { Header, type HeaderProps } from '../../molecules/Header';
import { EmptyState, type EmptyStateProps } from '../../molecules/EmptyState';
import { Pagination, type PaginationProps } from '../../molecules/Pagination';
import { Table, type TableProps } from '../Table';
import { TableFilterBar } from '../Table/FilterBar';
import type { FilterBarProps } from '../Table/FilterBar';

// ---------------------------------------------------------------------------
// Compound context
// ---------------------------------------------------------------------------
//
// DataTablePage is the CRUD page envelope. ProjectHub-style screens today
// hand-assemble Header + filter bar + Table + Pagination + EmptyState; this
// organism collapses the assembly into a compound whose parts forward to the
// underlying primitives and whose Root owns the one piece of coordinating
// state — `rowCount` — that determines empty-vs-populated rendering.
//
// Scope is deliberate: the organism does **not** fetch, filter, paginate, or
// select rows. It is a slot arrangement with one conditional render. Routing,
// data, and loading all stay with the consumer.
//
// Per the layout-organism design doc (`01KPHCVPSKXJ6NDGA8BAC1A811`):
//   - `rowCount` is a required prop on Root — not controlled/uncontrolled
//     state, just a value the consumer supplies every render like `page` on
//     Pagination. When `rowCount === 0`, Root sets `data-state="empty"` and
//     `DataTablePage.Empty` renders itself; when `> 0`, Root sets
//     `data-state="populated"` and Empty returns `null`. Consumers never
//     write `{rows.length === 0 ? <Empty /> : <Table />}` themselves.
//   - JSX order is visual order (unlike AppShell). The layout is a simple
//     vertical stack with deterministic gaps.
//   - No `asChild` on any sub-part (each owns N>1 DOM elements or forwards
//     to a primitive that already does).

interface DataTablePageContextValue {
  /** Number of data rows the consumer has for this page. Drives the
   * `data-state="empty" | "populated"` distinction. */
  rowCount: number;
  /** DOM id of the Root's labelling heading; wired through so Root can set
   * `aria-labelledby` on its `<section>` when a consumer passes `DataTablePage.Header`. */
  titleId: string;
}

const DataTablePageContext = createContext<DataTablePageContextValue | null>(null);

function useDataTablePageContext(part: string): DataTablePageContextValue {
  const ctx = useContext(DataTablePageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <DataTablePage.${part}> must be rendered inside <DataTablePage.Root>.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for {@link DataTablePageRoot}. */
export interface DataTablePageRootProps extends BaseComponentProps {
  /** Number of data rows the consumer has for the current page/slice. Required —
   * the consumer knows this value (it's typically `items.length`); passing it
   * to Root lets `DataTablePage.Empty` and `DataTablePage.Table` coordinate
   * the empty/populated transition without the consumer writing a ternary
   * at the call site.
   *
   * When `0`, Root sets `data-state="empty"`; Empty renders itself, Table
   * slot renders what the consumer provides (typically header rows only).
   * When `> 0`, Root sets `data-state="populated"`; Empty returns `null`.
   *
   * Loading isn't a distinct state here — render a `<Skeleton>` table inside
   * `DataTablePage.Table` while loading; switch to the real rows when data
   * arrives. `rowCount` is for "no data, not loading." */
  rowCount: number;
  /** Accessible label fallback. If omitted, Root's `<section>` is labelled
   * by the Header's title via `aria-labelledby` (when a Header is present). */
  'aria-label'?: string;
  /** Children — any combination of `<DataTablePage.Header>`,
   * `<DataTablePage.FilterBar>`, `<DataTablePage.Table>`,
   * `<DataTablePage.Pagination>`, `<DataTablePage.Empty>`. Rendered in source
   * order (JSX order is visual order). */
  children?: ReactNode;
}

export const DataTablePageRoot: React.ForwardRefExoticComponent<
  Omit<DataTablePageRootProps, 'ref'> & React.RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, DataTablePageRootProps>(function DataTablePageRoot(
  { rowCount, children, ...rest },
  ref,
): React.JSX.Element {
  const titleId = useId();
  const isEmpty = rowCount === 0;

  const value = useMemo<DataTablePageContextValue>(
    () => ({ rowCount, titleId }),
    [rowCount, titleId],
  );

  return (
    <DataTablePageContext.Provider value={value}>
      <section
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        data-state={isEmpty ? 'empty' : 'populated'}
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-label'] ? undefined : titleId}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: t.spaceLg,
          width: '100%',
          fontFamily: t.fontSans,
          color: t.colorText,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </section>
    </DataTablePageContext.Provider>
  );
});

// ---------------------------------------------------------------------------
// Header — forwards to the `<Header>` primitive with `level='page'` default
// ---------------------------------------------------------------------------

/** Props for {@link DataTablePageHeader}. Identical surface to `<Header>` —
 * the shell forwards every prop through and pins `level` to `'page'` by
 * default (this is a page-scoped organism). */
export type DataTablePageHeaderProps = HeaderProps;

export function DataTablePageHeader({
  level = 'page',
  ...rest
}: DataTablePageHeaderProps): React.JSX.Element {
  const { titleId } = useDataTablePageContext('Header');
  // Root reads the Header's title via `aria-labelledby`; set the heading's
  // id through a wrapping element so we don't need to patch `<Header>` to
  // accept an `id` prop. A plain div carries the id; the underlying <h1>
  // is what screen readers will announce because aria-labelledby resolves
  // to the labelling element's accessible name, which includes descendants.
  return (
    <div id={titleId}>
      <Header level={level} {...rest} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// FilterBar — thin forward to Table.FilterBar (no re-implementation)
// ---------------------------------------------------------------------------

/** Props for {@link DataTablePageFilterBar}. Identical surface to
 * `Table.FilterBar` — both schema-driven (`filters={…}`) and children-
 * composition (`<Table.FilterBar.Text>` / `.Select`) modes work identically
 * because this is a thin forward. */
export type DataTablePageFilterBarProps = FilterBarProps;

export function DataTablePageFilterBar(
  props: DataTablePageFilterBarProps,
): React.JSX.Element {
  useDataTablePageContext('FilterBar');
  return <TableFilterBar {...props} />;
}

// ---------------------------------------------------------------------------
// Table — thin forward to the Table compound
// ---------------------------------------------------------------------------

/** Props for {@link DataTablePageTable}. Identical surface to `<Table>` —
 * consumer still composes `Table.Row`, `TableCell`, `TableHeader`, etc.
 * inside. */
export type DataTablePageTableProps = TableProps;

export function DataTablePageTable(props: DataTablePageTableProps): React.JSX.Element {
  useDataTablePageContext('Table');
  return <Table {...props} />;
}

// ---------------------------------------------------------------------------
// Pagination — thin forward to <Pagination>
// ---------------------------------------------------------------------------

/** Props for {@link DataTablePagePagination}. Identical surface to the
 * `<Pagination>` primitive. */
export type DataTablePagePaginationProps = PaginationProps;

export function DataTablePagePagination(
  props: DataTablePagePaginationProps,
): React.JSX.Element {
  useDataTablePageContext('Pagination');
  return <Pagination {...props} />;
}

// ---------------------------------------------------------------------------
// Empty — renders itself only when Root's rowCount === 0
// ---------------------------------------------------------------------------

/** Props for {@link DataTablePageEmpty}. Identical surface to `<EmptyState>`
 * with `variant` pinned to `'plain'` (Root already owns the page-level
 * spacing). Only renders when Root's `rowCount === 0`; otherwise returns
 * `null` so consumers can leave it in the JSX unconditionally and the
 * organism toggles its visibility based on `rowCount`. */
export type DataTablePageEmptyProps = Omit<EmptyStateProps, 'variant'>;

export function DataTablePageEmpty(
  props: DataTablePageEmptyProps,
): React.JSX.Element | null {
  const { rowCount } = useDataTablePageContext('Empty');
  if (rowCount !== 0) return null;
  return <EmptyState {...props} variant="plain" />;
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * CRUD page envelope. Collapses the Header + FilterBar + Table + Pagination
 * + EmptyState assembly that every data-list screen currently hand-rolls
 * into a compound whose parts forward to the underlying primitives.
 *
 * Root owns a single piece of coordinating state (`rowCount`) and flips
 * `data-state="empty" | "populated"` accordingly. `DataTablePage.Empty`
 * reads the same context and renders itself only on the empty branch —
 * consumers never write `{rows.length === 0 ? <Empty /> : <Table />}`
 * conditionals; they leave all the slots in the JSX and the organism
 * toggles `Empty`.
 *
 * Scope is intentionally narrow: the organism does not fetch, filter,
 * paginate, or select rows. It is a slot arrangement with one conditional
 * render. Routing, data shape, and loading all stay with the consumer.
 *
 * @example
 * ```tsx
 * <DataTablePage.Root rowCount={items.length}>
 *   <DataTablePage.Header title="Projects" subtitle="42 total" trailing={<Button>New</Button>} />
 *   <DataTablePage.FilterBar
 *     values={filters}
 *     onChange={setFilters}
 *     filters={[{ type: 'text', key: 'q', placeholder: 'Search…' }]}
 *   />
 *   <DataTablePage.Table>
 *     <TableHeader>
 *       <TableHeaderCell>Name</TableHeaderCell>
 *     </TableHeader>
 *     <TableBody>
 *       {items.map((i) => (
 *         <TableRow key={i.id}><TableCell>{i.name}</TableCell></TableRow>
 *       ))}
 *     </TableBody>
 *   </DataTablePage.Table>
 *   <DataTablePage.Pagination page={page} totalPages={total} total={items.length} onPageChange={setPage} />
 *   <DataTablePage.Empty icon="inbox" message="No projects match your filters." />
 * </DataTablePage.Root>
 * ```
 */
export const DataTablePage = {
  Root: DataTablePageRoot,
  Header: DataTablePageHeader,
  FilterBar: DataTablePageFilterBar,
  Table: DataTablePageTable,
  Pagination: DataTablePagePagination,
  Empty: DataTablePageEmpty,
};
