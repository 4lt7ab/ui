import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties } from 'react';

/**
 * Pill-shaped toggle-button visual — full-radius border, rhythm padding,
 * and sans-serif sentence-case label. Used by `ChipPicker` and any other
 * pill-toggle UI that needs a selectable pill button.
 *
 * Differs from `Badge`: Badge is uppercase + semibold + xs metadata type;
 * the pill-toggle is sentence-case + medium + sm interactive type because
 * it reads as a button label, not a status tag. They share the pill shape
 * and rhythm padding but not the typographic voice.
 *
 * Apply to a `<button type="button" aria-pressed={isSelected}>` element
 * and spread the variant cluster (`pillToggleSelectedStyle` or
 * `pillToggleUnselectedStyle`) on top to paint the selected / unselected
 * state.
 *
 * Consumers that want hover / focus-visible affordances inject their own
 * rules via `useInjectStyles` scoped to a container — see `ChipPicker` for
 * the reference pattern.
 */
export const pillToggleBaseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${t.spaceXs} ${t.spaceSm}`,
  fontSize: t.fontSizeSm,
  fontFamily: t.fontSans,
  fontWeight: t.fontWeightMedium,
  lineHeight: t.lineHeightTight,
  borderRadius: t.radiusFull,
  cursor: 'pointer',
  transition: `background ${t.transitionFast}, border-color ${t.transitionFast}, color ${t.transitionFast}`,
  outline: 'none',
};

/** Selected-state variant — tinted background + primary-action border. */
export const pillToggleSelectedStyle: CSSProperties = {
  color: t.colorActionPrimary,
  background: t.colorActionSecondary,
  border: `${t.borderWidthDefault} solid ${t.colorActionPrimary}`,
};

/** Unselected-state variant — transparent background + neutral border. */
export const pillToggleUnselectedStyle: CSSProperties = {
  color: t.colorText,
  background: 'transparent',
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
};
