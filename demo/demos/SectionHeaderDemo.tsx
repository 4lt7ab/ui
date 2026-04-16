import { useState } from 'react';
import { SectionHeader, Stack, Badge, Button, SearchInput, Surface } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'string', required: true, description: 'Section title text.' },
  { name: 'icon', type: 'IconName | string', description: 'Material Symbols icon name rendered before the title.' },
  { name: 'indicator', type: 'ReactNode', description: 'Content rendered inline after the title (e.g. Badge count or StatusDot).' },
  { name: 'trailing', type: 'ReactNode', description: 'Content aligned to the right end (e.g. SearchInput, action buttons).' },
  { name: 'border', type: 'boolean', default: 'false', description: 'Show a bottom border below the header.' },
  { name: 'spacing', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", description: 'Vertical spacing below the header (margin-bottom).' },
];

export function SectionHeaderDemo(): React.JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <DocBlock props={props}>
      <PropDemo name="title" description="The section heading text. Always visible.">
        <SectionHeader title="Tasks" />
      </PropDemo>

      <PropDemo name="icon" description="A Material Symbols icon name rendered before the title for visual context.">
        <Stack gap="md">
          <SectionHeader icon="task_alt" title="Tasks" />
          <SectionHeader icon="folder" title="Projects" />
          <SectionHeader icon="analytics" title="Overview" />
        </Stack>
      </PropDemo>

      <PropDemo name="indicator" description="Inline content after the title. Commonly used for count badges or status dots.">
        <SectionHeader
          icon="folder"
          title="Projects"
          indicator={<Badge variant="info">12</Badge>}
        />
      </PropDemo>

      <PropDemo name="trailing" description="Right-aligned content such as search inputs, filter controls, or action buttons.">
        <SectionHeader
          icon="description"
          title="Documents"
          indicator={<Badge variant="info">89</Badge>}
          trailing={
            <>
              <SearchInput value={search} onSearch={setSearch} placeholder="Search docs..." />
              <Button variant="primary" size="sm">New</Button>
            </>
          }
        />
      </PropDemo>

      <PropDemo name="border" description="Adds a bottom border below the header to visually separate it from content below.">
        <Stack gap="sm">
          <SectionHeader icon="analytics" title="Overview" border />
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
            Content below the bordered section header.
          </p>
        </Stack>
      </PropDemo>

      <PropDemo name="spacing" description="Adds margin-bottom below the header for consistent vertical rhythm.">
        <Stack gap="sm">
          <SectionHeader
            icon="check_circle"
            title="Completed Tasks"
            indicator={<Badge variant="success">31</Badge>}
            spacing="lg"
          />
          <Surface level="raised" padding="md" radius="md" border>
            <span style={{ fontSize: '0.875rem' }}>
              Content with spacing="lg" gap above.
            </span>
          </Surface>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
