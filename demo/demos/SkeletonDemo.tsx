import { Skeleton, CardSkeleton, RowSkeleton, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'width', type: "number | `${number}%`", default: "'100%'", description: 'Width in pixels or a percentage string.' },
  { name: 'height', type: 'number', default: '16', description: 'Height in pixels.' },
  { name: 'radius', type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Border radius token.' },
];

export function SkeletonDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="width + height" description="Basic skeletons with varying widths and heights to simulate text and headings.">
        <Stack gap="xs">
          <Skeleton width="80%" height={20} />
          <Skeleton width="100%" height={14} />
          <Skeleton width="60%" height={14} />
        </Stack>
      </PropDemo>

      <PropDemo name="radius" description="Use radius='full' for circular avatars, or other presets for different shapes.">
        <Stack direction="horizontal" gap="md" align="center">
          <Skeleton width={40} height={40} radius="full" />
          <Skeleton width={80} height={20} radius="sm" />
          <Skeleton width={80} height={20} radius="lg" />
        </Stack>
      </PropDemo>

      <PropDemo name="CardSkeleton" description="Pre-composed skeleton for card loading states. Includes a heading and two body lines.">
        <Stack direction="horizontal" gap="md" wrap>
          <div style={{ width: 240 }}><CardSkeleton /></div>
          <div style={{ width: 240 }}><CardSkeleton /></div>
        </Stack>
      </PropDemo>

      <PropDemo name="RowSkeleton" description="Pre-composed skeleton for list row loading states. Includes a circular avatar and two text lines.">
        <div style={{ maxWidth: 400 }}>
          <RowSkeleton />
          <RowSkeleton />
          <RowSkeleton />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
