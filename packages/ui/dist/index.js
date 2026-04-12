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
import { forwardRef } from "react";
import { useTheme } from "../../core/dist/index.js";
import { useInjectStyles } from "../../core/dist/index.js";
import { jsx, jsxs } from "react/jsx-runtime";
var STYLES_ID = "alttab-theme-picker";
var pickerCSS = `
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
var ThemePicker = forwardRef(function ThemePicker2({ descriptions = {} }, ref) {
  useInjectStyles(STYLES_ID, pickerCSS);
  const { resolved, themes, setTheme } = useTheme();
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: "alttab-theme-picker",
    children: Array.from(themes.values()).map((def) => {
      const isActive = resolved === def.name;
      return /* @__PURE__ */ jsxs("button", {
        className: `alttab-theme-card${isActive ? " alttab-theme-card--active" : ""}`,
        onClick: () => setTheme(def.name),
        children: [
          /* @__PURE__ */ jsx("span", {
            className: "alttab-theme-card__name",
            children: def.label
          }),
          descriptions[def.name] && /* @__PURE__ */ jsx("span", {
            className: "alttab-theme-card__desc",
            children: descriptions[def.name]
          })
        ]
      }, def.name);
    })
  });
});
// src/icons/icons.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M18 6L6 18M6 6l12 12"
    })
  });
}
function IconChevronRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M9 18l6-6-6-6"
    })
  });
}
function IconChevronDown({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M6 9l6 6 6-6"
    })
  });
}
function IconChevronLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M15 18l-6-6 6-6"
    })
  });
}
function IconChevronUp({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M18 15l-6-6-6 6"
    })
  });
}
function IconCheck({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M20 6L9 17l-5-5"
    })
  });
}
function IconCheckCircle({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("path", {
        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M22 4L12 14.01l-3-3"
      })
    ]
  });
}
function IconWarning({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("path", {
        d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      }),
      /* @__PURE__ */ jsx2("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }),
      /* @__PURE__ */ jsx2("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      })
    ]
  });
}
function IconError({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M15 9l-6 6M9 9l6 6"
      })
    ]
  });
}
function IconInfo({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      /* @__PURE__ */ jsx2("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }),
      /* @__PURE__ */ jsx2("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      })
    ]
  });
}
function IconSearch({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M21 21l-4.35-4.35"
      })
    ]
  });
}
function IconTrash({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
    })
  });
}
function IconSettings({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      })
    ]
  });
}
function IconPlus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M12 5v14M5 12h14"
    })
  });
}
function IconMinus({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M5 12h14"
    })
  });
}
function IconEdit({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("path", {
        d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
      })
    ]
  });
}
function IconArrowLeft({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M19 12H5M12 19l-7-7 7-7"
    })
  });
}
function IconArrowRight({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M5 12h14M12 5l7 7-7 7"
    })
  });
}
function IconMenu({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M3 12h18M3 6h18M3 18h18"
    })
  });
}
function IconEye({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("path", {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }),
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ]
  });
}
function IconEyeOff({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("path", {
        d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M1 1l22 22"
      })
    ]
  });
}
function IconCopy({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
      })
    ]
  });
}
function IconExternalLink({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
    })
  });
}
function IconMoreVertical({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsxs2("svg", {
    ...svgProps(size, style),
    children: [
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      /* @__PURE__ */ jsx2("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ]
  });
}
function IconFilter({ size = 24, style } = {}) {
  return /* @__PURE__ */ jsx2("svg", {
    ...svgProps(size, style),
    children: /* @__PURE__ */ jsx2("path", {
      d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
    })
  });
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
// src/components/Button/Button.tsx
import { forwardRef as forwardRef2 } from "react";
import { semantic as t } from "../../core/dist/index.js";
import { jsx as jsx3 } from "react/jsx-runtime";
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
var Button = forwardRef2(function Button2({
  variant = "primary",
  size = "md",
  children,
  style,
  disabled,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx3("button", {
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
  });
});
// src/components/Stack/Stack.tsx
import { forwardRef as forwardRef3 } from "react";
import { semantic as t2 } from "../../core/dist/index.js";
import { jsx as jsx4 } from "react/jsx-runtime";
var gapMap = {
  xs: t2.spaceXs,
  sm: t2.spaceSm,
  md: t2.spaceMd,
  lg: t2.spaceLg,
  xl: t2.spaceXl,
  "2xl": t2.space2xl
};
var Stack = forwardRef3(function Stack2({
  direction = "vertical",
  gap = "md",
  align,
  justify,
  wrap,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx4("div", {
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
  });
});
// src/components/Card/Card.tsx
import { forwardRef as forwardRef4 } from "react";
import { semantic as t3 } from "../../core/dist/index.js";
import { jsx as jsx5 } from "react/jsx-runtime";
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
var Card = forwardRef4(function Card2({
  variant = "default",
  padding = "lg",
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx5("div", {
    ref,
    style: {
      borderRadius: t3.radiusLg,
      padding: paddingMap[padding],
      ...variantStyles2[variant],
      ...style
    },
    ...props,
    children
  });
});
// src/components/Field/Field.tsx
import { semantic as t4 } from "../../core/dist/index.js";
import { forwardRef as forwardRef5, useId, isValidElement, cloneElement } from "react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
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
var Field = forwardRef5(function Field2({
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
  return /* @__PURE__ */ jsxs3("div", {
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
      /* @__PURE__ */ jsxs3("label", {
        htmlFor,
        style: labelStyle,
        children: [
          label,
          required && /* @__PURE__ */ jsx6("span", {
            style: requiredStyle,
            "aria-hidden": "true",
            children: "*"
          })
        ]
      }),
      enhancedChildren,
      error && /* @__PURE__ */ jsx6("p", {
        id: errorId,
        role: "alert",
        style: errorStyle,
        children: error
      }),
      !error && help && /* @__PURE__ */ jsx6("p", {
        id: helpId,
        style: helpStyle,
        children: help
      })
    ]
  });
});
// src/components/Input/Input.tsx
import { forwardRef as forwardRef6 } from "react";
import { semantic as t5 } from "../../core/dist/index.js";
import { jsx as jsx7 } from "react/jsx-runtime";
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
var Input = forwardRef6(function Input2({
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx7("input", {
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
  });
});
// src/components/Textarea/Textarea.tsx
import { forwardRef as forwardRef7 } from "react";
import { semantic as t6 } from "../../core/dist/index.js";
import { jsx as jsx8 } from "react/jsx-runtime";
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
var Textarea = forwardRef7(function Textarea2({
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx8("textarea", {
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
  });
});
// src/components/Select/Select.tsx
import { forwardRef as forwardRef8 } from "react";
import { semantic as t7 } from "../../core/dist/index.js";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
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
var Select = forwardRef8(function Select2({
  options,
  children,
  placeholder,
  hasError,
  disabled,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs4("div", {
    style: wrapperStyle,
    children: [
      /* @__PURE__ */ jsxs4("select", {
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
          placeholder && /* @__PURE__ */ jsx9("option", {
            value: "",
            disabled: true,
            children: placeholder
          }),
          children ?? options?.map((opt) => /* @__PURE__ */ jsx9("option", {
            value: opt.value,
            disabled: opt.disabled,
            children: opt.label
          }, opt.value))
        ]
      }),
      /* @__PURE__ */ jsx9("span", {
        "aria-hidden": true,
        style: chevronStyle,
        children: /* @__PURE__ */ jsx9("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx9("path", {
            d: "M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 1 1 1.06 1.06L6 9.31 2.22 5.53a.75.75 0 0 1 0-1.06z",
            fill: "currentColor"
          })
        })
      })
    ]
  });
});
// src/components/Badge/Badge.tsx
import { forwardRef as forwardRef9 } from "react";
import { semantic as t8 } from "../../core/dist/index.js";
import { jsx as jsx10 } from "react/jsx-runtime";
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
var Badge = forwardRef9(function Badge2({
  children,
  variant = "default",
  style,
  ...rest
}, ref) {
  return /* @__PURE__ */ jsx10("span", {
    ref,
    ...rest,
    style: {
      ...baseStyles2,
      ...variantStyles3[variant],
      ...style
    },
    children
  });
});
// src/components/Icon/Icon.tsx
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Icon = forwardRef10(function Icon2({ name, size = 24, style, "aria-label": ariaLabel, ...props }, ref) {
  const IconComponent = iconRegistry[name];
  const isDecorative = !ariaLabel;
  return /* @__PURE__ */ jsx11("span", {
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
    children: /* @__PURE__ */ jsx11(IconComponent, {
      size
    })
  });
});
// src/components/IconButton/IconButton.tsx
import { forwardRef as forwardRef11 } from "react";
import { semantic as t9 } from "../../core/dist/index.js";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var IconButton = forwardRef11(function IconButton2({
  icon,
  size = 24,
  badge,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs5("button", {
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
      /* @__PURE__ */ jsx12(Icon, {
        name: icon,
        size
      }),
      badge && /* @__PURE__ */ jsx12("span", {
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
      })
    ]
  });
});
// src/components/Overlay/Overlay.tsx
import { forwardRef as forwardRef12 } from "react";
import { semantic as t10 } from "../../core/dist/index.js";
import { jsx as jsx13 } from "react/jsx-runtime";
var Overlay = forwardRef12(function Overlay2({
  onClick,
  zIndex = 100,
  style
}, ref) {
  return /* @__PURE__ */ jsx13("div", {
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
  });
});
// src/components/Skeleton/Skeleton.tsx
import { forwardRef as forwardRef13 } from "react";
import { semantic as t11 } from "../../core/dist/index.js";
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var Skeleton = forwardRef13(function Skeleton2({
  width = "100%",
  height = 16,
  borderRadius = t11.radiusMd,
  style
}, ref) {
  return /* @__PURE__ */ jsx14("div", {
    ref,
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius,
      background: t11.colorSurfaceRaised,
      ...style
    }
  });
});
var CardSkeleton = forwardRef13(function CardSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsxs6("div", {
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
      /* @__PURE__ */ jsx14(Skeleton, {
        width: "60%",
        height: 20
      }),
      /* @__PURE__ */ jsx14(Skeleton, {
        width: "100%",
        height: 14
      }),
      /* @__PURE__ */ jsx14(Skeleton, {
        width: "80%",
        height: 14
      })
    ]
  });
});
var RowSkeleton = forwardRef13(function RowSkeleton2({ style }, ref) {
  return /* @__PURE__ */ jsxs6("div", {
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
      /* @__PURE__ */ jsx14(Skeleton, {
        width: 32,
        height: 32,
        borderRadius: t11.radiusFull
      }),
      /* @__PURE__ */ jsxs6("div", {
        style: { flex: 1, display: "flex", flexDirection: "column", gap: t11.spaceXs },
        children: [
          /* @__PURE__ */ jsx14(Skeleton, {
            width: "40%",
            height: 14
          }),
          /* @__PURE__ */ jsx14(Skeleton, {
            width: "70%",
            height: 12
          })
        ]
      })
    ]
  });
});
// src/components/ProgressBar/ProgressBar.tsx
import { forwardRef as forwardRef14 } from "react";
import { semantic as t12 } from "../../core/dist/index.js";
import { jsx as jsx15 } from "react/jsx-runtime";
var ProgressBar = forwardRef14(function ProgressBar2({
  segments,
  height = 6,
  "aria-label": ariaLabel,
  style
}, ref) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  return /* @__PURE__ */ jsx15("div", {
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
      return /* @__PURE__ */ jsx15("div", {
        title: segment.label ? `${segment.label}: ${segment.value}` : String(segment.value),
        style: {
          width: `${pct}%`,
          height: "100%",
          background: segment.color
        }
      }, i);
    })
  });
});
// src/components/EmptyState/EmptyState.tsx
import { forwardRef as forwardRef15 } from "react";
import { semantic as t13 } from "../../core/dist/index.js";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var EmptyState = forwardRef15(function EmptyState2({
  icon,
  message,
  variant = "plain",
  style,
  children,
  action
}, ref) {
  const content = /* @__PURE__ */ jsxs7(Stack, {
    align: "center",
    gap: "sm",
    style: { padding: t13.spaceXl, ...style },
    children: [
      /* @__PURE__ */ jsx16(Icon, {
        name: icon,
        size: 32,
        style: { color: t13.colorTextMuted }
      }),
      /* @__PURE__ */ jsx16("span", {
        style: {
          color: t13.colorTextSecondary,
          fontSize: t13.fontSizeSm,
          textAlign: "center",
          fontFamily: t13.fontSans
        },
        children: message
      }),
      children,
      action && /* @__PURE__ */ jsx16("div", {
        style: { marginTop: t13.spaceSm },
        children: action
      })
    ]
  });
  if (variant === "card") {
    return /* @__PURE__ */ jsx16(Card, {
      ref,
      variant: "flat",
      children: content
    });
  }
  return /* @__PURE__ */ jsx16("div", {
    ref,
    children: content
  });
});
// src/components/Pagination/Pagination.tsx
import { forwardRef as forwardRef16 } from "react";
import { semantic as t14 } from "../../core/dist/index.js";
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs8("div", {
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
      /* @__PURE__ */ jsx17(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page <= 1,
        onClick: () => onPageChange(page - 1),
        children: resolvedLabels.previous
      }),
      /* @__PURE__ */ jsxs8("span", {
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
      }),
      /* @__PURE__ */ jsx17(Button, {
        variant: "ghost",
        size: "sm",
        disabled: page >= totalPages,
        onClick: () => onPageChange(page + 1),
        children: resolvedLabels.next
      })
    ]
  });
});
// src/components/PageHeader/PageHeader.tsx
import { createElement, forwardRef as forwardRef17 } from "react";
import { semantic as t15 } from "../../core/dist/index.js";
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs9("div", {
    ref,
    className,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      ...style
    },
    children: [
      /* @__PURE__ */ jsxs9("div", {
        children: [
          heading,
          subtitle && /* @__PURE__ */ jsx18("span", {
            style: {
              color: t15.colorTextMuted,
              fontSize: t15.fontSizeSm
            },
            children: subtitle
          })
        ]
      }),
      trailing && /* @__PURE__ */ jsx18("div", {
        children: trailing
      })
    ]
  });
});
// src/components/TagChip/TagChip.tsx
import { forwardRef as forwardRef18 } from "react";
import { semantic as t16 } from "../../core/dist/index.js";
import { jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
var TagChip = forwardRef18(function TagChip2({
  name,
  onRemove,
  style
}, ref) {
  return /* @__PURE__ */ jsxs10("span", {
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
      onRemove && /* @__PURE__ */ jsx19(IconButton, {
        icon: "close",
        size: 12,
        onClick: onRemove,
        "aria-label": `Remove ${name}`,
        style: { width: 18, height: 18, color: t16.colorActionPrimary }
      })
    ]
  });
});
// src/components/ExpandableCard/ExpandableCard.tsx
import { semantic as t17 } from "../../core/dist/index.js";
import { forwardRef as forwardRef19, useState, useId as useId2 } from "react";
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
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
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const panelId = useId2();
  const handleToggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  };
  return /* @__PURE__ */ jsxs11(Card, {
    ref,
    variant,
    padding: "xs",
    style,
    children: [
      /* @__PURE__ */ jsxs11("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
        children: [
          /* @__PURE__ */ jsxs11("button", {
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
              /* @__PURE__ */ jsx20("span", {
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
                children: /* @__PURE__ */ jsx20(IconChevronRight, {
                  size: 20
                })
              }),
              /* @__PURE__ */ jsx20("span", {
                style: {
                  fontWeight: t17.fontWeightSemibold,
                  fontFamily: t17.fontSans,
                  color: t17.colorText,
                  fontSize: t17.fontSizeSm
                },
                children: title
              })
            ]
          }),
          headerAction && /* @__PURE__ */ jsx20("div", {
            style: { padding: `0 ${t17.spaceMd}` },
            children: headerAction
          })
        ]
      }),
      /* @__PURE__ */ jsx20("div", {
        id: panelId,
        role: "region",
        style: {
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 200ms ease"
        },
        children: /* @__PURE__ */ jsx20("div", {
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsx20("div", {
            style: { padding: `${t17.spaceSm} ${t17.spaceMd} ${t17.spaceMd}` },
            children
          })
        })
      })
    ]
  });
});
// src/components/ModalShell/ModalShell.tsx
import { forwardRef as forwardRef20, useEffect as useEffect2, useId as useId3, useRef } from "react";
import { createPortal } from "react-dom";
import { semantic as t18 } from "../../core/dist/index.js";
import { jsx as jsx21, jsxs as jsxs12, Fragment } from "react/jsx-runtime";
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
  const internalRef = useRef(null);
  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  useFocusTrap(internalRef);
  useEffect2(() => {
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
  useEffect2(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return createPortal(/* @__PURE__ */ jsxs12(Fragment, {
    children: [
      /* @__PURE__ */ jsx21(Overlay, {
        onClick: onClose,
        zIndex
      }),
      /* @__PURE__ */ jsx21("div", {
        style: {
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: zIndex + 1,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsx21("div", {
          ref: setRefs,
          role,
          "aria-modal": "true",
          "aria-labelledby": ariaLabel ? undefined : resolvedLabelId,
          "aria-label": ariaLabel,
          tabIndex: -1,
          style: {
            background: t18.colorSurface,
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
        })
      })
    ]
  }), document.body);
});
// src/components/ConfirmDialog/ConfirmDialog.tsx
import { forwardRef as forwardRef21, useId as useId4, useState as useState2 } from "react";
import { semantic as t19 } from "../../core/dist/index.js";
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";
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
  const [loading, setLoading] = useState2(false);
  const titleId = useId4();
  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs13(ModalShell, {
    ref,
    onClose: onCancel,
    role: "alertdialog",
    titleId,
    children: [
      /* @__PURE__ */ jsx22("h2", {
        id: titleId,
        style: {
          margin: 0,
          fontWeight: t19.fontWeightSemibold,
          fontFamily: t19.fontSans,
          color: t19.colorText,
          fontSize: t19.fontSizeLg
        },
        children: title
      }),
      /* @__PURE__ */ jsx22("p", {
        style: {
          margin: `${t19.spaceSm} 0 ${children ? "0" : t19.spaceLg}`,
          color: t19.colorTextMuted,
          fontSize: t19.fontSizeSm,
          fontFamily: t19.fontSans
        },
        children: message
      }),
      children && /* @__PURE__ */ jsx22("div", {
        style: { margin: `${t19.spaceSm} 0 ${t19.spaceLg}` },
        children
      }),
      /* @__PURE__ */ jsxs13("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          gap: t19.spaceSm
        },
        children: [
          /* @__PURE__ */ jsx22(Button, {
            variant: "ghost",
            onClick: onCancel,
            disabled: loading,
            autoFocus: true,
            children: "Cancel"
          }),
          /* @__PURE__ */ jsx22(Button, {
            variant: variantButtonMap[variant],
            onClick: handleConfirm,
            disabled: loading,
            children: loading ? "Loading..." : confirmLabel
          })
        ]
      })
    ]
  });
});
// src/components/StatusDot/StatusDot.tsx
import { forwardRef as forwardRef22 } from "react";
import { semantic as t20 } from "../../core/dist/index.js";
import { jsx as jsx23 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx23("span", {
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
  });
});
// src/components/ThemeSurface/ThemeSurface.tsx
import { forwardRef as forwardRef23, useEffect as useEffect3, useRef as useRef2 } from "react";
import { semantic as t21 } from "../../core/dist/index.js";
import { useTheme as useTheme2 } from "../../core/dist/index.js";
import { jsx as jsx24, Fragment as Fragment2 } from "react/jsx-runtime";
var ThemeSurface = forwardRef23(function ThemeSurface2({
  children,
  global = false,
  style
}, ref) {
  const { resolved, themes } = useTheme2();
  const prevBodyBgRef = useRef2("");
  useEffect3(() => {
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
    return /* @__PURE__ */ jsx24(Fragment2, {
      children
    });
  }
  return /* @__PURE__ */ jsx24("div", {
    ref,
    style: {
      background: t21.colorSurfacePage,
      ...style
    },
    children
  });
});
// src/components/Table/Table.tsx
import { forwardRef as forwardRef24 } from "react";
import { semantic as t22 } from "../../core/dist/index.js";
import { useInjectStyles as useInjectStyles2 } from "../../core/dist/index.js";
import { jsx as jsx25 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx25("div", {
    ref,
    style: {
      overflowX: "auto",
      ...wrapperVariants[variant],
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsx25("table", {
      "data-table-density": density,
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: t22.fontSizeSm,
        fontFamily: t22.fontSans,
        color: t22.colorText
      },
      children
    })
  });
});
var TableHeader = forwardRef24(function TableHeader2({ children, style, ...props }, ref) {
  return /* @__PURE__ */ jsx25("thead", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsx25("tr", {
      children
    })
  });
});
var TableHeaderCell = forwardRef24(function TableHeaderCell2({
  align = "left",
  width,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx25("th", {
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
  });
});
var TableBody = forwardRef24(function TableBody2({ children, ...props }, ref) {
  return /* @__PURE__ */ jsx25("tbody", {
    ref,
    ...props,
    children
  });
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
  return /* @__PURE__ */ jsx25("tr", {
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
  });
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
  return /* @__PURE__ */ jsx25("td", {
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
  });
});
var TableGroupHeader = forwardRef24(function TableGroupHeader2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx25("tr", {
    ref,
    style: { cursor: "default", ...style },
    ...props,
    children: /* @__PURE__ */ jsx25("td", {
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
    })
  });
});
var TableEmptyRow = forwardRef24(function TableEmptyRow2({
  colSpan,
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx25("tr", {
    ref,
    style,
    ...props,
    children: /* @__PURE__ */ jsx25("td", {
      colSpan,
      style: {
        padding: `${t22.spaceXl} ${t22.spaceMd}`,
        textAlign: "center",
        color: t22.colorTextMuted,
        fontSize: t22.fontSizeSm
      },
      children
    })
  });
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
  ConfirmDialog,
  CardSkeleton,
  Card,
  Button,
  Badge
};
