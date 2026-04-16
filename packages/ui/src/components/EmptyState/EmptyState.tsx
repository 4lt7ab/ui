import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Card } from '../Card';
import type { IconName } from '../../icons';
import type { ReactNode } from 'react';

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
  /** Additional content rendered below the message. */
  children?: ReactNode;
  /** Action slot (e.g. a CTA button) rendered below the message and children. */
  action?: ReactNode;
}

export const EmptyState: React.ForwardRefExoticComponent<Omit<EmptyStateProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState({
    icon,
    message,
    variant = 'plain',
    children,
    action,
  }, ref): React.JSX.Element {
    const content = (
      <div style={{ padding: t.spaceXl }}>
      <Stack align="center" gap="sm">
        <span style={{ color: t.colorTextMuted, display: 'inline-flex' }}><Icon name={icon} size="xl" /></span>
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
