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
      const activeIdx = themeList.findIndex((t44) => t44.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]);
  const currentTheme = themeList.find((t44) => t44.name === resolved);
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
        children: themeList.map((t44, idx) => {
          const isActive = resolved === t44.name;
          const isFocused = focusedIndex === idx;
          const classes = [
            "alttab-tp-menu-item",
            isActive ? "alttab-tp-menu-item--active" : "",
            isFocused && !isActive ? "alttab-tp-menu-item--focused" : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ jsxs2(
            "button",
            {
              id: `alttab-tp-item-${t44.name}`,
              role: "option",
              "aria-selected": isActive,
              className: classes,
              onClick: () => {
                setTheme(t44.name);
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
                t44.label
              ]
            },
            t44.name
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
import { semantic as t2, useInjectStyles as useInjectStyles2 } from "../../core/dist/index.js";
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
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsx4(
      "button",
      {
        ref,
        type,
        form,
        name,
        value,
        tabIndex,
        id,
        onClick,
        autoFocus,
        "aria-busy": loading || void 0,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-haspopup": ariaHasPopup,
        "data-testid": dataTestId,
        style: {
          ...baseStyles,
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...iconOnly ? { padding: iconOnlyPadding[size], aspectRatio: "1", minWidth: 0 } : {},
          ...isDisabled ? { opacity: 0.5, cursor: "not-allowed" } : {}
        },
        disabled: isDisabled,
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
import { forwardRef as forwardRef9, useState as useState2, useEffect as useEffect4, useRef as useRef3, useCallback as useCallback2 } from "react";
import { semantic as t7, useInjectStyles as useInjectStyles4 } from "../../core/dist/index.js";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
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
function getOptions(options) {
  return options ?? [];
}
function findLabel(options, value) {
  return options.find((o) => o.value === value)?.label;
}
var Select = forwardRef9(function Select2({
  options,
  children,
  placeholder,
  hasError,
  disabled,
  value: controlledValue,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  name,
  required,
  id,
  form,
  tabIndex,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  "data-testid": dataTestId
}, ref) {
  useInjectStyles4(SELECT_STYLES_ID, selectCSS);
  const optionList = getOptions(options);
  const [open, setOpen] = useState2(false);
  const [focusedIndex, setFocusedIndex] = useState2(-1);
  const [internalValue, setInternalValue] = useState2(
    () => defaultValue ?? ""
  );
  const isControlled = controlledValue !== void 0;
  const currentValue = isControlled ? controlledValue : internalValue;
  const containerRef = useRef3(null);
  const triggerRef = useRef3(null);
  const menuRef = useRef3(null);
  const hiddenSelectRef = useRef3(null);
  const [dropDirection, setDropDirection] = useState2("down");
  useEffect4(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(hiddenSelectRef.current);
    } else {
      ref.current = hiddenSelectRef.current;
    }
  }, [ref]);
  if (children) {
    return /* @__PURE__ */ jsxs4("div", { style: wrapperStyle, children: [
      /* @__PURE__ */ jsxs4(
        "select",
        {
          ref: hiddenSelectRef,
          "aria-invalid": ariaInvalid ?? (hasError || void 0),
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          "aria-describedby": ariaDescribedBy,
          name,
          id,
          form,
          required,
          tabIndex,
          value: controlledValue,
          defaultValue,
          onChange,
          onFocus,
          onBlur,
          disabled,
          "data-testid": dataTestId,
          style: {
            ...triggerBaseStyle,
            ...hasError ? errorBorderStyle3 : {},
            ...disabled ? disabledStyle3 : {}
          },
          children: [
            placeholder && /* @__PURE__ */ jsx10("option", { value: "", disabled: true, children: placeholder }),
            children
          ]
        }
      ),
      /* @__PURE__ */ jsx10("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ jsx10(ChevronSVG, {}) })
    ] });
  }
  const calculateDirection = useCallback2(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(optionList.length * 32 + 8, 256);
    setDropDirection(spaceBelow >= estimatedHeight ? "down" : spaceAbove > spaceBelow ? "up" : "down");
  }, [optionList.length]);
  const openMenu = useCallback2(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const activeIdx = optionList.findIndex((o) => o.value === currentValue);
    setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
  }, [disabled, calculateDirection, optionList, currentValue]);
  const closeMenu = useCallback2(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);
  const selectOption = useCallback2(
    (opt) => {
      if (opt.disabled) return;
      if (!isControlled) {
        setInternalValue(opt.value);
      }
      if (onChange && hiddenSelectRef.current) {
        const nativeSelect = hiddenSelectRef.current;
        const nativeSetter = Object.getOwnPropertyDescriptor(
          HTMLSelectElement.prototype,
          "value"
        )?.set;
        nativeSetter?.call(nativeSelect, opt.value);
        onChange({ target: nativeSelect });
      }
      closeMenu();
      triggerRef.current?.focus();
    },
    [isControlled, onChange, closeMenu]
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
  useEffect4(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  const handleKeyDown = useCallback2(
    (e) => {
      if (e.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
        return;
      }
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openMenu();
        }
        return;
      }
      const enabledIndices = optionList.map((o, i) => o.disabled ? -1 : i).filter((i) => i >= 0);
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const currentPos = enabledIndices.indexOf(focusedIndex);
          const next = currentPos < enabledIndices.length - 1 ? enabledIndices[currentPos + 1] : enabledIndices[0];
          setFocusedIndex(next);
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const currentPos = enabledIndices.indexOf(focusedIndex);
          const prev = currentPos > 0 ? enabledIndices[currentPos - 1] : enabledIndices[enabledIndices.length - 1];
          setFocusedIndex(prev);
          break;
        }
        case "Enter":
        case " ":
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < optionList.length) {
            selectOption(optionList[focusedIndex]);
          }
          break;
        case "Home":
          e.preventDefault();
          if (enabledIndices.length > 0) setFocusedIndex(enabledIndices[0]);
          break;
        case "End":
          e.preventDefault();
          if (enabledIndices.length > 0)
            setFocusedIndex(enabledIndices[enabledIndices.length - 1]);
          break;
        case "Tab":
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedIndex, optionList, selectOption]
  );
  const displayLabel = findLabel(optionList, currentValue);
  const showPlaceholder = !displayLabel && !!placeholder;
  const listboxId = id ? `${id}-listbox` : void 0;
  const menuStyle = dropDirection === "down" ? {
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
  return /* @__PURE__ */ jsxs4("div", { ref: containerRef, style: wrapperStyle, onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxs4(
      "select",
      {
        ref: hiddenSelectRef,
        name,
        value: currentValue,
        onChange: () => {
        },
        disabled,
        tabIndex: -1,
        "aria-hidden": true,
        style: {
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none"
        },
        children: [
          placeholder && /* @__PURE__ */ jsx10("option", { value: "", disabled: true, children: placeholder }),
          optionList.map((opt) => /* @__PURE__ */ jsx10("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value))
        ]
      }
    ),
    /* @__PURE__ */ jsx10(
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
        "aria-activedescendant": open && focusedIndex >= 0 ? `alttab-select-opt-${optionList[focusedIndex]?.value}` : void 0,
        disabled,
        onClick: () => open ? closeMenu() : openMenu(),
        "data-testid": dataTestId,
        style: {
          ...triggerBaseStyle,
          ...hasError ? errorBorderStyle3 : {},
          ...disabled ? disabledStyle3 : {},
          ...showPlaceholder ? placeholderStyle : {}
        },
        children: displayLabel ?? placeholder ?? "\xA0"
      }
    ),
    /* @__PURE__ */ jsx10("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ jsx10(ChevronSVG, { rotated: open }) }),
    open && /* @__PURE__ */ jsx10(
      "div",
      {
        ref: menuRef,
        id: listboxId,
        role: "listbox",
        style: {
          ...menuStyle,
          background: t7.colorSurfacePanel,
          border: `${t7.borderWidthDefault} solid ${t7.colorBorder}`,
          borderRadius: t7.radiusMd,
          padding: t7.spaceXs,
          zIndex: t7.zIndexSticky,
          boxShadow: t7.shadowMd,
          maxHeight: "16rem",
          overflowY: "auto",
          boxSizing: "border-box"
        },
        children: optionList.map((opt, idx) => {
          const isSelected = opt.value === currentValue;
          const isFocused = focusedIndex === idx;
          const classes = [
            "alttab-select-option",
            isSelected ? "alttab-select-option--selected" : "",
            isFocused ? "alttab-select-option--focused" : "",
            opt.disabled ? "alttab-select-option--disabled" : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ jsx10(
            "button",
            {
              id: `alttab-select-opt-${opt.value}`,
              type: "button",
              role: "option",
              "aria-selected": isSelected,
              "aria-disabled": opt.disabled || void 0,
              className: classes,
              onClick: () => selectOption(opt),
              onMouseEnter: () => {
                if (!opt.disabled) setFocusedIndex(idx);
              },
              children: opt.label
            },
            opt.value
          );
        })
      }
    )
  ] });
});
var wrapperStyle = {
  position: "relative",
  display: "block",
  width: "100%"
};
var triggerBaseStyle = {
  display: "block",
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
  textAlign: "left",
  // Space for custom chevron
  paddingRight: t7.space2xl
};
var chevronStyle = {
  position: "absolute",
  right: t7.spaceSm,
  top: t7.spaceSm,
  pointerEvents: "none",
  color: t7.colorTextSecondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: `calc(${t7.fontSizeSm} * ${t7.lineHeightTight})`
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

// src/components/Badge/Badge.tsx
import { forwardRef as forwardRef10 } from "react";
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
var Badge = forwardRef10(
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
import { forwardRef as forwardRef11, useId as useId2 } from "react";
import { semantic as t9, useInjectStyles as useInjectStyles5 } from "../../core/dist/index.js";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
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
var IconButton = forwardRef11(
  function IconButton2({
    icon,
    size = "md",
    badge,
    fontClass,
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
    const uid = useId2();
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
    return /* @__PURE__ */ jsxs5(
      "button",
      {
        ref,
        "data-icon-btn-id": styleId,
        type,
        onClick,
        disabled,
        tabIndex,
        id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "data-testid": dataTestId,
        style: {
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
        },
        children: [
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
        ]
      }
    );
  }
);

// src/components/Overlay/Overlay.tsx
import { forwardRef as forwardRef12 } from "react";
import { semantic as t10 } from "../../core/dist/index.js";
import { jsx as jsx13 } from "react/jsx-runtime";
var Overlay = forwardRef12(
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
import { forwardRef as forwardRef13 } from "react";
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
var Skeleton = forwardRef13(
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
var CardSkeleton = forwardRef13(
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
var RowSkeleton = forwardRef13(
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
import { forwardRef as forwardRef14 } from "react";
import { semantic as t12 } from "../../core/dist/index.js";
import { jsx as jsx15 } from "react/jsx-runtime";
var ProgressBar = forwardRef14(
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
import { forwardRef as forwardRef15 } from "react";
import { semantic as t13, useInjectStyles as useInjectStyles7 } from "../../core/dist/index.js";
import { Fragment, jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var IDLE_STYLES_ID = "4lt7ab-empty-state-idle";
var IDLE_STYLES_CSS = `
@keyframes emptyStateBreathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
/* Four orbits \u2014 each particle takes a different elliptical path so they don't look coordinated. */
@keyframes emptyStateDrift0 {
  0%   { transform: translate( 22px, -14px) scale(0.9); opacity: 0; }
  20%  { opacity: 0.55; }
  50%  { transform: translate( 28px,  18px) scale(1);   opacity: 0.55; }
  80%  { opacity: 0.3; }
  100% { transform: translate( 22px, -14px) scale(0.9); opacity: 0; }
}
@keyframes emptyStateDrift1 {
  0%   { transform: translate(-24px,  16px) scale(0.85); opacity: 0; }
  25%  { opacity: 0.5; }
  50%  { transform: translate(-30px, -10px) scale(1);    opacity: 0.5; }
  75%  { opacity: 0.3; }
  100% { transform: translate(-24px,  16px) scale(0.85); opacity: 0; }
}
@keyframes emptyStateDrift2 {
  0%   { transform: translate( -8px, -26px) scale(0.95); opacity: 0; }
  30%  { opacity: 0.45; }
  50%  { transform: translate( 12px, -30px) scale(1);    opacity: 0.45; }
  70%  { opacity: 0.25; }
  100% { transform: translate( -8px, -26px) scale(0.95); opacity: 0; }
}
@keyframes emptyStateDrift3 {
  0%   { transform: translate( 10px,  28px) scale(0.9);  opacity: 0; }
  20%  { opacity: 0.5; }
  50%  { transform: translate( -6px,  32px) scale(1);    opacity: 0.5; }
  80%  { opacity: 0.3; }
  100% { transform: translate( 10px,  28px) scale(0.9);  opacity: 0; }
}
[data-empty-state-icon="breathe"],
[data-empty-state-icon="particles"] {
  display: inline-flex;
  position: relative;
  animation: emptyStateBreathe 3s ease-in-out infinite;
  will-change: transform;
}
[data-empty-state-particle] {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  margin: -2px 0 0 -2px;
  border-radius: 50%;
  background: var(--empty-state-particle, currentColor);
  opacity: 0;
  pointer-events: none;
  will-change: transform, opacity;
}
[data-empty-state-particle="0"] { animation: emptyStateDrift0 6.5s ease-in-out infinite; }
[data-empty-state-particle="1"] { animation: emptyStateDrift1 7.2s ease-in-out infinite -1.5s; }
[data-empty-state-particle="2"] { animation: emptyStateDrift2 5.8s ease-in-out infinite -0.8s; }
[data-empty-state-particle="3"] { animation: emptyStateDrift3 8.1s ease-in-out infinite -2.2s; }
@media (prefers-reduced-motion: reduce) {
  [data-empty-state-icon="breathe"],
  [data-empty-state-icon="particles"] {
    animation: none;
  }
  [data-empty-state-particle] {
    animation: none;
    opacity: 0;
  }
}
`;
var EmptyState = forwardRef15(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    idle = "breathe",
    children,
    action
  }, ref) {
    useInjectStyles7(IDLE_STYLES_ID, IDLE_STYLES_CSS);
    const iconWrapper = /* @__PURE__ */ jsxs7(
      "span",
      {
        "data-empty-state-icon": idle === "none" ? void 0 : idle,
        style: { color: t13.colorTextMuted, display: "inline-flex" },
        children: [
          /* @__PURE__ */ jsx16(Icon, { name: icon, size: "xl" }),
          idle === "particles" && /* @__PURE__ */ jsxs7(Fragment, { children: [
            /* @__PURE__ */ jsx16("span", { "data-empty-state-particle": "0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx16("span", { "data-empty-state-particle": "1", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx16("span", { "data-empty-state-particle": "2", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx16("span", { "data-empty-state-particle": "3", "aria-hidden": "true" })
          ] })
        ]
      }
    );
    const content = /* @__PURE__ */ jsx16("div", { style: { padding: t13.spaceXl }, children: /* @__PURE__ */ jsxs7(Stack, { align: "center", gap: "sm", children: [
      iconWrapper,
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
import { forwardRef as forwardRef16 } from "react";
import { semantic as t14 } from "../../core/dist/index.js";
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = forwardRef16(
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

// src/components/PageHeader/PageHeader.tsx
import { createElement, forwardRef as forwardRef17 } from "react";
import { semantic as t15 } from "../../core/dist/index.js";
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
var PageHeader = forwardRef17(
  function PageHeader2({
    title,
    subtitle,
    indicator,
    trailing,
    level = 2
  }, ref) {
    const heading = createElement(
      `h${level}`,
      {
        style: {
          margin: 0,
          fontFamily: t15.fontSans,
          fontWeight: t15.fontWeightBold,
          color: t15.colorText
        }
      },
      title
    );
    return /* @__PURE__ */ jsxs9(
      "div",
      {
        ref,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        children: [
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsxs9("div", { style: { display: "flex", alignItems: "center", gap: t15.spaceSm }, children: [
              heading,
              indicator
            ] }),
            subtitle && /* @__PURE__ */ jsx18(
              "span",
              {
                style: {
                  color: t15.colorTextMuted,
                  fontSize: t15.fontSizeSm
                },
                children: subtitle
              }
            )
          ] }),
          trailing && /* @__PURE__ */ jsx18("div", { children: trailing })
        ]
      }
    );
  }
);

// src/components/PageShell/PageShell.tsx
import { semantic as t16, useInjectStyles as useInjectStyles8 } from "../../core/dist/index.js";
import { jsx as jsx19 } from "react/jsx-runtime";
var SCROLLBAR_ID = "page-shell-scrollbar";
var SCROLLBAR_CSS = `
.page-shell::-webkit-scrollbar { display: none; }
.page-shell { scrollbar-width: none; }
`;
var gapMap2 = {
  sm: t16.spaceSm,
  md: t16.spaceMd,
  lg: t16.spaceLg
};
function PageShell({
  children,
  maxWidth = 1100,
  gap = "md",
  topPadding = true
}) {
  useInjectStyles8(SCROLLBAR_ID, SCROLLBAR_CSS);
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: "page-shell",
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth,
        alignSelf: "center",
        overflowY: "auto",
        padding: `${topPadding ? t16.spaceLg : "0"} ${t16.spaceLg}`,
        gap: gapMap2[gap]
      },
      children
    }
  );
}

// src/components/TagChip/TagChip.tsx
import { forwardRef as forwardRef18 } from "react";
import { semantic as t17 } from "../../core/dist/index.js";
import { jsx as jsx20, jsxs as jsxs10 } from "react/jsx-runtime";
var TagChip = forwardRef18(
  function TagChip2({
    name,
    prefix,
    onRemove
  }, ref) {
    return /* @__PURE__ */ jsxs10(
      "span",
      {
        ref,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: t17.spaceXs,
          fontSize: t17.fontSizeXs,
          color: t17.colorActionPrimary,
          background: t17.colorSurfaceRaised,
          borderRadius: t17.radiusFull,
          padding: `${t17.spaceXs} ${t17.spaceSm}`,
          fontFamily: t17.fontSans
        },
        children: [
          prefix && /* @__PURE__ */ jsxs10("span", { style: { color: t17.colorTextMuted }, children: [
            prefix,
            ":"
          ] }),
          name,
          onRemove && /* @__PURE__ */ jsx20("span", { style: { display: "inline-flex", width: 18, height: 18, color: t17.colorActionPrimary }, children: /* @__PURE__ */ jsx20(
            IconButton,
            {
              icon: "close",
              onClick: onRemove,
              "aria-label": `Remove ${name}`,
              size: "sm"
            }
          ) })
        ]
      }
    );
  }
);

// src/components/ExpandableCard/ExpandableCard.tsx
import { semantic as t18, useInjectStyles as useInjectStyles9 } from "../../core/dist/index.js";
import { forwardRef as forwardRef19, useState as useState3, useId as useId3 } from "react";
import { jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
var EXPANDABLE_STYLES_ID = "4lt7ab-expandable-card-choreo";
var EXPANDABLE_STYLES_CSS = `
@keyframes expandableCardChildIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
[data-expandable-body][data-open="true"] > div > div > * {
  animation: expandableCardChildIn 180ms ease-out both;
}
[data-expandable-body][data-open="true"] > div > div > *:nth-child(1) { animation-delay: 150ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(2) { animation-delay: 190ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(3) { animation-delay: 230ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(4) { animation-delay: 270ms; }
[data-expandable-body][data-open="true"] > div > div > *:nth-child(n+5) { animation-delay: 300ms; }
/* Closing \u2014 fade children out quickly without stagger. */
[data-expandable-body][data-open="false"] > div > div > * {
  opacity: 0;
  transition: opacity 120ms ease-in;
}
@media (prefers-reduced-motion: reduce) {
  [data-expandable-body][data-open="true"] > div > div > * {
    animation: none;
  }
  [data-expandable-body][data-open="false"] > div > div > * {
    transition: none;
  }
}
`;
var ExpandableCard = forwardRef19(
  function ExpandableCard2({
    title,
    children,
    defaultOpen = false,
    open: controlledOpen,
    onToggle,
    variant = "default",
    headerAction
  }, ref) {
    const [internalOpen, setInternalOpen] = useState3(defaultOpen);
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const panelId = useId3();
    useInjectStyles9(EXPANDABLE_STYLES_ID, EXPANDABLE_STYLES_CSS);
    const handleToggle = () => {
      const next = !isOpen;
      if (controlledOpen === void 0) {
        setInternalOpen(next);
      }
      onToggle?.(next);
    };
    return /* @__PURE__ */ jsxs11(Card, { ref, variant, padding: "xs", children: [
      /* @__PURE__ */ jsxs11("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxs11(
          "button",
          {
            type: "button",
            onClick: handleToggle,
            "aria-expanded": isOpen,
            "aria-controls": panelId,
            style: {
              display: "flex",
              alignItems: "center",
              gap: t18.spaceSm,
              padding: `${t18.spaceSm} ${t18.spaceMd}`,
              cursor: "pointer",
              borderRadius: t18.radiusMd,
              transition: `background ${t18.transitionBase}`,
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              flex: 1
            },
            children: [
              /* @__PURE__ */ jsx21(
                "span",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    lineHeight: 1,
                    color: "inherit",
                    /* Chevron leads on open (no delay), trails on close (150ms delay). */
                    transition: "transform 150ms ease-out",
                    transitionDelay: isOpen ? "0ms" : "150ms",
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"
                  },
                  children: /* @__PURE__ */ jsx21(IconChevronRight, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsx21(
                "span",
                {
                  style: {
                    fontWeight: t18.fontWeightSemibold,
                    fontFamily: t18.fontSans,
                    color: t18.colorText,
                    fontSize: t18.fontSizeSm
                  },
                  children: title
                }
              )
            ]
          }
        ),
        headerAction && /* @__PURE__ */ jsx21("div", { style: { padding: `0 ${t18.spaceMd}` }, children: headerAction })
      ] }),
      /* @__PURE__ */ jsx21(
        "div",
        {
          id: panelId,
          role: "region",
          "data-expandable-body": "",
          "data-open": isOpen ? "true" : "false",
          style: {
            display: "grid",
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            transition: "grid-template-rows 200ms ease-out",
            /* Height waits for chevron on open, lags behind children fade on close. */
            transitionDelay: isOpen ? "100ms" : "80ms"
          },
          children: /* @__PURE__ */ jsx21("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ jsx21("div", { style: { padding: `${t18.spaceSm} ${t18.spaceMd} ${t18.spaceMd}` }, children }) })
        }
      )
    ] });
  }
);

// src/components/ModalShell/ModalShell.tsx
import { forwardRef as forwardRef20, useEffect as useEffect5, useId as useId4, useRef as useRef4 } from "react";
import { createPortal } from "react-dom";
import { semantic as t19 } from "../../core/dist/index.js";
import { Fragment as Fragment2, jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: t19.fontWeightSemibold,
  fontFamily: t19.fontSans,
  color: t19.colorText,
  fontSize: t19.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: t19.spaceSm
});
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = forwardRef20(
  function ModalShell2({
    onClose,
    children,
    width = "md",
    zIndex = t19.zIndexModal,
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
      /* @__PURE__ */ jsxs12(Fragment2, { children: [
        /* @__PURE__ */ jsx22(Overlay, { onClick: onClose, zIndex }),
        /* @__PURE__ */ jsx22(
          "div",
          {
            style: {
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: t19.spaceMd,
              zIndex: typeof zIndex === "number" ? zIndex + 1 : `calc(${zIndex} + 1)`,
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ jsx22(
              "div",
              {
                ref: setRefs,
                role,
                "aria-modal": "true",
                "aria-labelledby": ariaLabel ? void 0 : resolvedLabelId,
                "aria-label": ariaLabel,
                tabIndex: -1,
                style: {
                  background: t19.colorSurface,
                  color: t19.colorText,
                  borderRadius: t19.radiusLg,
                  boxShadow: t19.shadowLg,
                  border: `${t19.borderWidthDefault} solid ${t19.colorBorder}`,
                  padding: t19.spaceXl,
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

// src/components/ConfirmDialog/ConfirmDialog.tsx
import { forwardRef as forwardRef21, useId as useId5, useState as useState4 } from "react";
import { semantic as t20 } from "../../core/dist/index.js";
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = forwardRef21(
  function ConfirmDialog2({
    title,
    message,
    confirmLabel = "Confirm",
    onConfirm,
    onCancel,
    children,
    variant = "destructive"
  }, ref) {
    const [loading, setLoading] = useState4(false);
    const titleId = useId5();
    const handleConfirm = async () => {
      setLoading(true);
      try {
        await onConfirm();
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ jsxs13(ModalShell, { ref, onClose: onCancel, role: "alertdialog", titleId, children: [
      /* @__PURE__ */ jsx23(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ jsx23(
        "p",
        {
          style: {
            margin: `${t20.spaceSm} 0 ${children ? "0" : t20.spaceLg}`,
            color: t20.colorTextMuted,
            fontSize: t20.fontSizeSm,
            fontFamily: t20.fontSans
          },
          children: message
        }
      ),
      children && /* @__PURE__ */ jsx23("div", { style: { margin: `${t20.spaceSm} 0 ${t20.spaceLg}` }, children }),
      /* @__PURE__ */ jsxs13("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ jsx23(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ jsx23(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/StatusDot/StatusDot.tsx
import { forwardRef as forwardRef22 } from "react";
import { semantic as t21, useInjectStyles as useInjectStyles10, useThemeRhythm as useThemeRhythm3 } from "../../core/dist/index.js";
import { jsx as jsx24 } from "react/jsx-runtime";
var variantColors = {
  default: t21.colorTextMuted,
  primary: t21.colorActionPrimary,
  success: t21.colorSuccess,
  warning: t21.colorWarning,
  error: t21.colorError,
  info: t21.colorInfo
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
var StatusDot = forwardRef22(
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
    useInjectStyles10(PULSE_STYLES_ID, PULSE_STYLES_CSS);
    return /* @__PURE__ */ jsx24(
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
          borderRadius: t21.radiusFull,
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
import { forwardRef as forwardRef23, Children, isValidElement as isValidElement2, cloneElement as cloneElement2 } from "react";
import { semantic as t22 } from "../../core/dist/index.js";
import { useInjectStyles as useInjectStyles11 } from "../../core/dist/index.js";
import { jsx as jsx25 } from "react/jsx-runtime";
var spaceMap = {
  xs: t22.spaceXs,
  sm: t22.spaceSm,
  md: t22.spaceMd,
  lg: t22.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${t22.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${t22.colorSurfaceRaised};
  border-bottom-color: ${t22.colorSurfaceRaised};
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
  background: ${t22.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${t22.borderWidthDefault} solid ${t22.colorBorder}`,
    borderRadius: t22.radiusLg,
    boxShadow: t22.shadowSm
  },
  flat: {}
};
var Table = forwardRef23(
  function Table2({
    variant = "default",
    density = "md",
    children
  }, ref) {
    useInjectStyles11(TABLE_STYLES_ID, TABLE_STYLES_CSS);
    return /* @__PURE__ */ jsx25(
      "div",
      {
        ref,
        style: {
          overflowX: "auto",
          ...wrapperVariants[variant]
        },
        children: /* @__PURE__ */ jsx25(
          "table",
          {
            "data-table-density": density,
            style: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: t22.fontSizeSm,
              fontFamily: t22.fontSans,
              color: t22.colorText
            },
            children
          }
        )
      }
    );
  }
);
var TableHeader = forwardRef23(
  function TableHeader2({ children }, ref) {
    return /* @__PURE__ */ jsx25("thead", { ref, children: /* @__PURE__ */ jsx25("tr", { children }) });
  }
);
var TableHeaderCell = forwardRef23(
  function TableHeaderCell2({
    align = "left",
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx25(
      "th",
      {
        ref,
        colSpan,
        style: {
          padding: `${t22.spaceSm} ${t22.spaceMd}`,
          textAlign: align,
          fontWeight: t22.fontWeightSemibold,
          fontSize: t22.fontSizeXs,
          color: t22.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: t22.letterSpacingWide,
          borderBottom: `${t22.borderWidthThick} solid ${t22.colorBorder}`,
          whiteSpace: "nowrap",
          width: width !== void 0 ? `${width}px` : void 0
        },
        children
      }
    );
  }
);
var TableBody = forwardRef23(
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
    return /* @__PURE__ */ jsx25("tbody", { ref, children: styledChildren });
  }
);
var TableRow = forwardRef23(
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
    return /* @__PURE__ */ jsx25(
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
var TableCell = forwardRef23(
  function TableCell2({
    align = "left",
    truncate = false,
    muted = false,
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx25(
      "td",
      {
        ref,
        colSpan,
        style: {
          padding: `${t22.spaceSm} ${t22.spaceMd}`,
          borderBottom: `${t22.borderWidthDefault} solid ${t22.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? t22.colorTextMuted : void 0,
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
var TableGroupHeader = forwardRef23(
  function TableGroupHeader2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx25("tr", { ref, style: { cursor: "default" }, children: /* @__PURE__ */ jsx25(
      "td",
      {
        colSpan,
        style: {
          padding: `${t22.spaceXs} ${t22.spaceMd}`,
          background: t22.colorSurfaceRaised,
          borderBottom: `${t22.borderWidthDefault} solid ${t22.colorBorder}`,
          fontSize: t22.fontSizeXs,
          fontWeight: t22.fontWeightBold,
          letterSpacing: t22.letterSpacingWide,
          textTransform: "uppercase",
          color: t22.colorTextMuted,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children
      }
    ) });
  }
);
var TableEmptyRow = forwardRef23(
  function TableEmptyRow2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx25("tr", { ref, children: /* @__PURE__ */ jsx25(
      "td",
      {
        colSpan,
        style: {
          padding: `${t22.spaceXl} ${t22.spaceMd}`,
          textAlign: "center",
          color: t22.colorTextMuted,
          fontSize: t22.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/DateRangePicker/DateRangePicker.tsx
import { forwardRef as forwardRef24, useState as useState5, useRef as useRef6, useCallback as useCallback4, useEffect as useEffect6 } from "react";
import { semantic as t26, useInjectStyles as useInjectStyles12 } from "../../core/dist/index.js";

// src/components/DateRangePicker/CalendarHeader.tsx
import { semantic as t23 } from "../../core/dist/index.js";

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
  const t44 = stripTime(to).getTime();
  return d >= f && d <= t44;
}
function isDateDisabled(date, minDate, maxDate, disabledDates) {
  const d = stripTime(date).getTime();
  if (minDate && d < stripTime(minDate).getTime()) return true;
  if (maxDate && d > stripTime(maxDate).getTime()) return true;
  if (disabledDates) {
    for (const dd of disabledDates) {
      if (isSameDay(date, dd)) return true;
    }
  }
  return false;
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

// src/components/DateRangePicker/CalendarHeader.tsx
import { jsx as jsx26, jsxs as jsxs14 } from "react/jsx-runtime";
var headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${t23.spaceXs} 0`
};
var titleStyle = {
  fontSize: t23.fontSizeSm,
  fontWeight: t23.fontWeightSemibold,
  fontFamily: t23.fontSans,
  color: t23.colorText,
  margin: 0,
  userSelect: "none"
};
function CalendarHeader({
  year,
  month,
  onPrev,
  onNext
}) {
  return /* @__PURE__ */ jsxs14("div", { style: headerStyle, children: [
    /* @__PURE__ */ jsx26(
      IconButton,
      {
        icon: "chevron-left",
        "aria-label": "Previous month",
        onClick: onPrev,
        size: "sm"
      }
    ),
    /* @__PURE__ */ jsxs14("span", { style: titleStyle, children: [
      MONTH_NAMES[month],
      " ",
      year
    ] }),
    /* @__PURE__ */ jsx26(
      IconButton,
      {
        icon: "chevron-right",
        "aria-label": "Next month",
        onClick: onNext,
        size: "sm"
      }
    )
  ] });
}

// src/components/DateRangePicker/CalendarGrid.tsx
import { useCallback as useCallback3, useRef as useRef5 } from "react";
import { semantic as t25 } from "../../core/dist/index.js";

// src/components/DateRangePicker/DayCell.tsx
import { semantic as t24 } from "../../core/dist/index.js";
import { jsx as jsx27 } from "react/jsx-runtime";
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: t24.spaceXl,
  height: t24.spaceXl,
  border: "none",
  borderRadius: t24.radiusSm,
  fontSize: t24.fontSizeSm,
  fontFamily: t24.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: t24.colorText,
  padding: 0,
  transition: "background 120ms ease, color 120ms ease",
  outline: "none",
  boxSizing: "border-box"
};
function DayCell({
  date,
  currentMonth,
  today,
  rangeStart,
  rangeEnd,
  isInRange: inRange,
  isDisabled,
  scopeClass,
  onSelect,
  onKeyDown,
  tabIndex
}) {
  const isOutsideMonth = date.getMonth() !== currentMonth;
  const isToday = isSameDay(date, today);
  const isStart = rangeStart !== null && isSameDay(date, rangeStart);
  const isEnd = rangeEnd !== null && isSameDay(date, rangeEnd);
  const isEndpoint = isStart || isEnd;
  const cellStyle = {
    ...baseCellStyle,
    ...isOutsideMonth ? { color: t24.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${t24.borderWidthDefault} solid ${t24.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? { background: `color-mix(in srgb, ${t24.colorActionPrimary} 15%, transparent)` } : {},
    ...isEndpoint ? { background: t24.colorActionPrimary, color: t24.colorTextInverse } : {},
    ...isDisabled ? {
      color: t24.colorTextDisabled,
      pointerEvents: "none",
      cursor: "default",
      opacity: 0.5
    } : {}
  };
  const classNames = [
    scopeClass + "-day",
    ...isDisabled ? [] : [scopeClass + "-day--enabled"]
  ].join(" ");
  return /* @__PURE__ */ jsx27("td", { role: "gridcell", style: { padding: 0 }, children: /* @__PURE__ */ jsx27(
    "button",
    {
      type: "button",
      className: classNames,
      style: cellStyle,
      tabIndex,
      "aria-selected": isEndpoint || inRange && !isDisabled || void 0,
      "aria-disabled": isDisabled || void 0,
      onClick: () => {
        if (!isDisabled) onSelect(date);
      },
      onKeyDown: (e) => onKeyDown(e, date),
      children: date.getDate()
    }
  ) });
}

// src/components/DateRangePicker/CalendarGrid.tsx
import { jsx as jsx28, jsxs as jsxs15 } from "react/jsx-runtime";
var tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed"
};
var weekdayHeaderStyle = {
  fontSize: t25.fontSizeXs,
  fontFamily: t25.fontSans,
  fontWeight: t25.fontWeightMedium,
  color: t25.colorTextMuted,
  textAlign: "center",
  padding: `${t25.spaceXs} 0`,
  userSelect: "none"
};
function CalendarGrid({
  year,
  month,
  rangeStart,
  rangeEnd,
  minDate,
  maxDate,
  disabledDates,
  scopeClass,
  focusedDate,
  onSelect,
  onFocusedDateChange
}) {
  const today = useRef5(/* @__PURE__ */ new Date()).current;
  const grid = buildCalendarGrid(year, month);
  const rows = [];
  for (let r = 0; r < 6; r++) {
    rows.push(grid.slice(r * 7, r * 7 + 7));
  }
  const handleKeyDown = useCallback3(
    (e, date) => {
      let next = null;
      switch (e.key) {
        case "ArrowLeft":
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
          break;
        case "ArrowRight":
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
          break;
        case "ArrowUp":
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
          break;
        case "ArrowDown":
          next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (!isDateDisabled(date, minDate, maxDate, disabledDates)) {
            onSelect(date);
          }
          return;
        default:
          return;
      }
      e.preventDefault();
      if (next) {
        onFocusedDateChange(next);
      }
    },
    [minDate, maxDate, disabledDates, onSelect, onFocusedDateChange]
  );
  const sortedStart = rangeStart && rangeEnd ? rangeStart.getTime() <= rangeEnd.getTime() ? rangeStart : rangeEnd : rangeStart;
  const sortedEnd = rangeStart && rangeEnd ? rangeStart.getTime() <= rangeEnd.getTime() ? rangeEnd : rangeStart : rangeEnd;
  return /* @__PURE__ */ jsxs15("table", { style: tableStyle, role: "grid", "aria-label": "Calendar", children: [
    /* @__PURE__ */ jsx28("thead", { children: /* @__PURE__ */ jsx28("tr", { children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ jsx28("th", { scope: "col", style: weekdayHeaderStyle, children: label }, label)) }) }),
    /* @__PURE__ */ jsx28("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ jsx28("tr", { children: row.map((date) => {
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);
      const inRange = sortedStart !== null && sortedEnd !== null && isInRange(date, sortedStart, sortedEnd);
      const isFocused = isSameDay(date, focusedDate);
      return /* @__PURE__ */ jsx28(
        DayCell,
        {
          date,
          currentMonth: month,
          today,
          rangeStart: sortedStart ?? null,
          rangeEnd: sortedEnd ?? null,
          isInRange: inRange,
          isDisabled: disabled,
          scopeClass,
          onSelect,
          onKeyDown: handleKeyDown,
          tabIndex: isFocused ? 0 : -1
        },
        key
      );
    }) }, ri)) })
  ] });
}

// src/components/DateRangePicker/DateRangePicker.tsx
import { jsx as jsx29, jsxs as jsxs16 } from "react/jsx-runtime";
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-day--enabled:hover {
    background: ${t26.colorSurfaceRaised} !important;
  }
  .${SCOPE}-day--enabled:focus-visible {
    outline: ${t26.focusRingWidth} solid ${t26.focusRingColor};
    outline-offset: ${t26.focusRingOffset};
  }
  .${SCOPE}-trigger:focus-visible {
    border-color: ${t26.colorBorderFocused};
    box-shadow: 0 0 0 ${t26.focusRingWidth} ${t26.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${t26.colorBorderFocused};
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
var triggerErrorStyle = {
  borderColor: t26.colorBorderError
};
var triggerDisabledStyle = {
  background: t26.colorSurfaceDisabled,
  color: t26.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle = {
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
var placeholderStyle2 = {
  color: t26.colorTextPlaceholder
};
var DateRangePicker = forwardRef24(
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
    useInjectStyles12(SCOPE, injectedCSS);
    const [open, setOpen] = useState5(false);
    const [selectionStart, setSelectionStart] = useState5(null);
    const containerRef = useRef6(null);
    const initialDate = value?.from ?? /* @__PURE__ */ new Date();
    const [viewYear, setViewYear] = useState5(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = useState5(initialDate.getMonth());
    const [focusedDate, setFocusedDate] = useState5(
      value?.from ?? /* @__PURE__ */ new Date()
    );
    const handleFocusedDateChange = useCallback4((date) => {
      setFocusedDate(date);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }, []);
    useEffect6(() => {
      if (!open) return;
      const container = containerRef.current;
      if (!container) return;
      const btn = container.querySelector(
        'button[tabindex="0"]'
      );
      btn?.focus();
    }, [focusedDate, open]);
    useEffect6(() => {
      if (!open) return;
      function handleMouseDown(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
          setSelectionStart(null);
        }
      }
      document.addEventListener("mousedown", handleMouseDown);
      return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [open]);
    useEffect6(() => {
      if (!open) return;
      function handleKey(e) {
        if (e.key === "Escape") {
          setOpen(false);
          setSelectionStart(null);
        }
      }
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }, [open]);
    const handleToggle = useCallback4(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) {
          const base = value?.from ?? /* @__PURE__ */ new Date();
          setViewYear(base.getFullYear());
          setViewMonth(base.getMonth());
          setFocusedDate(value?.from ?? /* @__PURE__ */ new Date());
          setSelectionStart(null);
        }
        return !prev;
      });
    }, [disabled, value]);
    const handlePrevMonth = useCallback4(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);
    const handleNextMonth = useCallback4(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);
    const handleDaySelect = useCallback4(
      (date) => {
        if (selectionStart === null) {
          setSelectionStart(date);
        } else {
          const from = selectionStart.getTime() <= date.getTime() ? selectionStart : date;
          const to = selectionStart.getTime() <= date.getTime() ? date : selectionStart;
          onChange({ from, to });
          setSelectionStart(null);
          setOpen(false);
        }
      },
      [selectionStart, onChange]
    );
    let displayText;
    if (value) {
      displayText = `${formatDate(value.from)} \u2013 ${formatDate(value.to)}`;
    } else {
      displayText = /* @__PURE__ */ jsx29("span", { style: placeholderStyle2, children: placeholder });
    }
    const calendarStart = selectionStart ?? value?.from ?? null;
    const calendarEnd = selectionStart ? null : value?.to ?? null;
    return /* @__PURE__ */ jsxs16(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle2,
        children: [
          /* @__PURE__ */ jsx29(
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
          open && /* @__PURE__ */ jsxs16("div", { style: popoverStyle, role: "dialog", "aria-label": "Date range picker", children: [
            /* @__PURE__ */ jsx29(
              CalendarHeader,
              {
                year: viewYear,
                month: viewMonth,
                onPrev: handlePrevMonth,
                onNext: handleNextMonth
              }
            ),
            /* @__PURE__ */ jsx29(
              CalendarGrid,
              {
                year: viewYear,
                month: viewMonth,
                rangeStart: calendarStart,
                rangeEnd: calendarEnd,
                minDate,
                maxDate,
                disabledDates,
                scopeClass: SCOPE,
                focusedDate,
                onSelect: handleDaySelect,
                onFocusedDateChange: handleFocusedDateChange
              }
            )
          ] })
        ]
      }
    );
  }
);

// src/components/DatePicker/DatePicker.tsx
import { forwardRef as forwardRef25, useState as useState6, useRef as useRef7, useCallback as useCallback5, useEffect as useEffect7 } from "react";
import { semantic as t27, useInjectStyles as useInjectStyles13 } from "../../core/dist/index.js";
import { jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-day--enabled:hover {
    background: ${t27.colorSurfaceRaised} !important;
  }
  .${SCOPE2}-day--enabled:focus-visible {
    outline: ${t27.focusRingWidth} solid ${t27.focusRingColor};
    outline-offset: ${t27.focusRingOffset};
  }
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${t27.colorBorderFocused};
    box-shadow: 0 0 0 ${t27.focusRingWidth} ${t27.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${t27.colorBorderFocused};
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
  padding: `${t27.spaceSm} ${t27.spaceMd}`,
  fontSize: t27.fontSizeSm,
  lineHeight: t27.lineHeightTight,
  fontFamily: t27.fontSans,
  color: t27.colorText,
  background: t27.colorSurfaceInput,
  border: `${t27.borderWidthDefault} solid ${t27.colorBorder}`,
  borderRadius: t27.radiusMd,
  outline: "none",
  transition: `border-color ${t27.transitionBase}, box-shadow ${t27.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle2 = {
  borderColor: t27.colorBorderError
};
var triggerDisabledStyle2 = {
  background: t27.colorSurfaceDisabled,
  color: t27.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: t27.zIndexDropdown,
  marginTop: t27.spaceXs,
  background: t27.colorSurfacePanel,
  border: `${t27.borderWidthDefault} solid ${t27.colorBorder}`,
  borderRadius: t27.radiusLg,
  boxShadow: t27.shadowMd,
  padding: t27.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle3 = {
  color: t27.colorTextPlaceholder
};
var DatePicker = forwardRef25(
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
    useInjectStyles13(SCOPE2, injectedCSS2);
    const [open, setOpen] = useState6(false);
    const containerRef = useRef7(null);
    const initialDate = value ?? /* @__PURE__ */ new Date();
    const [viewYear, setViewYear] = useState6(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = useState6(initialDate.getMonth());
    const [focusedDate, setFocusedDate] = useState6(value ?? /* @__PURE__ */ new Date());
    const handleFocusedDateChange = useCallback5((date) => {
      setFocusedDate(date);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }, []);
    useEffect7(() => {
      if (!open) return;
      const container = containerRef.current;
      if (!container) return;
      const btn = container.querySelector(
        'button[tabindex="0"]'
      );
      btn?.focus();
    }, [focusedDate, open]);
    useEffect7(() => {
      if (!open) return;
      function handleMouseDown(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleMouseDown);
      return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [open]);
    useEffect7(() => {
      if (!open) return;
      function handleKey(e) {
        if (e.key === "Escape") {
          setOpen(false);
        }
      }
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }, [open]);
    const handleToggle = useCallback5(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (!prev) {
          const base = value ?? /* @__PURE__ */ new Date();
          setViewYear(base.getFullYear());
          setViewMonth(base.getMonth());
          setFocusedDate(value ?? /* @__PURE__ */ new Date());
        }
        return !prev;
      });
    }, [disabled, value]);
    const handlePrevMonth = useCallback5(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);
    const handleNextMonth = useCallback5(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);
    const handleDaySelect = useCallback5(
      (date) => {
        onChange(date);
        setOpen(false);
      },
      [onChange]
    );
    let displayText;
    if (value) {
      displayText = formatDate(value);
    } else {
      displayText = /* @__PURE__ */ jsx30("span", { style: placeholderStyle3, children: placeholder });
    }
    return /* @__PURE__ */ jsxs17(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle3,
        children: [
          /* @__PURE__ */ jsx30(
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
          open && /* @__PURE__ */ jsxs17("div", { style: popoverStyle2, role: "dialog", "aria-label": "Date picker", children: [
            /* @__PURE__ */ jsx30(
              CalendarHeader,
              {
                year: viewYear,
                month: viewMonth,
                onPrev: handlePrevMonth,
                onNext: handleNextMonth
              }
            ),
            /* @__PURE__ */ jsx30(
              CalendarGrid,
              {
                year: viewYear,
                month: viewMonth,
                rangeStart: value ?? null,
                rangeEnd: null,
                minDate,
                maxDate,
                disabledDates,
                scopeClass: SCOPE2,
                focusedDate,
                onSelect: handleDaySelect,
                onFocusedDateChange: handleFocusedDateChange
              }
            )
          ] })
        ]
      }
    );
  }
);

// src/components/MetadataTable/MetadataTable.tsx
import { semantic as t28 } from "../../core/dist/index.js";
import { jsx as jsx31, jsxs as jsxs18 } from "react/jsx-runtime";
var titleStyles = {
  margin: 0,
  marginBottom: t28.spaceMd,
  fontSize: t28.fontSizeLg,
  fontWeight: t28.fontWeightSemibold,
  fontFamily: t28.fontSans,
  color: t28.colorText
};
var listStyles = {
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: t28.spaceSm
};
var rowStyles = {
  display: "flex",
  flexDirection: "column",
  gap: t28.spaceXs,
  padding: `${t28.spaceSm} 0`,
  borderBottom: `${t28.borderWidthDefault} solid ${t28.colorBorder}`
};
var labelStyles = {
  fontSize: t28.fontSizeXs,
  fontWeight: t28.fontWeightSemibold,
  fontFamily: t28.fontSans,
  color: t28.colorTextMuted,
  textTransform: "uppercase",
  letterSpacing: t28.letterSpacingWide
};
var valueStyles = {
  fontSize: t28.fontSizeSm,
  fontFamily: t28.fontSans,
  color: t28.colorText
};
function MetadataTable({ items, title }) {
  return /* @__PURE__ */ jsxs18("div", { children: [
    title && /* @__PURE__ */ jsx31("h3", { style: titleStyles, children: title }),
    /* @__PURE__ */ jsx31("dl", { style: listStyles, children: items.map((item, i) => /* @__PURE__ */ jsxs18("div", { style: i === items.length - 1 ? { ...rowStyles, borderBottom: "none" } : rowStyles, children: [
      /* @__PURE__ */ jsx31("dt", { style: labelStyles, children: item.label }),
      /* @__PURE__ */ jsx31("dd", { style: { ...valueStyles, margin: 0 }, children: item.value })
    ] }, i)) })
  ] });
}

// src/components/ErrorBoundary/ErrorBoundary.tsx
import React from "react";
import { semantic as t29 } from "../../core/dist/index.js";
import { jsx as jsx32, jsxs as jsxs19 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx32("div", { style: { borderColor: t29.colorError, borderWidth: "2px", borderStyle: "solid", borderRadius: t29.radiusLg }, children: /* @__PURE__ */ jsx32(
      Card,
      {
        variant: "flat",
        padding: "lg",
        children: /* @__PURE__ */ jsxs19("div", { style: { display: "flex", flexDirection: "column", gap: t29.spaceMd }, children: [
          /* @__PURE__ */ jsx32("div", { style: { display: "flex", alignItems: "center", gap: t29.spaceSm }, children: /* @__PURE__ */ jsx32(
            "span",
            {
              style: {
                fontSize: t29.fontSizeLg,
                color: t29.colorError,
                fontWeight: t29.fontWeightSemibold,
                fontFamily: t29.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ jsx32(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: t29.fontMono,
                fontSize: t29.fontSizeSm,
                lineHeight: t29.lineHeightBase,
                color: t29.colorText,
                background: t29.colorSurfaceRaised,
                padding: t29.spaceSm,
                borderRadius: t29.radiusMd,
                wordBreak: "break-word"
              },
              children: error.message
            }
          ),
          error.stack && /* @__PURE__ */ jsxs19("div", { children: [
            /* @__PURE__ */ jsx32(
              "button",
              {
                type: "button",
                onClick: () => this.setState({ showStack: !showStack }),
                style: {
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: t29.fontSans,
                  fontSize: t29.fontSizeSm,
                  color: t29.colorTextMuted,
                  cursor: "pointer",
                  textDecoration: "underline"
                },
                children: showStack ? "Hide stack trace" : "Show stack trace"
              }
            ),
            showStack && /* @__PURE__ */ jsx32(
              "pre",
              {
                style: {
                  marginTop: t29.spaceSm,
                  fontFamily: t29.fontMono,
                  fontSize: t29.fontSizeXs,
                  lineHeight: t29.lineHeightBase,
                  color: t29.colorTextSecondary,
                  background: t29.colorSurfaceRaised,
                  padding: t29.spaceSm,
                  borderRadius: t29.radiusMd,
                  overflow: "auto",
                  maxHeight: "200px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all"
                },
                children: error.stack
              }
            )
          ] }),
          /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32(Button, { variant: "secondary", size: "sm", onClick: this.resetErrorBoundary, children: "Try again" }) })
        ] })
      }
    ) });
  }
};

// src/components/SectionLabel/SectionLabel.tsx
import { semantic as t30 } from "../../core/dist/index.js";
import { jsx as jsx33 } from "react/jsx-runtime";
var baseStyles3 = {
  display: "block",
  fontSize: t30.fontSizeXs,
  fontWeight: t30.fontWeightSemibold,
  fontFamily: t30.fontSans,
  color: t30.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: t30.letterSpacingWide
};
function SectionLabel({
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx33(
    "div",
    {
      id: rest.id,
      "data-testid": rest["data-testid"],
      style: baseStyles3,
      children
    }
  );
}

// src/components/Toast/Toast.tsx
import {
  createContext as createContext2,
  useCallback as useCallback6,
  useContext as useContext2,
  useEffect as useEffect8,
  useRef as useRef8,
  useState as useState7
} from "react";
import { createPortal as createPortal2 } from "react-dom";
import { semantic as t31, useInjectStyles as useInjectStyles14 } from "../../core/dist/index.js";
import { jsx as jsx34, jsxs as jsxs20 } from "react/jsx-runtime";
var ToastContext = createContext2(null);
function useToast() {
  const ctx = useContext2(ToastContext);
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
  success: { bg: t31.colorSuccessBg, fg: t31.colorSuccess, border: t31.colorSuccess },
  error: { bg: t31.colorErrorBg, fg: t31.colorError, border: t31.colorError },
  info: { bg: t31.colorInfoBg, fg: t31.colorInfo, border: t31.colorInfo },
  warning: { bg: t31.colorWarningBg, fg: t31.colorWarning, border: t31.colorWarning }
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
  const clearTimer = useCallback6(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const startTimer = useCallback6(() => {
    if (!autoDismiss || remainingRef.current <= 0) return;
    clearTimer();
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, remainingRef.current);
    setPaused(false);
  }, [autoDismiss, clearTimer]);
  const pauseTimer = useCallback6(() => {
    if (!autoDismiss || !timerRef.current) return;
    const elapsed = Date.now() - startedAtRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    clearTimer();
    setPaused(true);
  }, [autoDismiss, clearTimer]);
  useEffect8(() => {
    startTimer();
    return clearTimer;
  }, []);
  const handleAnimationEnd = () => {
    if (exiting) {
      onDismiss(item.id);
    }
  };
  const colors = typeColors[item.type];
  return /* @__PURE__ */ jsxs20(
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
        gap: t31.spaceSm,
        padding: `${t31.spaceSm} ${t31.spaceMd}`,
        paddingBottom: autoDismiss ? `calc(${t31.spaceSm} + 2px)` : t31.spaceSm,
        backgroundColor: t31.colorSurfaceSolid,
        backgroundImage: `linear-gradient(${colors.bg}, ${colors.bg})`,
        color: colors.fg,
        borderRadius: t31.radiusMd,
        borderLeft: `${t31.borderWidthAccent} solid ${colors.border}`,
        boxShadow: t31.shadowMd,
        fontSize: t31.fontSizeSm,
        fontFamily: t31.fontSans,
        fontWeight: t31.fontWeightMedium,
        lineHeight: t31.lineHeightBase,
        pointerEvents: "auto",
        animation: exiting ? "toast-fade-out 200ms ease forwards" : "toast-slide-in 250ms ease",
        maxWidth: "24rem",
        wordBreak: "break-word",
        overflow: "hidden"
      },
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ jsx34("span", { style: { flex: 1 }, children: item.message }),
        /* @__PURE__ */ jsx34(
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
              borderRadius: t31.radiusSm,
              color: colors.fg,
              opacity: 0.7,
              fontSize: t31.fontSizeSm,
              lineHeight: 1
            },
            children: "\xD7"
          }
        ),
        autoDismiss && /* @__PURE__ */ jsx34(
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
  useInjectStyles14(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: t31.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: t31.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: t31.spaceLg } : { bottom: t31.spaceLg },
    ...position.endsWith("right") ? { right: t31.spaceLg } : { left: t31.spaceLg }
  };
  return createPortal2(
    /* @__PURE__ */ jsx34("div", { "aria-live": "polite", style: positionStyles, children: toasts.map((item) => /* @__PURE__ */ jsx34(ToastMessage, { item, onDismiss }, item.id)) }),
    document.body
  );
}
var toastCounter = 0;
function ToastProvider({
  children,
  position = "top-right"
}) {
  const [toasts, setToasts] = useState7([]);
  const dismiss = useCallback6((id) => {
    setToasts((prev) => prev.filter((t44) => t44.id !== id));
  }, []);
  const showToast = useCallback6(
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
  return /* @__PURE__ */ jsxs20(ToastContext.Provider, { value: { showToast }, children: [
    children,
    /* @__PURE__ */ jsx34(ToastContainer, { toasts, onDismiss: dismiss, position })
  ] });
}

// src/components/Combobox/Combobox.tsx
import { forwardRef as forwardRef26, useState as useState8, useEffect as useEffect9, useRef as useRef9, useCallback as useCallback7, useMemo } from "react";
import { semantic as t32, useInjectStyles as useInjectStyles15 } from "../../core/dist/index.js";
import { jsx as jsx35, jsxs as jsxs21 } from "react/jsx-runtime";
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
var Combobox = forwardRef26(function Combobox2({
  options,
  value,
  onChange,
  onSelect,
  placeholder,
  disabled,
  hasError,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  onKeyDown: onKeyDownProp,
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
  "aria-invalid": ariaInvalid,
  "data-testid": dataTestId
}, ref) {
  useInjectStyles15(COMBOBOX_STYLES_ID, comboboxCSS);
  const [open, setOpen] = useState8(false);
  const [focusedIndex, setFocusedIndex] = useState8(-1);
  const [dropDirection, setDropDirection] = useState8("down");
  const containerRef = useRef9(null);
  const inputRef = useRef9(null);
  const menuRef = useRef9(null);
  const suppressNextOpenRef = useRef9(false);
  useEffect9(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(inputRef.current);
    } else {
      ref.current = inputRef.current;
    }
  }, [ref]);
  const filtered = useMemo(() => {
    if (!value) return options;
    const lower = value.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(lower));
  }, [options, value]);
  const calculateDirection = useCallback7(() => {
    const input = inputRef.current;
    if (!input) return;
    const rect = input.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(filtered.length * 32 + 8, 256);
    setDropDirection(
      spaceBelow >= estimatedHeight ? "down" : spaceAbove > spaceBelow ? "up" : "down"
    );
  }, [filtered.length]);
  const openMenu = useCallback7(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    setFocusedIndex(-1);
  }, [disabled, calculateDirection]);
  const closeMenu = useCallback7(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);
  const selectOption = useCallback7(
    (opt) => {
      onChange(opt.value);
      onSelect?.(opt);
      closeMenu();
      if (inputRef.current && document.activeElement !== inputRef.current) {
        suppressNextOpenRef.current = true;
        inputRef.current.focus();
      }
    },
    [onChange, onSelect, closeMenu]
  );
  useEffect9(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  useEffect9(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  const handleKeyDown = useCallback7(
    (e) => {
      if (e.key === "Escape") {
        closeMenu();
        inputRef.current?.focus();
        return;
      }
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          openMenu();
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          setFocusedIndex(
            (prev) => prev < filtered.length - 1 ? prev + 1 : 0
          );
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          setFocusedIndex(
            (prev) => prev > 0 ? prev - 1 : filtered.length - 1
          );
          break;
        }
        case "Enter":
          if (focusedIndex >= 0 && focusedIndex < filtered.length) {
            e.preventDefault();
            selectOption(filtered[focusedIndex]);
          }
          break;
        case "Home":
          e.preventDefault();
          if (filtered.length > 0) setFocusedIndex(0);
          break;
        case "End":
          e.preventDefault();
          if (filtered.length > 0) setFocusedIndex(filtered.length - 1);
          break;
        case "Tab":
          closeMenu();
          break;
      }
    },
    [open, openMenu, closeMenu, focusedIndex, filtered, selectOption]
  );
  const handleInputChange = useCallback7(
    (e) => {
      onChange(e.target.value);
      if (!open) {
        openMenu();
      }
      setFocusedIndex(-1);
    },
    [onChange, open, openMenu]
  );
  const listboxId = id ? `${id}-listbox` : "alttab-combobox-listbox";
  const activedescendant = open && focusedIndex >= 0 ? `alttab-combobox-opt-${filtered[focusedIndex]?.value}` : void 0;
  const menuStyle = dropDirection === "down" ? {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: t32.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: t32.spaceXs
  };
  return /* @__PURE__ */ jsxs21(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle4,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx35(
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
            "aria-invalid": ariaInvalid ?? (hasError || void 0),
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
            onChange: handleInputChange,
            onBlur: onBlurProp,
            onFocus: (e) => {
              if (suppressNextOpenRef.current) {
                suppressNextOpenRef.current = false;
              } else if (!disabled && filtered.length > 0) {
                openMenu();
              }
              onFocusProp?.(e);
            },
            "data-testid": dataTestId,
            style: {
              ...inputBaseStyle,
              ...hasError ? errorBorderStyle4 : {},
              ...disabled ? disabledStyle4 : {}
            }
          }
        ),
        open && filtered.length > 0 && /* @__PURE__ */ jsx35(
          "div",
          {
            ref: menuRef,
            id: listboxId,
            role: "listbox",
            style: {
              ...menuStyle,
              background: t32.colorSurfacePanel,
              border: `${t32.borderWidthDefault} solid ${t32.colorBorder}`,
              borderRadius: t32.radiusMd,
              padding: t32.spaceXs,
              zIndex: t32.zIndexSticky,
              boxShadow: t32.shadowMd,
              maxHeight: "16rem",
              overflowY: "auto",
              boxSizing: "border-box"
            },
            children: filtered.map((opt, idx) => {
              const isFocused = focusedIndex === idx;
              const isMatch = opt.value === value;
              const classes = [
                "alttab-combobox-option",
                isFocused ? "alttab-combobox-option--focused" : ""
              ].filter(Boolean).join(" ");
              return /* @__PURE__ */ jsx35(
                "button",
                {
                  id: `alttab-combobox-opt-${opt.value}`,
                  type: "button",
                  role: "option",
                  "aria-selected": isMatch,
                  className: classes,
                  onClick: () => selectOption(opt),
                  onMouseEnter: () => setFocusedIndex(idx),
                  style: isMatch ? { fontWeight: t32.fontWeightSemibold } : void 0,
                  children: opt.label
                },
                opt.value
              );
            })
          }
        )
      ]
    }
  );
});
var wrapperStyle4 = {
  position: "relative",
  display: "block",
  width: "100%"
};
var inputBaseStyle = {
  display: "block",
  width: "100%",
  padding: `${t32.spaceSm} ${t32.spaceMd}`,
  fontSize: t32.fontSizeSm,
  lineHeight: t32.lineHeightTight,
  fontFamily: t32.fontSans,
  color: t32.colorText,
  background: t32.colorSurfaceInput,
  border: `${t32.borderWidthDefault} solid ${t32.colorBorder}`,
  borderRadius: t32.radiusMd,
  outline: "none",
  transition: `border-color ${t32.transitionBase}, box-shadow ${t32.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle4 = {
  borderColor: t32.colorBorderError
};
var disabledStyle4 = {
  background: t32.colorSurfaceDisabled,
  color: t32.colorTextDisabled,
  cursor: "not-allowed"
};

// src/components/TableFilters/TableFilters.tsx
import { useState as useState9, useEffect as useEffect10, useRef as useRef10, useCallback as useCallback8 } from "react";
import { semantic as t33 } from "../../core/dist/index.js";
import { jsx as jsx36 } from "react/jsx-runtime";
function DebouncedTextFilter({
  config,
  value,
  onCommit
}) {
  const delay = config.debounceMs ?? 300;
  const [local, setLocal] = useState9(value);
  const timerRef = useRef10(null);
  useEffect10(() => {
    setLocal(value);
  }, [value]);
  const handleChange = useCallback8(
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
  useEffect10(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx36("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ jsx36(
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
  const handleChange = useCallback8(
    (e) => {
      onCommit(config.key, e.target.value);
    },
    [config.key, onCommit]
  );
  return /* @__PURE__ */ jsx36("div", { style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ jsx36(
    Select,
    {
      value,
      onChange: handleChange,
      options: config.options,
      placeholder: config.placeholder
    }
  ) });
}
function TableFilters({
  filters,
  values,
  onChange,
  style,
  ...props
}) {
  const handleCommit = useCallback8(
    (key, value) => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange]
  );
  return /* @__PURE__ */ jsx36(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t33.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...props,
      children: filters.map((filter) => {
        const val = values[filter.key] ?? "";
        if (filter.type === "text") {
          return /* @__PURE__ */ jsx36(
            DebouncedTextFilter,
            {
              config: filter,
              value: val,
              onCommit: handleCommit
            },
            filter.key
          );
        }
        return /* @__PURE__ */ jsx36(
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
import { useId as useId7 } from "react";
import { semantic as t34, useInjectStyles as useInjectStyles16 } from "../../core/dist/index.js";
import { jsx as jsx37, jsxs as jsxs22 } from "react/jsx-runtime";
function ChipPicker({
  items,
  selected,
  onChange
}) {
  const uid = useId7();
  const styleId = `chip-picker-${uid.replace(/:/g, "")}`;
  useInjectStyles16(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${t34.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${t34.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${t34.focusRingWidth} solid ${t34.focusRingColor};
      outline-offset: ${t34.focusRingOffset};
    }`
  );
  const toggle = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
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
    padding: `${t34.spaceXs} ${t34.spaceSm}`,
    fontSize: t34.fontSizeSm,
    fontFamily: t34.fontSans,
    fontWeight: t34.fontWeightMedium,
    lineHeight: t34.lineHeightTight,
    color: isSelected ? t34.colorActionPrimary : t34.colorText,
    background: isSelected ? t34.colorActionSecondary : "transparent",
    border: `${t34.borderWidthDefault} solid ${isSelected ? t34.colorActionPrimary : t34.colorBorder}`,
    borderRadius: t34.radiusFull,
    cursor: "pointer",
    transition: `background ${t34.transitionFast}, border-color ${t34.transitionFast}, color ${t34.transitionFast}`,
    outline: "none"
  });
  const renderChips = (chips) => /* @__PURE__ */ jsx37(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t34.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ jsx37(
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
  return /* @__PURE__ */ jsx37(
    "div",
    {
      "data-chip-picker-id": styleId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t34.spaceMd
      },
      children: groups.map((group, i) => /* @__PURE__ */ jsxs22("div", { style: { display: "flex", flexDirection: "column", gap: t34.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ jsx37("div", { style: i > 0 ? { marginTop: t34.spaceXs } : void 0, children: /* @__PURE__ */ jsx37(SectionLabel, { children: group.label }) }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/SearchInput/SearchInput.tsx
import { forwardRef as forwardRef27, useState as useState10, useEffect as useEffect11, useRef as useRef11, useCallback as useCallback9 } from "react";
import { semantic as t35, useInjectStyles as useInjectStyles17 } from "../../core/dist/index.js";
import { jsx as jsx38, jsxs as jsxs23 } from "react/jsx-runtime";
var STYLE_ID2 = "4lt7ab-search-input";
var hoverFocusCSS = `
  .search-input-wrapper:focus-within {
    border-color: ${t35.colorBorderFocused};
    box-shadow: 0 0 0 ${t35.focusRingWidth} ${t35.focusRingColor};
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
  gap: t35.spaceXs,
  width: "100%",
  padding: `${t35.spaceSm} ${t35.spaceMd}`,
  fontSize: t35.fontSizeSm,
  lineHeight: t35.lineHeightTight,
  fontFamily: t35.fontSans,
  color: t35.colorText,
  background: t35.colorSurfaceInput,
  border: `${t35.borderWidthDefault} solid ${t35.colorBorder}`,
  borderRadius: t35.radiusMd,
  transition: `border-color ${t35.transitionBase}, box-shadow ${t35.transitionBase}`,
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
  background: t35.colorSurfaceDisabled,
  color: t35.colorTextDisabled,
  cursor: "not-allowed"
};
var SearchInput = forwardRef27(
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
    useInjectStyles17(STYLE_ID2, hoverFocusCSS);
    const [localValue, setLocalValue] = useState10(value);
    const timerRef = useRef11(null);
    const onSearchRef = useRef11(onSearch);
    onSearchRef.current = onSearch;
    useEffect11(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = useCallback9((e) => {
      const next = e.target.value;
      setLocalValue(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearchRef.current(next);
      }, debounceMs);
    }, [debounceMs]);
    useEffect11(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);
    return /* @__PURE__ */ jsxs23(
      "div",
      {
        className: "search-input-wrapper",
        "data-testid": dataTestId,
        style: {
          ...wrapperStyle5,
          ...disabled ? disabledWrapperStyle : {}
        },
        children: [
          /* @__PURE__ */ jsx38("span", { style: { color: t35.colorTextMuted, flexShrink: 0, display: "inline-flex" }, children: /* @__PURE__ */ jsx38(Icon, { name: "search", size: "sm" }) }),
          /* @__PURE__ */ jsx38(
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
          trailing && /* @__PURE__ */ jsx38("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/SegmentedControl/SegmentedControl.tsx
import { useRef as useRef12, useLayoutEffect, useState as useState11, useCallback as useCallback10 } from "react";
import { semantic as t36, useInjectStyles as useInjectStyles18 } from "../../core/dist/index.js";
import { jsx as jsx39, jsxs as jsxs24 } from "react/jsx-runtime";
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${t36.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${t36.focusRingWidth} solid ${t36.focusRingColor};
    outline-offset: ${t36.focusRingOffset};
    border-radius: ${t36.radiusFull};
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
  value,
  onChange,
  size = "md"
}) {
  useInjectStyles18(STYLE_ID3, hoverCSS);
  const containerRef = useRef12(null);
  const [indicator, setIndicator] = useState11(null);
  const s = sizes[size];
  const updateIndicator = useCallback10(() => {
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
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      ref: containerRef,
      role: "group",
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        height: s.height,
        background: t36.colorSurfaceInput,
        borderRadius: t36.radiusFull,
        border: `${t36.borderWidthDefault} solid ${t36.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ jsx39(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: t36.radiusFull,
              background: t36.colorActionPrimary,
              transition: `left ${t36.transitionSlow}, width ${t36.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ jsxs24(
            "button",
            {
              type: "button",
              className: "segmented-ctrl-btn",
              "aria-pressed": isActive,
              onClick: () => onChange(seg.value),
              style: {
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: t36.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: t36.radiusFull,
                background: "transparent",
                color: isActive ? t36.colorTextInverse : t36.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: t36.fontSans,
                fontWeight: isActive ? t36.fontWeightSemibold : t36.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${t36.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ jsx39(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ jsx39("span", { children: seg.label })
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
import { forwardRef as forwardRef28, useEffect as useEffect12, useRef as useRef13 } from "react";
import { semantic as t37, useInjectStyles as useInjectStyles19 } from "../../core/dist/index.js";
import { jsx as jsx40, jsxs as jsxs25 } from "react/jsx-runtime";
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
  info: { bg: t37.colorInfoBg, fg: t37.colorInfo, border: t37.colorInfo },
  warning: { bg: t37.colorWarningBg, fg: t37.colorWarning, border: t37.colorWarning },
  error: { bg: t37.colorErrorBg, fg: t37.colorError, border: t37.colorError },
  success: { bg: t37.colorSuccessBg, fg: t37.colorSuccess, border: t37.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ jsx40(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ jsx40(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ jsx40(IconError, { size: 20 }),
  success: /* @__PURE__ */ jsx40(IconCheckCircle, { size: 20 })
};
var AlertBanner = forwardRef28(
  function AlertBanner2({ variant, children, onDismiss, autoDismiss, icon }, ref) {
    useInjectStyles19(STYLE_ID4, alertBannerCSS);
    const timerRef = useRef13(null);
    useEffect12(() => {
      if (autoDismiss && onDismiss) {
        timerRef.current = setTimeout(onDismiss, autoDismiss);
        return () => {
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      }
    }, [autoDismiss, onDismiss]);
    const colors = variantColors2[variant];
    const resolvedIcon = icon !== void 0 ? icon : defaultIcons[variant];
    return /* @__PURE__ */ jsxs25(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t37.spaceSm,
          width: "100%",
          padding: `${t37.spaceSm} ${t37.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${t37.borderWidthThick} solid ${colors.border}`,
          fontFamily: t37.fontSans,
          fontSize: t37.fontSizeSm,
          fontWeight: t37.fontWeightMedium,
          lineHeight: t37.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease"
        },
        children: [
          resolvedIcon && /* @__PURE__ */ jsx40("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ jsx40("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ jsx40(
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
                borderRadius: t37.radiusSm,
                color: colors.fg,
                opacity: 0.7,
                fontSize: t37.fontSizeLg,
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
import { forwardRef as forwardRef29 } from "react";
import { semantic as t38, useInjectStyles as useInjectStyles20 } from "../../core/dist/index.js";
import { jsx as jsx41, jsxs as jsxs26 } from "react/jsx-runtime";
var TOPBAR_STYLES_ID = "4lt7ab-topbar";
var TOPBAR_CSS = `
  .topbar-nav-item {
    position: relative;
  }
  .topbar-nav-item::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: transparent;
    transition: background ${t38.transitionBase};
  }
  .topbar-nav-item:hover::after {
    background: ${t38.colorBorder};
  }
  .topbar-nav-item[data-active]::after {
    background: ${t38.colorActionPrimary};
  }
  .topbar-nav-item:hover {
    color: ${t38.colorText};
  }
`;
var TopBar = forwardRef29(
  function TopBar2({
    title,
    items = [],
    activePath,
    onNavigate,
    trailing,
    sticky = false,
    ...rest
  }, ref) {
    useInjectStyles20(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: t38.zIndexSticky } : {};
    return /* @__PURE__ */ jsxs26(
      "header",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-label": rest["aria-label"],
        style: {
          display: "flex",
          alignItems: "center",
          height: t38.space2xl,
          padding: `0 ${t38.spaceMd}`,
          background: t38.colorSurface,
          borderBottom: `${t38.borderWidthDefault} solid ${t38.colorBorder}`,
          fontFamily: t38.fontSans,
          ...stickyStyle
        },
        children: [
          /* @__PURE__ */ jsx41(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                fontWeight: t38.fontWeightBold,
                fontSize: t38.fontSizeSm,
                color: t38.colorText,
                marginRight: t38.spaceLg,
                whiteSpace: "nowrap",
                flexShrink: 0
              },
              children: title
            }
          ),
          items.length > 0 && /* @__PURE__ */ jsx41(
            "nav",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: t38.spaceXs,
                height: "100%",
                flex: 1,
                minWidth: 0
              },
              children: items.map((item) => {
                const isActive = activePath === item.path;
                return /* @__PURE__ */ jsxs26(
                  "button",
                  {
                    type: "button",
                    className: "topbar-nav-item",
                    onClick: () => onNavigate?.(item.path),
                    "aria-current": isActive ? "page" : void 0,
                    "data-active": isActive || void 0,
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: t38.spaceXs,
                      height: "100%",
                      padding: `0 ${t38.spaceSm}`,
                      border: "none",
                      background: "transparent",
                      color: isActive ? t38.colorActionPrimary : t38.colorTextMuted,
                      fontSize: t38.fontSizeSm,
                      fontFamily: t38.fontSans,
                      fontWeight: isActive ? t38.fontWeightSemibold : t38.fontWeightNormal,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: `color ${t38.transitionBase}`,
                      boxSizing: "border-box"
                    },
                    children: [
                      item.icon,
                      item.label
                    ]
                  },
                  item.path
                );
              })
            }
          ),
          trailing && /* @__PURE__ */ jsx41(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: t38.spaceSm,
                marginLeft: "auto",
                flexShrink: 0
              },
              children: trailing
            }
          )
        ]
      }
    );
  }
);

// src/components/PillSelect/PillSelect.tsx
import { useId as useId8 } from "react";
import { semantic as t39, useInjectStyles as useInjectStyles21 } from "../../core/dist/index.js";
import { jsx as jsx42, jsxs as jsxs27 } from "react/jsx-runtime";
function PillSelect({
  value,
  options,
  onChange,
  ariaLabel,
  active: activeProp
}) {
  const uid = useId8();
  const styleId = `pill-select-${uid.replace(/:/g, "")}`;
  const isActive = activeProp ?? !!value;
  useInjectStyles21(
    styleId,
    `[data-pill-select-id="${styleId}"] select:hover {
      border-color: ${t39.colorActionPrimary};
    }`
  );
  return /* @__PURE__ */ jsxs27(
    "div",
    {
      "data-pill-select-id": styleId,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx42(
          "select",
          {
            value,
            onChange: (e) => onChange(e.target.value),
            "aria-label": ariaLabel,
            style: {
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              padding: `2px ${t39.spaceXs}`,
              paddingRight: "1.5rem",
              fontSize: t39.fontSizeSm,
              fontFamily: t39.fontSans,
              fontWeight: t39.fontWeightMedium,
              lineHeight: t39.lineHeightTight,
              color: isActive ? t39.colorActionPrimary : t39.colorTextMuted,
              background: isActive ? `color-mix(in srgb, ${t39.colorActionPrimary} 10%, transparent)` : "transparent",
              border: `${t39.borderWidthDefault} solid ${isActive ? t39.colorActionPrimary : t39.colorBorder}`,
              borderRadius: t39.radiusFull,
              cursor: "pointer",
              outline: "none",
              transition: `background ${t39.transitionFast}, border-color ${t39.transitionFast}, color ${t39.transitionFast}`
            },
            children: options.map((opt) => /* @__PURE__ */ jsx42("option", { value: opt.value, children: opt.label }, opt.value))
          }
        ),
        /* @__PURE__ */ jsx42(
          "span",
          {
            style: {
              position: "absolute",
              right: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              color: isActive ? t39.colorActionPrimary : t39.colorTextMuted
            },
            children: /* @__PURE__ */ jsx42(Icon, { name: "chevron-down", size: "xs" })
          }
        )
      ]
    }
  );
}

// src/components/Surface/Surface.tsx
import { createElement as createElement2, forwardRef as forwardRef30 } from "react";
import { semantic as t40 } from "../../core/dist/index.js";
var levelMap = {
  page: t40.colorSurfacePage,
  default: t40.colorSurface,
  solid: t40.colorSurfaceSolid,
  raised: t40.colorSurfaceRaised,
  panel: t40.colorSurfacePanel,
  input: t40.colorSurfaceInput,
  overlay: t40.colorSurfaceOverlay
};
var Surface = forwardRef30(
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
    const borderValue = border === true ? `${t40.borderWidthDefault} solid ${t40.colorBorder}` : typeof border === "string" ? `${t40.borderWidthDefault} solid ${semanticColorMap[border]}` : void 0;
    const tintBg = tint ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)` : void 0;
    return createElement2(
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
          color: t40.colorText
        }
      },
      children
    );
  }
);

// src/components/Grid/Grid.tsx
import { forwardRef as forwardRef31 } from "react";
import { jsx as jsx43 } from "react/jsx-runtime";
var Grid = forwardRef31(
  function Grid2({
    minColumnWidth = 300,
    columns,
    gap = "md",
    children,
    ...rest
  }, ref) {
    const minWidth = `${minColumnWidth}px`;
    const gridTemplateColumns = columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    return /* @__PURE__ */ jsx43(
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
import { forwardRef as forwardRef32 } from "react";
import { semantic as t41 } from "../../core/dist/index.js";
import { jsx as jsx44 } from "react/jsx-runtime";
var Divider = forwardRef32(
  function Divider2({
    orientation = "horizontal",
    opacity = "default",
    spacing,
    ...rest
  }, ref) {
    const resolvedOpacity = dividerOpacityMap[opacity];
    const bg = `color-mix(in srgb, ${t41.colorBorder} ${resolvedOpacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : void 0;
    const isHorizontal = orientation === "horizontal";
    return /* @__PURE__ */ jsx44(
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
import { forwardRef as forwardRef33, useCallback as useCallback11, useRef as useRef14 } from "react";
import { semantic as t42, useInjectStyles as useInjectStyles22 } from "../../core/dist/index.js";
import { jsx as jsx45, jsxs as jsxs28 } from "react/jsx-runtime";
var STYLES_ID = "4lt7ab-tab-strip";
var STYLES_CSS = `
[data-tab-btn] {
  transition: color ${t42.transitionFast}, background ${t42.transitionFast}, border-color ${t42.transitionFast};
}
[data-tab-btn]:hover:not([aria-selected="true"]) {
  color: ${t42.colorTextSecondary};
  background: color-mix(in srgb, ${t42.colorBorder} 10%, transparent);
}
`;
var TabStrip = forwardRef33(
  function TabStrip2({
    tabs,
    activeKey,
    onChange,
    allowDeselect = false,
    size = "md",
    ...rest
  }, ref) {
    useInjectStyles22(STYLES_ID, STYLES_CSS);
    const tabRefs = useRef14([]);
    const handleClick = useCallback11(
      (key) => {
        if (key === activeKey && allowDeselect) {
          onChange(null);
        } else {
          onChange(key);
        }
      },
      [activeKey, allowDeselect, onChange]
    );
    const handleKeyDown = useCallback11(
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
    return /* @__PURE__ */ jsx45(
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
          return /* @__PURE__ */ jsxs28(
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
                gap: t42.spaceXs,
                padding: isSm ? `${t42.spaceXs} ${t42.spaceSm}` : `${t42.spaceSm} ${t42.spaceMd}`,
                border: "none",
                borderBottom: `2px solid ${isActive ? t42.colorActionPrimary : "transparent"}`,
                borderRadius: 0,
                background: isActive ? `color-mix(in srgb, ${t42.colorActionPrimary} 8%, transparent)` : "transparent",
                color: isActive ? t42.colorActionPrimary : t42.colorTextMuted,
                fontFamily: t42.fontSans,
                fontSize: isSm ? t42.fontSizeXs : t42.fontSizeSm,
                fontWeight: t42.fontWeightSemibold,
                lineHeight: t42.lineHeightTight,
                cursor: "pointer",
                whiteSpace: "nowrap"
              },
              children: [
                tab.icon && /* @__PURE__ */ jsx45(
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

// src/components/SectionHeader/SectionHeader.tsx
import { forwardRef as forwardRef34 } from "react";
import { semantic as t43 } from "../../core/dist/index.js";
import { jsx as jsx46, jsxs as jsxs29 } from "react/jsx-runtime";
var SectionHeader = forwardRef34(
  function SectionHeader2({
    title,
    icon,
    indicator,
    trailing,
    border = false,
    spacing,
    ...rest
  }, ref) {
    return /* @__PURE__ */ jsxs29(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: t43.spaceMd,
          borderBottom: border ? `${t43.borderWidthDefault} solid ${t43.colorBorder}` : void 0,
          paddingBottom: border ? t43.spaceMd : void 0,
          marginBottom: spacing ? spacingMap[spacing] : void 0
        },
        children: [
          /* @__PURE__ */ jsxs29(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: t43.spaceSm,
                minWidth: 0
              },
              children: [
                icon && /* @__PURE__ */ jsx46(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    style: {
                      fontSize: iconSizeMap.md,
                      color: t43.colorTextSecondary,
                      lineHeight: 1
                    },
                    "aria-hidden": "true",
                    children: icon
                  }
                ),
                /* @__PURE__ */ jsx46(
                  "span",
                  {
                    style: {
                      fontFamily: t43.fontSans,
                      fontWeight: t43.fontWeightSemibold,
                      fontSize: t43.fontSizeBase,
                      color: t43.colorText,
                      lineHeight: t43.lineHeightTight,
                      whiteSpace: "nowrap"
                    },
                    children: title
                  }
                ),
                indicator
              ]
            }
          ),
          trailing && /* @__PURE__ */ jsx46(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: t43.spaceSm,
                flexShrink: 0
              },
              children: trailing
            }
          )
        ]
      }
    );
  }
);
export {
  AlertBanner,
  Badge,
  Button,
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
  ExpandableCard,
  Field,
  Grid,
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
  MetadataTable,
  ModalShell,
  Overlay,
  PageHeader,
  PageShell,
  Pagination,
  PillSelect,
  ProgressBar,
  RowSkeleton,
  SearchInput,
  SectionHeader,
  SectionLabel,
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
  TagChip,
  Textarea,
  ThemePicker,
  ToastProvider,
  TopBar,
  alignMap,
  dividerOpacityMap,
  iconRegistry,
  iconSizeMap,
  justifyMap,
  modalFooterStyle,
  modalHeadingStyle,
  modalWidthMap,
  progressBarHeightMap,
  radiusMap,
  semanticColorMap,
  shadowMap,
  spacingMap,
  useFocusTrap,
  useToast
};
