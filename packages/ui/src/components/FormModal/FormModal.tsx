import { forwardRef, useId, useState } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { ModalShell, modalHeadingStyle, modalFooterStyle } from '../ModalShell';
import { Button } from '../Button';
import type { ReactNode } from 'react';

/** A modal wrapper for form submission workflows with title, scrollable body, and cancel/submit footer. */
export interface FormModalProps {
  /** Modal heading text. */
  title: string;
  /** Body content — typically form fields. */
  children: ReactNode;
  /** Called when the submit button is clicked. If it returns a Promise, the submit button shows a loading state until resolved. */
  onSubmit: () => void | Promise<void>;
  /** Called when the cancel button is clicked, and also when the modal is dismissed via Escape or overlay click. */
  onCancel: () => void;
  /** Label for the submit button.
   * @default 'Submit'
   */
  submitLabel?: string;
  /** Label for the cancel button.
   * @default 'Cancel'
   */
  cancelLabel?: string;
  /** External loading control. When true, the submit button shows a spinner and is disabled. */
  loading?: boolean;
  /** Maximum width of the modal panel in pixels. Passed through to ModalShell.
   * @default 480
   */
  maxWidth?: number;
}

export const FormModal: React.ForwardRefExoticComponent<Omit<FormModalProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, FormModalProps>(
  function FormModal({
    title,
    children,
    onSubmit,
    onCancel,
    submitLabel = 'Submit',
    cancelLabel = 'Cancel',
    loading: externalLoading,
    maxWidth,
  }, ref): React.JSX.Element {
    const [internalLoading, setInternalLoading] = useState(false);
    const titleId = useId();

    const isLoading = externalLoading || internalLoading;

    const handleSubmit = async (): Promise<void> => {
      setInternalLoading(true);
      try {
        await onSubmit();
      } finally {
        setInternalLoading(false);
      }
    };

    return (
      <ModalShell ref={ref} onClose={onCancel} titleId={titleId} maxWidth={maxWidth}>
        <h2
          id={titleId}
          style={modalHeadingStyle}
        >
          {title}
        </h2>

        <div
          style={{
            margin: `${t.spaceMd} 0 ${t.spaceLg}`,
            overflowY: 'auto',
          }}
        >
          {children}
        </div>

        <div style={modalFooterStyle}>
          <Button variant="ghost" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button variant="primary" onClick={handleSubmit} loading={isLoading}>
            {submitLabel}
          </Button>
        </div>
      </ModalShell>
    );
  }
);
