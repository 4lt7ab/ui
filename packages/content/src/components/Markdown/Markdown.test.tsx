import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Markdown } from './Markdown';

// Mock @4lt7ab/core — semantic tokens are CSS var references, so a Proxy
// returning a namespaced mock is sufficient; useInjectStyles is a noop.
vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
  useInjectStyles: vi.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('Markdown — editable mode', () => {
  it('renders the empty-state placeholder when editable is on and there is no content', () => {
    render(
      <Markdown editable placeholder="Click to add a summary...">
        {null}
      </Markdown>,
    );

    const empty = screen.getByRole('button', { name: /add content/i });
    expect(empty).toBeTruthy();
    expect(empty.textContent).toContain('Click to add a summary...');
  });

  it('renders the click-to-edit display when content is present and editing is off', () => {
    const { container } = render(
      <Markdown editable fieldLabel="Summary">
        {'Hello **world**.'}
      </Markdown>,
    );

    const display = screen.getByRole('button', { name: /edit summary/i });
    expect(display).toBeTruthy();
    // The rendered markdown is inside the display region
    expect(container.querySelector('strong')?.textContent).toBe('world');
  });

  it('invokes onStartEdit when the display region is clicked', async () => {
    const user = userEvent.setup();
    const onStartEdit = vi.fn();

    render(
      <Markdown editable fieldLabel="Summary" onStartEdit={onStartEdit}>
        {'Some saved content.'}
      </Markdown>,
    );

    await user.click(screen.getByRole('button', { name: /edit summary/i }));
    expect(onStartEdit).toHaveBeenCalledTimes(1);
  });

  it('invokes onStartEdit on Enter or Space when focused on the empty-state region', async () => {
    const user = userEvent.setup();
    const onStartEdit = vi.fn();

    render(
      <Markdown editable fieldLabel="Notes" onStartEdit={onStartEdit}>
        {null}
      </Markdown>,
    );

    const empty = screen.getByRole('button', { name: /add notes/i });
    empty.focus();
    await user.keyboard('{Enter}');
    expect(onStartEdit).toHaveBeenCalledTimes(1);
    await user.keyboard(' ');
    expect(onStartEdit).toHaveBeenCalledTimes(2);
  });

  it('renders a textarea + Save and Cancel controls when editing is on', () => {
    render(
      <Markdown editable editing value="draft text" fieldLabel="Summary">
        {'Saved content.'}
      </Markdown>,
    );

    const textarea = screen.getByRole('textbox', { name: /edit summary/i }) as HTMLTextAreaElement;
    expect(textarea).toBeTruthy();
    expect(textarea.value).toBe('draft text');

    // Save and Cancel rendered as actual <button> elements so ARIA reads them
    // correctly; their inline style reproduces the Button primary/secondary
    // visual contract but the test asserts on role/name, not style.
    expect(screen.getByRole('button', { name: 'Save' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeTruthy();
  });

  it('calls onEditChange when the textarea value changes', async () => {
    const user = userEvent.setup();
    const onEditChange = vi.fn();

    render(
      <Markdown editable editing value="draft" onEditChange={onEditChange} fieldLabel="Summary">
        {null}
      </Markdown>,
    );

    const textarea = screen.getByRole('textbox', { name: /edit summary/i });
    // Typing a single character into a controlled textarea whose `value` isn't
    // updated by the test fires `onEditChange` once with the synthesized new
    // string. We assert that behavior rather than a cumulative value, since
    // the test owns the controlled binding here.
    await user.type(textarea, 'x');

    expect(onEditChange).toHaveBeenCalled();
    const firstCallArg = onEditChange.mock.calls[0]?.[0] as string;
    expect(firstCallArg).toContain('x');
  });

  it('calls onSave when the Save button is clicked', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(
      <Markdown editable editing value="draft" onSave={onSave} fieldLabel="Summary">
        {null}
      </Markdown>,
    );

    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when the Cancel button is clicked', async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();

    render(
      <Markdown editable editing value="draft" onCancel={onCancel} fieldLabel="Summary">
        {null}
      </Markdown>,
    );

    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onSave when Cmd+Enter is pressed inside the textarea', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(
      <Markdown editable editing value="draft" onSave={onSave} fieldLabel="Summary">
        {null}
      </Markdown>,
    );

    const textarea = screen.getByRole('textbox', { name: /edit summary/i });
    textarea.focus();
    await user.keyboard('{Meta>}{Enter}{/Meta}');
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('calls onSave when Ctrl+Enter is pressed inside the textarea', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(
      <Markdown editable editing value="draft" onSave={onSave} fieldLabel="Summary">
        {null}
      </Markdown>,
    );

    const textarea = screen.getByRole('textbox', { name: /edit summary/i });
    textarea.focus();
    await user.keyboard('{Control>}{Enter}{/Control}');
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when Escape is pressed inside the textarea', async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();

    render(
      <Markdown editable editing value="draft" onCancel={onCancel} fieldLabel="Summary">
        {null}
      </Markdown>,
    );

    const textarea = screen.getByRole('textbox', { name: /edit summary/i });
    textarea.focus();
    await user.keyboard('{Escape}');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('renders the read-only copy-markdown button when editable is off (default)', () => {
    render(<Markdown>hello **world**</Markdown>);

    expect(screen.getByRole('button', { name: /copy markdown source/i })).toBeTruthy();
  });
});
