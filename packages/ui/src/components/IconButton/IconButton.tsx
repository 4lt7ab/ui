import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import { Icon } from '../Icon';
import type { IconName } from '../../icons';
import type { ButtonHTMLAttributes } from 'react';

/** A circular icon-only button. Requires `aria-label` for accessibility. */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to render from the built-in icon registry. */
  icon: IconName;
  /** Icon dimensions in pixels.
   * @default 24
   */
  size?: number;
  /** Shows a small red notification dot in the top-right corner.
   * @default false
   */
  badge?: boolean;
  /** Required accessible label for icon-only buttons. */
  'aria-label': string;
}

export const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({
    icon,
    size = 24,
    badge,
    style,
    ...props
  }, ref): React.JSX.Element {
    return (
      <button
        ref={ref}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          borderRadius: t.radiusFull,
          background: 'transparent',
          border: 'none',
          color: t.colorTextMuted,
          cursor: 'pointer',
          padding: 0,
          ...style,
        }}
        {...props}
      >
        <Icon name={icon} size={size} />
        {badge && (
          <span
            style={{
              position: 'absolute',
              top: 2,
              right: 2,
              width: 8,
              height: 8,
              borderRadius: t.radiusFull,
              background: t.colorError,
              border: `2px solid ${t.colorSurface}`,
            }}
          />
        )}
      </button>
    );
  }
);
