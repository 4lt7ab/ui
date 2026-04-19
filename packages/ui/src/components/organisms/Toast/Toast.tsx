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
/* Dismiss timer: drains from full to zero width over the toast's duration. */
@keyframes toast-timer-drain {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}
[data-toast-timer] {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  transform-origin: left center;
  animation: toast-timer-drain var(--toast-duration, 4000ms) linear forwards;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
[data-toast-root]:hover [data-toast-timer],
[data-toast-root][data-toast-paused="true"] [data-toast-timer] {
  animation-play-state: paused;
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
  /* Freeze the timer bar at full width — the toast still dismisses via setTimeout. */
  [data-toast-timer] {
    animation: none;
    transform: scaleX(1);
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
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /* When the timer started (or last resumed). Used to compute remaining time on pause. */
  const startedAtRef = useRef<number>(0);
  const remainingRef = useRef<number>(item.duration);

  const autoDismiss = item.duration > 0;

  const clearTimer = useCallback((): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback((): void => {
    if (!autoDismiss || remainingRef.current <= 0) return;
    clearTimer();
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, remainingRef.current);
    setPaused(false);
  }, [autoDismiss, clearTimer]);

  const pauseTimer = useCallback((): void => {
    if (!autoDismiss || !timerRef.current) return;
    const elapsed = Date.now() - startedAtRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    clearTimer();
    setPaused(true);
  }, [autoDismiss, clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnimationEnd = (): void => {
    if (exiting) {
      onDismiss(item.id);
    }
  };

  const colors = typeColors[item.type];

  return (
    <div
      role="status"
      data-toast-root=""
      data-toast-paused={paused || undefined}
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
      onFocus={pauseTimer}
      onBlur={startTimer}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: t.spaceSm,
        padding: `${t.spaceSm} ${t.spaceMd}`,
        paddingBottom: autoDismiss ? `calc(${t.spaceSm} + 2px)` : t.spaceSm,
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
        overflow: 'hidden',
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
      {autoDismiss && (
        <span
          data-toast-timer=""
          aria-hidden="true"
          style={{
            background: colors.fg,
            opacity: 0.5,
            ['--toast-duration' as string]: `${item.duration}ms`,
          }}
        />
      )}
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
