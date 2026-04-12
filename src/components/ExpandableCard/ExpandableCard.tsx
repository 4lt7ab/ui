import { semantic as t } from '../../tokens/semantic';
import { Card } from '../Card';
import { Icon } from '../Icon';
import type { CardVariant } from '../Card';
import { useState, type CSSProperties, type ReactNode } from 'react';

export interface ExpandableCardProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  variant?: CardVariant;
  style?: CSSProperties;
  headerAction?: ReactNode;
}

export function ExpandableCard({
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  variant = 'default',
  style,
  headerAction,
}: ExpandableCardProps): React.JSX.Element {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = (): void => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  };

  return (
    <Card variant={variant} padding="xs" style={style}>
      <div
        onClick={handleToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `${t.spaceSm} ${t.spaceMd}`,
          cursor: 'pointer',
          borderRadius: t.radiusMd,
          transition: 'background 150ms ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm }}>
          <Icon
            name="chevron-right"
            size={20}
            style={{
              transition: 'transform 200ms ease',
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          />
          <span
            style={{
              fontWeight: 600,
              fontFamily: t.fontSans,
              color: t.colorText,
              fontSize: '0.875rem',
            }}
          >
            {title}
          </span>
        </div>
        {headerAction && (
          <div onClick={(e) => e.stopPropagation()}>{headerAction}</div>
        )}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 200ms ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={{ padding: `${t.spaceSm} ${t.spaceMd} ${t.spaceMd}` }}>
            {children}
          </div>
        </div>
      </div>
    </Card>
  );
}
