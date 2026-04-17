import { EmptyState, Stack, Button } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'icon', type: 'IconName', required: true, description: 'Icon displayed above the message.' },
  { name: 'message', type: 'string', required: true, description: 'Primary message text.' },
  { name: 'variant', type: "'plain' | 'card'", default: "'plain'", description: 'Container variant. Card wraps content in a flat Card.' },
  { name: 'idle', type: "'none' | 'breathe' | 'particles'", default: "'breathe'", description: 'Idle animation mode. Breathe scale-pulses the icon; particles adds 4 drifting dots. Respects prefers-reduced-motion.' },
  { name: 'children', type: 'ReactNode', description: 'Additional content rendered below the message.' },
  { name: 'action', type: 'ReactNode', description: 'Action slot (e.g. a CTA button) rendered below the message.' },
];

export function EmptyStateDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Plain renders without a wrapper. Card wraps the empty state in a bordered Card.">
        <Stack gap="lg">
          <EmptyState icon="warning" message="No messages yet" />
          <EmptyState icon="search" message="No results found for your search" variant="card" />
        </Stack>
      </PropDemo>

      <PropDemo name="action" description="Pass a button or link as the action slot for a call-to-action below the message.">
        <EmptyState
          icon="edit"
          message="You haven't created any projects yet."
          variant="card"
          action={<Button variant="primary" size="sm">New Project</Button>}
        />
      </PropDemo>

      <PropDemo name="icon + message" description="Choose an icon that reinforces the empty state context.">
        <Stack gap="lg">
          <EmptyState icon="info" message="Your inbox is empty" variant="card" />
          <EmptyState icon="error" message="Unable to load data. Check your connection." variant="card" />
        </Stack>
      </PropDemo>

      <PropDemo name="idle" description="Idle animations that give the empty state life. Static is the previous behavior; breathe (default) scale-pulses the icon; particles adds drifting dots. All transform-only and honor prefers-reduced-motion.">
        <Stack gap="lg">
          <EmptyState icon="info" message="Static (no animation)" variant="card" idle="none" />
          <EmptyState icon="info" message="Breathing icon" variant="card" idle="breathe" />
          <EmptyState icon="info" message="With drifting particles" variant="card" idle="particles" />
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
