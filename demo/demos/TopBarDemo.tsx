import { useState } from 'react';
import { Stack, TopBar, Badge, ThemePicker } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const NAV = ['dashboard', 'projects', 'tasks', 'settings'] as const;
type Route = (typeof NAV)[number];

const props: PropMeta[] = [
  { name: 'TopBar.Root', type: '{ sticky?, aria-label?, children }', description: 'Header landmark. sticky pins to the top of the viewport.' },
  { name: 'TopBar.Leading', type: '{ children }', description: 'Logo or app title slot. Flex-shrink 0.' },
  { name: 'TopBar.Nav', type: "{ aria-label?, children }", description: 'Nav container. Holds TopBar.Link children. Default aria-label="Primary".' },
  { name: 'TopBar.Link', type: '{ active?, asChild?, onClick?, children }', description: 'Nav link. active applies accent color + underline + aria-current="page". asChild clones the single child element so your router\u2019s Link or a plain <a> carries the styling.' },
  { name: 'TopBar.Trailing', type: '{ children }', description: 'Right-aligned slot. margin-left: auto. Typical: ThemePicker, avatar, status badges.' },
];

export function TopBarDemo(): React.JSX.Element {
  const [route, setRoute] = useState<Route>('dashboard');

  return (
    <DocBlock props={props}>
      <PropDemo name="Leading + Trailing" description="When no Nav is rendered, only the leading title and trailing slot appear.">
        <TopBar.Root aria-label="Minimal">
          <TopBar.Leading>My App</TopBar.Leading>
          <TopBar.Trailing>
            <ThemePicker variant="compact" />
          </TopBar.Trailing>
        </TopBar.Root>
      </PropDemo>

      <PropDemo name="Nav with Link onClick (no router)" description="Plain button links — TopBar.Link renders a <button> by default. Consumer owns the state; active is declarative.">
        <TopBar.Root aria-label="Button nav">
          <TopBar.Leading>My App</TopBar.Leading>
          <TopBar.Nav>
            {NAV.map((r) => (
              <TopBar.Link key={r} active={r === route} onClick={() => setRoute(r)}>
                {cap(r)}
              </TopBar.Link>
            ))}
          </TopBar.Nav>
          <TopBar.Trailing>
            <ThemePicker variant="compact" />
          </TopBar.Trailing>
        </TopBar.Root>
      </PropDemo>

      <PropDemo name="Nav with asChild (plain anchors)" description="Pass asChild + your own <a> to render real anchor elements with middle-click, open-in-new-tab, and right-click menus. TopBar.Link merges styling + data-active + aria-current into your element.">
        <TopBar.Root aria-label="Anchor nav">
          <TopBar.Leading>My App</TopBar.Leading>
          <TopBar.Nav>
            {NAV.map((r) => (
              <TopBar.Link key={r} asChild active={r === route}>
                <a
                  href={`#${r}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setRoute(r);
                  }}
                >
                  {cap(r)}
                </a>
              </TopBar.Link>
            ))}
          </TopBar.Nav>
          <TopBar.Trailing>
            <Stack direction="horizontal" gap="sm" align="center">
              <Badge variant="success">Online</Badge>
              <ThemePicker variant="compact" />
            </Stack>
          </TopBar.Trailing>
        </TopBar.Root>
      </PropDemo>

      <PropDemo name="sticky" description="Pass sticky to TopBar.Root to pin the bar to the viewport top on scroll. Not demonstrated live here to keep the demo layout stable.">
        <Stack gap="sm">
          <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            <code>{`<TopBar.Root sticky>`}</code> applies <code>position: sticky; top: 0; z-index: zIndexSticky;</code> to the header.
          </p>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
