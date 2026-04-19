import { useState } from 'react';
import { Field, Input, Stack, Textarea, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Input + Field showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// The value a code fence can't carry for `Field` + `Input` is the error
// state transition: typing a bad value and watching the border / help-text
// swap to the error variant and back, plus the `aria-describedby` wiring
// and `role="alert"` announcement on the error message. The widget runs
// consumer-owned validation on every change so the transition is visible.
//
//   - `Input` exposes `hasError` — the shared input-shell error border.
//   - `Field` auto-wires label + help + error (including the role=alert
//     swap) and forwards `aria-describedby` to the child input.
//   - `Textarea` shares the input shell so the error border matches.
//
// Validation here is deliberately tiny: email must contain '@', notes have
// a 120-char cap. No libraries, no schemas — just the pattern the docs
// describe (validate → pass `error` + `hasError`).

function validateEmail(value: string): string | undefined {
  if (!value) return undefined;
  if (!value.includes('@') || !value.includes('.'))
    return 'Enter an email like name@example.com.';
  return undefined;
}

const NOTES_MAX = 120;

export function InputFieldShowcase(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const emailError = validateEmail(email);
  const notesError =
    notes.length > NOTES_MAX ? `Notes cap is ${NOTES_MAX} characters.` : undefined;

  return (
    <div style={{ maxWidth: '26rem' }}>
      <Stack gap="lg">
        <Field
          label="Email"
          help="We only use this to send receipts."
          error={emailError}
          required
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={!!emailError}
            placeholder="name@example.com"
            autoComplete="email"
          />
        </Field>

        <Field
          label="Notes"
          help={`${notes.length} / ${NOTES_MAX} characters.`}
          error={notesError}
        >
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            hasError={!!notesError}
            rows={3}
            placeholder="Anything we should know about this order?"
          />
        </Field>

        <p style={hintStyle}>
          Type a bad email (or more than {NOTES_MAX} characters) to see the
          shared input-shell swap to its error border and the help text
          replaced by an announced error message.
        </p>
      </Stack>
    </div>
  );
}

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
