import { semantic as t } from '../../tokens/semantic';
import { Card } from '../Card';
import { IconChevronRight } from '../../icons/icons';
import type { CardVariant } from '../Card';
import { forwardRef, useState, useId, type CSSProperties, type ReactNode } from 'react';

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

export const ExpandableCard = forwardRef<HTMLDivElement, ExpandableCardProps>(
  function ExpandableCard({
    title,
    children,
    defaultOpen = false,
    open: controlledOpen,
    onToggle,
    variant = 'default',
    style,
    headerAction,
  }, ref): React.JSX.Element {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const panelId = useId();

    const handleToggle = (): void => {
      const next = !isOpen;
      if (controlledOpen === undefined) {
        setInternalOpen(next);
      }
      onToggle?.(next);
    };

    return (
      <Card ref={ref} variant={variant} padding="xs" style={style}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: t.spaceSm,
            padding: `${t.spaceSm} ${t.spaceMd}`,
            cursor: 'pointer',
            borderRadius: t.radiusMd,
            transition: 'background 150ms ease',
            background: 'none',
            border: 'none',
            color: 'inherit',
            font: 'inherit',
            flex: 1,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 20,
              height: 20,
              lineHeight: 1,
              color: 'inherit',
              transition: 'transform 200ms ease',
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <IconChevronRight size={20} />
          </span>
          <span
            style={{
              fontWeight: t.fontWeightSemibold,
              fontFamily: t.fontSans,
              color: t.colorText,
              fontSize: t.fontSizeSm,
            }}
          >
            {title}
          </span>
        </button>
        {headerAction && (
          <div style={{ padding: `0 ${t.spaceMd}` }}>{headerAction}</div>
        )}
      </div>
      <div
        id={panelId}
        role="region"
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
);
