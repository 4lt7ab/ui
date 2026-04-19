# Data

Everything the library ships for displaying — and indicating the status of — data a consumer has already fetched. `Table` is the centerpiece; `DataTablePage` is the page-level envelope that wraps it with a header, filters, pagination, and an empty state. Around those sit smaller indicators: `Badge`, `StatusDot`, `ProgressBar`, `Skeleton`, `EmptyState`, and the full-page `EmptyPage.*` compound.

## Component map

| Surface | Component | Use for |
|---|---|---|
| Tabular data | `Table` + primitives | Sortable/selectable data rows, row grouping, zebra striping |
| Table filters | `Table.FilterBar` | Schema- or composition-driven filter bar paired with `<Table>` |
| Page envelope | `DataTablePage.*` | The CRUD list screen — header, filters, table, pagination, empty state |
| Pagination | `Pagination` | Previous/Next page control with "Page X of Y" indicator |
| Label / tag | `Badge` | Small uppercase pill for status, category, metadata |
| Status indicator | `StatusDot` | Colored circle (with optional pulse animation) for live state |
| Progress | `ProgressBar` | Segmented horizontal bar — one or many segments |
| Loading placeholder | `Skeleton`, `CardSkeleton`, `RowSkeleton` | Pulsing placeholders while data loads |
| Inline empty | `EmptyState` | Empty section within a page (icon + message + optional action) |
| Full-page empty | `EmptyPage.*` | Full-screen zero-state — first-run, no-permissions, 404-like surfaces |

All import from `@4lt7ab/ui`.

## Table

`Table` is a compound built from `<table>` primitives with opinionated defaults: zebra striping (applied to even rows via cell backgrounds because browsers inconsistently paint `<tr>` backgrounds), a left-edge accent bar for selected rows, hover backgrounds behind `hoverable`, and keyboard-friendly rows via `onClick` + `Enter`/`Space`.

```tsx
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableEmptyRow,
  TableGroupHeader,
  Badge,
} from '@4lt7ab/ui';

<Table density="md">
  <TableHeader>
    <TableHeaderCell>Name</TableHeaderCell>
    <TableHeaderCell>Status</TableHeaderCell>
    <TableHeaderCell align="right" width={80}>Count</TableHeaderCell>
  </TableHeader>
  <TableBody>
    {rows.length === 0 && (
      <TableEmptyRow colSpan={3}>No results.</TableEmptyRow>
    )}
    {rows.map((r) => (
      <TableRow
        key={r.id}
        selected={r.id === selectedId}
        hoverable
        onClick={() => setSelectedId(r.id)}
      >
        <TableCell truncate width={240}>{r.name}</TableCell>
        <TableCell>
          <Badge variant={r.status === 'live' ? 'success' : 'default'}>
            {r.status}
          </Badge>
        </TableCell>
        <TableCell align="right">{r.count}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>;
```

### Props at a glance

- `Table` — `variant` (`'default'` with border/radius/shadow or `'flat'`), `density` (`'xs' | 'sm' | 'md' | 'lg'`, default `'md'`).
- `TableHeaderCell` — `align`, `width` (px), `colSpan`.
- `TableRow` — `selected`, `hoverable`, `onClick`. `onClick` makes the row focusable with `tabIndex=0` and activates it on `Enter` / `Space`.
- `TableCell` — `align`, `truncate` (requires a fixed `width`), `muted`, `width`, `colSpan`.
- `TableGroupHeader` — full-width subheading row. Pass `colSpan` to match the column count.
- `TableEmptyRow` — centered "no data" row; same `colSpan` story.

### Filter bar

`Table.FilterBar` ships in two modes. Pick one per bar — passing both `filters` and `children` throws.

**Schema mode.** Fastest for the common case (debounced text search + a couple of select filters):

```tsx
<Table.FilterBar
  values={filters}
  onChange={setFilters}
  filters={[
    { type: 'text', key: 'q', placeholder: 'Search projects' },
    {
      type: 'select',
      key: 'status',
      placeholder: 'All statuses',
      options: [
        { value: 'active', label: 'Active' },
        { value: 'archived', label: 'Archived' },
      ],
    },
  ]}
/>
```

The text filter uses `SearchInput`'s debounce; the select filter commits immediately.

**Composition mode.** For shapes the schema can't express (custom controls, extra trailing actions, unusual layouts), render the parts yourself:

```tsx
<Table.FilterBar values={filters} onChange={setFilters}>
  <Table.FilterBar.Text fieldKey="q" placeholder="Search" />
  <Table.FilterBar.Select fieldKey="owner" placeholder="Any owner" options={owners} />
  <MyCustomDateRangeFilter
    value={filters.range}
    onChange={(next) => setFilters({ ...filters, range: next })}
  />
</Table.FilterBar>
```

Both modes share the controlled `values` / `onChange` contract: one record keyed by filter key, and one callback that receives the entire updated record on any change.

## DataTablePage

`DataTablePage.*` is the CRUD list envelope. One compound, six slots. `Root` owns the one piece of coordinating state — `rowCount` — and flips `data-state="empty" | "populated"` accordingly. `DataTablePage.Empty` reads the same context and renders itself only when `rowCount === 0`; consumers never write `{items.length === 0 ? <Empty /> : <Table />}` at the call site.

```tsx
<DataTablePage.Root rowCount={items.length}>
  <DataTablePage.Header
    title="Projects"
    subtitle={`${items.length} total`}
    trailing={<Button onClick={openCreate}>New project</Button>}
  />
  <DataTablePage.FilterBar
    values={filters}
    onChange={setFilters}
    filters={[{ type: 'text', key: 'q', placeholder: 'Search projects' }]}
  />
  <DataTablePage.Table>
    <TableHeader>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell align="right">Tasks</TableHeaderCell>
    </TableHeader>
    <TableBody>
      {items.map((i) => (
        <TableRow key={i.id} hoverable onClick={() => navigate(`/p/${i.id}`)}>
          <TableCell>{i.name}</TableCell>
          <TableCell align="right">{i.taskCount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </DataTablePage.Table>
  <DataTablePage.Pagination
    page={page}
    totalPages={totalPages}
    total={totalItems}
    onPageChange={setPage}
  />
  <DataTablePage.Empty icon="inbox" message="No projects match your filters." />
</DataTablePage.Root>
```

<LiveExample id="data-datatablepage" />

### What Root does not do

The organism is deliberately narrow: **it does not fetch, filter, paginate, or select rows.** Routing, the data shape, and loading states all stay with the consumer. `rowCount` is not state — it's a value the consumer passes every render, like `page` on `Pagination`. The only magic is the empty/populated toggle driven by `rowCount === 0`.

**Loading** is not a distinct state here. Render a `<Skeleton>` table inside `DataTablePage.Table` while loading; swap to the real rows when data arrives. `rowCount` is for "no data, not loading."

### JSX order is visual order

Unlike `AppShell`, where slots dock based on name, `DataTablePage` renders children in source order. Moving `<DataTablePage.Pagination>` above `<DataTablePage.Table>` puts the pagination above the table.

### Forwarding

All five non-Root parts are thin forwards to the underlying primitive (`Header`, `Table.FilterBar`, `Table`, `Pagination`, `EmptyState`) with the parent-context check applied. Every prop available on the primitive is available on the `DataTablePage.*` wrapper.

## Pagination

Previous / Next controls with a "Page X of Y" indicator. Controlled only — pass `page`, `totalPages`, `total`, and `onPageChange`.

```tsx
<Pagination
  page={page}
  totalPages={totalPages}
  total={totalItems}
  onPageChange={setPage}
/>
```

Customize the text via the optional `labels` prop:

```tsx
<Pagination
  page={page}
  totalPages={totalPages}
  total={totalItems}
  onPageChange={setPage}
  labels={{
    previous: 'Back',
    next: 'Forward',
    pageOf: (p, t) => `${p} / ${t}`,
  }}
/>
```

The Previous button is disabled on page 1; Next is disabled on the last page. If `totalPages <= 1`, the component renders nothing.

## Badge

Small uppercase pill for status, category, or metadata. Six semantic variants — `default`, `primary`, `success`, `warning`, `error`, `info` — and two sizes (`default`, `xs`).

```tsx
<Badge>draft</Badge>
<Badge variant="success">live</Badge>
<Badge variant="error">failed</Badge>
<Badge variant="info" size="xs">beta</Badge>
```

`size="xs"` swaps to a lowercase monospace pill — right for inline metadata next to a title. `default` is uppercase with wide letter-spacing.

## StatusDot

Tiny colored circle for live state. Three sizes (`sm`, `md`, `lg`) and an optional pulse animation.

```tsx
<Stack direction="horizontal" gap="xs" align="center">
  <StatusDot variant="success" animate="pulse" aria-label="Online" />
  <Text>Online</Text>
</Stack>
```

The pulse sync is governed by `useThemeRhythm()` — themes with a defined rhythm set the duration; otherwise it falls back to 1.5s. `prefers-reduced-motion: reduce` disables the animation entirely.

Always pair `StatusDot` with adjacent text or a proper `aria-label` — the dot alone is meaningless to a screen reader.

## ProgressBar

Horizontal segmented bar. Each segment has a `value` (the share) and a `color` (semantic name from the palette). Widths are proportional to `value / total`.

```tsx
<ProgressBar
  segments={[
    { value: 32, color: 'success', label: 'Completed' },
    { value: 12, color: 'warning', label: 'In progress' },
    { value: 6,  color: 'error',   label: 'Failed' },
  ]}
  height="md"
  aria-label="Task progress"
/>
```

Heights: `sm` (6px), `md` (10px, default), `lg` (14px). Single-segment bars work fine for classic "N%" progress; the `label` is surfaced as the segment's `title` tooltip.

## Skeleton

Placeholder loading shape that pulses with the active theme's accent color. Width can be a number (px) or a percentage string (`'60%'`). Siblings stagger automatically — when several Skeletons sit next to each other, a subtle wave travels through in DOM order.

```tsx
<Stack gap="sm">
  <Skeleton width="60%" height={20} />
  <Skeleton width="100%" height={14} />
  <Skeleton width="80%" height={14} />
</Stack>
```

Two presets ship for the common shapes:

- **`CardSkeleton`** — a framed card with a title line + two body lines.
- **`RowSkeleton`** — a single horizontal row shape for table rows.

Pulse duration respects `prefers-reduced-motion: reduce` (animation off; empty space remains). The pulse duration is also driven by the active theme's rhythm when one is defined.

## Empty states

Two surfaces. Pick by scope.

**`EmptyState`** — inline, used inside a larger page (a panel, a section, a table's empty row). Takes an `icon`, a `message`, optional `children`, and an optional `action` slot.

```tsx
<EmptyState
  icon="inbox"
  message="No notifications yet."
  variant="card"
  action={<Button onClick={refresh}>Refresh</Button>}
/>
```

`variant`: `'plain'` (default) renders without a wrapper; `'card'` wraps the message in a flat `Card`.

**`EmptyPage.*`** — full-screen zero-state. Right for first-run experiences, permission-denied screens, 404-like surfaces where the entire page body is the empty state. Compound parts let you compose the pieces that actually apply: icon, title, description, actions, and a `Tips` list for hints.

```tsx
<EmptyPage.Root>
  <EmptyPage.Icon><Icon name="search" size="xl" /></EmptyPage.Icon>
  <EmptyPage.Title>No projects yet</EmptyPage.Title>
  <EmptyPage.Description>
    Start by creating your first project, or import from GitHub.
  </EmptyPage.Description>
  <EmptyPage.Actions>
    <Button variant="primary" onClick={openCreate}>Create project</Button>
    <Button onClick={openImport}>Import from GitHub</Button>
  </EmptyPage.Actions>
  <EmptyPage.Tips>
    <EmptyPage.Tip icon="bookmark">Projects group tasks, tags, and files.</EmptyPage.Tip>
    <EmptyPage.Tip icon="users">Invite collaborators after creating.</EmptyPage.Tip>
  </EmptyPage.Tips>
</EmptyPage.Root>
```

Parts are individually optional — a minimal `EmptyPage` is `Root > Title > Description`.

## Where next

- **Forms** — [Forms](#/forms) covers the inputs and pickers consumers use to filter the data shown here.
- **Modals** — [Modals](#/modals) covers `ConfirmDialog`, `Toast`, and the alert surfaces that announce the result of a data action.
- **Layout** — [Layout](#/layout) covers the surfaces (`Stack`, `Grid`, `Surface`, `Card`) that host these data components on a page.
