import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { BREAKPOINT_PROSE, BREAKPOINT_WIDE } from '../../constants';

/** Named width preset for the Container. */
export type ContainerWidth = 'narrow' | 'prose' | 'wide' | 'full';

const widthMap: Record<ContainerWidth, string> = {
  narrow: '32rem',
  prose: BREAKPOINT_PROSE,
  wide: BREAKPOINT_WIDE,
  full: '100%',
};

/** Horizontal padding preset for the Container. */
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

const paddingMap: Record<ContainerPadding, string> = {
  none: '0',
  sm: '0.75rem',
  md: '1.5rem',
  lg: '3rem',
};

/** A centered content wrapper with max-width constraint. */
export interface ContainerProps {
  /** Named width preset.
   * - `narrow` — 32rem, compact layouts
   * - `prose` — 680px, optimized for reading
   * - `wide` — 900px, for wider layouts
   * - `full` — 100%, no max-width constraint
   * @default 'prose'
   */
  width?: ContainerWidth;
  /** Horizontal padding preset.
   * @default 'md'
   */
  padding?: ContainerPadding;
  /** Container content. */
  children: ReactNode;
  id?: string;
  'data-testid'?: string;
}

export const Container: React.ForwardRefExoticComponent<Omit<ContainerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({
    width = 'prose',
    padding = 'md',
    children,
    id,
    'data-testid': dataTestId,
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={dataTestId}
        style={{
          boxSizing: 'border-box',
          width: '100%',
          maxWidth: widthMap[width],
          marginInline: 'auto',
          paddingInline: paddingMap[padding],
          overflow: 'visible',
        }}
      >
        {children}
      </div>
    );
  }
);
