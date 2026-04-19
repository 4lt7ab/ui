import { useState } from 'react';
import { Field, Select, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Select showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// Exercises the compound API and the keyboard behaviors that the doc
// describes but can't demonstrate in prose:
//
//   - ArrowDown / ArrowUp open the menu and move focus
//   - Home / End jump to the first/last enabled item
//   - Typing a letter jumps to the next item starting with that letter
//     (typeahead — hit `E` twice to jump from Admin → Editor → Engineer)
//   - Escape closes and returns focus to the trigger
//   - Disabled items are skipped by keyboard nav
//
// The widget wraps the Select in a Field so the label wiring is visible
// and the value prints live so you can confirm onValueChange fired.

export function SelectShowcase(): React.JSX.Element {
  const [role, setRole] = useState<string>('');

  return (
    <div style={{ maxWidth: '20rem' }}>
      <Stack gap="md">
        <Field label="Role" help="Arrow keys open the menu. Type to jump.">
          <Select.Root value={role} onValueChange={setRole} name="role">
            <Select.Trigger aria-label="Role">
              <Select.Value placeholder="Pick one…" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="admin">Admin</Select.Item>
              <Select.Item value="editor">Editor</Select.Item>
              <Select.Item value="engineer">Engineer</Select.Item>
              <Select.Item value="viewer" disabled>
                Viewer (seat limit reached)
              </Select.Item>
              <Select.Item value="guest">Guest</Select.Item>
            </Select.Content>
          </Select.Root>
        </Field>

        <div style={statusStyle}>
          <strong style={{ color: t.colorTextMuted }}>Current value: </strong>
          <code>{role || '(none)'}</code>
        </div>
      </Stack>
    </div>
  );
}

const statusStyle: React.CSSProperties = {
  fontSize: t.fontSizeSm,
  color: t.colorText,
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  padding: t.spaceSm,
};
