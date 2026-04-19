import { useState } from 'react';
import {
  AppShell,
  Button,
  IconButton,
  Stack,
  TopBar,
  useAppShellContext,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// AppShell mini showcase — live example for 04-layout.md
// ---------------------------------------------------------------------------
//
// The docs site itself is an AppShell, so the live showcase intentionally
// stays *small* — a constrained 420px-tall playground rendered inside the
// `<LiveExample>` card so it doesn't wreck the surrounding page layout.
// `AppShell.Root` normally sets `minHeight: 100vh`; we wrap it in a
// fixed-height frame that clips the shell to its own bounds.
//
// Exercised behaviors:
//
//   - Sidebar collapse via `useAppShellContext()` from a TopBar-side toggle
//     (the canonical recipe documented on `useAppShellContext`).
//   - Right-panel open/close driven by a button inside Main — shows how the
//     grid column collapses away when the panel closes.
//   - The sidebar's render-prop variant (`children` as a function of
//     `{ collapsed }`) lets the sidebar swap between labeled rows and an
//     icon rail when collapsed.

function SidebarToggle(): React.JSX.Element {
  const { sidebarCollapsed, setSidebarCollapsed } = useAppShellContext();
  return (
    <IconButton
      icon="menu"
      size="sm"
      aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-expanded={!sidebarCollapsed}
      onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
    />
  );
}

function RightPanelToggle(): React.JSX.Element {
  const { rightPanelOpen, setRightPanelOpen } = useAppShellContext();
  return (
    <Button variant="secondary" size="sm" onClick={() => setRightPanelOpen(!rightPanelOpen)}>
      {rightPanelOpen ? 'Close panel' : 'Open panel'}
    </Button>
  );
}

const NAV_ITEMS = [
  { key: 'inbox', label: 'Inbox', icon: 'inbox' },
  { key: 'projects', label: 'Projects', icon: 'folder' },
  { key: 'calendar', label: 'Calendar', icon: 'calendar_today' },
  { key: 'reports', label: 'Reports', icon: 'bar_chart' },
];

export function AppShellMiniShowcase(): React.JSX.Element {
  const [active, setActive] = useState('inbox');

  return (
    <Stack gap="sm">
      <p style={hintStyle}>
        A constrained mini-shell. The hamburger in the top-left toggles the
        sidebar collapse (rail ↔ labels); the right-panel button in Main
        toggles the context column.
      </p>
      <div style={frameStyle}>
        <AppShell.Root defaultSidebarCollapsed={false} defaultRightPanelOpen={true}>
          <AppShell.TopBar>
            <TopBar.Leading>
              <div style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm }}>
                <SidebarToggle />
                <span>Acme Inc.</span>
              </div>
            </TopBar.Leading>
            <TopBar.Trailing>
              <span style={miniBadgeStyle}>mini</span>
            </TopBar.Trailing>
          </AppShell.TopBar>

          <AppShell.Sidebar aria-label="Mini navigation">
            {({ collapsed }) => (
              <div style={{ padding: `${t.spaceSm} 0` }}>
                <AppShell.SidebarSection label="Workspace">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setActive(item.key)}
                      aria-current={item.key === active ? 'page' : undefined}
                      style={{
                        ...navItemStyle,
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        background:
                          item.key === active ? t.colorSurfaceRaised : 'transparent',
                        color: item.key === active ? t.colorText : t.colorTextMuted,
                      }}
                      title={collapsed ? item.label : undefined}
                    >
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                        style={navIconStyle}
                      >
                        {item.icon}
                      </span>
                      {!collapsed && <span>{item.label}</span>}
                    </button>
                  ))}
                </AppShell.SidebarSection>
              </div>
            )}
          </AppShell.Sidebar>

          <AppShell.Main>
            <div style={mainStyle}>
              <Stack gap="sm">
                <strong style={{ color: t.colorText, fontSize: t.fontSizeBase }}>
                  {NAV_ITEMS.find((i) => i.key === active)?.label ?? 'Home'}
                </strong>
                <span style={hintStyle}>
                  Active route. The selection state lives in the showcase, not
                  `AppShell` — routing is always the consumer's concern.
                </span>
                <div>
                  <RightPanelToggle />
                </div>
              </Stack>
            </div>
          </AppShell.Main>

          <AppShell.RightPanel aria-label="Mini context panel">
            <div style={panelStyle}>
              <strong style={{ color: t.colorText, fontSize: t.fontSizeSm }}>
                Context
              </strong>
              <p style={{ ...hintStyle, margin: 0 }}>
                Close me and watch the grid column collapse to zero width.
              </p>
            </div>
          </AppShell.RightPanel>
        </AppShell.Root>
      </div>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Local styles — the frame has to override `minHeight: 100vh` on
// `AppShell.Root`, so we wrap it in a clipped 420px box.
// ---------------------------------------------------------------------------

const frameStyle: React.CSSProperties = {
  // `AppShell.Root` hardcodes `minHeight: 100vh`, so embedding it inline
  // would blow out the surrounding concept-doc flow. Clipping it to a
  // 26rem-tall container via `overflow: hidden` is the simplest way to
  // contain the shell without reaching into its internal styles —
  // scroll is disabled so the mini UI always fits.
  height: '26rem',
  overflow: 'hidden',
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  position: 'relative',
};

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};

const miniBadgeStyle: React.CSSProperties = {
  fontFamily: t.fontMono,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  padding: `${t.spaceXs} ${t.spaceSm}`,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  background: t.colorSurfacePanel,
};

const navItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: t.spaceSm,
  width: '100%',
  padding: `${t.spaceSm} ${t.spaceMd}`,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontFamily: t.fontSans,
  fontSize: t.fontSizeSm,
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const navIconStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  lineHeight: 1,
  flexShrink: 0,
};

const mainStyle: React.CSSProperties = {
  padding: t.spaceLg,
};

const panelStyle: React.CSSProperties = {
  padding: t.spaceMd,
  display: 'flex',
  flexDirection: 'column',
  gap: t.spaceSm,
};
