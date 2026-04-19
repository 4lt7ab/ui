import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { spacingMap } from '../../../types';
import type { SpacingToken, BaseComponentProps } from '../../../types';

/**
 * Responsive grid layout with auto-fill columns.
 *
 * Two modes:
 * - **Auto-fill** (default): columns fill available space with a minimum width.
 *   `gridTemplateColumns: repeat(auto-fill, minmax(minColumnWidth, 1fr))`
 * - **Fixed columns**: explicit column count.
 *   `gridTemplateColumns: repeat(columns, 1fr)`
 *
 * @example
 * ```tsx
 * // Auto-fill cards at 300px minimum
 * <Grid minColumnWidth={300} gap="lg">
 *   {items.map(item => <Card key={item.id}>{item.name}</Card>)}
 * </Grid>
 *
 * // Fixed 3-column layout
 * <Grid columns={3} gap="md">
 *   <div>A</div>
 *   <div>B</div>
 *   <div>C</div>
 * </Grid>
 * ```
 */
export interface GridProps extends BaseComponentProps {
  /**
   * Minimum width of each column before wrapping (pixels).
   * @default 300
   */
  minColumnWidth?: number;

  /**
   * Fixed column count. When set, overrides `minColumnWidth`.
   */
  columns?: number;

  /**
   * Gap between grid cells.
   * @default 'md'
   */
  gap?: SpacingToken;

  children: ReactNode;
}

export const Grid: React.ForwardRefExoticComponent<
  Omit<GridProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, GridProps>(
  function Grid(
    {
      minColumnWidth = 300,
      columns,
      gap = 'md',
      children,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const minWidth = `${minColumnWidth}px`;

    const gridTemplateColumns = columns
      ? `repeat(${columns}, 1fr)`
      : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;

    return (
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        style={{
          display: 'grid',
          gridTemplateColumns,
          gap: spacingMap[gap],
        }}
      >
        {children}
      </div>
    );
  },
);
