import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabStrip } from './TabStrip';

// Use the standard Proxy mock for @4lt7ab/core per CLAUDE.md testing
// conventions. Semantic tokens are CSS var references at runtime, so echoing
// `var(--mock-<prop>)` keeps inline styles string-valued and harmless.
vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
  useInjectStyles: vi.fn(),
}));

const sampleTabs = [
  { key: 'summary', label: 'Summary' },
  { key: 'context', label: 'Context' },
  { key: 'details', label: 'Details' },
];

describe('TabStrip keyboard wiring', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders one <button role="tab"> per tab', () => {
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={() => {}} />,
    );
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(3);
    expect(tabs[0]).toHaveTextContent('Summary');
    expect(tabs[1]).toHaveTextContent('Context');
    expect(tabs[2]).toHaveTextContent('Details');
  });

  it('marks only the active tab with aria-selected=true and tabIndex=0', () => {
    render(
      <TabStrip tabs={sampleTabs} activeKey="context" onChange={() => {}} />,
    );
    const [summary, context, details] = screen.getAllByRole('tab');

    expect(summary).toHaveAttribute('aria-selected', 'false');
    expect(context).toHaveAttribute('aria-selected', 'true');
    expect(details).toHaveAttribute('aria-selected', 'false');

    expect(summary.tabIndex).toBe(-1);
    expect(context.tabIndex).toBe(0);
    expect(details.tabIndex).toBe(-1);
  });

  it('falls back to the first tab for tabIndex=0 when activeKey does not match any tab', () => {
    render(
      <TabStrip tabs={sampleTabs} activeKey={null} onChange={() => {}} />,
    );
    const [summary, context, details] = screen.getAllByRole('tab');

    // No tab is aria-selected when activeKey is null.
    expect(summary).toHaveAttribute('aria-selected', 'false');
    expect(context).toHaveAttribute('aria-selected', 'false');
    expect(details).toHaveAttribute('aria-selected', 'false');

    // The hook puts tabIndex=0 on the first item when activeIndex is null.
    expect(summary.tabIndex).toBe(0);
    expect(context.tabIndex).toBe(-1);
    expect(details.tabIndex).toBe(-1);
  });

  it('ArrowRight moves focus to the next tab', async () => {
    const user = userEvent.setup();
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={() => {}} />,
    );
    const [summary, context] = screen.getAllByRole('tab');
    summary.focus();

    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(context);
  });

  it('ArrowLeft moves focus to the previous tab, wrapping from first to last', async () => {
    const user = userEvent.setup();
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={() => {}} />,
    );
    const [summary, , details] = screen.getAllByRole('tab');
    summary.focus();

    await user.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(details);
  });

  it('Home / End jump to the first / last tab', async () => {
    const user = userEvent.setup();
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={() => {}} />,
    );
    const [summary, , details] = screen.getAllByRole('tab');

    summary.focus();
    await user.keyboard('{End}');
    expect(document.activeElement).toBe(details);

    await user.keyboard('{Home}');
    expect(document.activeElement).toBe(summary);
  });

  it('Enter / Space activate a focused tab via the default button click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={onChange} />,
    );
    const [, context] = screen.getAllByRole('tab');
    context.focus();

    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('context');

    onChange.mockClear();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledWith('context');
  });

  it('clicking a tab invokes onChange with that tab key', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={onChange} />,
    );

    await user.click(screen.getByRole('tab', { name: 'Context' }));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('context');
  });

  it('clicking the active tab fires onChange(activeKey) by default (no deselect)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TabStrip tabs={sampleTabs} activeKey="summary" onChange={onChange} />,
    );

    await user.click(screen.getByRole('tab', { name: 'Summary' }));
    expect(onChange).toHaveBeenCalledWith('summary');
  });

  it('allowDeselect: clicking the active tab fires onChange(null)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TabStrip
        tabs={sampleTabs}
        activeKey="summary"
        onChange={onChange}
        allowDeselect
      />,
    );

    await user.click(screen.getByRole('tab', { name: 'Summary' }));
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('allowDeselect: clicking a non-active tab still fires onChange(key)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TabStrip
        tabs={sampleTabs}
        activeKey="summary"
        onChange={onChange}
        allowDeselect
      />,
    );

    await user.click(screen.getByRole('tab', { name: 'Details' }));
    expect(onChange).toHaveBeenCalledWith('details');
  });
});
