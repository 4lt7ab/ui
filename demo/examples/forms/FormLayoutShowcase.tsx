import { useState } from 'react';
import {
  Field,
  FormLayout,
  Input,
  Select,
  SegmentedControl,
  Textarea,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// FormLayout showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// The big things a code fence can't carry for `FormLayout`:
//
//   1. The **dirty gate**. `FormLayout.SaveButton` auto-disables when
//      the form is pristine. `FormLayout.DirtyOnChange` listens for any
//      bubbled change event and flips `dirty` to true, which re-enables
//      the save button. You can see the button go from disabled → enabled
//      the first time you edit a field.
//
//   2. The **async save loop**. Passing a Promise from `onSave` puts
//      Root into `saving` state — SaveButton renders its `savingLabel`
//      and `aria-busy` until the Promise settles, at which point the
//      form resets to pristine via the inline dirty clear.
//
// `sticky="container"` renders the Actions bar inside the form's own
// scroll container (not portalled), so the bar stays inside the Card
// frame rather than pinning to the bottom of the demo viewport.

const DIGESTS = [
  { value: 'off', label: 'Off' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
];

export function FormLayoutShowcase(): React.JSX.Element {
  const [dirty, setDirty] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const handleSave = async (): Promise<void> => {
    // Fake a network round-trip so the saving-state transition is visible.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setDirty(false);
    setLastSaved(new Date().toLocaleTimeString());
  };

  return (
    <FormLayout.Root
      dirty={dirty}
      onDirtyChange={setDirty}
      onSave={handleSave}
      onCancel={() => setDirty(false)}
      sticky="container"
    >
      <FormLayout.Header
        title="Account settings"
        description={
          lastSaved
            ? `Last saved at ${lastSaved}. Edit a field to dirty the form.`
            : 'Edit any field — the save button enables once the form is dirty.'
        }
      />

      <FormLayout.DirtyOnChange>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="Profile" />
          <FormLayout.SectionBody>
            <Field label="Display name">
              <Input name="name" defaultValue="Alex Rivera" />
            </Field>
            <Field label="Bio" help="A short one-liner for your profile.">
              <Textarea
                name="bio"
                rows={2}
                defaultValue="Designer. Cares about margins."
              />
            </Field>
          </FormLayout.SectionBody>
        </FormLayout.Section>

        <FormLayout.Section>
          <FormLayout.SectionHeader title="Notifications" />
          <FormLayout.SectionBody>
            <Field label="Digest">
              <Select.Root name="digest" defaultValue="weekly">
                <Select.Trigger aria-label="Digest frequency">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  {DIGESTS.map((d) => (
                    <Select.Item key={d.value} value={d.value}>
                      {d.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Field>
            <Field label="Quiet hours">
              <SegmentedControl
                aria-label="Quiet hours"
                defaultValue="weekends"
                segments={[
                  { value: 'never', label: 'Never' },
                  { value: 'nights', label: 'Nights' },
                  { value: 'weekends', label: 'Weekends' },
                ]}
              />
            </Field>
          </FormLayout.SectionBody>
        </FormLayout.Section>
      </FormLayout.DirtyOnChange>

      <FormLayout.Actions>
        <span style={dirtyBadgeStyle}>
          {dirty ? 'Unsaved changes' : 'All changes saved'}
        </span>
        <FormLayout.CancelButton />
        <FormLayout.SaveButton />
      </FormLayout.Actions>
    </FormLayout.Root>
  );
}

const dirtyBadgeStyle: React.CSSProperties = {
  marginRight: 'auto',
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  fontFamily: t.fontSans,
};
