import { Badge, Stack } from '@4lt7ab/ui';
import type { BadgeVariant } from '@4lt7ab/ui';

const variants: BadgeVariant[] = ['default', 'primary', 'success', 'warning', 'error', 'info'];

const xsLabels = ['low', 'medium', 'high', 'critical', 'p0'];

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

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>XS Size (default variant)</h3>
        <Stack direction="horizontal" gap="xs" wrap align="center">
          {xsLabels.map((label) => (
            <Badge key={label} size="xs">{label}</Badge>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>XS Size + Variants</h3>
        <Stack direction="horizontal" gap="xs" wrap align="center">
          {variants.map((v) => (
            <Badge key={v} variant={v} size="xs">{v}</Badge>
          ))}
        </Stack>
      </Stack>

    </Stack>
  );
}
