import { useMemo, useState } from 'react';
import {
  Pagination,
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
// Pagination showcase — live example for 06-data.md
// ---------------------------------------------------------------------------
//
// Previous/Next state transitions, plus boundary behavior the prose can't
// demonstrate with a screenshot:
//
//   - Previous is disabled on page 1; Next is disabled on the last page.
//   - The component renders nothing when `totalPages <= 1` — exercised by
//     toggling the page-size selector down to "50 per page," which collapses
//     the demo data set to a single page and the control disappears.
//
// Pagination is controlled-only: `page`, `totalPages`, `total`, and
// `onPageChange` are all required. There is no uncontrolled fallback.

const ITEMS = Array.from({ length: 23 }, (_, i) => ({
  id: String(i + 1),
  name: `Ticket #${String(i + 1).padStart(3, '0')}`,
  assignee: ['Alex', 'Sam', 'Jordan', 'Pat', 'Wren'][i % 5]!,
}));

const PAGE_SIZE_OPTIONS = [3, 5, 10, 50] as const;

export function PaginationShowcase(): React.JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<(typeof PAGE_SIZE_OPTIONS)[number]>(5);

  const totalPages = Math.max(1, Math.ceil(ITEMS.length / pageSize));
  const pageSafe = Math.min(page, totalPages);
  const pageItems = useMemo(
    () => ITEMS.slice((pageSafe - 1) * pageSize, pageSafe * pageSize),
    [pageSafe, pageSize],
  );

  return (
    <Stack gap="sm">
      <p style={hintStyle}>
        Previous is disabled on page 1; Next is disabled on the last page. Set
        the page size to 50 and the control disappears entirely (the component
        renders nothing when <code>totalPages &lt;= 1</code>).
      </p>
      <Stack direction="horizontal" gap="xs" align="center">
        <span style={labelStyle}>Page size</span>
        {PAGE_SIZE_OPTIONS.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => {
              setPageSize(size);
              setPage(1);
            }}
            aria-pressed={pageSize === size}
            style={{
              padding: `${t.spaceXs} ${t.spaceSm}`,
              borderRadius: t.radiusSm,
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              background: pageSize === size ? t.colorActionPrimary : t.colorSurfaceRaised,
              color: pageSize === size ? t.colorTextInverse : t.colorTextSecondary,
              fontSize: t.fontSizeXs,
              fontFamily: t.fontSans,
              cursor: 'pointer',
            }}
          >
            {size}
          </button>
        ))}
      </Stack>
      <Table density="sm">
        <TableHeader>
          <TableHeaderCell>Ticket</TableHeaderCell>
          <TableHeaderCell width={160}>Assignee</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {pageItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell muted>{item.assignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        page={pageSafe}
        totalPages={totalPages}
        total={ITEMS.length}
        onPageChange={setPage}
      />
    </Stack>
  );
}

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
  fontWeight: t.fontWeightSemibold,
};
