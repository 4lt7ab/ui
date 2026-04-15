import type { ThemeDefinition } from '../types';

export const pipboyTheme: ThemeDefinition = {
  name: 'pipboy',
  label: 'Pip-Boy',
  tokens: {
    colorText: '#33ff33',
    colorTextSecondary: '#66cc66',
    colorTextMuted: '#339933',
    colorTextInverse: '#0a0a0a',
    colorTextLink: '#ffb347',
    colorTextPlaceholder: '#339933',
    colorTextDisabled: '#1a4a1a',

    colorSurface: 'transparent',
    colorSurfaceSolid: '#0a0a0a',
    colorSurfacePanel: '#0a0a0a',
    colorSurfaceRaised: 'rgba(10, 10, 10, 0.85)',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.9)',
    colorSurfaceInput: 'rgba(13, 20, 13, 0.9)',
    colorSurfaceDisabled: 'rgba(26, 46, 26, 0.8)',
    colorSurfacePage: '#0a0a0a',

    colorBorder: '#1a2e1a',
    colorBorderFocused: '#ffb347',
    colorBorderError: '#ff4444',

    colorActionPrimary: '#ffb347',
    colorActionPrimaryHover: '#ffc46b',
    colorActionSecondary: '#0f1a0f',
    colorActionSecondaryHover: '#1a2e1a',
    colorActionDestructive: '#ff4444',
    colorActionDestructiveHover: '#ff6666',

    colorSuccess: '#33ff33',
    colorSuccessBg: 'rgba(51, 255, 51, 0.08)',
    colorWarning: '#ffb347',
    colorWarningBg: 'rgba(255, 179, 71, 0.08)',
    colorError: '#ff4444',
    colorErrorBg: 'rgba(255, 68, 68, 0.08)',
    colorInfo: '#33ff33',
    colorInfoBg: 'rgba(51, 255, 51, 0.08)',

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

    shadowSm: '0 0 4px rgba(51, 255, 51, 0.1)',
    shadowMd: '0 0 8px rgba(51, 255, 51, 0.15)',
    shadowLg: '0 0 16px rgba(51, 255, 51, 0.2)',

    fontSans: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontSerif: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontMono: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",

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
    focusRingColor: '#33ff33',
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
    /* Base background for canvas to render on top of */
    [data-theme="pipboy"] body,
    [data-theme="pipboy"] {
      background-color: #0a0a0a;
    }

    /* Phosphor glow on text */
    [data-theme="pipboy"] {
      text-shadow: 0 0 8px rgba(51, 255, 51, 0.4);
    }

    [data-theme="pipboy"] h1,
    [data-theme="pipboy"] h2,
    [data-theme="pipboy"] h3 {
      text-shadow: 0 0 12px rgba(51, 255, 51, 0.6);
    }

    /* CRT scanline overlay */
    [data-theme="pipboy"]::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.15) 2px,
        rgba(0, 0, 0, 0.15) 4px
      );
      pointer-events: none;
      z-index: 1;
    }
  `,

};
