import type { ThemeDefinition } from '../types';

export const synthwaveTheme: ThemeDefinition = {
  name: 'synthwave',
  label: 'Synthwave',
  tokens: {
    // Text — light purple on deep space
    colorText: '#e0d6f6',
    colorTextSecondary: '#a0c4e8',
    colorTextMuted: '#5a7a99',
    colorTextInverse: '#06020f',
    colorTextLink: '#00fff5',
    colorTextPlaceholder: '#4a6a88',
    colorTextDisabled: '#3a5a78',

    // Surfaces — base is transparent so canvas shows through layouts
    colorSurface: 'transparent',
    colorSurfacePanel: '#0c081c',
    colorSurfaceRaised: 'rgba(12, 8, 28, 0.75)',
    colorSurfaceOverlay: 'rgba(6, 2, 15, 0.9)',
    colorSurfaceInput: 'rgba(14, 10, 32, 0.85)',
    colorSurfaceDisabled: 'rgba(22, 18, 48, 0.7)',
    colorSurfacePage: '#06020f',

    // Borders — cyan glow
    colorBorder: '#00fff540',
    colorBorderFocused: '#ff2d95',
    colorBorderError: '#ff4444',

    // Actions — hot pink primary, cyan secondary
    colorActionPrimary: '#ff2d95',
    colorActionPrimaryHover: '#ff5cb0',
    colorActionSecondary: '#0e0e24',
    colorActionSecondaryHover: '#1a1a3a',
    colorActionDestructive: '#ff4444',
    colorActionDestructiveHover: '#ff6666',

    // Feedback — neon everything
    colorSuccess: '#39ff14',
    colorSuccessBg: 'rgba(57, 255, 20, 0.08)',
    colorWarning: '#ffe44d',
    colorWarningBg: 'rgba(255, 228, 77, 0.08)',
    colorError: '#ff4080',
    colorErrorBg: 'rgba(255, 64, 128, 0.08)',
    colorInfo: '#00fff5',
    colorInfoBg: 'rgba(0, 255, 245, 0.08)',

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

    // Shadows — colored glow
    shadowSm: '0 0 8px rgba(0, 255, 245, 0.15), 0 0 2px rgba(255, 45, 149, 0.1)',
    shadowMd: '0 0 16px rgba(0, 255, 245, 0.2), 0 0 4px rgba(255, 45, 149, 0.15)',
    shadowLg: '0 0 32px rgba(0, 255, 245, 0.25), 0 0 8px rgba(255, 45, 149, 0.2)',

    // Typography
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
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
    focusRingColor: '#ff2d95',
    focusRingWidth: '2px',
    focusRingOffset: '2px',
  },

  css: /* css */ `
    /* Base background */
    [data-theme="synthwave"] body,
    [data-theme="synthwave"] {
      background-color: #06020f;
    }

    /* ── Border glow pulse ── */
    @keyframes glow-pulse {
      0%, 100% {
        box-shadow:
          0 0 4px rgba(0, 255, 245, 0.2),
          0 0 8px rgba(0, 255, 245, 0.1);
      }
      50% {
        box-shadow:
          0 0 8px rgba(0, 255, 245, 0.4),
          0 0 20px rgba(0, 255, 245, 0.15),
          0 0 4px rgba(255, 45, 149, 0.2);
      }
    }

    [data-theme="synthwave"] [style*="surface-raised"],
    [data-theme="synthwave"] [data-variant],
    [data-theme="synthwave"] button {
      animation: glow-pulse 3s ease-in-out infinite;
    }

    /* ── Focused elements get hot pink glow ── */
    @keyframes focus-strobe {
      0%, 100% {
        box-shadow:
          0 0 4px rgba(255, 45, 149, 0.4),
          0 0 12px rgba(255, 45, 149, 0.2);
      }
      50% {
        box-shadow:
          0 0 8px rgba(255, 45, 149, 0.6),
          0 0 24px rgba(255, 45, 149, 0.3),
          0 0 4px rgba(0, 255, 245, 0.3);
      }
    }

    [data-theme="synthwave"] input:focus,
    [data-theme="synthwave"] textarea:focus,
    [data-theme="synthwave"] select:focus,
    [data-theme="synthwave"] button:focus-visible {
      animation: focus-strobe 2s ease-in-out infinite;
      outline: 1px solid #ff2d95;
      outline-offset: 1px;
    }

    /* ── Primary buttons ── */
    @keyframes primary-glow {
      0%, 100% {
        box-shadow:
          0 0 8px rgba(255, 45, 149, 0.4),
          0 0 20px rgba(255, 45, 149, 0.15);
      }
      33% {
        box-shadow:
          0 0 12px rgba(0, 255, 245, 0.4),
          0 0 24px rgba(0, 255, 245, 0.15);
      }
      66% {
        box-shadow:
          0 0 10px rgba(57, 255, 20, 0.35),
          0 0 22px rgba(255, 102, 0, 0.15);
      }
    }

    [data-theme="synthwave"] button[data-variant="primary"] {
      animation: primary-glow 4s ease-in-out infinite;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    }

    /* ── Link text glow ── */
    [data-theme="synthwave"] a,
    [data-theme="synthwave"] [style*="color-text-link"] {
      text-shadow: 0 0 6px rgba(0, 255, 245, 0.4);
    }

    /* ── Scanline overlay ── */
    [data-theme="synthwave"]::after {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      background: repeating-linear-gradient(
        transparent 0px,
        transparent 2px,
        rgba(0, 255, 245, 0.015) 2px,
        rgba(0, 255, 245, 0.015) 4px
      );
    }
  `,

};
