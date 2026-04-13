import { ThemePicker, Stack } from '@4lt7ab/ui';

const descriptions: Record<string, string> = {
  synthwave: 'Neon gradients and glow effects. The bold choice.',
  slate: 'Cool gray, steel blue. Quiet and composed.',
  'warm-sand': 'Earthy tones, quiet serif headings, nothing to prove.',
  moss: 'Forest greens, soft edges. Breathe in.',
  coral: 'Soft peach, warm coral. Sunrise energy without the alarm.',
  pipboy: 'Green phosphor on black. War never changes.',
  neural: 'Cool gradients, quiet nodes. The machine is thinking.',
  pacman: 'Waka waka waka. An arcade classic plays behind your reading.',
};

export function ThemePickerDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Compact</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Dropdown variant for toolbars and headers.
        </p>
        <div>
          <ThemePicker variant="compact" />
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Grid</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Card grid for settings pages and theme playgrounds.
        </p>
        <ThemePicker variant="grid" descriptions={descriptions} />
      </Stack>
    </Stack>
  );
}
