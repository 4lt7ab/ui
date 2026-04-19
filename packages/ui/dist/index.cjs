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
  AppShell: () => AppShell,
  AppShellMain: () => AppShellMain,
  AppShellRightPanel: () => AppShellRightPanel,
  AppShellRoot: () => AppShellRoot,
  AppShellSidebar: () => AppShellSidebar,
  AppShellSidebarSection: () => AppShellSidebarSection,
  AppShellTopBar: () => AppShellTopBar,
  Badge: () => Badge,
  Button: () => Button,
  Calendar: () => Calendar2,
  Card: () => Card,
  CardSkeleton: () => CardSkeleton,
  ChipPicker: () => ChipPicker,
  Combobox: () => Combobox,
  CommandPalette: () => CommandPalette,
  ConfirmDialog: () => ConfirmDialog,
  Container: () => Container,
  DataTablePage: () => DataTablePage,
  DataTablePageEmpty: () => DataTablePageEmpty,
  DataTablePageFilterBar: () => DataTablePageFilterBar,
  DataTablePageHeader: () => DataTablePageHeader,
  DataTablePagePagination: () => DataTablePagePagination,
  DataTablePageRoot: () => DataTablePageRoot,
  DataTablePageTable: () => DataTablePageTable,
  DatePicker: () => DatePicker,
  DateRangePicker: () => DateRangePicker,
  DetailPage: () => DetailPage,
  DetailPageActions: () => DetailPageActions,
  DetailPageBody: () => DetailPageBody,
  DetailPageHeader: () => DetailPageHeader,
  DetailPageMeta: () => DetailPageMeta,
  DetailPageMetaItem: () => DetailPageMetaItem,
  DetailPageRightPanel: () => DetailPageRightPanel,
  DetailPageRoot: () => DetailPageRoot,
  Divider: () => Divider,
  EmptyPage: () => EmptyPage,
  EmptyPageActions: () => EmptyPageActions,
  EmptyPageDescription: () => EmptyPageDescription,
  EmptyPageIcon: () => EmptyPageIcon,
  EmptyPageRoot: () => EmptyPageRoot,
  EmptyPageTip: () => EmptyPageTip,
  EmptyPageTips: () => EmptyPageTips,
  EmptyPageTitle: () => EmptyPageTitle,
  EmptyState: () => EmptyState,
  ErrorBoundary: () => ErrorBoundary,
  Field: () => Field,
  FormLayout: () => FormLayout,
  FormLayoutActions: () => FormLayoutActions,
  FormLayoutCancelButton: () => FormLayoutCancelButton,
  FormLayoutDirtyOnChange: () => FormLayoutDirtyOnChange,
  FormLayoutHeader: () => FormLayoutHeader,
  FormLayoutNavigationGuard: () => FormLayoutNavigationGuard,
  FormLayoutRoot: () => FormLayoutRoot,
  FormLayoutSaveButton: () => FormLayoutSaveButton,
  FormLayoutSection: () => FormLayoutSection,
  FormLayoutSectionBody: () => FormLayoutSectionBody,
  FormLayoutSectionHeader: () => FormLayoutSectionHeader,
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
  Text: () => Text,
  Textarea: () => Textarea,
  ThemePicker: () => ThemePicker,
  ToastProvider: () => ToastProvider,
  TopBar: () => TopBar,
  TopBarLeading: () => TopBarLeading,
  TopBarLink: () => TopBarLink,
  TopBarNav: () => TopBarNav,
  TopBarRoot: () => TopBarRoot,
  TopBarTrailing: () => TopBarTrailing,
  WizardDialog: () => WizardDialog,
  WizardDialogActions: () => WizardDialogActions,
  WizardDialogProgress: () => WizardDialogProgress,
  WizardDialogRoot: () => WizardDialogRoot,
  WizardDialogStep: () => WizardDialogStep,
  WizardDialogTitle: () => WizardDialogTitle,
  alignMap: () => alignMap,
  dividerOpacityMap: () => dividerOpacityMap,
  iconRegistry: () => iconRegistry,
  iconSizeMap: () => iconSizeMap,
  inputShellBaseStyle: () => inputShellBaseStyle,
  inputShellDisabledStyle: () => inputShellDisabledStyle,
  inputShellErrorStyle: () => inputShellErrorStyle,
  inputShellFocusRingCSS: () => inputShellFocusRingCSS,
  justifyMap: () => justifyMap,
  modalFooterStyle: () => modalFooterStyle,
  modalHeadingStyle: () => modalHeadingStyle,
  modalWidthMap: () => modalWidthMap,
  nextFocusedDate: () => nextFocusedDate,
  pillToggleBaseStyle: () => pillToggleBaseStyle,
  pillToggleSelectedStyle: () => pillToggleSelectedStyle,
  pillToggleUnselectedStyle: () => pillToggleUnselectedStyle,
  popoverPanelLg: () => popoverPanelLg,
  popoverPanelMd: () => popoverPanelMd,
  progressBarHeightMap: () => progressBarHeightMap,
  radiusMap: () => radiusMap,
  sectionLabelStyle: () => sectionLabelStyle,
  semanticColorMap: () => semanticColorMap,
  shadowMap: () => shadowMap,
  spacingMap: () => spacingMap,
  tagChipStyle: () => tagChipStyle,
  useAppShellContext: () => useAppShellContext,
  useCalendarContext: () => useCalendarContext,
  useFocusTrap: () => useFocusTrap,
  useFormLayout: () => useFormLayout,
  useIsInsideAppShell: () => useIsInsideAppShell,
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

// src/components/molecules/ThemePicker/ThemePicker.tsx
var import_react7 = require("react");
var import_core9 = require("../../core/dist/index.cjs");

// src/components/molecules/Card/Card.tsx
var import_react3 = require("react");
var import_core3 = require("../../core/dist/index.cjs");

// src/components/atoms/Surface/Surface.tsx
var import_react2 = require("react");
var import_core2 = require("../../core/dist/index.cjs");

// src/types.ts
var import_core = require("../../core/dist/index.cjs");
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
  primary: import_core.semantic.colorActionPrimary,
  success: import_core.semantic.colorSuccess,
  warning: import_core.semantic.colorWarning,
  error: import_core.semantic.colorError,
  info: import_core.semantic.colorInfo,
  muted: import_core.semantic.colorTextMuted
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
  xs: import_core.semantic.spaceXs,
  sm: import_core.semantic.spaceSm,
  md: import_core.semantic.spaceMd,
  lg: import_core.semantic.spaceLg,
  xl: import_core.semantic.spaceXl,
  "2xl": import_core.semantic.space2xl
};
var radiusMap = {
  none: "0",
  sm: import_core.semantic.radiusSm,
  md: import_core.semantic.radiusMd,
  lg: import_core.semantic.radiusLg,
  full: import_core.semantic.radiusFull
};
var shadowMap = {
  sm: import_core.semantic.shadowSm,
  md: import_core.semantic.shadowMd,
  lg: import_core.semantic.shadowLg
};

// src/components/atoms/Surface/Surface.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var levelMap = {
  page: import_core2.semantic.colorSurfacePage,
  default: import_core2.semantic.colorSurface,
  solid: import_core2.semantic.colorSurfaceSolid,
  raised: import_core2.semantic.colorSurfaceRaised,
  panel: import_core2.semantic.colorSurfacePanel,
  input: import_core2.semantic.colorSurfaceInput,
  overlay: import_core2.semantic.colorSurfaceOverlay
};
function getSurfaceStyle({
  level = "solid",
  tint,
  padding,
  radius = "lg",
  border = false,
  shadow
}) {
  const borderValue = border === true ? `${import_core2.semantic.borderWidthDefault} solid ${import_core2.semantic.colorBorder}` : typeof border === "string" ? `${import_core2.semantic.borderWidthDefault} solid ${semanticColorMap[border]}` : void 0;
  const tintBg = tint ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)` : void 0;
  return {
    background: tintBg ?? levelMap[level],
    padding: padding ? spacingMap[padding] : void 0,
    borderRadius: radiusMap[radius],
    border: borderValue,
    boxShadow: shadow ? shadowMap[shadow] : void 0,
    color: import_core2.semantic.colorText
  };
}
var Surface = (0, import_react2.forwardRef)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Slot, { ref, ...commonProps, children });
    }
    return (0, import_react2.createElement)(as, { ref, ...commonProps }, children);
  }
);

// src/components/molecules/Card/Card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var variantSurfaceProps = {
  default: { level: "solid", border: true, shadow: "sm" },
  flat: { level: "raised", border: true },
  elevated: { level: "solid", border: true, shadow: "md" },
  // `ghost` uses the `default` Surface level (which maps to `colorSurface` —
  // transparent in some themes) and emits no border / shadow. This lets
  // consumers like LinkCard keep the border in a stylesheet rule so that
  // `:hover { border-color }` still works — an inline `border` shorthand
  // from Surface would otherwise beat the hover rule on specificity.
  ghost: { level: "default" }
};
var HOVER_STYLES_ID = "4lt7ab-card-hover";
var HOVER_STYLES_CSS = `
[data-card-hover] {
  cursor: pointer;
  transition: transform ${import_core3.semantic.transitionSlow}, border-color ${import_core3.semantic.transitionSlow}, box-shadow ${import_core3.semantic.transitionSlow};
}
[data-card-hover]:hover {
  transform: translateY(-2px);
  border-color: ${import_core3.semantic.colorBorderFocused};
  box-shadow: ${import_core3.semantic.shadowMd};
}
`;
var GLOW_STYLES_ID = "4lt7ab-card-glow";
var GLOW_STYLES_CSS = `
[data-card-glow] {
  --card-glow-strength: 0;
}
`;
var GLOW_BOX_SHADOW = `0 0 calc(var(--card-glow-strength, 0) * 16px) calc(var(--card-glow-strength, 0) * 2px) color-mix(in srgb, ${import_core3.semantic.colorActionPrimary} calc(var(--card-glow-strength, 0) * 70%), transparent)`;
function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var Card = (0, import_react3.forwardRef)(
  function Card2({
    variant = "default",
    padding = "lg",
    hover = false,
    glow = false,
    asChild = false,
    onClick,
    children,
    ...rest
  }, ref) {
    (0, import_core3.useInjectStyles)(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    (0, import_core3.useInjectStyles)(GLOW_STYLES_ID, GLOW_STYLES_CSS);
    const internalRef = (0, import_react3.useRef)(null);
    const setRef = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    const { config, subscribe } = (0, import_core3.useThemeRhythm)();
    (0, import_react3.useEffect)(() => {
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
      "data-testid": rest["data-testid"],
      onClick
    };
    if (glow) {
      cardSlotProps.style = { boxShadow: GLOW_BOX_SHADOW };
    }
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Surface, { ...surfaceProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core3.Slot, { ref: setRef, ...cardSlotProps, children }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Surface, { ...surfaceProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: setRef, ...cardSlotProps, children }) });
  }
);

// src/components/molecules/LinkCard/linkCardStyles.ts
var import_core4 = require("../../core/dist/index.cjs");
var LINK_CARD_STYLES_ID = "alttab-link-card";
var LINK_CARD_CLASS = "alttab-link-card";
var LINK_CARD_TITLE_CLASS = "alttab-link-card__title";
var LINK_CARD_DESC_CLASS = "alttab-link-card__desc";
var linkCardCSS = (
  /* css */
  `
  .${LINK_CARD_CLASS} {
    display: block;
    width: 100%;
    border: ${import_core4.semantic.borderWidthThick} solid ${import_core4.semantic.colorBorder};
    text-align: left;
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
    transition: border-color ${import_core4.semantic.transitionBase}, transform ${import_core4.semantic.transitionBase};
  }

  .${LINK_CARD_CLASS}:hover {
    border-color: ${import_core4.semantic.colorTextLink};
    transform: translateY(-2px);
  }

  /* Selected / current state \u2014 consumers set aria-current="true" or
     aria-pressed="true" on the rendered element to pin the accent border
     in place. ThemePicker's grid uses aria-current for the active theme. */
  .${LINK_CARD_CLASS}[aria-current="true"],
  .${LINK_CARD_CLASS}[aria-pressed="true"] {
    border-color: ${import_core4.semantic.colorTextLink};
  }

  .${LINK_CARD_TITLE_CLASS} {
    display: block;
    font-family: ${import_core4.semantic.fontSerif};
    font-size: 1.125rem;
    font-weight: 600;
    color: ${import_core4.semantic.colorText};
    margin-bottom: 0.25rem;
  }

  .${LINK_CARD_DESC_CLASS} {
    display: block;
    font-size: 0.875rem;
    color: ${import_core4.semantic.colorTextMuted};
  }
`
);

// src/components/organisms/Select/Select.tsx
var import_react5 = require("react");
var import_core7 = require("../../core/dist/index.cjs");

// src/utils/useClickOutside.ts
var import_react4 = require("react");
function useClickOutside(ref, handler, enabled) {
  (0, import_react4.useEffect)(() => {
    if (!enabled) return;
    function handleMouseDown(event) {
      const el = ref.current;
      if (el && !el.contains(event.target)) {
        handler(event);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [ref, handler, enabled]);
}

// src/styles/inputShellStyle.ts
var import_core5 = require("../../core/dist/index.cjs");
var inputShellBaseStyle = {
  width: "100%",
  padding: `${import_core5.semantic.spaceSm} ${import_core5.semantic.spaceMd}`,
  fontSize: import_core5.semantic.fontSizeSm,
  fontFamily: import_core5.semantic.fontSans,
  color: import_core5.semantic.colorText,
  background: import_core5.semantic.colorSurfaceInput,
  border: `${import_core5.semantic.borderWidthDefault} solid ${import_core5.semantic.colorBorder}`,
  borderRadius: import_core5.semantic.radiusMd,
  transition: `border-color ${import_core5.semantic.transitionBase}, box-shadow ${import_core5.semantic.transitionBase}`,
  boxSizing: "border-box"
};
var inputShellErrorStyle = {
  borderColor: import_core5.semantic.colorBorderError
};
var inputShellDisabledStyle = {
  background: import_core5.semantic.colorSurfaceDisabled,
  color: import_core5.semantic.colorTextDisabled,
  cursor: "not-allowed"
};
function inputShellFocusRingCSS(selector) {
  return `
    ${selector}:focus-within {
      border-color: ${import_core5.semantic.colorBorderFocused};
      box-shadow: 0 0 0 ${import_core5.semantic.focusRingWidth} ${import_core5.semantic.focusRingColor};
    }
    @media (prefers-reduced-motion: reduce) {
      ${selector} {
        transition: none !important;
      }
    }
  `;
}

// src/styles/popoverPanelStyle.ts
var import_core6 = require("../../core/dist/index.cjs");
var popoverPanelBaseStyle = {
  background: import_core6.semantic.colorSurfacePanel,
  border: `${import_core6.semantic.borderWidthDefault} solid ${import_core6.semantic.colorBorder}`,
  boxShadow: import_core6.semantic.shadowMd,
  boxSizing: "border-box"
};
var popoverPanelMd = {
  ...popoverPanelBaseStyle,
  borderRadius: import_core6.semantic.radiusMd,
  padding: import_core6.semantic.spaceXs,
  zIndex: import_core6.semantic.zIndexSticky
};
var popoverPanelLg = {
  ...popoverPanelBaseStyle,
  borderRadius: import_core6.semantic.radiusLg,
  padding: import_core6.semantic.spaceMd,
  zIndex: import_core6.semantic.zIndexDropdown
};

// src/components/organisms/Select/Select.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
var SelectContext = (0, import_react5.createContext)(null);
function useSelectContext(part) {
  const ctx = (0, import_react5.useContext)(SelectContext);
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
  (0, import_core7.useInjectStyles)(SELECT_STYLES_ID, selectCSS);
  const instanceId = (0, import_react5.useId)();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = (0, import_react5.useState)(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [focusedValue, setFocusedValue] = (0, import_react5.useState)(null);
  const [dropDirection, setDropDirection] = (0, import_react5.useState)("down");
  const containerRef = (0, import_react5.useRef)(null);
  const triggerRef = (0, import_react5.useRef)(null);
  const [items, setItems] = (0, import_react5.useState)([]);
  const registerItem = (0, import_react5.useCallback)((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = (0, import_react5.useCallback)((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = (0, import_react5.useCallback)(
    (next, fromUser) => {
      if (!isControlled) setInternalValue(next);
      if (fromUser) {
        onValueChange?.(next);
        onChange?.({ target: { value: next, name } });
      }
    },
    [isControlled, onValueChange, onChange, name]
  );
  const calculateDirection = (0, import_react5.useCallback)(() => {
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
  const openMenu = (0, import_react5.useCallback)(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const current = items.find((i) => i.value === value && !i.disabled);
    const firstEnabled = items.find((i) => !i.disabled);
    setFocusedValue((current ?? firstEnabled)?.value ?? null);
  }, [disabled, calculateDirection, items, value]);
  const closeMenu = (0, import_react5.useCallback)(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const toggleMenu = (0, import_react5.useCallback)(() => {
    if (open) closeMenu();
    else openMenu();
  }, [open, openMenu, closeMenu]);
  const selectItem = (0, import_react5.useCallback)(
    (itemValue) => {
      const item = items.find((i) => i.value === itemValue);
      if (!item || item.disabled) return;
      setValue(item.value, true);
      closeMenu();
      triggerRef.current?.focus();
    },
    [items, setValue, closeMenu]
  );
  useClickOutside(containerRef, closeMenu, open);
  const handleKeyDown = (0, import_react5.useCallback)(
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
  const ctx = (0, import_react5.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "" }),
              items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var Trigger = (0, import_react5.forwardRef)(function Trigger2({
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "data-testid": dataTestId,
  tabIndex
}, forwardedRef) {
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
  const setRef = (0, import_react5.useCallback)(
    (node) => {
      triggerRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef, triggerRef]
  );
  const activeDescendant = open && focusedValue ? `${instanceId}-opt-${focusedValue}` : void 0;
  const hasSelection = items.some((i) => i.value === ctx.value);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "button",
    {
      ref: setRef,
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
        ...hasError ? inputShellErrorStyle : {},
        ...disabled ? inputShellDisabledStyle : {},
        ...hasSelection ? {} : placeholderStyle
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: triggerTextStyle, children }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronSVG, { rotated: open }) })
      ]
    }
  );
});
function Value({ placeholder }) {
  const { value, items } = useSelectContext("Value");
  const selected = items.find((i) => i.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: selected?.label ?? placeholder ?? "\xA0" });
}
var Content = (0, import_react5.forwardRef)(function Content2({ children }, forwardedRef) {
  const { open, listboxId, dropDirection, focusedValue } = useSelectContext("Content");
  const internalRef = (0, import_react5.useRef)(null);
  const setRef = (0, import_react5.useCallback)(
    (node) => {
      internalRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef]
  );
  (0, import_react5.useEffect)(() => {
    if (!open || !focusedValue) return;
    const menu = internalRef.current;
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
    marginTop: import_core7.semantic.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: import_core7.semantic.spaceXs
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      ref: setRef,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        ...popoverPanelMd,
        maxHeight: "16rem",
        overflowY: "auto"
      } : void 0,
      children
    }
  );
});
var Item = (0, import_react5.forwardRef)(function Item2({ value, disabled = false, textValue, children }, forwardedRef) {
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
  (0, import_react5.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      ref: forwardedRef,
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
});
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
  ...inputShellBaseStyle,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: import_core7.semantic.spaceSm,
  lineHeight: import_core7.semantic.lineHeightTight,
  outline: "none",
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
  color: import_core7.semantic.colorTextSecondary,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
var placeholderStyle = {
  color: import_core7.semantic.colorTextPlaceholder
};
function ChevronSVG({ rotated }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        transition: `transform ${import_core7.semantic.transitionBase}`,
        transform: rotated ? "rotate(180deg)" : "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/components/atoms/StatusDot/StatusDot.tsx
var import_react6 = require("react");
var import_core8 = require("../../core/dist/index.cjs");
var import_jsx_runtime4 = require("react/jsx-runtime");
var variantColors = {
  default: import_core8.semantic.colorTextMuted,
  primary: import_core8.semantic.colorActionPrimary,
  success: import_core8.semantic.colorSuccess,
  warning: import_core8.semantic.colorWarning,
  error: import_core8.semantic.colorError,
  info: import_core8.semantic.colorInfo
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
var StatusDot = (0, import_react6.forwardRef)(
  function StatusDot2({
    variant = "default",
    size = "md",
    animate = "none",
    "aria-label": ariaLabel
  }, ref) {
    const resolvedColor = variantColors[variant];
    const resolvedSize = sizeMap[size];
    const isPulsing = animate === "pulse";
    const { durationCss } = (0, import_core8.useThemeRhythm)();
    (0, import_core8.useInjectStyles)(PULSE_STYLES_ID, PULSE_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          borderRadius: import_core8.semantic.radiusFull,
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

// src/components/molecules/ThemePicker/ThemePicker.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var GRID_STYLES_ID = "alttab-theme-picker";
var gridCSS = (
  /* css */
  `
  .alttab-theme-picker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`
);
var DOT_ROW = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem"
};
function GridView({ descriptions }) {
  (0, import_core9.useInjectStyles)(LINK_CARD_STYLES_ID, linkCardCSS);
  (0, import_core9.useInjectStyles)(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = (0, import_core9.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "alttab-theme-picker", children: Array.from(themes.values()).map((def) => {
    const isActive = resolved === def.name;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card, { asChild: true, variant: "ghost", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "button",
      {
        type: "button",
        className: LINK_CARD_CLASS,
        "aria-current": isActive ? "true" : void 0,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: LINK_CARD_TITLE_CLASS, children: def.label }),
          descriptions[def.name] && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: LINK_CARD_DESC_CLASS, children: descriptions[def.name] })
        ]
      }
    ) }, def.name);
  }) });
}
function CompactView() {
  const { resolved, themes, setTheme } = (0, import_core9.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Select.Root, { value: resolved, onValueChange: setTheme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Select.Trigger, { "aria-label": "Select theme", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { style: DOT_ROW, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StatusDot, { variant: "primary" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Select.Value, {})
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Select.Content, { children: Array.from(themes.values()).map((def) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Select.Item, { value: def.name, textValue: def.label, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { style: DOT_ROW, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StatusDot, { variant: "primary" }),
      def.label
    ] }) }, def.name)) })
  ] });
}
var ThemePicker = (0, import_react7.forwardRef)(
  function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
    if (variant === "compact") {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ref, style: { display: "inline-block" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CompactView, {}) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GridView, { descriptions }) });
  }
);

// src/icons/icons.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) });
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M9 18l6-6-6-6" }) });
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M6 9l6 6 6-6" }) });
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M15 18l-6-6 6-6" }) });
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18 15l-6-6-6 6" }) });
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M20 6L9 17l-5-5" }) });
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M22 4L12 14.01l-3-3" })
  ] });
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] });
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] });
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] });
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M21 21l-4.35-4.35" })
  ] });
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" }) });
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] });
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M12 5v14M5 12h14" }) });
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 12h14" }) });
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] });
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M19 12H5M12 19l-7-7 7-7" }) });
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M3 12h18M3 6h18M3 18h18" }) });
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M1 1l22 22" })
  ] });
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] });
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) });
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "19", r: "1" })
  ] });
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ...svgProps(size, style), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }) });
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

// src/components/atoms/Button/Button.tsx
var import_react8 = require("react");
var import_core10 = require("../../core/dist/index.cjs");
var import_jsx_runtime7 = require("react/jsx-runtime");
var variantStyles = {
  primary: {
    background: import_core10.semantic.colorActionPrimary,
    color: import_core10.semantic.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: import_core10.semantic.colorActionSecondary,
    color: import_core10.semantic.colorText,
    border: `${import_core10.semantic.borderWidthDefault} solid ${import_core10.semantic.colorBorder}`
  },
  destructive: {
    background: import_core10.semantic.colorActionDestructive,
    color: import_core10.semantic.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: import_core10.semantic.colorText,
    border: `${import_core10.semantic.borderWidthDefault} solid transparent`
  }
};
var sizeStyles = {
  sm: {
    padding: `${import_core10.semantic.spaceXs} ${import_core10.semantic.spaceSm}`,
    fontSize: import_core10.semantic.fontSizeSm,
    lineHeight: import_core10.semantic.lineHeightTight
  },
  md: {
    padding: `${import_core10.semantic.spaceSm} ${import_core10.semantic.spaceMd}`,
    fontSize: import_core10.semantic.fontSizeSm,
    lineHeight: import_core10.semantic.lineHeightTight
  },
  lg: {
    padding: `${import_core10.semantic.spaceSm} ${import_core10.semantic.spaceLg}`,
    fontSize: import_core10.semantic.fontSizeBase,
    lineHeight: import_core10.semantic.lineHeightBase
  }
};
var baseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: import_core10.semantic.spaceSm,
  borderRadius: import_core10.semantic.radiusMd,
  fontFamily: import_core10.semantic.fontSans,
  fontWeight: import_core10.semantic.fontWeightMedium,
  cursor: "pointer",
  transition: `background ${import_core10.semantic.transitionBase}, border-color ${import_core10.semantic.transitionBase}, opacity ${import_core10.semantic.transitionBase}`
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
    border: ${import_core10.semantic.borderWidthThick} solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: alttab-btn-spin 600ms linear infinite;
  }
`
);
var iconOnlyPadding = {
  sm: import_core10.semantic.spaceXs,
  md: import_core10.semantic.spaceSm,
  lg: import_core10.semantic.spaceSm
};
var Button = (0, import_react8.forwardRef)(
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
    (0, import_core10.useInjectStyles)(SPINNER_STYLES_ID, spinnerCSS);
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
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_core10.Slot,
        {
          ref,
          ...commonProps,
          "aria-disabled": isDisabled2 || void 0,
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "alttab-btn-spinner" }) : children
      }
    );
  }
);

// src/components/atoms/Stack/Stack.tsx
var import_react9 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var gapMap = spacingMap;
var Stack = (0, import_react9.forwardRef)(
  function Stack2({
    direction = "vertical",
    gap = "md",
    align,
    justify,
    wrap,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/components/molecules/LinkCard/LinkCard.tsx
var import_react10 = require("react");
var import_core11 = require("../../core/dist/index.cjs");
var import_jsx_runtime9 = require("react/jsx-runtime");
var LinkCard = (0, import_react10.forwardRef)(function LinkCard2({
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
  (0, import_core11.useInjectStyles)(LINK_CARD_STYLES_ID, linkCardCSS);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Card, { asChild: true, variant: "ghost", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "a",
    {
      ref,
      className: LINK_CARD_CLASS,
      href,
      target: external ? "_blank" : target,
      rel: external ? "noopener noreferrer" : rel,
      onClick,
      id,
      "aria-label": ariaLabel,
      "data-testid": dataTestId,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: LINK_CARD_TITLE_CLASS, children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: LINK_CARD_DESC_CLASS, children: description })
      ]
    }
  ) });
});

// src/components/molecules/Field/Field.tsx
var import_core12 = require("../../core/dist/index.cjs");
var import_react11 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var labelStyle = {
  display: "block",
  fontSize: import_core12.semantic.fontSizeSm,
  fontWeight: import_core12.semantic.fontWeightMedium,
  lineHeight: import_core12.semantic.lineHeightTight,
  color: import_core12.semantic.colorText,
  fontFamily: import_core12.semantic.fontSans
};
var requiredStyle = {
  color: import_core12.semantic.colorError,
  marginLeft: "0.125rem"
};
var helpStyle = {
  fontSize: import_core12.semantic.fontSizeXs,
  lineHeight: import_core12.semantic.lineHeightTight,
  color: import_core12.semantic.colorTextMuted,
  fontFamily: import_core12.semantic.fontSans,
  margin: 0
};
var errorStyle = {
  fontSize: import_core12.semantic.fontSizeXs,
  lineHeight: import_core12.semantic.lineHeightTight,
  color: import_core12.semantic.colorError,
  fontFamily: import_core12.semantic.fontSans,
  margin: 0
};
var Field = (0, import_react11.forwardRef)(
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
    const autoId = (0, import_react11.useId)();
    const helpId = help ? `${autoId}-help` : void 0;
    const errorId = error ? `${autoId}-error` : void 0;
    const describedBy = [errorId, helpId].filter(Boolean).join(" ") || void 0;
    const enhancedChildren = (0, import_react11.isValidElement)(children) ? (0, import_react11.cloneElement)(children, {
      "aria-describedby": describedBy
    }) : children;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-describedby": rest["aria-describedby"],
        style: {
          display: "flex",
          flexDirection: "column",
          gap: import_core12.semantic.spaceXs,
          opacity: disabled ? 0.6 : void 0
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { htmlFor, style: labelStyle, children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: requiredStyle, "aria-hidden": "true", children: "*" })
          ] }),
          enhancedChildren,
          error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { id: errorId, role: "alert", style: errorStyle, children: error }),
          !error && help && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { id: helpId, style: helpStyle, children: help })
        ]
      }
    );
  }
);

// src/components/atoms/Input/Input.tsx
var import_react12 = require("react");
var import_core13 = require("../../core/dist/index.cjs");
var import_jsx_runtime11 = require("react/jsx-runtime");
var baseStyle = {
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: import_core13.semantic.lineHeightTight,
  outline: "none"
};
var Input = (0, import_react12.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
          ...hasError ? inputShellErrorStyle : {},
          ...disabled ? inputShellDisabledStyle : {}
        }
      }
    );
  }
);

// src/components/atoms/Textarea/Textarea.tsx
var import_react13 = require("react");
var import_core14 = require("../../core/dist/index.cjs");
var import_jsx_runtime12 = require("react/jsx-runtime");
var baseStyle2 = {
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: import_core14.semantic.lineHeightBase,
  outline: "none",
  resize: "vertical",
  minHeight: "5rem"
};
var disabledStyle = {
  ...inputShellDisabledStyle,
  resize: "none"
};
var Textarea = (0, import_react13.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
          ...hasError ? inputShellErrorStyle : {},
          ...disabled ? disabledStyle : {}
        }
      }
    );
  }
);

// src/components/atoms/Badge/Badge.tsx
var import_react14 = require("react");
var import_core15 = require("../../core/dist/index.cjs");
var import_jsx_runtime13 = require("react/jsx-runtime");
var variantStyles2 = {
  default: {
    border: `${import_core15.semantic.borderWidthDefault} solid ${import_core15.semantic.colorBorder}`,
    color: import_core15.semantic.colorTextSecondary
  },
  primary: {
    background: `color-mix(in srgb, ${import_core15.semantic.colorActionPrimary} 14%, transparent)`,
    color: import_core15.semantic.colorActionPrimary
  },
  success: {
    background: import_core15.semantic.colorSuccessBg,
    color: import_core15.semantic.colorSuccess
  },
  warning: {
    background: import_core15.semantic.colorWarningBg,
    color: import_core15.semantic.colorWarning
  },
  error: {
    background: import_core15.semantic.colorErrorBg,
    color: import_core15.semantic.colorError
  },
  info: {
    background: import_core15.semantic.colorInfoBg,
    color: import_core15.semantic.colorInfo
  }
};
var baseStyles2 = {
  display: "inline-block",
  padding: `${import_core15.semantic.spaceXs} ${import_core15.semantic.spaceSm}`,
  borderRadius: import_core15.semantic.radiusFull,
  fontSize: import_core15.semantic.fontSizeXs,
  fontWeight: import_core15.semantic.fontWeightSemibold,
  fontFamily: import_core15.semantic.fontSans,
  textTransform: "uppercase",
  letterSpacing: import_core15.semantic.letterSpacingWide
};
var xsBaseStyles = {
  display: "inline-block",
  fontSize: "0.6rem",
  fontFamily: import_core15.semantic.fontMono,
  fontWeight: import_core15.semantic.fontWeightMedium,
  color: import_core15.semantic.colorTextMuted,
  borderRadius: import_core15.semantic.radiusFull,
  background: `color-mix(in srgb, ${import_core15.semantic.colorBorder} 40%, transparent)`,
  padding: `0.0625rem ${import_core15.semantic.spaceXs}`,
  lineHeight: import_core15.semantic.lineHeightTight,
  letterSpacing: import_core15.semantic.letterSpacingWide,
  textTransform: "lowercase"
};
var Badge = (0, import_react14.forwardRef)(
  function Badge2({
    children,
    variant = "default",
    size = "default",
    ...rest
  }, ref) {
    const isXs = size === "xs";
    const base = isXs ? xsBaseStyles : baseStyles2;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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

// src/components/atoms/Text/Text.tsx
var import_react15 = require("react");
var import_core16 = require("../../core/dist/index.cjs");
var sizeMap2 = {
  xs: import_core16.semantic.fontSizeXs,
  sm: import_core16.semantic.fontSizeSm,
  md: import_core16.semantic.fontSizeBase,
  lg: import_core16.semantic.fontSizeLg,
  xl: import_core16.semantic.fontSizeXl
};
var weightMap = {
  normal: import_core16.semantic.fontWeightNormal,
  medium: import_core16.semantic.fontWeightMedium,
  semibold: import_core16.semantic.fontWeightSemibold,
  bold: import_core16.semantic.fontWeightBold
};
var toneMap = {
  default: import_core16.semantic.colorText,
  muted: import_core16.semantic.colorTextMuted,
  secondary: import_core16.semantic.colorTextSecondary,
  inverse: import_core16.semantic.colorTextInverse,
  link: import_core16.semantic.colorTextLink,
  success: import_core16.semantic.colorSuccess,
  warning: import_core16.semantic.colorWarning,
  error: import_core16.semantic.colorError
};
var familyMap = {
  sans: import_core16.semantic.fontSans,
  serif: import_core16.semantic.fontSerif,
  mono: import_core16.semantic.fontMono
};
var Text = (0, import_react15.forwardRef)(
  function Text2({
    children,
    size = "md",
    weight = "normal",
    tone = "default",
    family = "sans",
    as = "span",
    align,
    truncate = false,
    ...rest
  }, ref) {
    const style = {
      fontSize: sizeMap2[size],
      fontWeight: weightMap[weight],
      color: toneMap[tone],
      fontFamily: familyMap[family],
      ...align ? { textAlign: align } : null,
      ...truncate ? {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        maxWidth: "100%"
      } : null
    };
    return (0, import_react15.createElement)(
      as,
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        style
      },
      children
    );
  }
);

// src/components/atoms/Icon/Icon.tsx
var import_react16 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var IconFontContext = (0, import_react16.createContext)(void 0);
function IconFontProvider({ fontClass, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IconFontContext.Provider, { value: fontClass, children });
}
var Icon = (0, import_react16.forwardRef)(
  function Icon2({ name, size = "lg", fontClass, "aria-label": ariaLabel, id, "data-testid": dataTestId }, ref) {
    const contextFontClass = (0, import_react16.useContext)(IconFontContext);
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;
    const px = iconSizeMap[size];
    const resolvedFontClass = fontClass ?? contextFontClass;
    if (!IconComponent && resolvedFontClass) {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
        children: IconComponent ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IconComponent, { size: px }) : null
      }
    );
  }
);

// src/components/atoms/IconButton/IconButton.tsx
var import_react17 = require("react");
var import_core17 = require("../../core/dist/index.cjs");
var import_jsx_runtime15 = require("react/jsx-runtime");
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
var IconButton = (0, import_react17.forwardRef)(
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
    const uid = (0, import_react17.useId)();
    const styleId = `icon-btn-${uid.replace(/:/g, "")}`;
    (0, import_core17.useInjectStyles)(
      styleId,
      `[data-icon-btn-id="${styleId}"]:hover:not(:disabled) {
        background: color-mix(in srgb, currentColor 8%, transparent);
      }
      [data-icon-btn-id="${styleId}"]:focus-visible {
        outline: ${import_core17.semantic.focusRingWidth} solid ${import_core17.semantic.focusRingColor};
        outline-offset: ${import_core17.semantic.focusRingOffset};
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
      borderRadius: import_core17.semantic.radiusFull,
      background: "transparent",
      border: "none",
      color: import_core17.semantic.colorTextMuted,
      cursor: "pointer",
      padding: 0
    };
    const iconAndBadge = /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Icon, { name: icon, size: iconSizeForButton[size], fontClass }),
      badge && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "span",
        {
          style: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 8,
            height: 8,
            borderRadius: import_core17.semantic.radiusFull,
            background: import_core17.semantic.colorError,
            border: `${import_core17.semantic.borderWidthThick} solid ${import_core17.semantic.colorSurface}`
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
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_core17.Slot, { ref, ...commonProps, "aria-disabled": disabled || void 0, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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

// src/components/atoms/Overlay/Overlay.tsx
var import_react18 = require("react");
var import_core18 = require("../../core/dist/index.cjs");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Overlay = (0, import_react18.forwardRef)(
  function Overlay2({
    onClick,
    zIndex = import_core18.semantic.zIndexSticky
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        ref,
        role: "presentation",
        onClick,
        style: {
          position: "fixed",
          inset: 0,
          background: import_core18.semantic.colorSurfaceOverlay,
          zIndex
        }
      }
    );
  }
);

// src/components/atoms/Skeleton/Skeleton.tsx
var import_react19 = require("react");
var import_core19 = require("../../core/dist/index.cjs");
var import_jsx_runtime17 = require("react/jsx-runtime");
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
var Skeleton = (0, import_react19.forwardRef)(
  function Skeleton2({
    width = "100%",
    height = 16,
    radius = "md"
  }, ref) {
    const { durationCss } = (0, import_core19.useThemeRhythm)();
    (0, import_core19.useInjectStyles)(SKELETON_STYLES_ID, SKELETON_STYLES_CSS);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        ref,
        "data-skeleton": "",
        "aria-hidden": "true",
        style: {
          width,
          height,
          borderRadius: radiusMap[radius],
          background: import_core19.semantic.colorSurfaceRaised,
          ...durationCss ? { "--skeleton-duration": durationCss } : void 0
        }
      }
    );
  }
);
var CardSkeleton = (0, import_react19.forwardRef)(
  function CardSkeleton2(_props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          borderRadius: import_core19.semantic.radiusLg,
          border: `${import_core19.semantic.borderWidthDefault} solid ${import_core19.semantic.colorBorder}`,
          padding: import_core19.semantic.spaceLg,
          display: "flex",
          flexDirection: "column",
          gap: import_core19.semantic.spaceSm
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Skeleton, { width: "60%", height: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Skeleton, { width: "100%", height: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Skeleton, { width: "80%", height: 14 })
        ]
      }
    );
  }
);
var RowSkeleton = (0, import_react19.forwardRef)(
  function RowSkeleton2(_props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "flex",
          alignItems: "center",
          gap: import_core19.semantic.spaceSm,
          padding: `${import_core19.semantic.spaceSm} 0`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Skeleton, { width: 32, height: 32, radius: "full" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: import_core19.semantic.spaceXs }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Skeleton, { width: "40%", height: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Skeleton, { width: "70%", height: 12 })
          ] })
        ]
      }
    );
  }
);

// src/components/atoms/ProgressBar/ProgressBar.tsx
var import_react20 = require("react");
var import_core20 = require("../../core/dist/index.cjs");
var import_jsx_runtime18 = require("react/jsx-runtime");
var ProgressBar = (0, import_react20.forwardRef)(
  function ProgressBar2({
    segments,
    height = "md",
    "aria-label": ariaLabel
  }, ref) {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    const px = progressBarHeightMap[height];
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
          background: import_core20.semantic.colorSurfaceRaised
        },
        children: segments.map((segment, i) => {
          const pct = total > 0 ? segment.value / total * 100 : 0;
          return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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

// src/components/molecules/EmptyState/EmptyState.tsx
var import_react21 = require("react");
var import_core21 = require("../../core/dist/index.cjs");
var import_jsx_runtime19 = require("react/jsx-runtime");
var EmptyState = (0, import_react21.forwardRef)(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    children,
    action
  }, ref) {
    const content = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { padding: import_core21.semantic.spaceXl }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Stack, { align: "center", gap: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { style: { color: import_core21.semantic.colorTextMuted, display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon, { name: icon, size: "xl" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "span",
        {
          style: {
            color: import_core21.semantic.colorTextSecondary,
            fontSize: import_core21.semantic.fontSizeSm,
            textAlign: "center",
            fontFamily: import_core21.semantic.fontSans
          },
          children: message
        }
      ),
      children,
      action && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { marginTop: import_core21.semantic.spaceSm }, children: action })
    ] }) });
    if (variant === "card") {
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Card, { ref, variant: "flat", children: content });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { ref, children: content });
  }
);

// src/components/molecules/Pagination/Pagination.tsx
var import_react22 = require("react");
var import_core22 = require("../../core/dist/index.cjs");
var import_jsx_runtime20 = require("react/jsx-runtime");
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = (0, import_react22.forwardRef)(
  function Pagination2({
    page,
    totalPages,
    total,
    onPageChange,
    labels
  }, ref) {
    const resolvedLabels = { ...defaultLabels, ...labels };
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        ref,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: import_core22.semantic.spaceSm
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              disabled: page <= 1,
              onClick: () => onPageChange(page - 1),
              children: resolvedLabels.previous
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "span",
            {
              style: {
                color: import_core22.semantic.colorTextMuted,
                fontSize: import_core22.semantic.fontSizeSm,
                fontFamily: import_core22.semantic.fontSans
              },
              children: [
                resolvedLabels.pageOf(page, totalPages),
                " (",
                total,
                " total)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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

// src/components/molecules/Header/Header.tsx
var import_react23 = require("react");
var import_core23 = require("../../core/dist/index.cjs");
var import_jsx_runtime21 = require("react/jsx-runtime");
var Header = (0, import_react23.forwardRef)(
  function Header2({ title, level = "section", subtitle, indicator, trailing }, ref) {
    const isPage = level === "page";
    const Tag = isPage ? "h1" : "h2";
    const titleStyle2 = isPage ? {
      margin: 0,
      fontFamily: import_core23.semantic.fontSans,
      fontWeight: import_core23.semantic.fontWeightBold,
      color: import_core23.semantic.colorText
    } : {
      margin: 0,
      fontFamily: import_core23.semantic.fontSans,
      fontWeight: import_core23.semantic.fontWeightSemibold,
      fontSize: import_core23.semantic.fontSizeBase,
      lineHeight: import_core23.semantic.lineHeightTight,
      color: import_core23.semantic.colorText
    };
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "div",
      {
        ref,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: isPage ? "flex-end" : "center",
          gap: import_core23.semantic.spaceMd
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: import_core23.semantic.spaceSm }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Tag, { style: titleStyle2, children: title }),
              indicator
            ] }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { style: { color: import_core23.semantic.colorTextMuted, fontSize: import_core23.semantic.fontSizeSm, fontFamily: import_core23.semantic.fontSans }, children: subtitle })
          ] }),
          trailing && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { style: { display: "flex", alignItems: "center", gap: import_core23.semantic.spaceSm, flexShrink: 0 }, children: trailing })
        ]
      }
    );
  }
);

// src/components/organisms/ModalShell/ModalShell.tsx
var import_react24 = require("react");
var import_react_dom = require("react-dom");
var import_core24 = require("../../core/dist/index.cjs");
var import_jsx_runtime22 = require("react/jsx-runtime");
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: import_core24.semantic.fontWeightSemibold,
  fontFamily: import_core24.semantic.fontSans,
  color: import_core24.semantic.colorText,
  fontSize: import_core24.semantic.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: import_core24.semantic.spaceSm
});
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = (0, import_react24.forwardRef)(
  function ModalShell2({
    onClose,
    children,
    width = "md",
    zIndex = import_core24.semantic.zIndexModal,
    titleId,
    "aria-label": ariaLabel,
    role = "dialog"
  }, ref) {
    const generatedId = (0, import_react24.useId)();
    const resolvedLabelId = titleId ?? generatedId;
    const internalRef = (0, import_react24.useRef)(null);
    const setRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    useFocusTrap(internalRef);
    (0, import_react24.useEffect)(() => {
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
    (0, import_react24.useEffect)(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    return (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Overlay, { onClick: onClose, zIndex }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "div",
          {
            style: {
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: import_core24.semantic.spaceMd,
              zIndex: typeof zIndex === "number" ? zIndex + 1 : `calc(${zIndex} + 1)`,
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "div",
              {
                ref: setRefs,
                role,
                "aria-modal": "true",
                "aria-labelledby": ariaLabel ? void 0 : resolvedLabelId,
                "aria-label": ariaLabel,
                tabIndex: -1,
                style: {
                  background: import_core24.semantic.colorSurface,
                  color: import_core24.semantic.colorText,
                  borderRadius: import_core24.semantic.radiusLg,
                  boxShadow: import_core24.semantic.shadowLg,
                  border: `${import_core24.semantic.borderWidthDefault} solid ${import_core24.semantic.colorBorder}`,
                  padding: import_core24.semantic.spaceXl,
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
var import_core25 = require("../../core/dist/index.cjs");
var sectionLabelStyle = {
  display: "block",
  fontSize: import_core25.semantic.fontSizeXs,
  fontWeight: import_core25.semantic.fontWeightSemibold,
  fontFamily: import_core25.semantic.fontSans,
  color: import_core25.semantic.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: import_core25.semantic.letterSpacingWide
};

// src/styles/tagChipStyle.ts
var import_core26 = require("../../core/dist/index.cjs");
var tagChipStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: import_core26.semantic.spaceXs,
  fontSize: import_core26.semantic.fontSizeXs,
  color: import_core26.semantic.colorActionPrimary,
  background: import_core26.semantic.colorSurfaceRaised,
  borderRadius: import_core26.semantic.radiusFull,
  padding: `${import_core26.semantic.spaceXs} ${import_core26.semantic.spaceSm}`,
  fontFamily: import_core26.semantic.fontSans
};

// src/styles/pillToggleStyle.ts
var import_core27 = require("../../core/dist/index.cjs");
var pillToggleBaseStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: `${import_core27.semantic.spaceXs} ${import_core27.semantic.spaceSm}`,
  fontSize: import_core27.semantic.fontSizeSm,
  fontFamily: import_core27.semantic.fontSans,
  fontWeight: import_core27.semantic.fontWeightMedium,
  lineHeight: import_core27.semantic.lineHeightTight,
  borderRadius: import_core27.semantic.radiusFull,
  cursor: "pointer",
  transition: `background ${import_core27.semantic.transitionFast}, border-color ${import_core27.semantic.transitionFast}, color ${import_core27.semantic.transitionFast}`,
  outline: "none"
};
var pillToggleSelectedStyle = {
  color: import_core27.semantic.colorActionPrimary,
  background: import_core27.semantic.colorActionSecondary,
  border: `${import_core27.semantic.borderWidthDefault} solid ${import_core27.semantic.colorActionPrimary}`
};
var pillToggleUnselectedStyle = {
  color: import_core27.semantic.colorText,
  background: "transparent",
  border: `${import_core27.semantic.borderWidthDefault} solid ${import_core27.semantic.colorBorder}`
};

// src/components/molecules/ConfirmDialog/ConfirmDialog.tsx
var import_react25 = require("react");
var import_core28 = require("../../core/dist/index.cjs");
var import_jsx_runtime23 = require("react/jsx-runtime");
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = (0, import_react25.forwardRef)(
  function ConfirmDialog2({
    title,
    message,
    confirmLabel = "Confirm",
    onConfirm,
    onCancel,
    children,
    variant = "destructive"
  }, ref) {
    const [loading, setLoading] = (0, import_react25.useState)(false);
    const titleId = (0, import_react25.useId)();
    const handleConfirm = async () => {
      setLoading(true);
      try {
        await onConfirm();
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(ModalShell, { ref, onClose: onCancel, role: "alertdialog", titleId, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "h2",
        {
          id: titleId,
          style: modalHeadingStyle,
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "p",
        {
          style: {
            margin: `${import_core28.semantic.spaceSm} 0 ${children ? "0" : import_core28.semantic.spaceLg}`,
            color: import_core28.semantic.colorTextMuted,
            fontSize: import_core28.semantic.fontSizeSm,
            fontFamily: import_core28.semantic.fontSans
          },
          children: message
        }
      ),
      children && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: { margin: `${import_core28.semantic.spaceSm} 0 ${import_core28.semantic.spaceLg}` }, children }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/organisms/Table/Table.tsx
var import_react26 = require("react");
var import_core29 = require("../../core/dist/index.cjs");
var import_core30 = require("../../core/dist/index.cjs");
var import_jsx_runtime24 = require("react/jsx-runtime");
var spaceMap = {
  xs: import_core29.semantic.spaceXs,
  sm: import_core29.semantic.spaceSm,
  md: import_core29.semantic.spaceMd,
  lg: import_core29.semantic.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${import_core29.semantic.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${import_core29.semantic.colorSurfaceRaised};
  border-bottom-color: ${import_core29.semantic.colorSurfaceRaised};
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
  background: ${import_core29.semantic.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${import_core29.semantic.borderWidthDefault} solid ${import_core29.semantic.colorBorder}`,
    borderRadius: import_core29.semantic.radiusLg,
    boxShadow: import_core29.semantic.shadowSm
  },
  flat: {}
};
var Table = (0, import_react26.forwardRef)(
  function Table2({
    variant = "default",
    density = "md",
    children
  }, ref) {
    (0, import_core30.useInjectStyles)(TABLE_STYLES_ID, TABLE_STYLES_CSS);
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
              fontSize: import_core29.semantic.fontSizeSm,
              fontFamily: import_core29.semantic.fontSans,
              color: import_core29.semantic.colorText
            },
            children
          }
        )
      }
    );
  }
);
var TableHeader = (0, import_react26.forwardRef)(
  function TableHeader2({ children }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("thead", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { children }) });
  }
);
var TableHeaderCell = (0, import_react26.forwardRef)(
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
          padding: `${import_core29.semantic.spaceSm} ${import_core29.semantic.spaceMd}`,
          textAlign: align,
          fontWeight: import_core29.semantic.fontWeightSemibold,
          fontSize: import_core29.semantic.fontSizeXs,
          color: import_core29.semantic.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: import_core29.semantic.letterSpacingWide,
          borderBottom: `${import_core29.semantic.borderWidthThick} solid ${import_core29.semantic.colorBorder}`,
          whiteSpace: "nowrap",
          width: width !== void 0 ? `${width}px` : void 0
        },
        children
      }
    );
  }
);
var TableBody = (0, import_react26.forwardRef)(
  function TableBody2({ children }, ref) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tbody", { ref, children: styledChildren });
  }
);
var TableRow = (0, import_react26.forwardRef)(
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
var TableCell = (0, import_react26.forwardRef)(
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
          padding: `${import_core29.semantic.spaceSm} ${import_core29.semantic.spaceMd}`,
          borderBottom: `${import_core29.semantic.borderWidthDefault} solid ${import_core29.semantic.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? import_core29.semantic.colorTextMuted : void 0,
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
var TableGroupHeader = (0, import_react26.forwardRef)(
  function TableGroupHeader2({
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { ref, style: { cursor: "default" }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "td",
      {
        colSpan,
        style: {
          padding: `${import_core29.semantic.spaceXs} ${import_core29.semantic.spaceMd}`,
          background: import_core29.semantic.colorSurfaceRaised,
          borderBottom: `${import_core29.semantic.borderWidthDefault} solid ${import_core29.semantic.colorBorder}`,
          fontSize: import_core29.semantic.fontSizeXs,
          fontWeight: import_core29.semantic.fontWeightBold,
          letterSpacing: import_core29.semantic.letterSpacingWide,
          textTransform: "uppercase",
          color: import_core29.semantic.colorTextMuted,
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
    children
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { ref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "td",
      {
        colSpan,
        style: {
          padding: `${import_core29.semantic.spaceXl} ${import_core29.semantic.spaceMd}`,
          textAlign: "center",
          color: import_core29.semantic.colorTextMuted,
          fontSize: import_core29.semantic.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/organisms/Table/FilterBar.tsx
var import_react27 = require("react");
var import_core31 = require("../../core/dist/index.cjs");
var import_jsx_runtime25 = require("react/jsx-runtime");
var FilterBarContext = (0, import_react27.createContext)(null);
function useFilterBarContext(part) {
  const ctx = (0, import_react27.useContext)(FilterBarContext);
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
  const commit = (0, import_react27.useCallback)(
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
        gap: import_core31.semantic.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...rest,
      children: content
    }
  ) });
}
var FilterBarText = (0, import_react27.forwardRef)(function FilterBarText2({ field, placeholder, debounceMs = 300 }, ref) {
  const { values, commit } = useFilterBarContext("Text");
  const external = values[field] ?? "";
  const [local, setLocal] = (0, import_react27.useState)(external);
  const timerRef = (0, import_react27.useRef)(null);
  (0, import_react27.useEffect)(() => {
    setLocal(external);
  }, [external]);
  const handleChange = (0, import_react27.useCallback)(
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
  (0, import_react27.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    Input,
    {
      ref,
      value: local,
      onChange: handleChange,
      placeholder
    }
  ) });
});
var FilterBarSelect = (0, import_react27.forwardRef)(function FilterBarSelect2({ field, placeholder, options }, ref) {
  const { values, commit } = useFilterBarContext("Select");
  const value = values[field] ?? "";
  const handleValueChange = (0, import_react27.useCallback)(
    (next) => {
      commit(field, next);
    },
    [commit, field]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Select.Root, { value, onValueChange: handleValueChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Trigger, { ref, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Value, { placeholder }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Content, { children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Select.Item, { value: opt.value, children: opt.label }, opt.value)) })
  ] }) });
});
var TableFilterBar = Object.assign(FilterBar, {
  Text: FilterBarText,
  Select: FilterBarSelect
});

// src/components/organisms/Table/index.ts
var Table3 = Object.assign(Table, {
  FilterBar: TableFilterBar
});

// src/components/organisms/DateRangePicker/DateRangePicker.tsx
var import_react30 = require("react");
var import_core35 = require("../../core/dist/index.cjs");

// src/components/organisms/Calendar/Calendar.tsx
var import_react28 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var CalendarContext = (0, import_react28.createContext)(null);
function useCalendarContext(part = "child") {
  const ctx = (0, import_react28.useContext)(CalendarContext);
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
  const [focusedDateState, setFocusedDateState] = (0, import_react28.useState)(
    () => defaultFocusedDate ?? seedFocusedDate(selected) ?? /* @__PURE__ */ new Date()
  );
  const isControlled = focusedDateProp !== void 0;
  const focusedDate = isControlled ? focusedDateProp : focusedDateState;
  const setFocusedDate = (0, import_react28.useCallback)(
    (date) => {
      if (!isControlled) setFocusedDateState(date);
      onFocusedDateChange?.(date);
    },
    [isControlled, onFocusedDateChange]
  );
  const [viewDateState, setViewDateState] = (0, import_react28.useState)(
    () => firstOfMonth(
      defaultViewDate ?? seedFocusedDate(selected) ?? /* @__PURE__ */ new Date()
    )
  );
  const isViewControlled = viewDateProp !== void 0;
  const viewDate = isViewControlled ? firstOfMonth(viewDateProp) : viewDateState;
  const setViewDate = (0, import_react28.useCallback)(
    (date) => {
      const normalized = firstOfMonth(date);
      if (!isViewControlled) setViewDateState(normalized);
      onViewDateChange?.(normalized);
    },
    [isViewControlled, onViewDateChange]
  );
  const handleSelect = (0, import_react28.useCallback)(
    (value) => {
      onSelect?.(value);
    },
    [onSelect]
  );
  const ctx = (0, import_react28.useMemo)(
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

// src/components/organisms/Calendar/Header.tsx
var import_core32 = require("../../core/dist/index.cjs");

// src/components/organisms/DateRangePicker/dateUtils.ts
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
  const t51 = stripTime(to).getTime();
  return d >= f && d <= t51;
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

// src/components/organisms/Calendar/Header.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var titleStyle = {
  fontSize: import_core32.semantic.fontSizeSm,
  fontWeight: import_core32.semantic.fontWeightSemibold,
  fontFamily: import_core32.semantic.fontSans,
  color: import_core32.semantic.colorText,
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

// src/components/organisms/Calendar/Nav.tsx
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

// src/components/organisms/Calendar/Grid.tsx
var import_react29 = require("react");
var import_core34 = require("../../core/dist/index.cjs");

// src/components/organisms/Calendar/Cell.tsx
var import_core33 = require("../../core/dist/index.cjs");
var import_jsx_runtime29 = require("react/jsx-runtime");
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: import_core33.semantic.spaceXl,
  height: import_core33.semantic.spaceXl,
  border: "none",
  borderRadius: import_core33.semantic.radiusSm,
  fontSize: import_core33.semantic.fontSizeSm,
  fontFamily: import_core33.semantic.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: import_core33.semantic.colorText,
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
    ...isOutsideMonth ? { color: import_core33.semantic.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${import_core33.semantic.borderWidthDefault} solid ${import_core33.semantic.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? {
      background: `color-mix(in srgb, ${import_core33.semantic.colorActionPrimary} 15%, transparent)`
    } : {},
    ...isEndpoint ? { background: import_core33.semantic.colorActionPrimary, color: import_core33.semantic.colorTextInverse } : {},
    ...disabled ? {
      color: import_core33.semantic.colorTextDisabled,
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

// src/components/organisms/Calendar/Grid.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var GRID_STYLES_ID2 = "alttab-calendar";
var gridCSS2 = (
  /* css */
  `
  .alttab-calendar-day--enabled:hover {
    background: ${import_core34.semantic.colorSurfaceRaised} !important;
  }
  .alttab-calendar-day--enabled:focus-visible {
    outline: ${import_core34.semantic.focusRingWidth} solid ${import_core34.semantic.focusRingColor};
    outline-offset: ${import_core34.semantic.focusRingOffset};
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
  fontSize: import_core34.semantic.fontSizeXs,
  fontFamily: import_core34.semantic.fontSans,
  fontWeight: import_core34.semantic.fontWeightMedium,
  color: import_core34.semantic.colorTextMuted,
  textAlign: "center",
  padding: `${import_core34.semantic.spaceXs} 0`,
  userSelect: "none"
};
function CalendarGridPrimitive({
  "aria-label": ariaLabel = "Calendar",
  onEscape,
  children,
  style,
  className
}) {
  (0, import_core34.useInjectStyles)(GRID_STYLES_ID2, gridCSS2);
  const ctx = useCalendarContext("Grid");
  const tableRef = (0, import_react29.useRef)(null);
  const todayRef = (0, import_react29.useRef)(/* @__PURE__ */ new Date());
  const year = ctx.viewDate.getFullYear();
  const month = ctx.viewDate.getMonth();
  const grid = (0, import_react29.useMemo)(() => buildCalendarGrid(year, month), [year, month]);
  const rows = (0, import_react29.useMemo)(() => {
    const out = [];
    for (let r = 0; r < 6; r++) {
      out.push(grid.slice(r * 7, r * 7 + 7));
    }
    return out;
  }, [grid]);
  const { start: highlightStart, end: highlightEnd } = getHighlightBounds(ctx);
  const isCellDisabled = (0, import_react29.useCallback)(
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
  const handleKeyDown = (0, import_react29.useCallback)(
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
  (0, import_react29.useEffect)(() => {
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

// src/components/organisms/Calendar/index.ts
var Calendar2 = {
  Root: Calendar.Root,
  Header: CalendarHeaderPrimitive,
  Nav: CalendarNav,
  Grid: CalendarGridPrimitive,
  Cell: CalendarCell
};

// src/components/organisms/DateRangePicker/DateRangePicker.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-trigger:focus-visible {
    border-color: ${import_core35.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core35.semantic.focusRingWidth} ${import_core35.semantic.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${import_core35.semantic.colorBorderFocused};
  }
`
);
var wrapperStyle2 = {
  position: "relative",
  display: "inline-block",
  width: "100%"
};
var triggerBaseStyle2 = {
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: import_core35.semantic.lineHeightTight,
  outline: "none",
  cursor: "pointer",
  textAlign: "left"
};
var popoverStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: import_core35.semantic.spaceXs,
  ...popoverPanelLg,
  minWidth: 290
};
var placeholderStyle2 = {
  color: import_core35.semantic.colorTextPlaceholder
};
var headerRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${import_core35.semantic.spaceXs} 0`,
  marginBottom: import_core35.semantic.spaceSm
};
function sortedRange(a, b) {
  return a.getTime() <= b.getTime() ? { from: a, to: b } : { from: b, to: a };
}
var DateRangePicker = (0, import_react30.forwardRef)(
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
    (0, import_core35.useInjectStyles)(SCOPE, injectedCSS);
    const [open, setOpen] = (0, import_react30.useState)(false);
    const [selectionStart, setSelectionStart] = (0, import_react30.useState)(null);
    const [hoverDate, setHoverDate] = (0, import_react30.useState)(null);
    const containerRef = (0, import_react30.useRef)(null);
    const handleOutsideClose = (0, import_react30.useCallback)(() => {
      setOpen(false);
      setSelectionStart(null);
      setHoverDate(null);
    }, []);
    useClickOutside(containerRef, handleOutsideClose, open);
    (0, import_react30.useEffect)(() => {
      if (!open) return;
      const btn = containerRef.current?.querySelector(
        '[role="grid"] button[tabindex="0"]'
      );
      btn?.focus();
    }, [open]);
    const handleToggle = (0, import_react30.useCallback)(() => {
      if (disabled) return;
      setOpen((prev) => {
        if (prev) {
          setSelectionStart(null);
          setHoverDate(null);
        }
        return !prev;
      });
    }, [disabled]);
    const handleSelect = (0, import_react30.useCallback)(
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
    const handleFocusedDateChange = (0, import_react30.useCallback)(
      (d) => {
        if (selectionStart !== null) setHoverDate(d);
      },
      [selectionStart]
    );
    const disabledDate = (0, import_react30.useMemo)(() => {
      if (!disabledDates || disabledDates.length === 0) return void 0;
      return (d) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);
    const displaySelected = (0, import_react30.useMemo)(() => {
      if (selectionStart !== null) {
        const end = hoverDate ?? selectionStart;
        return sortedRange(selectionStart, end);
      }
      return value;
    }, [selectionStart, hoverDate, value]);
    const openKey = (0, import_react30.useMemo)(
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
                ...hasError ? inputShellErrorStyle : {},
                ...disabled ? inputShellDisabledStyle : {}
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

// src/components/organisms/DatePicker/DatePicker.tsx
var import_react31 = require("react");
var import_core36 = require("../../core/dist/index.cjs");
var import_jsx_runtime32 = require("react/jsx-runtime");
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${import_core36.semantic.colorBorderFocused};
    box-shadow: 0 0 0 ${import_core36.semantic.focusRingWidth} ${import_core36.semantic.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${import_core36.semantic.colorBorderFocused};
  }
`
);
var wrapperStyle3 = {
  position: "relative",
  display: "inline-block",
  width: "100%"
};
var triggerBaseStyle3 = {
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: import_core36.semantic.lineHeightTight,
  outline: "none",
  cursor: "pointer",
  textAlign: "left"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: import_core36.semantic.spaceXs,
  ...popoverPanelLg,
  minWidth: 290
};
var placeholderStyle3 = {
  color: import_core36.semantic.colorTextPlaceholder
};
var headerRowStyle2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${import_core36.semantic.spaceXs} 0`,
  marginBottom: import_core36.semantic.spaceSm
};
var DatePicker = (0, import_react31.forwardRef)(
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
    (0, import_core36.useInjectStyles)(SCOPE2, injectedCSS2);
    const [open, setOpen] = (0, import_react31.useState)(false);
    const containerRef = (0, import_react31.useRef)(null);
    useClickOutside(containerRef, () => setOpen(false), open);
    (0, import_react31.useEffect)(() => {
      if (!open) return;
      const btn = containerRef.current?.querySelector(
        '[role="grid"] button[tabindex="0"]'
      );
      btn?.focus();
    }, [open]);
    const handleToggle = (0, import_react31.useCallback)(() => {
      if (disabled) return;
      setOpen((o) => !o);
    }, [disabled]);
    const handleSelect = (0, import_react31.useCallback)(
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
    const disabledDate = (0, import_react31.useMemo)(() => {
      if (!disabledDates || disabledDates.length === 0) return void 0;
      return (d) => disabledDates.some((dd) => isSameDay(dd, d));
    }, [disabledDates]);
    const openKey = (0, import_react31.useMemo)(
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
                ...hasError ? inputShellErrorStyle : {},
                ...disabled ? inputShellDisabledStyle : {}
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

// src/components/molecules/ErrorBoundary/ErrorBoundary.tsx
var import_react32 = __toESM(require("react"), 1);
var import_core37 = require("../../core/dist/index.cjs");
var import_jsx_runtime33 = require("react/jsx-runtime");
var ErrorBoundary = class extends import_react32.default.Component {
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { borderColor: import_core37.semantic.colorError, borderWidth: "2px", borderStyle: "solid", borderRadius: import_core37.semantic.radiusLg }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Card,
      {
        variant: "flat",
        padding: "lg",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core37.semantic.spaceMd }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { display: "flex", alignItems: "center", gap: import_core37.semantic.spaceSm }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "span",
            {
              style: {
                fontSize: import_core37.semantic.fontSizeLg,
                color: import_core37.semantic.colorError,
                fontWeight: import_core37.semantic.fontWeightSemibold,
                fontFamily: import_core37.semantic.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: import_core37.semantic.fontMono,
                fontSize: import_core37.semantic.fontSizeSm,
                lineHeight: import_core37.semantic.lineHeightBase,
                color: import_core37.semantic.colorText,
                background: import_core37.semantic.colorSurfaceRaised,
                padding: import_core37.semantic.spaceSm,
                borderRadius: import_core37.semantic.radiusMd,
                wordBreak: "break-word"
              },
              children: error.message
            }
          ),
          error.stack && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => this.setState({ showStack: !showStack }),
                children: showStack ? "Hide stack trace" : "Show stack trace"
              }
            ),
            showStack && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "pre",
              {
                style: {
                  marginTop: import_core37.semantic.spaceSm,
                  fontFamily: import_core37.semantic.fontMono,
                  fontSize: import_core37.semantic.fontSizeXs,
                  lineHeight: import_core37.semantic.lineHeightBase,
                  color: import_core37.semantic.colorTextSecondary,
                  background: import_core37.semantic.colorSurfaceRaised,
                  padding: import_core37.semantic.spaceSm,
                  borderRadius: import_core37.semantic.radiusMd,
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

// src/components/organisms/Toast/Toast.tsx
var import_react33 = require("react");
var import_react_dom2 = require("react-dom");
var import_core38 = require("../../core/dist/index.cjs");
var import_jsx_runtime34 = require("react/jsx-runtime");
var ToastContext = (0, import_react33.createContext)(null);
function useToast() {
  const ctx = (0, import_react33.useContext)(ToastContext);
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
  success: { bg: import_core38.semantic.colorSuccessBg, fg: import_core38.semantic.colorSuccess, border: import_core38.semantic.colorSuccess },
  error: { bg: import_core38.semantic.colorErrorBg, fg: import_core38.semantic.colorError, border: import_core38.semantic.colorError },
  info: { bg: import_core38.semantic.colorInfoBg, fg: import_core38.semantic.colorInfo, border: import_core38.semantic.colorInfo },
  warning: { bg: import_core38.semantic.colorWarningBg, fg: import_core38.semantic.colorWarning, border: import_core38.semantic.colorWarning }
};
function ToastMessage({
  item,
  onDismiss
}) {
  const [exiting, setExiting] = (0, import_react33.useState)(false);
  const [paused, setPaused] = (0, import_react33.useState)(false);
  const timerRef = (0, import_react33.useRef)(null);
  const startedAtRef = (0, import_react33.useRef)(0);
  const remainingRef = (0, import_react33.useRef)(item.duration);
  const autoDismiss = item.duration > 0;
  const clearTimer = (0, import_react33.useCallback)(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const startTimer = (0, import_react33.useCallback)(() => {
    if (!autoDismiss || remainingRef.current <= 0) return;
    clearTimer();
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      setExiting(true);
    }, remainingRef.current);
    setPaused(false);
  }, [autoDismiss, clearTimer]);
  const pauseTimer = (0, import_react33.useCallback)(() => {
    if (!autoDismiss || !timerRef.current) return;
    const elapsed = Date.now() - startedAtRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    clearTimer();
    setPaused(true);
  }, [autoDismiss, clearTimer]);
  (0, import_react33.useEffect)(() => {
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
        gap: import_core38.semantic.spaceSm,
        padding: `${import_core38.semantic.spaceSm} ${import_core38.semantic.spaceMd}`,
        paddingBottom: autoDismiss ? `calc(${import_core38.semantic.spaceSm} + 2px)` : import_core38.semantic.spaceSm,
        backgroundColor: import_core38.semantic.colorSurfaceSolid,
        backgroundImage: `linear-gradient(${colors.bg}, ${colors.bg})`,
        color: colors.fg,
        borderRadius: import_core38.semantic.radiusMd,
        borderLeft: `${import_core38.semantic.borderWidthAccent} solid ${colors.border}`,
        boxShadow: import_core38.semantic.shadowMd,
        fontSize: import_core38.semantic.fontSizeSm,
        fontFamily: import_core38.semantic.fontSans,
        fontWeight: import_core38.semantic.fontWeightMedium,
        lineHeight: import_core38.semantic.lineHeightBase,
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
          IconButton,
          {
            icon: "close",
            "aria-label": "Dismiss",
            size: "sm",
            onClick: () => setExiting(true)
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
  (0, import_core38.useInjectStyles)(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: import_core38.semantic.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: import_core38.semantic.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: import_core38.semantic.spaceLg } : { bottom: import_core38.semantic.spaceLg },
    ...position.endsWith("right") ? { right: import_core38.semantic.spaceLg } : { left: import_core38.semantic.spaceLg }
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
  const [toasts, setToasts] = (0, import_react33.useState)([]);
  const dismiss = (0, import_react33.useCallback)((id) => {
    setToasts((prev) => prev.filter((t51) => t51.id !== id));
  }, []);
  const showToast = (0, import_react33.useCallback)(
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

// src/components/organisms/Combobox/Combobox.tsx
var import_react34 = require("react");
var import_core39 = require("../../core/dist/index.cjs");
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
var ComboboxContext = (0, import_react34.createContext)(null);
function useComboboxContext(part) {
  const ctx = (0, import_react34.useContext)(ComboboxContext);
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
  (0, import_core39.useInjectStyles)(COMBOBOX_STYLES_ID, comboboxCSS);
  const instanceId = (0, import_react34.useId)();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = (0, import_react34.useState)(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = (0, import_react34.useState)(false);
  const [focusedValue, setFocusedValue] = (0, import_react34.useState)(null);
  const [dropDirection, setDropDirection] = (0, import_react34.useState)("down");
  const containerRef = (0, import_react34.useRef)(null);
  const inputRef = (0, import_react34.useRef)(null);
  const suppressNextOpenRef = (0, import_react34.useRef)(false);
  const [items, setItems] = (0, import_react34.useState)([]);
  const registerItem = (0, import_react34.useCallback)((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = (0, import_react34.useCallback)((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = (0, import_react34.useCallback)(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  const calculateDirection = (0, import_react34.useCallback)(() => {
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
  const openMenu = (0, import_react34.useCallback)(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    setFocusedValue(null);
  }, [disabled, calculateDirection]);
  const closeMenu = (0, import_react34.useCallback)(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const selectItem = (0, import_react34.useCallback)(
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
  useClickOutside(containerRef, closeMenu, open);
  const handleKeyDown = (0, import_react34.useCallback)(
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
  const ctx = (0, import_react34.useMemo)(
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
  const handleChange = (0, import_react34.useCallback)(
    (e) => {
      setValue(e.target.value);
      if (!open) openMenu();
    },
    [setValue, open, openMenu]
  );
  const handleFocus = (0, import_react34.useCallback)(
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
        ...hasError ? inputShellErrorStyle : {},
        ...disabled ? inputShellDisabledStyle : {}
      }
    }
  );
}
function List({ children }) {
  const { open, listboxId, dropDirection, focusedValue } = useComboboxContext("List");
  const ref = (0, import_react34.useRef)(null);
  (0, import_react34.useEffect)(() => {
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
    marginTop: import_core39.semantic.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: import_core39.semantic.spaceXs
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
        ...popoverPanelMd,
        maxHeight: "16rem",
        overflowY: "auto"
      } : void 0,
      children
    }
  );
}
function Item3({
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
  (0, import_react34.useEffect)(() => {
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
        padding: `${import_core39.semantic.spaceXs} ${import_core39.semantic.spaceSm}`,
        fontSize: import_core39.semantic.fontSizeSm,
        color: import_core39.semantic.colorTextMuted,
        fontFamily: import_core39.semantic.fontSans
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
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: import_core39.semantic.lineHeightTight,
  outline: "none"
};
var Combobox = {
  Root: Root3,
  Input: Input3,
  List,
  Item: Item3,
  Empty
};

// src/components/organisms/CommandPalette/CommandPalette.tsx
var import_react35 = require("react");
var import_react_dom3 = require("react-dom");
var import_core40 = require("../../core/dist/index.cjs");
var import_jsx_runtime36 = require("react/jsx-runtime");
function isMac() {
  if (typeof navigator === "undefined") return false;
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent ?? "");
}
function matchesShortcut(event, spec) {
  if (event.key.toLowerCase() !== spec.key.toLowerCase()) return false;
  if (spec.mod) {
    const wantMod = isMac() ? event.metaKey : event.ctrlKey;
    if (!wantMod) return false;
  }
  if (spec.ctrl !== void 0 && spec.ctrl !== event.ctrlKey) return false;
  if (spec.meta !== void 0 && spec.meta !== event.metaKey) return false;
  if (spec.shift !== void 0 && spec.shift !== event.shiftKey) return false;
  if (spec.alt !== void 0 && spec.alt !== event.altKey) return false;
  return true;
}
var DEFAULT_SHORTCUT = { key: "k", mod: true };
var RootContext = (0, import_react35.createContext)(null);
function useRootContext(part) {
  const ctx = (0, import_react35.useContext)(RootContext);
  if (!ctx) {
    throw new Error(
      `<CommandPalette.${part}> must be rendered inside <CommandPalette.Root>.`
    );
  }
  return ctx;
}
var QueryContext = (0, import_react35.createContext)(null);
function useQueryContext(part) {
  const ctx = (0, import_react35.useContext)(QueryContext);
  if (!ctx) {
    throw new Error(
      `<CommandPalette.${part}> must be rendered inside <CommandPalette.Content>.`
    );
  }
  return ctx;
}
function Root4({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  "aria-label": ariaLabel,
  shortcut = DEFAULT_SHORTCUT,
  disabled = false,
  children
}) {
  const [internalOpen, setInternalOpen] = (0, import_react35.useState)(defaultOpen);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : internalOpen;
  const titleId = (0, import_react35.useId)();
  const setOpen = (0, import_react35.useCallback)(
    (next) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );
  (0, import_react35.useEffect)(() => {
    if (disabled || !shortcut) return;
    const handler = (e) => {
      if (matchesShortcut(e, shortcut)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [disabled, shortcut, open, setOpen]);
  const ctx = (0, import_react35.useMemo)(
    () => ({ open, setOpen, ariaLabel, titleId }),
    [open, setOpen, ariaLabel, titleId]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(RootContext.Provider, { value: ctx, children });
}
function Trigger3({
  asChild = false,
  children,
  onClick
}) {
  const { open, setOpen, ariaLabel } = useRootContext("Trigger");
  const handleClick = (0, import_react35.useCallback)(
    (e) => {
      onClick?.(e);
      setOpen(!open);
    },
    [onClick, open, setOpen]
  );
  if (asChild) {
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      import_core40.Slot,
      {
        onClick: handleClick,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-label": ariaLabel,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "button",
    {
      type: "button",
      onClick: handleClick,
      "aria-haspopup": "dialog",
      "aria-expanded": open,
      "aria-label": ariaLabel,
      style: {
        cursor: "pointer",
        background: "transparent",
        border: `${import_core40.semantic.borderWidthDefault} solid ${import_core40.semantic.colorBorder}`,
        color: import_core40.semantic.colorText,
        borderRadius: import_core40.semantic.radiusMd,
        padding: `${import_core40.semantic.spaceXs} ${import_core40.semantic.spaceSm}`,
        fontSize: import_core40.semantic.fontSizeSm,
        fontFamily: import_core40.semantic.fontSans,
        display: "inline-flex",
        alignItems: "center",
        gap: import_core40.semantic.spaceXs
      },
      children
    }
  );
}
function Content3({
  placeholder = "Type a command or search\u2026",
  emptyLabel = "No results.",
  children
}) {
  const { open, setOpen, ariaLabel, titleId } = useRootContext("Content");
  const [query, setQuery] = (0, import_react35.useState)("");
  const panelRef = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => {
    if (open) setQuery("");
  }, [open]);
  (0, import_react35.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen]);
  const matches = (0, import_react35.useCallback)(
    (value, keywords, text) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      if (value.toLowerCase().includes(q)) return true;
      if (text.toLowerCase().includes(q)) return true;
      for (const kw of keywords) {
        if (kw.toLowerCase().includes(q)) return true;
      }
      return false;
    },
    [query]
  );
  const queryCtx = (0, import_react35.useMemo)(
    () => ({ query, matches }),
    [query, matches]
  );
  if (!open) return null;
  const anyMatch = hasMatchingItem(children, query);
  return (0, import_react_dom3.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(QueryContext.Provider, { value: queryCtx, children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Overlay, { onClick: () => setOpen(false), zIndex: import_core40.semantic.zIndexModal }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: import_core40.semantic.spaceMd,
            paddingTop: "10vh",
            zIndex: `calc(${import_core40.semantic.zIndexModal} + 1)`,
            pointerEvents: "none"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
            "div",
            {
              ref: panelRef,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": ariaLabel,
              "aria-labelledby": void 0,
              "data-testid": "command-palette-content",
              style: {
                background: import_core40.semantic.colorSurface,
                color: import_core40.semantic.colorText,
                borderRadius: import_core40.semantic.radiusLg,
                boxShadow: import_core40.semantic.shadowLg,
                border: `${import_core40.semantic.borderWidthDefault} solid ${import_core40.semantic.colorBorder}`,
                width: "100%",
                maxWidth: "36rem",
                maxHeight: "70vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                pointerEvents: "auto",
                outline: "none"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { id: titleId, style: { display: "none" }, children: ariaLabel }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Combobox.Root, { value: query, onValueChange: setQuery, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                    "div",
                    {
                      style: {
                        borderBottom: `${import_core40.semantic.borderWidthDefault} solid ${import_core40.semantic.colorBorder}`,
                        padding: import_core40.semantic.spaceSm
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                        Combobox.Input,
                        {
                          placeholder,
                          "aria-label": ariaLabel,
                          autoFocus: true
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                    "div",
                    {
                      style: {
                        flex: 1,
                        overflowY: "auto",
                        padding: import_core40.semantic.spaceXs
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Combobox.List, { children: anyMatch ? children : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Combobox.Empty, { children: emptyLabel }) })
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.body
  );
}
function Group({ label, children }) {
  const { query } = useQueryContext("Group");
  if (!hasMatchingItem(children, query)) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      "data-command-palette-group": true,
      "data-label": label,
      style: {
        padding: `${import_core40.semantic.spaceXs} 0`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "div",
          {
            "aria-hidden": "true",
            style: {
              padding: `${import_core40.semantic.spaceXs} ${import_core40.semantic.spaceSm}`,
              fontSize: import_core40.semantic.fontSizeXs,
              fontWeight: import_core40.semantic.fontWeightSemibold,
              color: import_core40.semantic.colorTextMuted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontFamily: import_core40.semantic.fontSans
            },
            children: label
          }
        ),
        children
      ]
    }
  );
}
function Item4({
  value,
  onSelect,
  icon,
  shortcut,
  keywords = [],
  children
}) {
  const { matches } = useQueryContext("Item");
  const { setOpen } = useRootContext("Item");
  const text = typeof children === "string" ? children : value;
  if (!matches(value, keywords, text)) return null;
  const handleSelect = () => {
    setOpen(false);
    onSelect();
  };
  const shortcutParts = Array.isArray(shortcut) ? shortcut : shortcut ? [shortcut] : [];
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Combobox.Item, { value, textValue: text, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "span",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: import_core40.semantic.spaceSm,
        width: "100%"
      },
      onClick: handleSelect,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "span",
          {
            "aria-hidden": "true",
            style: {
              display: "inline-flex",
              color: import_core40.semantic.colorTextMuted
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { name: icon, size: "sm" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { flex: 1, minWidth: 0 }, children }),
        shortcutParts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "span",
          {
            "aria-hidden": "true",
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "2px",
              marginLeft: "auto",
              flexShrink: 0
            },
            children: shortcutParts.map((part, i) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "kbd",
              {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  padding: `0 ${import_core40.semantic.spaceXs}`,
                  minWidth: "1.5em",
                  height: "1.5em",
                  justifyContent: "center",
                  background: import_core40.semantic.colorSurfaceRaised,
                  color: import_core40.semantic.colorTextMuted,
                  border: `${import_core40.semantic.borderWidthDefault} solid ${import_core40.semantic.colorBorder}`,
                  borderRadius: import_core40.semantic.radiusSm,
                  fontSize: import_core40.semantic.fontSizeXs,
                  fontFamily: import_core40.semantic.fontMono,
                  lineHeight: 1
                },
                children: part
              },
              `${value}-kbd-${i}`
            ))
          }
        )
      ]
    }
  ) });
}
function hasMatchingItem(children, query) {
  const q = query.trim().toLowerCase();
  let found = false;
  const visit = (node) => {
    if (found) return;
    import_react35.Children.forEach(node, (child) => {
      if (found) return;
      if (!(0, import_react35.isValidElement)(child)) return;
      const props = child.props;
      const looksLikeItem = typeof props.value === "string" && typeof props.onSelect === "function";
      if (looksLikeItem) {
        const itemValue = props.value ?? "";
        const keywords = props.keywords ?? [];
        const text = typeof props.children === "string" ? props.children : itemValue;
        if (!q) {
          found = true;
          return;
        }
        if (itemValue.toLowerCase().includes(q) || text.toLowerCase().includes(q) || keywords.some((k) => k.toLowerCase().includes(q))) {
          found = true;
          return;
        }
        return;
      }
      if (props.children !== void 0) visit(props.children);
    });
  };
  visit(children);
  return found;
}
var CommandPalette = {
  Root: Root4,
  Trigger: Trigger3,
  Content: Content3,
  Group,
  Item: Item4
};

// src/components/molecules/ChipPicker/ChipPicker.tsx
var import_react36 = require("react");
var import_core41 = require("../../core/dist/index.cjs");
var import_jsx_runtime37 = require("react/jsx-runtime");
function ChipPicker({
  items,
  selected: controlledSelected,
  defaultSelected,
  onChange,
  "aria-label": ariaLabel
}) {
  const uid = (0, import_react36.useId)();
  const styleId = `chip-picker-${uid.replace(/:/g, "")}`;
  const isControlled = controlledSelected !== void 0;
  const [internalSelected, setInternalSelected] = (0, import_react36.useState)(
    () => defaultSelected ?? []
  );
  const selected = isControlled ? controlledSelected : internalSelected;
  const applySelection = (0, import_react36.useCallback)(
    (next) => {
      if (!isControlled) setInternalSelected(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  (0, import_core41.useInjectStyles)(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${import_core41.semantic.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${import_core41.semantic.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${import_core41.semantic.focusRingWidth} solid ${import_core41.semantic.focusRingColor};
      outline-offset: ${import_core41.semantic.focusRingOffset};
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
  const renderChips = (chips) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: import_core41.semantic.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "button",
          {
            type: "button",
            "aria-pressed": isSelected,
            onClick: () => toggle(item.value),
            style: {
              ...pillToggleBaseStyle,
              ...isSelected ? pillToggleSelectedStyle : pillToggleUnselectedStyle
            },
            children: item.label
          },
          item.value
        );
      })
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      "data-chip-picker-id": styleId,
      role: "group",
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core41.semantic.spaceMd
      },
      children: groups.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core41.semantic.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { style: i > 0 ? { marginTop: import_core41.semantic.spaceXs } : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { style: sectionLabelStyle, children: group.label }) }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/molecules/SearchInput/SearchInput.tsx
var import_react37 = require("react");
var import_core42 = require("../../core/dist/index.cjs");
var import_jsx_runtime38 = require("react/jsx-runtime");
var STYLE_ID2 = "4lt7ab-search-input";
var WRAPPER_CLASS = "search-input-wrapper";
var focusRingCSS = inputShellFocusRingCSS(`.${WRAPPER_CLASS}`);
var wrapperStyle5 = {
  ...inputShellBaseStyle,
  display: "flex",
  alignItems: "center",
  gap: import_core42.semantic.spaceXs,
  lineHeight: import_core42.semantic.lineHeightTight
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
var SearchInput = (0, import_react37.forwardRef)(
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
    (0, import_core42.useInjectStyles)(STYLE_ID2, focusRingCSS);
    const [localValue, setLocalValue] = (0, import_react37.useState)(value);
    const timerRef = (0, import_react37.useRef)(null);
    const onSearchRef = (0, import_react37.useRef)(onSearch);
    onSearchRef.current = onSearch;
    (0, import_react37.useEffect)(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = (0, import_react37.useCallback)((e) => {
      const next = e.target.value;
      setLocalValue(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearchRef.current(next);
      }, debounceMs);
    }, [debounceMs]);
    (0, import_react37.useEffect)(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
      "div",
      {
        className: WRAPPER_CLASS,
        "data-testid": dataTestId,
        style: {
          ...wrapperStyle5,
          ...disabled ? inputShellDisabledStyle : {}
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { style: { color: import_core42.semantic.colorTextMuted, flexShrink: 0, display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Icon, { name: "search", size: "sm" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
          trailing && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/molecules/SegmentedControl/SegmentedControl.tsx
var import_react39 = require("react");
var import_core43 = require("../../core/dist/index.cjs");

// src/utils/useRovingFocus.ts
var import_react38 = require("react");
function useRovingFocus({
  count,
  activeIndex,
  orientation = "horizontal"
}) {
  const itemRefs = (0, import_react38.useRef)([]);
  const itemRef = (0, import_react38.useCallback)(
    (index) => (el) => {
      itemRefs.current[index] = el;
    },
    []
  );
  const onKeyDown = (0, import_react38.useCallback)(
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
  const getTabIndex = (0, import_react38.useCallback)(
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

// src/components/molecules/SegmentedControl/SegmentedControl.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${import_core43.semantic.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${import_core43.semantic.focusRingWidth} solid ${import_core43.semantic.focusRingColor};
    outline-offset: ${import_core43.semantic.focusRingOffset};
    border-radius: ${import_core43.semantic.radiusFull};
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
  (0, import_core43.useInjectStyles)(STYLE_ID3, hoverCSS);
  const isControlled = controlledValue !== void 0;
  const [internalValue, setInternalValue] = (0, import_react39.useState)(
    () => defaultValue ?? segments[0]?.value ?? ""
  );
  const value = isControlled ? controlledValue : internalValue;
  const handleSelect = (0, import_react39.useCallback)(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  const containerRef = (0, import_react39.useRef)(null);
  const [indicator, setIndicator] = (0, import_react39.useState)(null);
  const s = sizes[size];
  const activeIndex = segments.findIndex((seg) => seg.value === value);
  const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
    count: segments.length,
    activeIndex: activeIndex === -1 ? null : activeIndex
  });
  const updateIndicator = (0, import_react39.useCallback)(() => {
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
  (0, import_react39.useLayoutEffect)(() => {
    updateIndicator();
  }, [value, segments, updateIndicator]);
  (0, import_react39.useLayoutEffect)(() => {
    const observer = new ResizeObserver(() => updateIndicator());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateIndicator]);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
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
        background: import_core43.semantic.colorSurfaceInput,
        borderRadius: import_core43.semantic.radiusFull,
        border: `${import_core43.semantic.borderWidthDefault} solid ${import_core43.semantic.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: import_core43.semantic.radiusFull,
              background: import_core43.semantic.colorActionPrimary,
              transition: `left ${import_core43.semantic.transitionSlow}, width ${import_core43.semantic.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg, i) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
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
                gap: import_core43.semantic.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: import_core43.semantic.radiusFull,
                background: "transparent",
                color: isActive ? import_core43.semantic.colorTextInverse : import_core43.semantic.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: import_core43.semantic.fontSans,
                fontWeight: isActive ? import_core43.semantic.fontWeightSemibold : import_core43.semantic.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${import_core43.semantic.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: seg.label })
              ]
            },
            seg.value
          );
        })
      ]
    }
  );
}

// src/components/molecules/AlertBanner/AlertBanner.tsx
var import_react40 = require("react");
var import_core44 = require("../../core/dist/index.cjs");
var import_jsx_runtime40 = require("react/jsx-runtime");
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
`;
var variantColors2 = {
  info: { bg: import_core44.semantic.colorInfoBg, fg: import_core44.semantic.colorInfo, border: import_core44.semantic.colorInfo },
  warning: { bg: import_core44.semantic.colorWarningBg, fg: import_core44.semantic.colorWarning, border: import_core44.semantic.colorWarning },
  error: { bg: import_core44.semantic.colorErrorBg, fg: import_core44.semantic.colorError, border: import_core44.semantic.colorError },
  success: { bg: import_core44.semantic.colorSuccessBg, fg: import_core44.semantic.colorSuccess, border: import_core44.semantic.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(IconError, { size: 20 }),
  success: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(IconCheckCircle, { size: 20 })
};
var AlertBanner = (0, import_react40.forwardRef)(
  function AlertBanner2({ variant, children, onDismiss, icon }, ref) {
    (0, import_core44.useInjectStyles)(STYLE_ID4, alertBannerCSS);
    const colors = variantColors2[variant];
    const resolvedIcon = icon !== void 0 ? icon : defaultIcons[variant];
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: import_core44.semantic.spaceSm,
          width: "100%",
          padding: `${import_core44.semantic.spaceSm} ${import_core44.semantic.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${import_core44.semantic.borderWidthThick} solid ${colors.border}`,
          fontFamily: import_core44.semantic.fontSans,
          fontSize: import_core44.semantic.fontSizeSm,
          fontWeight: import_core44.semantic.fontWeightMedium,
          lineHeight: import_core44.semantic.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease"
        },
        children: [
          resolvedIcon && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            IconButton,
            {
              icon: "close",
              "aria-label": "Dismiss",
              onClick: onDismiss,
              size: "sm"
            }
          )
        ]
      }
    );
  }
);

// src/components/organisms/TopBar/TopBar.tsx
var import_react41 = require("react");
var import_core45 = require("../../core/dist/index.cjs");
var import_jsx_runtime41 = require("react/jsx-runtime");
var TopBarContext = (0, import_react41.createContext)(null);
function useTopBarContext(component) {
  const ctx = (0, import_react41.useContext)(TopBarContext);
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
    transition: background ${import_core45.semantic.transitionBase};
  }
  [data-topbar-link]:hover::after {
    background: ${import_core45.semantic.colorBorder};
  }
  [data-topbar-link][data-active]::after {
    background: ${import_core45.semantic.colorActionPrimary};
  }
  [data-topbar-link]:hover {
    color: ${import_core45.semantic.colorText};
  }
`;
var TopBarRoot = (0, import_react41.forwardRef)(
  function TopBarRoot2({ children, sticky = false, ...rest }, ref) {
    (0, import_core45.useInjectStyles)(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: import_core45.semantic.zIndexSticky } : {};
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TopBarContext.Provider, { value: true, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "header",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-label": rest["aria-label"],
        style: {
          display: "flex",
          alignItems: "center",
          height: import_core45.semantic.space2xl,
          padding: `0 ${import_core45.semantic.spaceMd}`,
          background: import_core45.semantic.colorSurface,
          borderBottom: `${import_core45.semantic.borderWidthDefault} solid ${import_core45.semantic.colorBorder}`,
          fontFamily: import_core45.semantic.fontSans,
          ...stickyStyle
        },
        children
      }
    ) });
  }
);
function TopBarLeading({ children }) {
  useTopBarContext("Leading");
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        fontWeight: import_core45.semantic.fontWeightBold,
        fontSize: import_core45.semantic.fontSizeSm,
        color: import_core45.semantic.colorText,
        marginRight: import_core45.semantic.spaceLg,
        whiteSpace: "nowrap",
        flexShrink: 0
      },
      children
    }
  );
}
function TopBarNav({ children, "aria-label": ariaLabel = "Primary" }) {
  useTopBarContext("Nav");
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "nav",
    {
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        alignItems: "center",
        gap: import_core45.semantic.spaceXs,
        height: "100%",
        flex: 1,
        minWidth: 0
      },
      children
    }
  );
}
var TopBarLink = (0, import_react41.forwardRef)(function TopBarLink2({ active = false, asChild = false, onClick, children }, ref) {
  useTopBarContext("Link");
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: import_core45.semantic.spaceXs,
    height: "100%",
    padding: `0 ${import_core45.semantic.spaceSm}`,
    border: "none",
    background: "transparent",
    color: active ? import_core45.semantic.colorActionPrimary : import_core45.semantic.colorTextMuted,
    fontSize: import_core45.semantic.fontSizeSm,
    fontFamily: import_core45.semantic.fontSans,
    fontWeight: active ? import_core45.semantic.fontWeightSemibold : import_core45.semantic.fontWeightNormal,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: `color ${import_core45.semantic.transitionBase}`,
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
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_core45.Slot, { ref, ...commonProps, children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { ref, type: "button", ...commonProps, children });
});
function TopBarTrailing({ children }) {
  useTopBarContext("Trailing");
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: import_core45.semantic.spaceSm,
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

// src/components/organisms/EmptyPage/EmptyPage.tsx
var import_react42 = require("react");
var import_core46 = require("../../core/dist/index.cjs");
var import_jsx_runtime42 = require("react/jsx-runtime");
var EmptyPageContext = (0, import_react42.createContext)(null);
function useEmptyPageContext(component) {
  const ctx = (0, import_react42.useContext)(EmptyPageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <EmptyPage.${component}> must be rendered inside <EmptyPage.Root>.`
    );
  }
  return ctx;
}
var EmptyPageRoot = (0, import_react42.forwardRef)(function EmptyPageRoot2({ level = "page", children, ...rest }, ref) {
  const titleId = (0, import_react42.useId)();
  const isPage = level === "page";
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(EmptyPageContext.Provider, { value: { level, titleId }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "section",
    {
      ref,
      id: rest.id,
      "data-testid": rest["data-testid"],
      "data-level": level,
      "aria-label": rest["aria-label"],
      "aria-labelledby": rest["aria-label"] ? void 0 : titleId,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: import_core46.semantic.spaceMd,
        textAlign: "center",
        width: "100%",
        minHeight: isPage ? "60vh" : "auto",
        padding: isPage ? `${import_core46.semantic.space2xl} ${import_core46.semantic.spaceLg}` : `${import_core46.semantic.spaceXl} ${import_core46.semantic.spaceLg}`,
        fontFamily: import_core46.semantic.fontSans,
        boxSizing: "border-box"
      },
      children
    }
  ) });
});
function EmptyPageIcon({ children }) {
  useEmptyPageContext("Icon");
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "div",
    {
      "aria-hidden": "true",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: import_core46.semantic.colorTextMuted,
        marginBottom: import_core46.semantic.spaceSm
      },
      children
    }
  );
}
function EmptyPageTitle({ children }) {
  const { level, titleId } = useEmptyPageContext("Title");
  const isPage = level === "page";
  const Tag = isPage ? "h1" : "h2";
  const style = isPage ? {
    margin: 0,
    fontFamily: import_core46.semantic.fontSans,
    fontWeight: import_core46.semantic.fontWeightBold,
    fontSize: import_core46.semantic.fontSizeXl,
    lineHeight: import_core46.semantic.lineHeightTight,
    color: import_core46.semantic.colorText
  } : {
    margin: 0,
    fontFamily: import_core46.semantic.fontSans,
    fontWeight: import_core46.semantic.fontWeightSemibold,
    fontSize: import_core46.semantic.fontSizeLg,
    lineHeight: import_core46.semantic.lineHeightTight,
    color: import_core46.semantic.colorText
  };
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Tag, { id: titleId, style, children });
}
function EmptyPageDescription({
  children
}) {
  useEmptyPageContext("Description");
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "p",
    {
      style: {
        margin: 0,
        maxWidth: "32rem",
        color: import_core46.semantic.colorTextSecondary,
        fontSize: import_core46.semantic.fontSizeSm,
        lineHeight: import_core46.semantic.lineHeightBase,
        fontFamily: import_core46.semantic.fontSans
      },
      children
    }
  );
}
function EmptyPageActions({
  children
}) {
  useEmptyPageContext("Actions");
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: import_core46.semantic.spaceSm,
        marginTop: import_core46.semantic.spaceSm
      },
      children
    }
  );
}
function EmptyPageTips({
  "aria-label": ariaLabel = "Getting started",
  children
}) {
  useEmptyPageContext("Tips");
  const count = import_react42.Children.toArray(children).filter(Boolean).length;
  if (count === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "ul",
    {
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: import_core46.semantic.spaceSm,
        listStyle: "none",
        margin: 0,
        marginTop: import_core46.semantic.spaceMd,
        padding: 0
      },
      children
    }
  );
}
function EmptyPageTip({
  icon,
  asChild = false,
  children
}) {
  useEmptyPageContext("Tip");
  const contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: import_core46.semantic.spaceXs,
    padding: `${import_core46.semantic.spaceXs} ${import_core46.semantic.spaceSm}`,
    border: `${import_core46.semantic.borderWidthDefault} solid ${import_core46.semantic.colorBorder}`,
    borderRadius: import_core46.semantic.radiusMd,
    background: import_core46.semantic.colorSurface,
    color: import_core46.semantic.colorText,
    fontSize: import_core46.semantic.fontSizeSm,
    fontFamily: import_core46.semantic.fontSans,
    textDecoration: "none",
    cursor: asChild ? "pointer" : "default"
  };
  if (asChild) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_core46.Slot, { style: contentStyle, children }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { style: contentStyle, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "span",
      {
        "aria-hidden": "true",
        style: { display: "inline-flex", color: import_core46.semantic.colorTextMuted },
        children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Icon, { name: icon, size: "sm" })
      }
    ),
    children
  ] }) });
}
var EmptyPage = {
  Root: EmptyPageRoot,
  Icon: EmptyPageIcon,
  Title: EmptyPageTitle,
  Description: EmptyPageDescription,
  Actions: EmptyPageActions,
  Tips: EmptyPageTips,
  Tip: EmptyPageTip
};

// src/components/organisms/AppShell/AppShell.tsx
var import_react43 = require("react");
var import_core47 = require("../../core/dist/index.cjs");
var import_jsx_runtime43 = require("react/jsx-runtime");
var AppShellContext = (0, import_react43.createContext)(null);
function useAppShellContextInternal(component) {
  const ctx = (0, import_react43.useContext)(AppShellContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <AppShell.${component}> must be rendered inside <AppShell.Root>.`
    );
  }
  return ctx;
}
function useAppShellContext() {
  return useAppShellContextInternal("<consumer>");
}
function useIsInsideAppShell() {
  return (0, import_react43.useContext)(AppShellContext) !== null;
}
function useControllableBoolean(params) {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== void 0;
  const [uncontrolled, setUncontrolled] = (0, import_react43.useState)(defaultValue);
  const value = isControlled ? controlled : uncontrolled;
  const wasControlled = (0, import_react43.useRef)(isControlled);
  (0, import_react43.useEffect)(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `<AppShell.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);
  const setValue = (0, import_react43.useCallback)(
    (next) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  return [value, setValue];
}
function bucketChildren(children) {
  let topBar = null;
  let sidebar = null;
  let main = null;
  let rightPanel = null;
  import_react43.Children.forEach(children, (child) => {
    if (!(0, import_react43.isValidElement)(child)) return;
    if (child.type === AppShellTopBar) topBar = child;
    else if (child.type === AppShellSidebar) sidebar = child;
    else if (child.type === AppShellMain) main = child;
    else if (child.type === AppShellRightPanel) rightPanel = child;
  });
  return { topBar, sidebar, main, rightPanel };
}
var AppShellRoot = (0, import_react43.forwardRef)(function AppShellRoot2({
  sidebarCollapsed: sidebarCollapsedProp,
  defaultSidebarCollapsed = false,
  onSidebarCollapsedChange,
  rightPanelOpen: rightPanelOpenProp,
  defaultRightPanelOpen = true,
  onRightPanelOpenChange,
  children,
  ...rest
}, ref) {
  const [sidebarCollapsed, setSidebarCollapsed] = useControllableBoolean({
    label: "sidebarCollapsed",
    controlled: sidebarCollapsedProp,
    defaultValue: defaultSidebarCollapsed,
    onChange: onSidebarCollapsedChange
  });
  const [rightPanelOpen, setRightPanelOpen] = useControllableBoolean({
    label: "rightPanelOpen",
    controlled: rightPanelOpenProp,
    defaultValue: defaultRightPanelOpen,
    onChange: onRightPanelOpenChange
  });
  const value = (0, import_react43.useMemo)(
    () => ({ sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen }),
    [sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen]
  );
  const { topBar, sidebar, main, rightPanel } = bucketChildren(children);
  const hasTopBar = topBar !== null;
  const hasSidebar = sidebar !== null;
  const hasRightPanel = rightPanel !== null && rightPanelOpen;
  const sidebarWidth = sidebarCollapsed ? import_core47.semantic.sizeSidebarCollapsed : import_core47.semantic.sizeSidebarExpanded;
  const gridTemplateColumns = [
    hasSidebar ? sidebarWidth : null,
    "1fr",
    hasRightPanel ? import_core47.semantic.sizeRightPanelDefault : null
  ].filter(Boolean).join(" ");
  const gridTemplateRows = hasTopBar ? `${import_core47.semantic.space2xl} 1fr` : "1fr";
  const gridAreas = (() => {
    const topCols = [];
    const mainCols = [];
    if (hasSidebar) {
      topCols.push("topbar");
      mainCols.push("sidebar");
    }
    topCols.push("topbar");
    mainCols.push("main");
    if (hasRightPanel) {
      topCols.push("topbar");
      mainCols.push("rightpanel");
    }
    const rows = [];
    if (hasTopBar) rows.push(`"${topCols.join(" ")}"`);
    rows.push(`"${mainCols.join(" ")}"`);
    return rows.join(" ");
  })();
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(AppShellContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      ref,
      id: rest.id,
      "data-testid": rest["data-testid"],
      "data-sidebar-state": sidebarCollapsed ? "collapsed" : "expanded",
      "data-right-panel-state": rightPanelOpen ? "open" : "closed",
      style: {
        display: "grid",
        gridTemplateColumns,
        gridTemplateRows,
        gridTemplateAreas: gridAreas,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        fontFamily: import_core47.semantic.fontSans,
        color: import_core47.semantic.colorText,
        boxSizing: "border-box"
      },
      children: [
        topBar,
        sidebar,
        main,
        rightPanel
      ]
    }
  ) });
});
function AppShellTopBar(props) {
  useAppShellContextInternal("TopBar");
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { style: { gridArea: "topbar", minWidth: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(TopBarRoot, { ...props }) });
}
function AppShellSidebar({
  "aria-label": ariaLabel = "Sidebar",
  children
}) {
  const { sidebarCollapsed } = useAppShellContextInternal("Sidebar");
  const content = typeof children === "function" ? children({ collapsed: sidebarCollapsed }) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "nav",
    {
      "aria-label": ariaLabel,
      "data-state": sidebarCollapsed ? "collapsed" : "expanded",
      style: {
        gridArea: "sidebar",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        background: import_core47.semantic.colorSurfacePanel,
        borderRight: `${import_core47.semantic.borderWidthDefault} solid ${import_core47.semantic.colorBorder}`,
        transition: `width ${import_core47.semantic.transitionBase}`,
        minWidth: 0
      },
      children: content
    }
  );
}
function AppShellSidebarSection({
  label,
  children
}) {
  const { sidebarCollapsed } = useAppShellContextInternal("SidebarSection");
  const labelStyle2 = sidebarCollapsed ? {
    // Visually hidden but still announced by assistive tech, so the
    // section keeps its semantic grouping in the collapsed rail.
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    border: 0
  } : {
    display: "block",
    padding: `${import_core47.semantic.spaceSm} ${import_core47.semantic.spaceMd} ${import_core47.semantic.spaceXs}`,
    fontSize: import_core47.semantic.fontSizeXs,
    fontWeight: import_core47.semantic.fontWeightSemibold,
    color: import_core47.semantic.colorTextMuted,
    textTransform: "uppercase",
    letterSpacing: import_core47.semantic.letterSpacingWide
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      "data-state": sidebarCollapsed ? "collapsed" : "expanded",
      style: { display: "flex", flexDirection: "column" },
      children: [
        label !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { style: labelStyle2, children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { style: { display: "flex", flexDirection: "column" }, children })
      ]
    }
  );
}
function AppShellMain({
  children,
  ...rest
}) {
  useAppShellContextInternal("Main");
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "main",
    {
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-label": rest["aria-label"],
      "aria-labelledby": rest["aria-labelledby"],
      style: {
        gridArea: "main",
        overflow: "auto",
        minWidth: 0,
        minHeight: 0,
        background: import_core47.semantic.colorSurfacePage,
        boxSizing: "border-box"
      },
      children
    }
  );
}
function AppShellRightPanel({
  "aria-label": ariaLabel = "Context panel",
  children
}) {
  const { rightPanelOpen } = useAppShellContextInternal("RightPanel");
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "aside",
    {
      "aria-label": ariaLabel,
      "aria-hidden": !rightPanelOpen || void 0,
      "data-state": rightPanelOpen ? "open" : "closed",
      hidden: !rightPanelOpen,
      style: {
        gridArea: "rightpanel",
        display: rightPanelOpen ? "flex" : "none",
        flexDirection: "column",
        overflowY: "auto",
        background: import_core47.semantic.colorSurfacePanel,
        borderLeft: `${import_core47.semantic.borderWidthDefault} solid ${import_core47.semantic.colorBorder}`,
        minWidth: 0
      },
      children
    }
  );
}
var AppShell = {
  Root: AppShellRoot,
  TopBar: AppShellTopBar,
  Sidebar: AppShellSidebar,
  SidebarSection: AppShellSidebarSection,
  Main: AppShellMain,
  RightPanel: AppShellRightPanel
};

// src/components/organisms/DataTablePage/DataTablePage.tsx
var import_react44 = require("react");
var import_core48 = require("../../core/dist/index.cjs");
var import_jsx_runtime44 = require("react/jsx-runtime");
var DataTablePageContext = (0, import_react44.createContext)(null);
function useDataTablePageContext(part) {
  const ctx = (0, import_react44.useContext)(DataTablePageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <DataTablePage.${part}> must be rendered inside <DataTablePage.Root>.`
    );
  }
  return ctx;
}
var DataTablePageRoot = (0, import_react44.forwardRef)(function DataTablePageRoot2({ rowCount, children, ...rest }, ref) {
  const titleId = (0, import_react44.useId)();
  const isEmpty = rowCount === 0;
  const value = (0, import_react44.useMemo)(
    () => ({ rowCount, titleId }),
    [rowCount, titleId]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(DataTablePageContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "section",
    {
      ref,
      id: rest.id,
      "data-testid": rest["data-testid"],
      "data-state": isEmpty ? "empty" : "populated",
      "aria-label": rest["aria-label"],
      "aria-labelledby": rest["aria-label"] ? void 0 : titleId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core48.semantic.spaceLg,
        width: "100%",
        fontFamily: import_core48.semantic.fontSans,
        color: import_core48.semantic.colorText,
        boxSizing: "border-box"
      },
      children
    }
  ) });
});
function DataTablePageHeader({
  level = "page",
  ...rest
}) {
  const { titleId } = useDataTablePageContext("Header");
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { id: titleId, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Header, { level, ...rest }) });
}
function DataTablePageFilterBar(props) {
  useDataTablePageContext("FilterBar");
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(TableFilterBar, { ...props });
}
function DataTablePageTable(props) {
  useDataTablePageContext("Table");
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Table3, { ...props });
}
function DataTablePagePagination(props) {
  useDataTablePageContext("Pagination");
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Pagination, { ...props });
}
function DataTablePageEmpty(props) {
  const { rowCount } = useDataTablePageContext("Empty");
  if (rowCount !== 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(EmptyState, { ...props, variant: "plain" });
}
var DataTablePage = {
  Root: DataTablePageRoot,
  Header: DataTablePageHeader,
  FilterBar: DataTablePageFilterBar,
  Table: DataTablePageTable,
  Pagination: DataTablePagePagination,
  Empty: DataTablePageEmpty
};

// src/components/organisms/DetailPage/DetailPage.tsx
var import_react45 = require("react");
var import_react_dom4 = require("react-dom");
var import_core49 = require("../../core/dist/index.cjs");
var import_jsx_runtime45 = require("react/jsx-runtime");
var DetailPageContext = (0, import_react45.createContext)(null);
function useDetailPageContext(part) {
  const ctx = (0, import_react45.useContext)(DetailPageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <DetailPage.${part}> must be rendered inside <DetailPage.Root>.`
    );
  }
  return ctx;
}
function splitChildren(children) {
  const main = [];
  let rightPanel = null;
  import_react45.Children.forEach(children, (child) => {
    if ((0, import_react45.isValidElement)(child) && child.type === DetailPageRightPanel) {
      rightPanel = child;
    } else {
      main.push(child);
    }
  });
  return { main, rightPanel };
}
var DetailPageRoot = (0, import_react45.forwardRef)(function DetailPageRoot2({ children, ...rest }, ref) {
  const titleId = (0, import_react45.useId)();
  const [actionsSlot, setActionsSlot] = (0, import_react45.useState)(null);
  const value = (0, import_react45.useMemo)(
    () => ({
      titleId,
      actionsSlot,
      setActionsSlot
    }),
    [titleId, actionsSlot]
  );
  const { main, rightPanel } = splitChildren(children);
  const gridTemplateColumns = rightPanel !== null ? `1fr ${import_core49.semantic.sizeRightPanelDefault}` : "1fr";
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(DetailPageContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    "section",
    {
      ref,
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-label": rest["aria-label"],
      "aria-labelledby": rest["aria-label"] ? void 0 : titleId,
      style: {
        display: "grid",
        gridTemplateColumns,
        gap: import_core49.semantic.spaceLg,
        width: "100%",
        fontFamily: import_core49.semantic.fontSans,
        color: import_core49.semantic.colorText,
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: import_core49.semantic.spaceLg,
              minWidth: 0
            },
            children: main
          }
        ),
        rightPanel
      ]
    }
  ) });
});
function DetailPageHeader({
  title,
  subtitle,
  indicator,
  onBack,
  backLabel = "Back"
}) {
  const { titleId, setActionsSlot } = useDetailPageContext("Header");
  const slotRefCb = (0, import_react45.useCallback)(
    (el) => {
      setActionsSlot(el);
    },
    [setActionsSlot]
  );
  const trailingSlot = /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "div",
    {
      ref: slotRefCb,
      "data-detailpage-actions-slot": "",
      style: { display: "flex", alignItems: "center", gap: import_core49.semantic.spaceSm }
    }
  );
  const headerWithTitleId = /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { id: titleId, style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    Header,
    {
      level: "page",
      title,
      subtitle,
      indicator,
      trailing: trailingSlot
    }
  ) });
  if (onBack !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-end",
          gap: import_core49.semantic.spaceMd,
          minWidth: 0
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            IconButton,
            {
              icon: "arrow-left",
              "aria-label": backLabel,
              onClick: onBack
            }
          ),
          headerWithTitleId
        ]
      }
    );
  }
  return headerWithTitleId;
}
function validateMetaChildren(children) {
  let warned = false;
  import_react45.Children.forEach(children, (child) => {
    if (!(0, import_react45.isValidElement)(child)) return;
    if (child.type !== DetailPageMetaItem && !warned) {
      warned = true;
      console.warn(
        "[@4lt7ab/ui] <DetailPage.Meta> expects <DetailPage.MetaItem> children for semantic <dt>/<dd> pairs. Other children will render but lose the key/value association."
      );
    }
  });
}
function DetailPageMeta({
  children
}) {
  useDetailPageContext("Meta");
  validateMetaChildren(children);
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "dl",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "max-content 1fr",
        columnGap: import_core49.semantic.spaceLg,
        rowGap: import_core49.semantic.spaceSm,
        margin: 0,
        padding: 0,
        fontFamily: import_core49.semantic.fontSans,
        fontSize: import_core49.semantic.fontSizeSm
      },
      children
    }
  );
}
function DetailPageMetaItem({
  label,
  children
}) {
  useDetailPageContext("MetaItem");
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      "dt",
      {
        style: {
          margin: 0,
          color: import_core49.semantic.colorTextMuted,
          fontWeight: import_core49.semantic.fontWeightMedium
        },
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("dd", { style: { margin: 0, color: import_core49.semantic.colorText }, children })
  ] });
}
function DetailPageBody({
  children,
  ...rest
}) {
  useDetailPageContext("Body");
  const insideAppShell = useIsInsideAppShell();
  const Tag = insideAppShell ? "div" : "main";
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    Tag,
    {
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-label": insideAppShell ? void 0 : rest["aria-label"],
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core49.semantic.spaceMd,
        minWidth: 0
      },
      children
    }
  );
}
function DetailPageActions({
  children
}) {
  const { actionsSlot } = useDetailPageContext("Actions");
  if (actionsSlot === null) return null;
  return (0, import_react_dom4.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, { children }), actionsSlot);
}
function DetailPageRightPanel({
  "aria-label": ariaLabel = "Details",
  children
}) {
  useDetailPageContext("RightPanel");
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: import_core49.semantic.spaceMd,
    padding: import_core49.semantic.spaceMd,
    background: import_core49.semantic.colorSurfacePanel,
    border: `${import_core49.semantic.borderWidthDefault} solid ${import_core49.semantic.colorBorder}`,
    borderRadius: import_core49.semantic.radiusMd,
    minWidth: 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("aside", { "aria-label": ariaLabel, style, children });
}
var DetailPage = {
  Root: DetailPageRoot,
  Header: DetailPageHeader,
  Meta: DetailPageMeta,
  MetaItem: DetailPageMetaItem,
  Body: DetailPageBody,
  Actions: DetailPageActions,
  RightPanel: DetailPageRightPanel
};

// src/components/organisms/FormLayout/FormLayout.tsx
var import_react46 = require("react");
var import_react_dom5 = require("react-dom");
var import_core50 = require("../../core/dist/index.cjs");
var import_jsx_runtime46 = require("react/jsx-runtime");
var FormLayoutContext = (0, import_react46.createContext)(null);
function useFormLayoutInternal(part) {
  const ctx = (0, import_react46.useContext)(FormLayoutContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <FormLayout.${part}> must be rendered inside <FormLayout.Root>.`
    );
  }
  return ctx;
}
function useFormLayout() {
  const ctx = useFormLayoutInternal("<consumer>");
  return { dirty: ctx.dirty, setDirty: ctx.setDirty, saving: ctx.saving, setSaving: ctx.setSaving };
}
function useControllableBoolean2(params) {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== void 0;
  const [uncontrolled, setUncontrolled] = (0, import_react46.useState)(defaultValue);
  const value = isControlled ? controlled : uncontrolled;
  const wasControlled = (0, import_react46.useRef)(isControlled);
  (0, import_react46.useEffect)(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `<FormLayout.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);
  const setValue = (0, import_react46.useCallback)(
    (next) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  return [value, setValue];
}
var FormLayoutRoot = (0, import_react46.forwardRef)(function FormLayoutRoot2({
  dirty: dirtyProp,
  defaultDirty = false,
  onDirtyChange,
  saving: savingProp,
  defaultSaving = false,
  onSavingChange,
  onSave,
  onCancel,
  sticky = "container",
  noValidate = true,
  children,
  ...rest
}, ref) {
  const [dirty, setDirty] = useControllableBoolean2({
    label: "dirty",
    controlled: dirtyProp,
    defaultValue: defaultDirty,
    onChange: onDirtyChange
  });
  const [saving, setSaving] = useControllableBoolean2({
    label: "saving",
    controlled: savingProp,
    defaultValue: defaultSaving,
    onChange: onSavingChange
  });
  const autoId = (0, import_react46.useId)();
  const formId = rest.id ?? `formlayout-${autoId}`;
  const value = (0, import_react46.useMemo)(
    () => ({ dirty, setDirty, saving, setSaving, onSave, onCancel, sticky, formId }),
    [dirty, setDirty, saving, setSaving, onSave, onCancel, sticky, formId]
  );
  const handleSubmit = (0, import_react46.useCallback)(
    async (event) => {
      event.preventDefault();
      if (onSave === void 0) return;
      const result = onSave(event);
      if (result && typeof result.then === "function") {
        setSaving(true);
        try {
          await result;
        } finally {
          setSaving(false);
        }
      }
    },
    [onSave, setSaving]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FormLayoutContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "form",
    {
      ref,
      id: formId,
      "data-testid": rest["data-testid"],
      "data-state": dirty ? "dirty" : "pristine",
      noValidate,
      onSubmit: handleSubmit,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core50.semantic.spaceLg,
        width: "100%",
        fontFamily: import_core50.semantic.fontSans,
        color: import_core50.semantic.colorText,
        boxSizing: "border-box"
      },
      children
    }
  ) });
});
function FormLayoutHeader({
  title,
  description
}) {
  useFormLayoutInternal("Header");
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Header, { level: "page", title, subtitle: description });
}
var FormLayoutSectionContext = (0, import_react46.createContext)(null);
function useFormLayoutSectionContext(part) {
  const ctx = (0, import_react46.useContext)(FormLayoutSectionContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <FormLayout.${part}> must be rendered inside <FormLayout.Section>.`
    );
  }
  return ctx;
}
function FormLayoutSection({
  children,
  ...rest
}) {
  useFormLayoutInternal("Section");
  const headerId = (0, import_react46.useId)();
  const value = (0, import_react46.useMemo)(() => ({ headerId }), [headerId]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FormLayoutSectionContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "section",
    {
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-labelledby": headerId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core50.semantic.spaceMd,
        padding: import_core50.semantic.spaceMd,
        background: import_core50.semantic.colorSurface,
        border: `${import_core50.semantic.borderWidthDefault} solid ${import_core50.semantic.colorBorder}`,
        borderRadius: import_core50.semantic.radiusMd,
        minWidth: 0
      },
      children
    }
  ) });
}
function FormLayoutSectionHeader({
  title,
  description
}) {
  const { headerId } = useFormLayoutSectionContext("SectionHeader");
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: import_core50.semantic.spaceXs }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "h2",
      {
        id: headerId,
        style: {
          margin: 0,
          fontFamily: import_core50.semantic.fontSans,
          fontWeight: import_core50.semantic.fontWeightSemibold,
          fontSize: import_core50.semantic.fontSizeBase,
          lineHeight: import_core50.semantic.lineHeightTight,
          color: import_core50.semantic.colorText
        },
        children: title
      }
    ),
    description !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "span",
      {
        style: {
          color: import_core50.semantic.colorTextMuted,
          fontSize: import_core50.semantic.fontSizeSm,
          fontFamily: import_core50.semantic.fontSans,
          lineHeight: import_core50.semantic.lineHeightBase
        },
        children: description
      }
    )
  ] });
}
function FormLayoutSectionBody({
  children
}) {
  useFormLayoutSectionContext("SectionBody");
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core50.semantic.spaceMd,
        minWidth: 0
      },
      children
    }
  );
}
function FormLayoutActions({
  children
}) {
  const { saving, sticky } = useFormLayoutInternal("Actions");
  const barStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: import_core50.semantic.spaceSm,
    padding: `${import_core50.semantic.spaceSm} ${import_core50.semantic.spaceMd}`,
    background: import_core50.semantic.colorSurface,
    border: `${import_core50.semantic.borderWidthDefault} solid ${import_core50.semantic.colorBorder}`,
    borderRadius: import_core50.semantic.radiusMd,
    boxSizing: "border-box"
  };
  const inlineStickyStyle = {
    ...barStyle,
    position: "sticky",
    bottom: 0,
    zIndex: 1
  };
  const viewportStyle = {
    ...barStyle,
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 0,
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    boxShadow: import_core50.semantic.shadowMd,
    zIndex: 100
  };
  const commonProps = {
    role: "toolbar",
    "aria-label": "Form actions",
    "data-state": saving ? "saving" : "idle"
  };
  if (sticky === "viewport") {
    if (typeof document === "undefined") return null;
    return (0, import_react_dom5.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { ...commonProps, style: viewportStyle, children }),
      document.body
    );
  }
  const style = sticky === "container" ? inlineStickyStyle : barStyle;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { ...commonProps, style, children });
}
function FormLayoutSaveButton({
  children = "Save",
  savingLabel = "Saving\u2026",
  disabled: disabledProp,
  variant = "primary",
  ...rest
}) {
  const { dirty, saving, formId } = useFormLayoutInternal("SaveButton");
  const disabled = disabledProp ?? !dirty;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    Button,
    {
      ...rest,
      type: "submit",
      form: formId,
      variant,
      disabled,
      loading: saving,
      children: saving ? savingLabel : children
    }
  );
}
function FormLayoutCancelButton({
  children = "Cancel",
  variant = "secondary",
  onClick,
  ...rest
}) {
  const { onCancel } = useFormLayoutInternal("CancelButton");
  const handleClick = (0, import_react46.useCallback)(
    (event) => {
      onClick?.(event);
      if (!event.defaultPrevented) onCancel?.();
    },
    [onClick, onCancel]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Button, { ...rest, type: "button", variant, onClick: handleClick, children });
}
function FormLayoutDirtyOnChange({
  children
}) {
  const { setDirty, dirty } = useFormLayoutInternal("DirtyOnChange");
  const handleChange = (0, import_react46.useCallback)(() => {
    if (!dirty) setDirty(true);
  }, [dirty, setDirty]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { style: { display: "contents" }, onChange: handleChange, children });
}
function FormLayoutNavigationGuard({
  message = "You have unsaved changes. Are you sure you want to leave?"
}) {
  const { dirty } = useFormLayoutInternal("NavigationGuard");
  (0, import_react46.useEffect)(() => {
    if (!dirty) return;
    if (typeof window === "undefined") return;
    const handler = (event) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty, message]);
  return null;
}
var FormLayout = {
  Root: FormLayoutRoot,
  Header: FormLayoutHeader,
  Section: FormLayoutSection,
  SectionHeader: FormLayoutSectionHeader,
  SectionBody: FormLayoutSectionBody,
  Actions: FormLayoutActions,
  SaveButton: FormLayoutSaveButton,
  CancelButton: FormLayoutCancelButton,
  DirtyOnChange: FormLayoutDirtyOnChange,
  NavigationGuard: FormLayoutNavigationGuard
};

// src/components/organisms/WizardDialog/WizardDialog.tsx
var import_react47 = require("react");
var import_core51 = require("../../core/dist/index.cjs");
var import_jsx_runtime47 = require("react/jsx-runtime");
var WizardDialogContext = (0, import_react47.createContext)(null);
function useWizardDialogContext(part) {
  const ctx = (0, import_react47.useContext)(WizardDialogContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <WizardDialog.${part}> must be rendered inside <WizardDialog.Root>.`
    );
  }
  return ctx;
}
function useControllableBoolean3(params) {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== void 0;
  const [uncontrolled, setUncontrolled] = (0, import_react47.useState)(defaultValue);
  const value = isControlled ? controlled : uncontrolled;
  const wasControlled = (0, import_react47.useRef)(isControlled);
  (0, import_react47.useEffect)(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `<WizardDialog.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);
  const setValue = (0, import_react47.useCallback)(
    (next) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  return [value, setValue];
}
function useControllableNumber(params) {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== void 0;
  const [uncontrolled, setUncontrolled] = (0, import_react47.useState)(defaultValue);
  const value = isControlled ? controlled : uncontrolled;
  const wasControlled = (0, import_react47.useRef)(isControlled);
  (0, import_react47.useEffect)(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `<WizardDialog.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);
  const setValue = (0, import_react47.useCallback)(
    (next) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  return [value, setValue];
}
var WizardDialogRoot = (0, import_react47.forwardRef)(
  function WizardDialogRoot2({
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    step: stepProp,
    defaultStep = 0,
    onStepChange,
    onComplete,
    canClose = true,
    width = "lg",
    children
  }, ref) {
    const [open, setOpen] = useControllableBoolean3({
      label: "open",
      controlled: openProp,
      defaultValue: defaultOpen,
      onChange: onOpenChange
    });
    const [step, setStep] = useControllableNumber({
      label: "step",
      controlled: stepProp,
      defaultValue: defaultStep,
      onChange: onStepChange
    });
    const [busy, setBusy] = (0, import_react47.useState)(false);
    const validateByIndex = (0, import_react47.useRef)(/* @__PURE__ */ new Map());
    const [totalSteps, setTotalSteps] = (0, import_react47.useState)(0);
    const registerStep = (0, import_react47.useCallback)(
      (index, validate) => {
        validateByIndex.current.set(index, validate);
        setTotalSteps(validateByIndex.current.size);
        return () => {
          validateByIndex.current.delete(index);
          setTotalSteps(validateByIndex.current.size);
        };
      },
      []
    );
    const titleId = (0, import_react47.useId)();
    const close = (0, import_react47.useCallback)(() => {
      if (!canClose) return;
      setOpen(false);
    }, [canClose, setOpen]);
    const next = (0, import_react47.useCallback)(async () => {
      if (busy) return;
      const validate = validateByIndex.current.get(step);
      if (validate !== void 0) {
        const result = validate();
        if (result && typeof result.then === "function") {
          setBusy(true);
          try {
            const ok = await result;
            if (!ok) return;
          } finally {
            setBusy(false);
          }
        } else if (!result) {
          return;
        }
      }
      setStep(step + 1);
    }, [busy, setStep, step]);
    const back = (0, import_react47.useCallback)(() => {
      if (busy) return;
      if (step === 0) {
        close();
        return;
      }
      setStep(step - 1);
    }, [busy, close, setStep, step]);
    const finish = (0, import_react47.useCallback)(async () => {
      if (busy) return;
      const validate = validateByIndex.current.get(step);
      if (validate !== void 0) {
        const result = validate();
        if (result && typeof result.then === "function") {
          setBusy(true);
          try {
            const ok = await result;
            if (!ok) return;
          } finally {
            setBusy(false);
          }
        } else if (!result) {
          return;
        }
      }
      const completion = onComplete?.();
      if (completion && typeof completion.then === "function") {
        setBusy(true);
        try {
          await completion;
        } finally {
          setBusy(false);
        }
      }
      setOpen(false);
    }, [busy, onComplete, setOpen, step]);
    const value = (0, import_react47.useMemo)(
      () => ({
        step,
        totalSteps,
        busy,
        registerStep,
        next,
        back,
        finish,
        close,
        canClose,
        titleId
      }),
      [step, totalSteps, busy, registerStep, next, back, finish, close, canClose, titleId]
    );
    if (!open) {
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(WizardDialogContext.Provider, { value, children: null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(WizardDialogContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      ModalShell,
      {
        ref,
        onClose: close,
        width,
        titleId,
        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: import_core51.semantic.spaceXl,
              fontFamily: import_core51.semantic.fontSans,
              color: import_core51.semantic.colorText
            },
            "data-testid": "wizarddialog-content",
            children
          }
        )
      }
    ) });
  }
);
function WizardDialogTitle({
  children
}) {
  const { titleId } = useWizardDialogContext("Title");
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { id: titleId, style: modalHeadingStyle, children });
}
function WizardDialogProgress({
  mode = "numeric",
  stepLabels
}) {
  const { step, totalSteps } = useWizardDialogContext("Progress");
  const total = Math.max(totalSteps, 1);
  const current = Math.min(step + 1, total);
  const currentLabel = stepLabels?.[step];
  const progressLabel = currentLabel ?? `Step ${current} of ${total}`;
  if (mode === "bar") {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      ProgressBar,
      {
        "aria-label": progressLabel,
        segments: [
          { value: current, color: "primary" },
          { value: total - current, color: "muted" }
        ],
        height: "sm"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    "div",
    {
      role: "status",
      "aria-label": progressLabel,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: import_core51.semantic.spaceSm
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: import_core51.semantic.fontSans
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                "span",
                {
                  style: {
                    fontSize: import_core51.semantic.fontSizeXs,
                    color: import_core51.semantic.colorTextMuted
                  },
                  children: `Step ${current} of ${total}`
                }
              ),
              currentLabel !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                "span",
                {
                  style: {
                    fontSize: import_core51.semantic.fontSizeXs,
                    fontWeight: import_core51.semantic.fontWeightSemibold,
                    color: import_core51.semantic.colorText
                  },
                  children: currentLabel
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          ProgressBar,
          {
            "aria-label": progressLabel,
            segments: [
              { value: current, color: "primary" },
              { value: total - current, color: "muted" }
            ],
            height: "sm"
          }
        )
      ]
    }
  );
}
var FOCUSABLE_SELECTOR3 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function WizardDialogStep({
  index,
  validate,
  children
}) {
  const { step, registerStep } = useWizardDialogContext("Step");
  const containerRef = (0, import_react47.useRef)(null);
  (0, import_react47.useEffect)(() => registerStep(index, validate), [index, registerStep, validate]);
  const isActive = step === index;
  (0, import_react47.useEffect)(() => {
    if (!isActive) return;
    const container = containerRef.current;
    if (container === null) return;
    const first = container.querySelector(FOCUSABLE_SELECTOR3);
    if (first !== null) {
      first.focus();
    }
  }, [isActive]);
  if (!isActive) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    "div",
    {
      ref: containerRef,
      role: "group",
      "aria-label": `Step ${index + 1}`,
      "data-wizard-step": index,
      style: { display: "flex", flexDirection: "column", gap: import_core51.semantic.spaceLg },
      children
    }
  );
}
function WizardDialogActions({
  cancelLabel = "Cancel",
  backLabel = "Back",
  nextLabel = "Continue",
  finishLabel = "Finish",
  busyLabel = "Working\u2026",
  children
}) {
  const {
    step,
    totalSteps,
    busy,
    next,
    back,
    finish,
    canClose
  } = useWizardDialogContext("Actions");
  const isFirst = step === 0;
  const isLast = totalSteps > 0 && step === totalSteps - 1;
  const backStyle = {
    // On step 0 without `canClose`, there's nothing for Back to do — hide
    // it rather than show a dead button.
    visibility: isFirst && !canClose ? "hidden" : void 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    "div",
    {
      role: "toolbar",
      "aria-label": "Wizard navigation",
      "data-state": busy ? "busy" : "idle",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: import_core51.semantic.spaceSm
      },
      children: [
        children !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: { marginRight: "auto" }, children }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: backStyle, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          Button,
          {
            variant: "ghost",
            onClick: back,
            disabled: busy || isFirst && !canClose,
            type: "button",
            children: isFirst ? cancelLabel : backLabel
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          Button,
          {
            variant: "primary",
            onClick: () => {
              if (isLast) {
                void finish();
              } else {
                void next();
              }
            },
            loading: busy,
            disabled: busy,
            type: "button",
            "aria-label": busy && typeof busyLabel === "string" ? busyLabel : void 0,
            children: busy ? busyLabel : isLast ? finishLabel : nextLabel
          }
        )
      ]
    }
  );
}
var WizardDialog = {
  Root: WizardDialogRoot,
  Title: WizardDialogTitle,
  Progress: WizardDialogProgress,
  Step: WizardDialogStep,
  Actions: WizardDialogActions
};

// src/components/atoms/Grid/Grid.tsx
var import_react48 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var Grid = (0, import_react48.forwardRef)(
  function Grid2({
    minColumnWidth = 300,
    columns,
    gap = "md",
    children,
    ...rest
  }, ref) {
    const minWidth = `${minColumnWidth}px`;
    const gridTemplateColumns = columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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

// src/components/atoms/Divider/Divider.tsx
var import_react49 = require("react");
var import_core52 = require("../../core/dist/index.cjs");
var import_jsx_runtime49 = require("react/jsx-runtime");
var Divider = (0, import_react49.forwardRef)(
  function Divider2({
    orientation = "horizontal",
    opacity = "default",
    spacing,
    ...rest
  }, ref) {
    const resolvedOpacity = dividerOpacityMap[opacity];
    const bg = `color-mix(in srgb, ${import_core52.semantic.colorBorder} ${resolvedOpacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : void 0;
    const isHorizontal = orientation === "horizontal";
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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

// src/components/atoms/Container/Container.tsx
var import_react50 = require("react");
var import_jsx_runtime50 = require("react/jsx-runtime");
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
var Container = (0, import_react50.forwardRef)(
  function Container2({
    width = "prose",
    padding = "md",
    children,
    id,
    "data-testid": dataTestId
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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

// src/components/molecules/TabStrip/TabStrip.tsx
var import_react51 = require("react");
var import_core53 = require("../../core/dist/index.cjs");
var import_jsx_runtime51 = require("react/jsx-runtime");
var STYLES_ID = "4lt7ab-tab-strip";
var STYLES_CSS = `
[data-tab-btn] {
  transition: color ${import_core53.semantic.transitionFast}, background ${import_core53.semantic.transitionFast}, border-color ${import_core53.semantic.transitionFast};
}
[data-tab-btn]:hover:not([aria-selected="true"]) {
  color: ${import_core53.semantic.colorTextSecondary};
  background: color-mix(in srgb, ${import_core53.semantic.colorBorder} 10%, transparent);
}
`;
var TabStrip = (0, import_react51.forwardRef)(
  function TabStrip2({
    tabs,
    activeKey,
    onChange,
    allowDeselect = false,
    size = "md",
    ...rest
  }, ref) {
    (0, import_core53.useInjectStyles)(STYLES_ID, STYLES_CSS);
    const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);
    const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
      count: tabs.length,
      activeIndex: activeIndex === -1 ? null : activeIndex
    });
    const handleClick = (0, import_react51.useCallback)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
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
                gap: import_core53.semantic.spaceXs,
                padding: isSm ? `${import_core53.semantic.spaceXs} ${import_core53.semantic.spaceSm}` : `${import_core53.semantic.spaceSm} ${import_core53.semantic.spaceMd}`,
                border: "none",
                borderBottom: `2px solid ${isActive ? import_core53.semantic.colorActionPrimary : "transparent"}`,
                borderRadius: 0,
                background: isActive ? `color-mix(in srgb, ${import_core53.semantic.colorActionPrimary} 8%, transparent)` : "transparent",
                color: isActive ? import_core53.semantic.colorActionPrimary : import_core53.semantic.colorTextMuted,
                fontFamily: import_core53.semantic.fontSans,
                fontSize: isSm ? import_core53.semantic.fontSizeXs : import_core53.semantic.fontSizeSm,
                fontWeight: import_core53.semantic.fontWeightSemibold,
                lineHeight: import_core53.semantic.lineHeightTight,
                cursor: "pointer",
                whiteSpace: "nowrap"
              },
              children: [
                tab.icon && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Icon, { name: tab.icon, size: isSm ? "xs" : "sm" }),
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
