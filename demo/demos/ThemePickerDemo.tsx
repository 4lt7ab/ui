import { ThemePicker, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

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

const props: PropMeta[] = [
  { name: 'variant', type: "'grid' | 'compact'", default: "'grid'", description: 'Display variant. Grid renders a card grid; compact renders a dropdown for toolbars/headers.' },
  { name: 'descriptions', type: 'Record<string, string>', default: '{}', description: 'Optional descriptions for each theme, keyed by theme name. Only shown in grid variant.' },
];

export function ThemePickerDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Controls the display mode. Compact is a dropdown button ideal for toolbars and headers. Grid shows a full card layout for settings pages and theme playgrounds.">
        <Stack gap="lg">
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>compact</span>
            <div>
              <ThemePicker variant="compact" />
            </div>
          </Stack>
          <Stack gap="sm">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>grid</span>
            <ThemePicker variant="grid" />
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="descriptions" description="Adds descriptive text below each theme label in the grid variant. Pass a record keyed by theme name.">
        <ThemePicker variant="grid" descriptions={descriptions} />
      </PropDemo>
    </DocBlock>
  );
}
