import { useState } from 'react';
import { PillSelect, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const statusOptions = [
  { value: '', label: 'Status' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'archived', label: 'Archived' },
];

const roleOptions = [
  { value: '', label: 'Role' },
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'name', label: 'Name A-Z' },
];

const props: PropMeta[] = [
  { name: 'value', type: 'string', required: true, description: 'Current selected value.' },
  { name: 'options', type: 'PillSelectOption[]', required: true, description: 'Available options. Each has value and label.' },
  { name: 'onChange', type: '(value: string) => void', required: true, description: 'Called with the new value on change.' },
  { name: 'ariaLabel', type: 'string', required: true, description: 'Accessible label for the select (not visible).' },
  { name: 'active', type: 'boolean', default: '!!value', description: 'Whether the pill shows active styling. Defaults to true when value is truthy.' },
];

export function PillSelectDemo(): React.JSX.Element {
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [sort, setSort] = useState('newest');

  return (
    <DocBlock props={props}>
      <PropDemo name="value + options + onChange" description="Pill-shaped native select for filter bars. Inactive pills have muted styling; selecting a value activates them.">
        <Stack gap="sm">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <PillSelect
              value={status}
              options={statusOptions}
              onChange={setStatus}
              ariaLabel="Filter by status"
            />
            <PillSelect
              value={role}
              options={roleOptions}
              onChange={setRole}
              ariaLabel="Filter by role"
            />
          </div>
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Status: {status || '(none)'} | Role: {role || '(none)'}
          </span>
        </Stack>
      </PropDemo>

      <PropDemo name="ariaLabel" description="Required accessible label since the pill has no visible label element. Describes the filter purpose.">
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <PillSelect
            value={sort}
            options={sortOptions}
            onChange={setSort}
            ariaLabel="Sort order"
          />
        </div>
      </PropDemo>

      <PropDemo name="active" description="Override the default active detection. By default, active is true when value is truthy. Use explicit true/false to force styling.">
        <Stack gap="sm">
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <PillSelect
              value=""
              options={statusOptions}
              onChange={() => {}}
              ariaLabel="Forced active"
              active={true}
            />
            <PillSelect
              value="active"
              options={statusOptions}
              onChange={() => {}}
              ariaLabel="Forced inactive"
              active={false}
            />
          </div>
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Left: empty value + active=true | Right: has value + active=false
          </span>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
