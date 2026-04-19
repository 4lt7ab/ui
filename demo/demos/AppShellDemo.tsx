import { useState } from 'react';
import {
  AppShell,
  TopBar,
  IconButton,
  Icon,
  Button,
  Stack,
  Badge,
  Surface,
  useAppShellContext,
} from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  {
    name: 'AppShell.Root',
    type: '{ sidebarCollapsed?, defaultSidebarCollapsed?, onSidebarCollapsedChange?, rightPanelOpen?, defaultRightPanelOpen?, onRightPanelOpenChange?, children }',
    description:
      'CSS grid envelope. Owns sidebar-collapsed and right-panel-open state (full controlled/uncontrolled parity on both). JSX order of sub-parts is not significant; DOM order is locked to TopBar → Sidebar → Main → RightPanel.',
  },
  {
    name: 'AppShell.TopBar',
    type: '{ sticky?, aria-label?, children }',
    description:
      'Mounts a <TopBar.Root> in the top grid row. Accepts the same children as TopBar.Root directly — Leading / Nav / Link / Trailing.',
  },
  {
    name: 'AppShell.Sidebar',
    type: "{ 'aria-label'?: string; children: ReactNode | (({ collapsed }) => ReactNode) }",
    description:
      'Left <nav> landmark. Width comes from the sizeSidebarExpanded / sizeSidebarCollapsed tokens. Render-prop child receives the current collapsed flag so you can swap layouts without reading context yourself.',
  },
  {
    name: 'AppShell.SidebarSection',
    type: '{ label?: string; children }',
    description:
      'Groups a run of nav rows under an optional uppercase heading. When the sidebar is collapsed the label is visually hidden (still in the a11y tree) so the rail reads as a single region.',
  },
  {
    name: 'AppShell.Main',
    type: "{ 'aria-label'?: string; 'aria-labelledby'?: string; children }",
    description: "Scrolling <main> landmark. Exactly one per AppShell.",
  },
  {
    name: 'AppShell.RightPanel',
    type: "{ 'aria-label'?: string; children }",
    description:
      'Optional right-side <aside>. Width comes from the sizeRightPanelDefault token. Visibility is driven by Root\'s rightPanelOpen — closed = hidden attr + aria-hidden.',
  },
  {
    name: 'useAppShellContext()',
    type: '() => { sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen }',
    description:
      'Read shell state from any descendant. Throws outside <AppShell.Root>. Use this to build a sidebar-toggle button inside AppShell.TopBar.',
  },
];

// Canonical 6-line recipe for a sidebar toggle button, rendered inside
// AppShell.TopBar. The Sidebar reacts via context automatically.
function SidebarToggle(): React.JSX.Element {
  const { sidebarCollapsed, setSidebarCollapsed } = useAppShellContext();
  return (
    <IconButton
      icon="menu"
      aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-expanded={!sidebarCollapsed}
      onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
    />
  );
}

function RightPanelToggle(): React.JSX.Element {
  const { rightPanelOpen, setRightPanelOpen } = useAppShellContext();
  return (
    <Button
      variant="secondary"
      onClick={() => setRightPanelOpen(!rightPanelOpen)}
    >
      {rightPanelOpen ? 'Hide context' : 'Show context'}
    </Button>
  );
}

const NAV = [
  { key: 'dashboard', label: 'Dashboard', icon: 'filter' as const },
  { key: 'projects', label: 'Projects', icon: 'edit' as const },
  { key: 'tasks', label: 'Tasks', icon: 'check' as const },
  { key: 'settings', label: 'Settings', icon: 'settings' as const },
];

function SidebarLink({
  label,
  icon,
  active,
  collapsed,
  onClick,
}: {
  label: string;
  icon: 'filter' | 'edit' | 'check' | 'settings';
  active: boolean;
  collapsed: boolean;
  onClick(): void;
}): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        padding: '0.5rem var(--space-md)',
        fontSize: 'var(--font-size-sm)',
        fontFamily: 'var(--font-sans)',
        color: active ? 'var(--color-text)' : 'var(--color-text-muted)',
        background: active ? 'var(--color-surface-raised)' : 'transparent',
        whiteSpace: 'nowrap',
        justifyContent: collapsed ? 'center' : 'flex-start',
      }}
    >
      <Icon name={icon} size="sm" />
      {!collapsed && <span>{label}</span>}
    </button>
  );
}

export function AppShellDemo(): React.JSX.Element {
  const [route, setRoute] = useState<string>('dashboard');

  return (
    <DocBlock props={props}>
      <PropDemo
        name="Full shell: TopBar + Sidebar + Main + RightPanel"
        description="The classic app layout. Sidebar uses the render-prop form so collapsed-mode swaps to icon-only rows. TopBar embeds a menu button wired to useAppShellContext."
      >
        <div style={{ height: '32rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <AppShell.Root defaultSidebarCollapsed={false} defaultRightPanelOpen={true}>
            <AppShell.TopBar aria-label="App header">
              <TopBar.Leading>
                <Stack direction="horizontal" gap="sm" align="center">
                  <SidebarToggle />
                  <span>ProjectHub</span>
                </Stack>
              </TopBar.Leading>
              <TopBar.Trailing>
                <RightPanelToggle />
              </TopBar.Trailing>
            </AppShell.TopBar>

            <AppShell.Sidebar>
              {({ collapsed }) => (
                <>
                  <AppShell.SidebarSection label="Workspace">
                    {NAV.map((n) => (
                      <SidebarLink
                        key={n.key}
                        label={n.label}
                        icon={n.icon}
                        active={n.key === route}
                        collapsed={collapsed}
                        onClick={() => setRoute(n.key)}
                      />
                    ))}
                  </AppShell.SidebarSection>
                </>
              )}
            </AppShell.Sidebar>

            <AppShell.Main>
              <div style={{ padding: 'var(--space-lg)' }}>
                <Stack gap="md">
                  <h1 style={{ margin: 0, fontSize: 'var(--font-size-xl)' }}>
                    {NAV.find((n) => n.key === route)?.label}
                  </h1>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
                    Main content scrolls independently of the shell. Collapse the sidebar with the menu button and the grid reflows without re-rendering the main region.
                  </p>
                  <Surface level="raised" padding="md">
                    <Stack gap="sm">
                      <span style={{ fontWeight: 600 }}>Keyboard focus flow</span>
                      <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                        TopBar → Sidebar → Main → RightPanel — regardless of the order you wrote the JSX in.
                      </span>
                    </Stack>
                  </Surface>
                </Stack>
              </div>
            </AppShell.Main>

            <AppShell.RightPanel aria-label="Details">
              <div style={{ padding: 'var(--space-md)' }}>
                <Stack gap="sm">
                  <span style={{ fontWeight: 600 }}>Context</span>
                  <Badge variant="info">beta</Badge>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    Hide me with the top-right button — the main region resizes.
                  </span>
                </Stack>
              </div>
            </AppShell.RightPanel>
          </AppShell.Root>
        </div>
      </PropDemo>

      <PropDemo
        name="Minimal shell — Main only"
        description="Every sub-part except Main is optional. The grid collapses missing rows and columns."
      >
        <div style={{ height: '12rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <AppShell.Root>
            <AppShell.Main>
              <div style={{ padding: 'var(--space-lg)' }}>
                <Stack gap="sm">
                  <h1 style={{ margin: 0, fontSize: 'var(--font-size-lg)' }}>Just a main region</h1>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
                    Useful for screens that don't need the chrome — onboarding, sign-in, error pages.
                  </p>
                </Stack>
              </div>
            </AppShell.Main>
          </AppShell.Root>
        </div>
      </PropDemo>

      <PropDemo
        name="Sidebar + Main (no RightPanel)"
        description="Two-column layout. Drop the RightPanel and the grid re-flows."
      >
        <div style={{ height: '14rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <AppShell.Root>
            <AppShell.TopBar aria-label="Two col">
              <TopBar.Leading>Docs</TopBar.Leading>
            </AppShell.TopBar>
            <AppShell.Sidebar>
              <AppShell.SidebarSection label="Guides">
                <a href="#" style={{ padding: 'var(--space-xs) var(--space-md)', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Getting started</a>
                <a href="#" style={{ padding: 'var(--space-xs) var(--space-md)', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Tokens</a>
                <a href="#" style={{ padding: 'var(--space-xs) var(--space-md)', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Components</a>
              </AppShell.SidebarSection>
            </AppShell.Sidebar>
            <AppShell.Main>
              <div style={{ padding: 'var(--space-lg)' }}>
                <h1 style={{ margin: 0, fontSize: 'var(--font-size-lg)' }}>Documentation</h1>
              </div>
            </AppShell.Main>
          </AppShell.Root>
        </div>
      </PropDemo>
    </DocBlock>
  );
}
