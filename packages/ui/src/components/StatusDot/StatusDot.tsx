import { forwardRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { CSSProperties } from 'react';

/** Semantic color variant for the status dot. */
export type StatusDotVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

/** Animation style for the status dot. */
export type StatusDotAnimate = 'pulse' | 'none';

/** A small colored circle indicating status. */
export interface StatusDotProps {
  /** Semantic variant — maps to feedback tokens. */
  variant?: StatusDotVariant;
  /** Raw color override. Takes precedence over variant. */
  color?: string;
  /** Dot diameter in pixels. @default 8 */
  size?: number;
  /** Animation style. @default 'none' */
  animate?: StatusDotAnimate;
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

const PULSE_STYLES_ID = '4lt7ab-status-dot-pulse';
const PULSE_STYLES_CSS = `
@keyframes statusDotPulse {
  0% { box-shadow: 0 0 0 0 var(--status-dot-color); opacity: 1; }
  70% { box-shadow: 0 0 0 6px var(--status-dot-color); opacity: 0; }
  100% { box-shadow: 0 0 0 0 var(--status-dot-color); opacity: 0; }
}
[data-status-dot-pulse] {
  animation: statusDotPulse 1.5s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-status-dot-pulse] {
    animation: none;
  }
}
`;

export const StatusDot: React.ForwardRefExoticComponent<Omit<StatusDotProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, StatusDotProps>(
  function StatusDot({
    variant = 'default',
    color,
    size = 8,
    animate = 'none',
    'aria-label': ariaLabel,
    style,
  }, ref): React.JSX.Element {
    const resolvedColor = color ?? variantColors[variant];
    const isPulsing = animate === 'pulse';

    useInjectStyles(PULSE_STYLES_ID, PULSE_STYLES_CSS);

    return (
      <span
        ref={ref}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        data-status-dot-pulse={isPulsing || undefined}
        style={{
          display: 'inline-block',
          width: size,
          height: size,
          borderRadius: t.radiusFull,
          background: resolvedColor,
          flexShrink: 0,
          ...(isPulsing ? { '--status-dot-color': resolvedColor } as CSSProperties : undefined),
          ...style,
        }}
      />
    );
  }
);
