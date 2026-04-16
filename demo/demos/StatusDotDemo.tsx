import { StatusDot, Stack, Badge } from '@4lt7ab/ui';
import type { StatusDotVariant, StatusDotSize } from '@4lt7ab/ui';

const variants: StatusDotVariant[] = ['default', 'primary', 'success', 'warning', 'error', 'info'];
const sizes: { token: StatusDotSize; label: string }[] = [
  { token: 'sm', label: '6px' },
  { token: 'md', label: '8px' },
  { token: 'lg', label: '12px' },
];

export function StatusDotDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Variants</h3>
        <Stack direction="horizontal" gap="md" wrap align="center">
          {variants.map((v) => (
            <Stack key={v} direction="horizontal" gap="xs" align="center">
              <StatusDot variant={v} aria-label={v} />
              <span style={{ fontSize: '0.85rem' }}>{v}</span>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Sizes</h3>
        <Stack direction="horizontal" gap="md" wrap align="center">
          {sizes.map(({ token, label }) => (
            <Stack key={token} direction="horizontal" gap="xs" align="center">
              <StatusDot variant="success" size={token} />
              <span style={{ fontSize: '0.85rem' }}>{label}</span>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Pulse Animation</h3>
        <Stack direction="horizontal" gap="md" wrap align="center">
          {variants.map((v) => (
            <Stack key={v} direction="horizontal" gap="xs" align="center">
              <StatusDot variant={v} animate="pulse" aria-label={`${v} pulsing`} />
              <span style={{ fontSize: '0.85rem' }}>{v}</span>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Inline with Badge</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          <Stack direction="horizontal" gap="xs" align="center">
            <StatusDot variant="success" />
            <Badge variant="success">Active</Badge>
          </Stack>
          <Stack direction="horizontal" gap="xs" align="center">
            <StatusDot variant="warning" />
            <Badge variant="warning">Paused</Badge>
          </Stack>
          <Stack direction="horizontal" gap="xs" align="center">
            <StatusDot variant="error" />
            <Badge variant="error">Failed</Badge>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
