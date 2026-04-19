import { useState } from 'react';
import {
  Button,
  ChipPicker,
  Field,
  Input,
  SegmentedControl,
  Stack,
  WizardDialog,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// WizardDialog showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Three-step flow with every behavior the prose + code fence can't carry:
//
//   - Per-step sync validator (step 0 blocks Next on empty name).
//   - Per-step async validator (step 1 fakes a 900ms uniqueness check —
//     Actions flip into their loading state while it resolves).
//   - Async `onComplete` on the final step (spinning Finish button while
//     the mock save runs).
//   - Bar-mode progress indicator with labels that advance as you move.
//   - Focus restoration between steps (first focusable in each step grabs
//     focus automatically on enter).

const ROLE_OPTIONS = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
];

const PLAN_OPTIONS = [
  { value: 'starter', label: 'Starter' },
  { value: 'team', label: 'Team' },
  { value: 'enterprise', label: 'Enterprise' },
];

export function WizardDialogShowcase(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [completedAt, setCompletedAt] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [roles, setRoles] = useState<string[]>(['editor']);
  const [plan, setPlan] = useState<string>('team');

  const reset = (): void => {
    setName('');
    setRoles(['editor']);
    setPlan('team');
  };

  const handleOpen = (): void => {
    reset();
    setOpen(true);
  };

  const validateName = (): boolean => name.trim().length > 0;

  const validateRoles = async (): Promise<boolean> => {
    // Simulate a remote "at least one role is valid for this seat" check.
    await new Promise((r) => setTimeout(r, 900));
    return roles.length > 0;
  };

  const handleComplete = async (): Promise<void> => {
    await new Promise((r) => setTimeout(r, 700));
    setCompletedAt(new Date().toLocaleTimeString());
  };

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button variant="primary" onClick={handleOpen}>
          Set up workspace
        </Button>
        <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted, alignSelf: 'center' }}>
          Last completion: <code>{completedAt ?? '(none yet)'}</code>
        </span>
      </Stack>

      <WizardDialog.Root
        open={open}
        onOpenChange={setOpen}
        onComplete={handleComplete}
        width="md"
      >
        <WizardDialog.Title>Set up your workspace</WizardDialog.Title>
        <WizardDialog.Progress mode="bar" stepLabels={['Basics', 'Team', 'Plan']} />

        <WizardDialog.Step index={0} validate={validateName}>
          <Field label="Workspace name" required>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Design token audit"
            />
          </Field>
        </WizardDialog.Step>

        <WizardDialog.Step index={1} validate={validateRoles}>
          <Field label="Which roles should have access?">
            <ChipPicker items={ROLE_OPTIONS} selected={roles} onChange={setRoles} />
          </Field>
          <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>
            Next runs a mock 900ms uniqueness check — Actions spin while it resolves.
          </span>
        </WizardDialog.Step>

        <WizardDialog.Step index={2}>
          <Field label="Plan">
            <SegmentedControl
              segments={PLAN_OPTIONS}
              value={plan}
              onChange={setPlan}
            />
          </Field>
          <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>
            Finish runs a mock 700ms save via <code>onComplete</code> — Finish
            spins, then the dialog closes.
          </span>
        </WizardDialog.Step>

        <WizardDialog.Actions
          cancelLabel="Cancel"
          nextLabel="Continue"
          finishLabel="Create workspace"
        />
      </WizardDialog.Root>
    </Stack>
  );
}
