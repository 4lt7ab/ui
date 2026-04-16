import { Badge, Stack } from '@4lt7ab/ui';
import type { BadgeVariant } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const variants: BadgeVariant[] = ['default', 'primary', 'success', 'warning', 'error', 'info'];

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Badge content (typically short text).' },
  { name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'", default: "'default'", description: 'Color variant mapping to feedback tokens.' },
  { name: 'size', type: "'default' | 'xs'", default: "'default'", description: 'Size variant. XS renders a tiny monospace pill for inline metadata.' },
];

export function BadgeDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Controls the color scheme. Default is neutral with a border; other variants use tinted backgrounds.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {variants.map((v) => (
            <Badge key={v} variant={v}>{v}</Badge>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="size" description="Default size renders uppercase pill text. XS size renders a tiny monospace pill for inline metadata.">
        <Stack gap="md">
          <Stack direction="horizontal" gap="sm" wrap align="center">
            {variants.map((v) => (
              <Badge key={v} variant={v}>{v}</Badge>
            ))}
          </Stack>
          <Stack direction="horizontal" gap="xs" wrap align="center">
            {variants.map((v) => (
              <Badge key={v} variant={v} size="xs">{v}</Badge>
            ))}
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="size='xs'" description="Tiny monospace pills for inline metadata like priority or effort tags.">
        <Stack direction="horizontal" gap="xs" wrap align="center">
          {['low', 'medium', 'high', 'critical', 'p0'].map((label) => (
            <Badge key={label} size="xs">{label}</Badge>
          ))}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
