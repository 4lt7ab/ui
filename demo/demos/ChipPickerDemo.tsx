import { useState } from 'react';
import { ChipPicker, Stack } from '@4lt7ab/ui';
import type { ChipItem } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

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

const props: PropMeta[] = [
  { name: 'items', type: 'ChipItem[]', required: true, description: 'All available chip options. Each has value, label, and optional group.' },
  { name: 'selected', type: 'string[]', required: true, description: 'Currently selected values (controlled).' },
  { name: 'onChange', type: '(selected: string[]) => void', required: true, description: 'Called with the updated selection array when a chip is toggled.' },
];

export function ChipPickerDemo(): React.JSX.Element {
  const [basic, setBasic] = useState<string[]>([]);
  const [grouped, setGrouped] = useState<string[]>(['ts', 'react']);
  const [preselected, setPreselected] = useState<string[]>(['react', 'svelte', 'solid']);

  return (
    <DocBlock props={props}>
      <PropDemo name="items + selected + onChange" description="Click chips to toggle selection. The onChange callback receives the full updated array.">
        <Stack gap="sm">
          <ChipPicker items={basicItems} selected={basic} onChange={setBasic} />
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Selected: {basic.length ? basic.join(', ') : '(none)'}
          </span>
        </Stack>
      </PropDemo>

      <PropDemo name="items (grouped)" description="Items with a group property are rendered under uppercase section headings. Groups appear in order of first appearance.">
        <Stack gap="sm">
          <ChipPicker items={groupedItems} selected={grouped} onChange={setGrouped} />
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Selected: {grouped.length ? grouped.join(', ') : '(none)'}
          </span>
        </Stack>
      </PropDemo>

      <PropDemo name="selected (pre-populated)" description="Pass initial values in the selected array to start with chips already active.">
        <Stack gap="sm">
          <ChipPicker items={basicItems} selected={preselected} onChange={setPreselected} />
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Selected: {preselected.length ? preselected.join(', ') : '(none)'}
          </span>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
