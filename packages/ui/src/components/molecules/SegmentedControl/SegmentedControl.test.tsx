import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SegmentedControl } from './SegmentedControl';

// Standard Proxy mock for @4lt7ab/core — semantic tokens collapse to
// `var(--mock-<prop>)` strings that inline styles accept without complaint.
vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
  useInjectStyles: vi.fn(),
}));

// jsdom doesn't implement ResizeObserver; SegmentedControl subscribes to one
// inside a useLayoutEffect to reposition its sliding indicator. A no-op stub
// keeps the component from throwing during render.
class ResizeObserverStub {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}
globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver;

const sampleSegments = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

describe('SegmentedControl keyboard wiring', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders one <button> per segment with aria-pressed on the active one', () => {
    render(<SegmentedControl segments={sampleSegments} value="week" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);

    expect(buttons[0]).toHaveAttribute('aria-pressed', 'false');
    expect(buttons[1]).toHaveAttribute('aria-pressed', 'true');
    expect(buttons[2]).toHaveAttribute('aria-pressed', 'false');
  });

  it('roving tabindex: only the active segment gets tabIndex=0', () => {
    render(<SegmentedControl segments={sampleSegments} value="month" />);
    const [day, week, month] = screen.getAllByRole('button');

    expect(day.tabIndex).toBe(-1);
    expect(week.tabIndex).toBe(-1);
    expect(month.tabIndex).toBe(0);
  });

  it('falls back to the first segment for tabIndex=0 when value does not match any segment', () => {
    render(<SegmentedControl segments={sampleSegments} value="unknown" />);
    const [day, week, month] = screen.getAllByRole('button');

    // No segment matches — useRovingFocus receives activeIndex=null and so
    // assigns tabIndex=0 to the first item.
    expect(day.tabIndex).toBe(0);
    expect(week.tabIndex).toBe(-1);
    expect(month.tabIndex).toBe(-1);

    // And none are aria-pressed.
    expect(day).toHaveAttribute('aria-pressed', 'false');
    expect(week).toHaveAttribute('aria-pressed', 'false');
    expect(month).toHaveAttribute('aria-pressed', 'false');
  });

  it('ArrowRight moves focus to the next segment', async () => {
    const user = userEvent.setup();
    render(<SegmentedControl segments={sampleSegments} value="day" />);
    const [day, week] = screen.getAllByRole('button');
    day.focus();

    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(week);
  });

  it('ArrowLeft wraps from the first segment to the last', async () => {
    const user = userEvent.setup();
    render(<SegmentedControl segments={sampleSegments} value="day" />);
    const [day, , month] = screen.getAllByRole('button');
    day.focus();

    await user.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(month);
  });

  it('Home / End jump to first / last segment', async () => {
    const user = userEvent.setup();
    render(<SegmentedControl segments={sampleSegments} value="day" />);
    const [day, , month] = screen.getAllByRole('button');
    day.focus();

    await user.keyboard('{End}');
    expect(document.activeElement).toBe(month);

    await user.keyboard('{Home}');
    expect(document.activeElement).toBe(day);
  });

  it('controlled mode: click fires onChange but does not mutate the rendered value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedControl
        segments={sampleSegments}
        value="day"
        onChange={onChange}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Week' }));
    expect(onChange).toHaveBeenCalledWith('week');

    // `value` prop stayed at "day" — aria-pressed reflects the prop, not the click.
    const [day, week] = screen.getAllByRole('button');
    expect(day).toHaveAttribute('aria-pressed', 'true');
    expect(week).toHaveAttribute('aria-pressed', 'false');
  });

  it('uncontrolled mode: defaultValue sets initial aria-pressed and click updates it', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedControl
        segments={sampleSegments}
        defaultValue="week"
        onChange={onChange}
      />,
    );

    let [day, week, month] = screen.getAllByRole('button');
    expect(week).toHaveAttribute('aria-pressed', 'true');
    expect(day).toHaveAttribute('aria-pressed', 'false');
    expect(month).toHaveAttribute('aria-pressed', 'false');

    await user.click(month);
    expect(onChange).toHaveBeenCalledWith('month');

    // aria-pressed follows internal state in uncontrolled mode.
    [day, week, month] = screen.getAllByRole('button');
    expect(month).toHaveAttribute('aria-pressed', 'true');
    expect(week).toHaveAttribute('aria-pressed', 'false');
    expect(day).toHaveAttribute('aria-pressed', 'false');
  });

  it('uncontrolled mode: defaults to the first segment when no defaultValue is given', () => {
    render(<SegmentedControl segments={sampleSegments} />);
    const [day, week, month] = screen.getAllByRole('button');
    expect(day).toHaveAttribute('aria-pressed', 'true');
    expect(week).toHaveAttribute('aria-pressed', 'false');
    expect(month).toHaveAttribute('aria-pressed', 'false');
  });

  it('Enter activates the focused segment (default button behavior)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedControl
        segments={sampleSegments}
        defaultValue="day"
        onChange={onChange}
      />,
    );

    const [, week] = screen.getAllByRole('button');
    week.focus();
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('week');
  });

  it('Space activates the focused segment (default button behavior)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SegmentedControl
        segments={sampleSegments}
        defaultValue="day"
        onChange={onChange}
      />,
    );

    const [, , month] = screen.getAllByRole('button');
    month.focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledWith('month');
  });

  it('group exposes aria-label when provided', () => {
    render(
      <SegmentedControl
        segments={sampleSegments}
        value="day"
        aria-label="Time range"
      />,
    );
    expect(screen.getByRole('group', { name: 'Time range' })).toBeInTheDocument();
  });
});
