import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties } from 'react';

/** A placeholder loading shape. Renders a static block with the raised surface color. */
export interface SkeletonProps {
  /** Width of the skeleton. Numbers are treated as pixels.
   * @default '100%'
   */
  width?: string | number;
  /** Height of the skeleton. Numbers are treated as pixels.
   * @default 16
   */
  height?: string | number;
  /** Border radius CSS value.
   * @default radiusMd token
   */
  borderRadius?: string;
  /** Additional inline styles. */
  style?: CSSProperties;
}

export const Skeleton: React.ForwardRefExoticComponent<Omit<SkeletonProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({
    width = '100%',
    height = 16,
    borderRadius = t.radiusMd,
    style,
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
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
);

export const CardSkeleton: React.ForwardRefExoticComponent<Omit<{ style?: CSSProperties }, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, { style?: CSSProperties }>(
  function CardSkeleton({ style }, ref): React.JSX.Element {
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
          ...style,
        }}
      >
        <Skeleton width="60%" height={20} />
        <Skeleton width="100%" height={14} />
        <Skeleton width="80%" height={14} />
      </div>
    );
  }
);

export const RowSkeleton: React.ForwardRefExoticComponent<Omit<{ style?: CSSProperties }, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, { style?: CSSProperties }>(
  function RowSkeleton({ style }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
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
);
