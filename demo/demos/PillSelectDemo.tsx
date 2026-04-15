import { useState } from 'react';
import { PillSelect, Stack } from '@4lt7ab/ui';

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

export function PillSelectDemo(): React.JSX.Element {
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [sort, setSort] = useState('newest');

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Filter bar</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Inactive pills have muted styling. Select a value to activate.
        </p>
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

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Always active</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          A sort selector that always has a value -- always shows active styling.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <PillSelect
            value={sort}
            options={sortOptions}
            onChange={setSort}
            ariaLabel="Sort order"
          />
        </div>
        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          Sort: {sort}
        </span>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Explicit active override</h3>
        <p style={{ margin: 0, fontSize: '0.8125rem', opacity: 0.7 }}>
          Force active styling regardless of value using the <code>active</code> prop.
        </p>
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
    </Stack>
  );
}
