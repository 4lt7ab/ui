import { describe, it, expect, vi } from 'vitest';
import { createRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LinkCard } from './LinkCard';

describe('LinkCard', () => {
  it('renders a single <a> with title and description', () => {
    const { container } = render(
      <LinkCard href="/x" title="Title text" description="Desc text" />,
    );
    // The <Card asChild> composition means LinkCard renders exactly one <a> —
    // no wrapping <div>.
    expect(container.querySelector('div')).toBeNull();
    const anchors = container.querySelectorAll('a');
    expect(anchors.length).toBe(1);

    const a = anchors[0];
    expect(a.getAttribute('href')).toBe('/x');
    expect(a.className).toContain('alttab-link-card');
    expect(a.textContent).toContain('Title text');
    expect(a.textContent).toContain('Desc text');
  });

  it('omits the description span when description is undefined', () => {
    const { container } = render(<LinkCard href="/x" title="T" />);
    expect(container.querySelector('.alttab-link-card__desc')).toBeNull();
    expect(container.querySelector('.alttab-link-card__title')).not.toBeNull();
  });

  it('sets target=_blank and rel=noopener noreferrer when external', () => {
    const { container } = render(
      <LinkCard href="https://example.com" title="T" external />,
    );
    const a = container.querySelector('a')!;
    expect(a.getAttribute('target')).toBe('_blank');
    expect(a.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('honors custom target / rel when external is not set', () => {
    const { container } = render(
      <LinkCard href="/x" title="T" target="_self" rel="nofollow" />,
    );
    const a = container.querySelector('a')!;
    expect(a.getAttribute('target')).toBe('_self');
    expect(a.getAttribute('rel')).toBe('nofollow');
  });

  it('forwards onClick to the anchor', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
    const { container } = render(
      <LinkCard href="#" title="T" onClick={onClick} />,
    );
    await user.click(container.querySelector('a')!);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('forwards refs to the underlying <a>', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { container } = render(<LinkCard ref={ref} href="/x" title="T" />);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(container.querySelector('a'));
  });

  it('inherits Card padding/radius via the asChild ghost variant', () => {
    const { container } = render(<LinkCard href="/x" title="T" />);
    const a = container.querySelector('a')!;
    // Card's ghost variant still contributes padding + radius via Surface; the
    // merged style lands on <a>. Token values resolve to `var(--...)` strings
    // under the vitest alias pointing at @4lt7ab/core source.
    expect(a.style.borderRadius).not.toBe('');
    expect(a.style.padding).not.toBe('');
  });

  it('uses the transparent colorSurface background (ghost variant parity)', () => {
    // Pre-v0.4 LinkCard used `background: var(--color-surface)` — transparent
    // in black-hole, neural, pacman, pipboy, synthwave. The ghost variant
    // restores this (vs. Card default's `colorSurfaceSolid`, which regressed
    // those themes in a7adcd9).
    const { container } = render(<LinkCard href="/x" title="T" />);
    const a = container.querySelector('a')!;
    expect(a.style.background).toBe('var(--color-surface)');
  });

  it('emits no inline border or box-shadow (border owned by stylesheet)', () => {
    // The ghost variant omits Surface's border/shadow so the injected
    // stylesheet owns the border end-to-end — this keeps the hover
    // `border-color` accent working (inline shorthand would otherwise beat
    // the `:hover` rule on specificity).
    const { container } = render(<LinkCard href="/x" title="T" />);
    const a = container.querySelector('a')!;
    expect(a.style.border).toBe('');
    expect(a.style.boxShadow).toBe('');
  });

  it('passes id, aria-label, and data-testid through', () => {
    const { container } = render(
      <LinkCard
        href="/x"
        title="T"
        id="my-card"
        aria-label="Open thing"
        data-testid="link-card"
      />,
    );
    const a = container.querySelector('a')!;
    expect(a.id).toBe('my-card');
    expect(a.getAttribute('aria-label')).toBe('Open thing');
    expect(a.getAttribute('data-testid')).toBe('link-card');
  });
});
