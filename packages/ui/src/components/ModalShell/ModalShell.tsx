import { forwardRef, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { semantic as t } from '@4lt7ab/core';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { Overlay } from '../Overlay';
import { modalWidthMap } from '../../types';
import type { ModalWidth } from '../../types';
import type { ReactNode } from 'react';

/** Shared heading style for modal titles. Used by ConfirmDialog and consumer modal compositions. */
export const modalHeadingStyle: React.CSSProperties = Object.freeze({
  margin: 0,
  fontWeight: t.fontWeightSemibold,
  fontFamily: t.fontSans,
  color: t.colorText,
  fontSize: t.fontSizeLg,
});

/** Shared footer layout for modal action buttons. Used by ConfirmDialog and consumer modal compositions. */
export const modalFooterStyle: React.CSSProperties = Object.freeze({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: t.spaceSm,
});

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not(:disabled)',
  'input:not(:disabled)',
  'select:not(:disabled)',
  'textarea:not(:disabled)',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/** A centered modal panel with backdrop overlay. Closes on Escape and overlay click. */
export interface ModalShellProps {
  /** Called when the modal should close (Escape key or overlay click). */
  onClose: () => void;
  /** Modal body content. */
  children: ReactNode;
  /** Width preset for the modal panel.
   * @default 'md'
   */
  width?: ModalWidth;
  /** Base z-index for the overlay. The panel renders at `zIndex + 1`.
   * @default 'var(--z-index-modal)'
   */
  zIndex?: number | string;
  /** ID of the element that labels this dialog. Used for `aria-labelledby`. */
  titleId?: string;
  /** Accessible label for the dialog. Alternative to `titleId`/`aria-labelledby`. */
  'aria-label'?: string;
  /** ARIA role override. Defaults to `"dialog"`. ConfirmDialog passes `"alertdialog"`. */
  role?: 'dialog' | 'alertdialog';
}

export const ModalShell: React.ForwardRefExoticComponent<Omit<ModalShellProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ModalShellProps>(
  function ModalShell({
    onClose,
    children,
    width = 'md',
    zIndex = t.zIndexModal,
    titleId,
    'aria-label': ariaLabel,
    role = 'dialog',
  }, ref): React.JSX.Element {
    const generatedId = useId();
    const resolvedLabelId = titleId ?? generatedId;

    // Internal ref for focus trap; merge with forwarded ref
    const internalRef = useRef<HTMLDivElement | null>(null);

    const setRefs = (node: HTMLDivElement | null): void => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    // Focus trap
    useFocusTrap(internalRef);

    // Focus management: capture previous focus, move into dialog, restore on unmount
    useEffect(() => {
      const previouslyFocused = document.activeElement as HTMLElement | null;
      const container = internalRef.current;

      if (container) {
        const firstFocusable = container.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          container.focus();
        }
      }

      return () => {
        previouslyFocused?.focus();
      };
    }, []);

    // Escape key handler
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return createPortal(
      <>
        <Overlay onClick={onClose} zIndex={zIndex} />
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: t.spaceMd,
            zIndex: typeof zIndex === 'number' ? zIndex + 1 : `calc(${zIndex} + 1)`,
            pointerEvents: 'none',
          }}
        >
          <div
            ref={setRefs}
            role={role}
            aria-modal="true"
            aria-labelledby={ariaLabel ? undefined : resolvedLabelId}
            aria-label={ariaLabel}
            tabIndex={-1}
            style={{
              background: t.colorSurface,
              color: t.colorText,
              borderRadius: t.radiusLg,
              boxShadow: t.shadowLg,
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              padding: t.spaceXl,
              maxWidth: modalWidthMap[width],
              width: '100%',
              maxHeight: '100%',
              overflowY: 'auto',
              pointerEvents: 'auto',
              outline: 'none',
            }}
          >
            {children}
          </div>
        </div>
      </>,
      document.body,
    );
  }
);
