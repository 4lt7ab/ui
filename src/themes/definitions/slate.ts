import type { ThemeDefinition } from '../types';

export const slateTheme: ThemeDefinition = {
  name: 'slate',
  label: 'Slate',
  tokens: {
    // Text
    colorText: '#e0e3e8',
    colorTextSecondary: '#b0b8c4',
    colorTextMuted: '#8891a0',
    colorTextInverse: '#1a1d24',
    colorTextLink: '#7ba3d4',
    colorTextPlaceholder: '#8891a0',
    colorTextDisabled: '#5a6270',

    // Surfaces
    colorSurface: '#1a1d24',
    colorSurfaceRaised: '#22262e',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.7)',
    colorSurfaceInput: '#1e2229',
    colorSurfaceDisabled: '#2a2f38',
    colorSurfacePage: '#1a1d24',

    // Borders
    colorBorder: '#2a2f38',
    colorBorderFocused: '#7ba3d4',
    colorBorderError: '#ef4444',

    // Actions
    colorActionPrimary: '#7ba3d4',
    colorActionPrimaryHover: '#9ab8e0',
    colorActionSecondary: '#22262e',
    colorActionSecondaryHover: '#2a2f38',
    colorActionDestructive: '#ef4444',
    colorActionDestructiveHover: '#f87171',

    // Feedback
    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.1)',
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.1)',
    colorError: '#ef4444',
    colorErrorBg: 'rgba(239, 68, 68, 0.1)',
    colorInfo: '#7ba3d4',
    colorInfoBg: 'rgba(123, 163, 212, 0.1)',

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
  },
};
