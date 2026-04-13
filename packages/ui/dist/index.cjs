var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __reExport = (target, mod, secondTarget) => {
  var keys = __getOwnPropNames(mod);
  for (let key of keys)
    if (!__hasOwnProp.call(target, key) && key !== "default")
      __defProp(target, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (secondTarget) {
    for (let key of keys)
      if (!__hasOwnProp.call(secondTarget, key) && key !== "default")
        __defProp(secondTarget, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
    return secondTarget;
  }
};
var __toCommonJS = (from) => {
  var entry = (__moduleCache ??= new WeakMap).get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function") {
    for (var key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(entry, key))
        __defProp(entry, key, {
          get: __accessProp.bind(from, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  __moduleCache.set(from, entry);
  return entry;
};
var __moduleCache;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// src/index.ts
var exports_src = {};
__export(exports_src, {
  useFocusTrap: () => useFocusTrap,
  iconRegistry: () => iconRegistry,
  ThemeSurface: () => ThemeSurface,
  ThemePicker: () => ThemePicker,
  Textarea: () => Textarea,
  TagChip: () => TagChip,
  TableRow: () => TableRow,
  TableHeaderCell: () => TableHeaderCell,
  TableHeader: () => TableHeader,
  TableGroupHeader: () => TableGroupHeader,
  TableEmptyRow: () => TableEmptyRow,
  TableCell: () => TableCell,
  TableBody: () => TableBody,
  Table: () => Table,
  StatusDot: () => StatusDot,
  Stack: () => Stack,
  Skeleton: () => Skeleton,
  Select: () => Select,
  RowSkeleton: () => RowSkeleton,
  ProgressBar: () => ProgressBar,
  Pagination: () => Pagination,
  PageHeader: () => PageHeader,
  Overlay: () => Overlay,
  ModalShell: () => ModalShell,
  Input: () => Input,
  IconWarning: () => IconWarning,
  IconTrash: () => IconTrash,
  IconSettings: () => IconSettings,
  IconSearch: () => IconSearch,
  IconPlus: () => IconPlus,
  IconMoreVertical: () => IconMoreVertical,
  IconMinus: () => IconMinus,
  IconMenu: () => IconMenu,
  IconInfo: () => IconInfo,
  IconFilter: () => IconFilter,
  IconEyeOff: () => IconEyeOff,
  IconEye: () => IconEye,
  IconExternalLink: () => IconExternalLink,
  IconError: () => IconError,
  IconEdit: () => IconEdit,
  IconCopy: () => IconCopy,
  IconClose: () => IconClose,
  IconChevronUp: () => IconChevronUp,
  IconChevronRight: () => IconChevronRight,
  IconChevronLeft: () => IconChevronLeft,
  IconChevronDown: () => IconChevronDown,
  IconCheckCircle: () => IconCheckCircle,
  IconCheck: () => IconCheck,
  IconButton: () => IconButton,
  IconArrowRight: () => IconArrowRight,
  IconArrowLeft: () => IconArrowLeft,
  Icon: () => Icon,
  Field: () => Field,
  ExpandableCard: () => ExpandableCard,
  EmptyState: () => EmptyState,
  DateRangePicker: () => DateRangePicker,
  DatePicker: () => DatePicker,
  ConfirmDialog: () => ConfirmDialog,
  CardSkeleton: () => CardSkeleton,
  Card: () => Card,
  Button: () => Button,
  Badge: () => Badge
});
module.exports = __toCommonJS(exports_src);

// src/utils/useFocusTrap.ts
var exports_useFocusTrap = {};
__export(exports_useFocusTrap, {
  useFocusTrap: () => useFocusTrap
});
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
  import_react.useEffect(() => {
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
__reExport(exports_src, require("../../core/dist/index.cjs"), module.exports);

// src/components/ThemePicker/index.ts
var exports_ThemePicker = {};
__export(exports_ThemePicker, {
  ThemePicker: () => ThemePicker
});

// src/components/ThemePicker/ThemePicker.tsx
var import_react3 = require("react");
var import_core = require("../../core/dist/index.cjs");
var import_core2 = require("../../core/dist/index.cjs");

// src/components/Icon/index.ts
var exports_Icon = {};
__export(exports_Icon, {
  Icon: () => Icon
});

// src/components/Icon/Icon.tsx
var import_react2 = require("react");

// src/icons/index.ts
var exports_icons = {};
__export(exports_icons, {
  iconRegistry: () => iconRegistry,
  IconWarning: () => IconWarning,
  IconTrash: () => IconTrash,
  IconSettings: () => IconSettings,
  IconSearch: () => IconSearch,
  IconPlus: () => IconPlus,
  IconMoreVertical: () => IconMoreVertical,
  IconMinus: () => IconMinus,
  IconMenu: () => IconMenu,
  IconInfo: () => IconInfo,
  IconFilter: () => IconFilter,
  IconEyeOff: () => IconEyeOff,
  IconEye: () => IconEye,
  IconExternalLink: () => IconExternalLink,
  IconError: () => IconError,
  IconEdit: () => IconEdit,
  IconCopy: () => IconCopy,
  IconClose: () => IconClose,
  IconChevronUp: () => IconChevronUp,
  IconChevronRight: () => IconChevronRight,
  IconChevronLeft: () => IconChevronLeft,
  IconChevronDown: () => IconChevronDown,
  IconCheckCircle: () => IconCheckCircle,
  IconCheck: () => IconCheck,
  IconArrowRight: () => IconArrowRight,
  IconArrowLeft: () => IconArrowLeft
});

// src/icons/icons.tsx
var jsx_dev_runtime = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M18 6L6 18M6 6l12 12"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M9 18l6-6-6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M6 9l6 6 6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M15 18l-6-6 6-6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M18 15l-6-6-6 6"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M20 6L9 17l-5-5"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M22 4L12 14.01l-3-3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M15 9l-6 6M9 9l6 6"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M21 21l-4.35-4.35"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M12 5v14M5 12h14"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M5 12h14"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M19 12H5M12 19l-7-7 7-7"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M5 12h14M12 5l7 7-7 7"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M3 12h18M3 6h18M3 18h18"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M1 1l22 22"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
        d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
      d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("path", {
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
var jsx_dev_runtime2 = require("react/jsx-dev-runtime");
var Icon = import_react2.forwardRef(function Icon2({ name, size = 24, style, "aria-label": ariaLabel, ...props }, ref) {
  const IconComponent = iconRegistry[name];
  const isDecorative = !ariaLabel;
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("span", {
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
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IconComponent, {
      size
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
// src/components/ThemePicker/ThemePicker.tsx
var jsx_dev_runtime3 = require("react/jsx-dev-runtime");
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
  import_core2.useInjectStyles(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = import_core.useTheme();
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
    className: "alttab-theme-picker",
    children: Array.from(themes.values()).map((def) => {
      const isActive = resolved === def.name;
      return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("button", {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("span", {
            className: "alttab-theme-card__name",
            children: def.label
          }, undefined, false, undefined, this),
          descriptions[def.name] && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("span", {
            className: "alttab-theme-card__desc",
            children: descriptions[def.name]
          }, undefined, false, undefined, this)
        ]
      }, def.name, true, undefined, this);
    })
  }, undefined, false, undefined, this);
}
function CompactView() {
  import_core2.useInjectStyles(COMPACT_STYLES_ID, compactCSS);
  const { resolved, themes, setTheme } = import_core.useTheme();
  const [open, setOpen] = import_react3.useState(false);
  const [focusedIndex, setFocusedIndex] = import_react3.useState(-1);
  const containerRef = import_react3.useRef(null);
  const menuRef = import_react3.useRef(null);
  const triggerRef = import_react3.useRef(null);
  const themeList = Array.from(themes.values());
  import_react3.useEffect(() => {
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
  const handleKeyDown = import_react3.useCallback((e) => {
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
  import_react3.useEffect(() => {
    if (!open || focusedIndex < 0)
      return;
    const menu = menuRef.current;
    if (!menu)
      return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);
  import_react3.useEffect(() => {
    if (open) {
      const activeIdx = themeList.findIndex((t) => t.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]);
  const currentTheme = themeList.find((t) => t.name === resolved);
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
    ref: containerRef,
    style: { position: "relative" },
    onKeyDown: handleKeyDown,
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("button", {
        ref: triggerRef,
        className: "alttab-tp-trigger",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("span", {
            style: {
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--color-action-primary)",
              flexShrink: 0
            }
          }, undefined, false, undefined, this),
          currentTheme?.label ?? resolved,
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Icon, {
            name: open ? "chevron-up" : "chevron-down",
            size: 12
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      open && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
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
          return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("button", {
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
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("span", {
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
var ThemePicker = import_react3.forwardRef(function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
  if (variant === "compact") {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
      ref,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(CompactView, {}, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
    ref,
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(GridView, {
      descriptions
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
// src/components/Button/index.ts
var exports_Button = {};
__export(exports_Button, {
  Button: () => Button
});

// src/components/Button/Button.tsx
var import_react4 = require("react");
var import_core3 = require("../../core/dist/index.cjs");
var jsx_dev_runtime4 = require("react/jsx-dev-runtime");
var variantStyles = {
  primary: {
    background: import_core3.semantic.colorActionPrimary,
    color: import_core3.semantic.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: import_core3.semantic.colorActionSecondary,
    color: import_core3.semantic.colorText,
    border: `1px solid ${import_core3.semantic.colorBorder}`
  },
  destructive: {
    background: import_core3.semantic.colorActionDestructive,
    color: import_core3.semantic.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: import_core3.semantic.colorText,
    border: "1px solid transparent"
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
  transition: "background 150ms ease, border-color 150ms ease, opacity 150ms ease"
};
var Button = import_react4.forwardRef(function Button2({
  variant = "primary",
  size = "md",
  children,
  style,
  disabled,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV("button", {
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
// src/components/Stack/index.ts
var exports_Stack = {};
__export(exports_Stack, {
  Stack: () => Stack
});

// src/components/Stack/Stack.tsx
var import_react5 = require("react");
var import_core4 = require("../../core/dist/index.cjs");
var jsx_dev_runtime5 = require("react/jsx-dev-runtime");
var gapMap = {
  xs: import_core4.semantic.spaceXs,
  sm: import_core4.semantic.spaceSm,
  md: import_core4.semantic.spaceMd,
  lg: import_core4.semantic.spaceLg,
  xl: import_core4.semantic.spaceXl,
  "2xl": import_core4.semantic.space2xl
};
var Stack = import_react5.forwardRef(function Stack2({
  direction = "vertical",
  gap = "md",
  align,
  justify,
  wrap,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV("div", {
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
// src/components/Card/index.ts
var exports_Card = {};
__export(exports_Card, {
  Card: () => Card
});

// src/components/Card/Card.tsx
var import_react6 = require("react");
var import_core5 = require("../../core/dist/index.cjs");
var jsx_dev_runtime6 = require("react/jsx-dev-runtime");
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
    background: import_core5.semantic.colorSurface,
    border: `1px solid ${import_core5.semantic.colorBorder}`,
    boxShadow: import_core5.semantic.shadowSm
  },
  flat: {
    background: import_core5.semantic.colorSurfaceRaised,
    border: `1px solid ${import_core5.semantic.colorBorder}`,
    boxShadow: "none"
  },
  elevated: {
    background: import_core5.semantic.colorSurface,
    border: `1px solid ${import_core5.semantic.colorBorder}`,
    boxShadow: import_core5.semantic.shadowMd
  }
};
var Card = import_react6.forwardRef(function Card2({
  variant = "default",
  padding = "lg",
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV("div", {
    ref,
    style: {
      borderRadius: import_core5.semantic.radiusLg,
      padding: paddingMap[padding],
      ...variantStyles2[variant],
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
// src/components/Field/index.ts
var exports_Field = {};
__export(exports_Field, {
  Field: () => Field
});

// src/components/Field/Field.tsx
var import_core6 = require("../../core/dist/index.cjs");
var import_react7 = require("react");
var jsx_dev_runtime7 = require("react/jsx-dev-runtime");
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
var Field = import_react7.forwardRef(function Field2({
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
  const autoId = import_react7.useId();
  const helpId = help ? `${autoId}-help` : undefined;
  const errorId = error ? `${autoId}-error` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(" ") || undefined;
  const enhancedChildren = import_react7.isValidElement(children) ? import_react7.cloneElement(children, {
    "aria-describedby": describedBy
  }) : children;
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV("div", {
    ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: import_core6.semantic.spaceXs,
      opacity: disabled ? 0.6 : undefined,
      ...style
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV("label", {
        htmlFor,
        style: labelStyle,
        children: [
          label,
          required && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV("span", {
            style: requiredStyle,
            "aria-hidden": "true",
            children: "*"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      enhancedChildren,
      error && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV("p", {
        id: errorId,
        role: "alert",
        style: errorStyle,
        children: error
      }, undefined, false, undefined, this),
      !error && help && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV("p", {
        id: helpId,
        style: helpStyle,
        children: help
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Input/index.ts
var exports_Input = {};
__export(exports_Input, {
  Input: () => Input
});

// src/components/Input/Input.tsx
var import_react8 = require("react");
var import_core7 = require("../../core/dist/index.cjs");
var jsx_dev_runtime8 = require("react/jsx-dev-runtime");
var baseStyle = {
  display: "block",
  width: "100%",
  padding: `${import_core7.semantic.spaceSm} ${import_core7.semantic.spaceMd}`,
  fontSize: import_core7.semantic.fontSizeSm,
  lineHeight: import_core7.semantic.lineHeightTight,
  fontFamily: import_core7.semantic.fontSans,
  color: import_core7.semantic.colorText,
  background: import_core7.semantic.colorSurfaceInput,
  border: `1px solid ${import_core7.semantic.colorBorder}`,
  borderRadius: import_core7.semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
var Input = import_react8.forwardRef(function Input2({
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV("input", {
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
// src/components/Textarea/index.ts
var exports_Textarea = {};
__export(exports_Textarea, {
  Textarea: () => Textarea
});

// src/components/Textarea/Textarea.tsx
var import_react9 = require("react");
var import_core8 = require("../../core/dist/index.cjs");
var jsx_dev_runtime9 = require("react/jsx-dev-runtime");
var baseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${import_core8.semantic.spaceSm} ${import_core8.semantic.spaceMd}`,
  fontSize: import_core8.semantic.fontSizeSm,
  lineHeight: import_core8.semantic.lineHeightBase,
  fontFamily: import_core8.semantic.fontSans,
  color: import_core8.semantic.colorText,
  background: import_core8.semantic.colorSurfaceInput,
  border: `1px solid ${import_core8.semantic.colorBorder}`,
  borderRadius: import_core8.semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
var Textarea = import_react9.forwardRef(function Textarea2({
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV("textarea", {
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
// src/components/Select/index.ts
var exports_Select = {};
__export(exports_Select, {
  Select: () => Select
});

// src/components/Select/Select.tsx
var import_react10 = require("react");
var import_core9 = require("../../core/dist/index.cjs");
var jsx_dev_runtime10 = require("react/jsx-dev-runtime");
var wrapperStyle = {
  position: "relative",
  display: "block",
  width: "100%"
};
var baseStyle3 = {
  display: "block",
  width: "100%",
  padding: `${import_core9.semantic.spaceSm} ${import_core9.semantic.spaceMd}`,
  fontSize: import_core9.semantic.fontSizeSm,
  lineHeight: import_core9.semantic.lineHeightTight,
  fontFamily: import_core9.semantic.fontSans,
  color: import_core9.semantic.colorText,
  background: import_core9.semantic.colorSurfaceInput,
  border: `1px solid ${import_core9.semantic.colorBorder}`,
  borderRadius: import_core9.semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box",
  cursor: "pointer",
  appearance: "none",
  paddingRight: import_core9.semantic.space2xl
};
var chevronStyle = {
  position: "absolute",
  right: import_core9.semantic.spaceSm,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: import_core9.semantic.colorTextSecondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var errorBorderStyle3 = {
  borderColor: import_core9.semantic.colorBorderError
};
var disabledStyle3 = {
  background: import_core9.semantic.colorSurfaceDisabled,
  color: import_core9.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var Select = import_react10.forwardRef(function Select2({
  options,
  children,
  placeholder,
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("div", {
    style: wrapperStyle,
    children: [
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("select", {
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
          placeholder && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("option", {
            value: "",
            disabled: true,
            children: placeholder
          }, undefined, false, undefined, this),
          children ?? options?.map((opt) => /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("option", {
            value: opt.value,
            disabled: opt.disabled,
            children: opt.label
          }, opt.value, false, undefined, this))
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("span", {
        "aria-hidden": true,
        style: chevronStyle,
        children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("path", {
            d: "M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L6 9.31 2.22 5.53a.75.75 0 0 1 0-1.06z",
            fill: "currentColor"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Badge/index.ts
var exports_Badge = {};
__export(exports_Badge, {
  Badge: () => Badge
});

// src/components/Badge/Badge.tsx
var import_react11 = require("react");
var import_core10 = require("../../core/dist/index.cjs");
var jsx_dev_runtime11 = require("react/jsx-dev-runtime");
var variantStyles3 = {
  default: {
    border: `1px solid ${import_core10.semantic.colorBorder}`,
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
var Badge = import_react11.forwardRef(function Badge2({
  children,
  variant = "default",
  style,
  ...rest
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV("span", {
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
// src/components/IconButton/index.ts
var exports_IconButton = {};
__export(exports_IconButton, {
  IconButton: () => IconButton
});

// src/components/IconButton/IconButton.tsx
var import_react12 = require("react");
var import_core11 = require("../../core/dist/index.cjs");
var jsx_dev_runtime12 = require("react/jsx-dev-runtime");
var IconButton = import_react12.forwardRef(function IconButton2({
  icon,
  size = 24,
  badge,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV("button", {
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
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Icon, {
        name: icon,
        size
      }, undefined, false, undefined, this),
      badge && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV("span", {
        style: {
          position: "absolute",
          top: 2,
          right: 2,
          width: 8,
          height: 8,
          borderRadius: import_core11.semantic.radiusFull,
          background: import_core11.semantic.colorError,
          border: `2px solid ${import_core11.semantic.colorSurface}`
        }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/Overlay/index.ts
var exports_Overlay = {};
__export(exports_Overlay, {
  Overlay: () => Overlay
});

// src/components/Overlay/Overlay.tsx
var import_react13 = require("react");
var import_core12 = require("../../core/dist/index.cjs");
var jsx_dev_runtime13 = require("react/jsx-dev-runtime");
var Overlay = import_react13.forwardRef(function Overlay2({
  onClick,
  zIndex = 100,
  style
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV("div", {
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
  }, undefined, false, undefined, this);
});
// src/components/Skeleton/index.ts
var exports_Skeleton = {};
__export(exports_Skeleton, {
  Skeleton: () => Skeleton,
  RowSkeleton: () => RowSkeleton,
  CardSkeleton: () => CardSkeleton
});

// src/components/Skeleton/Skeleton.tsx
var import_react14 = require("react");
var import_core13 = require("../../core/dist/index.cjs");
var jsx_dev_runtime14 = require("react/jsx-dev-runtime");
var Skeleton = import_react14.forwardRef(function Skeleton2({
  width = "100%",
  height = 16,
  borderRadius = import_core13.semantic.radiusMd,
  style
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("div", {
    ref,
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius,
      background: import_core13.semantic.colorSurfaceRaised,
      ...style
    }
  }, undefined, false, undefined, this);
});
var CardSkeleton = import_react14.forwardRef(function CardSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("div", {
    ref,
    "aria-hidden": "true",
    style: {
      borderRadius: import_core13.semantic.radiusLg,
      border: `1px solid ${import_core13.semantic.colorBorder}`,
      padding: import_core13.semantic.spaceLg,
      display: "flex",
      flexDirection: "column",
      gap: import_core13.semantic.spaceSm,
      ...style
    },
    children: [
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Skeleton, {
        width: "60%",
        height: 20
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Skeleton, {
        width: "100%",
        height: 14
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Skeleton, {
        width: "80%",
        height: 14
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
var RowSkeleton = import_react14.forwardRef(function RowSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("div", {
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
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Skeleton, {
        width: 32,
        height: 32,
        borderRadius: import_core13.semantic.radiusFull
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("div", {
        style: { flex: 1, display: "flex", flexDirection: "column", gap: import_core13.semantic.spaceXs },
        children: [
          /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Skeleton, {
            width: "40%",
            height: 14
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Skeleton, {
            width: "70%",
            height: 12
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ProgressBar/index.ts
var exports_ProgressBar = {};
__export(exports_ProgressBar, {
  ProgressBar: () => ProgressBar
});

// src/components/ProgressBar/ProgressBar.tsx
var import_react15 = require("react");
var import_core14 = require("../../core/dist/index.cjs");
var jsx_dev_runtime15 = require("react/jsx-dev-runtime");
var ProgressBar = import_react15.forwardRef(function ProgressBar2({
  segments,
  height = 6,
  "aria-label": ariaLabel,
  style
}, ref) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV("div", {
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
      return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV("div", {
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
// src/components/EmptyState/index.ts
var exports_EmptyState = {};
__export(exports_EmptyState, {
  EmptyState: () => EmptyState
});

// src/components/EmptyState/EmptyState.tsx
var import_react16 = require("react");
var import_core15 = require("../../core/dist/index.cjs");
var jsx_dev_runtime16 = require("react/jsx-dev-runtime");
var EmptyState = import_react16.forwardRef(function EmptyState2({
  icon,
  message,
  variant = "plain",
  style,
  children,
  action
}, ref) {
  const content = /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(Stack, {
    align: "center",
    gap: "sm",
    style: { padding: import_core15.semantic.spaceXl, ...style },
    children: [
      /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(Icon, {
        name: icon,
        size: 32,
        style: { color: import_core15.semantic.colorTextMuted }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("span", {
        style: {
          color: import_core15.semantic.colorTextSecondary,
          fontSize: import_core15.semantic.fontSizeSm,
          textAlign: "center",
          fontFamily: import_core15.semantic.fontSans
        },
        children: message
      }, undefined, false, undefined, this),
      children,
      action && /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
        style: { marginTop: import_core15.semantic.spaceSm },
        children: action
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  if (variant === "card") {
    return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(Card, {
      ref,
      variant: "flat",
      children: content
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
    ref,
    children: content
  }, undefined, false, undefined, this);
});
// src/components/Pagination/index.ts
var exports_Pagination = {};
__export(exports_Pagination, {
  Pagination: () => Pagination
});

// src/components/Pagination/Pagination.tsx
var import_react17 = require("react");
var import_core16 = require("../../core/dist/index.cjs");
var jsx_dev_runtime17 = require("react/jsx-dev-runtime");
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = import_react17.forwardRef(function Pagination2({
  page,
  totalPages,
  total,
  onPageChange,
  labels,
  className,
  style
}, ref) {
  const resolvedLabels = { ...defaultLabels, ...labels };
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV("div", {
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
      /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page <= 1,
        onClick: () => onPageChange(page - 1),
        children: resolvedLabels.previous
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime17.jsxDEV("span", {
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
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page >= totalPages,
        onClick: () => onPageChange(page + 1),
        children: resolvedLabels.next
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/PageHeader/index.ts
var exports_PageHeader = {};
__export(exports_PageHeader, {
  PageHeader: () => PageHeader
});

// src/components/PageHeader/PageHeader.tsx
var import_react18 = require("react");
var import_core17 = require("../../core/dist/index.cjs");
var jsx_dev_runtime18 = require("react/jsx-dev-runtime");
var PageHeader = import_react18.forwardRef(function PageHeader2({
  title,
  subtitle,
  trailing,
  style,
  className,
  level = 2
}, ref) {
  const heading = import_react18.createElement(`h${level}`, {
    style: {
      margin: 0,
      fontFamily: import_core17.semantic.fontSans,
      fontWeight: import_core17.semantic.fontWeightBold,
      color: import_core17.semantic.colorText
    }
  }, title);
  return /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("div", {
    ref,
    className,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      ...style
    },
    children: [
      /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("div", {
        children: [
          heading,
          subtitle && /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("span", {
            style: {
              color: import_core17.semantic.colorTextMuted,
              fontSize: import_core17.semantic.fontSizeSm
            },
            children: subtitle
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      trailing && /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("div", {
        children: trailing
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/TagChip/index.ts
var exports_TagChip = {};
__export(exports_TagChip, {
  TagChip: () => TagChip
});

// src/components/TagChip/TagChip.tsx
var import_react19 = require("react");
var import_core18 = require("../../core/dist/index.cjs");
var jsx_dev_runtime19 = require("react/jsx-dev-runtime");
var TagChip = import_react19.forwardRef(function TagChip2({
  name,
  onRemove,
  style
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("span", {
    ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: import_core18.semantic.fontSizeXs,
      color: import_core18.semantic.colorActionPrimary,
      background: import_core18.semantic.colorSurfaceRaised,
      borderRadius: import_core18.semantic.radiusFull,
      padding: "2px 8px",
      fontFamily: import_core18.semantic.fontSans,
      ...style
    },
    children: [
      name,
      onRemove && /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(IconButton, {
        icon: "close",
        size: 12,
        onClick: onRemove,
        "aria-label": `Remove ${name}`,
        style: { width: 18, height: 18, color: import_core18.semantic.colorActionPrimary }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ExpandableCard/index.ts
var exports_ExpandableCard = {};
__export(exports_ExpandableCard, {
  ExpandableCard: () => ExpandableCard
});

// src/components/ExpandableCard/ExpandableCard.tsx
var import_core19 = require("../../core/dist/index.cjs");
var import_react20 = require("react");
var jsx_dev_runtime20 = require("react/jsx-dev-runtime");
var ExpandableCard = import_react20.forwardRef(function ExpandableCard2({
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  variant = "default",
  style,
  headerAction
}, ref) {
  const [internalOpen, setInternalOpen] = import_react20.useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const panelId = import_react20.useId();
  const handleToggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  };
  return /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(Card, {
    ref,
    variant,
    padding: "xs",
    style,
    children: [
      /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
        children: [
          /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("button", {
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
              transition: "background 150ms ease",
              background: "none",
              border: "none",
              color: "inherit",
              font: "inherit",
              flex: 1
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("span", {
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
                children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(IconChevronRight, {
                  size: 20
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("span", {
                style: {
                  fontWeight: import_core19.semantic.fontWeightSemibold,
                  fontFamily: import_core19.semantic.fontSans,
                  color: import_core19.semantic.colorText,
                  fontSize: import_core19.semantic.fontSizeSm
                },
                children: title
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          headerAction && /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("div", {
            style: { padding: `0 ${import_core19.semantic.spaceMd}` },
            children: headerAction
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("div", {
        id: panelId,
        role: "region",
        style: {
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 200ms ease"
        },
        children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("div", {
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("div", {
            style: { padding: `${import_core19.semantic.spaceSm} ${import_core19.semantic.spaceMd} ${import_core19.semantic.spaceMd}` },
            children
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/components/ModalShell/index.ts
var exports_ModalShell = {};
__export(exports_ModalShell, {
  ModalShell: () => ModalShell
});

// src/components/ModalShell/ModalShell.tsx
var import_react21 = require("react");
var import_react_dom = require("react-dom");
var import_core20 = require("../../core/dist/index.cjs");
var jsx_dev_runtime21 = require("react/jsx-dev-runtime");
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = import_react21.forwardRef(function ModalShell2({
  onClose,
  children,
  maxWidth = 480,
  zIndex = 200,
  style,
  titleId,
  "aria-label": ariaLabel,
  role = "dialog"
}, ref) {
  const generatedId = import_react21.useId();
  const resolvedLabelId = titleId ?? generatedId;
  const internalRef = import_react21.useRef(null);
  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  useFocusTrap(internalRef);
  import_react21.useEffect(() => {
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
  import_react21.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return import_react_dom.createPortal(/* @__PURE__ */ jsx_dev_runtime21.jsxDEV(jsx_dev_runtime21.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(Overlay, {
        onClick: onClose,
        zIndex
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime21.jsxDEV("div", {
        style: {
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: zIndex + 1,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsx_dev_runtime21.jsxDEV("div", {
          ref: setRefs,
          role,
          "aria-modal": "true",
          "aria-labelledby": ariaLabel ? undefined : resolvedLabelId,
          "aria-label": ariaLabel,
          tabIndex: -1,
          style: {
            background: import_core20.semantic.colorSurface,
            color: import_core20.semantic.colorText,
            borderRadius: import_core20.semantic.radiusLg,
            boxShadow: import_core20.semantic.shadowLg,
            border: `1px solid ${import_core20.semantic.colorBorder}`,
            padding: import_core20.semantic.spaceXl,
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
// src/components/ConfirmDialog/index.ts
var exports_ConfirmDialog = {};
__export(exports_ConfirmDialog, {
  ConfirmDialog: () => ConfirmDialog
});

// src/components/ConfirmDialog/ConfirmDialog.tsx
var import_react22 = require("react");
var import_core21 = require("../../core/dist/index.cjs");
var jsx_dev_runtime22 = require("react/jsx-dev-runtime");
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = import_react22.forwardRef(function ConfirmDialog2({
  title,
  message,
  confirmLabel = "Confirm",
  onConfirm,
  onCancel,
  children,
  variant = "destructive"
}, ref) {
  const [loading, setLoading] = import_react22.useState(false);
  const titleId = import_react22.useId();
  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ModalShell, {
    ref,
    onClose: onCancel,
    role: "alertdialog",
    titleId,
    children: [
      /* @__PURE__ */ jsx_dev_runtime22.jsxDEV("h2", {
        id: titleId,
        style: {
          margin: 0,
          fontWeight: import_core21.semantic.fontWeightSemibold,
          fontFamily: import_core21.semantic.fontSans,
          color: import_core21.semantic.colorText,
          fontSize: import_core21.semantic.fontSizeLg
        },
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime22.jsxDEV("p", {
        style: {
          margin: `${import_core21.semantic.spaceSm} 0 ${children ? "0" : import_core21.semantic.spaceLg}`,
          color: import_core21.semantic.colorTextMuted,
          fontSize: import_core21.semantic.fontSizeSm,
          fontFamily: import_core21.semantic.fontSans
        },
        children: message
      }, undefined, false, undefined, this),
      children && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV("div", {
        style: { margin: `${import_core21.semantic.spaceSm} 0 ${import_core21.semantic.spaceLg}` },
        children
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime22.jsxDEV("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          gap: import_core21.semantic.spaceSm
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(Button, {
            variant: "ghost",
            onClick: onCancel,
            disabled: loading,
            autoFocus: true,
            children: "Cancel"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(Button, {
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
// src/components/StatusDot/index.ts
var exports_StatusDot = {};
__export(exports_StatusDot, {
  StatusDot: () => StatusDot
});

// src/components/StatusDot/StatusDot.tsx
var import_react23 = require("react");
var import_core22 = require("../../core/dist/index.cjs");
var jsx_dev_runtime23 = require("react/jsx-dev-runtime");
var variantColors = {
  default: import_core22.semantic.colorTextMuted,
  success: import_core22.semantic.colorSuccess,
  warning: import_core22.semantic.colorWarning,
  error: import_core22.semantic.colorError,
  info: import_core22.semantic.colorInfo
};
var StatusDot = import_react23.forwardRef(function StatusDot2({
  variant = "default",
  color,
  size = 8,
  "aria-label": ariaLabel,
  style
}, ref) {
  const resolvedColor = color ?? variantColors[variant];
  return /* @__PURE__ */ jsx_dev_runtime23.jsxDEV("span", {
    ref,
    role: ariaLabel ? "img" : undefined,
    "aria-label": ariaLabel,
    "aria-hidden": ariaLabel ? undefined : true,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: import_core22.semantic.radiusFull,
      background: resolvedColor,
      flexShrink: 0,
      ...style
    }
  }, undefined, false, undefined, this);
});
// src/components/ThemeSurface/index.ts
var exports_ThemeSurface = {};
__export(exports_ThemeSurface, {
  ThemeSurface: () => ThemeSurface
});

// src/components/ThemeSurface/ThemeSurface.tsx
var import_react24 = require("react");
var import_core23 = require("../../core/dist/index.cjs");
var import_core24 = require("../../core/dist/index.cjs");
var jsx_dev_runtime24 = require("react/jsx-dev-runtime");
var ThemeSurface = import_react24.forwardRef(function ThemeSurface2({
  children,
  global = false,
  style
}, ref) {
  const { resolved, themes } = import_core24.useTheme();
  const prevBodyBgRef = import_react24.useRef("");
  import_react24.useEffect(() => {
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
    return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(jsx_dev_runtime24.Fragment, {
      children
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("div", {
    ref,
    style: {
      background: import_core23.semantic.colorSurfacePage,
      ...style
    },
    children
  }, undefined, false, undefined, this);
});
// src/components/Table/index.ts
var exports_Table = {};
__export(exports_Table, {
  TableRow: () => TableRow,
  TableHeaderCell: () => TableHeaderCell,
  TableHeader: () => TableHeader,
  TableGroupHeader: () => TableGroupHeader,
  TableEmptyRow: () => TableEmptyRow,
  TableCell: () => TableCell,
  TableBody: () => TableBody,
  Table: () => Table
});

// src/components/Table/Table.tsx
var import_react25 = require("react");
var import_core25 = require("../../core/dist/index.cjs");
var import_core26 = require("../../core/dist/index.cjs");
var jsx_dev_runtime25 = require("react/jsx-dev-runtime");
var spaceMap = {
  xs: import_core25.semantic.spaceXs,
  sm: import_core25.semantic.spaceSm,
  md: import_core25.semantic.spaceMd,
  lg: import_core25.semantic.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover {
  background: ${import_core25.semantic.colorSurfaceRaised} !important;
}
[data-table-row-selected] > td {
  border-bottom-color: ${import_core25.semantic.colorSurfaceRaised};
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
  background: ${import_core25.semantic.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `1px solid ${import_core25.semantic.colorBorder}`,
    borderRadius: import_core25.semantic.radiusLg,
    boxShadow: import_core25.semantic.shadowSm
  },
  flat: {}
};
var Table = import_react25.forwardRef(function Table2({
  variant = "default",
  density = "md",
  children,
  style,
  ...props
}, ref) {
  import_core26.useInjectStyles(TABLE_STYLES_ID, TABLE_STYLES_CSS);
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("div", {
    ref,
    style: {
      overflowX: "auto",
      ...wrapperVariants[variant],
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("table", {
      "data-table-density": density,
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: import_core25.semantic.fontSizeSm,
        fontFamily: import_core25.semantic.fontSans,
        color: import_core25.semantic.colorText
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableHeader = import_react25.forwardRef(function TableHeader2({ children, style, ...props }, ref) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("thead", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("tr", {
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableHeaderCell = import_react25.forwardRef(function TableHeaderCell2({
  align = "left",
  width,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("th", {
    ref,
    style: {
      padding: `${import_core25.semantic.spaceSm} ${import_core25.semantic.spaceMd}`,
      textAlign: align,
      fontWeight: import_core25.semantic.fontWeightSemibold,
      fontSize: import_core25.semantic.fontSizeXs,
      color: import_core25.semantic.colorTextMuted,
      textTransform: "uppercase",
      letterSpacing: import_core25.semantic.letterSpacingWide,
      borderBottom: `2px solid ${import_core25.semantic.colorBorder}`,
      whiteSpace: "nowrap",
      width: typeof width === "number" ? `${width}px` : width,
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableBody = import_react25.forwardRef(function TableBody2({ children, ...props }, ref) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("tbody", {
    ref,
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableRow = import_react25.forwardRef(function TableRow2({
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
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("tr", {
    ref,
    "data-table-row-hoverable": hoverable || undefined,
    "data-table-row-selected": selected || undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick,
    onKeyDown: handleKeyDown,
    style: {
      cursor: onClick ? "pointer" : undefined,
      background: selected ? import_core25.semantic.colorSurfaceRaised : undefined,
      transition: "background 0.1s",
      ...style
    },
    ...props,
    children
  }, undefined, false, undefined, this);
});
var TableCell = import_react25.forwardRef(function TableCell2({
  align = "left",
  truncate = false,
  muted = false,
  width,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("td", {
    ref,
    style: {
      padding: `${import_core25.semantic.spaceSm} ${import_core25.semantic.spaceMd}`,
      borderBottom: `1px solid ${import_core25.semantic.colorBorder}`,
      verticalAlign: "middle",
      textAlign: align,
      color: muted ? import_core25.semantic.colorTextMuted : undefined,
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
var TableGroupHeader = import_react25.forwardRef(function TableGroupHeader2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("tr", {
    ref,
    style: { cursor: "default", ...style },
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("td", {
      colSpan,
      style: {
        padding: `${import_core25.semantic.spaceXs} ${import_core25.semantic.spaceMd}`,
        background: import_core25.semantic.colorSurfaceRaised,
        borderBottom: `1px solid ${import_core25.semantic.colorBorder}`,
        fontSize: import_core25.semantic.fontSizeXs,
        fontWeight: import_core25.semantic.fontWeightBold,
        letterSpacing: import_core25.semantic.letterSpacingWide,
        textTransform: "uppercase",
        color: import_core25.semantic.colorTextMuted,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
var TableEmptyRow = import_react25.forwardRef(function TableEmptyRow2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("tr", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("td", {
      colSpan,
      style: {
        padding: `${import_core25.semantic.spaceXl} ${import_core25.semantic.spaceMd}`,
        textAlign: "center",
        color: import_core25.semantic.colorTextMuted,
        fontSize: import_core25.semantic.fontSizeSm
      },
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
// src/components/DateRangePicker/index.ts
var exports_DateRangePicker = {};
__export(exports_DateRangePicker, {
  DateRangePicker: () => DateRangePicker
});

// src/components/DateRangePicker/DateRangePicker.tsx
var import_react27 = require("react");
var import_core30 = require("../../core/dist/index.cjs");

// src/components/DateRangePicker/CalendarHeader.tsx
var import_core27 = require("../../core/dist/index.cjs");

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
var jsx_dev_runtime26 = require("react/jsx-dev-runtime");
var headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${import_core27.semantic.spaceXs} 0`
};
var titleStyle = {
  fontSize: import_core27.semantic.fontSizeSm,
  fontWeight: import_core27.semantic.fontWeightSemibold,
  fontFamily: import_core27.semantic.fontSans,
  color: import_core27.semantic.colorText,
  margin: 0,
  userSelect: "none"
};
function CalendarHeader({
  year,
  month,
  onPrev,
  onNext
}) {
  return /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
    style: headerStyle,
    children: [
      /* @__PURE__ */ jsx_dev_runtime26.jsxDEV(IconButton, {
        icon: "chevron-left",
        "aria-label": "Previous month",
        size: 16,
        onClick: onPrev,
        style: { width: 28, height: 28 }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("span", {
        style: titleStyle,
        children: [
          MONTH_NAMES[month],
          " ",
          year
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime26.jsxDEV(IconButton, {
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
var import_react26 = require("react");
var import_core29 = require("../../core/dist/index.cjs");

// src/components/DateRangePicker/DayCell.tsx
var import_core28 = require("../../core/dist/index.cjs");
var jsx_dev_runtime27 = require("react/jsx-dev-runtime");
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: import_core28.semantic.spaceXl,
  height: import_core28.semantic.spaceXl,
  border: "none",
  borderRadius: import_core28.semantic.radiusSm,
  fontSize: import_core28.semantic.fontSizeSm,
  fontFamily: import_core28.semantic.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: import_core28.semantic.colorText,
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
    ...isOutsideMonth ? { color: import_core28.semantic.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `1px solid ${import_core28.semantic.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? { background: `color-mix(in srgb, ${import_core28.semantic.colorActionPrimary} 15%, transparent)` } : {},
    ...isEndpoint ? { background: import_core28.semantic.colorActionPrimary, color: import_core28.semantic.colorTextInverse } : {},
    ...isDisabled ? {
      color: import_core28.semantic.colorTextDisabled,
      pointerEvents: "none",
      cursor: "default",
      opacity: 0.5
    } : {}
  };
  const classNames = [
    scopeClass + "-day",
    ...isDisabled ? [] : [scopeClass + "-day--enabled"]
  ].join(" ");
  return /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("td", {
    role: "gridcell",
    style: { padding: 0 },
    children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("button", {
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
var jsx_dev_runtime28 = require("react/jsx-dev-runtime");
var tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed"
};
var weekdayHeaderStyle = {
  fontSize: import_core29.semantic.fontSizeXs,
  fontFamily: import_core29.semantic.fontSans,
  fontWeight: import_core29.semantic.fontWeightMedium,
  color: import_core29.semantic.colorTextMuted,
  textAlign: "center",
  padding: `${import_core29.semantic.spaceXs} 0`,
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
  const today = import_react26.useRef(new Date).current;
  const grid = buildCalendarGrid(year, month);
  const rows = [];
  for (let r = 0;r < 6; r++) {
    rows.push(grid.slice(r * 7, r * 7 + 7));
  }
  const handleKeyDown = import_react26.useCallback((e, date) => {
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
  return /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("table", {
    style: tableStyle,
    role: "grid",
    "aria-label": "Calendar",
    children: [
      /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("thead", {
        children: /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("tr", {
          children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("th", {
            scope: "col",
            style: weekdayHeaderStyle,
            children: label
          }, label, false, undefined, this))
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("tbody", {
        children: rows.map((row, ri) => /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("tr", {
          children: row.map((date) => {
            const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);
            const inRange = sortedStart !== null && sortedEnd !== null && isInRange(date, sortedStart, sortedEnd);
            const isFocused = isSameDay(date, focusedDate);
            return /* @__PURE__ */ jsx_dev_runtime28.jsxDEV(DayCell, {
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
var jsx_dev_runtime29 = require("react/jsx-dev-runtime");
var SCOPE = "alttab-drp";
var injectedCSS = `
  .${SCOPE}-day--enabled:hover {
    background: ${import_core30.semantic.colorSurfaceRaised} !important;
  }
  .${SCOPE}-day--enabled:focus-visible {
    outline: ${import_core30.semantic.focusRingWidth} solid ${import_core30.semantic.focusRingColor};
    outline-offset: ${import_core30.semantic.focusRingOffset};
  }
  .${SCOPE}-trigger:focus-visible {
    border-color: ${import_core30.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core30.semantic.focusRingWidth} ${import_core30.semantic.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${import_core30.semantic.colorBorderFocused};
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
  padding: `${import_core30.semantic.spaceSm} ${import_core30.semantic.spaceMd}`,
  fontSize: import_core30.semantic.fontSizeSm,
  lineHeight: import_core30.semantic.lineHeightTight,
  fontFamily: import_core30.semantic.fontSans,
  color: import_core30.semantic.colorText,
  background: import_core30.semantic.colorSurfaceInput,
  border: `1px solid ${import_core30.semantic.colorBorder}`,
  borderRadius: import_core30.semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle = {
  borderColor: import_core30.semantic.colorBorderError
};
var triggerDisabledStyle = {
  background: import_core30.semantic.colorSurfaceDisabled,
  color: import_core30.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: 50,
  marginTop: import_core30.semantic.spaceXs,
  background: import_core30.semantic.colorSurfacePanel,
  border: `1px solid ${import_core30.semantic.colorBorder}`,
  borderRadius: import_core30.semantic.radiusLg,
  boxShadow: import_core30.semantic.shadowMd,
  padding: import_core30.semantic.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle = {
  color: import_core30.semantic.colorTextPlaceholder
};
var DateRangePicker = import_react27.forwardRef(function DateRangePicker2({
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
  import_core30.useInjectStyles(SCOPE, injectedCSS);
  const [open, setOpen] = import_react27.useState(false);
  const [selectionStart, setSelectionStart] = import_react27.useState(null);
  const containerRef = import_react27.useRef(null);
  const initialDate = value?.from ?? new Date;
  const [viewYear, setViewYear] = import_react27.useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = import_react27.useState(initialDate.getMonth());
  const [focusedDate, setFocusedDate] = import_react27.useState(value?.from ?? new Date);
  const handleFocusedDateChange = import_react27.useCallback((date) => {
    setFocusedDate(date);
    setViewYear(date.getFullYear());
    setViewMonth(date.getMonth());
  }, []);
  import_react27.useEffect(() => {
    if (!open)
      return;
    const container = containerRef.current;
    if (!container)
      return;
    const btn = container.querySelector('button[tabindex="0"]');
    btn?.focus();
  }, [focusedDate, open]);
  import_react27.useEffect(() => {
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
  import_react27.useEffect(() => {
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
  const handleToggle = import_react27.useCallback(() => {
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
  const handlePrevMonth = import_react27.useCallback(() => {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);
  const handleNextMonth = import_react27.useCallback(() => {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);
  const handleDaySelect = import_react27.useCallback((date) => {
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
    displayText = /* @__PURE__ */ jsx_dev_runtime29.jsxDEV("span", {
      style: placeholderStyle,
      children: placeholder
    }, undefined, false, undefined, this);
  }
  const calendarStart = selectionStart ?? value?.from ?? null;
  const calendarEnd = selectionStart ? null : value?.to ?? null;
  return /* @__PURE__ */ jsx_dev_runtime29.jsxDEV("div", {
    ref: (node) => {
      containerRef.current = node;
      if (typeof ref === "function")
        ref(node);
      else if (ref)
        ref.current = node;
    },
    style: { ...wrapperStyle2, ...style },
    children: [
      /* @__PURE__ */ jsx_dev_runtime29.jsxDEV("button", {
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
      open && /* @__PURE__ */ jsx_dev_runtime29.jsxDEV("div", {
        style: popoverStyle,
        role: "dialog",
        "aria-label": "Date range picker",
        children: [
          /* @__PURE__ */ jsx_dev_runtime29.jsxDEV(CalendarHeader, {
            year: viewYear,
            month: viewMonth,
            onPrev: handlePrevMonth,
            onNext: handleNextMonth
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime29.jsxDEV(CalendarGrid, {
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
// src/components/DatePicker/index.ts
var exports_DatePicker = {};
__export(exports_DatePicker, {
  DatePicker: () => DatePicker
});

// src/components/DatePicker/DatePicker.tsx
var import_react28 = require("react");
var import_core31 = require("../../core/dist/index.cjs");
var jsx_dev_runtime30 = require("react/jsx-dev-runtime");
var SCOPE2 = "alttab-dp";
var injectedCSS2 = `
  .${SCOPE2}-day--enabled:hover {
    background: ${import_core31.semantic.colorSurfaceRaised} !important;
  }
  .${SCOPE2}-day--enabled:focus-visible {
    outline: ${import_core31.semantic.focusRingWidth} solid ${import_core31.semantic.focusRingColor};
    outline-offset: ${import_core31.semantic.focusRingOffset};
  }
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${import_core31.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core31.semantic.focusRingWidth} ${import_core31.semantic.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${import_core31.semantic.colorBorderFocused};
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
  padding: `${import_core31.semantic.spaceSm} ${import_core31.semantic.spaceMd}`,
  fontSize: import_core31.semantic.fontSizeSm,
  lineHeight: import_core31.semantic.lineHeightTight,
  fontFamily: import_core31.semantic.fontSans,
  color: import_core31.semantic.colorText,
  background: import_core31.semantic.colorSurfaceInput,
  border: `1px solid ${import_core31.semantic.colorBorder}`,
  borderRadius: import_core31.semantic.radiusMd,
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  boxSizing: "border-box",
  cursor: "pointer",
  textAlign: "left"
};
var triggerErrorStyle2 = {
  borderColor: import_core31.semantic.colorBorderError
};
var triggerDisabledStyle2 = {
  background: import_core31.semantic.colorSurfaceDisabled,
  color: import_core31.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: 50,
  marginTop: import_core31.semantic.spaceXs,
  background: import_core31.semantic.colorSurfacePanel,
  border: `1px solid ${import_core31.semantic.colorBorder}`,
  borderRadius: import_core31.semantic.radiusLg,
  boxShadow: import_core31.semantic.shadowMd,
  padding: import_core31.semantic.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle2 = {
  color: import_core31.semantic.colorTextPlaceholder
};
var DatePicker = import_react28.forwardRef(function DatePicker2({
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
  import_core31.useInjectStyles(SCOPE2, injectedCSS2);
  const [open, setOpen] = import_react28.useState(false);
  const containerRef = import_react28.useRef(null);
  const initialDate = value ?? new Date;
  const [viewYear, setViewYear] = import_react28.useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = import_react28.useState(initialDate.getMonth());
  const [focusedDate, setFocusedDate] = import_react28.useState(value ?? new Date);
  const handleFocusedDateChange = import_react28.useCallback((date) => {
    setFocusedDate(date);
    setViewYear(date.getFullYear());
    setViewMonth(date.getMonth());
  }, []);
  import_react28.useEffect(() => {
    if (!open)
      return;
    const container = containerRef.current;
    if (!container)
      return;
    const btn = container.querySelector('button[tabindex="0"]');
    btn?.focus();
  }, [focusedDate, open]);
  import_react28.useEffect(() => {
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
  import_react28.useEffect(() => {
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
  const handleToggle = import_react28.useCallback(() => {
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
  const handlePrevMonth = import_react28.useCallback(() => {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);
  const handleNextMonth = import_react28.useCallback(() => {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);
  const handleDaySelect = import_react28.useCallback((date) => {
    onChange(date);
    setOpen(false);
  }, [onChange]);
  let displayText;
  if (value) {
    displayText = formatDate(value);
  } else {
    displayText = /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("span", {
      style: placeholderStyle2,
      children: placeholder
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("div", {
    ref: (node) => {
      containerRef.current = node;
      if (typeof ref === "function")
        ref(node);
      else if (ref)
        ref.current = node;
    },
    style: { ...wrapperStyle3, ...style },
    children: [
      /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("button", {
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
      open && /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("div", {
        style: popoverStyle2,
        role: "dialog",
        "aria-label": "Date picker",
        children: [
          /* @__PURE__ */ jsx_dev_runtime30.jsxDEV(CalendarHeader, {
            year: viewYear,
            month: viewMonth,
            onPrev: handlePrevMonth,
            onNext: handleNextMonth
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime30.jsxDEV(CalendarGrid, {
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
