import { useState } from 'react';
import { ChipPicker, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// ChipPicker showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// Exercises the multi-select toggle pattern with grouped chips:
//
//   - Controlled via `selected` / `onChange` so the selection renders
//     live in the status panel below.
//   - Two groups (`Type` and `Priority`) so the uppercase section
//     heading + per-group wrapping is visible.
//   - The onChange callback always receives the full next array, so
//     toggling a chip is an add-or-remove operation on the consumer
//     side — the status line reflects that.

const ITEMS = [
  { value: 'bug', label: 'Bug', group: 'Type' },
  { value: 'feat', label: 'Feature', group: 'Type' },
  { value: 'chore', label: 'Chore', group: 'Type' },
  { value: 'docs', label: 'Docs', group: 'Type' },
  { value: 'p0', label: 'P0 — urgent', group: 'Priority' },
  { value: 'p1', label: 'P1 — high', group: 'Priority' },
  { value: 'p2', label: 'P2 — normal', group: 'Priority' },
];

export function ChipPickerShowcase(): React.JSX.Element {
  const [selected, setSelected] = useState<string[]>(['feat', 'p1']);

  return (
    <div style={{ maxWidth: '32rem' }}>
      <Stack gap="md">
        <ChipPicker
          aria-label="Filter tags"
          items={ITEMS}
          selected={selected}
          onChange={setSelected}
        />

        <div style={statusStyle}>
          <div>
            <strong style={{ color: t.colorTextMuted }}>Selected ({selected.length}): </strong>
            <code>
              {selected.length > 0 ? `[${selected.map((v) => `'${v}'`).join(', ')}]` : '(none)'}
            </code>
          </div>
        </div>
      </Stack>
    </div>
  );
}

const statusStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: t.spaceXs,
  fontSize: t.fontSizeSm,
  color: t.colorText,
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  padding: t.spaceSm,
};
