var y="680px",f="900px",x="1100px",I="1.0625rem",b="clamp(2rem, 5vw, 2.75rem)",h="1.35em",zQ="0.875rem",UQ="1.25rem",c="5%",E="8%",XQ="14%";import{forwardRef as zJ}from"react";import{jsx as XJ}from"react/jsx-runtime";var UJ={prose:y,wide:f},VQ=zJ(function({width:Q="prose",maxWidth:z,padding:U="1.5rem",children:q,style:F,...V},Z){return XJ("div",{ref:Z,style:{boxSizing:"border-box",width:"100%",maxWidth:z??UJ[Q],marginInline:"auto",paddingInline:U,overflow:"visible",...F},...V,children:q})});import{forwardRef as ZJ}from"react";import{useInjectStyles as qJ}from"../../core/dist/index.js";import{jsx as WJ}from"react/jsx-runtime";var FJ="alttab-prose-styles",VJ=`
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
    font-size: ${b};
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

  @media (max-width: ${y}) {
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
    border-left: var(--border-width-thick) solid var(--color-border);
  }

  /* ── Side notes (right) ── */
  .alttab-prose [data-side-note] {
    display: block;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--color-text-muted);
    margin-block: 0.75rem;
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
`,NQ=ZJ(function({children:Q,style:z,...U},q){return qJ(FJ,VJ),WJ("div",{ref:q,className:"alttab-prose",style:z,...U,children:Q})});import{useState as o,useCallback as a,useRef as d,Children as w,cloneElement as C,isValidElement as p}from"react";import YJ from"react-markdown";import GJ from"remark-gfm";import{semantic as D,useInjectStyles as l}from"../../core/dist/index.js";import{jsx as $,jsxs as N}from"react/jsx-runtime";function R(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(R).join("");if(J&&typeof J==="object"&&"props"in J)return R(J.props.children);return""}function KJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var r={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function i(){return N("svg",{viewBox:"0 0 24 24",...r,children:[$("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function s(){return $("svg",{viewBox:"0 0 24 24",...r,children:$("path",{d:"M20 6L9 17l-5-5"})})}function BJ(){return N("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var _={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function DJ(){return N("svg",{viewBox:"0 0 24 24",..._,children:[$("circle",{cx:"12",cy:"12",r:"10"}),$("path",{d:"M12 16v-4"}),$("path",{d:"M12 8h.01"})]})}function HJ(){return $("svg",{viewBox:"0 0 24 24",..._,children:$("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function NJ(){return N("svg",{viewBox:"0 0 24 24",..._,children:[$("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$("path",{d:"M12 8v3"}),$("path",{d:"M12 14h.01"})]})}function PJ(){return N("svg",{viewBox:"0 0 24 24",..._,children:[$("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$("path",{d:"M12 9v4"}),$("path",{d:"M12 17h.01"})]})}function vJ(){return N("svg",{viewBox:"0 0 24 24",..._,children:[$("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$("path",{d:"M15 9l-6 6"}),$("path",{d:"M9 9l6 6"})]})}var AJ="alttab-markdown-codeblock",OJ=`
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
`;function LJ({children:J}){l(AJ,OJ);let[Q,z]=o(!1),U=d(null),q=a(()=>{let F="",V=(Z)=>{if(typeof Z==="string"){F+=Z;return}if(Array.isArray(Z)){Z.forEach(V);return}if(Z&&typeof Z==="object"&&"props"in Z)V(Z.props.children)};if(V(J),navigator.clipboard.writeText(F.replace(/\n$/,"")),z(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>z(!1),1500)},[J]);return N("div",{className:"alttab-codeblock",children:[$("button",{type:"button",className:"alttab-codeblock-copy",onClick:q,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$(s,{}):$(i,{})}),$("pre",{children:J})]})}function L({level:J,children:Q}){let z=`h${J}`,U=R(Q),q=KJ(U);return N(z,{id:q,children:[Q,$("a",{href:`#${q}`,className:"alttab-md-anchor","aria-label":`Link to "${U}"`,children:$(BJ,{})})]})}var MJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,TJ={NOTE:{label:"Note",icon:DJ,attr:"note"},TIP:{label:"Tip",icon:HJ,attr:"tip"},IMPORTANT:{label:"Important",icon:NJ,attr:"important"},WARNING:{label:"Warning",icon:PJ,attr:"warning"},CAUTION:{label:"Caution",icon:vJ,attr:"caution"}};function _J(J){let Q=w.toArray(J),z=Q.findIndex(p);if(z===-1)return null;let U=Q[z],q=w.toArray(U.props.children),F=q[0];if(typeof F!=="string")return null;let V=F.match(MJ);if(!V)return null;let Z=V[1],B=F.slice(V[0].length);if(B||q.length>1){let O=B?[B,...q.slice(1)]:q.slice(1),A=C(U,{},...O);return{type:Z,content:[...Q.slice(0,z),A,...Q.slice(z+1)]}}return{type:Z,content:Q.slice(z+1)}}function kJ({children:J}){let Q=_J(J);if(Q){let z=TJ[Q.type],U=z.icon;return N("div",{className:"alttab-callout","data-callout":z.attr,children:[N("div",{className:"alttab-callout-title",children:[$(U,{}),$("span",{children:z.label})]}),$("div",{className:"alttab-callout-body",children:Q.content})]})}return $("blockquote",{children:J})}var yJ="alttab-markdown-styles",IJ=`
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
    font-size: ${b};
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
`;function bJ({children:J}){let Q=0,z=w.map(J,(U)=>{if(!p(U))return U;let q=Q%2===1;if(Q++,!q)return U;let F=w.map(U.props.children,(V)=>{if(!p(V))return V;let Z=V.props;return C(V,{style:{...Z.style,background:`color-mix(in srgb, var(--color-text) ${c}, transparent)`}})});return C(U,{},F)});return $("tbody",{children:z})}var wJ={pre:LJ,blockquote:kJ,tbody:bJ,h1:({children:J})=>$(L,{level:1,children:J}),h2:({children:J})=>$(L,{level:2,children:J}),h3:({children:J})=>$(L,{level:3,children:J}),h4:({children:J})=>$(L,{level:4,children:J}),h5:({children:J})=>$(L,{level:5,children:J}),h6:({children:J})=>$(L,{level:6,children:J})};function g({children:J,className:Q,...z}){l(yJ,IJ);let[U,q]=o(!1),F=d(null),V=a(()=>{if(navigator.clipboard.writeText(J),q(!0),F.current)clearTimeout(F.current);F.current=setTimeout(()=>q(!1),1500)},[J]);return N("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...z,children:[$("button",{type:"button",className:"alttab-md-copy-source",onClick:V,"aria-label":"Copy markdown source",title:"Copy markdown",...U?{"data-copied":""}:{},children:U?$(s,{}):$(i,{})}),$(YJ,{remarkPlugins:[GJ],components:wJ,children:J})]})}import{forwardRef as EJ}from"react";import{jsx as n}from"react/jsx-runtime";var EQ=EJ(function({children:Q},z){return n("blockquote",{ref:z,"data-pull-quote":"",children:n("p",{children:Q})})});import{forwardRef as CJ}from"react";import{jsx as pJ}from"react/jsx-runtime";var gQ=CJ(function({children:Q},z){return pJ("small",{ref:z,"data-margin-note":"",children:Q})});import{forwardRef as RJ}from"react";import{jsx as gJ}from"react/jsx-runtime";var uQ=RJ(function({children:Q},z){return gJ("small",{ref:z,"data-side-note":"",children:Q})});import{forwardRef as mJ}from"react";import{useInjectStyles as jJ}from"../../core/dist/index.js";import{jsx as t,jsxs as fJ}from"react/jsx-runtime";var SJ="alttab-epigraph",uJ=`
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
`,oQ=mJ(function({children:Q,cite:z},U){return jJ(SJ,uJ),fJ("blockquote",{ref:U,className:"alttab-epigraph",children:[t("p",{children:Q}),z&&t("footer",{children:z})]})});import{forwardRef as xJ}from"react";import{useInjectStyles as hJ}from"../../core/dist/index.js";import{jsx as e,jsxs as aJ}from"react/jsx-runtime";var cJ="alttab-link-card",oJ=`
  .alttab-link-card {
    display: block;
    background: var(--color-surface);
    border: var(--border-width-thick) solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: border-color var(--transition-base), transform var(--transition-base);
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
`,iQ=xJ(function({title:Q,description:z,external:U,children:q,...F},V){return hJ(cJ,oJ),aJ("a",{ref:V,className:"alttab-link-card",...U?{target:"_blank",rel:"noopener noreferrer"}:{},...F,children:[e("span",{className:"alttab-link-card__title",children:Q}),z&&e("span",{className:"alttab-link-card__desc",children:z}),q]})});import{useCallback as dJ}from"react";import{semantic as X,useInjectStyles as lJ}from"../../core/dist/index.js";import{jsx as M,jsxs as JJ}from"react/jsx-runtime";var rJ="alttab-text-section",iJ=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${X.radiusMd};
    transition: background ${X.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${X.colorText} ${E}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${X.radiusMd};
    padding: ${X.spaceSm} ${X.spaceMd};
    font-style: italic;
    color: ${X.colorTextMuted};
    transition: background ${X.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${X.colorText} ${E}, transparent);
  }
`;function $0({content:J,editing:Q,editValue:z,onStartEdit:U,onEditChange:q,onSave:F,onCancel:V,fieldLabel:Z,rows:B=4,placeholder:O="Click to add content..."}){lJ(rJ,iJ);let A=dJ((W)=>{if(W.key==="Escape")W.preventDefault(),V();else if(W.key==="Enter"&&(W.metaKey||W.ctrlKey))W.preventDefault(),F()},[V,F]);if(Q)return JJ("div",{role:"group","aria-label":Z,children:[M("textarea",{value:z,onChange:(W)=>q(W.target.value),onKeyDown:A,rows:B,"aria-label":Z?`Edit ${Z}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:X.spaceSm,fontFamily:X.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:X.colorText,background:X.colorSurfacePage,border:`${X.borderWidthDefault} solid ${X.colorBorder}`,borderRadius:X.radiusMd,resize:"vertical",outline:"none"}}),JJ("div",{style:{display:"flex",gap:X.spaceSm,marginTop:X.spaceSm},children:[M("button",{type:"button",onClick:F,style:{padding:`${X.spaceXs} ${X.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:X.fontSans,color:X.colorTextInverse,background:X.colorActionPrimary,border:"none",borderRadius:X.radiusSm,cursor:"pointer"},children:"Save"}),M("button",{type:"button",onClick:V,style:{padding:`${X.spaceXs} ${X.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:X.fontSans,color:X.colorTextSecondary,background:"transparent",border:`${X.borderWidthDefault} solid ${X.colorBorder}`,borderRadius:X.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return M("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":Z?`Edit ${Z}`:"Edit content",onClick:U,onKeyDown:(W)=>{if(W.key==="Enter"||W.key===" ")W.preventDefault(),U()},children:M(g,{children:J})});return M("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":Z?`Add ${Z}`:"Add content",onClick:U,onKeyDown:(W)=>{if(W.key==="Enter"||W.key===" ")W.preventDefault(),U()},children:O})}import{forwardRef as sJ,useEffect as nJ,useRef as k,useCallback as m,useImperativeHandle as tJ}from"react";import{useInjectStyles as eJ}from"../../core/dist/index.js";import{jsx as $Q}from"react/jsx-runtime";var QJ="abcdefghijklmnopqrstuvwxyz!?*~+#",JQ="alttab-thinking-cycle",QQ=`
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
`;function $J(){return QJ[Math.random()*QJ.length|0]}var q0=sJ(function({words:Q,holdMs:z=2000,scrambleTicks:U=4,tickMs:q=50,staggerMs:F=30},V){eJ(JQ,QQ);let Z=k(null);tJ(V,()=>Z.current);let B=k(0),O=k([]),A=k(null),W=k(null),T=m(()=>{let Y=Z.current;if(!Y)return;let H=Y.innerHTML;Y.style.width="";let G=[];for(let P of Q)Y.textContent=P,G.push(Math.ceil(Y.getBoundingClientRect().width));Y.innerHTML=H||"",O.current=G,Y.style.width=G[B.current]+"px"},[Q]),j=m((Y)=>{let H=Z.current;if(!H)return;H.innerHTML="";for(let G=0;G<Y.length;G++){let P=document.createElement("span");P.className="alttab-char",P.textContent=Y[G],P.style.animationDelay=`${G*F}ms`,H.appendChild(P)}},[F]),S=m((Y,H)=>{let G=Z.current;if(!G)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){G.textContent=Y,H();return}G.innerHTML="";let u=[];for(let v=0;v<Y.length;v++){let K=document.createElement("span");K.className="alttab-char",K.style.animationDelay=`${v*F}ms`,K.textContent=Y[v]===" "?" ":$J(),G.appendChild(K),u.push({span:K,final:Y[v],ticks:0,maxTicks:U+v*2})}W.current=setInterval(()=>{let v=!0;for(let K of u)if(K.ticks>=K.maxTicks)K.span.textContent=K.final;else v=!1,K.ticks++,K.span.textContent=K.final===" "?" ":$J();if(v)clearInterval(W.current),W.current=null,H()},q)},[U,q,F]);return nJ(()=>{if(Q.length<2)return;T(),document.fonts.ready.then(T);let Y=()=>T();document.fonts.addEventListener("loadingdone",Y);let H=new MutationObserver(()=>requestAnimationFrame(T));H.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),B.current=0,j(Q[0]);function G(){B.current=(B.current+1)%Q.length;let P=Z.current;if(P)P.style.width=O.current[B.current]+"px";S(Q[B.current],()=>{A.current=setTimeout(G,z)})}return A.current=setTimeout(G,z),()=>{if(A.current)clearTimeout(A.current);if(W.current)clearInterval(W.current);document.fonts.removeEventListener("loadingdone",Y),H.disconnect()}},[Q,z,T,j,S]),$Q("span",{ref:Z,className:"alttab-thinking"})});export{q0 as ThinkingCycle,$0 as TextSection,uQ as SideNote,EQ as PullQuote,NQ as Prose,h as PROSE_H2_SIZE,b as PROSE_H1_SIZE,zQ as PROSE_CODE_SIZE,I as PROSE_BODY_SIZE,UQ as PROSE_BLOCKQUOTE_SIZE,g as Markdown,gQ as MarginNote,c as MIX_SUBTLE,E as MIX_HOVER,XQ as MIX_BADGE,iQ as LinkCard,oQ as Epigraph,VQ as Container,f as BREAKPOINT_WIDE,y as BREAKPOINT_PROSE,x as BREAKPOINT_MARGIN_NOTES};
