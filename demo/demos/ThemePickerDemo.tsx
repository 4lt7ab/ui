import { ThemePicker } from '@4lt7ab/ui';

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
  return <ThemePicker descriptions={descriptions} />;
}
