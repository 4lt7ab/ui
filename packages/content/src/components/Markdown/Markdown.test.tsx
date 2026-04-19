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

  it('does not enter edit mode when an inline link inside rendered markdown is clicked', async () => {
    const user = userEvent.setup();
    const onStartEdit = vi.fn();

    render(
      <Markdown editable fieldLabel="Summary" onStartEdit={onStartEdit}>
        {'See [the docs](https://example.com/docs) for more.'}
      </Markdown>,
    );

    // The outer display wrapper is no longer a button — the only ARIA button
    // exposed to assistive tech is the overlay that carries the click-to-edit
    // affordance. The inline anchor is a separate interactive element.
    const link = screen.getByRole('link', { name: /the docs/i }) as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('https://example.com/docs');

    // Neutralize the default navigation so jsdom doesn't log a
    // "not implemented: navigation" warning during the click.
    link.addEventListener('click', (e) => e.preventDefault());

    await user.click(link);
    expect(onStartEdit).not.toHaveBeenCalled();
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

describe('Markdown — components + remarkPlugins override props', () => {
  it('invokes a consumer remark plugin on the parsed mdast tree', () => {
    // The real doc-site wiring is: a remark plugin rewrites an mdast node's
    // data.hName so the rehype conversion emits a custom hast element, and
    // the components map hands it to a React component (see
    // `demo/examples/remarkLiveExample.ts`). This test just verifies the
    // plumbing — that a plugin appended via `remarkPlugins` runs against
    // the same tree the built-ins see.
    const calls: string[] = [];
    const pluginSpy = () => (tree: any) => {
      calls.push(tree?.type ?? 'unknown');
    };

    render(<Markdown remarkPlugins={[pluginSpy]}>{'# Heading\n\nBody.'}</Markdown>);

    expect(calls).toContain('root');
  });

  it('does not let a consumer key override a built-in tag (built-ins win)', () => {
    // Built-in h1 uses HeadingAnchor. A consumer-provided `h1` override must
    // not replace it — the merge in Markdown is "consumer first, built-ins
    // on top" so the library's own rendering is never silently swapped.
    const consumerH1 = vi.fn(() => <div data-testid="consumer-h1">nope</div>);

    render(
      <Markdown components={{ h1: consumerH1 }}>
        {'# Real heading'}
      </Markdown>,
    );

    expect(screen.queryByTestId('consumer-h1')).toBeNull();
    expect(consumerH1).not.toHaveBeenCalled();
    // The built-in HeadingAnchor still renders the h1 text.
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Real heading');
  });

  it('renders normally when the components prop is omitted', () => {
    // Confirms the additive contract — the zero-chrome `<Markdown>{md}</Markdown>`
    // call site is unchanged.
    render(<Markdown>{'# Plain heading'}</Markdown>);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Plain heading');
  });
});
