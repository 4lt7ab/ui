import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyPage } from './index';

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

// Icon registry is read by <EmptyPage.Tip icon="…">; mock the Icon atom so
// we don't pull the real SVG bundle into every test. It renders a recognisable
// marker we can assert on.
vi.mock('../../atoms/Icon', () => ({
  Icon: ({ name }: { name: string }) => (
    <span data-testid={`icon-${name}`}>[{name}]</span>
  ),
}));

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('EmptyPage — slot composition', () => {
  it('renders Root with every compound slot wired up', () => {
    render(
      <EmptyPage.Root aria-label="Zero state">
        <EmptyPage.Icon>
          <svg data-testid="hero-icon" />
        </EmptyPage.Icon>
        <EmptyPage.Title>No projects yet</EmptyPage.Title>
        <EmptyPage.Description>Create one to begin.</EmptyPage.Description>
        <EmptyPage.Actions>
          <button type="button">Create</button>
          <button type="button">Import</button>
        </EmptyPage.Actions>
        <EmptyPage.Tips>
          <EmptyPage.Tip icon="info">Start from a template</EmptyPage.Tip>
          <EmptyPage.Tip>Import from CSV</EmptyPage.Tip>
          <EmptyPage.Tip asChild>
            <a href="/docs">Read the docs</a>
          </EmptyPage.Tip>
        </EmptyPage.Tips>
      </EmptyPage.Root>,
    );

    // Root uses aria-label (provided) and is a <section> landmark.
    const section = screen.getByRole('region', { name: 'Zero state' });
    expect(section.tagName).toBe('SECTION');

    // Title, description, actions present.
    expect(screen.getByText('No projects yet')).toBeDefined();
    expect(screen.getByText('Create one to begin.')).toBeDefined();
    expect(screen.getByText('Create')).toBeDefined();
    expect(screen.getByText('Import')).toBeDefined();

    // Tips renders a labelled list with three items.
    const list = screen.getByRole('list', { name: 'Getting started' });
    expect(list.tagName).toBe('UL');
    const items = list.querySelectorAll('li');
    expect(items.length).toBe(3);

    // The first Tip's icon renders via the Icon atom.
    expect(screen.getByTestId('icon-info')).toBeDefined();

    // The asChild Tip merges into the consumer's <a>, keeping it the li's child.
    const link = screen.getByRole('link', { name: 'Read the docs' });
    expect(link.tagName).toBe('A');
    expect(link.parentElement?.tagName).toBe('LI');
  });

  it('wires aria-labelledby to the Title when no aria-label is set', () => {
    const { container } = render(
      <EmptyPage.Root>
        <EmptyPage.Title>Inbox zero</EmptyPage.Title>
      </EmptyPage.Root>,
    );
    const section = container.querySelector('section') as HTMLElement;
    const labelledBy = section.getAttribute('aria-labelledby');
    expect(labelledBy).toBeTruthy();
    const title = document.getElementById(labelledBy as string);
    expect(title?.textContent).toBe('Inbox zero');
  });

  it('Tips renders null when it has zero Tip children', () => {
    const { container } = render(
      <EmptyPage.Root>
        <EmptyPage.Title>Nothing here</EmptyPage.Title>
        <EmptyPage.Tips>{[]}</EmptyPage.Tips>
      </EmptyPage.Root>,
    );
    // No <ul> should exist — Tips hides itself.
    expect(container.querySelector('ul')).toBeNull();
  });

  it('Tips renders null when all children are falsy', () => {
    const show = false;
    const { container } = render(
      <EmptyPage.Root>
        <EmptyPage.Title>t</EmptyPage.Title>
        <EmptyPage.Tips>
          {show && <EmptyPage.Tip>Hidden</EmptyPage.Tip>}
          {null}
        </EmptyPage.Tips>
      </EmptyPage.Root>,
    );
    expect(container.querySelector('ul')).toBeNull();
  });
});

describe('EmptyPage — heading level', () => {
  it('renders Title as <h1> when level="page" (default)', () => {
    render(
      <EmptyPage.Root>
        <EmptyPage.Title>Page title</EmptyPage.Title>
      </EmptyPage.Root>,
    );
    const heading = screen.getByRole('heading', { name: 'Page title' });
    expect(heading.tagName).toBe('H1');
  });

  it('renders Title as <h2> when level="section"', () => {
    render(
      <EmptyPage.Root level="section">
        <EmptyPage.Title>Section title</EmptyPage.Title>
      </EmptyPage.Root>,
    );
    const heading = screen.getByRole('heading', { name: 'Section title' });
    expect(heading.tagName).toBe('H2');
  });

  it('reflects level via data-level on Root', () => {
    const { container } = render(
      <EmptyPage.Root level="section">
        <EmptyPage.Title>t</EmptyPage.Title>
      </EmptyPage.Root>,
    );
    const section = container.querySelector('section') as HTMLElement;
    expect(section.getAttribute('data-level')).toBe('section');
  });
});

describe('EmptyPage — orphan-check', () => {
  // Every sub-part must throw when rendered outside Root. React logs the
  // thrown error via console.error; silence it so the test output stays clean.
  const parts: Array<[string, () => React.JSX.Element]> = [
    ['Icon', () => <EmptyPage.Icon><span /></EmptyPage.Icon>],
    ['Title', () => <EmptyPage.Title>t</EmptyPage.Title>],
    ['Description', () => <EmptyPage.Description>d</EmptyPage.Description>],
    ['Actions', () => <EmptyPage.Actions />],
    ['Tips', () => <EmptyPage.Tips><EmptyPage.Tip>x</EmptyPage.Tip></EmptyPage.Tips>],
    ['Tip', () => <EmptyPage.Tip>x</EmptyPage.Tip>],
  ];

  for (const [name, factory] of parts) {
    it(`throws when <EmptyPage.${name}> is rendered without Root`, () => {
      const err = console.error;
      console.error = vi.fn();
      expect(() => render(factory())).toThrow(
        new RegExp(`EmptyPage\\.${name}.*must be rendered inside <EmptyPage\\.Root>`),
      );
      console.error = err;
    });
  }
});
