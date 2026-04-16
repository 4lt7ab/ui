import { PageHeader, Button, Badge, StatusDot, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'string', required: true, description: 'Primary heading text.' },
  { name: 'subtitle', type: 'string', description: 'Secondary text rendered below the title in muted style.' },
  { name: 'indicator', type: 'ReactNode', description: 'Inline indicator rendered next to the title (e.g. Badge or StatusDot).' },
  { name: 'trailing', type: 'ReactNode', description: 'Content aligned to the right of the header (e.g. action buttons).' },
  { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '2', description: 'HTML heading level (h1-h6).' },
];

export function PageHeaderDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="title" description="The primary heading text. Rendered using the heading level specified by the level prop.">
        <PageHeader title="Projects" />
      </PropDemo>

      <PropDemo name="subtitle" description="Secondary descriptive text rendered below the title in a muted style.">
        <PageHeader title="Projects" subtitle="Manage your active projects" />
      </PropDemo>

      <PropDemo name="indicator" description="An inline element rendered next to the title. Works well with Badge or StatusDot.">
        <Stack gap="md">
          <PageHeader
            title="Deployments"
            subtitle="Production environment"
            indicator={<Badge>Live</Badge>}
          />
          <PageHeader
            title="API Health"
            subtitle="All systems operational"
            indicator={<StatusDot variant="success" />}
          />
        </Stack>
      </PropDemo>

      <PropDemo name="trailing" description="Content aligned to the right end of the header row. Typically used for action buttons.">
        <PageHeader
          title="Team Members"
          subtitle="12 members"
          trailing={<Button size="sm">Invite</Button>}
        />
      </PropDemo>

      <PropDemo name="level" description="Controls which HTML heading element is rendered (h1-h6). Defaults to h2.">
        <Stack gap="md">
          <PageHeader title="Level 1 heading" level={1} />
          <PageHeader title="Level 2 heading (default)" />
          <PageHeader title="Level 3 heading" level={3} />
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
