import { Button, Icon, Stack } from '@4lt7ab/ui';
import type { ButtonVariant, ButtonSize } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const variants: ButtonVariant[] = ['primary', 'secondary', 'destructive', 'ghost'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

const props: PropMeta[] = [
  { name: 'variant', type: "'primary' | 'secondary' | 'destructive' | 'ghost'", default: "'primary'", description: 'Visual style — controls background, text color, and border.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls padding and font size.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner and disables interaction.' },
  { name: 'iconOnly', type: 'boolean', default: 'false', description: 'Renders as a square icon-only button with equal padding.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button and applies muted styling.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Button content — text, icons, or both.' },
  { name: 'onClick', type: 'MouseEventHandler', description: 'Called when the button is clicked.' },
  { name: 'type', type: "'button' | 'submit' | 'reset'", description: 'HTML button type for form behavior.' },
  { name: 'form', type: 'string', description: 'Associates the button with a form by ID.' },
  { name: 'autoFocus', type: 'boolean', description: 'Automatically focus the button on mount.' },
];

export function ButtonDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Controls the visual style. Primary for main actions, secondary for supporting, destructive for danger, ghost for minimal emphasis.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v}>{v}</Button>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="size" description="Controls padding and font size. Buttons in the same row should use the same size.">
        <Stack direction="horizontal" gap="sm" wrap align="end">
          {sizes.map((s) => (
            <Button key={s} size={s}>{s}</Button>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the button and applies muted styling. Works with all variants.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v} disabled>{v}</Button>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="loading" description="Shows a spinner animation and disables interaction. The button width stays stable.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v} loading>{v}</Button>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="iconOnly" description="Renders as a square button with equal padding. Pair with aria-label for accessibility.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v} iconOnly aria-label={`${v} action`}>
              <Icon name="settings" size="md" />
            </Button>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="variant + size" description="All variant and size combinations.">
        <Stack gap="md">
          {variants.map((v) => (
            <Stack key={v} direction="horizontal" gap="sm" wrap align="end">
              {sizes.map((s) => (
                <Button key={`${v}-${s}`} variant={v} size={s}>
                  {v} {s}
                </Button>
              ))}
            </Stack>
          ))}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
