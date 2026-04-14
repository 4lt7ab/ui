import { SectionLabel, Stack, Badge, Card } from '@4lt7ab/ui';

export function SectionLabelDemo(): React.JSX.Element {
  return (
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

      <Stack gap="sm">
        <SectionLabel style={{ color: 'var(--color-action-primary)' }}>Custom Color</SectionLabel>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
          Style prop allows color overrides.
        </span>
      </Stack>
    </Stack>
  );
}
