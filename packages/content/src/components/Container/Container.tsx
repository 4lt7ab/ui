import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { BREAKPOINT_PROSE, BREAKPOINT_WIDE } from '../../constants';

/** Named width preset for the Container. */
export type ContainerWidth = 'prose' | 'wide';

const widthMap: Record<ContainerWidth, string> = {
  prose: BREAKPOINT_PROSE,
  wide: BREAKPOINT_WIDE,
};

/** A centered content wrapper with max-width constraint. */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Named width preset.
   * - `prose` — 680px, optimized for reading
   * - `wide` — 900px, for wider layouts
   * @default 'prose'
   */
  width?: ContainerWidth;
  /** Arbitrary max-width value (e.g. '1200px', '100%'). Overrides `width` when set. */
  maxWidth?: string;
  /** Horizontal padding CSS value.
   * @default '1.5rem'
   */
  padding?: string;
  /** Container content. */
  children: ReactNode;
}

export const Container: React.ForwardRefExoticComponent<Omit<ContainerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({
    width = 'prose',
    maxWidth,
    padding = '1.5rem',
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        style={{
          boxSizing: 'border-box',
          width: '100%',
          maxWidth: maxWidth ?? widthMap[width],
          marginInline: 'auto',
          paddingInline: padding,
          overflow: 'visible',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
