import { useState } from 'react';
import {
  WizardDialog, Stack, Button, Field, Input, Select, Textarea,
  Card, Badge, Icon, IconButton, Surface, Text,
} from '@4lt7ab/ui';

// OnboardingFlow — canonical WizardDialog demo. The organism owns the modal
// chrome, progress indicator, Back/Next/Finish wiring, and per-step focus.
// The consumer owns field values, inter-step validation (return `false` from
// `validate` to block advance), and the final `onComplete` network call.

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------

const ROLE_OPTIONS = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'operations', label: 'Operations' },
];

const PLAN_OPTIONS = [
  { value: 'starter', label: 'Starter \u2014 Free' },
  { value: 'pro', label: 'Pro \u2014 $20/mo' },
  { value: 'enterprise', label: 'Enterprise \u2014 Custom' },
];

const STEP_LABELS = ['Workspace', 'Team', 'Preferences'];

// ---------------------------------------------------------------------------
// Step components — pure-presentational, wired through props. No modal /
// progress chrome — WizardDialog owns all of that.
// ---------------------------------------------------------------------------

function StepWorkspace({ name, onName, role, onRole }: {
  name: string;
  onName: (v: string) => void;
  role: string;
  onRole: (v: string) => void;
}): React.JSX.Element {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Text as="p" size="lg" weight="semibold">Create your workspace</Text>
        <Text as="p" size="sm" tone="secondary">
          Give your workspace a name and tell us what you do.
        </Text>
      </Stack>
      <Field label="Workspace name" required>
        <Input
          value={name}
          onChange={(e) => onName(e.target.value)}
          placeholder="Acme Corp"
        />
      </Field>
      <Field label="Your role">
        <Select.Root value={role} onValueChange={onRole}>
          <Select.Trigger>
            <Select.Value placeholder="Select a role\u2026" />
          </Select.Trigger>
          <Select.Content>
            {ROLE_OPTIONS.map((o) => (
              <Select.Item key={o.value} value={o.value}>{o.label}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Field>
    </Stack>
  );
}

function StepTeam({ email, onEmail, emailRole, onEmailRole, members, onAdd, onRemove }: {
  email: string;
  onEmail: (v: string) => void;
  emailRole: string;
  onEmailRole: (v: string) => void;
  members: { email: string; role: string }[];
  onAdd: () => void;
  onRemove: (email: string) => void;
}): React.JSX.Element {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Text as="p" size="lg" weight="semibold">Invite your team</Text>
        <Text as="p" size="sm" tone="secondary">
          Add teammates by email. You can always invite more later.
        </Text>
      </Stack>

      <Stack direction="horizontal" gap="sm" align="end">
        {/* Allowlist: email field expands to fill the row next to the fixed-width
            Role select + Add button. No existing atom exposes `flex: 1`. */}
        <div style={{ flex: 1 }}>
          <Field label="Email">
            <Input
              type="email"
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="teammate@acme.dev"
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onAdd(); } }}
            />
          </Field>
        </div>
        <Field label="Role">
          <Select.Root value={emailRole} onValueChange={onEmailRole}>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {ROLE_OPTIONS.map((o) => (
                <Select.Item key={o.value} value={o.value}>{o.label}</Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Field>
        <Button variant="secondary" onClick={onAdd}>Add</Button>
      </Stack>

      {members.length > 0 && (
        <Stack gap="sm">
          <Text size="xs" tone="muted">
            {members.length} member{members.length !== 1 ? 's' : ''} invited
          </Text>
          {members.map((m) => (
            <Surface key={m.email} level="raised" padding="xs" radius="md">
              <Stack
                direction="horizontal"
                justify="space-between"
                align="center"
              >
                <Stack direction="horizontal" gap="sm" align="center">
                  <Text size="sm" family="mono">{m.email}</Text>
                  <Badge>{m.role}</Badge>
                </Stack>
                <IconButton icon="close" size="sm" onClick={() => onRemove(m.email)} aria-label={`Remove ${m.email}`} />
              </Stack>
            </Surface>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

function StepPreferences({ plan, onPlan, description, onDescription, workspaceName, members }: {
  plan: string;
  onPlan: (v: string) => void;
  description: string;
  onDescription: (v: string) => void;
  workspaceName: string;
  members: { email: string; role: string }[];
}): React.JSX.Element {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Text as="p" size="lg" weight="semibold">Choose your plan</Text>
        <Text as="p" size="sm" tone="secondary">
          Pick a plan that fits your team. You can upgrade anytime.
        </Text>
      </Stack>

      <Field label="Plan">
        <Select.Root value={plan} onValueChange={onPlan}>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {PLAN_OPTIONS.map((o) => (
              <Select.Item key={o.value} value={o.value}>{o.label}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Field>

      <Field label="What will you use this workspace for?" help="Optional \u2014 helps us customize your experience">
        <Textarea
          value={description}
          onChange={(e) => onDescription(e.target.value)}
          placeholder="Building a design system, managing sprints\u2026"
          rows={3}
        />
      </Field>

      {/* Summary — raised Surface hosting a flat Card for layered depth */}
      <Surface level="raised" radius="md">
        <Card variant="flat" padding="md">
          <Stack gap="sm">
            <Text
              size="xs"
              weight="semibold"
              tone="muted"
            >
              SUMMARY
            </Text>
            <SummaryRow label="Workspace" value={workspaceName || '\u2014'} />
            <SummaryRow label="Team">
              <Badge variant="info">{members.length} member{members.length !== 1 ? 's' : ''}</Badge>
            </SummaryRow>
            <SummaryRow label="Plan">
              <Badge variant={plan === 'enterprise' ? 'success' : plan === 'pro' ? 'info' : 'default'}>
                {plan || 'starter'}
              </Badge>
            </SummaryRow>
          </Stack>
        </Card>
      </Surface>
    </Stack>
  );
}

function SummaryRow({ label, value, children }: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}): React.JSX.Element {
  return (
    <Stack direction="horizontal" justify="space-between" align="center">
      <Text size="sm" tone="secondary">{label}</Text>
      {children ?? <Text size="sm" weight="medium">{value}</Text>}
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function OnboardingFlow(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  // Step 1
  const [workspaceName, setWorkspaceName] = useState('');
  const [role, setRole] = useState('');

  // Step 2
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('engineering');
  const [members, setMembers] = useState<{ email: string; role: string }[]>([
    { email: 'alice@acme.dev', role: 'engineering' },
  ]);

  // Step 3
  const [plan, setPlan] = useState('starter');
  const [description, setDescription] = useState('');

  const addMember = (): void => {
    if (inviteEmail.trim() && !members.some((m) => m.email === inviteEmail.trim())) {
      setMembers([...members, { email: inviteEmail.trim(), role: inviteRole }]);
      setInviteEmail('');
    }
  };

  const reset = (): void => {
    setDone(false);
    setWorkspaceName('');
    setRole('');
    setInviteEmail('');
    setInviteRole('engineering');
    setMembers([{ email: 'alice@acme.dev', role: 'engineering' }]);
    setPlan('starter');
    setDescription('');
  };

  const handleComplete = async (): Promise<void> => {
    // Simulate network call so the Finish button flips into its busy state.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setDone(true);
  };

  return (
    <>
      {/* Landing state */}
      <Stack gap="lg" align="center">
        {done ? (
          <>
            <Text tone="success"><Icon name="check-circle" size="xl" /></Text>
            <Text size="lg" weight="semibold">
              {workspaceName || 'Workspace'} is ready
            </Text>
            <Text size="sm" tone="secondary" align="center">
              Your workspace has been created with {members.length} team member{members.length !== 1 ? 's' : ''} on
              the {plan} plan.
            </Text>
            <Stack direction="horizontal" gap="sm">
              <Button variant="ghost" onClick={() => { reset(); setOpen(true); }}>
                Start over
              </Button>
              <Button variant="primary" onClick={reset}>
                Done
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Text tone="muted"><Icon name="plus" size="xl" /></Text>
            <Text size="lg" weight="semibold">Create a new workspace</Text>
            <Text size="sm" tone="secondary" align="center">
              Set up your team workspace in three quick steps. You can always change these settings later.
            </Text>
            <Button variant="primary" onClick={() => { reset(); setOpen(true); }}>
              Get started
            </Button>
          </>
        )}
      </Stack>

      <WizardDialog.Root
        open={open}
        onOpenChange={setOpen}
        onComplete={handleComplete}
        width="lg"
      >
        <WizardDialog.Title>Create a new workspace</WizardDialog.Title>
        <WizardDialog.Progress stepLabels={STEP_LABELS} />

        <WizardDialog.Step
          index={0}
          // Block advance until the workspace has a name — WizardDialog will
          // no-op Next when `validate` returns false.
          validate={() => workspaceName.trim().length > 0}
        >
          <StepWorkspace
            name={workspaceName}
            onName={setWorkspaceName}
            role={role}
            onRole={setRole}
          />
        </WizardDialog.Step>

        <WizardDialog.Step index={1}>
          <StepTeam
            email={inviteEmail}
            onEmail={setInviteEmail}
            emailRole={inviteRole}
            onEmailRole={setInviteRole}
            members={members}
            onAdd={addMember}
            onRemove={(e) => setMembers(members.filter((m) => m.email !== e))}
          />
        </WizardDialog.Step>

        <WizardDialog.Step index={2}>
          <StepPreferences
            plan={plan}
            onPlan={setPlan}
            description={description}
            onDescription={setDescription}
            workspaceName={workspaceName}
            members={members}
          />
        </WizardDialog.Step>

        <WizardDialog.Actions finishLabel="Create workspace" />
      </WizardDialog.Root>
    </>
  );
}
