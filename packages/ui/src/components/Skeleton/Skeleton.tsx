import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties } from 'react';
import { radiusMap } from '../../types';
import type { RadiusToken } from '../../types';

/** A placeholder loading shape. Renders a static block with the raised surface color. */
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

export const Skeleton: React.ForwardRefExoticComponent<Omit<SkeletonProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({
    width = '100%',
    height = 16,
    radius = 'md',
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          width,
          height,
          borderRadius: radiusMap[radius],
          background: t.colorSurfaceRaised,
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
