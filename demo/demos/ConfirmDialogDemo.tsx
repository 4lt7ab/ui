import { useState } from 'react';
import { ConfirmDialog, Button, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'string', required: true, description: 'Dialog heading text.' },
  { name: 'message', type: 'string', required: true, description: 'Descriptive text explaining what the user is confirming.' },
  { name: 'onConfirm', type: '() => Promise<void> | void', required: true, description: 'Called when the user clicks confirm. Returns a Promise to show a loading state.' },
  { name: 'onCancel', type: '() => void', required: true, description: 'Called when the user cancels (Cancel button, Escape, or overlay click).' },
  { name: 'confirmLabel', type: 'string', default: "'Confirm'", description: 'Label for the confirm button.' },
  { name: 'variant', type: "'destructive' | 'info' | 'warning'", default: "'destructive'", description: 'Controls the confirm button color variant.' },
  { name: 'children', type: 'ReactNode', description: 'Custom body content rendered between the message and action buttons.' },
];

export function ConfirmDialogDemo(): React.JSX.Element {
  const [showDestructive, setShowDestructive] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="variant='destructive'" description="Default variant with a red destructive confirm button and async loading state.">
        <Stack gap="sm">
          <Button variant="destructive" onClick={() => setShowDestructive(true)}>
            Delete Item
          </Button>
          {showDestructive && (
            <ConfirmDialog
              title="Delete this item?"
              message="This action cannot be undone. The item and all associated data will be permanently removed."
              confirmLabel="Delete"
              onConfirm={async () => {
                await new Promise((r) => setTimeout(r, 1000));
                setShowDestructive(false);
              }}
              onCancel={() => setShowDestructive(false)}
            />
          )}
        </Stack>
      </PropDemo>

      <PropDemo name="variant='info'" description="Info variant uses the primary accent button for non-destructive confirmations.">
        <Stack gap="sm">
          <Button variant="secondary" onClick={() => setShowInfo(true)}>
            Publish Article
          </Button>
          {showInfo && (
            <ConfirmDialog
              title="Publish this article?"
              message="Once published, the article will be visible to all readers."
              confirmLabel="Publish"
              variant="info"
              onConfirm={() => setShowInfo(false)}
              onCancel={() => setShowInfo(false)}
            />
          )}
        </Stack>
      </PropDemo>

      <PropDemo name="confirmLabel" description="Custom confirm label for different action contexts.">
        <Stack gap="sm">
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            The confirm button label adapts to the action: "Delete", "Publish", "Reset", etc.
          </span>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
