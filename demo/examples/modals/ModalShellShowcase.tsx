import { useId, useState } from 'react';
import {
  ModalShell,
  modalHeadingStyle,
  modalFooterStyle,
  Button,
  Stack,
  Input,
  Field,
  Textarea,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// ModalShell showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Two dialogs that exercise the primitive's behaviors the prose can't show
// without you feeling them:
//
//   - Focus trap (Tab cycles inside the panel).
//   - Escape + overlay click dismiss.
//   - Focus restoration on close (the trigger button regains focus).
//   - The "FormModal" composition (retired in 0.3.0) reassembled from
//     ModalShell + modalHeadingStyle + modalFooterStyle at the call site.
//   - Async submit with a loading button; Cancel is disabled in-flight to
//     prevent double-submit; try/finally ensures the flag resets on error.

function BasicFormDialog({ onClose }: { onClose: () => void }): React.JSX.Element {
  const titleId = useId();

  return (
    <ModalShell onClose={onClose} titleId={titleId} width="md">
      <h2 id={titleId} style={modalHeadingStyle}>
        Create project
      </h2>

      <div style={{ margin: `${t.spaceMd} 0 ${t.spaceLg}`, overflowY: 'auto' }}>
        <Stack gap="md">
          <Field label="Name">
            <Input placeholder="e.g. Design token audit" />
          </Field>
          <Field label="Description">
            <Textarea placeholder="What is this project about?" rows={3} />
          </Field>
        </Stack>
      </div>

      <div style={modalFooterStyle}>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onClose}>
          Create
        </Button>
      </div>
    </ModalShell>
  );
}

function AsyncFormDialog({ onClose }: { onClose: () => void }): React.JSX.Element {
  const titleId = useId();
  const [submitting, setSubmitting] = useState(false);

  const handleSave = async (): Promise<void> => {
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ModalShell onClose={onClose} titleId={titleId} width="md">
      <h2 id={titleId} style={modalHeadingStyle}>
        Save settings
      </h2>

      <div style={{ margin: `${t.spaceMd} 0 ${t.spaceLg}`, overflowY: 'auto' }}>
        <Stack gap="md">
          <Field label="Email">
            <Input type="email" placeholder="you@example.com" />
          </Field>
          <Field label="Notes">
            <Textarea placeholder="Any additional context…" rows={3} />
          </Field>
        </Stack>
      </div>

      <div style={modalFooterStyle}>
        <Button variant="ghost" onClick={onClose} disabled={submitting}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} loading={submitting}>
          Save
        </Button>
      </div>
    </ModalShell>
  );
}

export function ModalShellShowcase(): React.JSX.Element {
  const [showBasic, setShowBasic] = useState(false);
  const [showAsync, setShowAsync] = useState(false);

  return (
    <Stack direction="horizontal" gap="sm" wrap>
      <Button variant="primary" onClick={() => setShowBasic(true)}>
        Open form modal
      </Button>
      <Button variant="secondary" onClick={() => setShowAsync(true)}>
        Open async form
      </Button>
      {showBasic ? <BasicFormDialog onClose={() => setShowBasic(false)} /> : null}
      {showAsync ? <AsyncFormDialog onClose={() => setShowAsync(false)} /> : null}
    </Stack>
  );
}
