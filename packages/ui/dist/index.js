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

// src/components/Icon/Icon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var IconFontContext = createContext(void 0);
function IconFontProvider({ fontClass, children }) {
  return /* @__PURE__ */ jsx2(IconFontContext.Provider, { value: fontClass, children });
}
var Icon = forwardRef(
  function Icon2({ name, size = 24, fontClass, style, "aria-label": ariaLabel, ...props }, ref) {
    const contextFontClass = useContext(IconFontContext);
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;
    const resolvedFontClass = fontClass ?? contextFontClass;
    if (!IconComponent && resolvedFontClass) {
      return /* @__PURE__ */ jsx2(
        "span",
        {
          ref,
          role: isDecorative ? void 0 : "img",
          "aria-hidden": isDecorative || void 0,
          "aria-label": ariaLabel,
          className: resolvedFontClass,
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: size,
            minHeight: size,
            fontSize: size,
            lineHeight: 1,
            color: "inherit",
            fontStyle: "normal",
            ...style
          },
          ...props,
          children: name
        }
      );
    }
    return /* @__PURE__ */ jsx2(
      "span",
      {
        ref,
        role: isDecorative ? void 0 : "img",
        "aria-hidden": isDecorative || void 0,
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
        children: IconComponent ? /* @__PURE__ */ jsx2(IconComponent, { size }) : null
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
      const activeIdx = themeList.findIndex((t41) => t41.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]);
  const currentTheme = themeList.find((t41) => t41.name === resolved);
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
          /* @__PURE__ */ jsx3(Icon, { name: open ? "chevron-up" : "chevron-down", size: 12 })
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
        children: themeList.map((t41, idx) => {
          const isActive = resolved === t41.name;
          const isFocused = focusedIndex === idx;
          const classes = [
            "alttab-tp-menu-item",
            isActive ? "alttab-tp-menu-item--active" : "",
            isFocused && !isActive ? "alttab-tp-menu-item--focused" : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ jsxs2(
            "button",
            {
              id: `alttab-tp-item-${t41.name}`,
              role: "option",
              "aria-selected": isActive,
              className: classes,
              onClick: () => {
                setTheme(t41.name);
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
                t41.label
              ]
            },
            t41.name
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
import { semantic as t, useInjectStyles as useInjectStyles2 } from "../../core/dist/index.js";
import { jsx as jsx4 } from "react/jsx-runtime";
var variantStyles = {
  primary: {
    background: t.colorActionPrimary,
    color: t.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: t.colorActionSecondary,
    color: t.colorText,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`
  },
  destructive: {
    background: t.colorActionDestructive,
    color: t.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: t.colorText,
    border: `${t.borderWidthDefault} solid transparent`
  }
};
var sizeStyles = {
  sm: {
    padding: `${t.spaceXs} ${t.spaceSm}`,
    fontSize: t.fontSizeSm,
    lineHeight: t.lineHeightTight
  },
  md: {
    padding: `${t.spaceSm} ${t.spaceMd}`,
    fontSize: t.fontSizeSm,
    lineHeight: t.lineHeightTight
  },
  lg: {
    padding: `${t.spaceSm} ${t.spaceLg}`,
    fontSize: t.fontSizeBase,
    lineHeight: t.lineHeightBase
  }
};
var baseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: t.spaceSm,
  borderRadius: t.radiusMd,
  fontFamily: t.fontSans,
  fontWeight: t.fontWeightMedium,
  cursor: "pointer",
  transition: `background ${t.transitionBase}, border-color ${t.transitionBase}, opacity ${t.transitionBase}`
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
    border: ${t.borderWidthThick} solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: alttab-btn-spin 600ms linear infinite;
  }
`
);
var iconOnlyPadding = {
  sm: t.spaceXs,
  md: t.spaceSm,
  lg: t.spaceSm
};
var Button = forwardRef3(
  function Button2({
    variant = "primary",
    size = "md",
    loading = false,
    iconOnly = false,
    children,
    style,
    disabled,
    ...props
  }, ref) {
    useInjectStyles2(SPINNER_STYLES_ID, spinnerCSS);
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsx4(
      "button",
      {
        ref,
        "aria-busy": loading || void 0,
        style: {
          ...baseStyles,
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...iconOnly ? { padding: iconOnlyPadding[size], aspectRatio: "1", minWidth: 0 } : {},
          ...isDisabled ? { opacity: 0.5, cursor: "not-allowed" } : {},
          ...style
        },
        disabled: isDisabled,
        ...props,
        children: loading ? /* @__PURE__ */ jsx4("span", { className: "alttab-btn-spinner" }) : children
      }
    );
  }
);

// src/components/Stack/Stack.tsx
import { forwardRef as forwardRef4 } from "react";
import { semantic as t2 } from "../../core/dist/index.js";
import { jsx as jsx5 } from "react/jsx-runtime";
var gapMap = {
  xs: t2.spaceXs,
  sm: t2.spaceSm,
  md: t2.spaceMd,
  lg: t2.spaceLg,
  xl: t2.spaceXl,
  "2xl": t2.space2xl
};
var Stack = forwardRef4(
  function Stack2({
    direction = "vertical",
    gap = "md",
    align,
    justify,
    wrap,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx5(
      "div",
      {
        ref,
        style: {
          display: "flex",
          flexDirection: direction === "vertical" ? "column" : "row",
          gap: gapMap[gap],
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? "wrap" : void 0,
          ...style
        },
        ...props,
        children
      }
    );
  }
);

// src/components/Card/Card.tsx
import { forwardRef as forwardRef5 } from "react";
import { semantic as t3, useInjectStyles as useInjectStyles3 } from "../../core/dist/index.js";
import { jsx as jsx6 } from "react/jsx-runtime";
var paddingMap = {
  xs: t3.spaceXs,
  sm: t3.spaceSm,
  md: t3.spaceMd,
  lg: t3.spaceLg,
  xl: t3.spaceXl,
  "2xl": t3.space2xl
};
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
  },
  live: {
    background: t3.colorSurfaceSolid,
    border: `${t3.borderWidthDefault} solid ${t3.colorBorderFocused}`,
    boxShadow: t3.shadowSm
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
var LIVE_STYLES_ID = "4lt7ab-card-live";
var LIVE_STYLES_CSS = `
@keyframes card-live-pulse {
  0%, 100% { border-color: ${t3.colorBorderFocused}; box-shadow: ${t3.shadowSm}; }
  50% { border-color: ${t3.colorActionPrimary}; box-shadow: 0 0 8px ${t3.colorActionPrimary}; }
}
[data-card-live] {
  animation: card-live-pulse 2.5s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-card-live] {
    animation: none;
  }
}
`;
var Card = forwardRef5(
  function Card2({
    variant = "default",
    padding = "lg",
    hover = false,
    children,
    style,
    ...props
  }, ref) {
    useInjectStyles3(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    useInjectStyles3(LIVE_STYLES_ID, LIVE_STYLES_CSS);
    return /* @__PURE__ */ jsx6(
      "div",
      {
        ref,
        "data-card-hover": hover || void 0,
        "data-card-live": variant === "live" || void 0,
        style: {
          borderRadius: t3.radiusLg,
          padding: paddingMap[padding],
          color: t3.colorText,
          ...variantStyles2[variant],
          ...style
        },
        ...props,
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
    style,
    ...props
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
        style: {
          display: "flex",
          flexDirection: "column",
          gap: t4.spaceXs,
          opacity: disabled ? 0.6 : void 0,
          ...style
        },
        ...props,
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
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx8(
      "input",
      {
        ref,
        "aria-invalid": hasError || void 0,
        style: {
          ...baseStyle,
          ...hasError ? errorBorderStyle : {},
          ...disabled ? disabledStyle : {},
          ...style
        },
        disabled,
        ...props
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
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx9(
      "textarea",
      {
        ref,
        "aria-invalid": hasError || void 0,
        style: {
          ...baseStyle2,
          ...hasError ? errorBorderStyle2 : {},
          ...disabled ? disabledStyle2 : {},
          ...style
        },
        disabled,
        ...props
      }
    );
  }
);

// src/components/Select/Select.tsx
import { forwardRef as forwardRef9, useState as useState2, useEffect as useEffect3, useRef as useRef2, useCallback as useCallback2 } from "react";
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
  style,
  value: controlledValue,
  defaultValue,
  onChange,
  name,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
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
  const containerRef = useRef2(null);
  const triggerRef = useRef2(null);
  const menuRef = useRef2(null);
  const hiddenSelectRef = useRef2(null);
  const [dropDirection, setDropDirection] = useState2("down");
  useEffect3(() => {
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
          "aria-invalid": hasError || void 0,
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          name,
          id,
          value: controlledValue,
          defaultValue,
          onChange,
          disabled,
          style: {
            ...triggerBaseStyle,
            ...hasError ? errorBorderStyle3 : {},
            ...disabled ? disabledStyle3 : {},
            ...style
          },
          ...props,
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
        const event = new Event("change", { bubbles: true });
        nativeSelect.dispatchEvent(event);
      }
      closeMenu();
      triggerRef.current?.focus();
    },
    [isControlled, onChange, closeMenu]
  );
  useEffect3(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  useEffect3(() => {
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
        ...props,
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
        style: {
          ...triggerBaseStyle,
          ...hasError ? errorBorderStyle3 : {},
          ...disabled ? disabledStyle3 : {},
          ...showPlaceholder ? placeholderStyle : {},
          ...style
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
var Badge = forwardRef10(
  function Badge2({
    children,
    variant = "default",
    color,
    style,
    ...rest
  }, ref) {
    const colorStyles = color ? { background: `color-mix(in srgb, ${color} 14%, transparent)`, color } : void 0;
    return /* @__PURE__ */ jsx11(
      "span",
      {
        ref,
        ...rest,
        style: {
          ...baseStyles2,
          ...colorStyles ?? variantStyles3[variant],
          ...style
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
var IconButton = forwardRef11(
  function IconButton2({
    icon,
    size = 24,
    buttonSize = "md",
    badge,
    fontClass,
    style,
    className,
    ...props
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
    const dim = buttonSizeMap[buttonSize];
    return /* @__PURE__ */ jsxs5(
      "button",
      {
        ref,
        "data-icon-btn-id": styleId,
        className,
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
          padding: 0,
          ...style
        },
        ...props,
        children: [
          /* @__PURE__ */ jsx12(Icon, { name: icon, size, fontClass }),
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
    zIndex = t10.zIndexSticky,
    style
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
          zIndex,
          ...style
        }
      }
    );
  }
);

// src/components/Skeleton/Skeleton.tsx
import { forwardRef as forwardRef13 } from "react";
import { semantic as t11 } from "../../core/dist/index.js";
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var Skeleton = forwardRef13(
  function Skeleton2({
    width = "100%",
    height = 16,
    borderRadius = t11.radiusMd,
    style
  }, ref) {
    return /* @__PURE__ */ jsx14(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          width,
          height,
          borderRadius,
          background: t11.colorSurfaceRaised,
          ...style
        }
      }
    );
  }
);
var CardSkeleton = forwardRef13(
  function CardSkeleton2({ style }, ref) {
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
          gap: t11.spaceSm,
          ...style
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
  function RowSkeleton2({ style }, ref) {
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t11.spaceSm,
          padding: `${t11.spaceSm} 0`,
          ...style
        },
        children: [
          /* @__PURE__ */ jsx14(Skeleton, { width: 32, height: 32, borderRadius: t11.radiusFull }),
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
    height = 6,
    "aria-label": ariaLabel,
    style
  }, ref) {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
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
          height,
          borderRadius: height / 2,
          overflow: "hidden",
          display: "flex",
          background: t12.colorSurfaceRaised,
          ...style
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
                background: segment.color
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
import { semantic as t13 } from "../../core/dist/index.js";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var EmptyState = forwardRef15(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    style,
    children,
    action
  }, ref) {
    const content = /* @__PURE__ */ jsxs7(Stack, { align: "center", gap: "sm", style: { padding: t13.spaceXl, ...style }, children: [
      /* @__PURE__ */ jsx16(Icon, { name: icon, size: 32, style: { color: t13.colorTextMuted } }),
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
    ] });
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
    labels,
    className,
    style
  }, ref) {
    const resolvedLabels = { ...defaultLabels, ...labels };
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        className,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: t14.spaceSm,
          ...style
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
    style,
    className,
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
        className,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          ...style
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

// src/components/TagChip/TagChip.tsx
import { forwardRef as forwardRef18 } from "react";
import { semantic as t16 } from "../../core/dist/index.js";
import { jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
var TagChip = forwardRef18(
  function TagChip2({
    name,
    prefix,
    onRemove,
    style
  }, ref) {
    return /* @__PURE__ */ jsxs10(
      "span",
      {
        ref,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: t16.spaceXs,
          fontSize: t16.fontSizeXs,
          color: t16.colorActionPrimary,
          background: t16.colorSurfaceRaised,
          borderRadius: t16.radiusFull,
          padding: "2px 8px",
          fontFamily: t16.fontSans,
          ...style
        },
        children: [
          prefix && /* @__PURE__ */ jsxs10("span", { style: { color: t16.colorTextMuted }, children: [
            prefix,
            ":"
          ] }),
          name,
          onRemove && /* @__PURE__ */ jsx19(
            IconButton,
            {
              icon: "close",
              size: 12,
              onClick: onRemove,
              "aria-label": `Remove ${name}`,
              style: { width: 18, height: 18, color: t16.colorActionPrimary }
            }
          )
        ]
      }
    );
  }
);

// src/components/ExpandableCard/ExpandableCard.tsx
import { semantic as t17 } from "../../core/dist/index.js";
import { forwardRef as forwardRef19, useState as useState3, useId as useId3 } from "react";
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
var ExpandableCard = forwardRef19(
  function ExpandableCard2({
    title,
    children,
    defaultOpen = false,
    open: controlledOpen,
    onToggle,
    variant = "default",
    style,
    headerAction
  }, ref) {
    const [internalOpen, setInternalOpen] = useState3(defaultOpen);
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const panelId = useId3();
    const handleToggle = () => {
      const next = !isOpen;
      if (controlledOpen === void 0) {
        setInternalOpen(next);
      }
      onToggle?.(next);
    };
    return /* @__PURE__ */ jsxs11(Card, { ref, variant, padding: "xs", style, children: [
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
              gap: t17.spaceSm,
              padding: `${t17.spaceSm} ${t17.spaceMd}`,
              cursor: "pointer",
              borderRadius: t17.radiusMd,
              transition: `background ${t17.transitionBase}`,
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              flex: 1
            },
            children: [
              /* @__PURE__ */ jsx20(
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
                    transition: `transform ${t17.transitionSlow}`,
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"
                  },
                  children: /* @__PURE__ */ jsx20(IconChevronRight, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsx20(
                "span",
                {
                  style: {
                    fontWeight: t17.fontWeightSemibold,
                    fontFamily: t17.fontSans,
                    color: t17.colorText,
                    fontSize: t17.fontSizeSm
                  },
                  children: title
                }
              )
            ]
          }
        ),
        headerAction && /* @__PURE__ */ jsx20("div", { style: { padding: `0 ${t17.spaceMd}` }, children: headerAction })
      ] }),
      /* @__PURE__ */ jsx20(
        "div",
        {
          id: panelId,
          role: "region",
          style: {
            display: "grid",
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            transition: `grid-template-rows ${t17.transitionSlow}`
          },
          children: /* @__PURE__ */ jsx20("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ jsx20("div", { style: { padding: `${t17.spaceSm} ${t17.spaceMd} ${t17.spaceMd}` }, children }) })
        }
      )
    ] });
  }
);

// src/components/ModalShell/ModalShell.tsx
import { forwardRef as forwardRef20, useEffect as useEffect4, useId as useId4, useRef as useRef3 } from "react";
import { createPortal } from "react-dom";
import { semantic as t18 } from "../../core/dist/index.js";
import { Fragment, jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: t18.fontWeightSemibold,
  fontFamily: t18.fontSans,
  color: t18.colorText,
  fontSize: t18.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: t18.spaceSm
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
    maxWidth = 480,
    zIndex = t18.zIndexModal,
    style,
    titleId,
    "aria-label": ariaLabel,
    role = "dialog"
  }, ref) {
    const generatedId = useId4();
    const resolvedLabelId = titleId ?? generatedId;
    const internalRef = useRef3(null);
    const setRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    useFocusTrap(internalRef);
    useEffect4(() => {
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
    useEffect4(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    return createPortal(
      /* @__PURE__ */ jsxs12(Fragment, { children: [
        /* @__PURE__ */ jsx21(Overlay, { onClick: onClose, zIndex }),
        /* @__PURE__ */ jsx21(
          "div",
          {
            style: {
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: typeof zIndex === "number" ? zIndex + 1 : `calc(${zIndex} + 1)`,
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ jsx21(
              "div",
              {
                ref: setRefs,
                role,
                "aria-modal": "true",
                "aria-labelledby": ariaLabel ? void 0 : resolvedLabelId,
                "aria-label": ariaLabel,
                tabIndex: -1,
                style: {
                  background: t18.colorSurface,
                  color: t18.colorText,
                  borderRadius: t18.radiusLg,
                  boxShadow: t18.shadowLg,
                  border: `${t18.borderWidthDefault} solid ${t18.colorBorder}`,
                  padding: t18.spaceXl,
                  maxWidth,
                  width: "100%",
                  pointerEvents: "auto",
                  outline: "none",
                  ...style
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
import { semantic as t19 } from "../../core/dist/index.js";
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx22(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ jsx22(
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
      children && /* @__PURE__ */ jsx22("div", { style: { margin: `${t19.spaceSm} 0 ${t19.spaceLg}` }, children }),
      /* @__PURE__ */ jsxs13("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ jsx22(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ jsx22(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/FormModal/FormModal.tsx
import { forwardRef as forwardRef22, useId as useId6, useState as useState5 } from "react";
import { semantic as t20 } from "../../core/dist/index.js";
import { jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";
var FormModal = forwardRef22(
  function FormModal2({
    title,
    children,
    onSubmit,
    onCancel,
    submitLabel = "Submit",
    cancelLabel = "Cancel",
    loading: externalLoading,
    maxWidth
  }, ref) {
    const [internalLoading, setInternalLoading] = useState5(false);
    const titleId = useId6();
    const isLoading = externalLoading || internalLoading;
    const handleSubmit = async () => {
      setInternalLoading(true);
      try {
        await onSubmit();
      } finally {
        setInternalLoading(false);
      }
    };
    return /* @__PURE__ */ jsxs14(ModalShell, { ref, onClose: onCancel, titleId, maxWidth, children: [
      /* @__PURE__ */ jsx23(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ jsx23(
        "div",
        {
          style: {
            margin: `${t20.spaceMd} 0 ${t20.spaceLg}`,
            overflowY: "auto"
          },
          children
        }
      ),
      /* @__PURE__ */ jsxs14("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ jsx23(Button, { variant: "ghost", onClick: onCancel, children: cancelLabel }),
        /* @__PURE__ */ jsx23(Button, { variant: "primary", onClick: handleSubmit, loading: isLoading, children: submitLabel })
      ] })
    ] });
  }
);

// src/components/StatusDot/StatusDot.tsx
import { forwardRef as forwardRef23 } from "react";
import { semantic as t21, useInjectStyles as useInjectStyles6 } from "../../core/dist/index.js";
import { jsx as jsx24 } from "react/jsx-runtime";
var variantColors = {
  default: t21.colorTextMuted,
  success: t21.colorSuccess,
  warning: t21.colorWarning,
  error: t21.colorError,
  info: t21.colorInfo
};
var PULSE_STYLES_ID = "4lt7ab-status-dot-pulse";
var PULSE_STYLES_CSS = `
@keyframes statusDotPulse {
  0% { box-shadow: 0 0 0 0 var(--status-dot-color); opacity: 1; }
  70% { box-shadow: 0 0 0 6px var(--status-dot-color); opacity: 0; }
  100% { box-shadow: 0 0 0 0 var(--status-dot-color); opacity: 0; }
}
[data-status-dot-pulse] {
  animation: statusDotPulse 1.5s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-status-dot-pulse] {
    animation: none;
  }
}
`;
var StatusDot = forwardRef23(
  function StatusDot2({
    variant = "default",
    color,
    size = 8,
    animate = "none",
    "aria-label": ariaLabel,
    style
  }, ref) {
    const resolvedColor = color ?? variantColors[variant];
    const isPulsing = animate === "pulse";
    useInjectStyles6(PULSE_STYLES_ID, PULSE_STYLES_CSS);
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
          width: size,
          height: size,
          borderRadius: t21.radiusFull,
          background: resolvedColor,
          flexShrink: 0,
          ...isPulsing ? { "--status-dot-color": resolvedColor } : void 0,
          ...style
        }
      }
    );
  }
);

// src/components/ThemeSurface/ThemeSurface.tsx
import { forwardRef as forwardRef24, useEffect as useEffect5, useRef as useRef4 } from "react";
import { semantic as t22 } from "../../core/dist/index.js";
import { useTheme as useTheme2 } from "../../core/dist/index.js";
import { Fragment as Fragment2, jsx as jsx25 } from "react/jsx-runtime";
var ThemeSurface = forwardRef24(
  function ThemeSurface2({
    children,
    global = false,
    style
  }, ref) {
    const { resolved } = useTheme2();
    const prevBodyBgRef = useRef4("");
    const prevBodyColorRef = useRef4("");
    useEffect5(() => {
      if (!global) return;
      prevBodyBgRef.current = document.body.style.backgroundColor;
      prevBodyColorRef.current = document.body.style.color;
      document.body.style.backgroundColor = "var(--color-surface-page)";
      document.body.style.color = "var(--color-text)";
      return () => {
        document.body.style.backgroundColor = prevBodyBgRef.current;
        document.body.style.color = prevBodyColorRef.current;
      };
    }, [global, resolved]);
    if (global) {
      return /* @__PURE__ */ jsx25(Fragment2, { children });
    }
    return /* @__PURE__ */ jsx25(
      "div",
      {
        ref,
        style: {
          background: t22.colorSurfacePage,
          ...style
        },
        children
      }
    );
  }
);

// src/components/Table/Table.tsx
import { forwardRef as forwardRef25, Children, isValidElement as isValidElement2, cloneElement as cloneElement2 } from "react";
import { semantic as t23 } from "../../core/dist/index.js";
import { useInjectStyles as useInjectStyles7 } from "../../core/dist/index.js";
import { jsx as jsx26 } from "react/jsx-runtime";
var spaceMap = {
  xs: t23.spaceXs,
  sm: t23.spaceSm,
  md: t23.spaceMd,
  lg: t23.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${t23.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${t23.colorSurfaceRaised};
  border-bottom-color: ${t23.colorSurfaceRaised};
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
  background: ${t23.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${t23.borderWidthDefault} solid ${t23.colorBorder}`,
    borderRadius: t23.radiusLg,
    boxShadow: t23.shadowSm
  },
  flat: {}
};
var Table = forwardRef25(
  function Table2({
    variant = "default",
    density = "md",
    children,
    style,
    ...props
  }, ref) {
    useInjectStyles7(TABLE_STYLES_ID, TABLE_STYLES_CSS);
    return /* @__PURE__ */ jsx26(
      "div",
      {
        ref,
        style: {
          overflowX: "auto",
          ...wrapperVariants[variant],
          ...style
        },
        ...props,
        children: /* @__PURE__ */ jsx26(
          "table",
          {
            "data-table-density": density,
            style: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: t23.fontSizeSm,
              fontFamily: t23.fontSans,
              color: t23.colorText
            },
            children
          }
        )
      }
    );
  }
);
var TableHeader = forwardRef25(
  function TableHeader2({ children, style, ...props }, ref) {
    return /* @__PURE__ */ jsx26("thead", { ref, style, ...props, children: /* @__PURE__ */ jsx26("tr", { children }) });
  }
);
var TableHeaderCell = forwardRef25(
  function TableHeaderCell2({
    align = "left",
    width,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx26(
      "th",
      {
        ref,
        style: {
          padding: `${t23.spaceSm} ${t23.spaceMd}`,
          textAlign: align,
          fontWeight: t23.fontWeightSemibold,
          fontSize: t23.fontSizeXs,
          color: t23.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: t23.letterSpacingWide,
          borderBottom: `${t23.borderWidthThick} solid ${t23.colorBorder}`,
          whiteSpace: "nowrap",
          width: typeof width === "number" ? `${width}px` : width,
          ...style
        },
        ...props,
        children
      }
    );
  }
);
var TableBody = forwardRef25(
  function TableBody2({ children, ...props }, ref) {
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
    return /* @__PURE__ */ jsx26("tbody", { ref, ...props, children: styledChildren });
  }
);
var TableRow = forwardRef25(
  function TableRow2({
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
    return /* @__PURE__ */ jsx26(
      "tr",
      {
        ref,
        "data-table-row-hoverable": hoverable || void 0,
        "data-table-row-selected": selected || void 0,
        tabIndex: onClick ? 0 : void 0,
        onClick,
        onKeyDown: handleKeyDown,
        style: {
          cursor: onClick ? "pointer" : void 0,
          ...style
        },
        ...props,
        children
      }
    );
  }
);
var TableCell = forwardRef25(
  function TableCell2({
    align = "left",
    truncate = false,
    muted = false,
    width,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx26(
      "td",
      {
        ref,
        style: {
          padding: `${t23.spaceSm} ${t23.spaceMd}`,
          borderBottom: `${t23.borderWidthDefault} solid ${t23.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? t23.colorTextMuted : void 0,
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
      }
    );
  }
);
var TableGroupHeader = forwardRef25(
  function TableGroupHeader2({
    colSpan,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx26("tr", { ref, style: { cursor: "default", ...style }, ...props, children: /* @__PURE__ */ jsx26(
      "td",
      {
        colSpan,
        style: {
          padding: `${t23.spaceXs} ${t23.spaceMd}`,
          background: t23.colorSurfaceRaised,
          borderBottom: `${t23.borderWidthDefault} solid ${t23.colorBorder}`,
          fontSize: t23.fontSizeXs,
          fontWeight: t23.fontWeightBold,
          letterSpacing: t23.letterSpacingWide,
          textTransform: "uppercase",
          color: t23.colorTextMuted,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children
      }
    ) });
  }
);
var TableEmptyRow = forwardRef25(
  function TableEmptyRow2({
    colSpan,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx26("tr", { ref, style, ...props, children: /* @__PURE__ */ jsx26(
      "td",
      {
        colSpan,
        style: {
          padding: `${t23.spaceXl} ${t23.spaceMd}`,
          textAlign: "center",
          color: t23.colorTextMuted,
          fontSize: t23.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/DateRangePicker/DateRangePicker.tsx
import { forwardRef as forwardRef26, useState as useState6, useRef as useRef6, useCallback as useCallback4, useEffect as useEffect6 } from "react";
import { semantic as t27, useInjectStyles as useInjectStyles8 } from "../../core/dist/index.js";

// src/components/DateRangePicker/CalendarHeader.tsx
import { semantic as t24 } from "../../core/dist/index.js";

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
  const t41 = stripTime(to).getTime();
  return d >= f && d <= t41;
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
import { jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
var headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${t24.spaceXs} 0`
};
var titleStyle = {
  fontSize: t24.fontSizeSm,
  fontWeight: t24.fontWeightSemibold,
  fontFamily: t24.fontSans,
  color: t24.colorText,
  margin: 0,
  userSelect: "none"
};
function CalendarHeader({
  year,
  month,
  onPrev,
  onNext
}) {
  return /* @__PURE__ */ jsxs15("div", { style: headerStyle, children: [
    /* @__PURE__ */ jsx27(
      IconButton,
      {
        icon: "chevron-left",
        "aria-label": "Previous month",
        size: 16,
        onClick: onPrev,
        style: { width: 28, height: 28 }
      }
    ),
    /* @__PURE__ */ jsxs15("span", { style: titleStyle, children: [
      MONTH_NAMES[month],
      " ",
      year
    ] }),
    /* @__PURE__ */ jsx27(
      IconButton,
      {
        icon: "chevron-right",
        "aria-label": "Next month",
        size: 16,
        onClick: onNext,
        style: { width: 28, height: 28 }
      }
    )
  ] });
}

// src/components/DateRangePicker/CalendarGrid.tsx
import { useCallback as useCallback3, useRef as useRef5 } from "react";
import { semantic as t26 } from "../../core/dist/index.js";

// src/components/DateRangePicker/DayCell.tsx
import { semantic as t25 } from "../../core/dist/index.js";
import { jsx as jsx28 } from "react/jsx-runtime";
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: t25.spaceXl,
  height: t25.spaceXl,
  border: "none",
  borderRadius: t25.radiusSm,
  fontSize: t25.fontSizeSm,
  fontFamily: t25.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: t25.colorText,
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
    ...isOutsideMonth ? { color: t25.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${t25.borderWidthDefault} solid ${t25.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? { background: `color-mix(in srgb, ${t25.colorActionPrimary} 15%, transparent)` } : {},
    ...isEndpoint ? { background: t25.colorActionPrimary, color: t25.colorTextInverse } : {},
    ...isDisabled ? {
      color: t25.colorTextDisabled,
      pointerEvents: "none",
      cursor: "default",
      opacity: 0.5
    } : {}
  };
  const classNames = [
    scopeClass + "-day",
    ...isDisabled ? [] : [scopeClass + "-day--enabled"]
  ].join(" ");
  return /* @__PURE__ */ jsx28("td", { role: "gridcell", style: { padding: 0 }, children: /* @__PURE__ */ jsx28(
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
import { jsx as jsx29, jsxs as jsxs16 } from "react/jsx-runtime";
var tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed"
};
var weekdayHeaderStyle = {
  fontSize: t26.fontSizeXs,
  fontFamily: t26.fontSans,
  fontWeight: t26.fontWeightMedium,
  color: t26.colorTextMuted,
  textAlign: "center",
  padding: `${t26.spaceXs} 0`,
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
  return /* @__PURE__ */ jsxs16("table", { style: tableStyle, role: "grid", "aria-label": "Calendar", children: [
    /* @__PURE__ */ jsx29("thead", { children: /* @__PURE__ */ jsx29("tr", { children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ jsx29("th", { scope: "col", style: weekdayHeaderStyle, children: label }, label)) }) }),
    /* @__PURE__ */ jsx29("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ jsx29("tr", { children: row.map((date) => {
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);
      const inRange = sortedStart !== null && sortedEnd !== null && isInRange(date, sortedStart, sortedEnd);
      const isFocused = isSameDay(date, focusedDate);
      return /* @__PURE__ */ jsx29(
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
import { jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-day--enabled:hover {
    background: ${t27.colorSurfaceRaised} !important;
  }
  .${SCOPE}-day--enabled:focus-visible {
    outline: ${t27.focusRingWidth} solid ${t27.focusRingColor};
    outline-offset: ${t27.focusRingOffset};
  }
  .${SCOPE}-trigger:focus-visible {
    border-color: ${t27.colorBorderFocused};
    box-shadow: 0 0 0 ${t27.focusRingWidth} ${t27.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${t27.colorBorderFocused};
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
var triggerErrorStyle = {
  borderColor: t27.colorBorderError
};
var triggerDisabledStyle = {
  background: t27.colorSurfaceDisabled,
  color: t27.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle = {
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
var placeholderStyle2 = {
  color: t27.colorTextPlaceholder
};
var DateRangePicker = forwardRef26(
  function DateRangePicker2({
    value,
    onChange,
    minDate,
    maxDate,
    disabledDates,
    placeholder = "Select date range",
    hasError,
    disabled,
    style
  }, ref) {
    useInjectStyles8(SCOPE, injectedCSS);
    const [open, setOpen] = useState6(false);
    const [selectionStart, setSelectionStart] = useState6(null);
    const containerRef = useRef6(null);
    const initialDate = value?.from ?? /* @__PURE__ */ new Date();
    const [viewYear, setViewYear] = useState6(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = useState6(initialDate.getMonth());
    const [focusedDate, setFocusedDate] = useState6(
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
      displayText = /* @__PURE__ */ jsx30("span", { style: placeholderStyle2, children: placeholder });
    }
    const calendarStart = selectionStart ?? value?.from ?? null;
    const calendarEnd = selectionStart ? null : value?.to ?? null;
    return /* @__PURE__ */ jsxs17(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: { ...wrapperStyle2, ...style },
        children: [
          /* @__PURE__ */ jsx30(
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
          open && /* @__PURE__ */ jsxs17("div", { style: popoverStyle, role: "dialog", "aria-label": "Date range picker", children: [
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
import { forwardRef as forwardRef27, useState as useState7, useRef as useRef7, useCallback as useCallback5, useEffect as useEffect7 } from "react";
import { semantic as t28, useInjectStyles as useInjectStyles9 } from "../../core/dist/index.js";
import { jsx as jsx31, jsxs as jsxs18 } from "react/jsx-runtime";
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-day--enabled:hover {
    background: ${t28.colorSurfaceRaised} !important;
  }
  .${SCOPE2}-day--enabled:focus-visible {
    outline: ${t28.focusRingWidth} solid ${t28.focusRingColor};
    outline-offset: ${t28.focusRingOffset};
  }
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${t28.colorBorderFocused};
    box-shadow: 0 0 0 ${t28.focusRingWidth} ${t28.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${t28.colorBorderFocused};
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
  padding: `${t28.spaceSm} ${t28.spaceMd}`,
  fontSize: t28.fontSizeSm,
  lineHeight: t28.lineHeightTight,
  fontFamily: t28.fontSans,
  color: t28.colorText,
  background: t28.colorSurfaceInput,
  border: `${t28.borderWidthDefault} solid ${t28.colorBorder}`,
  borderRadius: t28.radiusMd,
  outline: "none",
  transition: `border-color ${t28.transitionBase}, box-shadow ${t28.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle2 = {
  borderColor: t28.colorBorderError
};
var triggerDisabledStyle2 = {
  background: t28.colorSurfaceDisabled,
  color: t28.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: t28.zIndexDropdown,
  marginTop: t28.spaceXs,
  background: t28.colorSurfacePanel,
  border: `${t28.borderWidthDefault} solid ${t28.colorBorder}`,
  borderRadius: t28.radiusLg,
  boxShadow: t28.shadowMd,
  padding: t28.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle3 = {
  color: t28.colorTextPlaceholder
};
var DatePicker = forwardRef27(
  function DatePicker2({
    value,
    onChange,
    minDate,
    maxDate,
    disabledDates,
    placeholder = "Select date",
    hasError,
    disabled,
    style
  }, ref) {
    useInjectStyles9(SCOPE2, injectedCSS2);
    const [open, setOpen] = useState7(false);
    const containerRef = useRef7(null);
    const initialDate = value ?? /* @__PURE__ */ new Date();
    const [viewYear, setViewYear] = useState7(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = useState7(initialDate.getMonth());
    const [focusedDate, setFocusedDate] = useState7(value ?? /* @__PURE__ */ new Date());
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
      displayText = /* @__PURE__ */ jsx31("span", { style: placeholderStyle3, children: placeholder });
    }
    return /* @__PURE__ */ jsxs18(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: { ...wrapperStyle3, ...style },
        children: [
          /* @__PURE__ */ jsx31(
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
          open && /* @__PURE__ */ jsxs18("div", { style: popoverStyle2, role: "dialog", "aria-label": "Date picker", children: [
            /* @__PURE__ */ jsx31(
              CalendarHeader,
              {
                year: viewYear,
                month: viewMonth,
                onPrev: handlePrevMonth,
                onNext: handleNextMonth
              }
            ),
            /* @__PURE__ */ jsx31(
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
import { semantic as t29 } from "../../core/dist/index.js";
import { jsx as jsx32, jsxs as jsxs19 } from "react/jsx-runtime";
var titleStyles = {
  margin: 0,
  marginBottom: t29.spaceMd,
  fontSize: t29.fontSizeLg,
  fontWeight: t29.fontWeightSemibold,
  fontFamily: t29.fontSans,
  color: t29.colorText
};
var listStyles = {
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: t29.spaceSm
};
var rowStyles = {
  display: "flex",
  flexDirection: "column",
  gap: t29.spaceXs,
  padding: `${t29.spaceSm} 0`,
  borderBottom: `${t29.borderWidthDefault} solid ${t29.colorBorder}`
};
var labelStyles = {
  fontSize: t29.fontSizeXs,
  fontWeight: t29.fontWeightSemibold,
  fontFamily: t29.fontSans,
  color: t29.colorTextMuted,
  textTransform: "uppercase",
  letterSpacing: t29.letterSpacingWide
};
var valueStyles = {
  fontSize: t29.fontSizeSm,
  fontFamily: t29.fontSans,
  color: t29.colorText
};
function MetadataTable({ items, title }) {
  return /* @__PURE__ */ jsxs19("div", { children: [
    title && /* @__PURE__ */ jsx32("h3", { style: titleStyles, children: title }),
    /* @__PURE__ */ jsx32("dl", { style: listStyles, children: items.map((item, i) => /* @__PURE__ */ jsxs19("div", { style: i === items.length - 1 ? { ...rowStyles, borderBottom: "none" } : rowStyles, children: [
      /* @__PURE__ */ jsx32("dt", { style: labelStyles, children: item.label }),
      /* @__PURE__ */ jsx32("dd", { style: { ...valueStyles, margin: 0 }, children: item.value })
    ] }, i)) })
  ] });
}

// src/components/ErrorBoundary/ErrorBoundary.tsx
import React from "react";
import { semantic as t30 } from "../../core/dist/index.js";
import { jsx as jsx33, jsxs as jsxs20 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx33(
      Card,
      {
        style: {
          borderColor: t30.colorError,
          borderWidth: "2px"
        },
        padding: "lg",
        children: /* @__PURE__ */ jsxs20("div", { style: { display: "flex", flexDirection: "column", gap: t30.spaceMd }, children: [
          /* @__PURE__ */ jsx33("div", { style: { display: "flex", alignItems: "center", gap: t30.spaceSm }, children: /* @__PURE__ */ jsx33(
            "span",
            {
              style: {
                fontSize: t30.fontSizeLg,
                color: t30.colorError,
                fontWeight: t30.fontWeightSemibold,
                fontFamily: t30.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ jsx33(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: t30.fontMono,
                fontSize: t30.fontSizeSm,
                lineHeight: t30.lineHeightBase,
                color: t30.colorText,
                background: t30.colorSurfaceRaised,
                padding: t30.spaceSm,
                borderRadius: t30.radiusMd,
                wordBreak: "break-word"
              },
              children: error.message
            }
          ),
          error.stack && /* @__PURE__ */ jsxs20("div", { children: [
            /* @__PURE__ */ jsx33(
              "button",
              {
                type: "button",
                onClick: () => this.setState({ showStack: !showStack }),
                style: {
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: t30.fontSans,
                  fontSize: t30.fontSizeSm,
                  color: t30.colorTextMuted,
                  cursor: "pointer",
                  textDecoration: "underline"
                },
                children: showStack ? "Hide stack trace" : "Show stack trace"
              }
            ),
            showStack && /* @__PURE__ */ jsx33(
              "pre",
              {
                style: {
                  marginTop: t30.spaceSm,
                  fontFamily: t30.fontMono,
                  fontSize: t30.fontSizeXs,
                  lineHeight: t30.lineHeightBase,
                  color: t30.colorTextSecondary,
                  background: t30.colorSurfaceRaised,
                  padding: t30.spaceSm,
                  borderRadius: t30.radiusMd,
                  overflow: "auto",
                  maxHeight: "200px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all"
                },
                children: error.stack
              }
            )
          ] }),
          /* @__PURE__ */ jsx33("div", { children: /* @__PURE__ */ jsx33(Button, { variant: "secondary", size: "sm", onClick: this.resetErrorBoundary, children: "Try again" }) })
        ] })
      }
    );
  }
};

// src/components/SectionLabel/SectionLabel.tsx
import { semantic as t31 } from "../../core/dist/index.js";
import { jsx as jsx34 } from "react/jsx-runtime";
var baseStyles3 = {
  display: "block",
  fontSize: t31.fontSizeXs,
  fontWeight: t31.fontWeightSemibold,
  fontFamily: t31.fontSans,
  color: t31.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: t31.letterSpacingWide
};
function SectionLabel({
  children,
  style,
  ...rest
}) {
  return /* @__PURE__ */ jsx34("div", { ...rest, style: { ...baseStyles3, ...style }, children });
}

// src/components/Toast/Toast.tsx
import {
  createContext as createContext2,
  useCallback as useCallback6,
  useContext as useContext2,
  useEffect as useEffect8,
  useRef as useRef8,
  useState as useState8
} from "react";
import { createPortal as createPortal2 } from "react-dom";
import { semantic as t32, useInjectStyles as useInjectStyles10 } from "../../core/dist/index.js";
import { jsx as jsx35, jsxs as jsxs21 } from "react/jsx-runtime";
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
@media (prefers-reduced-motion: reduce) {
  @keyframes toast-slide-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes toast-fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
}
`;
var typeColors = {
  success: { bg: t32.colorSuccessBg, fg: t32.colorSuccess, border: t32.colorSuccess },
  error: { bg: t32.colorErrorBg, fg: t32.colorError, border: t32.colorError },
  info: { bg: t32.colorInfoBg, fg: t32.colorInfo, border: t32.colorInfo },
  warning: { bg: t32.colorWarningBg, fg: t32.colorWarning, border: t32.colorWarning }
};
function ToastMessage({
  item,
  onDismiss
}) {
  const [exiting, setExiting] = useState8(false);
  const timerRef = useRef8(null);
  useEffect8(() => {
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, item.duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [item.duration]);
  const handleAnimationEnd = () => {
    if (exiting) {
      onDismiss(item.id);
    }
  };
  const colors = typeColors[item.type];
  return /* @__PURE__ */ jsxs21(
    "div",
    {
      role: "status",
      style: {
        display: "flex",
        alignItems: "center",
        gap: t32.spaceSm,
        padding: `${t32.spaceSm} ${t32.spaceMd}`,
        background: colors.bg,
        color: colors.fg,
        borderRadius: t32.radiusMd,
        borderLeft: `${t32.borderWidthAccent} solid ${colors.border}`,
        boxShadow: t32.shadowMd,
        fontSize: t32.fontSizeSm,
        fontFamily: t32.fontSans,
        fontWeight: t32.fontWeightMedium,
        lineHeight: t32.lineHeightBase,
        pointerEvents: "auto",
        animation: exiting ? "toast-fade-out 200ms ease forwards" : "toast-slide-in 250ms ease",
        maxWidth: "24rem",
        wordBreak: "break-word"
      },
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ jsx35("span", { style: { flex: 1 }, children: item.message }),
        /* @__PURE__ */ jsx35(
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
              borderRadius: t32.radiusSm,
              color: colors.fg,
              opacity: 0.7,
              fontSize: t32.fontSizeSm,
              lineHeight: 1
            },
            children: "\xD7"
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
  useInjectStyles10(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: t32.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: t32.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: t32.spaceLg } : { bottom: t32.spaceLg },
    ...position.endsWith("right") ? { right: t32.spaceLg } : { left: t32.spaceLg }
  };
  return createPortal2(
    /* @__PURE__ */ jsx35("div", { "aria-live": "polite", style: positionStyles, children: toasts.map((item) => /* @__PURE__ */ jsx35(ToastMessage, { item, onDismiss }, item.id)) }),
    document.body
  );
}
var toastCounter = 0;
function ToastProvider({
  children,
  position = "top-right"
}) {
  const [toasts, setToasts] = useState8([]);
  const dismiss = useCallback6((id) => {
    setToasts((prev) => prev.filter((t41) => t41.id !== id));
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
  return /* @__PURE__ */ jsxs21(ToastContext.Provider, { value: { showToast }, children: [
    children,
    /* @__PURE__ */ jsx35(ToastContainer, { toasts, onDismiss: dismiss, position })
  ] });
}

// src/components/Combobox/Combobox.tsx
import { forwardRef as forwardRef28, useState as useState9, useEffect as useEffect9, useRef as useRef9, useCallback as useCallback7, useMemo } from "react";
import { semantic as t33, useInjectStyles as useInjectStyles11 } from "../../core/dist/index.js";
import { jsx as jsx36, jsxs as jsxs22 } from "react/jsx-runtime";
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
var Combobox = forwardRef28(function Combobox2({
  options,
  value,
  onChange,
  onSelect,
  placeholder,
  disabled,
  hasError,
  style,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}, ref) {
  useInjectStyles11(COMBOBOX_STYLES_ID, comboboxCSS);
  const [open, setOpen] = useState9(false);
  const [focusedIndex, setFocusedIndex] = useState9(-1);
  const [dropDirection, setDropDirection] = useState9("down");
  const containerRef = useRef9(null);
  const inputRef = useRef9(null);
  const menuRef = useRef9(null);
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
      inputRef.current?.focus();
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
    marginTop: t33.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: t33.spaceXs
  };
  return /* @__PURE__ */ jsxs22(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle4,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx36(
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
            autoComplete: "off",
            id,
            value,
            placeholder,
            disabled,
            onChange: handleInputChange,
            onFocus: () => {
              if (!disabled && filtered.length > 0) openMenu();
            },
            style: {
              ...inputBaseStyle,
              ...hasError ? errorBorderStyle4 : {},
              ...disabled ? disabledStyle4 : {},
              ...style
            },
            ...props
          }
        ),
        open && filtered.length > 0 && /* @__PURE__ */ jsx36(
          "div",
          {
            ref: menuRef,
            id: listboxId,
            role: "listbox",
            style: {
              ...menuStyle,
              background: t33.colorSurfacePanel,
              border: `${t33.borderWidthDefault} solid ${t33.colorBorder}`,
              borderRadius: t33.radiusMd,
              padding: t33.spaceXs,
              zIndex: t33.zIndexSticky,
              boxShadow: t33.shadowMd,
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
              return /* @__PURE__ */ jsx36(
                "button",
                {
                  id: `alttab-combobox-opt-${opt.value}`,
                  type: "button",
                  role: "option",
                  "aria-selected": isMatch,
                  className: classes,
                  onClick: () => selectOption(opt),
                  onMouseEnter: () => setFocusedIndex(idx),
                  style: isMatch ? { fontWeight: t33.fontWeightSemibold } : void 0,
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
  padding: `${t33.spaceSm} ${t33.spaceMd}`,
  fontSize: t33.fontSizeSm,
  lineHeight: t33.lineHeightTight,
  fontFamily: t33.fontSans,
  color: t33.colorText,
  background: t33.colorSurfaceInput,
  border: `${t33.borderWidthDefault} solid ${t33.colorBorder}`,
  borderRadius: t33.radiusMd,
  outline: "none",
  transition: `border-color ${t33.transitionBase}, box-shadow ${t33.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle4 = {
  borderColor: t33.colorBorderError
};
var disabledStyle4 = {
  background: t33.colorSurfaceDisabled,
  color: t33.colorTextDisabled,
  cursor: "not-allowed"
};

// src/components/TableFilters/TableFilters.tsx
import { useState as useState10, useEffect as useEffect10, useRef as useRef10, useCallback as useCallback8 } from "react";
import { semantic as t34 } from "../../core/dist/index.js";
import { jsx as jsx37 } from "react/jsx-runtime";
function DebouncedTextFilter({
  config,
  value,
  onCommit
}) {
  const delay = config.debounceMs ?? 300;
  const [local, setLocal] = useState10(value);
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
  return /* @__PURE__ */ jsx37("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ jsx37(
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
  return /* @__PURE__ */ jsx37("div", { style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ jsx37(
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
  return /* @__PURE__ */ jsx37(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t34.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...props,
      children: filters.map((filter) => {
        const val = values[filter.key] ?? "";
        if (filter.type === "text") {
          return /* @__PURE__ */ jsx37(
            DebouncedTextFilter,
            {
              config: filter,
              value: val,
              onCommit: handleCommit
            },
            filter.key
          );
        }
        return /* @__PURE__ */ jsx37(
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
import { useId as useId8 } from "react";
import { semantic as t35, useInjectStyles as useInjectStyles12 } from "../../core/dist/index.js";
import { jsx as jsx38, jsxs as jsxs23 } from "react/jsx-runtime";
function ChipPicker({
  items,
  selected,
  onChange,
  style
}) {
  const uid = useId8();
  const styleId = `chip-picker-${uid.replace(/:/g, "")}`;
  useInjectStyles12(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${t35.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${t35.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${t35.focusRingWidth} solid ${t35.focusRingColor};
      outline-offset: ${t35.focusRingOffset};
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
    padding: `4px 12px`,
    fontSize: t35.fontSizeSm,
    fontFamily: t35.fontSans,
    fontWeight: t35.fontWeightMedium,
    lineHeight: t35.lineHeightTight,
    color: isSelected ? t35.colorActionPrimary : t35.colorText,
    background: isSelected ? t35.colorActionSecondary : "transparent",
    border: `${t35.borderWidthDefault} solid ${isSelected ? t35.colorActionPrimary : t35.colorBorder}`,
    borderRadius: t35.radiusFull,
    cursor: "pointer",
    transition: `background ${t35.transitionFast}, border-color ${t35.transitionFast}, color ${t35.transitionFast}`,
    outline: "none"
  });
  const renderChips = (chips) => /* @__PURE__ */ jsx38(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t35.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ jsx38(
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
  return /* @__PURE__ */ jsx38(
    "div",
    {
      "data-chip-picker-id": styleId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t35.spaceMd,
        ...style
      },
      children: groups.map((group, i) => /* @__PURE__ */ jsxs23("div", { style: { display: "flex", flexDirection: "column", gap: t35.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ jsx38(SectionLabel, { style: i > 0 ? { marginTop: t35.spaceXs } : void 0, children: group.label }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/SearchInput/SearchInput.tsx
import { forwardRef as forwardRef29, useState as useState11, useEffect as useEffect11, useRef as useRef11, useCallback as useCallback9 } from "react";
import { semantic as t36, useInjectStyles as useInjectStyles13 } from "../../core/dist/index.js";
import { jsx as jsx39, jsxs as jsxs24 } from "react/jsx-runtime";
var STYLE_ID2 = "4lt7ab-search-input";
var hoverFocusCSS = `
  .search-input-wrapper:focus-within {
    border-color: ${t36.colorBorderFocused};
    box-shadow: 0 0 0 ${t36.focusRingWidth} ${t36.focusRingColor};
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
  gap: t36.spaceXs,
  width: "100%",
  padding: `${t36.spaceSm} ${t36.spaceMd}`,
  fontSize: t36.fontSizeSm,
  lineHeight: t36.lineHeightTight,
  fontFamily: t36.fontSans,
  color: t36.colorText,
  background: t36.colorSurfaceInput,
  border: `${t36.borderWidthDefault} solid ${t36.colorBorder}`,
  borderRadius: t36.radiusMd,
  transition: `border-color ${t36.transitionBase}, box-shadow ${t36.transitionBase}`,
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
  background: t36.colorSurfaceDisabled,
  color: t36.colorTextDisabled,
  cursor: "not-allowed"
};
var SearchInput = forwardRef29(
  function SearchInput2({
    value,
    onSearch,
    debounceMs = 300,
    trailing,
    disabled,
    style,
    placeholder = "Search\u2026",
    ...props
  }, ref) {
    useInjectStyles13(STYLE_ID2, hoverFocusCSS);
    const [localValue, setLocalValue] = useState11(value);
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
    return /* @__PURE__ */ jsxs24(
      "div",
      {
        className: "search-input-wrapper",
        style: {
          ...wrapperStyle5,
          ...disabled ? disabledWrapperStyle : {},
          ...style
        },
        children: [
          /* @__PURE__ */ jsx39(Icon, { name: "search", size: 16, style: { color: t36.colorTextMuted, flexShrink: 0 } }),
          /* @__PURE__ */ jsx39(
            "input",
            {
              ref,
              type: "text",
              value: localValue,
              onChange: handleChange,
              placeholder,
              disabled,
              style: inputStyle,
              ...props
            }
          ),
          trailing && /* @__PURE__ */ jsx39("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/SegmentedControl/SegmentedControl.tsx
import { useRef as useRef12, useLayoutEffect, useState as useState12, useCallback as useCallback10 } from "react";
import { semantic as t37, useInjectStyles as useInjectStyles14 } from "../../core/dist/index.js";
import { jsx as jsx40, jsxs as jsxs25 } from "react/jsx-runtime";
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${t37.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${t37.focusRingWidth} solid ${t37.focusRingColor};
    outline-offset: ${t37.focusRingOffset};
    border-radius: ${t37.radiusFull};
    z-index: 2;
  }
  @media (prefers-reduced-motion: reduce) {
    .segmented-ctrl-indicator {
      transition: none !important;
    }
  }
`;
var sizes = {
  sm: { height: 28, px: 8, fontSize: "var(--font-size-xs)", iconSize: 14 },
  md: { height: 32, px: 12, fontSize: "var(--font-size-sm)", iconSize: 16 }
};
function SegmentedControl({
  segments,
  value,
  onChange,
  size = "md"
}) {
  useInjectStyles14(STYLE_ID3, hoverCSS);
  const containerRef = useRef12(null);
  const [indicator, setIndicator] = useState12(null);
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
  return /* @__PURE__ */ jsxs25(
    "div",
    {
      ref: containerRef,
      role: "group",
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        height: s.height,
        background: t37.colorSurfaceInput,
        borderRadius: t37.radiusFull,
        border: `${t37.borderWidthDefault} solid ${t37.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ jsx40(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: t37.radiusFull,
              background: t37.colorActionPrimary,
              transition: `left ${t37.transitionSlow}, width ${t37.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ jsxs25(
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
                gap: t37.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: t37.radiusFull,
                background: "transparent",
                color: isActive ? t37.colorTextInverse : t37.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: t37.fontSans,
                fontWeight: isActive ? t37.fontWeightSemibold : t37.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${t37.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ jsx40(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ jsx40("span", { children: seg.label })
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
import { forwardRef as forwardRef30, useEffect as useEffect12, useRef as useRef13 } from "react";
import { semantic as t38, useInjectStyles as useInjectStyles15 } from "../../core/dist/index.js";
import { jsx as jsx41, jsxs as jsxs26 } from "react/jsx-runtime";
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
  info: { bg: t38.colorInfoBg, fg: t38.colorInfo, border: t38.colorInfo },
  warning: { bg: t38.colorWarningBg, fg: t38.colorWarning, border: t38.colorWarning },
  error: { bg: t38.colorErrorBg, fg: t38.colorError, border: t38.colorError },
  success: { bg: t38.colorSuccessBg, fg: t38.colorSuccess, border: t38.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ jsx41(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ jsx41(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ jsx41(IconError, { size: 20 }),
  success: /* @__PURE__ */ jsx41(IconCheckCircle, { size: 20 })
};
var AlertBanner = forwardRef30(
  function AlertBanner2({ variant, children, onDismiss, autoDismiss, icon, style }, ref) {
    useInjectStyles15(STYLE_ID4, alertBannerCSS);
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
    return /* @__PURE__ */ jsxs26(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t38.spaceSm,
          width: "100%",
          padding: `${t38.spaceSm} ${t38.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${t38.borderWidthThick} solid ${colors.border}`,
          fontFamily: t38.fontSans,
          fontSize: t38.fontSizeSm,
          fontWeight: t38.fontWeightMedium,
          lineHeight: t38.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease",
          ...style
        },
        children: [
          resolvedIcon && /* @__PURE__ */ jsx41("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ jsx41("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ jsx41(
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
                borderRadius: t38.radiusSm,
                color: colors.fg,
                opacity: 0.7,
                fontSize: t38.fontSizeLg,
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
import { forwardRef as forwardRef31 } from "react";
import { semantic as t39, useInjectStyles as useInjectStyles16 } from "../../core/dist/index.js";
import { jsx as jsx42, jsxs as jsxs27 } from "react/jsx-runtime";
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
    transition: background ${t39.transitionBase};
  }
  .topbar-nav-item:hover::after {
    background: ${t39.colorBorder};
  }
  .topbar-nav-item[data-active]::after {
    background: ${t39.colorActionPrimary};
  }
  .topbar-nav-item:hover {
    color: ${t39.colorText};
  }
`;
var TopBar = forwardRef31(
  function TopBar2({
    title,
    items = [],
    activePath,
    onNavigate,
    trailing,
    sticky = false,
    style,
    ...props
  }, ref) {
    useInjectStyles16(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: t39.zIndexSticky } : {};
    return /* @__PURE__ */ jsxs27(
      "header",
      {
        ref,
        style: {
          display: "flex",
          alignItems: "center",
          height: 48,
          padding: `0 ${t39.spaceMd}`,
          background: t39.colorSurface,
          borderBottom: `${t39.borderWidthDefault} solid ${t39.colorBorder}`,
          fontFamily: t39.fontSans,
          ...stickyStyle,
          ...style
        },
        ...props,
        children: [
          /* @__PURE__ */ jsx42(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                fontWeight: t39.fontWeightBold,
                fontSize: t39.fontSizeSm,
                color: t39.colorText,
                marginRight: t39.spaceLg,
                whiteSpace: "nowrap",
                flexShrink: 0
              },
              children: title
            }
          ),
          items.length > 0 && /* @__PURE__ */ jsx42(
            "nav",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: t39.spaceXs,
                height: "100%",
                flex: 1,
                minWidth: 0
              },
              children: items.map((item) => {
                const isActive = activePath === item.path;
                return /* @__PURE__ */ jsxs27(
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
                      gap: t39.spaceXs,
                      height: "100%",
                      padding: `0 ${t39.spaceSm}`,
                      border: "none",
                      background: "transparent",
                      color: isActive ? t39.colorActionPrimary : t39.colorTextMuted,
                      fontSize: t39.fontSizeSm,
                      fontFamily: t39.fontSans,
                      fontWeight: isActive ? t39.fontWeightSemibold : t39.fontWeightNormal,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: `color ${t39.transitionBase}`,
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
          trailing && /* @__PURE__ */ jsx42(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: t39.spaceSm,
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

// src/components/ShortcutHelpModal/ShortcutHelpModal.tsx
import { forwardRef as forwardRef32, useId as useId9 } from "react";
import { semantic as t40, useInjectStyles as useInjectStyles17 } from "../../core/dist/index.js";
import { jsx as jsx43, jsxs as jsxs28 } from "react/jsx-runtime";
var SHORTCUT_HELP_STYLES_ID = "4lt7ab-shortcut-help";
var SHORTCUT_HELP_CSS = `
  [data-shortcut-help] kbd:hover {
    background: ${t40.colorSurfaceRaised} !important;
    border-color: ${t40.colorBorderFocused} !important;
  }
`;
var ShortcutHelpModal = forwardRef32(
  function ShortcutHelpModal2({
    shortcuts,
    onClose,
    title = "Keyboard Shortcuts",
    maxWidth = 520
  }, ref) {
    const titleId = useId9();
    useInjectStyles17(SHORTCUT_HELP_STYLES_ID, SHORTCUT_HELP_CSS);
    return /* @__PURE__ */ jsx43(ModalShell, { ref, onClose, maxWidth, titleId, children: /* @__PURE__ */ jsxs28("div", { "data-shortcut-help": true, children: [
      /* @__PURE__ */ jsxs28(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: t40.spaceLg
          },
          children: [
            /* @__PURE__ */ jsx43(
              "h2",
              {
                id: titleId,
                style: modalHeadingStyle,
                children: title
              }
            ),
            /* @__PURE__ */ jsx43(
              IconButton,
              {
                icon: "close",
                "aria-label": "Close",
                onClick: onClose,
                style: { marginRight: `calc(-1 * ${t40.spaceXs})`, marginTop: `calc(-1 * ${t40.spaceXs})` }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx43("div", { style: { display: "flex", flexDirection: "column", gap: t40.spaceLg }, children: shortcuts.map((group) => /* @__PURE__ */ jsxs28("div", { children: [
        /* @__PURE__ */ jsx43(
          "h3",
          {
            style: {
              margin: 0,
              marginBottom: t40.spaceSm,
              fontWeight: t40.fontWeightMedium,
              fontFamily: t40.fontSans,
              color: t40.colorTextMuted,
              fontSize: t40.fontSizeXs,
              textTransform: "uppercase",
              letterSpacing: t40.letterSpacingWide
            },
            children: group.group
          }
        ),
        /* @__PURE__ */ jsx43(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: group.shortcuts.map((shortcut) => /* @__PURE__ */ jsxs28(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: `${t40.spaceXs} 0`,
                  borderBottom: `${t40.borderWidthDefault} solid ${t40.colorBorder}`
                },
                children: [
                  /* @__PURE__ */ jsx43(
                    "span",
                    {
                      style: {
                        fontFamily: t40.fontSans,
                        fontSize: t40.fontSizeSm,
                        color: t40.colorText
                      },
                      children: shortcut.description
                    }
                  ),
                  /* @__PURE__ */ jsx43(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: t40.spaceXs,
                        flexShrink: 0,
                        marginLeft: t40.spaceMd
                      },
                      children: shortcut.keys.map((key, i) => /* @__PURE__ */ jsxs28("span", { style: { display: "inline-flex", alignItems: "center", gap: t40.spaceXs }, children: [
                        i > 0 && /* @__PURE__ */ jsx43(
                          "span",
                          {
                            style: {
                              fontSize: t40.fontSizeXs,
                              color: t40.colorTextMuted,
                              fontFamily: t40.fontSans
                            },
                            children: "+"
                          }
                        ),
                        /* @__PURE__ */ jsx43(
                          "kbd",
                          {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              minWidth: 24,
                              height: 24,
                              padding: `0 ${t40.spaceXs}`,
                              fontFamily: t40.fontMono,
                              fontSize: t40.fontSizeXs,
                              fontWeight: t40.fontWeightMedium,
                              lineHeight: 1,
                              color: t40.colorTextSecondary,
                              background: t40.colorSurfaceInput,
                              border: `${t40.borderWidthDefault} solid ${t40.colorBorder}`,
                              borderRadius: t40.radiusSm,
                              boxShadow: `0 1px 0 ${t40.colorBorder}`,
                              transition: `background ${t40.transitionBase}, border-color ${t40.transitionBase}`
                            },
                            children: key
                          }
                        )
                      ] }, `${key}-${i}`))
                    }
                  )
                ]
              },
              shortcut.description
            ))
          }
        )
      ] }, group.group)) })
    ] }) });
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
  EmptyState,
  ErrorBoundary,
  ExpandableCard,
  Field,
  FormModal,
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
  Pagination,
  ProgressBar,
  RowSkeleton,
  SearchInput,
  SectionLabel,
  SegmentedControl,
  Select,
  ShortcutHelpModal,
  Skeleton,
  Stack,
  StatusDot,
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
  ThemeSurface,
  ToastProvider,
  TopBar,
  iconRegistry,
  useFocusTrap,
  useToast
};
