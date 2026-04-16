import { useState } from 'react';
import { Field, Input, Textarea, Select, Stack, Button, Card } from '@4lt7ab/ui';

export function FieldDemo(): React.JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <Stack gap="md">
          <Field label="Default" htmlFor="field-default">
            <Input id="field-default" placeholder="Standard field" />
          </Field>
          <Field label="Required" htmlFor="field-required" required>
            <Input id="field-required" placeholder="Must be filled" />
          </Field>
          <Field label="With help text" htmlFor="field-help" help="We'll use this to send you a confirmation.">
            <Input id="field-help" type="email" placeholder="you@example.com" />
          </Field>
          <Field label="Error state" htmlFor="field-error" error="This field is required" required>
            <Input id="field-error" hasError placeholder="Try typing here..." />
          </Field>
          <Field label="Disabled" disabled>
            <Input disabled value="Cannot edit this" />
          </Field>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With different inputs</h3>
        <Stack gap="md">
          <Field label="Text input" htmlFor="field-text">
            <Input id="field-text" placeholder="Short text" />
          </Field>
          <Field label="Textarea" htmlFor="field-textarea" help="Supports multiple lines.">
            <Textarea id="field-textarea" placeholder="Write something longer..." rows={3} />
          </Field>
          <Field label="Select" htmlFor="field-select">
            <Select
              id="field-select"
              placeholder="Pick one..."
              options={[
                { value: 'a', label: 'Option A' },
                { value: 'b', label: 'Option B' },
                { value: 'c', label: 'Option C' },
              ]}
            />
          </Field>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Realistic: Contact form</h3>
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
                  <Select
                    id="contact-subject"
                    placeholder="Choose a topic..."
                    options={[
                      { value: 'general', label: 'General inquiry' },
                      { value: 'support', label: 'Technical support' },
                      { value: 'billing', label: 'Billing question' },
                      { value: 'feedback', label: 'Feedback' },
                    ]}
                  />
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
      </Stack>
    </Stack>
  );
}
