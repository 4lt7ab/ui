import { forwardRef, useId } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Icon } from '../Icon';
import type { IconName } from '../../icons';
import type { ButtonHTMLAttributes } from 'react';

/** Controls the tap-target size of the icon button. */
export type IconButtonSize = 'sm' | 'md' | 'lg';

/** A circular icon-only button. Requires `aria-label` for accessibility. */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to render — built-in registry name or any icon-font name when `fontClass` is set. */
  icon: IconName | (string & {});
  /** Icon dimensions in pixels.
   * @default 24
   */
  size?: number;
  /** Tap-target size of the button.
   * - `sm` — 28px
   * - `md` — 36px (default)
   * - `lg` — 44px
   * @default 'md'
   */
  buttonSize?: IconButtonSize;
  /** Shows a small red notification dot in the top-right corner.
   * @default false
   */
  badge?: boolean;
  /** CSS class for an icon font (e.g. `'material-symbols-outlined'`).
   *  Passed through to Icon for font-based rendering. */
  fontClass?: string;
  /** Required accessible label for icon-only buttons. */
  'aria-label': string;
}

const buttonSizeMap: Record<IconButtonSize, number> = {
  sm: 28,
  md: 36,
  lg: 44,
};

export const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({
    icon,
    size = 24,
    buttonSize = 'md',
    badge,
    fontClass,
    style,
    className,
    ...props
  }, ref): React.JSX.Element {
    const uid = useId();
    const styleId = `icon-btn-${uid.replace(/:/g, '')}`;

    useInjectStyles(
      styleId,
      `[data-icon-btn-id="${styleId}"]:hover:not(:disabled) {
        background: color-mix(in srgb, currentColor 8%, transparent);
      }
      [data-icon-btn-id="${styleId}"]:focus-visible {
        outline: ${t.focusRingWidth} solid ${t.focusRingColor};
        outline-offset: ${t.focusRingOffset};
      }`,
    );

    const dim = buttonSizeMap[buttonSize];

    return (
      <button
        ref={ref}
        data-icon-btn-id={styleId}
        className={className}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: dim,
          height: dim,
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
        <Icon name={icon} size={size} fontClass={fontClass} />
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
              border: `${t.borderWidthThick} solid ${t.colorSurface}`,
            }}
          />
        )}
      </button>
    );
  }
);
