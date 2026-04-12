// src/utils/useFocusTrap.ts
import { useEffect } from "react";
var FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
}
function useFocusTrap(ref) {
  useEffect(() => {
    const container = ref.current;
    if (!container)
      return;
    const handleKeyDown = (e) => {
      if (e.key !== "Tab")
        return;
      const focusable = getFocusableElements(container);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first || !container.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !container.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [ref]);
}
// ../core/dist/index.js
import { useEffect as useEffect2 } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect as useEffect22,
  useMemo,
  useRef,
  useState
} from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
function useInjectStyles(id, css) {
  useEffect2(() => {
    let el = document.getElementById(id);
    if (el) {
      if (el.textContent !== css) {
        el.textContent = css;
      }
      return;
    }
    el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
var colors = {
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  gray950: "#030712",
  blue50: "#eff6ff",
  blue100: "#dbeafe",
  blue200: "#bfdbfe",
  blue300: "#93c5fd",
  blue400: "#60a5fa",
  blue500: "#3b82f6",
  blue600: "#2563eb",
  blue700: "#1d4ed8",
  blue800: "#1e40af",
  blue900: "#1e3a8a",
  red50: "#fef2f2",
  red100: "#fee2e2",
  red400: "#f87171",
  red500: "#ef4444",
  red600: "#dc2626",
  red700: "#b91c1c",
  green50: "#f0fdf4",
  green100: "#dcfce7",
  green400: "#4ade80",
  green500: "#22c55e",
  green600: "#16a34a",
  green700: "#15803d",
  amber50: "#fffbeb",
  amber100: "#fef3c7",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  amber600: "#d97706",
  white: "#ffffff",
  black: "#000000"
};
var spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem"
};
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  none: "none"
};
var typography = {
  fontFamily: {
    sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
    serif: ["Lora", "Georgia", "Times New Roman", "serif"],
    mono: ["Fira Code", "ui-monospace", "monospace"]
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem"
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em"
  }
};
var semantic = {
  colorText: "var(--color-text)",
  colorTextSecondary: "var(--color-text-secondary)",
  colorTextMuted: "var(--color-text-muted)",
  colorTextInverse: "var(--color-text-inverse)",
  colorTextLink: "var(--color-text-link)",
  colorTextPlaceholder: "var(--color-text-placeholder)",
  colorTextDisabled: "var(--color-text-disabled)",
  colorSurface: "var(--color-surface)",
  colorSurfacePanel: "var(--color-surface-panel)",
  colorSurfaceRaised: "var(--color-surface-raised)",
  colorSurfaceOverlay: "var(--color-surface-overlay)",
  colorSurfaceInput: "var(--color-surface-input)",
  colorSurfaceDisabled: "var(--color-surface-disabled)",
  colorSurfacePage: "var(--color-surface-page)",
  colorBorder: "var(--color-border)",
  colorBorderFocused: "var(--color-border-focused)",
  colorBorderError: "var(--color-border-error)",
  colorActionPrimary: "var(--color-action-primary)",
  colorActionPrimaryHover: "var(--color-action-primary-hover)",
  colorActionSecondary: "var(--color-action-secondary)",
  colorActionSecondaryHover: "var(--color-action-secondary-hover)",
  colorActionDestructive: "var(--color-action-destructive)",
  colorActionDestructiveHover: "var(--color-action-destructive-hover)",
  colorSuccess: "var(--color-success)",
  colorSuccessBg: "var(--color-success-bg)",
  colorWarning: "var(--color-warning)",
  colorWarningBg: "var(--color-warning-bg)",
  colorError: "var(--color-error)",
  colorErrorBg: "var(--color-error-bg)",
  colorInfo: "var(--color-info)",
  colorInfoBg: "var(--color-info-bg)",
  spaceXs: "var(--space-xs)",
  spaceSm: "var(--space-sm)",
  spaceMd: "var(--space-md)",
  spaceLg: "var(--space-lg)",
  spaceXl: "var(--space-xl)",
  space2xl: "var(--space-2xl)",
  radiusSm: "var(--radius-sm)",
  radiusMd: "var(--radius-md)",
  radiusLg: "var(--radius-lg)",
  radiusFull: "var(--radius-full)",
  shadowSm: "var(--shadow-sm)",
  shadowMd: "var(--shadow-md)",
  shadowLg: "var(--shadow-lg)",
  fontSans: "var(--font-sans)",
  fontSerif: "var(--font-serif)",
  fontMono: "var(--font-mono)",
  fontSizeXs: "var(--font-size-xs)",
  fontSizeSm: "var(--font-size-sm)",
  fontSizeBase: "var(--font-size-base)",
  fontSizeLg: "var(--font-size-lg)",
  fontSizeXl: "var(--font-size-xl)",
  fontSize2xl: "var(--font-size-2xl)",
  fontSize3xl: "var(--font-size-3xl)",
  lineHeightTight: "var(--line-height-tight)",
  lineHeightBase: "var(--line-height-base)",
  lineHeightRelaxed: "var(--line-height-relaxed)",
  fontWeightNormal: "var(--font-weight-normal)",
  fontWeightMedium: "var(--font-weight-medium)",
  fontWeightSemibold: "var(--font-weight-semibold)",
  fontWeightBold: "var(--font-weight-bold)",
  letterSpacingTight: "var(--letter-spacing-tight)",
  letterSpacingNormal: "var(--letter-spacing-normal)",
  letterSpacingWide: "var(--letter-spacing-wide)",
  focusRingColor: "var(--focus-ring-color)",
  focusRingWidth: "var(--focus-ring-width)",
  focusRingOffset: "var(--focus-ring-offset)"
};
function tokenToCssProperty(key) {
  return "--" + key.replace(/([A-Z0-9])/g, "-$1").toLowerCase();
}
var synthwaveTheme = {
  name: "synthwave",
  label: "Synthwave",
  tokens: {
    colorText: "#e0d6f6",
    colorTextSecondary: "#a0c4e8",
    colorTextMuted: "#5a7a99",
    colorTextInverse: "#06020f",
    colorTextLink: "#00fff5",
    colorTextPlaceholder: "#4a6a88",
    colorTextDisabled: "#3a5a78",
    colorSurface: "transparent",
    colorSurfacePanel: "#0c081c",
    colorSurfaceRaised: "rgba(12, 8, 28, 0.75)",
    colorSurfaceOverlay: "rgba(6, 2, 15, 0.9)",
    colorSurfaceInput: "rgba(14, 10, 32, 0.85)",
    colorSurfaceDisabled: "rgba(22, 18, 48, 0.7)",
    colorSurfacePage: "#06020f",
    colorBorder: "#00fff540",
    colorBorderFocused: "#ff2d95",
    colorBorderError: "#ff4444",
    colorActionPrimary: "#ff2d95",
    colorActionPrimaryHover: "#ff5cb0",
    colorActionSecondary: "#0e0e24",
    colorActionSecondaryHover: "#1a1a3a",
    colorActionDestructive: "#ff4444",
    colorActionDestructiveHover: "#ff6666",
    colorSuccess: "#39ff14",
    colorSuccessBg: "rgba(57, 255, 20, 0.08)",
    colorWarning: "#ffe44d",
    colorWarningBg: "rgba(255, 228, 77, 0.08)",
    colorError: "#ff4080",
    colorErrorBg: "rgba(255, 64, 128, 0.08)",
    colorInfo: "#00fff5",
    colorInfoBg: "rgba(0, 255, 245, 0.08)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 0 8px rgba(0, 255, 245, 0.15), 0 0 2px rgba(255, 45, 149, 0.1)",
    shadowMd: "0 0 16px rgba(0, 255, 245, 0.2), 0 0 4px rgba(255, 45, 149, 0.15)",
    shadowLg: "0 0 32px rgba(0, 255, 245, 0.25), 0 0 8px rgba(255, 45, 149, 0.2)",
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontSerif: "'Lora', Georgia, 'Times New Roman', serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#ff2d95",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  },
  css: `
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
  `
};
var slateTheme = {
  name: "slate",
  label: "Slate",
  tokens: {
    colorText: "#e0e3e8",
    colorTextSecondary: "#b0b8c4",
    colorTextMuted: "#8891a0",
    colorTextInverse: "#1a1d24",
    colorTextLink: "#7ba3d4",
    colorTextPlaceholder: "#8891a0",
    colorTextDisabled: "#5a6270",
    colorSurface: "#1a1d24",
    colorSurfacePanel: "#1a1d24",
    colorSurfaceRaised: "#22262e",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.7)",
    colorSurfaceInput: "#1e2229",
    colorSurfaceDisabled: "#2a2f38",
    colorSurfacePage: "#1a1d24",
    colorBorder: "#2a2f38",
    colorBorderFocused: "#7ba3d4",
    colorBorderError: "#ef4444",
    colorActionPrimary: "#7ba3d4",
    colorActionPrimaryHover: "#9ab8e0",
    colorActionSecondary: "#22262e",
    colorActionSecondaryHover: "#2a2f38",
    colorActionDestructive: "#ef4444",
    colorActionDestructiveHover: "#f87171",
    colorSuccess: "#22c55e",
    colorSuccessBg: "rgba(34, 197, 94, 0.1)",
    colorWarning: "#f59e0b",
    colorWarningBg: "rgba(245, 158, 11, 0.1)",
    colorError: "#ef4444",
    colorErrorBg: "rgba(239, 68, 68, 0.1)",
    colorInfo: "#7ba3d4",
    colorInfoBg: "rgba(123, 163, 212, 0.1)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.2)",
    shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
    shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)",
    fontSans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSerif: "'Lora', Georgia, 'Times New Roman', serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#7ba3d4",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  }
};
var warmSandTheme = {
  name: "warm-sand",
  label: "Warm Sand",
  tokens: {
    colorText: "#e8e4de",
    colorTextSecondary: "#c4bdb4",
    colorTextMuted: "#9b8f82",
    colorTextInverse: "#1c1917",
    colorTextLink: "#c0673a",
    colorTextPlaceholder: "#9b8f82",
    colorTextDisabled: "#6b5f54",
    colorSurface: "#1c1917",
    colorSurfacePanel: "#1c1917",
    colorSurfaceRaised: "#252220",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.7)",
    colorSurfaceInput: "#201d1b",
    colorSurfaceDisabled: "#2e2a27",
    colorSurfacePage: "#1c1917",
    colorBorder: "#2e2a27",
    colorBorderFocused: "#c0673a",
    colorBorderError: "#ef4444",
    colorActionPrimary: "#c0673a",
    colorActionPrimaryHover: "#d4804f",
    colorActionSecondary: "#252220",
    colorActionSecondaryHover: "#2e2a27",
    colorActionDestructive: "#ef4444",
    colorActionDestructiveHover: "#f87171",
    colorSuccess: "#22c55e",
    colorSuccessBg: "rgba(34, 197, 94, 0.1)",
    colorWarning: "#f59e0b",
    colorWarningBg: "rgba(245, 158, 11, 0.1)",
    colorError: "#ef4444",
    colorErrorBg: "rgba(239, 68, 68, 0.1)",
    colorInfo: "#c0673a",
    colorInfoBg: "rgba(192, 103, 58, 0.1)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.2)",
    shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
    shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)",
    fontSans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSerif: "'Lora', Georgia, 'Times New Roman', serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#d4804f",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  }
};
var mossTheme = {
  name: "moss",
  label: "Moss",
  tokens: {
    colorText: "#dce5da",
    colorTextSecondary: "#b4c0af",
    colorTextMuted: "#7d8b75",
    colorTextInverse: "#141a14",
    colorTextLink: "#6aad7a",
    colorTextPlaceholder: "#7d8b75",
    colorTextDisabled: "#556050",
    colorSurface: "#141a14",
    colorSurfacePanel: "#141a14",
    colorSurfaceRaised: "#1c231c",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.7)",
    colorSurfaceInput: "#181f18",
    colorSurfaceDisabled: "#243024",
    colorSurfacePage: "#141a14",
    colorBorder: "#243024",
    colorBorderFocused: "#6aad7a",
    colorBorderError: "#ef4444",
    colorActionPrimary: "#6aad7a",
    colorActionPrimaryHover: "#82c090",
    colorActionSecondary: "#1c231c",
    colorActionSecondaryHover: "#243024",
    colorActionDestructive: "#ef4444",
    colorActionDestructiveHover: "#f87171",
    colorSuccess: "#6aad7a",
    colorSuccessBg: "rgba(106, 173, 122, 0.1)",
    colorWarning: "#f59e0b",
    colorWarningBg: "rgba(245, 158, 11, 0.1)",
    colorError: "#ef4444",
    colorErrorBg: "rgba(239, 68, 68, 0.1)",
    colorInfo: "#6aad7a",
    colorInfoBg: "rgba(106, 173, 122, 0.1)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.2)",
    shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
    shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)",
    fontSans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSerif: "'Lora', Georgia, 'Times New Roman', serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#82c090",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  }
};
var coralTheme = {
  name: "coral",
  label: "Coral",
  tokens: {
    colorText: "#f0e0d8",
    colorTextSecondary: "#ccb8ac",
    colorTextMuted: "#a08878",
    colorTextInverse: "#1f1714",
    colorTextLink: "#f08060",
    colorTextPlaceholder: "#a08878",
    colorTextDisabled: "#6e5c50",
    colorSurface: "#1f1714",
    colorSurfacePanel: "#1f1714",
    colorSurfaceRaised: "#291f1b",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.7)",
    colorSurfaceInput: "#241b17",
    colorSurfaceDisabled: "#3a2820",
    colorSurfacePage: "#1f1714",
    colorBorder: "#3a2820",
    colorBorderFocused: "#f08060",
    colorBorderError: "#ef4444",
    colorActionPrimary: "#f08060",
    colorActionPrimaryHover: "#f49878",
    colorActionSecondary: "#291f1b",
    colorActionSecondaryHover: "#3a2820",
    colorActionDestructive: "#ef4444",
    colorActionDestructiveHover: "#f87171",
    colorSuccess: "#22c55e",
    colorSuccessBg: "rgba(34, 197, 94, 0.1)",
    colorWarning: "#f59e0b",
    colorWarningBg: "rgba(245, 158, 11, 0.1)",
    colorError: "#ef4444",
    colorErrorBg: "rgba(239, 68, 68, 0.1)",
    colorInfo: "#f08060",
    colorInfoBg: "rgba(240, 128, 96, 0.1)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.2)",
    shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
    shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)",
    fontSans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSerif: "'Lora', Georgia, 'Times New Roman', serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#f49878",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  }
};
var pipboyTheme = {
  name: "pipboy",
  label: "Pip-Boy",
  tokens: {
    colorText: "#33ff33",
    colorTextSecondary: "#66cc66",
    colorTextMuted: "#339933",
    colorTextInverse: "#0a0a0a",
    colorTextLink: "#ffb347",
    colorTextPlaceholder: "#339933",
    colorTextDisabled: "#1a4a1a",
    colorSurface: "transparent",
    colorSurfacePanel: "#0a0a0a",
    colorSurfaceRaised: "rgba(10, 10, 10, 0.85)",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.9)",
    colorSurfaceInput: "rgba(13, 20, 13, 0.9)",
    colorSurfaceDisabled: "rgba(26, 46, 26, 0.8)",
    colorSurfacePage: "#0a0a0a",
    colorBorder: "#1a2e1a",
    colorBorderFocused: "#ffb347",
    colorBorderError: "#ff4444",
    colorActionPrimary: "#ffb347",
    colorActionPrimaryHover: "#ffc46b",
    colorActionSecondary: "#0f1a0f",
    colorActionSecondaryHover: "#1a2e1a",
    colorActionDestructive: "#ff4444",
    colorActionDestructiveHover: "#ff6666",
    colorSuccess: "#33ff33",
    colorSuccessBg: "rgba(51, 255, 51, 0.08)",
    colorWarning: "#ffb347",
    colorWarningBg: "rgba(255, 179, 71, 0.08)",
    colorError: "#ff4444",
    colorErrorBg: "rgba(255, 68, 68, 0.08)",
    colorInfo: "#33ff33",
    colorInfoBg: "rgba(51, 255, 51, 0.08)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 0 4px rgba(51, 255, 51, 0.1)",
    shadowMd: "0 0 8px rgba(51, 255, 51, 0.15)",
    shadowLg: "0 0 16px rgba(51, 255, 51, 0.2)",
    fontSans: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontSerif: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontMono: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#33ff33",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  },
  css: `
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
      z-index: 1000;
    }
  `
};
var neuralTheme = {
  name: "neural",
  label: "Neural",
  tokens: {
    colorText: "#e0e8ff",
    colorTextSecondary: "#a8b8d8",
    colorTextMuted: "#64748b",
    colorTextInverse: "#0a0a1a",
    colorTextLink: "#38bdf8",
    colorTextPlaceholder: "#64748b",
    colorTextDisabled: "#3a4a5a",
    colorSurface: "transparent",
    colorSurfacePanel: "#0a0a1a",
    colorSurfaceRaised: "rgba(10, 10, 26, 0.85)",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.9)",
    colorSurfaceInput: "rgba(14, 14, 34, 0.9)",
    colorSurfaceDisabled: "rgba(26, 26, 58, 0.8)",
    colorSurfacePage: "#0a0a1a",
    colorBorder: "#1a1a3a",
    colorBorderFocused: "#38bdf8",
    colorBorderError: "#ff4444",
    colorActionPrimary: "#38bdf8",
    colorActionPrimaryHover: "#5ccdfb",
    colorActionSecondary: "#12122a",
    colorActionSecondaryHover: "#1a1a3a",
    colorActionDestructive: "#ff4444",
    colorActionDestructiveHover: "#ff6666",
    colorSuccess: "#22c55e",
    colorSuccessBg: "rgba(34, 197, 94, 0.08)",
    colorWarning: "#f59e0b",
    colorWarningBg: "rgba(245, 158, 11, 0.08)",
    colorError: "#ff4444",
    colorErrorBg: "rgba(255, 68, 68, 0.08)",
    colorInfo: "#38bdf8",
    colorInfoBg: "rgba(56, 189, 248, 0.08)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    shadowSm: "0 0 4px rgba(56, 189, 248, 0.1)",
    shadowMd: "0 0 8px rgba(56, 189, 248, 0.15)",
    shadowLg: "0 0 16px rgba(56, 189, 248, 0.2)",
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontSerif: "'Space Grotesk', system-ui, sans-serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#38bdf8",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  },
  css: `
    [data-theme="neural"] body,
    [data-theme="neural"] {
      background-color: #0a0a1a;
    }
  `
};
var pacmanTheme = {
  name: "pacman",
  label: "Pac-Man",
  tokens: {
    colorText: "#e0e0e0",
    colorTextSecondary: "#b0b0b0",
    colorTextMuted: "#5555ff",
    colorTextInverse: "#000000",
    colorTextLink: "#ffff00",
    colorTextPlaceholder: "#5555ff",
    colorTextDisabled: "#333366",
    colorSurface: "transparent",
    colorSurfacePanel: "#000000",
    colorSurfaceRaised: "rgba(0, 0, 0, 0.85)",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.9)",
    colorSurfaceInput: "rgba(10, 10, 42, 0.9)",
    colorSurfaceDisabled: "rgba(26, 26, 74, 0.8)",
    colorSurfacePage: "#000000",
    colorBorder: "#1a1a4a",
    colorBorderFocused: "#ffff00",
    colorBorderError: "#ff4444",
    colorActionPrimary: "#ffff00",
    colorActionPrimaryHover: "#ffff66",
    colorActionSecondary: "#0a0a2a",
    colorActionSecondaryHover: "#1a1a4a",
    colorActionDestructive: "#ff4444",
    colorActionDestructiveHover: "#ff6666",
    colorSuccess: "#22c55e",
    colorSuccessBg: "rgba(34, 197, 94, 0.1)",
    colorWarning: "#ffb852",
    colorWarningBg: "rgba(255, 184, 82, 0.1)",
    colorError: "#ff4444",
    colorErrorBg: "rgba(255, 68, 68, 0.1)",
    colorInfo: "#00ffff",
    colorInfoBg: "rgba(0, 255, 255, 0.1)",
    spaceXs: "0.25rem",
    spaceSm: "0.5rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    radiusSm: "0",
    radiusMd: "0",
    radiusLg: "0",
    radiusFull: "9999px",
    shadowSm: "0 0 4px rgba(33, 33, 222, 0.2)",
    shadowMd: "0 0 8px rgba(33, 33, 222, 0.3)",
    shadowLg: "0 0 16px rgba(255, 255, 0, 0.2)",
    fontSans: "'Press Start 2P', monospace",
    fontSerif: "'Press Start 2P', monospace",
    fontMono: "'Press Start 2P', monospace",
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeLg: "1.125rem",
    fontSizeXl: "1.25rem",
    fontSize2xl: "1.5rem",
    fontSize3xl: "1.875rem",
    lineHeightTight: "1.25",
    lineHeightBase: "1.5",
    lineHeightRelaxed: "1.625",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
    letterSpacingTight: "-0.025em",
    letterSpacingNormal: "0em",
    letterSpacingWide: "0.025em",
    focusRingColor: "#ffff00",
    focusRingWidth: "2px",
    focusRingOffset: "2px"
  },
  css: `
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
  `
};
var ThemeContext = createContext(null);
function applyTokens(element, tokens) {
  const keys = Object.keys(tokens);
  for (const key of keys) {
    element.style.setProperty(tokenToCssProperty(key), tokens[key]);
  }
}
function stripBodyBackground(css) {
  return css.replace(/[^{}]*\bbody\b[^{}]*\{[^}]*background-color:[^}]*\}/gi, (match) => match.replace(/background-color:[^;]+;?/gi, ""));
}
var _applyPageStylesWarned = false;
function ThemeProvider({
  children,
  themes: extraThemes,
  defaultTheme = "synthwave",
  storageKey = "ui-theme",
  applyPageStyles
}) {
  if (applyPageStyles === undefined && !_applyPageStylesWarned) {
    _applyPageStylesWarned = true;
    console.warn("ThemeProvider: applyPageStyles will default to false in v2. " + "Set it explicitly or use <ThemeSurface> for page backgrounds.");
  }
  const shouldApplyPageStyles = applyPageStyles ?? true;
  const registry = useMemo(() => {
    const map = new Map;
    map.set(synthwaveTheme.name, synthwaveTheme);
    map.set(slateTheme.name, slateTheme);
    map.set(warmSandTheme.name, warmSandTheme);
    map.set(mossTheme.name, mossTheme);
    map.set(coralTheme.name, coralTheme);
    map.set(pipboyTheme.name, pipboyTheme);
    map.set(neuralTheme.name, neuralTheme);
    map.set(pacmanTheme.name, pacmanTheme);
    if (extraThemes) {
      for (const t of extraThemes) {
        map.set(t.name, t);
      }
    }
    return map;
  }, [extraThemes]);
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined")
      return defaultTheme;
    return localStorage.getItem(storageKey) ?? defaultTheme;
  });
  const resolved = theme;
  const setTheme = useCallback((next) => {
    setThemeState(next);
    localStorage.setItem(storageKey, next);
  }, [storageKey]);
  const focusStyleRef = useRef(null);
  useEffect22(() => {
    if (focusStyleRef.current)
      return;
    const style = document.createElement("style");
    style.setAttribute("data-ui-focus", "");
    style.textContent = [
      "button:focus-visible,",
      '[role="button"]:focus-visible,',
      "input:focus-visible,",
      "select:focus-visible,",
      "textarea:focus-visible,",
      "a[href]:focus-visible,",
      '[tabindex]:not([tabindex="-1"]):focus-visible {',
      "  outline: var(--focus-ring-width) solid var(--focus-ring-color);",
      "  outline-offset: var(--focus-ring-offset);",
      "}"
    ].join(`
`);
    document.head.appendChild(style);
    focusStyleRef.current = style;
    return () => {
      if (focusStyleRef.current) {
        focusStyleRef.current.remove();
        focusStyleRef.current = null;
      }
    };
  }, []);
  const styleElRef = useRef(null);
  useEffect22(() => {
    const definition = registry.get(resolved);
    if (!definition) {
      console.warn(`[@4lt7ab/ui] Theme "${resolved}" not found in registry. ` + `Available: ${Array.from(registry.keys()).join(", ")}`);
      return;
    }
    applyTokens(document.documentElement, definition.tokens);
    document.documentElement.setAttribute("data-theme", resolved);
    if (styleElRef.current) {
      styleElRef.current.remove();
      styleElRef.current = null;
    }
    if (definition.css) {
      const style = document.createElement("style");
      style.setAttribute("data-theme-css", resolved);
      style.textContent = shouldApplyPageStyles ? definition.css : stripBodyBackground(definition.css);
      document.head.appendChild(style);
      styleElRef.current = style;
    }
    return () => {
      if (styleElRef.current) {
        styleElRef.current.remove();
        styleElRef.current = null;
      }
    };
  }, [resolved, registry, shouldApplyPageStyles]);
  const value = useMemo(() => ({ theme, resolved, themes: registry, setTheme }), [theme, resolved, registry, setTheme]);
  return /* @__PURE__ */ jsxDEV(ThemeContext.Provider, {
    value,
    children
  }, undefined, false, undefined, this);
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
// src/components/ThemePicker/ThemePicker.tsx
import { forwardRef } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var STYLES_ID = "alttab-theme-picker";
var pickerCSS = `
  .alttab-theme-picker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .alttab-theme-card {
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    cursor: pointer;
    transition: border-color 0.15s ease, transform 0.15s ease;
    font-family: inherit;
    color: inherit;
  }

  .alttab-theme-card:hover {
    border-color: var(--color-text-link);
    transform: translateY(-2px);
  }

  .alttab-theme-card--active {
    border-color: var(--color-text-link);
  }

  .alttab-theme-card__name {
    display: block;
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .alttab-theme-card__desc {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
`;
var ThemePicker = forwardRef(function ThemePicker2({ descriptions = {} }, ref) {
  useInjectStyles(STYLES_ID, pickerCSS);
  const { resolved, themes, setTheme } = useTheme();
  return /* @__PURE__ */ jsxDEV2("div", {
    ref,
    className: "alttab-theme-picker",
    children: Array.from(themes.values()).map((def) => {
      const isActive = resolved === def.name;
      return /* @__PURE__ */ jsxDEV2("button", {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ jsxDEV2("span", {
            className: "alttab-theme-card__name",
            children: def.label
          }, undefined, false, undefined, this),
          descriptions[def.name] && /* @__PURE__ */ jsxDEV2("span", {
            className: "alttab-theme-card__desc",
            children: descriptions[def.name]
          }, undefined, false, undefined, this)
        ]
      }, def.name, true, undefined, this);
    })
  }, undefined, false, undefined, this);
});
// src/icons/icons.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function svgProps(size, style) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  };
}
function IconClose({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18 6L6 18M6 6l12 12"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9 18l6-6-6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6 9l6 6 6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15 18l-6-6 6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18 15l-6-6-6 6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M20 6L9 17l-5-5"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M22 4L12 14.01l-3-3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15 9l-6 6M9 9l6 6"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M21 21l-4.35-4.35"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12 5v14M5 12h14"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5 12h14"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M19 12H5M12 19l-7-7 7-7"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5 12h14M12 5l7 7-7 7"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3 12h18M3 6h18M3 18h18"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1 1l22 22"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV3("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/icons/index.ts
var iconRegistry = {
  close: IconClose,
  "chevron-right": IconChevronRight,
  "chevron-down": IconChevronDown,
  "chevron-left": IconChevronLeft,
  "chevron-up": IconChevronUp,
  check: IconCheck,
  "check-circle": IconCheckCircle,
  warning: IconWarning,
  error: IconError,
  info: IconInfo,
  search: IconSearch,
  trash: IconTrash,
  settings: IconSettings,
  plus: IconPlus,
  minus: IconMinus,
  edit: IconEdit,
  "arrow-left": IconArrowLeft,
  "arrow-right": IconArrowRight,
  menu: IconMenu,
  eye: IconEye,
  "eye-off": IconEyeOff,
  copy: IconCopy,
  "external-link": IconExternalLink,
  "more-vertical": IconMoreVertical,
  filter: IconFilter
};
// src/components/Button/Button.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var variantStyles = {
  primary: {
    background: semantic.colorActionPrimary,
    color: semantic.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: semantic.colorActionSecondary,
    color: semantic.colorText,
    border: `1px solid ${semantic.colorBorder}`
  },
  destructive: {
    background: semantic.colorActionDestructive,
    color: semantic.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: semantic.colorText,
    border: "1px solid transparent"
  }
};
var sizeStyles = {
  sm: {
    padding: `${semantic.spaceXs} ${semantic.spaceSm}`,
    fontSize: semantic.fontSizeSm,
    lineHeight: semantic.lineHeightTight
  },
  md: {
    padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
    fontSize: semantic.fontSizeSm,
    lineHeight: semantic.lineHeightTight
  },
  lg: {
    padding: `${semantic.spaceSm} ${semantic.spaceLg}`,
    fontSize: semantic.fontSizeBase,
    lineHeight: semantic.lineHeightBase
  }
};
var baseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: semantic.spaceSm,
  borderRadius: semantic.radiusMd,
  fontFamily: semantic.fontSans,
  fontWeight: semantic.fontWeightMedium,
  cursor: "pointer",
  transition: "background 150ms ease, border-color 150ms ease, opacity 150ms ease"
};
var Button = forwardRef2(function Button2({
  variant = "primary",
  size = "md",
  children,
  style,
  disabled,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV4("button", {
    ref,
    style: {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...disabled ? { opacity: 0.5, cursor: "not-allowed" } : {},
      ...style
    },
    disabled,
    ...props,
    children
  }, undefined, false, undefined, this);
});
// src/components/Stack/Stack.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var gapMap = {
  xs: semantic.spaceXs,
  sm: semantic.spaceSm,
  md: semantic.spaceMd,
  lg: semantic.spaceLg,
  xl: semantic.spaceXl,
  "2xl": semantic.space2xl
};
var Stack = forwardRef3(function Stack2({
  direction = "vertical",
  gap = "md",
  align,
  justify,
  wrap,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV5("div", {
    ref,
    style: {
      display: "flex",
      flexDirection: direction === "vertical" ? "column" : "row",
      gap: gapMap[gap],
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? "wrap" : undefined,
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
// src/components/Card/Card.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var paddingMap = {
  xs: semantic.spaceXs,
  sm: semantic.spaceSm,
  md: semantic.spaceMd,
  lg: semantic.spaceLg,
  xl: semantic.spaceXl,
  "2xl": semantic.space2xl
};
var variantStyles2 = {
  default: {
    background: semantic.colorSurface,
    border: `1px solid ${semantic.colorBorder}`,
    boxShadow: semantic.shadowSm
  },
  flat: {
    background: semantic.colorSurfaceRaised,
    border: `1px solid ${semantic.colorBorder}`,
    boxShadow: "none"
  },
  elevated: {
    background: semantic.colorSurface,
    border: `1px solid ${semantic.colorBorder}`,
    boxShadow: semantic.shadowMd
  }
};
var Card = forwardRef4(function Card2({
  variant = "default",
  padding = "lg",
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV6("div", {
    ref,
    style: {
      borderRadius: semantic.radiusLg,
      padding: paddingMap[padding],
      ...variantStyles2[variant],
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
// src/components/Field/Field.tsx
import { forwardRef as forwardRef5, useId, isValidElement, cloneElement } from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var labelStyle = {
  display: "block",
  fontSize: semantic.fontSizeSm,
  fontWeight: semantic.fontWeightMedium,
  lineHeight: semantic.lineHeightTight,
  color: semantic.colorText,
  fontFamily: semantic.fontSans
};
var requiredStyle = {
  color: semantic.colorError,
  marginLeft: "0.125rem"
};
var helpStyle = {
  fontSize: semantic.fontSizeXs,
  lineHeight: semantic.lineHeightTight,
  color: semantic.colorTextMuted,
  fontFamily: semantic.fontSans,
  margin: 0
};
var errorStyle = {
  fontSize: semantic.fontSizeXs,
  lineHeight: semantic.lineHeightTight,
  color: semantic.colorError,
  fontFamily: semantic.fontSans,
  margin: 0
};
var Field = forwardRef5(function Field2({
  label,
  htmlFor,
  error,
  help,
  required,
  disabled,
  children,
  style,
  ...props
}, ref) {
  const autoId = useId();
  const helpId = help ? `${autoId}-help` : undefined;
  const errorId = error ? `${autoId}-error` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(" ") || undefined;
  const enhancedChildren = isValidElement(children) ? cloneElement(children, {
    "aria-describedby": describedBy
  }) : children;
  return /* @__PURE__ */ jsxDEV7("div", {
    ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: semantic.spaceXs,
      opacity: disabled ? 0.6 : undefined,
      ...style
    },
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV7("label", {
        htmlFor,
        style: labelStyle,
        children: [
          label,
          required && /* @__PURE__ */ jsxDEV7("span", {
            style: requiredStyle,
            "aria-hidden": "true",
            children: "*"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      enhancedChildren,
      error && /* @__PURE__ */ jsxDEV7("p", {
        id: errorId,
        role: "alert",
        style: errorStyle,
        children: error
      }, undefined, false, undefined, this),
      !error && help && /* @__PURE__ */ jsxDEV7("p", {
        id: helpId,
        style: helpStyle,
        children: help
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Input/Input.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var baseStyle = {
  display: "block",
  width: "100%",
  padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
  fontSize: semantic.fontSizeSm,
  lineHeight: semantic.lineHeightTight,
  fontFamily: semantic.fontSans,
  color: semantic.colorText,
  background: semantic.colorSurfaceInput,
  border: `1px solid ${semantic.colorBorder}`,
  borderRadius: semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box"
};
var errorBorderStyle = {
  borderColor: semantic.colorBorderError
};
var disabledStyle = {
  background: semantic.colorSurfaceDisabled,
  color: semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var Input = forwardRef6(function Input2({
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV8("input", {
    ref,
    "aria-invalid": hasError || undefined,
    style: {
      ...baseStyle,
      ...hasError ? errorBorderStyle : {},
      ...disabled ? disabledStyle : {},
      ...style
    },
    disabled,
    ...props
  }, undefined, false, undefined, this);
});
// src/components/Textarea/Textarea.tsx
import { forwardRef as forwardRef7 } from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var baseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
  fontSize: semantic.fontSizeSm,
  lineHeight: semantic.lineHeightBase,
  fontFamily: semantic.fontSans,
  color: semantic.colorText,
  background: semantic.colorSurfaceInput,
  border: `1px solid ${semantic.colorBorder}`,
  borderRadius: semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box",
  resize: "vertical",
  minHeight: "5rem"
};
var errorBorderStyle2 = {
  borderColor: semantic.colorBorderError
};
var disabledStyle2 = {
  background: semantic.colorSurfaceDisabled,
  color: semantic.colorTextDisabled,
  cursor: "not-allowed",
  resize: "none"
};
var Textarea = forwardRef7(function Textarea2({
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV9("textarea", {
    ref,
    "aria-invalid": hasError || undefined,
    style: {
      ...baseStyle2,
      ...hasError ? errorBorderStyle2 : {},
      ...disabled ? disabledStyle2 : {},
      ...style
    },
    disabled,
    ...props
  }, undefined, false, undefined, this);
});
// src/components/Select/Select.tsx
import { forwardRef as forwardRef8 } from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var wrapperStyle = {
  position: "relative",
  display: "block",
  width: "100%"
};
var baseStyle3 = {
  display: "block",
  width: "100%",
  padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
  fontSize: semantic.fontSizeSm,
  lineHeight: semantic.lineHeightTight,
  fontFamily: semantic.fontSans,
  color: semantic.colorText,
  background: semantic.colorSurfaceInput,
  border: `1px solid ${semantic.colorBorder}`,
  borderRadius: semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box",
  cursor: "pointer",
  appearance: "none",
  paddingRight: semantic.space2xl
};
var chevronStyle = {
  position: "absolute",
  right: semantic.spaceSm,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: semantic.colorTextSecondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var errorBorderStyle3 = {
  borderColor: semantic.colorBorderError
};
var disabledStyle3 = {
  background: semantic.colorSurfaceDisabled,
  color: semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var Select = forwardRef8(function Select2({
  options,
  children,
  placeholder,
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV10("div", {
    style: wrapperStyle,
    children: [
      /* @__PURE__ */ jsxDEV10("select", {
        ref,
        "aria-invalid": hasError || undefined,
        style: {
          ...baseStyle3,
          ...hasError ? errorBorderStyle3 : {},
          ...disabled ? disabledStyle3 : {},
          ...style
        },
        disabled,
        ...props,
        children: [
          placeholder && /* @__PURE__ */ jsxDEV10("option", {
            value: "",
            disabled: true,
            children: placeholder
          }, undefined, false, undefined, this),
          children ?? options?.map((opt) => /* @__PURE__ */ jsxDEV10("option", {
            value: opt.value,
            disabled: opt.disabled,
            children: opt.label
          }, opt.value, false, undefined, this))
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV10("span", {
        "aria-hidden": true,
        style: chevronStyle,
        children: /* @__PURE__ */ jsxDEV10("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxDEV10("path", {
            d: "M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L6 9.31 2.22 5.53a.75.75 0 0 1 0-1.06z",
            fill: "currentColor"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Badge/Badge.tsx
import { forwardRef as forwardRef9 } from "react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var variantStyles3 = {
  default: {
    border: `1px solid ${semantic.colorBorder}`,
    color: semantic.colorTextSecondary
  },
  success: {
    background: semantic.colorSuccessBg,
    color: semantic.colorSuccess
  },
  warning: {
    background: semantic.colorWarningBg,
    color: semantic.colorWarning
  },
  error: {
    background: semantic.colorErrorBg,
    color: semantic.colorError
  },
  info: {
    background: semantic.colorInfoBg,
    color: semantic.colorInfo
  }
};
var baseStyles2 = {
  display: "inline-block",
  padding: `${semantic.spaceXs} ${semantic.spaceSm}`,
  borderRadius: semantic.radiusFull,
  fontSize: semantic.fontSizeXs,
  fontWeight: semantic.fontWeightSemibold,
  fontFamily: semantic.fontSans,
  textTransform: "uppercase",
  letterSpacing: semantic.letterSpacingWide
};
var Badge = forwardRef9(function Badge2({
  children,
  variant = "default",
  style,
  ...rest
}, ref) {
  return /* @__PURE__ */ jsxDEV11("span", {
    ref,
    ...rest,
    style: {
      ...baseStyles2,
      ...variantStyles3[variant],
      ...style
    },
    children
  }, undefined, false, undefined, this);
});
// src/components/Icon/Icon.tsx
import { forwardRef as forwardRef10 } from "react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Icon = forwardRef10(function Icon2({ name, size = 24, style, "aria-label": ariaLabel, ...props }, ref) {
  const IconComponent = iconRegistry[name];
  const isDecorative = !ariaLabel;
  return /* @__PURE__ */ jsxDEV12("span", {
    ref,
    role: isDecorative ? undefined : "img",
    "aria-hidden": isDecorative || undefined,
    "aria-label": ariaLabel,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      lineHeight: 1,
      color: "inherit",
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsxDEV12(IconComponent, {
      size
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
// src/components/IconButton/IconButton.tsx
import { forwardRef as forwardRef11 } from "react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var IconButton = forwardRef11(function IconButton2({
  icon,
  size = 24,
  badge,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV13("button", {
    ref,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: semantic.radiusFull,
      background: "transparent",
      border: "none",
      color: semantic.colorTextMuted,
      cursor: "pointer",
      padding: 0,
      ...style
    },
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV13(Icon, {
        name: icon,
        size
      }, undefined, false, undefined, this),
      badge && /* @__PURE__ */ jsxDEV13("span", {
        style: {
          position: "absolute",
          top: 2,
          right: 2,
          width: 8,
          height: 8,
          borderRadius: semantic.radiusFull,
          background: semantic.colorError,
          border: `2px solid ${semantic.colorSurface}`
        }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Overlay/Overlay.tsx
import { forwardRef as forwardRef12 } from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Overlay = forwardRef12(function Overlay2({
  onClick,
  zIndex = 100,
  style
}, ref) {
  return /* @__PURE__ */ jsxDEV14("div", {
    ref,
    role: "presentation",
    onClick,
    style: {
      position: "fixed",
      inset: 0,
      background: semantic.colorSurfaceOverlay,
      zIndex,
      ...style
    }
  }, undefined, false, undefined, this);
});
// src/components/Skeleton/Skeleton.tsx
import { forwardRef as forwardRef13 } from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var Skeleton = forwardRef13(function Skeleton2({
  width = "100%",
  height = 16,
  borderRadius = semantic.radiusMd,
  style
}, ref) {
  return /* @__PURE__ */ jsxDEV15("div", {
    ref,
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius,
      background: semantic.colorSurfaceRaised,
      ...style
    }
  }, undefined, false, undefined, this);
});
var CardSkeleton = forwardRef13(function CardSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsxDEV15("div", {
    ref,
    "aria-hidden": "true",
    style: {
      borderRadius: semantic.radiusLg,
      border: `1px solid ${semantic.colorBorder}`,
      padding: semantic.spaceLg,
      display: "flex",
      flexDirection: "column",
      gap: semantic.spaceSm,
      ...style
    },
    children: [
      /* @__PURE__ */ jsxDEV15(Skeleton, {
        width: "60%",
        height: 20
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV15(Skeleton, {
        width: "100%",
        height: 14
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV15(Skeleton, {
        width: "80%",
        height: 14
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
var RowSkeleton = forwardRef13(function RowSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsxDEV15("div", {
    ref,
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      gap: semantic.spaceSm,
      padding: `${semantic.spaceSm} 0`,
      ...style
    },
    children: [
      /* @__PURE__ */ jsxDEV15(Skeleton, {
        width: 32,
        height: 32,
        borderRadius: semantic.radiusFull
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV15("div", {
        style: { flex: 1, display: "flex", flexDirection: "column", gap: semantic.spaceXs },
        children: [
          /* @__PURE__ */ jsxDEV15(Skeleton, {
            width: "40%",
            height: 14
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV15(Skeleton, {
            width: "70%",
            height: 12
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ProgressBar/ProgressBar.tsx
import { forwardRef as forwardRef14 } from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var ProgressBar = forwardRef14(function ProgressBar2({
  segments,
  height = 6,
  "aria-label": ariaLabel,
  style
}, ref) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  return /* @__PURE__ */ jsxDEV16("div", {
    ref,
    role: "progressbar",
    "aria-valuenow": total,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": ariaLabel,
    style: {
      width: "100%",
      height,
      borderRadius: height / 2,
      overflow: "hidden",
      display: "flex",
      background: semantic.colorSurfaceRaised,
      ...style
    },
    children: segments.map((segment, i) => {
      const pct = total > 0 ? segment.value / total * 100 : 0;
      return /* @__PURE__ */ jsxDEV16("div", {
        title: segment.label ? `${segment.label}: ${segment.value}` : String(segment.value),
        style: {
          width: `${pct}%`,
          height: "100%",
          background: segment.color
        }
      }, i, false, undefined, this);
    })
  }, undefined, false, undefined, this);
});
// src/components/EmptyState/EmptyState.tsx
import { forwardRef as forwardRef15 } from "react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var EmptyState = forwardRef15(function EmptyState2({
  icon,
  message,
  variant = "plain",
  style,
  children,
  action
}, ref) {
  const content = /* @__PURE__ */ jsxDEV17(Stack, {
    align: "center",
    gap: "sm",
    style: { padding: semantic.spaceXl, ...style },
    children: [
      /* @__PURE__ */ jsxDEV17(Icon, {
        name: icon,
        size: 32,
        style: { color: semantic.colorTextMuted }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV17("span", {
        style: {
          color: semantic.colorTextSecondary,
          fontSize: semantic.fontSizeSm,
          textAlign: "center",
          fontFamily: semantic.fontSans
        },
        children: message
      }, undefined, false, undefined, this),
      children,
      action && /* @__PURE__ */ jsxDEV17("div", {
        style: { marginTop: semantic.spaceSm },
        children: action
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  if (variant === "card") {
    return /* @__PURE__ */ jsxDEV17(Card, {
      ref,
      variant: "flat",
      children: content
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV17("div", {
    ref,
    children: content
  }, undefined, false, undefined, this);
});
// src/components/Pagination/Pagination.tsx
import { forwardRef as forwardRef16 } from "react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = forwardRef16(function Pagination2({
  page,
  totalPages,
  total,
  onPageChange,
  labels,
  className,
  style
}, ref) {
  const resolvedLabels = { ...defaultLabels, ...labels };
  return /* @__PURE__ */ jsxDEV18("div", {
    ref,
    className,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: semantic.spaceSm,
      ...style
    },
    children: [
      /* @__PURE__ */ jsxDEV18(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page <= 1,
        onClick: () => onPageChange(page - 1),
        children: resolvedLabels.previous
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV18("span", {
        style: {
          color: semantic.colorTextMuted,
          fontSize: semantic.fontSizeSm,
          fontFamily: semantic.fontSans
        },
        children: [
          resolvedLabels.pageOf(page, totalPages),
          " (",
          total,
          " total)"
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV18(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page >= totalPages,
        onClick: () => onPageChange(page + 1),
        children: resolvedLabels.next
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/PageHeader/PageHeader.tsx
import { createElement, forwardRef as forwardRef17 } from "react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var PageHeader = forwardRef17(function PageHeader2({
  title,
  subtitle,
  trailing,
  style,
  className,
  level = 2
}, ref) {
  const heading = createElement(`h${level}`, {
    style: {
      margin: 0,
      fontFamily: semantic.fontSans,
      fontWeight: semantic.fontWeightBold,
      color: semantic.colorText
    }
  }, title);
  return /* @__PURE__ */ jsxDEV19("div", {
    ref,
    className,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      ...style
    },
    children: [
      /* @__PURE__ */ jsxDEV19("div", {
        children: [
          heading,
          subtitle && /* @__PURE__ */ jsxDEV19("span", {
            style: {
              color: semantic.colorTextMuted,
              fontSize: semantic.fontSizeSm
            },
            children: subtitle
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      trailing && /* @__PURE__ */ jsxDEV19("div", {
        children: trailing
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/TagChip/TagChip.tsx
import { forwardRef as forwardRef18 } from "react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var TagChip = forwardRef18(function TagChip2({
  name,
  onRemove,
  style
}, ref) {
  return /* @__PURE__ */ jsxDEV20("span", {
    ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: semantic.fontSizeXs,
      color: semantic.colorActionPrimary,
      background: semantic.colorSurfaceRaised,
      borderRadius: semantic.radiusFull,
      padding: "2px 8px",
      fontFamily: semantic.fontSans,
      ...style
    },
    children: [
      name,
      onRemove && /* @__PURE__ */ jsxDEV20(IconButton, {
        icon: "close",
        size: 12,
        onClick: onRemove,
        "aria-label": `Remove ${name}`,
        style: { width: 18, height: 18, color: semantic.colorActionPrimary }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ExpandableCard/ExpandableCard.tsx
import { forwardRef as forwardRef19, useState as useState2, useId as useId2 } from "react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var ExpandableCard = forwardRef19(function ExpandableCard2({
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  variant = "default",
  style,
  headerAction
}, ref) {
  const [internalOpen, setInternalOpen] = useState2(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const panelId = useId2();
  const handleToggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  };
  return /* @__PURE__ */ jsxDEV21(Card, {
    ref,
    variant,
    padding: "xs",
    style,
    children: [
      /* @__PURE__ */ jsxDEV21("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
        children: [
          /* @__PURE__ */ jsxDEV21("button", {
            type: "button",
            onClick: handleToggle,
            "aria-expanded": isOpen,
            "aria-controls": panelId,
            style: {
              display: "flex",
              alignItems: "center",
              gap: semantic.spaceSm,
              padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
              cursor: "pointer",
              borderRadius: semantic.radiusMd,
              transition: "background 150ms ease",
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              flex: 1
            },
            children: [
              /* @__PURE__ */ jsxDEV21("span", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  lineHeight: 1,
                  color: "inherit",
                  transition: "transform 200ms ease",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"
                },
                children: /* @__PURE__ */ jsxDEV21(IconChevronRight, {
                  size: 20
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV21("span", {
                style: {
                  fontWeight: semantic.fontWeightSemibold,
                  fontFamily: semantic.fontSans,
                  color: semantic.colorText,
                  fontSize: semantic.fontSizeSm
                },
                children: title
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          headerAction && /* @__PURE__ */ jsxDEV21("div", {
            style: { padding: `0 ${semantic.spaceMd}` },
            children: headerAction
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV21("div", {
        id: panelId,
        role: "region",
        style: {
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 200ms ease"
        },
        children: /* @__PURE__ */ jsxDEV21("div", {
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsxDEV21("div", {
            style: { padding: `${semantic.spaceSm} ${semantic.spaceMd} ${semantic.spaceMd}` },
            children
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ModalShell/ModalShell.tsx
import { forwardRef as forwardRef20, useEffect as useEffect3, useId as useId3, useRef as useRef2 } from "react";
import { createPortal } from "react-dom";
import { jsxDEV as jsxDEV22, Fragment } from "react/jsx-dev-runtime";
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = forwardRef20(function ModalShell2({
  onClose,
  children,
  maxWidth = 480,
  zIndex = 200,
  style,
  titleId,
  "aria-label": ariaLabel,
  role = "dialog"
}, ref) {
  const generatedId = useId3();
  const resolvedLabelId = titleId ?? generatedId;
  const internalRef = useRef2(null);
  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  useFocusTrap(internalRef);
  useEffect3(() => {
    const previouslyFocused = document.activeElement;
    const container = internalRef.current;
    if (container) {
      const firstFocusable = container.querySelector(FOCUSABLE_SELECTOR2);
      if (firstFocusable) {
        firstFocusable.focus();
      } else {
        container.focus();
      }
    }
    return () => {
      previouslyFocused?.focus();
    };
  }, []);
  useEffect3(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return createPortal(/* @__PURE__ */ jsxDEV22(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV22(Overlay, {
        onClick: onClose,
        zIndex
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV22("div", {
        style: {
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: zIndex + 1,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxDEV22("div", {
          ref: setRefs,
          role,
          "aria-modal": "true",
          "aria-labelledby": ariaLabel ? undefined : resolvedLabelId,
          "aria-label": ariaLabel,
          tabIndex: -1,
          style: {
            background: semantic.colorSurface,
            borderRadius: semantic.radiusLg,
            boxShadow: semantic.shadowLg,
            border: `1px solid ${semantic.colorBorder}`,
            padding: semantic.spaceXl,
            maxWidth,
            width: "100%",
            pointerEvents: "auto",
            outline: "none",
            ...style
          },
          children
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this), document.body);
});
// src/components/ConfirmDialog/ConfirmDialog.tsx
import { forwardRef as forwardRef21, useId as useId4, useState as useState3 } from "react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = forwardRef21(function ConfirmDialog2({
  title,
  message,
  confirmLabel = "Confirm",
  onConfirm,
  onCancel,
  children,
  variant = "destructive"
}, ref) {
  const [loading, setLoading] = useState3(false);
  const titleId = useId4();
  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV23(ModalShell, {
    ref,
    onClose: onCancel,
    role: "alertdialog",
    titleId,
    children: [
      /* @__PURE__ */ jsxDEV23("h2", {
        id: titleId,
        style: {
          margin: 0,
          fontWeight: semantic.fontWeightSemibold,
          fontFamily: semantic.fontSans,
          color: semantic.colorText,
          fontSize: semantic.fontSizeLg
        },
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV23("p", {
        style: {
          margin: `${semantic.spaceSm} 0 ${children ? "0" : semantic.spaceLg}`,
          color: semantic.colorTextMuted,
          fontSize: semantic.fontSizeSm,
          fontFamily: semantic.fontSans
        },
        children: message
      }, undefined, false, undefined, this),
      children && /* @__PURE__ */ jsxDEV23("div", {
        style: { margin: `${semantic.spaceSm} 0 ${semantic.spaceLg}` },
        children
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV23("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          gap: semantic.spaceSm
        },
        children: [
          /* @__PURE__ */ jsxDEV23(Button, {
            variant: "ghost",
            onClick: onCancel,
            disabled: loading,
            autoFocus: true,
            children: "Cancel"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV23(Button, {
            variant: variantButtonMap[variant],
            onClick: handleConfirm,
            disabled: loading,
            children: loading ? "Loading..." : confirmLabel
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/StatusDot/StatusDot.tsx
import { forwardRef as forwardRef22 } from "react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var variantColors = {
  default: semantic.colorTextMuted,
  success: semantic.colorSuccess,
  warning: semantic.colorWarning,
  error: semantic.colorError,
  info: semantic.colorInfo
};
var StatusDot = forwardRef22(function StatusDot2({
  variant = "default",
  color,
  size = 8,
  "aria-label": ariaLabel,
  style
}, ref) {
  const resolvedColor = color ?? variantColors[variant];
  return /* @__PURE__ */ jsxDEV24("span", {
    ref,
    role: ariaLabel ? "img" : undefined,
    "aria-label": ariaLabel,
    "aria-hidden": ariaLabel ? undefined : true,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: semantic.radiusFull,
      background: resolvedColor,
      flexShrink: 0,
      ...style
    }
  }, undefined, false, undefined, this);
});
// src/components/ThemeSurface/ThemeSurface.tsx
import { forwardRef as forwardRef23, useEffect as useEffect4, useRef as useRef3 } from "react";
import { jsxDEV as jsxDEV25, Fragment as Fragment2 } from "react/jsx-dev-runtime";
var ThemeSurface = forwardRef23(function ThemeSurface2({
  children,
  global = false,
  style
}, ref) {
  const { resolved, themes } = useTheme();
  const prevBodyBgRef = useRef3("");
  useEffect4(() => {
    if (!global)
      return;
    const definition = themes.get(resolved);
    if (!definition)
      return;
    const pageColor = getComputedStyle(document.documentElement).getPropertyValue("--color-surface-page").trim();
    prevBodyBgRef.current = document.body.style.backgroundColor;
    if (pageColor) {
      document.body.style.backgroundColor = pageColor;
    }
    return () => {
      document.body.style.backgroundColor = prevBodyBgRef.current;
    };
  }, [global, resolved, themes]);
  if (global) {
    return /* @__PURE__ */ jsxDEV25(Fragment2, {
      children
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV25("div", {
    ref,
    style: {
      background: semantic.colorSurfacePage,
      ...style
    },
    children
  }, undefined, false, undefined, this);
});
// src/components/Table/Table.tsx
import { forwardRef as forwardRef24 } from "react";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
var spaceMap = {
  xs: semantic.spaceXs,
  sm: semantic.spaceSm,
  md: semantic.spaceMd,
  lg: semantic.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover {
  background: ${semantic.colorSurfaceRaised} !important;
}
[data-table-row-selected] > td {
  border-bottom-color: ${semantic.colorSurfaceRaised};
}
[data-table-row-selected] > td:first-child {
  position: relative;
}
[data-table-row-selected] > td:first-child::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: ${semantic.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `1px solid ${semantic.colorBorder}`,
    borderRadius: semantic.radiusLg,
    boxShadow: semantic.shadowSm
  },
  flat: {}
};
var Table = forwardRef24(function Table2({
  variant = "default",
  density = "md",
  children,
  style,
  ...props
}, ref) {
  useInjectStyles(TABLE_STYLES_ID, TABLE_STYLES_CSS);
  return /* @__PURE__ */ jsxDEV26("div", {
    ref,
    style: {
      overflowX: "auto",
      ...wrapperVariants[variant],
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsxDEV26("table", {
      "data-table-density": density,
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: semantic.fontSizeSm,
        fontFamily: semantic.fontSans,
        color: semantic.colorText
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableHeader = forwardRef24(function TableHeader2({ children, style, ...props }, ref) {
  return /* @__PURE__ */ jsxDEV26("thead", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsxDEV26("tr", {
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableHeaderCell = forwardRef24(function TableHeaderCell2({
  align = "left",
  width,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV26("th", {
    ref,
    style: {
      padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
      textAlign: align,
      fontWeight: semantic.fontWeightSemibold,
      fontSize: semantic.fontSizeXs,
      color: semantic.colorTextMuted,
      textTransform: "uppercase",
      letterSpacing: semantic.letterSpacingWide,
      borderBottom: `2px solid ${semantic.colorBorder}`,
      whiteSpace: "nowrap",
      width: typeof width === "number" ? `${width}px` : width,
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableBody = forwardRef24(function TableBody2({ children, ...props }, ref) {
  return /* @__PURE__ */ jsxDEV26("tbody", {
    ref,
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableRow = forwardRef24(function TableRow2({
  selected = false,
  hoverable = false,
  children,
  style,
  onClick,
  onKeyDown,
  ...props
}, ref) {
  const handleKeyDown = onClick ? (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
    onKeyDown?.(e);
  } : onKeyDown;
  return /* @__PURE__ */ jsxDEV26("tr", {
    ref,
    "data-table-row-hoverable": hoverable || undefined,
    "data-table-row-selected": selected || undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick,
    onKeyDown: handleKeyDown,
    style: {
      cursor: onClick ? "pointer" : undefined,
      background: selected ? semantic.colorSurfaceRaised : undefined,
      transition: "background 0.1s",
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableCell = forwardRef24(function TableCell2({
  align = "left",
  truncate = false,
  muted = false,
  width,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV26("td", {
    ref,
    style: {
      padding: `${semantic.spaceSm} ${semantic.spaceMd}`,
      borderBottom: `1px solid ${semantic.colorBorder}`,
      verticalAlign: "middle",
      textAlign: align,
      color: muted ? semantic.colorTextMuted : undefined,
      width: typeof width === "number" ? `${width}px` : width,
      ...truncate ? {
        maxWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      } : {},
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableGroupHeader = forwardRef24(function TableGroupHeader2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV26("tr", {
    ref,
    style: { cursor: "default", ...style },
    ...props,
    children: /* @__PURE__ */ jsxDEV26("td", {
      colSpan,
      style: {
        padding: `${semantic.spaceXs} ${semantic.spaceMd}`,
        background: semantic.colorSurfaceRaised,
        borderBottom: `1px solid ${semantic.colorBorder}`,
        fontSize: semantic.fontSizeXs,
        fontWeight: semantic.fontWeightBold,
        letterSpacing: semantic.letterSpacingWide,
        textTransform: "uppercase",
        color: semantic.colorTextMuted,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableEmptyRow = forwardRef24(function TableEmptyRow2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV26("tr", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsxDEV26("td", {
      colSpan,
      style: {
        padding: `${semantic.spaceXl} ${semantic.spaceMd}`,
        textAlign: "center",
        color: semantic.colorTextMuted,
        fontSize: semantic.fontSizeSm
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
export {
  warmSandTheme,
  useTheme,
  useInjectStyles,
  useFocusTrap,
  typography,
  tokenToCssProperty,
  synthwaveTheme,
  spacing,
  slateTheme,
  shadows,
  semantic,
  radii,
  pipboyTheme,
  pacmanTheme,
  neuralTheme,
  mossTheme,
  iconRegistry,
  coralTheme,
  colors,
  ThemeSurface,
  ThemeProvider,
  ThemePicker,
  Textarea,
  TagChip,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableGroupHeader,
  TableEmptyRow,
  TableCell,
  TableBody,
  Table,
  StatusDot,
  Stack,
  Skeleton,
  Select,
  RowSkeleton,
  ProgressBar,
  Pagination,
  PageHeader,
  Overlay,
  ModalShell,
  Input,
  IconWarning,
  IconTrash,
  IconSettings,
  IconSearch,
  IconPlus,
  IconMoreVertical,
  IconMinus,
  IconMenu,
  IconInfo,
  IconFilter,
  IconEyeOff,
  IconEye,
  IconExternalLink,
  IconError,
  IconEdit,
  IconCopy,
  IconClose,
  IconChevronUp,
  IconChevronRight,
  IconChevronLeft,
  IconChevronDown,
  IconCheckCircle,
  IconCheck,
  IconButton,
  IconArrowRight,
  IconArrowLeft,
  Icon,
  Field,
  ExpandableCard,
  EmptyState,
  ConfirmDialog,
  CardSkeleton,
  Card,
  Button,
  Badge
};
