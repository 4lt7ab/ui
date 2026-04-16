import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { spacingMap, dividerOpacityMap } from '../../types';
import type { SpacingToken, DividerOpacity, BaseComponentProps } from '../../types';

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
 *   <Divider orientation="vertical" />
 *   <PillSelect ... />
 * </Stack>
 * ```
 */
export interface DividerProps extends BaseComponentProps {
  /**
   * Orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Opacity preset for the border color.
   * Uses `color-mix(in srgb, colorBorder <opacity>%, transparent)`.
   * @default 'default'
   */
  opacity?: DividerOpacity;

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
      opacity = 'default',
      spacing,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const resolvedOpacity = dividerOpacityMap[opacity];
    const bg = `color-mix(in srgb, ${t.colorBorder} ${resolvedOpacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : undefined;

    const isHorizontal = orientation === 'horizontal';

    return (
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        role="separator"
        aria-orientation={orientation}
        style={{
          background: bg,
          width: isHorizontal ? '100%' : 1,
          height: isHorizontal ? 1 : '100%',
          flexShrink: 0,
          margin: spacingValue
            ? isHorizontal
              ? `${spacingValue} 0`
              : `0 ${spacingValue}`
            : undefined,
        }}
      />
    );
  },
);
