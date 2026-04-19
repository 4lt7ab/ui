import { forwardRef } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { IconInfo, IconWarning, IconError, IconCheckCircle } from '../../../icons/icons';
import { IconButton } from '../../atoms/IconButton';
import type { ReactNode } from 'react';

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
  /** Optional leading icon. Defaults to a variant-appropriate icon. */
  icon?: ReactNode;
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
 * Slides in from the top. Consumers own dismiss timing — wrap `onDismiss`
 * in `useEffect` + `setTimeout` if auto-dismiss is needed.
 */
export const AlertBanner: React.ForwardRefExoticComponent<Omit<AlertBannerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, AlertBannerProps>(
  function AlertBanner(
    { variant, children, onDismiss, icon },
    ref,
  ): React.JSX.Element {
    useInjectStyles(STYLE_ID, alertBannerCSS);

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
        }}
      >
        {resolvedIcon && (
          <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {resolvedIcon}
          </span>
        )}
        <span style={{ flex: 1 }}>{children}</span>
        {onDismiss && (
          <IconButton
            icon="close"
            aria-label="Dismiss"
            onClick={onDismiss}
            size="sm"
          />
        )}
      </div>
    );
  },
);
