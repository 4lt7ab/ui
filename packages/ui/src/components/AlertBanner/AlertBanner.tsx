import { forwardRef, useEffect, useRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { IconInfo, IconWarning, IconError, IconCheckCircle } from '../../icons/icons';
import type { CSSProperties, ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Severity variant controlling banner color. */
export type AlertBannerVariant = 'info' | 'warning' | 'error' | 'success';

/** Props for the AlertBanner component. */
export interface AlertBannerProps {
  /** Severity variant controlling color. */
  variant: AlertBannerVariant;
  /** Message content. */
  children: ReactNode;
  /** If provided, shows a dismiss button and is called on dismiss. */
  onDismiss?: () => void;
  /** Milliseconds before auto-dismissing (calls onDismiss). */
  autoDismiss?: number;
  /** Optional leading icon. Defaults to a variant-appropriate icon. */
  icon?: ReactNode;
  /** Additional inline styles. */
  style?: CSSProperties;
}

// ---------------------------------------------------------------------------
// Styles (injected via useInjectStyles)
// ---------------------------------------------------------------------------

const STYLE_ID = '4lt7ab-alert-banner';

const alertBannerCSS = `
@keyframes alert-banner-slide-in {
  from { opacity: 0; transform: translateY(-100%); }
  to   { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  @keyframes alert-banner-slide-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
}
.alert-banner-dismiss:hover {
  opacity: 1 !important;
}
`;

// ---------------------------------------------------------------------------
// Color mapping
// ---------------------------------------------------------------------------

const variantColors: Record<AlertBannerVariant, { bg: string; fg: string; border: string }> = {
  info:    { bg: t.colorInfoBg,    fg: t.colorInfo,    border: t.colorInfo },
  warning: { bg: t.colorWarningBg, fg: t.colorWarning, border: t.colorWarning },
  error:   { bg: t.colorErrorBg,   fg: t.colorError,   border: t.colorError },
  success: { bg: t.colorSuccessBg, fg: t.colorSuccess, border: t.colorSuccess },
};

// ---------------------------------------------------------------------------
// Default icons per variant
// ---------------------------------------------------------------------------

const defaultIcons: Record<AlertBannerVariant, ReactNode> = {
  info:    <IconInfo size={20} />,
  warning: <IconWarning size={20} />,
  error:   <IconError size={20} />,
  success: <IconCheckCircle size={20} />,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Full-width dismissable notification banner with severity variants.
 * Slides in from the top with a configurable auto-dismiss timer.
 */
export const AlertBanner: React.ForwardRefExoticComponent<Omit<AlertBannerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, AlertBannerProps>(
  function AlertBanner(
    { variant, children, onDismiss, autoDismiss, icon, style },
    ref,
  ): React.JSX.Element {
    useInjectStyles(STYLE_ID, alertBannerCSS);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      if (autoDismiss && onDismiss) {
        timerRef.current = setTimeout(onDismiss, autoDismiss);
        return () => {
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      }
    }, [autoDismiss, onDismiss]);

    const colors = variantColors[variant];
    const resolvedIcon = icon !== undefined ? icon : defaultIcons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: t.spaceSm,
          width: '100%',
          padding: `${t.spaceSm} ${t.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${t.borderWidthThick} solid ${colors.border}`,
          fontFamily: t.fontSans,
          fontSize: t.fontSizeSm,
          fontWeight: t.fontWeightMedium,
          lineHeight: t.lineHeightBase,
          boxSizing: 'border-box',
          animation: 'alert-banner-slide-in 250ms ease',
          ...style,
        }}
      >
        {resolvedIcon && (
          <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {resolvedIcon}
          </span>
        )}
        <span style={{ flex: 1 }}>{children}</span>
        {onDismiss && (
          <button
            className="alert-banner-dismiss"
            onClick={onDismiss}
            aria-label="Dismiss"
            style={{
              all: 'unset',
              cursor: 'pointer',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.5rem',
              height: '1.5rem',
              borderRadius: t.radiusSm,
              color: colors.fg,
              opacity: 0.7,
              fontSize: t.fontSizeLg,
              lineHeight: 1,
            }}
          >
            &#215;
          </button>
        )}
      </div>
    );
  },
);
