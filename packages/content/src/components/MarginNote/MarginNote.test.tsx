import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MarginNote } from './MarginNote';

vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
  useInjectStyles: vi.fn(),
}));

describe('MarginNote', () => {
  it('renders a <small> with children', () => {
    const { container } = render(<MarginNote>note body</MarginNote>);
    const small = container.querySelector('small');
    expect(small).not.toBeNull();
    expect(small?.textContent).toBe('note body');
  });

  it('carries the data-margin-note attribute so Prose CSS can target it', () => {
    const { container } = render(<MarginNote>hello</MarginNote>);
    const small = container.querySelector('small');
    expect(small?.hasAttribute('data-margin-note')).toBe(true);
  });

  it('defaults to side="left"', () => {
    const { container } = render(<MarginNote>hello</MarginNote>);
    const small = container.querySelector('small');
    expect(small?.getAttribute('data-side')).toBe('left');
  });

  it('sets data-side="left" when side="left" is passed explicitly', () => {
    const { container } = render(<MarginNote side="left">hello</MarginNote>);
    const small = container.querySelector('small');
    expect(small?.getAttribute('data-side')).toBe('left');
  });

  it('sets data-side="right" when side="right" is passed', () => {
    const { container } = render(<MarginNote side="right">hello</MarginNote>);
    const small = container.querySelector('small');
    expect(small?.getAttribute('data-side')).toBe('right');
  });

  it('forwards refs to the underlying <small>', () => {
    const ref = { current: null as HTMLElement | null };
    render(<MarginNote ref={ref}>hello</MarginNote>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('SMALL');
  });
});
