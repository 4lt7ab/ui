import { Badge, Stack } from '@4lt7ab/ui';
import type { BadgeVariant } from '@4lt7ab/ui';

const variants: BadgeVariant[] = ['default', 'success', 'warning', 'error', 'info'];

const customStatuses: { label: string; color: string }[] = [
  { label: 'Running', color: '#6366f1' },
  { label: 'Deployed', color: '#06b6d4' },
  { label: 'Queued', color: '#a855f7' },
  { label: 'Archived', color: '#78716c' },
];

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

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom Colors</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {customStatuses.map((s) => (
            <Badge key={s.label} color={s.color}>{s.label}</Badge>
          ))}
        </Stack>
      </Stack>

    </Stack>
  );
}
