import { forwardRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Card } from '../Card';
import type { IconName } from '../../icons';
import type { ReactNode } from 'react';

/** Idle animation mode for the EmptyState icon. */
export type EmptyStateIdle = 'none' | 'breathe' | 'particles';

/** A placeholder shown when a section has no content. Displays an icon, message, and optional action. */
export interface EmptyStateProps {
  /** Icon displayed above the message. */
  icon: IconName;
  /** Primary message text. */
  message: string;
  /** Container variant.
   * - `plain` — no card wrapper
   * - `card` — wraps content in a flat Card
   * @default 'plain'
   */
  variant?: 'plain' | 'card';
  /**
   * Idle animation that gives the empty state life.
   * - `none` — static icon (previous behavior)
   * - `breathe` — icon gently scale-pulses on a 3s cycle (default)
   * - `particles` — adds 4 tiny dots drifting around the icon
   * All animations are CSS-only, transform-based (no layout shift), and
   * honor `prefers-reduced-motion`.
   * @default 'breathe'
   */
  idle?: EmptyStateIdle;
  /** Additional content rendered below the message. */
  children?: ReactNode;
  /** Action slot (e.g. a CTA button) rendered below the message and children. */
  action?: ReactNode;
}

const IDLE_STYLES_ID = '4lt7ab-empty-state-idle';
const IDLE_STYLES_CSS = `
@keyframes emptyStateBreathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
/* Four orbits — each particle takes a different elliptical path so they don't look coordinated. */
@keyframes emptyStateDrift0 {
  0%   { transform: translate( 22px, -14px) scale(0.9); opacity: 0; }
  20%  { opacity: 0.55; }
  50%  { transform: translate( 28px,  18px) scale(1);   opacity: 0.55; }
  80%  { opacity: 0.3; }
  100% { transform: translate( 22px, -14px) scale(0.9); opacity: 0; }
}
@keyframes emptyStateDrift1 {
  0%   { transform: translate(-24px,  16px) scale(0.85); opacity: 0; }
  25%  { opacity: 0.5; }
  50%  { transform: translate(-30px, -10px) scale(1);    opacity: 0.5; }
  75%  { opacity: 0.3; }
  100% { transform: translate(-24px,  16px) scale(0.85); opacity: 0; }
}
@keyframes emptyStateDrift2 {
  0%   { transform: translate( -8px, -26px) scale(0.95); opacity: 0; }
  30%  { opacity: 0.45; }
  50%  { transform: translate( 12px, -30px) scale(1);    opacity: 0.45; }
  70%  { opacity: 0.25; }
  100% { transform: translate( -8px, -26px) scale(0.95); opacity: 0; }
}
@keyframes emptyStateDrift3 {
  0%   { transform: translate( 10px,  28px) scale(0.9);  opacity: 0; }
  20%  { opacity: 0.5; }
  50%  { transform: translate( -6px,  32px) scale(1);    opacity: 0.5; }
  80%  { opacity: 0.3; }
  100% { transform: translate( 10px,  28px) scale(0.9);  opacity: 0; }
}
[data-empty-state-icon="breathe"],
[data-empty-state-icon="particles"] {
  display: inline-flex;
  position: relative;
  animation: emptyStateBreathe 3s ease-in-out infinite;
  will-change: transform;
}
[data-empty-state-particle] {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  margin: -2px 0 0 -2px;
  border-radius: 50%;
  background: var(--empty-state-particle, currentColor);
  opacity: 0;
  pointer-events: none;
  will-change: transform, opacity;
}
[data-empty-state-particle="0"] { animation: emptyStateDrift0 6.5s ease-in-out infinite; }
[data-empty-state-particle="1"] { animation: emptyStateDrift1 7.2s ease-in-out infinite -1.5s; }
[data-empty-state-particle="2"] { animation: emptyStateDrift2 5.8s ease-in-out infinite -0.8s; }
[data-empty-state-particle="3"] { animation: emptyStateDrift3 8.1s ease-in-out infinite -2.2s; }
@media (prefers-reduced-motion: reduce) {
  [data-empty-state-icon="breathe"],
  [data-empty-state-icon="particles"] {
    animation: none;
  }
  [data-empty-state-particle] {
    animation: none;
    opacity: 0;
  }
}
`;

export const EmptyState: React.ForwardRefExoticComponent<Omit<EmptyStateProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState({
    icon,
    message,
    variant = 'plain',
    idle = 'breathe',
    children,
    action,
  }, ref): React.JSX.Element {
    useInjectStyles(IDLE_STYLES_ID, IDLE_STYLES_CSS);

    const iconWrapper = (
      <span
        data-empty-state-icon={idle === 'none' ? undefined : idle}
        style={{ color: t.colorTextMuted, display: 'inline-flex' }}
      >
        <Icon name={icon} size="xl" />
        {idle === 'particles' && (
          <>
            <span data-empty-state-particle="0" aria-hidden="true" />
            <span data-empty-state-particle="1" aria-hidden="true" />
            <span data-empty-state-particle="2" aria-hidden="true" />
            <span data-empty-state-particle="3" aria-hidden="true" />
          </>
        )}
      </span>
    );

    const content = (
      <div style={{ padding: t.spaceXl }}>
        <Stack align="center" gap="sm">
          {iconWrapper}
          <span
            style={{
              color: t.colorTextSecondary,
              fontSize: t.fontSizeSm,
              textAlign: 'center',
              fontFamily: t.fontSans,
            }}
          >
            {message}
          </span>
          {children}
          {action && <div style={{ marginTop: t.spaceSm }}>{action}</div>}
        </Stack>
      </div>
    );

    if (variant === 'card') {
      return <Card ref={ref} variant="flat">{content}</Card>;
    }

    return <div ref={ref}>{content}</div>;
  }
);
