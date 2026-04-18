import { semantic as t } from '@4lt7ab/core';

/**
 * Small pill-shaped tag visual — uppercase prefix + label, rounded,
 * raised background. Spread onto a `<span>` or `<div>` to apply the
 * retired `TagChip` component's visual contract.
 *
 * For the remove affordance, compose with `<IconButton icon="close" />`:
 *
 * ```tsx
 * <span style={tagChipStyle}>
 *   frontend
 *   <IconButton icon="close" onClick={...} aria-label="Remove frontend" size="sm" />
 * </span>
 * ```
 */
export const tagChipStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: t.spaceXs,
  fontSize: t.fontSizeXs,
  color: t.colorActionPrimary,
  background: t.colorSurfaceRaised,
  borderRadius: t.radiusFull,
  padding: `${t.spaceXs} ${t.spaceSm}`,
  fontFamily: t.fontSans,
};
