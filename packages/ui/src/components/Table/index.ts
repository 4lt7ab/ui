import { Table as TableBase } from './Table';
import { TableFilterBar } from './FilterBar';

export {
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableGroupHeader,
  TableEmptyRow,
} from './Table';

export type {
  TableProps,
  TableVariant,
  TableHeaderProps,
  TableHeaderCellProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableGroupHeaderProps,
  TableEmptyRowProps,
} from './Table';

export type {
  FilterConfig,
  TextFilterConfig,
  SelectFilterConfig,
  FilterBarProps,
  FilterBarTextProps,
  FilterBarSelectProps,
} from './FilterBar';

/**
 * `Table` plus attached compound primitives. `Table.FilterBar` is the
 * schema-driven / composable filter bar that pairs with the table — see
 * `FilterBar.tsx` for details. Existing `TableHeader`, `TableBody`, etc.
 * remain available as standalone named exports for backward compatibility.
 */
export const Table = Object.assign(TableBase, {
  FilterBar: TableFilterBar,
});
