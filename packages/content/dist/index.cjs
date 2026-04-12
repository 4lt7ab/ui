var import_node_module = require("node:module");
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
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
  ThinkingCycle: () => ThinkingCycle,
  SideNote: () => SideNote,
  PullQuote: () => PullQuote,
  Prose: () => Prose,
  MarginNote: () => MarginNote,
  LinkCard: () => LinkCard,
  Epigraph: () => Epigraph,
  Container: () => Container
});
module.exports = __toCommonJS(exports_src);

// src/components/Container/Container.tsx
var import_react = require("react");
var jsx_runtime = require("react/jsx-runtime");
var widthMap = {
  prose: "680px",
  wide: "900px"
};
var Container = import_react.forwardRef(function Container2({
  width = "prose",
  maxWidth,
  padding = "1.5rem",
  children,
  style,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx_runtime.jsx("div", {
    ref,
    style: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: maxWidth ?? widthMap[width],
      marginInline: "auto",
      paddingInline: padding,
      overflow: "visible",
      ...style
    },
    ...props,
    children
  });
});
// src/components/Prose/Prose.tsx
var import_react4 = require("react");

// ../core/dist/index.js
var import_react2 = require("react");
var import_react3 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function useInjectStyles(id, css) {
  import_react2.useEffect(() => {
    let el = document.getElementById(id);
    if (el) {
      if (el.textContent !== css) {
        el.textContent = css;
      }
      return;
    }
    el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
var ThemeContext = import_react3.createContext(null);

// src/components/Prose/Prose.tsx
var jsx_runtime2 = require("react/jsx-runtime");
var PROSE_STYLES_ID = "alttab-prose-styles";
var proseCSS = `
  /* ── Typography ── */
  .alttab-prose {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: 1.35em;
    line-height: 1.45;
    letter-spacing: -0.01em;
    margin-bottom: 1.5rem;
  }

  /* Paragraph spacing */
  .alttab-prose p + p {
    margin-top: 1em;
  }

  /* ── Headings ── */
  .alttab-prose h1 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: clamp(2rem, 5vw, 2.75rem);
    color: var(--color-text);
    margin-bottom: 0.75rem;
  }

  .alttab-prose h2 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: clamp(1.4rem, 3vw, 1.875rem);
    color: var(--color-text);
    margin-top: 3.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    padding-top: 1.5rem;
  }

  /* Overline rule on h2 */
  .alttab-prose h2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 1px;
    background: var(--color-border);
  }

  .alttab-prose h3 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: 1.25rem;
    color: var(--color-text);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  /* ── Section break — three-dot ornament ── */
  .alttab-prose hr {
    border: none;
    text-align: center;
    margin-block: 3.5rem;
  }

  .alttab-prose hr::after {
    content: '\\00B7  \\00B7  \\00B7';
    color: var(--color-text-muted);
    font-size: 1.25rem;
    letter-spacing: 0.5em;
  }

  /* ── Links ── */
  .alttab-prose a {
    color: var(--color-text-link);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.15s ease;
  }

  .alttab-prose a:hover {
    text-decoration-color: var(--color-text-link);
  }

  /* ── Inline code ── */
  .alttab-prose code {
    font-size: 0.875em;
    font-family: var(--font-mono);
    background: var(--color-border);
    padding: 0.15em 0.35em;
    border-radius: 3px;
  }

  .alttab-prose pre code {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.875rem;
  }

  /* ── Blockquotes ── */
  .alttab-prose blockquote {
    border-left: 3px solid var(--color-action-primary);
    padding-left: 1.5rem;
    margin-block: 1.5rem;
    margin-inline: 0;
    color: var(--color-text-muted);
  }

  .alttab-prose blockquote p + p {
    margin-top: 0.75em;
  }

  .alttab-prose blockquote footer,
  .alttab-prose blockquote cite {
    display: block;
    margin-top: 0.5em;
    font-size: 0.875rem;
    font-style: normal;
    color: var(--color-text-muted);
  }

  /* ── Pull quotes ── */
  .alttab-prose [data-pull-quote] {
    border-left: none;
    border-block: 1px solid var(--color-border);
    padding-left: 0;
    padding-block: 1.5rem;
    margin-block: 2.25rem;
    margin-inline: 0;
    text-align: center;
    color: var(--color-text);
  }

  .alttab-prose [data-pull-quote] p {
    font-family: var(--font-serif);
    font-size: 1.375rem;
    line-height: 1.45;
    font-style: italic;
    margin: 0;
  }

  /* ── Figures ── */
  .alttab-prose figure {
    margin-block: 2.25rem;
    margin-inline: 0;
  }

  .alttab-prose figure img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .alttab-prose figcaption {
    margin-top: 0.75rem;
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    text-align: center;
    line-height: 1.5;
  }

  /* Wide figure — bleeds past container */
  .alttab-prose .figure--wide {
    margin-inline: -2.25rem;
  }

  @media (max-width: 680px) {
    .alttab-prose .figure--wide {
      margin-inline: -1.5rem;
    }
  }

  /* ── Margin notes (left) ── */
  .alttab-prose [data-margin-note] {
    display: block;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--color-text-muted);
    margin-block: 0.75rem;
    padding-left: 0.75rem;
    border-left: 2px solid var(--color-border);
  }

  /* ── Side notes (right) ── */
  .alttab-prose [data-side-note] {
    display: block;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--color-text-muted);
    margin-block: 0.75rem;
    padding-right: 0.75rem;
    border-right: 2px solid var(--color-border);
    text-align: right;
  }

  @media (min-width: 1100px) {
    .alttab-prose {
      position: relative;
      overflow: visible;
    }

    .alttab-prose [data-margin-note] {
      position: absolute;
      left: -240px;
      width: 200px;
      margin-block: 0;
      padding-left: 0;
      border-left: none;
    }

    .alttab-prose [data-side-note] {
      position: absolute;
      right: -240px;
      width: 200px;
      margin-block: 0;
      padding-right: 0;
      border-right: none;
      text-align: left;
    }
  }

  /* ── Lists ── */
  .alttab-prose ul,
  .alttab-prose ol {
    padding-left: 1.5rem;
    margin-block: 1em;
  }

  .alttab-prose li + li {
    margin-top: 0.5em;
  }

  /* ── Strong ── */
  .alttab-prose strong {
    font-weight: 600;
  }
`;
var Prose = import_react4.forwardRef(function Prose2({
  children,
  style,
  ...props
}, ref) {
  useInjectStyles(PROSE_STYLES_ID, proseCSS);
  return /* @__PURE__ */ jsx_runtime2.jsx("div", {
    ref,
    className: "alttab-prose",
    style,
    ...props,
    children
  });
});
// src/components/PullQuote/PullQuote.tsx
var import_react5 = require("react");
var jsx_runtime3 = require("react/jsx-runtime");
var PullQuote = import_react5.forwardRef(function PullQuote2({ children }, ref) {
  return /* @__PURE__ */ jsx_runtime3.jsx("blockquote", {
    ref,
    "data-pull-quote": "",
    children: /* @__PURE__ */ jsx_runtime3.jsx("p", {
      children
    })
  });
});
// src/components/MarginNote/MarginNote.tsx
var import_react6 = require("react");
var jsx_runtime4 = require("react/jsx-runtime");
var MarginNote = import_react6.forwardRef(function MarginNote2({ children }, ref) {
  return /* @__PURE__ */ jsx_runtime4.jsx("small", {
    ref,
    "data-margin-note": "",
    children
  });
});
// src/components/SideNote/SideNote.tsx
var import_react7 = require("react");
var jsx_runtime5 = require("react/jsx-runtime");
var SideNote = import_react7.forwardRef(function SideNote2({ children }, ref) {
  return /* @__PURE__ */ jsx_runtime5.jsx("small", {
    ref,
    "data-side-note": "",
    children
  });
});
// src/components/Epigraph/Epigraph.tsx
var import_react8 = require("react");
var jsx_runtime6 = require("react/jsx-runtime");
var STYLES_ID = "alttab-epigraph";
var epigraphCSS = `
  .alttab-epigraph {
    border: none;
    border-block: 1px solid var(--color-border);
    padding-block: 3.5rem;
    margin-bottom: 2.25rem;
    margin-inline: 0;
    text-align: center;
  }

  .alttab-epigraph p {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    line-height: 1.4;
    font-style: italic;
    color: var(--color-text-muted);
    letter-spacing: -0.01em;
    margin: 0;
  }

  .alttab-epigraph footer,
  .alttab-epigraph cite {
    display: block;
    margin-top: 0.5em;
    font-size: 0.875rem;
    font-style: normal;
    color: var(--color-text-muted);
  }
`;
var Epigraph = import_react8.forwardRef(function Epigraph2({ children, cite }, ref) {
  useInjectStyles(STYLES_ID, epigraphCSS);
  return /* @__PURE__ */ jsx_runtime6.jsxs("blockquote", {
    ref,
    className: "alttab-epigraph",
    children: [
      /* @__PURE__ */ jsx_runtime6.jsx("p", {
        children
      }),
      cite && /* @__PURE__ */ jsx_runtime6.jsx("footer", {
        children: cite
      })
    ]
  });
});
// src/components/LinkCard/LinkCard.tsx
var import_react9 = require("react");
var jsx_runtime7 = require("react/jsx-runtime");
var STYLES_ID2 = "alttab-link-card";
var linkCardCSS = `
  .alttab-link-card {
    display: block;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }

  .alttab-link-card:hover {
    border-color: var(--color-text-link);
    transform: translateY(-2px);
  }

  .alttab-link-card__title {
    display: block;
    font-family: var(--font-serif);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.25rem;
  }

  .alttab-link-card__desc {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
`;
var LinkCard = import_react9.forwardRef(function LinkCard2({
  title,
  description,
  external,
  children,
  ...props
}, ref) {
  useInjectStyles(STYLES_ID2, linkCardCSS);
  return /* @__PURE__ */ jsx_runtime7.jsxs("a", {
    ref,
    className: "alttab-link-card",
    ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
    ...props,
    children: [
      /* @__PURE__ */ jsx_runtime7.jsx("span", {
        className: "alttab-link-card__title",
        children: title
      }),
      description && /* @__PURE__ */ jsx_runtime7.jsx("span", {
        className: "alttab-link-card__desc",
        children: description
      }),
      children
    ]
  });
});
// src/components/ThinkingCycle/ThinkingCycle.tsx
var import_react10 = require("react");
var jsx_runtime8 = require("react/jsx-runtime");
var SCRAMBLE_CHARS = "abcdefghijklmnopqrstuvwxyz!?*~+#";
var STYLES_ID3 = "alttab-thinking-cycle";
var thinkingCSS = `
  .alttab-thinking {
    display: inline-block;
    color: var(--color-text-link);
    font-style: italic;
    position: relative;
    vertical-align: bottom;
    transition: width 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 0.15em;
  }

  .alttab-thinking .alttab-char {
    display: inline-block;
    animation: alttab-char-arrive 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes alttab-char-arrive {
    0%   { opacity: 0; transform: translateY(0.3em) scale(0.7) rotate(-4deg); filter: blur(2px); }
    60%  { opacity: 1; transform: translateY(-0.08em) scale(1.05) rotate(1deg); filter: blur(0); }
    100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); filter: blur(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .alttab-thinking .alttab-char {
      animation: none;
    }
  }
`;
function randomChar() {
  return SCRAMBLE_CHARS[Math.random() * SCRAMBLE_CHARS.length | 0];
}
var ThinkingCycle = import_react10.forwardRef(function ThinkingCycle2({
  words,
  holdMs = 2000,
  scrambleTicks = 4,
  tickMs = 50,
  staggerMs = 30
}, ref) {
  useInjectStyles(STYLES_ID3, thinkingCSS);
  const elRef = import_react10.useRef(null);
  import_react10.useImperativeHandle(ref, () => elRef.current);
  const indexRef = import_react10.useRef(0);
  const widthsRef = import_react10.useRef([]);
  const timerRef = import_react10.useRef(null);
  const intervalRef = import_react10.useRef(null);
  const measure = import_react10.useCallback(() => {
    const el = elRef.current;
    if (!el)
      return;
    const saved = el.innerHTML;
    el.style.width = "";
    const measured = [];
    for (const w of words) {
      el.textContent = w;
      measured.push(Math.ceil(el.getBoundingClientRect().width));
    }
    el.innerHTML = saved || "";
    widthsRef.current = measured;
    el.style.width = measured[indexRef.current] + "px";
  }, [words]);
  const setWord = import_react10.useCallback((word) => {
    const el = elRef.current;
    if (!el)
      return;
    el.innerHTML = "";
    for (let i = 0;i < word.length; i++) {
      const span = document.createElement("span");
      span.className = "alttab-char";
      span.textContent = word[i];
      span.style.animationDelay = `${i * staggerMs}ms`;
      el.appendChild(span);
    }
  }, [staggerMs]);
  const scrambleTo = import_react10.useCallback((target, done) => {
    const el = elRef.current;
    if (!el)
      return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.textContent = target;
      done();
      return;
    }
    el.innerHTML = "";
    const chars = [];
    for (let i = 0;i < target.length; i++) {
      const span = document.createElement("span");
      span.className = "alttab-char";
      span.style.animationDelay = `${i * staggerMs}ms`;
      span.textContent = target[i] === " " ? " " : randomChar();
      el.appendChild(span);
      chars.push({ span, final: target[i], ticks: 0, maxTicks: scrambleTicks + i * 2 });
    }
    intervalRef.current = setInterval(() => {
      let allDone = true;
      for (const c of chars) {
        if (c.ticks >= c.maxTicks) {
          c.span.textContent = c.final;
        } else {
          allDone = false;
          c.ticks++;
          c.span.textContent = c.final === " " ? " " : randomChar();
        }
      }
      if (allDone) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        done();
      }
    }, tickMs);
  }, [scrambleTicks, tickMs, staggerMs]);
  import_react10.useEffect(() => {
    if (words.length < 2)
      return;
    measure();
    document.fonts.ready.then(measure);
    const onFonts = () => measure();
    document.fonts.addEventListener("loadingdone", onFonts);
    const observer = new MutationObserver(() => requestAnimationFrame(measure));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    indexRef.current = 0;
    setWord(words[0]);
    function cycle() {
      indexRef.current = (indexRef.current + 1) % words.length;
      const el = elRef.current;
      if (el)
        el.style.width = widthsRef.current[indexRef.current] + "px";
      scrambleTo(words[indexRef.current], () => {
        timerRef.current = setTimeout(cycle, holdMs);
      });
    }
    timerRef.current = setTimeout(cycle, holdMs);
    return () => {
      if (timerRef.current)
        clearTimeout(timerRef.current);
      if (intervalRef.current)
        clearInterval(intervalRef.current);
      document.fonts.removeEventListener("loadingdone", onFonts);
      observer.disconnect();
    };
  }, [words, holdMs, measure, setWord, scrambleTo]);
  return /* @__PURE__ */ jsx_runtime8.jsx("span", {
    ref: elRef,
    className: "alttab-thinking"
  });
});
