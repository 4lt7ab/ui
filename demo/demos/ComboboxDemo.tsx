import { useState } from 'react';
import { Combobox, Stack } from '@4lt7ab/ui';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
  { value: 'peach', label: 'Peach' },
  { value: 'strawberry', label: 'Strawberry' },
];

const folderOptions = [
  { value: '/home/user/documents', label: '/home/user/documents' },
  { value: '/home/user/downloads', label: '/home/user/downloads' },
  { value: '/home/user/desktop', label: '/home/user/desktop' },
  { value: '/home/user/projects', label: '/home/user/projects' },
  { value: '/home/user/projects/app', label: '/home/user/projects/app' },
  { value: '/home/user/projects/lib', label: '/home/user/projects/lib' },
];

export function ComboboxDemo(): React.JSX.Element {
  const [basic, setBasic] = useState('');
  const [folder, setFolder] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Type to filter, or enter a custom value.
        </p>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <Combobox
            options={fruitOptions}
            value={basic}
            onChange={setBasic}
            placeholder="Search fruits..."
          />
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Value: {basic || '(empty)'}
          </span>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Folder picker</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Pre-populated with known paths. Free-text entry for custom paths.
        </p>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <Combobox
            options={folderOptions}
            value={folder}
            onChange={setFolder}
            onSelect={(opt) => setSelected(opt.label)}
            placeholder="Type a folder path..."
          />
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Value: {folder || '(empty)'}
            {selected && ` — last selected: ${selected}`}
          </span>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <Combobox
            options={fruitOptions}
            value=""
            onChange={() => {}}
            placeholder="Error state"
            hasError
          />
          <Combobox
            options={fruitOptions}
            value=""
            onChange={() => {}}
            placeholder="Disabled"
            disabled
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
