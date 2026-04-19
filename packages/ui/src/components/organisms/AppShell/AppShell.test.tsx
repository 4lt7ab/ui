import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { AppShell, useAppShellContext } from './index';
import { TopBar } from '../TopBar';

// Semantic tokens are CSS var references — a Proxy mock keeps the test
// environment from importing the full token barrel.
vi.mock('@4lt7ab/core', async () => {
  const actual = await vi.importActual<object>('@4lt7ab/core');
  return {
    ...actual,
    semantic: new Proxy(
      {},
      { get: (_t, prop) => `var(--mock-${String(prop)})` },
    ),
    useInjectStyles: vi.fn(),
  };
});

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('AppShell — slot composition & landmarks', () => {
  it('renders TopBar + Sidebar + Main + RightPanel landmarks in the expected order', () => {
    render(
      <AppShell.Root>
        <AppShell.TopBar aria-label="Main header">
          <TopBar.Leading>App</TopBar.Leading>
        </AppShell.TopBar>
        <AppShell.Sidebar aria-label="Primary nav">
          <AppShell.SidebarSection label="Workspace">
            <a href="#inbox">Inbox</a>
          </AppShell.SidebarSection>
        </AppShell.Sidebar>
        <AppShell.Main>
          <h1>Dashboard</h1>
        </AppShell.Main>
        <AppShell.RightPanel aria-label="Details">
          <span>Right side</span>
        </AppShell.RightPanel>
      </AppShell.Root>,
    );

    // All four landmarks are reachable by role.
    const header = screen.getByRole('banner', { name: 'Main header' });
    const nav = screen.getByRole('navigation', { name: 'Primary nav' });
    const main = screen.getByRole('main');
    const aside = screen.getByRole('complementary', { name: 'Details' });

    expect(header.tagName).toBe('HEADER');
    expect(nav.tagName).toBe('NAV');
    expect(main.tagName).toBe('MAIN');
    expect(aside.tagName).toBe('ASIDE');

    // Main content is rendered through the slot.
    expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeDefined();
    expect(screen.getByText('Workspace')).toBeDefined();
  });

  it('places sub-parts into the shell regardless of JSX source order', () => {
    const { container } = render(
      <AppShell.Root>
        {/* Deliberately reverse the "natural" order. */}
        <AppShell.RightPanel>right</AppShell.RightPanel>
        <AppShell.Main>main</AppShell.Main>
        <AppShell.Sidebar>side</AppShell.Sidebar>
        <AppShell.TopBar>
          <TopBar.Leading>top</TopBar.Leading>
        </AppShell.TopBar>
      </AppShell.Root>,
    );

    // The Root's first child is a `<div>` wrapping the TopBar (so the grid
    // placement wrapper for topbar sits first in DOM order). Walk the tree
    // by landmark tagName and assert the order is TopBar → Sidebar → Main →
    // RightPanel regardless of JSX input order.
    const landmarks = Array.from(
      container.querySelectorAll('header, nav, main, aside'),
    );
    expect(landmarks.map((el) => el.tagName)).toEqual([
      'HEADER',
      'NAV',
      'MAIN',
      'ASIDE',
    ]);
  });

  it('renders a minimal shell with only Main — TopBar/Sidebar/RightPanel all optional', () => {
    render(
      <AppShell.Root>
        <AppShell.Main>
          <h1>Minimal</h1>
        </AppShell.Main>
      </AppShell.Root>,
    );

    expect(screen.getByRole('main')).toBeDefined();
    expect(screen.queryByRole('banner')).toBeNull();
    expect(screen.queryByRole('navigation')).toBeNull();
    expect(screen.queryByRole('complementary')).toBeNull();
  });

  it('ignores non-AppShell children silently (no throw, no render)', () => {
    // Wrappers, strings, and unknown elements are dropped — only library
    // sub-parts are placed into the grid.
    render(
      <AppShell.Root>
        <div data-testid="orphan-wrapper">should not render</div>
        {'raw text'}
        <AppShell.Main>
          <h1>M</h1>
        </AppShell.Main>
      </AppShell.Root>,
    );
    expect(screen.queryByTestId('orphan-wrapper')).toBeNull();
    expect(screen.queryByText('raw text')).toBeNull();
    expect(screen.getByRole('main')).toBeDefined();
  });
});

describe('AppShell — sidebar collapse', () => {
  it('uncontrolled: defaults to expanded, starts collapsed when defaultSidebarCollapsed=true', () => {
    const { container, rerender } = render(
      <AppShell.Root>
        <AppShell.Sidebar>nav</AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );
    const rootA = container.firstElementChild as HTMLElement;
    expect(rootA.getAttribute('data-sidebar-state')).toBe('expanded');
    const navA = screen.getByRole('navigation');
    expect(navA.getAttribute('data-state')).toBe('expanded');

    rerender(
      <AppShell.Root defaultSidebarCollapsed>
        <AppShell.Sidebar>nav</AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );
    // React preserves the Root instance across rerender; default only seeds
    // initial state. Remount with a fresh key to read the new default.
    const { container: container2 } = render(
      <AppShell.Root defaultSidebarCollapsed>
        <AppShell.Sidebar>nav</AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );
    const rootB = container2.firstElementChild as HTMLElement;
    expect(rootB.getAttribute('data-sidebar-state')).toBe('collapsed');
  });

  it('exposes collapsed state via useAppShellContext for peer sub-parts', async () => {
    function SidebarToggle(): React.JSX.Element {
      const { sidebarCollapsed, setSidebarCollapsed } = useAppShellContext();
      return (
        <button
          type="button"
          aria-expanded={!sidebarCollapsed}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          {sidebarCollapsed ? 'Expand' : 'Collapse'}
        </button>
      );
    }

    const user = userEvent.setup();

    render(
      <AppShell.Root>
        <AppShell.TopBar>
          <TopBar.Leading>
            <SidebarToggle />
          </TopBar.Leading>
        </AppShell.TopBar>
        <AppShell.Sidebar>nav</AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );

    // Starts expanded — button says "Collapse" and reports aria-expanded=true.
    const toggle = screen.getByRole('button', { name: 'Collapse' });
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByRole('navigation').getAttribute('data-state')).toBe('expanded');

    // Click toggles through the hook; Sidebar reacts via context.
    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'Expand' })).toBeDefined();
    expect(screen.getByRole('navigation').getAttribute('data-state')).toBe('collapsed');
  });

  it('controlled: reads `sidebarCollapsed` and notifies via `onSidebarCollapsedChange`', async () => {
    const handler = vi.fn();

    function Controller(): React.JSX.Element {
      const [collapsed, setCollapsed] = useState(false);
      return (
        <AppShell.Root
          sidebarCollapsed={collapsed}
          onSidebarCollapsedChange={(next) => {
            handler(next);
            setCollapsed(next);
          }}
        >
          <AppShell.TopBar>
            <TopBar.Leading>
              <button
                type="button"
                onClick={() => setCollapsed((c) => !c)}
              >
                toggle-external
              </button>
            </TopBar.Leading>
          </AppShell.TopBar>
          <AppShell.Sidebar>nav</AppShell.Sidebar>
          <AppShell.Main>m</AppShell.Main>
        </AppShell.Root>
      );
    }

    const user = userEvent.setup();
    render(<Controller />);

    // External control flips the prop; Sidebar reflects the new state.
    expect(screen.getByRole('navigation').getAttribute('data-state')).toBe('expanded');
    await user.click(screen.getByRole('button', { name: 'toggle-external' }));
    expect(screen.getByRole('navigation').getAttribute('data-state')).toBe('collapsed');

    // Now flip it from inside the shell via context — the onChange fires so
    // the outer state updates.
    function InsideToggle(): React.JSX.Element {
      const { sidebarCollapsed, setSidebarCollapsed } = useAppShellContext();
      return (
        <button
          type="button"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          toggle-inside
        </button>
      );
    }
    function Controller2(): React.JSX.Element {
      const [collapsed, setCollapsed] = useState(true);
      return (
        <AppShell.Root
          sidebarCollapsed={collapsed}
          onSidebarCollapsedChange={(next) => {
            handler(next);
            setCollapsed(next);
          }}
        >
          <AppShell.TopBar>
            <TopBar.Leading>
              <InsideToggle />
            </TopBar.Leading>
          </AppShell.TopBar>
          <AppShell.Sidebar>nav</AppShell.Sidebar>
          <AppShell.Main>m</AppShell.Main>
        </AppShell.Root>
      );
    }
    document.body.innerHTML = '';
    handler.mockClear();
    render(<Controller2 />);
    await user.click(screen.getByRole('button', { name: 'toggle-inside' }));
    // onChange was fired with the new boolean.
    expect(handler).toHaveBeenCalledWith(false);
    expect(screen.getByRole('navigation').getAttribute('data-state')).toBe('expanded');
  });

  it('Sidebar supports a render-prop child that receives the collapsed flag', () => {
    render(
      <AppShell.Root defaultSidebarCollapsed>
        <AppShell.Sidebar>
          {({ collapsed }) => (collapsed ? <span>rail</span> : <span>full</span>)}
        </AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );
    expect(screen.getByText('rail')).toBeDefined();
    expect(screen.queryByText('full')).toBeNull();
  });

  it('SidebarSection label is visible when expanded', () => {
    render(
      <AppShell.Root>
        <AppShell.Sidebar>
          <AppShell.SidebarSection label="Workspace">
            <a href="#x">Item</a>
          </AppShell.SidebarSection>
        </AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );
    const label = screen.getByText('Workspace');
    expect(label.style.position).not.toBe('absolute');
  });

  it('SidebarSection label is visually hidden (sr-only) when collapsed', () => {
    const { container } = render(
      <AppShell.Root sidebarCollapsed onSidebarCollapsedChange={() => {}}>
        <AppShell.Sidebar>
          <AppShell.SidebarSection label="Workspace">
            <a href="#x">Item</a>
          </AppShell.SidebarSection>
        </AppShell.Sidebar>
        <AppShell.Main>m</AppShell.Main>
      </AppShell.Root>,
    );
    const label = screen.getByText('Workspace');
    expect(label.style.position).toBe('absolute');
    expect(container.firstElementChild?.getAttribute('data-sidebar-state')).toBe('collapsed');
  });
});

describe('AppShell — right panel', () => {
  it('defaults to open and renders the aside landmark', () => {
    render(
      <AppShell.Root>
        <AppShell.Main>m</AppShell.Main>
        <AppShell.RightPanel>panel</AppShell.RightPanel>
      </AppShell.Root>,
    );
    const aside = screen.getByRole('complementary', { name: 'Context panel' });
    expect(aside.getAttribute('data-state')).toBe('open');
    expect(aside.hasAttribute('hidden')).toBe(false);
  });

  it('hides the right panel when `rightPanelOpen=false` (controlled)', () => {
    const { container } = render(
      <AppShell.Root rightPanelOpen={false}>
        <AppShell.Main>m</AppShell.Main>
        <AppShell.RightPanel>panel</AppShell.RightPanel>
      </AppShell.Root>,
    );
    // Closed: aria-hidden + hidden attr; and the Root reports `closed`.
    const aside = container.querySelector('aside') as HTMLElement;
    expect(aside.getAttribute('data-state')).toBe('closed');
    expect(aside.hasAttribute('hidden')).toBe(true);
    expect(container.firstElementChild?.getAttribute('data-right-panel-state')).toBe('closed');
  });

  it('toggling `rightPanelOpen` via context fires `onRightPanelOpenChange`', async () => {
    const handler = vi.fn();

    function Toggle(): React.JSX.Element {
      const { rightPanelOpen, setRightPanelOpen } = useAppShellContext();
      return (
        <button
          type="button"
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
        >
          toggle-panel
        </button>
      );
    }

    const user = userEvent.setup();
    render(
      <AppShell.Root onRightPanelOpenChange={handler}>
        <AppShell.TopBar>
          <TopBar.Leading>
            <Toggle />
          </TopBar.Leading>
        </AppShell.TopBar>
        <AppShell.Main>m</AppShell.Main>
        <AppShell.RightPanel>panel</AppShell.RightPanel>
      </AppShell.Root>,
    );

    await user.click(screen.getByRole('button', { name: 'toggle-panel' }));
    expect(handler).toHaveBeenCalledWith(false);
  });
});

describe('AppShell — orphan-check', () => {
  // Every sub-part that reads context must throw when rendered outside Root.
  // React logs the thrown error via console.error; silence it so the test
  // output stays clean.
  const parts: Array<[string, () => React.JSX.Element]> = [
    ['TopBar', () => <AppShell.TopBar><span /></AppShell.TopBar>],
    ['Sidebar', () => <AppShell.Sidebar>x</AppShell.Sidebar>],
    ['SidebarSection', () => <AppShell.SidebarSection label="x">y</AppShell.SidebarSection>],
    ['Main', () => <AppShell.Main>x</AppShell.Main>],
    ['RightPanel', () => <AppShell.RightPanel>x</AppShell.RightPanel>],
  ];

  for (const [name, factory] of parts) {
    it(`throws when <AppShell.${name}> is rendered without Root`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(
        new RegExp(`AppShell\\.${name}.*must be rendered inside <AppShell\\.Root>`),
      );
      console.error = err;
    });
  }

  it('useAppShellContext() throws when called outside Root', () => {
    function Consumer(): React.JSX.Element {
      useAppShellContext();
      return <span />;
    }
    const err = console.error;
    console.error = vi.fn();
    expect(() => render(<Consumer />)).toThrow(
      /AppShell\.<consumer>.*must be rendered inside <AppShell\.Root>/,
    );
    console.error = err;
  });
});
