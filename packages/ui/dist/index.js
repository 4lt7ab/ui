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

// src/components/molecules/ThemePicker/ThemePicker.tsx
import { forwardRef as forwardRef4 } from "react";
import { useTheme, useInjectStyles as useInjectStyles4 } from "../../core/dist/index.js";

// src/components/molecules/Card/Card.tsx
import { forwardRef as forwardRef2, useEffect as useEffect2, useRef } from "react";
import { semantic as t3, useInjectStyles, useThemeRhythm, Slot as Slot2 } from "../../core/dist/index.js";

// src/components/atoms/Surface/Surface.tsx
import { createElement, forwardRef } from "react";
import { semantic as t2, Slot } from "../../core/dist/index.js";

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

// src/components/atoms/Surface/Surface.tsx
import { jsx } from "react/jsx-runtime";
var levelMap = {
  page: t2.colorSurfacePage,
  default: t2.colorSurface,
  solid: t2.colorSurfaceSolid,
  raised: t2.colorSurfaceRaised,
  panel: t2.colorSurfacePanel,
  input: t2.colorSurfaceInput,
  overlay: t2.colorSurfaceOverlay
};
function getSurfaceStyle({
  level = "solid",
  tint,
  padding,
  radius = "lg",
  border = false,
  shadow
}) {
  const borderValue = border === true ? `${t2.borderWidthDefault} solid ${t2.colorBorder}` : typeof border === "string" ? `${t2.borderWidthDefault} solid ${semanticColorMap[border]}` : void 0;
  const tintBg = tint ? `color-mix(in srgb, ${semanticColorMap[tint]} 10%, transparent)` : void 0;
  return {
    background: tintBg ?? levelMap[level],
    padding: padding ? spacingMap[padding] : void 0,
    borderRadius: radiusMap[radius],
    border: borderValue,
    boxShadow: shadow ? shadowMap[shadow] : void 0,
    color: t2.colorText
  };
}
var Surface = forwardRef(
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
      return /* @__PURE__ */ jsx(Slot, { ref, ...commonProps, children });
    }
    return createElement(as, { ref, ...commonProps }, children);
  }
);

// src/components/molecules/Card/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
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
var Card = forwardRef2(
  function Card2({
    variant = "default",
    padding = "lg",
    hover = false,
    glow = false,
    asChild = false,
    children,
    ...rest
  }, ref) {
    useInjectStyles(HOVER_STYLES_ID, HOVER_STYLES_CSS);
    useInjectStyles(GLOW_STYLES_ID, GLOW_STYLES_CSS);
    const internalRef = useRef(null);
    const setRef = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    const { config, subscribe } = useThemeRhythm();
    useEffect2(() => {
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
      return /* @__PURE__ */ jsx2(Surface, { ...surfaceProps, children: /* @__PURE__ */ jsx2(Slot2, { ref: setRef, ...cardSlotProps, children }) });
    }
    return /* @__PURE__ */ jsx2(Surface, { ...surfaceProps, children: /* @__PURE__ */ jsx2("div", { ref: setRef, ...cardSlotProps, children }) });
  }
);

// src/components/molecules/LinkCard/linkCardStyles.ts
import { semantic as t4 } from "../../core/dist/index.js";
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
    border: ${t4.borderWidthThick} solid ${t4.colorBorder};
    text-align: left;
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
    transition: border-color ${t4.transitionBase}, transform ${t4.transitionBase};
  }

  .${LINK_CARD_CLASS}:hover {
    border-color: ${t4.colorTextLink};
    transform: translateY(-2px);
  }

  /* Selected / current state \u2014 consumers set aria-current="true" or
     aria-pressed="true" on the rendered element to pin the accent border
     in place. ThemePicker's grid uses aria-current for the active theme. */
  .${LINK_CARD_CLASS}[aria-current="true"],
  .${LINK_CARD_CLASS}[aria-pressed="true"] {
    border-color: ${t4.colorTextLink};
  }

  .${LINK_CARD_TITLE_CLASS} {
    display: block;
    font-family: ${t4.fontSerif};
    font-size: 1.125rem;
    font-weight: 600;
    color: ${t4.colorText};
    margin-bottom: 0.25rem;
  }

  .${LINK_CARD_DESC_CLASS} {
    display: block;
    font-size: 0.875rem;
    color: ${t4.colorTextMuted};
  }
`
);

// src/components/organisms/Select/Select.tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect as useEffect4,
  useId,
  useMemo,
  useRef as useRef2,
  useState
} from "react";
import { semantic as t6, useInjectStyles as useInjectStyles2 } from "../../core/dist/index.js";

// src/utils/useClickOutside.ts
import { useEffect as useEffect3 } from "react";
function useClickOutside(ref, handler, enabled) {
  useEffect3(() => {
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
import { semantic as t5 } from "../../core/dist/index.js";
var inputShellBaseStyle = {
  width: "100%",
  padding: `${t5.spaceSm} ${t5.spaceMd}`,
  fontSize: t5.fontSizeSm,
  fontFamily: t5.fontSans,
  color: t5.colorText,
  background: t5.colorSurfaceInput,
  border: `${t5.borderWidthDefault} solid ${t5.colorBorder}`,
  borderRadius: t5.radiusMd,
  transition: `border-color ${t5.transitionBase}, box-shadow ${t5.transitionBase}`,
  boxSizing: "border-box"
};
var inputShellErrorStyle = {
  borderColor: t5.colorBorderError
};
var inputShellDisabledStyle = {
  background: t5.colorSurfaceDisabled,
  color: t5.colorTextDisabled,
  cursor: "not-allowed"
};
function inputShellFocusRingCSS(selector) {
  return `
    ${selector}:focus-within {
      border-color: ${t5.colorBorderFocused};
      box-shadow: 0 0 0 ${t5.focusRingWidth} ${t5.focusRingColor};
    }
    @media (prefers-reduced-motion: reduce) {
      ${selector} {
        transition: none !important;
      }
    }
  `;
}

// src/components/organisms/Select/Select.tsx
import { Fragment, jsx as jsx3, jsxs } from "react/jsx-runtime";
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
var SelectContext = createContext(null);
function useSelectContext(part) {
  const ctx = useContext(SelectContext);
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
  useInjectStyles2(SELECT_STYLES_ID, selectCSS);
  const instanceId = useId();
  const listboxId = `${instanceId}-listbox`;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const [open, setOpen] = useState(false);
  const [focusedValue, setFocusedValue] = useState(null);
  const [dropDirection, setDropDirection] = useState("down");
  const containerRef = useRef2(null);
  const triggerRef = useRef2(null);
  const [items, setItems] = useState([]);
  const registerItem = useCallback((item) => {
    setItems((prev) => {
      if (prev.some((p) => p.value === item.value)) {
        return prev.map((p) => p.value === item.value ? item : p);
      }
      return [...prev, item];
    });
  }, []);
  const unregisterItem = useCallback((itemValue) => {
    setItems((prev) => prev.filter((p) => p.value !== itemValue));
  }, []);
  const setValue = useCallback(
    (next, fromUser) => {
      if (!isControlled) setInternalValue(next);
      if (fromUser) {
        onValueChange?.(next);
        onChange?.({ target: { value: next, name } });
      }
    },
    [isControlled, onValueChange, onChange, name]
  );
  const calculateDirection = useCallback(() => {
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
  const openMenu = useCallback(() => {
    if (disabled) return;
    calculateDirection();
    setOpen(true);
    const current = items.find((i) => i.value === value && !i.disabled);
    const firstEnabled = items.find((i) => !i.disabled);
    setFocusedValue((current ?? firstEnabled)?.value ?? null);
  }, [disabled, calculateDirection, items, value]);
  const closeMenu = useCallback(() => {
    setOpen(false);
    setFocusedValue(null);
  }, []);
  const toggleMenu = useCallback(() => {
    if (open) closeMenu();
    else openMenu();
  }, [open, openMenu, closeMenu]);
  const selectItem = useCallback(
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
  const handleKeyDown = useCallback(
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
  return /* @__PURE__ */ jsx3(SelectContext.Provider, { value: ctx, children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      style: wrapperStyle,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx3("option", { value: "" }),
              items.map((item) => /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsxs(
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
        ...hasError ? inputShellErrorStyle : {},
        ...disabled ? inputShellDisabledStyle : {},
        ...hasSelection ? {} : placeholderStyle
      },
      children: [
        /* @__PURE__ */ jsx3("span", { style: triggerTextStyle, children }),
        /* @__PURE__ */ jsx3("span", { "aria-hidden": true, style: chevronStyle, children: /* @__PURE__ */ jsx3(ChevronSVG, { rotated: open }) })
      ]
    }
  );
}
function Value({ placeholder }) {
  const { value, items } = useSelectContext("Value");
  const selected = items.find((i) => i.value === value);
  return /* @__PURE__ */ jsx3(Fragment, { children: selected?.label ?? placeholder ?? "\xA0" });
}
function Content({ children }) {
  const { open, listboxId, dropDirection, focusedValue } = useSelectContext("Content");
  const ref = useRef2(null);
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
    marginTop: t6.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: t6.spaceXs
  };
  return /* @__PURE__ */ jsx3(
    "div",
    {
      ref,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        background: t6.colorSurfacePanel,
        border: `${t6.borderWidthDefault} solid ${t6.colorBorder}`,
        borderRadius: t6.radiusMd,
        padding: t6.spaceXs,
        zIndex: t6.zIndexSticky,
        boxShadow: t6.shadowMd,
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
  return /* @__PURE__ */ jsx3(
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
  ...inputShellBaseStyle,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: t6.spaceSm,
  lineHeight: t6.lineHeightTight,
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
  color: t6.colorTextSecondary,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
var placeholderStyle = {
  color: t6.colorTextPlaceholder
};
function ChevronSVG({ rotated }) {
  return /* @__PURE__ */ jsx3(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        transition: `transform ${t6.transitionBase}`,
        transform: rotated ? "rotate(180deg)" : "none"
      },
      children: /* @__PURE__ */ jsx3(
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
import { forwardRef as forwardRef3 } from "react";
import { semantic as t7, useInjectStyles as useInjectStyles3, useThemeRhythm as useThemeRhythm2 } from "../../core/dist/index.js";
import { jsx as jsx4 } from "react/jsx-runtime";
var variantColors = {
  default: t7.colorTextMuted,
  primary: t7.colorActionPrimary,
  success: t7.colorSuccess,
  warning: t7.colorWarning,
  error: t7.colorError,
  info: t7.colorInfo
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
var StatusDot = forwardRef3(
  function StatusDot2({
    variant = "default",
    size = "md",
    animate = "none",
    "aria-label": ariaLabel
  }, ref) {
    const resolvedColor = variantColors[variant];
    const resolvedSize = sizeMap[size];
    const isPulsing = animate === "pulse";
    const { durationCss } = useThemeRhythm2();
    useInjectStyles3(PULSE_STYLES_ID, PULSE_STYLES_CSS);
    return /* @__PURE__ */ jsx4(
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
          borderRadius: t7.radiusFull,
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
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
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
  useInjectStyles4(LINK_CARD_STYLES_ID, linkCardCSS);
  useInjectStyles4(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = useTheme();
  return /* @__PURE__ */ jsx5("div", { className: "alttab-theme-picker", children: Array.from(themes.values()).map((def) => {
    const isActive = resolved === def.name;
    return /* @__PURE__ */ jsx5(Card, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxs2(
      "button",
      {
        type: "button",
        className: LINK_CARD_CLASS,
        "aria-current": isActive ? "true" : void 0,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ jsx5("span", { className: LINK_CARD_TITLE_CLASS, children: def.label }),
          descriptions[def.name] && /* @__PURE__ */ jsx5("span", { className: LINK_CARD_DESC_CLASS, children: descriptions[def.name] })
        ]
      }
    ) }, def.name);
  }) });
}
function CompactView() {
  const { resolved, themes, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs2(Select.Root, { value: resolved, onValueChange: setTheme, children: [
    /* @__PURE__ */ jsx5(Select.Trigger, { "aria-label": "Select theme", children: /* @__PURE__ */ jsxs2("span", { style: DOT_ROW, children: [
      /* @__PURE__ */ jsx5(StatusDot, { variant: "primary" }),
      /* @__PURE__ */ jsx5(Select.Value, {})
    ] }) }),
    /* @__PURE__ */ jsx5(Select.Content, { children: Array.from(themes.values()).map((def) => /* @__PURE__ */ jsx5(Select.Item, { value: def.name, textValue: def.label, children: /* @__PURE__ */ jsxs2("span", { style: DOT_ROW, children: [
      /* @__PURE__ */ jsx5(StatusDot, { variant: "primary" }),
      def.label
    ] }) }, def.name)) })
  ] });
}
var ThemePicker = forwardRef4(
  function ThemePicker2({ descriptions = {}, variant = "grid" }, ref) {
    if (variant === "compact") {
      return /* @__PURE__ */ jsx5("div", { ref, style: { display: "inline-block" }, children: /* @__PURE__ */ jsx5(CompactView, {}) });
    }
    return /* @__PURE__ */ jsx5("div", { ref, children: /* @__PURE__ */ jsx5(GridView, { descriptions }) });
  }
);

// src/icons/icons.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M18 6L6 18M6 6l12 12" }) });
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M9 18l6-6-6-6" }) });
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M6 9l6 6 6-6" }) });
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M15 18l-6-6 6-6" }) });
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M18 15l-6-6-6 6" }) });
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M20 6L9 17l-5-5" }) });
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ jsx6("path", { d: "M22 4L12 14.01l-3-3" })
  ] });
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ jsx6("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ jsx6("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] });
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx6("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] });
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx6("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx6("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] });
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ jsx6("path", { d: "M21 21l-4.35-4.35" })
  ] });
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" }) });
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ jsx6("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] });
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M12 5v14M5 12h14" }) });
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M5 12h14" }) });
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ jsx6("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] });
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M19 12H5M12 19l-7-7 7-7" }) });
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M3 12h18M3 6h18M3 18h18" }) });
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ jsx6("path", { d: "M1 1l22 22" })
  ] });
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx6("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] });
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) });
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs3("svg", { ...svgProps(size, style), children: [
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "5", r: "1" }),
    /* @__PURE__ */ jsx6("circle", { cx: "12", cy: "19", r: "1" })
  ] });
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx6("svg", { ...svgProps(size, style), children: /* @__PURE__ */ jsx6("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }) });
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
import { forwardRef as forwardRef5 } from "react";
import { semantic as t8, useInjectStyles as useInjectStyles5, Slot as Slot3 } from "../../core/dist/index.js";
import { jsx as jsx7 } from "react/jsx-runtime";
var variantStyles = {
  primary: {
    background: t8.colorActionPrimary,
    color: t8.colorTextInverse,
    border: "none"
  },
  secondary: {
    background: t8.colorActionSecondary,
    color: t8.colorText,
    border: `${t8.borderWidthDefault} solid ${t8.colorBorder}`
  },
  destructive: {
    background: t8.colorActionDestructive,
    color: t8.colorTextInverse,
    border: "none"
  },
  ghost: {
    background: "transparent",
    color: t8.colorText,
    border: `${t8.borderWidthDefault} solid transparent`
  }
};
var sizeStyles = {
  sm: {
    padding: `${t8.spaceXs} ${t8.spaceSm}`,
    fontSize: t8.fontSizeSm,
    lineHeight: t8.lineHeightTight
  },
  md: {
    padding: `${t8.spaceSm} ${t8.spaceMd}`,
    fontSize: t8.fontSizeSm,
    lineHeight: t8.lineHeightTight
  },
  lg: {
    padding: `${t8.spaceSm} ${t8.spaceLg}`,
    fontSize: t8.fontSizeBase,
    lineHeight: t8.lineHeightBase
  }
};
var baseStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: t8.spaceSm,
  borderRadius: t8.radiusMd,
  fontFamily: t8.fontSans,
  fontWeight: t8.fontWeightMedium,
  cursor: "pointer",
  transition: `background ${t8.transitionBase}, border-color ${t8.transitionBase}, opacity ${t8.transitionBase}`
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
    border: ${t8.borderWidthThick} solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: alttab-btn-spin 600ms linear infinite;
  }
`
);
var iconOnlyPadding = {
  sm: t8.spaceXs,
  md: t8.spaceSm,
  lg: t8.spaceSm
};
var Button = forwardRef5(
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
    useInjectStyles5(SPINNER_STYLES_ID, spinnerCSS);
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
      return /* @__PURE__ */ jsx7(
        Slot3,
        {
          ref,
          ...commonProps,
          "aria-disabled": isDisabled2 || void 0,
          children
        }
      );
    }
    return /* @__PURE__ */ jsx7(
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
        children: loading ? /* @__PURE__ */ jsx7("span", { className: "alttab-btn-spinner" }) : children
      }
    );
  }
);

// src/components/atoms/Stack/Stack.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var gapMap = spacingMap;
var Stack = forwardRef6(
  function Stack2({
    direction = "vertical",
    gap = "md",
    align,
    justify,
    wrap,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ jsx8(
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
import { forwardRef as forwardRef7 } from "react";
import { useInjectStyles as useInjectStyles6 } from "../../core/dist/index.js";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var LinkCard = forwardRef7(function LinkCard2({
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
  useInjectStyles6(LINK_CARD_STYLES_ID, linkCardCSS);
  return /* @__PURE__ */ jsx9(Card, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxs4(
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
        /* @__PURE__ */ jsx9("span", { className: LINK_CARD_TITLE_CLASS, children: title }),
        description && /* @__PURE__ */ jsx9("span", { className: LINK_CARD_DESC_CLASS, children: description })
      ]
    }
  ) });
});

// src/components/molecules/Field/Field.tsx
import { semantic as t9 } from "../../core/dist/index.js";
import { forwardRef as forwardRef8, useId as useId2, isValidElement, cloneElement } from "react";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var labelStyle = {
  display: "block",
  fontSize: t9.fontSizeSm,
  fontWeight: t9.fontWeightMedium,
  lineHeight: t9.lineHeightTight,
  color: t9.colorText,
  fontFamily: t9.fontSans
};
var requiredStyle = {
  color: t9.colorError,
  marginLeft: "0.125rem"
};
var helpStyle = {
  fontSize: t9.fontSizeXs,
  lineHeight: t9.lineHeightTight,
  color: t9.colorTextMuted,
  fontFamily: t9.fontSans,
  margin: 0
};
var errorStyle = {
  fontSize: t9.fontSizeXs,
  lineHeight: t9.lineHeightTight,
  color: t9.colorError,
  fontFamily: t9.fontSans,
  margin: 0
};
var Field = forwardRef8(
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
    const autoId = useId2();
    const helpId = help ? `${autoId}-help` : void 0;
    const errorId = error ? `${autoId}-error` : void 0;
    const describedBy = [errorId, helpId].filter(Boolean).join(" ") || void 0;
    const enhancedChildren = isValidElement(children) ? cloneElement(children, {
      "aria-describedby": describedBy
    }) : children;
    return /* @__PURE__ */ jsxs5(
      "div",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-describedby": rest["aria-describedby"],
        style: {
          display: "flex",
          flexDirection: "column",
          gap: t9.spaceXs,
          opacity: disabled ? 0.6 : void 0
        },
        children: [
          /* @__PURE__ */ jsxs5("label", { htmlFor, style: labelStyle, children: [
            label,
            required && /* @__PURE__ */ jsx10("span", { style: requiredStyle, "aria-hidden": "true", children: "*" })
          ] }),
          enhancedChildren,
          error && /* @__PURE__ */ jsx10("p", { id: errorId, role: "alert", style: errorStyle, children: error }),
          !error && help && /* @__PURE__ */ jsx10("p", { id: helpId, style: helpStyle, children: help })
        ]
      }
    );
  }
);

// src/components/atoms/Input/Input.tsx
import { forwardRef as forwardRef9 } from "react";
import { semantic as t10 } from "../../core/dist/index.js";
import { jsx as jsx11 } from "react/jsx-runtime";
var baseStyle = {
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: t10.lineHeightTight,
  outline: "none"
};
var Input = forwardRef9(
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
    return /* @__PURE__ */ jsx11(
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
import { forwardRef as forwardRef10 } from "react";
import { semantic as t11 } from "../../core/dist/index.js";
import { jsx as jsx12 } from "react/jsx-runtime";
var baseStyle2 = {
  ...inputShellBaseStyle,
  display: "block",
  lineHeight: t11.lineHeightBase,
  outline: "none",
  resize: "vertical",
  minHeight: "5rem"
};
var disabledStyle = {
  ...inputShellDisabledStyle,
  resize: "none"
};
var Textarea = forwardRef10(
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
    return /* @__PURE__ */ jsx12(
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
import { forwardRef as forwardRef11 } from "react";
import { semantic as t12 } from "../../core/dist/index.js";
import { jsx as jsx13 } from "react/jsx-runtime";
var variantStyles2 = {
  default: {
    border: `${t12.borderWidthDefault} solid ${t12.colorBorder}`,
    color: t12.colorTextSecondary
  },
  primary: {
    background: `color-mix(in srgb, ${t12.colorActionPrimary} 14%, transparent)`,
    color: t12.colorActionPrimary
  },
  success: {
    background: t12.colorSuccessBg,
    color: t12.colorSuccess
  },
  warning: {
    background: t12.colorWarningBg,
    color: t12.colorWarning
  },
  error: {
    background: t12.colorErrorBg,
    color: t12.colorError
  },
  info: {
    background: t12.colorInfoBg,
    color: t12.colorInfo
  }
};
var baseStyles2 = {
  display: "inline-block",
  padding: `${t12.spaceXs} ${t12.spaceSm}`,
  borderRadius: t12.radiusFull,
  fontSize: t12.fontSizeXs,
  fontWeight: t12.fontWeightSemibold,
  fontFamily: t12.fontSans,
  textTransform: "uppercase",
  letterSpacing: t12.letterSpacingWide
};
var xsBaseStyles = {
  display: "inline-block",
  fontSize: "0.6rem",
  fontFamily: t12.fontMono,
  fontWeight: t12.fontWeightMedium,
  color: t12.colorTextMuted,
  borderRadius: t12.radiusFull,
  background: `color-mix(in srgb, ${t12.colorBorder} 40%, transparent)`,
  padding: `0.0625rem ${t12.spaceXs}`,
  lineHeight: t12.lineHeightTight,
  letterSpacing: t12.letterSpacingWide,
  textTransform: "lowercase"
};
var Badge = forwardRef11(
  function Badge2({
    children,
    variant = "default",
    size = "default",
    ...rest
  }, ref) {
    const isXs = size === "xs";
    const base = isXs ? xsBaseStyles : baseStyles2;
    return /* @__PURE__ */ jsx13(
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
import { forwardRef as forwardRef12, createElement as createElement2 } from "react";
import { semantic as t13 } from "../../core/dist/index.js";
var sizeMap2 = {
  xs: t13.fontSizeXs,
  sm: t13.fontSizeSm,
  md: t13.fontSizeBase,
  lg: t13.fontSizeLg,
  xl: t13.fontSizeXl
};
var weightMap = {
  normal: t13.fontWeightNormal,
  medium: t13.fontWeightMedium,
  semibold: t13.fontWeightSemibold,
  bold: t13.fontWeightBold
};
var toneMap = {
  default: t13.colorText,
  muted: t13.colorTextMuted,
  secondary: t13.colorTextSecondary,
  inverse: t13.colorTextInverse,
  link: t13.colorTextLink,
  success: t13.colorSuccess,
  warning: t13.colorWarning,
  error: t13.colorError
};
var familyMap = {
  sans: t13.fontSans,
  serif: t13.fontSerif,
  mono: t13.fontMono
};
var Text = forwardRef12(
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
    return createElement2(
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
import { forwardRef as forwardRef13, createContext as createContext2, useContext as useContext2 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var IconFontContext = createContext2(void 0);
function IconFontProvider({ fontClass, children }) {
  return /* @__PURE__ */ jsx14(IconFontContext.Provider, { value: fontClass, children });
}
var Icon = forwardRef13(
  function Icon2({ name, size = "lg", fontClass, "aria-label": ariaLabel, id, "data-testid": dataTestId }, ref) {
    const contextFontClass = useContext2(IconFontContext);
    const IconComponent = iconRegistry[name];
    const isDecorative = !ariaLabel;
    const px = iconSizeMap[size];
    const resolvedFontClass = fontClass ?? contextFontClass;
    if (!IconComponent && resolvedFontClass) {
      return /* @__PURE__ */ jsx14(
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
    return /* @__PURE__ */ jsx14(
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
        children: IconComponent ? /* @__PURE__ */ jsx14(IconComponent, { size: px }) : null
      }
    );
  }
);

// src/components/atoms/IconButton/IconButton.tsx
import { forwardRef as forwardRef14, useId as useId3 } from "react";
import { semantic as t14, useInjectStyles as useInjectStyles7, Slot as Slot4 } from "../../core/dist/index.js";
import { Fragment as Fragment2, jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
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
var IconButton = forwardRef14(
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
    useInjectStyles7(
      styleId,
      `[data-icon-btn-id="${styleId}"]:hover:not(:disabled) {
        background: color-mix(in srgb, currentColor 8%, transparent);
      }
      [data-icon-btn-id="${styleId}"]:focus-visible {
        outline: ${t14.focusRingWidth} solid ${t14.focusRingColor};
        outline-offset: ${t14.focusRingOffset};
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
      borderRadius: t14.radiusFull,
      background: "transparent",
      border: "none",
      color: t14.colorTextMuted,
      cursor: "pointer",
      padding: 0
    };
    const iconAndBadge = /* @__PURE__ */ jsxs6(Fragment2, { children: [
      /* @__PURE__ */ jsx15(Icon, { name: icon, size: iconSizeForButton[size], fontClass }),
      badge && /* @__PURE__ */ jsx15(
        "span",
        {
          style: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 8,
            height: 8,
            borderRadius: t14.radiusFull,
            background: t14.colorError,
            border: `${t14.borderWidthThick} solid ${t14.colorSurface}`
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
      return /* @__PURE__ */ jsx15(Slot4, { ref, ...commonProps, "aria-disabled": disabled || void 0, children });
    }
    return /* @__PURE__ */ jsx15(
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
import { forwardRef as forwardRef15 } from "react";
import { semantic as t15 } from "../../core/dist/index.js";
import { jsx as jsx16 } from "react/jsx-runtime";
var Overlay = forwardRef15(
  function Overlay2({
    onClick,
    zIndex = t15.zIndexSticky
  }, ref) {
    return /* @__PURE__ */ jsx16(
      "div",
      {
        ref,
        role: "presentation",
        onClick,
        style: {
          position: "fixed",
          inset: 0,
          background: t15.colorSurfaceOverlay,
          zIndex
        }
      }
    );
  }
);

// src/components/atoms/Skeleton/Skeleton.tsx
import { forwardRef as forwardRef16 } from "react";
import { semantic as t16, useInjectStyles as useInjectStyles8, useThemeRhythm as useThemeRhythm3 } from "../../core/dist/index.js";
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
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
var Skeleton = forwardRef16(
  function Skeleton2({
    width = "100%",
    height = 16,
    radius = "md"
  }, ref) {
    const { durationCss } = useThemeRhythm3();
    useInjectStyles8(SKELETON_STYLES_ID, SKELETON_STYLES_CSS);
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        "data-skeleton": "",
        "aria-hidden": "true",
        style: {
          width,
          height,
          borderRadius: radiusMap[radius],
          background: t16.colorSurfaceRaised,
          ...durationCss ? { "--skeleton-duration": durationCss } : void 0
        }
      }
    );
  }
);
var CardSkeleton = forwardRef16(
  function CardSkeleton2(_props, ref) {
    return /* @__PURE__ */ jsxs7(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          borderRadius: t16.radiusLg,
          border: `${t16.borderWidthDefault} solid ${t16.colorBorder}`,
          padding: t16.spaceLg,
          display: "flex",
          flexDirection: "column",
          gap: t16.spaceSm
        },
        children: [
          /* @__PURE__ */ jsx17(Skeleton, { width: "60%", height: 20 }),
          /* @__PURE__ */ jsx17(Skeleton, { width: "100%", height: 14 }),
          /* @__PURE__ */ jsx17(Skeleton, { width: "80%", height: 14 })
        ]
      }
    );
  }
);
var RowSkeleton = forwardRef16(
  function RowSkeleton2(_props, ref) {
    return /* @__PURE__ */ jsxs7(
      "div",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t16.spaceSm,
          padding: `${t16.spaceSm} 0`
        },
        children: [
          /* @__PURE__ */ jsx17(Skeleton, { width: 32, height: 32, radius: "full" }),
          /* @__PURE__ */ jsxs7("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: t16.spaceXs }, children: [
            /* @__PURE__ */ jsx17(Skeleton, { width: "40%", height: 14 }),
            /* @__PURE__ */ jsx17(Skeleton, { width: "70%", height: 12 })
          ] })
        ]
      }
    );
  }
);

// src/components/atoms/ProgressBar/ProgressBar.tsx
import { forwardRef as forwardRef17 } from "react";
import { semantic as t17 } from "../../core/dist/index.js";
import { jsx as jsx18 } from "react/jsx-runtime";
var ProgressBar = forwardRef17(
  function ProgressBar2({
    segments,
    height = "md",
    "aria-label": ariaLabel
  }, ref) {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    const px = progressBarHeightMap[height];
    return /* @__PURE__ */ jsx18(
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
          background: t17.colorSurfaceRaised
        },
        children: segments.map((segment, i) => {
          const pct = total > 0 ? segment.value / total * 100 : 0;
          return /* @__PURE__ */ jsx18(
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
import { forwardRef as forwardRef18 } from "react";
import { semantic as t18 } from "../../core/dist/index.js";
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
var EmptyState = forwardRef18(
  function EmptyState2({
    icon,
    message,
    variant = "plain",
    children,
    action
  }, ref) {
    const content = /* @__PURE__ */ jsx19("div", { style: { padding: t18.spaceXl }, children: /* @__PURE__ */ jsxs8(Stack, { align: "center", gap: "sm", children: [
      /* @__PURE__ */ jsx19("span", { style: { color: t18.colorTextMuted, display: "inline-flex" }, children: /* @__PURE__ */ jsx19(Icon, { name: icon, size: "xl" }) }),
      /* @__PURE__ */ jsx19(
        "span",
        {
          style: {
            color: t18.colorTextSecondary,
            fontSize: t18.fontSizeSm,
            textAlign: "center",
            fontFamily: t18.fontSans
          },
          children: message
        }
      ),
      children,
      action && /* @__PURE__ */ jsx19("div", { style: { marginTop: t18.spaceSm }, children: action })
    ] }) });
    if (variant === "card") {
      return /* @__PURE__ */ jsx19(Card, { ref, variant: "flat", children: content });
    }
    return /* @__PURE__ */ jsx19("div", { ref, children: content });
  }
);

// src/components/molecules/Pagination/Pagination.tsx
import { forwardRef as forwardRef19 } from "react";
import { semantic as t19 } from "../../core/dist/index.js";
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var defaultLabels = {
  previous: "Previous",
  next: "Next",
  pageOf: (page, total) => `Page ${page} of ${total}`
};
var Pagination = forwardRef19(
  function Pagination2({
    page,
    totalPages,
    total,
    onPageChange,
    labels
  }, ref) {
    const resolvedLabels = { ...defaultLabels, ...labels };
    return /* @__PURE__ */ jsxs9(
      "div",
      {
        ref,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: t19.spaceSm
        },
        children: [
          /* @__PURE__ */ jsx20(
            Button,
            {
              variant: "ghost",
              size: "sm",
              disabled: page <= 1,
              onClick: () => onPageChange(page - 1),
              children: resolvedLabels.previous
            }
          ),
          /* @__PURE__ */ jsxs9(
            "span",
            {
              style: {
                color: t19.colorTextMuted,
                fontSize: t19.fontSizeSm,
                fontFamily: t19.fontSans
              },
              children: [
                resolvedLabels.pageOf(page, totalPages),
                " (",
                total,
                " total)"
              ]
            }
          ),
          /* @__PURE__ */ jsx20(
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
import { forwardRef as forwardRef20 } from "react";
import { semantic as t20 } from "../../core/dist/index.js";
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var Header = forwardRef20(
  function Header2({ title, level = "section", subtitle, indicator, trailing }, ref) {
    const isPage = level === "page";
    const Tag = isPage ? "h1" : "h2";
    const titleStyle2 = isPage ? {
      margin: 0,
      fontFamily: t20.fontSans,
      fontWeight: t20.fontWeightBold,
      color: t20.colorText
    } : {
      margin: 0,
      fontFamily: t20.fontSans,
      fontWeight: t20.fontWeightSemibold,
      fontSize: t20.fontSizeBase,
      lineHeight: t20.lineHeightTight,
      color: t20.colorText
    };
    return /* @__PURE__ */ jsxs10(
      "div",
      {
        ref,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: isPage ? "flex-end" : "center",
          gap: t20.spaceMd
        },
        children: [
          /* @__PURE__ */ jsxs10("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsxs10("div", { style: { display: "flex", alignItems: "center", gap: t20.spaceSm }, children: [
              /* @__PURE__ */ jsx21(Tag, { style: titleStyle2, children: title }),
              indicator
            ] }),
            subtitle && /* @__PURE__ */ jsx21("span", { style: { color: t20.colorTextMuted, fontSize: t20.fontSizeSm, fontFamily: t20.fontSans }, children: subtitle })
          ] }),
          trailing && /* @__PURE__ */ jsx21("div", { style: { display: "flex", alignItems: "center", gap: t20.spaceSm, flexShrink: 0 }, children: trailing })
        ]
      }
    );
  }
);

// src/components/organisms/ModalShell/ModalShell.tsx
import { forwardRef as forwardRef21, useEffect as useEffect5, useId as useId4, useRef as useRef3 } from "react";
import { createPortal } from "react-dom";
import { semantic as t21 } from "../../core/dist/index.js";
import { Fragment as Fragment3, jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var modalHeadingStyle = Object.freeze({
  margin: 0,
  fontWeight: t21.fontWeightSemibold,
  fontFamily: t21.fontSans,
  color: t21.colorText,
  fontSize: t21.fontSizeLg
});
var modalFooterStyle = Object.freeze({
  display: "flex",
  justifyContent: "flex-end",
  gap: t21.spaceSm
});
var FOCUSABLE_SELECTOR2 = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var ModalShell = forwardRef21(
  function ModalShell2({
    onClose,
    children,
    width = "md",
    zIndex = t21.zIndexModal,
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
      /* @__PURE__ */ jsxs11(Fragment3, { children: [
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
              padding: t21.spaceMd,
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
                  background: t21.colorSurface,
                  color: t21.colorText,
                  borderRadius: t21.radiusLg,
                  boxShadow: t21.shadowLg,
                  border: `${t21.borderWidthDefault} solid ${t21.colorBorder}`,
                  padding: t21.spaceXl,
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
import { semantic as t22 } from "../../core/dist/index.js";
var sectionLabelStyle = {
  display: "block",
  fontSize: t22.fontSizeXs,
  fontWeight: t22.fontWeightSemibold,
  fontFamily: t22.fontSans,
  color: t22.colorTextSecondary,
  textTransform: "uppercase",
  letterSpacing: t22.letterSpacingWide
};

// src/styles/tagChipStyle.ts
import { semantic as t23 } from "../../core/dist/index.js";
var tagChipStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: t23.spaceXs,
  fontSize: t23.fontSizeXs,
  color: t23.colorActionPrimary,
  background: t23.colorSurfaceRaised,
  borderRadius: t23.radiusFull,
  padding: `${t23.spaceXs} ${t23.spaceSm}`,
  fontFamily: t23.fontSans
};

// src/styles/pillToggleStyle.ts
import { semantic as t24 } from "../../core/dist/index.js";
var pillToggleBaseStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: `${t24.spaceXs} ${t24.spaceSm}`,
  fontSize: t24.fontSizeSm,
  fontFamily: t24.fontSans,
  fontWeight: t24.fontWeightMedium,
  lineHeight: t24.lineHeightTight,
  borderRadius: t24.radiusFull,
  cursor: "pointer",
  transition: `background ${t24.transitionFast}, border-color ${t24.transitionFast}, color ${t24.transitionFast}`,
  outline: "none"
};
var pillToggleSelectedStyle = {
  color: t24.colorActionPrimary,
  background: t24.colorActionSecondary,
  border: `${t24.borderWidthDefault} solid ${t24.colorActionPrimary}`
};
var pillToggleUnselectedStyle = {
  color: t24.colorText,
  background: "transparent",
  border: `${t24.borderWidthDefault} solid ${t24.colorBorder}`
};

// src/components/molecules/ConfirmDialog/ConfirmDialog.tsx
import { forwardRef as forwardRef22, useId as useId5, useState as useState2 } from "react";
import { semantic as t25 } from "../../core/dist/index.js";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var variantButtonMap = {
  destructive: "destructive",
  info: "primary",
  warning: "primary"
};
var ConfirmDialog = forwardRef22(
  function ConfirmDialog2({
    title,
    message,
    confirmLabel = "Confirm",
    onConfirm,
    onCancel,
    children,
    variant = "destructive"
  }, ref) {
    const [loading, setLoading] = useState2(false);
    const titleId = useId5();
    const handleConfirm = async () => {
      setLoading(true);
      try {
        await onConfirm();
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ jsxs12(ModalShell, { ref, onClose: onCancel, role: "alertdialog", titleId, children: [
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
            margin: `${t25.spaceSm} 0 ${children ? "0" : t25.spaceLg}`,
            color: t25.colorTextMuted,
            fontSize: t25.fontSizeSm,
            fontFamily: t25.fontSans
          },
          children: message
        }
      ),
      children && /* @__PURE__ */ jsx23("div", { style: { margin: `${t25.spaceSm} 0 ${t25.spaceLg}` }, children }),
      /* @__PURE__ */ jsxs12("div", { style: modalFooterStyle, children: [
        /* @__PURE__ */ jsx23(Button, { variant: "ghost", onClick: onCancel, disabled: loading, autoFocus: true, children: "Cancel" }),
        /* @__PURE__ */ jsx23(Button, { variant: variantButtonMap[variant], onClick: handleConfirm, disabled: loading, children: loading ? "Loading..." : confirmLabel })
      ] })
    ] });
  }
);

// src/components/organisms/Table/Table.tsx
import { forwardRef as forwardRef23, Children, isValidElement as isValidElement2, cloneElement as cloneElement2 } from "react";
import { semantic as t26 } from "../../core/dist/index.js";
import { useInjectStyles as useInjectStyles9 } from "../../core/dist/index.js";
import { jsx as jsx24 } from "react/jsx-runtime";
var spaceMap = {
  xs: t26.spaceXs,
  sm: t26.spaceSm,
  md: t26.spaceMd,
  lg: t26.spaceLg
};
var TABLE_STYLES_ID = "4lt7ab-table-row";
var TABLE_STYLES_CSS = `
[data-table-row-hoverable]:hover > td {
  background: color-mix(in srgb, ${t26.colorText} 8%, transparent);
}
[data-table-row-selected] > td {
  background: ${t26.colorSurfaceRaised};
  border-bottom-color: ${t26.colorSurfaceRaised};
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
  background: ${t26.colorActionPrimary};
  pointer-events: none;
}
`;
var wrapperVariants = {
  default: {
    border: `${t26.borderWidthDefault} solid ${t26.colorBorder}`,
    borderRadius: t26.radiusLg,
    boxShadow: t26.shadowSm
  },
  flat: {}
};
var Table = forwardRef23(
  function Table2({
    variant = "default",
    density = "md",
    children
  }, ref) {
    useInjectStyles9(TABLE_STYLES_ID, TABLE_STYLES_CSS);
    return /* @__PURE__ */ jsx24(
      "div",
      {
        ref,
        style: {
          overflowX: "auto",
          ...wrapperVariants[variant]
        },
        children: /* @__PURE__ */ jsx24(
          "table",
          {
            "data-table-density": density,
            style: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: t26.fontSizeSm,
              fontFamily: t26.fontSans,
              color: t26.colorText
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
    return /* @__PURE__ */ jsx24("thead", { ref, children: /* @__PURE__ */ jsx24("tr", { children }) });
  }
);
var TableHeaderCell = forwardRef23(
  function TableHeaderCell2({
    align = "left",
    width,
    colSpan,
    children
  }, ref) {
    return /* @__PURE__ */ jsx24(
      "th",
      {
        ref,
        colSpan,
        style: {
          padding: `${t26.spaceSm} ${t26.spaceMd}`,
          textAlign: align,
          fontWeight: t26.fontWeightSemibold,
          fontSize: t26.fontSizeXs,
          color: t26.colorTextMuted,
          textTransform: "uppercase",
          letterSpacing: t26.letterSpacingWide,
          borderBottom: `${t26.borderWidthThick} solid ${t26.colorBorder}`,
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
    return /* @__PURE__ */ jsx24("tbody", { ref, children: styledChildren });
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
    return /* @__PURE__ */ jsx24(
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
    return /* @__PURE__ */ jsx24(
      "td",
      {
        ref,
        colSpan,
        style: {
          padding: `${t26.spaceSm} ${t26.spaceMd}`,
          borderBottom: `${t26.borderWidthDefault} solid ${t26.colorBorder}`,
          verticalAlign: "middle",
          textAlign: align,
          color: muted ? t26.colorTextMuted : void 0,
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
    return /* @__PURE__ */ jsx24("tr", { ref, style: { cursor: "default" }, children: /* @__PURE__ */ jsx24(
      "td",
      {
        colSpan,
        style: {
          padding: `${t26.spaceXs} ${t26.spaceMd}`,
          background: t26.colorSurfaceRaised,
          borderBottom: `${t26.borderWidthDefault} solid ${t26.colorBorder}`,
          fontSize: t26.fontSizeXs,
          fontWeight: t26.fontWeightBold,
          letterSpacing: t26.letterSpacingWide,
          textTransform: "uppercase",
          color: t26.colorTextMuted,
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
    return /* @__PURE__ */ jsx24("tr", { ref, children: /* @__PURE__ */ jsx24(
      "td",
      {
        colSpan,
        style: {
          padding: `${t26.spaceXl} ${t26.spaceMd}`,
          textAlign: "center",
          color: t26.colorTextMuted,
          fontSize: t26.fontSizeSm
        },
        children
      }
    ) });
  }
);

// src/components/organisms/Table/FilterBar.tsx
import {
  createContext as createContext3,
  forwardRef as forwardRef24,
  useCallback as useCallback2,
  useContext as useContext3,
  useEffect as useEffect6,
  useImperativeHandle,
  useRef as useRef4,
  useState as useState3
} from "react";
import { semantic as t27 } from "../../core/dist/index.js";
import { jsx as jsx25, jsxs as jsxs13 } from "react/jsx-runtime";
var FilterBarContext = createContext3(null);
function useFilterBarContext(part) {
  const ctx = useContext3(FilterBarContext);
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
  const commit = useCallback2(
    (key, value) => {
      onChange({ ...values, [key]: value });
    },
    [values, onChange]
  );
  const ctxValue = { values, commit };
  const content = filters ? filters.map((filter) => {
    if (filter.type === "text") {
      return /* @__PURE__ */ jsx25(
        FilterBarText,
        {
          field: filter.key,
          placeholder: filter.placeholder,
          debounceMs: filter.debounceMs
        },
        filter.key
      );
    }
    return /* @__PURE__ */ jsx25(
      FilterBarSelect,
      {
        field: filter.key,
        placeholder: filter.placeholder,
        options: filter.options
      },
      filter.key
    );
  }) : children;
  return /* @__PURE__ */ jsx25(FilterBarContext.Provider, { value: ctxValue, children: /* @__PURE__ */ jsx25(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t27.spaceSm,
        alignItems: "flex-start",
        ...style
      },
      ...rest,
      children: content
    }
  ) });
}
var FilterBarText = forwardRef24(function FilterBarText2({ field, placeholder, debounceMs = 300 }, ref) {
  const { values, commit } = useFilterBarContext("Text");
  const external = values[field] ?? "";
  const [local, setLocal] = useState3(external);
  const timerRef = useRef4(null);
  useEffect6(() => {
    setLocal(external);
  }, [external]);
  const handleChange = useCallback2(
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
  useEffect6(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx25("div", { style: { minWidth: "10rem", flex: "1 1 10rem" }, children: /* @__PURE__ */ jsx25(
    Input,
    {
      ref,
      value: local,
      onChange: handleChange,
      placeholder
    }
  ) });
});
var FilterBarSelect = forwardRef24(function FilterBarSelect2({ field, placeholder, options }, ref) {
  const { values, commit } = useFilterBarContext("Select");
  const value = values[field] ?? "";
  const handleValueChange = useCallback2(
    (next) => {
      commit(field, next);
    },
    [commit, field]
  );
  const wrapperRef = useRef4(null);
  useImperativeHandle(
    ref,
    () => wrapperRef.current.querySelector("button")
  );
  return /* @__PURE__ */ jsx25("div", { ref: wrapperRef, style: { minWidth: "8rem", flex: "0 1 12rem" }, children: /* @__PURE__ */ jsxs13(Select.Root, { value, onValueChange: handleValueChange, children: [
    /* @__PURE__ */ jsx25(Select.Trigger, { children: /* @__PURE__ */ jsx25(Select.Value, { placeholder }) }),
    /* @__PURE__ */ jsx25(Select.Content, { children: options.map((opt) => /* @__PURE__ */ jsx25(Select.Item, { value: opt.value, children: opt.label }, opt.value)) })
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
import {
  forwardRef as forwardRef25,
  useState as useState5,
  useRef as useRef6,
  useCallback as useCallback5,
  useEffect as useEffect8,
  useMemo as useMemo4
} from "react";
import { semantic as t31, useInjectStyles as useInjectStyles11 } from "../../core/dist/index.js";

// src/components/organisms/Calendar/Calendar.tsx
import {
  createContext as createContext4,
  useCallback as useCallback3,
  useContext as useContext4,
  useMemo as useMemo2,
  useState as useState4
} from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var CalendarContext = createContext4(null);
function useCalendarContext(part = "child") {
  const ctx = useContext4(CalendarContext);
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
  return /* @__PURE__ */ jsx26(CalendarContext.Provider, { value: ctx, children });
}
var Calendar = {
  Root: Root2
};

// src/components/organisms/Calendar/Header.tsx
import { semantic as t28 } from "../../core/dist/index.js";

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
  const t48 = stripTime(to).getTime();
  return d >= f && d <= t48;
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
import { jsx as jsx27 } from "react/jsx-runtime";
var titleStyle = {
  fontSize: t28.fontSizeSm,
  fontWeight: t28.fontWeightSemibold,
  fontFamily: t28.fontSans,
  color: t28.colorText,
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
  return /* @__PURE__ */ jsx27(
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
import { jsx as jsx28 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx28(
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
import { useCallback as useCallback4, useMemo as useMemo3, useRef as useRef5, useEffect as useEffect7 } from "react";
import { semantic as t30, useInjectStyles as useInjectStyles10 } from "../../core/dist/index.js";

// src/components/organisms/Calendar/Cell.tsx
import { semantic as t29 } from "../../core/dist/index.js";
import { jsx as jsx29 } from "react/jsx-runtime";
var baseCellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: t29.spaceXl,
  height: t29.spaceXl,
  border: "none",
  borderRadius: t29.radiusSm,
  fontSize: t29.fontSizeSm,
  fontFamily: t29.fontSans,
  cursor: "pointer",
  background: "transparent",
  color: t29.colorText,
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
    ...isOutsideMonth ? { color: t29.colorTextMuted, opacity: 0.5 } : {},
    ...isToday && !isEndpoint ? { border: `${t29.borderWidthDefault} solid ${t29.colorActionPrimary}` } : {},
    ...inRange && !isEndpoint ? {
      background: `color-mix(in srgb, ${t29.colorActionPrimary} 15%, transparent)`
    } : {},
    ...isEndpoint ? { background: t29.colorActionPrimary, color: t29.colorTextInverse } : {},
    ...disabled ? {
      color: t29.colorTextDisabled,
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
  return /* @__PURE__ */ jsx29(
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
import { jsx as jsx30, jsxs as jsxs14 } from "react/jsx-runtime";
var GRID_STYLES_ID2 = "alttab-calendar";
var gridCSS2 = (
  /* css */
  `
  .alttab-calendar-day--enabled:hover {
    background: ${t30.colorSurfaceRaised} !important;
  }
  .alttab-calendar-day--enabled:focus-visible {
    outline: ${t30.focusRingWidth} solid ${t30.focusRingColor};
    outline-offset: ${t30.focusRingOffset};
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
  fontSize: t30.fontSizeXs,
  fontFamily: t30.fontSans,
  fontWeight: t30.fontWeightMedium,
  color: t30.colorTextMuted,
  textAlign: "center",
  padding: `${t30.spaceXs} 0`,
  userSelect: "none"
};
function CalendarGridPrimitive({
  "aria-label": ariaLabel = "Calendar",
  onEscape,
  children,
  style,
  className
}) {
  useInjectStyles10(GRID_STYLES_ID2, gridCSS2);
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
  useEffect7(() => {
    const table = tableRef.current;
    if (!table) return;
    const btn = table.querySelector('button[tabindex="0"]');
    if (btn && document.activeElement?.closest('[role="grid"]') === table) {
      btn.focus();
    }
  }, [ctx.focusedDate]);
  return /* @__PURE__ */ jsxs14(
    "table",
    {
      ref: tableRef,
      role: "grid",
      "aria-label": ariaLabel,
      style: { ...tableStyle, ...style },
      className,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx30("thead", { children: /* @__PURE__ */ jsx30("tr", { children: WEEKDAY_LABELS.map((label) => /* @__PURE__ */ jsx30("th", { scope: "col", style: weekdayHeaderStyle, children: label }, label)) }) }),
        /* @__PURE__ */ jsx30("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ jsx30("tr", { children: row.map((date) => {
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
          return /* @__PURE__ */ jsx30("td", { role: "gridcell", style: cellTdStyle, children: children ? children(renderArgs) : /* @__PURE__ */ jsx30(CalendarCell, { date }) }, iso);
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
import { jsx as jsx31, jsxs as jsxs15 } from "react/jsx-runtime";
var SCOPE = "alttab-drp";
var injectedCSS = (
  /* css */
  `
  .${SCOPE}-trigger:focus-visible {
    border-color: ${t31.colorBorderFocused};
    box-shadow: 0 0 0 ${t31.focusRingWidth} ${t31.focusRingColor};
  }
  .${SCOPE}-trigger:hover:not(:disabled) {
    border-color: ${t31.colorBorderFocused};
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
  lineHeight: t31.lineHeightTight,
  outline: "none",
  cursor: "pointer",
  textAlign: "left"
};
var popoverStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: t31.zIndexDropdown,
  marginTop: t31.spaceXs,
  background: t31.colorSurfacePanel,
  border: `${t31.borderWidthDefault} solid ${t31.colorBorder}`,
  borderRadius: t31.radiusLg,
  boxShadow: t31.shadowMd,
  padding: t31.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle2 = {
  color: t31.colorTextPlaceholder
};
var headerRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${t31.spaceXs} 0`,
  marginBottom: t31.spaceSm
};
function sortedRange(a, b) {
  return a.getTime() <= b.getTime() ? { from: a, to: b } : { from: b, to: a };
}
var DateRangePicker = forwardRef25(
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
    useInjectStyles11(SCOPE, injectedCSS);
    const [open, setOpen] = useState5(false);
    const [selectionStart, setSelectionStart] = useState5(null);
    const [hoverDate, setHoverDate] = useState5(null);
    const containerRef = useRef6(null);
    const handleOutsideClose = useCallback5(() => {
      setOpen(false);
      setSelectionStart(null);
      setHoverDate(null);
    }, []);
    useClickOutside(containerRef, handleOutsideClose, open);
    useEffect8(() => {
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
      displayText = /* @__PURE__ */ jsx31("span", { style: placeholderStyle2, children: placeholder });
    }
    return /* @__PURE__ */ jsxs15(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle2,
        children: [
          /* @__PURE__ */ jsx31(
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
          open && /* @__PURE__ */ jsx31("div", { style: popoverStyle, role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ jsxs15(
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
                /* @__PURE__ */ jsxs15("div", { style: headerRowStyle, children: [
                  /* @__PURE__ */ jsx31(Calendar2.Nav, { direction: "prev" }),
                  /* @__PURE__ */ jsx31(Calendar2.Header, {}),
                  /* @__PURE__ */ jsx31(Calendar2.Nav, { direction: "next" })
                ] }),
                /* @__PURE__ */ jsx31(Calendar2.Grid, { onEscape: () => {
                  setOpen(false);
                  setSelectionStart(null);
                  setHoverDate(null);
                }, children: ({ date }) => /* @__PURE__ */ jsx31(
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
import { forwardRef as forwardRef26, useState as useState6, useRef as useRef7, useCallback as useCallback6, useEffect as useEffect9, useMemo as useMemo5 } from "react";
import { semantic as t32, useInjectStyles as useInjectStyles12 } from "../../core/dist/index.js";
import { jsx as jsx32, jsxs as jsxs16 } from "react/jsx-runtime";
var SCOPE2 = "alttab-dp";
var injectedCSS2 = (
  /* css */
  `
  .${SCOPE2}-trigger:focus-visible {
    border-color: ${t32.colorBorderFocused};
    box-shadow: 0 0 0 ${t32.focusRingWidth} ${t32.focusRingColor};
  }
  .${SCOPE2}-trigger:hover:not(:disabled) {
    border-color: ${t32.colorBorderFocused};
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
  lineHeight: t32.lineHeightTight,
  outline: "none",
  cursor: "pointer",
  textAlign: "left"
};
var popoverStyle2 = {
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: t32.zIndexDropdown,
  marginTop: t32.spaceXs,
  background: t32.colorSurfacePanel,
  border: `${t32.borderWidthDefault} solid ${t32.colorBorder}`,
  borderRadius: t32.radiusLg,
  boxShadow: t32.shadowMd,
  padding: t32.spaceMd,
  minWidth: 290,
  boxSizing: "border-box"
};
var placeholderStyle3 = {
  color: t32.colorTextPlaceholder
};
var headerRowStyle2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${t32.spaceXs} 0`,
  marginBottom: t32.spaceSm
};
var DatePicker = forwardRef26(
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
    useInjectStyles12(SCOPE2, injectedCSS2);
    const [open, setOpen] = useState6(false);
    const containerRef = useRef7(null);
    useClickOutside(containerRef, () => setOpen(false), open);
    useEffect9(() => {
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
      displayText = /* @__PURE__ */ jsx32("span", { style: placeholderStyle3, children: placeholder });
    }
    return /* @__PURE__ */ jsxs16(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        style: wrapperStyle3,
        children: [
          /* @__PURE__ */ jsx32(
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
          open && /* @__PURE__ */ jsx32("div", { style: popoverStyle2, role: "dialog", "aria-label": "Date picker", children: /* @__PURE__ */ jsxs16(
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
                /* @__PURE__ */ jsxs16("div", { style: headerRowStyle2, children: [
                  /* @__PURE__ */ jsx32(Calendar2.Nav, { direction: "prev" }),
                  /* @__PURE__ */ jsx32(Calendar2.Header, {}),
                  /* @__PURE__ */ jsx32(Calendar2.Nav, { direction: "next" })
                ] }),
                /* @__PURE__ */ jsx32(Calendar2.Grid, { onEscape: () => setOpen(false) })
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
import React from "react";
import { semantic as t33 } from "../../core/dist/index.js";
import { jsx as jsx33, jsxs as jsxs17 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx33("div", { style: { borderColor: t33.colorError, borderWidth: "2px", borderStyle: "solid", borderRadius: t33.radiusLg }, children: /* @__PURE__ */ jsx33(
      Card,
      {
        variant: "flat",
        padding: "lg",
        children: /* @__PURE__ */ jsxs17("div", { style: { display: "flex", flexDirection: "column", gap: t33.spaceMd }, children: [
          /* @__PURE__ */ jsx33("div", { style: { display: "flex", alignItems: "center", gap: t33.spaceSm }, children: /* @__PURE__ */ jsx33(
            "span",
            {
              style: {
                fontSize: t33.fontSizeLg,
                color: t33.colorError,
                fontWeight: t33.fontWeightSemibold,
                fontFamily: t33.fontSans
              },
              children: "Something went wrong"
            }
          ) }),
          /* @__PURE__ */ jsx33(
            "p",
            {
              style: {
                margin: 0,
                fontFamily: t33.fontMono,
                fontSize: t33.fontSizeSm,
                lineHeight: t33.lineHeightBase,
                color: t33.colorText,
                background: t33.colorSurfaceRaised,
                padding: t33.spaceSm,
                borderRadius: t33.radiusMd,
                wordBreak: "break-word"
              },
              children: error.message
            }
          ),
          error.stack && /* @__PURE__ */ jsxs17("div", { children: [
            /* @__PURE__ */ jsx33(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => this.setState({ showStack: !showStack }),
                children: showStack ? "Hide stack trace" : "Show stack trace"
              }
            ),
            showStack && /* @__PURE__ */ jsx33(
              "pre",
              {
                style: {
                  marginTop: t33.spaceSm,
                  fontFamily: t33.fontMono,
                  fontSize: t33.fontSizeXs,
                  lineHeight: t33.lineHeightBase,
                  color: t33.colorTextSecondary,
                  background: t33.colorSurfaceRaised,
                  padding: t33.spaceSm,
                  borderRadius: t33.radiusMd,
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
    ) });
  }
};

// src/components/organisms/Toast/Toast.tsx
import {
  createContext as createContext5,
  useCallback as useCallback7,
  useContext as useContext5,
  useEffect as useEffect10,
  useRef as useRef8,
  useState as useState7
} from "react";
import { createPortal as createPortal2 } from "react-dom";
import { semantic as t34, useInjectStyles as useInjectStyles13 } from "../../core/dist/index.js";
import { jsx as jsx34, jsxs as jsxs18 } from "react/jsx-runtime";
var ToastContext = createContext5(null);
function useToast() {
  const ctx = useContext5(ToastContext);
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
  success: { bg: t34.colorSuccessBg, fg: t34.colorSuccess, border: t34.colorSuccess },
  error: { bg: t34.colorErrorBg, fg: t34.colorError, border: t34.colorError },
  info: { bg: t34.colorInfoBg, fg: t34.colorInfo, border: t34.colorInfo },
  warning: { bg: t34.colorWarningBg, fg: t34.colorWarning, border: t34.colorWarning }
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
  useEffect10(() => {
    startTimer();
    return clearTimer;
  }, []);
  const handleAnimationEnd = () => {
    if (exiting) {
      onDismiss(item.id);
    }
  };
  const colors = typeColors[item.type];
  return /* @__PURE__ */ jsxs18(
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
        gap: t34.spaceSm,
        padding: `${t34.spaceSm} ${t34.spaceMd}`,
        paddingBottom: autoDismiss ? `calc(${t34.spaceSm} + 2px)` : t34.spaceSm,
        backgroundColor: t34.colorSurfaceSolid,
        backgroundImage: `linear-gradient(${colors.bg}, ${colors.bg})`,
        color: colors.fg,
        borderRadius: t34.radiusMd,
        borderLeft: `${t34.borderWidthAccent} solid ${colors.border}`,
        boxShadow: t34.shadowMd,
        fontSize: t34.fontSizeSm,
        fontFamily: t34.fontSans,
        fontWeight: t34.fontWeightMedium,
        lineHeight: t34.lineHeightBase,
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
          IconButton,
          {
            icon: "close",
            "aria-label": "Dismiss",
            size: "sm",
            onClick: () => setExiting(true)
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
  useInjectStyles13(STYLE_ID, toastCSS);
  if (toasts.length === 0) return null;
  const positionStyles = {
    position: "fixed",
    zIndex: t34.zIndexToast,
    display: "flex",
    flexDirection: "column",
    gap: t34.spaceSm,
    pointerEvents: "none",
    ...position.startsWith("top") ? { top: t34.spaceLg } : { bottom: t34.spaceLg },
    ...position.endsWith("right") ? { right: t34.spaceLg } : { left: t34.spaceLg }
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
  const dismiss = useCallback7((id) => {
    setToasts((prev) => prev.filter((t48) => t48.id !== id));
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
  return /* @__PURE__ */ jsxs18(ToastContext.Provider, { value: { showToast }, children: [
    children,
    /* @__PURE__ */ jsx34(ToastContainer, { toasts, onDismiss: dismiss, position })
  ] });
}

// src/components/organisms/Combobox/Combobox.tsx
import {
  createContext as createContext6,
  useCallback as useCallback8,
  useContext as useContext6,
  useEffect as useEffect11,
  useId as useId7,
  useMemo as useMemo6,
  useRef as useRef9,
  useState as useState8
} from "react";
import { semantic as t35, useInjectStyles as useInjectStyles14 } from "../../core/dist/index.js";
import { jsx as jsx35 } from "react/jsx-runtime";
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
var ComboboxContext = createContext6(null);
function useComboboxContext(part) {
  const ctx = useContext6(ComboboxContext);
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
  useInjectStyles14(COMBOBOX_STYLES_ID, comboboxCSS);
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
  useClickOutside(containerRef, closeMenu, open);
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
  return /* @__PURE__ */ jsx35(ComboboxContext.Provider, { value: ctx, children: /* @__PURE__ */ jsx35("div", { ref: containerRef, style: wrapperStyle4, onKeyDown: handleKeyDown, children }) });
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
  return /* @__PURE__ */ jsx35(
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
  const ref = useRef9(null);
  useEffect11(() => {
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
    marginTop: t35.spaceXs
  } : {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    marginBottom: t35.spaceXs
  };
  return /* @__PURE__ */ jsx35(
    "div",
    {
      ref,
      id: listboxId,
      role: "listbox",
      hidden: !open,
      style: open ? {
        ...positionStyle,
        background: t35.colorSurfacePanel,
        border: `${t35.borderWidthDefault} solid ${t35.colorBorder}`,
        borderRadius: t35.radiusMd,
        padding: t35.spaceXs,
        zIndex: t35.zIndexSticky,
        boxShadow: t35.shadowMd,
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
  useEffect11(() => {
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
  return /* @__PURE__ */ jsx35(
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
  return /* @__PURE__ */ jsx35(
    "div",
    {
      role: "presentation",
      style: {
        padding: `${t35.spaceXs} ${t35.spaceSm}`,
        fontSize: t35.fontSizeSm,
        color: t35.colorTextMuted,
        fontFamily: t35.fontSans
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
  lineHeight: t35.lineHeightTight,
  outline: "none"
};
var Combobox = {
  Root: Root3,
  Input: Input3,
  List,
  Item: Item2,
  Empty
};

// src/components/molecules/ChipPicker/ChipPicker.tsx
import { useCallback as useCallback9, useId as useId8, useState as useState9 } from "react";
import { semantic as t36, useInjectStyles as useInjectStyles15 } from "../../core/dist/index.js";
import { jsx as jsx36, jsxs as jsxs19 } from "react/jsx-runtime";
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
  const [internalSelected, setInternalSelected] = useState9(
    () => defaultSelected ?? []
  );
  const selected = isControlled ? controlledSelected : internalSelected;
  const applySelection = useCallback9(
    (next) => {
      if (!isControlled) setInternalSelected(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  useInjectStyles15(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${t36.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${t36.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${t36.focusRingWidth} solid ${t36.focusRingColor};
      outline-offset: ${t36.focusRingOffset};
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
  const renderChips = (chips) => /* @__PURE__ */ jsx36(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: t36.spaceSm
      },
      children: chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return /* @__PURE__ */ jsx36(
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
  return /* @__PURE__ */ jsx36(
    "div",
    {
      "data-chip-picker-id": styleId,
      role: "group",
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t36.spaceMd
      },
      children: groups.map((group, i) => /* @__PURE__ */ jsxs19("div", { style: { display: "flex", flexDirection: "column", gap: t36.spaceSm }, children: [
        group.label !== null && /* @__PURE__ */ jsx36("div", { style: i > 0 ? { marginTop: t36.spaceXs } : void 0, children: /* @__PURE__ */ jsx36("div", { style: sectionLabelStyle, children: group.label }) }),
        renderChips(group.chips)
      ] }, group.label ?? "__ungrouped"))
    }
  );
}

// src/components/molecules/SearchInput/SearchInput.tsx
import { forwardRef as forwardRef27, useState as useState10, useEffect as useEffect12, useRef as useRef10, useCallback as useCallback10 } from "react";
import { semantic as t37, useInjectStyles as useInjectStyles16 } from "../../core/dist/index.js";
import { jsx as jsx37, jsxs as jsxs20 } from "react/jsx-runtime";
var STYLE_ID2 = "4lt7ab-search-input";
var WRAPPER_CLASS = "search-input-wrapper";
var focusRingCSS = inputShellFocusRingCSS(`.${WRAPPER_CLASS}`);
var wrapperStyle5 = {
  ...inputShellBaseStyle,
  display: "flex",
  alignItems: "center",
  gap: t37.spaceXs,
  lineHeight: t37.lineHeightTight
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
    useInjectStyles16(STYLE_ID2, focusRingCSS);
    const [localValue, setLocalValue] = useState10(value);
    const timerRef = useRef10(null);
    const onSearchRef = useRef10(onSearch);
    onSearchRef.current = onSearch;
    useEffect12(() => {
      setLocalValue(value);
    }, [value]);
    const handleChange = useCallback10((e) => {
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
    return /* @__PURE__ */ jsxs20(
      "div",
      {
        className: WRAPPER_CLASS,
        "data-testid": dataTestId,
        style: {
          ...wrapperStyle5,
          ...disabled ? inputShellDisabledStyle : {}
        },
        children: [
          /* @__PURE__ */ jsx37("span", { style: { color: t37.colorTextMuted, flexShrink: 0, display: "inline-flex" }, children: /* @__PURE__ */ jsx37(Icon, { name: "search", size: "sm" }) }),
          /* @__PURE__ */ jsx37(
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
          trailing && /* @__PURE__ */ jsx37("div", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: trailing })
        ]
      }
    );
  }
);

// src/components/molecules/SegmentedControl/SegmentedControl.tsx
import { useCallback as useCallback12, useLayoutEffect, useRef as useRef12, useState as useState11 } from "react";
import { semantic as t38, useInjectStyles as useInjectStyles17 } from "../../core/dist/index.js";

// src/utils/useRovingFocus.ts
import { useCallback as useCallback11, useRef as useRef11 } from "react";
function useRovingFocus({
  count,
  activeIndex,
  orientation = "horizontal"
}) {
  const itemRefs = useRef11([]);
  const itemRef = useCallback11(
    (index) => (el) => {
      itemRefs.current[index] = el;
    },
    []
  );
  const onKeyDown = useCallback11(
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
  const getTabIndex = useCallback11(
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
import { jsx as jsx38, jsxs as jsxs21 } from "react/jsx-runtime";
var STYLE_ID3 = "4lt7ab-segmented-control";
var hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${t38.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${t38.focusRingWidth} solid ${t38.focusRingColor};
    outline-offset: ${t38.focusRingOffset};
    border-radius: ${t38.radiusFull};
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
  useInjectStyles17(STYLE_ID3, hoverCSS);
  const isControlled = controlledValue !== void 0;
  const [internalValue, setInternalValue] = useState11(
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
  const [indicator, setIndicator] = useState11(null);
  const s = sizes[size];
  const activeIndex = segments.findIndex((seg) => seg.value === value);
  const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
    count: segments.length,
    activeIndex: activeIndex === -1 ? null : activeIndex
  });
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
  return /* @__PURE__ */ jsxs21(
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
        background: t38.colorSurfaceInput,
        borderRadius: t38.radiusFull,
        border: `${t38.borderWidthDefault} solid ${t38.colorBorder}`,
        padding: 2,
        boxSizing: "border-box"
      },
      children: [
        indicator && /* @__PURE__ */ jsx38(
          "div",
          {
            className: "segmented-ctrl-indicator",
            style: {
              position: "absolute",
              top: 2,
              left: indicator.left,
              width: indicator.width,
              height: s.height - 6,
              borderRadius: t38.radiusFull,
              background: t38.colorActionPrimary,
              transition: `left ${t38.transitionSlow}, width ${t38.transitionSlow}`,
              pointerEvents: "none"
            }
          }
        ),
        segments.map((seg, i) => {
          const isActive = seg.value === value;
          const hasIcon = !!seg.icon;
          const iconOnly = hasIcon && !seg.label;
          return /* @__PURE__ */ jsxs21(
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
                gap: t38.spaceXs,
                height: s.height - 6,
                padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
                border: "none",
                borderRadius: t38.radiusFull,
                background: "transparent",
                color: isActive ? t38.colorTextInverse : t38.colorTextMuted,
                fontSize: s.fontSize,
                fontFamily: t38.fontSans,
                fontWeight: isActive ? t38.fontWeightSemibold : t38.fontWeightNormal,
                cursor: "pointer",
                transition: `color ${t38.transitionBase}`,
                whiteSpace: "nowrap",
                lineHeight: 1
              },
              children: [
                hasIcon && /* @__PURE__ */ jsx38(Icon, { name: seg.icon, size: s.iconSize }),
                seg.label && /* @__PURE__ */ jsx38("span", { children: seg.label })
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
import { forwardRef as forwardRef28 } from "react";
import { semantic as t39, useInjectStyles as useInjectStyles18 } from "../../core/dist/index.js";
import { jsx as jsx39, jsxs as jsxs22 } from "react/jsx-runtime";
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
  info: { bg: t39.colorInfoBg, fg: t39.colorInfo, border: t39.colorInfo },
  warning: { bg: t39.colorWarningBg, fg: t39.colorWarning, border: t39.colorWarning },
  error: { bg: t39.colorErrorBg, fg: t39.colorError, border: t39.colorError },
  success: { bg: t39.colorSuccessBg, fg: t39.colorSuccess, border: t39.colorSuccess }
};
var defaultIcons = {
  info: /* @__PURE__ */ jsx39(IconInfo, { size: 20 }),
  warning: /* @__PURE__ */ jsx39(IconWarning, { size: 20 }),
  error: /* @__PURE__ */ jsx39(IconError, { size: 20 }),
  success: /* @__PURE__ */ jsx39(IconCheckCircle, { size: 20 })
};
var AlertBanner = forwardRef28(
  function AlertBanner2({ variant, children, onDismiss, icon }, ref) {
    useInjectStyles18(STYLE_ID4, alertBannerCSS);
    const colors = variantColors2[variant];
    const resolvedIcon = icon !== void 0 ? icon : defaultIcons[variant];
    return /* @__PURE__ */ jsxs22(
      "div",
      {
        ref,
        role: "alert",
        style: {
          display: "flex",
          alignItems: "center",
          gap: t39.spaceSm,
          width: "100%",
          padding: `${t39.spaceSm} ${t39.spaceMd}`,
          background: colors.bg,
          color: colors.fg,
          borderBottom: `${t39.borderWidthThick} solid ${colors.border}`,
          fontFamily: t39.fontSans,
          fontSize: t39.fontSizeSm,
          fontWeight: t39.fontWeightMedium,
          lineHeight: t39.lineHeightBase,
          boxSizing: "border-box",
          animation: "alert-banner-slide-in 250ms ease"
        },
        children: [
          resolvedIcon && /* @__PURE__ */ jsx39("span", { style: { flexShrink: 0, display: "flex", alignItems: "center" }, children: resolvedIcon }),
          /* @__PURE__ */ jsx39("span", { style: { flex: 1 }, children }),
          onDismiss && /* @__PURE__ */ jsx39(
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
import { createContext as createContext7, forwardRef as forwardRef29, useContext as useContext7 } from "react";
import { semantic as t40, useInjectStyles as useInjectStyles19, Slot as Slot5 } from "../../core/dist/index.js";
import { jsx as jsx40 } from "react/jsx-runtime";
var TopBarContext = createContext7(null);
function useTopBarContext(component) {
  const ctx = useContext7(TopBarContext);
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
    transition: background ${t40.transitionBase};
  }
  [data-topbar-link]:hover::after {
    background: ${t40.colorBorder};
  }
  [data-topbar-link][data-active]::after {
    background: ${t40.colorActionPrimary};
  }
  [data-topbar-link]:hover {
    color: ${t40.colorText};
  }
`;
var TopBarRoot = forwardRef29(
  function TopBarRoot2({ children, sticky = false, ...rest }, ref) {
    useInjectStyles19(TOPBAR_STYLES_ID, TOPBAR_CSS);
    const stickyStyle = sticky ? { position: "sticky", top: 0, zIndex: t40.zIndexSticky } : {};
    return /* @__PURE__ */ jsx40(TopBarContext.Provider, { value: true, children: /* @__PURE__ */ jsx40(
      "header",
      {
        ref,
        id: rest.id,
        "data-testid": rest["data-testid"],
        "aria-label": rest["aria-label"],
        style: {
          display: "flex",
          alignItems: "center",
          height: t40.space2xl,
          padding: `0 ${t40.spaceMd}`,
          background: t40.colorSurface,
          borderBottom: `${t40.borderWidthDefault} solid ${t40.colorBorder}`,
          fontFamily: t40.fontSans,
          ...stickyStyle
        },
        children
      }
    ) });
  }
);
function TopBarLeading({ children }) {
  useTopBarContext("Leading");
  return /* @__PURE__ */ jsx40(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        fontWeight: t40.fontWeightBold,
        fontSize: t40.fontSizeSm,
        color: t40.colorText,
        marginRight: t40.spaceLg,
        whiteSpace: "nowrap",
        flexShrink: 0
      },
      children
    }
  );
}
function TopBarNav({ children, "aria-label": ariaLabel = "Primary" }) {
  useTopBarContext("Nav");
  return /* @__PURE__ */ jsx40(
    "nav",
    {
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        alignItems: "center",
        gap: t40.spaceXs,
        height: "100%",
        flex: 1,
        minWidth: 0
      },
      children
    }
  );
}
var TopBarLink = forwardRef29(function TopBarLink2({ active = false, asChild = false, onClick, children }, ref) {
  useTopBarContext("Link");
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: t40.spaceXs,
    height: "100%",
    padding: `0 ${t40.spaceSm}`,
    border: "none",
    background: "transparent",
    color: active ? t40.colorActionPrimary : t40.colorTextMuted,
    fontSize: t40.fontSizeSm,
    fontFamily: t40.fontSans,
    fontWeight: active ? t40.fontWeightSemibold : t40.fontWeightNormal,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: `color ${t40.transitionBase}`,
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
    return /* @__PURE__ */ jsx40(Slot5, { ref, ...commonProps, children });
  }
  return /* @__PURE__ */ jsx40("button", { ref, type: "button", ...commonProps, children });
});
function TopBarTrailing({ children }) {
  useTopBarContext("Trailing");
  return /* @__PURE__ */ jsx40(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: t40.spaceSm,
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
import { Children as Children2, createContext as createContext8, forwardRef as forwardRef30, useContext as useContext8, useId as useId9 } from "react";
import { semantic as t41, Slot as Slot6 } from "../../core/dist/index.js";
import { jsx as jsx41, jsxs as jsxs23 } from "react/jsx-runtime";
var EmptyPageContext = createContext8(null);
function useEmptyPageContext(component) {
  const ctx = useContext8(EmptyPageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <EmptyPage.${component}> must be rendered inside <EmptyPage.Root>.`
    );
  }
  return ctx;
}
var EmptyPageRoot = forwardRef30(function EmptyPageRoot2({ level = "page", children, ...rest }, ref) {
  const titleId = useId9();
  const isPage = level === "page";
  return /* @__PURE__ */ jsx41(EmptyPageContext.Provider, { value: { level, titleId }, children: /* @__PURE__ */ jsx41(
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
        gap: t41.spaceMd,
        textAlign: "center",
        width: "100%",
        minHeight: isPage ? "60vh" : "auto",
        padding: isPage ? `${t41.space2xl} ${t41.spaceLg}` : `${t41.spaceXl} ${t41.spaceLg}`,
        fontFamily: t41.fontSans,
        boxSizing: "border-box"
      },
      children
    }
  ) });
});
function EmptyPageIcon({ children }) {
  useEmptyPageContext("Icon");
  return /* @__PURE__ */ jsx41(
    "div",
    {
      "aria-hidden": "true",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: t41.colorTextMuted,
        marginBottom: t41.spaceSm
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
    fontFamily: t41.fontSans,
    fontWeight: t41.fontWeightBold,
    fontSize: t41.fontSizeXl,
    lineHeight: t41.lineHeightTight,
    color: t41.colorText
  } : {
    margin: 0,
    fontFamily: t41.fontSans,
    fontWeight: t41.fontWeightSemibold,
    fontSize: t41.fontSizeLg,
    lineHeight: t41.lineHeightTight,
    color: t41.colorText
  };
  return /* @__PURE__ */ jsx41(Tag, { id: titleId, style, children });
}
function EmptyPageDescription({
  children
}) {
  useEmptyPageContext("Description");
  return /* @__PURE__ */ jsx41(
    "p",
    {
      style: {
        margin: 0,
        maxWidth: "32rem",
        color: t41.colorTextSecondary,
        fontSize: t41.fontSizeSm,
        lineHeight: t41.lineHeightBase,
        fontFamily: t41.fontSans
      },
      children
    }
  );
}
function EmptyPageActions({
  children
}) {
  useEmptyPageContext("Actions");
  return /* @__PURE__ */ jsx41(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: t41.spaceSm,
        marginTop: t41.spaceSm
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
  const count = Children2.toArray(children).filter(Boolean).length;
  if (count === 0) return null;
  return /* @__PURE__ */ jsx41(
    "ul",
    {
      "aria-label": ariaLabel,
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: t41.spaceSm,
        listStyle: "none",
        margin: 0,
        marginTop: t41.spaceMd,
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
    gap: t41.spaceXs,
    padding: `${t41.spaceXs} ${t41.spaceSm}`,
    border: `${t41.borderWidthDefault} solid ${t41.colorBorder}`,
    borderRadius: t41.radiusMd,
    background: t41.colorSurface,
    color: t41.colorText,
    fontSize: t41.fontSizeSm,
    fontFamily: t41.fontSans,
    textDecoration: "none",
    cursor: asChild ? "pointer" : "default"
  };
  if (asChild) {
    return /* @__PURE__ */ jsx41("li", { style: { display: "flex" }, children: /* @__PURE__ */ jsx41(Slot6, { style: contentStyle, children }) });
  }
  return /* @__PURE__ */ jsx41("li", { style: { display: "flex" }, children: /* @__PURE__ */ jsxs23("span", { style: contentStyle, children: [
    icon && /* @__PURE__ */ jsx41(
      "span",
      {
        "aria-hidden": "true",
        style: { display: "inline-flex", color: t41.colorTextMuted },
        children: /* @__PURE__ */ jsx41(Icon, { name: icon, size: "sm" })
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
import {
  Children as Children3,
  createContext as createContext9,
  forwardRef as forwardRef31,
  isValidElement as isValidElement3,
  useCallback as useCallback13,
  useContext as useContext9,
  useEffect as useEffect13,
  useMemo as useMemo7,
  useRef as useRef13,
  useState as useState12
} from "react";
import { semantic as t42 } from "../../core/dist/index.js";
import { jsx as jsx42, jsxs as jsxs24 } from "react/jsx-runtime";
var AppShellContext = createContext9(null);
function useAppShellContextInternal(component) {
  const ctx = useContext9(AppShellContext);
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
  return useContext9(AppShellContext) !== null;
}
function useControllableBoolean(params) {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== void 0;
  const [uncontrolled, setUncontrolled] = useState12(defaultValue);
  const value = isControlled ? controlled : uncontrolled;
  const wasControlled = useRef13(isControlled);
  useEffect13(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `<AppShell.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);
  const setValue = useCallback13(
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
  Children3.forEach(children, (child) => {
    if (!isValidElement3(child)) return;
    if (child.type === AppShellTopBar) topBar = child;
    else if (child.type === AppShellSidebar) sidebar = child;
    else if (child.type === AppShellMain) main = child;
    else if (child.type === AppShellRightPanel) rightPanel = child;
  });
  return { topBar, sidebar, main, rightPanel };
}
var AppShellRoot = forwardRef31(function AppShellRoot2({
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
  const value = useMemo7(
    () => ({ sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen }),
    [sidebarCollapsed, setSidebarCollapsed, rightPanelOpen, setRightPanelOpen]
  );
  const { topBar, sidebar, main, rightPanel } = bucketChildren(children);
  const hasTopBar = topBar !== null;
  const hasSidebar = sidebar !== null;
  const hasRightPanel = rightPanel !== null && rightPanelOpen;
  const sidebarWidth = sidebarCollapsed ? t42.sizeSidebarCollapsed : t42.sizeSidebarExpanded;
  const gridTemplateColumns = [
    hasSidebar ? sidebarWidth : null,
    "1fr",
    hasRightPanel ? t42.sizeRightPanelDefault : null
  ].filter(Boolean).join(" ");
  const gridTemplateRows = hasTopBar ? `${t42.space2xl} 1fr` : "1fr";
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
  return /* @__PURE__ */ jsx42(AppShellContext.Provider, { value, children: /* @__PURE__ */ jsxs24(
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
        fontFamily: t42.fontSans,
        color: t42.colorText,
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
  return /* @__PURE__ */ jsx42("div", { style: { gridArea: "topbar", minWidth: 0 }, children: /* @__PURE__ */ jsx42(TopBarRoot, { ...props }) });
}
function AppShellSidebar({
  "aria-label": ariaLabel = "Sidebar",
  children
}) {
  const { sidebarCollapsed } = useAppShellContextInternal("Sidebar");
  const content = typeof children === "function" ? children({ collapsed: sidebarCollapsed }) : children;
  return /* @__PURE__ */ jsx42(
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
        background: t42.colorSurfacePanel,
        borderRight: `${t42.borderWidthDefault} solid ${t42.colorBorder}`,
        transition: `width ${t42.transitionBase}`,
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
    padding: `${t42.spaceSm} ${t42.spaceMd} ${t42.spaceXs}`,
    fontSize: t42.fontSizeXs,
    fontWeight: t42.fontWeightSemibold,
    color: t42.colorTextMuted,
    textTransform: "uppercase",
    letterSpacing: t42.letterSpacingWide
  };
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      "data-state": sidebarCollapsed ? "collapsed" : "expanded",
      style: { display: "flex", flexDirection: "column" },
      children: [
        label !== void 0 && /* @__PURE__ */ jsx42("span", { style: labelStyle2, children: label }),
        /* @__PURE__ */ jsx42("div", { style: { display: "flex", flexDirection: "column" }, children })
      ]
    }
  );
}
function AppShellMain({
  children,
  ...rest
}) {
  useAppShellContextInternal("Main");
  return /* @__PURE__ */ jsx42(
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
        background: t42.colorSurfacePage,
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
  return /* @__PURE__ */ jsx42(
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
        background: t42.colorSurfacePanel,
        borderLeft: `${t42.borderWidthDefault} solid ${t42.colorBorder}`,
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
import { createContext as createContext10, forwardRef as forwardRef32, useContext as useContext10, useId as useId10, useMemo as useMemo8 } from "react";
import { semantic as t43 } from "../../core/dist/index.js";
import { jsx as jsx43 } from "react/jsx-runtime";
var DataTablePageContext = createContext10(null);
function useDataTablePageContext(part) {
  const ctx = useContext10(DataTablePageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <DataTablePage.${part}> must be rendered inside <DataTablePage.Root>.`
    );
  }
  return ctx;
}
var DataTablePageRoot = forwardRef32(function DataTablePageRoot2({ rowCount, children, ...rest }, ref) {
  const titleId = useId10();
  const isEmpty = rowCount === 0;
  const value = useMemo8(
    () => ({ rowCount, titleId }),
    [rowCount, titleId]
  );
  return /* @__PURE__ */ jsx43(DataTablePageContext.Provider, { value, children: /* @__PURE__ */ jsx43(
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
        gap: t43.spaceLg,
        width: "100%",
        fontFamily: t43.fontSans,
        color: t43.colorText,
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
  return /* @__PURE__ */ jsx43("div", { id: titleId, children: /* @__PURE__ */ jsx43(Header, { level, ...rest }) });
}
function DataTablePageFilterBar(props) {
  useDataTablePageContext("FilterBar");
  return /* @__PURE__ */ jsx43(TableFilterBar, { ...props });
}
function DataTablePageTable(props) {
  useDataTablePageContext("Table");
  return /* @__PURE__ */ jsx43(Table3, { ...props });
}
function DataTablePagePagination(props) {
  useDataTablePageContext("Pagination");
  return /* @__PURE__ */ jsx43(Pagination, { ...props });
}
function DataTablePageEmpty(props) {
  const { rowCount } = useDataTablePageContext("Empty");
  if (rowCount !== 0) return null;
  return /* @__PURE__ */ jsx43(EmptyState, { ...props, variant: "plain" });
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
import {
  Children as Children4,
  createContext as createContext11,
  forwardRef as forwardRef33,
  isValidElement as isValidElement4,
  useCallback as useCallback14,
  useContext as useContext11,
  useId as useId11,
  useMemo as useMemo9,
  useState as useState13
} from "react";
import { createPortal as createPortal3 } from "react-dom";
import { semantic as t44 } from "../../core/dist/index.js";
import { Fragment as Fragment4, jsx as jsx44, jsxs as jsxs25 } from "react/jsx-runtime";
var DetailPageContext = createContext11(null);
function useDetailPageContext(part) {
  const ctx = useContext11(DetailPageContext);
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
  Children4.forEach(children, (child) => {
    if (isValidElement4(child) && child.type === DetailPageRightPanel) {
      rightPanel = child;
    } else {
      main.push(child);
    }
  });
  return { main, rightPanel };
}
var DetailPageRoot = forwardRef33(function DetailPageRoot2({ children, ...rest }, ref) {
  const titleId = useId11();
  const [actionsSlot, setActionsSlot] = useState13(null);
  const value = useMemo9(
    () => ({
      titleId,
      actionsSlot,
      setActionsSlot
    }),
    [titleId, actionsSlot]
  );
  const { main, rightPanel } = splitChildren(children);
  const gridTemplateColumns = rightPanel !== null ? `1fr ${t44.sizeRightPanelDefault}` : "1fr";
  return /* @__PURE__ */ jsx44(DetailPageContext.Provider, { value, children: /* @__PURE__ */ jsxs25(
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
        gap: t44.spaceLg,
        width: "100%",
        fontFamily: t44.fontSans,
        color: t44.colorText,
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ jsx44(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: t44.spaceLg,
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
  const slotRefCb = useCallback14(
    (el) => {
      setActionsSlot(el);
    },
    [setActionsSlot]
  );
  const trailingSlot = /* @__PURE__ */ jsx44(
    "div",
    {
      ref: slotRefCb,
      "data-detailpage-actions-slot": "",
      style: { display: "flex", alignItems: "center", gap: t44.spaceSm }
    }
  );
  const headerWithTitleId = /* @__PURE__ */ jsx44("div", { id: titleId, style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ jsx44(
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
    return /* @__PURE__ */ jsxs25(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-end",
          gap: t44.spaceMd,
          minWidth: 0
        },
        children: [
          /* @__PURE__ */ jsx44(
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
  Children4.forEach(children, (child) => {
    if (!isValidElement4(child)) return;
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
  return /* @__PURE__ */ jsx44(
    "dl",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "max-content 1fr",
        columnGap: t44.spaceLg,
        rowGap: t44.spaceSm,
        margin: 0,
        padding: 0,
        fontFamily: t44.fontSans,
        fontSize: t44.fontSizeSm
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
  return /* @__PURE__ */ jsxs25(Fragment4, { children: [
    /* @__PURE__ */ jsx44(
      "dt",
      {
        style: {
          margin: 0,
          color: t44.colorTextMuted,
          fontWeight: t44.fontWeightMedium
        },
        children: label
      }
    ),
    /* @__PURE__ */ jsx44("dd", { style: { margin: 0, color: t44.colorText }, children })
  ] });
}
function DetailPageBody({
  children,
  ...rest
}) {
  useDetailPageContext("Body");
  const insideAppShell = useIsInsideAppShell();
  const Tag = insideAppShell ? "div" : "main";
  return /* @__PURE__ */ jsx44(
    Tag,
    {
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-label": insideAppShell ? void 0 : rest["aria-label"],
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t44.spaceMd,
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
  return createPortal3(/* @__PURE__ */ jsx44(Fragment4, { children }), actionsSlot);
}
function DetailPageRightPanel({
  "aria-label": ariaLabel = "Details",
  children
}) {
  useDetailPageContext("RightPanel");
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: t44.spaceMd,
    padding: t44.spaceMd,
    background: t44.colorSurfacePanel,
    border: `${t44.borderWidthDefault} solid ${t44.colorBorder}`,
    borderRadius: t44.radiusMd,
    minWidth: 0
  };
  return /* @__PURE__ */ jsx44("aside", { "aria-label": ariaLabel, style, children });
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
import {
  createContext as createContext12,
  forwardRef as forwardRef34,
  useCallback as useCallback15,
  useContext as useContext12,
  useEffect as useEffect14,
  useId as useId12,
  useMemo as useMemo10,
  useRef as useRef14,
  useState as useState14
} from "react";
import { createPortal as createPortal4 } from "react-dom";
import { semantic as t45 } from "../../core/dist/index.js";
import { jsx as jsx45, jsxs as jsxs26 } from "react/jsx-runtime";
var FormLayoutContext = createContext12(null);
function useFormLayoutInternal(part) {
  const ctx = useContext12(FormLayoutContext);
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
  const [uncontrolled, setUncontrolled] = useState14(defaultValue);
  const value = isControlled ? controlled : uncontrolled;
  const wasControlled = useRef14(isControlled);
  useEffect14(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `<FormLayout.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);
  const setValue = useCallback15(
    (next) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );
  return [value, setValue];
}
var FormLayoutRoot = forwardRef34(function FormLayoutRoot2({
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
  const autoId = useId12();
  const formId = rest.id ?? `formlayout-${autoId}`;
  const value = useMemo10(
    () => ({ dirty, setDirty, saving, setSaving, onSave, onCancel, sticky, formId }),
    [dirty, setDirty, saving, setSaving, onSave, onCancel, sticky, formId]
  );
  const handleSubmit = useCallback15(
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
  return /* @__PURE__ */ jsx45(FormLayoutContext.Provider, { value, children: /* @__PURE__ */ jsx45(
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
        gap: t45.spaceLg,
        width: "100%",
        fontFamily: t45.fontSans,
        color: t45.colorText,
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
  return /* @__PURE__ */ jsx45(Header, { level: "page", title, subtitle: description });
}
var FormLayoutSectionContext = createContext12(null);
function useFormLayoutSectionContext(part) {
  const ctx = useContext12(FormLayoutSectionContext);
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
  const headerId = useId12();
  const value = useMemo10(() => ({ headerId }), [headerId]);
  return /* @__PURE__ */ jsx45(FormLayoutSectionContext.Provider, { value, children: /* @__PURE__ */ jsx45(
    "section",
    {
      id: rest.id,
      "data-testid": rest["data-testid"],
      "aria-labelledby": headerId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t45.spaceMd,
        padding: t45.spaceMd,
        background: t45.colorSurface,
        border: `${t45.borderWidthDefault} solid ${t45.colorBorder}`,
        borderRadius: t45.radiusMd,
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
  return /* @__PURE__ */ jsxs26("div", { style: { display: "flex", flexDirection: "column", gap: t45.spaceXs }, children: [
    /* @__PURE__ */ jsx45(
      "h2",
      {
        id: headerId,
        style: {
          margin: 0,
          fontFamily: t45.fontSans,
          fontWeight: t45.fontWeightSemibold,
          fontSize: t45.fontSizeBase,
          lineHeight: t45.lineHeightTight,
          color: t45.colorText
        },
        children: title
      }
    ),
    description !== void 0 && /* @__PURE__ */ jsx45(
      "span",
      {
        style: {
          color: t45.colorTextMuted,
          fontSize: t45.fontSizeSm,
          fontFamily: t45.fontSans,
          lineHeight: t45.lineHeightBase
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
  return /* @__PURE__ */ jsx45(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: t45.spaceMd,
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
    gap: t45.spaceSm,
    padding: `${t45.spaceSm} ${t45.spaceMd}`,
    background: t45.colorSurface,
    border: `${t45.borderWidthDefault} solid ${t45.colorBorder}`,
    borderRadius: t45.radiusMd,
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
    boxShadow: t45.shadowMd,
    zIndex: 100
  };
  const commonProps = {
    role: "toolbar",
    "aria-label": "Form actions",
    "data-state": saving ? "saving" : "idle"
  };
  if (sticky === "viewport") {
    if (typeof document === "undefined") return null;
    return createPortal4(
      /* @__PURE__ */ jsx45("div", { ...commonProps, style: viewportStyle, children }),
      document.body
    );
  }
  const style = sticky === "container" ? inlineStickyStyle : barStyle;
  return /* @__PURE__ */ jsx45("div", { ...commonProps, style, children });
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
  return /* @__PURE__ */ jsx45(
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
  const handleClick = useCallback15(
    (event) => {
      onClick?.(event);
      if (!event.defaultPrevented) onCancel?.();
    },
    [onClick, onCancel]
  );
  return /* @__PURE__ */ jsx45(Button, { ...rest, type: "button", variant, onClick: handleClick, children });
}
function FormLayoutDirtyOnChange({
  children
}) {
  const { setDirty, dirty } = useFormLayoutInternal("DirtyOnChange");
  const handleChange = useCallback15(() => {
    if (!dirty) setDirty(true);
  }, [dirty, setDirty]);
  return /* @__PURE__ */ jsx45("div", { style: { display: "contents" }, onChange: handleChange, children });
}
function FormLayoutNavigationGuard({
  message = "You have unsaved changes. Are you sure you want to leave?"
}) {
  const { dirty } = useFormLayoutInternal("NavigationGuard");
  useEffect14(() => {
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

// src/components/atoms/Grid/Grid.tsx
import { forwardRef as forwardRef35 } from "react";
import { jsx as jsx46 } from "react/jsx-runtime";
var Grid = forwardRef35(
  function Grid2({
    minColumnWidth = 300,
    columns,
    gap = "md",
    children,
    ...rest
  }, ref) {
    const minWidth = `${minColumnWidth}px`;
    const gridTemplateColumns = columns ? `repeat(${columns}, 1fr)` : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    return /* @__PURE__ */ jsx46(
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
import { forwardRef as forwardRef36 } from "react";
import { semantic as t46 } from "../../core/dist/index.js";
import { jsx as jsx47 } from "react/jsx-runtime";
var Divider = forwardRef36(
  function Divider2({
    orientation = "horizontal",
    opacity = "default",
    spacing,
    ...rest
  }, ref) {
    const resolvedOpacity = dividerOpacityMap[opacity];
    const bg = `color-mix(in srgb, ${t46.colorBorder} ${resolvedOpacity}%, transparent)`;
    const spacingValue = spacing ? spacingMap[spacing] : void 0;
    const isHorizontal = orientation === "horizontal";
    return /* @__PURE__ */ jsx47(
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
import { forwardRef as forwardRef37 } from "react";
import { jsx as jsx48 } from "react/jsx-runtime";
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
var Container = forwardRef37(
  function Container2({
    width = "prose",
    padding = "md",
    children,
    id,
    "data-testid": dataTestId
  }, ref) {
    return /* @__PURE__ */ jsx48(
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
import { forwardRef as forwardRef38, useCallback as useCallback16 } from "react";
import { semantic as t47, useInjectStyles as useInjectStyles20 } from "../../core/dist/index.js";
import { jsx as jsx49, jsxs as jsxs27 } from "react/jsx-runtime";
var STYLES_ID = "4lt7ab-tab-strip";
var STYLES_CSS = `
[data-tab-btn] {
  transition: color ${t47.transitionFast}, background ${t47.transitionFast}, border-color ${t47.transitionFast};
}
[data-tab-btn]:hover:not([aria-selected="true"]) {
  color: ${t47.colorTextSecondary};
  background: color-mix(in srgb, ${t47.colorBorder} 10%, transparent);
}
`;
var TabStrip = forwardRef38(
  function TabStrip2({
    tabs,
    activeKey,
    onChange,
    allowDeselect = false,
    size = "md",
    ...rest
  }, ref) {
    useInjectStyles20(STYLES_ID, STYLES_CSS);
    const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);
    const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
      count: tabs.length,
      activeIndex: activeIndex === -1 ? null : activeIndex
    });
    const handleClick = useCallback16(
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
    return /* @__PURE__ */ jsx49(
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
          return /* @__PURE__ */ jsxs27(
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
                gap: t47.spaceXs,
                padding: isSm ? `${t47.spaceXs} ${t47.spaceSm}` : `${t47.spaceSm} ${t47.spaceMd}`,
                border: "none",
                borderBottom: `2px solid ${isActive ? t47.colorActionPrimary : "transparent"}`,
                borderRadius: 0,
                background: isActive ? `color-mix(in srgb, ${t47.colorActionPrimary} 8%, transparent)` : "transparent",
                color: isActive ? t47.colorActionPrimary : t47.colorTextMuted,
                fontFamily: t47.fontSans,
                fontSize: isSm ? t47.fontSizeXs : t47.fontSizeSm,
                fontWeight: t47.fontWeightSemibold,
                lineHeight: t47.lineHeightTight,
                cursor: "pointer",
                whiteSpace: "nowrap"
              },
              children: [
                tab.icon && /* @__PURE__ */ jsx49(Icon, { name: tab.icon, size: isSm ? "xs" : "sm" }),
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
  AppShell,
  AppShellMain,
  AppShellRightPanel,
  AppShellRoot,
  AppShellSidebar,
  AppShellSidebarSection,
  AppShellTopBar,
  Badge,
  Button,
  Calendar2 as Calendar,
  Card,
  CardSkeleton,
  ChipPicker,
  Combobox,
  ConfirmDialog,
  Container,
  DataTablePage,
  DataTablePageEmpty,
  DataTablePageFilterBar,
  DataTablePageHeader,
  DataTablePagePagination,
  DataTablePageRoot,
  DataTablePageTable,
  DatePicker,
  DateRangePicker,
  DetailPage,
  DetailPageActions,
  DetailPageBody,
  DetailPageHeader,
  DetailPageMeta,
  DetailPageMetaItem,
  DetailPageRightPanel,
  DetailPageRoot,
  Divider,
  EmptyPage,
  EmptyPageActions,
  EmptyPageDescription,
  EmptyPageIcon,
  EmptyPageRoot,
  EmptyPageTip,
  EmptyPageTips,
  EmptyPageTitle,
  EmptyState,
  ErrorBoundary,
  Field,
  FormLayout,
  FormLayoutActions,
  FormLayoutCancelButton,
  FormLayoutDirtyOnChange,
  FormLayoutHeader,
  FormLayoutNavigationGuard,
  FormLayoutRoot,
  FormLayoutSaveButton,
  FormLayoutSection,
  FormLayoutSectionBody,
  FormLayoutSectionHeader,
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
  LinkCard,
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
  Table3 as Table,
  TableBody,
  TableCell,
  TableEmptyRow,
  TableGroupHeader,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
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
  inputShellBaseStyle,
  inputShellDisabledStyle,
  inputShellErrorStyle,
  inputShellFocusRingCSS,
  justifyMap,
  modalFooterStyle,
  modalHeadingStyle,
  modalWidthMap,
  nextFocusedDate,
  pillToggleBaseStyle,
  pillToggleSelectedStyle,
  pillToggleUnselectedStyle,
  progressBarHeightMap,
  radiusMap,
  sectionLabelStyle,
  semanticColorMap,
  shadowMap,
  spacingMap,
  tagChipStyle,
  useAppShellContext,
  useCalendarContext,
  useFocusTrap,
  useFormLayout,
  useIsInsideAppShell,
  useToast
};
