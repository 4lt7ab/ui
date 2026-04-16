import { semantic as t } from '@4lt7ab/core';
import { Card } from '../Card';
import { IconChevronRight } from '../../icons/icons';
import type { CardVariant } from '../Card';
import { forwardRef, useState, useId, type ReactNode } from 'react';

/** A Card with a collapsible body. Supports both controlled and uncontrolled open state. */
export interface ExpandableCardProps {
  /** Header text shown alongside the chevron toggle. */
  title: string;
  /** Collapsible body content. */
  children: ReactNode;
  /** Initial open state when uncontrolled.
   * @default false
   */
  defaultOpen?: boolean;
  /** Controlled open state. When provided, the component is fully controlled. */
  open?: boolean;
  /** Called when the open state changes. Receives the next open value. */
  onToggle?: (open: boolean) => void;
  /** Card surface variant passed to the underlying Card.
   * @default 'default'
   */
  variant?: CardVariant;
  /** Content rendered in the header row to the right of the title (e.g. action buttons). */
  headerAction?: ReactNode;
}

export const ExpandableCard: React.ForwardRefExoticComponent<Omit<ExpandableCardProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ExpandableCardProps>(
  function ExpandableCard({
    title,
    children,
    defaultOpen = false,
    open: controlledOpen,
    onToggle,
    variant = 'default',
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
      <Card ref={ref} variant={variant} padding="xs">
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
            transition: `background ${t.transitionBase}`,
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
              transition: `transform ${t.transitionSlow}`,
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
          transition: `grid-template-rows ${t.transitionSlow}`,
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
