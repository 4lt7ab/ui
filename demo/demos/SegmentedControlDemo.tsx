import { useState } from 'react';
import { SegmentedControl, Stack } from '@4lt7ab/ui';

export function SegmentedControlDemo(): React.JSX.Element {
  const [view, setView] = useState('list');
  const [status, setStatus] = useState('all');
  const [iconMode, setIconMode] = useState('search');

  return (
    <Stack gap="xl">
      {/* Text segments */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Text segments</h3>
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

      {/* Icon segments */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Icon-only segments</h3>
        <SegmentedControl
          segments={[
            { value: 'search', label: '', icon: 'search' },
            { value: 'filter', label: '', icon: 'filter' },
            { value: 'settings', label: '', icon: 'settings' },
          ]}
          value={iconMode}
          onChange={setIconMode}
        />
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          Selected: {iconMode}
        </span>
      </Stack>

      {/* Icon + text segments */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Icon + text</h3>
        <SegmentedControl
          segments={[
            { value: 'all', label: 'All', icon: 'menu' },
            { value: 'active', label: 'Active', icon: 'check-circle' },
            { value: 'error', label: 'Errors', icon: 'error' },
          ]}
          value={status}
          onChange={setStatus}
        />
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          Selected: {status}
        </span>
      </Stack>

      {/* Small size */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Small size</h3>
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
    </Stack>
  );
}
