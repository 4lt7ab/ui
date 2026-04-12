import type { HTMLAttributes, ReactNode } from 'react';

export type ContainerWidth = 'prose' | 'wide';

const widthMap: Record<ContainerWidth, string> = {
  prose: '680px',
  wide: '900px',
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Max content width. Default: 'prose' (680px) */
  width?: ContainerWidth;
  /** Horizontal padding. Default: '1.5rem' */
  padding?: string;
  children: ReactNode;
}

export function Container({
  width = 'prose',
  padding = '1.5rem',
  children,
  style,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: widthMap[width],
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
