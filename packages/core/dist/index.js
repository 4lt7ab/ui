// src/utils/useInjectStyles.ts
import { useEffect } from "react";
function useInjectStyles(id, css) {
  useEffect(() => {
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
// src/themes/ThemeProvider.tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect as useEffect2,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore
} from "react";

// src/themes/types.ts
function tokenToCssProperty(key) {
  return "--" + key.replace(/([A-Z0-9])/g, "-$1").toLowerCase();
}

// src/themes/definitions/synthwave.ts
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
    colorSurfaceSolid: "#0c081c",
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
    shadowSm: "0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)",
    shadowMd: "0 4px 12px rgba(0, 0, 0, 0.4), 0 0 6px rgba(0, 255, 245, 0.08)",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  },
  rhythm: {
    bpm: 80,
    easing: "sine",
    intensity: 1
  },
  css: `
    /* Base background */
    [data-theme="synthwave"] body,
    [data-theme="synthwave"] {
      background-color: #06020f;
    }

    /* ── Focus ring — static pink outline on form fields, no animation ── */
    [data-theme="synthwave"] input:focus,
    [data-theme="synthwave"] textarea:focus,
    [data-theme="synthwave"] select:focus {
      box-shadow: 0 0 6px rgba(255, 45, 149, 0.4);
    }

    /* ── Scanline overlay ── */
    [data-theme="synthwave"]::after {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      background: repeating-linear-gradient(
        transparent 0px,
        transparent 2px,
        rgba(0, 255, 245, 0.015) 2px,
        rgba(0, 255, 245, 0.015) 4px
      );
    }
  `
};
// src/themes/definitions/slate.ts
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
    colorSurfaceSolid: "#1a1d24",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  }
};
// src/themes/definitions/warm-sand.ts
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
    colorSurfaceSolid: "#1c1917",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  }
};
// src/themes/definitions/moss.ts
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
    colorSurfaceSolid: "#141a14",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  }
};
// src/themes/definitions/coral.ts
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
    colorSurfaceSolid: "#1f1714",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  }
};
// src/themes/definitions/pipboy.ts
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
    colorSurfaceSolid: "#0a0a0a",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  },
  rhythm: {
    bpm: 140,
    easing: "square",
    intensity: 0.85
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
      z-index: 1;
    }
  `
};
// src/themes/definitions/neural.ts
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
    colorSurfaceSolid: "#0a0a1a",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  },
  rhythm: {
    bpm: 60,
    easing: "triangle",
    intensity: 0.9
  },
  css: `
    [data-theme="neural"] body,
    [data-theme="neural"] {
      background-color: #0a0a1a;
    }
  `
};
// src/themes/definitions/pacman.ts
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
    colorSurfaceSolid: "#000000",
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
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
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
// src/themes/definitions/black-hole.ts
var blackHoleTheme = {
  name: "black-hole",
  label: "Black Hole",
  tokens: {
    colorText: "#e2dff0",
    colorTextSecondary: "#9b95b0",
    colorTextMuted: "#5e576e",
    colorTextInverse: "#050508",
    colorTextLink: "#a78bfa",
    colorTextPlaceholder: "#5e576e",
    colorTextDisabled: "#3a3548",
    colorSurface: "transparent",
    colorSurfaceSolid: "#08070d",
    colorSurfacePanel: "#08070d",
    colorSurfaceRaised: "rgba(16, 14, 24, 0.85)",
    colorSurfaceOverlay: "rgba(0, 0, 0, 0.92)",
    colorSurfaceInput: "rgba(12, 10, 20, 0.9)",
    colorSurfaceDisabled: "rgba(22, 20, 32, 0.8)",
    colorSurfacePage: "#050508",
    colorBorder: "#1e1a2e",
    colorBorderFocused: "#a78bfa",
    colorBorderError: "#f87171",
    colorActionPrimary: "#a78bfa",
    colorActionPrimaryHover: "#c4b5fd",
    colorActionSecondary: "#110f1a",
    colorActionSecondaryHover: "#1e1a2e",
    colorActionDestructive: "#f87171",
    colorActionDestructiveHover: "#fca5a5",
    colorSuccess: "#34d399",
    colorSuccessBg: "rgba(52, 211, 153, 0.08)",
    colorWarning: "#fbbf24",
    colorWarningBg: "rgba(251, 191, 36, 0.08)",
    colorError: "#f87171",
    colorErrorBg: "rgba(248, 113, 113, 0.08)",
    colorInfo: "#a78bfa",
    colorInfoBg: "rgba(167, 139, 250, 0.08)",
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
    shadowSm: "0 0 6px rgba(167, 139, 250, 0.08)",
    shadowMd: "0 0 12px rgba(167, 139, 250, 0.12)",
    shadowLg: "0 0 24px rgba(167, 139, 250, 0.16)",
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
    focusRingColor: "#a78bfa",
    focusRingWidth: "2px",
    focusRingOffset: "2px",
    transitionFast: "100ms ease",
    transitionBase: "150ms ease",
    transitionSlow: "250ms ease",
    borderWidthDefault: "1px",
    borderWidthThick: "2px",
    borderWidthAccent: "3px",
    zIndexDropdown: "50",
    zIndexSticky: "100",
    zIndexModal: "200",
    zIndexToast: "500",
    zIndexMax: "9999"
  },
  css: `
    [data-theme="black-hole"] body,
    [data-theme="black-hole"] {
      background-color: #050508;
    }
  `
};
// src/themes/rhythm.ts
var TAU = Math.PI * 2;
var easings = {
  sine: (t) => (1 - Math.cos(TAU * t)) / 2,
  triangle: (t) => 1 - Math.abs(t * 2 - 1),
  square: (t) => t < 0.5 ? 1 : 0,
  sawtooth: (t) => t
};
var engine = {
  config: null,
  startedAt: 0,
  phase: 0.5,
  rafId: 0,
  subscribers: new Set
};
function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia)
    return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function tick(now) {
  const { config, startedAt, subscribers } = engine;
  if (!config || subscribers.size === 0) {
    engine.rafId = 0;
    return;
  }
  const periodMs = 60000 / Math.max(1, config.bpm);
  const elapsed = now - startedAt;
  const t = elapsed % periodMs / periodMs;
  const easing = easings[config.easing ?? "sine"];
  const intensity = config.intensity ?? 1;
  engine.phase = easing(t) * intensity;
  for (const cb of subscribers)
    cb(engine.phase);
  engine.rafId = requestAnimationFrame(tick);
}
function startIfNeeded() {
  if (engine.rafId !== 0)
    return;
  if (!engine.config || engine.subscribers.size === 0)
    return;
  if (typeof window === "undefined")
    return;
  if (prefersReducedMotion()) {
    engine.phase = 0.5;
    for (const cb of engine.subscribers)
      cb(engine.phase);
    return;
  }
  engine.startedAt = performance.now();
  engine.rafId = requestAnimationFrame(tick);
}
function stop() {
  if (engine.rafId !== 0) {
    cancelAnimationFrame(engine.rafId);
    engine.rafId = 0;
  }
}
function setActiveRhythm(config) {
  const normalized = config ?? null;
  const prev = engine.config;
  if (prev === normalized || prev && normalized && prev.bpm === normalized.bpm && prev.easing === normalized.easing && prev.intensity === normalized.intensity) {
    return;
  }
  engine.config = normalized;
  engine.phase = 0.5;
  if (normalized && engine.subscribers.size > 0) {
    engine.startedAt = typeof performance !== "undefined" ? performance.now() : 0;
    if (engine.rafId === 0)
      startIfNeeded();
  } else if (!normalized) {
    stop();
  }
  rhythmConfigListeners.forEach((l) => l());
}
var rhythmConfigListeners = new Set;
function subscribeRhythmConfig(listener) {
  rhythmConfigListeners.add(listener);
  return () => {
    rhythmConfigListeners.delete(listener);
  };
}
function getRhythmConfigSnapshot() {
  return engine.config;
}
function getRhythmServerSnapshot() {
  return null;
}
function subscribePhase(cb) {
  engine.subscribers.add(cb);
  startIfNeeded();
  cb(engine.phase);
  return () => {
    engine.subscribers.delete(cb);
    if (engine.subscribers.size === 0)
      stop();
  };
}
function getCurrentPhase() {
  return engine.phase;
}

// src/themes/ThemeProvider.tsx
import { jsx } from "react/jsx-runtime";
var KEYFRAMES = {
  spin: "spin",
  fadeInUp: "fade-in-up"
};
var KEYFRAMES_CSS = [
  "@keyframes spin {",
  "  from { transform: rotate(0deg); }",
  "  to { transform: rotate(360deg); }",
  "}",
  "@media (prefers-reduced-motion: no-preference) {",
  "  @keyframes fade-in-up {",
  "    from { opacity: 0; transform: translateY(8px); }",
  "    to { opacity: 1; transform: translateY(0); }",
  "  }",
  "}",
  "@media (prefers-reduced-motion: reduce) {",
  "  @keyframes fade-in-up {",
  "    from { opacity: 0; }",
  "    to { opacity: 1; }",
  "  }",
  "}"
].join(`
`);
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
  defaultTheme = "warm-sand",
  storageKey = "ui-theme",
  applyPageStyles
}) {
  if (applyPageStyles === undefined && !_applyPageStylesWarned) {
    _applyPageStylesWarned = true;
    console.warn("ThemeProvider: applyPageStyles will default to false in v2. " + "Set it explicitly or call usePageBackground() for page backgrounds.");
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
    map.set(blackHoleTheme.name, blackHoleTheme);
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
  useEffect2(() => {
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
  useInjectStyles("ui-keyframes", KEYFRAMES_CSS);
  const styleElRef = useRef(null);
  useEffect2(() => {
    const definition = registry.get(resolved);
    if (!definition) {
      console.warn(`[@4lt7ab/ui] Theme "${resolved}" not found in registry. ` + `Available: ${Array.from(registry.keys()).join(", ")}`);
      return;
    }
    applyTokens(document.documentElement, definition.tokens);
    document.documentElement.setAttribute("data-theme", resolved);
    setActiveRhythm(definition.rhythm);
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
  return /* @__PURE__ */ jsx(ThemeContext.Provider, {
    value,
    children
  });
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
function useThemeRhythm() {
  const config = useSyncExternalStore(subscribeRhythmConfig, getRhythmConfigSnapshot, getRhythmServerSnapshot);
  const phaseRef = useRef(getCurrentPhase());
  const subscribe = useCallback((cb) => {
    return subscribePhase((phase) => {
      phaseRef.current = phase;
      cb(phase);
    });
  }, []);
  const durationCss = config ? `${Math.round(60000 / Math.max(1, config.bpm))}ms` : undefined;
  return { config, phaseRef, subscribe, durationCss };
}

// src/utils/staggerStyle.ts
function staggerStyle(index, options) {
  const { delayMs = 30, maxMs = 300, duration = 0.3 } = options ?? {};
  const delay = Math.min(index * delayMs, maxMs);
  return {
    animation: `${KEYFRAMES.fadeInUp} ${duration}s ease both`,
    animationDelay: `${delay}ms`
  };
}
// src/utils/usePageBackground.ts
import { useEffect as useEffect3, useRef as useRef2 } from "react";
function usePageBackground() {
  const { resolved } = useTheme();
  const prevBodyBgRef = useRef2("");
  const prevBodyColorRef = useRef2("");
  useEffect3(() => {
    prevBodyBgRef.current = document.body.style.backgroundColor;
    prevBodyColorRef.current = document.body.style.color;
    document.body.style.backgroundColor = "var(--color-surface-page)";
    document.body.style.color = "var(--color-text)";
    return () => {
      document.body.style.backgroundColor = prevBodyBgRef.current;
      document.body.style.color = prevBodyColorRef.current;
    };
  }, [resolved]);
}
// src/utils/useDisclosure.ts
import { useCallback as useCallback2, useId, useState as useState2 } from "react";
function useDisclosure(options = {}) {
  const { defaultOpen = false, open: controlledOpen, onOpenChange } = options;
  const [internalOpen, setInternalOpen] = useState2(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const contentId = useId();
  const setOpen = useCallback2((next) => {
    if (!isControlled)
      setInternalOpen(next);
    onOpenChange?.(next);
  }, [isControlled, onOpenChange]);
  const onToggle = useCallback2(() => {
    setOpen(!open);
  }, [open, setOpen]);
  const onOpen = useCallback2(() => {
    setOpen(true);
  }, [setOpen]);
  const onClose = useCallback2(() => {
    setOpen(false);
  }, [setOpen]);
  return {
    open,
    onToggle,
    onOpen,
    onClose,
    triggerProps: {
      "aria-expanded": open,
      "aria-controls": contentId,
      onClick: onToggle
    },
    contentProps: {
      id: contentId,
      role: "region",
      hidden: !open
    }
  };
}
// src/tokens/primitives.ts
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
// src/tokens/typography.ts
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
// src/tokens/semantic.ts
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
  colorSurfaceSolid: "var(--color-surface-solid)",
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
  focusRingOffset: "var(--focus-ring-offset)",
  transitionFast: "var(--transition-fast)",
  transitionBase: "var(--transition-base)",
  transitionSlow: "var(--transition-slow)",
  borderWidthDefault: "var(--border-width-default)",
  borderWidthThick: "var(--border-width-thick)",
  borderWidthAccent: "var(--border-width-accent)",
  zIndexDropdown: "var(--z-index-dropdown)",
  zIndexSticky: "var(--z-index-sticky)",
  zIndexModal: "var(--z-index-modal)",
  zIndexToast: "var(--z-index-toast)",
  zIndexMax: "var(--z-index-max)"
};
export {
  warmSandTheme,
  useThemeRhythm,
  useTheme,
  usePageBackground,
  useInjectStyles,
  useDisclosure,
  typography,
  tokenToCssProperty,
  synthwaveTheme,
  staggerStyle,
  spacing,
  slateTheme,
  shadows,
  setActiveRhythm2 as setActiveRhythm,
  semantic,
  radii,
  pipboyTheme,
  pacmanTheme,
  neuralTheme,
  mossTheme,
  coralTheme,
  colors,
  blackHoleTheme,
  ThemeProvider,
  KEYFRAMES
};
