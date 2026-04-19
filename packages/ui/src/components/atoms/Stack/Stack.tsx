import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { spacingMap, alignMap, justifyMap } from '../../../types';
import type { SpacingToken, AlignItems, JustifyContent, BaseComponentProps } from '../../../types';

const gapMap: Record<SpacingToken, string> = spacingMap;

/** Flexbox layout component for vertical or horizontal stacking with consistent spacing. */
export interface StackProps extends BaseComponentProps {
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
  /** Cross-axis alignment. */
  align?: AlignItems;
  /** Main-axis alignment. */
  justify?: JustifyContent;
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
    ...rest
  }, ref): React.JSX.Element {
    return (
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        style={{
          display: 'flex',
          flexDirection: direction === 'vertical' ? 'column' : 'row',
          gap: gapMap[gap],
          alignItems: align ? alignMap[align] : undefined,
          justifyContent: justify ? justifyMap[justify] : undefined,
          flexWrap: wrap ? 'wrap' : undefined,
        }}
      >
        {children}
      </div>
    );
  }
);
