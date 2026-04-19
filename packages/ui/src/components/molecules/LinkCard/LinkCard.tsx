import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { useInjectStyles } from '@4lt7ab/core';
import { Card } from '../Card';
import {
  LINK_CARD_CLASS,
  LINK_CARD_DESC_CLASS,
  LINK_CARD_STYLES_ID,
  LINK_CARD_TITLE_CLASS,
  linkCardCSS,
} from './linkCardStyles';

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
 *
 * The shared stylesheet lives in `./linkCardStyles` so `ThemePicker`'s
 * grid variant (button-based) can consume the same class names and
 * stay visually in lockstep without duplicating the CSS block.
 */

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
  useInjectStyles(LINK_CARD_STYLES_ID, linkCardCSS);

  return (
    <Card asChild variant="ghost">
      <a
        ref={ref}
        className={LINK_CARD_CLASS}
        href={href}
        target={external ? '_blank' : target}
        rel={external ? 'noopener noreferrer' : rel}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestId}
      >
        <span className={LINK_CARD_TITLE_CLASS}>{title}</span>
        {description && <span className={LINK_CARD_DESC_CLASS}>{description}</span>}
      </a>
    </Card>
  );
});
