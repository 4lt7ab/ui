import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties } from 'react';

export type StatusDotVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface StatusDotProps {
  /** Semantic variant — maps to feedback tokens. */
  variant?: StatusDotVariant;
  /** Raw color override. Takes precedence over variant. */
  color?: string;
  /** Dot diameter in pixels. @default 8 */
  size?: number;
  /** Accessible label describing the status. */
  'aria-label'?: string;
  style?: CSSProperties;
}

const variantColors: Record<StatusDotVariant, string> = {
  default: t.colorTextMuted,
  success: t.colorSuccess,
  warning: t.colorWarning,
  error: t.colorError,
  info: t.colorInfo,
};

export function StatusDot({
  variant = 'default',
  color,
  size = 8,
  'aria-label': ariaLabel,
  style,
}: StatusDotProps): React.JSX.Element {
  const resolvedColor = color ?? variantColors[variant];

  return (
    <span
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: t.radiusFull,
        background: resolvedColor,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
