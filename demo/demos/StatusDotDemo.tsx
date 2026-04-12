import { StatusDot, Stack, Badge } from '@4lt7ab/ui';
import type { StatusDotVariant } from '@4lt7ab/ui';

const variants: StatusDotVariant[] = ['default', 'success', 'warning', 'error', 'info'];

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
          {[6, 8, 10, 12, 16].map((s) => (
            <Stack key={s} direction="horizontal" gap="xs" align="center">
              <StatusDot variant="success" size={s} />
              <span style={{ fontSize: '0.85rem' }}>{s}px</span>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom Colors</h3>
        <Stack direction="horizontal" gap="md" wrap align="center">
          <StatusDot color="#e040fb" />
          <StatusDot color="#00e5ff" />
          <StatusDot color="#ff6d00" />
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
