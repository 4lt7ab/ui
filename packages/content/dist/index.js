import{forwardRef as o}from"react";import{jsx as l}from"react/jsx-runtime";var d={prose:"680px",wide:"900px"},aJ=o(function({width:Q="prose",maxWidth:$,padding:X="1.5rem",children:z,style:U,...V},K){return l("div",{ref:K,style:{boxSizing:"border-box",width:"100%",maxWidth:$??d[Q],marginInline:"auto",paddingInline:X,overflow:"visible",...U},...V,children:z})});import{forwardRef as i}from"react";import{useInjectStyles as t}from"../../core/dist/index.js";import{jsx as s}from"react/jsx-runtime";var r="alttab-prose-styles",n=`
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
`,iJ=i(function({children:Q,style:$,...X},z){return t(r,n),s("div",{ref:z,className:"alttab-prose",style:$,...X,children:Q})});import{useState as C,useCallback as S,useRef as g,Children as M,cloneElement as T,isValidElement as I}from"react";import e from"react-markdown";import JJ from"remark-gfm";import{semantic as O,useInjectStyles as p}from"../../core/dist/index.js";import{jsx as Z,jsxs as G}from"react/jsx-runtime";function b(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(b).join("");if(J&&typeof J==="object"&&"props"in J)return b(J.props.children);return""}function QJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var m={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function j(){return G("svg",{viewBox:"0 0 24 24",...m,children:[Z("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),Z("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function u(){return Z("svg",{viewBox:"0 0 24 24",...m,children:Z("path",{d:"M20 6L9 17l-5-5"})})}function ZJ(){return G("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Z("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),Z("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var A={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function $J(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("circle",{cx:"12",cy:"12",r:"10"}),Z("path",{d:"M12 16v-4"}),Z("path",{d:"M12 8h.01"})]})}function XJ(){return Z("svg",{viewBox:"0 0 24 24",...A,children:Z("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function zJ(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),Z("path",{d:"M12 8v3"}),Z("path",{d:"M12 14h.01"})]})}function KJ(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),Z("path",{d:"M12 9v4"}),Z("path",{d:"M12 17h.01"})]})}function UJ(){return G("svg",{viewBox:"0 0 24 24",...A,children:[Z("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),Z("path",{d:"M15 9l-6 6"}),Z("path",{d:"M9 9l6 6"})]})}var VJ="alttab-markdown-codeblock",qJ=`
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
`;function BJ({children:J}){p(VJ,qJ);let[Q,$]=C(!1),X=g(null),z=S(()=>{let U="",V=(K)=>{if(typeof K==="string"){U+=K;return}if(Array.isArray(K)){K.forEach(V);return}if(K&&typeof K==="object"&&"props"in K)V(K.props.children)};if(V(J),navigator.clipboard.writeText(U.replace(/\n$/,"")),$(!0),X.current)clearTimeout(X.current);X.current=setTimeout(()=>$(!1),1500)},[J]);return G("div",{className:"alttab-codeblock",children:[Z("button",{type:"button",className:"alttab-codeblock-copy",onClick:z,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?Z(u,{}):Z(j,{})}),Z("pre",{children:J})]})}function H({level:J,children:Q}){let $=`h${J}`,X=b(Q),z=QJ(X);return G($,{id:z,children:[Q,Z("a",{href:`#${z}`,className:"alttab-md-anchor","aria-label":`Link to "${X}"`,children:Z(ZJ,{})})]})}var FJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,YJ={NOTE:{label:"Note",icon:$J,attr:"note"},TIP:{label:"Tip",icon:XJ,attr:"tip"},IMPORTANT:{label:"Important",icon:zJ,attr:"important"},WARNING:{label:"Warning",icon:KJ,attr:"warning"},CAUTION:{label:"Caution",icon:UJ,attr:"caution"}};function GJ(J){let Q=M.toArray(J),$=Q.findIndex(I);if($===-1)return null;let X=Q[$],z=M.toArray(X.props.children),U=z[0];if(typeof U!=="string")return null;let V=U.match(FJ);if(!V)return null;let K=V[1],W=U.slice(V[0].length);if(W||z.length>1){let E=W?[W,...z.slice(1)]:z.slice(1),D=T(X,{},...E);return{type:K,content:[...Q.slice(0,$),D,...Q.slice($+1)]}}return{type:K,content:Q.slice($+1)}}function WJ({children:J}){let Q=GJ(J);if(Q){let $=YJ[Q.type],X=$.icon;return G("div",{className:"alttab-callout","data-callout":$.attr,children:[G("div",{className:"alttab-callout-title",children:[Z(X,{}),Z("span",{children:$.label})]}),Z("div",{className:"alttab-callout-body",children:Q.content})]})}return Z("blockquote",{children:J})}var NJ="alttab-markdown-styles",PJ=`
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
`;function OJ({children:J}){let Q=0,$=M.map(J,(X)=>{if(!I(X))return X;let z=Q%2===1;if(Q++,!z)return X;let U=M.map(X.props.children,(V)=>{if(!I(V))return V;let K=V.props;return T(V,{style:{...K.style,background:"color-mix(in srgb, var(--color-text) 5%, transparent)"}})});return T(X,{},U)});return Z("tbody",{children:$})}var DJ={pre:BJ,blockquote:WJ,tbody:OJ,h1:({children:J})=>Z(H,{level:1,children:J}),h2:({children:J})=>Z(H,{level:2,children:J}),h3:({children:J})=>Z(H,{level:3,children:J}),h4:({children:J})=>Z(H,{level:4,children:J}),h5:({children:J})=>Z(H,{level:5,children:J}),h6:({children:J})=>Z(H,{level:6,children:J})};function HJ({children:J,className:Q,...$}){p(NJ,PJ);let[X,z]=C(!1),U=g(null),V=S(()=>{if(navigator.clipboard.writeText(J),z(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>z(!1),1500)},[J]);return G("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...$,children:[Z("button",{type:"button",className:"alttab-md-copy-source",onClick:V,"aria-label":"Copy markdown source",title:"Copy markdown",...X?{"data-copied":""}:{},children:X?Z(u,{}):Z(j,{})}),Z(e,{remarkPlugins:[JJ],components:DJ,children:J})]})}import{forwardRef as LJ}from"react";import{jsx as f}from"react/jsx-runtime";var KQ=LJ(function({children:Q},$){return f("blockquote",{ref:$,"data-pull-quote":"",children:f("p",{children:Q})})});import{forwardRef as _J}from"react";import{jsx as AJ}from"react/jsx-runtime";var BQ=_J(function({children:Q},$){return AJ("small",{ref:$,"data-margin-note":"",children:Q})});import{forwardRef as vJ}from"react";import{jsx as EJ}from"react/jsx-runtime";var WQ=vJ(function({children:Q},$){return EJ("small",{ref:$,"data-side-note":"",children:Q})});import{forwardRef as MJ}from"react";import{useInjectStyles as TJ}from"../../core/dist/index.js";import{jsx as x,jsxs as kJ}from"react/jsx-runtime";var IJ="alttab-epigraph",bJ=`
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
`,HQ=MJ(function({children:Q,cite:$},X){return TJ(IJ,bJ),kJ("blockquote",{ref:X,className:"alttab-epigraph",children:[x("p",{children:Q}),$&&x("footer",{children:$})]})});import{forwardRef as yJ}from"react";import{useInjectStyles as RJ}from"../../core/dist/index.js";import{jsx as h,jsxs as SJ}from"react/jsx-runtime";var wJ="alttab-link-card",CJ=`
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
`,EQ=yJ(function({title:Q,description:$,external:X,children:z,...U},V){return RJ(wJ,CJ),SJ("a",{ref:V,className:"alttab-link-card",...X?{target:"_blank",rel:"noopener noreferrer"}:{},...U,children:[h("span",{className:"alttab-link-card__title",children:Q}),$&&h("span",{className:"alttab-link-card__desc",children:$}),z]})});import{forwardRef as gJ,useEffect as pJ,useRef as v,useCallback as k,useImperativeHandle as mJ}from"react";import{useInjectStyles as jJ}from"../../core/dist/index.js";import{jsx as xJ}from"react/jsx-runtime";var a="abcdefghijklmnopqrstuvwxyz!?*~+#",uJ="alttab-thinking-cycle",fJ=`
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
`;function c(){return a[Math.random()*a.length|0]}var kQ=gJ(function({words:Q,holdMs:$=2000,scrambleTicks:X=4,tickMs:z=50,staggerMs:U=30},V){jJ(uJ,fJ);let K=v(null);mJ(V,()=>K.current);let W=v(0),E=v([]),D=v(null),L=v(null),_=k(()=>{let q=K.current;if(!q)return;let Y=q.innerHTML;q.style.width="";let B=[];for(let N of Q)q.textContent=N,B.push(Math.ceil(q.getBoundingClientRect().width));q.innerHTML=Y||"",E.current=B,q.style.width=B[W.current]+"px"},[Q]),y=k((q)=>{let Y=K.current;if(!Y)return;Y.innerHTML="";for(let B=0;B<q.length;B++){let N=document.createElement("span");N.className="alttab-char",N.textContent=q[B],N.style.animationDelay=`${B*U}ms`,Y.appendChild(N)}},[U]),R=k((q,Y)=>{let B=K.current;if(!B)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){B.textContent=q,Y();return}B.innerHTML="";let w=[];for(let P=0;P<q.length;P++){let F=document.createElement("span");F.className="alttab-char",F.style.animationDelay=`${P*U}ms`,F.textContent=q[P]===" "?" ":c(),B.appendChild(F),w.push({span:F,final:q[P],ticks:0,maxTicks:X+P*2})}L.current=setInterval(()=>{let P=!0;for(let F of w)if(F.ticks>=F.maxTicks)F.span.textContent=F.final;else P=!1,F.ticks++,F.span.textContent=F.final===" "?" ":c();if(P)clearInterval(L.current),L.current=null,Y()},z)},[X,z,U]);return pJ(()=>{if(Q.length<2)return;_(),document.fonts.ready.then(_);let q=()=>_();document.fonts.addEventListener("loadingdone",q);let Y=new MutationObserver(()=>requestAnimationFrame(_));Y.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),W.current=0,y(Q[0]);function B(){W.current=(W.current+1)%Q.length;let N=K.current;if(N)N.style.width=E.current[W.current]+"px";R(Q[W.current],()=>{D.current=setTimeout(B,$)})}return D.current=setTimeout(B,$),()=>{if(D.current)clearTimeout(D.current);if(L.current)clearInterval(L.current);document.fonts.removeEventListener("loadingdone",q),Y.disconnect()}},[Q,$,_,y,R]),xJ("span",{ref:K,className:"alttab-thinking"})});export{kQ as ThinkingCycle,WQ as SideNote,KQ as PullQuote,iJ as Prose,HJ as Markdown,BQ as MarginNote,EQ as LinkCard,HQ as Epigraph,aJ as Container};
