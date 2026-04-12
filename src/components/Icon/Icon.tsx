import { iconRegistry } from '../../icons';
import type { IconName } from '../../icons';
import type { HTMLAttributes } from 'react';

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, style, 'aria-label': ariaLabel, ...props }: IconProps): React.JSX.Element {
  const IconComponent = iconRegistry[name];
  const isDecorative = !ariaLabel;

  return (
    <span
      role={isDecorative ? undefined : 'img'}
      aria-hidden={isDecorative || undefined}
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        lineHeight: 1,
        color: 'inherit',
        ...style,
      }}
      {...props}
    >
      <IconComponent size={size} />
    </span>
  );
}
