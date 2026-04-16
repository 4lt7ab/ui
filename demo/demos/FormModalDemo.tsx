import { useState } from 'react';
import { FormModal, Button, Stack, Input, Field, Textarea } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'string', required: true, description: 'Modal heading text.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Body content, typically form fields.' },
  { name: 'onSubmit', type: '() => void | Promise<void>', required: true, description: 'Called on submit. If a Promise is returned, the button shows a loading state.' },
  { name: 'onCancel', type: '() => void', required: true, description: 'Called on cancel, Escape, or overlay click.' },
  { name: 'submitLabel', type: 'string', default: "'Submit'", description: 'Label for the submit button.' },
  { name: 'cancelLabel', type: 'string', default: "'Cancel'", description: 'Label for the cancel button.' },
  { name: 'loading', type: 'boolean', description: 'External loading control. Disables submit button and shows a spinner.' },
  { name: 'width', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Width preset passed through to ModalShell.' },
];

export function FormModalDemo(): React.JSX.Element {
  const [showBasic, setShowBasic] = useState(false);
  const [showAsync, setShowAsync] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="title + onSubmit + onCancel" description="A basic form modal with input fields and synchronous submit.">
        <Stack gap="sm">
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
      </PropDemo>

      <PropDemo name="Async submit" description="When onSubmit returns a Promise, the submit button shows a spinner until resolved.">
        <Stack gap="sm">
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
      </PropDemo>
    </DocBlock>
  );
}
