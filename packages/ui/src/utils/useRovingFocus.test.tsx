import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRovingFocus } from './useRovingFocus';

function Harness({
  items,
  activeIndex,
  orientation,
}: {
  items: string[];
  activeIndex: number | null;
  orientation?: 'horizontal' | 'vertical';
}): React.JSX.Element {
  const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
    count: items.length,
    activeIndex,
    orientation,
  });

  return (
    <div>
      {items.map((label, i) => (
        <button
          key={label}
          ref={itemRef(i)}
          tabIndex={getTabIndex(i)}
          onKeyDown={onKeyDown(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

describe('useRovingFocus', () => {
  it('ArrowRight moves focus to the next item', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={0} />);

    const one = screen.getByRole('button', { name: 'One' });
    one.focus();
    expect(document.activeElement).toBe(one);

    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Two' }),
    );

    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Three' }),
    );
  });

  it('ArrowRight wraps from last to first', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={2} />);

    const three = screen.getByRole('button', { name: 'Three' });
    three.focus();

    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'One' }),
    );
  });

  it('ArrowLeft moves focus to the previous item', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={1} />);

    const two = screen.getByRole('button', { name: 'Two' });
    two.focus();

    await user.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'One' }),
    );
  });

  it('ArrowLeft wraps from first to last', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={0} />);

    const one = screen.getByRole('button', { name: 'One' });
    one.focus();

    await user.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Three' }),
    );
  });

  it('Home jumps to the first item', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={2} />);

    const three = screen.getByRole('button', { name: 'Three' });
    three.focus();

    await user.keyboard('{Home}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'One' }),
    );
  });

  it('End jumps to the last item', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={0} />);

    const one = screen.getByRole('button', { name: 'One' });
    one.focus();

    await user.keyboard('{End}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Three' }),
    );
  });

  it('ignores unrelated keys', async () => {
    const user = userEvent.setup();
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={0} />);

    const one = screen.getByRole('button', { name: 'One' });
    one.focus();

    await user.keyboard('{Escape}');
    expect(document.activeElement).toBe(one);

    await user.keyboard('a');
    expect(document.activeElement).toBe(one);
  });

  it('only the active item has tabIndex=0 (roving tabindex)', () => {
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={1} />);

    expect(screen.getByRole('button', { name: 'One' }).tabIndex).toBe(-1);
    expect(screen.getByRole('button', { name: 'Two' }).tabIndex).toBe(0);
    expect(screen.getByRole('button', { name: 'Three' }).tabIndex).toBe(-1);
  });

  it('falls back to first item when activeIndex is null', () => {
    render(<Harness items={['One', 'Two', 'Three']} activeIndex={null} />);

    expect(screen.getByRole('button', { name: 'One' }).tabIndex).toBe(0);
    expect(screen.getByRole('button', { name: 'Two' }).tabIndex).toBe(-1);
    expect(screen.getByRole('button', { name: 'Three' }).tabIndex).toBe(-1);
  });

  it('vertical orientation binds ArrowUp / ArrowDown instead of Left / Right', async () => {
    const user = userEvent.setup();
    render(
      <Harness
        items={['One', 'Two', 'Three']}
        activeIndex={0}
        orientation="vertical"
      />,
    );

    const one = screen.getByRole('button', { name: 'One' });
    one.focus();

    // Horizontal arrows are ignored.
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(one);

    // Vertical arrows move focus.
    await user.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Two' }),
    );

    await user.keyboard('{ArrowUp}');
    expect(document.activeElement).toBe(one);
  });

  it('no-ops when count is 0', async () => {
    const user = userEvent.setup();
    render(<Harness items={[]} activeIndex={null} />);

    // Attach focus to body; arrow keys shouldn't throw.
    await user.keyboard('{ArrowRight}');
    await user.keyboard('{Home}');
    await user.keyboard('{End}');
    // No items exist; nothing to assert beyond "didn't throw".
    expect(document.body).toBeTruthy();
  });
});
