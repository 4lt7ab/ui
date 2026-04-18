import { Header, Stack, Badge, Button, StatusDot, SearchInput, Surface, Divider } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'string', required: true, description: 'Primary heading text.' },
  { name: 'level', type: "'page' | 'section'", default: "'section'", description: 'Heading scale. page renders an h1 in bold; section renders a smaller h2.' },
  { name: 'subtitle', type: 'string', description: 'Secondary text below the title in muted style.' },
  { name: 'indicator', type: 'ReactNode', description: 'Inline content rendered next to the title (Badge, StatusDot, Icon).' },
  { name: 'trailing', type: 'ReactNode', description: 'Content aligned to the right end of the header (action buttons, SearchInput).' },
];

export function HeaderDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="level=page" description="Top-of-page heading. Renders an h1 in bold.">
        <Header level="page" title="Projects" subtitle="Manage your active projects" />
      </PropDemo>

      <PropDemo name="level=section (default)" description="Sub-section heading. Renders an h2 at base font size.">
        <Stack gap="md">
          <Header title="Tasks" />
          <Header title="Notifications" indicator={<Badge variant="info">12</Badge>} />
        </Stack>
      </PropDemo>

      <PropDemo name="indicator" description="Render a Badge, StatusDot, or any ReactNode inline with the title.">
        <Stack gap="sm">
          <Header level="page" title="Deploys" indicator={<StatusDot variant="success" />} />
          <Header title="Queue" indicator={<Badge variant="warning">Paused</Badge>} />
        </Stack>
      </PropDemo>

      <PropDemo name="trailing" description="Right-aligned actions. Compose Buttons, SearchInput, or ThemePicker.">
        <Header
          level="page"
          title="Team"
          subtitle="4 active members"
          trailing={<Button variant="primary" size="sm">Invite</Button>}
        />
      </PropDemo>

      <PropDemo name="border via Divider composition" description="The old border prop is retired. For a bottom border, pair the Header with a Divider.">
        <Surface level="panel" padding="md">
          <Stack gap="md">
            <Header title="Settings" trailing={<SearchInput placeholder="Find a setting" />} />
            <Divider />
          </Stack>
        </Surface>
      </PropDemo>
    </DocBlock>
  );
}
