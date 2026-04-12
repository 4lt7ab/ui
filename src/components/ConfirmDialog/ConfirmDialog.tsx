import { semantic as t } from '../../tokens/semantic';
import { ModalShell } from '../ModalShell';
import { Button } from '../Button';
import { useState } from 'react';
import type { ReactNode } from 'react';
import type { ButtonVariant } from '../Button/Button';

export type ConfirmDialogVariant = 'destructive' | 'info' | 'warning';

const variantButtonMap: Record<ConfirmDialogVariant, ButtonVariant> = {
  destructive: 'destructive',
  info: 'primary',
  warning: 'primary',
};

export interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
  /** Custom body content rendered between the message and the buttons. */
  children?: ReactNode;
  /** Controls confirm button styling. Defaults to 'destructive'. */
  variant?: ConfirmDialogVariant;
}

export function ConfirmDialog({
  title,
  message,
  confirmLabel = 'Confirm',
  onConfirm,
  onCancel,
  children,
  variant = 'destructive',
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
          fontWeight: t.fontWeightSemibold,
          fontFamily: t.fontSans,
          color: t.colorText,
          fontSize: t.fontSizeLg,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: `${t.spaceSm} 0 ${children ? '0' : t.spaceLg}`,
          color: t.colorTextMuted,
          fontSize: t.fontSizeSm,
          fontFamily: t.fontSans,
        }}
      >
        {message}
      </p>
      {children && (
        <div style={{ margin: `${t.spaceSm} 0 ${t.spaceLg}` }}>
          {children}
        </div>
      )}
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
        <Button variant={variantButtonMap[variant]} onClick={handleConfirm} disabled={loading}>
          {loading ? 'Loading...' : confirmLabel}
        </Button>
      </div>
    </ModalShell>
  );
}
