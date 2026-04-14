import { useState } from 'react';
import { Stack, TopBar, Badge, ThemePicker } from '@4lt7ab/ui';
import type { NavItem } from '@4lt7ab/ui';

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tasks', path: '/tasks' },
  { label: 'Settings', path: '/settings' },
];

const NAV_WITH_ICONS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: <span style={{ fontSize: 16 }}>📊</span> },
  { label: 'Projects', path: '/projects', icon: <span style={{ fontSize: 16 }}>📁</span> },
  { label: 'Tasks', path: '/tasks', icon: <span style={{ fontSize: 16 }}>✅</span> },
];

export function TopBarDemo(): React.JSX.Element {
  const [activePath, setActivePath] = useState('/dashboard');
  const [activePathIcons, setActivePathIcons] = useState('/dashboard');

  return (
    <Stack gap="lg">
      {/* Basic */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <TopBar
          title="My App"
          items={NAV_ITEMS}
          activePath={activePath}
          onNavigate={setActivePath}
        />
      </Stack>

      {/* With trailing slot */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Trailing slot</h3>
        <TopBar
          title="My App"
          items={NAV_ITEMS}
          activePath={activePath}
          onNavigate={setActivePath}
          trailing={
            <Stack direction="horizontal" gap="sm" align="center">
              <Badge variant="success">Online</Badge>
              <ThemePicker variant="compact" />
            </Stack>
          }
        />
      </Stack>

      {/* With icons */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Nav items with icons</h3>
        <TopBar
          title="My App"
          items={NAV_WITH_ICONS}
          activePath={activePathIcons}
          onNavigate={setActivePathIcons}
        />
      </Stack>

      {/* Sticky note */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Sticky variant</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
          Pass <code>sticky</code> to pin the bar to the top of the viewport on scroll.
        </p>
      </Stack>

      {/* Title-only (no nav) */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Title only</h3>
        <TopBar
          title="My App"
          trailing={<ThemePicker variant="compact" />}
        />
      </Stack>
    </Stack>
  );
}
