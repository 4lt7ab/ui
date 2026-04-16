import { forwardRef } from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { spacingMap } from '../../types';
import type { SpacingToken } from '../../types';

const gapMap: Record<SpacingToken, string> = spacingMap;

/** Flexbox layout component for vertical or horizontal stacking with consistent spacing. */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Stack direction.
   * - `vertical` — column layout
   * - `horizontal` — row layout
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';
  /** Gap between children using spacing tokens.
   * @default 'md'
   */
  gap?: SpacingToken;
  /** Cross-axis alignment (maps to CSS `align-items`). */
  align?: CSSProperties['alignItems'];
  /** Main-axis alignment (maps to CSS `justify-content`). */
  justify?: CSSProperties['justifyContent'];
  /** Whether children should wrap to the next line when they overflow.
   * @default false
   */
  wrap?: boolean;
  /** Stack content. */
  children: ReactNode;
}

export const Stack: React.ForwardRefExoticComponent<Omit<StackProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, StackProps>(
  function Stack({
    direction = 'vertical',
    gap = 'md',
    align,
    justify,
    wrap,
    children,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: direction === 'vertical' ? 'column' : 'row',
          gap: gapMap[gap],
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? 'wrap' : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
