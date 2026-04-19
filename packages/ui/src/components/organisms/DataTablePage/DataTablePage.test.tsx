import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataTablePage } from './index';
import {
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from '../Table';

// Semantic tokens are CSS var references; a Proxy keeps the test env from
// pulling the full token barrel. Mirrors AppShell/EmptyPage tests.
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

// The Icon atom is pulled in transitively via EmptyState. Stub it so tests
// don't depend on the real SVG bundle.
vi.mock('../../atoms/Icon', () => ({
  Icon: ({ name }: { name: string }) => (
    <span data-testid={`icon-${name}`}>[{name}]</span>
  ),
}));

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('DataTablePage — slot composition', () => {
  it('renders all compound slots in a populated state', () => {
    render(
      <DataTablePage.Root rowCount={2}>
        <DataTablePage.Header title="Projects" subtitle="2 total" />
        <DataTablePage.FilterBar
          values={{ q: '' }}
          onChange={() => {}}
          filters={[{ type: 'text', key: 'q', placeholder: 'Search' }]}
        />
        <DataTablePage.Table>
          <TableHeader>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Row A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row B</TableCell>
            </TableRow>
          </TableBody>
        </DataTablePage.Table>
        <DataTablePage.Pagination
          page={1}
          totalPages={1}
          total={2}
          onPageChange={() => {}}
        />
        <DataTablePage.Empty
          icon="inbox"
          message="No projects match your filters."
        />
      </DataTablePage.Root>,
    );

    // The Header + its <h1> render.
    expect(
      screen.getByRole('heading', { level: 1, name: 'Projects' }),
    ).toBeDefined();

    // Filter input and table rows present.
    expect(screen.getByPlaceholderText('Search')).toBeDefined();
    expect(screen.getByText('Row A')).toBeDefined();
    expect(screen.getByText('Row B')).toBeDefined();

    // Pagination.
    expect(screen.getByText(/Page 1 of 1/)).toBeDefined();

    // Empty is absent when populated.
    expect(
      screen.queryByText('No projects match your filters.'),
    ).toBeNull();
  });

  it('wires aria-labelledby to the Header title when no aria-label is set', () => {
    const { container } = render(
      <DataTablePage.Root rowCount={1}>
        <DataTablePage.Header title="Projects" />
      </DataTablePage.Root>,
    );
    const section = container.querySelector('section') as HTMLElement;
    const labelledBy = section.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    const labeller = document.getElementById(labelledBy as string);
    // The labelling element is our id-carrying wrapper div; its accessible
    // name comes from the descendant <h1>.
    expect(labeller).not.toBeNull();
    expect(labeller?.textContent).toContain('Projects');
  });

  it('prefers aria-label over aria-labelledby when provided', () => {
    const { container } = render(
      <DataTablePage.Root rowCount={0} aria-label="Custom label">
        <DataTablePage.Header title="Projects" />
      </DataTablePage.Root>,
    );
    const section = container.querySelector('section') as HTMLElement;
    expect(section.getAttribute('aria-label')).toBe('Custom label');
    expect(section.getAttribute('aria-labelledby')).toBeNull();
  });
});

describe('DataTablePage — Empty slot toggling on rowCount', () => {
  it('renders Empty and flips data-state to "empty" when rowCount === 0', () => {
    const { container } = render(
      <DataTablePage.Root rowCount={0}>
        <DataTablePage.Header title="Projects" />
        <DataTablePage.Table>
          <TableHeader>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableHeader>
        </DataTablePage.Table>
        <DataTablePage.Empty icon="inbox" message="Nothing here yet." />
      </DataTablePage.Root>,
    );

    const section = container.querySelector('section') as HTMLElement;
    expect(section.getAttribute('data-state')).toBe('empty');
    expect(screen.getByText('Nothing here yet.')).toBeDefined();
  });

  it('hides Empty and flips data-state to "populated" when rowCount > 0', () => {
    const { container } = render(
      <DataTablePage.Root rowCount={5}>
        <DataTablePage.Header title="Projects" />
        <DataTablePage.Empty icon="inbox" message="Nothing here yet." />
      </DataTablePage.Root>,
    );

    const section = container.querySelector('section') as HTMLElement;
    expect(section.getAttribute('data-state')).toBe('populated');
    // Empty returns null when rowCount > 0; the message must not be in DOM.
    expect(screen.queryByText('Nothing here yet.')).toBeNull();
  });

  it('toggles Empty visibility as rowCount changes across renders', () => {
    const Tree = ({ n }: { n: number }): React.JSX.Element => (
      <DataTablePage.Root rowCount={n}>
        <DataTablePage.Header title="Projects" />
        <DataTablePage.Empty icon="inbox" message="No rows." />
      </DataTablePage.Root>
    );

    const { rerender, container } = render(<Tree n={3} />);
    expect(screen.queryByText('No rows.')).toBeNull();
    expect(container.querySelector('section')?.getAttribute('data-state')).toBe(
      'populated',
    );

    rerender(<Tree n={0} />);
    expect(screen.getByText('No rows.')).toBeDefined();
    expect(container.querySelector('section')?.getAttribute('data-state')).toBe(
      'empty',
    );

    rerender(<Tree n={1} />);
    expect(screen.queryByText('No rows.')).toBeNull();
    expect(container.querySelector('section')?.getAttribute('data-state')).toBe(
      'populated',
    );
  });
});

describe('DataTablePage — orphan-check', () => {
  // Every sub-part reads context and must throw when rendered outside Root.
  // React logs the thrown error via console.error; silence it for clean output.
  const parts: Array<[string, () => React.JSX.Element]> = [
    ['Header', () => <DataTablePage.Header title="x" />],
    [
      'FilterBar',
      () => (
        <DataTablePage.FilterBar values={{}} onChange={() => {}} filters={[]} />
      ),
    ],
    [
      'Table',
      () => (
        <DataTablePage.Table>
          <TableHeader>
            <TableHeaderCell>x</TableHeaderCell>
          </TableHeader>
        </DataTablePage.Table>
      ),
    ],
    [
      'Pagination',
      () => (
        <DataTablePage.Pagination
          page={1}
          totalPages={1}
          total={0}
          onPageChange={() => {}}
        />
      ),
    ],
    ['Empty', () => <DataTablePage.Empty icon="inbox" message="x" />],
  ];

  for (const [name, factory] of parts) {
    it(`throws when <DataTablePage.${name}> is rendered without Root`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(
        new RegExp(
          `DataTablePage\\.${name}.*must be rendered inside <DataTablePage\\.Root>`,
        ),
      );
      console.error = err;
    });
  }
});
