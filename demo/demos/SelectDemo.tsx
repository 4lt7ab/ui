import { useState } from 'react';
import { Select, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const roleOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
];

const timezoneOptions = [
  { value: 'utc', label: 'UTC' },
  { value: 'est', label: 'Eastern (ET)' },
  { value: 'cst', label: 'Central (CT)' },
  { value: 'mst', label: 'Mountain (MT)' },
  { value: 'pst', label: 'Pacific (PT)' },
];

const withDisabledOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape', disabled: true },
];

const props: PropMeta[] = [
  { name: 'options', type: 'SelectOption[]', description: 'Options to render. Each has value, label, and optional disabled. Ignored when children is provided.' },
  { name: 'children', type: 'ReactNode', description: 'Custom option/optgroup elements. When provided, options is ignored and a native select is rendered.' },
  { name: 'placeholder', type: 'string', description: 'Placeholder shown as a first disabled option.' },
  { name: 'value', type: 'string | number | readonly string[]', description: 'Controlled value.' },
  { name: 'defaultValue', type: 'string | number | readonly string[]', description: 'Uncontrolled default value.' },
  { name: 'onChange', type: 'ChangeEventHandler', description: 'Called when the selected value changes.' },
  { name: 'onFocus', type: 'FocusEventHandler', description: 'Called when the select gains focus.' },
  { name: 'onBlur', type: 'FocusEventHandler', description: 'Called when the select loses focus.' },
  { name: 'name', type: 'string', description: 'Form field name for submission.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select and applies muted styling.' },
  { name: 'required', type: 'boolean', description: 'Marks the field as required for form validation.' },
  { name: 'form', type: 'string', description: 'Associates the select with a form by ID.' },
  { name: 'tabIndex', type: 'number', description: 'Tab order override.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Renders error border styling. Typically driven by a parent Field.' },
];

export function SelectDemo(): React.JSX.Element {
  const [role, setRole] = useState('');

  return (
    <DocBlock props={props}>
      <PropDemo name="options" description="Pass an array of { value, label, disabled? } objects. The component renders a custom dropdown with keyboard navigation.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Select options={roleOptions} placeholder="Pick a role..." />
            <Select options={withDisabledOptions} placeholder="Some disabled..." />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="placeholder" description="Shown as the initial display text when no value is selected.">
        <div style={{ maxWidth: '24rem' }}>
          <Select placeholder="Choose a timezone..." options={timezoneOptions} />
        </div>
      </PropDemo>

      <PropDemo name="value + onChange" description="Controlled mode. The parent owns the value and updates it via onChange.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <Select
              options={roleOptions}
              placeholder="Select role..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Value: {role || '(none)'}</span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="defaultValue" description="Uncontrolled mode with a pre-selected value.">
        <div style={{ maxWidth: '24rem' }}>
          <Select options={roleOptions} defaultValue="editor" />
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling. Use with a parent Field to show validation messages.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Select placeholder="Default" options={roleOptions} />
            <Select placeholder="Error state" options={roleOptions} hasError />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the select with muted background and not-allowed cursor.">
        <div style={{ maxWidth: '24rem' }}>
          <Select options={[{ value: 'locked', label: 'Locked option' }]} disabled />
        </div>
      </PropDemo>

      <PropDemo name="children" description="Pass custom option/optgroup elements for native select rendering. Useful for optgroup support.">
        <div style={{ maxWidth: '24rem' }}>
          <Select placeholder="Pick a fruit...">
            <optgroup label="Citrus">
              <option value="orange">Orange</option>
              <option value="lemon">Lemon</option>
            </optgroup>
            <optgroup label="Berry">
              <option value="strawberry">Strawberry</option>
              <option value="blueberry">Blueberry</option>
            </optgroup>
          </Select>
        </div>
      </PropDemo>
    </DocBlock>
  );
}
