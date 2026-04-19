import React, { useState } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from './index';
import type { FilterConfig } from './FilterBar';

// Minimal mock — semantic tokens resolve to var(--mock-*) strings,
// useInjectStyles is a side-effect-only hook.
vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy(
    {},
    { get: (_t, prop) => `var(--mock-${String(prop)})` },
  ),
  useInjectStyles: vi.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = '';
});

// ---------------------------------------------------------------------------
// Harness: controlled values + external captures for assertions
// ---------------------------------------------------------------------------

function ControlledFilterBar(props: {
  initial?: Record<string, string>;
  filters?: FilterConfig[];
  children?: React.ReactNode;
  onChangeSpy?: (v: Record<string, string>) => void;
}): React.JSX.Element {
  const [values, setValues] = useState<Record<string, string>>(props.initial ?? {});
  return (
    <Table.FilterBar
      values={values}
      onChange={(v) => {
        setValues(v);
        props.onChangeSpy?.(v);
      }}
      filters={props.filters}
    >
      {props.children}
    </Table.FilterBar>
  );
}

// ---------------------------------------------------------------------------
// Namespace attachment
// ---------------------------------------------------------------------------

describe('Table.FilterBar — namespace attachment', () => {
  it('exposes Table.FilterBar on the Table compound', () => {
    expect(typeof Table.FilterBar).toBe('function');
  });

  it('exposes FilterBar.Text and FilterBar.Select subparts', () => {
    expect(typeof Table.FilterBar.Text).toBe('function');
    expect(typeof Table.FilterBar.Select).toBe('function');
  });
});

// ---------------------------------------------------------------------------
// Orphan check
// ---------------------------------------------------------------------------

describe('Table.FilterBar — orphan check', () => {
  it('throws a clear error when FilterBar.Text is rendered outside FilterBar', () => {
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() =>
      render(<Table.FilterBar.Text field="title" />),
    ).toThrow(/Table\.FilterBar\.Text must be rendered inside <Table\.FilterBar>/);
    errSpy.mockRestore();
  });

  it('throws a clear error when FilterBar.Select is rendered outside FilterBar', () => {
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() =>
      render(
        <Table.FilterBar.Select field="status" options={[{ value: 'a', label: 'A' }]} />,
      ),
    ).toThrow(/Table\.FilterBar\.Select must be rendered inside <Table\.FilterBar>/);
    errSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// Mode-exclusion guard
// ---------------------------------------------------------------------------

describe('Table.FilterBar — mode exclusion', () => {
  it('throws if both `filters` and children are provided', () => {
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() =>
      render(
        <Table.FilterBar
          values={{}}
          onChange={() => {}}
          filters={[{ type: 'text', key: 'x' }]}
        >
          <Table.FilterBar.Text field="y" />
        </Table.FilterBar>,
      ),
    ).toThrow(/both `filters` and `children`/);
    errSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// Schema-driven mode
// ---------------------------------------------------------------------------

describe('Table.FilterBar — schema-driven mode', () => {
  it('renders a text input and a select from the schema', () => {
    render(
      <ControlledFilterBar
        filters={[
          { type: 'text', key: 'title', placeholder: 'Search titles' },
          {
            type: 'select',
            key: 'status',
            placeholder: 'All statuses',
            options: [
              { value: 'open', label: 'Open' },
              { value: 'closed', label: 'Closed' },
            ],
          },
        ]}
      />,
    );
    expect(screen.getByPlaceholderText('Search titles')).toBeInTheDocument();
    // Select trigger has role=combobox and renders the placeholder when empty.
    expect(screen.getByRole('combobox')).toHaveTextContent('All statuses');
  });

  it('commits text-filter changes to onChange after the debounce window', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(
      <ControlledFilterBar
        initial={{ title: '' }}
        filters={[{ type: 'text', key: 'title', debounceMs: 50, placeholder: 'Search' }]}
        onChangeSpy={spy}
      />,
    );

    const input = screen.getByPlaceholderText('Search');
    await user.type(input, 'hello');
    // Wait for the debounce (50ms) to fire.
    await waitFor(
      () => {
        expect(spy).toHaveBeenCalledWith({ title: 'hello' });
      },
      { timeout: 500 },
    );
  });

  it('commits select-filter changes immediately', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(
      <ControlledFilterBar
        initial={{ status: '' }}
        filters={[
          {
            type: 'select',
            key: 'status',
            placeholder: 'All',
            options: [
              { value: 'open', label: 'Open' },
              { value: 'closed', label: 'Closed' },
            ],
          },
        ]}
        onChangeSpy={spy}
      />,
    );

    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole('option', { name: 'Open' }));
    expect(spy).toHaveBeenCalledWith({ status: 'open' });
  });
});

// ---------------------------------------------------------------------------
// Children-composition mode
// ---------------------------------------------------------------------------

describe('Table.FilterBar — children-composition mode', () => {
  it('commits text subpart changes through shared values', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(
      <ControlledFilterBar
        initial={{ title: '', status: '' }}
        onChangeSpy={spy}
      >
        <Table.FilterBar.Text field="title" placeholder="Find" debounceMs={50} />
      </ControlledFilterBar>,
    );

    await user.type(screen.getByPlaceholderText('Find'), 'hi');
    await waitFor(
      () => {
        expect(spy).toHaveBeenCalledWith({ title: 'hi', status: '' });
      },
      { timeout: 500 },
    );
  });

  it('commits select subpart changes immediately and keeps other fields', async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(
      <ControlledFilterBar
        initial={{ title: 'seeded', status: '' }}
        onChangeSpy={spy}
      >
        <Table.FilterBar.Select
          field="status"
          placeholder="Any"
          options={[
            { value: 'active', label: 'Active' },
            { value: 'done', label: 'Done' },
          ]}
        />
      </ControlledFilterBar>,
    );

    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole('option', { name: 'Done' }));
    // The other field ('title') must remain in values — shared context.
    expect(spy).toHaveBeenLastCalledWith({ title: 'seeded', status: 'done' });
  });

  it('syncs subpart text local state when the external value changes', async () => {
    function Harness(): React.JSX.Element {
      const [values, setValues] = useState<Record<string, string>>({ title: 'a' });
      return (
        <>
          <button onClick={() => setValues({ title: 'cleared' })}>set</button>
          <Table.FilterBar values={values} onChange={setValues}>
            <Table.FilterBar.Text field="title" placeholder="x" />
          </Table.FilterBar>
        </>
      );
    }
    const user = userEvent.setup();
    render(<Harness />);
    const input = screen.getByPlaceholderText('x') as HTMLInputElement;
    expect(input.value).toBe('a');
    await user.click(screen.getByRole('button', { name: 'set' }));
    await waitFor(() => {
      expect((screen.getByPlaceholderText('x') as HTMLInputElement).value).toBe('cleared');
    });
  });
});
