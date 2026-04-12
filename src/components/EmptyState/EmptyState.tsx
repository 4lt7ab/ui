import { semantic as t } from '../../tokens/semantic';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Card } from '../Card';
import type { IconName } from '../../icons';
import type { CSSProperties } from 'react';

export interface EmptyStateProps {
  icon: IconName;
  message: string;
  variant?: 'plain' | 'card';
  style?: CSSProperties;
}

export function EmptyState({
  icon,
  message,
  variant = 'plain',
  style,
}: EmptyStateProps): React.JSX.Element {
  const content = (
    <Stack align="center" gap="sm" style={{ padding: t.spaceXl, ...style }}>
      <Icon name={icon} size={32} style={{ color: t.colorTextMuted }} />
      <span
        style={{
          color: t.colorTextSecondary,
          fontSize: '0.875rem',
          textAlign: 'center',
          fontFamily: t.fontSans,
        }}
      >
        {message}
      </span>
    </Stack>
  );

  if (variant === 'card') {
    return <Card variant="flat">{content}</Card>;
  }

  return content;
}
