import { semantic as t, useInjectStyles } from '@4lt7ab/core';
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

/*
 * Choreography:
 * - Open: chevron rotates first (0-150ms), height opens with 100ms delay (100-300ms),
 *   direct children fade in with 40ms stagger (200ms+).
 * - Close: children fade out immediately, height collapses with 80ms delay after children
 *   have started leaving, chevron rotates back last (~150ms delay).
 * - prefers-reduced-motion: everything is instant.
 * Total envelope ≤ 350ms.
 */
const EXPANDABLE_STYLES_ID = '4lt7ab-expandable-card-choreo';
const EXPANDABLE_STYLES_CSS = `
@keyframes expandableCardChildIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
[data-expandable-body][data-open="true"] > div > div > * {
  animation: expandableCardChildIn 180ms ease-out both;
}
[data-expandable-body][data-open="true"] > div > div > *:nth-child(1) { animation-delay: 150ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(2) { animation-delay: 190ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(3) { animation-delay: 230ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(4) { animation-delay: 270ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(n+5) { animation-delay: 300ms; }
/* Closing — fade children out quickly without stagger. */
[data-expandable-body][data-open="false"] > div > div > * {
  opacity: 0;
  transition: opacity 120ms ease-in;
}
@media (prefers-reduced-motion: reduce) {
  [data-expandable-body][data-open="true"] > div > div > * {
    animation: none;
  }
  [data-expandable-body][data-open="false"] > div > div > * {
    transition: none;
  }
}
`;

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

    useInjectStyles(EXPANDABLE_STYLES_ID, EXPANDABLE_STYLES_CSS);

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
              /* Chevron leads on open (no delay), trails on close (150ms delay). */
              transition: 'transform 150ms ease-out',
              transitionDelay: isOpen ? '0ms' : '150ms',
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
        data-expandable-body=""
        data-open={isOpen ? 'true' : 'false'}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 200ms ease-out',
          /* Height waits for chevron on open, lags behind children fade on close. */
          transitionDelay: isOpen ? '100ms' : '80ms',
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
