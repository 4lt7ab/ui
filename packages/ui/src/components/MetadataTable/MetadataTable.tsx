import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';

export interface MetadataTableProps {
  /** Label/value pairs to display. */
  items: Array<{ label: string; value: ReactNode }>;
  /** Optional section title rendered above the list. */
  title?: string;
}

const titleStyles: React.CSSProperties = {
  margin: 0,
  marginBottom: t.spaceMd,
  fontSize: t.fontSizeLg,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorText,
};

const listStyles: React.CSSProperties = {
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: t.spaceSm,
};

const rowStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: t.spaceXs,
  padding: `${t.spaceSm} 0`,
  borderBottom: `${t.borderWidthDefault} solid ${t.colorBorder}`,
};

const labelStyles: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};

const valueStyles: React.CSSProperties = {
  fontSize: t.fontSizeSm,
  fontFamily: t.fontSans,
  color: t.colorText,
};

export function MetadataTable({ items, title }: MetadataTableProps): React.JSX.Element {
  return (
    <div>
      {title && <h3 style={titleStyles}>{title}</h3>}
      <dl style={listStyles}>
        {items.map((item, i) => (
          <div key={i} style={i === items.length - 1 ? { ...rowStyles, borderBottom: 'none' } : rowStyles}>
            <dt style={labelStyles}>{item.label}</dt>
            <dd style={{ ...valueStyles, margin: 0 }}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
