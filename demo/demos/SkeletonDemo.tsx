import { Skeleton, CardSkeleton, RowSkeleton, Stack } from '@4lt7ab/ui';

export function SkeletonDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic Skeleton</h3>
        <Stack gap="xs">
          <Skeleton width="80%" height={20} />
          <Skeleton width="100%" height={14} />
          <Skeleton width="60%" height={14} />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Card Skeleton</h3>
        <Stack direction="horizontal" gap="md" wrap>
          <CardSkeleton style={{ width: 240 }} />
          <CardSkeleton style={{ width: 240 }} />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Row Skeleton</h3>
        <div style={{ maxWidth: 400 }}>
          <RowSkeleton />
          <RowSkeleton />
          <RowSkeleton />
        </div>
      </Stack>
    </Stack>
  );
}
