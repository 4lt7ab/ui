import type { ThemeDefinition } from '../types';

export const mossTheme: ThemeDefinition = {
  name: 'moss',
  label: 'Moss',
  tokens: {
    // Text
    colorText: '#dce5da',
    colorTextSecondary: '#b4c0af',
    colorTextMuted: '#7d8b75',
    colorTextInverse: '#141a14',
    colorTextLink: '#6aad7a',
    colorTextPlaceholder: '#7d8b75',
    colorTextDisabled: '#556050',

    // Surfaces
    colorSurface: '#141a14',
    colorSurfaceSolid: '#141a14',
    colorSurfacePanel: '#141a14',
    colorSurfaceRaised: '#1c231c',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.7)',
    colorSurfaceInput: '#181f18',
    colorSurfaceDisabled: '#243024',
    colorSurfacePage: '#141a14',

    // Borders
    colorBorder: '#243024',
    colorBorderFocused: '#6aad7a',
    colorBorderError: '#ef4444',

    // Actions
    colorActionPrimary: '#6aad7a',
    colorActionPrimaryHover: '#82c090',
    colorActionSecondary: '#1c231c',
    colorActionSecondaryHover: '#243024',
    colorActionDestructive: '#ef4444',
    colorActionDestructiveHover: '#f87171',

    // Feedback
    colorSuccess: '#6aad7a',
    colorSuccessBg: 'rgba(106, 173, 122, 0.1)',
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.1)',
    colorError: '#ef4444',
    colorErrorBg: 'rgba(239, 68, 68, 0.1)',
    colorInfo: '#6aad7a',
    colorInfoBg: 'rgba(106, 173, 122, 0.1)',

    // Spacing
    spaceXs: '0.25rem',
    spaceSm: '0.5rem',
    spaceMd: '1rem',
    spaceLg: '1.5rem',
    spaceXl: '2rem',
    space2xl: '3rem',

    // Radii
    radiusSm: '0.25rem',
    radiusMd: '0.375rem',
    radiusLg: '0.5rem',
    radiusFull: '9999px',

    // Shadows
    shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.2)',
    shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
    shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)',

    // Typography
    fontSans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSerif: "'Lora', Georgia, 'Times New Roman', serif",
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
    focusRingColor: '#82c090',
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
};
