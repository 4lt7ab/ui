import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { HTMLAttributes } from 'react';
import { spacingMap } from '../../types';
import type { SpacingToken } from '../../types';

/**
 * A thin visual separator line.
 *
 * Supports horizontal (full-width) and vertical (inline between flex items)
 * orientations. Opacity controls how prominent the divider appears via
 * `color-mix()` with the border token.
 *
 * @example
 * ```tsx
 * // Horizontal section break
 * <Divider spacing="lg" />
 *
 * // Vertical divider between filter pills
 * <Stack direction="horizontal" align="center" gap="sm">
 *   <PillSelect ... />
 *   <Divider orientation="vertical" length={20} />
 *   <PillSelect ... />
 * </Stack>
 * ```
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Opacity of the border color, 0-100.
   * Uses `color-mix(in srgb, colorBorder <opacity>%, transparent)`.
   * @default 50
   */
  opacity?: number;

  /**
   * Fixed length for the divider (pixels).
   * For vertical: height. For horizontal: width.
   * Defaults to 100% of the available axis.
   */
  length?: number;

  /**
   * Spacing around the divider.
   * Horizontal: margin-block. Vertical: margin-inline.
   */
  spacing?: SpacingToken;
}

export const Divider: React.ForwardRefExoticComponent<
  Omit<DividerProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, DividerProps>(
  function Divider(
    {
      orientation = 'horizontal',
      opacity = 50,
      length,
      spacing,
      style,
      ...props
    },
    ref,
  ): React.JSX.Element {
    const bg = `color-mix(in srgb, ${t.colorBorder} ${opacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : undefined;

    const isHorizontal = orientation === 'horizontal';

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        style={{
          background: bg,
          width: isHorizontal
            ? length != null ? `${length}px` : '100%'
            : 1,
          height: isHorizontal
            ? 1
            : length != null ? `${length}px` : '100%',
          flexShrink: 0,
          margin: spacingValue
            ? isHorizontal
              ? `${spacingValue} 0`
              : `0 ${spacingValue}`
            : undefined,
          ...style,
        }}
        {...props}
      />
    );
  },
);
