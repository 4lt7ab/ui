import { useState } from 'react';
import {
  ModalShell, Stack, Button, Field, Input, Select, Textarea,
  ProgressBar, Card, Badge, Icon, TagChip, IconButton,
} from '@4lt7ab/ui';

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

const TOTAL_STEPS = 3;

// ---------------------------------------------------------------------------
// Step components
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
        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Create your workspace</h3>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Give your workspace a name and tell us what you do.
        </span>
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
        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Invite your team</h3>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Add teammates by email. You can always invite more later.
        </span>
      </Stack>

      <Stack direction="horizontal" gap="sm" align="end">
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
        <div>
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
        </div>
        <Button variant="secondary" onClick={onAdd}>Add</Button>
      </Stack>

      {members.length > 0 && (
        <Stack gap="sm">
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {members.length} member{members.length !== 1 ? 's' : ''} invited
          </span>
          {members.map((m) => (
            <div key={m.email} style={{
                padding: 'var(--space-xs) var(--space-sm)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-surface-raised)',
              }}>
            <Stack
              direction="horizontal"
              justify="space-between"
              align="center"
            >
              <Stack direction="horizontal" gap="sm" align="center">
                <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>{m.email}</span>
                <Badge>{m.role}</Badge>
              </Stack>
              <IconButton icon="close" size="sm" onClick={() => onRemove(m.email)} aria-label={`Remove ${m.email}`} />
            </Stack>
            </div>
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
        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Choose your plan</h3>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Pick a plan that fits your team. You can upgrade anytime.
        </span>
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

      {/* Summary */}
      <div style={{ background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-md)' }}>
      <Card variant="flat" padding="md">
        <Stack gap="sm">
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Summary
          </span>
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
      </div>
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
      <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>{label}</span>
      {children ?? <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>{value}</span>}
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function OnboardingFlow(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
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

  const addMember = () => {
    if (inviteEmail.trim() && !members.some((m) => m.email === inviteEmail.trim())) {
      setMembers([...members, { email: inviteEmail.trim(), role: inviteRole }]);
      setInviteEmail('');
    }
  };

  const reset = () => {
    setStep(1);
    setDone(false);
    setWorkspaceName('');
    setRole('');
    setInviteEmail('');
    setInviteRole('engineering');
    setMembers([{ email: 'alice@acme.dev', role: 'engineering' }]);
    setPlan('starter');
    setDescription('');
  };

  const finish = () => {
    setOpen(false);
    setDone(true);
  };

  return (
    <>
      {/* Landing state */}
      <div style={{ padding: 'var(--space-2xl) 0' }}>
      <Stack gap="lg" align="center">
        {done ? (
          <>
            <span style={{ color: 'var(--color-success)' }}><Icon name="check-circle" size="xl" /></span>
            <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              {workspaceName || 'Workspace'} is ready
            </span>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', textAlign: 'center', maxWidth: 400 }}>
              Your workspace has been created with {members.length} team member{members.length !== 1 ? 's' : ''} on
              the {plan} plan.
            </span>
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
            <span style={{ color: 'var(--color-text-muted)' }}><Icon name="plus" size="xl" /></span>
            <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>Create a new workspace</span>
            <span style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              textAlign: 'center',
              maxWidth: 400,
            }}>
              Set up your team workspace in three quick steps. You can always change these settings later.
            </span>
            <Button variant="primary" onClick={() => { reset(); setOpen(true); }}>
              Get started
            </Button>
          </>
        )}
      </Stack>
      </div>

      {/* Modal wizard */}
      {open && (
        <ModalShell onClose={() => setOpen(false)} width="lg">
          <Stack gap="xl">
            {/* Progress bar */}
            <Stack gap="sm">
              <Stack direction="horizontal" justify="space-between" align="center">
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Step {step} of {TOTAL_STEPS}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  {step === 1 ? 'Workspace' : step === 2 ? 'Team' : 'Preferences'}
                </span>
              </Stack>
              <ProgressBar
                segments={[
                  { value: step, color: 'primary' },
                  { value: TOTAL_STEPS - step, color: 'muted' },
                ]}
                height="sm"
              />
            </Stack>

            {/* Step content */}
            {step === 1 && (
              <StepWorkspace
                name={workspaceName}
                onName={setWorkspaceName}
                role={role}
                onRole={setRole}
              />
            )}
            {step === 2 && (
              <StepTeam
                email={inviteEmail}
                onEmail={setInviteEmail}
                emailRole={inviteRole}
                onEmailRole={setInviteRole}
                members={members}
                onAdd={addMember}
                onRemove={(e) => setMembers(members.filter((m) => m.email !== e))}
              />
            )}
            {step === 3 && (
              <StepPreferences
                plan={plan}
                onPlan={setPlan}
                description={description}
                onDescription={setDescription}
                workspaceName={workspaceName}
                members={members}
              />
            )}

            {/* Navigation */}
            <Stack direction="horizontal" justify="space-between">
              <Button
                variant="ghost"
                onClick={() => (step === 1 ? setOpen(false) : setStep(step - 1))}
              >
                {step === 1 ? 'Cancel' : 'Back'}
              </Button>
              <Button
                variant="primary"
                onClick={() => (step < TOTAL_STEPS ? setStep(step + 1) : finish())}
              >
                {step === TOTAL_STEPS ? 'Create workspace' : 'Continue'}
              </Button>
            </Stack>
          </Stack>
        </ModalShell>
      )}
    </>
  );
}
