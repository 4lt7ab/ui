import type { ThemeDefinition } from '../types';

export const blackHoleTheme: ThemeDefinition = {
  name: 'black-hole',
  label: 'Black Hole',
  tokens: {
    // ── Text ──
    colorText: '#e2dff0',
    colorTextSecondary: '#9b95b0',
    colorTextMuted: '#5e576e',
    colorTextInverse: '#050508',
    colorTextLink: '#a78bfa',
    colorTextPlaceholder: '#5e576e',
    colorTextDisabled: '#3a3548',

    // ── Surfaces ──
    colorSurface: 'transparent',
    colorSurfacePanel: '#08070d',
    colorSurfaceRaised: 'rgba(16, 14, 24, 0.85)',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.92)',
    colorSurfaceInput: 'rgba(12, 10, 20, 0.9)',
    colorSurfaceDisabled: 'rgba(22, 20, 32, 0.8)',
    colorSurfacePage: '#050508',

    // ── Borders ──
    colorBorder: '#1e1a2e',
    colorBorderFocused: '#a78bfa',
    colorBorderError: '#f87171',

    // ── Actions ──
    colorActionPrimary: '#a78bfa',
    colorActionPrimaryHover: '#c4b5fd',
    colorActionSecondary: '#110f1a',
    colorActionSecondaryHover: '#1e1a2e',
    colorActionDestructive: '#f87171',
    colorActionDestructiveHover: '#fca5a5',

    // ── Feedback ──
    colorSuccess: '#34d399',
    colorSuccessBg: 'rgba(52, 211, 153, 0.08)',
    colorWarning: '#fbbf24',
    colorWarningBg: 'rgba(251, 191, 36, 0.08)',
    colorError: '#f87171',
    colorErrorBg: 'rgba(248, 113, 113, 0.08)',
    colorInfo: '#a78bfa',
    colorInfoBg: 'rgba(167, 139, 250, 0.08)',

    // ── Spacing ──
    spaceXs: '0.25rem',
    spaceSm: '0.5rem',
    spaceMd: '1rem',
    spaceLg: '1.5rem',
    spaceXl: '2rem',
    space2xl: '3rem',

    // ── Radii ──
    radiusSm: '0.25rem',
    radiusMd: '0.375rem',
    radiusLg: '0.5rem',
    radiusFull: '9999px',

    // ── Shadows ──
    shadowSm: '0 0 6px rgba(167, 139, 250, 0.08)',
    shadowMd: '0 0 12px rgba(167, 139, 250, 0.12)',
    shadowLg: '0 0 24px rgba(167, 139, 250, 0.16)',

    // ── Typography — font families ──
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontSerif: "'Space Grotesk', system-ui, sans-serif",
    fontMono: "'Fira Code', ui-monospace, monospace",

    // ── Typography — font sizes ──
    fontSizeXs: '0.75rem',
    fontSizeSm: '0.875rem',
    fontSizeBase: '1rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '1.875rem',

    // ── Typography — line heights ──
    lineHeightTight: '1.25',
    lineHeightBase: '1.5',
    lineHeightRelaxed: '1.625',

    // ── Typography — font weights ──
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
    fontWeightBold: '700',

    // ── Typography — letter spacing ──
    letterSpacingTight: '-0.025em',
    letterSpacingNormal: '0em',
    letterSpacingWide: '0.025em',

    // ── Focus ──
    focusRingColor: '#a78bfa',
    focusRingWidth: '2px',
    focusRingOffset: '2px',
  },

  css: /* css */ `
    [data-theme="black-hole"] body,
    [data-theme="black-hole"] {
      background-color: #050508;
    }
  `,
};
