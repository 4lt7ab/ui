var u="680px",eJ="900px",h="1100px",I="1.0625rem",E="clamp(2rem, 5vw, 2.75rem)",c="1.35em",J0="0.875rem",$0="1.25rem",o="5%",w="8%",z0="14%";import{forwardRef as XJ}from"react";import{useInjectStyles as WJ}from"../../core/dist/index.js";import{jsx as KJ}from"react/jsx-runtime";var ZJ="alttab-prose-styles",FJ=`
  /* ── Typography ── */
  .alttab-prose {
    font-size: ${I};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: ${c};
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
    font-size: ${E};
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
    border-radius: 3px;
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

  @media (max-width: ${u}) {
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

  @media (min-width: ${h}) {
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
`,V0=XJ(function({children:$,id:X,"data-testid":W},K){return WJ(ZJ,FJ),KJ("div",{ref:K,className:"alttab-prose",id:X,"data-testid":W,children:$})});import{useState as d,useCallback as l,useRef as s,Children as C,cloneElement as R,isValidElement as p}from"react";import UJ from"react-markdown";import VJ from"remark-gfm";import{semantic as D,useInjectStyles as a}from"../../core/dist/index.js";import{jsx as z,jsxs as N}from"react/jsx-runtime";function m(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(m).join("");if(J&&typeof J==="object"&&"props"in J)return m(J.props.children);return""}function YJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var r={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function i(){return N("svg",{viewBox:"0 0 24 24",...r,children:[z("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),z("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function n(){return z("svg",{viewBox:"0 0 24 24",...r,children:z("path",{d:"M20 6L9 17l-5-5"})})}function GJ(){return N("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),z("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var y={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function QJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[z("circle",{cx:"12",cy:"12",r:"10"}),z("path",{d:"M12 16v-4"}),z("path",{d:"M12 8h.01"})]})}function qJ(){return z("svg",{viewBox:"0 0 24 24",...y,children:z("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function BJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[z("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),z("path",{d:"M12 8v3"}),z("path",{d:"M12 14h.01"})]})}function DJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[z("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),z("path",{d:"M12 9v4"}),z("path",{d:"M12 17h.01"})]})}function HJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[z("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),z("path",{d:"M15 9l-6 6"}),z("path",{d:"M9 9l6 6"})]})}var NJ="alttab-markdown-codeblock",PJ=`
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
    border: ${D.borderWidthDefault} solid ${D.colorBorder};
    border-radius: ${D.radiusSm};
    background: ${D.colorSurface};
    color: ${D.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${D.transitionBase}, color ${D.transitionBase}, border-color ${D.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${D.colorText};
    border-color: ${D.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${D.colorSuccess};
    border-color: ${D.colorSuccess};
  }
`;function AJ({children:J}){a(NJ,PJ);let[$,X]=d(!1),W=s(null),K=l(()=>{let V="",Y=(F)=>{if(typeof F==="string"){V+=F;return}if(Array.isArray(F)){F.forEach(Y);return}if(F&&typeof F==="object"&&"props"in F)Y(F.props.children)};if(Y(J),navigator.clipboard.writeText(V.replace(/\n$/,"")),X(!0),W.current)clearTimeout(W.current);W.current=setTimeout(()=>X(!1),1500)},[J]);return N("div",{className:"alttab-codeblock",children:[z("button",{type:"button",className:"alttab-codeblock-copy",onClick:K,"aria-label":"Copy code",...$?{"data-copied":""}:{},children:$?z(n,{}):z(i,{})}),z("pre",{children:J})]})}function _({level:J,children:$}){let X=`h${J}`,W=m($),K=YJ(W);return N(X,{id:K,children:[$,z("a",{href:`#${K}`,className:"alttab-md-anchor","aria-label":`Link to "${W}"`,children:z(GJ,{})})]})}var OJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,LJ={NOTE:{label:"Note",icon:QJ,attr:"note"},TIP:{label:"Tip",icon:qJ,attr:"tip"},IMPORTANT:{label:"Important",icon:BJ,attr:"important"},WARNING:{label:"Warning",icon:DJ,attr:"warning"},CAUTION:{label:"Caution",icon:HJ,attr:"caution"}};function _J(J){let $=C.toArray(J),X=$.findIndex(p);if(X===-1)return null;let W=$[X],K=C.toArray(W.props.children),V=K[0];if(typeof V!=="string")return null;let Y=V.match(OJ);if(!Y)return null;let F=Y[1],B=V.slice(Y[0].length);if(B||K.length>1){let L=B?[B,...K.slice(1)]:K.slice(1),O=R(W,{},...L);return{type:F,content:[...$.slice(0,X),O,...$.slice(X+1)]}}return{type:F,content:$.slice(X+1)}}function MJ({children:J}){let $=_J(J);if($){let X=LJ[$.type],W=X.icon;return N("div",{className:"alttab-callout","data-callout":X.attr,children:[N("div",{className:"alttab-callout-title",children:[z(W,{}),z("span",{children:X.label})]}),z("div",{className:"alttab-callout-body",children:$.content})]})}return z("blockquote",{children:J})}var TJ="alttab-markdown-styles",vJ=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: ${I};
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
    font-size: ${E};
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
    border-radius: 2px;
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
`;function yJ({children:J}){let $=0,X=C.map(J,(W)=>{if(!p(W))return W;let K=$%2===1;if($++,!K)return W;let V=C.map(W.props.children,(Y)=>{if(!p(Y))return Y;let F=Y.props;return R(Y,{style:{...F.style,background:`color-mix(in srgb, var(--color-text) ${o}, transparent)`}})});return R(W,{},V)});return z("tbody",{children:X})}var kJ={pre:AJ,blockquote:MJ,tbody:yJ,h1:({children:J})=>z(_,{level:1,children:J}),h2:({children:J})=>z(_,{level:2,children:J}),h3:({children:J})=>z(_,{level:3,children:J}),h4:({children:J})=>z(_,{level:4,children:J}),h5:({children:J})=>z(_,{level:5,children:J}),h6:({children:J})=>z(_,{level:6,children:J})};function S({children:J,id:$,"data-testid":X}){a(TJ,vJ);let[W,K]=d(!1),V=s(null),Y=l(()=>{if(navigator.clipboard.writeText(J),K(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>K(!1),1500)},[J]);return N("div",{className:"alttab-markdown",id:$,"data-testid":X,children:[z("button",{type:"button",className:"alttab-md-copy-source",onClick:Y,"aria-label":"Copy markdown source",title:"Copy markdown",...W?{"data-copied":""}:{},children:W?z(n,{}):z(i,{})}),z(UJ,{remarkPlugins:[VJ],components:kJ,children:J})]})}import{forwardRef as IJ}from"react";import{useInjectStyles as EJ}from"../../core/dist/index.js";import{jsx as M,jsxs as t}from"react/jsx-runtime";var CJ="alttab-epigraph",bJ=`
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
`;function wJ({children:J,cite:$,innerRef:X}){return t("blockquote",{ref:X,"data-pull-quote":"",children:[M("p",{children:J}),$&&M("footer",{children:$})]})}function RJ({children:J,cite:$,innerRef:X}){return EJ(CJ,bJ),t("blockquote",{ref:X,className:"alttab-epigraph",children:[M("p",{children:J}),$&&M("footer",{children:$})]})}var b=IJ(function({children:$,variant:X="pull",cite:W},K){if(X==="epigraph")return M(RJ,{innerRef:K,cite:W,children:$});return M(wJ,{innerRef:K,cite:W,children:$})});import{forwardRef as pJ}from"react";import{jsx as mJ}from"react/jsx-runtime";var I0=pJ(function({children:$},X){return mJ(b,{ref:X,variant:"pull",children:$})});import{forwardRef as SJ}from"react";import{jsx as gJ}from"react/jsx-runtime";var e=SJ(function({children:$,side:X="left"},W){return gJ("small",{ref:W,"data-margin-note":"","data-side":X,children:$})});import{forwardRef as jJ}from"react";import{jsx as xJ}from"react/jsx-runtime";var S0=jJ(function({children:$},X){return xJ(e,{ref:X,side:"right",children:$})});import{forwardRef as fJ}from"react";import{jsx as uJ}from"react/jsx-runtime";var u0=fJ(function({children:$,cite:X},W){return uJ(b,{ref:W,variant:"epigraph",cite:X,children:$})});import{useCallback as hJ}from"react";import{semantic as Z,useInjectStyles as cJ}from"../../core/dist/index.js";import{jsx as T,jsxs as JJ}from"react/jsx-runtime";var oJ="alttab-text-section",dJ=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${Z.radiusMd};
    transition: background ${Z.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${Z.colorText} ${w}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${Z.radiusMd};
    padding: ${Z.spaceSm} ${Z.spaceMd};
    font-style: italic;
    color: ${Z.colorTextMuted};
    transition: background ${Z.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${Z.colorText} ${w}, transparent);
  }
`;function a0({content:J,editing:$,editValue:X,onStartEdit:W,onEditChange:K,onSave:V,onCancel:Y,fieldLabel:F,rows:B=4,placeholder:L="Click to add content..."}){cJ(oJ,dJ);let O=hJ((U)=>{if(U.key==="Escape")U.preventDefault(),Y();else if(U.key==="Enter"&&(U.metaKey||U.ctrlKey))U.preventDefault(),V()},[Y,V]);if($)return JJ("div",{role:"group","aria-label":F,children:[T("textarea",{value:X,onChange:(U)=>K(U.target.value),onKeyDown:O,rows:B,"aria-label":F?`Edit ${F}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:Z.spaceSm,fontFamily:Z.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:Z.colorText,background:Z.colorSurfacePage,border:`${Z.borderWidthDefault} solid ${Z.colorBorder}`,borderRadius:Z.radiusMd,resize:"vertical",outline:"none"}}),JJ("div",{style:{display:"flex",gap:Z.spaceSm,marginTop:Z.spaceSm},children:[T("button",{type:"button",onClick:V,style:{padding:`${Z.spaceXs} ${Z.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.fontSans,color:Z.colorTextInverse,background:Z.colorActionPrimary,border:"none",borderRadius:Z.radiusSm,cursor:"pointer"},children:"Save"}),T("button",{type:"button",onClick:Y,style:{padding:`${Z.spaceXs} ${Z.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.fontSans,color:Z.colorTextSecondary,background:"transparent",border:`${Z.borderWidthDefault} solid ${Z.colorBorder}`,borderRadius:Z.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return T("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":F?`Edit ${F}`:"Edit content",onClick:W,onKeyDown:(U)=>{if(U.key==="Enter"||U.key===" ")U.preventDefault(),W()},children:T(S,{children:J})});return T("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":F?`Add ${F}`:"Add content",onClick:W,onKeyDown:(U)=>{if(U.key==="Enter"||U.key===" ")U.preventDefault(),W()},children:L})}import{forwardRef as lJ,useEffect as sJ,useRef as k,useCallback as g,useImperativeHandle as aJ}from"react";import{useInjectStyles as rJ}from"../../core/dist/index.js";import{jsx as tJ}from"react/jsx-runtime";var $J="abcdefghijklmnopqrstuvwxyz!?*~+#",iJ="alttab-thinking-cycle",nJ=`
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
`;function zJ(){return $J[Math.random()*$J.length|0]}var e0=lJ(function({words:$,holdMs:X=2000,scrambleTicks:W=4,tickMs:K=50,staggerMs:V=30},Y){rJ(iJ,nJ);let F=k(null);aJ(Y,()=>F.current);let B=k(0),L=k([]),O=k(null),U=k(null),v=g(()=>{let G=F.current;if(!G)return;let H=G.innerHTML;G.style.width="";let Q=[];for(let P of $)G.textContent=P,Q.push(Math.ceil(G.getBoundingClientRect().width));G.innerHTML=H||"",L.current=Q,G.style.width=Q[B.current]+"px"},[$]),j=g((G)=>{let H=F.current;if(!H)return;H.innerHTML="";for(let Q=0;Q<G.length;Q++){let P=document.createElement("span");P.className="alttab-char",P.textContent=G[Q],P.style.animationDelay=`${Q*V}ms`,H.appendChild(P)}},[V]),x=g((G,H)=>{let Q=F.current;if(!Q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Q.textContent=G,H();return}Q.innerHTML="";let f=[];for(let A=0;A<G.length;A++){let q=document.createElement("span");q.className="alttab-char",q.style.animationDelay=`${A*V}ms`,q.textContent=G[A]===" "?" ":zJ(),Q.appendChild(q),f.push({span:q,final:G[A],ticks:0,maxTicks:W+A*2})}U.current=setInterval(()=>{let A=!0;for(let q of f)if(q.ticks>=q.maxTicks)q.span.textContent=q.final;else A=!1,q.ticks++,q.span.textContent=q.final===" "?" ":zJ();if(A)clearInterval(U.current),U.current=null,H()},K)},[W,K,V]);return sJ(()=>{if($.length<2)return;v(),document.fonts.ready.then(v);let G=()=>v();document.fonts.addEventListener("loadingdone",G);let H=new MutationObserver(()=>requestAnimationFrame(v));H.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),B.current=0,j($[0]);function Q(){B.current=(B.current+1)%$.length;let P=F.current;if(P)P.style.width=L.current[B.current]+"px";x($[B.current],()=>{O.current=setTimeout(Q,X)})}return O.current=setTimeout(Q,X),()=>{if(O.current)clearTimeout(O.current);if(U.current)clearInterval(U.current);document.fonts.removeEventListener("loadingdone",G),H.disconnect()}},[$,X,v,j,x]),tJ("span",{ref:F,className:"alttab-thinking"})});export{e0 as ThinkingCycle,a0 as TextSection,S0 as SideNote,b as Quote,I0 as PullQuote,V0 as Prose,c as PROSE_H2_SIZE,E as PROSE_H1_SIZE,J0 as PROSE_CODE_SIZE,I as PROSE_BODY_SIZE,$0 as PROSE_BLOCKQUOTE_SIZE,S as Markdown,e as MarginNote,o as MIX_SUBTLE,w as MIX_HOVER,z0 as MIX_BADGE,u0 as Epigraph,eJ as BREAKPOINT_WIDE,u as BREAKPOINT_PROSE,h as BREAKPOINT_MARGIN_NOTES};
