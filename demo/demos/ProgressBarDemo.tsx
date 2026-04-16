import { ProgressBar, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'segments', type: 'ProgressBarSegment[]', required: true, description: 'One or more segments to display. Each has a value, color, and optional label.' },
  { name: 'height', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Bar height preset (4px, 6px, or 10px).' },
];

export function ProgressBarDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="segments" description="Each segment's width is proportional to its value relative to the total. Hover for tooltips.">
        <Stack gap="md">
          <ProgressBar
            segments={[
              { value: 65, color: 'primary', label: 'Progress' },
            ]}
          />
          <ProgressBar
            segments={[
              { value: 40, color: 'success', label: 'Complete' },
              { value: 25, color: 'warning', label: 'In progress' },
              { value: 10, color: 'error', label: 'Failed' },
            ]}
          />
        </Stack>
      </PropDemo>

      <PropDemo name="height" description="Three height presets: sm (4px), md (6px, default), lg (10px).">
        <Stack gap="md">
          <ProgressBar segments={[{ value: 60, color: 'primary' }]} height="sm" />
          <ProgressBar segments={[{ value: 60, color: 'primary' }]} height="md" />
          <ProgressBar segments={[{ value: 60, color: 'primary' }]} height="lg" />
        </Stack>
      </PropDemo>

      <PropDemo name="Realistic: Storage usage" description="Multi-segment bar showing categorized storage consumption.">
        <Stack gap="xs">
          <ProgressBar
            segments={[
              { value: 12, color: 'primary', label: 'Photos' },
              { value: 8, color: 'info', label: 'Documents' },
              { value: 5, color: 'warning', label: 'Other' },
            ]}
            height="lg"
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            25 GB of 100 GB used
          </span>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
