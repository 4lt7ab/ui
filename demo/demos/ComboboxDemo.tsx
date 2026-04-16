import { useState } from 'react';
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

const props: PropMeta[] = [
  { name: 'options', type: 'ComboboxOption[]', required: true, description: 'Options to render. Each has value and label. Filtered automatically as the user types.' },
  { name: 'value', type: 'string', required: true, description: 'Current input value (controlled).' },
  { name: 'onChange', type: '(value: string) => void', required: true, description: 'Called on input change and option selection.' },
  { name: 'onSelect', type: '(option: ComboboxOption) => void', description: 'Called specifically when an option is selected from the list.' },
  { name: 'placeholder', type: 'string', description: 'Input placeholder text.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the combobox.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Renders error border styling. Typically driven by a parent Field.' },
  { name: 'onFocus', type: 'FocusEventHandler', description: 'Called when the input gains focus.' },
  { name: 'onBlur', type: 'FocusEventHandler', description: 'Called when the input loses focus.' },
  { name: 'onKeyDown', type: 'KeyboardEventHandler', description: 'Called on key press while focused.' },
  { name: 'readOnly', type: 'boolean', description: 'Makes the input read-only.' },
  { name: 'maxLength', type: 'number', description: 'Maximum character count.' },
  { name: 'inputMode', type: "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'", description: 'Hint for virtual keyboard layout.' },
  { name: 'name', type: 'string', description: 'Form field name for submission.' },
  { name: 'required', type: 'boolean', description: 'Marks the field as required.' },
  { name: 'autoFocus', type: 'boolean', description: 'Automatically focus on mount.' },
  { name: 'autoComplete', type: 'string', description: 'Browser autocomplete hint. Defaults to "off".' },
  { name: 'form', type: 'string', description: 'Associates the input with a form by ID.' },
  { name: 'tabIndex', type: 'number', description: 'Tab order override.' },
];

export function ComboboxDemo(): React.JSX.Element {
  const [basic, setBasic] = useState('');
  const [folder, setFolder] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <DocBlock props={props}>
      <PropDemo name="options + value + onChange" description="Type to filter options. The dropdown opens on focus and filters as you type. Free-text entry is also supported.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
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
        </div>
      </PropDemo>

      <PropDemo name="onSelect" description="Called only when an option is picked from the dropdown, not on free-text typing. Useful for distinguishing between typed and selected values.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <Combobox
              options={folderOptions}
              value={folder}
              onChange={setFolder}
              onSelect={(opt) => setSelected(opt.label)}
              placeholder="Type a folder path..."
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Value: {folder || '(empty)'}
              {selected && ` | Last selected: ${selected}`}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="placeholder" description="Hint text displayed when the input is empty.">
        <div style={{ maxWidth: '24rem' }}>
          <Combobox options={fruitOptions} value="" onChange={() => {}} placeholder="Type to search..." />
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling to the input.">
        <div style={{ maxWidth: '24rem' }}>
          <Combobox options={fruitOptions} value="" onChange={() => {}} placeholder="Error state" hasError />
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the combobox with muted background and not-allowed cursor.">
        <div style={{ maxWidth: '24rem' }}>
          <Combobox options={fruitOptions} value="" onChange={() => {}} placeholder="Disabled" disabled />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
