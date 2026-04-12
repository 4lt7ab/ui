import { semantic as t } from '../../tokens/semantic';
import { ModalShell } from '../ModalShell';
import { Button } from '../Button';
import { useState } from 'react';

export interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
}

export function ConfirmDialog({
  title,
  message,
  confirmLabel = 'Delete',
  onConfirm,
  onCancel,
}: ConfirmDialogProps): React.JSX.Element {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (): Promise<void> => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell onClose={onCancel}>
      <h2
        style={{
          margin: 0,
          fontWeight: 600,
          fontFamily: t.fontSans,
          color: t.colorText,
          fontSize: '1.125rem',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: `${t.spaceSm} 0 ${t.spaceLg}`,
          color: t.colorTextMuted,
          fontSize: '0.875rem',
          fontFamily: t.fontSans,
        }}
      >
        {message}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: t.spaceSm,
        }}
      >
        <Button variant="ghost" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={handleConfirm} disabled={loading}>
          {loading ? 'Loading...' : confirmLabel}
        </Button>
      </div>
    </ModalShell>
  );
}
