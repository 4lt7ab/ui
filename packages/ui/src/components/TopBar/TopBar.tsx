import { forwardRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { HTMLAttributes, ReactNode, CSSProperties, KeyboardEvent } from 'react';

// ---------------------------------------------------------------------------
// Nav item config
// ---------------------------------------------------------------------------

/** A single navigation entry in the TopBar. */
export interface NavItem {
  /** Display label. */
  label: string;
  /** Route path — matched against `activePath` to determine active state. */
  path: string;
  /** Optional leading icon (any ReactNode). */
  icon?: ReactNode;
}

// ---------------------------------------------------------------------------
// TopBar props
// ---------------------------------------------------------------------------

/** App-level navigation header with title, nav items, and trailing slot. */
export interface TopBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Logo or app title — rendered in the leading slot. */
  title: ReactNode;
  /** Navigation items displayed as horizontal buttons. */
  items?: NavItem[];
  /** The currently active path. Compared against each item's `path`. */
  activePath?: string;
  /** Called when a nav item is clicked. Consumer handles routing. */
  onNavigate?: (path: string) => void;
  /** Content rendered in the trailing slot (e.g. ThemePicker, avatar). */
  trailing?: ReactNode;
  /** Sticks to the top of the viewport on scroll.
   * @default false
   */
  sticky?: boolean;
}

// ---------------------------------------------------------------------------
// Injected CSS (hover + active underline pseudo-element)
// ---------------------------------------------------------------------------

const TOPBAR_STYLES_ID = '4lt7ab-topbar';
const TOPBAR_CSS = `
  .topbar-nav-item {
    position: relative;
  }
  .topbar-nav-item::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: transparent;
    transition: background 0.15s ease;
  }
  .topbar-nav-item:hover::after {
    background: ${t.colorBorder};
  }
  .topbar-nav-item[data-active]::after {
    background: ${t.colorActionPrimary};
  }
  .topbar-nav-item:hover {
    color: ${t.colorText};
  }
`;

// ---------------------------------------------------------------------------
// TopBar
// ---------------------------------------------------------------------------

export const TopBar: React.ForwardRefExoticComponent<Omit<TopBarProps, 'ref'> & React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, TopBarProps>(
  function TopBar({
    title,
    items = [],
    activePath,
    onNavigate,
    trailing,
    sticky = false,
    style,
    ...props
  }, ref): React.JSX.Element {
    useInjectStyles(TOPBAR_STYLES_ID, TOPBAR_CSS);

    const stickyStyle: CSSProperties = sticky
      ? { position: 'sticky', top: 0, zIndex: 100 }
      : {};

    return (
      <header
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 48,
          padding: `0 ${t.spaceMd}`,
          background: t.colorSurface,
          borderBottom: `1px solid ${t.colorBorder}`,
          fontFamily: t.fontSans,
          ...stickyStyle,
          ...style,
        }}
        {...props}
      >
        {/* Leading — title / logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: Number(t.fontWeightBold),
            fontSize: t.fontSizeSm,
            color: t.colorText,
            marginRight: t.spaceLg,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {title}
        </div>

        {/* Nav */}
        {items.length > 0 && (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: t.spaceXs,
              height: '100%',
              flex: 1,
              minWidth: 0,
            }}
          >
            {items.map((item) => {
              const isActive = activePath === item.path;

              const handleClick = (): void => {
                onNavigate?.(item.path);
              };

              const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>): void => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate?.(item.path);
                }
              };

              return (
                <button
                  key={item.path}
                  type="button"
                  className="topbar-nav-item"
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                  aria-current={isActive ? 'page' : undefined}
                  data-active={isActive || undefined}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    height: '100%',
                    padding: `0 ${t.spaceSm}`,
                    border: 'none',
                    background: 'transparent',
                    color: isActive ? t.colorActionPrimary : t.colorTextMuted,
                    fontSize: t.fontSizeSm,
                    fontFamily: t.fontSans,
                    fontWeight: isActive ? 600 : 400,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s ease',
                    boxSizing: 'border-box',
                  }}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}

        {/* Trailing slot */}
        {trailing && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: t.spaceSm,
              marginLeft: 'auto',
              flexShrink: 0,
            }}
          >
            {trailing}
          </div>
        )}
      </header>
    );
  }
);
