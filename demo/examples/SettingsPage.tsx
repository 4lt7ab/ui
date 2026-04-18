import { useState } from 'react';
import { Header, Card, Stack, Input, Select, Textarea, Button, Field } from '@4lt7ab/ui';

export function SettingsPage(): React.JSX.Element {
  const [name, setName] = useState('Acme Corp');
  const [email, setEmail] = useState('admin@acme.dev');
  const [timezone, setTimezone] = useState('utc');
  const [bio, setBio] = useState('We build things that matter.');

  return (
    <div style={{ maxWidth: 600 }}>
    <Stack gap="xl">
      <Header
        level="page"
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
            <Select.Root value={timezone} onValueChange={setTimezone}>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="utc">UTC</Select.Item>
                <Select.Item value="est">Eastern (EST)</Select.Item>
                <Select.Item value="pst">Pacific (PST)</Select.Item>
                <Select.Item value="cet">Central European (CET)</Select.Item>
              </Select.Content>
            </Select.Root>
          </Field>
          <Field label="Bio">
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
          </Field>
        </Stack>
      </Card>

      <Stack direction="horizontal" gap="sm" justify="end">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save changes</Button>
      </Stack>
    </Stack>
    </div>
  );
}
