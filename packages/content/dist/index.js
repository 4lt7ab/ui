import{forwardRef as c}from"react";import{jsx as a}from"react/jsx-runtime";var o={prose:"680px",wide:"900px"},hJ=c(function({width:Q="prose",maxWidth:$,padding:V="1.5rem",children:X,style:K,...B},z){return a("div",{ref:z,style:{boxSizing:"border-box",width:"100%",maxWidth:$??o[Q],marginInline:"auto",paddingInline:V,overflow:"visible",...K},...B,children:X})});import{forwardRef as l}from"react";import{useInjectStyles as d}from "../../core/dist/index.js";import{jsx as r}from"react/jsx-runtime";var i="alttab-prose-styles",n=`
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
`,dJ=l(function({children:Q,style:$,...V},X){return d(i,n),r("div",{ref:X,className:"alttab-prose",style:$,...V,children:Q})});import{useState as w,useCallback as R,useRef as C,Children as y,cloneElement as t,isValidElement as s}from"react";import e from"react-markdown";import JJ from"remark-gfm";import{semantic as O,useInjectStyles as S}from "../../core/dist/index.js";import{jsx as Z,jsxs as G}from"react/jsx-runtime";function M(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(M).join("");if(J&&typeof J==="object"&&"props"in J)return M(J.props.children);return""}function QJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var g={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function p(){return G("svg",{viewBox:"0 0 24 24",...g,children:[Z("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),Z("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function m(){return Z("svg",{viewBox:"0 0 24 24",...g,children:Z("path",{d:"M20 6L9 17l-5-5"})})}function ZJ(){return G("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Z("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),Z("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var A={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function $J(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("circle",{cx:"12",cy:"12",r:"10"}),Z("path",{d:"M12 16v-4"}),Z("path",{d:"M12 8h.01"})]})}function VJ(){return Z("svg",{viewBox:"0 0 24 24",...A,children:Z("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function XJ(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),Z("path",{d:"M12 8v3"}),Z("path",{d:"M12 14h.01"})]})}function zJ(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),Z("path",{d:"M12 9v4"}),Z("path",{d:"M12 17h.01"})]})}function KJ(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),Z("path",{d:"M15 9l-6 6"}),Z("path",{d:"M9 9l6 6"})]})}var UJ="alttab-markdown-codeblock",qJ=`
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
    border: 1px solid ${O.colorBorder};
    border-radius: ${O.radiusSm};
    background: ${O.colorSurface};
    color: ${O.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${O.colorText};
    border-color: ${O.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${O.colorSuccess};
    border-color: ${O.colorSuccess};
  }
`;function BJ({children:J}){S(UJ,qJ);let[Q,$]=w(!1),V=C(null),X=R(()=>{let K="",B=(z)=>{if(typeof z==="string"){K+=z;return}if(Array.isArray(z)){z.forEach(B);return}if(z&&typeof z==="object"&&"props"in z)B(z.props.children)};if(B(J),navigator.clipboard.writeText(K.replace(/\n$/,"")),$(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>$(!1),1500)},[J]);return G("div",{className:"alttab-codeblock",children:[Z("button",{type:"button",className:"alttab-codeblock-copy",onClick:X,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?Z(m,{}):Z(p,{})}),Z("pre",{children:J})]})}function H({level:J,children:Q}){let $=`h${J}`,V=M(Q),X=QJ(V);return G($,{id:X,children:[Q,Z("a",{href:`#${X}`,className:"alttab-md-anchor","aria-label":`Link to "${V}"`,children:Z(ZJ,{})})]})}var FJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,YJ={NOTE:{label:"Note",icon:$J,attr:"note"},TIP:{label:"Tip",icon:VJ,attr:"tip"},IMPORTANT:{label:"Important",icon:XJ,attr:"important"},WARNING:{label:"Warning",icon:zJ,attr:"warning"},CAUTION:{label:"Caution",icon:KJ,attr:"caution"}};function GJ(J){let Q=y.toArray(J),$=Q.findIndex(s);if($===-1)return null;let V=Q[$],X=y.toArray(V.props.children),K=X[0];if(typeof K!=="string")return null;let B=K.match(FJ);if(!B)return null;let z=B[1],P=K.slice(B[0].length);if(P||X.length>1){let v=P?[P,...X.slice(1)]:X.slice(1),D=t(V,{},...v);return{type:z,content:[...Q.slice(0,$),D,...Q.slice($+1)]}}return{type:z,content:Q.slice($+1)}}function PJ({children:J}){let Q=GJ(J);if(Q){let $=YJ[Q.type],V=$.icon;return G("div",{className:"alttab-callout","data-callout":$.attr,children:[G("div",{className:"alttab-callout-title",children:[Z(V,{}),Z("span",{children:$.label})]}),Z("div",{className:"alttab-callout-body",children:Q.content})]})}return Z("blockquote",{children:J})}var WJ="alttab-markdown-styles",NJ=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: 1.0625rem;
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
    font-size: clamp(2rem, 5vw, 2.75rem);
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
    margin-block: 1em;
  }

  .alttab-markdown li + li {
    margin-top: 0.4em;
  }

  .alttab-markdown li::marker {
    color: var(--color-action-primary);
  }

  .alttab-markdown ul ul,
  .alttab-markdown ol ol,
  .alttab-markdown ul ol,
  .alttab-markdown ol ul {
    margin-block: 0.4em;
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

  .alttab-markdown tbody tr:hover {
    background: var(--color-surface-raised);
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
`,OJ={pre:BJ,blockquote:PJ,h1:({children:J})=>Z(H,{level:1,children:J}),h2:({children:J})=>Z(H,{level:2,children:J}),h3:({children:J})=>Z(H,{level:3,children:J}),h4:({children:J})=>Z(H,{level:4,children:J}),h5:({children:J})=>Z(H,{level:5,children:J}),h6:({children:J})=>Z(H,{level:6,children:J})};function DJ({children:J,className:Q,...$}){S(WJ,NJ);let[V,X]=w(!1),K=C(null),B=R(()=>{if(navigator.clipboard.writeText(J),X(!0),K.current)clearTimeout(K.current);K.current=setTimeout(()=>X(!1),1500)},[J]);return G("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...$,children:[Z("button",{type:"button",className:"alttab-md-copy-source",onClick:B,"aria-label":"Copy markdown source",title:"Copy markdown",...V?{"data-copied":""}:{},children:V?Z(m,{}):Z(p,{})}),Z(e,{remarkPlugins:[JJ],components:OJ,children:J})]})}import{forwardRef as HJ}from"react";import{jsx as j}from"react/jsx-runtime";var XQ=HJ(function({children:Q},$){return j("blockquote",{ref:$,"data-pull-quote":"",children:j("p",{children:Q})})});import{forwardRef as LJ}from"react";import{jsx as _J}from"react/jsx-runtime";var qQ=LJ(function({children:Q},$){return _J("small",{ref:$,"data-margin-note":"",children:Q})});import{forwardRef as AJ}from"react";import{jsx as EJ}from"react/jsx-runtime";var GQ=AJ(function({children:Q},$){return EJ("small",{ref:$,"data-side-note":"",children:Q})});import{forwardRef as vJ}from"react";import{useInjectStyles as MJ}from "../../core/dist/index.js";import{jsx as u,jsxs as bJ}from"react/jsx-runtime";var TJ="alttab-epigraph",IJ=`
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
`,DQ=vJ(function({children:Q,cite:$},V){return MJ(TJ,IJ),bJ("blockquote",{ref:V,className:"alttab-epigraph",children:[u("p",{children:Q}),$&&u("footer",{children:$})]})});import{forwardRef as kJ}from"react";import{useInjectStyles as yJ}from "../../core/dist/index.js";import{jsx as f,jsxs as CJ}from"react/jsx-runtime";var wJ="alttab-link-card",RJ=`
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
`,EQ=kJ(function({title:Q,description:$,external:V,children:X,...K},B){return yJ(wJ,RJ),CJ("a",{ref:B,className:"alttab-link-card",...V?{target:"_blank",rel:"noopener noreferrer"}:{},...K,children:[f("span",{className:"alttab-link-card__title",children:Q}),$&&f("span",{className:"alttab-link-card__desc",children:$}),X]})});import{forwardRef as SJ,useEffect as gJ,useRef as E,useCallback as T,useImperativeHandle as pJ}from"react";import{useInjectStyles as mJ}from "../../core/dist/index.js";import{jsx as fJ}from"react/jsx-runtime";var x="abcdefghijklmnopqrstuvwxyz!?*~+#",jJ="alttab-thinking-cycle",uJ=`
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
`;function h(){return x[Math.random()*x.length|0]}var bQ=SJ(function({words:Q,holdMs:$=2000,scrambleTicks:V=4,tickMs:X=50,staggerMs:K=30},B){mJ(jJ,uJ);let z=E(null);pJ(B,()=>z.current);let P=E(0),v=E([]),D=E(null),L=E(null),_=T(()=>{let U=z.current;if(!U)return;let Y=U.innerHTML;U.style.width="";let q=[];for(let W of Q)U.textContent=W,q.push(Math.ceil(U.getBoundingClientRect().width));U.innerHTML=Y||"",v.current=q,U.style.width=q[P.current]+"px"},[Q]),I=T((U)=>{let Y=z.current;if(!Y)return;Y.innerHTML="";for(let q=0;q<U.length;q++){let W=document.createElement("span");W.className="alttab-char",W.textContent=U[q],W.style.animationDelay=`${q*K}ms`,Y.appendChild(W)}},[K]),b=T((U,Y)=>{let q=z.current;if(!q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){q.textContent=U,Y();return}q.innerHTML="";let k=[];for(let N=0;N<U.length;N++){let F=document.createElement("span");F.className="alttab-char",F.style.animationDelay=`${N*K}ms`,F.textContent=U[N]===" "?" ":h(),q.appendChild(F),k.push({span:F,final:U[N],ticks:0,maxTicks:V+N*2})}L.current=setInterval(()=>{let N=!0;for(let F of k)if(F.ticks>=F.maxTicks)F.span.textContent=F.final;else N=!1,F.ticks++,F.span.textContent=F.final===" "?" ":h();if(N)clearInterval(L.current),L.current=null,Y()},X)},[V,X,K]);return gJ(()=>{if(Q.length<2)return;_(),document.fonts.ready.then(_);let U=()=>_();document.fonts.addEventListener("loadingdone",U);let Y=new MutationObserver(()=>requestAnimationFrame(_));Y.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),P.current=0,I(Q[0]);function q(){P.current=(P.current+1)%Q.length;let W=z.current;if(W)W.style.width=v.current[P.current]+"px";b(Q[P.current],()=>{D.current=setTimeout(q,$)})}return D.current=setTimeout(q,$),()=>{if(D.current)clearTimeout(D.current);if(L.current)clearInterval(L.current);document.fonts.removeEventListener("loadingdone",U),Y.disconnect()}},[Q,$,_,I,b]),fJ("span",{ref:z,className:"alttab-thinking"})});export{bQ as ThinkingCycle,GQ as SideNote,XQ as PullQuote,dJ as Prose,DJ as Markdown,qQ as MarginNote,EQ as LinkCard,DQ as Epigraph,hJ as Container};
