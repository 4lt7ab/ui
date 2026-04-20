import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CommandPalette } from './CommandPalette';

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

// The Icon atom pulls the full SVG registry — mock it so we can assert on a
// lightweight marker and keep the test suite fast.
vi.mock('../../atoms/Icon', () => ({
  Icon: ({ name }: { name: string }) => (
    <span data-testid={`icon-${name}`}>[{name}]</span>
  ),
}));

// Keep platform detection deterministic — every test assumes non-Mac so the
// default shortcut listens for Ctrl+K. A dedicated test overrides this to
// exercise the Mac branch.
const originalUserAgent = Object.getOwnPropertyDescriptor(
  window.navigator,
  'userAgent',
);

function setUserAgent(ua: string): void {
  Object.defineProperty(window.navigator, 'userAgent', {
    configurable: true,
    value: ua,
  });
}

beforeEach(() => {
  document.body.innerHTML = '';
  setUserAgent('Linux x86_64');
});

afterEach(() => {
  if (originalUserAgent) {
    Object.defineProperty(window.navigator, 'userAgent', originalUserAgent);
  }
});

// ---------------------------------------------------------------------------
// Fixture — a representative palette with two groups and a shortcut.
// ---------------------------------------------------------------------------

function TestPalette({
  open,
  onOpenChange,
  defaultOpen,
  disabled,
  onSelectHome = vi.fn(),
  onSelectNewTask = vi.fn(),
  onSelectSettings = vi.fn(),
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  disabled?: boolean;
  onSelectHome?: () => void;
  onSelectNewTask?: () => void;
  onSelectSettings?: () => void;
}): React.JSX.Element {
  return (
    <CommandPalette.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disabled={disabled}
      aria-label="Command palette"
    >
      <CommandPalette.Trigger>Open commands</CommandPalette.Trigger>
      <CommandPalette.Content placeholder="Type a command…">
        <CommandPalette.Group label="Navigation">
          <CommandPalette.Item
            value="home"
            icon="arrow-left"
            shortcut={['G', 'H']}
            onSelect={onSelectHome}
          >
            Go home
          </CommandPalette.Item>
          <CommandPalette.Item
            value="settings"
            icon="settings"
            shortcut="⌘,"
            keywords={['preferences']}
            onSelect={onSelectSettings}
          >
            Settings
          </CommandPalette.Item>
        </CommandPalette.Group>
        <CommandPalette.Group label="Actions">
          <CommandPalette.Item
            value="new-task"
            icon="plus"
            shortcut="⌘N"
            keywords={['create', 'todo']}
            onSelect={onSelectNewTask}
          >
            New task
          </CommandPalette.Item>
        </CommandPalette.Group>
      </CommandPalette.Content>
    </CommandPalette.Root>
  );
}

// ---------------------------------------------------------------------------
// Shortcut handling
// ---------------------------------------------------------------------------

describe('CommandPalette — shortcut', () => {
  it('opens on Ctrl+K on non-Mac platforms by default', () => {
    const onOpenChange = vi.fn();
    render(<TestPalette onOpenChange={onOpenChange} />);
    expect(screen.queryByRole('dialog')).toBeNull();

    act(() => {
      const e = new KeyboardEvent('keydown', {
        key: 'k',
        ctrlKey: true,
        bubbles: true,
        cancelable: true,
      });
      document.dispatchEvent(e);
    });

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('opens on Cmd+K on Mac', () => {
    setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
    );
    const onOpenChange = vi.fn();
    render(<TestPalette onOpenChange={onOpenChange} />);

    act(() => {
      const e = new KeyboardEvent('keydown', {
        key: 'k',
        metaKey: true,
        bubbles: true,
        cancelable: true,
      });
      document.dispatchEvent(e);
    });

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('toggles closed when the shortcut fires while open', () => {
    const onOpenChange = vi.fn();
    render(<TestPalette defaultOpen onOpenChange={onOpenChange} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    act(() => {
      const e = new KeyboardEvent('keydown', {
        key: 'k',
        ctrlKey: true,
        bubbles: true,
        cancelable: true,
      });
      document.dispatchEvent(e);
    });

    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('respects a custom shortcut', () => {
    const onOpenChange = vi.fn();
    render(
      <CommandPalette.Root
        aria-label="palette"
        onOpenChange={onOpenChange}
        shortcut={{ key: '/', shift: true }}
      >
        <CommandPalette.Content>
          <CommandPalette.Item value="x" onSelect={() => {}}>
            x
          </CommandPalette.Item>
        </CommandPalette.Content>
      </CommandPalette.Root>,
    );

    // Default shortcut must not fire.
    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'k',
          ctrlKey: true,
          bubbles: true,
          cancelable: true,
        }),
      );
    });
    expect(onOpenChange).not.toHaveBeenCalled();

    // Custom shortcut fires.
    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: '/',
          shiftKey: true,
          bubbles: true,
          cancelable: true,
        }),
      );
    });
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('disables the shortcut when `disabled` is true', () => {
    const onOpenChange = vi.fn();
    render(<TestPalette disabled onOpenChange={onOpenChange} />);
    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'k',
          ctrlKey: true,
          bubbles: true,
          cancelable: true,
        }),
      );
    });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('disables the shortcut when `shortcut={null}`', () => {
    const onOpenChange = vi.fn();
    render(
      <CommandPalette.Root
        aria-label="palette"
        onOpenChange={onOpenChange}
        shortcut={null}
      >
        <CommandPalette.Content>
          <CommandPalette.Item value="x" onSelect={() => {}}>
            x
          </CommandPalette.Item>
        </CommandPalette.Content>
      </CommandPalette.Root>,
    );
    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'k',
          ctrlKey: true,
          bubbles: true,
          cancelable: true,
        }),
      );
    });
    expect(onOpenChange).not.toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// Programmatic open + controlled state
// ---------------------------------------------------------------------------

describe('CommandPalette — open state', () => {
  it('supports controlled open via props', async () => {
    const user = userEvent.setup();
    function Wrapper(): React.JSX.Element {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button onClick={() => setOpen(true)}>external open</button>
          <TestPalette open={open} onOpenChange={setOpen} />
        </>
      );
    }
    render(<Wrapper />);

    expect(screen.queryByRole('dialog')).toBeNull();
    await user.click(screen.getByText('external open'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('opens when the Trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<TestPalette />);
    await user.click(screen.getByRole('button', { name: /command palette/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes on Escape', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<TestPalette defaultOpen onOpenChange={onOpenChange} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes on overlay click', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<TestPalette defaultOpen onOpenChange={onOpenChange} />);

    // Overlay is the role=presentation div rendered by <Overlay>.
    const overlay = document.querySelector(
      '[role="presentation"]',
    ) as HTMLElement;
    expect(overlay).toBeTruthy();
    await user.click(overlay);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });
});

// ---------------------------------------------------------------------------
// Group + filtering behavior
// ---------------------------------------------------------------------------

describe('CommandPalette — grouping and filtering', () => {
  it('renders each Group label as a heading row alongside its items', () => {
    render(<TestPalette defaultOpen />);
    // Groups mark themselves with data-command-palette-group + data-label so
    // tests (and consumer E2E helpers) can query a full group block.
    expect(
      document.querySelector('[data-command-palette-group][data-label="Navigation"]'),
    ).not.toBeNull();
    expect(
      document.querySelector('[data-command-palette-group][data-label="Actions"]'),
    ).not.toBeNull();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    // All three items render on open with empty query.
    expect(screen.getByText('Go home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('New task')).toBeInTheDocument();
  });

  it('filters items by rendered text as the user types', async () => {
    const user = userEvent.setup();
    render(<TestPalette defaultOpen />);

    const input = screen.getByRole('combobox');
    await user.type(input, 'home');
    expect(screen.getByText('Go home')).toBeInTheDocument();
    expect(screen.queryByText('Settings')).toBeNull();
    expect(screen.queryByText('New task')).toBeNull();
  });

  it('filters by keywords when provided', async () => {
    const user = userEvent.setup();
    render(<TestPalette defaultOpen />);
    const input = screen.getByRole('combobox');
    // "preferences" is a keyword on Settings only; the rendered label is "Settings".
    await user.type(input, 'preferences');
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.queryByText('Go home')).toBeNull();
  });

  it('hides a Group entirely when every item in it filters out', async () => {
    const user = userEvent.setup();
    render(<TestPalette defaultOpen />);
    const input = screen.getByRole('combobox');
    await user.type(input, 'todo'); // matches only "New task" via keyword
    expect(screen.getByText('New task')).toBeInTheDocument();
    expect(
      document.querySelector(
        '[data-command-palette-group][data-label="Navigation"]',
      ),
    ).toBeNull();
    expect(
      document.querySelector(
        '[data-command-palette-group][data-label="Actions"]',
      ),
    ).not.toBeNull();
  });

  it('falls back to the Empty slot when nothing matches', async () => {
    const user = userEvent.setup();
    render(<TestPalette defaultOpen />);
    const input = screen.getByRole('combobox');
    await user.type(input, 'xyznotfound');
    expect(screen.getByText('No results.')).toBeInTheDocument();
    expect(screen.queryByRole('option')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Item rendering and selection
// ---------------------------------------------------------------------------

describe('CommandPalette — item behavior', () => {
  it('renders the shortcut hint as <kbd> elements', () => {
    render(<TestPalette defaultOpen />);
    // Array shortcut produces one <kbd> per part.
    const gKey = screen.getByText('G');
    const hKey = screen.getByText('H');
    expect(gKey.tagName).toBe('KBD');
    expect(hKey.tagName).toBe('KBD');

    // String shortcut produces a single <kbd>.
    const cmdN = screen.getByText('⌘N');
    expect(cmdN.tagName).toBe('KBD');
  });

  it('fires onSelect and closes the palette on item click', async () => {
    const user = userEvent.setup();
    const onSelectHome = vi.fn();
    const onOpenChange = vi.fn();
    render(
      <TestPalette
        defaultOpen
        onOpenChange={onOpenChange}
        onSelectHome={onSelectHome}
      />,
    );

    await user.click(screen.getByText('Go home'));
    expect(onSelectHome).toHaveBeenCalledOnce();
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('fires onSelect and closes the palette on Enter for the focused item', async () => {
    // Regression: the Item's onSelect used to be wired through the inner
    // <span onClick>, which Combobox's Enter path never reaches. Keyboard
    // selection was dead — only mouse clicks worked. The fix routes onSelect
    // through Combobox.Root's onSelect so both click + Enter dispatch it.
    //
    // CommandPalette.Content opens the Combobox listbox on mount via
    // `defaultOpen` on Combobox.Root, so the first ArrowDown moves focus to
    // the first option directly (no separate "open" key first).
    const user = userEvent.setup();
    const onSelectHome = vi.fn();
    const onOpenChange = vi.fn();
    render(
      <TestPalette
        defaultOpen
        onOpenChange={onOpenChange}
        onSelectHome={onSelectHome}
      />,
    );

    const input = screen.getByRole('combobox');
    input.focus();
    await user.keyboard('{ArrowDown}{Enter}');

    expect(onSelectHome).toHaveBeenCalledOnce();
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('fires the right onSelect after stepping past the first option with ArrowDown', async () => {
    // Pin the per-Item registry: stepping past the first option must dispatch
    // the *second* item's onSelect, not the first item's. Catches any
    // regression that stuffed a single shared callback into the registry.
    // Listbox opens on mount (Combobox.Root defaultOpen) so two ArrowDowns
    // focus item[0] then item[1].
    const user = userEvent.setup();
    const onSelectHome = vi.fn();
    const onSelectSettings = vi.fn();
    render(
      <TestPalette
        defaultOpen
        onSelectHome={onSelectHome}
        onSelectSettings={onSelectSettings}
      />,
    );

    const input = screen.getByRole('combobox');
    input.focus();
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');

    expect(onSelectSettings).toHaveBeenCalledOnce();
    expect(onSelectHome).not.toHaveBeenCalled();
  });

  it('renders the registry icon when `icon` is provided', () => {
    render(<TestPalette defaultOpen />);
    expect(screen.getByTestId('icon-arrow-left')).toBeInTheDocument();
    expect(screen.getByTestId('icon-settings')).toBeInTheDocument();
    expect(screen.getByTestId('icon-plus')).toBeInTheDocument();
  });

  it('shows the listbox with all options on mount without consumer interaction', () => {
    // Regression: Combobox.Input.handleFocus gated openMenu() on items.length > 0,
    // but Items register via useEffect after mount — so autoFocus on the Input
    // saw items=[] and stayed closed. Net: the palette opened with aria-expanded
    // false and the listbox hidden until the user typed or re-focused. The fix
    // is `defaultOpen` on Combobox.Root, which CommandPalette.Content sets.
    render(<TestPalette defaultOpen />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('aria-expanded', 'true');

    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeVisible();

    // All three options are visible without typing or re-focusing.
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(screen.getByRole('option', { name: /Go home/ })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Settings/ })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /New task/ })).toBeInTheDocument();
  });

  it('renders the listbox inside the panel scroll body in normal flow (not absolute)', () => {
    // Regression: Combobox.List defaulted to position:absolute + top:100% of
    // the Combobox.Root wrapper. Inside CommandPalette.Content the wrapper
    // fills the panel, so the listbox stacked at the panel's bottom edge and
    // got clipped by the panel's overflow:hidden. Consumers had to flip the
    // panel's overflow at runtime via DOM poking. Fix: CommandPalette.Content
    // now sets position="inline" on Combobox.List, which renders it as a
    // normal block child of the panel's scroll body.
    render(<TestPalette defaultOpen />);

    const listbox = screen.getByRole('listbox');
    // Inline mode: no absolute/relative positioning on the listbox itself —
    // the surrounding panel and scroll body own layout.
    expect(listbox.style.position).not.toBe('absolute');
    expect(listbox.style.top).toBe('');
    expect(listbox.style.bottom).toBe('');
    // The listbox lives inside the panel — not floated outside of it.
    const panel = screen.getByTestId('command-palette-content');
    expect(panel.contains(listbox)).toBe(true);
    // First focusable option sits inside the listbox (not lifted out by an
    // absolute-positioned ancestor that would escape the panel's clipping).
    const firstOption = screen.getByRole('option', { name: /Go home/ });
    expect(listbox.contains(firstOption)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// A11y wiring
// ---------------------------------------------------------------------------

describe('CommandPalette — a11y', () => {
  it('sets role=dialog + aria-modal + aria-label on the panel', () => {
    render(<TestPalette defaultOpen />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Command palette');
  });
});

// ---------------------------------------------------------------------------
// Orphan-check — sub-parts must throw when rendered outside their required
// ancestor. Sizes up every sub-part once.
// ---------------------------------------------------------------------------

describe('CommandPalette — orphan-check', () => {
  const parts: Array<[string, () => React.JSX.Element, RegExp]> = [
    [
      'Trigger',
      () => <CommandPalette.Trigger>x</CommandPalette.Trigger>,
      /CommandPalette\.Trigger.*must be rendered inside <CommandPalette\.Root>/,
    ],
    [
      'Content',
      () => (
        <CommandPalette.Content>
          <CommandPalette.Item value="x" onSelect={() => {}}>
            x
          </CommandPalette.Item>
        </CommandPalette.Content>
      ),
      /CommandPalette\.Content.*must be rendered inside <CommandPalette\.Root>/,
    ],
    [
      'Group',
      () => (
        <CommandPalette.Group label="x">
          <CommandPalette.Item value="x" onSelect={() => {}}>
            x
          </CommandPalette.Item>
        </CommandPalette.Group>
      ),
      /CommandPalette\.Group.*must be rendered inside <CommandPalette\.Content>/,
    ],
    [
      'Item',
      () => (
        <CommandPalette.Item value="x" onSelect={() => {}}>
          x
        </CommandPalette.Item>
      ),
      // Item needs both contexts — it reaches Content's QueryContext first.
      /CommandPalette\.Item.*must be rendered inside <CommandPalette\.Content>/,
    ],
  ];

  for (const [name, factory, expected] of parts) {
    it(`throws when <CommandPalette.${name}> is rendered without its ancestor`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(expected);
      console.error = err;
    });
  }
});
