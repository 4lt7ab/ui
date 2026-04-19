import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DetailPage } from './index';
import { AppShell } from '../AppShell';

// Semantic tokens are CSS var references; a Proxy keeps the test env from
// pulling the full token barrel. Mirrors AppShell/DataTablePage/EmptyPage
// tests.
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

// Icons are pulled in transitively via IconButton. Stub so the test env
// doesn't depend on the full SVG registry.
vi.mock('../../atoms/Icon', () => ({
  Icon: ({ name }: { name: string }) => (
    <span data-testid={`icon-${name}`}>[{name}]</span>
  ),
}));

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('DetailPage — slot composition', () => {
  it('renders Header (<h1>), Meta (<dl>), Body, and RightPanel landmarks', () => {
    render(
      <DetailPage.Root>
        <DetailPage.Header
          title="Ship DetailPage"
          subtitle="organism · feature"
        />
        <DetailPage.Meta>
          <DetailPage.MetaItem label="Status">In progress</DetailPage.MetaItem>
          <DetailPage.MetaItem label="Owner">Alex</DetailPage.MetaItem>
        </DetailPage.Meta>
        <DetailPage.Body>
          <p>Body content</p>
        </DetailPage.Body>
        <DetailPage.RightPanel aria-label="Activity">
          <span>Side panel</span>
        </DetailPage.RightPanel>
      </DetailPage.Root>,
    );

    // H1 from Header
    expect(
      screen.getByRole('heading', { level: 1, name: 'Ship DetailPage' }),
    ).toBeDefined();

    // <main> landmark from Body (standalone — no AppShell)
    expect(screen.getByRole('main')).toBeDefined();

    // <aside> landmark from RightPanel
    expect(
      screen.getByRole('complementary', { name: 'Activity' }),
    ).toBeDefined();

    // Meta rendered body copy
    expect(screen.getByText('Body content')).toBeDefined();
  });

  it('renders Meta as a semantic <dl>/<dt>/<dd> key/value block', () => {
    const { container } = render(
      <DetailPage.Root>
        <DetailPage.Header title="x" />
        <DetailPage.Meta>
          <DetailPage.MetaItem label="Status">In progress</DetailPage.MetaItem>
          <DetailPage.MetaItem label="Created">Two days ago</DetailPage.MetaItem>
        </DetailPage.Meta>
      </DetailPage.Root>,
    );

    const dl = container.querySelector('dl') as HTMLDListElement;
    expect(dl).not.toBeNull();

    const dts = Array.from(dl.querySelectorAll('dt'));
    const dds = Array.from(dl.querySelectorAll('dd'));

    expect(dts.map((el) => el.textContent)).toEqual(['Status', 'Created']);
    expect(dds.map((el) => el.textContent)).toEqual([
      'In progress',
      'Two days ago',
    ]);
  });

  it('wires aria-labelledby to the Header title by default', () => {
    const { container } = render(
      <DetailPage.Root>
        <DetailPage.Header title="Entity name" />
      </DetailPage.Root>,
    );
    const section = container.querySelector('section') as HTMLElement;
    const labelledBy = section.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    // The labelling element is the id-carrying wrapper; its accessible
    // name comes from the descendant <h1>.
    const labeller = document.getElementById(labelledBy as string);
    expect(labeller).not.toBeNull();
    expect(labeller?.textContent).toContain('Entity name');
  });

  it('prefers aria-label over aria-labelledby when provided', () => {
    const { container } = render(
      <DetailPage.Root aria-label="Custom section label">
        <DetailPage.Header title="Entity" />
      </DetailPage.Root>,
    );
    const section = container.querySelector('section') as HTMLElement;
    expect(section.getAttribute('aria-label')).toBe('Custom section label');
    expect(section.getAttribute('aria-labelledby')).toBeNull();
  });
});

describe('DetailPage.Header — back affordance', () => {
  it('renders a left-aligned back button when onBack is provided', async () => {
    const handler = vi.fn();
    const user = userEvent.setup();

    render(
      <DetailPage.Root>
        <DetailPage.Header title="Entity" onBack={handler} />
      </DetailPage.Root>,
    );

    const backBtn = screen.getByRole('button', { name: 'Back' });
    expect(backBtn).toBeDefined();

    await user.click(backBtn);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('honors a custom backLabel on the back button', () => {
    render(
      <DetailPage.Root>
        <DetailPage.Header
          title="Entity"
          onBack={() => {}}
          backLabel="Return to list"
        />
      </DetailPage.Root>,
    );
    expect(
      screen.getByRole('button', { name: 'Return to list' }),
    ).toBeDefined();
  });

  it('omits the back button when onBack is not provided', () => {
    render(
      <DetailPage.Root>
        <DetailPage.Header title="Entity" />
      </DetailPage.Root>,
    );
    // No button with the default "Back" label should exist.
    expect(screen.queryByRole('button', { name: 'Back' })).toBeNull();
  });
});

describe('DetailPage.Actions — portal reparent into Header', () => {
  it('renders Actions children inside the Header trailing slot', () => {
    const { container } = render(
      <DetailPage.Root>
        <DetailPage.Header title="Entity" />
        <DetailPage.Actions>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </DetailPage.Actions>
      </DetailPage.Root>,
    );

    // The Actions slot inside the Header is a <div> with the sentinel attr;
    // both action buttons should be found as its descendants.
    const slot = container.querySelector(
      '[data-detailpage-actions-slot]',
    ) as HTMLElement;
    expect(slot).not.toBeNull();
    expect(slot.querySelectorAll('button').length).toBe(2);
    expect(screen.getByRole('button', { name: 'Edit' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeDefined();
  });

  it('portal target lives inside the Header row regardless of JSX order', () => {
    // Actions declared BEFORE Header in JSX must still render inside Header's
    // trailing slot — that's the whole point of the portal reparent.
    const { container } = render(
      <DetailPage.Root>
        <DetailPage.Actions>
          <button type="button">Publish</button>
        </DetailPage.Actions>
        <DetailPage.Header title="Entity" />
      </DetailPage.Root>,
    );

    const slot = container.querySelector(
      '[data-detailpage-actions-slot]',
    ) as HTMLElement;
    const btn = screen.getByRole('button', { name: 'Publish' });
    expect(slot.contains(btn)).toBe(true);
  });

  it('renders nothing when Header is absent (no portal target)', () => {
    render(
      <DetailPage.Root>
        <DetailPage.Body>
          <span>Body only</span>
        </DetailPage.Body>
        <DetailPage.Actions>
          <button type="button">Orphaned</button>
        </DetailPage.Actions>
      </DetailPage.Root>,
    );

    // Actions can't find a slot to portal into; its children are dropped.
    expect(screen.queryByRole('button', { name: 'Orphaned' })).toBeNull();
    expect(screen.getByText('Body only')).toBeDefined();
  });
});

describe('DetailPage.Body — landmark selection', () => {
  it('renders <main> when standalone (no AppShell)', () => {
    render(
      <DetailPage.Root>
        <DetailPage.Header title="x" />
        <DetailPage.Body>
          <span>Body</span>
        </DetailPage.Body>
      </DetailPage.Root>,
    );
    // One <main> landmark comes from Body.
    expect(screen.getByRole('main')).toBeDefined();
  });

  it('downgrades to <div> inside AppShell so the page keeps one <main>', () => {
    const { container } = render(
      <AppShell.Root>
        <AppShell.Main>
          <DetailPage.Root>
            <DetailPage.Header title="x" />
            <DetailPage.Body>
              <span>Body</span>
            </DetailPage.Body>
          </DetailPage.Root>
        </AppShell.Main>
      </AppShell.Root>,
    );
    // Exactly one <main> — the AppShell's, not Body's.
    expect(container.querySelectorAll('main').length).toBe(1);
    // And the AppShell's <main> should still be the one with gridArea.
    expect(screen.getByRole('main')).toBeDefined();
  });
});

describe('DetailPage.Meta — children validation', () => {
  it('renders MetaItem children unchanged', () => {
    render(
      <DetailPage.Root>
        <DetailPage.Header title="x" />
        <DetailPage.Meta>
          <DetailPage.MetaItem label="A">alpha</DetailPage.MetaItem>
          <DetailPage.MetaItem label="B">beta</DetailPage.MetaItem>
        </DetailPage.Meta>
      </DetailPage.Root>,
    );
    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('alpha')).toBeDefined();
    expect(screen.getByText('B')).toBeDefined();
    expect(screen.getByText('beta')).toBeDefined();
  });

  it('dev-mode warns on non-MetaItem children but still renders', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <DetailPage.Root>
        <DetailPage.Header title="x" />
        <DetailPage.Meta>
          <div data-testid="rogue">Not a MetaItem</div>
        </DetailPage.Meta>
      </DetailPage.Root>,
    );
    expect(warn).toHaveBeenCalled();
    expect(screen.getByTestId('rogue')).toBeDefined();
    warn.mockRestore();
  });
});

describe('DetailPage — orphan-check', () => {
  // Every sub-part reads context and must throw when rendered outside Root.
  // React logs the thrown error via console.error; silence it for clean
  // output.
  const parts: Array<[string, () => React.JSX.Element]> = [
    ['Header', () => <DetailPage.Header title="x" />],
    [
      'Meta',
      () => (
        <DetailPage.Meta>
          <DetailPage.MetaItem label="a">b</DetailPage.MetaItem>
        </DetailPage.Meta>
      ),
    ],
    [
      'MetaItem',
      () => <DetailPage.MetaItem label="a">b</DetailPage.MetaItem>,
    ],
    ['Body', () => <DetailPage.Body>x</DetailPage.Body>],
    ['Actions', () => <DetailPage.Actions>x</DetailPage.Actions>],
    ['RightPanel', () => <DetailPage.RightPanel>x</DetailPage.RightPanel>],
  ];

  for (const [name, factory] of parts) {
    it(`throws when <DetailPage.${name}> is rendered without Root`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(
        new RegExp(
          `DetailPage\\.${name}.*must be rendered inside <DetailPage\\.Root>`,
        ),
      );
      console.error = err;
    });
  }
});
