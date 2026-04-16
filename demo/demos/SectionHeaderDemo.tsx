import { useState } from 'react';
import { SectionHeader, Stack, Badge, Button, SearchInput, Surface } from '@4lt7ab/ui';

export function SectionHeaderDemo(): React.JSX.Element {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <SectionHeader title="Tasks" />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With icon</h3>
        <SectionHeader icon="task_alt" title="Tasks" />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With indicator</h3>
        <SectionHeader
          icon="folder"
          title="Projects"
          indicator={<Badge variant="info">12</Badge>}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With trailing actions</h3>
        <SectionHeader
          icon="description"
          title="Documents"
          indicator={<Badge variant="info">89</Badge>}
          trailing={
            <>
              <SearchInput value={search1} onSearch={setSearch1} placeholder="Search docs..." />
              <Button variant="primary" size="sm">New</Button>
            </>
          }
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With bottom border</h3>
        <SectionHeader
          icon="analytics"
          title="Overview"
          border
        />
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          Content below the bordered section header.
        </p>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With spacing</h3>
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

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Page section</h3>
        <Surface padding="lg" border shadow="sm">
          <Stack gap="md">
            <SectionHeader
              icon="task_alt"
              title="Tasks"
              indicator={<Badge variant="info">47</Badge>}
              trailing={
                <>
                  <SearchInput value={search2} onSearch={setSearch2} placeholder="Search..." />
                  <Button variant="ghost" size="sm">Filter</Button>
                  <Button variant="primary" size="sm">New Task</Button>
                </>
              }
              border
            />
            <Stack gap="sm">
              {['Implement Surface component', 'Add Grid layout', 'Write demo pages'].map((task) => (
                <Surface key={task} level="raised" padding="sm" radius="md" border>
                  <span style={{ fontSize: '0.875rem' }}>{task}</span>
                </Surface>
              ))}
            </Stack>
          </Stack>
        </Surface>
      </Stack>
    </Stack>
  );
}
