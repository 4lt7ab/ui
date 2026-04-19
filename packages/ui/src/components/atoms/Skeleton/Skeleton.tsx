import { forwardRef } from 'react';
import { semantic as t, useInjectStyles, useThemeRhythm } from '@4lt7ab/core';
import type { CSSProperties } from 'react';
import { radiusMap } from '../../../types';
import type { RadiusToken } from '../../../types';

/**
 * A placeholder loading shape that pulses with the active theme's accent color.
 *
 * Siblings stagger automatically via `:nth-of-type` — when multiple Skeletons
 * are rendered next to each other, a subtle wave travels through them in DOM
 * order. The pulse duration syncs to the active theme's rhythm when one is
 * defined, falling back to a 1.6s cadence otherwise.
 */
export interface SkeletonProps {
  /** Width in pixels, or a percentage string like '100%' or '60%'.
   * @default '100%'
   */
  width?: number | `${number}%`;
  /** Height in pixels.
   * @default 16
   */
  height?: number;
  /** Border radius token.
   * @default 'md'
   */
  radius?: RadiusToken;
}

const SKELETON_STYLES_ID = '4lt7ab-skeleton-pulse';

/* Delays up to N siblings. Keeps the wave tight — beyond 10 the tail is imperceptible. */
const STAGGER_STEPS = 10;
const STAGGER_MS = 80;

const SKELETON_STYLES_CSS = (() => {
  const staggerRules: string[] = [];
  for (let i = 2; i <= STAGGER_STEPS; i++) {
    staggerRules.push(
      `[data-skeleton]:nth-of-type(${i})::after { animation-delay: ${(i - 1) * STAGGER_MS}ms; }`,
    );
  }

  return `
@keyframes skeletonPulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.18; }
}
[data-skeleton] {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
[data-skeleton]::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--skeleton-accent, var(--color-action-primary));
  opacity: 0;
  animation: skeletonPulse var(--skeleton-duration, 1.6s) ease-in-out infinite;
  pointer-events: none;
}
${staggerRules.join('\n')}
@media (prefers-reduced-motion: reduce) {
  [data-skeleton]::after {
    animation: none;
    opacity: 0;
  }
}
`;
})();

export const Skeleton: React.ForwardRefExoticComponent<Omit<SkeletonProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({
    width = '100%',
    height = 16,
    radius = 'md',
  }, ref): React.JSX.Element {
    const { durationCss } = useThemeRhythm();
    useInjectStyles(SKELETON_STYLES_ID, SKELETON_STYLES_CSS);

    return (
      <div
        ref={ref}
        data-skeleton=""
        aria-hidden="true"
        style={{
          width,
          height,
          borderRadius: radiusMap[radius],
          background: t.colorSurfaceRaised,
          ...(durationCss ? ({ '--skeleton-duration': durationCss } as CSSProperties) : undefined),
        }}
      />
    );
  }
);

export const CardSkeleton: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement>(
  function CardSkeleton(_props, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          borderRadius: t.radiusLg,
          border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
          padding: t.spaceLg,
          display: 'flex',
          flexDirection: 'column',
          gap: t.spaceSm,
        }}
      >
        <Skeleton width="60%" height={20} />
        <Skeleton width="100%" height={14} />
        <Skeleton width="80%" height={14} />
      </div>
    );
  }
);

export const RowSkeleton: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement>(
  function RowSkeleton(_props, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: t.spaceSm,
          padding: `${t.spaceSm} 0`,
        }}
      >
        <Skeleton width={32} height={32} radius="full" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: t.spaceXs }}>
          <Skeleton width="40%" height={14} />
          <Skeleton width="70%" height={12} />
        </div>
      </div>
    );
  }
);
