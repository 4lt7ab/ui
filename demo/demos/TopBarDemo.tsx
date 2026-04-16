import { useState } from 'react';
import { Stack, TopBar, Badge, ThemePicker } from '@4lt7ab/ui';
import type { NavItem } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tasks', path: '/tasks' },
  { label: 'Settings', path: '/settings' },
];

const NAV_WITH_ICONS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: <span style={{ fontSize: 16 }}>&#x1f4ca;</span> },
  { label: 'Projects', path: '/projects', icon: <span style={{ fontSize: 16 }}>&#x1f4c1;</span> },
  { label: 'Tasks', path: '/tasks', icon: <span style={{ fontSize: 16 }}>&#x2705;</span> },
];

const props: PropMeta[] = [
  { name: 'title', type: 'ReactNode', required: true, description: 'Logo or app title rendered in the leading slot.' },
  { name: 'items', type: 'NavItem[]', default: '[]', description: 'Navigation items displayed as horizontal buttons.' },
  { name: 'activePath', type: 'string', description: 'The currently active path. Compared against each item\'s path.' },
  { name: 'onNavigate', type: '(path: string) => void', description: 'Called when a nav item is clicked. Consumer handles routing.' },
  { name: 'trailing', type: 'ReactNode', description: 'Content rendered in the trailing slot (e.g. ThemePicker, avatar).' },
  { name: 'sticky', type: 'boolean', default: 'false', description: 'Sticks to the top of the viewport on scroll.' },
];

export function TopBarDemo(): React.JSX.Element {
  const [activePath, setActivePath] = useState('/dashboard');
  const [activePathIcons, setActivePathIcons] = useState('/dashboard');

  return (
    <DocBlock props={props}>
      <PropDemo name="title" description="The leading slot shows the app name or logo. When no nav items are provided, only the title is displayed.">
        <TopBar
          title="My App"
          trailing={<ThemePicker variant="compact" />}
        />
      </PropDemo>

      <PropDemo name="items / activePath / onNavigate" description="Navigation items are rendered as horizontal buttons. The activePath highlights the current route, and onNavigate handles clicks.">
        <TopBar
          title="My App"
          items={NAV_ITEMS}
          activePath={activePath}
          onNavigate={setActivePath}
        />
      </PropDemo>

      <PropDemo name="trailing" description="Content rendered in the trailing slot, aligned to the right. Useful for theme pickers, status badges, or user avatars.">
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
      </PropDemo>

      <PropDemo name="items (with icons)" description="Nav items can include an optional icon ReactNode rendered before the label.">
        <TopBar
          title="My App"
          items={NAV_WITH_ICONS}
          activePath={activePathIcons}
          onNavigate={setActivePathIcons}
        />
      </PropDemo>

      <PropDemo name="sticky" description="When enabled, the bar sticks to the top of the viewport on scroll. Not demonstrated live to avoid affecting the demo page layout.">
        <Stack gap="sm">
          <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            Pass <code>sticky</code> to pin the bar to the top of the viewport on scroll.
          </p>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
