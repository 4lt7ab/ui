import { forwardRef } from 'react';
import { iconRegistry } from '../../icons';
import type { IconName } from '../../icons';
import type { HTMLAttributes } from 'react';

/** Renders a named icon from the icon registry. Decorative by default; provide `aria-label` for meaningful icons. */
export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Icon to render from the built-in icon registry. */
  name: IconName;
  /** Icon dimensions in pixels (width and height).
   * @default 24
   */
  size?: number;
}

export const Icon: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, IconProps>(
  function Icon({ name, size = 24, style, 'aria-label': ariaLabel, ...props }, ref): React.JSX.Element {
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;

    return (
      <span
        ref={ref}
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
);
