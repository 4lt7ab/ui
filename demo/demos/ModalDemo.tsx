import { useState } from 'react';
import { ModalShell, Button, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'onClose', type: '() => void', required: true, description: 'Called when the modal should close (Escape key or overlay click).' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Modal body content.' },
  { name: 'width', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Width preset for the modal panel (400px, 480px, 520px, 640px).' },
  { name: 'zIndex', type: 'number | string', default: "'var(--z-index-modal)'", description: 'Base z-index for the overlay. The panel renders at zIndex + 1.' },
  { name: 'titleId', type: 'string', description: 'ID of the element that labels this dialog. Used for aria-labelledby.' },
  { name: 'role', type: "'dialog' | 'alertdialog'", default: "'dialog'", description: 'ARIA role override. ConfirmDialog passes alertdialog.' },
];

export function ModalDemo(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [showWide, setShowWide] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="onClose + children" description="Basic modal shell with backdrop overlay. Closes on Escape key or overlay click. Focus is trapped within the modal.">
        <Stack gap="sm">
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
      </PropDemo>

      <PropDemo name="width" description="Four width presets: sm (400px), md (480px, default), lg (520px), xl (640px).">
        <Stack gap="sm">
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
      </PropDemo>
    </DocBlock>
  );
}
