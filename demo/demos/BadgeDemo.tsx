import { Badge, Stack } from '../../src';
import type { BadgeVariant } from '../../src';

const variants: BadgeVariant[] = ['default', 'success', 'warning', 'error', 'info'];

export function BadgeDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Variants</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Badge key={v} variant={v}>{v}</Badge>
          ))}
        </Stack>
      </Stack>

    </Stack>
  );
}
