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
    if (!container) return;
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
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

// src/index.ts
export * from "../../core/dist/index.js";

// src/components/ThemePicker/ThemePicker.tsx
import { forwardRef as forwardRef2, useState, useEffect as useEffect2, useRef, useCallback } from "react";
import { useTheme } from "../../core/dist/index.js";
import { useInjectStyles } from "../../core/dist/index.js";

// src/components/Icon/Icon.tsx
import { forwardRef, createContext, useContext } from "react";

// src/icons/icons.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M18 6L6 18M6 6l12 12" }) });
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M9 18l6-6-6-6" }) });
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M6 9l6 6 6-6" }) });
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M15 18l-6-6 6-6" }) });
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M18 15l-6-6-6 6" }) });
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17l-5-5" }) });
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ jsx("path", { d: "M22 4L12 14.01l-3-3" })
  ] });
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] });
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] });
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] });
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ jsx("path", { d: "M21 21l-4.35-4.35" })
  ] });
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" }) });
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] });
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14" }) });
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M5 12h14" }) });
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ jsx("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] });
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" }) });
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M3 12h18M3 6h18M3 18h18" }) });
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ jsx("path", { d: "M1 1l22 22" })
  ] });
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] });
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) });
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "19", r: "1" })
  ] });
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }) });
}

// src/icons/index.ts
var iconRegistry = {
  "close": IconClose,
  "chevron-right": IconChevronRight,
  "chevron-down": IconChevronDown,
  "chevron-left": IconChevronLeft,
  "chevron-up": IconChevronUp,
  "check": IconCheck,
  "check-circle": IconCheckCircle,
  "warning": IconWarning,
  "error": IconError,
  "info": IconInfo,
  "search": IconSearch,
  "trash": IconTrash,
  "settings": IconSettings,
  "plus": IconPlus,
  "minus": IconMinus,
  "edit": IconEdit,
  "arrow-left": IconArrowLeft,
  "arrow-right": IconArrowRight,
  "menu": IconMenu,
  "eye": IconEye,
  "eye-off": IconEyeOff,
  "copy": IconCopy,
  "external-link": IconExternalLink,
  "more-vertical": IconMoreVertical,
  "filter": IconFilter
};

// src/types.ts
import { semantic as t } from "../../core/dist/index.js";
var alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
};
var justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly"
};
var semanticColorMap = {
  primary: t.colorActionPrimary,
  success: t.colorSuccess,
  warning: t.colorWarning,
  error: t.colorError,
  info: t.colorInfo,
  muted: t.colorTextMuted
};
var iconSizeMap = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
var modalWidthMap = {
  sm: 400,
  md: 480,
  lg: 520,
  xl: 640
};
var progressBarHeightMap = {
  sm: 4,
  md: 6,
  lg: 10
};
var dividerOpacityMap = {
  subtle: 25,
  default: 50,
  strong: 75
};
var spacingMap = {
  xs: t.spaceXs,
  sm: t.spaceSm,
  md: t.spaceMd,
  lg: t.spaceLg,
  xl: t.spaceXl,
  "2xl": t.space2xl
};
var radiusMap = {
  none: "0",
  sm: t.radiusSm,
  md: t.radiusMd,
  lg: t.radiusLg,
  full: t.radiusFull
};
var shadowMap = {
  sm: t.shadowSm,
  md: t.shadowMd,
  lg: t.shadowLg
};

// src/components/Icon/Icon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var IconFontContext = createContext(void 0);
function IconFontProvider({ fontClass, children }) {
  return /* @__PURE__ */ jsx2(IconFontContext.Provider, { value: fontClass, children });
}
var Icon = forwardRef(
  function Icon2({ name, size = "lg", fontClass, "aria-label": ariaLabel, id, "data-testid": dataTestId }, ref) {
    const contextFontClass = useContext(IconFontContext);
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;
    const px = iconSizeMap[size];
    const resolvedFontClass = fontClass ?? contextFontClass;
    if (!IconComponent && resolvedFontClass) {
      return /* @__PURE__ */ jsx2(
        "span",
        {
          ref,
          id,
          "data-testid": dataTestId,
          role: isDecorative ? void 0 : "img",
          "aria-hidden": isDecorative || void 0,
          "aria-label": ariaLabel,
          className: resolvedFontClass,
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: px,
            minHeight: px,
            fontSize: px,
            lineHeight: 1,
            color: "inherit",
            fontStyle: "normal"
          },
          children: name
        }
      );
    }
    return /* @__PURE__ */ jsx2(
      "span",
      {
        ref,
        id,
        "data-testid": dataTestId,
        role: isDecorative ? void 0 : "img",
        "aria-hidden": isDecorative || void 0,
        "aria-label": ariaLabel,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: px,
          height: px,
          lineHeight: 1,
          color: "inherit"
        },
        children: IconComponent ? /* @__PURE__ */ jsx2(IconComponent, { size: px }) : null
      }
    );
  }
);

// src/components/ThemePicker/ThemePicker.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var GRID_STYLES_ID = "alttab-theme-picker";
var gridCSS = (
  /* css */
  `
  .alttab-theme-picker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .alttab-theme-card {
    background: var(--color-surface);
    border: var(--border-width-thick) solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    cursor: pointer;
    transition: border-color var(--transition-base), transform var(--transition-base);
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
`
);
var COMPACT_STYLES_ID = "alttab-theme-picker-compact";
var compactCSS = (
  /* css */
  `
  .alttab-tp-trigger {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.625rem;
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--color-text-secondary);
    background: var(--color-surface-raised);
    border: var(--border-width-default) solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: border-color var(--transition-base);
  }

  .alttab-tp-trigger:hover {
    border-color: var(--color-text-link);
  }

  .alttab-tp-menu-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    text-align: left;
    padding: 0.375rem 0.5rem;
    font-size: 0.8rem;
    font-family: var(--font-sans);
    font-weight: 400;
    color: var(--color-text-secondary);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background 0.1s ease, color 0.1s ease;
  }

  .alttab-tp-menu-item:hover,
  .alttab-tp-menu-item--focused {
    background: var(--color-surface-raised);
    color: var(--color-text);
  }

  .alttab-tp-menu-item--active {
    font-weight: 600;
    color: var(--color-text);
    background: var(--color-surface-raised);
  }
`
);
function GridView({ descriptions }) {
  useInjectStyles(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = useTheme();
  return /* @__PURE__ */ jsx3("div", { className: "alttab-theme-picker", children: Array.from(themes.values()).map((def) => {
    const isActive = resolved === def.name;
    return /* @__PURE__ */ jsxs2(
      "button",
      {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ jsx3("span", { className: "alttab-theme-card__name", children: def.label }),
          descriptions[def.name] && /* @__PURE__ */ jsx3("span", { className: "alttab-theme-card__desc", children: descriptions[def.name] })
        ]
      },
      def.name
    );
  }) });
}
function CompactView() {
  useInjectStyles(COMPACT_STYLES_ID, compactCSS);
  const { resolved, themes, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const themeList = Array.from(themes.values());
  useEffect2(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(0);
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((i) => (i + 1) % themeList.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((i) => (i - 1 + themeList.length) % themeList.length);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < themeList.length) {
          setTheme(themeList[focusedIndex].name);
          setOpen(false);
          triggerRef.current?.focus();
        }
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusedIndex(themeList.length - 1);
        break;
    }
  }, [open, focusedIndex, themeList, setTheme]);
  useEffect2(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  useEffect2(() => {
    if (open) {
      const activeIdx = themeList.findIndex((t39) => t39.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]);
  const currentTheme = themeList.find((t39) => t39.name === resolved);
  return /* @__PURE__ */ jsxs2("div", { ref: containerRef, style: { position: "relative" }, onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxs2(
      "button",
      {
        ref: triggerRef,
        className: "alttab-tp-trigger",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx3("span", { style: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--color-action-primary)",
            flexShrink: 0
          } }),
          currentTheme?.label ?? resolved,
          /* @__PURE__ */ jsx3(Icon, { name: open ? "chevron-up" : "chevron-down", size: "xs" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx3(
      "div",
      {
        ref: menuRef,
        role: "listbox",
        "aria-activedescendant": focusedIndex >= 0 ? `alttab-tp-item-${themeList[focusedIndex]?.name}` : void 0,
        style: {
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: "0.25rem",
          background: "var(--color-surface-panel)",
          border: "var(--border-width-default) solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          padding: "0.25rem",
          minWidth: "10rem",
          zIndex: "var(--z-index-sticky)",
          boxShadow: "var(--shadow-md)"
        },
        children: themeList.map((t39, idx) => {
          const isActive = resolved === t39.name;
          const isFocused = focusedIndex === idx;
          const classes = [
            "alttab-tp-menu-item",
            isActive ? "alttab-tp-menu-item--active" : "",
            isFocused && !isActive ? "alttab-tp-menu-item--focused" : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ jsxs2(
            "button",
            {
              id: `alttab-tp-item-${t39.name}`,
              role: "option",
              "aria-selected": isActive,
              className: classes,
              onClick: () => {
                setTheme(t39.name);
                setOpen(false);
                triggerRef.current?.focus();
              },
              onMouseEnter: () => setFocusedIndex(idx),
              children: [
                /* @__PURE__ */ jsx3("span", { style: {
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: isActive ? "var(--color-action-primary)" : "var(--color-text-muted)",
                  flexShrink: 0
                } }),
                t39.label
              ]
            },
            t39.name
          );
        })
      }
    )
  ] });
}
var ThemePicker = forwardRef2(
  function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
    if (variant === "compact") {
      return /* @__PURE__ */ jsx3("div", { ref, style: { display: "inline-block" }, children: /* @__PURE__ */ jsx3(CompactView, {}) });
    }
    return /* @__PURE__ */ jsx3("div", { ref, children: /* @__PURE__ */ jsx3(GridView, { descriptions }) });
  }
);

// src/components/Button/Button.tsx
import { forwardRef as forwardRef3 } from "react";
import { semantic as t2, useInjectStyles as useInjectStyles2, Slot } from "../../core/dist/index.js";
import { jsx as jsx4 } from "react/jsx-runtime";
var variantStyles = {
  primary: {
    background: t2.colorActionPrimary,
    color: t2.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: t2.colorActionSecondary,
    color: t2.colorText,
    border: `${t2.borderWidthDefault} solid ${t2.colorBorder}`
  },
  destructive: {
    background: t2.colorActionDestructive,
    color: t2.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: t2.colorText,
    border: `${t2.borderWidthDefault} solid transparent`
  }
};
var sizeStyles = {
  sm: {
    padding: `${t2.spaceXs} ${t2.spaceSm}`,
    fontSize: t2.fontSizeSm,
    lineHeight: t2.lineHeightTight
  },
  md: {
    padding: `${t2.spaceSm} ${t2.spaceMd}`,
    fontSize: t2.fontSizeSm,
    lineHeight: t2.lineHeightTight
  },
  lg: {
    padding: `${t2.spaceSm} ${t2.spaceLg}`,
    fontSize: t2.fontSizeBase,
    lineHeight: t2.lineHeightBase
  }
};
var baseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: t2.spaceSm,
  borderRadius: t2.radiusMd,
  fontFamily: t2.fontSans,
  fontWeight: t2.fontWeightMedium,
  cursor: "pointer",
  transition: `background ${t2.transitionBase}, border-color ${t2.transitionBase}, opacity ${t2.transitionBase}`
};
var SPINNER_STYLES_ID = "alttab-button-spinner";
var spinnerCSS = (
  /* css */
  `
  @keyframes alttab-btn-spin {
    to { transform: rotate(360deg); }
  }
  .alttab-btn-spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: ${t2.borderWidthThick} solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: alttab-btn-spin 600ms linear infinite;
  }
`
);
var iconOnlyPadding = {
  sm: t2.spaceXs,
  md: t2.spaceSm,
  lg: t2.spaceSm
};
var Button = forwardRef3(
  function Button2({
    variant = "primary",
    size = "md",
    loading = false,
    iconOnly = false,
    asChild = false,
    children,
    disabled,
    onClick,
    type,
    form,
    name,
    value,
    tabIndex,
    autoFocus,
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    "aria-haspopup": ariaHasPopup,
    "data-testid": dataTestId
  }, ref) {
    useInjectStyles2(SPINNER_STYLES_ID, spinnerCSS);
    const isDisabled2 = disabled || loading;
    const style = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...iconOnly ? { padding: iconOnlyPadding[size], aspectRatio: "1", minWidth: 0 } : {},
      ...isDisabled2 ? { opacity: 0.5, cursor: "not-allowed" } : {}
    };
    const commonProps = {
      tabIndex,
      id,
      onClick,
      "aria-busy": loading || void 0,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      "aria-expanded": ariaExpanded,
      "aria-controls": ariaControls,
      "aria-haspopup": ariaHasPopup,
      "data-testid": dataTestId,
      style
    };
    if (asChild) {
      return /* @__PURE__ */ jsx4(
        Slot,
        {
          ref,
          ...commonProps,
          "aria-disabled": isDisabled2 || void 0,
          children
        }
      );
    }
    return /* @__PURE__ */ jsx4(
      "button",
      {
        ref,
        type,
        form,
        name,
        value,
        autoFocus,
        disabled: isDisabled2,
        ...commonProps,
        children: loading ? /* @__PURE__ */ jsx4("span", { className: "alttab-btn-spinner" }) : children
      }
    );
  }
);

// src/components/Stack/Stack.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var gapMap = spacingMap;
var Stack = forwardRef4(
  function Stack2({
    direction = "vertical",
    gap = "md",
    align,
    justify,
    wrap,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ jsx5(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        style: {
          display: "flex",
          flexDirection: direction === "vertical" ? "column" : "row",
          gap: gapMap[gap],
          alignItems: align ? alignMap[align] : void 0,
          justifyContent: justify ? justifyMap[justify] : void 0,
          flexWrap: wrap ? "wrap" : void 0
        },
        children
      }
    );
  }
);

// src/components/Card/Card.tsx
import { forwardRef as forwardRef5, useEffect as useEffect3, useRef as useRef2 } from "react";
import { semantic as t3, useInjectStyles as useInjectStyles3, useThemeRhythm } from "../../core/dist/index.js";
import { jsx as jsx6 } from "react/jsx-runtime";
var paddingMap = spacingMap;
var variantStyles2 = {
  default: {
    background: t3.colorSurfaceSolid,
    border: `${t3.borderWidthDefault} solid ${t3.colorBorder}`,
    boxShadow: t3.shadowSm
  },
  flat: {
    background: t3.colorSurfaceRaised,
    border: `${t3.borderWidthDefault} solid ${t3.colorBorder}`,
    boxShadow: "none"
  },
  elevated: {
    background: t3.colorSurfaceSolid,
    border: `${t3.borderWidthDefault} solid ${t3.colorBorder}`,
    boxShadow: t3.shadowMd
  }
};
var HOVER_STYLES_ID = "4lt7ab-card-hover";
var HOVER_STYLES_CSS = `
[data-card-hover] {
  cursor: pointer;
  transition: transform ${t3.transitionSlow}, border-color ${t3.transitionSlow}, box-shadow ${t3.transitionSlow};
}
[data-card-hover]:hover {
  transform: translateY(-2px);
  border-color: ${t3.colorBorderFocused};
  box-shadow: ${t3.shadowMd};
}
`;
var GLOW_STYLES_ID = "4lt7ab-card-glow";
var GLOW_STYLES_CSS = `
[data-card-glow] {
  --card-glow-strength: 0;
}
`;
var GLOW_BOX_SHADOW = `0 0 calc(var(--card-glow-strength, 0) * 16px) calc(var(--card-glow-strength, 0) * 2px) color-mix(in srgb, ${t3.colorActionPrimary} calc(var(--card-glow-strength, 0) * 70%), transparent)`;
function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var Card = forwardRef5(
  function Card2({
    variant = "default",
    padding = "lg",
    hover = false,
    glow = false,
    children,
    ...rest
  }, ref) {
    useInjectStyles3(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    useInjectStyles3(GLOW_STYLES_ID, GLOW_STYLES_CSS);
    const internalRef = useRef2(null);
    const setRef = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    const { config, subscribe } = useThemeRhythm();
    useEffect3(() => {
      if (!glow || !config) return;
      if (prefersReducedMotion()) return;
      const el = internalRef.current;
      if (!el) return;
      const unsubscribe = subscribe((phase) => {
        el.style.setProperty("--card-glow-strength", String(phase));
      });
      return () => {
        unsubscribe();
        el.style.removeProperty("--card-glow-strength");
      };
    }, [glow, config, subscribe]);
    return /* @__PURE__ */ jsx6(
      "div",
      {
        ref: setRef,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "data-card-hover": hover || void 0,
        "data-card-glow": glow || void 0,
        style: {
          borderRadius: t3.radiusLg,
          padding: paddingMap[padding],
          color: t3.colorText,
          ...variantStyles2[variant],
          ...glow ? { boxShadow: GLOW_BOX_SHADOW } : void 0
        },
        children
      }
    );
  }
);

// src/components/Field/Field.tsx
import { semantic as t4 } from "../../core/dist/index.js";
import { forwardRef as forwardRef6, useId, isValidElement, cloneElement } from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var labelStyle = {
  display: "block",
  fontSize: t4.fontSizeSm,
  fontWeight: t4.fontWeightMedium,
  lineHeight: t4.lineHeightTight,
  color: t4.colorText,
  fontFamily: t4.fontSans
};
var requiredStyle = {
  color: t4.colorError,
  marginLeft: "0.125rem"
};
var helpStyle = {
  fontSize: t4.fontSizeXs,
  lineHeight: t4.lineHeightTight,
  color: t4.colorTextMuted,
  fontFamily: t4.fontSans,
  margin: 0
};
var errorStyle = {
  fontSize: t4.fontSizeXs,
  lineHeight: t4.lineHeightTight,
  color: t4.colorError,
  fontFamily: t4.fontSans,
  margin: 0
};
var Field = forwardRef6(
  function Field2({
    label,
    htmlFor,
    error,
    help,
    required,
    disabled,
    children,
    ...rest
  }, ref) {
    const autoId = useId();
    const helpId = help ? `${autoId}-help` : void 0;
    const errorId = error ? `${autoId}-error` : void 0;
    const describedBy = [errorId, helpId].filter(Boolean).join(" ") || void 0;
    const enhancedChildren = isValidElement(children) ? cloneElement(children, {
      "aria-describedby": describedBy
    }) : children;
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-describedby": rest["aria-describedby"],
        style: {
          display: "flex",
          flexDirection: "column",
          gap: t4.spaceXs,
          opacity: disabled ? 0.6 : void 0
        },
        children: [
          /* @__PURE__ */ jsxs3("label", { htmlFor, style: labelStyle, children: [
            label,
            required && /* @__PURE__ */ jsx7("span", { style: requiredStyle, "aria-hidden": "true", children: "*" })
          ] }),
          enhancedChildren,
          error && /* @__PURE__ */ jsx7("p", { id: errorId, role: "alert", style: errorStyle, children: error }),
          !error && help && /* @__PURE__ */ jsx7("p", { id: helpId, style: helpStyle, children: help })
        ]
      }
    );
  }
);

// src/components/Input/Input.tsx
import { forwardRef as forwardRef7 } from "react";
import { semantic as t5 } from "../../core/dist/index.js";
import { jsx as jsx8 } from "react/jsx-runtime";
var baseStyle = {
  display: "block",
  width: "100%",
  padding: `${t5.spaceSm} ${t5.spaceMd}`,
  fontSize: t5.fontSizeSm,
  lineHeight: t5.lineHeightTight,
  fontFamily: t5.fontSans,
  color: t5.colorText,
  background: t5.colorSurfaceInput,
  border: `${t5.borderWidthDefault} solid ${t5.colorBorder}`,
  borderRadius: t5.radiusMd,
  outline: "none",
  transition: `border-color ${t5.transitionBase}, box-shadow ${t5.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle = {
  borderColor: t5.colorBorderError
};
var disabledStyle = {
  background: t5.colorSurfaceDisabled,
  color: t5.colorTextDisabled,
  cursor: "not-allowed"
};
var Input = forwardRef7(
  function Input2({
    hasError,
    disabled,
    type,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    maxLength,
    min,
    max,
    step,
    pattern,
    inputMode,
    name,
    required,
    autoFocus,
    autoComplete,
    id,
    form,
    tabIndex,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "data-testid": dataTestId
  }, ref) {
    return /* @__PURE__ */ jsx8(
      "input",
      {
        ref,
        type,
        value,
        defaultValue,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
        placeholder,
        readOnly,
        maxLength,
        min,
        max,
        step,
        pattern,
        inputMode,
        name,
        disabled,
        required,
        autoFocus,
        autoComplete,
        id,
        form,
        tabIndex,
        "aria-invalid": ariaInvalid ?? (hasError || void 0),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        "data-testid": dataTestId,
        style: {
          ...baseStyle,
          ...hasError ? errorBorderStyle : {},
          ...disabled ? disabledStyle : {}
        }
      }
    );
  }
);

// src/components/Textarea/Textarea.tsx
import { forwardRef as forwardRef8 } from "react";
import { semantic as t6 } from "../../core/dist/index.js";
import { jsx as jsx9 } from "react/jsx-runtime";
var baseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${t6.spaceSm} ${t6.spaceMd}`,
  fontSize: t6.fontSizeSm,
  lineHeight: t6.lineHeightBase,
  fontFamily: t6.fontSans,
  color: t6.colorText,
  background: t6.colorSurfaceInput,
  border: `${t6.borderWidthDefault} solid ${t6.colorBorder}`,
  borderRadius: t6.radiusMd,
  outline: "none",
  transition: `border-color ${t6.transitionBase}, box-shadow ${t6.transitionBase}`,
  boxSizing: "border-box",
  resize: "vertical",
  minHeight: "5rem"
};
var errorBorderStyle2 = {
  borderColor: t6.colorBorderError
};
var disabledStyle2 = {
  background: t6.colorSurfaceDisabled,
  color: t6.colorTextDisabled,
  cursor: "not-allowed",
  resize: "none"
};
var Textarea = forwardRef8(
  function Textarea2({
    hasError,
    disabled,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    rows,
    maxLength,
    name,
    required,
    autoFocus,
    id,
    form,
    tabIndex,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "data-testid": dataTestId
  }, ref) {
    return /* @__PURE__ */ jsx9(
      "textarea",
      {
        ref,
        value,
        defaultValue,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
        placeholder,
        readOnly,
        rows,
        maxLength,
        name,
        disabled,
        required,
        autoFocus,
        id,
        form,
        tabIndex,
        "aria-invalid": ariaInvalid ?? (hasError || void 0),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        "data-testid": dataTestId,
        style: {
          ...baseStyle2,
          ...hasError ? errorBorderStyle2 : {},
          ...disabled ? disabledStyle2 : {}
        }
      }
    );
  }
);

// src/components/Select/Select.tsx
import {
  createContext as createContext2,
  useCallback as useCallback2,
  useContext as useContext2,
  useEffect as useEffect4,
  useId as useId2,
  useMemo,
  useRef as useRef3,
  useState as useState2
} from "react";
import { semantic as t7, useInjectStyles as useInjectStyles4 } from "../../core/dist/index.js";
import { Fragment, jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var SELECT_STYLES_ID = "alttab-select";
var selectCSS = (
  /* css */
  `
  .alttab-select-option {
    display: block;
    width: 100%;
    text-align: left;
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-tight);
    font-family: var(--font-sans);
    color: var(--color-text);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background 0.1s ease;
  }

  .alttab-select-option:hover,
  .alttab-select-option--focused {
    background: var(--color-surface-raised);
  }

  .alttab-select-option--disabled {
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }

  .alttab-select-option--disabled:hover {
    background: transparent;
  }

  .alttab-select-option--selected {
    font-weight: var(--font-weight-semibold);
  }

  .alttab-select-trigger:focus-visible {
    border-color: var(--color-border-focused);
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }
`
);
var SelectContext = createContext2(null);
function useSelectContext(part) {
  const ctx = useContext2(SelectContext);
  if (!ctx) {
    throw new Error(
      `Select.${part} must be rendered inside <Select.Root>. See the upgrade guide for the 0.4.0 compound API.`
    );
  }
  return ctx;
}
function Root({
  value: controlledValue,
  defaultValue,
  onValueChange,
  onChange,
  disabled = false,
  hasError = false,
  name,
  required,
  id,
  form,
  children
}) {
  useInjectStyles4(SELECT_STYLES_ID, selectCSS);
  const instanceId = useId2();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = useState2(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = useState2(false);
  const [focusedValue, setFocusedValue] = useState2(null);
  const [dropDirection, setDropDirection] = useState2("down");
  const containerRef = useRef3(null);
  const triggerRef = useRef3(null);
  const [items, setItems] = useState2([]);
  const registerItem = useCallback2((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = useCallback2((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = useCallback2(
    (next, fromUser) => {
      if (!isControlled) setInternalValue(next);
      if (fromUser) {
        onValueChange?.(next);
        onChange?.({ target: { value: next, name } });
      }
    },
    [isControlled, onValueChange, onChange, name]
  );
  const calculateDirection = useCallback2(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(items.length * 32 + 8, 256);
    setDropDirection(
      spaceBelow >= estimatedHeight ? "down" : spaceAbove > spaceBelow ? "up" : "down"
    );
  }, [items.length]);
  const openMenu = useCallback2(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const current = items.find((i) => i.value === value && !i.disabled);
    const firstEnabled = items.find((i) => !i.disabled);
    setFocusedValue((current ?? firstEnabled)?.value ?? null);
  }, [disabled, calculateDirection, items, value]);
  const closeMenu = useCallback2(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const toggleMenu = useCallback2(() => {
    if (open) closeMenu();
    else openMenu();
  }, [open, openMenu, closeMenu]);
  const selectItem = useCallback2(
    (itemValue) => {
      const item = items.find((i) => i.value === itemValue);
      if (!item || item.disabled) return;
      setValue(item.value, true);
      closeMenu();
      triggerRef.current?.focus();
    },
    [items, setValue, closeMenu]
  );
  useEffect4(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  const handleKeyDown = useCallback2(
    (e) => {
      if (e.key === "Escape") {
        if (open) {
          e.preventDefault();
          closeMenu();
          triggerRef.current?.focus();
        }
        return;
      }
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openMenu();
        }
        return;
      }
      const enabled = items.filter((i) => !i.disabled);
      if (enabled.length === 0) return;
      const currentIdx = focusedValue ? enabled.findIndex((i) => i.value === focusedValue) : -1;
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const next = currentIdx < enabled.length - 1 && currentIdx >= 0 ? enabled[currentIdx + 1] : enabled[0];
          setFocusedValue(next.value);
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prev = currentIdx > 0 ? enabled[currentIdx - 1] : enabled[enabled.length - 1];
          setFocusedValue(prev.value);
          break;
        }
        case "Home":
          e.preventDefault();
          setFocusedValue(enabled[0].value);
          break;
        case "End":
          e.preventDefault();
          setFocusedValue(enabled[enabled.length - 1].value);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (focusedValue) selectItem(focusedValue);
          break;
        case "Tab":
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedValue, items, selectItem]
  );
  const ctx = useMemo(
    () => ({
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      toggleMenu,
      disabled,
      hasError,
      focusedValue,
      setFocusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      triggerRef,
      dropDirection,
      selectItem
    }),
    [
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      toggleMenu,
      disabled,
      hasError,
      focusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      dropDirection,
      selectItem
    ]
  );
  return /* @__PURE__ */ jsx10(SelectContext.Provider, { value: ctx, children: /* @__PURE__ */ jsxs4(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsxs4(
          "select",
          {
            name,
            id,
            form,
            required,
            disabled,
            value,
            onChange: () => {
            },
            tabIndex: -1,
            "aria-hidden": true,
            style: hiddenSelectStyle,
            children: [
              /* @__PURE__ */ jsx10("option", { value: "" }),
              items.map((item) => /* @__PURE__ */ jsx10(
                "option",
                {
                  value: item.value,
                  disabled: item.disabled,
                  children: item.label
                },
                item.value
              ))
            ]
          }
        ),
        children
      ]
    }
  ) });
}
function Trigger({
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "data-testid": dataTestId,
  tabIndex
}) {
  const ctx = useSelectContext("Trigger");
  const {
    open,
    toggleMenu,
    disabled,
    hasError,
    focusedValue,
    items,
    listboxId,
    instanceId,
    triggerRef
  } = ctx;
  const activeDescendant = open && focusedValue ? `${instanceId}-opt-${focusedValue}` : void 0;
  const hasSelection = items.some((i) => i.value === ctx.value);
  return /* @__PURE__ */ jsxs4(
    "button",
    {
      ref: triggerRef,
      type: "button",
      className: "alttab-select-trigger",
      role: "combobox",
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-controls": listboxId,
      "aria-invalid": hasError || void 0,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      "aria-activedescendant": activeDescendant,
      disabled,
      tabIndex,
      onClick: toggleMenu,
      "data-testid": dataTestId,
      style: {
        ...triggerBaseStyle,
        ...hasError ? errorBorderStyle3 : {},
        ...disabled ? disabledStyle3 : {},
        ...hasSelection ? {} : placeholderStyle
      },
      children: [
        /* @__PURE__ */ jsx10("span", { style: triggerTextStyle, children }),
        /* @__PURE__ */ jsx10("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ jsx10(ChevronSVG, { rotated: open }) })
      ]
    }
  );
}
function Value({ placeholder }) {
  const { value, items } = useSelectContext("Value");
  const selected = items.find((i) => i.value === value);
  return /* @__PURE__ */ jsx10(Fragment, { children: selected?.label ?? placeholder ?? "\xA0" });
}
function Content({ children }) {
  const { open, listboxId, dropDirection, focusedValue } = useSelectContext("Content");
  const ref = useRef3(null);
  useEffect4(() => {
    if (!open || !focusedValue) return;
    const menu = ref.current;
    if (!menu) return;
    const focused = menu.querySelector(
      `[data-value="${CSS.escape(focusedValue)}"]`
    );
    focused?.scrollIntoView({ block: "nearest" });
  }, [open, focusedValue]);
  const positionStyle = dropDirection === "down" ? {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: t7.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: t7.spaceXs
  };
  return /* @__PURE__ */ jsx10(
    "div",
    {
      ref,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        background: t7.colorSurfacePanel,
        border: `${t7.borderWidthDefault} solid ${t7.colorBorder}`,
        borderRadius: t7.radiusMd,
        padding: t7.spaceXs,
        zIndex: t7.zIndexSticky,
        boxShadow: t7.shadowMd,
        maxHeight: "16rem",
        overflowY: "auto",
        boxSizing: "border-box"
      } : void 0,
      children
    }
  );
}
function Item({
  value,
  disabled = false,
  textValue,
  children
}) {
  const ctx = useSelectContext("Item");
  const {
    value: selectedValue,
    focusedValue,
    setFocusedValue,
    selectItem,
    registerItem,
    unregisterItem,
    instanceId
  } = ctx;
  const resolvedLabel = textValue ?? (typeof children === "string" ? children : value);
  useEffect4(() => {
    registerItem({ value, label: resolvedLabel, disabled });
    return () => unregisterItem(value);
  }, [value, resolvedLabel, disabled, registerItem, unregisterItem]);
  const isSelected = selectedValue === value;
  const isFocused = focusedValue === value;
  const classes = [
    "alttab-select-option",
    isSelected ? "alttab-select-option--selected" : "",
    isFocused ? "alttab-select-option--focused" : "",
    disabled ? "alttab-select-option--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx10(
    "button",
    {
      type: "button",
      role: "option",
      id: `${instanceId}-opt-${value}`,
      "data-value": value,
      "aria-selected": isSelected,
      "aria-disabled": disabled || void 0,
      className: classes,
      onClick: () => selectItem(value),
      onMouseEnter: () => {
        if (!disabled) setFocusedValue(value);
      },
      children
    }
  );
}
var wrapperStyle = {
  position: "relative",
  display: "block",
  width: "100%"
};
var hiddenSelectStyle = {
  position: "absolute",
  width: 0,
  height: 0,
  overflow: "hidden",
  opacity: 0,
  pointerEvents: "none"
};
var triggerBaseStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: t7.spaceSm,
  width: "100%",
  padding: `${t7.spaceSm} ${t7.spaceMd}`,
  fontSize: t7.fontSizeSm,
  lineHeight: t7.lineHeightTight,
  fontFamily: t7.fontSans,
  color: t7.colorText,
  background: t7.colorSurfaceInput,
  border: `${t7.borderWidthDefault} solid ${t7.colorBorder}`,
  borderRadius: t7.radiusMd,
  outline: "none",
  transition: `border-color ${t7.transitionBase}, box-shadow ${t7.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerTextStyle = {
  flex: "1 1 auto",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var chevronStyle = {
  flex: "0 0 auto",
  pointerEvents: "none",
  color: t7.colorTextSecondary,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
var errorBorderStyle3 = {
  borderColor: t7.colorBorderError
};
var disabledStyle3 = {
  background: t7.colorSurfaceDisabled,
  color: t7.colorTextDisabled,
  cursor: "not-allowed"
};
var placeholderStyle = {
  color: t7.colorTextPlaceholder
};
function ChevronSVG({ rotated }) {
  return /* @__PURE__ */ jsx10(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        transition: `transform ${t7.transitionBase}`,
        transform: rotated ? "rotate(180deg)" : "none"
      },
      children: /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L6 9.31 2.22 5.53a.75.75 0 0 1 0-1.06z",
          fill: "currentColor"
        }
      )
    }
  );
}
var Select = {
  Root,
  Trigger,
  Value,
  Content,
  Item
};

// src/components/Badge/Badge.tsx
import { forwardRef as forwardRef9 } from "react";
import { semantic as t8 } from "../../core/dist/index.js";
import { jsx as jsx11 } from "react/jsx-runtime";
var variantStyles3 = {
  default: {
    border: `${t8.borderWidthDefault} solid ${t8.colorBorder}`,
    color: t8.colorTextSecondary
  },
  primary: {
    background: `color-mix(in srgb, ${t8.colorActionPrimary} 14%, transparent)`,
    color: t8.colorActionPrimary
  },
  success: {
    background: t8.colorSuccessBg,
    color: t8.colorSuccess
  },
  warning: {
    background: t8.colorWarningBg,
    color: t8.colorWarning
  },
  error: {
    background: t8.colorErrorBg,
    color: t8.colorError
  },
  info: {
    background: t8.colorInfoBg,
    color: t8.colorInfo
  }
};
var baseStyles2 = {
  display: "inline-block",
  padding: `${t8.spaceXs} ${t8.spaceSm}`,
  borderRadius: t8.radiusFull,
  fontSize: t8.fontSizeXs,
  fontWeight: t8.fontWeightSemibold,
  fontFamily: t8.fontSans,
  textTransform: "uppercase",
  letterSpacing: t8.letterSpacingWide
};
var xsBaseStyles = {
  display: "inline-block",
  fontSize: "0.6rem",
  fontFamily: t8.fontMono,
  fontWeight: t8.fontWeightMedium,
  color: t8.colorTextMuted,
  borderRadius: t8.radiusFull,
  background: `color-mix(in srgb, ${t8.colorBorder} 40%, transparent)`,
  padding: `0.0625rem ${t8.spaceXs}`,
  lineHeight: t8.lineHeightTight,
  letterSpacing: t8.letterSpacingWide,
  textTransform: "lowercase"
};
var Badge = forwardRef9(
  function Badge2({
    children,
    variant = "default",
    size = "default",
    ...rest
  }, ref) {
    const isXs = size === "xs";
    const base = isXs ? xsBaseStyles : baseStyles2;
    return /* @__PURE__ */ jsx11(
      "span",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        style: {
          ...base,
          ...variantStyles3[variant]
        },
        children
      }
    );
  }
);

// src/components/IconButton/IconButton.tsx
import { forwardRef as forwardRef10, useId as useId3 } from "react";
import { semantic as t9, useInjectStyles as useInjectStyles5, Slot as Slot2 } from "../../core/dist/index.js";
import { Fragment as Fragment2, jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var buttonSizeMap = {
  sm: 28,
  md: 36,
  lg: 44
};
var iconSizeForButton = {
  sm: "sm",
  md: "md",
  lg: "lg"
};
var IconButton = forwardRef10(
  function IconButton2({
    icon,
    size = "md",
    badge,
    fontClass,
    asChild = false,
    children,
    onClick,
    disabled,
    type,
    tabIndex,
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    "data-testid": dataTestId
  }, ref) {
    const uid = useId3();
    const styleId = `icon-btn-${uid.replace(/:/g, "")}`;
    useInjectStyles5(
      styleId,
      `[data-icon-btn-id="${styleId}"]:hover:not(:disabled) {
        background: color-mix(in srgb, currentColor 8%, transparent);
      }
      [data-icon-btn-id="${styleId}"]:focus-visible {
        outline: ${t9.focusRingWidth} solid ${t9.focusRingColor};
        outline-offset: ${t9.focusRingOffset};
      }`
    );
    const dim = buttonSizeMap[size];
    const style = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: t9.radiusFull,
      background: "transparent",
      border: "none",
      color: t9.colorTextMuted,
      cursor: "pointer",
      padding: 0
    };
    const iconAndBadge = /* @__PURE__ */ jsxs5(Fragment2, { children: [
      /* @__PURE__ */ jsx12(Icon, { name: icon, size: iconSizeForButton[size], fontClass }),
      badge && /* @__PURE__ */ jsx12(
        "span",
        {
          style: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 8,
            height: 8,
            borderRadius: t9.radiusFull,
            background: t9.colorError,
            border: `${t9.borderWidthThick} solid ${t9.colorSurface}`
          }
        }
      )
    ] });
    const commonProps = {
      "data-icon-btn-id": styleId,
      onClick,
      tabIndex,
      id,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      "aria-expanded": ariaExpanded,
      "aria-controls": ariaControls,
      "data-testid": dataTestId,
      style
    };
    if (asChild) {
      return /* @__PURE__ */ jsx12(Slot2, { ref, ...commonProps, "aria-disabled": disabled || void 0, children });
    }
    return /* @__PURE__ */ jsx12(
      "button",
      {
        ref,
        type,
        disabled,
        ...commonProps,
        children: iconAndBadge
      }
    );
  }
);

// src/components/Overlay/Overlay.tsx
import { forwardRef as forwardRef11 } from "react";
import { semantic as t10 } from "../../core/dist/index.js";
import { jsx as jsx13 } from "react/jsx-runtime";
var Overlay = forwardRef11(
  function Overlay2({
    onClick,
    zIndex = t10.zIndexSticky
  }, ref) {
    return /* @__PURE__ */ jsx13(
      "div",
      {
        ref,
        role: "presentation",
        onClick,
        style: {
          position: "fixed",
          inset: 0,
          background: t10.colorSurfaceOverlay,
          zIndex
        }
      }
    );
  }
);

// src/components/Skeleton/Skeleton.tsx
import { forwardRef as forwardRef12 } from "react";
import { semantic as t11, useInjectStyles as useInjectStyles6, useThemeRhythm as useThemeRhythm2 } from "../../core/dist/index.js";
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var SKELETON_STYLES_ID = "4lt7ab-skeleton-pulse";
var STAGGER_STEPS = 10;
var STAGGER_MS = 80;
var SKELETON_STYLES_CSS = (() => {
  const staggerRules = [];
  for (let i = 2; i <= STAGGER_STEPS; i++) {
    staggerRules.push(
      `[data-skeleton]:nth-of-type(${i})::after { animation-delay: ${(i - 1) * STAGGER_MS}ms; }`
    );
  }
  return `
@keyframes skeletonPulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.18; }
}
[data-skeleton] {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
[data-skeleton]::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--skeleton-accent, var(--color-action-primary));
  opacity: 0;
  animation: skeletonPulse var(--skeleton-duration, 1.6s) ease-in-out infinite;
  pointer-events: none;
}
${staggerRules.join("\n")}
@media (prefers-reduced-motion: reduce) {
  [data-skeleton]::after {
    animation: none;
    opacity: 0;
  }
}
`;
})();
var Skeleton = forwardRef12(
  function Skeleton2({
    width = "100%",
    height = 16,
    radius = "md"
  }, ref) {
    const { durationCss } = useThemeRhythm2();
    useInjectStyles6(SKELETON_STYLES_ID, SKELETON_STYLES_CSS);
    return /* @__PURE__ */ jsx14(
      "div",
      {
        ref,
        "data-skeleton": "",
        "aria-hidden": "true",
        style: {
          width,
          height,
          borderRadius: radiusMap[radius],
          background: t11.colorSurfaceRaised,
          ...durationCss ? { "--skeleton-duration": durationCss } : void 0
        }
      }
    );
  }
);
var CardSkeleton = forwardRef12(
  function CardSkeleton2(_props, ref) {
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          borderRadius: t11.radiusLg,
          border: `${t11.borderWidthDefault} solid ${t11.colorBorder}`,
          padding: t11.spaceLg,
          display: "flex",
          flexDirection: "column",
          gap: t11.spaceSm
        },
        children: [
          /* @__PURE__ */ jsx14(Skeleton, { width: "60%", height: 20 }),
          /* @__PURE__ */ jsx14(Skeleton, { width: "100%", height: 14 }),
          /* @__PURE__ */ jsx14(Skeleton, { width: "80%", height: 14 })
        ]
      }
    );
  }
);
var RowSkeleton = forwardRef12(
  function RowSkeleton2(_props, ref) {
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t11.spaceSm,
          padding: `${t11.spaceSm} 0`
        },
        children: [
          /* @__PURE__ */ jsx14(Skeleton, { width: 32, height: 32, radius: "full" }),
          /* @__PURE__ */ jsxs6("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: t11.spaceXs }, children: [
            /* @__PURE__ */ jsx14(Skeleton, { width: "40%", height: 14 }),
            /* @__PURE__ */ jsx14(Skeleton, { width: "70%", height: 12 })
          ] })
        ]
      }
    );
  }
);

// src/components/ProgressBar/ProgressBar.tsx
import { forwardRef as forwardRef13 } from "react";
import { semantic as t12 } from "../../core/dist/index.js";
import { jsx as jsx15 } from "react/jsx-runtime";
var ProgressBar = forwardRef13(
  function ProgressBar2({
    segments,
    height = "md",
    "aria-label": ariaLabel
  }, ref) {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    const px = progressBarHeightMap[height];
    return /* @__PURE__ */ jsx15(
      "div",
      {
        ref,
        role: "progressbar",
        "aria-valuenow": total,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": ariaLabel,
        style: {
          width: "100%",
          height: px,
          borderRadius: px / 2,
          overflow: "hidden",
          display: "flex",
          background: t12.colorSurfaceRaised
        },
        children: segments.map((segment, i) => {
          const pct = total > 0 ? segment.value / total * 100 : 0;
          return /* @__PURE__ */ jsx15(
            "div",
            {
              title: segment.label ? `${segment.label}: ${segment.value}` : String(segment.value),
              style: {
                width: `${pct}%`,
                height: "100%",
                background: semanticColorMap[segment.color]
              }
            },
            i
          );
        })
      }
    );
  }
);

// src/components/EmptyState/EmptyState.tsx
import { forwardRef as forwardRef14 } from "react";
import { semantic as t13 } from "../../core/dist/index.js";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var EmptyState = forwardRef14(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    children,
    action
  }, ref) {
    const content = /* @__PURE__ */ jsx16("div", { style: { padding: t13.spaceXl }, children: /* @__PURE__ */ jsxs7(Stack, { align: "center", gap: "sm", children: [
      /* @__PURE__ */ jsx16("span", { style: { color: t13.colorTextMuted, display: "inline-flex" }, children: /* @__PURE__ */ jsx16(Icon, { name: icon, size: "xl" }) }),
      /* @__PURE__ */ jsx16(
        "span",
        {
          style: {
            color: t13.colorTextSecondary,
            fontSize: t13.fontSizeSm,
            textAlign: "center",
            fontFamily: t13.fontSans
          },
          children: message
        }
      ),
      children,
      action && /* @__PURE__ */ jsx16("div", { style: { marginTop: t13.spaceSm }, children: action })
    ] }) });
    if (variant === "card") {
      return /* @__PURE__ */ jsx16(Card, { ref, variant: "flat", children: content });
    }
    return /* @__PURE__ */ jsx16("div", { ref, children: content });
  }
);

// src/components/Pagination/Pagination.tsx
import { forwardRef as forwardRef15 } from "react";
import { semantic as t14 } from "../../core/dist/index.js";
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = forwardRef15(
  function Pagination2({
    page,
    totalPages,
    total,
    onPageChange,
    labels
  }, ref) {
    const resolvedLabels = { ...defaultLabels, ...labels };
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: t14.spaceSm
        },
        children: [
          /* @__PURE__ */ jsx17(
            Button,
            {
              variant: "ghost",
              size: "sm",
              disabled: page <= 1,
              onClick: () => onPageChange(page - 1),
              children: resolvedLabels.previous
            }
          ),
          /* @__PURE__ */ jsxs8(
            "span",
            {
              style: {
                color: t14.colorTextMuted,
                fontSize: t14.fontSizeSm,
                fontFamily: t14.fontSans
              },
              children: [
                resolvedLabels.pageOf(page, totalPages),
                " (",
                total,
                " total)"
              ]
            }
          ),
          /* @__PURE__ */ jsx17(
            Button,
            {
              variant: "ghost",
              size: "sm",
              disabled: page >= totalPages,
              onClick: () => onPageChange(page + 1),
              children: resolvedLabels.next
            }
          )
        ]
      }
    );
  }
);

// src/components/Header/Header.tsx
import { forwardRef as forwardRef16 } from "react";
import { semantic as t15 } from "../../core/dist/index.js";
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
var Header = forwardRef16(
  function Header2({ title, level = "section", subtitle, indicator, trailing }, ref) {
    const isPage = level === "page";
    const Tag = isPage ? "h1" : "h2";
    const titleStyle2 = isPage ? {
      margin: 0,
      fontFamily: t15.fontSans,
      fontWeight: t15.fontWeightBold,
      color: t15.colorText
    } : {
      margin: 0,
      fontFamily: t15.fontSans,
      fontWeight: t15.fontWeightSemibold,
      fontSize: t15.fontSizeBase,
      lineHeight: t15.lineHeightTight,
      color: t15.colorText
    };
    return /* @__PURE__ */ jsxs9(
      "div",
      {
        ref,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: isPage ? "flex-end" : "center",
          gap: t15.spaceMd
        },
        children: [
          /* @__PURE__ */ jsxs9("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsxs9("div", { style: { display: "flex", alignItems: "center", gap: t15.spaceSm }, children: [
              /* @__PURE__ */ jsx18(Tag, { style: titleStyle2, children: title }),
              indicator
            ] }),
            subtitle && /* @__PURE__ */ jsx18("span", { style: { color: t15.colorTextMuted, fontSize: t15.fontSizeSm, fontFamily: t15.fontSans }, children: subtitle })
          ] }),
          trailing && /* @__PURE__ */ jsx18("div", { style: { display: "flex", alignItems: "center", gap: t15.spaceSm, flexShrink: 0 }, children: trailing })
        ]
      }
    );
  }
);

// src/components/ModalShell/ModalShell.tsx
import { forwardRef as forwardRef17, useEffect as useEffect5, useId as useId4, useRef as useRef4 } from "react";
import { createPortal } from "react-dom";
import { semantic as t16 } from "../../core/dist/index.js";
import { Fragment as Fragment3, jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: t16.fontWeightSemibold,
  fontFamily: t16.fontSans,
  color: t16.colorText,
  fontSize: t16.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: t16.spaceSm
});
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = forwardRef17(
  function ModalShell2({
    onClose,
    children,
    width = "md",
    zIndex = t16.zIndexModal,
    titleId,
    "aria-label": ariaLabel,
    role = "dialog"
  }, ref) {
    const generatedId = useId4();
    const resolvedLabelId = titleId ?? generatedId;
    const internalRef = useRef4(null);
    const setRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    useFocusTrap(internalRef);
    useEffect5(() => {
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
    useEffect5(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    return createPortal(
      /* @__PURE__ */ jsxs10(Fragment3, { children: [
        /* @__PURE__ */ jsx19(Overlay, { onClick: onClose, zIndex }),
        /* @__PURE__ */ jsx19(
          "div",
          {
            style: {
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: t16.spaceMd,
              zIndex: typeof zIndex === "number" ? zIndex + 1 : `calc(${zIndex} + 1)`,
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ jsx19(
              "div",
              {
                ref: setRefs,
                role,
                "aria-modal": "true",
                "aria-labelledby": ariaLabel ? void 0 : resolvedLabelId,
                "aria-label": ariaLabel,
                tabIndex: -1,
                style: {
                  background: t16.colorSurface,
                  color: t16.colorText,
                  borderRadius: t16.radiusLg,
                  boxShadow: t16.shadowLg,
                  border: `${t16.borderWidthDefault} solid ${t16.colorBorder}`,
                  padding: t16.spaceXl,
                  maxWidth: modalWidthMap[width],
                  width: "100%",
                  maxHeight: "100%",
                  overflowY: "auto",
                  pointerEvents: "auto",
                  outline: "none"
                },
                children
              }
            )
          }
        )
      ] }),
      document.body
    );
  }
);

// src/styles/sectionLabelStyle.ts
import { semantic as t17 } from "../../core/dist/index.js";
var sectionLabelStyle = {
  display: "block",
  fontSize: t17.fontSizeXs,
  fontWeight: t17.fontWeightSemibold,
  fontFamily: t17.fontSans,
  color: t17.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: t17.letterSpacingWide
};

// src/styles/tagChipStyle.ts
import { semantic as t18 } from "../../core/dist/index.js";
var tagChipStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: t18.spaceXs,
  fontSize: t18.fontSizeXs,
  color: t18.colorActionPrimary,
  background: t18.colorSurfaceRaised,
  borderRadius: t18.radiusFull,
  padding: `${t18.spaceXs} ${t18.spaceSm}`,
  fontFamily: t18.fontSans
};

// src/components/ConfirmDialog/ConfirmDialog.tsx
import { forwardRef as forwardRef18, useId as useId5, useState as useState3 } from "react";
import { semantic as t19 } from "../../core/dist/index.js";
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = forwardRef18(
  function ConfirmDialog2({
    title,
    message,
    confirmLabel = "Confirm",
    onConfirm,
    onCancel,
    children,
    variant = "destructive"
  }, ref) {
    const [loading, setLoading] = useState3(false);
    const titleId = useId5();
    const handleConfirm = async () => {
      setLoading(true);
      try {
        await onConfirm();
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ jsxs11(ModalShell, { ref, onClose: onCancel, role: "alertdialog", titleId, children: [
      /* @__PURE__ */ jsx20(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ jsx20(
        "p",
        {
          style: {
            margin: `${t19.spaceSm} 0 ${children ? "0" : t19.spaceLg}`,
            color: t19.colorTextMuted,
            fontSize: t19.fontSizeSm,
            fontFamily: t19.fontSans
          },
          children: message
        }
      ),
      children && /* @__PURE__ */ jsx20("div", { style: { margin: `${t19.spaceSm} 0 ${t19.spaceLg}` }, children }),
      /* @__PURE__ */ jsxs11("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ jsx20(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ jsx20(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/StatusDot/StatusDot.tsx
import { forwardRef as forwardRef19 } from "react";
import { semantic as t20, useInjectStyles as useInjectStyles7, useThemeRhythm as useThemeRhythm3 } from "../../core/dist/index.js";
import { jsx as jsx21 } from "react/jsx-runtime";
var variantColors = {
  default: t20.colorTextMuted,
  primary: t20.colorActionPrimary,
  success: t20.colorSuccess,
  warning: t20.colorWarning,
  error: t20.colorError,
  info: t20.colorInfo
};
var sizeMap = {
  sm: 6,
  md: 8,
  lg: 12
};
var PULSE_STYLES_ID = "4lt7ab-status-dot-pulse";
var PULSE_STYLES_CSS = `
@keyframes statusDotPulse {
  0% { box-shadow: 0 0 0 0 var(--status-dot-color); opacity: 1; }
  70% { box-shadow: 0 0 0 6px var(--status-dot-color); opacity: 0; }
  100% { box-shadow: 0 0 0 0 var(--status-dot-color); opacity: 0; }
}
[data-status-dot-pulse] {
  /* Duration overridden by --status-dot-duration when the active theme has a rhythm. */
  animation: statusDotPulse var(--status-dot-duration, 1.5s) ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-status-dot-pulse] {
    animation: none;
  }
}
`;
var StatusDot = forwardRef19(
  function StatusDot2({
    variant = "default",
    size = "md",
    animate = "none",
    "aria-label": ariaLabel
  }, ref) {
    const resolvedColor = variantColors[variant];
    const resolvedSize = sizeMap[size];
    const isPulsing = animate === "pulse";
    const { durationCss } = useThemeRhythm3();
    useInjectStyles7(PULSE_STYLES_ID, PULSE_STYLES_CSS);
    return /* @__PURE__ */ jsx21(
      "span",
      {
        ref,
        role: ariaLabel ? "img" : void 0,
        "aria-label": ariaLabel,
        "aria-hidden": ariaLabel ? void 0 : true,
        "data-status-dot-pulse": isPulsing || void 0,
        style: {
          display: "inline-block",
          width: resolvedSize,
          height: resolvedSize,
          borderRadius: t20.radiusFull,
          background: resolvedColor,
          flexShrink: 0,
          ...isPulsing ? {
            "--status-dot-color": resolvedColor,
            /* When the theme has a rhythm, the pulse syncs to its tempo. */
            ...durationCss ? { "--status-dot-duration": durationCss } : void 0
          } : void 0
        }
      }
    );
  }
);

// src/components/Table/Table.tsx
import { forwardRef as forwardRef20, Children, isValidElement as isValidElement2, cloneElement as cloneElement2 } from "react";
import { semantic as t21 } from "../../core/dist/index.js";
import { useInjectStyles as useInjectStyles8 } from "../../core/dist/index.js";
import { jsx as jsx22 } from "react/jsx-runtime";
var spaceMap = {
  xs: t21.spaceXs,
  sm: t21.spaceSm,
  md: t21.spaceMd,
  lg: t21.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${t21.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${t21.colorSurfaceRaised};
  border-bottom-color: ${t21.colorSurfaceRaised};
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
  background: ${t21.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${t21.borderWidthDefault} solid ${t21.colorBorder}`,
    borderRadius: t21.radiusLg,
    boxShadow: t21.shadowSm
  },
  flat: {}
};
var Table = forwardRef20(
  function Table2({
    variant = "default",
    density = "md",
    children
  }, ref) {
    useInjectStyles8(TABLE_STYLES_ID, TABLE_STYLES_CSS);
    return /* @__PURE__ */ jsx22(
      "div",
      {
        ref,
        style: {
          overflowX: "auto",
          ...wrapperVariants[variant]
        },
        children: /* @__PURE__ */ jsx22(
          "table",
          {
            "data-table-density": density,
            style: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: t21.fontSizeSm,
              fontFamily: t21.fontSans,
              color: t21.colorText
            },
            children
          }
        )
      }
    );
  }
);
var TableHeader = forwardRef20(
  function TableHeader2({ children }, ref) {
    return /* @__PURE__ */ jsx22("thead", { ref, children: /* @__PURE__ */ jsx22("tr", { children }) });
  }
);
var TableHeaderCell = forwardRef20(
  function TableHeaderCell2({
    align = "left",
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx22(
      "th",
      {
        ref,
        colSpan,
        style: {
          padding: `${t21.spaceSm} ${t21.spaceMd}`,
          textAlign: align,
          fontWeight: t21.fontWeightSemibold,
          fontSize: t21.fontSizeXs,
          color: t21.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: t21.letterSpacingWide,
          borderBottom: `${t21.borderWidthThick} solid ${t21.colorBorder}`,
          whiteSpace: "nowrap",
          width: width !== void 0 ? `${width}px` : void 0
        },
        children
      }
    );
  }
);
var TableBody = forwardRef20(
  function TableBody2({ children }, ref) {
    let dataRowIndex = 0;
    const styledChildren = Children.map(children, (child) => {
      if (!isValidElement2(child)) return child;
      const childProps = child.props;
      if (child.type === TableGroupHeader || child.type === TableEmptyRow) {
        return child;
      }
      const isEven = dataRowIndex % 2 === 1;
      dataRowIndex++;
      if (!isEven || childProps.selected) return child;
      const cells = Children.map(childProps.children, (cell) => {
        if (!isValidElement2(cell)) return cell;
        const cellStyle = cell.props.style;
        return cloneElement2(cell, {
          style: { ...cellStyle, background: "color-mix(in srgb, var(--color-text) 5%, transparent)" }
        });
      });
      return cloneElement2(child, {}, cells);
    });
    return /* @__PURE__ */ jsx22("tbody", { ref, children: styledChildren });
  }
);
var TableRow = forwardRef20(
  function TableRow2({
    selected = false,
    hoverable = false,
    children,
    onClick
  }, ref) {
    const handleKeyDown = onClick ? (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    } : void 0;
    return /* @__PURE__ */ jsx22(
      "tr",
      {
        ref,
        "data-table-row-hoverable": hoverable || void 0,
        "data-table-row-selected": selected || void 0,
        tabIndex: onClick ? 0 : void 0,
        onClick,
        onKeyDown: handleKeyDown,
        style: {
          cursor: onClick ? "pointer" : void 0
        },
        children
      }
    );
  }
);
var TableCell = forwardRef20(
  function TableCell2({
    align = "left",
    truncate = false,
    muted = false,
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx22(
      "td",
      {
        ref,
        colSpan,
        style: {
          padding: `${t21.spaceSm} ${t21.spaceMd}`,
          borderBottom: `${t21.borderWidthDefault} solid ${t21.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? t21.colorTextMuted : void 0,
          width: width !== void 0 ? `${width}px` : void 0,
          ...truncate ? {
            maxWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          } : {}
        },
        children
      }
    );
  }
);
var TableGroupHeader = forwardRef20(
  function TableGroupHeader2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx22("tr", { ref, style: { cursor: "default" }, children: /* @__PURE__ */ jsx22(
      "td",
      {
        colSpan,
        style: {
          padding: `${t21.spaceXs} ${t21.spaceMd}`,
          background: t21.colorSurfaceRaised,
          borderBottom: `${t21.borderWidthDefault} solid ${t21.colorBorder}`,
          fontSize: t21.fontSizeXs,
          fontWeight: t21.fontWeightBold,
          letterSpacing: t21.letterSpacingWide,
          textTransform: "uppercase",
          color: t21.colorTextMuted,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children
      }
    ) });
  }
);
var TableEmptyRow = forwardRef20(
  function TableEmptyRow2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx22("tr", { ref, children: /* @__PURE__ */ jsx22(
      "td",
      {
        colSpan,
        style: {
          padding: `${t21.spaceXl} ${t21.spaceMd}`,
          textAlign: "center",
          color: t21.colorTextMuted,
          fontSize: t21.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/DateRangePicker/DateRangePicker.tsx
import {
  forwardRef as forwardRef21,
  useState as useState5,
  useRef as useRef6,
  useCallback as useCallback5,
  useEffect as useEffect7,
  useMemo as useMemo4
} from "react";
import { semantic as t25, useInjectStyles as useInjectStyles10 } from "../../core/dist/index.js";

// src/components/Calendar/Calendar.tsx
import {
  createContext as createContext3,
  useCallback as useCallback3,
  useContext as useContext3,
  useMemo as useMemo2,
  useState as useState4
} from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
var CalendarContext = createContext3(null);
function useCalendarContext(part = "child") {
  const ctx = useContext3(CalendarContext);
  if (!ctx) {
    throw new Error(
      `Calendar.${part} must be rendered inside <Calendar.Root>.`
    );
  }
  return ctx;
}
function firstOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function seedFocusedDate(selected) {
  if (!selected) return void 0;
  if (selected instanceof Date) return selected;
  return selected.from;
}
function Root2({
  mode = "single",
  selected,
  onSelect,
  minDate,
  maxDate,
  disabledDate,
  focusedDate: focusedDateProp,
  defaultFocusedDate,
  onFocusedDateChange,
  viewDate: viewDateProp,
  defaultViewDate,
  onViewDateChange,
  children
}) {
  const [focusedDateState, setFocusedDateState] = useState4(
    () => defaultFocusedDate ?? seedFocusedDate(selected) ?? /* @__PURE__ */ new Date()
  );
  const isControlled = focusedDateProp !== void 0;
  const focusedDate = isControlled ? focusedDateProp : focusedDateState;
  const setFocusedDate = useCallback3(
    (date) => {
      if (!isControlled) setFocusedDateState(date);
      onFocusedDateChange?.(date);
    },
    [isControlled, onFocusedDateChange]
  );
  const [viewDateState, setViewDateState] = useState4(
    () => firstOfMonth(
      defaultViewDate ?? seedFocusedDate(selected) ?? /* @__PURE__ */ new Date()
    )
  );
  const isViewControlled = viewDateProp !== void 0;
  const viewDate = isViewControlled ? firstOfMonth(viewDateProp) : viewDateState;
  const setViewDate = useCallback3(
    (date) => {
      const normalized = firstOfMonth(date);
      if (!isViewControlled) setViewDateState(normalized);
      onViewDateChange?.(normalized);
    },
    [isViewControlled, onViewDateChange]
  );
  const handleSelect = useCallback3(
    (value) => {
      onSelect?.(value);
    },
    [onSelect]
  );
  const ctx = useMemo2(
    () => ({
      mode,
      selected,
      onSelect: handleSelect,
      minDate,
      maxDate,
      disabledDate,
      focusedDate,
      setFocusedDate,
      viewDate,
      setViewDate
    }),
    [
      mode,
      selected,
      handleSelect,
      minDate,
      maxDate,
      disabledDate,
      focusedDate,
      setFocusedDate,
      viewDate,
      setViewDate
    ]
  );
  return /* @__PURE__ */ jsx23(CalendarContext.Provider, { value: ctx, children });
}
var Calendar = {
  Root: Root2
};

// src/components/Calendar/Header.tsx
import { semantic as t22 } from "../../core/dist/index.js";

// src/components/DateRangePicker/dateUtils.ts
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isInRange(date, from, to) {
  const d = stripTime(date).getTime();
  const f = stripTime(from).getTime();
  const t39 = stripTime(to).getTime();
  return d >= f && d <= t39;
}
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function stripTime(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function buildCalendarGrid(year, month) {
  const firstDay = getFirstDayOfMonth(year, month);
  const grid = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    grid.push(d);
  }
  const daysInMonth = getDaysInMonth(year, month);
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push(new Date(year, month, d));
  }
  while (grid.length < 42) {
    const overflow = grid.length - firstDay - daysInMonth + 1;
    grid.push(new Date(year, month + 1, overflow));
  }
  return grid;
}

// src/components/Calendar/Header.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var titleStyle = {
  fontSize: t22.fontSizeSm,
  fontWeight: t22.fontWeightSemibold,
  fontFamily: t22.fontSans,
  color: t22.colorText,
  margin: 0,
  userSelect: "none"
};
function CalendarHeaderPrimitive({
  children,
  style,
  className
}) {
  const ctx = useCalendarContext("Header");
  const year = ctx.viewDate.getFullYear();
  const month = ctx.viewDate.getMonth();
  return /* @__PURE__ */ jsx24(
    "span",
    {
      style: { ...titleStyle, ...style },
      className,
      "aria-live": "polite",
      children: children ? children({ year, month }) : `${MONTH_NAMES[month]} ${year}`
    }
  );
}

// src/components/Calendar/Nav.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
function CalendarNav({
  direction,
  step = 1,
  "aria-label": ariaLabel,
  onClick
}) {
  const ctx = useCalendarContext("Nav");
  const delta = direction === "prev" ? -step : step;
  const defaultLabel = direction === "prev" ? "Previous month" : "Next month";
  const icon = direction === "prev" ? "chevron-left" : "chevron-right";
  const handleClick = (e) => {
    const result = onClick?.(e);
    if (result === false) return;
    const next = new Date(
      ctx.viewDate.getFullYear(),
      ctx.viewDate.getMonth() + delta,
      1
    );
    ctx.setViewDate(next);
  };
  return /* @__PURE__ */ jsx25(
    IconButton,
    {
      icon,
      "aria-label": ariaLabel ?? defaultLabel,
      onClick: handleClick,
      size: "sm"
    }
  );
}

// src/components/Calendar/Grid.tsx
import { useCallback as useCallback4, useMemo as useMemo3, useRef as useRef5, useEffect as useEffect6 } from "react";
import { semantic as t24, useInjectStyles as useInjectStyles9 } from "../../core/dist/index.js";

// src/components/Calendar/Cell.tsx
import { semantic as t23 } from "../../core/dist/index.js";
import { jsx as jsx26 } from "react/jsx-runtime";
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: t23.spaceXl,
  height: t23.spaceXl,
  border: "none",
  borderRadius: t23.radiusSm,
  fontSize: t23.fontSizeSm,
  fontFamily: t23.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: t23.colorText,
  padding: 0,
  transition: "background 120ms ease, color 120ms ease",
  outline: "none",
  boxSizing: "border-box"
};
function computeBounds(ctx) {
  if (!ctx.selected) return { start: null, end: null };
  if (ctx.selected instanceof Date) {
    return { start: ctx.selected, end: ctx.selected };
  }
  const a = ctx.selected.from;
  const b = ctx.selected.to;
  return a.getTime() <= b.getTime() ? { start: a, end: b } : { start: b, end: a };
}
function isDisabled(ctx, date) {
  if (ctx.minDate) {
    const min = new Date(
      ctx.minDate.getFullYear(),
      ctx.minDate.getMonth(),
      ctx.minDate.getDate()
    );
    if (date.getTime() < min.getTime()) return true;
  }
  if (ctx.maxDate) {
    const max = new Date(
      ctx.maxDate.getFullYear(),
      ctx.maxDate.getMonth(),
      ctx.maxDate.getDate()
    );
    if (date.getTime() > max.getTime()) return true;
  }
  return ctx.disabledDate?.(date) ?? false;
}
function CalendarCell({
  date,
  children,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur
}) {
  const ctx = useCalendarContext("Cell");
  const today = /* @__PURE__ */ new Date();
  const month = ctx.viewDate.getMonth();
  const isOutsideMonth = date.getMonth() !== month;
  const isToday = isSameDay(date, today);
  const isFocused = isSameDay(date, ctx.focusedDate);
  const { start, end } = computeBounds(ctx);
  const isStart = start !== null && isSameDay(date, start);
  const isEnd = end !== null && isSameDay(date, end);
  const isEndpoint = isStart || isEnd;
  const inRange = start !== null && end !== null && isInRange(date, start, end);
  const disabled = isDisabled(ctx, date);
  const cellStyle = {
    ...baseCellStyle,
    ...isOutsideMonth ? { color: t23.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${t23.borderWidthDefault} solid ${t23.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? {
      background: `color-mix(in srgb, ${t23.colorActionPrimary} 15%, transparent)`
    } : {},
    ...isEndpoint ? { background: t23.colorActionPrimary, color: t23.colorTextInverse } : {},
    ...disabled ? {
      color: t23.colorTextDisabled,
      pointerEvents: "none",
      cursor: "default",
      opacity: 0.5
    } : {},
    ...style
  };
  const classNames = [
    "alttab-calendar-day",
    ...disabled ? [] : ["alttab-calendar-day--enabled"],
    ...className ? [className] : []
  ].join(" ");
  const iso = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return /* @__PURE__ */ jsx26(
    "button",
    {
      type: "button",
      className: classNames,
      style: cellStyle,
      tabIndex: isFocused ? 0 : -1,
      "aria-selected": isEndpoint || inRange && !disabled || void 0,
      "aria-disabled": disabled || void 0,
      "data-calendar-cell": iso,
      onClick: () => {
        if (disabled) return;
        ctx.setFocusedDate(date);
        ctx.onSelect(date);
      },
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      children: children ?? date.getDate()
    }
  );
}

// src/components/Calendar/Grid.tsx
import { jsx as jsx27, jsxs as jsxs12 } from "react/jsx-runtime";
var GRID_STYLES_ID2 = "alttab-calendar";
var gridCSS2 = (
  /* css */
  `
  .alttab-calendar-day--enabled:hover {
    background: ${t24.colorSurfaceRaised} !important;
  }
  .alttab-calendar-day--enabled:focus-visible {
    outline: ${t24.focusRingWidth} solid ${t24.focusRingColor};
    outline-offset: ${t24.focusRingOffset};
  }
`
);
function nextFocusedDate(date, key, shiftKey) {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  switch (key) {
    case "ArrowLeft":
      return new Date(y, m, d - 1);
    case "ArrowRight":
      return new Date(y, m, d + 1);
    case "ArrowUp":
      return new Date(y, m, d - 7);
    case "ArrowDown":
      return new Date(y, m, d + 7);
    case "Home":
      return new Date(y, m, d - date.getDay());
    case "End":
      return new Date(y, m, d + (6 - date.getDay()));
    case "PageUp":
      return shiftKey ? new Date(y - 1, m, d) : new Date(y, m - 1, d);
    case "PageDown":
      return shiftKey ? new Date(y + 1, m, d) : new Date(y, m + 1, d);
    default:
      return null;
  }
}
function getHighlightBounds(ctx) {
  if (!ctx.selected) return { start: null, end: null };
  if (ctx.selected instanceof Date) {
    return { start: ctx.selected, end: ctx.selected };
  }
  const a = ctx.selected.from;
  const b = ctx.selected.to;
  return a.getTime() <= b.getTime() ? { start: a, end: b } : { start: b, end: a };
}
var tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed"
};
var weekdayHeaderStyle = {
  fontSize: t24.fontSizeXs,
  fontFamily: t24.fontSans,
  fontWeight: t24.fontWeightMedium,
  color: t24.colorTextMuted,
  textAlign: "center",
  padding: `${t24.spaceXs} 0`,
  userSelect: "none"
};
function CalendarGridPrimitive({
  "aria-label": ariaLabel = "Calendar",
  onEscape,
  children,
  style,
  className
}) {
  useInjectStyles9(GRID_STYLES_ID2, gridCSS2);
  const ctx = useCalendarContext("Grid");
  const tableRef = useRef5(null);
  const todayRef = useRef5(/* @__PURE__ */ new Date());
  const year = ctx.viewDate.getFullYear();
  const month = ctx.viewDate.getMonth();
  const grid = useMemo3(() => buildCalendarGrid(year, month), [year, month]);
  const rows = useMemo3(() => {
    const out = [];
    for (let r = 0; r < 6; r++) {
      out.push(grid.slice(r * 7, r * 7 + 7));
    }
    return out;
  }, [grid]);
  const { start: highlightStart, end: highlightEnd } = getHighlightBounds(ctx);
  const isCellDisabled = useCallback4(
    (date) => {
      if (ctx.minDate && date.getTime() < stripTime2(ctx.minDate).getTime()) {
        return true;
      }
      if (ctx.maxDate && date.getTime() > stripTime2(ctx.maxDate).getTime()) {
        return true;
      }
      return ctx.disabledDate?.(date) ?? false;
    },
    [ctx.minDate, ctx.maxDate, ctx.disabledDate]
  );
  const handleKeyDown = useCallback4(
    (e) => {
      if (e.key === "Escape") {
        if (onEscape) {
          e.preventDefault();
          onEscape();
        }
        return;
      }
      const target = e.target;
      if (!target || target.tagName !== "BUTTON") return;
      const iso = target.getAttribute("data-calendar-cell");
      if (!iso) return;
      const [yy, mm, dd] = iso.split("-").map(Number);
      const from = new Date(yy, mm, dd);
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (isCellDisabled(from)) return;
        if (ctx.mode === "single") {
          ctx.onSelect(from);
        } else {
          ctx.onSelect(from);
        }
        return;
      }
      const next = nextFocusedDate(from, e.key, e.shiftKey);
      if (!next) return;
      e.preventDefault();
      ctx.setFocusedDate(next);
      if (next.getMonth() !== month || next.getFullYear() !== year) {
        ctx.setViewDate(new Date(next.getFullYear(), next.getMonth(), 1));
      }
    },
    [ctx, month, year, isCellDisabled, onEscape]
  );
  useEffect6(() => {
    const table = tableRef.current;
    if (!table) return;
    const btn = table.querySelector('button[tabindex="0"]');
    if (btn && document.activeElement?.closest('[role="grid"]') === table) {
      btn.focus();
    }
  }, [ctx.focusedDate]);
  return /* @__PURE__ */ jsxs12(
    "table",
    {
      ref: tableRef,
      role: "grid",
      "aria-label": ariaLabel,
      style: { ...tableStyle, ...style },
      className,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx27("thead", { children: /* @__PURE__ */ jsx27("tr", { children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ jsx27("th", { scope: "col", style: weekdayHeaderStyle, children: label }, label)) }) }),
        /* @__PURE__ */ jsx27("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ jsx27("tr", { children: row.map((date) => {
          const isInMonth = date.getMonth() === month;
          const isToday = isSameDay(date, todayRef.current);
          const isFocused = isSameDay(date, ctx.focusedDate);
          const disabled = isCellDisabled(date);
          const isRangeStart = highlightStart !== null && isSameDay(date, highlightStart);
          const isRangeEnd = highlightEnd !== null && isSameDay(date, highlightEnd);
          const inRange = highlightStart !== null && highlightEnd !== null && isInRange(date, highlightStart, highlightEnd);
          const isSelected = isRangeStart || isRangeEnd || inRange;
          const renderArgs = {
            date,
            isInMonth,
            isToday,
            isFocused,
            isSelected,
            isRangeStart,
            isRangeEnd,
            isInRange: inRange,
            isDisabled: disabled
          };
          const iso = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
          return /* @__PURE__ */ jsx27("td", { role: "gridcell", style: cellTdStyle, children: children ? children(renderArgs) : /* @__PURE__ */ jsx27(CalendarCell, { date }) }, iso);
        }) }, ri)) })
      ]
    }
  );
}
function stripTime2(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
var cellTdStyle = { padding: 0 };

// src/components/Calendar/index.ts
var Calendar2 = {
  Root: Calendar.Root,
  Header: CalendarHeaderPrimitive,
  Nav: CalendarNav,
  Grid: CalendarGridPrimitive,
  Cell: CalendarCell
};

// src/components/DateRangePicker/DateRangePicker.tsx
import { jsx as jsx28, jsxs as jsxs13 } from "react/jsx-runtime";
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-trigger:focus-visible {
    border-color: ${t25.colorBorderFocused};
    box-shadow: 0 0 0 ${t25.focusRingWidth} ${t25.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${t25.colorBorderFocused};
  }
`
);
var wrapperStyle2 = {
  position: "relative",
  display: "inline-block",
  width: "100%"
};
var triggerBaseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${t25.spaceSm} ${t25.spaceMd}`,
  fontSize: t25.fontSizeSm,
  lineHeight: t25.lineHeightTight,
  fontFamily: t25.fontSans,
  color: t25.colorText,
  background: t25.colorSurfaceInput,
  border: `${t25.borderWidthDefault} solid ${t25.colorBorder}`,
  borderRadius: t25.radiusMd,
  outline: "none",
  transition: `border-color ${t25.transitionBase}, box-shadow ${t25.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle = {
  borderColor: t25.colorBorderError
};
var triggerDisabledStyle = {
  background: t25.colorSurfaceDisabled,
  color: t25.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: t25.zIndexDropdown,
  marginTop: t25.spaceXs,
  background: t25.colorSurfacePanel,
  border: `${t25.borderWidthDefault} solid ${t25.colorBorder}`,
  borderRadius: t25.radiusLg,
  boxShadow: t25.shadowMd,
  padding: t25.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle2 = {
  color: t25.colorTextPlaceholder
};
var headerRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${t25.spaceXs} 0`,
  marginBottom: t25.spaceSm
};
function sortedRange(a, b) {
  return a.getTime() <= b.getTime() ? { from: a, to: b } : { from: b, to: a };
}
var DateRangePicker = forwardRef21(
  function DateRangePicker2({
    value,
    onChange,
    minDate,
    maxDate,
    disabledDates,
    placeholder = "Select date range",
    hasError,
    disabled
  }, ref) {
    useInjectStyles10(SCOPE, injectedCSS);
    const [open, setOpen] = useState5(false);
    const [selectionStart, setSelectionStart] = useState5(null);
    const [hoverDate, setHoverDate] = useState5(null);
    const containerRef = useRef6(null);
    useEffect7(() => {
      if (!open) return;
      function handleMouseDown(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
          setSelectionStart(null);
          setHoverDate(null);
        }
      }
      document.addEventListener("mousedown", handleMouseDown);
      return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [open]);
    useEffect7(() => {
      if (!open) return;
      const btn = containerRef.current?.querySelector(
        '[role="grid"] button[tabindex="0"]'
      );
      btn?.focus();
    }, [open]);
    const handleToggle = useCallback5(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (prev) {
          setSelectionStart(null);
          setHoverDate(null);
        }
        return !prev;
      });
    }, [disabled]);
    const handleSelect = useCallback5(
      (v) => {
        if (!(v instanceof Date)) return;
        if (selectionStart === null) {
          setSelectionStart(v);
          setHoverDate(v);
        } else {
          const range = sortedRange(selectionStart, v);
          onChange(range);
          setSelectionStart(null);
          setHoverDate(null);
          setOpen(false);
        }
      },
      [selectionStart, onChange]
    );
    const handleFocusedDateChange = useCallback5(
      (d) => {
        if (selectionStart !== null) setHoverDate(d);
      },
      [selectionStart]
    );
    const disabledDate = useMemo4(() => {
      if (!disabledDates || disabledDates.length === 0) return void 0;
      return (d) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);
    const displaySelected = useMemo4(() => {
      if (selectionStart !== null) {
        const end = hoverDate ?? selectionStart;
        return sortedRange(selectionStart, end);
      }
      return value;
    }, [selectionStart, hoverDate, value]);
    const openKey = useMemo4(
      () => open ? `${value?.from.getTime() ?? "empty"}-${Date.now()}` : "closed",
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [open]
    );
    let displayText;
    if (value) {
      displayText = `${formatDate(value.from)} \u2013 ${formatDate(value.to)}`;
    } else {
      displayText = /* @__PURE__ */ jsx28("span", { style: placeholderStyle2, children: placeholder });
    }
    return /* @__PURE__ */ jsxs13(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle2,
        children: [
          /* @__PURE__ */ jsx28(
            "button",
            {
              type: "button",
              className: `${SCOPE}-trigger`,
              style: {
                ...triggerBaseStyle2,
                ...hasError ? triggerErrorStyle : {},
                ...disabled ? triggerDisabledStyle : {}
              },
              onClick: handleToggle,
              disabled,
              "aria-haspopup": "dialog",
              "aria-expanded": open,
              "aria-invalid": hasError || void 0,
              children: displayText
            }
          ),
          open && /* @__PURE__ */ jsx28("div", { style: popoverStyle, role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ jsxs13(
            Calendar2.Root,
            {
              mode: "range",
              selected: displaySelected,
              onSelect: handleSelect,
              onFocusedDateChange: handleFocusedDateChange,
              defaultFocusedDate: value?.from ?? /* @__PURE__ */ new Date(),
              defaultViewDate: value?.from ?? /* @__PURE__ */ new Date(),
              minDate,
              maxDate,
              disabledDate,
              children: [
                /* @__PURE__ */ jsxs13("div", { style: headerRowStyle, children: [
                  /* @__PURE__ */ jsx28(Calendar2.Nav, { direction: "prev" }),
                  /* @__PURE__ */ jsx28(Calendar2.Header, {}),
                  /* @__PURE__ */ jsx28(Calendar2.Nav, { direction: "next" })
                ] }),
                /* @__PURE__ */ jsx28(Calendar2.Grid, { onEscape: () => {
                  setOpen(false);
                  setSelectionStart(null);
                  setHoverDate(null);
                }, children: ({ date }) => /* @__PURE__ */ jsx28(
                  Calendar2.Cell,
                  {
                    date,
                    onMouseEnter: () => {
                      if (selectionStart !== null) setHoverDate(date);
                    }
                  }
                ) })
              ]
            },
            openKey
          ) })
        ]
      }
    );
  }
);

// src/components/DatePicker/DatePicker.tsx
import { forwardRef as forwardRef22, useState as useState6, useRef as useRef7, useCallback as useCallback6, useEffect as useEffect8, useMemo as useMemo5 } from "react";
import { semantic as t26, useInjectStyles as useInjectStyles11 } from "../../core/dist/index.js";
import { jsx as jsx29, jsxs as jsxs14 } from "react/jsx-runtime";
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${t26.colorBorderFocused};
    box-shadow: 0 0 0 ${t26.focusRingWidth} ${t26.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${t26.colorBorderFocused};
  }
`
);
var wrapperStyle3 = {
  position: "relative",
  display: "inline-block",
  width: "100%"
};
var triggerBaseStyle3 = {
  display: "block",
  width: "100%",
  padding: `${t26.spaceSm} ${t26.spaceMd}`,
  fontSize: t26.fontSizeSm,
  lineHeight: t26.lineHeightTight,
  fontFamily: t26.fontSans,
  color: t26.colorText,
  background: t26.colorSurfaceInput,
  border: `${t26.borderWidthDefault} solid ${t26.colorBorder}`,
  borderRadius: t26.radiusMd,
  outline: "none",
  transition: `border-color ${t26.transitionBase}, box-shadow ${t26.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle2 = {
  borderColor: t26.colorBorderError
};
var triggerDisabledStyle2 = {
  background: t26.colorSurfaceDisabled,
  color: t26.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: t26.zIndexDropdown,
  marginTop: t26.spaceXs,
  background: t26.colorSurfacePanel,
  border: `${t26.borderWidthDefault} solid ${t26.colorBorder}`,
  borderRadius: t26.radiusLg,
  boxShadow: t26.shadowMd,
  padding: t26.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle3 = {
  color: t26.colorTextPlaceholder
};
var headerRowStyle2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${t26.spaceXs} 0`,
  marginBottom: t26.spaceSm
};
var DatePicker = forwardRef22(
  function DatePicker2({
    value,
    onChange,
    minDate,
    maxDate,
    disabledDates,
    placeholder = "Select date",
    hasError,
    disabled
  }, ref) {
    useInjectStyles11(SCOPE2, injectedCSS2);
    const [open, setOpen] = useState6(false);
    const containerRef = useRef7(null);
    useEffect8(() => {
      if (!open) return;
      function handleMouseDown(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleMouseDown);
      return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [open]);
    useEffect8(() => {
      if (!open) return;
      const btn = containerRef.current?.querySelector(
        '[role="grid"] button[tabindex="0"]'
      );
      btn?.focus();
    }, [open]);
    const handleToggle = useCallback6(() => {
      if (disabled) return;
      setOpen((o) => !o);
    }, [disabled]);
    const handleSelect = useCallback6(
      (v) => {
        if (v === void 0) {
          onChange(void 0);
        } else if (v instanceof Date) {
          onChange(v);
        }
        setOpen(false);
      },
      [onChange]
    );
    const disabledDate = useMemo5(() => {
      if (!disabledDates || disabledDates.length === 0) return void 0;
      return (d) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);
    const openKey = useMemo5(
      () => open ? `${value?.getTime() ?? "empty"}-${Date.now()}` : "closed",
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [open]
    );
    let displayText;
    if (value) {
      displayText = formatDate(value);
    } else {
      displayText = /* @__PURE__ */ jsx29("span", { style: placeholderStyle3, children: placeholder });
    }
    return /* @__PURE__ */ jsxs14(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle3,
        children: [
          /* @__PURE__ */ jsx29(
            "button",
            {
              type: "button",
              className: `${SCOPE2}-trigger`,
              style: {
                ...triggerBaseStyle3,
                ...hasError ? triggerErrorStyle2 : {},
                ...disabled ? triggerDisabledStyle2 : {}
              },
              onClick: handleToggle,
              disabled,
              "aria-haspopup": "dialog",
              "aria-expanded": open,
              "aria-invalid": hasError || void 0,
              children: displayText
            }
          ),
          open && /* @__PURE__ */ jsx29("div", { style: popoverStyle2, role: "dialog", "aria-label": "Date picker", children: /* @__PURE__ */ jsxs14(
            Calendar2.Root,
            {
              mode: "single",
              selected: value,
              onSelect: handleSelect,
              defaultFocusedDate: value ?? /* @__PURE__ */ new Date(),
              defaultViewDate: value ?? /* @__PURE__ */ new Date(),
              minDate,
              maxDate,
              disabledDate,
              children: [
                /* @__PURE__ */ jsxs14("div", { style: headerRowStyle2, children: [
                  /* @__PURE__ */ jsx29(Calendar2.Nav, { direction: "prev" }),
                  /* @__PURE__ */ jsx29(Calendar2.Header, {}),
                  /* @__PURE__ */ jsx29(Calendar2.Nav, { direction: "next" })
                ] }),
                /* @__PURE__ */ jsx29(Calendar2.Grid, { onEscape: () => setOpen(false) })
              ]
            },
            openKey
          ) })
        ]
      }
    );
  }
);

// src/components/ErrorBoundary/ErrorBoundary.tsx
import React from "react";
import { semantic as t27 } from "../../core/dist/index.js";
import { jsx as jsx30, jsxs as jsxs15 } from "react/jsx-runtime";
var ErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, showStack: false };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    this.props.onError?.(error, errorInfo);
  }
  resetErrorBoundary = () => {
    this.setState({ error: null, showStack: false });
  };
  render() {
    const { error, showStack } = this.state;
    const { children, fallback } = this.props;
    if (error === null) {
      return children;
    }
    if (fallback) {
      return fallback({ error, resetErrorBoundary: this.resetErrorBoundary });
    }
    return /* @__PURE__ */ jsx30("div", { style: { borderColor: t27.colorError, borderWidth: "2px", borderStyle: "solid", borderRadius: t27.radiusLg }, children: /* @__PURE__ */ jsx30(
      Card,
      {
        variant: "flat",
        padding: "lg",
        children: /* @__PURE__ */ jsxs15("div", { style: { display: "flex", flexDirection: "column", gap: t27.spaceMd }, children: [
          /* @__PURE__ */ jsx30("div", { style: { display: "flex", alignItems: "center", gap: t27.spaceSm }, children: /* @__PURE__ */ jsx30(
            "span",
            {
              style: {
                fontSize: t27.fontSizeLg,
                color: t27.colorError,
                fontWeight: t27.fontWeightSemibold,
                fontFamily: t27.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ jsx30(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: t27.fontMono,
                fontSize: t27.fontSizeSm,
                lineHeight: t27.lineHeightBase,
                color: t27.colorText,
                background: t27.colorSurfaceRaised,
                padding: t27.spaceSm,
                borderRadius: t27.radiusMd,
                wordBreak: "break-word"
              },
              children: error.message
            }
          ),
          error.stack && /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsx30(
              "button",
              {
                type: "button",
                onClick: () => this.setState({ showStack: !showStack }),
                style: {
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: t27.fontSans,
                  fontSize: t27.fontSizeSm,
                  color: t27.colorTextMuted,
                  cursor: "pointer",
                  textDecoration: "underline"
                },
                children: showStack ? "Hide stack trace" : "Show stack trace"
              }
            ),
            showStack && /* @__PURE__ */ jsx30(
              "pre",
              {
                style: {
                  marginTop: t27.spaceSm,
                  fontFamily: t27.fontMono,
                  fontSize: t27.fontSizeXs,
                  lineHeight: t27.lineHeightBase,
                  color: t27.colorTextSecondary,
                  background: t27.colorSurfaceRaised,
                  padding: t27.spaceSm,
                  borderRadius: t27.radiusMd,
                  overflow: "auto",
                  maxHeight: "200px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all"
                },
                children: error.stack
              }
            )
          ] }),
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30(Button, { variant: "secondary", size: "sm", onClick: this.resetErrorBoundary, children: "Try again" }) })
        ] })
      }
    ) });
  }
};

// src/components/Toast/Toast.tsx
import {
  createContext as createContext4,
  useCallback as useCallback7,
  useContext as useContext4,
  useEffect as useEffect9,
  useRef as useRef8,
  useState as useState7
} from "react";
import { createPortal as createPortal2 } from "react-dom";
import { semantic as t28, useInjectStyles as useInjectStyles12 } from "../../core/dist/index.js";
import { jsx as jsx31, jsxs as jsxs16 } from "react/jsx-runtime";
var ToastContext = createContext4(null);
function useToast() {
  const ctx = useContext4(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a <ToastProvider>");
  }
  return ctx;
}
var STYLE_ID = "4lt7ab-toast-animations";
var toastCSS = `
@keyframes toast-slide-in {
  from { opacity: 0; transform: translateX(100%); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes toast-fade-out {
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(100%); }
}
/* Dismiss timer: drains from full to zero width over the toast's duration. */
@keyframes toast-timer-drain {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}
[data-toast-timer] {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  transform-origin: left center;
  animation: toast-timer-drain var(--toast-duration, 4000ms) linear forwards;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
[data-toast-root]:hover [data-toast-timer],
[data-toast-root][data-toast-paused="true"] [data-toast-timer] {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  @keyframes toast-slide-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes toast-fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
  /* Freeze the timer bar at full width \u2014 the toast still dismisses via setTimeout. */
  [data-toast-timer] {
    animation: none;
    transform: scaleX(1);
  }
}
`;
var typeColors = {
  success: { bg: t28.colorSuccessBg, fg: t28.colorSuccess, border: t28.colorSuccess },
  error: { bg: t28.colorErrorBg, fg: t28.colorError, border: t28.colorError },
  info: { bg: t28.colorInfoBg, fg: t28.colorInfo, border: t28.colorInfo },
  warning: { bg: t28.colorWarningBg, fg: t28.colorWarning, border: t28.colorWarning }
};
function ToastMessage({
  item,
  onDismiss
}) {
  const [exiting, setExiting] = useState7(false);
  const [paused, setPaused] = useState7(false);
  const timerRef = useRef8(null);
  const startedAtRef = useRef8(0);
  const remainingRef = useRef8(item.duration);
  const autoDismiss = item.duration > 0;
  const clearTimer = useCallback7(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const startTimer = useCallback7(() => {
    if (!autoDismiss || remainingRef.current <= 0) return;
    clearTimer();
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, remainingRef.current);
    setPaused(false);
  }, [autoDismiss, clearTimer]);
  const pauseTimer = useCallback7(() => {
    if (!autoDismiss || !timerRef.current) return;
    const elapsed = Date.now() - startedAtRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    clearTimer();
    setPaused(true);
  }, [autoDismiss, clearTimer]);
  useEffect9(() => {
    startTimer();
    return clearTimer;
  }, []);
  const handleAnimationEnd = () => {
    if (exiting) {
      onDismiss(item.id);
    }
  };
  const colors = typeColors[item.type];
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      role: "status",
      "data-toast-root": "",
      "data-toast-paused": paused || void 0,
      onMouseEnter: pauseTimer,
      onMouseLeave: startTimer,
      onFocus: pauseTimer,
      onBlur: startTimer,
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: t28.spaceSm,
        padding: `${t28.spaceSm} ${t28.spaceMd}`,
        paddingBottom: autoDismiss ? `calc(${t28.spaceSm} + 2px)` : t28.spaceSm,
        backgroundColor: t28.colorSurfaceSolid,
        backgroundImage: `linear-gradient(${colors.bg}, ${colors.bg})`,
        color: colors.fg,
        borderRadius: t28.radiusMd,
        borderLeft: `${t28.borderWidthAccent} solid ${colors.border}`,
        boxShadow: t28.shadowMd,
        fontSize: t28.fontSizeSm,
        fontFamily: t28.fontSans,
        fontWeight: t28.fontWeightMedium,
        lineHeight: t28.lineHeightBase,
        pointerEvents: "auto",
        animation: exiting ? "toast-fade-out 200ms ease forwards" : "toast-slide-in 250ms ease",
        maxWidth: "24rem",
        wordBreak: "break-word",
        overflow: "hidden"
      },
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ jsx31("span", { style: { flex: 1 }, children: item.message }),
        /* @__PURE__ */ jsx31(
          "button",
          {
            onClick: () => setExiting(true),
            "aria-label": "Dismiss",
            style: {
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              font: "inherit",
              cursor: "pointer",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1.25rem",
              height: "1.25rem",
              borderRadius: t28.radiusSm,
              color: colors.fg,
              opacity: 0.7,
              fontSize: t28.fontSizeSm,
              lineHeight: 1
            },
            children: "\xD7"
          }
        ),
        autoDismiss && /* @__PURE__ */ jsx31(
          "span",
          {
            "data-toast-timer": "",
            "aria-hidden": "true",
            style: {
              background: colors.fg,
              opacity: 0.5,
              ["--toast-duration"]: `${item.duration}ms`
            }
          }
        )
      ]
    }
  );
}
function ToastContainer({
  toasts,
  onDismiss,
  position
}) {
  useInjectStyles12(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: t28.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: t28.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: t28.spaceLg } : { bottom: t28.spaceLg },
    ...position.endsWith("right") ? { right: t28.spaceLg } : { left: t28.spaceLg }
  };
  return createPortal2(
    /* @__PURE__ */ jsx31("div", { "aria-live": "polite", style: positionStyles, children: toasts.map((item) => /* @__PURE__ */ jsx31(ToastMessage, { item, onDismiss }, item.id)) }),
    document.body
  );
}
var toastCounter = 0;
function ToastProvider({
  children,
  position = "top-right"
}) {
  const [toasts, setToasts] = useState7([]);
  const dismiss = useCallback7((id) => {
    setToasts((prev) => prev.filter((t39) => t39.id !== id));
  }, []);
  const showToast = useCallback7(
    (message, typeOrOptions) => {
      const opts = typeof typeOrOptions === "string" ? { type: typeOrOptions } : typeOrOptions ?? {};
      const item = {
        id: `toast-${++toastCounter}`,
        message,
        type: opts.type ?? "info",
        duration: opts.duration ?? 4e3
      };
      setToasts((prev) => [...prev, item]);
    },
    []
  );
  return /* @__PURE__ */ jsxs16(ToastContext.Provider, { value: { showToast }, children: [
    children,
    /* @__PURE__ */ jsx31(ToastContainer, { toasts, onDismiss: dismiss, position })
  ] });
}

// src/components/Combobox/Combobox.tsx
import {
  createContext as createContext5,
  useCallback as useCallback8,
  useContext as useContext5,
  useEffect as useEffect10,
  useId as useId7,
  useMemo as useMemo6,
  useRef as useRef9,
  useState as useState8
} from "react";
import { semantic as t29, useInjectStyles as useInjectStyles13 } from "../../core/dist/index.js";
import { jsx as jsx32 } from "react/jsx-runtime";
var COMBOBOX_STYLES_ID = "alttab-combobox";
var comboboxCSS = (
  /* css */
  `
  .alttab-combobox-option {
    display: block;
    width: 100%;
    text-align: left;
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-tight);
    font-family: var(--font-sans);
    color: var(--color-text);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background 0.1s ease;
  }

  .alttab-combobox-option:hover,
  .alttab-combobox-option--focused {
    background: var(--color-surface-raised);
  }

  .alttab-combobox-option--selected {
    font-weight: var(--font-weight-semibold);
  }

  .alttab-combobox-input:focus-visible {
    border-color: var(--color-border-focused);
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }

  @media (prefers-reduced-motion: reduce) {
    .alttab-combobox-option,
    .alttab-combobox-input {
      transition: none;
    }
  }
`
);
var ComboboxContext = createContext5(null);
function useComboboxContext(part) {
  const ctx = useContext5(ComboboxContext);
  if (!ctx) {
    throw new Error(
      `Combobox.${part} must be rendered inside <Combobox.Root>. See the upgrade guide for the 0.4.0 compound API.`
    );
  }
  return ctx;
}
function Root3({
  value: controlledValue,
  defaultValue,
  onValueChange,
  onSelect,
  disabled = false,
  hasError = false,
  children
}) {
  useInjectStyles13(COMBOBOX_STYLES_ID, comboboxCSS);
  const instanceId = useId7();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = useState8(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = useState8(false);
  const [focusedValue, setFocusedValue] = useState8(null);
  const [dropDirection, setDropDirection] = useState8("down");
  const containerRef = useRef9(null);
  const inputRef = useRef9(null);
  const suppressNextOpenRef = useRef9(false);
  const [items, setItems] = useState8([]);
  const registerItem = useCallback8((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = useCallback8((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = useCallback8(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  const calculateDirection = useCallback8(() => {
    const input = inputRef.current;
    if (!input) return;
    const rect = input.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(items.length * 32 + 8, 256);
    setDropDirection(
      spaceBelow >= estimatedHeight ? "down" : spaceAbove > spaceBelow ? "up" : "down"
    );
  }, [items.length]);
  const openMenu = useCallback8(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    setFocusedValue(null);
  }, [disabled, calculateDirection]);
  const closeMenu = useCallback8(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const selectItem = useCallback8(
    (itemValue) => {
      const item = items.find((i) => i.value === itemValue);
      if (!item) return;
      setValue(item.textValue);
      onSelect?.(item);
      closeMenu();
      if (inputRef.current && document.activeElement !== inputRef.current) {
        suppressNextOpenRef.current = true;
        inputRef.current.focus();
      }
    },
    [items, setValue, onSelect, closeMenu]
  );
  useEffect10(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  const handleKeyDown = useCallback8(
    (e) => {
      if (e.key === "Escape") {
        if (open) {
          e.preventDefault();
          closeMenu();
        }
        return;
      }
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          openMenu();
        }
        return;
      }
      if (items.length === 0) return;
      const currentIdx = focusedValue ? items.findIndex((i) => i.value === focusedValue) : -1;
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const next = currentIdx < 0 || currentIdx === items.length - 1 ? items[0] : items[currentIdx + 1];
          setFocusedValue(next.value);
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prev = currentIdx < 0 ? items[items.length - 1] : currentIdx === 0 ? items[items.length - 1] : items[currentIdx - 1];
          setFocusedValue(prev.value);
          break;
        }
        case "Home":
          e.preventDefault();
          setFocusedValue(items[0].value);
          break;
        case "End":
          e.preventDefault();
          setFocusedValue(items[items.length - 1].value);
          break;
        case "Enter":
          if (focusedValue) {
            e.preventDefault();
            selectItem(focusedValue);
          }
          break;
        case "Tab":
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedValue, items, selectItem]
  );
  suppressNextOpenRef.__combobox_shared = true;
  const ctx = useMemo6(
    () => ({
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      disabled,
      hasError,
      focusedValue,
      setFocusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      inputRef,
      dropDirection,
      selectItem
    }),
    [
      value,
      setValue,
      open,
      openMenu,
      closeMenu,
      disabled,
      hasError,
      focusedValue,
      items,
      registerItem,
      unregisterItem,
      listboxId,
      instanceId,
      dropDirection,
      selectItem
    ]
  );
  ctx.__suppressNextOpen = suppressNextOpenRef;
  return /* @__PURE__ */ jsx32(ComboboxContext.Provider, { value: ctx, children: /* @__PURE__ */ jsx32("div", { ref: containerRef, style: wrapperStyle4, onKeyDown: handleKeyDown, children }) });
}
function Input3({
  placeholder,
  readOnly,
  maxLength,
  inputMode,
  name,
  required,
  autoFocus,
  autoComplete,
  id,
  form,
  tabIndex,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "data-testid": dataTestId,
  onFocus: onFocusProp,
  onBlur: onBlurProp
}) {
  const ctx = useComboboxContext("Input");
  const {
    value,
    setValue,
    open,
    openMenu,
    disabled,
    hasError,
    focusedValue,
    instanceId,
    items,
    listboxId,
    inputRef
  } = ctx;
  const suppressNextOpenRef = ctx.__suppressNextOpen;
  const activedescendant = open && focusedValue ? `${instanceId}-opt-${focusedValue}` : void 0;
  const handleChange = useCallback8(
    (e) => {
      setValue(e.target.value);
      if (!open) openMenu();
    },
    [setValue, open, openMenu]
  );
  const handleFocus = useCallback8(
    (e) => {
      if (suppressNextOpenRef.current) {
        suppressNextOpenRef.current = false;
      } else if (!disabled && items.length > 0) {
        openMenu();
      }
      onFocusProp?.(e);
    },
    [disabled, items.length, openMenu, onFocusProp, suppressNextOpenRef]
  );
  return /* @__PURE__ */ jsx32(
    "input",
    {
      ref: inputRef,
      type: "text",
      role: "combobox",
      className: "alttab-combobox-input",
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-controls": listboxId,
      "aria-activedescendant": activedescendant,
      "aria-autocomplete": "list",
      "aria-invalid": hasError || void 0,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      autoComplete: autoComplete ?? "off",
      id,
      form,
      name,
      tabIndex,
      readOnly,
      maxLength,
      inputMode,
      required,
      autoFocus,
      value,
      placeholder,
      disabled,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: onBlurProp,
      "data-testid": dataTestId,
      style: {
        ...inputBaseStyle,
        ...hasError ? errorBorderStyle4 : {},
        ...disabled ? disabledStyle4 : {}
      }
    }
  );
}
function List({ children }) {
  const { open, listboxId, dropDirection, focusedValue } = useComboboxContext("List");
  const ref = useRef9(null);
  useEffect10(() => {
    if (!open || !focusedValue) return;
    const menu = ref.current;
    if (!menu) return;
    const focused = menu.querySelector(
      `[data-value="${CSS.escape(focusedValue)}"]`
    );
    focused?.scrollIntoView({ block: "nearest" });
  }, [open, focusedValue]);
  const positionStyle = dropDirection === "down" ? {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: t29.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: t29.spaceXs
  };
  return /* @__PURE__ */ jsx32(
    "div",
    {
      ref,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        background: t29.colorSurfacePanel,
        border: `${t29.borderWidthDefault} solid ${t29.colorBorder}`,
        borderRadius: t29.radiusMd,
        padding: t29.spaceXs,
        zIndex: t29.zIndexSticky,
        boxShadow: t29.shadowMd,
        maxHeight: "16rem",
        overflowY: "auto",
        boxSizing: "border-box"
      } : void 0,
      children
    }
  );
}
function Item2({
  value,
  textValue,
  children
}) {
  const {
    value: inputValue,
    focusedValue,
    setFocusedValue,
    selectItem,
    registerItem,
    unregisterItem,
    instanceId
  } = useComboboxContext("Item");
  const resolvedText = textValue ?? (typeof children === "string" ? children : value);
  useEffect10(() => {
    registerItem({ value, textValue: resolvedText });
    return () => unregisterItem(value);
  }, [value, resolvedText, registerItem, unregisterItem]);
  const isFocused = focusedValue === value;
  const isSelected = inputValue === resolvedText;
  const classes = [
    "alttab-combobox-option",
    isFocused ? "alttab-combobox-option--focused" : "",
    isSelected ? "alttab-combobox-option--selected" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx32(
    "button",
    {
      type: "button",
      role: "option",
      id: `${instanceId}-opt-${value}`,
      "data-value": value,
      "aria-selected": isSelected,
      className: classes,
      onClick: () => selectItem(value),
      onMouseEnter: () => setFocusedValue(value),
      children
    }
  );
}
function Empty({ children }) {
  return /* @__PURE__ */ jsx32(
    "div",
    {
      role: "presentation",
      style: {
        padding: `${t29.spaceXs} ${t29.spaceSm}`,
        fontSize: t29.fontSizeSm,
        color: t29.colorTextMuted,
        fontFamily: t29.fontSans
      },
      children
    }
  );
}
var wrapperStyle4 = {
  position: "relative",
  display: "block",
  width: "100%"
};
var inputBaseStyle = {
  display: "block",
  width: "100%",
  padding: `${t29.spaceSm} ${t29.spaceMd}`,
  fontSize: t29.fontSizeSm,
  lineHeight: t29.lineHeightTight,
  fontFamily: t29.fontSans,
  color: t29.colorText,
  background: t29.colorSurfaceInput,
  border: `${t29.borderWidthDefault} solid ${t29.colorBorder}`,
  borderRadius: t29.radiusMd,
  outline: "none",
  transition: `border-color ${t29.transitionBase}, box-shadow ${t29.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle4 = {
  borderColor: t29.colorBorderError
};
var disabledStyle4 = {
  background: t29.colorSurfaceDisabled,
  color: t29.colorTextDisabled,
  cursor: "not-allowed"
};
var Combobox = {
  Root: Root3,
  Input: Input3,
  List,
  Item: Item2,
  Empty
};

// src/components/TableFilters/TableFilters.tsx
import { useState as useState9, useEffect as useEffect11, useRef as useRef10, useCallback as useCallback9 } from "react";
import { semantic as t30 } from "../../core/dist/index.js";
import { jsx as jsx33, jsxs as jsxs17 } from "react/jsx-runtime";
function DebouncedTextFilter({
  config,
  value,
  onCommit
}) {
  const delay = config.debounceMs ?? 300;
  const [local, setLocal] = useState9(value);
  const timerRef = useRef10(null);
  useEffect11(() => {
    setLocal(value);
  }, [value]);
  const handleChange = useCallback9(
    (e) => {
      const next = e.target.value;
      setLocal(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onCommit(config.key, next);
      }, delay);
    },
    [config.key, delay, onCommit]
  );
  useEffect11(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx33("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ jsx33(
    Input,
    {
      value: local,
      onChange: handleChange,
      placeholder: config.placeholder
    }
  ) });
}
function SelectFilter({
  config,
  value,
  onCommit
}) {
  const handleValueChange = useCallback9(
    (next) => {
      onCommit(config.key, next);
    },
    [config.key, onCommit]
  );
  return /* @__PURE__ */ jsx33("div", { style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ jsxs17(Select.Root, { value, onValueChange: handleValueChange, children: [
    /* @__PURE__ */ jsx33(Select.Trigger, { children: /* @__PURE__ */ jsx33(Select.Value, { placeholder: config.placeholder }) }),
    /* @__PURE__ */ jsx33(Select.Content, { children: config.options.map((opt) => /* @__PURE__ */ jsx33(Select.Item, { value: opt.value, children: opt.label }, opt.value)) })
  ] }) });
}
function TableFilters({
  filters,
  values,
  onChange,
  style,
  ...props
}) {
  const handleCommit = useCallback9(
    (key, value) => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange]
  );
  return /* @__PURE__ */ jsx33(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t30.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...props,
      children: filters.map((filter) => {
        const val = values[filter.key] ?? "";
        if (filter.type === "text") {
          return /* @__PURE__ */ jsx33(
            DebouncedTextFilter,
            {
              config: filter,
              value: val,
              onCommit: handleCommit
            },
            filter.key
          );
        }
        return /* @__PURE__ */ jsx33(
          SelectFilter,
          {
            config: filter,
            value: val,
            onCommit: handleCommit
          },
          filter.key
        );
      })
    }
  );
}

// src/components/ChipPicker/ChipPicker.tsx
import { useCallback as useCallback10, useId as useId8, useState as useState10 } from "react";
import { semantic as t31, useInjectStyles as useInjectStyles14 } from "../../core/dist/index.js";
import { jsx as jsx34, jsxs as jsxs18 } from "react/jsx-runtime";
function ChipPicker({
  items,
  selected: controlledSelected,
  defaultSelected,
  onChange,
  "aria-label": ariaLabel
}) {
  const uid = useId8();
  const styleId = `chip-picker-${uid.replace(/:/g, "")}`;
  const isControlled = controlledSelected !== void 0;
  const [internalSelected, setInternalSelected] = useState10(
    () => defaultSelected ?? []
  );
  const selected = isControlled ? controlledSelected : internalSelected;
  const applySelection = useCallback10(
    (next) => {
      if (!isControlled) setInternalSelected(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  useInjectStyles14(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${t31.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${t31.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${t31.focusRingWidth} solid ${t31.focusRingColor};
      outline-offset: ${t31.focusRingOffset};
    }`
  );
  const toggle = (value) => {
    if (selected.includes(value)) {
      applySelection(selected.filter((v) => v !== value));
    } else {
      applySelection([...selected, value]);
    }
  };
  const groups = [];
  const groupMap = /* @__PURE__ */ new Map();
  for (const item of items) {
    const key = item.group ?? null;
    let arr = groupMap.get(key);
    if (!arr) {
      arr = [];
      groupMap.set(key, arr);
      groups.push({ label: key, chips: arr });
    }
    arr.push(item);
  }
  const ungroupedIdx = groups.findIndex((g) => g.label === null);
  if (ungroupedIdx > 0) {
    const [ungrouped] = groups.splice(ungroupedIdx, 1);
    groups.unshift(ungrouped);
  }
  const chipStyle = (isSelected) => ({
    display: "inline-flex",
    alignItems: "center",
    padding: `${t31.spaceXs} ${t31.spaceSm}`,
    fontSize: t31.fontSizeSm,
    fontFamily: t31.fontSans,
    fontWeight: t31.fontWeightMedium,
    lineHeight: t31.lineHeightTight,
    color: isSelected ? t31.colorActionPrimary : t31.colorText,
    background: isSelected ? t31.colorActionSecondary : "transparent",
    border: `${t31.borderWidthDefault} solid ${isSelected ? t31.colorActionPrimary : t31.colorBorder}`,
    borderRadius: t31.radiusFull,
    cursor: "pointer",
    transition: `background ${t31.transitionFast}, border-color ${t31.transitionFast}, color ${t31.transitionFast}`,
    outline: "none"
  });
  const renderChips = (chips) => /* @__PURE__ */ jsx34(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t31.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ jsx34(
          "button",
          {
            type: "button",
            "aria-pressed": isSelected,
            onClick: () => toggle(item.value),
            style: chipStyle(isSelected),
            children: item.label
          },
          item.value
        );
      })
    }
  );
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-chip-picker-id": styleId,
      role: "group",
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t31.spaceMd
      },
      children: groups.map((group, i) => /* @__PURE__ */ jsxs18("div", { style: { display: "flex", flexDirection: "column", gap: t31.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ jsx34("div", { style: i > 0 ? { marginTop: t31.spaceXs } : void 0, children: /* @__PURE__ */ jsx34("div", { style: sectionLabelStyle, children: group.label }) }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/SearchInput/SearchInput.tsx
import { forwardRef as forwardRef23, useState as useState11, useEffect as useEffect12, useRef as useRef11, useCallback as useCallback11 } from "react";
import { semantic as t32, useInjectStyles as useInjectStyles15 } from "../../core/dist/index.js";
import { jsx as jsx35, jsxs as jsxs19 } from "react/jsx-runtime";
var STYLE_ID2 = "4lt7ab-search-input";
var hoverFocusCSS = `
  .search-input-wrapper:focus-within {
    border-color: ${t32.colorBorderFocused};
    box-shadow: 0 0 0 ${t32.focusRingWidth} ${t32.focusRingColor};
  }
  @media (prefers-reduced-motion: reduce) {
    .search-input-wrapper {
      transition: none !important;
    }
  }
`;
var wrapperStyle5 = {
  display: "flex",
  alignItems: "center",
  gap: t32.spaceXs,
  width: "100%",
  padding: `${t32.spaceSm} ${t32.spaceMd}`,
  fontSize: t32.fontSizeSm,
  lineHeight: t32.lineHeightTight,
  fontFamily: t32.fontSans,
  color: t32.colorText,
  background: t32.colorSurfaceInput,
  border: `${t32.borderWidthDefault} solid ${t32.colorBorder}`,
  borderRadius: t32.radiusMd,
  transition: `border-color ${t32.transitionBase}, box-shadow ${t32.transitionBase}`,
  boxSizing: "border-box"
};
var inputStyle = {
  flex: 1,
  minWidth: 0,
  border: "none",
  outline: "none",
  background: "transparent",
  color: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  fontFamily: "inherit",
  padding: 0
};
var disabledWrapperStyle = {
  background: t32.colorSurfaceDisabled,
  color: t32.colorTextDisabled,
  cursor: "not-allowed"
};
var SearchInput = forwardRef23(
  function SearchInput2({
    value,
    onSearch,
    debounceMs = 300,
    trailing,
    disabled,
    placeholder = "Search\u2026",
    name,
    id,
    autoFocus,
    tabIndex,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "data-testid": dataTestId
  }, ref) {
    useInjectStyles15(STYLE_ID2, hoverFocusCSS);
    const [localValue, setLocalValue] = useState11(value);
    const timerRef = useRef11(null);
    const onSearchRef = useRef11(onSearch);
    onSearchRef.current = onSearch;
    useEffect12(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = useCallback11((e) => {
      const next = e.target.value;
      setLocalValue(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearchRef.current(next);
      }, debounceMs);
    }, [debounceMs]);
    useEffect12(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);
    return /* @__PURE__ */ jsxs19(
      "div",
      {
        className: "search-input-wrapper",
        "data-testid": dataTestId,
        style: {
          ...wrapperStyle5,
          ...disabled ? disabledWrapperStyle : {}
        },
        children: [
          /* @__PURE__ */ jsx35("span", { style: { color: t32.colorTextMuted, flexShrink: 0, display: "inline-flex" }, children: /* @__PURE__ */ jsx35(Icon, { name: "search", size: "sm" }) }),
          /* @__PURE__ */ jsx35(
            "input",
            {
              ref,
              type: "text",
              value: localValue,
              onChange: handleChange,
              placeholder,
              disabled,
              name,
              id,
              autoFocus,
              tabIndex,
              "aria-label": ariaLabel,
              "aria-labelledby": ariaLabelledBy,
              "aria-describedby": ariaDescribedBy,
              style: inputStyle
            }
          ),
          trailing && /* @__PURE__ */ jsx35("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/SegmentedControl/SegmentedControl.tsx
import { useCallback as useCallback12, useLayoutEffect, useRef as useRef12, useState as useState12 } from "react";
import { semantic as t33, useInjectStyles as useInjectStyles16 } from "../../core/dist/index.js";
import { jsx as jsx36, jsxs as jsxs20 } from "react/jsx-runtime";
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${t33.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${t33.focusRingWidth} solid ${t33.focusRingColor};
    outline-offset: ${t33.focusRingOffset};
    border-radius: ${t33.radiusFull};
    z-index: 2;
  }
  @media (prefers-reduced-motion: reduce) {
    .segmented-ctrl-indicator {
      transition: none !important;
    }
  }
`;
var sizes = {
  sm: { height: 28, px: 8, fontSize: "var(--font-size-xs)", iconSize: "xs" },
  md: { height: 32, px: 12, fontSize: "var(--font-size-sm)", iconSize: "sm" }
};
function SegmentedControl({
  segments,
  value: controlledValue,
  defaultValue,
  onChange,
  size = "md",
  "aria-label": ariaLabel
}) {
  useInjectStyles16(STYLE_ID3, hoverCSS);
  const isControlled = controlledValue !== void 0;
  const [internalValue, setInternalValue] = useState12(
    () => defaultValue ?? segments[0]?.value ?? ""
  );
  const value = isControlled ? controlledValue : internalValue;
  const handleSelect = useCallback12(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  const containerRef = useRef12(null);
  const [indicator, setIndicator] = useState12(null);
  const s = sizes[size];
  const updateIndicator = useCallback12(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeBtn = container.querySelector('[aria-pressed="true"]');
    if (!activeBtn) {
      setIndicator(null);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width
    });
  }, []);
  useLayoutEffect(() => {
    updateIndicator();
  }, [value, segments, updateIndicator]);
  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => updateIndicator());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateIndicator]);
  return /* @__PURE__ */ jsxs20(
    "div",
    {
      ref: containerRef,
      role: "group",
      "aria-label": ariaLabel,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        height: s.height,
        background: t33.colorSurfaceInput,
        borderRadius: t33.radiusFull,
        border: `${t33.borderWidthDefault} solid ${t33.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ jsx36(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: t33.radiusFull,
              background: t33.colorActionPrimary,
              transition: `left ${t33.transitionSlow}, width ${t33.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ jsxs20(
            "button",
            {
              type: "button",
              className: "segmented-ctrl-btn",
              "aria-pressed": isActive,
              onClick: () => handleSelect(seg.value),
              style: {
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: t33.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: t33.radiusFull,
                background: "transparent",
                color: isActive ? t33.colorTextInverse : t33.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: t33.fontSans,
                fontWeight: isActive ? t33.fontWeightSemibold : t33.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${t33.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ jsx36(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ jsx36("span", { children: seg.label })
              ]
            },
            seg.value
          );
        })
      ]
    }
  );
}

// src/components/AlertBanner/AlertBanner.tsx
import { forwardRef as forwardRef24 } from "react";
import { semantic as t34, useInjectStyles as useInjectStyles17 } from "../../core/dist/index.js";
import { jsx as jsx37, jsxs as jsxs21 } from "react/jsx-runtime";
var STYLE_ID4 = "4lt7ab-alert-banner";
var alertBannerCSS = `
@keyframes alert-banner-slide-in {
  from { opacity: 0; transform: translateY(-100%); }
  to   { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  @keyframes alert-banner-slide-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
}
.alert-banner-dismiss:hover {
  opacity: 1 !important;
}
`;
var variantColors2 = {
  info: { bg: t34.colorInfoBg, fg: t34.colorInfo, border: t34.colorInfo },
  warning: { bg: t34.colorWarningBg, fg: t34.colorWarning, border: t34.colorWarning },
  error: { bg: t34.colorErrorBg, fg: t34.colorError, border: t34.colorError },
  success: { bg: t34.colorSuccessBg, fg: t34.colorSuccess, border: t34.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ jsx37(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ jsx37(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ jsx37(IconError, { size: 20 }),
  success: /* @__PURE__ */ jsx37(IconCheckCircle, { size: 20 })
};
var AlertBanner = forwardRef24(
  function AlertBanner2({ variant, children, onDismiss, icon }, ref) {
    useInjectStyles17(STYLE_ID4, alertBannerCSS);
    const colors = variantColors2[variant];
    const resolvedIcon = icon !== void 0 ? icon : defaultIcons[variant];
    return /* @__PURE__ */ jsxs21(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t34.spaceSm,
          width: "100%",
          padding: `${t34.spaceSm} ${t34.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${t34.borderWidthThick} solid ${colors.border}`,
          fontFamily: t34.fontSans,
          fontSize: t34.fontSizeSm,
          fontWeight: t34.fontWeightMedium,
          lineHeight: t34.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease"
        },
        children: [
          resolvedIcon && /* @__PURE__ */ jsx37("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ jsx37("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ jsx37(
            "button",
            {
              className: "alert-banner-dismiss",
              onClick: onDismiss,
              "aria-label": "Dismiss",
              style: {
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                font: "inherit",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: t34.radiusSm,
                color: colors.fg,
                opacity: 0.7,
                fontSize: t34.fontSizeLg,
                lineHeight: 1
              },
              children: "\xD7"
            }
          )
        ]
      }
    );
  }
);

// src/components/TopBar/TopBar.tsx
import { createContext as createContext6, forwardRef as forwardRef25, useContext as useContext6 } from "react";
import { semantic as t35, useInjectStyles as useInjectStyles18, Slot as Slot3 } from "../../core/dist/index.js";
import { jsx as jsx38 } from "react/jsx-runtime";
var TopBarContext = createContext6(null);
function useTopBarContext(component) {
  const ctx = useContext6(TopBarContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <TopBar.${component}> must be rendered inside <TopBar.Root>.`
    );
  }
}
var TOPBAR_STYLES_ID = "4lt7ab-topbar-v2";
var TOPBAR_CSS = `
  [data-topbar-link] {
    position: relative;
  }
  [data-topbar-link]::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: transparent;
    transition: background ${t35.transitionBase};
  }
  [data-topbar-link]:hover::after {
    background: ${t35.colorBorder};
  }
  [data-topbar-link][data-active]::after {
    background: ${t35.colorActionPrimary};
  }
  [data-topbar-link]:hover {
    color: ${t35.colorText};
  }
`;
var TopBarRoot = forwardRef25(
  function TopBarRoot2({ children, sticky = false, ...rest }, ref) {
    useInjectStyles18(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: t35.zIndexSticky } : {};
    return /* @__PURE__ */ jsx38(TopBarContext.Provider, { value: true, children: /* @__PURE__ */ jsx38(
      "header",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-label": rest["aria-label"],
        style: {
          display: "flex",
          alignItems: "center",
          height: t35.space2xl,
          padding: `0 ${t35.spaceMd}`,
          background: t35.colorSurface,
          borderBottom: `${t35.borderWidthDefault} solid ${t35.colorBorder}`,
          fontFamily: t35.fontSans,
          ...stickyStyle
        },
        children
      }
    ) });
  }
);
function TopBarLeading({ children }) {
  useTopBarContext("Leading");
  return /* @__PURE__ */ jsx38(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        fontWeight: t35.fontWeightBold,
        fontSize: t35.fontSizeSm,
        color: t35.colorText,
        marginRight: t35.spaceLg,
        whiteSpace: "nowrap",
        flexShrink: 0
      },
      children
    }
  );
}
function TopBarNav({ children, "aria-label": ariaLabel = "Primary" }) {
  useTopBarContext("Nav");
  return /* @__PURE__ */ jsx38(
    "nav",
    {
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        alignItems: "center",
        gap: t35.spaceXs,
        height: "100%",
        flex: 1,
        minWidth: 0
      },
      children
    }
  );
}
var TopBarLink = forwardRef25(function TopBarLink2({ active = false, asChild = false, onClick, children }, ref) {
  useTopBarContext("Link");
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: t35.spaceXs,
    height: "100%",
    padding: `0 ${t35.spaceSm}`,
    border: "none",
    background: "transparent",
    color: active ? t35.colorActionPrimary : t35.colorTextMuted,
    fontSize: t35.fontSizeSm,
    fontFamily: t35.fontSans,
    fontWeight: active ? t35.fontWeightSemibold : t35.fontWeightNormal,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: `color ${t35.transitionBase}`,
    boxSizing: "border-box"
  };
  const commonProps = {
    "data-topbar-link": "",
    "data-active": active || void 0,
    "aria-current": active ? "page" : void 0,
    onClick,
    style
  };
  if (asChild) {
    return /* @__PURE__ */ jsx38(Slot3, { ref, ...commonProps, children });
  }
  return /* @__PURE__ */ jsx38("button", { ref, type: "button", ...commonProps, children });
});
function TopBarTrailing({ children }) {
  useTopBarContext("Trailing");
  return /* @__PURE__ */ jsx38(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: t35.spaceSm,
        marginLeft: "auto",
        flexShrink: 0
      },
      children
    }
  );
}
var TopBar = {
  Root: TopBarRoot,
  Leading: TopBarLeading,
  Nav: TopBarNav,
  Link: TopBarLink,
  Trailing: TopBarTrailing
};

// src/components/Surface/Surface.tsx
import { createElement, forwardRef as forwardRef26 } from "react";
import { semantic as t36 } from "../../core/dist/index.js";
var levelMap = {
  page: t36.colorSurfacePage,
  default: t36.colorSurface,
  solid: t36.colorSurfaceSolid,
  raised: t36.colorSurfaceRaised,
  panel: t36.colorSurfacePanel,
  input: t36.colorSurfaceInput,
  overlay: t36.colorSurfaceOverlay
};
var Surface = forwardRef26(
  function Surface2({
    level = "solid",
    tint,
    padding,
    radius = "lg",
    border = false,
    shadow,
    as = "div",
    children,
    ...rest
  }, ref) {
    const borderValue = border === true ? `${t36.borderWidthDefault} solid ${t36.colorBorder}` : typeof border === "string" ? `${t36.borderWidthDefault} solid ${semanticColorMap[border]}` : void 0;
    const tintBg = tint ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)` : void 0;
    return createElement(
      as,
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-label": rest["aria-label"],
        "aria-labelledby": rest["aria-labelledby"],
        style: {
          background: tintBg ?? levelMap[level],
          padding: padding ? spacingMap[padding] : void 0,
          borderRadius: radiusMap[radius],
          border: borderValue,
          boxShadow: shadow ? shadowMap[shadow] : void 0,
          color: t36.colorText
        }
      },
      children
    );
  }
);

// src/components/Grid/Grid.tsx
import { forwardRef as forwardRef27 } from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
var Grid = forwardRef27(
  function Grid2({
    minColumnWidth = 300,
    columns,
    gap = "md",
    children,
    ...rest
  }, ref) {
    const minWidth = `${minColumnWidth}px`;
    const gridTemplateColumns = columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    return /* @__PURE__ */ jsx39(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        style: {
          display: "grid",
          gridTemplateColumns,
          gap: spacingMap[gap]
        },
        children
      }
    );
  }
);

// src/components/Divider/Divider.tsx
import { forwardRef as forwardRef28 } from "react";
import { semantic as t37 } from "../../core/dist/index.js";
import { jsx as jsx40 } from "react/jsx-runtime";
var Divider = forwardRef28(
  function Divider2({
    orientation = "horizontal",
    opacity = "default",
    spacing,
    ...rest
  }, ref) {
    const resolvedOpacity = dividerOpacityMap[opacity];
    const bg = `color-mix(in srgb, ${t37.colorBorder} ${resolvedOpacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : void 0;
    const isHorizontal = orientation === "horizontal";
    return /* @__PURE__ */ jsx40(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        role: "separator",
        "aria-orientation": orientation,
        style: {
          background: bg,
          width: isHorizontal ? "100%" : 1,
          height: isHorizontal ? 1 : "100%",
          flexShrink: 0,
          margin: spacingValue ? isHorizontal ? `${spacingValue} 0` : `0 ${spacingValue}` : void 0
        }
      }
    );
  }
);

// src/components/TabStrip/TabStrip.tsx
import { forwardRef as forwardRef29, useCallback as useCallback13, useRef as useRef13 } from "react";
import { semantic as t38, useInjectStyles as useInjectStyles19 } from "../../core/dist/index.js";
import { jsx as jsx41, jsxs as jsxs22 } from "react/jsx-runtime";
var STYLES_ID = "4lt7ab-tab-strip";
var STYLES_CSS = `
[data-tab-btn] {
  transition: color ${t38.transitionFast}, background ${t38.transitionFast}, border-color ${t38.transitionFast};
}
[data-tab-btn]:hover:not([aria-selected="true"]) {
  color: ${t38.colorTextSecondary};
  background: color-mix(in srgb, ${t38.colorBorder} 10%, transparent);
}
`;
var TabStrip = forwardRef29(
  function TabStrip2({
    tabs,
    activeKey,
    onChange,
    allowDeselect = false,
    size = "md",
    ...rest
  }, ref) {
    useInjectStyles19(STYLES_ID, STYLES_CSS);
    const tabRefs = useRef13([]);
    const handleClick = useCallback13(
      (key) => {
        if (key === activeKey && allowDeselect) {
          onChange(null);
        } else {
          onChange(key);
        }
      },
      [activeKey, allowDeselect, onChange]
    );
    const handleKeyDown = useCallback13(
      (e, index) => {
        let nextIndex = null;
        if (e.key === "ArrowRight") {
          nextIndex = (index + 1) % tabs.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === "Home") {
          nextIndex = 0;
        } else if (e.key === "End") {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex != null) {
          e.preventDefault();
          tabRefs.current[nextIndex]?.focus();
        }
      },
      [tabs.length]
    );
    const isSm = size === "sm";
    return /* @__PURE__ */ jsx41(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        role: "tablist",
        style: {
          display: "flex",
          gap: 2
        },
        children: tabs.map((tab, i) => {
          const isActive = tab.key === activeKey;
          return /* @__PURE__ */ jsxs22(
            "button",
            {
              ref: (el) => {
                tabRefs.current[i] = el;
              },
              role: "tab",
              "aria-selected": isActive,
              tabIndex: isActive ? 0 : -1,
              "data-tab-btn": "",
              onClick: () => handleClick(tab.key),
              onKeyDown: (e) => handleKeyDown(e, i),
              style: {
                display: "flex",
                alignItems: "center",
                gap: t38.spaceXs,
                padding: isSm ? `${t38.spaceXs} ${t38.spaceSm}` : `${t38.spaceSm} ${t38.spaceMd}`,
                border: "none",
                borderBottom: `2px solid ${isActive ? t38.colorActionPrimary : "transparent"}`,
                borderRadius: 0,
                background: isActive ? `color-mix(in srgb, ${t38.colorActionPrimary} 8%, transparent)` : "transparent",
                color: isActive ? t38.colorActionPrimary : t38.colorTextMuted,
                fontFamily: t38.fontSans,
                fontSize: isSm ? t38.fontSizeXs : t38.fontSizeSm,
                fontWeight: t38.fontWeightSemibold,
                lineHeight: t38.lineHeightTight,
                cursor: "pointer",
                whiteSpace: "nowrap"
              },
              children: [
                tab.icon && /* @__PURE__ */ jsx41(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    style: { fontSize: isSm ? 12 : 14, lineHeight: 1 },
                    "aria-hidden": "true",
                    children: tab.icon
                  }
                ),
                tab.label
              ]
            },
            tab.key
          );
        })
      }
    );
  }
);
export {
  AlertBanner,
  Badge,
  Button,
  Calendar2 as Calendar,
  Card,
  CardSkeleton,
  ChipPicker,
  Combobox,
  ConfirmDialog,
  DatePicker,
  DateRangePicker,
  Divider,
  EmptyState,
  ErrorBoundary,
  Field,
  Grid,
  Header,
  Icon,
  IconArrowLeft,
  IconArrowRight,
  IconButton,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClose,
  IconCopy,
  IconEdit,
  IconError,
  IconExternalLink,
  IconEye,
  IconEyeOff,
  IconFilter,
  IconFontProvider,
  IconInfo,
  IconMenu,
  IconMinus,
  IconMoreVertical,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTrash,
  IconWarning,
  Input,
  ModalShell,
  Overlay,
  Pagination,
  ProgressBar,
  RowSkeleton,
  SearchInput,
  SegmentedControl,
  Select,
  Skeleton,
  Stack,
  StatusDot,
  Surface,
  TabStrip,
  Table,
  TableBody,
  TableCell,
  TableEmptyRow,
  TableFilters,
  TableGroupHeader,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Textarea,
  ThemePicker,
  ToastProvider,
  TopBar,
  TopBarLeading,
  TopBarLink,
  TopBarNav,
  TopBarRoot,
  TopBarTrailing,
  alignMap,
  dividerOpacityMap,
  iconRegistry,
  iconSizeMap,
  justifyMap,
  modalFooterStyle,
  modalHeadingStyle,
  modalWidthMap,
  nextFocusedDate,
  progressBarHeightMap,
  radiusMap,
  sectionLabelStyle,
  semanticColorMap,
  shadowMap,
  spacingMap,
  tagChipStyle,
  useCalendarContext,
  useFocusTrap,
  useToast
};
