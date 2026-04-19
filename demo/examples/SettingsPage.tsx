import { useState } from 'react';
import { FormLayout, Input, Select, Textarea, Field } from '@4lt7ab/ui';

// SettingsPage — canonical FormLayout demo. Consumers typically bring their
// own form library (RHF / Formik / TanStack Form) and wire `dirty` to
// `formState.isDirty`; this demo goes the vanilla-React route and leans on
// `<FormLayout.DirtyOnChange>` so changes to any field bubble into the
// organism's dirty gate. `sticky='container'` keeps the action bar pinned to
// the pattern's bounded preview container instead of the full viewport.

export function SettingsPage(): React.JSX.Element {
  const [name, setName] = useState('Acme Corp');
  const [email, setEmail] = useState('admin@acme.dev');
  const [timezone, setTimezone] = useState('utc');
  const [bio, setBio] = useState('We build things that matter.');
  const [saved, setSaved] = useState<{ name: string; email: string; timezone: string; bio: string } | null>(null);

  const handleSave = async (): Promise<void> => {
    // Simulate a network round-trip so the save button shows its spinner —
    // FormLayout auto-drives `saving` around the returned promise.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSaved({ name, email, timezone, bio });
  };

  const handleCancel = (): void => {
    if (saved) {
      setName(saved.name);
      setEmail(saved.email);
      setTimezone(saved.timezone);
      setBio(saved.bio);
    }
  };

  return (
    <FormLayout.Root onSave={handleSave} onCancel={handleCancel} sticky="container">
      <FormLayout.Header
        title="Settings"
        description="Manage your workspace preferences"
      />

      <FormLayout.DirtyOnChange>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="General" />
          <FormLayout.SectionBody>
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
          </FormLayout.SectionBody>
        </FormLayout.Section>
      </FormLayout.DirtyOnChange>

      <FormLayout.Actions>
        <FormLayout.CancelButton />
        <FormLayout.SaveButton>Save changes</FormLayout.SaveButton>
      </FormLayout.Actions>
    </FormLayout.Root>
  );
}
