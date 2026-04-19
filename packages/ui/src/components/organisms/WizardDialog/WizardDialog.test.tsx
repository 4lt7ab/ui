import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { WizardDialog } from './index';

// Semantic tokens are CSS var references — a Proxy mock keeps tests from
// needing the full core barrel. ModalShell portals into document.body, so
// leave `createPortal` alone and just stub tokens.
vi.mock('@4lt7ab/core', async () => {
  const actual = await vi.importActual<object>('@4lt7ab/core');
  return {
    ...actual,
    semantic: new Proxy(
      {},
      { get: (_t, prop) => `var(--mock-${String(prop)})` },
    ),
    useInjectStyles: vi.fn(),
  };
});

beforeEach(() => {
  document.body.innerHTML = '';
});

// ---------------------------------------------------------------------------
// Orphan-check — every sub-part throws outside Root.
// ---------------------------------------------------------------------------

describe('WizardDialog — orphan-check', () => {
  const parts: Array<[string, () => React.JSX.Element]> = [
    ['Title', () => <WizardDialog.Title>x</WizardDialog.Title>],
    ['Progress', () => <WizardDialog.Progress />],
    [
      'Step',
      () => (
        <WizardDialog.Step index={0}>
          <input />
        </WizardDialog.Step>
      ),
    ],
    ['Actions', () => <WizardDialog.Actions />],
  ];

  for (const [name, factory] of parts) {
    it(`throws when <WizardDialog.${name}> is rendered without Root`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(
        new RegExp(`WizardDialog\\.${name}.*must be rendered inside <WizardDialog\\.Root>`),
      );
      console.error = err;
    });
  }
});

// ---------------------------------------------------------------------------
// Basic rendering + step transitions.
// ---------------------------------------------------------------------------

function ThreeStepWizard(props: {
  onComplete?: () => void | Promise<void>;
  canClose?: boolean;
  defaultOpen?: boolean;
}): React.JSX.Element {
  return (
    <WizardDialog.Root
      defaultOpen={props.defaultOpen ?? true}
      canClose={props.canClose}
      onComplete={props.onComplete}
    >
      <WizardDialog.Title>Create workspace</WizardDialog.Title>
      <WizardDialog.Progress stepLabels={['One', 'Two', 'Three']} />
      <WizardDialog.Step index={0}>
        <input aria-label="step-0-input" />
      </WizardDialog.Step>
      <WizardDialog.Step index={1}>
        <input aria-label="step-1-input" />
      </WizardDialog.Step>
      <WizardDialog.Step index={2}>
        <input aria-label="step-2-input" />
      </WizardDialog.Step>
      <WizardDialog.Actions />
    </WizardDialog.Root>
  );
}

describe('WizardDialog — basic rendering', () => {
  it('renders the dialog with the title wired into aria-labelledby', () => {
    render(<ThreeStepWizard />);
    const dialog = screen.getByRole('dialog');
    const titleId = dialog.getAttribute('aria-labelledby');
    expect(titleId).not.toBeNull();
    const title = document.getElementById(titleId!);
    expect(title?.textContent).toBe('Create workspace');
  });

  it('only the current step is rendered', () => {
    render(<ThreeStepWizard />);
    expect(screen.getByLabelText('step-0-input')).toBeInTheDocument();
    expect(screen.queryByLabelText('step-1-input')).toBeNull();
    expect(screen.queryByLabelText('step-2-input')).toBeNull();
  });

  it('renders nothing when defaultOpen=false', () => {
    render(<ThreeStepWizard defaultOpen={false} />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Step navigation — Next / Back / Finish wire correctly.
// ---------------------------------------------------------------------------

describe('WizardDialog — step navigation', () => {
  it('Next advances through steps; last step shows Finish', async () => {
    const user = userEvent.setup();
    render(<ThreeStepWizard />);

    // Step 0 — Next button labelled 'Continue'
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByLabelText('step-1-input')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByLabelText('step-2-input')).toBeInTheDocument();

    // Last step shows Finish, not Continue
    expect(screen.queryByRole('button', { name: 'Continue' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Finish' })).toBeInTheDocument();
  });

  it('Back goes backward; on step 0 it calls close', async () => {
    const user = userEvent.setup();
    render(<ThreeStepWizard />);

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByLabelText('step-1-input')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Back' }));
    expect(screen.getByLabelText('step-0-input')).toBeInTheDocument();

    // On step 0 the ghost button is labelled Cancel and closes the dialog
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull();
    });
  });

  it('Finish calls onComplete and closes the dialog', async () => {
    const onComplete = vi.fn();
    const user = userEvent.setup();
    render(<ThreeStepWizard onComplete={onComplete} />);

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Finish' }));

    expect(onComplete).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull();
    });
  });

  it('canClose=false hides Cancel on step 0 and disables Escape close', async () => {
    const user = userEvent.setup();
    render(<ThreeStepWizard canClose={false} />);

    // Cancel button is visibility:hidden — absent from the accessibility
    // tree but the Continue button is still reachable.
    expect(screen.queryByRole('button', { name: 'Cancel' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();

    // Escape should not close.
    await user.keyboard('{Escape}');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Validation — sync + async.
// ---------------------------------------------------------------------------

describe('WizardDialog — validation', () => {
  it('sync validate returning false blocks advance', async () => {
    const user = userEvent.setup();
    render(
      <WizardDialog.Root defaultOpen>
        <WizardDialog.Title>Validate</WizardDialog.Title>
        <WizardDialog.Progress />
        <WizardDialog.Step index={0} validate={() => false}>
          <input aria-label="s0" />
        </WizardDialog.Step>
        <WizardDialog.Step index={1}>
          <input aria-label="s1" />
        </WizardDialog.Step>
        <WizardDialog.Actions />
      </WizardDialog.Root>,
    );

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    // Still on step 0 — validate returned false so advance was blocked.
    expect(screen.getByLabelText('s0')).toBeInTheDocument();
    expect(screen.queryByLabelText('s1')).toBeNull();
  });

  it('sync validate returning true permits advance', async () => {
    const user = userEvent.setup();
    render(
      <WizardDialog.Root defaultOpen>
        <WizardDialog.Title>Validate</WizardDialog.Title>
        <WizardDialog.Progress />
        <WizardDialog.Step index={0} validate={() => true}>
          <input aria-label="s0" />
        </WizardDialog.Step>
        <WizardDialog.Step index={1}>
          <input aria-label="s1" />
        </WizardDialog.Step>
        <WizardDialog.Actions />
      </WizardDialog.Root>,
    );

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByLabelText('s1')).toBeInTheDocument();
  });

  it('async validate flips Next into loading state; resolved false blocks advance', async () => {
    let resolver: (v: boolean) => void = () => {};
    const validate = vi.fn(
      () =>
        new Promise<boolean>((resolve) => {
          resolver = resolve;
        }),
    );

    const user = userEvent.setup();
    render(
      <WizardDialog.Root defaultOpen>
        <WizardDialog.Title>Validate</WizardDialog.Title>
        <WizardDialog.Progress />
        <WizardDialog.Step index={0} validate={validate}>
          <input aria-label="s0" />
        </WizardDialog.Step>
        <WizardDialog.Step index={1}>
          <input aria-label="s1" />
        </WizardDialog.Step>
        <WizardDialog.Actions busyLabel="Checking" />
      </WizardDialog.Root>,
    );

    // Click Next — async validate is in flight.
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await waitFor(() => {
      expect(screen.getByRole('toolbar', { name: 'Wizard navigation' }).getAttribute('data-state'))
        .toBe('busy');
    });
    // The loading-state button shows the busy label and is aria-busy.
    const nextBtn = screen.getByRole('button', { name: 'Checking' }) as HTMLButtonElement;
    expect(nextBtn.getAttribute('aria-busy')).toBe('true');

    // Resolve false — the promise rejects the advance.
    resolver(false);
    await waitFor(() => {
      expect(screen.getByRole('toolbar', { name: 'Wizard navigation' }).getAttribute('data-state'))
        .toBe('idle');
    });
    expect(screen.getByLabelText('s0')).toBeInTheDocument();
    expect(screen.queryByLabelText('s1')).toBeNull();
  });

  it('async validate resolved true advances the step', async () => {
    let resolver: (v: boolean) => void = () => {};
    const validate = vi.fn(
      () =>
        new Promise<boolean>((resolve) => {
          resolver = resolve;
        }),
    );

    const user = userEvent.setup();
    render(
      <WizardDialog.Root defaultOpen>
        <WizardDialog.Title>Validate</WizardDialog.Title>
        <WizardDialog.Progress />
        <WizardDialog.Step index={0} validate={validate}>
          <input aria-label="s0" />
        </WizardDialog.Step>
        <WizardDialog.Step index={1}>
          <input aria-label="s1" />
        </WizardDialog.Step>
        <WizardDialog.Actions />
      </WizardDialog.Root>,
    );

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    resolver(true);
    await waitFor(() => {
      expect(screen.getByLabelText('s1')).toBeInTheDocument();
    });
  });
});

// ---------------------------------------------------------------------------
// Focus management on step transitions.
// ---------------------------------------------------------------------------

describe('WizardDialog — focus management', () => {
  it('moves focus to the first focusable inside the next step on transition', async () => {
    const user = userEvent.setup();
    render(
      <WizardDialog.Root defaultOpen>
        <WizardDialog.Title>Focus</WizardDialog.Title>
        <WizardDialog.Progress />
        <WizardDialog.Step index={0}>
          <input aria-label="s0-first" />
          <input aria-label="s0-second" />
        </WizardDialog.Step>
        <WizardDialog.Step index={1}>
          <input aria-label="s1-first" />
          <input aria-label="s1-second" />
        </WizardDialog.Step>
        <WizardDialog.Actions />
      </WizardDialog.Root>,
    );

    // ModalShell moves initial focus to the first focusable on mount — for
    // this tree that's `s0-first` (the Title is not focusable).
    await waitFor(() => {
      expect(document.activeElement).toBe(screen.getByLabelText('s0-first'));
    });

    // Advancing: focus should move to s1-first.
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await waitFor(() => {
      expect(document.activeElement).toBe(screen.getByLabelText('s1-first'));
    });
  });
});

// ---------------------------------------------------------------------------
// Progress indicator — numeric + bar modes.
// ---------------------------------------------------------------------------

describe('WizardDialog — progress indicator', () => {
  it('numeric mode shows "Step N of M" + current label', () => {
    render(<ThreeStepWizard />);
    // Status renders "Step 1 of 3" + the current label "One"
    const status = screen.getByRole('status', { name: 'One' });
    expect(status.textContent).toContain('Step 1 of 3');
    expect(status.textContent).toContain('One');
  });

  it('bar mode renders a ProgressBar labelled with the current step', () => {
    render(
      <WizardDialog.Root defaultOpen>
        <WizardDialog.Title>Bar</WizardDialog.Title>
        <WizardDialog.Progress mode="bar" stepLabels={['Workspace', 'Team']} />
        <WizardDialog.Step index={0}><input aria-label="s0" /></WizardDialog.Step>
        <WizardDialog.Step index={1}><input aria-label="s1" /></WizardDialog.Step>
        <WizardDialog.Actions />
      </WizardDialog.Root>,
    );
    const bar = screen.getByRole('progressbar', { name: 'Workspace' });
    expect(bar).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Controlled step + open state.
// ---------------------------------------------------------------------------

describe('WizardDialog — controlled state', () => {
  it('controlled step reads `step` prop and emits `onStepChange`', async () => {
    const onStepChange = vi.fn();

    function Controller(): React.JSX.Element {
      const [step, setStep] = useState(0);
      return (
        <WizardDialog.Root
          defaultOpen
          step={step}
          onStepChange={(next) => {
            onStepChange(next);
            setStep(next);
          }}
        >
          <WizardDialog.Title>Controlled</WizardDialog.Title>
          <WizardDialog.Progress />
          <WizardDialog.Step index={0}><input aria-label="s0" /></WizardDialog.Step>
          <WizardDialog.Step index={1}><input aria-label="s1" /></WizardDialog.Step>
          <WizardDialog.Actions />
        </WizardDialog.Root>
      );
    }

    const user = userEvent.setup();
    render(<Controller />);

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(onStepChange).toHaveBeenCalledWith(1);
  });

  it('controlled open reads `open` prop and emits `onOpenChange`', async () => {
    const onOpenChange = vi.fn();

    function Controller(): React.JSX.Element {
      const [open, setOpen] = useState(true);
      return (
        <WizardDialog.Root
          open={open}
          onOpenChange={(next) => {
            onOpenChange(next);
            setOpen(next);
          }}
        >
          <WizardDialog.Title>Controlled open</WizardDialog.Title>
          <WizardDialog.Progress />
          <WizardDialog.Step index={0}><input aria-label="s0" /></WizardDialog.Step>
          <WizardDialog.Actions />
        </WizardDialog.Root>
      );
    }

    const user = userEvent.setup();
    render(<Controller />);

    await user.keyboard('{Escape}');
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
