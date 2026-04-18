import { useState } from 'react';
import { Field, Input, Textarea, Select, Stack, Button, Card } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'label', type: 'string', required: true, description: 'Field label text displayed above the input.' },
  { name: 'htmlFor', type: 'string', description: 'Associates the label with the input via htmlFor/id.' },
  { name: 'error', type: 'string', description: 'Error message. When set, the field renders in error state and the message is announced via role="alert".' },
  { name: 'help', type: 'string', description: 'Help text shown below the input. Hidden when error is set.' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Shows a red asterisk (*) on the label.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Reduces field opacity. Does not disable the child input -- do that yourself.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'The form control to wrap (Input, Select, Textarea, etc.).' },
];

export function FieldDemo(): React.JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="label" description="The label text is always visible above the input. Use htmlFor to associate it with the input's id for accessibility.">
        <div style={{ maxWidth: '24rem' }}>
          <Field label="Email address" htmlFor="field-label-demo">
            <Input id="field-label-demo" type="email" placeholder="you@example.com" />
          </Field>
        </div>
      </PropDemo>

      <PropDemo name="required" description="Shows a red asterisk next to the label. Does not enforce validation -- add required to the child input as well.">
        <div style={{ maxWidth: '24rem' }}>
          <Field label="Full name" htmlFor="field-required-demo" required>
            <Input id="field-required-demo" placeholder="Jane Doe" required />
          </Field>
        </div>
      </PropDemo>

      <PropDemo name="help" description="Help text appears below the input in muted styling. Automatically wired to the input via aria-describedby.">
        <div style={{ maxWidth: '24rem' }}>
          <Field label="Email" htmlFor="field-help-demo" help="We'll use this to send you a confirmation.">
            <Input id="field-help-demo" type="email" placeholder="you@example.com" />
          </Field>
        </div>
      </PropDemo>

      <PropDemo name="error" description="Replaces help text with an error message in red. Announced to screen readers via role='alert'. Pair with hasError on the child input.">
        <div style={{ maxWidth: '24rem' }}>
          <Field label="Username" htmlFor="field-error-demo" error="This field is required" required>
            <Input id="field-error-demo" hasError placeholder="Pick a username..." />
          </Field>
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Reduces opacity on the entire field. You must also disable the child input separately.">
        <div style={{ maxWidth: '24rem' }}>
          <Field label="Locked field" disabled>
            <Input disabled value="Cannot edit this" />
          </Field>
        </div>
      </PropDemo>

      <PropDemo name="children" description="Works with any form control -- Input, Textarea, Select, or custom components.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <Field label="Text input" htmlFor="field-child-input">
              <Input id="field-child-input" placeholder="Short text" />
            </Field>
            <Field label="Textarea" htmlFor="field-child-textarea" help="Supports multiple lines.">
              <Textarea id="field-child-textarea" placeholder="Write something longer..." rows={3} />
            </Field>
            <Field label="Select" htmlFor="field-child-select">
              <Select.Root id="field-child-select">
                <Select.Trigger>
                  <Select.Value placeholder="Pick one..." />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="a">Option A</Select.Item>
                  <Select.Item value="b">Option B</Select.Item>
                  <Select.Item value="c">Option C</Select.Item>
                </Select.Content>
              </Select.Root>
            </Field>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="Realistic: Contact form" description="A complete form layout using Field with multiple control types.">
        <Card>
          {submitted ? (
            <div style={{ padding: '1rem 0' }}>
              <Stack gap="sm" align="center">
                <p style={{ fontSize: '1rem', fontWeight: 500, margin: 0 }}>Message sent!</p>
                <Button variant="ghost" size="sm" onClick={() => setSubmitted(false)}>
                  Send another
                </Button>
              </Stack>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <Stack gap="md">
                <Stack direction="horizontal" gap="md">
                  <div style={{ flex: 1 }}>
                    <Field label="First name" htmlFor="contact-first" required>
                      <Input id="contact-first" placeholder="Jane" />
                    </Field>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Field label="Last name" htmlFor="contact-last" required>
                      <Input id="contact-last" placeholder="Doe" />
                    </Field>
                  </div>
                </Stack>
                <Field label="Email" htmlFor="contact-email" required>
                  <Input id="contact-email" type="email" placeholder="jane@example.com" />
                </Field>
                <Field label="Subject" htmlFor="contact-subject">
                  <Select.Root id="contact-subject">
                    <Select.Trigger>
                      <Select.Value placeholder="Choose a topic..." />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="general">General inquiry</Select.Item>
                      <Select.Item value="support">Technical support</Select.Item>
                      <Select.Item value="billing">Billing question</Select.Item>
                      <Select.Item value="feedback">Feedback</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Field>
                <Field label="Message" htmlFor="contact-message" help="Markdown is supported.">
                  <Textarea id="contact-message" placeholder="How can we help?" rows={4} />
                </Field>
                <Stack direction="horizontal" gap="sm" justify="end">
                  <Button variant="ghost" type="reset">Clear</Button>
                  <Button variant="primary" type="submit">Send message</Button>
                </Stack>
              </Stack>
            </form>
          )}
        </Card>
      </PropDemo>
    </DocBlock>
  );
}
