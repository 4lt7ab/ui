import { ExpandableCard, Badge, Stack } from '../../src';

export function ExpandableCardDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Default (collapsed)</h3>
        <ExpandableCard title="Project Details">
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            This content is hidden by default and revealed when the header is clicked.
            The chevron rotates to indicate open/closed state.
          </p>
        </ExpandableCard>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Default open</h3>
        <ExpandableCard title="Release Notes" defaultOpen>
          <Stack gap="xs">
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              v2.1.0 - Added new Badge, Icon, and ExpandableCard components.
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              v2.0.0 - Complete token system redesign.
            </p>
          </Stack>
        </ExpandableCard>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With header action</h3>
        <ExpandableCard
          title="Active Tasks"
          defaultOpen
          headerAction={<Badge variant="info">3 items</Badge>}
        >
          <Stack gap="xs">
            <span style={{ fontSize: '0.875rem' }}>Review pull request #42</span>
            <span style={{ fontSize: '0.875rem' }}>Update documentation</span>
            <span style={{ fontSize: '0.875rem' }}>Fix CI pipeline</span>
          </Stack>
        </ExpandableCard>
      </Stack>
    </Stack>
  );
}
