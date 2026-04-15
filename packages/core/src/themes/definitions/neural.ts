import type { ThemeDefinition } from '../types';

export const neuralTheme: ThemeDefinition = {
  name: 'neural',
  label: 'Neural',
  tokens: {
    colorText: '#e0e8ff',
    colorTextSecondary: '#a8b8d8',
    colorTextMuted: '#64748b',
    colorTextInverse: '#0a0a1a',
    colorTextLink: '#38bdf8',
    colorTextPlaceholder: '#64748b',
    colorTextDisabled: '#3a4a5a',

    colorSurface: 'transparent',
    colorSurfaceSolid: '#0a0a1a',
    colorSurfacePanel: '#0a0a1a',
    colorSurfaceRaised: 'rgba(10, 10, 26, 0.85)',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.9)',
    colorSurfaceInput: 'rgba(14, 14, 34, 0.9)',
    colorSurfaceDisabled: 'rgba(26, 26, 58, 0.8)',
    colorSurfacePage: '#0a0a1a',

    colorBorder: '#1a1a3a',
    colorBorderFocused: '#38bdf8',
    colorBorderError: '#ff4444',

    colorActionPrimary: '#38bdf8',
    colorActionPrimaryHover: '#5ccdfb',
    colorActionSecondary: '#12122a',
    colorActionSecondaryHover: '#1a1a3a',
    colorActionDestructive: '#ff4444',
    colorActionDestructiveHover: '#ff6666',

    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.08)',
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.08)',
    colorError: '#ff4444',
    colorErrorBg: 'rgba(255, 68, 68, 0.08)',
    colorInfo: '#38bdf8',
    colorInfoBg: 'rgba(56, 189, 248, 0.08)',

    spaceXs: '0.25rem',
    spaceSm: '0.5rem',
    spaceMd: '1rem',
    spaceLg: '1.5rem',
    spaceXl: '2rem',
    space2xl: '3rem',

    radiusSm: '0.25rem',
    radiusMd: '0.375rem',
    radiusLg: '0.5rem',
    radiusFull: '9999px',

    shadowSm: '0 0 4px rgba(56, 189, 248, 0.1)',
    shadowMd: '0 0 8px rgba(56, 189, 248, 0.15)',
    shadowLg: '0 0 16px rgba(56, 189, 248, 0.2)',

    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontSerif: "'Space Grotesk', system-ui, sans-serif",
    fontMono: "'Fira Code', ui-monospace, monospace",

    // Font sizes
    fontSizeXs: '0.75rem',
    fontSizeSm: '0.875rem',
    fontSizeBase: '1rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '1.875rem',

    // Line heights
    lineHeightTight: '1.25',
    lineHeightBase: '1.5',
    lineHeightRelaxed: '1.625',

    // Font weights
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
    fontWeightBold: '700',

    // Letter spacing
    letterSpacingTight: '-0.025em',
    letterSpacingNormal: '0em',
    letterSpacingWide: '0.025em',

    // Focus
    focusRingColor: '#38bdf8',
    focusRingWidth: '2px',
    focusRingOffset: '2px',

    // Transitions
    transitionFast: '100ms ease',
    transitionBase: '150ms ease',
    transitionSlow: '250ms ease',

    // Border widths
    borderWidthDefault: '1px',
    borderWidthThick: '2px',
    borderWidthAccent: '3px',

    // Z-index
    zIndexDropdown: '50',
    zIndexSticky: '100',
    zIndexModal: '200',
    zIndexToast: '500',
    zIndexMax: '9999',
  },

  css: /* css */ `
    [data-theme="neural"] body,
    [data-theme="neural"] {
      background-color: #0a0a1a;
    }
  `,

};
