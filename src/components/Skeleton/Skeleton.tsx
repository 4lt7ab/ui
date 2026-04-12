import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties } from 'react';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  style?: CSSProperties;
}

export function Skeleton({
  width = '100%',
  height = 16,
  borderRadius = t.radiusMd,
  style,
}: SkeletonProps): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height,
        borderRadius,
        background: t.colorSurfaceRaised,
        ...style,
      }}
    />
  );
}

export function CardSkeleton({ style }: { style?: CSSProperties }): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      style={{
        borderRadius: t.radiusLg,
        border: `1px solid ${t.colorBorder}`,
        padding: t.spaceLg,
        display: 'flex',
        flexDirection: 'column',
        gap: t.spaceSm,
        ...style,
      }}
    >
      <Skeleton width="60%" height={20} />
      <Skeleton width="100%" height={14} />
      <Skeleton width="80%" height={14} />
    </div>
  );
}

export function RowSkeleton({ style }: { style?: CSSProperties }): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: t.spaceSm,
        padding: `${t.spaceSm} 0`,
        ...style,
      }}
    >
      <Skeleton width={32} height={32} borderRadius={t.radiusFull} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: t.spaceXs }}>
        <Skeleton width="40%" height={14} />
        <Skeleton width="70%" height={12} />
      </div>
    </div>
  );
}
