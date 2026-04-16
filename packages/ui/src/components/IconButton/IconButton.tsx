import { forwardRef, useId } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Icon } from '../Icon';
import type { IconName } from '../../icons';

/** Controls the tap-target and icon size of the icon button. */
export type IconButtonSize = 'sm' | 'md' | 'lg';

/** A circular icon-only button. Requires `aria-label` for accessibility. */
export interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  /** Required accessible label for icon-only buttons. */
  'aria-label': string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'data-testid'?: string;
  id?: string;
  /** Icon to render — built-in registry name or any icon-font name when `fontClass` is set. */
  icon: IconName | (string & {});
  /** Button and icon size.
   * - `sm` — 28px button, 16px icon
   * - `md` — 36px button, 20px icon (default)
   * - `lg` — 44px button, 24px icon
   * @default 'md'
   */
  size?: IconButtonSize;
  /** Shows a small red notification dot in the top-right corner.
   * @default false
   */
  badge?: boolean;
  /** CSS class for an icon font (e.g. `'material-symbols-outlined'`).
   *  Passed through to Icon for font-based rendering. */
  fontClass?: string;
}

const buttonSizeMap: Record<IconButtonSize, number> = {
  sm: 28,
  md: 36,
  lg: 44,
};

const iconSizeForButton: Record<IconButtonSize, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({
    icon,
    size = 'md',
    badge,
    fontClass,
    onClick,
    disabled,
    type,
    tabIndex,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-controls': ariaControls,
    'data-testid': dataTestId,
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

    const dim = buttonSizeMap[size];

    return (
      <button
        ref={ref}
        data-icon-btn-id={styleId}
        type={type}
        onClick={onClick}
        disabled={disabled}
        tabIndex={tabIndex}
        id={id}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        data-testid={dataTestId}
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
        }}
      >
        <Icon name={icon} size={iconSizeForButton[size]} fontClass={fontClass} />
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
