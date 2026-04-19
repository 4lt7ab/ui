import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import type { BaseComponentProps } from '../../../types';
import { TopBarRoot, type TopBarRootProps } from '../TopBar';

// ---------------------------------------------------------------------------
// Compound context
// ---------------------------------------------------------------------------
//
// AppShell is the viewport envelope every app assembles by hand today.
// Root owns a CSS grid with slots for `<TopBar>` + `<Sidebar>` + `<Main>` +
// `<RightPanel>`, plus two pieces of coordinating state:
//
//   - `sidebarCollapsed` (controlled / uncontrolled) — Sidebar reads it to
//     switch between expanded (16rem) and collapsed (3.5rem) widths; peer
//     sub-parts (a TopBar hamburger, a Sidebar render-prop) read it through
//     `useAppShellContext` to render collapsed-aware UI.
//   - `rightPanelOpen` (controlled / uncontrolled) — RightPanel reads it to
//     hide itself + collapse its grid column when the consumer closes it.
//
// JSX order of sub-parts is **not** significant: Root walks children by
// component identity and places each in a fixed grid area
// (TopBar → Sidebar → Main → RightPanel). DOM order is locked to match
// keyboard focus flow regardless of source-code ordering — documented in the
// layout-organism design doc as the one intentional deviation from "JSX
// order is visual order" for this package.
//
// Per the compound-component ADR (`01KPE1EJPMPZ4DPXYMK624KTG3`):
// dot-notation namespace, single context with orphan-check, controlled/
// uncontrolled parity on both collapsible regions, no `asChild` on shell
// containers (N>1 DOM elements), `data-state` vocabulary for collapsible
// regions.

interface AppShellContextValue {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (next: boolean) => void;
  rightPanelOpen: boolean;
  setRightPanelOpen: (next: boolean) => void;
}

const AppShellContext = createContext<AppShellContextValue | null>(null);

function useAppShellContextInternal(component: string): AppShellContextValue {
  const ctx = useContext(AppShellContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <AppShell.${component}> must be rendered inside <AppShell.Root>.`,
    );
  }
  return ctx;
}

/**
 * Read the `<AppShell.Root>` context from a consumer component. Use this to
 * build a sidebar-collapse toggle inside `<AppShell.TopBar>` — the canonical
 * six-line recipe is:
 *
 * ```tsx
 * function SidebarToggle(): React.JSX.Element {
 *   const { sidebarCollapsed, setSidebarCollapsed } = useAppShellContext();
 *   return (
 *     <IconButton
 *       icon="menu"
 *       aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
 *       aria-expanded={!sidebarCollapsed}
 *       onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
 *     />
 *   );
 * }
 * ```
 *
 * Throws if called outside `<AppShell.Root>`.
 */
export function useAppShellContext(): AppShellContextValue {
  return useAppShellContextInternal('<consumer>');
}

// ---------------------------------------------------------------------------
// Controlled / uncontrolled helper (ADR §4)
// ---------------------------------------------------------------------------

function useControllableBoolean(params: {
  label: string;
  controlled: boolean | undefined;
  defaultValue: boolean;
  onChange: ((next: boolean) => void) | undefined;
}): [boolean, (next: boolean) => void] {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? (controlled as boolean) : uncontrolled;

  const wasControlled = useRef(isControlled);
  useEffect(() => {
    if (wasControlled.current !== isControlled) {
      // eslint-disable-next-line no-console
      console.warn(
        `<AppShell.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`,
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);

  const setValue = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  return [value, setValue];
}

// ---------------------------------------------------------------------------
// Sub-part markers — identity references used by Root to bucket children
// into grid areas. Declared as component constants so `React.Children.map`
// can match on `element.type`.
// ---------------------------------------------------------------------------
//
// The component functions themselves are defined below; we reference them by
// value after declaration. The marker approach lets consumers write JSX in
// any order while still getting a deterministic DOM order (and therefore
// predictable keyboard focus flow).

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for {@link AppShellRoot}. */
export interface AppShellRootProps extends BaseComponentProps {
  /** Controlled sidebar collapsed state. When set, `<AppShell.Sidebar>` reads
   * this value and ignores `defaultSidebarCollapsed`. Pair with
   * `onSidebarCollapsedChange` to own the state yourself. */
  sidebarCollapsed?: boolean;
  /** Uncontrolled initial sidebar collapsed state. Only used when
   * `sidebarCollapsed` is not provided.
   * @default false
   */
  defaultSidebarCollapsed?: boolean;
  /** Fires when the sidebar collapses or expands — either via consumer
   * code calling `setSidebarCollapsed` (from `useAppShellContext`) or from
   * a peer sub-part. */
  onSidebarCollapsedChange?: (next: boolean) => void;
  /** Controlled right-panel open state. When set, `<AppShell.RightPanel>`
   * reads this value and ignores `defaultRightPanelOpen`. */
  rightPanelOpen?: boolean;
  /** Uncontrolled initial right-panel open state. Only used when
   * `rightPanelOpen` is not provided.
   * @default true
   */
  defaultRightPanelOpen?: boolean;
  /** Fires when the right panel opens or closes. */
  onRightPanelOpenChange?: (next: boolean) => void;
  /** Children — any combination of `<AppShell.TopBar>`, `<AppShell.Sidebar>`,
   * `<AppShell.Main>`, `<AppShell.RightPanel>`. JSX order is not significant;
   * grid placement is determined by component identity. */
  children?: ReactNode;
}

/**
 * Pulls AppShell.* children out of the consumer's JSX and returns each slot
 * separately. Unknown / intermediate children (strings, comments, arbitrary
 * wrappers) are silently ignored — the shell only renders library parts.
 */
function bucketChildren(children: ReactNode): {
  topBar: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
  rightPanel: ReactNode;
} {
  let topBar: ReactNode = null;
  let sidebar: ReactNode = null;
  let main: ReactNode = null;
  let rightPanel: ReactNode = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    // Reference equality on component type. Each sub-part is declared as a
    // module-level function (or forwardRef'd object) so the identity is
    // stable.
    if (child.type === AppShellTopBar) topBar = child;
    else if (child.type === AppShellSidebar) sidebar = child;
    else if (child.type === AppShellMain) main = child;
    else if (child.type === AppShellRightPanel) rightPanel = child;
  });

  return { topBar, sidebar, main, rightPanel };
}

export const AppShellRoot: React.ForwardRefExoticComponent<
  Omit<AppShellRootProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, AppShellRootProps>(function AppShellRoot(
  {
    sidebarCollapsed: sidebarCollapsedProp,
    defaultSidebarCollapsed = false,
    onSidebarCollapsedChange,
    rightPanelOpen: rightPanelOpenProp,
    defaultRightPanelOpen = true,
    onRightPanelOpenChange,
    children,
    ...rest
  },
  ref,
): React.JSX.Element {
  const [sidebarCollapsed, setSidebarCollapsed] = useControllableBoolean({
    label: 'sidebarCollapsed',
    controlled: sidebarCollapsedProp,
    defaultValue: defaultSidebarCollapsed,
    onChange: onSidebarCollapsedChange,
  });

  const [rightPanelOpen, setRightPanelOpen] = useControllableBoolean({
    label: 'rightPanelOpen',
    controlled: rightPanelOpenProp,
    defaultValue: defaultRightPanelOpen,
    onChange: onRightPanelOpenChange,
  });

  const value = useMemo<AppShellContextValue>(
    () => ({ sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen }),
    [sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen],
  );

  const { topBar, sidebar, main, rightPanel } = bucketChildren(children);
  const hasTopBar = topBar !== null;
  const hasSidebar = sidebar !== null;
  const hasRightPanel = rightPanel !== null && rightPanelOpen;

  // Build the grid-template-columns string. Missing columns collapse to zero
  // width so the remaining slots fill the viewport naturally.
  const sidebarWidth = sidebarCollapsed ? t.sizeSidebarCollapsed : t.sizeSidebarExpanded;
  const gridTemplateColumns = [
    hasSidebar ? sidebarWidth : null,
    '1fr',
    hasRightPanel ? t.sizeRightPanelDefault : null,
  ]
    .filter(Boolean)
    .join(' ');

  // Grid rows: optional topbar row + main row. TopBar's height is the
  // existing `space2xl` token (locked by the TopBar primitive).
  const gridTemplateRows = hasTopBar ? `${t.space2xl} 1fr` : '1fr';

  const gridAreas = (() => {
    // Build the named grid-template-areas string per slot combination.
    // Columns: sidebar? main rightPanel?
    const topCols: string[] = [];
    const mainCols: string[] = [];
    if (hasSidebar) {
      topCols.push('topbar');
      mainCols.push('sidebar');
    }
    topCols.push('topbar');
    mainCols.push('main');
    if (hasRightPanel) {
      topCols.push('topbar');
      mainCols.push('rightpanel');
    }
    const rows: string[] = [];
    if (hasTopBar) rows.push(`"${topCols.join(' ')}"`);
    rows.push(`"${mainCols.join(' ')}"`);
    return rows.join(' ');
  })();

  return (
    <AppShellContext.Provider value={value}>
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        data-sidebar-state={sidebarCollapsed ? 'collapsed' : 'expanded'}
        data-right-panel-state={rightPanelOpen ? 'open' : 'closed'}
        style={{
          display: 'grid',
          gridTemplateColumns,
          gridTemplateRows,
          gridTemplateAreas: gridAreas,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          fontFamily: t.fontSans,
          color: t.colorText,
          boxSizing: 'border-box',
        }}
      >
        {/* DOM order is fixed: TopBar → Sidebar → Main → RightPanel.
            Keyboard focus flows in this order regardless of JSX ordering. */}
        {topBar}
        {sidebar}
        {main}
        {rightPanel}
      </div>
    </AppShellContext.Provider>
  );
});

// ---------------------------------------------------------------------------
// TopBar — forwards to the existing TopBar.Root compound
// ---------------------------------------------------------------------------

/** Props for {@link AppShellTopBar}. Mirrors `TopBarRootProps` exactly — the
 * shell passes them straight through to `<TopBar.Root>` and anchors the
 * result into the top grid row. */
export type AppShellTopBarProps = TopBarRootProps;

export function AppShellTopBar(props: AppShellTopBarProps): React.JSX.Element {
  useAppShellContextInternal('TopBar');
  // Anchor TopBar into the named grid area. We can't pass `style` to
  // TopBarRoot (its own `style` is locked for the flex layout + sticky
  // behavior), so we wrap in a positioning `<div>` that owns the grid
  // placement only. The TopBar itself fills this wrapper (100% height/width).
  return (
    <div style={{ gridArea: 'topbar', minWidth: 0 }}>
      <TopBarRoot {...props} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------

/** Props for {@link AppShellSidebar}. */
export interface AppShellSidebarProps {
  /** Accessible label for the `<nav>` landmark.
   * @default 'Sidebar'
   */
  'aria-label'?: string;
  /** Sidebar content. Pass a ReactNode for a static sidebar, or a function
   * that receives `{ collapsed }` to render different layouts in the
   * expanded vs collapsed state — e.g. hide labels and show icons only
   * when collapsed. */
  children?: ReactNode | ((state: { collapsed: boolean }) => ReactNode);
}

export function AppShellSidebar({
  'aria-label': ariaLabel = 'Sidebar',
  children,
}: AppShellSidebarProps): React.JSX.Element {
  const { sidebarCollapsed } = useAppShellContextInternal('Sidebar');
  const content =
    typeof children === 'function'
      ? (children as (s: { collapsed: boolean }) => ReactNode)({ collapsed: sidebarCollapsed })
      : children;

  return (
    <nav
      aria-label={ariaLabel}
      data-state={sidebarCollapsed ? 'collapsed' : 'expanded'}
      style={{
        gridArea: 'sidebar',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
        background: t.colorSurfacePanel,
        borderRight: `${t.borderWidthDefault} solid ${t.colorBorder}`,
        transition: `width ${t.transitionBase}`,
        minWidth: 0,
      }}
    >
      {content}
    </nav>
  );
}

// ---------------------------------------------------------------------------
// SidebarSection — grouped list of links with an optional heading
// ---------------------------------------------------------------------------

/** Props for {@link AppShellSidebarSection}. */
export interface AppShellSidebarSectionProps {
  /** Optional uppercase section label rendered above the items. When the
   * sidebar is collapsed, the label is visually hidden (still reachable to
   * screen readers) so the item rail reads as a single nav region. */
  label?: string;
  /** Section contents — typically the consumer's own link rows. */
  children?: ReactNode;
}

export function AppShellSidebarSection({
  label,
  children,
}: AppShellSidebarSectionProps): React.JSX.Element {
  const { sidebarCollapsed } = useAppShellContextInternal('SidebarSection');

  const labelStyle: CSSProperties = sidebarCollapsed
    ? {
        // Visually hidden but still announced by assistive tech, so the
        // section keeps its semantic grouping in the collapsed rail.
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }
    : {
        display: 'block',
        padding: `${t.spaceSm} ${t.spaceMd} ${t.spaceXs}`,
        fontSize: t.fontSizeXs,
        fontWeight: t.fontWeightSemibold,
        color: t.colorTextMuted,
        textTransform: 'uppercase',
        letterSpacing: t.letterSpacingWide,
      };

  return (
    <div
      data-state={sidebarCollapsed ? 'collapsed' : 'expanded'}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {label !== undefined && <span style={labelStyle}>{label}</span>}
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/** Props for {@link AppShellMain}. */
export interface AppShellMainProps extends BaseComponentProps {
  /** Accessible label for the `<main>` landmark. Rarely needed — a page
   * typically has a visible heading inside Main that screen readers use. */
  'aria-label'?: string;
  /** Pair with a heading's generated id to label the region. */
  'aria-labelledby'?: string;
  children?: ReactNode;
}

export function AppShellMain({
  children,
  ...rest
}: AppShellMainProps): React.JSX.Element {
  useAppShellContextInternal('Main');
  return (
    <main
      id={rest.id}
      data-testid={rest['data-testid']}
      aria-label={rest['aria-label']}
      aria-labelledby={rest['aria-labelledby']}
      style={{
        gridArea: 'main',
        overflow: 'auto',
        minWidth: 0,
        minHeight: 0,
        background: t.colorSurfacePage,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </main>
  );
}

// ---------------------------------------------------------------------------
// RightPanel
// ---------------------------------------------------------------------------

/** Props for {@link AppShellRightPanel}. */
export interface AppShellRightPanelProps {
  /** Accessible label for the `<aside>` landmark.
   * @default 'Context panel'
   */
  'aria-label'?: string;
  children?: ReactNode;
}

export function AppShellRightPanel({
  'aria-label': ariaLabel = 'Context panel',
  children,
}: AppShellRightPanelProps): React.JSX.Element {
  const { rightPanelOpen } = useAppShellContextInternal('RightPanel');

  // When closed, the panel is removed from the grid (via the Root's column
  // template) but we still render an `aside` so consumers can transition via
  // `data-state` if they want. Hide from assistive tech when closed.
  return (
    <aside
      aria-label={ariaLabel}
      aria-hidden={!rightPanelOpen || undefined}
      data-state={rightPanelOpen ? 'open' : 'closed'}
      hidden={!rightPanelOpen}
      style={{
        gridArea: 'rightpanel',
        display: rightPanelOpen ? 'flex' : 'none',
        flexDirection: 'column',
        overflowY: 'auto',
        background: t.colorSurfacePanel,
        borderLeft: `${t.borderWidthDefault} solid ${t.colorBorder}`,
        minWidth: 0,
      }}
    >
      {children}
    </aside>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * App viewport envelope — a CSS grid of `TopBar` + `Sidebar` + `Main` +
 * optional `RightPanel`. Replaces hand-assembled layouts and makes
 * sidebar-collapse a library decision instead of a per-consumer
 * re-implementation.
 *
 * JSX order of sub-parts is not significant; grid placement is determined
 * by component identity, and DOM order is locked to `TopBar → Sidebar →
 * Main → RightPanel` so keyboard focus flow stays predictable regardless
 * of how the consumer writes the tree.
 *
 * Both `sidebarCollapsed` and `rightPanelOpen` follow the standard
 * controlled/uncontrolled contract (see the compound-component ADR §4).
 * Responsive collapse (e.g. collapse below 900px) is intentionally not
 * shipped — wire `useMediaQuery` into the `sidebarCollapsed` prop yourself.
 *
 * @example
 * ```tsx
 * <AppShell.Root defaultSidebarCollapsed={false}>
 *   <AppShell.TopBar>
 *     <TopBar.Leading>My App</TopBar.Leading>
 *   </AppShell.TopBar>
 *   <AppShell.Sidebar>
 *     <AppShell.SidebarSection label="Workspace">
 *       <a href="/inbox">Inbox</a>
 *       <a href="/projects">Projects</a>
 *     </AppShell.SidebarSection>
 *   </AppShell.Sidebar>
 *   <AppShell.Main>
 *     <h1>Dashboard</h1>
 *   </AppShell.Main>
 *   <AppShell.RightPanel>Context</AppShell.RightPanel>
 * </AppShell.Root>
 * ```
 */
export const AppShell = {
  Root: AppShellRoot,
  TopBar: AppShellTopBar,
  Sidebar: AppShellSidebar,
  SidebarSection: AppShellSidebarSection,
  Main: AppShellMain,
  RightPanel: AppShellRightPanel,
};
