import { semantic as t } from '../../tokens/semantic';
import { useInjectStyles } from '../../utils/useInjectStyles';
import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, ReactNode, CSSProperties, KeyboardEvent } from 'react';

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

type SpacingToken = 'xs' | 'sm' | 'md' | 'lg';

const spaceMap: Record<SpacingToken, string> = {
  xs: t.spaceXs,
  sm: t.spaceSm,
  md: t.spaceMd,
  lg: t.spaceLg,
};

// ---------------------------------------------------------------------------
// Table (root wrapper + <table>)
// ---------------------------------------------------------------------------

export type TableVariant = 'default' | 'flat';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual treatment. Default wraps with border + shadow; flat has no chrome. */
  variant?: TableVariant;
  /** Cell density. Default: 'md' */
  density?: SpacingToken;
  children: ReactNode;
}

const TABLE_STYLES_ID = '4lt7ab-table-row';
const TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover {
  background: ${t.colorSurfaceRaised} !important;
}
[data-table-row-selected] > td {
  border-bottom-color: ${t.colorSurfaceRaised};
}
[data-table-row-selected] > td:first-child {
  position: relative;
}
[data-table-row-selected] > td:first-child::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: ${t.colorActionPrimary};
  pointer-events: none;
}
`;

const wrapperVariants: Record<TableVariant, CSSProperties> = {
  default: {
    border: `1px solid ${t.colorBorder}`,
    borderRadius: t.radiusLg,
    boxShadow: t.shadowSm,
  },
  flat: {},
};

export function Table({
  variant = 'default',
  density = 'md',
  children,
  style,
  ...props
}: TableProps): React.JSX.Element {
  useInjectStyles(TABLE_STYLES_ID, TABLE_STYLES_CSS);

  return (
    <div
      style={{
        overflowX: 'auto',
        ...wrapperVariants[variant],
        ...style,
      }}
      {...props}
    >
      <table
        data-table-density={density}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.875rem',
          fontFamily: t.fontSans,
          color: t.colorText,
        }}
      >
        {children}
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Header (<thead> + row)
// ---------------------------------------------------------------------------

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export function TableHeader({ children, style, ...props }: TableHeaderProps): React.JSX.Element {
  return (
    <thead style={style} {...props}>
      <tr>{children}</tr>
    </thead>
  );
}

// ---------------------------------------------------------------------------
// HeaderCell (<th>)
// ---------------------------------------------------------------------------

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Text alignment. Default: 'left' */
  align?: 'left' | 'center' | 'right';
  /** Fixed width in px or CSS string */
  width?: number | string;
  children?: ReactNode;
}

export function TableHeaderCell({
  align = 'left',
  width,
  children,
  style,
  ...props
}: TableHeaderCellProps): React.JSX.Element {
  return (
    <th
      style={{
        padding: `${t.spaceSm} ${t.spaceMd}`,
        textAlign: align,
        fontWeight: 600,
        fontSize: '0.6875rem',
        color: t.colorTextMuted,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderBottom: `2px solid ${t.colorBorder}`,
        whiteSpace: 'nowrap',
        width: typeof width === 'number' ? `${width}px` : width,
        ...style,
      }}
      {...props}
    >
      {children}
    </th>
  );
}

// ---------------------------------------------------------------------------
// Body (<tbody>)
// ---------------------------------------------------------------------------

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export function TableBody({ children, ...props }: TableBodyProps): React.JSX.Element {
  return <tbody {...props}>{children}</tbody>;
}

// ---------------------------------------------------------------------------
// Row (<tr>)
// ---------------------------------------------------------------------------

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Highlight as selected */
  selected?: boolean;
  /** Enable hover background */
  hoverable?: boolean;
  children: ReactNode;
}

export function TableRow({
  selected = false,
  hoverable = false,
  children,
  style,
  onClick,
  onKeyDown,
  ...props
}: TableRowProps): React.JSX.Element {
  const handleKeyDown = onClick
    ? (e: KeyboardEvent<HTMLTableRowElement>): void => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e as unknown as React.MouseEvent<HTMLTableRowElement>);
        }
        onKeyDown?.(e);
      }
    : onKeyDown;

  return (
    <tr
      data-table-row-hoverable={hoverable || undefined}
      data-table-row-selected={selected || undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      style={{
        cursor: onClick ? 'pointer' : undefined,
        background: selected ? t.colorSurfaceRaised : undefined,
        transition: 'background 0.1s',
        ...style,
      }}
      {...props}
    >
      {children}
    </tr>
  );
}

// ---------------------------------------------------------------------------
// Cell (<td>)
// ---------------------------------------------------------------------------

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Text alignment. Default: 'left' */
  align?: 'left' | 'center' | 'right';
  /** Truncate overflowing text with ellipsis */
  truncate?: boolean;
  /** Use muted text color */
  muted?: boolean;
  /** Fixed width in px or CSS string */
  width?: number | string;
  children?: ReactNode;
}

export function TableCell({
  align = 'left',
  truncate = false,
  muted = false,
  width,
  children,
  style,
  ...props
}: TableCellProps): React.JSX.Element {
  return (
    <td
      style={{
        padding: `${t.spaceSm} ${t.spaceMd}`,
        borderBottom: `1px solid ${t.colorBorder}`,
        verticalAlign: 'middle',
        textAlign: align,
        color: muted ? t.colorTextMuted : undefined,
        width: typeof width === 'number' ? `${width}px` : width,
        ...(truncate
          ? {
              maxWidth: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap' as const,
            }
          : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </td>
  );
}

// ---------------------------------------------------------------------------
// GroupHeader (full-width subheading row)
// ---------------------------------------------------------------------------

export interface TableGroupHeaderProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Number of columns to span */
  colSpan: number;
  children: ReactNode;
}

export function TableGroupHeader({
  colSpan,
  children,
  style,
  ...props
}: TableGroupHeaderProps): React.JSX.Element {
  return (
    <tr style={{ cursor: 'default', ...style }} {...props}>
      <td
        colSpan={colSpan}
        style={{
          padding: `${t.spaceXs} ${t.spaceMd}`,
          background: t.colorSurfaceRaised,
          borderBottom: `1px solid ${t.colorBorder}`,
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: t.colorTextMuted,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </td>
    </tr>
  );
}

// ---------------------------------------------------------------------------
// EmptyRow (centered message spanning all columns)
// ---------------------------------------------------------------------------

export interface TableEmptyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Number of columns to span */
  colSpan: number;
  children: ReactNode;
}

export function TableEmptyRow({
  colSpan,
  children,
  style,
  ...props
}: TableEmptyRowProps): React.JSX.Element {
  return (
    <tr style={style} {...props}>
      <td
        colSpan={colSpan}
        style={{
          padding: `${t.spaceXl} ${t.spaceMd}`,
          textAlign: 'center',
          color: t.colorTextMuted,
          fontSize: '0.875rem',
        }}
      >
        {children}
      </td>
    </tr>
  );
}
