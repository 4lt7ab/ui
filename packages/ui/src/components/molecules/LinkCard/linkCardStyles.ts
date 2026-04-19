import { semantic as t } from '@4lt7ab/core';

/**
 * Shared stylesheet for LinkCard-style flat cards with a hover border accent.
 *
 * Both `<LinkCard>` (anchor) and `<ThemePicker>`'s grid variant (button)
 * consume this module so the two components stay visually in lockstep —
 * one place owns the border, hover accent, serif title, and muted
 * description. Anything that calls `useInjectStyles(LINK_CARD_STYLES_ID,
 * linkCardCSS)` gets the same look.
 *
 * Used with `<Card asChild variant="ghost">` — ghost emits no inline
 * border/shadow so this stylesheet's border stays ownable by `:hover`
 * and `[aria-current="true"]` rules (an inline shorthand from Card's
 * default variant would beat them on specificity).
 *
 * Not a public export — only LinkCard and ThemePicker consume it.
 */

export const LINK_CARD_STYLES_ID = 'alttab-link-card';

export const LINK_CARD_CLASS = 'alttab-link-card';
export const LINK_CARD_TITLE_CLASS = 'alttab-link-card__title';
export const LINK_CARD_DESC_CLASS = 'alttab-link-card__desc';

export const linkCardCSS = /* css */ `
  .${LINK_CARD_CLASS} {
    display: block;
    width: 100%;
    border: ${t.borderWidthThick} solid ${t.colorBorder};
    text-align: left;
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
    transition: border-color ${t.transitionBase}, transform ${t.transitionBase};
  }

  .${LINK_CARD_CLASS}:hover {
    border-color: ${t.colorTextLink};
    transform: translateY(-2px);
  }

  /* Selected / current state — consumers set aria-current="true" or
     aria-pressed="true" on the rendered element to pin the accent border
     in place. ThemePicker's grid uses aria-current for the active theme. */
  .${LINK_CARD_CLASS}[aria-current="true"],
  .${LINK_CARD_CLASS}[aria-pressed="true"] {
    border-color: ${t.colorTextLink};
  }

  .${LINK_CARD_TITLE_CLASS} {
    display: block;
    font-family: ${t.fontSerif};
    font-size: 1.125rem;
    font-weight: 600;
    color: ${t.colorText};
    margin-bottom: 0.25rem;
  }

  .${LINK_CARD_DESC_CLASS} {
    display: block;
    font-size: 0.875rem;
    color: ${t.colorTextMuted};
  }
`;
