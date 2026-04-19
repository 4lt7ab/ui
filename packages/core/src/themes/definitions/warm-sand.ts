import type { ThemeDefinition } from '../types';

export const warmSandTheme: ThemeDefinition = {
  name: 'warm-sand',
  label: 'Warm Sand',
  tokens: {
    // Text
    colorText: '#e8e4de',
    colorTextSecondary: '#c4bdb4',
    colorTextMuted: '#9b8f82',
    colorTextInverse: '#1c1917',
    colorTextLink: '#c0673a',
    colorTextPlaceholder: '#9b8f82',
    colorTextDisabled: '#6b5f54',

    // Surfaces
    colorSurface: '#1c1917',
    colorSurfaceSolid: '#1c1917',
    colorSurfacePanel: '#1c1917',
    colorSurfaceRaised: '#252220',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.7)',
    colorSurfaceInput: '#201d1b',
    colorSurfaceDisabled: '#2e2a27',
    colorSurfacePage: '#1c1917',

    // Borders
    colorBorder: '#2e2a27',
    colorBorderFocused: '#c0673a',
    colorBorderError: '#ef4444',

    // Actions
    colorActionPrimary: '#c0673a',
    colorActionPrimaryHover: '#d4804f',
    colorActionSecondary: '#252220',
    colorActionSecondaryHover: '#2e2a27',
    colorActionDestructive: '#ef4444',
    colorActionDestructiveHover: '#f87171',

    // Feedback
    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.1)',
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.1)',
    colorError: '#ef4444',
    colorErrorBg: 'rgba(239, 68, 68, 0.1)',
    colorInfo: '#c0673a',
    colorInfoBg: 'rgba(192, 103, 58, 0.1)',

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
    focusRingColor: '#d4804f',
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

    // Layout sizing
    sizeSidebarExpanded: '16rem',
    sizeSidebarCollapsed: '3.5rem',
    sizeRightPanelDefault: '20rem',
  },
};
