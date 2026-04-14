import { useState } from 'react';
import { FormModal, Button, Stack, Input, Field, Textarea } from '@4lt7ab/ui';

export function FormModalDemo(): React.JSX.Element {
  const [showBasic, setShowBasic] = useState(false);
  const [showAsync, setShowAsync] = useState(false);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic form modal</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          A simple form modal with a couple of input fields and synchronous submit.
        </p>
        <Button variant="primary" onClick={() => setShowBasic(true)}>
          Open Form
        </Button>
        {showBasic && (
          <FormModal
            title="Create Item"
            submitLabel="Create"
            onSubmit={() => setShowBasic(false)}
            onCancel={() => setShowBasic(false)}
          >
            <Stack gap="md">
              <Field label="Name">
                <Input placeholder="Enter a name..." />
              </Field>
              <Field label="Description">
                <Textarea placeholder="Describe the item..." />
              </Field>
            </Stack>
          </FormModal>
        )}
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Async submit</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Submit handler returns a promise. The submit button shows a spinner for 2 seconds.
        </p>
        <Button variant="secondary" onClick={() => setShowAsync(true)}>
          Open Async Form
        </Button>
        {showAsync && (
          <FormModal
            title="Save Settings"
            submitLabel="Save"
            onSubmit={async () => {
              await new Promise((r) => setTimeout(r, 2000));
              setShowAsync(false);
            }}
            onCancel={() => setShowAsync(false)}
          >
            <Stack gap="md">
              <Field label="Email">
                <Input type="email" placeholder="you@example.com" />
              </Field>
              <Field label="Notes">
                <Textarea placeholder="Any additional notes..." />
              </Field>
            </Stack>
          </FormModal>
        )}
      </Stack>
    </Stack>
  );
}
