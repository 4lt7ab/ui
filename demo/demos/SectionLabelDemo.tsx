import { SectionLabel, Stack, Badge, Card } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Label content — rendered as uppercase text.' },
];

export function SectionLabelDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="The label text, rendered in uppercase with wide letter spacing. Used to label groups of content within a page.">
        <Stack gap="lg">
          <Stack gap="sm">
            <SectionLabel>Dependencies</SectionLabel>
            <Stack direction="horizontal" gap="sm" wrap>
              <Badge>react ^19.0.0</Badge>
              <Badge>typescript ^5.0.0</Badge>
            </Stack>
          </Stack>

          <Stack gap="sm">
            <SectionLabel>Metadata</SectionLabel>
            <Card variant="flat" padding="sm">
              <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}>
                Created 2026-01-15 by admin
              </span>
            </Card>
          </Stack>

          <Stack gap="sm">
            <SectionLabel>Filters</SectionLabel>
            <Stack direction="horizontal" gap="sm" wrap>
              <Badge variant="info">Active</Badge>
              <Badge variant="warning">Pending</Badge>
            </Stack>
          </Stack>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
