import { useState } from 'react';
import { ExpandableCard, Badge, Button, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'string', required: true, description: 'Header text shown alongside the chevron toggle.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Collapsible body content.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state when uncontrolled.' },
  { name: 'open', type: 'boolean', description: 'Controlled open state. When provided, the component is fully controlled.' },
  { name: 'onToggle', type: '(open: boolean) => void', description: 'Called when the open state changes. Receives the next open value.' },
  { name: 'variant', type: "'default' | 'flat' | 'elevated' | 'live'", default: "'default'", description: 'Card surface variant passed to the underlying Card.' },
  { name: 'headerAction', type: 'ReactNode', description: 'Content rendered in the header row to the right of the title.' },
];

export function ExpandableCardDemo(): React.JSX.Element {
  const [controlled, setControlled] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="title" description="The text shown in the clickable header row, alongside the chevron indicator.">
        <ExpandableCard title="Project Details">
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            This content is hidden by default and revealed when the header is clicked.
            The chevron rotates to indicate open/closed state.
          </p>
        </ExpandableCard>
      </PropDemo>

      <PropDemo name="defaultOpen" description="Sets the initial open state for uncontrolled usage. The card starts expanded when true.">
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
      </PropDemo>

      <PropDemo name="open / onToggle" description="Controlled mode. The parent manages open state via the open prop and responds to changes via onToggle.">
        <Stack gap="sm">
          <Button size="sm" onClick={() => setControlled((o) => !o)}>
            {controlled ? 'Close' : 'Open'} externally
          </Button>
          <ExpandableCard
            title="Controlled Card"
            open={controlled}
            onToggle={setControlled}
          >
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              This card is controlled via the open prop and toggled by an external button.
            </p>
          </ExpandableCard>
        </Stack>
      </PropDemo>

      <PropDemo name="variant" description="Passes through to the underlying Card component to control visual treatment.">
        <Stack gap="md">
          {(['default', 'flat', 'elevated'] as const).map((v) => (
            <ExpandableCard key={v} title={`variant="${v}"`} variant={v} defaultOpen>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Card with {v} variant styling.
              </p>
            </ExpandableCard>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="headerAction" description="Renders content in the header row to the right of the title, such as badges or action buttons.">
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
      </PropDemo>
    </DocBlock>
  );
}
