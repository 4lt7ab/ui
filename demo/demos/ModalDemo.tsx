import { useState } from 'react';
import { ModalShell, ConfirmDialog, Button, Stack } from '@4lt7ab/ui';

export function ModalDemo(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [showWide, setShowWide] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>ModalShell</h3>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        {showModal && (
          <ModalShell onClose={() => setShowModal(false)}>
            <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
              Modal Title
            </h2>
            <p style={{ margin: '0.5rem 0 1rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              This is a reusable modal shell. Press Escape or click the overlay to close.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setShowModal(false)}>Close</Button>
            </div>
          </ModalShell>
        )}
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>ModalShell with xl width</h3>
        <Button onClick={() => setShowWide(true)}>Open Wide Modal (xl)</Button>
        {showWide && (
          <ModalShell onClose={() => setShowWide(false)} width="xl">
            <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
              Wide Modal
            </h2>
            <p style={{ margin: '0.5rem 0 1rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              This modal uses width="xl" instead of the default "md".
              Useful for content that needs more horizontal space.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setShowWide(false)}>Close</Button>
            </div>
          </ModalShell>
        )}
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>ConfirmDialog</h3>
        <Button variant="destructive" onClick={() => setShowConfirm(true)}>
          Delete project
        </Button>
        {showConfirm && (
          <ConfirmDialog
            title="Delete project?"
            message="This action cannot be undone. All data associated with this project will be permanently removed."
            confirmLabel="Delete"
            onConfirm={async () => {
              await new Promise((r) => setTimeout(r, 1000));
              setShowConfirm(false);
            }}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </Stack>
    </Stack>
  );
}
