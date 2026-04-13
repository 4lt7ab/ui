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

// src/index.ts
export * from "../../core/dist/index.js";

// src/components/ThemePicker/ThemePicker.tsx
import { forwardRef as forwardRef2, useState, useEffect as useEffect2, useRef, useCallback } from "react";
import { useTheme } from "../../core/dist/index.js";
import { useInjectStyles } from "../../core/dist/index.js";

// src/components/Icon/Icon.tsx
import { forwardRef } from "react";

// src/icons/icons.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M18 6L6 18M6 6l12 12"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M9 18l6-6-6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M6 9l6 6 6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M15 18l-6-6 6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M18 15l-6-6-6 6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M20 6L9 17l-5-5"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("path", {
        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M22 4L12 14.01l-3-3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("path", {
        d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M15 9l-6 6M9 9l6 6"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M21 21l-4.35-4.35"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M12 5v14M5 12h14"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M5 12h14"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("path", {
        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M19 12H5M12 19l-7-7 7-7"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M5 12h14M12 5l7 7-7 7"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M3 12h18M3 6h18M3 18h18"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("path", {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("path", {
        d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M1 1l22 22"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("path", {
        d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
      d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsxDEV("path", {
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

// src/components/Icon/Icon.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Icon = forwardRef(function Icon2({ name, size = 24, style, "aria-label": ariaLabel, ...props }, ref) {
  const IconComponent = iconRegistry[name];
  const isDecorative = !ariaLabel;
  return /* @__PURE__ */ jsxDEV2("span", {
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
    children: /* @__PURE__ */ jsxDEV2(IconComponent, {
      size
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});

// src/components/ThemePicker/ThemePicker.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var GRID_STYLES_ID = "alttab-theme-picker";
var gridCSS = `
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
var COMPACT_STYLES_ID = "alttab-theme-picker-compact";
var compactCSS = `
  .alttab-tp-trigger {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.625rem;
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--color-text-secondary);
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: border-color 0.15s ease;
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
`;
function GridView({ descriptions }) {
  useInjectStyles(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = useTheme();
  return /* @__PURE__ */ jsxDEV3("div", {
    className: "alttab-theme-picker",
    children: Array.from(themes.values()).map((def) => {
      const isActive = resolved === def.name;
      return /* @__PURE__ */ jsxDEV3("button", {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ jsxDEV3("span", {
            className: "alttab-theme-card__name",
            children: def.label
          }, undefined, false, undefined, this),
          descriptions[def.name] && /* @__PURE__ */ jsxDEV3("span", {
            className: "alttab-theme-card__desc",
            children: descriptions[def.name]
          }, undefined, false, undefined, this)
        ]
      }, def.name, true, undefined, this);
    })
  }, undefined, false, undefined, this);
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
    if (!open)
      return;
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
    if (!open || focusedIndex < 0)
      return;
    const menu = menuRef.current;
    if (!menu)
      return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  useEffect2(() => {
    if (open) {
      const activeIdx = themeList.findIndex((t) => t.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]);
  const currentTheme = themeList.find((t) => t.name === resolved);
  return /* @__PURE__ */ jsxDEV3("div", {
    ref: containerRef,
    style: { position: "relative" },
    onKeyDown: handleKeyDown,
    children: [
      /* @__PURE__ */ jsxDEV3("button", {
        ref: triggerRef,
        className: "alttab-tp-trigger",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxDEV3("span", {
            style: {
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--color-action-primary)",
              flexShrink: 0
            }
          }, undefined, false, undefined, this),
          currentTheme?.label ?? resolved,
          /* @__PURE__ */ jsxDEV3(Icon, {
            name: open ? "chevron-up" : "chevron-down",
            size: 12
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      open && /* @__PURE__ */ jsxDEV3("div", {
        ref: menuRef,
        role: "listbox",
        "aria-activedescendant": focusedIndex >= 0 ? `alttab-tp-item-${themeList[focusedIndex]?.name}` : undefined,
        style: {
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: "0.25rem",
          background: "var(--color-surface-panel)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          padding: "0.25rem",
          minWidth: "10rem",
          zIndex: 100,
          boxShadow: "var(--shadow-md)"
        },
        children: themeList.map((t, idx) => {
          const isActive = resolved === t.name;
          const isFocused = focusedIndex === idx;
          const classes = [
            "alttab-tp-menu-item",
            isActive ? "alttab-tp-menu-item--active" : "",
            isFocused && !isActive ? "alttab-tp-menu-item--focused" : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ jsxDEV3("button", {
            id: `alttab-tp-item-${t.name}`,
            role: "option",
            "aria-selected": isActive,
            className: classes,
            onClick: () => {
              setTheme(t.name);
              setOpen(false);
              triggerRef.current?.focus();
            },
            onMouseEnter: () => setFocusedIndex(idx),
            children: [
              /* @__PURE__ */ jsxDEV3("span", {
                style: {
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: isActive ? "var(--color-action-primary)" : "var(--color-text-muted)",
                  flexShrink: 0
                }
              }, undefined, false, undefined, this),
              t.label
            ]
          }, t.name, true, undefined, this);
        })
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var ThemePicker = forwardRef2(function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
  if (variant === "compact") {
    return /* @__PURE__ */ jsxDEV3("div", {
      ref,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxDEV3(CompactView, {}, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV3("div", {
    ref,
    children: /* @__PURE__ */ jsxDEV3(GridView, {
      descriptions
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
// src/components/Button/Button.tsx
import { forwardRef as forwardRef3 } from "react";
import { semantic as t } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var variantStyles = {
  primary: {
    background: t.colorActionPrimary,
    color: t.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: t.colorActionSecondary,
    color: t.colorText,
    border: `1px solid ${t.colorBorder}`
  },
  destructive: {
    background: t.colorActionDestructive,
    color: t.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: t.colorText,
    border: "1px solid transparent"
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
  transition: "background 150ms ease, border-color 150ms ease, opacity 150ms ease"
};
var Button = forwardRef3(function Button2({
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
import { forwardRef as forwardRef4 } from "react";
import { semantic as t2 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var gapMap = {
  xs: t2.spaceXs,
  sm: t2.spaceSm,
  md: t2.spaceMd,
  lg: t2.spaceLg,
  xl: t2.spaceXl,
  "2xl": t2.space2xl
};
var Stack = forwardRef4(function Stack2({
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
import { forwardRef as forwardRef5 } from "react";
import { semantic as t3 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
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
    background: t3.colorSurface,
    border: `1px solid ${t3.colorBorder}`,
    boxShadow: t3.shadowSm
  },
  flat: {
    background: t3.colorSurfaceRaised,
    border: `1px solid ${t3.colorBorder}`,
    boxShadow: "none"
  },
  elevated: {
    background: t3.colorSurface,
    border: `1px solid ${t3.colorBorder}`,
    boxShadow: t3.shadowMd
  }
};
var Card = forwardRef5(function Card2({
  variant = "default",
  padding = "lg",
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV6("div", {
    ref,
    style: {
      borderRadius: t3.radiusLg,
      padding: paddingMap[padding],
      ...variantStyles2[variant],
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
// src/components/Field/Field.tsx
import { semantic as t4 } from "../../core/dist/index.js";
import { forwardRef as forwardRef6, useId, isValidElement, cloneElement } from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
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
var Field = forwardRef6(function Field2({
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
      gap: t4.spaceXs,
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
import { forwardRef as forwardRef7 } from "react";
import { semantic as t5 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var baseStyle = {
  display: "block",
  width: "100%",
  padding: `${t5.spaceSm} ${t5.spaceMd}`,
  fontSize: t5.fontSizeSm,
  lineHeight: t5.lineHeightTight,
  fontFamily: t5.fontSans,
  color: t5.colorText,
  background: t5.colorSurfaceInput,
  border: `1px solid ${t5.colorBorder}`,
  borderRadius: t5.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
var Input = forwardRef7(function Input2({
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
import { forwardRef as forwardRef8 } from "react";
import { semantic as t6 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var baseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${t6.spaceSm} ${t6.spaceMd}`,
  fontSize: t6.fontSizeSm,
  lineHeight: t6.lineHeightBase,
  fontFamily: t6.fontSans,
  color: t6.colorText,
  background: t6.colorSurfaceInput,
  border: `1px solid ${t6.colorBorder}`,
  borderRadius: t6.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
var Textarea = forwardRef8(function Textarea2({
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
import { forwardRef as forwardRef9 } from "react";
import { semantic as t7 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var wrapperStyle = {
  position: "relative",
  display: "block",
  width: "100%"
};
var baseStyle3 = {
  display: "block",
  width: "100%",
  padding: `${t7.spaceSm} ${t7.spaceMd}`,
  fontSize: t7.fontSizeSm,
  lineHeight: t7.lineHeightTight,
  fontFamily: t7.fontSans,
  color: t7.colorText,
  background: t7.colorSurfaceInput,
  border: `1px solid ${t7.colorBorder}`,
  borderRadius: t7.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box",
  cursor: "pointer",
  appearance: "none",
  paddingRight: t7.space2xl
};
var chevronStyle = {
  position: "absolute",
  right: t7.spaceSm,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: t7.colorTextSecondary,
  display: "flex",
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
var Select = forwardRef9(function Select2({
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
import { forwardRef as forwardRef10 } from "react";
import { semantic as t8 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var variantStyles3 = {
  default: {
    border: `1px solid ${t8.colorBorder}`,
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
var Badge = forwardRef10(function Badge2({
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
// src/components/IconButton/IconButton.tsx
import { forwardRef as forwardRef11 } from "react";
import { semantic as t9 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var IconButton = forwardRef11(function IconButton2({
  icon,
  size = 24,
  badge,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV12("button", {
    ref,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
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
      /* @__PURE__ */ jsxDEV12(Icon, {
        name: icon,
        size
      }, undefined, false, undefined, this),
      badge && /* @__PURE__ */ jsxDEV12("span", {
        style: {
          position: "absolute",
          top: 2,
          right: 2,
          width: 8,
          height: 8,
          borderRadius: t9.radiusFull,
          background: t9.colorError,
          border: `2px solid ${t9.colorSurface}`
        }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Overlay/Overlay.tsx
import { forwardRef as forwardRef12 } from "react";
import { semantic as t10 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Overlay = forwardRef12(function Overlay2({
  onClick,
  zIndex = 100,
  style
}, ref) {
  return /* @__PURE__ */ jsxDEV13("div", {
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
  }, undefined, false, undefined, this);
});
// src/components/Skeleton/Skeleton.tsx
import { forwardRef as forwardRef13 } from "react";
import { semantic as t11 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Skeleton = forwardRef13(function Skeleton2({
  width = "100%",
  height = 16,
  borderRadius = t11.radiusMd,
  style
}, ref) {
  return /* @__PURE__ */ jsxDEV14("div", {
    ref,
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius,
      background: t11.colorSurfaceRaised,
      ...style
    }
  }, undefined, false, undefined, this);
});
var CardSkeleton = forwardRef13(function CardSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsxDEV14("div", {
    ref,
    "aria-hidden": "true",
    style: {
      borderRadius: t11.radiusLg,
      border: `1px solid ${t11.colorBorder}`,
      padding: t11.spaceLg,
      display: "flex",
      flexDirection: "column",
      gap: t11.spaceSm,
      ...style
    },
    children: [
      /* @__PURE__ */ jsxDEV14(Skeleton, {
        width: "60%",
        height: 20
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV14(Skeleton, {
        width: "100%",
        height: 14
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV14(Skeleton, {
        width: "80%",
        height: 14
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
var RowSkeleton = forwardRef13(function RowSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsxDEV14("div", {
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
      /* @__PURE__ */ jsxDEV14(Skeleton, {
        width: 32,
        height: 32,
        borderRadius: t11.radiusFull
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV14("div", {
        style: { flex: 1, display: "flex", flexDirection: "column", gap: t11.spaceXs },
        children: [
          /* @__PURE__ */ jsxDEV14(Skeleton, {
            width: "40%",
            height: 14
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV14(Skeleton, {
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
import { semantic as t12 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var ProgressBar = forwardRef14(function ProgressBar2({
  segments,
  height = 6,
  "aria-label": ariaLabel,
  style
}, ref) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  return /* @__PURE__ */ jsxDEV15("div", {
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
      return /* @__PURE__ */ jsxDEV15("div", {
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
import { semantic as t13 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var EmptyState = forwardRef15(function EmptyState2({
  icon,
  message,
  variant = "plain",
  style,
  children,
  action
}, ref) {
  const content = /* @__PURE__ */ jsxDEV16(Stack, {
    align: "center",
    gap: "sm",
    style: { padding: t13.spaceXl, ...style },
    children: [
      /* @__PURE__ */ jsxDEV16(Icon, {
        name: icon,
        size: 32,
        style: { color: t13.colorTextMuted }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV16("span", {
        style: {
          color: t13.colorTextSecondary,
          fontSize: t13.fontSizeSm,
          textAlign: "center",
          fontFamily: t13.fontSans
        },
        children: message
      }, undefined, false, undefined, this),
      children,
      action && /* @__PURE__ */ jsxDEV16("div", {
        style: { marginTop: t13.spaceSm },
        children: action
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  if (variant === "card") {
    return /* @__PURE__ */ jsxDEV16(Card, {
      ref,
      variant: "flat",
      children: content
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV16("div", {
    ref,
    children: content
  }, undefined, false, undefined, this);
});
// src/components/Pagination/Pagination.tsx
import { forwardRef as forwardRef16 } from "react";
import { semantic as t14 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV17("div", {
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
      /* @__PURE__ */ jsxDEV17(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page <= 1,
        onClick: () => onPageChange(page - 1),
        children: resolvedLabels.previous
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV17("span", {
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
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV17(Button, {
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
import { semantic as t15 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
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
      fontFamily: t15.fontSans,
      fontWeight: t15.fontWeightBold,
      color: t15.colorText
    }
  }, title);
  return /* @__PURE__ */ jsxDEV18("div", {
    ref,
    className,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      ...style
    },
    children: [
      /* @__PURE__ */ jsxDEV18("div", {
        children: [
          heading,
          subtitle && /* @__PURE__ */ jsxDEV18("span", {
            style: {
              color: t15.colorTextMuted,
              fontSize: t15.fontSizeSm
            },
            children: subtitle
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      trailing && /* @__PURE__ */ jsxDEV18("div", {
        children: trailing
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/TagChip/TagChip.tsx
import { forwardRef as forwardRef18 } from "react";
import { semantic as t16 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var TagChip = forwardRef18(function TagChip2({
  name,
  onRemove,
  style
}, ref) {
  return /* @__PURE__ */ jsxDEV19("span", {
    ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: t16.fontSizeXs,
      color: t16.colorActionPrimary,
      background: t16.colorSurfaceRaised,
      borderRadius: t16.radiusFull,
      padding: "2px 8px",
      fontFamily: t16.fontSans,
      ...style
    },
    children: [
      name,
      onRemove && /* @__PURE__ */ jsxDEV19(IconButton, {
        icon: "close",
        size: 12,
        onClick: onRemove,
        "aria-label": `Remove ${name}`,
        style: { width: 18, height: 18, color: t16.colorActionPrimary }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ExpandableCard/ExpandableCard.tsx
import { semantic as t17 } from "../../core/dist/index.js";
import { forwardRef as forwardRef19, useState as useState2, useId as useId2 } from "react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV20(Card, {
    ref,
    variant,
    padding: "xs",
    style,
    children: [
      /* @__PURE__ */ jsxDEV20("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
        children: [
          /* @__PURE__ */ jsxDEV20("button", {
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
              transition: "background 150ms ease",
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              flex: 1
            },
            children: [
              /* @__PURE__ */ jsxDEV20("span", {
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
                children: /* @__PURE__ */ jsxDEV20(IconChevronRight, {
                  size: 20
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsxDEV20("span", {
                style: {
                  fontWeight: t17.fontWeightSemibold,
                  fontFamily: t17.fontSans,
                  color: t17.colorText,
                  fontSize: t17.fontSizeSm
                },
                children: title
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          headerAction && /* @__PURE__ */ jsxDEV20("div", {
            style: { padding: `0 ${t17.spaceMd}` },
            children: headerAction
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV20("div", {
        id: panelId,
        role: "region",
        style: {
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 200ms ease"
        },
        children: /* @__PURE__ */ jsxDEV20("div", {
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsxDEV20("div", {
            style: { padding: `${t17.spaceSm} ${t17.spaceMd} ${t17.spaceMd}` },
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
import { semantic as t18 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV21, Fragment } from "react/jsx-dev-runtime";
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
  return createPortal(/* @__PURE__ */ jsxDEV21(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV21(Overlay, {
        onClick: onClose,
        zIndex
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV21("div", {
        style: {
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: zIndex + 1,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxDEV21("div", {
          ref: setRefs,
          role,
          "aria-modal": "true",
          "aria-labelledby": ariaLabel ? undefined : resolvedLabelId,
          "aria-label": ariaLabel,
          tabIndex: -1,
          style: {
            background: t18.colorSurface,
            color: t18.colorText,
            borderRadius: t18.radiusLg,
            boxShadow: t18.shadowLg,
            border: `1px solid ${t18.colorBorder}`,
            padding: t18.spaceXl,
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
import { semantic as t19 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV22(ModalShell, {
    ref,
    onClose: onCancel,
    role: "alertdialog",
    titleId,
    children: [
      /* @__PURE__ */ jsxDEV22("h2", {
        id: titleId,
        style: {
          margin: 0,
          fontWeight: t19.fontWeightSemibold,
          fontFamily: t19.fontSans,
          color: t19.colorText,
          fontSize: t19.fontSizeLg
        },
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV22("p", {
        style: {
          margin: `${t19.spaceSm} 0 ${children ? "0" : t19.spaceLg}`,
          color: t19.colorTextMuted,
          fontSize: t19.fontSizeSm,
          fontFamily: t19.fontSans
        },
        children: message
      }, undefined, false, undefined, this),
      children && /* @__PURE__ */ jsxDEV22("div", {
        style: { margin: `${t19.spaceSm} 0 ${t19.spaceLg}` },
        children
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV22("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          gap: t19.spaceSm
        },
        children: [
          /* @__PURE__ */ jsxDEV22(Button, {
            variant: "ghost",
            onClick: onCancel,
            disabled: loading,
            autoFocus: true,
            children: "Cancel"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV22(Button, {
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
import { semantic as t20 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var variantColors = {
  default: t20.colorTextMuted,
  success: t20.colorSuccess,
  warning: t20.colorWarning,
  error: t20.colorError,
  info: t20.colorInfo
};
var StatusDot = forwardRef22(function StatusDot2({
  variant = "default",
  color,
  size = 8,
  "aria-label": ariaLabel,
  style
}, ref) {
  const resolvedColor = color ?? variantColors[variant];
  return /* @__PURE__ */ jsxDEV23("span", {
    ref,
    role: ariaLabel ? "img" : undefined,
    "aria-label": ariaLabel,
    "aria-hidden": ariaLabel ? undefined : true,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: t20.radiusFull,
      background: resolvedColor,
      flexShrink: 0,
      ...style
    }
  }, undefined, false, undefined, this);
});
// src/components/ThemeSurface/ThemeSurface.tsx
import { forwardRef as forwardRef23, useEffect as useEffect4, useRef as useRef3 } from "react";
import { semantic as t21 } from "../../core/dist/index.js";
import { useTheme as useTheme2 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV24, Fragment as Fragment2 } from "react/jsx-dev-runtime";
var ThemeSurface = forwardRef23(function ThemeSurface2({
  children,
  global = false,
  style
}, ref) {
  const { resolved, themes } = useTheme2();
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
    return /* @__PURE__ */ jsxDEV24(Fragment2, {
      children
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV24("div", {
    ref,
    style: {
      background: t21.colorSurfacePage,
      ...style
    },
    children
  }, undefined, false, undefined, this);
});
// src/components/Table/Table.tsx
import { forwardRef as forwardRef24 } from "react";
import { semantic as t22 } from "../../core/dist/index.js";
import { useInjectStyles as useInjectStyles2 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var spaceMap = {
  xs: t22.spaceXs,
  sm: t22.spaceSm,
  md: t22.spaceMd,
  lg: t22.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover {
  background: ${t22.colorSurfaceRaised} !important;
}
[data-table-row-selected] > td {
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
    border: `1px solid ${t22.colorBorder}`,
    borderRadius: t22.radiusLg,
    boxShadow: t22.shadowSm
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
  useInjectStyles2(TABLE_STYLES_ID, TABLE_STYLES_CSS);
  return /* @__PURE__ */ jsxDEV25("div", {
    ref,
    style: {
      overflowX: "auto",
      ...wrapperVariants[variant],
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsxDEV25("table", {
      "data-table-density": density,
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: t22.fontSizeSm,
        fontFamily: t22.fontSans,
        color: t22.colorText
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableHeader = forwardRef24(function TableHeader2({ children, style, ...props }, ref) {
  return /* @__PURE__ */ jsxDEV25("thead", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsxDEV25("tr", {
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
  return /* @__PURE__ */ jsxDEV25("th", {
    ref,
    style: {
      padding: `${t22.spaceSm} ${t22.spaceMd}`,
      textAlign: align,
      fontWeight: t22.fontWeightSemibold,
      fontSize: t22.fontSizeXs,
      color: t22.colorTextMuted,
      textTransform: "uppercase",
      letterSpacing: t22.letterSpacingWide,
      borderBottom: `2px solid ${t22.colorBorder}`,
      whiteSpace: "nowrap",
      width: typeof width === "number" ? `${width}px` : width,
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableBody = forwardRef24(function TableBody2({ children, ...props }, ref) {
  return /* @__PURE__ */ jsxDEV25("tbody", {
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
  return /* @__PURE__ */ jsxDEV25("tr", {
    ref,
    "data-table-row-hoverable": hoverable || undefined,
    "data-table-row-selected": selected || undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick,
    onKeyDown: handleKeyDown,
    style: {
      cursor: onClick ? "pointer" : undefined,
      background: selected ? t22.colorSurfaceRaised : undefined,
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
  return /* @__PURE__ */ jsxDEV25("td", {
    ref,
    style: {
      padding: `${t22.spaceSm} ${t22.spaceMd}`,
      borderBottom: `1px solid ${t22.colorBorder}`,
      verticalAlign: "middle",
      textAlign: align,
      color: muted ? t22.colorTextMuted : undefined,
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
  return /* @__PURE__ */ jsxDEV25("tr", {
    ref,
    style: { cursor: "default", ...style },
    ...props,
    children: /* @__PURE__ */ jsxDEV25("td", {
      colSpan,
      style: {
        padding: `${t22.spaceXs} ${t22.spaceMd}`,
        background: t22.colorSurfaceRaised,
        borderBottom: `1px solid ${t22.colorBorder}`,
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
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableEmptyRow = forwardRef24(function TableEmptyRow2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV25("tr", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsxDEV25("td", {
      colSpan,
      style: {
        padding: `${t22.spaceXl} ${t22.spaceMd}`,
        textAlign: "center",
        color: t22.colorTextMuted,
        fontSize: t22.fontSizeSm
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
// src/components/DateRangePicker/DateRangePicker.tsx
import { forwardRef as forwardRef25, useState as useState4, useRef as useRef5, useCallback as useCallback3, useEffect as useEffect5 } from "react";
import { semantic as t26, useInjectStyles as useInjectStyles3 } from "../../core/dist/index.js";

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
  const t23 = stripTime(to).getTime();
  return d >= f && d <= t23;
}
function isDateDisabled(date, minDate, maxDate, disabledDates) {
  const d = stripTime(date).getTime();
  if (minDate && d < stripTime(minDate).getTime())
    return true;
  if (maxDate && d > stripTime(maxDate).getTime())
    return true;
  if (disabledDates) {
    for (const dd of disabledDates) {
      if (isSameDay(date, dd))
        return true;
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
  for (let i = firstDay - 1;i >= 0; i--) {
    const d = new Date(year, month, -i);
    grid.push(d);
  }
  const daysInMonth = getDaysInMonth(year, month);
  for (let d = 1;d <= daysInMonth; d++) {
    grid.push(new Date(year, month, d));
  }
  while (grid.length < 42) {
    const overflow = grid.length - firstDay - daysInMonth + 1;
    grid.push(new Date(year, month + 1, overflow));
  }
  return grid;
}

// src/components/DateRangePicker/CalendarHeader.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV26("div", {
    style: headerStyle,
    children: [
      /* @__PURE__ */ jsxDEV26(IconButton, {
        icon: "chevron-left",
        "aria-label": "Previous month",
        size: 16,
        onClick: onPrev,
        style: { width: 28, height: 28 }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV26("span", {
        style: titleStyle,
        children: [
          MONTH_NAMES[month],
          " ",
          year
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV26(IconButton, {
        icon: "chevron-right",
        "aria-label": "Next month",
        size: 16,
        onClick: onNext,
        style: { width: 28, height: 28 }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/components/DateRangePicker/CalendarGrid.tsx
import { useCallback as useCallback2, useRef as useRef4 } from "react";
import { semantic as t25 } from "../../core/dist/index.js";

// src/components/DateRangePicker/DayCell.tsx
import { semantic as t24 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
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
    ...isToday && !isEndpoint ? { border: `1px solid ${t24.colorActionPrimary}` } : {},
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
  return /* @__PURE__ */ jsxDEV27("td", {
    role: "gridcell",
    style: { padding: 0 },
    children: /* @__PURE__ */ jsxDEV27("button", {
      type: "button",
      className: classNames,
      style: cellStyle,
      tabIndex,
      "aria-selected": isEndpoint || inRange && !isDisabled || undefined,
      "aria-disabled": isDisabled || undefined,
      onClick: () => {
        if (!isDisabled)
          onSelect(date);
      },
      onKeyDown: (e) => onKeyDown(e, date),
      children: date.getDate()
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}

// src/components/DateRangePicker/CalendarGrid.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
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
  const today = useRef4(new Date).current;
  const grid = buildCalendarGrid(year, month);
  const rows = [];
  for (let r = 0;r < 6; r++) {
    rows.push(grid.slice(r * 7, r * 7 + 7));
  }
  const handleKeyDown = useCallback2((e, date) => {
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
  }, [minDate, maxDate, disabledDates, onSelect, onFocusedDateChange]);
  const sortedStart = rangeStart && rangeEnd ? rangeStart.getTime() <= rangeEnd.getTime() ? rangeStart : rangeEnd : rangeStart;
  const sortedEnd = rangeStart && rangeEnd ? rangeStart.getTime() <= rangeEnd.getTime() ? rangeEnd : rangeStart : rangeEnd;
  return /* @__PURE__ */ jsxDEV28("table", {
    style: tableStyle,
    role: "grid",
    "aria-label": "Calendar",
    children: [
      /* @__PURE__ */ jsxDEV28("thead", {
        children: /* @__PURE__ */ jsxDEV28("tr", {
          children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ jsxDEV28("th", {
            scope: "col",
            style: weekdayHeaderStyle,
            children: label
          }, label, false, undefined, this))
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV28("tbody", {
        children: rows.map((row, ri) => /* @__PURE__ */ jsxDEV28("tr", {
          children: row.map((date) => {
            const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);
            const inRange = sortedStart !== null && sortedEnd !== null && isInRange(date, sortedStart, sortedEnd);
            const isFocused = isSameDay(date, focusedDate);
            return /* @__PURE__ */ jsxDEV28(DayCell, {
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
            }, key, false, undefined, this);
          })
        }, ri, false, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/components/DateRangePicker/DateRangePicker.tsx
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var SCOPE = "alttab-drp";
var injectedCSS = `
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
`;
var wrapperStyle2 = {
  position: "relative",
  display: "inline-block",
  width: "100%"
};
var triggerBaseStyle = {
  display: "block",
  width: "100%",
  padding: `${t26.spaceSm} ${t26.spaceMd}`,
  fontSize: t26.fontSizeSm,
  lineHeight: t26.lineHeightTight,
  fontFamily: t26.fontSans,
  color: t26.colorText,
  background: t26.colorSurfaceInput,
  border: `1px solid ${t26.colorBorder}`,
  borderRadius: t26.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
  zIndex: 50,
  marginTop: t26.spaceXs,
  background: t26.colorSurfacePanel,
  border: `1px solid ${t26.colorBorder}`,
  borderRadius: t26.radiusLg,
  boxShadow: t26.shadowMd,
  padding: t26.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle = {
  color: t26.colorTextPlaceholder
};
var DateRangePicker = forwardRef25(function DateRangePicker2({
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
  useInjectStyles3(SCOPE, injectedCSS);
  const [open, setOpen] = useState4(false);
  const [selectionStart, setSelectionStart] = useState4(null);
  const containerRef = useRef5(null);
  const initialDate = value?.from ?? new Date;
  const [viewYear, setViewYear] = useState4(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState4(initialDate.getMonth());
  const [focusedDate, setFocusedDate] = useState4(value?.from ?? new Date);
  const handleFocusedDateChange = useCallback3((date) => {
    setFocusedDate(date);
    setViewYear(date.getFullYear());
    setViewMonth(date.getMonth());
  }, []);
  useEffect5(() => {
    if (!open)
      return;
    const container = containerRef.current;
    if (!container)
      return;
    const btn = container.querySelector('button[tabindex="0"]');
    btn?.focus();
  }, [focusedDate, open]);
  useEffect5(() => {
    if (!open)
      return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setSelectionStart(null);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);
  useEffect5(() => {
    if (!open)
      return;
    function handleKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setSelectionStart(null);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  const handleToggle = useCallback3(() => {
    if (disabled)
      return;
    setOpen((prev) => {
      if (!prev) {
        const base = value?.from ?? new Date;
        setViewYear(base.getFullYear());
        setViewMonth(base.getMonth());
        setFocusedDate(value?.from ?? new Date);
        setSelectionStart(null);
      }
      return !prev;
    });
  }, [disabled, value]);
  const handlePrevMonth = useCallback3(() => {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);
  const handleNextMonth = useCallback3(() => {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);
  const handleDaySelect = useCallback3((date) => {
    if (selectionStart === null) {
      setSelectionStart(date);
    } else {
      const from = selectionStart.getTime() <= date.getTime() ? selectionStart : date;
      const to = selectionStart.getTime() <= date.getTime() ? date : selectionStart;
      onChange({ from, to });
      setSelectionStart(null);
      setOpen(false);
    }
  }, [selectionStart, onChange]);
  let displayText;
  if (value) {
    displayText = `${formatDate(value.from)} – ${formatDate(value.to)}`;
  } else {
    displayText = /* @__PURE__ */ jsxDEV29("span", {
      style: placeholderStyle,
      children: placeholder
    }, undefined, false, undefined, this);
  }
  const calendarStart = selectionStart ?? value?.from ?? null;
  const calendarEnd = selectionStart ? null : value?.to ?? null;
  return /* @__PURE__ */ jsxDEV29("div", {
    ref: (node) => {
      containerRef.current = node;
      if (typeof ref === "function")
        ref(node);
      else if (ref)
        ref.current = node;
    },
    style: { ...wrapperStyle2, ...style },
    children: [
      /* @__PURE__ */ jsxDEV29("button", {
        type: "button",
        className: `${SCOPE}-trigger`,
        style: {
          ...triggerBaseStyle,
          ...hasError ? triggerErrorStyle : {},
          ...disabled ? triggerDisabledStyle : {}
        },
        onClick: handleToggle,
        disabled,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-invalid": hasError || undefined,
        children: displayText
      }, undefined, false, undefined, this),
      open && /* @__PURE__ */ jsxDEV29("div", {
        style: popoverStyle,
        role: "dialog",
        "aria-label": "Date range picker",
        children: [
          /* @__PURE__ */ jsxDEV29(CalendarHeader, {
            year: viewYear,
            month: viewMonth,
            onPrev: handlePrevMonth,
            onNext: handleNextMonth
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV29(CalendarGrid, {
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
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/DatePicker/DatePicker.tsx
import { forwardRef as forwardRef26, useState as useState5, useRef as useRef6, useCallback as useCallback4, useEffect as useEffect6 } from "react";
import { semantic as t27, useInjectStyles as useInjectStyles4 } from "../../core/dist/index.js";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var SCOPE2 = "alttab-dp";
var injectedCSS2 = `
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
`;
var wrapperStyle3 = {
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
  border: `1px solid ${t27.colorBorder}`,
  borderRadius: t27.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
  zIndex: 50,
  marginTop: t27.spaceXs,
  background: t27.colorSurfacePanel,
  border: `1px solid ${t27.colorBorder}`,
  borderRadius: t27.radiusLg,
  boxShadow: t27.shadowMd,
  padding: t27.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle2 = {
  color: t27.colorTextPlaceholder
};
var DatePicker = forwardRef26(function DatePicker2({
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
  useInjectStyles4(SCOPE2, injectedCSS2);
  const [open, setOpen] = useState5(false);
  const containerRef = useRef6(null);
  const initialDate = value ?? new Date;
  const [viewYear, setViewYear] = useState5(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState5(initialDate.getMonth());
  const [focusedDate, setFocusedDate] = useState5(value ?? new Date);
  const handleFocusedDateChange = useCallback4((date) => {
    setFocusedDate(date);
    setViewYear(date.getFullYear());
    setViewMonth(date.getMonth());
  }, []);
  useEffect6(() => {
    if (!open)
      return;
    const container = containerRef.current;
    if (!container)
      return;
    const btn = container.querySelector('button[tabindex="0"]');
    btn?.focus();
  }, [focusedDate, open]);
  useEffect6(() => {
    if (!open)
      return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);
  useEffect6(() => {
    if (!open)
      return;
    function handleKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  const handleToggle = useCallback4(() => {
    if (disabled)
      return;
    setOpen((prev) => {
      if (!prev) {
        const base = value ?? new Date;
        setViewYear(base.getFullYear());
        setViewMonth(base.getMonth());
        setFocusedDate(value ?? new Date);
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
  const handleDaySelect = useCallback4((date) => {
    onChange(date);
    setOpen(false);
  }, [onChange]);
  let displayText;
  if (value) {
    displayText = formatDate(value);
  } else {
    displayText = /* @__PURE__ */ jsxDEV30("span", {
      style: placeholderStyle2,
      children: placeholder
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV30("div", {
    ref: (node) => {
      containerRef.current = node;
      if (typeof ref === "function")
        ref(node);
      else if (ref)
        ref.current = node;
    },
    style: { ...wrapperStyle3, ...style },
    children: [
      /* @__PURE__ */ jsxDEV30("button", {
        type: "button",
        className: `${SCOPE2}-trigger`,
        style: {
          ...triggerBaseStyle2,
          ...hasError ? triggerErrorStyle2 : {},
          ...disabled ? triggerDisabledStyle2 : {}
        },
        onClick: handleToggle,
        disabled,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-invalid": hasError || undefined,
        children: displayText
      }, undefined, false, undefined, this),
      open && /* @__PURE__ */ jsxDEV30("div", {
        style: popoverStyle2,
        role: "dialog",
        "aria-label": "Date picker",
        children: [
          /* @__PURE__ */ jsxDEV30(CalendarHeader, {
            year: viewYear,
            month: viewMonth,
            onPrev: handlePrevMonth,
            onNext: handleNextMonth
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV30(CalendarGrid, {
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
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
export {
  useFocusTrap,
  iconRegistry,
  ThemeSurface,
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
  DateRangePicker,
  DatePicker,
  ConfirmDialog,
  CardSkeleton,
  Card,
  Button,
  Badge
};
