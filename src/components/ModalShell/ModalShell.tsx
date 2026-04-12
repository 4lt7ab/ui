import { forwardRef, useEffect } from 'react';
import { semantic as t } from '../../tokens/semantic';
import { Overlay } from '../Overlay';
import type { CSSProperties, ReactNode } from 'react';

export interface ModalShellProps {
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number;
  zIndex?: number;
  style?: CSSProperties;
}

export const ModalShell: React.ForwardRefExoticComponent<Omit<ModalShellProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ModalShellProps>(
  function ModalShell({
    onClose,
    children,
    maxWidth = 480,
    zIndex = 200,
    style,
  }, ref): React.JSX.Element {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
      <>
        <Overlay onClick={onClose} zIndex={zIndex} />
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: zIndex + 1,
            pointerEvents: 'none',
          }}
        >
          <div
            ref={ref}
            style={{
              background: t.colorSurface,
              borderRadius: t.radiusLg,
              boxShadow: t.shadowLg,
              border: `1px solid ${t.colorBorder}`,
              padding: t.spaceXl,
              maxWidth,
              width: '100%',
              pointerEvents: 'auto',
              ...style,
            }}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
);
