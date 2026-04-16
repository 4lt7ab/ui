import { useState } from 'react';
import { Input, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'type', type: "'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search'", description: 'HTML input type.' },
  { name: 'value', type: 'string | number', description: 'Controlled value.' },
  { name: 'defaultValue', type: 'string | number', description: 'Uncontrolled default value.' },
  { name: 'onChange', type: 'ChangeEventHandler', description: 'Called when the input value changes.' },
  { name: 'onFocus', type: 'FocusEventHandler', description: 'Called when the input gains focus.' },
  { name: 'onBlur', type: 'FocusEventHandler', description: 'Called when the input loses focus.' },
  { name: 'onKeyDown', type: 'KeyboardEventHandler', description: 'Called on key press while focused.' },
  { name: 'placeholder', type: 'string', description: 'Placeholder text shown when empty.' },
  { name: 'readOnly', type: 'boolean', description: 'Makes the input read-only (focusable but not editable).' },
  { name: 'maxLength', type: 'number', description: 'Maximum character count.' },
  { name: 'min', type: 'string | number', description: 'Minimum value for number/date inputs.' },
  { name: 'max', type: 'string | number', description: 'Maximum value for number/date inputs.' },
  { name: 'step', type: 'string | number', description: 'Step increment for number inputs.' },
  { name: 'pattern', type: 'string', description: 'Regex pattern for client-side validation.' },
  { name: 'inputMode', type: "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'", description: 'Hint for virtual keyboard layout on mobile.' },
  { name: 'name', type: 'string', description: 'Form field name for submission.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input and applies muted styling.' },
  { name: 'required', type: 'boolean', description: 'Marks the field as required for form validation.' },
  { name: 'autoFocus', type: 'boolean', description: 'Automatically focus the input on mount.' },
  { name: 'autoComplete', type: 'string', description: 'Browser autocomplete hint (e.g. "email", "off").' },
  { name: 'form', type: 'string', description: 'Associates the input with a form by ID.' },
  { name: 'tabIndex', type: 'number', description: 'Tab order override.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Renders error border styling. Typically driven by a parent Field.' },
];

export function InputDemo(): React.JSX.Element {
  const [controlled, setControlled] = useState('Hello');

  return (
    <DocBlock props={props}>
      <PropDemo name="type" description="Sets the HTML input type, which controls browser behavior, validation, and mobile keyboard.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Input type="text" placeholder="Text" />
            <Input type="email" placeholder="email@example.com" />
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="0" />
            <Input type="url" placeholder="https://..." />
            <Input type="tel" placeholder="+1 (555) 000-0000" />
            <Input type="search" placeholder="Search..." />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="placeholder" description="Hint text displayed when the input is empty.">
        <div style={{ maxWidth: '24rem' }}>
          <Input placeholder="Enter your name..." />
        </div>
      </PropDemo>

      <PropDemo name="value + onChange" description="Controlled mode. The parent owns the value and updates it via onChange.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <Input value={controlled} onChange={(e) => setControlled(e.target.value)} />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Value: {controlled}</span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling. Use with a parent Field to show validation messages.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Input placeholder="Default" />
            <Input placeholder="Error state" hasError />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the input with muted background and not-allowed cursor.">
        <div style={{ maxWidth: '24rem' }}>
          <Input value="Cannot edit this" disabled />
        </div>
      </PropDemo>

      <PropDemo name="readOnly" description="The input is focusable but not editable. Useful for displaying computed values.">
        <div style={{ maxWidth: '24rem' }}>
          <Input value="Read-only content" readOnly />
        </div>
      </PropDemo>

      <PropDemo name="maxLength + inputMode" description="Constrain length and hint the mobile keyboard layout.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Input placeholder="Max 10 chars" maxLength={10} />
            <Input placeholder="Numeric keyboard" inputMode="numeric" />
          </Stack>
        </div>
      </PropDemo>
    </DocBlock>
  );
}
