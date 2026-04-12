import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const gapMap: Record<SpacingToken, string> = {
  xs: t.spaceXs,
  sm: t.spaceSm,
  md: t.spaceMd,
  lg: t.spaceLg,
  xl: t.spaceXl,
  '2xl': t.space2xl,
};

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Stack direction. Default: 'vertical' */
  direction?: 'vertical' | 'horizontal';
  /** Gap between children. Default: 'md' */
  gap?: SpacingToken;
  /** Cross-axis alignment. */
  align?: CSSProperties['alignItems'];
  /** Main-axis alignment. */
  justify?: CSSProperties['justifyContent'];
  /** Whether children should wrap. */
  wrap?: boolean;
  children: ReactNode;
}

export function Stack({
  direction = 'vertical',
  gap = 'md',
  align,
  justify,
  wrap,
  children,
  style,
  ...props
}: StackProps): React.JSX.Element {
  return (
    <div
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
