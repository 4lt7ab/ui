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
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

/**
 * Materializes the form-in-a-modal migration snippet from the 0.3.0
 * modal-consolidation design doc (KB 01KPD518FGRWBYJTS348Y7SMCX). The retired
 * thin wrapper is replaced by this ModalShell + shared styles composition.
 */

const props: PropMeta[] = [
  {
    name: 'pattern',
    type: 'composition',
    description:
      'ModalShell + modalHeadingStyle + scrollable body + modalFooterStyle + Button. Replaces the retired form-modal wrapper.',
  },
  {
    name: 'titleId',
    type: 'string',
    description:
      'Wire a useId() value to both <h2 id> and <ModalShell titleId> to get aria-labelledby for free.',
  },
  {
    name: 'loading',
    type: 'managed locally',
    description:
      'Use one useState + try/finally around the async submit, or forward an existing mutation-hook flag directly to <Button loading>.',
  },
];

function BasicFormPattern({ onClose }: { onClose: () => void }): React.JSX.Element {
  const titleId = useId();

  return (
    <ModalShell onClose={onClose} titleId={titleId} width="md">
      <h2 id={titleId} style={modalHeadingStyle}>
        Create Item
      </h2>

      <div style={{ margin: `${t.spaceMd} 0 ${t.spaceLg}`, overflowY: 'auto' }}>
        <Stack gap="md">
          <Field label="Name">
            <Input placeholder="Enter a name..." />
          </Field>
          <Field label="Description">
            <Textarea placeholder="Describe the item..." />
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

function AsyncFormPattern({ onClose }: { onClose: () => void }): React.JSX.Element {
  const titleId = useId();
  const [submitting, setSubmitting] = useState(false);

  const handleSave = async (): Promise<void> => {
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ModalShell onClose={onClose} titleId={titleId} width="md">
      <h2 id={titleId} style={modalHeadingStyle}>
        Save Settings
      </h2>

      <div style={{ margin: `${t.spaceMd} 0 ${t.spaceLg}`, overflowY: 'auto' }}>
        <Stack gap="md">
          <Field label="Email">
            <Input type="email" placeholder="you@example.com" />
          </Field>
          <Field label="Notes">
            <Textarea placeholder="Any additional notes..." />
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

export function ModalShellFormPatternDemo(): React.JSX.Element {
  const [showBasic, setShowBasic] = useState(false);
  const [showAsync, setShowAsync] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo
        name="Basic form (sync submit)"
        description="ModalShell + heading + scrollable body + footer. Title wired through useId() → <h2 id> → <ModalShell titleId> for aria-labelledby."
      >
        <Stack gap="sm">
          <Button variant="primary" onClick={() => setShowBasic(true)}>
            Open Form
          </Button>
          {showBasic && <BasicFormPattern onClose={() => setShowBasic(false)} />}
        </Stack>
      </PropDemo>

      <PropDemo
        name="Async submit with loading state"
        description="One useState + try/finally recreates the old wrapper's internal loading merge. Forward the flag to <Button loading>; disable Cancel while in flight."
      >
        <Stack gap="sm">
          <Button variant="secondary" onClick={() => setShowAsync(true)}>
            Open Async Form
          </Button>
          {showAsync && <AsyncFormPattern onClose={() => setShowAsync(false)} />}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
