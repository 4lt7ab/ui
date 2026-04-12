import { forwardRef } from 'react';
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

export const Table: React.ForwardRefExoticComponent<Omit<TableProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, TableProps>(
  function Table({
    variant = 'default',
    density = 'md',
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    useInjectStyles(TABLE_STYLES_ID, TABLE_STYLES_CSS);

    return (
      <div
        ref={ref}
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
            fontSize: t.fontSizeSm,
            fontFamily: t.fontSans,
            color: t.colorText,
          }}
        >
          {children}
        </table>
      </div>
    );
  }
);

// ---------------------------------------------------------------------------
// Header (<thead> + row)
// ---------------------------------------------------------------------------

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export const TableHeader: React.ForwardRefExoticComponent<Omit<TableHeaderProps, 'ref'> & React.RefAttributes<HTMLTableSectionElement>> = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  function TableHeader({ children, style, ...props }, ref): React.JSX.Element {
    return (
      <thead ref={ref} style={style} {...props}>
        <tr>{children}</tr>
      </thead>
    );
  }
);

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

export const TableHeaderCell: React.ForwardRefExoticComponent<Omit<TableHeaderCellProps, 'ref'> & React.RefAttributes<HTMLTableCellElement>> = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  function TableHeaderCell({
    align = 'left',
    width,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <th
        ref={ref}
        style={{
        padding: `${t.spaceSm} ${t.spaceMd}`,
        textAlign: align,
        fontWeight: t.fontWeightSemibold,
        fontSize: t.fontSizeXs,
        color: t.colorTextMuted,
        textTransform: 'uppercase',
        letterSpacing: t.letterSpacingWide,
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
);

// ---------------------------------------------------------------------------
// Body (<tbody>)
// ---------------------------------------------------------------------------

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export const TableBody: React.ForwardRefExoticComponent<Omit<TableBodyProps, 'ref'> & React.RefAttributes<HTMLTableSectionElement>> = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ children, ...props }, ref): React.JSX.Element {
    return <tbody ref={ref} {...props}>{children}</tbody>;
  }
);

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

export const TableRow: React.ForwardRefExoticComponent<Omit<TableRowProps, 'ref'> & React.RefAttributes<HTMLTableRowElement>> = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow({
    selected = false,
    hoverable = false,
    children,
    style,
    onClick,
    onKeyDown,
    ...props
  }, ref): React.JSX.Element {
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
        ref={ref}
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
);

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

export const TableCell: React.ForwardRefExoticComponent<Omit<TableCellProps, 'ref'> & React.RefAttributes<HTMLTableCellElement>> = forwardRef<HTMLTableCellElement, TableCellProps>(
  function TableCell({
    align = 'left',
    truncate = false,
    muted = false,
    width,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <td
        ref={ref}
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
);

// ---------------------------------------------------------------------------
// GroupHeader (full-width subheading row)
// ---------------------------------------------------------------------------

export interface TableGroupHeaderProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Number of columns to span */
  colSpan: number;
  children: ReactNode;
}

export const TableGroupHeader: React.ForwardRefExoticComponent<Omit<TableGroupHeaderProps, 'ref'> & React.RefAttributes<HTMLTableRowElement>> = forwardRef<HTMLTableRowElement, TableGroupHeaderProps>(
  function TableGroupHeader({
    colSpan,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <tr ref={ref} style={{ cursor: 'default', ...style }} {...props}>
      <td
        colSpan={colSpan}
        style={{
          padding: `${t.spaceXs} ${t.spaceMd}`,
          background: t.colorSurfaceRaised,
          borderBottom: `1px solid ${t.colorBorder}`,
          fontSize: t.fontSizeXs,
          fontWeight: t.fontWeightBold,
          letterSpacing: t.letterSpacingWide,
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
);

// ---------------------------------------------------------------------------
// EmptyRow (centered message spanning all columns)
// ---------------------------------------------------------------------------

export interface TableEmptyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Number of columns to span */
  colSpan: number;
  children: ReactNode;
}

export const TableEmptyRow: React.ForwardRefExoticComponent<Omit<TableEmptyRowProps, 'ref'> & React.RefAttributes<HTMLTableRowElement>> = forwardRef<HTMLTableRowElement, TableEmptyRowProps>(
  function TableEmptyRow({
    colSpan,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <tr ref={ref} style={style} {...props}>
      <td
        colSpan={colSpan}
        style={{
          padding: `${t.spaceXl} ${t.spaceMd}`,
          textAlign: 'center',
          color: t.colorTextMuted,
          fontSize: t.fontSizeSm,
        }}
      >
        {children}
      </td>
      </tr>
    );
  }
);
