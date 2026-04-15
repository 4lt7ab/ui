import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Visual type of a toast notification. */
export type ToastType = 'success' | 'error' | 'info' | 'warning';

/** Configuration for a single toast instance. */
export interface ToastItem {
  /** Unique identifier. */
  id: string;
  /** Message text to display. */
  message: string;
  /** Visual type controlling color.
   * @default 'info'
   */
  type: ToastType;
  /** Auto-dismiss duration in milliseconds.
   * @default 4000
   */
  duration: number;
}

/** Options when showing a toast. */
export interface ShowToastOptions {
  /** Visual type controlling color.
   * @default 'info'
   */
  type?: ToastType;
  /** Auto-dismiss duration in milliseconds.
   * @default 4000
   */
  duration?: number;
}

/** Position of the toast container on screen. */
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ToastContextValue {
  showToast: (message: string, typeOrOptions?: ToastType | ShowToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Returns the `showToast` function from the nearest `ToastProvider`.
 * Must be called within a `<ToastProvider>` tree.
 */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a <ToastProvider>');
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Styles (injected via useInjectStyles)
// ---------------------------------------------------------------------------

const STYLE_ID = '4lt7ab-toast-animations';

const toastCSS = `
@keyframes toast-slide-in {
  from { opacity: 0; transform: translateX(100%); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes toast-fade-out {
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(100%); }
}
@media (prefers-reduced-motion: reduce) {
  @keyframes toast-slide-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes toast-fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
}
`;

// ---------------------------------------------------------------------------
// Color mapping
// ---------------------------------------------------------------------------

const typeColors: Record<ToastType, { bg: string; fg: string; border: string }> = {
  success: { bg: t.colorSuccessBg, fg: t.colorSuccess, border: t.colorSuccess },
  error:   { bg: t.colorErrorBg,   fg: t.colorError,   border: t.colorError },
  info:    { bg: t.colorInfoBg,    fg: t.colorInfo,     border: t.colorInfo },
  warning: { bg: t.colorWarningBg, fg: t.colorWarning,  border: t.colorWarning },
};

// ---------------------------------------------------------------------------
// Individual Toast
// ---------------------------------------------------------------------------

function ToastMessage({
  item,
  onDismiss,
}: {
  item: ToastItem;
  onDismiss: (id: string) => void;
}): React.JSX.Element {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, item.duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [item.duration]);

  const handleAnimationEnd = (): void => {
    if (exiting) {
      onDismiss(item.id);
    }
  };

  const colors = typeColors[item.type];

  return (
    <div
      role="status"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: t.spaceSm,
        padding: `${t.spaceSm} ${t.spaceMd}`,
        backgroundColor: t.colorSurfaceSolid,
        backgroundImage: `linear-gradient(${colors.bg}, ${colors.bg})`,
        color: colors.fg,
        borderRadius: t.radiusMd,
        borderLeft: `${t.borderWidthAccent} solid ${colors.border}`,
        boxShadow: t.shadowMd,
        fontSize: t.fontSizeSm,
        fontFamily: t.fontSans,
        fontWeight: t.fontWeightMedium,
        lineHeight: t.lineHeightBase,
        pointerEvents: 'auto',
        animation: exiting
          ? 'toast-fade-out 200ms ease forwards'
          : 'toast-slide-in 250ms ease',
        maxWidth: '24rem',
        wordBreak: 'break-word',
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      <span style={{ flex: 1 }}>{item.message}</span>
      <button
        onClick={() => setExiting(true)}
        aria-label="Dismiss"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          font: 'inherit',
          cursor: 'pointer',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.25rem',
          height: '1.25rem',
          borderRadius: t.radiusSm,
          color: colors.fg,
          opacity: 0.7,
          fontSize: t.fontSizeSm,
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------

function ToastContainer({
  toasts,
  onDismiss,
  position,
}: {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
  position: ToastPosition;
}): React.JSX.Element | null {
  useInjectStyles(STYLE_ID, toastCSS);

  if (toasts.length === 0) return null;

  const positionStyles: React.CSSProperties = {
    position: 'fixed',
    zIndex: t.zIndexToast,
    display: 'flex',
    flexDirection: 'column',
    gap: t.spaceSm,
    pointerEvents: 'none',
    ...(position.startsWith('top')    ? { top: t.spaceLg }    : { bottom: t.spaceLg }),
    ...(position.endsWith('right')    ? { right: t.spaceLg }  : { left: t.spaceLg }),
  };

  return createPortal(
    <div aria-live="polite" style={positionStyles}>
      {toasts.map((item) => (
        <ToastMessage key={item.id} item={item} onDismiss={onDismiss} />
      ))}
    </div>,
    document.body,
  );
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

/** Props for the ToastProvider context component. */
export interface ToastProviderProps {
  /** Application content. */
  children: ReactNode;
  /** Screen position of the toast stack.
   * @default 'top-right'
   */
  position?: ToastPosition;
}

let toastCounter = 0;

/**
 * Provides toast notification context to the component tree.
 * Renders a portal-based toast container with stacked, auto-dismissing messages.
 */
export function ToastProvider({
  children,
  position = 'top-right',
}: ToastProviderProps): React.JSX.Element {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string): void => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, typeOrOptions?: ToastType | ShowToastOptions): void => {
      const opts: ShowToastOptions =
        typeof typeOrOptions === 'string'
          ? { type: typeOrOptions }
          : typeOrOptions ?? {};

      const item: ToastItem = {
        id: `toast-${++toastCounter}`,
        message,
        type: opts.type ?? 'info',
        duration: opts.duration ?? 4000,
      };

      setToasts((prev) => [...prev, item]);
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismiss} position={position} />
    </ToastContext.Provider>
  );
}
