"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AlertBanner: () => AlertBanner,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardSkeleton: () => CardSkeleton,
  ChipPicker: () => ChipPicker,
  Combobox: () => Combobox,
  ConfirmDialog: () => ConfirmDialog,
  DatePicker: () => DatePicker,
  DateRangePicker: () => DateRangePicker,
  EmptyState: () => EmptyState,
  ErrorBoundary: () => ErrorBoundary,
  ExpandableCard: () => ExpandableCard,
  Field: () => Field,
  FormModal: () => FormModal,
  Icon: () => Icon,
  IconArrowLeft: () => IconArrowLeft,
  IconArrowRight: () => IconArrowRight,
  IconButton: () => IconButton,
  IconCheck: () => IconCheck,
  IconCheckCircle: () => IconCheckCircle,
  IconChevronDown: () => IconChevronDown,
  IconChevronLeft: () => IconChevronLeft,
  IconChevronRight: () => IconChevronRight,
  IconChevronUp: () => IconChevronUp,
  IconClose: () => IconClose,
  IconCopy: () => IconCopy,
  IconEdit: () => IconEdit,
  IconError: () => IconError,
  IconExternalLink: () => IconExternalLink,
  IconEye: () => IconEye,
  IconEyeOff: () => IconEyeOff,
  IconFilter: () => IconFilter,
  IconFontProvider: () => IconFontProvider,
  IconInfo: () => IconInfo,
  IconMenu: () => IconMenu,
  IconMinus: () => IconMinus,
  IconMoreVertical: () => IconMoreVertical,
  IconPlus: () => IconPlus,
  IconSearch: () => IconSearch,
  IconSettings: () => IconSettings,
  IconTrash: () => IconTrash,
  IconWarning: () => IconWarning,
  Input: () => Input,
  MetadataTable: () => MetadataTable,
  ModalShell: () => ModalShell,
  Overlay: () => Overlay,
  PageHeader: () => PageHeader,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  RowSkeleton: () => RowSkeleton,
  SearchInput: () => SearchInput,
  SectionLabel: () => SectionLabel,
  SegmentedControl: () => SegmentedControl,
  Select: () => Select,
  ShortcutHelpModal: () => ShortcutHelpModal,
  Skeleton: () => Skeleton,
  Stack: () => Stack,
  StatusDot: () => StatusDot,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCell: () => TableCell,
  TableEmptyRow: () => TableEmptyRow,
  TableFilters: () => TableFilters,
  TableGroupHeader: () => TableGroupHeader,
  TableHeader: () => TableHeader,
  TableHeaderCell: () => TableHeaderCell,
  TableRow: () => TableRow,
  TagChip: () => TagChip,
  Textarea: () => Textarea,
  ThemePicker: () => ThemePicker,
  ThemeSurface: () => ThemeSurface,
  ToastProvider: () => ToastProvider,
  TopBar: () => TopBar,
  iconRegistry: () => iconRegistry,
  useFocusTrap: () => useFocusTrap,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/utils/useFocusTrap.ts
var import_react = require("react");
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
  (0, import_react.useEffect)(() => {
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
__reExport(index_exports, require("../../core/dist/index.cjs"), module.exports);

// src/components/ThemePicker/ThemePicker.tsx
var import_react3 = require("react");
var import_core = require("../../core/dist/index.cjs");
var import_core2 = require("../../core/dist/index.cjs");

// src/components/Icon/Icon.tsx
var import_react2 = require("react");

// src/icons/icons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) });
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18l6-6-6-6" }) });
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9l6 6 6-6" }) });
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 18l-6-6 6-6" }) });
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 15l-6-6-6 6" }) });
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6L9 17l-5-5" }) });
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 4L12 14.01l-3-3" })
  ] });
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] });
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] });
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] });
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 21l-4.35-4.35" })
  ] });
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" }) });
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] });
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M5 12h14" }) });
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }) });
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] });
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" }) });
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18M3 6h18M3 18h18" }) });
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1 1l22 22" })
  ] });
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] });
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) });
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "19", r: "1" })
  ] });
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }) });
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var IconFontContext = (0, import_react2.createContext)(void 0);
function IconFontProvider({ fontClass, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconFontContext.Provider, { value: fontClass, children });
}
var Icon = (0, import_react2.forwardRef)(
  function Icon2({ name, size = 24, fontClass, style, "aria-label": ariaLabel, ...props }, ref) {
    const contextFontClass = (0, import_react2.useContext)(IconFontContext);
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;
    const resolvedFontClass = fontClass ?? contextFontClass;
    if (!IconComponent && resolvedFontClass) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        children: IconComponent ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconComponent, { size }) : null
      }
    );
  }
);

// src/components/ThemePicker/ThemePicker.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  (0, import_core2.useInjectStyles)(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = (0, import_core.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "alttab-theme-picker", children: Array.from(themes.values()).map((def) => {
    const isActive = resolved === def.name;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "button",
      {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "alttab-theme-card__name", children: def.label }),
          descriptions[def.name] && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "alttab-theme-card__desc", children: descriptions[def.name] })
        ]
      },
      def.name
    );
  }) });
}
function CompactView() {
  (0, import_core2.useInjectStyles)(COMPACT_STYLES_ID, compactCSS);
  const { resolved, themes, setTheme } = (0, import_core.useTheme)();
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react3.useState)(-1);
  const containerRef = (0, import_react3.useRef)(null);
  const menuRef = (0, import_react3.useRef)(null);
  const triggerRef = (0, import_react3.useRef)(null);
  const themeList = Array.from(themes.values());
  (0, import_react3.useEffect)(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);
  const handleKeyDown = (0, import_react3.useCallback)((e) => {
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
  (0, import_react3.useEffect)(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  (0, import_react3.useEffect)(() => {
    if (open) {
      const activeIdx = themeList.findIndex((t41) => t41.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]);
  const currentTheme = themeList.find((t41) => t41.name === resolved);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { ref: containerRef, style: { position: "relative" }, onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "button",
      {
        ref: triggerRef,
        className: "alttab-tp-trigger",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--color-action-primary)",
            flexShrink: 0
          } }),
          currentTheme?.label ?? resolved,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: open ? "chevron-up" : "chevron-down", size: 12 })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: {
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
var ThemePicker = (0, import_react3.forwardRef)(
  function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
    if (variant === "compact") {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ref, style: { display: "inline-block" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CompactView, {}) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(GridView, { descriptions }) });
  }
);

// src/components/Button/Button.tsx
var import_react4 = require("react");
var import_core3 = require("../../core/dist/index.cjs");
var import_jsx_runtime4 = require("react/jsx-runtime");
var variantStyles = {
  primary: {
    background: import_core3.semantic.colorActionPrimary,
    color: import_core3.semantic.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: import_core3.semantic.colorActionSecondary,
    color: import_core3.semantic.colorText,
    border: `${import_core3.semantic.borderWidthDefault} solid ${import_core3.semantic.colorBorder}`
  },
  destructive: {
    background: import_core3.semantic.colorActionDestructive,
    color: import_core3.semantic.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: import_core3.semantic.colorText,
    border: `${import_core3.semantic.borderWidthDefault} solid transparent`
  }
};
var sizeStyles = {
  sm: {
    padding: `${import_core3.semantic.spaceXs} ${import_core3.semantic.spaceSm}`,
    fontSize: import_core3.semantic.fontSizeSm,
    lineHeight: import_core3.semantic.lineHeightTight
  },
  md: {
    padding: `${import_core3.semantic.spaceSm} ${import_core3.semantic.spaceMd}`,
    fontSize: import_core3.semantic.fontSizeSm,
    lineHeight: import_core3.semantic.lineHeightTight
  },
  lg: {
    padding: `${import_core3.semantic.spaceSm} ${import_core3.semantic.spaceLg}`,
    fontSize: import_core3.semantic.fontSizeBase,
    lineHeight: import_core3.semantic.lineHeightBase
  }
};
var baseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: import_core3.semantic.spaceSm,
  borderRadius: import_core3.semantic.radiusMd,
  fontFamily: import_core3.semantic.fontSans,
  fontWeight: import_core3.semantic.fontWeightMedium,
  cursor: "pointer",
  transition: `background ${import_core3.semantic.transitionBase}, border-color ${import_core3.semantic.transitionBase}, opacity ${import_core3.semantic.transitionBase}`
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
    border: ${import_core3.semantic.borderWidthThick} solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: alttab-btn-spin 600ms linear infinite;
  }
`
);
var iconOnlyPadding = {
  sm: import_core3.semantic.spaceXs,
  md: import_core3.semantic.spaceSm,
  lg: import_core3.semantic.spaceSm
};
var Button = (0, import_react4.forwardRef)(
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
    (0, import_core3.useInjectStyles)(SPINNER_STYLES_ID, spinnerCSS);
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "alttab-btn-spinner" }) : children
      }
    );
  }
);

// src/components/Stack/Stack.tsx
var import_react5 = require("react");
var import_core4 = require("../../core/dist/index.cjs");
var import_jsx_runtime5 = require("react/jsx-runtime");
var gapMap = {
  xs: import_core4.semantic.spaceXs,
  sm: import_core4.semantic.spaceSm,
  md: import_core4.semantic.spaceMd,
  lg: import_core4.semantic.spaceLg,
  xl: import_core4.semantic.spaceXl,
  "2xl": import_core4.semantic.space2xl
};
var Stack = (0, import_react5.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_react6 = require("react");
var import_core5 = require("../../core/dist/index.cjs");
var import_jsx_runtime6 = require("react/jsx-runtime");
var paddingMap = {
  xs: import_core5.semantic.spaceXs,
  sm: import_core5.semantic.spaceSm,
  md: import_core5.semantic.spaceMd,
  lg: import_core5.semantic.spaceLg,
  xl: import_core5.semantic.spaceXl,
  "2xl": import_core5.semantic.space2xl
};
var variantStyles2 = {
  default: {
    background: import_core5.semantic.colorSurfaceSolid,
    border: `${import_core5.semantic.borderWidthDefault} solid ${import_core5.semantic.colorBorder}`,
    boxShadow: import_core5.semantic.shadowSm
  },
  flat: {
    background: import_core5.semantic.colorSurfaceRaised,
    border: `${import_core5.semantic.borderWidthDefault} solid ${import_core5.semantic.colorBorder}`,
    boxShadow: "none"
  },
  elevated: {
    background: import_core5.semantic.colorSurfaceSolid,
    border: `${import_core5.semantic.borderWidthDefault} solid ${import_core5.semantic.colorBorder}`,
    boxShadow: import_core5.semantic.shadowMd
  },
  live: {
    background: import_core5.semantic.colorSurfaceSolid,
    border: `${import_core5.semantic.borderWidthDefault} solid ${import_core5.semantic.colorBorderFocused}`,
    boxShadow: import_core5.semantic.shadowSm
  }
};
var HOVER_STYLES_ID = "4lt7ab-card-hover";
var HOVER_STYLES_CSS = `
[data-card-hover] {
  cursor: pointer;
  transition: transform ${import_core5.semantic.transitionSlow}, border-color ${import_core5.semantic.transitionSlow}, box-shadow ${import_core5.semantic.transitionSlow};
}
[data-card-hover]:hover {
  transform: translateY(-2px);
  border-color: ${import_core5.semantic.colorBorderFocused};
  box-shadow: ${import_core5.semantic.shadowMd};
}
`;
var LIVE_STYLES_ID = "4lt7ab-card-live";
var LIVE_STYLES_CSS = `
@keyframes card-live-pulse {
  0%, 100% { border-color: ${import_core5.semantic.colorBorderFocused}; box-shadow: ${import_core5.semantic.shadowSm}; }
  50% { border-color: ${import_core5.semantic.colorActionPrimary}; box-shadow: 0 0 8px ${import_core5.semantic.colorActionPrimary}; }
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
var Card = (0, import_react6.forwardRef)(
  function Card2({
    variant = "default",
    padding = "lg",
    hover = false,
    children,
    style,
    ...props
  }, ref) {
    (0, import_core5.useInjectStyles)(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    (0, import_core5.useInjectStyles)(LIVE_STYLES_ID, LIVE_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        ref,
        "data-card-hover": hover || void 0,
        "data-card-live": variant === "live" || void 0,
        style: {
          borderRadius: import_core5.semantic.radiusLg,
          padding: paddingMap[padding],
          color: import_core5.semantic.colorText,
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
var import_core6 = require("../../core/dist/index.cjs");
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var labelStyle = {
  display: "block",
  fontSize: import_core6.semantic.fontSizeSm,
  fontWeight: import_core6.semantic.fontWeightMedium,
  lineHeight: import_core6.semantic.lineHeightTight,
  color: import_core6.semantic.colorText,
  fontFamily: import_core6.semantic.fontSans
};
var requiredStyle = {
  color: import_core6.semantic.colorError,
  marginLeft: "0.125rem"
};
var helpStyle = {
  fontSize: import_core6.semantic.fontSizeXs,
  lineHeight: import_core6.semantic.lineHeightTight,
  color: import_core6.semantic.colorTextMuted,
  fontFamily: import_core6.semantic.fontSans,
  margin: 0
};
var errorStyle = {
  fontSize: import_core6.semantic.fontSizeXs,
  lineHeight: import_core6.semantic.lineHeightTight,
  color: import_core6.semantic.colorError,
  fontFamily: import_core6.semantic.fontSans,
  margin: 0
};
var Field = (0, import_react7.forwardRef)(
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
    const autoId = (0, import_react7.useId)();
    const helpId = help ? `${autoId}-help` : void 0;
    const errorId = error ? `${autoId}-error` : void 0;
    const describedBy = [errorId, helpId].filter(Boolean).join(" ") || void 0;
    const enhancedChildren = (0, import_react7.isValidElement)(children) ? (0, import_react7.cloneElement)(children, {
      "aria-describedby": describedBy
    }) : children;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "div",
      {
        ref,
        style: {
          display: "flex",
          flexDirection: "column",
          gap: import_core6.semantic.spaceXs,
          opacity: disabled ? 0.6 : void 0,
          ...style
        },
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor, style: labelStyle, children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: requiredStyle, "aria-hidden": "true", children: "*" })
          ] }),
          enhancedChildren,
          error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: errorId, role: "alert", style: errorStyle, children: error }),
          !error && help && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: helpId, style: helpStyle, children: help })
        ]
      }
    );
  }
);

// src/components/Input/Input.tsx
var import_react8 = require("react");
var import_core7 = require("../../core/dist/index.cjs");
var import_jsx_runtime8 = require("react/jsx-runtime");
var baseStyle = {
  display: "block",
  width: "100%",
  padding: `${import_core7.semantic.spaceSm} ${import_core7.semantic.spaceMd}`,
  fontSize: import_core7.semantic.fontSizeSm,
  lineHeight: import_core7.semantic.lineHeightTight,
  fontFamily: import_core7.semantic.fontSans,
  color: import_core7.semantic.colorText,
  background: import_core7.semantic.colorSurfaceInput,
  border: `${import_core7.semantic.borderWidthDefault} solid ${import_core7.semantic.colorBorder}`,
  borderRadius: import_core7.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core7.semantic.transitionBase}, box-shadow ${import_core7.semantic.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle = {
  borderColor: import_core7.semantic.colorBorderError
};
var disabledStyle = {
  background: import_core7.semantic.colorSurfaceDisabled,
  color: import_core7.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var Input = (0, import_react8.forwardRef)(
  function Input2({
    hasError,
    disabled,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_react9 = require("react");
var import_core8 = require("../../core/dist/index.cjs");
var import_jsx_runtime9 = require("react/jsx-runtime");
var baseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${import_core8.semantic.spaceSm} ${import_core8.semantic.spaceMd}`,
  fontSize: import_core8.semantic.fontSizeSm,
  lineHeight: import_core8.semantic.lineHeightBase,
  fontFamily: import_core8.semantic.fontSans,
  color: import_core8.semantic.colorText,
  background: import_core8.semantic.colorSurfaceInput,
  border: `${import_core8.semantic.borderWidthDefault} solid ${import_core8.semantic.colorBorder}`,
  borderRadius: import_core8.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core8.semantic.transitionBase}, box-shadow ${import_core8.semantic.transitionBase}`,
  boxSizing: "border-box",
  resize: "vertical",
  minHeight: "5rem"
};
var errorBorderStyle2 = {
  borderColor: import_core8.semantic.colorBorderError
};
var disabledStyle2 = {
  background: import_core8.semantic.colorSurfaceDisabled,
  color: import_core8.semantic.colorTextDisabled,
  cursor: "not-allowed",
  resize: "none"
};
var Textarea = (0, import_react9.forwardRef)(
  function Textarea2({
    hasError,
    disabled,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_react10 = require("react");
var import_core9 = require("../../core/dist/index.cjs");
var import_jsx_runtime10 = require("react/jsx-runtime");
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
var Select = (0, import_react10.forwardRef)(function Select2({
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
  (0, import_core9.useInjectStyles)(SELECT_STYLES_ID, selectCSS);
  const optionList = getOptions(options);
  const [open, setOpen] = (0, import_react10.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react10.useState)(-1);
  const [internalValue, setInternalValue] = (0, import_react10.useState)(
    () => defaultValue ?? ""
  );
  const isControlled = controlledValue !== void 0;
  const currentValue = isControlled ? controlledValue : internalValue;
  const containerRef = (0, import_react10.useRef)(null);
  const triggerRef = (0, import_react10.useRef)(null);
  const menuRef = (0, import_react10.useRef)(null);
  const hiddenSelectRef = (0, import_react10.useRef)(null);
  const [dropDirection, setDropDirection] = (0, import_react10.useState)("down");
  (0, import_react10.useEffect)(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(hiddenSelectRef.current);
    } else {
      ref.current = hiddenSelectRef.current;
    }
  }, [ref]);
  if (children) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: wrapperStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
            placeholder && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "", disabled: true, children: placeholder }),
            children
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ChevronSVG, {}) })
    ] });
  }
  const calculateDirection = (0, import_react10.useCallback)(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedHeight = Math.min(optionList.length * 32 + 8, 256);
    setDropDirection(spaceBelow >= estimatedHeight ? "down" : spaceAbove > spaceBelow ? "up" : "down");
  }, [optionList.length]);
  const openMenu = (0, import_react10.useCallback)(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const activeIdx = optionList.findIndex((o) => o.value === currentValue);
    setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
  }, [disabled, calculateDirection, optionList, currentValue]);
  const closeMenu = (0, import_react10.useCallback)(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);
  const selectOption = (0, import_react10.useCallback)(
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
  (0, import_react10.useEffect)(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  (0, import_react10.useEffect)(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  const handleKeyDown = (0, import_react10.useCallback)(
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
    marginTop: import_core9.semantic.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: import_core9.semantic.spaceXs
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { ref: containerRef, style: wrapperStyle, onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "", disabled: true, children: placeholder }),
          optionList.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value))
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ChevronSVG, { rotated: open }) }),
    open && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        ref: menuRef,
        id: listboxId,
        role: "listbox",
        style: {
          ...menuStyle,
          background: import_core9.semantic.colorSurfacePanel,
          border: `${import_core9.semantic.borderWidthDefault} solid ${import_core9.semantic.colorBorder}`,
          borderRadius: import_core9.semantic.radiusMd,
          padding: import_core9.semantic.spaceXs,
          zIndex: import_core9.semantic.zIndexSticky,
          boxShadow: import_core9.semantic.shadowMd,
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
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
  padding: `${import_core9.semantic.spaceSm} ${import_core9.semantic.spaceMd}`,
  fontSize: import_core9.semantic.fontSizeSm,
  lineHeight: import_core9.semantic.lineHeightTight,
  fontFamily: import_core9.semantic.fontSans,
  color: import_core9.semantic.colorText,
  background: import_core9.semantic.colorSurfaceInput,
  border: `${import_core9.semantic.borderWidthDefault} solid ${import_core9.semantic.colorBorder}`,
  borderRadius: import_core9.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core9.semantic.transitionBase}, box-shadow ${import_core9.semantic.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left",
  // Space for custom chevron
  paddingRight: import_core9.semantic.space2xl
};
var chevronStyle = {
  position: "absolute",
  right: import_core9.semantic.spaceSm,
  top: import_core9.semantic.spaceSm,
  pointerEvents: "none",
  color: import_core9.semantic.colorTextSecondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: `calc(${import_core9.semantic.fontSizeSm} * ${import_core9.semantic.lineHeightTight})`
};
var errorBorderStyle3 = {
  borderColor: import_core9.semantic.colorBorderError
};
var disabledStyle3 = {
  background: import_core9.semantic.colorSurfaceDisabled,
  color: import_core9.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var placeholderStyle = {
  color: import_core9.semantic.colorTextPlaceholder
};
function ChevronSVG({ rotated }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        transition: `transform ${import_core9.semantic.transitionBase}`,
        transform: rotated ? "rotate(180deg)" : "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_react11 = require("react");
var import_core10 = require("../../core/dist/index.cjs");
var import_jsx_runtime11 = require("react/jsx-runtime");
var variantStyles3 = {
  default: {
    border: `${import_core10.semantic.borderWidthDefault} solid ${import_core10.semantic.colorBorder}`,
    color: import_core10.semantic.colorTextSecondary
  },
  success: {
    background: import_core10.semantic.colorSuccessBg,
    color: import_core10.semantic.colorSuccess
  },
  warning: {
    background: import_core10.semantic.colorWarningBg,
    color: import_core10.semantic.colorWarning
  },
  error: {
    background: import_core10.semantic.colorErrorBg,
    color: import_core10.semantic.colorError
  },
  info: {
    background: import_core10.semantic.colorInfoBg,
    color: import_core10.semantic.colorInfo
  }
};
var baseStyles2 = {
  display: "inline-block",
  padding: `${import_core10.semantic.spaceXs} ${import_core10.semantic.spaceSm}`,
  borderRadius: import_core10.semantic.radiusFull,
  fontSize: import_core10.semantic.fontSizeXs,
  fontWeight: import_core10.semantic.fontWeightSemibold,
  fontFamily: import_core10.semantic.fontSans,
  textTransform: "uppercase",
  letterSpacing: import_core10.semantic.letterSpacingWide
};
var Badge = (0, import_react11.forwardRef)(
  function Badge2({
    children,
    variant = "default",
    color,
    style,
    ...rest
  }, ref) {
    const colorStyles = color ? { background: `color-mix(in srgb, ${color} 14%, transparent)`, color } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_react12 = require("react");
var import_core11 = require("../../core/dist/index.cjs");
var import_jsx_runtime12 = require("react/jsx-runtime");
var IconButton = (0, import_react12.forwardRef)(
  function IconButton2({
    icon,
    size = 24,
    badge,
    fontClass,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "button",
      {
        ref,
        style: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: import_core11.semantic.radiusFull,
          background: "transparent",
          border: "none",
          color: import_core11.semantic.colorTextMuted,
          cursor: "pointer",
          padding: 0,
          ...style
        },
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { name: icon, size, fontClass }),
          badge && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "span",
            {
              style: {
                position: "absolute",
                top: 2,
                right: 2,
                width: 8,
                height: 8,
                borderRadius: import_core11.semantic.radiusFull,
                background: import_core11.semantic.colorError,
                border: `${import_core11.semantic.borderWidthThick} solid ${import_core11.semantic.colorSurface}`
              }
            }
          )
        ]
      }
    );
  }
);

// src/components/Overlay/Overlay.tsx
var import_react13 = require("react");
var import_core12 = require("../../core/dist/index.cjs");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Overlay = (0, import_react13.forwardRef)(
  function Overlay2({
    onClick,
    zIndex = import_core12.semantic.zIndexSticky,
    style
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        ref,
        role: "presentation",
        onClick,
        style: {
          position: "fixed",
          inset: 0,
          background: import_core12.semantic.colorSurfaceOverlay,
          zIndex,
          ...style
        }
      }
    );
  }
);

// src/components/Skeleton/Skeleton.tsx
var import_react14 = require("react");
var import_core13 = require("../../core/dist/index.cjs");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Skeleton = (0, import_react14.forwardRef)(
  function Skeleton2({
    width = "100%",
    height = 16,
    borderRadius = import_core13.semantic.radiusMd,
    style
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          width,
          height,
          borderRadius,
          background: import_core13.semantic.colorSurfaceRaised,
          ...style
        }
      }
    );
  }
);
var CardSkeleton = (0, import_react14.forwardRef)(
  function CardSkeleton2({ style }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          borderRadius: import_core13.semantic.radiusLg,
          border: `${import_core13.semantic.borderWidthDefault} solid ${import_core13.semantic.colorBorder}`,
          padding: import_core13.semantic.spaceLg,
          display: "flex",
          flexDirection: "column",
          gap: import_core13.semantic.spaceSm,
          ...style
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Skeleton, { width: "60%", height: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Skeleton, { width: "100%", height: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Skeleton, { width: "80%", height: 14 })
        ]
      }
    );
  }
);
var RowSkeleton = (0, import_react14.forwardRef)(
  function RowSkeleton2({ style }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "flex",
          alignItems: "center",
          gap: import_core13.semantic.spaceSm,
          padding: `${import_core13.semantic.spaceSm} 0`,
          ...style
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Skeleton, { width: 32, height: 32, borderRadius: import_core13.semantic.radiusFull }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: import_core13.semantic.spaceXs }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Skeleton, { width: "40%", height: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Skeleton, { width: "70%", height: 12 })
          ] })
        ]
      }
    );
  }
);

// src/components/ProgressBar/ProgressBar.tsx
var import_react15 = require("react");
var import_core14 = require("../../core/dist/index.cjs");
var import_jsx_runtime15 = require("react/jsx-runtime");
var ProgressBar = (0, import_react15.forwardRef)(
  function ProgressBar2({
    segments,
    height = 6,
    "aria-label": ariaLabel,
    style
  }, ref) {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
          background: import_core14.semantic.colorSurfaceRaised,
          ...style
        },
        children: segments.map((segment, i) => {
          const pct = total > 0 ? segment.value / total * 100 : 0;
          return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_react16 = require("react");
var import_core15 = require("../../core/dist/index.cjs");
var import_jsx_runtime16 = require("react/jsx-runtime");
var EmptyState = (0, import_react16.forwardRef)(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    style,
    children,
    action
  }, ref) {
    const content = /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Stack, { align: "center", gap: "sm", style: { padding: import_core15.semantic.spaceXl, ...style }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { name: icon, size: 32, style: { color: import_core15.semantic.colorTextMuted } }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "span",
        {
          style: {
            color: import_core15.semantic.colorTextSecondary,
            fontSize: import_core15.semantic.fontSizeSm,
            textAlign: "center",
            fontFamily: import_core15.semantic.fontSans
          },
          children: message
        }
      ),
      children,
      action && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { marginTop: import_core15.semantic.spaceSm }, children: action })
    ] });
    if (variant === "card") {
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Card, { ref, variant: "flat", children: content });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { ref, children: content });
  }
);

// src/components/Pagination/Pagination.tsx
var import_react17 = require("react");
var import_core16 = require("../../core/dist/index.cjs");
var import_jsx_runtime17 = require("react/jsx-runtime");
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = (0, import_react17.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        ref,
        className,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: import_core16.semantic.spaceSm,
          ...style
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              disabled: page <= 1,
              onClick: () => onPageChange(page - 1),
              children: resolvedLabels.previous
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
            "span",
            {
              style: {
                color: import_core16.semantic.colorTextMuted,
                fontSize: import_core16.semantic.fontSizeSm,
                fontFamily: import_core16.semantic.fontSans
              },
              children: [
                resolvedLabels.pageOf(page, totalPages),
                " (",
                total,
                " total)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_react18 = require("react");
var import_core17 = require("../../core/dist/index.cjs");
var import_jsx_runtime18 = require("react/jsx-runtime");
var PageHeader = (0, import_react18.forwardRef)(
  function PageHeader2({
    title,
    subtitle,
    indicator,
    trailing,
    style,
    className,
    level = 2
  }, ref) {
    const heading = (0, import_react18.createElement)(
      `h${level}`,
      {
        style: {
          margin: 0,
          fontFamily: import_core17.semantic.fontSans,
          fontWeight: import_core17.semantic.fontWeightBold,
          color: import_core17.semantic.colorText
        }
      },
      title
    );
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: import_core17.semantic.spaceSm }, children: [
              heading,
              indicator
            ] }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "span",
              {
                style: {
                  color: import_core17.semantic.colorTextMuted,
                  fontSize: import_core17.semantic.fontSizeSm
                },
                children: subtitle
              }
            )
          ] }),
          trailing && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: trailing })
        ]
      }
    );
  }
);

// src/components/TagChip/TagChip.tsx
var import_react19 = require("react");
var import_core18 = require("../../core/dist/index.cjs");
var import_jsx_runtime19 = require("react/jsx-runtime");
var TagChip = (0, import_react19.forwardRef)(
  function TagChip2({
    name,
    prefix,
    onRemove,
    style
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "span",
      {
        ref,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: import_core18.semantic.spaceXs,
          fontSize: import_core18.semantic.fontSizeXs,
          color: import_core18.semantic.colorActionPrimary,
          background: import_core18.semantic.colorSurfaceRaised,
          borderRadius: import_core18.semantic.radiusFull,
          padding: "2px 8px",
          fontFamily: import_core18.semantic.fontSans,
          ...style
        },
        children: [
          prefix && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { style: { color: import_core18.semantic.colorTextMuted }, children: [
            prefix,
            ":"
          ] }),
          name,
          onRemove && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            IconButton,
            {
              icon: "close",
              size: 12,
              onClick: onRemove,
              "aria-label": `Remove ${name}`,
              style: { width: 18, height: 18, color: import_core18.semantic.colorActionPrimary }
            }
          )
        ]
      }
    );
  }
);

// src/components/ExpandableCard/ExpandableCard.tsx
var import_core19 = require("../../core/dist/index.cjs");
var import_react20 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var ExpandableCard = (0, import_react20.forwardRef)(
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
    const [internalOpen, setInternalOpen] = (0, import_react20.useState)(defaultOpen);
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const panelId = (0, import_react20.useId)();
    const handleToggle = () => {
      const next = !isOpen;
      if (controlledOpen === void 0) {
        setInternalOpen(next);
      }
      onToggle?.(next);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Card, { ref, variant, padding: "xs", style, children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "button",
          {
            type: "button",
            onClick: handleToggle,
            "aria-expanded": isOpen,
            "aria-controls": panelId,
            style: {
              display: "flex",
              alignItems: "center",
              gap: import_core19.semantic.spaceSm,
              padding: `${import_core19.semantic.spaceSm} ${import_core19.semantic.spaceMd}`,
              cursor: "pointer",
              borderRadius: import_core19.semantic.radiusMd,
              transition: `background ${import_core19.semantic.transitionBase}`,
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              flex: 1
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
                    transition: `transform ${import_core19.semantic.transitionSlow}`,
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconChevronRight, { size: 20 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                "span",
                {
                  style: {
                    fontWeight: import_core19.semantic.fontWeightSemibold,
                    fontFamily: import_core19.semantic.fontSans,
                    color: import_core19.semantic.colorText,
                    fontSize: import_core19.semantic.fontSizeSm
                  },
                  children: title
                }
              )
            ]
          }
        ),
        headerAction && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { style: { padding: `0 ${import_core19.semantic.spaceMd}` }, children: headerAction })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "div",
        {
          id: panelId,
          role: "region",
          style: {
            display: "grid",
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            transition: `grid-template-rows ${import_core19.semantic.transitionSlow}`
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { style: { padding: `${import_core19.semantic.spaceSm} ${import_core19.semantic.spaceMd} ${import_core19.semantic.spaceMd}` }, children }) })
        }
      )
    ] });
  }
);

// src/components/ModalShell/ModalShell.tsx
var import_react21 = require("react");
var import_react_dom = require("react-dom");
var import_core20 = require("../../core/dist/index.cjs");
var import_jsx_runtime21 = require("react/jsx-runtime");
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: import_core20.semantic.fontWeightSemibold,
  fontFamily: import_core20.semantic.fontSans,
  color: import_core20.semantic.colorText,
  fontSize: import_core20.semantic.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: import_core20.semantic.spaceSm
});
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = (0, import_react21.forwardRef)(
  function ModalShell2({
    onClose,
    children,
    maxWidth = 480,
    zIndex = import_core20.semantic.zIndexModal,
    style,
    titleId,
    "aria-label": ariaLabel,
    role = "dialog"
  }, ref) {
    const generatedId = (0, import_react21.useId)();
    const resolvedLabelId = titleId ?? generatedId;
    const internalRef = (0, import_react21.useRef)(null);
    const setRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    useFocusTrap(internalRef);
    (0, import_react21.useEffect)(() => {
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
    (0, import_react21.useEffect)(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    return (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Overlay, { onClick: onClose, zIndex }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              "div",
              {
                ref: setRefs,
                role,
                "aria-modal": "true",
                "aria-labelledby": ariaLabel ? void 0 : resolvedLabelId,
                "aria-label": ariaLabel,
                tabIndex: -1,
                style: {
                  background: import_core20.semantic.colorSurface,
                  color: import_core20.semantic.colorText,
                  borderRadius: import_core20.semantic.radiusLg,
                  boxShadow: import_core20.semantic.shadowLg,
                  border: `${import_core20.semantic.borderWidthDefault} solid ${import_core20.semantic.colorBorder}`,
                  padding: import_core20.semantic.spaceXl,
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
var import_react22 = require("react");
var import_core21 = require("../../core/dist/index.cjs");
var import_jsx_runtime22 = require("react/jsx-runtime");
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = (0, import_react22.forwardRef)(
  function ConfirmDialog2({
    title,
    message,
    confirmLabel = "Confirm",
    onConfirm,
    onCancel,
    children,
    variant = "destructive"
  }, ref) {
    const [loading, setLoading] = (0, import_react22.useState)(false);
    const titleId = (0, import_react22.useId)();
    const handleConfirm = async () => {
      setLoading(true);
      try {
        await onConfirm();
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(ModalShell, { ref, onClose: onCancel, role: "alertdialog", titleId, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "p",
        {
          style: {
            margin: `${import_core21.semantic.spaceSm} 0 ${children ? "0" : import_core21.semantic.spaceLg}`,
            color: import_core21.semantic.colorTextMuted,
            fontSize: import_core21.semantic.fontSizeSm,
            fontFamily: import_core21.semantic.fontSans
          },
          children: message
        }
      ),
      children && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { margin: `${import_core21.semantic.spaceSm} 0 ${import_core21.semantic.spaceLg}` }, children }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/FormModal/FormModal.tsx
var import_react23 = require("react");
var import_core22 = require("../../core/dist/index.cjs");
var import_jsx_runtime23 = require("react/jsx-runtime");
var FormModal = (0, import_react23.forwardRef)(
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
    const [internalLoading, setInternalLoading] = (0, import_react23.useState)(false);
    const titleId = (0, import_react23.useId)();
    const isLoading = externalLoading || internalLoading;
    const handleSubmit = async () => {
      setInternalLoading(true);
      try {
        await onSubmit();
      } finally {
        setInternalLoading(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(ModalShell, { ref, onClose: onCancel, titleId, maxWidth, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "div",
        {
          style: {
            margin: `${import_core22.semantic.spaceMd} 0 ${import_core22.semantic.spaceLg}`,
            overflowY: "auto"
          },
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Button, { variant: "ghost", onClick: onCancel, children: cancelLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Button, { variant: "primary", onClick: handleSubmit, loading: isLoading, children: submitLabel })
      ] })
    ] });
  }
);

// src/components/StatusDot/StatusDot.tsx
var import_react24 = require("react");
var import_core23 = require("../../core/dist/index.cjs");
var import_jsx_runtime24 = require("react/jsx-runtime");
var variantColors = {
  default: import_core23.semantic.colorTextMuted,
  success: import_core23.semantic.colorSuccess,
  warning: import_core23.semantic.colorWarning,
  error: import_core23.semantic.colorError,
  info: import_core23.semantic.colorInfo
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
var StatusDot = (0, import_react24.forwardRef)(
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
    (0, import_core23.useInjectStyles)(PULSE_STYLES_ID, PULSE_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
          borderRadius: import_core23.semantic.radiusFull,
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
var import_react25 = require("react");
var import_core24 = require("../../core/dist/index.cjs");
var import_core25 = require("../../core/dist/index.cjs");
var import_jsx_runtime25 = require("react/jsx-runtime");
var ThemeSurface = (0, import_react25.forwardRef)(
  function ThemeSurface2({
    children,
    global = false,
    style
  }, ref) {
    const { resolved } = (0, import_core25.useTheme)();
    const prevBodyBgRef = (0, import_react25.useRef)("");
    const prevBodyColorRef = (0, import_react25.useRef)("");
    (0, import_react25.useEffect)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "div",
      {
        ref,
        style: {
          background: import_core24.semantic.colorSurfacePage,
          ...style
        },
        children
      }
    );
  }
);

// src/components/Table/Table.tsx
var import_react26 = require("react");
var import_core26 = require("../../core/dist/index.cjs");
var import_core27 = require("../../core/dist/index.cjs");
var import_jsx_runtime26 = require("react/jsx-runtime");
var spaceMap = {
  xs: import_core26.semantic.spaceXs,
  sm: import_core26.semantic.spaceSm,
  md: import_core26.semantic.spaceMd,
  lg: import_core26.semantic.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${import_core26.semantic.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${import_core26.semantic.colorSurfaceRaised};
  border-bottom-color: ${import_core26.semantic.colorSurfaceRaised};
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
  background: ${import_core26.semantic.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${import_core26.semantic.borderWidthDefault} solid ${import_core26.semantic.colorBorder}`,
    borderRadius: import_core26.semantic.radiusLg,
    boxShadow: import_core26.semantic.shadowSm
  },
  flat: {}
};
var Table = (0, import_react26.forwardRef)(
  function Table2({
    variant = "default",
    density = "md",
    children,
    style,
    ...props
  }, ref) {
    (0, import_core27.useInjectStyles)(TABLE_STYLES_ID, TABLE_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        ref,
        style: {
          overflowX: "auto",
          ...wrapperVariants[variant],
          ...style
        },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "table",
          {
            "data-table-density": density,
            style: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: import_core26.semantic.fontSizeSm,
              fontFamily: import_core26.semantic.fontSans,
              color: import_core26.semantic.colorText
            },
            children
          }
        )
      }
    );
  }
);
var TableHeader = (0, import_react26.forwardRef)(
  function TableHeader2({ children, style, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("thead", { ref, style, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { children }) });
  }
);
var TableHeaderCell = (0, import_react26.forwardRef)(
  function TableHeaderCell2({
    align = "left",
    width,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "th",
      {
        ref,
        style: {
          padding: `${import_core26.semantic.spaceSm} ${import_core26.semantic.spaceMd}`,
          textAlign: align,
          fontWeight: import_core26.semantic.fontWeightSemibold,
          fontSize: import_core26.semantic.fontSizeXs,
          color: import_core26.semantic.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: import_core26.semantic.letterSpacingWide,
          borderBottom: `${import_core26.semantic.borderWidthThick} solid ${import_core26.semantic.colorBorder}`,
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
var TableBody = (0, import_react26.forwardRef)(
  function TableBody2({ children, ...props }, ref) {
    let dataRowIndex = 0;
    const styledChildren = import_react26.Children.map(children, (child) => {
      if (!(0, import_react26.isValidElement)(child)) return child;
      const childProps = child.props;
      if (child.type === TableGroupHeader || child.type === TableEmptyRow) {
        return child;
      }
      const isEven = dataRowIndex % 2 === 1;
      dataRowIndex++;
      if (!isEven || childProps.selected) return child;
      const cells = import_react26.Children.map(childProps.children, (cell) => {
        if (!(0, import_react26.isValidElement)(cell)) return cell;
        const cellStyle = cell.props.style;
        return (0, import_react26.cloneElement)(cell, {
          style: { ...cellStyle, background: "color-mix(in srgb, var(--color-text) 5%, transparent)" }
        });
      });
      return (0, import_react26.cloneElement)(child, {}, cells);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tbody", { ref, ...props, children: styledChildren });
  }
);
var TableRow = (0, import_react26.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var TableCell = (0, import_react26.forwardRef)(
  function TableCell2({
    align = "left",
    truncate = false,
    muted = false,
    width,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "td",
      {
        ref,
        style: {
          padding: `${import_core26.semantic.spaceSm} ${import_core26.semantic.spaceMd}`,
          borderBottom: `${import_core26.semantic.borderWidthDefault} solid ${import_core26.semantic.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? import_core26.semantic.colorTextMuted : void 0,
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
var TableGroupHeader = (0, import_react26.forwardRef)(
  function TableGroupHeader2({
    colSpan,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { ref, style: { cursor: "default", ...style }, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "td",
      {
        colSpan,
        style: {
          padding: `${import_core26.semantic.spaceXs} ${import_core26.semantic.spaceMd}`,
          background: import_core26.semantic.colorSurfaceRaised,
          borderBottom: `${import_core26.semantic.borderWidthDefault} solid ${import_core26.semantic.colorBorder}`,
          fontSize: import_core26.semantic.fontSizeXs,
          fontWeight: import_core26.semantic.fontWeightBold,
          letterSpacing: import_core26.semantic.letterSpacingWide,
          textTransform: "uppercase",
          color: import_core26.semantic.colorTextMuted,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children
      }
    ) });
  }
);
var TableEmptyRow = (0, import_react26.forwardRef)(
  function TableEmptyRow2({
    colSpan,
    children,
    style,
    ...props
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { ref, style, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "td",
      {
        colSpan,
        style: {
          padding: `${import_core26.semantic.spaceXl} ${import_core26.semantic.spaceMd}`,
          textAlign: "center",
          color: import_core26.semantic.colorTextMuted,
          fontSize: import_core26.semantic.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/DateRangePicker/DateRangePicker.tsx
var import_react28 = require("react");
var import_core31 = require("../../core/dist/index.cjs");

// src/components/DateRangePicker/CalendarHeader.tsx
var import_core28 = require("../../core/dist/index.cjs");

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
var import_jsx_runtime27 = require("react/jsx-runtime");
var headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${import_core28.semantic.spaceXs} 0`
};
var titleStyle = {
  fontSize: import_core28.semantic.fontSizeSm,
  fontWeight: import_core28.semantic.fontWeightSemibold,
  fontFamily: import_core28.semantic.fontSans,
  color: import_core28.semantic.colorText,
  margin: 0,
  userSelect: "none"
};
function CalendarHeader({
  year,
  month,
  onPrev,
  onNext
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: headerStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      IconButton,
      {
        icon: "chevron-left",
        "aria-label": "Previous month",
        size: 16,
        onClick: onPrev,
        style: { width: 28, height: 28 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { style: titleStyle, children: [
      MONTH_NAMES[month],
      " ",
      year
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
var import_react27 = require("react");
var import_core30 = require("../../core/dist/index.cjs");

// src/components/DateRangePicker/DayCell.tsx
var import_core29 = require("../../core/dist/index.cjs");
var import_jsx_runtime28 = require("react/jsx-runtime");
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: import_core29.semantic.spaceXl,
  height: import_core29.semantic.spaceXl,
  border: "none",
  borderRadius: import_core29.semantic.radiusSm,
  fontSize: import_core29.semantic.fontSizeSm,
  fontFamily: import_core29.semantic.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: import_core29.semantic.colorText,
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
    ...isOutsideMonth ? { color: import_core29.semantic.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${import_core29.semantic.borderWidthDefault} solid ${import_core29.semantic.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? { background: `color-mix(in srgb, ${import_core29.semantic.colorActionPrimary} 15%, transparent)` } : {},
    ...isEndpoint ? { background: import_core29.semantic.colorActionPrimary, color: import_core29.semantic.colorTextInverse } : {},
    ...isDisabled ? {
      color: import_core29.semantic.colorTextDisabled,
      pointerEvents: "none",
      cursor: "default",
      opacity: 0.5
    } : {}
  };
  const classNames = [
    scopeClass + "-day",
    ...isDisabled ? [] : [scopeClass + "-day--enabled"]
  ].join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { role: "gridcell", style: { padding: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
var import_jsx_runtime29 = require("react/jsx-runtime");
var tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed"
};
var weekdayHeaderStyle = {
  fontSize: import_core30.semantic.fontSizeXs,
  fontFamily: import_core30.semantic.fontSans,
  fontWeight: import_core30.semantic.fontWeightMedium,
  color: import_core30.semantic.colorTextMuted,
  textAlign: "center",
  padding: `${import_core30.semantic.spaceXs} 0`,
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
  const today = (0, import_react27.useRef)(/* @__PURE__ */ new Date()).current;
  const grid = buildCalendarGrid(year, month);
  const rows = [];
  for (let r = 0; r < 6; r++) {
    rows.push(grid.slice(r * 7, r * 7 + 7));
  }
  const handleKeyDown = (0, import_react27.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("table", { style: tableStyle, role: "grid", "aria-label": "Calendar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("th", { scope: "col", style: weekdayHeaderStyle, children: label }, label)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children: row.map((date) => {
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);
      const inRange = sortedStart !== null && sortedEnd !== null && isInRange(date, sortedStart, sortedEnd);
      const isFocused = isSameDay(date, focusedDate);
      return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_jsx_runtime30 = require("react/jsx-runtime");
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-day--enabled:hover {
    background: ${import_core31.semantic.colorSurfaceRaised} !important;
  }
  .${SCOPE}-day--enabled:focus-visible {
    outline: ${import_core31.semantic.focusRingWidth} solid ${import_core31.semantic.focusRingColor};
    outline-offset: ${import_core31.semantic.focusRingOffset};
  }
  .${SCOPE}-trigger:focus-visible {
    border-color: ${import_core31.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core31.semantic.focusRingWidth} ${import_core31.semantic.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${import_core31.semantic.colorBorderFocused};
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
  padding: `${import_core31.semantic.spaceSm} ${import_core31.semantic.spaceMd}`,
  fontSize: import_core31.semantic.fontSizeSm,
  lineHeight: import_core31.semantic.lineHeightTight,
  fontFamily: import_core31.semantic.fontSans,
  color: import_core31.semantic.colorText,
  background: import_core31.semantic.colorSurfaceInput,
  border: `${import_core31.semantic.borderWidthDefault} solid ${import_core31.semantic.colorBorder}`,
  borderRadius: import_core31.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core31.semantic.transitionBase}, box-shadow ${import_core31.semantic.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle = {
  borderColor: import_core31.semantic.colorBorderError
};
var triggerDisabledStyle = {
  background: import_core31.semantic.colorSurfaceDisabled,
  color: import_core31.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: import_core31.semantic.zIndexDropdown,
  marginTop: import_core31.semantic.spaceXs,
  background: import_core31.semantic.colorSurfacePanel,
  border: `${import_core31.semantic.borderWidthDefault} solid ${import_core31.semantic.colorBorder}`,
  borderRadius: import_core31.semantic.radiusLg,
  boxShadow: import_core31.semantic.shadowMd,
  padding: import_core31.semantic.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle2 = {
  color: import_core31.semantic.colorTextPlaceholder
};
var DateRangePicker = (0, import_react28.forwardRef)(
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
    (0, import_core31.useInjectStyles)(SCOPE, injectedCSS);
    const [open, setOpen] = (0, import_react28.useState)(false);
    const [selectionStart, setSelectionStart] = (0, import_react28.useState)(null);
    const containerRef = (0, import_react28.useRef)(null);
    const initialDate = value?.from ?? /* @__PURE__ */ new Date();
    const [viewYear, setViewYear] = (0, import_react28.useState)(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = (0, import_react28.useState)(initialDate.getMonth());
    const [focusedDate, setFocusedDate] = (0, import_react28.useState)(
      value?.from ?? /* @__PURE__ */ new Date()
    );
    const handleFocusedDateChange = (0, import_react28.useCallback)((date) => {
      setFocusedDate(date);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }, []);
    (0, import_react28.useEffect)(() => {
      if (!open) return;
      const container = containerRef.current;
      if (!container) return;
      const btn = container.querySelector(
        'button[tabindex="0"]'
      );
      btn?.focus();
    }, [focusedDate, open]);
    (0, import_react28.useEffect)(() => {
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
    (0, import_react28.useEffect)(() => {
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
    const handleToggle = (0, import_react28.useCallback)(() => {
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
    const handlePrevMonth = (0, import_react28.useCallback)(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);
    const handleNextMonth = (0, import_react28.useCallback)(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);
    const handleDaySelect = (0, import_react28.useCallback)(
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
      displayText = /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { style: placeholderStyle2, children: placeholder });
    }
    const calendarStart = selectionStart ?? value?.from ?? null;
    const calendarEnd = selectionStart ? null : value?.to ?? null;
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: { ...wrapperStyle2, ...style },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
          open && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { style: popoverStyle, role: "dialog", "aria-label": "Date range picker", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
              CalendarHeader,
              {
                year: viewYear,
                month: viewMonth,
                onPrev: handlePrevMonth,
                onNext: handleNextMonth
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
var import_react29 = require("react");
var import_core32 = require("../../core/dist/index.cjs");
var import_jsx_runtime31 = require("react/jsx-runtime");
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-day--enabled:hover {
    background: ${import_core32.semantic.colorSurfaceRaised} !important;
  }
  .${SCOPE2}-day--enabled:focus-visible {
    outline: ${import_core32.semantic.focusRingWidth} solid ${import_core32.semantic.focusRingColor};
    outline-offset: ${import_core32.semantic.focusRingOffset};
  }
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${import_core32.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core32.semantic.focusRingWidth} ${import_core32.semantic.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${import_core32.semantic.colorBorderFocused};
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
  padding: `${import_core32.semantic.spaceSm} ${import_core32.semantic.spaceMd}`,
  fontSize: import_core32.semantic.fontSizeSm,
  lineHeight: import_core32.semantic.lineHeightTight,
  fontFamily: import_core32.semantic.fontSans,
  color: import_core32.semantic.colorText,
  background: import_core32.semantic.colorSurfaceInput,
  border: `${import_core32.semantic.borderWidthDefault} solid ${import_core32.semantic.colorBorder}`,
  borderRadius: import_core32.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core32.semantic.transitionBase}, box-shadow ${import_core32.semantic.transitionBase}`,
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle2 = {
  borderColor: import_core32.semantic.colorBorderError
};
var triggerDisabledStyle2 = {
  background: import_core32.semantic.colorSurfaceDisabled,
  color: import_core32.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: import_core32.semantic.zIndexDropdown,
  marginTop: import_core32.semantic.spaceXs,
  background: import_core32.semantic.colorSurfacePanel,
  border: `${import_core32.semantic.borderWidthDefault} solid ${import_core32.semantic.colorBorder}`,
  borderRadius: import_core32.semantic.radiusLg,
  boxShadow: import_core32.semantic.shadowMd,
  padding: import_core32.semantic.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle3 = {
  color: import_core32.semantic.colorTextPlaceholder
};
var DatePicker = (0, import_react29.forwardRef)(
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
    (0, import_core32.useInjectStyles)(SCOPE2, injectedCSS2);
    const [open, setOpen] = (0, import_react29.useState)(false);
    const containerRef = (0, import_react29.useRef)(null);
    const initialDate = value ?? /* @__PURE__ */ new Date();
    const [viewYear, setViewYear] = (0, import_react29.useState)(initialDate.getFullYear());
    const [viewMonth, setViewMonth] = (0, import_react29.useState)(initialDate.getMonth());
    const [focusedDate, setFocusedDate] = (0, import_react29.useState)(value ?? /* @__PURE__ */ new Date());
    const handleFocusedDateChange = (0, import_react29.useCallback)((date) => {
      setFocusedDate(date);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }, []);
    (0, import_react29.useEffect)(() => {
      if (!open) return;
      const container = containerRef.current;
      if (!container) return;
      const btn = container.querySelector(
        'button[tabindex="0"]'
      );
      btn?.focus();
    }, [focusedDate, open]);
    (0, import_react29.useEffect)(() => {
      if (!open) return;
      function handleMouseDown(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleMouseDown);
      return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [open]);
    (0, import_react29.useEffect)(() => {
      if (!open) return;
      function handleKey(e) {
        if (e.key === "Escape") {
          setOpen(false);
        }
      }
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }, [open]);
    const handleToggle = (0, import_react29.useCallback)(() => {
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
    const handlePrevMonth = (0, import_react29.useCallback)(() => {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }, []);
    const handleNextMonth = (0, import_react29.useCallback)(() => {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }, []);
    const handleDaySelect = (0, import_react29.useCallback)(
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
      displayText = /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { style: placeholderStyle3, children: placeholder });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: { ...wrapperStyle3, ...style },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
          open && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { style: popoverStyle2, role: "dialog", "aria-label": "Date picker", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              CalendarHeader,
              {
                year: viewYear,
                month: viewMonth,
                onPrev: handlePrevMonth,
                onNext: handleNextMonth
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
var import_core33 = require("../../core/dist/index.cjs");
var import_jsx_runtime32 = require("react/jsx-runtime");
var titleStyles = {
  margin: 0,
  marginBottom: import_core33.semantic.spaceMd,
  fontSize: import_core33.semantic.fontSizeLg,
  fontWeight: import_core33.semantic.fontWeightSemibold,
  fontFamily: import_core33.semantic.fontSans,
  color: import_core33.semantic.colorText
};
var listStyles = {
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: import_core33.semantic.spaceSm
};
var rowStyles = {
  display: "flex",
  flexDirection: "column",
  gap: import_core33.semantic.spaceXs,
  padding: `${import_core33.semantic.spaceSm} 0`,
  borderBottom: `${import_core33.semantic.borderWidthDefault} solid ${import_core33.semantic.colorBorder}`
};
var labelStyles = {
  fontSize: import_core33.semantic.fontSizeXs,
  fontWeight: import_core33.semantic.fontWeightSemibold,
  fontFamily: import_core33.semantic.fontSans,
  color: import_core33.semantic.colorTextMuted,
  textTransform: "uppercase",
  letterSpacing: import_core33.semantic.letterSpacingWide
};
var valueStyles = {
  fontSize: import_core33.semantic.fontSizeSm,
  fontFamily: import_core33.semantic.fontSans,
  color: import_core33.semantic.colorText
};
function MetadataTable({ items, title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", { style: titleStyles, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("dl", { style: listStyles, children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { style: i === items.length - 1 ? { ...rowStyles, borderBottom: "none" } : rowStyles, children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("dt", { style: labelStyles, children: item.label }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("dd", { style: { ...valueStyles, margin: 0 }, children: item.value })
    ] }, i)) })
  ] });
}

// src/components/ErrorBoundary/ErrorBoundary.tsx
var import_react30 = __toESM(require("react"), 1);
var import_core34 = require("../../core/dist/index.cjs");
var import_jsx_runtime33 = require("react/jsx-runtime");
var ErrorBoundary = class extends import_react30.default.Component {
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Card,
      {
        style: {
          borderColor: import_core34.semantic.colorError,
          borderWidth: "2px"
        },
        padding: "lg",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core34.semantic.spaceMd }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { display: "flex", alignItems: "center", gap: import_core34.semantic.spaceSm }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "span",
            {
              style: {
                fontSize: import_core34.semantic.fontSizeLg,
                color: import_core34.semantic.colorError,
                fontWeight: import_core34.semantic.fontWeightSemibold,
                fontFamily: import_core34.semantic.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: import_core34.semantic.fontMono,
                fontSize: import_core34.semantic.fontSizeSm,
                lineHeight: import_core34.semantic.lineHeightBase,
                color: import_core34.semantic.colorText,
                background: import_core34.semantic.colorSurfaceRaised,
                padding: import_core34.semantic.spaceSm,
                borderRadius: import_core34.semantic.radiusMd,
                wordBreak: "break-word"
              },
              children: error.message
            }
          ),
          error.stack && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "button",
              {
                type: "button",
                onClick: () => this.setState({ showStack: !showStack }),
                style: {
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: import_core34.semantic.fontSans,
                  fontSize: import_core34.semantic.fontSizeSm,
                  color: import_core34.semantic.colorTextMuted,
                  cursor: "pointer",
                  textDecoration: "underline"
                },
                children: showStack ? "Hide stack trace" : "Show stack trace"
              }
            ),
            showStack && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "pre",
              {
                style: {
                  marginTop: import_core34.semantic.spaceSm,
                  fontFamily: import_core34.semantic.fontMono,
                  fontSize: import_core34.semantic.fontSizeXs,
                  lineHeight: import_core34.semantic.lineHeightBase,
                  color: import_core34.semantic.colorTextSecondary,
                  background: import_core34.semantic.colorSurfaceRaised,
                  padding: import_core34.semantic.spaceSm,
                  borderRadius: import_core34.semantic.radiusMd,
                  overflow: "auto",
                  maxHeight: "200px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all"
                },
                children: error.stack
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button, { variant: "secondary", size: "sm", onClick: this.resetErrorBoundary, children: "Try again" }) })
        ] })
      }
    );
  }
};

// src/components/SectionLabel/SectionLabel.tsx
var import_core35 = require("../../core/dist/index.cjs");
var import_jsx_runtime34 = require("react/jsx-runtime");
var baseStyles3 = {
  display: "block",
  fontSize: import_core35.semantic.fontSizeXs,
  fontWeight: import_core35.semantic.fontWeightSemibold,
  fontFamily: import_core35.semantic.fontSans,
  color: import_core35.semantic.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: import_core35.semantic.letterSpacingWide
};
function SectionLabel({
  children,
  style,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { ...rest, style: { ...baseStyles3, ...style }, children });
}

// src/components/Toast/Toast.tsx
var import_react31 = require("react");
var import_react_dom2 = require("react-dom");
var import_core36 = require("../../core/dist/index.cjs");
var import_jsx_runtime35 = require("react/jsx-runtime");
var ToastContext = (0, import_react31.createContext)(null);
function useToast() {
  const ctx = (0, import_react31.useContext)(ToastContext);
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
  success: { bg: import_core36.semantic.colorSuccessBg, fg: import_core36.semantic.colorSuccess, border: import_core36.semantic.colorSuccess },
  error: { bg: import_core36.semantic.colorErrorBg, fg: import_core36.semantic.colorError, border: import_core36.semantic.colorError },
  info: { bg: import_core36.semantic.colorInfoBg, fg: import_core36.semantic.colorInfo, border: import_core36.semantic.colorInfo },
  warning: { bg: import_core36.semantic.colorWarningBg, fg: import_core36.semantic.colorWarning, border: import_core36.semantic.colorWarning }
};
function ToastMessage({
  item,
  onDismiss
}) {
  const [exiting, setExiting] = (0, import_react31.useState)(false);
  const timerRef = (0, import_react31.useRef)(null);
  (0, import_react31.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "div",
    {
      role: "status",
      style: {
        display: "flex",
        alignItems: "center",
        gap: import_core36.semantic.spaceSm,
        padding: `${import_core36.semantic.spaceSm} ${import_core36.semantic.spaceMd}`,
        background: colors.bg,
        color: colors.fg,
        borderRadius: import_core36.semantic.radiusMd,
        borderLeft: `${import_core36.semantic.borderWidthAccent} solid ${colors.border}`,
        boxShadow: import_core36.semantic.shadowMd,
        fontSize: import_core36.semantic.fontSizeSm,
        fontFamily: import_core36.semantic.fontSans,
        fontWeight: import_core36.semantic.fontWeightMedium,
        lineHeight: import_core36.semantic.lineHeightBase,
        pointerEvents: "auto",
        animation: exiting ? "toast-fade-out 200ms ease forwards" : "toast-slide-in 250ms ease",
        maxWidth: "24rem",
        wordBreak: "break-word"
      },
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { style: { flex: 1 }, children: item.message }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "button",
          {
            onClick: () => setExiting(true),
            "aria-label": "Dismiss",
            style: {
              all: "unset",
              cursor: "pointer",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1.25rem",
              height: "1.25rem",
              borderRadius: import_core36.semantic.radiusSm,
              color: colors.fg,
              opacity: 0.7,
              fontSize: import_core36.semantic.fontSizeSm,
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
  (0, import_core36.useInjectStyles)(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: import_core36.semantic.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: import_core36.semantic.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: import_core36.semantic.spaceLg } : { bottom: import_core36.semantic.spaceLg },
    ...position.endsWith("right") ? { right: import_core36.semantic.spaceLg } : { left: import_core36.semantic.spaceLg }
  };
  return (0, import_react_dom2.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { "aria-live": "polite", style: positionStyles, children: toasts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ToastMessage, { item, onDismiss }, item.id)) }),
    document.body
  );
}
var toastCounter = 0;
function ToastProvider({
  children,
  position = "top-right"
}) {
  const [toasts, setToasts] = (0, import_react31.useState)([]);
  const dismiss = (0, import_react31.useCallback)((id) => {
    setToasts((prev) => prev.filter((t41) => t41.id !== id));
  }, []);
  const showToast = (0, import_react31.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(ToastContext.Provider, { value: { showToast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ToastContainer, { toasts, onDismiss: dismiss, position })
  ] });
}

// src/components/Combobox/Combobox.tsx
var import_react32 = require("react");
var import_core37 = require("../../core/dist/index.cjs");
var import_jsx_runtime36 = require("react/jsx-runtime");
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
var Combobox = (0, import_react32.forwardRef)(function Combobox2({
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
  (0, import_core37.useInjectStyles)(COMBOBOX_STYLES_ID, comboboxCSS);
  const [open, setOpen] = (0, import_react32.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react32.useState)(-1);
  const [dropDirection, setDropDirection] = (0, import_react32.useState)("down");
  const containerRef = (0, import_react32.useRef)(null);
  const inputRef = (0, import_react32.useRef)(null);
  const menuRef = (0, import_react32.useRef)(null);
  (0, import_react32.useEffect)(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(inputRef.current);
    } else {
      ref.current = inputRef.current;
    }
  }, [ref]);
  const filtered = (0, import_react32.useMemo)(() => {
    if (!value) return options;
    const lower = value.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(lower));
  }, [options, value]);
  const calculateDirection = (0, import_react32.useCallback)(() => {
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
  const openMenu = (0, import_react32.useCallback)(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    setFocusedIndex(-1);
  }, [disabled, calculateDirection]);
  const closeMenu = (0, import_react32.useCallback)(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);
  const selectOption = (0, import_react32.useCallback)(
    (opt) => {
      onChange(opt.value);
      onSelect?.(opt);
      closeMenu();
      inputRef.current?.focus();
    },
    [onChange, onSelect, closeMenu]
  );
  (0, import_react32.useEffect)(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  (0, import_react32.useEffect)(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  const handleKeyDown = (0, import_react32.useCallback)(
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
  const handleInputChange = (0, import_react32.useCallback)(
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
    marginTop: import_core37.semantic.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: import_core37.semantic.spaceXs
  };
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle4,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
        open && filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "div",
          {
            ref: menuRef,
            id: listboxId,
            role: "listbox",
            style: {
              ...menuStyle,
              background: import_core37.semantic.colorSurfacePanel,
              border: `${import_core37.semantic.borderWidthDefault} solid ${import_core37.semantic.colorBorder}`,
              borderRadius: import_core37.semantic.radiusMd,
              padding: import_core37.semantic.spaceXs,
              zIndex: import_core37.semantic.zIndexSticky,
              boxShadow: import_core37.semantic.shadowMd,
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
              return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                "button",
                {
                  id: `alttab-combobox-opt-${opt.value}`,
                  type: "button",
                  role: "option",
                  "aria-selected": isMatch,
                  className: classes,
                  onClick: () => selectOption(opt),
                  onMouseEnter: () => setFocusedIndex(idx),
                  style: isMatch ? { fontWeight: import_core37.semantic.fontWeightSemibold } : void 0,
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
  padding: `${import_core37.semantic.spaceSm} ${import_core37.semantic.spaceMd}`,
  fontSize: import_core37.semantic.fontSizeSm,
  lineHeight: import_core37.semantic.lineHeightTight,
  fontFamily: import_core37.semantic.fontSans,
  color: import_core37.semantic.colorText,
  background: import_core37.semantic.colorSurfaceInput,
  border: `${import_core37.semantic.borderWidthDefault} solid ${import_core37.semantic.colorBorder}`,
  borderRadius: import_core37.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core37.semantic.transitionBase}, box-shadow ${import_core37.semantic.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle4 = {
  borderColor: import_core37.semantic.colorBorderError
};
var disabledStyle4 = {
  background: import_core37.semantic.colorSurfaceDisabled,
  color: import_core37.semantic.colorTextDisabled,
  cursor: "not-allowed"
};

// src/components/TableFilters/TableFilters.tsx
var import_react33 = require("react");
var import_core38 = require("../../core/dist/index.cjs");
var import_jsx_runtime37 = require("react/jsx-runtime");
function DebouncedTextFilter({
  config,
  value,
  onCommit
}) {
  const delay = config.debounceMs ?? 300;
  const [local, setLocal] = (0, import_react33.useState)(value);
  const timerRef = (0, import_react33.useRef)(null);
  (0, import_react33.useEffect)(() => {
    setLocal(value);
  }, [value]);
  const handleChange = (0, import_react33.useCallback)(
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
  (0, import_react33.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
  const handleChange = (0, import_react33.useCallback)(
    (e) => {
      onCommit(config.key, e.target.value);
    },
    [config.key, onCommit]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
  const handleCommit = (0, import_react33.useCallback)(
    (key, value) => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: import_core38.semantic.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...props,
      children: filters.map((filter) => {
        const val = values[filter.key] ?? "";
        if (filter.type === "text") {
          return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            DebouncedTextFilter,
            {
              config: filter,
              value: val,
              onCommit: handleCommit
            },
            filter.key
          );
        }
        return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
var import_react34 = require("react");
var import_core39 = require("../../core/dist/index.cjs");
var import_jsx_runtime38 = require("react/jsx-runtime");
function ChipPicker({
  items,
  selected,
  onChange,
  style
}) {
  const uid = (0, import_react34.useId)();
  const styleId = `chip-picker-${uid.replace(/:/g, "")}`;
  (0, import_core39.useInjectStyles)(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${import_core39.semantic.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${import_core39.semantic.colorActionSecondaryHover} !important;
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
    fontSize: import_core39.semantic.fontSizeSm,
    fontFamily: import_core39.semantic.fontSans,
    fontWeight: import_core39.semantic.fontWeightMedium,
    lineHeight: import_core39.semantic.lineHeightTight,
    color: isSelected ? import_core39.semantic.colorActionPrimary : import_core39.semantic.colorText,
    background: isSelected ? import_core39.semantic.colorActionSecondary : "transparent",
    border: `${import_core39.semantic.borderWidthDefault} solid ${isSelected ? import_core39.semantic.colorActionPrimary : import_core39.semantic.colorBorder}`,
    borderRadius: import_core39.semantic.radiusFull,
    cursor: "pointer",
    transition: `background ${import_core39.semantic.transitionFast}, border-color ${import_core39.semantic.transitionFast}, color ${import_core39.semantic.transitionFast}`,
    outline: "none"
  });
  const renderChips = (chips) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: import_core39.semantic.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      "data-chip-picker-id": styleId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core39.semantic.spaceMd,
        ...style
      },
      children: groups.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core39.semantic.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SectionLabel, { style: i > 0 ? { marginTop: import_core39.semantic.spaceXs } : void 0, children: group.label }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/SearchInput/SearchInput.tsx
var import_react35 = require("react");
var import_core40 = require("../../core/dist/index.cjs");
var import_jsx_runtime39 = require("react/jsx-runtime");
var STYLE_ID2 = "4lt7ab-search-input";
var hoverFocusCSS = `
  .search-input-wrapper:focus-within {
    border-color: ${import_core40.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core40.semantic.focusRingWidth} ${import_core40.semantic.focusRingColor};
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
  gap: import_core40.semantic.spaceXs,
  width: "100%",
  padding: `${import_core40.semantic.spaceSm} ${import_core40.semantic.spaceMd}`,
  fontSize: import_core40.semantic.fontSizeSm,
  lineHeight: import_core40.semantic.lineHeightTight,
  fontFamily: import_core40.semantic.fontSans,
  color: import_core40.semantic.colorText,
  background: import_core40.semantic.colorSurfaceInput,
  border: `${import_core40.semantic.borderWidthDefault} solid ${import_core40.semantic.colorBorder}`,
  borderRadius: import_core40.semantic.radiusMd,
  transition: `border-color ${import_core40.semantic.transitionBase}, box-shadow ${import_core40.semantic.transitionBase}`,
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
  background: import_core40.semantic.colorSurfaceDisabled,
  color: import_core40.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var SearchInput = (0, import_react35.forwardRef)(
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
    (0, import_core40.useInjectStyles)(STYLE_ID2, hoverFocusCSS);
    const [localValue, setLocalValue] = (0, import_react35.useState)(value);
    const timerRef = (0, import_react35.useRef)(null);
    const onSearchRef = (0, import_react35.useRef)(onSearch);
    onSearchRef.current = onSearch;
    (0, import_react35.useEffect)(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = (0, import_react35.useCallback)((e) => {
      const next = e.target.value;
      setLocalValue(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearchRef.current(next);
      }, debounceMs);
    }, [debounceMs]);
    (0, import_react35.useEffect)(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      "div",
      {
        className: "search-input-wrapper",
        style: {
          ...wrapperStyle5,
          ...disabled ? disabledWrapperStyle : {},
          ...style
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Icon, { name: "search", size: 16, style: { color: import_core40.semantic.colorTextMuted, flexShrink: 0 } }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
          trailing && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/SegmentedControl/SegmentedControl.tsx
var import_react36 = require("react");
var import_core41 = require("../../core/dist/index.cjs");
var import_jsx_runtime40 = require("react/jsx-runtime");
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${import_core41.semantic.colorText};
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
  (0, import_core41.useInjectStyles)(STYLE_ID3, hoverCSS);
  const containerRef = (0, import_react36.useRef)(null);
  const [indicator, setIndicator] = (0, import_react36.useState)(null);
  const s = sizes[size];
  const updateIndicator = (0, import_react36.useCallback)(() => {
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
  (0, import_react36.useLayoutEffect)(() => {
    updateIndicator();
  }, [value, segments, updateIndicator]);
  (0, import_react36.useLayoutEffect)(() => {
    const observer = new ResizeObserver(() => updateIndicator());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateIndicator]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "div",
    {
      ref: containerRef,
      role: "group",
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        height: s.height,
        background: import_core41.semantic.colorSurfaceInput,
        borderRadius: import_core41.semantic.radiusFull,
        border: `${import_core41.semantic.borderWidthDefault} solid ${import_core41.semantic.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: import_core41.semantic.radiusFull,
              background: import_core41.semantic.colorActionPrimary,
              transition: `left ${import_core41.semantic.transitionSlow}, width ${import_core41.semantic.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
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
                gap: import_core41.semantic.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: import_core41.semantic.radiusFull,
                background: "transparent",
                color: isActive ? import_core41.semantic.colorTextInverse : import_core41.semantic.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: import_core41.semantic.fontSans,
                fontWeight: isActive ? import_core41.semantic.fontWeightSemibold : import_core41.semantic.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${import_core41.semantic.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: seg.label })
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
var import_react37 = require("react");
var import_core42 = require("../../core/dist/index.cjs");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  info: { bg: import_core42.semantic.colorInfoBg, fg: import_core42.semantic.colorInfo, border: import_core42.semantic.colorInfo },
  warning: { bg: import_core42.semantic.colorWarningBg, fg: import_core42.semantic.colorWarning, border: import_core42.semantic.colorWarning },
  error: { bg: import_core42.semantic.colorErrorBg, fg: import_core42.semantic.colorError, border: import_core42.semantic.colorError },
  success: { bg: import_core42.semantic.colorSuccessBg, fg: import_core42.semantic.colorSuccess, border: import_core42.semantic.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(IconError, { size: 20 }),
  success: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(IconCheckCircle, { size: 20 })
};
var AlertBanner = (0, import_react37.forwardRef)(
  function AlertBanner2({ variant, children, onDismiss, autoDismiss, icon, style }, ref) {
    (0, import_core42.useInjectStyles)(STYLE_ID4, alertBannerCSS);
    const timerRef = (0, import_react37.useRef)(null);
    (0, import_react37.useEffect)(() => {
      if (autoDismiss && onDismiss) {
        timerRef.current = setTimeout(onDismiss, autoDismiss);
        return () => {
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      }
    }, [autoDismiss, onDismiss]);
    const colors = variantColors2[variant];
    const resolvedIcon = icon !== void 0 ? icon : defaultIcons[variant];
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: import_core42.semantic.spaceSm,
          width: "100%",
          padding: `${import_core42.semantic.spaceSm} ${import_core42.semantic.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${import_core42.semantic.borderWidthThick} solid ${colors.border}`,
          fontFamily: import_core42.semantic.fontSans,
          fontSize: import_core42.semantic.fontSizeSm,
          fontWeight: import_core42.semantic.fontWeightMedium,
          lineHeight: import_core42.semantic.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease",
          ...style
        },
        children: [
          resolvedIcon && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "button",
            {
              className: "alert-banner-dismiss",
              onClick: onDismiss,
              "aria-label": "Dismiss",
              style: {
                all: "unset",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: import_core42.semantic.radiusSm,
                color: colors.fg,
                opacity: 0.7,
                fontSize: import_core42.semantic.fontSizeLg,
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
var import_react38 = require("react");
var import_core43 = require("../../core/dist/index.cjs");
var import_jsx_runtime42 = require("react/jsx-runtime");
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
    transition: background ${import_core43.semantic.transitionBase};
  }
  .topbar-nav-item:hover::after {
    background: ${import_core43.semantic.colorBorder};
  }
  .topbar-nav-item[data-active]::after {
    background: ${import_core43.semantic.colorActionPrimary};
  }
  .topbar-nav-item:hover {
    color: ${import_core43.semantic.colorText};
  }
`;
var TopBar = (0, import_react38.forwardRef)(
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
    (0, import_core43.useInjectStyles)(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: import_core43.semantic.zIndexSticky } : {};
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
      "header",
      {
        ref,
        style: {
          display: "flex",
          alignItems: "center",
          height: 48,
          padding: `0 ${import_core43.semantic.spaceMd}`,
          background: import_core43.semantic.colorSurface,
          borderBottom: `${import_core43.semantic.borderWidthDefault} solid ${import_core43.semantic.colorBorder}`,
          fontFamily: import_core43.semantic.fontSans,
          ...stickyStyle,
          ...style
        },
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                fontWeight: import_core43.semantic.fontWeightBold,
                fontSize: import_core43.semantic.fontSizeSm,
                color: import_core43.semantic.colorText,
                marginRight: import_core43.semantic.spaceLg,
                whiteSpace: "nowrap",
                flexShrink: 0
              },
              children: title
            }
          ),
          items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "nav",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: import_core43.semantic.spaceXs,
                height: "100%",
                flex: 1,
                minWidth: 0
              },
              children: items.map((item) => {
                const isActive = activePath === item.path;
                return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
                      gap: import_core43.semantic.spaceXs,
                      height: "100%",
                      padding: `0 ${import_core43.semantic.spaceSm}`,
                      border: "none",
                      background: "transparent",
                      color: isActive ? import_core43.semantic.colorActionPrimary : import_core43.semantic.colorTextMuted,
                      fontSize: import_core43.semantic.fontSizeSm,
                      fontFamily: import_core43.semantic.fontSans,
                      fontWeight: isActive ? import_core43.semantic.fontWeightSemibold : import_core43.semantic.fontWeightNormal,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: `color ${import_core43.semantic.transitionBase}`,
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
          trailing && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: import_core43.semantic.spaceSm,
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
var import_react39 = require("react");
var import_core44 = require("../../core/dist/index.cjs");
var import_jsx_runtime43 = require("react/jsx-runtime");
var SHORTCUT_HELP_STYLES_ID = "4lt7ab-shortcut-help";
var SHORTCUT_HELP_CSS = `
  [data-shortcut-help] kbd:hover {
    background: ${import_core44.semantic.colorSurfaceRaised} !important;
    border-color: ${import_core44.semantic.colorBorderFocused} !important;
  }
`;
var ShortcutHelpModal = (0, import_react39.forwardRef)(
  function ShortcutHelpModal2({
    shortcuts,
    onClose,
    title = "Keyboard Shortcuts",
    maxWidth = 520
  }, ref) {
    const titleId = (0, import_react39.useId)();
    (0, import_core44.useInjectStyles)(SHORTCUT_HELP_STYLES_ID, SHORTCUT_HELP_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ModalShell, { ref, onClose, maxWidth, titleId, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { "data-shortcut-help": true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: import_core44.semantic.spaceLg
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              "h2",
              {
                id: titleId,
                style: modalHeadingStyle,
                children: title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              IconButton,
              {
                icon: "close",
                "aria-label": "Close",
                onClick: onClose,
                style: { marginRight: `calc(-1 * ${import_core44.semantic.spaceXs})`, marginTop: `calc(-1 * ${import_core44.semantic.spaceXs})` }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: import_core44.semantic.spaceLg }, children: shortcuts.map((group) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "h3",
          {
            style: {
              margin: 0,
              marginBottom: import_core44.semantic.spaceSm,
              fontWeight: import_core44.semantic.fontWeightMedium,
              fontFamily: import_core44.semantic.fontSans,
              color: import_core44.semantic.colorTextMuted,
              fontSize: import_core44.semantic.fontSizeXs,
              textTransform: "uppercase",
              letterSpacing: import_core44.semantic.letterSpacingWide
            },
            children: group.group
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: group.shortcuts.map((shortcut) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: `${import_core44.semantic.spaceXs} 0`,
                  borderBottom: `${import_core44.semantic.borderWidthDefault} solid ${import_core44.semantic.colorBorder}`
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "span",
                    {
                      style: {
                        fontFamily: import_core44.semantic.fontSans,
                        fontSize: import_core44.semantic.fontSizeSm,
                        color: import_core44.semantic.colorText
                      },
                      children: shortcut.description
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: import_core44.semantic.spaceXs,
                        flexShrink: 0,
                        marginLeft: import_core44.semantic.spaceMd
                      },
                      children: shortcut.keys.map((key, i) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: import_core44.semantic.spaceXs }, children: [
                        i > 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                          "span",
                          {
                            style: {
                              fontSize: import_core44.semantic.fontSizeXs,
                              color: import_core44.semantic.colorTextMuted,
                              fontFamily: import_core44.semantic.fontSans
                            },
                            children: "+"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                          "kbd",
                          {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              minWidth: 24,
                              height: 24,
                              padding: `0 ${import_core44.semantic.spaceXs}`,
                              fontFamily: import_core44.semantic.fontMono,
                              fontSize: import_core44.semantic.fontSizeXs,
                              fontWeight: import_core44.semantic.fontWeightMedium,
                              lineHeight: 1,
                              color: import_core44.semantic.colorTextSecondary,
                              background: import_core44.semantic.colorSurfaceInput,
                              border: `${import_core44.semantic.borderWidthDefault} solid ${import_core44.semantic.colorBorder}`,
                              borderRadius: import_core44.semantic.radiusSm,
                              boxShadow: `0 1px 0 ${import_core44.semantic.colorBorder}`,
                              transition: `background ${import_core44.semantic.transitionBase}, border-color ${import_core44.semantic.transitionBase}`
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
