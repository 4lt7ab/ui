import { useState } from 'react';
import {
  FormLayout,
  Field,
  Input,
  Textarea,
  Select,
  Badge,
  useFormLayout,
} from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

// ---------------------------------------------------------------------------
// Props metadata
// ---------------------------------------------------------------------------

const props: PropMeta[] = [
  {
    name: 'FormLayout.Root',
    type: "{ dirty?; defaultDirty?; onDirtyChange?; saving?; defaultSaving?; onSavingChange?; onSave?(event); onCancel?(); sticky?; noValidate?; children }",
    description:
      "Renders a <form noValidate> and owns dirty + saving state with full controlled/uncontrolled parity. `onSave` fires on native submit (SaveButton click, Enter in a non-textarea field); returning a Promise auto-drives `saving` while it resolves. `sticky='container'` (default) pins Actions to its scroll container; `'viewport'` portals to document.body; `false` renders inline.",
  },
  {
    name: 'FormLayout.Header',
    type: '{ title: string; description? }',
    description:
      "Forwards to <Header level='page'> — renders an <h1> + optional muted subtitle. Same primitive DetailPage and the other organisms use, so page headers stay visually consistent.",
  },
  {
    name: 'FormLayout.Section / .SectionHeader / .SectionBody',
    type: '{ children } / { title; description? } / { children }',
    description:
      'Section is a <section aria-labelledby={sectionHeaderId}> with padding + border. SectionHeader registers its heading id with the parent Section. SectionBody is a vertical stack for the consumer <Field> / <Input> / <Textarea> / etc.',
  },
  {
    name: 'FormLayout.Actions',
    type: '{ children }',
    description:
      "Sticky save/cancel bar. role='toolbar', aria-label='Form actions'. data-state='saving' | 'idle'. Positioning driven by Root's `sticky` prop — no per-Actions override.",
  },
  {
    name: 'FormLayout.SaveButton',
    type: "{ children?; savingLabel?; variant?; ... ButtonProps }",
    description:
      "type='submit' + form={rootId} so Enter in any non-textarea field triggers it. Auto-disabled when `!dirty`; an explicit `disabled` prop wins. Shows `savingLabel` + aria-busy while saving.",
  },
  {
    name: 'FormLayout.CancelButton',
    type: "{ children?; variant?; onClick?; ... ButtonProps }",
    description:
      'Fires `onCancel` on Root. Consumer onClick runs first and can `preventDefault` to block it.',
  },
  {
    name: 'FormLayout.DirtyOnChange',
    type: '{ children }',
    description:
      "Opt-in adapter. Wraps its children in a display:contents <div> with onChange listener that calls setDirty(true) on the first bubbled change. Once dirty, it short-circuits so keystrokes don't re-render the form.",
  },
  {
    name: 'FormLayout.NavigationGuard',
    type: '{ message? }',
    description:
      'Attaches a `beforeunload` listener while `dirty` is true; lets the browser show its canned unsaved-changes prompt. Does NOT block in-app route changes — that is router-specific; see the README for the React Router recipe.',
  },
  {
    name: 'useFormLayout()',
    type: '() => { dirty, setDirty, saving, setSaving }',
    description:
      "Public hook for reading/writing form state from custom children. Use for an 'unsaved' badge outside the Actions bar, a `*` next to a dirty field, or driving setSaving from a custom submit flow.",
  },
];

// ---------------------------------------------------------------------------
// Demo: uncontrolled with DirtyOnChange adapter (the vanilla-React recipe)
// ---------------------------------------------------------------------------

function UncontrolledSettingsForm(): React.JSX.Element {
  const [savedAt, setSavedAt] = useState<string | null>(null);

  return (
    <FormLayout.Root
      defaultDirty={false}
      onSave={async (event) => {
        event.preventDefault();
        // Pretend we POSTed. Root will auto-drive `saving` while this Promise
        // is in flight because we're uncontrolled on `saving`.
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSavedAt(new Date().toLocaleTimeString());
      }}
      onCancel={() => setSavedAt('(cancelled)')}
    >
      <FormLayout.Header
        title="Settings"
        description="DirtyOnChange + defaultDirty — no field wiring required."
      />
      <FormLayout.DirtyOnChange>
        <FormLayout.Section>
          <FormLayout.SectionHeader
            title="Profile"
            description="Name and email shown to teammates."
          />
          <FormLayout.SectionBody>
            <Field label="Name">
              <Input name="name" defaultValue="Alex Rivera" />
            </Field>
            <Field label="Email">
              <Input name="email" type="email" defaultValue="alex@example.com" />
            </Field>
            <Field label="Bio" help="Shown on your public profile.">
              <Textarea name="bio" defaultValue="" rows={3} />
            </Field>
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Section>
          <FormLayout.SectionHeader
            title="Notifications"
            description="Pick how often the digest arrives."
          />
          <FormLayout.SectionBody>
            <Field label="Digest frequency">
              <Select.Root defaultValue="weekly" name="frequency">
                <Select.Trigger>
                  <Select.Value placeholder="Choose…" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="off">Off</Select.Item>
                  <Select.Item value="daily">Daily</Select.Item>
                  <Select.Item value="weekly">Weekly</Select.Item>
                </Select.Content>
              </Select.Root>
            </Field>
          </FormLayout.SectionBody>
        </FormLayout.Section>
      </FormLayout.DirtyOnChange>
      <FormLayout.Actions>
        <FormLayout.CancelButton />
        <FormLayout.SaveButton />
      </FormLayout.Actions>
      <FormLayout.NavigationGuard />
      <div
        style={{
          marginTop: 'var(--space-sm)',
          color: 'var(--color-text-muted)',
          fontSize: 'var(--font-size-sm)',
        }}
      >
        {savedAt === null
          ? 'Type anywhere above, then press Save. NavigationGuard blocks page-close while dirty.'
          : `Last action at ${savedAt}.`}
      </div>
    </FormLayout.Root>
  );
}

// ---------------------------------------------------------------------------
// Demo: controlled-dirty adapter (the React-Hook-Form / Formik recipe)
// ---------------------------------------------------------------------------

function ControlledDirtyForm(): React.JSX.Element {
  const initial = { name: 'Alex', email: 'alex@example.com' };
  const [values, setValues] = useState(initial);
  const dirty =
    values.name !== initial.name || values.email !== initial.email;

  return (
    <FormLayout.Root
      dirty={dirty}
      onSave={(event) => {
        event.preventDefault();
        // Reset the baseline to the current values so the form goes pristine.
        // In a real app you'd do this after the server confirms.
        // (Keeping `values` as the new initial mimics formState.reset.)
      }}
      onCancel={() => setValues(initial)}
    >
      <FormLayout.Header
        title="Controlled dirty"
        description="Consumer computes `dirty` from their own state (the RHF / Formik shape)."
      />
      <FormLayout.Section>
        <FormLayout.SectionHeader title="Profile" />
        <FormLayout.SectionBody>
          <Field label="Name">
            <Input
              name="name"
              value={values.name}
              onChange={(event) =>
                setValues((v) => ({ ...v, name: event.currentTarget.value }))
              }
            />
          </Field>
          <Field label="Email">
            <Input
              name="email"
              type="email"
              value={values.email}
              onChange={(event) =>
                setValues((v) => ({ ...v, email: event.currentTarget.value }))
              }
            />
          </Field>
        </FormLayout.SectionBody>
      </FormLayout.Section>
      <FormLayout.Actions>
        <DirtyBadge />
        <FormLayout.CancelButton />
        <FormLayout.SaveButton />
      </FormLayout.Actions>
    </FormLayout.Root>
  );
}

/** Reads `dirty` via the public hook and renders an inline indicator —
 * the canonical reason `useFormLayout()` exists. */
function DirtyBadge(): React.JSX.Element | null {
  const { dirty } = useFormLayout();
  if (!dirty) return null;
  return (
    <span style={{ marginRight: 'auto' }}>
      <Badge variant="warning">Unsaved changes</Badge>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Demo entrypoint
// ---------------------------------------------------------------------------

export function FormLayoutDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo
        name="Settings page — uncontrolled with DirtyOnChange + NavigationGuard"
        description="The vanilla-React recipe. defaultDirty={false} + <FormLayout.DirtyOnChange> makes any bubbled change event flip the form dirty. onSave returns a Promise so Root auto-drives `saving` while it resolves. NavigationGuard attaches a beforeunload listener while dirty — try closing the tab mid-edit."
      >
        <UncontrolledSettingsForm />
      </PropDemo>

      <PropDemo
        name="Controlled dirty — the React-Hook-Form / Formik pattern"
        description="The consumer computes `dirty` from their own form state and passes it to Root. Also demonstrates useFormLayout() for reading dirty state from a custom badge outside the Save/Cancel buttons."
      >
        <ControlledDirtyForm />
      </PropDemo>

      <PropDemo
        name="Sticky=false — inline Actions for small cards"
        description="Not every form wants a sticky action bar. Set sticky={false} to render Actions inline at its JSX position. Useful inside a small card where sticky would be awkward."
      >
        <FormLayout.Root sticky={false} defaultDirty>
          <FormLayout.Section>
            <FormLayout.SectionHeader title="Rename project" />
            <FormLayout.SectionBody>
              <Field label="New name">
                <Input defaultValue="component-library" name="project-name" />
              </Field>
            </FormLayout.SectionBody>
          </FormLayout.Section>
          <FormLayout.Actions>
            <FormLayout.CancelButton />
            <FormLayout.SaveButton>Rename</FormLayout.SaveButton>
          </FormLayout.Actions>
        </FormLayout.Root>
      </PropDemo>
    </DocBlock>
  );
}
