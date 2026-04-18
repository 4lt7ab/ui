import type { ReactNode } from 'react';
import { Card, IconChevronRight } from '@4lt7ab/ui';
import type { CardVariant } from '@4lt7ab/ui';
import { semantic as t, useDisclosure } from '@4lt7ab/core';
import type { UseDisclosureOptions } from '@4lt7ab/core';

/**
 * Local composition that replaces the retired <ExpandableCard>. Built on
 * Card + useDisclosure. Copy-paste into any consumer project and
 * customize the chevron, header, or panel layout per the app's needs.
 */
export interface DisclosureCardProps extends UseDisclosureOptions {
  title: string;
  children: ReactNode;
  headerAction?: ReactNode;
  variant?: CardVariant;
}

export function DisclosureCard({
  title,
  children,
  headerAction,
  variant = 'default',
  ...options
}: DisclosureCardProps): React.JSX.Element {
  const { open, triggerProps, contentProps } = useDisclosure(options);

  return (
    <Card variant={variant} padding="xs">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          type="button"
          {...triggerProps}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: t.spaceSm,
            padding: `${t.spaceSm} ${t.spaceMd}`,
            cursor: 'pointer',
            borderRadius: t.radiusMd,
            background: 'none',
            border: 'none',
            color: 'inherit',
            font: 'inherit',
            flex: 1,
            textAlign: 'left',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              transition: 'transform 150ms ease-out',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <IconChevronRight size={20} />
          </span>
          <span style={{ fontWeight: t.fontWeightSemibold, fontFamily: t.fontSans, color: t.colorText, fontSize: t.fontSizeSm }}>
            {title}
          </span>
        </button>
        {headerAction && <div style={{ padding: `0 ${t.spaceMd}` }}>{headerAction}</div>}
      </div>
      <div {...contentProps} style={{ padding: `${t.spaceSm} ${t.spaceMd} ${t.spaceMd}` }}>
        {children}
      </div>
    </Card>
  );
}
