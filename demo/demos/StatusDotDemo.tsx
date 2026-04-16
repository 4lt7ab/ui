import { StatusDot, Stack, Badge } from '@4lt7ab/ui';
import type { StatusDotVariant, StatusDotSize } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const variants: StatusDotVariant[] = ['default', 'primary', 'success', 'warning', 'error', 'info'];
const sizes: { token: StatusDotSize; label: string }[] = [
  { token: 'sm', label: '6px' },
  { token: 'md', label: '8px' },
  { token: 'lg', label: '12px' },
];

const props: PropMeta[] = [
  { name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'", default: "'default'", description: 'Semantic variant mapping to feedback color tokens.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Dot diameter preset (6px, 8px, or 12px).' },
  { name: 'animate', type: "'pulse' | 'none'", default: "'none'", description: 'Animation style. Pulse adds a repeating glow effect.' },
];

export function StatusDotDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Controls the dot color. Maps to semantic feedback tokens from the active theme.">
        <Stack direction="horizontal" gap="md" wrap align="center">
          {variants.map((v) => (
            <Stack key={v} direction="horizontal" gap="xs" align="center">
              <StatusDot variant={v} aria-label={v} />
              <span style={{ fontSize: '0.85rem' }}>{v}</span>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="size" description="Three size presets: sm (6px), md (8px, default), lg (12px).">
        <Stack direction="horizontal" gap="md" wrap align="center">
          {sizes.map(({ token, label }) => (
            <Stack key={token} direction="horizontal" gap="xs" align="center">
              <StatusDot variant="success" size={token} />
              <span style={{ fontSize: '0.85rem' }}>{label}</span>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="animate" description="Pulse animation adds a repeating glow ring. Respects prefers-reduced-motion.">
        <Stack direction="horizontal" gap="md" wrap align="center">
          {variants.map((v) => (
            <Stack key={v} direction="horizontal" gap="xs" align="center">
              <StatusDot variant={v} animate="pulse" aria-label={`${v} pulsing`} />
              <span style={{ fontSize: '0.85rem' }}>{v}</span>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="Inline composition" description="StatusDot pairs naturally with Badge for labeled status indicators.">
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
      </PropDemo>
    </DocBlock>
  );
}
