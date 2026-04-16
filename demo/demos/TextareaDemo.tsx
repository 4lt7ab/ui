import { useState } from 'react';
import { Textarea, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'value', type: 'string', description: 'Controlled value.' },
  { name: 'defaultValue', type: 'string', description: 'Uncontrolled default value.' },
  { name: 'onChange', type: 'ChangeEventHandler', description: 'Called when the textarea value changes.' },
  { name: 'onFocus', type: 'FocusEventHandler', description: 'Called when the textarea gains focus.' },
  { name: 'onBlur', type: 'FocusEventHandler', description: 'Called when the textarea loses focus.' },
  { name: 'onKeyDown', type: 'KeyboardEventHandler', description: 'Called on key press while focused.' },
  { name: 'placeholder', type: 'string', description: 'Placeholder text shown when empty.' },
  { name: 'readOnly', type: 'boolean', description: 'Makes the textarea read-only (focusable but not editable).' },
  { name: 'rows', type: 'number', description: 'Number of visible text rows. Controls initial height.' },
  { name: 'maxLength', type: 'number', description: 'Maximum character count.' },
  { name: 'name', type: 'string', description: 'Form field name for submission.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea and applies muted styling.' },
  { name: 'required', type: 'boolean', description: 'Marks the field as required for form validation.' },
  { name: 'autoFocus', type: 'boolean', description: 'Automatically focus the textarea on mount.' },
  { name: 'form', type: 'string', description: 'Associates the textarea with a form by ID.' },
  { name: 'tabIndex', type: 'number', description: 'Tab order override.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Renders error border styling. Typically driven by a parent Field.' },
];

export function TextareaDemo(): React.JSX.Element {
  const [controlled, setControlled] = useState('Editable content here.');

  return (
    <DocBlock props={props}>
      <PropDemo name="placeholder" description="Hint text displayed when the textarea is empty.">
        <div style={{ maxWidth: '32rem' }}>
          <Textarea placeholder="Write your notes here..." />
        </div>
      </PropDemo>

      <PropDemo name="rows" description="Controls the initial visible height. The textarea is still vertically resizable.">
        <div style={{ maxWidth: '32rem' }}>
          <Stack gap="md">
            <Textarea placeholder="2 rows" rows={2} />
            <Textarea placeholder="6 rows" rows={6} />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="value + onChange" description="Controlled mode. The parent owns the value and updates it via onChange.">
        <div style={{ maxWidth: '32rem' }}>
          <Stack gap="sm">
            <Textarea value={controlled} onChange={(e) => setControlled(e.target.value)} rows={3} />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Length: {controlled.length}</span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling. Use with a parent Field to show validation messages.">
        <div style={{ maxWidth: '32rem' }}>
          <Stack gap="md">
            <Textarea placeholder="Default" />
            <Textarea placeholder="Error state" hasError />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the textarea with muted background and prevents resizing.">
        <div style={{ maxWidth: '32rem' }}>
          <Textarea value="Disabled textarea" disabled />
        </div>
      </PropDemo>

      <PropDemo name="maxLength" description="Limits the number of characters. The browser enforces the constraint natively.">
        <div style={{ maxWidth: '32rem' }}>
          <Textarea placeholder="Max 100 characters" maxLength={100} rows={2} />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
