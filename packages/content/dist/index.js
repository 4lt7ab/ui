var _="680px",S="900px",m="1100px",b="1.0625rem",k="clamp(2rem, 5vw, 2.75rem)",j="1.35em",rJ="0.875rem",tJ="1.25rem",u="5%",nJ="8%",sJ="14%";import{forwardRef as s}from"react";import{jsx as JJ}from"react/jsx-runtime";var e={prose:_,wide:S},$Q=s(function({width:Q="prose",maxWidth:X,padding:z="1.5rem",children:V,style:Z,...q},U){return JJ("div",{ref:U,style:{boxSizing:"border-box",width:"100%",maxWidth:X??e[Q],marginInline:"auto",paddingInline:z,overflow:"visible",...Z},...q,children:V})});import{forwardRef as QJ}from"react";import{useInjectStyles as $J}from "../../core/dist/index.js";import{jsx as VJ}from"react/jsx-runtime";var XJ="alttab-prose-styles",zJ=`
  /* ── Typography ── */
  .alttab-prose {
    font-size: ${b};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: ${j};
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
    font-size: ${k};
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

  /* ── Code blocks ── */
  .alttab-prose pre {
    background: var(--color-surface-page);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 1rem 1.25rem;
    margin-block: 1.5rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .alttab-prose pre code {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.8rem;
    line-height: 1.55;
    letter-spacing: -0.01em;
    color: var(--color-text-secondary);
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

  @media (max-width: ${_}) {
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

  @media (min-width: ${m}) {
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
    margin-block: 0.6em;
  }

  .alttab-prose li + li {
    margin-top: 0.15em;
  }

  /* ── Tables ── */
  .alttab-prose table {
    width: 100%;
    border-collapse: collapse;
    margin-block: 1.5rem;
    font-size: 0.9375rem;
  }

  .alttab-prose th {
    text-align: left;
    font-weight: 600;
    padding: 0.5rem 0.75rem;
    border-bottom: 2px solid var(--color-border);
    color: var(--color-text);
  }

  .alttab-prose td {
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-secondary);
  }

  .alttab-prose tr:last-child td {
    border-bottom: none;
  }

  /* ── Strong ── */
  .alttab-prose strong {
    font-weight: 600;
  }
`,WQ=QJ(function({children:Q,style:X,...z},V){return $J(XJ,zJ),VJ("div",{ref:V,className:"alttab-prose",style:X,...z,children:Q})});import{useState as f,useCallback as x,useRef as h,Children as y,cloneElement as E,isValidElement as w}from"react";import UJ from"react-markdown";import ZJ from"remark-gfm";import{semantic as L,useInjectStyles as o}from "../../core/dist/index.js";import{jsx as $,jsxs as G}from"react/jsx-runtime";function C(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(C).join("");if(J&&typeof J==="object"&&"props"in J)return C(J.props.children);return""}function qJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var a={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function c(){return G("svg",{viewBox:"0 0 24 24",...a,children:[$("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function d(){return $("svg",{viewBox:"0 0 24 24",...a,children:$("path",{d:"M20 6L9 17l-5-5"})})}function FJ(){return G("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var O={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function WJ(){return G("svg",{viewBox:"0 0 24 24",...O,children:[$("circle",{cx:"12",cy:"12",r:"10"}),$("path",{d:"M12 16v-4"}),$("path",{d:"M12 8h.01"})]})}function YJ(){return $("svg",{viewBox:"0 0 24 24",...O,children:$("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function KJ(){return G("svg",{viewBox:"0 0 24 24",...O,children:[$("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$("path",{d:"M12 8v3"}),$("path",{d:"M12 14h.01"})]})}function GJ(){return G("svg",{viewBox:"0 0 24 24",...O,children:[$("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$("path",{d:"M12 9v4"}),$("path",{d:"M12 17h.01"})]})}function DJ(){return G("svg",{viewBox:"0 0 24 24",...O,children:[$("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$("path",{d:"M15 9l-6 6"}),$("path",{d:"M9 9l6 6"})]})}var BJ="alttab-markdown-codeblock",HJ=`
  .alttab-codeblock {
    position: relative;
  }
  .alttab-codeblock-copy {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid ${L.colorBorder};
    border-radius: ${L.radiusSm};
    background: ${L.colorSurface};
    color: ${L.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${L.colorText};
    border-color: ${L.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${L.colorSuccess};
    border-color: ${L.colorSuccess};
  }
`;function LJ({children:J}){o(BJ,HJ);let[Q,X]=f(!1),z=h(null),V=x(()=>{let Z="",q=(U)=>{if(typeof U==="string"){Z+=U;return}if(Array.isArray(U)){U.forEach(q);return}if(U&&typeof U==="object"&&"props"in U)q(U.props.children)};if(q(J),navigator.clipboard.writeText(Z.replace(/\n$/,"")),X(!0),z.current)clearTimeout(z.current);z.current=setTimeout(()=>X(!1),1500)},[J]);return G("div",{className:"alttab-codeblock",children:[$("button",{type:"button",className:"alttab-codeblock-copy",onClick:V,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$(d,{}):$(c,{})}),$("pre",{children:J})]})}function v({level:J,children:Q}){let X=`h${J}`,z=C(Q),V=qJ(z);return G(X,{id:V,children:[Q,$("a",{href:`#${V}`,className:"alttab-md-anchor","aria-label":`Link to "${z}"`,children:$(FJ,{})})]})}var NJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,vJ={NOTE:{label:"Note",icon:WJ,attr:"note"},TIP:{label:"Tip",icon:YJ,attr:"tip"},IMPORTANT:{label:"Important",icon:KJ,attr:"important"},WARNING:{label:"Warning",icon:GJ,attr:"warning"},CAUTION:{label:"Caution",icon:DJ,attr:"caution"}};function PJ(J){let Q=y.toArray(J),X=Q.findIndex(w);if(X===-1)return null;let z=Q[X],V=y.toArray(z.props.children),Z=V[0];if(typeof Z!=="string")return null;let q=Z.match(NJ);if(!q)return null;let U=q[1],D=Z.slice(q[0].length);if(D||V.length>1){let T=D?[D,...V.slice(1)]:V.slice(1),N=E(z,{},...T);return{type:U,content:[...Q.slice(0,X),N,...Q.slice(X+1)]}}return{type:U,content:Q.slice(X+1)}}function AJ({children:J}){let Q=PJ(J);if(Q){let X=vJ[Q.type],z=X.icon;return G("div",{className:"alttab-callout","data-callout":X.attr,children:[G("div",{className:"alttab-callout-title",children:[$(z,{}),$("span",{children:X.label})]}),$("div",{className:"alttab-callout-body",children:Q.content})]})}return $("blockquote",{children:J})}var OJ="alttab-markdown-styles",MJ=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: ${b};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Paragraph spacing */
  .alttab-markdown p + p {
    margin-top: 1em;
  }

  /* ── Headings ── */
  .alttab-markdown h1,
  .alttab-markdown h2,
  .alttab-markdown h3,
  .alttab-markdown h4,
  .alttab-markdown h5,
  .alttab-markdown h6 {
    scroll-margin-top: 5rem;
  }

  .alttab-markdown h1 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: ${k};
    color: var(--color-text);
    margin-bottom: 0.75rem;
  }

  .alttab-markdown h2 {
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

  .alttab-markdown h2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 1px;
    background: var(--color-border);
  }

  .alttab-markdown h3 {
    font-family: var(--font-serif);
    font-weight: 600;
    line-height: 1.25;
    font-size: 1.25rem;
    color: var(--color-text);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  /* ── Heading anchors ── */
  .alttab-markdown a.alttab-md-anchor {
    display: inline-flex;
    align-items: center;
    margin-left: 0.35em;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease;
    color: var(--color-text-muted);
    text-decoration: none;
    vertical-align: middle;
  }

  .alttab-markdown h1:hover .alttab-md-anchor,
  .alttab-markdown h2:hover .alttab-md-anchor,
  .alttab-markdown h3:hover .alttab-md-anchor,
  .alttab-markdown h4:hover .alttab-md-anchor,
  .alttab-markdown h5:hover .alttab-md-anchor,
  .alttab-markdown h6:hover .alttab-md-anchor,
  .alttab-markdown a.alttab-md-anchor:focus-visible {
    opacity: 1;
  }

  .alttab-markdown a.alttab-md-anchor:hover {
    color: var(--color-text-link);
  }

  /* ── Section break — three-dot ornament ── */
  .alttab-markdown hr {
    border: none;
    text-align: center;
    margin-block: 3.5rem;
  }

  .alttab-markdown hr::after {
    content: '\\00B7  \\00B7  \\00B7';
    color: var(--color-text-muted);
    font-size: 1.25rem;
    letter-spacing: 0.5em;
  }

  /* ── Links ── */
  .alttab-markdown a {
    color: var(--color-text-link);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration-color: color-mix(in srgb, var(--color-text-link) 40%, transparent);
    transition: text-decoration-color 0.15s ease, color 0.15s ease;
  }

  .alttab-markdown a:hover {
    text-decoration-color: var(--color-text-link);
  }

  .alttab-markdown a:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
    border-radius: 2px;
  }

  /* ── Inline code ── */
  .alttab-markdown code {
    font-size: 0.85em;
    font-family: var(--font-mono);
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    padding: 0.125em 0.375em;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    vertical-align: baseline;
    word-break: break-word;
  }

  /* ── Code blocks ── */
  .alttab-markdown pre {
    background: var(--color-surface-page);
    border: 1px solid var(--color-border);
    border-left: 3px solid var(--color-action-primary);
    border-radius: var(--radius-md);
    padding: 1rem 1.25rem;
    margin-block: 1.5rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .alttab-markdown pre code {
    background: none;
    border: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.8rem;
    line-height: 1.6;
    letter-spacing: -0.01em;
    color: var(--color-text-secondary);
    word-break: normal;
  }

  /* ── Blockquotes ── */
  .alttab-markdown blockquote {
    border-left: 3px solid var(--color-action-primary);
    padding-left: 1.5rem;
    margin-block: 1.5rem;
    margin-inline: 0;
    color: var(--color-text-muted);
  }

  .alttab-markdown blockquote p + p {
    margin-top: 0.75em;
  }

  /* ── Callouts ── */
  .alttab-callout {
    margin-block: 1.5rem;
    padding: 1rem 1.25rem;
    border-radius: var(--radius-md);
    border: 1px solid color-mix(in srgb, var(--callout-color) 25%, var(--color-border));
    border-left: 3px solid var(--callout-color);
    background: var(--callout-bg);
  }

  .alttab-callout-title {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-weight: 600;
    font-size: 0.8125rem;
    font-family: var(--font-sans);
    color: var(--callout-color);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    margin-bottom: 0.5rem;
  }

  .alttab-callout-title svg {
    flex-shrink: 0;
  }

  .alttab-callout-body {
    color: var(--color-text-secondary);
  }

  .alttab-callout-body > *:first-child {
    margin-top: 0;
  }

  .alttab-callout-body > *:last-child {
    margin-bottom: 0;
  }

  .alttab-callout[data-callout="note"] {
    --callout-color: var(--color-info);
    --callout-bg: var(--color-info-bg);
  }

  .alttab-callout[data-callout="tip"] {
    --callout-color: var(--color-success);
    --callout-bg: var(--color-success-bg);
  }

  .alttab-callout[data-callout="important"] {
    --callout-color: var(--color-action-primary);
    --callout-bg: color-mix(in srgb, var(--color-action-primary) 8%, transparent);
  }

  .alttab-callout[data-callout="warning"] {
    --callout-color: var(--color-warning);
    --callout-bg: var(--color-warning-bg);
  }

  .alttab-callout[data-callout="caution"] {
    --callout-color: var(--color-error);
    --callout-bg: var(--color-error-bg);
  }

  /* Callout body inherits markdown element styles */
  .alttab-callout-body code {
    font-size: 0.85em;
    font-family: var(--font-mono);
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    padding: 0.125em 0.375em;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
  }

  .alttab-callout-body a {
    color: var(--color-text-link);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration-color: color-mix(in srgb, var(--color-text-link) 40%, transparent);
  }

  .alttab-callout-body a:hover {
    text-decoration-color: var(--color-text-link);
  }

  .alttab-callout-body strong {
    font-weight: 600;
    color: var(--color-text);
  }

  /* ── Lists ── */
  .alttab-markdown ul,
  .alttab-markdown ol {
    padding-left: 1.5rem;
    margin-block: 0.6em;
  }

  .alttab-markdown li + li {
    margin-top: 0.15em;
  }

  .alttab-markdown li::marker {
    color: var(--color-action-primary);
  }

  .alttab-markdown ul ul,
  .alttab-markdown ol ol,
  .alttab-markdown ul ol,
  .alttab-markdown ol ul {
    margin-block: 0.1em;
  }

  /* ── Task lists (GFM) ── */
  .alttab-markdown ul:has(> li > input[type="checkbox"]) {
    list-style: none;
    padding-left: 0;
  }

  .alttab-markdown ul:has(> li > input[type="checkbox"]) li {
    display: flex;
    align-items: baseline;
    gap: 0.5em;
  }

  .alttab-markdown li > input[type="checkbox"] {
    margin: 0;
    accent-color: var(--color-action-primary);
    flex-shrink: 0;
  }

  /* ── Tables ── */
  .alttab-markdown table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-block: 1.5rem;
    font-size: 0.9375rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .alttab-markdown th {
    text-align: left;
    font-weight: 600;
    padding: 0.625rem 0.875rem;
    background: var(--color-surface-raised);
    border-bottom: 2px solid var(--color-border);
    color: var(--color-text);
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
  }

  .alttab-markdown td {
    padding: 0.5rem 0.875rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-secondary);
  }

  .alttab-markdown tr:last-child td {
    border-bottom: none;
  }

  /* ── Strong ── */
  .alttab-markdown strong {
    font-weight: 600;
    color: var(--color-text);
  }

  /* ── Strikethrough (GFM) ── */
  .alttab-markdown del {
    color: var(--color-text-muted);
    text-decoration-color: var(--color-text-muted);
  }

  /* ── Copy source button ── */
  .alttab-md-copy-source {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    z-index: 1;
  }

  .alttab-markdown:hover .alttab-md-copy-source {
    opacity: 1;
  }

  .alttab-md-copy-source:hover {
    color: var(--color-text);
    border-color: var(--color-text-muted);
  }

  .alttab-md-copy-source[data-copied] {
    opacity: 1;
    color: var(--color-success);
    border-color: var(--color-success);
  }
`;function TJ({children:J}){let Q=0,X=y.map(J,(z)=>{if(!w(z))return z;let V=Q%2===1;if(Q++,!V)return z;let Z=y.map(z.props.children,(q)=>{if(!w(q))return q;let U=q.props;return E(q,{style:{...U.style,background:`color-mix(in srgb, var(--color-text) ${u}, transparent)`}})});return E(z,{},Z)});return $("tbody",{children:X})}var _J={pre:LJ,blockquote:AJ,tbody:TJ,h1:({children:J})=>$(v,{level:1,children:J}),h2:({children:J})=>$(v,{level:2,children:J}),h3:({children:J})=>$(v,{level:3,children:J}),h4:({children:J})=>$(v,{level:4,children:J}),h5:({children:J})=>$(v,{level:5,children:J}),h6:({children:J})=>$(v,{level:6,children:J})};function bJ({children:J,className:Q,...X}){o(OJ,MJ);let[z,V]=f(!1),Z=h(null),q=x(()=>{if(navigator.clipboard.writeText(J),V(!0),Z.current)clearTimeout(Z.current);Z.current=setTimeout(()=>V(!1),1500)},[J]);return G("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...X,children:[$("button",{type:"button",className:"alttab-md-copy-source",onClick:q,"aria-label":"Copy markdown source",title:"Copy markdown",...z?{"data-copied":""}:{},children:z?$(d,{}):$(c,{})}),$(UJ,{remarkPlugins:[ZJ],components:_J,children:J})]})}import{forwardRef as kJ}from"react";import{jsx as l}from"react/jsx-runtime";var TQ=kJ(function({children:Q},X){return l("blockquote",{ref:X,"data-pull-quote":"",children:l("p",{children:Q})})});import{forwardRef as yJ}from"react";import{jsx as EJ}from"react/jsx-runtime";var yQ=yJ(function({children:Q},X){return EJ("small",{ref:X,"data-margin-note":"",children:Q})});import{forwardRef as wJ}from"react";import{jsx as CJ}from"react/jsx-runtime";var IQ=wJ(function({children:Q},X){return CJ("small",{ref:X,"data-side-note":"",children:Q})});import{forwardRef as IJ}from"react";import{useInjectStyles as pJ}from "../../core/dist/index.js";import{jsx as i,jsxs as SJ}from"react/jsx-runtime";var gJ="alttab-epigraph",RJ=`
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
`,mQ=IJ(function({children:Q,cite:X},z){return pJ(gJ,RJ),SJ("blockquote",{ref:z,className:"alttab-epigraph",children:[i("p",{children:Q}),X&&i("footer",{children:X})]})});import{forwardRef as mJ}from"react";import{useInjectStyles as jJ}from "../../core/dist/index.js";import{jsx as r,jsxs as xJ}from"react/jsx-runtime";var uJ="alttab-link-card",fJ=`
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
`,hQ=mJ(function({title:Q,description:X,external:z,children:V,...Z},q){return jJ(uJ,fJ),xJ("a",{ref:q,className:"alttab-link-card",...z?{target:"_blank",rel:"noopener noreferrer"}:{},...Z,children:[r("span",{className:"alttab-link-card__title",children:Q}),X&&r("span",{className:"alttab-link-card__desc",children:X}),V]})});import{forwardRef as hJ,useEffect as oJ,useRef as M,useCallback as I,useImperativeHandle as aJ}from"react";import{useInjectStyles as cJ}from "../../core/dist/index.js";import{jsx as iJ}from"react/jsx-runtime";var t="abcdefghijklmnopqrstuvwxyz!?*~+#",dJ="alttab-thinking-cycle",lJ=`
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
`;function n(){return t[Math.random()*t.length|0]}var lQ=hJ(function({words:Q,holdMs:X=2000,scrambleTicks:z=4,tickMs:V=50,staggerMs:Z=30},q){cJ(dJ,lJ);let U=M(null);aJ(q,()=>U.current);let D=M(0),T=M([]),N=M(null),P=M(null),A=I(()=>{let F=U.current;if(!F)return;let K=F.innerHTML;F.style.width="";let W=[];for(let B of Q)F.textContent=B,W.push(Math.ceil(F.getBoundingClientRect().width));F.innerHTML=K||"",T.current=W,F.style.width=W[D.current]+"px"},[Q]),p=I((F)=>{let K=U.current;if(!K)return;K.innerHTML="";for(let W=0;W<F.length;W++){let B=document.createElement("span");B.className="alttab-char",B.textContent=F[W],B.style.animationDelay=`${W*Z}ms`,K.appendChild(B)}},[Z]),g=I((F,K)=>{let W=U.current;if(!W)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){W.textContent=F,K();return}W.innerHTML="";let R=[];for(let H=0;H<F.length;H++){let Y=document.createElement("span");Y.className="alttab-char",Y.style.animationDelay=`${H*Z}ms`,Y.textContent=F[H]===" "?" ":n(),W.appendChild(Y),R.push({span:Y,final:F[H],ticks:0,maxTicks:z+H*2})}P.current=setInterval(()=>{let H=!0;for(let Y of R)if(Y.ticks>=Y.maxTicks)Y.span.textContent=Y.final;else H=!1,Y.ticks++,Y.span.textContent=Y.final===" "?" ":n();if(H)clearInterval(P.current),P.current=null,K()},V)},[z,V,Z]);return oJ(()=>{if(Q.length<2)return;A(),document.fonts.ready.then(A);let F=()=>A();document.fonts.addEventListener("loadingdone",F);let K=new MutationObserver(()=>requestAnimationFrame(A));K.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),D.current=0,p(Q[0]);function W(){D.current=(D.current+1)%Q.length;let B=U.current;if(B)B.style.width=T.current[D.current]+"px";g(Q[D.current],()=>{N.current=setTimeout(W,X)})}return N.current=setTimeout(W,X),()=>{if(N.current)clearTimeout(N.current);if(P.current)clearInterval(P.current);document.fonts.removeEventListener("loadingdone",F),K.disconnect()}},[Q,X,A,p,g]),iJ("span",{ref:U,className:"alttab-thinking"})});export{lQ as ThinkingCycle,IQ as SideNote,TQ as PullQuote,WQ as Prose,j as PROSE_H2_SIZE,k as PROSE_H1_SIZE,rJ as PROSE_CODE_SIZE,b as PROSE_BODY_SIZE,tJ as PROSE_BLOCKQUOTE_SIZE,bJ as Markdown,yQ as MarginNote,u as MIX_SUBTLE,nJ as MIX_HOVER,sJ as MIX_BADGE,hQ as LinkCard,mQ as Epigraph,$Q as Container,S as BREAKPOINT_WIDE,_ as BREAKPOINT_PROSE,m as BREAKPOINT_MARGIN_NOTES};
