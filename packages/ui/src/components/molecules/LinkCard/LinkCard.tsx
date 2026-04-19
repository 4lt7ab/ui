import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Card } from '../Card';

/** Clickable card with a serif title and muted description. */
export interface LinkCardProps {
  /** Card title — rendered in serif. */
  title: ReactNode;
  /** Optional description — rendered smaller in muted text. */
  description?: ReactNode;
  /** Whether link opens in a new tab (sets `target="_blank"` and `rel="noopener noreferrer"`). */
  external?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  id?: string;
  'aria-label'?: string;
  'data-testid'?: string;
}

const STYLES_ID = 'alttab-link-card';

/*
 * LinkCard composes <Card asChild variant="ghost"> onto an <a>, then adds:
 *  - a stylesheet-owned border (thick, theme-bordered) that the hover rule
 *    can accent — Card's `ghost` variant emits a transparent background
 *    with no border/shadow so the stylesheet owns the border end-to-end,
 *  - a hover treatment that tints the border with the theme's link color
 *    (Card's built-in `hover` lifts but doesn't accent-border),
 *  - the serif-title / muted-description layout below,
 *  - link-specific resets (text-decoration:none, color:inherit) so Card's
 *    content styling doesn't bleed through an underlined anchor.
 *
 * The `ghost` variant restores pre-v0.4 LinkCard parity in themes where
 * `colorSurface` is transparent (black-hole, neural, pacman, pipboy,
 * synthwave) and preserves the hover accent-border behavior. Card's
 * `default` variant applies an inline `border` shorthand which would
 * beat the `:hover { border-color }` rule on specificity.
 */
const linkCardCSS = /* css */ `
  .alttab-link-card {
    display: block;
    border: ${t.borderWidthThick} solid ${t.colorBorder};
    text-decoration: none;
    color: inherit;
    transition: border-color ${t.transitionBase}, transform ${t.transitionBase};
  }

  .alttab-link-card:hover {
    border-color: ${t.colorTextLink};
    transform: translateY(-2px);
  }

  .alttab-link-card__title {
    display: block;
    font-family: ${t.fontSerif};
    font-size: 1.125rem;
    font-weight: 600;
    color: ${t.colorText};
    margin-bottom: 0.25rem;
  }

  .alttab-link-card__desc {
    display: block;
    font-size: 0.875rem;
    color: ${t.colorTextMuted};
  }
`;

/**
 * Clickable card with serif title and muted description. Hover lifts and
 * accent-borders. Good for project links, post previews, etc.
 *
 * Implemented as a thin `<Card asChild variant="ghost">` over an anchor —
 * Card owns the radius and padding; LinkCard's stylesheet owns the border
 * (so `:hover { border-color }` can accent it), the serif/title layout,
 * and the link-specific resets.
 */
export const LinkCard: React.ForwardRefExoticComponent<
  Omit<LinkCardProps, 'ref'> & React.RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, LinkCardProps>(function LinkCard(
  {
    title,
    description,
    external,
    href,
    target,
    rel,
    onClick,
    id,
    'aria-label': ariaLabel,
    'data-testid': dataTestId,
  },
  ref,
): React.JSX.Element {
  useInjectStyles(STYLES_ID, linkCardCSS);

  return (
    <Card asChild variant="ghost">
      <a
        ref={ref}
        className="alttab-link-card"
        href={href}
        target={external ? '_blank' : target}
        rel={external ? 'noopener noreferrer' : rel}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestId}
      >
        <span className="alttab-link-card__title">{title}</span>
        {description && <span className="alttab-link-card__desc">{description}</span>}
      </a>
    </Card>
  );
});
