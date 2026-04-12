import { useState } from 'react';
import { ConfirmDialog, Button, Stack } from '@4lt7ab/ui';

export function ConfirmDialogDemo(): React.JSX.Element {
  const [showDestructive, setShowDestructive] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Destructive (default)</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Default confirm dialog with destructive styling and async confirm handler.
        </p>
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

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom confirm label</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Using a custom confirmLabel for non-delete actions.
        </p>
        <Button variant="secondary" onClick={() => setShowCustom(true)}>
          Reset Settings
        </Button>
        {showCustom && (
          <ConfirmDialog
            title="Reset all settings?"
            message="This will restore all settings to their default values. Your custom configuration will be lost."
            confirmLabel="Reset"
            onConfirm={() => setShowCustom(false)}
            onCancel={() => setShowCustom(false)}
          />
        )}
      </Stack>
    </Stack>
  );
}
