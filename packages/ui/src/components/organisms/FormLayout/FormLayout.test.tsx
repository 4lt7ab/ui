import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { FormLayout, useFormLayout } from './index';

// Semantic tokens are CSS var references — a Proxy mock keeps the test
// environment from importing the full token barrel.
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
// Orphan-check — every sub-part throws when rendered outside Root.
// ---------------------------------------------------------------------------

describe('FormLayout — orphan-check', () => {
  const parts: Array<[string, () => React.JSX.Element]> = [
    ['Header', () => <FormLayout.Header title="x" />],
    [
      'Section',
      () => (
        <FormLayout.Section>
          <FormLayout.SectionHeader title="x" />
          <FormLayout.SectionBody>y</FormLayout.SectionBody>
        </FormLayout.Section>
      ),
    ],
    ['Actions', () => <FormLayout.Actions />],
    ['SaveButton', () => <FormLayout.SaveButton />],
    ['CancelButton', () => <FormLayout.CancelButton />],
    [
      'DirtyOnChange',
      () => (
        <FormLayout.DirtyOnChange>
          <input />
        </FormLayout.DirtyOnChange>
      ),
    ],
    ['NavigationGuard', () => <FormLayout.NavigationGuard />],
  ];

  for (const [name, factory] of parts) {
    it(`throws when <FormLayout.${name}> is rendered without Root`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(
        new RegExp(`FormLayout\\.${name}.*must be rendered inside <FormLayout\\.Root>`),
      );
      console.error = err;
    });
  }

  it('useFormLayout() throws when called outside Root', () => {
    function Consumer(): React.JSX.Element {
      useFormLayout();
      return <span />;
    }
    const err = console.error;
    console.error = vi.fn();
    expect(() => render(<Consumer />)).toThrow(
      /FormLayout\.<consumer>.*must be rendered inside <FormLayout\.Root>/,
    );
    console.error = err;
  });

  it('SectionHeader / SectionBody throw when rendered outside <FormLayout.Section>', () => {
    const err = console.error;
    console.error = vi.fn();
    expect(() =>
      render(
        <FormLayout.Root>
          <FormLayout.SectionHeader title="x" />
        </FormLayout.Root>,
      ),
    ).toThrow(
      /FormLayout\.SectionHeader.*must be rendered inside <FormLayout\.Section>/,
    );
    expect(() =>
      render(
        <FormLayout.Root>
          <FormLayout.SectionBody>y</FormLayout.SectionBody>
        </FormLayout.Root>,
      ),
    ).toThrow(
      /FormLayout\.SectionBody.*must be rendered inside <FormLayout\.Section>/,
    );
    console.error = err;
  });
});

// ---------------------------------------------------------------------------
// Dirty-state propagation — controlled + uncontrolled.
// ---------------------------------------------------------------------------

describe('FormLayout — dirty-state propagation', () => {
  it('uncontrolled: starts pristine, flips to dirty via useFormLayout().setDirty', async () => {
    function MarkDirtyButton(): React.JSX.Element {
      const { setDirty, dirty } = useFormLayout();
      return (
        <button type="button" onClick={() => setDirty(true)}>
          {dirty ? 'dirty' : 'pristine'}
        </button>
      );
    }

    const user = userEvent.setup();
    const { container } = render(
      <FormLayout.Root>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="Profile" />
          <FormLayout.SectionBody>
            <MarkDirtyButton />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );

    const form = container.querySelector('form') as HTMLElement;
    expect(form.getAttribute('data-state')).toBe('pristine');

    // SaveButton is auto-disabled while pristine.
    expect(screen.getByRole('button', { name: 'Save' }).hasAttribute('disabled')).toBe(true);

    // Click the consumer-rendered button to flip dirty state through context.
    await user.click(screen.getByRole('button', { name: 'pristine' }));
    expect(form.getAttribute('data-state')).toBe('dirty');
    expect(screen.getByRole('button', { name: 'Save' }).hasAttribute('disabled')).toBe(false);
  });

  it('controlled: reads `dirty` prop and notifies via `onDirtyChange`', async () => {
    const handler = vi.fn();

    function Controller(): React.JSX.Element {
      const [dirty, setDirty] = useState(false);
      return (
        <FormLayout.Root
          dirty={dirty}
          onDirtyChange={(next) => {
            handler(next);
            setDirty(next);
          }}
        >
          <FormLayout.Section>
            <FormLayout.SectionHeader title="Profile" />
            <FormLayout.SectionBody>
              <input aria-label="name" />
            </FormLayout.SectionBody>
          </FormLayout.Section>
          <FormLayout.DirtyOnChange>
            <input aria-label="inside-dirty" />
          </FormLayout.DirtyOnChange>
          <FormLayout.Actions>
            <FormLayout.SaveButton />
          </FormLayout.Actions>
        </FormLayout.Root>
      );
    }

    const user = userEvent.setup();
    const { container } = render(<Controller />);

    const form = container.querySelector('form') as HTMLElement;
    expect(form.getAttribute('data-state')).toBe('pristine');

    // DirtyOnChange calls setDirty(true); the controlled onChange fires.
    await user.type(screen.getByLabelText('inside-dirty'), 'hi');
    expect(handler).toHaveBeenCalledWith(true);
    expect(form.getAttribute('data-state')).toBe('dirty');
  });

  it('DirtyOnChange skips re-firing setDirty once already dirty', async () => {
    const onDirtyChange = vi.fn();

    render(
      <FormLayout.Root onDirtyChange={onDirtyChange}>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="Section" />
          <FormLayout.SectionBody>
            <FormLayout.DirtyOnChange>
              <input aria-label="field" />
            </FormLayout.DirtyOnChange>
          </FormLayout.SectionBody>
        </FormLayout.Section>
      </FormLayout.Root>,
    );

    const user = userEvent.setup();
    const field = screen.getByLabelText('field');
    await user.type(field, 'abc');

    // Only the first change event should flip dirty; subsequent keystrokes
    // should be ignored (the wrapper short-circuits once dirty=true).
    const trueCalls = onDirtyChange.mock.calls.filter(([v]) => v === true);
    expect(trueCalls.length).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// SaveButton — type=submit, form-id wiring, auto-disable on pristine.
// ---------------------------------------------------------------------------

describe('FormLayout — SaveButton submit wiring', () => {
  it('SaveButton is type=submit and carries the form id so Enter submits the form', () => {
    const { container } = render(
      <FormLayout.Root id="my-form" dirty>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input name="x" />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );
    const btn = screen.getByRole('button', { name: 'Save' }) as HTMLButtonElement;
    expect(btn.getAttribute('type')).toBe('submit');
    expect(btn.getAttribute('form')).toBe('my-form');
    // When the SaveButton is portaled (viewport-sticky), it needs the form attr
    // to participate in submission from outside the <form>. Even in container
    // mode, the attr is stable so the button behaves the same either way.
    expect(container.querySelector('form')?.id).toBe('my-form');
  });

  it('clicking SaveButton fires the form onSubmit / onSave', async () => {
    const onSave = vi.fn();
    const user = userEvent.setup();
    render(
      <FormLayout.Root dirty onSave={onSave}>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input name="x" />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('CancelButton fires onCancel', async () => {
    const onCancel = vi.fn();
    const user = userEvent.setup();
    render(
      <FormLayout.Root onCancel={onCancel}>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input name="x" />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.CancelButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('SaveButton respects an explicit disabled prop override', () => {
    render(
      <FormLayout.Root dirty>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input name="x" />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton disabled />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );
    const btn = screen.getByRole('button', { name: 'Save' }) as HTMLButtonElement;
    expect(btn.hasAttribute('disabled')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// useFormLayout() hook values — reads dirty/saving, can set both.
// ---------------------------------------------------------------------------

describe('FormLayout — useFormLayout() hook', () => {
  it('exposes { dirty, setDirty, saving, setSaving } to consumer children', async () => {
    function Inspector(): React.JSX.Element {
      const { dirty, saving, setDirty, setSaving } = useFormLayout();
      return (
        <div>
          <span data-testid="dirty">{String(dirty)}</span>
          <span data-testid="saving">{String(saving)}</span>
          <button type="button" onClick={() => setDirty(true)}>
            mark-dirty
          </button>
          <button type="button" onClick={() => setSaving(true)}>
            mark-saving
          </button>
        </div>
      );
    }

    const user = userEvent.setup();
    render(
      <FormLayout.Root>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <Inspector />
          </FormLayout.SectionBody>
        </FormLayout.Section>
      </FormLayout.Root>,
    );

    expect(screen.getByTestId('dirty').textContent).toBe('false');
    expect(screen.getByTestId('saving').textContent).toBe('false');

    await user.click(screen.getByRole('button', { name: 'mark-dirty' }));
    expect(screen.getByTestId('dirty').textContent).toBe('true');

    await user.click(screen.getByRole('button', { name: 'mark-saving' }));
    expect(screen.getByTestId('saving').textContent).toBe('true');
  });
});

// ---------------------------------------------------------------------------
// NavigationGuard — beforeunload wiring while dirty.
// ---------------------------------------------------------------------------

describe('FormLayout — NavigationGuard', () => {
  it('attaches a beforeunload listener only while dirty', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');

    const { rerender } = render(
      <FormLayout.Root dirty={false}>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.NavigationGuard />
      </FormLayout.Root>,
    );

    // Not dirty: no beforeunload listener was added.
    expect(addSpy.mock.calls.filter(([e]) => e === 'beforeunload').length).toBe(0);

    // Flip to dirty — the effect re-runs and attaches the listener.
    rerender(
      <FormLayout.Root dirty>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.NavigationGuard />
      </FormLayout.Root>,
    );

    expect(addSpy.mock.calls.filter(([e]) => e === 'beforeunload').length).toBe(1);

    // Flip back to pristine — the cleanup removes it.
    rerender(
      <FormLayout.Root dirty={false}>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.NavigationGuard />
      </FormLayout.Root>,
    );

    expect(removeSpy.mock.calls.filter(([e]) => e === 'beforeunload').length).toBe(1);

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('dispatching beforeunload while dirty calls preventDefault (prompt fires)', () => {
    render(
      <FormLayout.Root dirty>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.NavigationGuard message="custom-msg" />
      </FormLayout.Root>,
    );

    // Fire a real beforeunload event and observe that our handler intercepts
    // it. Modern browsers ignore the custom `returnValue` string and show
    // their canned prompt — what matters is that `preventDefault()` was
    // called (that's what opts the page into the browser's confirmation).
    const event = new Event('beforeunload', { cancelable: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    act(() => {
      window.dispatchEvent(event);
    });

    expect(preventSpy).toHaveBeenCalled();
  });

  it('no beforeunload intercept when NavigationGuard is not mounted even if dirty', () => {
    render(
      <FormLayout.Root dirty>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
      </FormLayout.Root>,
    );

    const event = new Event('beforeunload', { cancelable: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    act(() => {
      window.dispatchEvent(event);
    });

    expect(preventSpy).not.toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// Actions — sticky modes + toolbar landmark.
// ---------------------------------------------------------------------------

describe('FormLayout — Actions sticky positioning', () => {
  it('renders Actions as a toolbar with data-state=idle', () => {
    render(
      <FormLayout.Root>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );
    const toolbar = screen.getByRole('toolbar', { name: 'Form actions' });
    expect(toolbar.getAttribute('data-state')).toBe('idle');
  });

  it('flips Actions data-state=saving while saving=true', () => {
    render(
      <FormLayout.Root saving>
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );
    const toolbar = screen.getByRole('toolbar', { name: 'Form actions' });
    expect(toolbar.getAttribute('data-state')).toBe('saving');
  });

  it('sticky=viewport portals the Actions bar to document.body', () => {
    const { container } = render(
      <FormLayout.Root sticky="viewport">
        <FormLayout.Section>
          <FormLayout.SectionHeader title="S" />
          <FormLayout.SectionBody>
            <input />
          </FormLayout.SectionBody>
        </FormLayout.Section>
        <FormLayout.Actions>
          <FormLayout.SaveButton />
          <FormLayout.CancelButton />
        </FormLayout.Actions>
      </FormLayout.Root>,
    );

    // The toolbar is NOT inside the <form> — it's been portaled out.
    const form = container.querySelector('form');
    expect(form?.querySelector('[role="toolbar"]')).toBeNull();

    // But the toolbar IS present in document.body.
    const toolbar = document.body.querySelector('[role="toolbar"]') as HTMLElement;
    expect(toolbar).not.toBeNull();
    // Viewport mode uses position: fixed.
    expect(toolbar.style.position).toBe('fixed');
  });
});
