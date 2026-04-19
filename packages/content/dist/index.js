var f="680px",dJ="900px",x="1100px",E="1.0625rem",I="clamp(2rem, 5vw, 2.75rem)",h="1.35em",rJ="0.875rem",iJ="1.25rem",c="5%",C="8%",lJ="14%";import{forwardRef as FJ}from"react";import{useInjectStyles as UJ}from"../../core/dist/index.js";import{jsx as VJ}from"react/jsx-runtime";var WJ="alttab-prose-styles",XJ=`
  /* ── Typography ── */
  .alttab-prose {
    font-size: ${E};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: ${h};
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
    font-size: ${I};
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

  @media (max-width: ${f}) {
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

  @media (min-width: ${x}) {
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
`,z0=FJ(function({children:Q,id:F,"data-testid":U},X){return UJ(WJ,XJ),VJ("div",{ref:X,className:"alttab-prose",id:F,"data-testid":U,children:Q})});import{useState as i,useCallback as R,useRef as l,useMemo as o,Children as p,cloneElement as g,isValidElement as S}from"react";import a from"react-markdown";import d from"remark-gfm";import{semantic as J,useInjectStyles as j}from"../../core/dist/index.js";import{jsx as $,jsxs as B}from"react/jsx-runtime";function m(z){if(typeof z==="string")return z;if(typeof z==="number")return String(z);if(Array.isArray(z))return z.map(m).join("");if(z&&typeof z==="object"&&"props"in z)return m(z.props.children);return""}function ZJ(z){return z.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var s={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function n(){return B("svg",{viewBox:"0 0 24 24",...s,children:[$("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function t(){return $("svg",{viewBox:"0 0 24 24",...s,children:$("path",{d:"M20 6L9 17l-5-5"})})}function GJ(){return B("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var w={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function KJ(){return B("svg",{viewBox:"0 0 24 24",...w,children:[$("circle",{cx:"12",cy:"12",r:"10"}),$("path",{d:"M12 16v-4"}),$("path",{d:"M12 8h.01"})]})}function YJ(){return $("svg",{viewBox:"0 0 24 24",...w,children:$("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function qJ(){return B("svg",{viewBox:"0 0 24 24",...w,children:[$("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$("path",{d:"M12 8v3"}),$("path",{d:"M12 14h.01"})]})}function NJ(){return B("svg",{viewBox:"0 0 24 24",...w,children:[$("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$("path",{d:"M12 9v4"}),$("path",{d:"M12 17h.01"})]})}function HJ(){return B("svg",{viewBox:"0 0 24 24",...w,children:[$("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$("path",{d:"M15 9l-6 6"}),$("path",{d:"M9 9l6 6"})]})}var DJ="alttab-markdown-codeblock",BJ=`
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
`;function OJ({children:z}){j(DJ,BJ);let[Q,F]=i(!1),U=l(null),X=R(()=>{let Y="",G=(W)=>{if(typeof W==="string"){Y+=W;return}if(Array.isArray(W)){W.forEach(G);return}if(W&&typeof W==="object"&&"props"in W)G(W.props.children)};if(G(z),navigator.clipboard.writeText(Y.replace(/\n$/,"")),F(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>F(!1),1500)},[z]);return B("div",{className:"alttab-codeblock",children:[$("button",{type:"button",className:"alttab-codeblock-copy",onClick:X,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$(t,{}):$(n,{})}),$("pre",{children:z})]})}function T({level:z,children:Q}){let F=`h${z}`,U=m(Q),X=ZJ(U);return B(F,{id:X,children:[Q,$("a",{href:`#${X}`,className:"alttab-md-anchor","aria-label":`Link to "${U}"`,children:$(GJ,{})})]})}var AJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,PJ={NOTE:{label:"Note",icon:KJ,attr:"note"},TIP:{label:"Tip",icon:YJ,attr:"tip"},IMPORTANT:{label:"Important",icon:qJ,attr:"important"},WARNING:{label:"Warning",icon:NJ,attr:"warning"},CAUTION:{label:"Caution",icon:HJ,attr:"caution"}};function vJ(z){let Q=p.toArray(z),F=Q.findIndex(S);if(F===-1)return null;let U=Q[F],X=p.toArray(U.props.children),Y=X[0];if(typeof Y!=="string")return null;let G=Y.match(AJ);if(!G)return null;let W=G[1],N=Y.slice(G[0].length);if(N||X.length>1){let P=N?[N,...X.slice(1)]:X.slice(1),H=g(U,{},...P);return{type:W,content:[...Q.slice(0,F),H,...Q.slice(F+1)]}}return{type:W,content:Q.slice(F+1)}}function MJ({children:z}){let Q=vJ(z);if(Q){let F=PJ[Q.type],U=F.icon;return B("div",{className:"alttab-callout","data-callout":F.attr,children:[B("div",{className:"alttab-callout-title",children:[$(U,{}),$("span",{children:F.label})]}),$("div",{className:"alttab-callout-body",children:Q.content})]})}return $("blockquote",{children:z})}var LJ="alttab-markdown-styles",_J=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: ${E};
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
    font-size: ${I};
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
`;function TJ({children:z}){let Q=0,F=p.map(z,(U)=>{if(!S(U))return U;let X=Q%2===1;if(Q++,!X)return U;let Y=p.map(U.props.children,(G)=>{if(!S(G))return G;let W=G.props;return g(G,{style:{...W.style,background:`color-mix(in srgb, var(--color-text) ${c}, transparent)`}})});return g(U,{},Y)});return $("tbody",{children:F})}var yJ="alttab-markdown-editable",kJ=`
  .alttab-md-editable-display {
    position: relative;
    border-radius: ${J.radiusMd};
    transition: background ${J.transitionBase};
  }

  .alttab-md-editable-display:hover,
  .alttab-md-editable-display:focus-within {
    background: color-mix(in srgb, ${J.colorText} ${C}, transparent);
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
    background: color-mix(in srgb, ${J.colorText} ${C}, transparent);
  }
`,e={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:J.spaceSm,padding:`${J.spaceSm} ${J.spaceMd}`,fontFamily:J.fontSans,fontSize:J.fontSizeSm,fontWeight:J.fontWeightMedium,lineHeight:J.lineHeightTight,borderRadius:J.radiusMd,cursor:"pointer",transition:`background ${J.transitionBase}, border-color ${J.transitionBase}, opacity ${J.transitionBase}`},wJ={...e,background:J.colorActionPrimary,color:J.colorTextInverse,border:"none"},bJ={...e,background:J.colorActionSecondary,color:J.colorText,border:`${J.borderWidthDefault} solid ${J.colorBorder}`},r={pre:OJ,blockquote:MJ,tbody:TJ,h1:({children:z})=>$(T,{level:1,children:z}),h2:({children:z})=>$(T,{level:2,children:z}),h3:({children:z})=>$(T,{level:3,children:z}),h4:({children:z})=>$(T,{level:4,children:z}),h5:({children:z})=>$(T,{level:5,children:z}),h6:({children:z})=>$(T,{level:6,children:z})};function EJ({children:z,id:Q,"data-testid":F,editable:U=!1,editing:X=!1,value:Y,onStartEdit:G,onEditChange:W,onSave:N,onCancel:P,fieldLabel:H,rows:v=4,placeholder:M="Click to add content...",components:_,remarkPlugins:L}){j(LJ,_J),j(yJ,kJ);let[V,D]=i(!1),Z=l(null),K=z??"",k=o(()=>_?{..._,...r}:r,[_]),O=o(()=>L&&L.length>0?[d,...L]:[d],[L]),q=R(()=>{if(navigator.clipboard.writeText(K),D(!0),Z.current)clearTimeout(Z.current);Z.current=setTimeout(()=>D(!1),1500)},[K]),QJ=R((A)=>{if(A.key==="Escape")A.preventDefault(),P?.();else if(A.key==="Enter"&&(A.metaKey||A.ctrlKey))A.preventDefault(),N?.()},[P,N]);if(U){if(X)return B("div",{role:"group","aria-label":H,children:[$("textarea",{value:Y??"",onChange:(A)=>W?.(A.target.value),onKeyDown:QJ,rows:v,"aria-label":H?`Edit ${H}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:J.spaceSm,fontFamily:J.fontMono,fontSize:J.fontSizeSm,lineHeight:J.lineHeightRelaxed,color:J.colorText,background:J.colorSurfacePage,border:`${J.borderWidthDefault} solid ${J.colorBorder}`,borderRadius:J.radiusMd,resize:"vertical",outline:"none"}}),B("div",{style:{display:"flex",gap:J.spaceSm,marginTop:J.spaceSm},children:[$("button",{type:"button",onClick:N,style:wJ,children:"Save"}),$("button",{type:"button",onClick:P,style:bJ,children:"Cancel"})]})]});if(!K)return $("div",{className:"alttab-md-editable-empty",role:"button",tabIndex:0,"aria-label":H?`Add ${H}`:"Add content",onClick:G,onKeyDown:(A)=>{if(A.key==="Enter"||A.key===" ")A.preventDefault(),G?.()},children:M});return B("div",{className:"alttab-md-editable-display",children:[$("button",{type:"button",className:"alttab-md-editable-overlay","aria-label":H?`Edit ${H}`:"Edit content",onClick:G}),$("div",{className:"alttab-markdown",id:Q,"data-testid":F,children:$(a,{remarkPlugins:O,components:k,children:K})})]})}return B("div",{className:"alttab-markdown",id:Q,"data-testid":F,children:[$("button",{type:"button",className:"alttab-md-copy-source",onClick:q,"aria-label":"Copy markdown source",title:"Copy markdown",...V?{"data-copied":""}:{},children:V?$(t,{}):$(n,{})}),$(a,{remarkPlugins:O,components:k,children:K})]})}import{forwardRef as IJ}from"react";import{useInjectStyles as pJ}from"../../core/dist/index.js";import{jsx as y,jsxs as JJ}from"react/jsx-runtime";var CJ="alttab-epigraph",RJ=`
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
`;function gJ({children:z,cite:Q,innerRef:F}){return JJ("blockquote",{ref:F,"data-pull-quote":"",children:[y("p",{children:z}),Q&&y("footer",{children:Q})]})}function SJ({children:z,cite:Q,innerRef:F}){return pJ(CJ,RJ),JJ("blockquote",{ref:F,className:"alttab-epigraph",children:[y("p",{children:z}),Q&&y("footer",{children:Q})]})}var D0=IJ(function({children:Q,variant:F="pull",cite:U},X){if(F==="epigraph")return y(SJ,{innerRef:X,cite:U,children:Q});return y(gJ,{innerRef:X,cite:U,children:Q})});import{forwardRef as jJ}from"react";import{jsx as mJ}from"react/jsx-runtime";var P0=jJ(function({children:Q,side:F="left"},U){return mJ("small",{ref:U,"data-margin-note":"","data-side":F,children:Q})});import{forwardRef as uJ,useEffect as fJ,useRef as b,useCallback as u,useImperativeHandle as xJ}from"react";import{useInjectStyles as hJ}from"../../core/dist/index.js";import{jsx as aJ}from"react/jsx-runtime";var $J="abcdefghijklmnopqrstuvwxyz!?*~+#",cJ="alttab-thinking-cycle",oJ=`
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
`;function zJ(){return $J[Math.random()*$J.length|0]}var T0=uJ(function({words:Q,holdMs:F=2000,scrambleTicks:U=4,tickMs:X=50,staggerMs:Y=30},G){hJ(cJ,oJ);let W=b(null);xJ(G,()=>W.current);let N=b(0),P=b([]),H=b(null),v=b(null),M=u(()=>{let V=W.current;if(!V)return;let D=V.innerHTML;V.style.width="";let Z=[];for(let K of Q)V.textContent=K,Z.push(Math.ceil(V.getBoundingClientRect().width));V.innerHTML=D||"",P.current=Z,V.style.width=Z[N.current]+"px"},[Q]),_=u((V)=>{let D=W.current;if(!D)return;D.innerHTML="";for(let Z=0;Z<V.length;Z++){let K=document.createElement("span");K.className="alttab-char",K.textContent=V[Z],K.style.animationDelay=`${Z*Y}ms`,D.appendChild(K)}},[Y]),L=u((V,D)=>{let Z=W.current;if(!Z)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Z.textContent=V,D();return}Z.innerHTML="";let k=[];for(let O=0;O<V.length;O++){let q=document.createElement("span");q.className="alttab-char",q.style.animationDelay=`${O*Y}ms`,q.textContent=V[O]===" "?" ":zJ(),Z.appendChild(q),k.push({span:q,final:V[O],ticks:0,maxTicks:U+O*2})}v.current=setInterval(()=>{let O=!0;for(let q of k)if(q.ticks>=q.maxTicks)q.span.textContent=q.final;else O=!1,q.ticks++,q.span.textContent=q.final===" "?" ":zJ();if(O)clearInterval(v.current),v.current=null,D()},X)},[U,X,Y]);return fJ(()=>{if(Q.length<2)return;M(),document.fonts.ready.then(M);let V=()=>M();document.fonts.addEventListener("loadingdone",V);let D=new MutationObserver(()=>requestAnimationFrame(M));D.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),N.current=0,_(Q[0]);function Z(){N.current=(N.current+1)%Q.length;let K=W.current;if(K)K.style.width=P.current[N.current]+"px";L(Q[N.current],()=>{H.current=setTimeout(Z,F)})}return H.current=setTimeout(Z,F),()=>{if(H.current)clearTimeout(H.current);if(v.current)clearInterval(v.current);document.fonts.removeEventListener("loadingdone",V),D.disconnect()}},[Q,F,M,_,L]),aJ("span",{ref:W,className:"alttab-thinking"})});export{T0 as ThinkingCycle,D0 as Quote,z0 as Prose,h as PROSE_H2_SIZE,I as PROSE_H1_SIZE,rJ as PROSE_CODE_SIZE,E as PROSE_BODY_SIZE,iJ as PROSE_BLOCKQUOTE_SIZE,EJ as Markdown,P0 as MarginNote,c as MIX_SUBTLE,C as MIX_HOVER,lJ as MIX_BADGE,dJ as BREAKPOINT_WIDE,f as BREAKPOINT_PROSE,x as BREAKPOINT_MARGIN_NOTES};
