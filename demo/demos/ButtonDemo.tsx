import { Button, Icon, Stack } from '@4lt7ab/ui';
import type { ButtonVariant, ButtonSize } from '@4lt7ab/ui';

const variants: ButtonVariant[] = ['primary', 'secondary', 'destructive', 'ghost'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export function ButtonDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Variants</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v}>{v}</Button>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Sizes</h3>
        <Stack direction="horizontal" gap="sm" wrap align="flex-end">
          {sizes.map((s) => (
            <Button key={s} size={s}>{s}</Button>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v} disabled>{v}</Button>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Loading</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v} loading>{v}</Button>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Icon Only</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Button key={v} variant={v} iconOnly aria-label={`${v} action`}>
              <Icon name="settings" size={18} />
            </Button>
          ))}
          <Button variant="primary" iconOnly loading aria-label="loading action" />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>All variants x sizes</h3>
        <Stack gap="md">
          {variants.map((v) => (
            <Stack key={v} direction="horizontal" gap="sm" wrap align="flex-end">
              {sizes.map((s) => (
                <Button key={`${v}-${s}`} variant={v} size={s}>
                  {v} {s}
                </Button>
              ))}
            </Stack>
          ))}
        </Stack>
      </Stack>

    </Stack>
  );
}
