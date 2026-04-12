import type { ThemeDefinition } from '../types';

export const coralTheme: ThemeDefinition = {
  name: 'coral',
  label: 'Coral',
  tokens: {
    // Text
    colorText: '#f0e0d8',
    colorTextSecondary: '#ccb8ac',
    colorTextMuted: '#a08878',
    colorTextInverse: '#1f1714',
    colorTextLink: '#f08060',
    colorTextPlaceholder: '#a08878',
    colorTextDisabled: '#6e5c50',

    // Surfaces
    colorSurface: '#1f1714',
    colorSurfacePanel: '#1f1714',
    colorSurfaceRaised: '#291f1b',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.7)',
    colorSurfaceInput: '#241b17',
    colorSurfaceDisabled: '#3a2820',

    // Borders
    colorBorder: '#3a2820',
    colorBorderFocused: '#f08060',
    colorBorderError: '#ef4444',

    // Actions
    colorActionPrimary: '#f08060',
    colorActionPrimaryHover: '#f49878',
    colorActionSecondary: '#291f1b',
    colorActionSecondaryHover: '#3a2820',
    colorActionDestructive: '#ef4444',
    colorActionDestructiveHover: '#f87171',

    // Feedback
    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.1)',
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.1)',
    colorError: '#ef4444',
    colorErrorBg: 'rgba(239, 68, 68, 0.1)',
    colorInfo: '#f08060',
    colorInfoBg: 'rgba(240, 128, 96, 0.1)',

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

    // Focus
    focusRingColor: '#f49878',
    focusRingWidth: '2px',
    focusRingOffset: '2px',
  },
};
