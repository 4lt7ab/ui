import { describe, it, expect, vi } from 'vitest';
import { createRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card', () => {
  it('renders a <div> by default with children', () => {
    const { container } = render(<Card>body</Card>);
    const div = container.querySelector('div');
    expect(div).not.toBeNull();
    expect(div?.textContent).toBe('body');
  });

  it('sets data-card-hover when hover is true', () => {
    const { container } = render(<Card hover>body</Card>);
    const div = container.querySelector('div');
    expect(div?.hasAttribute('data-card-hover')).toBe(true);
  });

  it('sets data-card-glow when glow is true', () => {
    const { container } = render(<Card glow>body</Card>);
    const div = container.querySelector('div');
    expect(div?.hasAttribute('data-card-glow')).toBe(true);
  });

  it('forwards refs to the underlying <div>', () => {
    const ref = createRef<HTMLElement>();
    render(<Card ref={ref}>body</Card>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('DIV');
  });
});

describe('Card asChild', () => {
  it('renders the child element instead of a <div> when asChild is true', () => {
    const { container } = render(
      <Card asChild>
        <a href="/home">Home</a>
      </Card>,
    );
    // No wrapping div — the <a> is the only rendered element.
    expect(container.querySelector('div')).toBeNull();
    const a = container.querySelector('a');
    expect(a).not.toBeNull();
    expect(a?.getAttribute('href')).toBe('/home');
    expect(a?.textContent).toBe('Home');
  });

  it('merges Card style onto the child', () => {
    const { container } = render(
      <Card asChild padding="md">
        <a href="/">link</a>
      </Card>,
    );
    const a = container.querySelector('a')!;
    // Card writes borderRadius via inline style. jsdom exposes it on the style object.
    expect(a.style.borderRadius).not.toBe('');
    expect(a.style.padding).not.toBe('');
  });

  it('child style wins on conflict with Card style', () => {
    const { container } = render(
      <Card asChild padding="lg">
        <a href="/" style={{ padding: '99px', color: 'tomato' }}>link</a>
      </Card>,
    );
    const a = container.querySelector('a')!;
    // Child's explicit padding overrides Card's (mergeProps: child wins on style).
    expect(a.style.padding).toBe('99px');
    expect(a.style.color).toBe('tomato');
  });

  it('forwards the child onClick when asChild is true', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { container } = render(
      <Card asChild>
        <a href="#" onClick={onClick}>click</a>
      </Card>,
    );
    await user.click(container.querySelector('a')!);
    // Card has no onClick of its own; the child's handler fires unmolested
    // (Slot would chain if Card had one, per mergeProps semantics).
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('composes refs onto the child element', () => {
    const ref = createRef<HTMLElement>();
    const { container } = render(
      <Card asChild ref={ref}>
        <a href="/x">x</a>
      </Card>,
    );
    const a = container.querySelector('a');
    expect(ref.current).toBe(a);
  });

  it('carries data-card-hover / data-card-glow onto the child when enabled', () => {
    const { container } = render(
      <Card asChild hover glow>
        <a href="/">x</a>
      </Card>,
    );
    const a = container.querySelector('a')!;
    expect(a.hasAttribute('data-card-hover')).toBe(true);
    expect(a.hasAttribute('data-card-glow')).toBe(true);
  });
});
