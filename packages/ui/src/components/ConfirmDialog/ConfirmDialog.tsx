import { forwardRef, useId, useState } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { ModalShell, modalHeadingStyle, modalFooterStyle } from '../ModalShell';
import { Button } from '../Button';
import type { ReactNode } from 'react';
import type { ButtonVariant } from '../Button/Button';

/** Semantic variant controlling the confirm button style. */
export type ConfirmDialogVariant = 'destructive' | 'info' | 'warning';

const variantButtonMap: Record<ConfirmDialogVariant, ButtonVariant> = {
  destructive: 'destructive',
  info: 'primary',
  warning: 'primary',
};

/** A modal confirmation dialog with title, message, and Cancel/Confirm buttons. Supports async confirm handlers with loading state. */
export interface ConfirmDialogProps {
  /** Dialog heading text. */
  title: string;
  /** Descriptive text explaining what the user is confirming. */
  message: string;
  /** Label for the confirm button.
   * @default 'Confirm'
   */
  confirmLabel?: string;
  /** Called when the user clicks confirm. Can return a Promise to show a loading state. */
  onConfirm: () => Promise<void> | void;
  /** Called when the user cancels (Cancel button, Escape key, or overlay click). */
  onCancel: () => void;
  /** Custom body content rendered between the message and the action buttons. */
  children?: ReactNode;
  /** Controls the confirm button color variant.
   * - `destructive` — red destructive button
   * - `info` — primary accent button
   * - `warning` — primary accent button
   * @default 'destructive'
   */
  variant?: ConfirmDialogVariant;
}

export const ConfirmDialog: React.ForwardRefExoticComponent<Omit<ConfirmDialogProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ConfirmDialogProps>(
  function ConfirmDialog({
    title,
    message,
    confirmLabel = 'Confirm',
    onConfirm,
    onCancel,
    children,
    variant = 'destructive',
  }, ref): React.JSX.Element {
    const [loading, setLoading] = useState(false);
    const titleId = useId();

    const handleConfirm = async (): Promise<void> => {
      setLoading(true);
      try {
        await onConfirm();
      } finally {
        setLoading(false);
      }
    };

    return (
      <ModalShell ref={ref} onClose={onCancel} role="alertdialog" titleId={titleId}>
      <h2
        id={titleId}
        style={modalHeadingStyle}
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
      <div style={modalFooterStyle}>
        <Button variant="ghost" onClick={onCancel} disabled={loading} autoFocus>
          Cancel
        </Button>
        <Button variant={variantButtonMap[variant]} onClick={handleConfirm} disabled={loading}>
          {loading ? 'Loading...' : confirmLabel}
        </Button>
      </div>
    </ModalShell>
    );
  }
);
