import { semantic as t } from '@4lt7ab/core';

/**
 * Shared popover-panel style blocks used by every popover/dropdown surface
 * in the package: `Select.Content`, `Combobox.List`, `DatePicker` popover,
 * `DateRangePicker` popover.
 *
 * Consumed by spreading on the open-state style object:
 *
 * ```ts
 * style={{
 *   ...positionStyle,            // consumer-specific positioning
 *   ...popoverPanelMd,           // shared visual contract
 *   maxHeight: '16rem',          // consumer-specific deltas
 *   overflowY: 'auto',
 * }}
 * ```
 *
 * Two variants share the same visual contract (bg, border, shadow, box-sizing)
 * but differ on the size axis: radius, padding, and stacking context.
 *
 * - `popoverPanelMd` — dropdown-density surfaces with tight padding (`spaceXs`)
 *   and the sticky stacking context. Used by `Select.Content` and
 *   `Combobox.List`, which host lists of selectable rows.
 * - `popoverPanelLg` — calendar-density surfaces with comfortable padding
 *   (`spaceMd`) and the dropdown stacking context. Used by `DatePicker` and
 *   `DateRangePicker`, which host a grid of day cells.
 *
 * Positioning (position, top/left/right/bottom, marginTop/marginBottom) is
 * consumer-specific — each consumer computes it from props (drop direction,
 * trigger width) and layers it alongside the shared block.
 */
const popoverPanelBaseStyle: React.CSSProperties = {
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  boxShadow: t.shadowMd,
  boxSizing: 'border-box' as const,
};

/**
 * Popover panel for dropdown-density surfaces: `Select.Content`, `Combobox.List`.
 * Tight padding, medium radius, sticky stacking context.
 */
export const popoverPanelMd: React.CSSProperties = {
  ...popoverPanelBaseStyle,
  borderRadius: t.radiusMd,
  padding: t.spaceXs,
  zIndex: t.zIndexSticky,
};

/**
 * Popover panel for calendar-density surfaces: `DatePicker`, `DateRangePicker`.
 * Comfortable padding, large radius, dropdown stacking context.
 */
export const popoverPanelLg: React.CSSProperties = {
  ...popoverPanelBaseStyle,
  borderRadius: t.radiusLg,
  padding: t.spaceMd,
  zIndex: t.zIndexDropdown,
};
