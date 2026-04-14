import type { ThemeDefinition } from '../types';

export const pacmanTheme: ThemeDefinition = {
  name: 'pacman',
  label: 'Pac-Man',
  tokens: {
    colorText: '#e0e0e0',
    colorTextSecondary: '#b0b0b0',
    colorTextMuted: '#5555ff',
    colorTextInverse: '#000000',
    colorTextLink: '#ffff00',
    colorTextPlaceholder: '#5555ff',
    colorTextDisabled: '#333366',

    colorSurface: 'transparent',
    colorSurfaceSolid: '#000000',
    colorSurfacePanel: '#000000',
    colorSurfaceRaised: 'rgba(0, 0, 0, 0.85)',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.9)',
    colorSurfaceInput: 'rgba(10, 10, 42, 0.9)',
    colorSurfaceDisabled: 'rgba(26, 26, 74, 0.8)',
    colorSurfacePage: '#000000',

    colorBorder: '#1a1a4a',
    colorBorderFocused: '#ffff00',
    colorBorderError: '#ff4444',

    colorActionPrimary: '#ffff00',
    colorActionPrimaryHover: '#ffff66',
    colorActionSecondary: '#0a0a2a',
    colorActionSecondaryHover: '#1a1a4a',
    colorActionDestructive: '#ff4444',
    colorActionDestructiveHover: '#ff6666',

    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.1)',
    colorWarning: '#ffb852',
    colorWarningBg: 'rgba(255, 184, 82, 0.1)',
    colorError: '#ff4444',
    colorErrorBg: 'rgba(255, 68, 68, 0.1)',
    colorInfo: '#00ffff',
    colorInfoBg: 'rgba(0, 255, 255, 0.1)',

    spaceXs: '0.25rem',
    spaceSm: '0.5rem',
    spaceMd: '1rem',
    spaceLg: '1.5rem',
    spaceXl: '2rem',
    space2xl: '3rem',

    radiusSm: '0',
    radiusMd: '0',
    radiusLg: '0',
    radiusFull: '9999px',

    shadowSm: '0 0 4px rgba(33, 33, 222, 0.2)',
    shadowMd: '0 0 8px rgba(33, 33, 222, 0.3)',
    shadowLg: '0 0 16px rgba(255, 255, 0, 0.2)',

    fontSans: "'Press Start 2P', monospace",
    fontSerif: "'Press Start 2P', monospace",
    fontMono: "'Press Start 2P', monospace",

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
    focusRingColor: '#ffff00',
    focusRingWidth: '2px',
    focusRingOffset: '2px',
  },

  css: /* css */ `
    [data-theme="pacman"] body,
    [data-theme="pacman"] {
      background-color: #000000;
    }

    /* Scale down pixel font headings */
    [data-theme="pacman"] h1 { font-size: clamp(1.1rem, 3vw, 1.5rem); line-height: 1.6; letter-spacing: 0.5px; }
    [data-theme="pacman"] h2 { font-size: clamp(0.9rem, 2.5vw, 1.15rem); line-height: 1.6; letter-spacing: 0.5px; }
    [data-theme="pacman"] h3 { font-size: 0.85rem; line-height: 1.6; letter-spacing: 0.5px; }

    /* Maze-wall borders on buttons */
    [data-theme="pacman"] button {
      border: 3px solid #2121de;
      border-radius: 0;
      box-shadow: 0 0 8px rgba(33, 33, 222, 0.3);
    }

    [data-theme="pacman"] button:hover {
      box-shadow: 0 0 16px rgba(255, 255, 0, 0.4);
      border-color: #ffff00;
    }

    /* Links glow like power pellets */
    [data-theme="pacman"] a:hover {
      text-shadow: 0 0 8px rgba(255, 255, 0, 0.6);
    }

    /* Pixelated images */
    [data-theme="pacman"] img {
      image-rendering: pixelated;
    }
  `,

};
