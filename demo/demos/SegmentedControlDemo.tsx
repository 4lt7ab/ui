import { useState } from 'react';
import { SegmentedControl, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'segments', type: 'Segment[]', required: true, description: 'Array of segment definitions. Each has value (unique key), label (display text), and optional icon.' },
  { name: 'value', type: 'string', required: true, description: 'Currently selected segment value.' },
  { name: 'onChange', type: '(value: string) => void', required: true, description: 'Called when the user selects a segment.' },
  { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Control size. Affects height, padding, and font size.' },
];

export function SegmentedControlDemo(): React.JSX.Element {
  const [view, setView] = useState('list');
  const [status, setStatus] = useState('all');
  const [iconMode, setIconMode] = useState('search');

  return (
    <DocBlock props={props}>
      <PropDemo name="segments" description="Defines the available options. Each segment has a unique value and a label. Supports text-only, icon-only (empty label), and icon+text combinations.">
        <Stack gap="lg">
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>text only</span>
            <SegmentedControl
              segments={[
                { value: 'list', label: 'List' },
                { value: 'grid', label: 'Grid' },
                { value: 'board', label: 'Board' },
              ]}
              value={view}
              onChange={setView}
            />
          </Stack>
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>icon only</span>
            <SegmentedControl
              segments={[
                { value: 'search', label: '', icon: 'search' },
                { value: 'filter', label: '', icon: 'filter' },
                { value: 'settings', label: '', icon: 'settings' },
              ]}
              value={iconMode}
              onChange={setIconMode}
            />
          </Stack>
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>icon + text</span>
            <SegmentedControl
              segments={[
                { value: 'all', label: 'All', icon: 'menu' },
                { value: 'active', label: 'Active', icon: 'check-circle' },
                { value: 'error', label: 'Errors', icon: 'error' },
              ]}
              value={status}
              onChange={setStatus}
            />
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="value / onChange" description="Controlled component. The value prop sets the active segment, and onChange fires with the new value when the user clicks a segment.">
        <Stack gap="sm">
          <SegmentedControl
            segments={[
              { value: 'list', label: 'List' },
              { value: 'grid', label: 'Grid' },
              { value: 'board', label: 'Board' },
            ]}
            value={view}
            onChange={setView}
          />
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            Selected: {view}
          </span>
        </Stack>
      </PropDemo>

      <PropDemo name="size" description="Controls the height, padding, and font size of the control. sm is 28px tall, md is 32px.">
        <Stack gap="md">
          <Stack gap="xs">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>sm</span>
            <SegmentedControl
              size="sm"
              segments={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
              ]}
              value="week"
              onChange={() => {}}
            />
          </Stack>
          <Stack gap="xs">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>md</span>
            <SegmentedControl
              size="md"
              segments={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
              ]}
              value="week"
              onChange={() => {}}
            />
          </Stack>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
