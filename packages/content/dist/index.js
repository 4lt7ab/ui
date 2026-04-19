var j="680px",cJ="900px",f="1100px",b="1.0625rem",p="clamp(2rem, 5vw, 2.75rem)",x="1.35em",oJ="0.875rem",aJ="1.25rem",h="5%",I="8%",rJ="14%";import{forwardRef as $J}from"react";import{useInjectStyles as zJ}from"../../core/dist/index.js";import{jsx as UJ}from"react/jsx-runtime";var QJ="alttab-prose-styles",FJ=`
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
    font-size: ${x};
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
    font-size: ${p};
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
    transition: text-decoration-color var(--transition-base);
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
    border-radius: var(--radius-sm);
  }

  /* ── Code blocks ── */
  .alttab-prose pre {
    background: var(--color-surface-page);
    border: var(--border-width-default) solid var(--color-border);
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
    border-left: var(--border-width-accent) solid var(--color-action-primary);
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
    border-block: var(--border-width-default) solid var(--color-border);
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
    border-radius: var(--radius-sm);
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

  @media (max-width: ${j}) {
    .alttab-prose .figure--wide {
      margin-inline: -1.5rem;
    }
  }

  /* ── Margin notes — shared base ── */
  .alttab-prose [data-margin-note] {
    display: block;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--color-text-muted);
    margin-block: 0.75rem;
  }

  /* Left margin note (default) */
  .alttab-prose [data-margin-note][data-side="left"] {
    padding-left: 0.75rem;
    border-left: var(--border-width-thick) solid var(--color-border);
  }

  /* Right margin note */
  .alttab-prose [data-margin-note][data-side="right"] {
    padding-right: 0.75rem;
    border-right: var(--border-width-thick) solid var(--color-border);
    text-align: right;
  }

  @media (min-width: ${f}) {
    .alttab-prose {
      position: relative;
      overflow: visible;
    }

    .alttab-prose [data-margin-note] {
      position: absolute;
      width: 200px;
      margin-block: 0;
    }

    .alttab-prose [data-margin-note][data-side="left"] {
      left: -240px;
      padding-left: 0;
      border-left: none;
    }

    .alttab-prose [data-margin-note][data-side="right"] {
      right: -240px;
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
    border-bottom: var(--border-width-thick) solid var(--color-border);
    color: var(--color-text);
  }

  .alttab-prose td {
    padding: 0.5rem 0.75rem;
    border-bottom: var(--border-width-default) solid var(--color-border);
    color: var(--color-text-secondary);
  }

  .alttab-prose tr:last-child td {
    border-bottom: none;
  }

  /* ── Strong ── */
  .alttab-prose strong {
    font-weight: 600;
  }
`,eJ=$J(function({children:Q,id:F,"data-testid":U},V){return zJ(QJ,FJ),UJ("div",{ref:V,className:"alttab-prose",id:F,"data-testid":U,children:Q})});import{useState as r,useCallback as C,useRef as d,Children as E,cloneElement as g,isValidElement as m}from"react";import c from"react-markdown";import o from"remark-gfm";import{semantic as J,useInjectStyles as R}from"../../core/dist/index.js";import{jsx as $,jsxs as D}from"react/jsx-runtime";function u(z){if(typeof z==="string")return z;if(typeof z==="number")return String(z);if(Array.isArray(z))return z.map(u).join("");if(z&&typeof z==="object"&&"props"in z)return u(z.props.children);return""}function WJ(z){return z.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var i={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function s(){return D("svg",{viewBox:"0 0 24 24",...i,children:[$("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function l(){return $("svg",{viewBox:"0 0 24 24",...i,children:$("path",{d:"M20 6L9 17l-5-5"})})}function XJ(){return D("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var y={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function VJ(){return D("svg",{viewBox:"0 0 24 24",...y,children:[$("circle",{cx:"12",cy:"12",r:"10"}),$("path",{d:"M12 16v-4"}),$("path",{d:"M12 8h.01"})]})}function ZJ(){return $("svg",{viewBox:"0 0 24 24",...y,children:$("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function GJ(){return D("svg",{viewBox:"0 0 24 24",...y,children:[$("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$("path",{d:"M12 8v3"}),$("path",{d:"M12 14h.01"})]})}function KJ(){return D("svg",{viewBox:"0 0 24 24",...y,children:[$("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$("path",{d:"M12 9v4"}),$("path",{d:"M12 17h.01"})]})}function YJ(){return D("svg",{viewBox:"0 0 24 24",...y,children:[$("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$("path",{d:"M15 9l-6 6"}),$("path",{d:"M9 9l6 6"})]})}var qJ="alttab-markdown-codeblock",NJ=`
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
    border: ${J.borderWidthDefault} solid ${J.colorBorder};
    border-radius: ${J.radiusSm};
    background: ${J.colorSurface};
    color: ${J.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${J.transitionBase}, color ${J.transitionBase}, border-color ${J.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${J.colorText};
    border-color: ${J.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${J.colorSuccess};
    border-color: ${J.colorSuccess};
  }
`;function HJ({children:z}){R(qJ,NJ);let[Q,F]=r(!1),U=d(null),V=C(()=>{let Y="",Z=(W)=>{if(typeof W==="string"){Y+=W;return}if(Array.isArray(W)){W.forEach(Z);return}if(W&&typeof W==="object"&&"props"in W)Z(W.props.children)};if(Z(z),navigator.clipboard.writeText(Y.replace(/\n$/,"")),F(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>F(!1),1500)},[z]);return D("div",{className:"alttab-codeblock",children:[$("button",{type:"button",className:"alttab-codeblock-copy",onClick:V,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$(l,{}):$(s,{})}),$("pre",{children:z})]})}function L({level:z,children:Q}){let F=`h${z}`,U=u(Q),V=WJ(U);return D(F,{id:V,children:[Q,$("a",{href:`#${V}`,className:"alttab-md-anchor","aria-label":`Link to "${U}"`,children:$(XJ,{})})]})}var DJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,PJ={NOTE:{label:"Note",icon:VJ,attr:"note"},TIP:{label:"Tip",icon:ZJ,attr:"tip"},IMPORTANT:{label:"Important",icon:GJ,attr:"important"},WARNING:{label:"Warning",icon:KJ,attr:"warning"},CAUTION:{label:"Caution",icon:YJ,attr:"caution"}};function BJ(z){let Q=E.toArray(z),F=Q.findIndex(m);if(F===-1)return null;let U=Q[F],V=E.toArray(U.props.children),Y=V[0];if(typeof Y!=="string")return null;let Z=Y.match(DJ);if(!Z)return null;let W=Z[1],N=Y.slice(Z[0].length);if(N||V.length>1){let A=N?[N,...V.slice(1)]:V.slice(1),H=g(U,{},...A);return{type:W,content:[...Q.slice(0,F),H,...Q.slice(F+1)]}}return{type:W,content:Q.slice(F+1)}}function OJ({children:z}){let Q=BJ(z);if(Q){let F=PJ[Q.type],U=F.icon;return D("div",{className:"alttab-callout","data-callout":F.attr,children:[D("div",{className:"alttab-callout-title",children:[$(U,{}),$("span",{children:F.label})]}),$("div",{className:"alttab-callout-body",children:Q.content})]})}return $("blockquote",{children:z})}var AJ="alttab-markdown-styles",MJ=`
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
    font-size: ${p};
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
    transition: opacity var(--transition-base), color var(--transition-base);
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
    transition: text-decoration-color var(--transition-base), color var(--transition-base);
  }

  .alttab-markdown a:hover {
    text-decoration-color: var(--color-text-link);
  }

  .alttab-markdown a:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
    border-radius: var(--radius-sm);
  }

  /* ── Inline code ── */
  .alttab-markdown code {
    font-size: 0.85em;
    font-family: var(--font-mono);
    background: var(--color-surface-raised);
    border: var(--border-width-default) solid var(--color-border);
    padding: 0.125em 0.375em;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    vertical-align: baseline;
    word-break: break-word;
  }

  /* ── Code blocks ── */
  .alttab-markdown pre {
    background: var(--color-surface-page);
    border: var(--border-width-default) solid var(--color-border);
    border-left: var(--border-width-accent) solid var(--color-action-primary);
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
    border-left: var(--border-width-accent) solid var(--color-action-primary);
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
    border: var(--border-width-default) solid color-mix(in srgb, var(--callout-color) 25%, var(--color-border));
    border-left: var(--border-width-accent) solid var(--callout-color);
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
    border: var(--border-width-default) solid var(--color-border);
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
    border: var(--border-width-default) solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .alttab-markdown th {
    text-align: left;
    font-weight: 600;
    padding: 0.625rem 0.875rem;
    background: var(--color-surface-raised);
    border-bottom: var(--border-width-thick) solid var(--color-border);
    color: var(--color-text);
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
  }

  .alttab-markdown td {
    padding: 0.5rem 0.875rem;
    border-bottom: var(--border-width-default) solid var(--color-border);
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
    border: var(--border-width-default) solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity var(--transition-base), color var(--transition-base), border-color var(--transition-base);
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
`;function vJ({children:z}){let Q=0,F=E.map(z,(U)=>{if(!m(U))return U;let V=Q%2===1;if(Q++,!V)return U;let Y=E.map(U.props.children,(Z)=>{if(!m(Z))return Z;let W=Z.props;return g(Z,{style:{...W.style,background:`color-mix(in srgb, var(--color-text) ${h}, transparent)`}})});return g(U,{},Y)});return $("tbody",{children:F})}var LJ="alttab-markdown-editable",kJ=`
  .alttab-md-editable-display {
    position: relative;
    border-radius: ${J.radiusMd};
    transition: background ${J.transitionBase};
  }

  .alttab-md-editable-display:hover,
  .alttab-md-editable-display:focus-within {
    background: color-mix(in srgb, ${J.colorText} ${I}, transparent);
  }

  /*
   * Transparent overlay that carries the click-to-edit affordance. Rendering
   * the outer wrapper as a real <button> would create a nested-interactive
   * ARIA violation as soon as the rendered markdown emits an <a> or <button>;
   * giving the wrapper role="button" is the same violation spelled different.
   * Instead, the overlay is the <button> and the markdown sits above it with
   * pointer-events: none — letting blank-area clicks fall through to the
   * overlay while <a> descendants (which opt back in) stay clickable.
   */
  .alttab-md-editable-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: inherit;
    cursor: pointer;
    z-index: 0;
  }

  .alttab-md-editable-overlay:focus-visible {
    outline: ${J.focusRingWidth} solid ${J.focusRingColor};
    outline-offset: ${J.focusRingOffset};
  }

  .alttab-md-editable-display > .alttab-markdown {
    position: relative;
    z-index: 1;
    pointer-events: none;
  }

  /*
   * Opt interactive descendants back into pointer events so links emitted
   * from markdown remain clickable. The markdown container blocks pointer
   * events in the middle to let blank-area clicks reach the overlay button.
   */
  .alttab-md-editable-display > .alttab-markdown a,
  .alttab-md-editable-display > .alttab-markdown button,
  .alttab-md-editable-display > .alttab-markdown input,
  .alttab-md-editable-display > .alttab-markdown textarea,
  .alttab-md-editable-display > .alttab-markdown select,
  .alttab-md-editable-display > .alttab-markdown summary {
    pointer-events: auto;
  }

  .alttab-md-editable-empty {
    cursor: pointer;
    border-radius: ${J.radiusMd};
    padding: ${J.spaceSm} ${J.spaceMd};
    font-style: italic;
    color: ${J.colorTextMuted};
    transition: background ${J.transitionBase};
  }

  .alttab-md-editable-empty:hover {
    background: color-mix(in srgb, ${J.colorText} ${I}, transparent);
  }
`,n={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:J.spaceSm,padding:`${J.spaceSm} ${J.spaceMd}`,fontFamily:J.fontSans,fontSize:J.fontSizeSm,fontWeight:J.fontWeightMedium,lineHeight:J.lineHeightTight,borderRadius:J.radiusMd,cursor:"pointer",transition:`background ${J.transitionBase}, border-color ${J.transitionBase}, opacity ${J.transitionBase}`},_J={...n,background:J.colorActionPrimary,color:J.colorTextInverse,border:"none"},TJ={...n,background:J.colorActionSecondary,color:J.colorText,border:`${J.borderWidthDefault} solid ${J.colorBorder}`},a={pre:HJ,blockquote:OJ,tbody:vJ,h1:({children:z})=>$(L,{level:1,children:z}),h2:({children:z})=>$(L,{level:2,children:z}),h3:({children:z})=>$(L,{level:3,children:z}),h4:({children:z})=>$(L,{level:4,children:z}),h5:({children:z})=>$(L,{level:5,children:z}),h6:({children:z})=>$(L,{level:6,children:z})};function yJ({children:z,id:Q,"data-testid":F,editable:U=!1,editing:V=!1,value:Y,onStartEdit:Z,onEditChange:W,onSave:N,onCancel:A,fieldLabel:H,rows:M=4,placeholder:v="Click to add content..."}){R(AJ,MJ),R(LJ,kJ);let[_,T]=r(!1),X=d(null),K=z??"",G=C(()=>{if(navigator.clipboard.writeText(K),T(!0),X.current)clearTimeout(X.current);X.current=setTimeout(()=>T(!1),1500)},[K]),B=C((q)=>{if(q.key==="Escape")q.preventDefault(),A?.();else if(q.key==="Enter"&&(q.metaKey||q.ctrlKey))q.preventDefault(),N?.()},[A,N]);if(U){if(V)return D("div",{role:"group","aria-label":H,children:[$("textarea",{value:Y??"",onChange:(q)=>W?.(q.target.value),onKeyDown:B,rows:M,"aria-label":H?`Edit ${H}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:J.spaceSm,fontFamily:J.fontMono,fontSize:J.fontSizeSm,lineHeight:J.lineHeightRelaxed,color:J.colorText,background:J.colorSurfacePage,border:`${J.borderWidthDefault} solid ${J.colorBorder}`,borderRadius:J.radiusMd,resize:"vertical",outline:"none"}}),D("div",{style:{display:"flex",gap:J.spaceSm,marginTop:J.spaceSm},children:[$("button",{type:"button",onClick:N,style:_J,children:"Save"}),$("button",{type:"button",onClick:A,style:TJ,children:"Cancel"})]})]});if(!K)return $("div",{className:"alttab-md-editable-empty",role:"button",tabIndex:0,"aria-label":H?`Add ${H}`:"Add content",onClick:Z,onKeyDown:(q)=>{if(q.key==="Enter"||q.key===" ")q.preventDefault(),Z?.()},children:v});return D("div",{className:"alttab-md-editable-display",children:[$("button",{type:"button",className:"alttab-md-editable-overlay","aria-label":H?`Edit ${H}`:"Edit content",onClick:Z}),$("div",{className:"alttab-markdown",id:Q,"data-testid":F,children:$(c,{remarkPlugins:[o],components:a,children:K})})]})}return D("div",{className:"alttab-markdown",id:Q,"data-testid":F,children:[$("button",{type:"button",className:"alttab-md-copy-source",onClick:G,"aria-label":"Copy markdown source",title:"Copy markdown",..._?{"data-copied":""}:{},children:_?$(l,{}):$(s,{})}),$(c,{remarkPlugins:[o],components:a,children:K})]})}import{forwardRef as wJ}from"react";import{useInjectStyles as bJ}from"../../core/dist/index.js";import{jsx as k,jsxs as t}from"react/jsx-runtime";var pJ="alttab-epigraph",EJ=`
  .alttab-epigraph {
    border: none;
    border-block: var(--border-width-default) solid var(--color-border);
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
`;function IJ({children:z,cite:Q,innerRef:F}){return t("blockquote",{ref:F,"data-pull-quote":"",children:[k("p",{children:z}),Q&&k("footer",{children:Q})]})}function CJ({children:z,cite:Q,innerRef:F}){return bJ(pJ,EJ),t("blockquote",{ref:F,className:"alttab-epigraph",children:[k("p",{children:z}),Q&&k("footer",{children:Q})]})}var q0=wJ(function({children:Q,variant:F="pull",cite:U},V){if(F==="epigraph")return k(CJ,{innerRef:V,cite:U,children:Q});return k(IJ,{innerRef:V,cite:U,children:Q})});import{forwardRef as gJ}from"react";import{jsx as mJ}from"react/jsx-runtime";var P0=gJ(function({children:Q,side:F="left"},U){return mJ("small",{ref:U,"data-margin-note":"","data-side":F,children:Q})});import{forwardRef as RJ,useEffect as uJ,useRef as w,useCallback as S,useImperativeHandle as SJ}from"react";import{useInjectStyles as jJ}from"../../core/dist/index.js";import{jsx as hJ}from"react/jsx-runtime";var e="abcdefghijklmnopqrstuvwxyz!?*~+#",fJ="alttab-thinking-cycle",xJ=`
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
`;function JJ(){return e[Math.random()*e.length|0]}var v0=RJ(function({words:Q,holdMs:F=2000,scrambleTicks:U=4,tickMs:V=50,staggerMs:Y=30},Z){jJ(fJ,xJ);let W=w(null);SJ(Z,()=>W.current);let N=w(0),A=w([]),H=w(null),M=w(null),v=S(()=>{let X=W.current;if(!X)return;let K=X.innerHTML;X.style.width="";let G=[];for(let B of Q)X.textContent=B,G.push(Math.ceil(X.getBoundingClientRect().width));X.innerHTML=K||"",A.current=G,X.style.width=G[N.current]+"px"},[Q]),_=S((X)=>{let K=W.current;if(!K)return;K.innerHTML="";for(let G=0;G<X.length;G++){let B=document.createElement("span");B.className="alttab-char",B.textContent=X[G],B.style.animationDelay=`${G*Y}ms`,K.appendChild(B)}},[Y]),T=S((X,K)=>{let G=W.current;if(!G)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){G.textContent=X,K();return}G.innerHTML="";let q=[];for(let O=0;O<X.length;O++){let P=document.createElement("span");P.className="alttab-char",P.style.animationDelay=`${O*Y}ms`,P.textContent=X[O]===" "?" ":JJ(),G.appendChild(P),q.push({span:P,final:X[O],ticks:0,maxTicks:U+O*2})}M.current=setInterval(()=>{let O=!0;for(let P of q)if(P.ticks>=P.maxTicks)P.span.textContent=P.final;else O=!1,P.ticks++,P.span.textContent=P.final===" "?" ":JJ();if(O)clearInterval(M.current),M.current=null,K()},V)},[U,V,Y]);return uJ(()=>{if(Q.length<2)return;v(),document.fonts.ready.then(v);let X=()=>v();document.fonts.addEventListener("loadingdone",X);let K=new MutationObserver(()=>requestAnimationFrame(v));K.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),N.current=0,_(Q[0]);function G(){N.current=(N.current+1)%Q.length;let B=W.current;if(B)B.style.width=A.current[N.current]+"px";T(Q[N.current],()=>{H.current=setTimeout(G,F)})}return H.current=setTimeout(G,F),()=>{if(H.current)clearTimeout(H.current);if(M.current)clearInterval(M.current);document.fonts.removeEventListener("loadingdone",X),K.disconnect()}},[Q,F,v,_,T]),hJ("span",{ref:W,className:"alttab-thinking"})});export{v0 as ThinkingCycle,q0 as Quote,eJ as Prose,x as PROSE_H2_SIZE,p as PROSE_H1_SIZE,oJ as PROSE_CODE_SIZE,b as PROSE_BODY_SIZE,aJ as PROSE_BLOCKQUOTE_SIZE,yJ as Markdown,P0 as MarginNote,h as MIX_SUBTLE,I as MIX_HOVER,rJ as MIX_BADGE,cJ as BREAKPOINT_WIDE,j as BREAKPOINT_PROSE,f as BREAKPOINT_MARGIN_NOTES};
