import { useState } from 'react';
import { ChipPicker, Stack } from '@4lt7ab/ui';
import type { ChipItem } from '@4lt7ab/ui';

const basicItems: ChipItem[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
  { value: 'solid', label: 'Solid' },
];

const groupedItems: ChipItem[] = [
  { value: 'ts', label: 'TypeScript', group: 'Languages' },
  { value: 'js', label: 'JavaScript', group: 'Languages' },
  { value: 'rust', label: 'Rust', group: 'Languages' },
  { value: 'go', label: 'Go', group: 'Languages' },
  { value: 'react', label: 'React', group: 'Frameworks' },
  { value: 'next', label: 'Next.js', group: 'Frameworks' },
  { value: 'remix', label: 'Remix', group: 'Frameworks' },
  { value: 'docker', label: 'Docker', group: 'Tools' },
  { value: 'git', label: 'Git', group: 'Tools' },
  { value: 'vite', label: 'Vite', group: 'Tools' },
];

export function ChipPickerDemo(): React.JSX.Element {
  const [basic, setBasic] = useState<string[]>([]);
  const [grouped, setGrouped] = useState<string[]>(['ts', 'react']);
  const [preselected, setPreselected] = useState<string[]>(['react', 'svelte', 'solid']);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Click chips to toggle selection.
        </p>
        <ChipPicker items={basicItems} selected={basic} onChange={setBasic} />
        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          Selected: {basic.length ? basic.join(', ') : '(none)'}
        </span>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Grouped</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Items grouped by category with section labels.
        </p>
        <ChipPicker items={groupedItems} selected={grouped} onChange={setGrouped} />
        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          Selected: {grouped.length ? grouped.join(', ') : '(none)'}
        </span>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Pre-selected</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Starting with values already selected.
        </p>
        <ChipPicker items={basicItems} selected={preselected} onChange={setPreselected} />
        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          Selected: {preselected.length ? preselected.join(', ') : '(none)'}
        </span>
      </Stack>
    </Stack>
  );
}
