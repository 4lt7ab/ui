import { describe, expect, it, vi } from 'vitest';
import { createRef, useRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Slot, composeRefs, mergeProps } from './slot';

describe('composeRefs', () => {
  it('calls every function ref with the node', () => {
    const a = vi.fn();
    const b = vi.fn();
    const compose = composeRefs<HTMLDivElement>(a, b);
    const node = document.createElement('div');
    compose(node);
    expect(a).toHaveBeenCalledWith(node);
    expect(b).toHaveBeenCalledWith(node);
  });

  it('assigns to object refs', () => {
    const a = createRef<HTMLDivElement>();
    const b = createRef<HTMLDivElement>();
    const compose = composeRefs(a, b);
    const node = document.createElement('div');
    compose(node);
    expect(a.current).toBe(node);
    expect(b.current).toBe(node);
  });

  it('skips nullish refs', () => {
    const a = vi.fn();
    const compose = composeRefs<HTMLDivElement>(undefined, null, a);
    compose(document.createElement('div'));
    expect(a).toHaveBeenCalledTimes(1);
  });
});

describe('mergeProps', () => {
  it('chains event handlers (parent first, then child)', () => {
    const order: string[] = [];
    const parent = vi.fn(() => order.push('parent'));
    const child = vi.fn(() => order.push('child'));
    const merged = mergeProps({ onClick: parent }, { onClick: child });
    (merged.onClick as (e: unknown) => void)({} as unknown);
    expect(order).toEqual(['parent', 'child']);
    expect(parent).toHaveBeenCalled();
    expect(child).toHaveBeenCalled();
  });

  it('merges style objects with child winning on conflict', () => {
    const merged = mergeProps(
      { style: { color: 'red', padding: 4 } },
      { style: { color: 'blue' } },
    );
    expect(merged.style).toEqual({ color: 'blue', padding: 4 });
  });

  it('concatenates classNames', () => {
    const merged = mergeProps({ className: 'a b' }, { className: 'c' });
    expect(merged.className).toBe('a b c');
  });

  it('child wins on non-handler non-style non-className props', () => {
    const merged = mergeProps({ id: 'parent', type: 'button' }, { id: 'child', href: '/' });
    expect(merged.id).toBe('child');
    expect(merged.type).toBe('button');
    expect(merged.href).toBe('/');
  });
});

describe('<Slot>', () => {
  it('renders the child element with merged className', () => {
    const { container } = render(
      <Slot className="slot-class">
        <a href="/home" className="child-class">Home</a>
      </Slot>,
    );
    const a = container.querySelector('a');
    expect(a).not.toBeNull();
    expect(a?.tagName).toBe('A');
    expect(a?.className).toBe('slot-class child-class');
    expect(a?.getAttribute('href')).toBe('/home');
    expect(a?.textContent).toBe('Home');
  });

  it('chains onClick handlers from slot and child', async () => {
    const user = userEvent.setup();
    const order: string[] = [];
    const slotHandler = vi.fn(() => order.push('slot'));
    const childHandler = vi.fn(() => order.push('child'));
    const { container } = render(
      <Slot onClick={slotHandler}>
        <button type="button" onClick={childHandler}>click</button>
      </Slot>,
    );
    await user.click(container.querySelector('button')!);
    expect(order).toEqual(['slot', 'child']);
  });

  it('composes forwarded ref with the child ref', () => {
    const slotRef = createRef<HTMLElement>();
    const childRefHolder: { current: HTMLAnchorElement | null } = { current: null };

    function Harness(): React.JSX.Element {
      const childRef = useRef<HTMLAnchorElement | null>(null);
      // expose to the outer scope for the assertion
      childRefHolder.current = childRef.current;
      return (
        <Slot ref={slotRef}>
          <a
            ref={(node) => {
              childRef.current = node;
              childRefHolder.current = node;
            }}
            href="/x"
          >
            x
          </a>
        </Slot>
      );
    }

    const { container } = render(<Harness />);
    const link = container.querySelector('a');
    expect(slotRef.current).toBe(link);
    expect(childRefHolder.current).toBe(link);
  });

  it('merges style objects', () => {
    const { container } = render(
      <Slot style={{ color: 'red', padding: 4 }}>
        <a href="/" style={{ color: 'blue' }}>x</a>
      </Slot>,
    );
    const a = container.querySelector('a')!;
    // child style wins on conflict; parent-only keys survive
    expect(a.style.color).toBe('blue');
    expect(a.style.padding).toBe('4px');
  });
});
