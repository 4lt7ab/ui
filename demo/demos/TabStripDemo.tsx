import { useState } from 'react';
import { TabStrip, Stack, Surface, semantic as t } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'tabs', type: 'Tab[]', required: true, description: 'Tab definitions. Each has key (unique ID), label (display text), and optional icon (Material Symbols name).' },
  { name: 'activeKey', type: 'string | null', required: true, description: 'Currently active tab key. null means no tab is selected.' },
  { name: 'onChange', type: '(key: string | null) => void', required: true, description: 'Called when a tab is clicked. Receives null when allowDeselect is true and the active tab is clicked.' },
  { name: 'allowDeselect', type: 'boolean', default: 'false', description: 'Allow clicking the active tab to deselect it (sets activeKey to null). Useful for collapsible panels.' },
  { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Visual size of the tabs. Affects padding and font size.' },
];

export function TabStripDemo(): React.JSX.Element {
  const [tab1, setTab1] = useState<string | null>('overview');
  const [tab2, setTab2] = useState<string | null>('summary');
  const [tab3, setTab3] = useState<string | null>('all');
  const [tab4, setTab4] = useState<string | null>(null);

  return (
    <DocBlock props={props}>
      <PropDemo name="tabs" description="Defines the tab items. Each tab has a unique key, a display label, and an optional icon name (Material Symbols). Icons render before the label.">
        <Stack gap="lg">
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>text only</span>
            <TabStrip
              tabs={[
                { key: 'overview', label: 'Overview' },
                { key: 'tasks', label: 'Tasks' },
                { key: 'docs', label: 'Documents' },
              ]}
              activeKey={tab1}
              onChange={setTab1}
            />
          </Stack>
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>with icons</span>
            <TabStrip
              tabs={[
                { key: 'summary', label: 'Summary', icon: 'description' },
                { key: 'context', label: 'Context', icon: 'info' },
                { key: 'requirements', label: 'Requirements', icon: 'checklist' },
              ]}
              activeKey={tab2}
              onChange={setTab2}
            />
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="activeKey / onChange" description="Controlled component. activeKey sets the active tab, onChange fires with the new key. Content below reacts to the selected tab.">
        <Stack gap="sm">
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
      </PropDemo>

      <PropDemo name="allowDeselect" description="When true, clicking the active tab deselects it (onChange receives null). Useful for collapsible panels where all content can be hidden.">
        <Stack gap="sm">
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
      </PropDemo>

      <PropDemo name="size" description="Controls the tab padding and font size. sm is compact for dense UIs, md is the default.">
        <Stack gap="md">
          <Stack gap="xs">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>sm</span>
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
          <Stack gap="xs">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>md</span>
            <TabStrip
              size="md"
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
        </Stack>
      </PropDemo>

      <PropDemo name="tabs + allowDeselect" description="A realistic example: project briefing with collapsible tab panels inside a surface.">
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
      </PropDemo>
    </DocBlock>
  );
}
