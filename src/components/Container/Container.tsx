import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export type ContainerWidth = 'prose' | 'wide';

const widthMap: Record<ContainerWidth, string> = {
  prose: '680px',
  wide: '900px',
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Named width preset. Default: 'prose' (680px) */
  width?: ContainerWidth;
  /** Arbitrary max-width value (e.g. '1200px', '100%'). Overrides `width` when set. */
  maxWidth?: string;
  /** Horizontal padding. Default: '1.5rem' */
  padding?: string;
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
