import { semantic as t } from '@4lt7ab/core';

/**
 * Uppercase + letter-spacing style block for labeling content groups.
 *
 * Spread onto any element — `<span>`, `<div>`, `<h3>` — to apply the
 * retired `SectionLabel` component's visual contract.
 */
export const sectionLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: t.fontSizeXs,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorTextSecondary,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};
