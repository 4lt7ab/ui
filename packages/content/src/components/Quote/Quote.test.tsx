import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { Quote } from './Quote';

vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
  useInjectStyles: vi.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('Quote', () => {
  it('defaults to variant="pull" — renders <blockquote data-pull-quote>', () => {
    const { container } = render(<Quote>hello</Quote>);
    const bq = container.querySelector('blockquote');
    expect(bq).not.toBeNull();
    expect(bq?.hasAttribute('data-pull-quote')).toBe(true);
    expect(bq?.getAttribute('class') ?? '').not.toContain('alttab-epigraph');
  });

  it('renders the pull variant explicitly with data-pull-quote', () => {
    const { container } = render(<Quote variant="pull">hello</Quote>);
    const bq = container.querySelector('blockquote');
    expect(bq?.hasAttribute('data-pull-quote')).toBe(true);
  });

  it('renders the epigraph variant with the alttab-epigraph class', () => {
    const { container } = render(<Quote variant="epigraph">hello</Quote>);
    const bq = container.querySelector('blockquote');
    expect(bq).not.toBeNull();
    expect(bq?.classList.contains('alttab-epigraph')).toBe(true);
    expect(bq?.hasAttribute('data-pull-quote')).toBe(false);
  });

  it('wraps children in a <p>', () => {
    const { container } = render(<Quote>quote body</Quote>);
    const p = container.querySelector('blockquote p');
    expect(p?.textContent).toBe('quote body');
  });

  it('renders cite as a <footer> on the pull variant', () => {
    const { container } = render(
      <Quote variant="pull" cite="Author">
        body
      </Quote>
    );
    const footer = container.querySelector('blockquote footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toBe('Author');
  });

  it('renders cite as a <footer> on the epigraph variant', () => {
    const { container } = render(
      <Quote variant="epigraph" cite="Dieter Rams">
        Less, but better.
      </Quote>
    );
    const footer = container.querySelector('blockquote footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toBe('Dieter Rams');
  });

  it('omits <footer> when cite is not provided', () => {
    const { container } = render(<Quote>body</Quote>);
    expect(container.querySelector('blockquote footer')).toBeNull();
  });

  it('forwards refs to the underlying <blockquote> (pull)', () => {
    const ref = { current: null as HTMLQuoteElement | null };
    render(<Quote ref={ref}>hello</Quote>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BLOCKQUOTE');
  });

  it('forwards refs to the underlying <blockquote> (epigraph)', () => {
    const ref = { current: null as HTMLQuoteElement | null };
    render(
      <Quote ref={ref} variant="epigraph">
        hello
      </Quote>
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BLOCKQUOTE');
  });
});
