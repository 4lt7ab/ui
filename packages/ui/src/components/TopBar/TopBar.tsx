import { createContext, forwardRef, useContext } from 'react';
import { semantic as t, useInjectStyles, Slot } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import type { BaseComponentProps } from '../../types';

// ---------------------------------------------------------------------------
// Compound context — orphan-check only; no state is shared.
// ---------------------------------------------------------------------------

const TopBarContext = createContext<true | null>(null);

function useTopBarContext(component: string): void {
  const ctx = useContext(TopBarContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <TopBar.${component}> must be rendered inside <TopBar.Root>.`,
    );
  }
}

// ---------------------------------------------------------------------------
// Injected CSS (hover + active underline; data-active wins)
// ---------------------------------------------------------------------------

const TOPBAR_STYLES_ID = '4lt7ab-topbar-v2';
const TOPBAR_CSS = `
  [data-topbar-link] {
    position: relative;
  }
  [data-topbar-link]::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: transparent;
    transition: background ${t.transitionBase};
  }
  [data-topbar-link]:hover::after {
    background: ${t.colorBorder};
  }
  [data-topbar-link][data-active]::after {
    background: ${t.colorActionPrimary};
  }
  [data-topbar-link]:hover {
    color: ${t.colorText};
  }
`;

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for {@link TopBarRoot}. */
export interface TopBarRootProps extends BaseComponentProps {
  /** Accessible label for the header landmark. */
  'aria-label'?: string;
  /** Children — typically `<TopBar.Leading>`, `<TopBar.Nav>`, `<TopBar.Trailing>`. */
  children?: ReactNode;
  /** Sticks to the top of the viewport on scroll.
   * @default false
   */
  sticky?: boolean;
}

export const TopBarRoot: React.ForwardRefExoticComponent<
  Omit<TopBarRootProps, 'ref'> & React.RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, TopBarRootProps>(
  function TopBarRoot({ children, sticky = false, ...rest }, ref): React.JSX.Element {
    useInjectStyles(TOPBAR_STYLES_ID, TOPBAR_CSS);

    const stickyStyle: CSSProperties = sticky
      ? { position: 'sticky', top: 0, zIndex: t.zIndexSticky }
      : {};

    return (
      <TopBarContext.Provider value={true}>
        <header
          ref={ref}
          id={rest.id}
          data-testid={rest['data-testid']}
          aria-label={rest['aria-label']}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: t.space2xl,
            padding: `0 ${t.spaceMd}`,
            background: t.colorSurface,
            borderBottom: `${t.borderWidthDefault} solid ${t.colorBorder}`,
            fontFamily: t.fontSans,
            ...stickyStyle,
          }}
        >
          {children}
        </header>
      </TopBarContext.Provider>
    );
  },
);

// ---------------------------------------------------------------------------
// Leading (logo / title slot)
// ---------------------------------------------------------------------------

export interface TopBarLeadingProps {
  children?: ReactNode;
}

export function TopBarLeading({ children }: TopBarLeadingProps): React.JSX.Element {
  useTopBarContext('Leading');
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: t.fontWeightBold,
        fontSize: t.fontSizeSm,
        color: t.colorText,
        marginRight: t.spaceLg,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

export interface TopBarNavProps {
  children?: ReactNode;
  /** Accessible label for the nav region. @default 'Primary' */
  'aria-label'?: string;
}

export function TopBarNav({ children, 'aria-label': ariaLabel = 'Primary' }: TopBarNavProps): React.JSX.Element {
  useTopBarContext('Nav');
  return (
    <nav
      aria-label={ariaLabel}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: t.spaceXs,
        height: '100%',
        flex: 1,
        minWidth: 0,
      }}
    >
      {children}
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Link — renders a <button> by default, or clones an element via asChild
// ---------------------------------------------------------------------------

export interface TopBarLinkProps {
  /** Marks this link as the active route. Applies accent color + underline + aria-current="page". */
  active?: boolean;
  /**
   * Render as the single child element instead of a `<button>`. Merges
   * the link's style + data-attrs + ref into the child — plug in your
   * router's Link, a plain `<a>`, or anything that can receive props.
   * @default false
   */
  asChild?: boolean;
  /** Called when the link is clicked (when not asChild; consumer's element handles its own events otherwise). */
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: ReactNode;
}

export const TopBarLink: React.ForwardRefExoticComponent<
  TopBarLinkProps & React.RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, TopBarLinkProps>(function TopBarLink(
  { active = false, asChild = false, onClick, children },
  ref,
): React.JSX.Element {
  useTopBarContext('Link');

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: t.spaceXs,
    height: '100%',
    padding: `0 ${t.spaceSm}`,
    border: 'none',
    background: 'transparent',
    color: active ? t.colorActionPrimary : t.colorTextMuted,
    fontSize: t.fontSizeSm,
    fontFamily: t.fontSans,
    fontWeight: active ? t.fontWeightSemibold : t.fontWeightNormal,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: `color ${t.transitionBase}`,
    boxSizing: 'border-box',
  };

  const commonProps = {
    'data-topbar-link': '',
    'data-active': active || undefined,
    'aria-current': active ? ('page' as const) : undefined,
    onClick,
    style,
  };

  if (asChild) {
    return (
      <Slot ref={ref} {...commonProps}>
        {children as React.ReactElement}
      </Slot>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type="button" {...commonProps}>
      {children}
    </button>
  );
});

// ---------------------------------------------------------------------------
// Trailing
// ---------------------------------------------------------------------------

export interface TopBarTrailingProps {
  children?: ReactNode;
}

export function TopBarTrailing({ children }: TopBarTrailingProps): React.JSX.Element {
  useTopBarContext('Trailing');
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: t.spaceSm,
        marginLeft: 'auto',
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Compound app-level navigation header. Consumer composes `<TopBar.Root>`
 * with `<TopBar.Leading>`, `<TopBar.Nav>` + `<TopBar.Link>`, and
 * `<TopBar.Trailing>`. Links support `asChild` for router integration —
 * routing is entirely the consumer's concern.
 *
 * @example
 * ```tsx
 * <TopBar.Root aria-label="Main" sticky>
 *   <TopBar.Leading>My App</TopBar.Leading>
 *   <TopBar.Nav>
 *     <TopBar.Link asChild active>
 *       <a href="/home">Home</a>
 *     </TopBar.Link>
 *     <TopBar.Link asChild>
 *       <a href="/projects">Projects</a>
 *     </TopBar.Link>
 *   </TopBar.Nav>
 *   <TopBar.Trailing>
 *     <ThemePicker />
 *   </TopBar.Trailing>
 * </TopBar.Root>
 * ```
 */
export const TopBar = {
  Root: TopBarRoot,
  Leading: TopBarLeading,
  Nav: TopBarNav,
  Link: TopBarLink,
  Trailing: TopBarTrailing,
};
