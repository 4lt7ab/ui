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
  Calendar: () => Calendar2,
  Card: () => Card,
  CardSkeleton: () => CardSkeleton,
  ChipPicker: () => ChipPicker,
  Combobox: () => Combobox,
  ConfirmDialog: () => ConfirmDialog,
  Container: () => Container,
  DatePicker: () => DatePicker,
  DateRangePicker: () => DateRangePicker,
  Divider: () => Divider,
  EmptyState: () => EmptyState,
  ErrorBoundary: () => ErrorBoundary,
  Field: () => Field,
  Grid: () => Grid,
  Header: () => Header,
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
  LinkCard: () => LinkCard,
  ModalShell: () => ModalShell,
  Overlay: () => Overlay,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  RowSkeleton: () => RowSkeleton,
  SearchInput: () => SearchInput,
  SegmentedControl: () => SegmentedControl,
  Select: () => Select,
  Skeleton: () => Skeleton,
  Stack: () => Stack,
  StatusDot: () => StatusDot,
  Surface: () => Surface,
  TabStrip: () => TabStrip,
  Table: () => Table3,
  TableBody: () => TableBody,
  TableCell: () => TableCell,
  TableEmptyRow: () => TableEmptyRow,
  TableGroupHeader: () => TableGroupHeader,
  TableHeader: () => TableHeader,
  TableHeaderCell: () => TableHeaderCell,
  TableRow: () => TableRow,
  Textarea: () => Textarea,
  ThemePicker: () => ThemePicker,
  ToastProvider: () => ToastProvider,
  TopBar: () => TopBar,
  TopBarLeading: () => TopBarLeading,
  TopBarLink: () => TopBarLink,
  TopBarNav: () => TopBarNav,
  TopBarRoot: () => TopBarRoot,
  TopBarTrailing: () => TopBarTrailing,
  alignMap: () => alignMap,
  dividerOpacityMap: () => dividerOpacityMap,
  iconRegistry: () => iconRegistry,
  iconSizeMap: () => iconSizeMap,
  justifyMap: () => justifyMap,
  modalFooterStyle: () => modalFooterStyle,
  modalHeadingStyle: () => modalHeadingStyle,
  modalWidthMap: () => modalWidthMap,
  nextFocusedDate: () => nextFocusedDate,
  progressBarHeightMap: () => progressBarHeightMap,
  radiusMap: () => radiusMap,
  sectionLabelStyle: () => sectionLabelStyle,
  semanticColorMap: () => semanticColorMap,
  shadowMap: () => shadowMap,
  spacingMap: () => spacingMap,
  tagChipStyle: () => tagChipStyle,
  useCalendarContext: () => useCalendarContext,
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
var import_core2 = require("../../core/dist/index.cjs");

// src/components/Select/Select.tsx
var import_react2 = require("react");
var import_core = require("../../core/dist/index.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
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
var SelectContext = (0, import_react2.createContext)(null);
function useSelectContext(part) {
  const ctx = (0, import_react2.useContext)(SelectContext);
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
  (0, import_core.useInjectStyles)(SELECT_STYLES_ID, selectCSS);
  const instanceId = (0, import_react2.useId)();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = (0, import_react2.useState)(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = (0, import_react2.useState)(false);
  const [focusedValue, setFocusedValue] = (0, import_react2.useState)(null);
  const [dropDirection, setDropDirection] = (0, import_react2.useState)("down");
  const containerRef = (0, import_react2.useRef)(null);
  const triggerRef = (0, import_react2.useRef)(null);
  const [items, setItems] = (0, import_react2.useState)([]);
  const registerItem = (0, import_react2.useCallback)((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = (0, import_react2.useCallback)((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = (0, import_react2.useCallback)(
    (next, fromUser) => {
      if (!isControlled) setInternalValue(next);
      if (fromUser) {
        onValueChange?.(next);
        onChange?.({ target: { value: next, name } });
      }
    },
    [isControlled, onValueChange, onChange, name]
  );
  const calculateDirection = (0, import_react2.useCallback)(() => {
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
  const openMenu = (0, import_react2.useCallback)(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const current = items.find((i) => i.value === value && !i.disabled);
    const firstEnabled = items.find((i) => !i.disabled);
    setFocusedValue((current ?? firstEnabled)?.value ?? null);
  }, [disabled, calculateDirection, items, value]);
  const closeMenu = (0, import_react2.useCallback)(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const toggleMenu = (0, import_react2.useCallback)(() => {
    if (open) closeMenu();
    else openMenu();
  }, [open, openMenu, closeMenu]);
  const selectItem = (0, import_react2.useCallback)(
    (itemValue) => {
      const item = items.find((i) => i.value === itemValue);
      if (!item || item.disabled) return;
      setValue(item.value, true);
      closeMenu();
      triggerRef.current?.focus();
    },
    [items, setValue, closeMenu]
  );
  (0, import_react2.useEffect)(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, closeMenu]);
  const handleKeyDown = (0, import_react2.useCallback)(
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
  const ctx = (0, import_react2.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }),
              items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        ...hasError ? errorBorderStyle : {},
        ...disabled ? disabledStyle : {},
        ...hasSelection ? {} : placeholderStyle
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: triggerTextStyle, children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronSVG, { rotated: open }) })
      ]
    }
  );
}
function Value({ placeholder }) {
  const { value, items } = useSelectContext("Value");
  const selected = items.find((i) => i.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: selected?.label ?? placeholder ?? "\xA0" });
}
function Content({ children }) {
  const { open, listboxId, dropDirection, focusedValue } = useSelectContext("Content");
  const ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
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
    marginTop: import_core.semantic.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: import_core.semantic.spaceXs
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        background: import_core.semantic.colorSurfacePanel,
        border: `${import_core.semantic.borderWidthDefault} solid ${import_core.semantic.colorBorder}`,
        borderRadius: import_core.semantic.radiusMd,
        padding: import_core.semantic.spaceXs,
        zIndex: import_core.semantic.zIndexSticky,
        boxShadow: import_core.semantic.shadowMd,
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
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  gap: import_core.semantic.spaceSm,
  width: "100%",
  padding: `${import_core.semantic.spaceSm} ${import_core.semantic.spaceMd}`,
  fontSize: import_core.semantic.fontSizeSm,
  lineHeight: import_core.semantic.lineHeightTight,
  fontFamily: import_core.semantic.fontSans,
  color: import_core.semantic.colorText,
  background: import_core.semantic.colorSurfaceInput,
  border: `${import_core.semantic.borderWidthDefault} solid ${import_core.semantic.colorBorder}`,
  borderRadius: import_core.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core.semantic.transitionBase}, box-shadow ${import_core.semantic.transitionBase}`,
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
  color: import_core.semantic.colorTextSecondary,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
var errorBorderStyle = {
  borderColor: import_core.semantic.colorBorderError
};
var disabledStyle = {
  background: import_core.semantic.colorSurfaceDisabled,
  color: import_core.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var placeholderStyle = {
  color: import_core.semantic.colorTextPlaceholder
};
function ChevronSVG({ rotated }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        transition: `transform ${import_core.semantic.transitionBase}`,
        transform: rotated ? "rotate(180deg)" : "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// src/components/ThemePicker/ThemePicker.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var DOT = {
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "var(--color-action-primary)",
  flexShrink: 0,
  marginRight: "0.5rem",
  verticalAlign: "middle"
};
function GridView({ descriptions }) {
  (0, import_core2.useInjectStyles)(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = (0, import_core2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "alttab-theme-picker", children: Array.from(themes.values()).map((def) => {
    const isActive = resolved === def.name;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "alttab-theme-card__name", children: def.label }),
          descriptions[def.name] && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "alttab-theme-card__desc", children: descriptions[def.name] })
        ]
      },
      def.name
    );
  }) });
}
function CompactView() {
  const { resolved, themes, setTheme } = (0, import_core2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Select.Root, { value: resolved, onValueChange: setTheme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Select.Trigger, { "aria-label": "Select theme", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": true, style: DOT }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Select.Value, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Select.Content, { children: Array.from(themes.values()).map((def) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Select.Item, { value: def.name, textValue: def.label, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": true, style: DOT }),
      def.label
    ] }, def.name)) })
  ] });
}
var ThemePicker = (0, import_react3.forwardRef)(
  function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
    if (variant === "compact") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, style: { display: "inline-block" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CompactView, {}) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GridView, { descriptions }) });
  }
);

// src/icons/icons.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) });
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 18l6-6-6-6" }) });
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 9l6 6 6-6" }) });
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15 18l-6-6 6-6" }) });
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 15l-6-6-6 6" }) });
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 6L9 17l-5-5" }) });
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M22 4L12 14.01l-3-3" })
  ] });
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] });
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] });
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] });
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 21l-4.35-4.35" })
  ] });
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" }) });
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] });
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 5v14M5 12h14" }) });
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14" }) });
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] });
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" }) });
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 12h18M3 6h18M3 18h18" }) });
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M1 1l22 22" })
  ] });
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] });
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) });
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "19", r: "1" })
  ] });
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }) });
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
    (0, import_core3.useInjectStyles)(SPINNER_STYLES_ID, spinnerCSS);
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
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_core3.Slot,
        {
          ref,
          ...commonProps,
          "aria-disabled": isDisabled2 || void 0,
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "alttab-btn-spinner" }) : children
      }
    );
  }
);

// src/components/Stack/Stack.tsx
var import_react5 = require("react");

// src/types.ts
var import_core4 = require("../../core/dist/index.cjs");
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
  primary: import_core4.semantic.colorActionPrimary,
  success: import_core4.semantic.colorSuccess,
  warning: import_core4.semantic.colorWarning,
  error: import_core4.semantic.colorError,
  info: import_core4.semantic.colorInfo,
  muted: import_core4.semantic.colorTextMuted
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
  xs: import_core4.semantic.spaceXs,
  sm: import_core4.semantic.spaceSm,
  md: import_core4.semantic.spaceMd,
  lg: import_core4.semantic.spaceLg,
  xl: import_core4.semantic.spaceXl,
  "2xl": import_core4.semantic.space2xl
};
var radiusMap = {
  none: "0",
  sm: import_core4.semantic.radiusSm,
  md: import_core4.semantic.radiusMd,
  lg: import_core4.semantic.radiusLg,
  full: import_core4.semantic.radiusFull
};
var shadowMap = {
  sm: import_core4.semantic.shadowSm,
  md: import_core4.semantic.shadowMd,
  lg: import_core4.semantic.shadowLg
};

// src/components/Stack/Stack.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var gapMap = spacingMap;
var Stack = (0, import_react5.forwardRef)(
  function Stack2({
    direction = "vertical",
    gap = "md",
    align,
    justify,
    wrap,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_react7 = require("react");
var import_core6 = require("../../core/dist/index.cjs");

// src/components/Surface/Surface.tsx
var import_react6 = require("react");
var import_core5 = require("../../core/dist/index.cjs");
var import_jsx_runtime6 = require("react/jsx-runtime");
var levelMap = {
  page: import_core5.semantic.colorSurfacePage,
  default: import_core5.semantic.colorSurface,
  solid: import_core5.semantic.colorSurfaceSolid,
  raised: import_core5.semantic.colorSurfaceRaised,
  panel: import_core5.semantic.colorSurfacePanel,
  input: import_core5.semantic.colorSurfaceInput,
  overlay: import_core5.semantic.colorSurfaceOverlay
};
function getSurfaceStyle({
  level = "solid",
  tint,
  padding,
  radius = "lg",
  border = false,
  shadow
}) {
  const borderValue = border === true ? `${import_core5.semantic.borderWidthDefault} solid ${import_core5.semantic.colorBorder}` : typeof border === "string" ? `${import_core5.semantic.borderWidthDefault} solid ${semanticColorMap[border]}` : void 0;
  const tintBg = tint ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)` : void 0;
  return {
    background: tintBg ?? levelMap[level],
    padding: padding ? spacingMap[padding] : void 0,
    borderRadius: radiusMap[radius],
    border: borderValue,
    boxShadow: shadow ? shadowMap[shadow] : void 0,
    color: import_core5.semantic.colorText
  };
}
var Surface = (0, import_react6.forwardRef)(
  function Surface2({
    level = "solid",
    tint,
    padding,
    radius = "lg",
    border = false,
    shadow,
    as = "div",
    asChild = false,
    children,
    ...rest
  }, ref) {
    const style = getSurfaceStyle({ level, tint, padding, radius, border, shadow });
    const commonProps = {
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-label": rest["aria-label"],
      "aria-labelledby": rest["aria-labelledby"],
      style
    };
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_core5.Slot, { ref, ...commonProps, children });
    }
    return (0, import_react6.createElement)(as, { ref, ...commonProps }, children);
  }
);

// src/components/Card/Card.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var variantSurfaceProps = {
  default: { level: "solid", border: true, shadow: "sm" },
  flat: { level: "raised", border: true },
  elevated: { level: "solid", border: true, shadow: "md" }
};
var HOVER_STYLES_ID = "4lt7ab-card-hover";
var HOVER_STYLES_CSS = `
[data-card-hover] {
  cursor: pointer;
  transition: transform ${import_core6.semantic.transitionSlow}, border-color ${import_core6.semantic.transitionSlow}, box-shadow ${import_core6.semantic.transitionSlow};
}
[data-card-hover]:hover {
  transform: translateY(-2px);
  border-color: ${import_core6.semantic.colorBorderFocused};
  box-shadow: ${import_core6.semantic.shadowMd};
}
`;
var GLOW_STYLES_ID = "4lt7ab-card-glow";
var GLOW_STYLES_CSS = `
[data-card-glow] {
  --card-glow-strength: 0;
}
`;
var GLOW_BOX_SHADOW = `0 0 calc(var(--card-glow-strength, 0) * 16px) calc(var(--card-glow-strength, 0) * 2px) color-mix(in srgb, ${import_core6.semantic.colorActionPrimary} calc(var(--card-glow-strength, 0) * 70%), transparent)`;
function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var Card = (0, import_react7.forwardRef)(
  function Card2({
    variant = "default",
    padding = "lg",
    hover = false,
    glow = false,
    asChild = false,
    children,
    ...rest
  }, ref) {
    (0, import_core6.useInjectStyles)(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    (0, import_core6.useInjectStyles)(GLOW_STYLES_ID, GLOW_STYLES_CSS);
    const internalRef = (0, import_react7.useRef)(null);
    const setRef = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    const { config, subscribe } = (0, import_core6.useThemeRhythm)();
    (0, import_react7.useEffect)(() => {
      if (!glow || !config || prefersReducedMotion()) return;
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
    const surfaceProps = {
      ...variantSurfaceProps[variant],
      padding,
      radius: "lg",
      asChild: true
    };
    const cardSlotProps = {
      "data-card-hover": hover ? "" : void 0,
      "data-card-glow": glow ? "" : void 0,
      id: rest.id,
      "data-testid": rest["data-testid"]
    };
    if (glow) {
      cardSlotProps.style = { boxShadow: GLOW_BOX_SHADOW };
    }
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Surface, { ...surfaceProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_core6.Slot, { ref: setRef, ...cardSlotProps, children }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Surface, { ...surfaceProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ref: setRef, ...cardSlotProps, children }) });
  }
);

// src/components/LinkCard/LinkCard.tsx
var import_react8 = require("react");
var import_core7 = require("../../core/dist/index.cjs");
var import_jsx_runtime8 = require("react/jsx-runtime");
var STYLES_ID = "alttab-link-card";
var linkCardCSS = (
  /* css */
  `
  .alttab-link-card {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: border-color ${import_core7.semantic.transitionBase}, transform ${import_core7.semantic.transitionBase};
  }

  .alttab-link-card:hover {
    border-color: ${import_core7.semantic.colorTextLink};
    transform: translateY(-2px);
  }

  .alttab-link-card__title {
    display: block;
    font-family: ${import_core7.semantic.fontSerif};
    font-size: 1.125rem;
    font-weight: 600;
    color: ${import_core7.semantic.colorText};
    margin-bottom: 0.25rem;
  }

  .alttab-link-card__desc {
    display: block;
    font-size: 0.875rem;
    color: ${import_core7.semantic.colorTextMuted};
  }
`
);
var LinkCard = (0, import_react8.forwardRef)(function LinkCard2({
  title,
  description,
  external,
  href,
  target,
  rel,
  onClick,
  id,
  "aria-label": ariaLabel,
  "data-testid": dataTestId
}, ref) {
  (0, import_core7.useInjectStyles)(STYLES_ID, linkCardCSS);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Card, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "a",
    {
      ref,
      className: "alttab-link-card",
      href,
      target: external ? "_blank" : target,
      rel: external ? "noopener noreferrer" : rel,
      onClick,
      id,
      "aria-label": ariaLabel,
      "data-testid": dataTestId,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "alttab-link-card__title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "alttab-link-card__desc", children: description })
      ]
    }
  ) });
});

// src/components/Field/Field.tsx
var import_core8 = require("../../core/dist/index.cjs");
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var labelStyle = {
  display: "block",
  fontSize: import_core8.semantic.fontSizeSm,
  fontWeight: import_core8.semantic.fontWeightMedium,
  lineHeight: import_core8.semantic.lineHeightTight,
  color: import_core8.semantic.colorText,
  fontFamily: import_core8.semantic.fontSans
};
var requiredStyle = {
  color: import_core8.semantic.colorError,
  marginLeft: "0.125rem"
};
var helpStyle = {
  fontSize: import_core8.semantic.fontSizeXs,
  lineHeight: import_core8.semantic.lineHeightTight,
  color: import_core8.semantic.colorTextMuted,
  fontFamily: import_core8.semantic.fontSans,
  margin: 0
};
var errorStyle = {
  fontSize: import_core8.semantic.fontSizeXs,
  lineHeight: import_core8.semantic.lineHeightTight,
  color: import_core8.semantic.colorError,
  fontFamily: import_core8.semantic.fontSans,
  margin: 0
};
var Field = (0, import_react9.forwardRef)(
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
    const autoId = (0, import_react9.useId)();
    const helpId = help ? `${autoId}-help` : void 0;
    const errorId = error ? `${autoId}-error` : void 0;
    const describedBy = [errorId, helpId].filter(Boolean).join(" ") || void 0;
    const enhancedChildren = (0, import_react9.isValidElement)(children) ? (0, import_react9.cloneElement)(children, {
      "aria-describedby": describedBy
    }) : children;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-describedby": rest["aria-describedby"],
        style: {
          display: "flex",
          flexDirection: "column",
          gap: import_core8.semantic.spaceXs,
          opacity: disabled ? 0.6 : void 0
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { htmlFor, style: labelStyle, children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: requiredStyle, "aria-hidden": "true", children: "*" })
          ] }),
          enhancedChildren,
          error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { id: errorId, role: "alert", style: errorStyle, children: error }),
          !error && help && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { id: helpId, style: helpStyle, children: help })
        ]
      }
    );
  }
);

// src/components/Input/Input.tsx
var import_react10 = require("react");
var import_core9 = require("../../core/dist/index.cjs");
var import_jsx_runtime10 = require("react/jsx-runtime");
var baseStyle = {
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
  boxSizing: "border-box"
};
var errorBorderStyle2 = {
  borderColor: import_core9.semantic.colorBorderError
};
var disabledStyle2 = {
  background: import_core9.semantic.colorSurfaceDisabled,
  color: import_core9.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var Input = (0, import_react10.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
          ...hasError ? errorBorderStyle2 : {},
          ...disabled ? disabledStyle2 : {}
        }
      }
    );
  }
);

// src/components/Textarea/Textarea.tsx
var import_react11 = require("react");
var import_core10 = require("../../core/dist/index.cjs");
var import_jsx_runtime11 = require("react/jsx-runtime");
var baseStyle2 = {
  display: "block",
  width: "100%",
  padding: `${import_core10.semantic.spaceSm} ${import_core10.semantic.spaceMd}`,
  fontSize: import_core10.semantic.fontSizeSm,
  lineHeight: import_core10.semantic.lineHeightBase,
  fontFamily: import_core10.semantic.fontSans,
  color: import_core10.semantic.colorText,
  background: import_core10.semantic.colorSurfaceInput,
  border: `${import_core10.semantic.borderWidthDefault} solid ${import_core10.semantic.colorBorder}`,
  borderRadius: import_core10.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core10.semantic.transitionBase}, box-shadow ${import_core10.semantic.transitionBase}`,
  boxSizing: "border-box",
  resize: "vertical",
  minHeight: "5rem"
};
var errorBorderStyle3 = {
  borderColor: import_core10.semantic.colorBorderError
};
var disabledStyle3 = {
  background: import_core10.semantic.colorSurfaceDisabled,
  color: import_core10.semantic.colorTextDisabled,
  cursor: "not-allowed",
  resize: "none"
};
var Textarea = (0, import_react11.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
          ...hasError ? errorBorderStyle3 : {},
          ...disabled ? disabledStyle3 : {}
        }
      }
    );
  }
);

// src/components/Badge/Badge.tsx
var import_react12 = require("react");
var import_core11 = require("../../core/dist/index.cjs");
var import_jsx_runtime12 = require("react/jsx-runtime");
var variantStyles2 = {
  default: {
    border: `${import_core11.semantic.borderWidthDefault} solid ${import_core11.semantic.colorBorder}`,
    color: import_core11.semantic.colorTextSecondary
  },
  primary: {
    background: `color-mix(in srgb, ${import_core11.semantic.colorActionPrimary} 14%, transparent)`,
    color: import_core11.semantic.colorActionPrimary
  },
  success: {
    background: import_core11.semantic.colorSuccessBg,
    color: import_core11.semantic.colorSuccess
  },
  warning: {
    background: import_core11.semantic.colorWarningBg,
    color: import_core11.semantic.colorWarning
  },
  error: {
    background: import_core11.semantic.colorErrorBg,
    color: import_core11.semantic.colorError
  },
  info: {
    background: import_core11.semantic.colorInfoBg,
    color: import_core11.semantic.colorInfo
  }
};
var baseStyles2 = {
  display: "inline-block",
  padding: `${import_core11.semantic.spaceXs} ${import_core11.semantic.spaceSm}`,
  borderRadius: import_core11.semantic.radiusFull,
  fontSize: import_core11.semantic.fontSizeXs,
  fontWeight: import_core11.semantic.fontWeightSemibold,
  fontFamily: import_core11.semantic.fontSans,
  textTransform: "uppercase",
  letterSpacing: import_core11.semantic.letterSpacingWide
};
var xsBaseStyles = {
  display: "inline-block",
  fontSize: "0.6rem",
  fontFamily: import_core11.semantic.fontMono,
  fontWeight: import_core11.semantic.fontWeightMedium,
  color: import_core11.semantic.colorTextMuted,
  borderRadius: import_core11.semantic.radiusFull,
  background: `color-mix(in srgb, ${import_core11.semantic.colorBorder} 40%, transparent)`,
  padding: `0.0625rem ${import_core11.semantic.spaceXs}`,
  lineHeight: import_core11.semantic.lineHeightTight,
  letterSpacing: import_core11.semantic.letterSpacingWide,
  textTransform: "lowercase"
};
var Badge = (0, import_react12.forwardRef)(
  function Badge2({
    children,
    variant = "default",
    size = "default",
    ...rest
  }, ref) {
    const isXs = size === "xs";
    const base = isXs ? xsBaseStyles : baseStyles2;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "span",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        style: {
          ...base,
          ...variantStyles2[variant]
        },
        children
      }
    );
  }
);

// src/components/Icon/Icon.tsx
var import_react13 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var IconFontContext = (0, import_react13.createContext)(void 0);
function IconFontProvider({ fontClass, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(IconFontContext.Provider, { value: fontClass, children });
}
var Icon = (0, import_react13.forwardRef)(
  function Icon2({ name, size = "lg", fontClass, "aria-label": ariaLabel, id, "data-testid": dataTestId }, ref) {
    const contextFontClass = (0, import_react13.useContext)(IconFontContext);
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;
    const px = iconSizeMap[size];
    const resolvedFontClass = fontClass ?? contextFontClass;
    if (!IconComponent && resolvedFontClass) {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        children: IconComponent ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(IconComponent, { size: px }) : null
      }
    );
  }
);

// src/components/IconButton/IconButton.tsx
var import_react14 = require("react");
var import_core12 = require("../../core/dist/index.cjs");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
var IconButton = (0, import_react14.forwardRef)(
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
    const uid = (0, import_react14.useId)();
    const styleId = `icon-btn-${uid.replace(/:/g, "")}`;
    (0, import_core12.useInjectStyles)(
      styleId,
      `[data-icon-btn-id="${styleId}"]:hover:not(:disabled) {
        background: color-mix(in srgb, currentColor 8%, transparent);
      }
      [data-icon-btn-id="${styleId}"]:focus-visible {
        outline: ${import_core12.semantic.focusRingWidth} solid ${import_core12.semantic.focusRingColor};
        outline-offset: ${import_core12.semantic.focusRingOffset};
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
      borderRadius: import_core12.semantic.radiusFull,
      background: "transparent",
      border: "none",
      color: import_core12.semantic.colorTextMuted,
      cursor: "pointer",
      padding: 0
    };
    const iconAndBadge = /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { name: icon, size: iconSizeForButton[size], fontClass }),
      badge && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "span",
        {
          style: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 8,
            height: 8,
            borderRadius: import_core12.semantic.radiusFull,
            background: import_core12.semantic.colorError,
            border: `${import_core12.semantic.borderWidthThick} solid ${import_core12.semantic.colorSurface}`
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
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_core12.Slot, { ref, ...commonProps, "aria-disabled": disabled || void 0, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_react15 = require("react");
var import_core13 = require("../../core/dist/index.cjs");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Overlay = (0, import_react15.forwardRef)(
  function Overlay2({
    onClick,
    zIndex = import_core13.semantic.zIndexSticky
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        ref,
        role: "presentation",
        onClick,
        style: {
          position: "fixed",
          inset: 0,
          background: import_core13.semantic.colorSurfaceOverlay,
          zIndex
        }
      }
    );
  }
);

// src/components/Skeleton/Skeleton.tsx
var import_react16 = require("react");
var import_core14 = require("../../core/dist/index.cjs");
var import_jsx_runtime16 = require("react/jsx-runtime");
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
var Skeleton = (0, import_react16.forwardRef)(
  function Skeleton2({
    width = "100%",
    height = 16,
    radius = "md"
  }, ref) {
    const { durationCss } = (0, import_core14.useThemeRhythm)();
    (0, import_core14.useInjectStyles)(SKELETON_STYLES_ID, SKELETON_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        ref,
        "data-skeleton": "",
        "aria-hidden": "true",
        style: {
          width,
          height,
          borderRadius: radiusMap[radius],
          background: import_core14.semantic.colorSurfaceRaised,
          ...durationCss ? { "--skeleton-duration": durationCss } : void 0
        }
      }
    );
  }
);
var CardSkeleton = (0, import_react16.forwardRef)(
  function CardSkeleton2(_props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          borderRadius: import_core14.semantic.radiusLg,
          border: `${import_core14.semantic.borderWidthDefault} solid ${import_core14.semantic.colorBorder}`,
          padding: import_core14.semantic.spaceLg,
          display: "flex",
          flexDirection: "column",
          gap: import_core14.semantic.spaceSm
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Skeleton, { width: "60%", height: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Skeleton, { width: "100%", height: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Skeleton, { width: "80%", height: 14 })
        ]
      }
    );
  }
);
var RowSkeleton = (0, import_react16.forwardRef)(
  function RowSkeleton2(_props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "flex",
          alignItems: "center",
          gap: import_core14.semantic.spaceSm,
          padding: `${import_core14.semantic.spaceSm} 0`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Skeleton, { width: 32, height: 32, radius: "full" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: import_core14.semantic.spaceXs }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Skeleton, { width: "40%", height: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Skeleton, { width: "70%", height: 12 })
          ] })
        ]
      }
    );
  }
);

// src/components/ProgressBar/ProgressBar.tsx
var import_react17 = require("react");
var import_core15 = require("../../core/dist/index.cjs");
var import_jsx_runtime17 = require("react/jsx-runtime");
var ProgressBar = (0, import_react17.forwardRef)(
  function ProgressBar2({
    segments,
    height = "md",
    "aria-label": ariaLabel
  }, ref) {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    const px = progressBarHeightMap[height];
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
          background: import_core15.semantic.colorSurfaceRaised
        },
        children: segments.map((segment, i) => {
          const pct = total > 0 ? segment.value / total * 100 : 0;
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_react18 = require("react");
var import_core16 = require("../../core/dist/index.cjs");
var import_jsx_runtime18 = require("react/jsx-runtime");
var EmptyState = (0, import_react18.forwardRef)(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    children,
    action
  }, ref) {
    const content = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { padding: import_core16.semantic.spaceXl }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Stack, { align: "center", gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { style: { color: import_core16.semantic.colorTextMuted, display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Icon, { name: icon, size: "xl" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "span",
        {
          style: {
            color: import_core16.semantic.colorTextSecondary,
            fontSize: import_core16.semantic.fontSizeSm,
            textAlign: "center",
            fontFamily: import_core16.semantic.fontSans
          },
          children: message
        }
      ),
      children,
      action && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { marginTop: import_core16.semantic.spaceSm }, children: action })
    ] }) });
    if (variant === "card") {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Card, { ref, variant: "flat", children: content });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { ref, children: content });
  }
);

// src/components/Pagination/Pagination.tsx
var import_react19 = require("react");
var import_core17 = require("../../core/dist/index.cjs");
var import_jsx_runtime19 = require("react/jsx-runtime");
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = (0, import_react19.forwardRef)(
  function Pagination2({
    page,
    totalPages,
    total,
    onPageChange,
    labels
  }, ref) {
    const resolvedLabels = { ...defaultLabels, ...labels };
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "div",
      {
        ref,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: import_core17.semantic.spaceSm
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              disabled: page <= 1,
              onClick: () => onPageChange(page - 1),
              children: resolvedLabels.previous
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
            "span",
            {
              style: {
                color: import_core17.semantic.colorTextMuted,
                fontSize: import_core17.semantic.fontSizeSm,
                fontFamily: import_core17.semantic.fontSans
              },
              children: [
                resolvedLabels.pageOf(page, totalPages),
                " (",
                total,
                " total)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_react20 = require("react");
var import_core18 = require("../../core/dist/index.cjs");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Header = (0, import_react20.forwardRef)(
  function Header2({ title, level = "section", subtitle, indicator, trailing }, ref) {
    const isPage = level === "page";
    const Tag = isPage ? "h1" : "h2";
    const titleStyle2 = isPage ? {
      margin: 0,
      fontFamily: import_core18.semantic.fontSans,
      fontWeight: import_core18.semantic.fontWeightBold,
      color: import_core18.semantic.colorText
    } : {
      margin: 0,
      fontFamily: import_core18.semantic.fontSans,
      fontWeight: import_core18.semantic.fontWeightSemibold,
      fontSize: import_core18.semantic.fontSizeBase,
      lineHeight: import_core18.semantic.lineHeightTight,
      color: import_core18.semantic.colorText
    };
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        ref,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: isPage ? "flex-end" : "center",
          gap: import_core18.semantic.spaceMd
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: import_core18.semantic.spaceSm }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Tag, { style: titleStyle2, children: title }),
              indicator
            ] }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { style: { color: import_core18.semantic.colorTextMuted, fontSize: import_core18.semantic.fontSizeSm, fontFamily: import_core18.semantic.fontSans }, children: subtitle })
          ] }),
          trailing && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { style: { display: "flex", alignItems: "center", gap: import_core18.semantic.spaceSm, flexShrink: 0 }, children: trailing })
        ]
      }
    );
  }
);

// src/components/ModalShell/ModalShell.tsx
var import_react21 = require("react");
var import_react_dom = require("react-dom");
var import_core19 = require("../../core/dist/index.cjs");
var import_jsx_runtime21 = require("react/jsx-runtime");
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: import_core19.semantic.fontWeightSemibold,
  fontFamily: import_core19.semantic.fontSans,
  color: import_core19.semantic.colorText,
  fontSize: import_core19.semantic.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: import_core19.semantic.spaceSm
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
    width = "md",
    zIndex = import_core19.semantic.zIndexModal,
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
              padding: import_core19.semantic.spaceMd,
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
                  background: import_core19.semantic.colorSurface,
                  color: import_core19.semantic.colorText,
                  borderRadius: import_core19.semantic.radiusLg,
                  boxShadow: import_core19.semantic.shadowLg,
                  border: `${import_core19.semantic.borderWidthDefault} solid ${import_core19.semantic.colorBorder}`,
                  padding: import_core19.semantic.spaceXl,
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
var import_core20 = require("../../core/dist/index.cjs");
var sectionLabelStyle = {
  display: "block",
  fontSize: import_core20.semantic.fontSizeXs,
  fontWeight: import_core20.semantic.fontWeightSemibold,
  fontFamily: import_core20.semantic.fontSans,
  color: import_core20.semantic.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: import_core20.semantic.letterSpacingWide
};

// src/styles/tagChipStyle.ts
var import_core21 = require("../../core/dist/index.cjs");
var tagChipStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: import_core21.semantic.spaceXs,
  fontSize: import_core21.semantic.fontSizeXs,
  color: import_core21.semantic.colorActionPrimary,
  background: import_core21.semantic.colorSurfaceRaised,
  borderRadius: import_core21.semantic.radiusFull,
  padding: `${import_core21.semantic.spaceXs} ${import_core21.semantic.spaceSm}`,
  fontFamily: import_core21.semantic.fontSans
};

// src/components/ConfirmDialog/ConfirmDialog.tsx
var import_react22 = require("react");
var import_core22 = require("../../core/dist/index.cjs");
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
            margin: `${import_core22.semantic.spaceSm} 0 ${children ? "0" : import_core22.semantic.spaceLg}`,
            color: import_core22.semantic.colorTextMuted,
            fontSize: import_core22.semantic.fontSizeSm,
            fontFamily: import_core22.semantic.fontSans
          },
          children: message
        }
      ),
      children && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { margin: `${import_core22.semantic.spaceSm} 0 ${import_core22.semantic.spaceLg}` }, children }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/StatusDot/StatusDot.tsx
var import_react23 = require("react");
var import_core23 = require("../../core/dist/index.cjs");
var import_jsx_runtime23 = require("react/jsx-runtime");
var variantColors = {
  default: import_core23.semantic.colorTextMuted,
  primary: import_core23.semantic.colorActionPrimary,
  success: import_core23.semantic.colorSuccess,
  warning: import_core23.semantic.colorWarning,
  error: import_core23.semantic.colorError,
  info: import_core23.semantic.colorInfo
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
var StatusDot = (0, import_react23.forwardRef)(
  function StatusDot2({
    variant = "default",
    size = "md",
    animate = "none",
    "aria-label": ariaLabel
  }, ref) {
    const resolvedColor = variantColors[variant];
    const resolvedSize = sizeMap[size];
    const isPulsing = animate === "pulse";
    const { durationCss } = (0, import_core23.useThemeRhythm)();
    (0, import_core23.useInjectStyles)(PULSE_STYLES_ID, PULSE_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
          borderRadius: import_core23.semantic.radiusFull,
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
var import_react24 = require("react");
var import_core24 = require("../../core/dist/index.cjs");
var import_core25 = require("../../core/dist/index.cjs");
var import_jsx_runtime24 = require("react/jsx-runtime");
var spaceMap = {
  xs: import_core24.semantic.spaceXs,
  sm: import_core24.semantic.spaceSm,
  md: import_core24.semantic.spaceMd,
  lg: import_core24.semantic.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${import_core24.semantic.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${import_core24.semantic.colorSurfaceRaised};
  border-bottom-color: ${import_core24.semantic.colorSurfaceRaised};
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
  background: ${import_core24.semantic.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${import_core24.semantic.borderWidthDefault} solid ${import_core24.semantic.colorBorder}`,
    borderRadius: import_core24.semantic.radiusLg,
    boxShadow: import_core24.semantic.shadowSm
  },
  flat: {}
};
var Table = (0, import_react24.forwardRef)(
  function Table2({
    variant = "default",
    density = "md",
    children
  }, ref) {
    (0, import_core25.useInjectStyles)(TABLE_STYLES_ID, TABLE_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "div",
      {
        ref,
        style: {
          overflowX: "auto",
          ...wrapperVariants[variant]
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "table",
          {
            "data-table-density": density,
            style: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: import_core24.semantic.fontSizeSm,
              fontFamily: import_core24.semantic.fontSans,
              color: import_core24.semantic.colorText
            },
            children
          }
        )
      }
    );
  }
);
var TableHeader = (0, import_react24.forwardRef)(
  function TableHeader2({ children }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("thead", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { children }) });
  }
);
var TableHeaderCell = (0, import_react24.forwardRef)(
  function TableHeaderCell2({
    align = "left",
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "th",
      {
        ref,
        colSpan,
        style: {
          padding: `${import_core24.semantic.spaceSm} ${import_core24.semantic.spaceMd}`,
          textAlign: align,
          fontWeight: import_core24.semantic.fontWeightSemibold,
          fontSize: import_core24.semantic.fontSizeXs,
          color: import_core24.semantic.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: import_core24.semantic.letterSpacingWide,
          borderBottom: `${import_core24.semantic.borderWidthThick} solid ${import_core24.semantic.colorBorder}`,
          whiteSpace: "nowrap",
          width: width !== void 0 ? `${width}px` : void 0
        },
        children
      }
    );
  }
);
var TableBody = (0, import_react24.forwardRef)(
  function TableBody2({ children }, ref) {
    let dataRowIndex = 0;
    const styledChildren = import_react24.Children.map(children, (child) => {
      if (!(0, import_react24.isValidElement)(child)) return child;
      const childProps = child.props;
      if (child.type === TableGroupHeader || child.type === TableEmptyRow) {
        return child;
      }
      const isEven = dataRowIndex % 2 === 1;
      dataRowIndex++;
      if (!isEven || childProps.selected) return child;
      const cells = import_react24.Children.map(childProps.children, (cell) => {
        if (!(0, import_react24.isValidElement)(cell)) return cell;
        const cellStyle = cell.props.style;
        return (0, import_react24.cloneElement)(cell, {
          style: { ...cellStyle, background: "color-mix(in srgb, var(--color-text) 5%, transparent)" }
        });
      });
      return (0, import_react24.cloneElement)(child, {}, cells);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tbody", { ref, children: styledChildren });
  }
);
var TableRow = (0, import_react24.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
var TableCell = (0, import_react24.forwardRef)(
  function TableCell2({
    align = "left",
    truncate = false,
    muted = false,
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "td",
      {
        ref,
        colSpan,
        style: {
          padding: `${import_core24.semantic.spaceSm} ${import_core24.semantic.spaceMd}`,
          borderBottom: `${import_core24.semantic.borderWidthDefault} solid ${import_core24.semantic.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? import_core24.semantic.colorTextMuted : void 0,
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
var TableGroupHeader = (0, import_react24.forwardRef)(
  function TableGroupHeader2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { ref, style: { cursor: "default" }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "td",
      {
        colSpan,
        style: {
          padding: `${import_core24.semantic.spaceXs} ${import_core24.semantic.spaceMd}`,
          background: import_core24.semantic.colorSurfaceRaised,
          borderBottom: `${import_core24.semantic.borderWidthDefault} solid ${import_core24.semantic.colorBorder}`,
          fontSize: import_core24.semantic.fontSizeXs,
          fontWeight: import_core24.semantic.fontWeightBold,
          letterSpacing: import_core24.semantic.letterSpacingWide,
          textTransform: "uppercase",
          color: import_core24.semantic.colorTextMuted,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children
      }
    ) });
  }
);
var TableEmptyRow = (0, import_react24.forwardRef)(
  function TableEmptyRow2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "td",
      {
        colSpan,
        style: {
          padding: `${import_core24.semantic.spaceXl} ${import_core24.semantic.spaceMd}`,
          textAlign: "center",
          color: import_core24.semantic.colorTextMuted,
          fontSize: import_core24.semantic.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/Table/FilterBar.tsx
var import_react25 = require("react");
var import_core26 = require("../../core/dist/index.cjs");
var import_jsx_runtime25 = require("react/jsx-runtime");
var FilterBarContext = (0, import_react25.createContext)(null);
function useFilterBarContext(part) {
  const ctx = (0, import_react25.useContext)(FilterBarContext);
  if (!ctx) {
    throw new Error(
      `Table.FilterBar.${part} must be rendered inside <Table.FilterBar>. See the upgrade guide for the 0.4.0 compound API.`
    );
  }
  return ctx;
}
function FilterBar({
  values,
  onChange,
  filters,
  children,
  style,
  ...rest
}) {
  if (filters !== void 0 && children !== void 0) {
    throw new Error(
      "<Table.FilterBar> received both `filters` and `children`. Pick one mode."
    );
  }
  const commit = (0, import_react25.useCallback)(
    (key, value) => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange]
  );
  const ctxValue = { values, commit };
  const content = filters ? filters.map((filter) => {
    if (filter.type === "text") {
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        FilterBarText,
        {
          field: filter.key,
          placeholder: filter.placeholder,
          debounceMs: filter.debounceMs
        },
        filter.key
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      FilterBarSelect,
      {
        field: filter.key,
        placeholder: filter.placeholder,
        options: filter.options
      },
      filter.key
    );
  }) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FilterBarContext.Provider, { value: ctxValue, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: import_core26.semantic.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...rest,
      children: content
    }
  ) });
}
function FilterBarText({
  field,
  placeholder,
  debounceMs = 300
}) {
  const { values, commit } = useFilterBarContext("Text");
  const external = values[field] ?? "";
  const [local, setLocal] = (0, import_react25.useState)(external);
  const timerRef = (0, import_react25.useRef)(null);
  (0, import_react25.useEffect)(() => {
    setLocal(external);
  }, [external]);
  const handleChange = (0, import_react25.useCallback)(
    (e) => {
      const next = e.target.value;
      setLocal(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        commit(field, next);
      }, debounceMs);
    },
    [commit, field, debounceMs]
  );
  (0, import_react25.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Input, { value: local, onChange: handleChange, placeholder }) });
}
function FilterBarSelect({
  field,
  placeholder,
  options
}) {
  const { values, commit } = useFilterBarContext("Select");
  const value = values[field] ?? "";
  const handleValueChange = (0, import_react25.useCallback)(
    (next) => {
      commit(field, next);
    },
    [commit, field]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Select.Root, { value, onValueChange: handleValueChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Value, { placeholder }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Content, { children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Item, { value: opt.value, children: opt.label }, opt.value)) })
  ] }) });
}
var TableFilterBar = Object.assign(FilterBar, {
  Text: FilterBarText,
  Select: FilterBarSelect
});

// src/components/Table/index.ts
var Table3 = Object.assign(Table, {
  FilterBar: TableFilterBar
});

// src/components/DateRangePicker/DateRangePicker.tsx
var import_react28 = require("react");
var import_core30 = require("../../core/dist/index.cjs");

// src/components/Calendar/Calendar.tsx
var import_react26 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var CalendarContext = (0, import_react26.createContext)(null);
function useCalendarContext(part = "child") {
  const ctx = (0, import_react26.useContext)(CalendarContext);
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
  const [focusedDateState, setFocusedDateState] = (0, import_react26.useState)(
    () => defaultFocusedDate ?? seedFocusedDate(selected) ?? /* @__PURE__ */ new Date()
  );
  const isControlled = focusedDateProp !== void 0;
  const focusedDate = isControlled ? focusedDateProp : focusedDateState;
  const setFocusedDate = (0, import_react26.useCallback)(
    (date) => {
      if (!isControlled) setFocusedDateState(date);
      onFocusedDateChange?.(date);
    },
    [isControlled, onFocusedDateChange]
  );
  const [viewDateState, setViewDateState] = (0, import_react26.useState)(
    () => firstOfMonth(
      defaultViewDate ?? seedFocusedDate(selected) ?? /* @__PURE__ */ new Date()
    )
  );
  const isViewControlled = viewDateProp !== void 0;
  const viewDate = isViewControlled ? firstOfMonth(viewDateProp) : viewDateState;
  const setViewDate = (0, import_react26.useCallback)(
    (date) => {
      const normalized = firstOfMonth(date);
      if (!isViewControlled) setViewDateState(normalized);
      onViewDateChange?.(normalized);
    },
    [isViewControlled, onViewDateChange]
  );
  const handleSelect = (0, import_react26.useCallback)(
    (value) => {
      onSelect?.(value);
    },
    [onSelect]
  );
  const ctx = (0, import_react26.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CalendarContext.Provider, { value: ctx, children });
}
var Calendar = {
  Root: Root2
};

// src/components/Calendar/Header.tsx
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
  const t40 = stripTime(to).getTime();
  return d >= f && d <= t40;
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
var import_jsx_runtime27 = require("react/jsx-runtime");
var titleStyle = {
  fontSize: import_core27.semantic.fontSizeSm,
  fontWeight: import_core27.semantic.fontWeightSemibold,
  fontFamily: import_core27.semantic.fontSans,
  color: import_core27.semantic.colorText,
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
var import_react27 = require("react");
var import_core29 = require("../../core/dist/index.cjs");

// src/components/Calendar/Cell.tsx
var import_core28 = require("../../core/dist/index.cjs");
var import_jsx_runtime29 = require("react/jsx-runtime");
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
    ...isOutsideMonth ? { color: import_core28.semantic.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${import_core28.semantic.borderWidthDefault} solid ${import_core28.semantic.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? {
      background: `color-mix(in srgb, ${import_core28.semantic.colorActionPrimary} 15%, transparent)`
    } : {},
    ...isEndpoint ? { background: import_core28.semantic.colorActionPrimary, color: import_core28.semantic.colorTextInverse } : {},
    ...disabled ? {
      color: import_core28.semantic.colorTextDisabled,
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_jsx_runtime30 = require("react/jsx-runtime");
var GRID_STYLES_ID2 = "alttab-calendar";
var gridCSS2 = (
  /* css */
  `
  .alttab-calendar-day--enabled:hover {
    background: ${import_core29.semantic.colorSurfaceRaised} !important;
  }
  .alttab-calendar-day--enabled:focus-visible {
    outline: ${import_core29.semantic.focusRingWidth} solid ${import_core29.semantic.focusRingColor};
    outline-offset: ${import_core29.semantic.focusRingOffset};
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
  fontSize: import_core29.semantic.fontSizeXs,
  fontFamily: import_core29.semantic.fontSans,
  fontWeight: import_core29.semantic.fontWeightMedium,
  color: import_core29.semantic.colorTextMuted,
  textAlign: "center",
  padding: `${import_core29.semantic.spaceXs} 0`,
  userSelect: "none"
};
function CalendarGridPrimitive({
  "aria-label": ariaLabel = "Calendar",
  onEscape,
  children,
  style,
  className
}) {
  (0, import_core29.useInjectStyles)(GRID_STYLES_ID2, gridCSS2);
  const ctx = useCalendarContext("Grid");
  const tableRef = (0, import_react27.useRef)(null);
  const todayRef = (0, import_react27.useRef)(/* @__PURE__ */ new Date());
  const year = ctx.viewDate.getFullYear();
  const month = ctx.viewDate.getMonth();
  const grid = (0, import_react27.useMemo)(() => buildCalendarGrid(year, month), [year, month]);
  const rows = (0, import_react27.useMemo)(() => {
    const out = [];
    for (let r = 0; r < 6; r++) {
      out.push(grid.slice(r * 7, r * 7 + 7));
    }
    return out;
  }, [grid]);
  const { start: highlightStart, end: highlightEnd } = getHighlightBounds(ctx);
  const isCellDisabled = (0, import_react27.useCallback)(
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
  const handleKeyDown = (0, import_react27.useCallback)(
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
  (0, import_react27.useEffect)(() => {
    const table = tableRef.current;
    if (!table) return;
    const btn = table.querySelector('button[tabindex="0"]');
    if (btn && document.activeElement?.closest('[role="grid"]') === table) {
      btn.focus();
    }
  }, [ctx.focusedDate]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    "table",
    {
      ref: tableRef,
      role: "grid",
      "aria-label": ariaLabel,
      style: { ...tableStyle, ...style },
      className,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("tr", { children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("th", { scope: "col", style: weekdayHeaderStyle, children: label }, label)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("tr", { children: row.map((date) => {
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
          return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("td", { role: "gridcell", style: cellTdStyle, children: children ? children(renderArgs) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CalendarCell, { date }) }, iso);
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
var import_jsx_runtime31 = require("react/jsx-runtime");
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-trigger:focus-visible {
    border-color: ${import_core30.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core30.semantic.focusRingWidth} ${import_core30.semantic.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${import_core30.semantic.colorBorderFocused};
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
  padding: `${import_core30.semantic.spaceSm} ${import_core30.semantic.spaceMd}`,
  fontSize: import_core30.semantic.fontSizeSm,
  lineHeight: import_core30.semantic.lineHeightTight,
  fontFamily: import_core30.semantic.fontSans,
  color: import_core30.semantic.colorText,
  background: import_core30.semantic.colorSurfaceInput,
  border: `${import_core30.semantic.borderWidthDefault} solid ${import_core30.semantic.colorBorder}`,
  borderRadius: import_core30.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core30.semantic.transitionBase}, box-shadow ${import_core30.semantic.transitionBase}`,
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
  zIndex: import_core30.semantic.zIndexDropdown,
  marginTop: import_core30.semantic.spaceXs,
  background: import_core30.semantic.colorSurfacePanel,
  border: `${import_core30.semantic.borderWidthDefault} solid ${import_core30.semantic.colorBorder}`,
  borderRadius: import_core30.semantic.radiusLg,
  boxShadow: import_core30.semantic.shadowMd,
  padding: import_core30.semantic.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle2 = {
  color: import_core30.semantic.colorTextPlaceholder
};
var headerRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${import_core30.semantic.spaceXs} 0`,
  marginBottom: import_core30.semantic.spaceSm
};
function sortedRange(a, b) {
  return a.getTime() <= b.getTime() ? { from: a, to: b } : { from: b, to: a };
}
var DateRangePicker = (0, import_react28.forwardRef)(
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
    (0, import_core30.useInjectStyles)(SCOPE, injectedCSS);
    const [open, setOpen] = (0, import_react28.useState)(false);
    const [selectionStart, setSelectionStart] = (0, import_react28.useState)(null);
    const [hoverDate, setHoverDate] = (0, import_react28.useState)(null);
    const containerRef = (0, import_react28.useRef)(null);
    (0, import_react28.useEffect)(() => {
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
    (0, import_react28.useEffect)(() => {
      if (!open) return;
      const btn = containerRef.current?.querySelector(
        '[role="grid"] button[tabindex="0"]'
      );
      btn?.focus();
    }, [open]);
    const handleToggle = (0, import_react28.useCallback)(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (prev) {
          setSelectionStart(null);
          setHoverDate(null);
        }
        return !prev;
      });
    }, [disabled]);
    const handleSelect = (0, import_react28.useCallback)(
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
    const handleFocusedDateChange = (0, import_react28.useCallback)(
      (d) => {
        if (selectionStart !== null) setHoverDate(d);
      },
      [selectionStart]
    );
    const disabledDate = (0, import_react28.useMemo)(() => {
      if (!disabledDates || disabledDates.length === 0) return void 0;
      return (d) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);
    const displaySelected = (0, import_react28.useMemo)(() => {
      if (selectionStart !== null) {
        const end = hoverDate ?? selectionStart;
        return sortedRange(selectionStart, end);
      }
      return value;
    }, [selectionStart, hoverDate, value]);
    const openKey = (0, import_react28.useMemo)(
      () => open ? `${value?.from.getTime() ?? "empty"}-${Date.now()}` : "closed",
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [open]
    );
    let displayText;
    if (value) {
      displayText = `${formatDate(value.from)} \u2013 ${formatDate(value.to)}`;
    } else {
      displayText = /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { style: placeholderStyle2, children: placeholder });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
          open && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { style: popoverStyle, role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { style: headerRowStyle, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Calendar2.Nav, { direction: "prev" }),
                  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Calendar2.Header, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Calendar2.Nav, { direction: "next" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Calendar2.Grid, { onEscape: () => {
                  setOpen(false);
                  setSelectionStart(null);
                  setHoverDate(null);
                }, children: ({ date }) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
var import_react29 = require("react");
var import_core31 = require("../../core/dist/index.cjs");
var import_jsx_runtime32 = require("react/jsx-runtime");
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${import_core31.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core31.semantic.focusRingWidth} ${import_core31.semantic.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${import_core31.semantic.colorBorderFocused};
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
var placeholderStyle3 = {
  color: import_core31.semantic.colorTextPlaceholder
};
var headerRowStyle2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${import_core31.semantic.spaceXs} 0`,
  marginBottom: import_core31.semantic.spaceSm
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
    disabled
  }, ref) {
    (0, import_core31.useInjectStyles)(SCOPE2, injectedCSS2);
    const [open, setOpen] = (0, import_react29.useState)(false);
    const containerRef = (0, import_react29.useRef)(null);
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
      const btn = containerRef.current?.querySelector(
        '[role="grid"] button[tabindex="0"]'
      );
      btn?.focus();
    }, [open]);
    const handleToggle = (0, import_react29.useCallback)(() => {
      if (disabled) return;
      setOpen((o) => !o);
    }, [disabled]);
    const handleSelect = (0, import_react29.useCallback)(
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
    const disabledDate = (0, import_react29.useMemo)(() => {
      if (!disabledDates || disabledDates.length === 0) return void 0;
      return (d) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);
    const openKey = (0, import_react29.useMemo)(
      () => open ? `${value?.getTime() ?? "empty"}-${Date.now()}` : "closed",
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [open]
    );
    let displayText;
    if (value) {
      displayText = formatDate(value);
    } else {
      displayText = /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { style: placeholderStyle3, children: placeholder });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle3,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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
          open && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { style: popoverStyle2, role: "dialog", "aria-label": "Date picker", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { style: headerRowStyle2, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Calendar2.Nav, { direction: "prev" }),
                  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Calendar2.Header, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Calendar2.Nav, { direction: "next" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Calendar2.Grid, { onEscape: () => setOpen(false) })
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
var import_react30 = __toESM(require("react"), 1);
var import_core32 = require("../../core/dist/index.cjs");
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { borderColor: import_core32.semantic.colorError, borderWidth: "2px", borderStyle: "solid", borderRadius: import_core32.semantic.radiusLg }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Card,
      {
        variant: "flat",
        padding: "lg",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core32.semantic.spaceMd }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { display: "flex", alignItems: "center", gap: import_core32.semantic.spaceSm }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "span",
            {
              style: {
                fontSize: import_core32.semantic.fontSizeLg,
                color: import_core32.semantic.colorError,
                fontWeight: import_core32.semantic.fontWeightSemibold,
                fontFamily: import_core32.semantic.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: import_core32.semantic.fontMono,
                fontSize: import_core32.semantic.fontSizeSm,
                lineHeight: import_core32.semantic.lineHeightBase,
                color: import_core32.semantic.colorText,
                background: import_core32.semantic.colorSurfaceRaised,
                padding: import_core32.semantic.spaceSm,
                borderRadius: import_core32.semantic.radiusMd,
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
                  fontFamily: import_core32.semantic.fontSans,
                  fontSize: import_core32.semantic.fontSizeSm,
                  color: import_core32.semantic.colorTextMuted,
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
                  marginTop: import_core32.semantic.spaceSm,
                  fontFamily: import_core32.semantic.fontMono,
                  fontSize: import_core32.semantic.fontSizeXs,
                  lineHeight: import_core32.semantic.lineHeightBase,
                  color: import_core32.semantic.colorTextSecondary,
                  background: import_core32.semantic.colorSurfaceRaised,
                  padding: import_core32.semantic.spaceSm,
                  borderRadius: import_core32.semantic.radiusMd,
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
    ) });
  }
};

// src/components/Toast/Toast.tsx
var import_react31 = require("react");
var import_react_dom2 = require("react-dom");
var import_core33 = require("../../core/dist/index.cjs");
var import_jsx_runtime34 = require("react/jsx-runtime");
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
  success: { bg: import_core33.semantic.colorSuccessBg, fg: import_core33.semantic.colorSuccess, border: import_core33.semantic.colorSuccess },
  error: { bg: import_core33.semantic.colorErrorBg, fg: import_core33.semantic.colorError, border: import_core33.semantic.colorError },
  info: { bg: import_core33.semantic.colorInfoBg, fg: import_core33.semantic.colorInfo, border: import_core33.semantic.colorInfo },
  warning: { bg: import_core33.semantic.colorWarningBg, fg: import_core33.semantic.colorWarning, border: import_core33.semantic.colorWarning }
};
function ToastMessage({
  item,
  onDismiss
}) {
  const [exiting, setExiting] = (0, import_react31.useState)(false);
  const [paused, setPaused] = (0, import_react31.useState)(false);
  const timerRef = (0, import_react31.useRef)(null);
  const startedAtRef = (0, import_react31.useRef)(0);
  const remainingRef = (0, import_react31.useRef)(item.duration);
  const autoDismiss = item.duration > 0;
  const clearTimer = (0, import_react31.useCallback)(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const startTimer = (0, import_react31.useCallback)(() => {
    if (!autoDismiss || remainingRef.current <= 0) return;
    clearTimer();
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, remainingRef.current);
    setPaused(false);
  }, [autoDismiss, clearTimer]);
  const pauseTimer = (0, import_react31.useCallback)(() => {
    if (!autoDismiss || !timerRef.current) return;
    const elapsed = Date.now() - startedAtRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    clearTimer();
    setPaused(true);
  }, [autoDismiss, clearTimer]);
  (0, import_react31.useEffect)(() => {
    startTimer();
    return clearTimer;
  }, []);
  const handleAnimationEnd = () => {
    if (exiting) {
      onDismiss(item.id);
    }
  };
  const colors = typeColors[item.type];
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
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
        gap: import_core33.semantic.spaceSm,
        padding: `${import_core33.semantic.spaceSm} ${import_core33.semantic.spaceMd}`,
        paddingBottom: autoDismiss ? `calc(${import_core33.semantic.spaceSm} + 2px)` : import_core33.semantic.spaceSm,
        backgroundColor: import_core33.semantic.colorSurfaceSolid,
        backgroundImage: `linear-gradient(${colors.bg}, ${colors.bg})`,
        color: colors.fg,
        borderRadius: import_core33.semantic.radiusMd,
        borderLeft: `${import_core33.semantic.borderWidthAccent} solid ${colors.border}`,
        boxShadow: import_core33.semantic.shadowMd,
        fontSize: import_core33.semantic.fontSizeSm,
        fontFamily: import_core33.semantic.fontSans,
        fontWeight: import_core33.semantic.fontWeightMedium,
        lineHeight: import_core33.semantic.lineHeightBase,
        pointerEvents: "auto",
        animation: exiting ? "toast-fade-out 200ms ease forwards" : "toast-slide-in 250ms ease",
        maxWidth: "24rem",
        wordBreak: "break-word",
        overflow: "hidden"
      },
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { style: { flex: 1 }, children: item.message }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
              borderRadius: import_core33.semantic.radiusSm,
              color: colors.fg,
              opacity: 0.7,
              fontSize: import_core33.semantic.fontSizeSm,
              lineHeight: 1
            },
            children: "\xD7"
          }
        ),
        autoDismiss && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
  (0, import_core33.useInjectStyles)(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: import_core33.semantic.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: import_core33.semantic.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: import_core33.semantic.spaceLg } : { bottom: import_core33.semantic.spaceLg },
    ...position.endsWith("right") ? { right: import_core33.semantic.spaceLg } : { left: import_core33.semantic.spaceLg }
  };
  return (0, import_react_dom2.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { "aria-live": "polite", style: positionStyles, children: toasts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(ToastMessage, { item, onDismiss }, item.id)) }),
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
    setToasts((prev) => prev.filter((t40) => t40.id !== id));
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
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(ToastContext.Provider, { value: { showToast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(ToastContainer, { toasts, onDismiss: dismiss, position })
  ] });
}

// src/components/Combobox/Combobox.tsx
var import_react32 = require("react");
var import_core34 = require("../../core/dist/index.cjs");
var import_jsx_runtime35 = require("react/jsx-runtime");
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
var ComboboxContext = (0, import_react32.createContext)(null);
function useComboboxContext(part) {
  const ctx = (0, import_react32.useContext)(ComboboxContext);
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
  (0, import_core34.useInjectStyles)(COMBOBOX_STYLES_ID, comboboxCSS);
  const instanceId = (0, import_react32.useId)();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = (0, import_react32.useState)(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = (0, import_react32.useState)(false);
  const [focusedValue, setFocusedValue] = (0, import_react32.useState)(null);
  const [dropDirection, setDropDirection] = (0, import_react32.useState)("down");
  const containerRef = (0, import_react32.useRef)(null);
  const inputRef = (0, import_react32.useRef)(null);
  const suppressNextOpenRef = (0, import_react32.useRef)(false);
  const [items, setItems] = (0, import_react32.useState)([]);
  const registerItem = (0, import_react32.useCallback)((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = (0, import_react32.useCallback)((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = (0, import_react32.useCallback)(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  const calculateDirection = (0, import_react32.useCallback)(() => {
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
  const openMenu = (0, import_react32.useCallback)(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    setFocusedValue(null);
  }, [disabled, calculateDirection]);
  const closeMenu = (0, import_react32.useCallback)(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const selectItem = (0, import_react32.useCallback)(
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
  const handleKeyDown = (0, import_react32.useCallback)(
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
  const ctx = (0, import_react32.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ComboboxContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { ref: containerRef, style: wrapperStyle4, onKeyDown: handleKeyDown, children }) });
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
  const handleChange = (0, import_react32.useCallback)(
    (e) => {
      setValue(e.target.value);
      if (!open) openMenu();
    },
    [setValue, open, openMenu]
  );
  const handleFocus = (0, import_react32.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  const ref = (0, import_react32.useRef)(null);
  (0, import_react32.useEffect)(() => {
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
    marginTop: import_core34.semantic.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: import_core34.semantic.spaceXs
  };
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      ref,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        background: import_core34.semantic.colorSurfacePanel,
        border: `${import_core34.semantic.borderWidthDefault} solid ${import_core34.semantic.colorBorder}`,
        borderRadius: import_core34.semantic.radiusMd,
        padding: import_core34.semantic.spaceXs,
        zIndex: import_core34.semantic.zIndexSticky,
        boxShadow: import_core34.semantic.shadowMd,
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
  (0, import_react32.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      role: "presentation",
      style: {
        padding: `${import_core34.semantic.spaceXs} ${import_core34.semantic.spaceSm}`,
        fontSize: import_core34.semantic.fontSizeSm,
        color: import_core34.semantic.colorTextMuted,
        fontFamily: import_core34.semantic.fontSans
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
  padding: `${import_core34.semantic.spaceSm} ${import_core34.semantic.spaceMd}`,
  fontSize: import_core34.semantic.fontSizeSm,
  lineHeight: import_core34.semantic.lineHeightTight,
  fontFamily: import_core34.semantic.fontSans,
  color: import_core34.semantic.colorText,
  background: import_core34.semantic.colorSurfaceInput,
  border: `${import_core34.semantic.borderWidthDefault} solid ${import_core34.semantic.colorBorder}`,
  borderRadius: import_core34.semantic.radiusMd,
  outline: "none",
  transition: `border-color ${import_core34.semantic.transitionBase}, box-shadow ${import_core34.semantic.transitionBase}`,
  boxSizing: "border-box"
};
var errorBorderStyle4 = {
  borderColor: import_core34.semantic.colorBorderError
};
var disabledStyle4 = {
  background: import_core34.semantic.colorSurfaceDisabled,
  color: import_core34.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var Combobox = {
  Root: Root3,
  Input: Input3,
  List,
  Item: Item2,
  Empty
};

// src/components/ChipPicker/ChipPicker.tsx
var import_react33 = require("react");
var import_core35 = require("../../core/dist/index.cjs");
var import_jsx_runtime36 = require("react/jsx-runtime");
function ChipPicker({
  items,
  selected: controlledSelected,
  defaultSelected,
  onChange,
  "aria-label": ariaLabel
}) {
  const uid = (0, import_react33.useId)();
  const styleId = `chip-picker-${uid.replace(/:/g, "")}`;
  const isControlled = controlledSelected !== void 0;
  const [internalSelected, setInternalSelected] = (0, import_react33.useState)(
    () => defaultSelected ?? []
  );
  const selected = isControlled ? controlledSelected : internalSelected;
  const applySelection = (0, import_react33.useCallback)(
    (next) => {
      if (!isControlled) setInternalSelected(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  (0, import_core35.useInjectStyles)(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${import_core35.semantic.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${import_core35.semantic.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${import_core35.semantic.focusRingWidth} solid ${import_core35.semantic.focusRingColor};
      outline-offset: ${import_core35.semantic.focusRingOffset};
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
    padding: `${import_core35.semantic.spaceXs} ${import_core35.semantic.spaceSm}`,
    fontSize: import_core35.semantic.fontSizeSm,
    fontFamily: import_core35.semantic.fontSans,
    fontWeight: import_core35.semantic.fontWeightMedium,
    lineHeight: import_core35.semantic.lineHeightTight,
    color: isSelected ? import_core35.semantic.colorActionPrimary : import_core35.semantic.colorText,
    background: isSelected ? import_core35.semantic.colorActionSecondary : "transparent",
    border: `${import_core35.semantic.borderWidthDefault} solid ${isSelected ? import_core35.semantic.colorActionPrimary : import_core35.semantic.colorBorder}`,
    borderRadius: import_core35.semantic.radiusFull,
    cursor: "pointer",
    transition: `background ${import_core35.semantic.transitionFast}, border-color ${import_core35.semantic.transitionFast}, color ${import_core35.semantic.transitionFast}`,
    outline: "none"
  });
  const renderChips = (chips) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: import_core35.semantic.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "div",
    {
      "data-chip-picker-id": styleId,
      role: "group",
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core35.semantic.spaceMd
      },
      children: groups.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core35.semantic.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: i > 0 ? { marginTop: import_core35.semantic.spaceXs } : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: sectionLabelStyle, children: group.label }) }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/SearchInput/SearchInput.tsx
var import_react34 = require("react");
var import_core36 = require("../../core/dist/index.cjs");
var import_jsx_runtime37 = require("react/jsx-runtime");
var STYLE_ID2 = "4lt7ab-search-input";
var hoverFocusCSS = `
  .search-input-wrapper:focus-within {
    border-color: ${import_core36.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core36.semantic.focusRingWidth} ${import_core36.semantic.focusRingColor};
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
  gap: import_core36.semantic.spaceXs,
  width: "100%",
  padding: `${import_core36.semantic.spaceSm} ${import_core36.semantic.spaceMd}`,
  fontSize: import_core36.semantic.fontSizeSm,
  lineHeight: import_core36.semantic.lineHeightTight,
  fontFamily: import_core36.semantic.fontSans,
  color: import_core36.semantic.colorText,
  background: import_core36.semantic.colorSurfaceInput,
  border: `${import_core36.semantic.borderWidthDefault} solid ${import_core36.semantic.colorBorder}`,
  borderRadius: import_core36.semantic.radiusMd,
  transition: `border-color ${import_core36.semantic.transitionBase}, box-shadow ${import_core36.semantic.transitionBase}`,
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
  background: import_core36.semantic.colorSurfaceDisabled,
  color: import_core36.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
var SearchInput = (0, import_react34.forwardRef)(
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
    (0, import_core36.useInjectStyles)(STYLE_ID2, hoverFocusCSS);
    const [localValue, setLocalValue] = (0, import_react34.useState)(value);
    const timerRef = (0, import_react34.useRef)(null);
    const onSearchRef = (0, import_react34.useRef)(onSearch);
    onSearchRef.current = onSearch;
    (0, import_react34.useEffect)(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = (0, import_react34.useCallback)((e) => {
      const next = e.target.value;
      setLocalValue(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearchRef.current(next);
      }, debounceMs);
    }, [debounceMs]);
    (0, import_react34.useEffect)(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
      "div",
      {
        className: "search-input-wrapper",
        "data-testid": dataTestId,
        style: {
          ...wrapperStyle5,
          ...disabled ? disabledWrapperStyle : {}
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { style: { color: import_core36.semantic.colorTextMuted, flexShrink: 0, display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Icon, { name: "search", size: "sm" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
          trailing && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/SegmentedControl/SegmentedControl.tsx
var import_react36 = require("react");
var import_core37 = require("../../core/dist/index.cjs");

// src/utils/useRovingFocus.ts
var import_react35 = require("react");
function useRovingFocus({
  count,
  activeIndex,
  orientation = "horizontal"
}) {
  const itemRefs = (0, import_react35.useRef)([]);
  const itemRef = (0, import_react35.useCallback)(
    (index) => (el) => {
      itemRefs.current[index] = el;
    },
    []
  );
  const onKeyDown = (0, import_react35.useCallback)(
    (index) => (e) => {
      if (count === 0) return;
      let nextIndex = null;
      const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      if (e.key === nextKey) {
        nextIndex = (index + 1) % count;
      } else if (e.key === prevKey) {
        nextIndex = (index - 1 + count) % count;
      } else if (e.key === "Home") {
        nextIndex = 0;
      } else if (e.key === "End") {
        nextIndex = count - 1;
      }
      if (nextIndex != null) {
        e.preventDefault();
        itemRefs.current[nextIndex]?.focus();
      }
    },
    [count, orientation]
  );
  const getTabIndex = (0, import_react35.useCallback)(
    (index) => {
      if (activeIndex == null) {
        return index === 0 ? 0 : -1;
      }
      return index === activeIndex ? 0 : -1;
    },
    [activeIndex]
  );
  return { itemRef, onKeyDown, getTabIndex };
}

// src/components/SegmentedControl/SegmentedControl.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${import_core37.semantic.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${import_core37.semantic.focusRingWidth} solid ${import_core37.semantic.focusRingColor};
    outline-offset: ${import_core37.semantic.focusRingOffset};
    border-radius: ${import_core37.semantic.radiusFull};
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
  (0, import_core37.useInjectStyles)(STYLE_ID3, hoverCSS);
  const isControlled = controlledValue !== void 0;
  const [internalValue, setInternalValue] = (0, import_react36.useState)(
    () => defaultValue ?? segments[0]?.value ?? ""
  );
  const value = isControlled ? controlledValue : internalValue;
  const handleSelect = (0, import_react36.useCallback)(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  const containerRef = (0, import_react36.useRef)(null);
  const [indicator, setIndicator] = (0, import_react36.useState)(null);
  const s = sizes[size];
  const activeIndex = segments.findIndex((seg) => seg.value === value);
  const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
    count: segments.length,
    activeIndex: activeIndex === -1 ? null : activeIndex
  });
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
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
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
        background: import_core37.semantic.colorSurfaceInput,
        borderRadius: import_core37.semantic.radiusFull,
        border: `${import_core37.semantic.borderWidthDefault} solid ${import_core37.semantic.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: import_core37.semantic.radiusFull,
              background: import_core37.semantic.colorActionPrimary,
              transition: `left ${import_core37.semantic.transitionSlow}, width ${import_core37.semantic.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg, i) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
            "button",
            {
              ref: itemRef(i),
              type: "button",
              className: "segmented-ctrl-btn",
              "aria-pressed": isActive,
              tabIndex: getTabIndex(i),
              onClick: () => handleSelect(seg.value),
              onKeyDown: onKeyDown(i),
              style: {
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: import_core37.semantic.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: import_core37.semantic.radiusFull,
                background: "transparent",
                color: isActive ? import_core37.semantic.colorTextInverse : import_core37.semantic.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: import_core37.semantic.fontSans,
                fontWeight: isActive ? import_core37.semantic.fontWeightSemibold : import_core37.semantic.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${import_core37.semantic.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: seg.label })
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
var import_core38 = require("../../core/dist/index.cjs");
var import_jsx_runtime39 = require("react/jsx-runtime");
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
  info: { bg: import_core38.semantic.colorInfoBg, fg: import_core38.semantic.colorInfo, border: import_core38.semantic.colorInfo },
  warning: { bg: import_core38.semantic.colorWarningBg, fg: import_core38.semantic.colorWarning, border: import_core38.semantic.colorWarning },
  error: { bg: import_core38.semantic.colorErrorBg, fg: import_core38.semantic.colorError, border: import_core38.semantic.colorError },
  success: { bg: import_core38.semantic.colorSuccessBg, fg: import_core38.semantic.colorSuccess, border: import_core38.semantic.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(IconError, { size: 20 }),
  success: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(IconCheckCircle, { size: 20 })
};
var AlertBanner = (0, import_react37.forwardRef)(
  function AlertBanner2({ variant, children, onDismiss, icon }, ref) {
    (0, import_core38.useInjectStyles)(STYLE_ID4, alertBannerCSS);
    const colors = variantColors2[variant];
    const resolvedIcon = icon !== void 0 ? icon : defaultIcons[variant];
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: import_core38.semantic.spaceSm,
          width: "100%",
          padding: `${import_core38.semantic.spaceSm} ${import_core38.semantic.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${import_core38.semantic.borderWidthThick} solid ${colors.border}`,
          fontFamily: import_core38.semantic.fontSans,
          fontSize: import_core38.semantic.fontSizeSm,
          fontWeight: import_core38.semantic.fontWeightMedium,
          lineHeight: import_core38.semantic.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease"
        },
        children: [
          resolvedIcon && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
                borderRadius: import_core38.semantic.radiusSm,
                color: colors.fg,
                opacity: 0.7,
                fontSize: import_core38.semantic.fontSizeLg,
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
var import_core39 = require("../../core/dist/index.cjs");
var import_jsx_runtime40 = require("react/jsx-runtime");
var TopBarContext = (0, import_react38.createContext)(null);
function useTopBarContext(component) {
  const ctx = (0, import_react38.useContext)(TopBarContext);
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
    transition: background ${import_core39.semantic.transitionBase};
  }
  [data-topbar-link]:hover::after {
    background: ${import_core39.semantic.colorBorder};
  }
  [data-topbar-link][data-active]::after {
    background: ${import_core39.semantic.colorActionPrimary};
  }
  [data-topbar-link]:hover {
    color: ${import_core39.semantic.colorText};
  }
`;
var TopBarRoot = (0, import_react38.forwardRef)(
  function TopBarRoot2({ children, sticky = false, ...rest }, ref) {
    (0, import_core39.useInjectStyles)(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: import_core39.semantic.zIndexSticky } : {};
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TopBarContext.Provider, { value: true, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "header",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-label": rest["aria-label"],
        style: {
          display: "flex",
          alignItems: "center",
          height: import_core39.semantic.space2xl,
          padding: `0 ${import_core39.semantic.spaceMd}`,
          background: import_core39.semantic.colorSurface,
          borderBottom: `${import_core39.semantic.borderWidthDefault} solid ${import_core39.semantic.colorBorder}`,
          fontFamily: import_core39.semantic.fontSans,
          ...stickyStyle
        },
        children
      }
    ) });
  }
);
function TopBarLeading({ children }) {
  useTopBarContext("Leading");
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        fontWeight: import_core39.semantic.fontWeightBold,
        fontSize: import_core39.semantic.fontSizeSm,
        color: import_core39.semantic.colorText,
        marginRight: import_core39.semantic.spaceLg,
        whiteSpace: "nowrap",
        flexShrink: 0
      },
      children
    }
  );
}
function TopBarNav({ children, "aria-label": ariaLabel = "Primary" }) {
  useTopBarContext("Nav");
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "nav",
    {
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        alignItems: "center",
        gap: import_core39.semantic.spaceXs,
        height: "100%",
        flex: 1,
        minWidth: 0
      },
      children
    }
  );
}
var TopBarLink = (0, import_react38.forwardRef)(function TopBarLink2({ active = false, asChild = false, onClick, children }, ref) {
  useTopBarContext("Link");
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: import_core39.semantic.spaceXs,
    height: "100%",
    padding: `0 ${import_core39.semantic.spaceSm}`,
    border: "none",
    background: "transparent",
    color: active ? import_core39.semantic.colorActionPrimary : import_core39.semantic.colorTextMuted,
    fontSize: import_core39.semantic.fontSizeSm,
    fontFamily: import_core39.semantic.fontSans,
    fontWeight: active ? import_core39.semantic.fontWeightSemibold : import_core39.semantic.fontWeightNormal,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: `color ${import_core39.semantic.transitionBase}`,
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
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_core39.Slot, { ref, ...commonProps, children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { ref, type: "button", ...commonProps, children });
});
function TopBarTrailing({ children }) {
  useTopBarContext("Trailing");
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: import_core39.semantic.spaceSm,
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

// src/components/Grid/Grid.tsx
var import_react39 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var Grid = (0, import_react39.forwardRef)(
  function Grid2({
    minColumnWidth = 300,
    columns,
    gap = "md",
    children,
    ...rest
  }, ref) {
    const minWidth = `${minColumnWidth}px`;
    const gridTemplateColumns = columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
var import_react40 = require("react");
var import_core40 = require("../../core/dist/index.cjs");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Divider = (0, import_react40.forwardRef)(
  function Divider2({
    orientation = "horizontal",
    opacity = "default",
    spacing,
    ...rest
  }, ref) {
    const resolvedOpacity = dividerOpacityMap[opacity];
    const bg = `color-mix(in srgb, ${import_core40.semantic.colorBorder} ${resolvedOpacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : void 0;
    const isHorizontal = orientation === "horizontal";
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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

// src/components/Container/Container.tsx
var import_react41 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var widthMap = {
  narrow: "32rem",
  prose: "680px",
  wide: "900px",
  full: "100%"
};
var paddingMap = {
  none: "0",
  sm: "0.75rem",
  md: "1.5rem",
  lg: "3rem"
};
var Container = (0, import_react41.forwardRef)(
  function Container2({
    width = "prose",
    padding = "md",
    children,
    id,
    "data-testid": dataTestId
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      "div",
      {
        ref,
        id,
        "data-testid": dataTestId,
        style: {
          boxSizing: "border-box",
          width: "100%",
          maxWidth: widthMap[width],
          marginInline: "auto",
          paddingInline: paddingMap[padding],
          overflow: "visible"
        },
        children
      }
    );
  }
);

// src/components/TabStrip/TabStrip.tsx
var import_react42 = require("react");
var import_core41 = require("../../core/dist/index.cjs");
var import_jsx_runtime44 = require("react/jsx-runtime");
var STYLES_ID2 = "4lt7ab-tab-strip";
var STYLES_CSS = `
[data-tab-btn] {
  transition: color ${import_core41.semantic.transitionFast}, background ${import_core41.semantic.transitionFast}, border-color ${import_core41.semantic.transitionFast};
}
[data-tab-btn]:hover:not([aria-selected="true"]) {
  color: ${import_core41.semantic.colorTextSecondary};
  background: color-mix(in srgb, ${import_core41.semantic.colorBorder} 10%, transparent);
}
`;
var TabStrip = (0, import_react42.forwardRef)(
  function TabStrip2({
    tabs,
    activeKey,
    onChange,
    allowDeselect = false,
    size = "md",
    ...rest
  }, ref) {
    (0, import_core41.useInjectStyles)(STYLES_ID2, STYLES_CSS);
    const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);
    const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
      count: tabs.length,
      activeIndex: activeIndex === -1 ? null : activeIndex
    });
    const handleClick = (0, import_react42.useCallback)(
      (key) => {
        if (key === activeKey && allowDeselect) {
          onChange(null);
        } else {
          onChange(key);
        }
      },
      [activeKey, allowDeselect, onChange]
    );
    const isSm = size === "sm";
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            "button",
            {
              ref: itemRef(i),
              role: "tab",
              "aria-selected": isActive,
              tabIndex: getTabIndex(i),
              "data-tab-btn": "",
              onClick: () => handleClick(tab.key),
              onKeyDown: onKeyDown(i),
              style: {
                display: "flex",
                alignItems: "center",
                gap: import_core41.semantic.spaceXs,
                padding: isSm ? `${import_core41.semantic.spaceXs} ${import_core41.semantic.spaceSm}` : `${import_core41.semantic.spaceSm} ${import_core41.semantic.spaceMd}`,
                border: "none",
                borderBottom: `2px solid ${isActive ? import_core41.semantic.colorActionPrimary : "transparent"}`,
                borderRadius: 0,
                background: isActive ? `color-mix(in srgb, ${import_core41.semantic.colorActionPrimary} 8%, transparent)` : "transparent",
                color: isActive ? import_core41.semantic.colorActionPrimary : import_core41.semantic.colorTextMuted,
                fontFamily: import_core41.semantic.fontSans,
                fontSize: isSm ? import_core41.semantic.fontSizeXs : import_core41.semantic.fontSizeSm,
                fontWeight: import_core41.semantic.fontWeightSemibold,
                lineHeight: import_core41.semantic.lineHeightTight,
                cursor: "pointer",
                whiteSpace: "nowrap"
              },
              children: [
                tab.icon && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
