import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { useInjectStyles } from '@4lt7ab/core';
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

/** Visual treatment for the table wrapper. */
export type TableVariant = 'default' | 'flat';

/** Root table wrapper. Provides overflow scrolling, border, and shadow. */
export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual treatment for the outer wrapper.
   * - `default` — border, rounded corners, and small shadow
   * - `flat` — no wrapper chrome
   * @default 'default'
   */
  variant?: TableVariant;
  /** Cell padding density.
   * @default 'md'
   */
  density?: SpacingToken;
  /** Table content (TableHeader, TableBody, etc.). */
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

/** Table header section. Renders a `<thead>` with a single `<tr>` wrapping the children. */
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  /** TableHeaderCell elements. */
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

/** A single column header cell (`<th>`). Renders uppercase, muted, semibold text. */
export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Text alignment.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /** Fixed column width. Numbers are treated as pixels; strings are used as-is. */
  width?: number | string;
  /** Header label. */
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

/** Table body section (`<tbody>`). Wraps TableRow elements. */
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  /** TableRow elements. */
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

/** A table row (`<tr>`). Supports selection highlighting and hover effects. When `onClick` is provided, the row becomes focusable and responds to Enter/Space. */
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Highlights the row with a raised background and a left accent border.
   * @default false
   */
  selected?: boolean;
  /** Enables a hover background color change.
   * @default false
   */
  hoverable?: boolean;
  /** TableCell elements. */
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

/** A table data cell (`<td>`). */
export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Text alignment.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /** Truncates overflowing text with an ellipsis. Requires a fixed `width` to take effect.
   * @default false
   */
  truncate?: boolean;
  /** Renders the cell text in a muted color.
   * @default false
   */
  muted?: boolean;
  /** Fixed column width. Numbers are treated as pixels; strings are used as-is. */
  width?: number | string;
  /** Cell content. */
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

/** A full-width subheading row for grouping table rows under a shared label. */
export interface TableGroupHeaderProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Number of columns the header should span. */
  colSpan: number;
  /** Group label text. */
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

/** A centered message row displayed when the table has no data. */
export interface TableEmptyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Number of columns the message should span. */
  colSpan: number;
  /** Empty state message content. */
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
