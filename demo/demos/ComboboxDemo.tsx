import { useMemo, useState } from 'react';
import { Combobox, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

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

const rootProps: PropMeta[] = [
  { name: 'value', type: 'string', description: 'Controlled input value (text).' },
  { name: 'defaultValue', type: 'string', description: 'Uncontrolled initial input value.' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called on every input change \u2014 both free-text typing and option selection.' },
  { name: 'onSelect', type: '(option: { value, textValue }) => void', description: 'Called specifically when an option is picked from the list.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input and blocks opening.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Applies error border styling.' },
  { name: 'children', type: 'ReactNode', required: true, description: '<Combobox.Input> and <Combobox.List>.' },
];

// Helper: filter options by label, case-insensitive.
function filterByLabel<T extends { label: string }>(opts: T[], query: string): T[] {
  if (!query) return opts;
  const q = query.toLowerCase();
  return opts.filter((o) => o.label.toLowerCase().includes(q));
}

export function ComboboxDemo(): React.JSX.Element {
  const [basic, setBasic] = useState('');
  const [folder, setFolder] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const filteredFruit = useMemo(() => filterByLabel(fruitOptions, basic), [basic]);
  const filteredFolder = useMemo(() => filterByLabel(folderOptions, folder), [folder]);

  return (
    <DocBlock props={rootProps}>
      <PropDemo
        name="Basic (consumer-owned filtering)"
        description={"Type to filter. Consumers own the filter logic \u2014 pass only the Items that should be visible. The dropdown opens on focus and closes on selection."}
      >
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <Combobox.Root value={basic} onValueChange={setBasic}>
              <Combobox.Input placeholder="Search fruits..." aria-label="Fruit" />
              <Combobox.List>
                {filteredFruit.length === 0 ? (
                  <Combobox.Empty>No fruits match.</Combobox.Empty>
                ) : (
                  filteredFruit.map((o) => (
                    <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
                      {o.label}
                    </Combobox.Item>
                  ))
                )}
              </Combobox.List>
            </Combobox.Root>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Value: {basic || '(empty)'}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo
        name="onSelect"
        description="Fires only when an option is picked from the dropdown, not on free-text typing. Distinguishes typed values from selected ones."
      >
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <Combobox.Root
              value={folder}
              onValueChange={setFolder}
              onSelect={(opt) => setSelected(opt.textValue)}
            >
              <Combobox.Input placeholder="Type a folder path..." aria-label="Folder" />
              <Combobox.List>
                {filteredFolder.length === 0 ? (
                  <Combobox.Empty>No matches.</Combobox.Empty>
                ) : (
                  filteredFolder.map((o) => (
                    <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
                      {o.label}
                    </Combobox.Item>
                  ))
                )}
              </Combobox.List>
            </Combobox.Root>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Value: {folder || '(empty)'}
              {selected && ` | Last selected: ${selected}`}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling to the input.">
        <div style={{ maxWidth: '24rem' }}>
          <Combobox.Root hasError>
            <Combobox.Input placeholder="Error state" aria-label="Error combobox" />
            <Combobox.List>
              {fruitOptions.map((o) => (
                <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
                  {o.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Root>
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the input with muted background and not-allowed cursor.">
        <div style={{ maxWidth: '24rem' }}>
          <Combobox.Root disabled>
            <Combobox.Input placeholder="Disabled" aria-label="Disabled combobox" />
            <Combobox.List>
              {fruitOptions.map((o) => (
                <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
                  {o.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Root>
        </div>
      </PropDemo>
    </DocBlock>
  );
}
