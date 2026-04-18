import { useState } from 'react';
import { Select, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const rootProps: PropMeta[] = [
  { name: 'value', type: 'string', description: 'Controlled selected value.' },
  { name: 'defaultValue', type: 'string', description: 'Uncontrolled initial value.' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called when the user picks a new value.' },
  { name: 'onChange', type: '(event: { target: { value, name } }) => void', description: 'Legacy-shaped handler (synthetic event). Prefer onValueChange.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the trigger and blocks opening.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Applies error border styling. Typically driven by a parent Field.' },
  { name: 'name', type: 'string', description: 'Form field name. A hidden native <select> is rendered for form submission.' },
  { name: 'required', type: 'boolean', description: 'Marks the hidden native select as required.' },
  { name: 'id', type: 'string', description: 'DOM id for the hidden native select (used by a wrapping <Field>\u2019s htmlFor).' },
  { name: 'form', type: 'string', description: 'Form id for the hidden native select.' },
  { name: 'children', type: 'ReactNode', required: true, description: '<Select.Trigger> and <Select.Content>.' },
];

const triggerProps: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Usually <Select.Value placeholder="\u2026"/>. Any ReactNode works.' },
  { name: 'aria-label', type: 'string', description: 'Accessible label when no visible label is provided by a parent Field.' },
  { name: 'aria-labelledby', type: 'string', description: 'ID of an element labelling the combobox.' },
  { name: 'aria-describedby', type: 'string', description: 'ID of an element describing the combobox.' },
];

const valueProps: PropMeta[] = [
  { name: 'placeholder', type: 'string', description: 'Shown when no value is selected.' },
];

const itemProps: PropMeta[] = [
  { name: 'value', type: 'string', required: true, description: 'The value selected when this item is chosen.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When true, the item is unselectable and skipped by keyboard navigation.' },
  { name: 'textValue', type: 'string', description: 'Explicit label for registration (used by Select.Value and the hidden native <option>). Defaults to children when children is a string.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Display content — usually the label string.' },
];

export function SelectDemo(): React.JSX.Element {
  const [role, setRole] = useState('');

  return (
    <DocBlock props={rootProps}>
      <PropDemo name="Basic" description="A compound Select with a Trigger, Content, and one Item per option.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Select.Root>
              <Select.Trigger aria-label="Role">
                <Select.Value placeholder="Pick a role..." />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="admin">Admin</Select.Item>
                <Select.Item value="editor">Editor</Select.Item>
                <Select.Item value="viewer">Viewer</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root>
              <Select.Trigger aria-label="Fruit">
                <Select.Value placeholder="Some disabled..." />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="banana" disabled>Banana</Select.Item>
                <Select.Item value="cherry">Cherry</Select.Item>
                <Select.Item value="grape" disabled>Grape</Select.Item>
              </Select.Content>
            </Select.Root>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="Controlled (value + onValueChange)" description="The parent owns the value and updates it via onValueChange.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <Select.Root value={role} onValueChange={setRole}>
              <Select.Trigger aria-label="Controlled role">
                <Select.Value placeholder="Select role..." />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="admin">Admin</Select.Item>
                <Select.Item value="editor">Editor</Select.Item>
                <Select.Item value="viewer">Viewer</Select.Item>
              </Select.Content>
            </Select.Root>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Value: {role || '(none)'}</span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="Uncontrolled (defaultValue)" description="Select manages its own state; the initial value is seeded by defaultValue.">
        <div style={{ maxWidth: '24rem' }}>
          <Select.Root defaultValue="editor">
            <Select.Trigger aria-label="Default role">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="admin">Admin</Select.Item>
              <Select.Item value="editor">Editor</Select.Item>
              <Select.Item value="viewer">Viewer</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling. Use with a parent Field to show validation messages.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Select.Root>
              <Select.Trigger aria-label="Default">
                <Select.Value placeholder="Default" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="admin">Admin</Select.Item>
                <Select.Item value="editor">Editor</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root hasError>
              <Select.Trigger aria-label="Error state">
                <Select.Value placeholder="Error state" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="admin">Admin</Select.Item>
                <Select.Item value="editor">Editor</Select.Item>
              </Select.Content>
            </Select.Root>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the trigger with muted background and not-allowed cursor.">
        <div style={{ maxWidth: '24rem' }}>
          <Select.Root disabled>
            <Select.Trigger aria-label="Locked">
              <Select.Value placeholder="Locked option" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="locked">Locked option</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </PropDemo>

      <PropDemo name="Rich item content" description={"Items accept any ReactNode. Pass textValue when children isn\u2019t a plain string so Select.Value and the hidden native <option> have a label."}>
        <div style={{ maxWidth: '24rem' }}>
          <Select.Root>
            <Select.Trigger aria-label="Timezone">
              <Select.Value placeholder="Choose a timezone..." />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="utc" textValue="UTC">
                <span style={{ fontFamily: 'var(--font-mono)' }}>UTC</span>
              </Select.Item>
              <Select.Item value="est" textValue="Eastern (ET)">
                <span style={{ fontFamily: 'var(--font-mono)' }}>Eastern (ET)</span>
              </Select.Item>
              <Select.Item value="pst" textValue="Pacific (PT)">
                <span style={{ fontFamily: 'var(--font-mono)' }}>Pacific (PT)</span>
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </PropDemo>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h4 style={{ margin: '0 0 var(--space-sm) 0' }}>Select.Trigger</h4>
        <PropsSubtable rows={triggerProps} />
      </div>
      <div style={{ marginTop: 'var(--space-lg)' }}>
        <h4 style={{ margin: '0 0 var(--space-sm) 0' }}>Select.Value</h4>
        <PropsSubtable rows={valueProps} />
      </div>
      <div style={{ marginTop: 'var(--space-lg)' }}>
        <h4 style={{ margin: '0 0 var(--space-sm) 0' }}>Select.Item</h4>
        <PropsSubtable rows={itemProps} />
      </div>
    </DocBlock>
  );
}

// A compact local props table for the sub-components. The main DocBlock
// table lists Select.Root props; sub-component props are listed below it.
function PropsSubtable({ rows }: { rows: PropMeta[] }): React.JSX.Element {
  return (
    <table style={{ width: '100%', fontSize: '0.8125rem', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ textAlign: 'left', color: 'var(--color-text-muted)' }}>
          <th style={{ padding: '0.25rem 0.5rem 0.25rem 0', fontWeight: 500 }}>Prop</th>
          <th style={{ padding: '0.25rem 0.5rem', fontWeight: 500 }}>Type</th>
          <th style={{ padding: '0.25rem 0.5rem', fontWeight: 500 }}>Default</th>
          <th style={{ padding: '0.25rem 0 0.25rem 0.5rem', fontWeight: 500 }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} style={{ borderTop: '1px solid var(--color-border)' }}>
            <td style={{ padding: '0.35rem 0.5rem 0.35rem 0', fontFamily: 'var(--font-mono)' }}>
              {r.name}{r.required ? '*' : ''}
            </td>
            <td style={{ padding: '0.35rem 0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>{r.type}</td>
            <td style={{ padding: '0.35rem 0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>{r.default ?? '\u2014'}</td>
            <td style={{ padding: '0.35rem 0 0.35rem 0.5rem' }}>{r.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
