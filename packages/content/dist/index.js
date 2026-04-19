var u="680px",tJ="900px",h="1100px",E="1.0625rem",C="clamp(2rem, 5vw, 2.75rem)",c="1.35em",eJ="0.875rem",J1="1.25rem",o="5%",b="8%",$1="14%";import{forwardRef as XJ}from"react";import{useInjectStyles as WJ}from"../../core/dist/index.js";import{jsx as VJ}from"react/jsx-runtime";var ZJ="alttab-prose-styles",KJ=`
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
    font-size: ${C};
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
`,V1=XJ(function({children:$,id:X,"data-testid":W},K){return WJ(ZJ,KJ),VJ("div",{ref:K,className:"alttab-prose",id:X,"data-testid":W,children:$})});import{useState as r,useCallback as p,useRef as a,Children as w,cloneElement as m,isValidElement as g}from"react";import d from"react-markdown";import s from"remark-gfm";import{semantic as z,useInjectStyles as S}from"../../core/dist/index.js";import{jsx as F,jsxs as B}from"react/jsx-runtime";function j(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(j).join("");if(J&&typeof J==="object"&&"props"in J)return j(J.props.children);return""}function GJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var i={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function n(){return B("svg",{viewBox:"0 0 24 24",...i,children:[F("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),F("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function t(){return F("svg",{viewBox:"0 0 24 24",...i,children:F("path",{d:"M20 6L9 17l-5-5"})})}function UJ(){return B("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[F("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),F("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var y={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function YJ(){return B("svg",{viewBox:"0 0 24 24",...y,children:[F("circle",{cx:"12",cy:"12",r:"10"}),F("path",{d:"M12 16v-4"}),F("path",{d:"M12 8h.01"})]})}function QJ(){return F("svg",{viewBox:"0 0 24 24",...y,children:F("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function qJ(){return B("svg",{viewBox:"0 0 24 24",...y,children:[F("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),F("path",{d:"M12 8v3"}),F("path",{d:"M12 14h.01"})]})}function HJ(){return B("svg",{viewBox:"0 0 24 24",...y,children:[F("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),F("path",{d:"M12 9v4"}),F("path",{d:"M12 17h.01"})]})}function DJ(){return B("svg",{viewBox:"0 0 24 24",...y,children:[F("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),F("path",{d:"M15 9l-6 6"}),F("path",{d:"M9 9l6 6"})]})}var NJ="alttab-markdown-codeblock",BJ=`
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
    border: ${z.borderWidthDefault} solid ${z.colorBorder};
    border-radius: ${z.radiusSm};
    background: ${z.colorSurface};
    color: ${z.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${z.transitionBase}, color ${z.transitionBase}, border-color ${z.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${z.colorText};
    border-color: ${z.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${z.colorSuccess};
    border-color: ${z.colorSuccess};
  }
`;function PJ({children:J}){S(NJ,BJ);let[$,X]=r(!1),W=a(null),K=p(()=>{let Q="",G=(Z)=>{if(typeof Z==="string"){Q+=Z;return}if(Array.isArray(Z)){Z.forEach(G);return}if(Z&&typeof Z==="object"&&"props"in Z)G(Z.props.children)};if(G(J),navigator.clipboard.writeText(Q.replace(/\n$/,"")),X(!0),W.current)clearTimeout(W.current);W.current=setTimeout(()=>X(!1),1500)},[J]);return B("div",{className:"alttab-codeblock",children:[F("button",{type:"button",className:"alttab-codeblock-copy",onClick:K,"aria-label":"Copy code",...$?{"data-copied":""}:{},children:$?F(t,{}):F(n,{})}),F("pre",{children:J})]})}function M({level:J,children:$}){let X=`h${J}`,W=j($),K=GJ(W);return B(X,{id:K,children:[$,F("a",{href:`#${K}`,className:"alttab-md-anchor","aria-label":`Link to "${W}"`,children:F(UJ,{})})]})}var OJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,AJ={NOTE:{label:"Note",icon:YJ,attr:"note"},TIP:{label:"Tip",icon:QJ,attr:"tip"},IMPORTANT:{label:"Important",icon:qJ,attr:"important"},WARNING:{label:"Warning",icon:HJ,attr:"warning"},CAUTION:{label:"Caution",icon:DJ,attr:"caution"}};function LJ(J){let $=w.toArray(J),X=$.findIndex(g);if(X===-1)return null;let W=$[X],K=w.toArray(W.props.children),Q=K[0];if(typeof Q!=="string")return null;let G=Q.match(OJ);if(!G)return null;let Z=G[1],H=Q.slice(G[0].length);if(H||K.length>1){let O=H?[H,...K.slice(1)]:K.slice(1),D=m(W,{},...O);return{type:Z,content:[...$.slice(0,X),D,...$.slice(X+1)]}}return{type:Z,content:$.slice(X+1)}}function _J({children:J}){let $=LJ(J);if($){let X=AJ[$.type],W=X.icon;return B("div",{className:"alttab-callout","data-callout":X.attr,children:[B("div",{className:"alttab-callout-title",children:[F(W,{}),F("span",{children:X.label})]}),F("div",{className:"alttab-callout-body",children:$.content})]})}return F("blockquote",{children:J})}var MJ="alttab-markdown-styles",TJ=`
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
    font-size: ${C};
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
`;function vJ({children:J}){let $=0,X=w.map(J,(W)=>{if(!g(W))return W;let K=$%2===1;if($++,!K)return W;let Q=w.map(W.props.children,(G)=>{if(!g(G))return G;let Z=G.props;return m(G,{style:{...Z.style,background:`color-mix(in srgb, var(--color-text) ${o}, transparent)`}})});return m(W,{},Q)});return F("tbody",{children:X})}var kJ="alttab-markdown-editable",yJ=`
  .alttab-md-editable-display {
    cursor: pointer;
    border-radius: ${z.radiusMd};
    transition: background ${z.transitionBase};
  }

  .alttab-md-editable-display:hover {
    background: color-mix(in srgb, ${z.colorText} ${b}, transparent);
  }

  .alttab-md-editable-empty {
    cursor: pointer;
    border-radius: ${z.radiusMd};
    padding: ${z.spaceSm} ${z.spaceMd};
    font-style: italic;
    color: ${z.colorTextMuted};
    transition: background ${z.transitionBase};
  }

  .alttab-md-editable-empty:hover {
    background: color-mix(in srgb, ${z.colorText} ${b}, transparent);
  }
`,e={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:z.spaceSm,padding:`${z.spaceSm} ${z.spaceMd}`,fontFamily:z.fontSans,fontSize:z.fontSizeSm,fontWeight:z.fontWeightMedium,lineHeight:z.lineHeightTight,borderRadius:z.radiusMd,cursor:"pointer",transition:`background ${z.transitionBase}, border-color ${z.transitionBase}, opacity ${z.transitionBase}`},IJ={...e,background:z.colorActionPrimary,color:z.colorTextInverse,border:"none"},EJ={...e,background:z.colorActionSecondary,color:z.colorText,border:`${z.borderWidthDefault} solid ${z.colorBorder}`},l={pre:PJ,blockquote:_J,tbody:vJ,h1:({children:J})=>F(M,{level:1,children:J}),h2:({children:J})=>F(M,{level:2,children:J}),h3:({children:J})=>F(M,{level:3,children:J}),h4:({children:J})=>F(M,{level:4,children:J}),h5:({children:J})=>F(M,{level:5,children:J}),h6:({children:J})=>F(M,{level:6,children:J})};function x({children:J,id:$,"data-testid":X,editable:W=!1,editing:K=!1,value:Q,onStartEdit:G,onEditChange:Z,onSave:H,onCancel:O,fieldLabel:D,rows:L=4,placeholder:_="Click to add content..."}){S(MJ,TJ),S(kJ,yJ);let[v,k]=r(!1),V=a(null),q=J??"",Y=p(()=>{if(navigator.clipboard.writeText(q),k(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>k(!1),1500)},[q]),P=p((U)=>{if(U.key==="Escape")U.preventDefault(),O?.();else if(U.key==="Enter"&&(U.metaKey||U.ctrlKey))U.preventDefault(),H?.()},[O,H]);if(W){if(K)return B("div",{role:"group","aria-label":D,children:[F("textarea",{value:Q??"",onChange:(U)=>Z?.(U.target.value),onKeyDown:P,rows:L,"aria-label":D?`Edit ${D}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:z.spaceSm,fontFamily:z.fontMono,fontSize:z.fontSizeSm,lineHeight:z.lineHeightRelaxed,color:z.colorText,background:z.colorSurfacePage,border:`${z.borderWidthDefault} solid ${z.colorBorder}`,borderRadius:z.radiusMd,resize:"vertical",outline:"none"}}),B("div",{style:{display:"flex",gap:z.spaceSm,marginTop:z.spaceSm},children:[F("button",{type:"button",onClick:H,style:IJ,children:"Save"}),F("button",{type:"button",onClick:O,style:EJ,children:"Cancel"})]})]});if(!q)return F("div",{className:"alttab-md-editable-empty",role:"button",tabIndex:0,"aria-label":D?`Add ${D}`:"Add content",onClick:G,onKeyDown:(U)=>{if(U.key==="Enter"||U.key===" ")U.preventDefault(),G?.()},children:_});return F("div",{className:"alttab-md-editable-display",role:"button",tabIndex:0,"aria-label":D?`Edit ${D}`:"Edit content",onClick:G,onKeyDown:(U)=>{if(U.key==="Enter"||U.key===" ")U.preventDefault(),G?.()},children:F("div",{className:"alttab-markdown",id:$,"data-testid":X,children:F(d,{remarkPlugins:[s],components:l,children:q})})})}return B("div",{className:"alttab-markdown",id:$,"data-testid":X,children:[F("button",{type:"button",className:"alttab-md-copy-source",onClick:Y,"aria-label":"Copy markdown source",title:"Copy markdown",...v?{"data-copied":""}:{},children:v?F(t,{}):F(n,{})}),F(d,{remarkPlugins:[s],components:l,children:q})]})}import{forwardRef as CJ}from"react";import{useInjectStyles as wJ}from"../../core/dist/index.js";import{jsx as T,jsxs as JJ}from"react/jsx-runtime";var RJ="alttab-epigraph",bJ=`
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
`;function pJ({children:J,cite:$,innerRef:X}){return JJ("blockquote",{ref:X,"data-pull-quote":"",children:[T("p",{children:J}),$&&T("footer",{children:$})]})}function mJ({children:J,cite:$,innerRef:X}){return wJ(RJ,bJ),JJ("blockquote",{ref:X,className:"alttab-epigraph",children:[T("p",{children:J}),$&&T("footer",{children:$})]})}var R=CJ(function({children:$,variant:X="pull",cite:W},K){if(X==="epigraph")return T(mJ,{innerRef:K,cite:W,children:$});return T(pJ,{innerRef:K,cite:W,children:$})});import{forwardRef as gJ}from"react";import{jsx as SJ}from"react/jsx-runtime";var k1=gJ(function({children:$},X){return SJ(R,{ref:X,variant:"pull",children:$})});import{forwardRef as jJ}from"react";import{jsx as xJ}from"react/jsx-runtime";var $J=jJ(function({children:$,side:X="left"},W){return xJ("small",{ref:W,"data-margin-note":"","data-side":X,children:$})});import{forwardRef as fJ}from"react";import{jsx as uJ}from"react/jsx-runtime";var p1=fJ(function({children:$},X){return uJ($J,{ref:X,side:"right",children:$})});import{forwardRef as hJ}from"react";import{jsx as cJ}from"react/jsx-runtime";var x1=hJ(function({children:$,cite:X},W){return cJ(R,{ref:W,variant:"epigraph",cite:X,children:$})});import{jsx as oJ}from"react/jsx-runtime";function c1({content:J,editing:$,editValue:X,onStartEdit:W,onEditChange:K,onSave:Q,onCancel:G,fieldLabel:Z,rows:H,placeholder:O}){return oJ(x,{editable:!0,editing:$,value:X,onStartEdit:W,onEditChange:K,onSave:Q,onCancel:G,fieldLabel:Z,rows:H,placeholder:O,children:J??""})}import{forwardRef as dJ,useEffect as sJ,useRef as I,useCallback as f,useImperativeHandle as lJ}from"react";import{useInjectStyles as rJ}from"../../core/dist/index.js";import{jsx as nJ}from"react/jsx-runtime";var zJ="abcdefghijklmnopqrstuvwxyz!?*~+#",aJ="alttab-thinking-cycle",iJ=`
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
`;function FJ(){return zJ[Math.random()*zJ.length|0]}var r1=dJ(function({words:$,holdMs:X=2000,scrambleTicks:W=4,tickMs:K=50,staggerMs:Q=30},G){rJ(aJ,iJ);let Z=I(null);lJ(G,()=>Z.current);let H=I(0),O=I([]),D=I(null),L=I(null),_=f(()=>{let V=Z.current;if(!V)return;let q=V.innerHTML;V.style.width="";let Y=[];for(let P of $)V.textContent=P,Y.push(Math.ceil(V.getBoundingClientRect().width));V.innerHTML=q||"",O.current=Y,V.style.width=Y[H.current]+"px"},[$]),v=f((V)=>{let q=Z.current;if(!q)return;q.innerHTML="";for(let Y=0;Y<V.length;Y++){let P=document.createElement("span");P.className="alttab-char",P.textContent=V[Y],P.style.animationDelay=`${Y*Q}ms`,q.appendChild(P)}},[Q]),k=f((V,q)=>{let Y=Z.current;if(!Y)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Y.textContent=V,q();return}Y.innerHTML="";let U=[];for(let A=0;A<V.length;A++){let N=document.createElement("span");N.className="alttab-char",N.style.animationDelay=`${A*Q}ms`,N.textContent=V[A]===" "?" ":FJ(),Y.appendChild(N),U.push({span:N,final:V[A],ticks:0,maxTicks:W+A*2})}L.current=setInterval(()=>{let A=!0;for(let N of U)if(N.ticks>=N.maxTicks)N.span.textContent=N.final;else A=!1,N.ticks++,N.span.textContent=N.final===" "?" ":FJ();if(A)clearInterval(L.current),L.current=null,q()},K)},[W,K,Q]);return sJ(()=>{if($.length<2)return;_(),document.fonts.ready.then(_);let V=()=>_();document.fonts.addEventListener("loadingdone",V);let q=new MutationObserver(()=>requestAnimationFrame(_));q.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),H.current=0,v($[0]);function Y(){H.current=(H.current+1)%$.length;let P=Z.current;if(P)P.style.width=O.current[H.current]+"px";k($[H.current],()=>{D.current=setTimeout(Y,X)})}return D.current=setTimeout(Y,X),()=>{if(D.current)clearTimeout(D.current);if(L.current)clearInterval(L.current);document.fonts.removeEventListener("loadingdone",V),q.disconnect()}},[$,X,_,v,k]),nJ("span",{ref:Z,className:"alttab-thinking"})});export{r1 as ThinkingCycle,c1 as TextSection,p1 as SideNote,R as Quote,k1 as PullQuote,V1 as Prose,c as PROSE_H2_SIZE,C as PROSE_H1_SIZE,eJ as PROSE_CODE_SIZE,E as PROSE_BODY_SIZE,J1 as PROSE_BLOCKQUOTE_SIZE,x as Markdown,$J as MarginNote,o as MIX_SUBTLE,b as MIX_HOVER,$1 as MIX_BADGE,x1 as Epigraph,tJ as BREAKPOINT_WIDE,u as BREAKPOINT_PROSE,h as BREAKPOINT_MARGIN_NOTES};
