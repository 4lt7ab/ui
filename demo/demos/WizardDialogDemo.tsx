import { useState } from 'react';
import {
  WizardDialog,
  Button,
  Field,
  Input,
  Select,
  Textarea,
  Badge,
  Stack,
  Icon,
} from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

// ---------------------------------------------------------------------------
// Props metadata
// ---------------------------------------------------------------------------

const props: PropMeta[] = [
  {
    name: 'WizardDialog.Root',
    type: "{ open?; defaultOpen?; onOpenChange?; step?; defaultStep?; onStepChange?; onComplete?; canClose?; width?; children }",
    description:
      "Owns open + current step state with controlled/uncontrolled parity on both. Renders a <ModalShell> wrapping the Title/Progress/Step/Actions stack. `onComplete` fires on Finish — return a Promise to auto-drive the loading state while it resolves. `canClose=false` disables Escape-close and hides the Cancel affordance on step 0 (forced-onboarding flows).",
  },
  {
    name: 'WizardDialog.Title',
    type: '{ children }',
    description:
      "Dialog heading. Rendered as <h2> with the shared `modalHeadingStyle`. Wired into ModalShell's `aria-labelledby` via a context-supplied id — no `titleId` prop to pass through.",
  },
  {
    name: 'WizardDialog.Progress',
    type: "{ mode?: 'numeric' | 'bar'; stepLabels?: string[] }",
    description:
      "Step indicator. `'numeric'` (default) renders `Step N of M` + the current step's label above a <ProgressBar>. `'bar'` renders just the segmented bar. `stepLabels` feeds both the numeric label and the progressbar's `aria-label`.",
  },
  {
    name: 'WizardDialog.Step',
    type: '{ index: number; validate?: () => boolean | Promise<boolean>; children }',
    description:
      "A single step. Only the active step renders; inactive steps unmount (no hidden dead content). `index` is zero-based and unique per step; JSX order is the source of truth for the user-visible sequence. `validate` is optional — sync returns block or permit the advance, async returns flip Actions into its busy state while the promise resolves.",
  },
  {
    name: 'WizardDialog.Actions',
    type: "{ cancelLabel?; backLabel?; nextLabel?; finishLabel?; busyLabel?; children }",
    description:
      "Back / Next / Finish row. On step 0 the ghost button is labelled Cancel and closes the dialog; on later steps it's labelled Back and moves backward. On the last step the primary button is labelled Finish and fires `onComplete`. Optional `children` render as a leading slot for extras (e.g. a Skip link).",
  },
];

// ---------------------------------------------------------------------------
// Demo 1 — three-step workspace wizard (the canonical OnboardingFlow shape,
//             now 60-ish lines instead of 392).
// ---------------------------------------------------------------------------

const ROLE_OPTIONS = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
];

const PLAN_OPTIONS = [
  { value: 'starter', label: 'Starter — Free' },
  { value: 'pro', label: 'Pro — $20/mo' },
  { value: 'enterprise', label: 'Enterprise — Custom' },
];

function WorkspaceWizard(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [plan, setPlan] = useState('starter');
  const [description, setDescription] = useState('');

  const reset = (): void => {
    setName('');
    setRole('');
    setPlan('starter');
    setDescription('');
    setDone(false);
  };

  return (
    <Stack gap="md" align="center">
      {done ? (
        <>
          <span style={{ color: 'var(--color-success)' }}>
            <Icon name="check-circle" size="xl" />
          </span>
          <strong>{name || 'Workspace'} is ready</strong>
          <Button
            variant="ghost"
            onClick={() => {
              reset();
              setOpen(true);
            }}
          >
            Start over
          </Button>
        </>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            reset();
            setOpen(true);
          }}
        >
          Open wizard
        </Button>
      )}

      <WizardDialog.Root
        open={open}
        onOpenChange={setOpen}
        onComplete={async () => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setDone(true);
        }}
      >
        <WizardDialog.Title>Create a workspace</WizardDialog.Title>
        <WizardDialog.Progress stepLabels={['Workspace', 'Team', 'Review']} />

        <WizardDialog.Step
          index={0}
          validate={() => name.trim().length > 0}
        >
          <Field label="Workspace name" required>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Acme Corp"
            />
          </Field>
          <Field label="Your role">
            <Select.Root value={role} onValueChange={setRole}>
              <Select.Trigger>
                <Select.Value placeholder="Pick a role…" />
              </Select.Trigger>
              <Select.Content>
                {ROLE_OPTIONS.map((o) => (
                  <Select.Item key={o.value} value={o.value}>
                    {o.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field>
        </WizardDialog.Step>

        <WizardDialog.Step index={1}>
          <Field label="Plan">
            <Select.Root value={plan} onValueChange={setPlan}>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                {PLAN_OPTIONS.map((o) => (
                  <Select.Item key={o.value} value={o.value}>
                    {o.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Field>
          <Field
            label="What will you use this workspace for?"
            help="Optional — helps us customize your experience"
          >
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </Field>
        </WizardDialog.Step>

        <WizardDialog.Step index={2}>
          <Stack gap="sm">
            <span style={{ fontWeight: 600 }}>Ready to go</span>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Creating <strong>{name || 'your workspace'}</strong> on the{' '}
              <Badge>{plan}</Badge> plan. Clicking Finish runs an async onComplete
              (500ms) — the button shows a spinner while it's in flight.
            </span>
          </Stack>
        </WizardDialog.Step>

        <WizardDialog.Actions />
      </WizardDialog.Root>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Demo 2 — async validation (simulates a uniqueness check against the server).
// ---------------------------------------------------------------------------

function AsyncValidationWizard(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Pretend these emails are already taken; a real app would hit an API.
  const TAKEN = ['taken@example.com', 'alice@example.com'];

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open async-validate wizard
      </Button>
      <WizardDialog.Root
        open={open}
        onOpenChange={setOpen}
        onComplete={() => setOpen(false)}
      >
        <WizardDialog.Title>Invite a teammate</WizardDialog.Title>
        <WizardDialog.Progress mode="bar" stepLabels={['Email', 'Confirm']} />

        <WizardDialog.Step
          index={0}
          validate={async () => {
            setError(null);
            // Fake 600ms uniqueness check — the Next button flips into its
            // loading state while this is in flight.
            await new Promise((resolve) => setTimeout(resolve, 600));
            if (TAKEN.includes(email.trim().toLowerCase())) {
              setError('That email is already a member.');
              return false;
            }
            return true;
          }}
        >
          <Field
            label="Teammate email"
            required
            error={error ?? undefined}
            help="Try `taken@example.com` to see the async check block the advance."
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teammate@acme.dev"
            />
          </Field>
        </WizardDialog.Step>

        <WizardDialog.Step index={1}>
          <span>Sending invite to <strong>{email}</strong>…</span>
        </WizardDialog.Step>

        <WizardDialog.Actions busyLabel="Checking…" />
      </WizardDialog.Root>
    </>
  );
}

// ---------------------------------------------------------------------------
// Demo 3 — canClose=false forced-flow with a bar-mode indicator.
// ---------------------------------------------------------------------------

function ForcedOnboardingWizard(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Open forced wizard
      </Button>
      <WizardDialog.Root
        open={open}
        onOpenChange={setOpen}
        canClose={false}
        onComplete={() => setOpen(false)}
        width="md"
      >
        <WizardDialog.Title>Finish setting up your account</WizardDialog.Title>
        <WizardDialog.Progress mode="bar" />
        <WizardDialog.Step index={0}>
          <span>
            Escape is disabled and there's no Cancel button — the user has to
            work through the flow or explicitly Finish.
          </span>
        </WizardDialog.Step>
        <WizardDialog.Step index={1}>
          <span>Second step. Back is still available here.</span>
        </WizardDialog.Step>
        <WizardDialog.Actions finishLabel="I'm done" />
      </WizardDialog.Root>
    </>
  );
}

// ---------------------------------------------------------------------------
// Entry
// ---------------------------------------------------------------------------

export function WizardDialogDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo
        name="Three-step workspace wizard — the OnboardingFlow shape, generalized"
        description="The canonical pattern WizardDialog replaces. Consumer owns all the field state and the onComplete action; the organism owns modal chrome, progress, step bookkeeping, and the Back/Next/Finish affordance. Sync validate on step 0 blocks the advance until a workspace name is entered. onComplete is async — Finish flips into its loading state for 500ms before closing."
      >
        <WorkspaceWizard />
      </PropDemo>

      <PropDemo
        name="Async validation — Next flips into loading state while the promise resolves"
        description="Returning a Promise from `validate` puts the Next button into its spinner state. Resolve false to block the advance (the test email `taken@example.com` triggers this); resolve true to proceed. The `busyLabel` prop on Actions customizes the button text during the wait."
      >
        <AsyncValidationWizard />
      </PropDemo>

      <PropDemo
        name="canClose=false — forced onboarding flow"
        description="With canClose=false Escape stops closing the dialog and the Cancel button on step 0 is hidden from the accessibility tree. Used for first-login flows where the user must finish or explicitly bail via a consumer-rendered escape hatch."
      >
        <ForcedOnboardingWizard />
      </PropDemo>
    </DocBlock>
  );
}
