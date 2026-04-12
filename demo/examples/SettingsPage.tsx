import { useState } from 'react';
import { PageHeader, Card, Stack, Input, Select, Textarea, Button, Field } from '@4lt7ab/ui';

export function SettingsPage(): React.JSX.Element {
  const [name, setName] = useState('Acme Corp');
  const [email, setEmail] = useState('admin@acme.dev');
  const [timezone, setTimezone] = useState('utc');
  const [bio, setBio] = useState('We build things that matter.');

  return (
    <Stack gap="xl" style={{ maxWidth: 600 }}>
      <PageHeader
        title="Settings"
        subtitle="Manage your workspace preferences"
      />

      <Card>
        <Stack gap="lg">
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>
            General
          </h3>
          <Field label="Workspace name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field label="Contact email">
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
          <Field label="Timezone">
            <Select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              options={[
                { value: 'utc', label: 'UTC' },
                { value: 'est', label: 'Eastern (EST)' },
                { value: 'pst', label: 'Pacific (PST)' },
                { value: 'cet', label: 'Central European (CET)' },
              ]}
            />
          </Field>
          <Field label="Bio">
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
          </Field>
        </Stack>
      </Card>

      <Stack direction="horizontal" gap="sm" justify="flex-end">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save changes</Button>
      </Stack>
    </Stack>
  );
}
