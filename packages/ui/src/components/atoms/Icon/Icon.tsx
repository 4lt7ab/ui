import { forwardRef, createContext, useContext } from 'react';
import { iconRegistry } from '../../../icons';
import type { IconName } from '../../../icons';
import type { ReactNode } from 'react';
import { iconSizeMap } from '../../../types';
import type { IconSize } from '../../../types';

// ---------------------------------------------------------------------------
// Icon font context — lets consumers set a default fontClass globally
// ---------------------------------------------------------------------------

const IconFontContext = createContext<string | undefined>(undefined);

/** Provider that sets a default `fontClass` for all descendant Icon components.
 *
 * Wrap your app (or a subtree) so you don't have to pass `fontClass` on every Icon:
 *
 * ```tsx
 * <IconFontProvider fontClass="material-symbols-outlined">
 *   <Icon name="home" />
 * </IconFontProvider>
 * ```
 */
export function IconFontProvider({ fontClass, children }: { fontClass: string; children: ReactNode }): React.JSX.Element {
  return <IconFontContext.Provider value={fontClass}>{children}</IconFontContext.Provider>;
}

// ---------------------------------------------------------------------------
// Icon component
// ---------------------------------------------------------------------------

/** Renders a named icon from the built-in registry, or falls back to an icon font
 *  when the name is unregistered and a `fontClass` is available (via prop or context). */
export interface IconProps {
  /** Icon name. Built-in registry names render SVG components; unregistered names
   *  fall back to icon-font rendering when `fontClass` is set. */
  name: IconName | (string & {});
  /** Icon size preset.
   * @default 'lg'
   */
  size?: IconSize;
  /** CSS class for an icon font (e.g. `'material-symbols-outlined'`).
   *  Used when `name` is not in the built-in registry. Falls back to the
   *  value from `IconFontProvider` when omitted. */
  fontClass?: string;
  /** Accessible label. When omitted, icon is treated as decorative. */
  'aria-label'?: string;
  id?: string;
  'data-testid'?: string;
}

export const Icon: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, IconProps>(
  function Icon({ name, size = 'lg', fontClass, 'aria-label': ariaLabel, id, 'data-testid': dataTestId }, ref): React.JSX.Element {
    const contextFontClass = useContext(IconFontContext);
    const IconComponent = iconRegistry[name as IconName];
    const isDecorative = !ariaLabel;
    const px = iconSizeMap[size];

    const resolvedFontClass = fontClass ?? contextFontClass;

    // Font-based icon: name not in registry, fontClass available
    if (!IconComponent && resolvedFontClass) {
      return (
        <span
          ref={ref}
          id={id}
          data-testid={dataTestId}
          role={isDecorative ? undefined : 'img'}
          aria-hidden={isDecorative || undefined}
          aria-label={ariaLabel}
          className={resolvedFontClass}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: px,
            minHeight: px,
            fontSize: px,
            lineHeight: 1,
            color: 'inherit',
            fontStyle: 'normal',
          }}
        >
          {name}
        </span>
      );
    }

    // SVG registry icon (default path)
    return (
      <span
        ref={ref}
        id={id}
        data-testid={dataTestId}
        role={isDecorative ? undefined : 'img'}
        aria-hidden={isDecorative || undefined}
        aria-label={ariaLabel}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: px,
          height: px,
          lineHeight: 1,
          color: 'inherit',
        }}
      >
        {IconComponent ? <IconComponent size={px} /> : null}
      </span>
    );
  }
);
