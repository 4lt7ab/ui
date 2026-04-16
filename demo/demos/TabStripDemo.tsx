import { useState } from 'react';
import { TabStrip, Stack, Surface, semantic as t } from '@4lt7ab/ui';

export function TabStripDemo(): React.JSX.Element {
  const [tab1, setTab1] = useState<string | null>('overview');
  const [tab2, setTab2] = useState<string | null>('summary');
  const [tab3, setTab3] = useState<string | null>('all');
  const [tab4, setTab4] = useState<string | null>(null);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <TabStrip
          tabs={[
            { key: 'overview', label: 'Overview' },
            { key: 'tasks', label: 'Tasks' },
            { key: 'docs', label: 'Documents' },
          ]}
          activeKey={tab1}
          onChange={setTab1}
        />
        <Surface level="raised" padding="md" radius="md">
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Active tab: <strong>{tab1 ?? 'none'}</strong>
          </span>
        </Surface>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With icons</h3>
        <TabStrip
          tabs={[
            { key: 'summary', label: 'Summary', icon: 'description' },
            { key: 'context', label: 'Context', icon: 'info' },
            { key: 'requirements', label: 'Requirements', icon: 'checklist' },
          ]}
          activeKey={tab2}
          onChange={setTab2}
        />
        <Surface level="raised" padding="md" radius="md">
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            {tab2 === 'summary' && 'Project summary and key metrics.'}
            {tab2 === 'context' && 'Background information and rationale.'}
            {tab2 === 'requirements' && 'Constraints, specs, and acceptance criteria.'}
          </span>
        </Surface>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Small size</h3>
        <TabStrip
          size="sm"
          tabs={[
            { key: 'all', label: 'All' },
            { key: 'active', label: 'Active' },
            { key: 'completed', label: 'Completed' },
            { key: 'archived', label: 'Archived' },
          ]}
          activeKey={tab3}
          onChange={setTab3}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Allow deselect (collapsible)</h3>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          Click the active tab to collapse the panel.
        </p>
        <TabStrip
          tabs={[
            { key: 'details', label: 'Details', icon: 'info' },
            { key: 'activity', label: 'Activity', icon: 'history' },
          ]}
          activeKey={tab4}
          onChange={setTab4}
          allowDeselect
        />
        {tab4 && (
          <Surface level="raised" padding="md" radius="md" border>
            <span style={{ fontSize: '0.875rem' }}>
              {tab4 === 'details' ? 'Detail panel content...' : 'Activity feed content...'}
            </span>
          </Surface>
        )}
        {!tab4 && (
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            All panels collapsed. Click a tab to expand.
          </span>
        )}
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Project briefing</h3>
        <Surface padding="lg" border shadow="sm">
          <Stack gap="md">
            <strong style={{ fontFamily: t.fontSerif }}>Project Briefing</strong>
            <TabStrip
              tabs={[
                { key: 'goal', label: 'Goal', icon: 'flag' },
                { key: 'plan', label: 'Plan', icon: 'route' },
                { key: 'design', label: 'Design', icon: 'architecture' },
              ]}
              activeKey={tab1}
              onChange={setTab1}
              allowDeselect
            />
            {tab1 && (
              <Surface level="raised" padding="md" radius="md">
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  {tab1 === 'goal' && 'Ship a reusable component library that covers 90% of dashboard UI needs.'}
                  {tab1 === 'plan' && 'Phase 1: Token system. Phase 2: Atoms. Phase 3: Molecules. Phase 4: Organisms.'}
                  {tab1 === 'design' && 'Inline styles with semantic tokens. No CSS files. ForwardRef on everything.'}
                  {tab1 === 'overview' && 'High-level project summary and status overview.'}
                  {tab1 === 'tasks' && 'Task breakdown and progress tracking.'}
                  {tab1 === 'docs' && 'Linked documents and references.'}
                </p>
              </Surface>
            )}
          </Stack>
        </Surface>
      </Stack>
    </Stack>
  );
}
