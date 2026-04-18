var E="680px",h="900px",c="1100px",I="1.0625rem",C="clamp(2rem, 5vw, 2.75rem)",o="1.35em",Y0="0.875rem",G0="1.25rem",d="5%",w="8%",Q0="14%";import{forwardRef as FJ}from"react";import{jsx as VJ}from"react/jsx-runtime";var WJ={narrow:"32rem",prose:E,wide:h,full:"100%"},UJ={none:"0",sm:"0.75rem",md:"1.5rem",lg:"3rem"},H0=FJ(function({width:$="prose",padding:z="md",children:X,id:U,"data-testid":V},K){return VJ("div",{ref:K,id:U,"data-testid":V,style:{boxSizing:"border-box",width:"100%",maxWidth:WJ[$],marginInline:"auto",paddingInline:UJ[z],overflow:"visible"},children:X})});import{forwardRef as KJ}from"react";import{useInjectStyles as YJ}from"../../core/dist/index.js";import{jsx as qJ}from"react/jsx-runtime";var GJ="alttab-prose-styles",QJ=`
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
    font-size: ${o};
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

  @media (max-width: ${E}) {
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

  @media (min-width: ${c}) {
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
`,v0=KJ(function({children:$,id:z,"data-testid":X},U){return YJ(GJ,QJ),qJ("div",{ref:U,className:"alttab-prose",id:z,"data-testid":X,children:$})});import{useState as l,useCallback as s,useRef as a,Children as b,cloneElement as m,isValidElement as p}from"react";import BJ from"react-markdown";import DJ from"remark-gfm";import{semantic as D,useInjectStyles as r}from"../../core/dist/index.js";import{jsx as Z,jsxs as N}from"react/jsx-runtime";function S(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(S).join("");if(J&&typeof J==="object"&&"props"in J)return S(J.props.children);return""}function HJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var n={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function i(){return N("svg",{viewBox:"0 0 24 24",...n,children:[Z("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),Z("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function t(){return Z("svg",{viewBox:"0 0 24 24",...n,children:Z("path",{d:"M20 6L9 17l-5-5"})})}function NJ(){return N("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Z("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),Z("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var y={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function PJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[Z("circle",{cx:"12",cy:"12",r:"10"}),Z("path",{d:"M12 16v-4"}),Z("path",{d:"M12 8h.01"})]})}function AJ(){return Z("svg",{viewBox:"0 0 24 24",...y,children:Z("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function OJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[Z("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),Z("path",{d:"M12 8v3"}),Z("path",{d:"M12 14h.01"})]})}function LJ(){return N("svg",{viewBox:"0 0 24 24",...y,children:[Z("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),Z("path",{d:"M12 9v4"}),Z("path",{d:"M12 17h.01"})]})}function _J(){return N("svg",{viewBox:"0 0 24 24",...y,children:[Z("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),Z("path",{d:"M15 9l-6 6"}),Z("path",{d:"M9 9l6 6"})]})}var MJ="alttab-markdown-codeblock",vJ=`
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
`;function TJ({children:J}){r(MJ,vJ);let[$,z]=l(!1),X=a(null),U=s(()=>{let V="",K=(W)=>{if(typeof W==="string"){V+=W;return}if(Array.isArray(W)){W.forEach(K);return}if(W&&typeof W==="object"&&"props"in W)K(W.props.children)};if(K(J),navigator.clipboard.writeText(V.replace(/\n$/,"")),z(!0),X.current)clearTimeout(X.current);X.current=setTimeout(()=>z(!1),1500)},[J]);return N("div",{className:"alttab-codeblock",children:[Z("button",{type:"button",className:"alttab-codeblock-copy",onClick:U,"aria-label":"Copy code",...$?{"data-copied":""}:{},children:$?Z(t,{}):Z(i,{})}),Z("pre",{children:J})]})}function _({level:J,children:$}){let z=`h${J}`,X=S($),U=HJ(X);return N(z,{id:U,children:[$,Z("a",{href:`#${U}`,className:"alttab-md-anchor","aria-label":`Link to "${X}"`,children:Z(NJ,{})})]})}var yJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,kJ={NOTE:{label:"Note",icon:PJ,attr:"note"},TIP:{label:"Tip",icon:AJ,attr:"tip"},IMPORTANT:{label:"Important",icon:OJ,attr:"important"},WARNING:{label:"Warning",icon:LJ,attr:"warning"},CAUTION:{label:"Caution",icon:_J,attr:"caution"}};function EJ(J){let $=b.toArray(J),z=$.findIndex(p);if(z===-1)return null;let X=$[z],U=b.toArray(X.props.children),V=U[0];if(typeof V!=="string")return null;let K=V.match(yJ);if(!K)return null;let W=K[1],q=V.slice(K[0].length);if(q||U.length>1){let L=q?[q,...U.slice(1)]:U.slice(1),P=m(X,{},...L);return{type:W,content:[...$.slice(0,z),P,...$.slice(z+1)]}}return{type:W,content:$.slice(z+1)}}function IJ({children:J}){let $=EJ(J);if($){let z=kJ[$.type],X=z.icon;return N("div",{className:"alttab-callout","data-callout":z.attr,children:[N("div",{className:"alttab-callout-title",children:[Z(X,{}),Z("span",{children:z.label})]}),Z("div",{className:"alttab-callout-body",children:$.content})]})}return Z("blockquote",{children:J})}var CJ="alttab-markdown-styles",bJ=`
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
`;function RJ({children:J}){let $=0,z=b.map(J,(X)=>{if(!p(X))return X;let U=$%2===1;if($++,!U)return X;let V=b.map(X.props.children,(K)=>{if(!p(K))return K;let W=K.props;return m(K,{style:{...W.style,background:`color-mix(in srgb, var(--color-text) ${d}, transparent)`}})});return m(X,{},V)});return Z("tbody",{children:z})}var wJ={pre:TJ,blockquote:IJ,tbody:RJ,h1:({children:J})=>Z(_,{level:1,children:J}),h2:({children:J})=>Z(_,{level:2,children:J}),h3:({children:J})=>Z(_,{level:3,children:J}),h4:({children:J})=>Z(_,{level:4,children:J}),h5:({children:J})=>Z(_,{level:5,children:J}),h6:({children:J})=>Z(_,{level:6,children:J})};function g({children:J,id:$,"data-testid":z}){r(CJ,bJ);let[X,U]=l(!1),V=a(null),K=s(()=>{if(navigator.clipboard.writeText(J),U(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>U(!1),1500)},[J]);return N("div",{className:"alttab-markdown",id:$,"data-testid":z,children:[Z("button",{type:"button",className:"alttab-md-copy-source",onClick:K,"aria-label":"Copy markdown source",title:"Copy markdown",...X?{"data-copied":""}:{},children:X?Z(t,{}):Z(i,{})}),Z(BJ,{remarkPlugins:[DJ],components:wJ,children:J})]})}import{forwardRef as mJ}from"react";import{useInjectStyles as pJ}from"../../core/dist/index.js";import{jsx as M,jsxs as e}from"react/jsx-runtime";var SJ="alttab-epigraph",gJ=`
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
`;function jJ({children:J,cite:$,innerRef:z}){return e("blockquote",{ref:z,"data-pull-quote":"",children:[M("p",{children:J}),$&&M("footer",{children:$})]})}function xJ({children:J,cite:$,innerRef:z}){return pJ(SJ,gJ),e("blockquote",{ref:z,className:"alttab-epigraph",children:[M("p",{children:J}),$&&M("footer",{children:$})]})}var R=mJ(function({children:$,variant:z="pull",cite:X},U){if(z==="epigraph")return M(xJ,{innerRef:U,cite:X,children:$});return M(jJ,{innerRef:U,cite:X,children:$})});import{forwardRef as fJ}from"react";import{jsx as uJ}from"react/jsx-runtime";var c0=fJ(function({children:$},z){return uJ(R,{ref:z,variant:"pull",children:$})});import{forwardRef as hJ}from"react";import{jsx as cJ}from"react/jsx-runtime";var JJ=hJ(function({children:$,side:z="left"},X){return cJ("small",{ref:X,"data-margin-note":"","data-side":z,children:$})});import{forwardRef as oJ}from"react";import{jsx as dJ}from"react/jsx-runtime";var i0=oJ(function({children:$},z){return dJ(JJ,{ref:z,side:"right",children:$})});import{forwardRef as lJ}from"react";import{jsx as sJ}from"react/jsx-runtime";var z1=lJ(function({children:$,cite:z},X){return sJ(R,{ref:X,variant:"epigraph",cite:z,children:$})});import{forwardRef as aJ}from"react";import{useInjectStyles as rJ}from"../../core/dist/index.js";import{jsx as $J,jsxs as tJ}from"react/jsx-runtime";var nJ="alttab-link-card",iJ=`
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
`,U1=aJ(function({title:$,description:z,external:X,href:U,target:V,rel:K,onClick:W,id:q,"aria-label":L,"data-testid":P},Y){return rJ(nJ,iJ),tJ("a",{ref:Y,className:"alttab-link-card",href:U,target:X?"_blank":V,rel:X?"noopener noreferrer":K,onClick:W,id:q,"aria-label":L,"data-testid":P,children:[$J("span",{className:"alttab-link-card__title",children:$}),z&&$J("span",{className:"alttab-link-card__desc",children:z})]})});import{useCallback as eJ}from"react";import{semantic as F,useInjectStyles as J0}from"../../core/dist/index.js";import{jsx as v,jsxs as zJ}from"react/jsx-runtime";var $0="alttab-text-section",z0=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${F.radiusMd};
    transition: background ${F.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${F.colorText} ${w}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${F.radiusMd};
    padding: ${F.spaceSm} ${F.spaceMd};
    font-style: italic;
    color: ${F.colorTextMuted};
    transition: background ${F.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${F.colorText} ${w}, transparent);
  }
`;function B1({content:J,editing:$,editValue:z,onStartEdit:X,onEditChange:U,onSave:V,onCancel:K,fieldLabel:W,rows:q=4,placeholder:L="Click to add content..."}){J0($0,z0);let P=eJ((Y)=>{if(Y.key==="Escape")Y.preventDefault(),K();else if(Y.key==="Enter"&&(Y.metaKey||Y.ctrlKey))Y.preventDefault(),V()},[K,V]);if($)return zJ("div",{role:"group","aria-label":W,children:[v("textarea",{value:z,onChange:(Y)=>U(Y.target.value),onKeyDown:P,rows:q,"aria-label":W?`Edit ${W}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:F.spaceSm,fontFamily:F.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:F.colorText,background:F.colorSurfacePage,border:`${F.borderWidthDefault} solid ${F.colorBorder}`,borderRadius:F.radiusMd,resize:"vertical",outline:"none"}}),zJ("div",{style:{display:"flex",gap:F.spaceSm,marginTop:F.spaceSm},children:[v("button",{type:"button",onClick:V,style:{padding:`${F.spaceXs} ${F.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:F.fontSans,color:F.colorTextInverse,background:F.colorActionPrimary,border:"none",borderRadius:F.radiusSm,cursor:"pointer"},children:"Save"}),v("button",{type:"button",onClick:K,style:{padding:`${F.spaceXs} ${F.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:F.fontSans,color:F.colorTextSecondary,background:"transparent",border:`${F.borderWidthDefault} solid ${F.colorBorder}`,borderRadius:F.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return v("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":W?`Edit ${W}`:"Edit content",onClick:X,onKeyDown:(Y)=>{if(Y.key==="Enter"||Y.key===" ")Y.preventDefault(),X()},children:v(g,{children:J})});return v("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":W?`Add ${W}`:"Add content",onClick:X,onKeyDown:(Y)=>{if(Y.key==="Enter"||Y.key===" ")Y.preventDefault(),X()},children:L})}import{forwardRef as X0,useEffect as Z0,useRef as k,useCallback as j,useImperativeHandle as F0}from"react";import{useInjectStyles as W0}from"../../core/dist/index.js";import{jsx as K0}from"react/jsx-runtime";var XJ="abcdefghijklmnopqrstuvwxyz!?*~+#",U0="alttab-thinking-cycle",V0=`
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
`;function ZJ(){return XJ[Math.random()*XJ.length|0]}var A1=X0(function({words:$,holdMs:z=2000,scrambleTicks:X=4,tickMs:U=50,staggerMs:V=30},K){W0(U0,V0);let W=k(null);F0(K,()=>W.current);let q=k(0),L=k([]),P=k(null),Y=k(null),T=j(()=>{let G=W.current;if(!G)return;let H=G.innerHTML;G.style.width="";let Q=[];for(let A of $)G.textContent=A,Q.push(Math.ceil(G.getBoundingClientRect().width));G.innerHTML=H||"",L.current=Q,G.style.width=Q[q.current]+"px"},[$]),x=j((G)=>{let H=W.current;if(!H)return;H.innerHTML="";for(let Q=0;Q<G.length;Q++){let A=document.createElement("span");A.className="alttab-char",A.textContent=G[Q],A.style.animationDelay=`${Q*V}ms`,H.appendChild(A)}},[V]),f=j((G,H)=>{let Q=W.current;if(!Q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Q.textContent=G,H();return}Q.innerHTML="";let u=[];for(let O=0;O<G.length;O++){let B=document.createElement("span");B.className="alttab-char",B.style.animationDelay=`${O*V}ms`,B.textContent=G[O]===" "?" ":ZJ(),Q.appendChild(B),u.push({span:B,final:G[O],ticks:0,maxTicks:X+O*2})}Y.current=setInterval(()=>{let O=!0;for(let B of u)if(B.ticks>=B.maxTicks)B.span.textContent=B.final;else O=!1,B.ticks++,B.span.textContent=B.final===" "?" ":ZJ();if(O)clearInterval(Y.current),Y.current=null,H()},U)},[X,U,V]);return Z0(()=>{if($.length<2)return;T(),document.fonts.ready.then(T);let G=()=>T();document.fonts.addEventListener("loadingdone",G);let H=new MutationObserver(()=>requestAnimationFrame(T));H.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),q.current=0,x($[0]);function Q(){q.current=(q.current+1)%$.length;let A=W.current;if(A)A.style.width=L.current[q.current]+"px";f($[q.current],()=>{P.current=setTimeout(Q,z)})}return P.current=setTimeout(Q,z),()=>{if(P.current)clearTimeout(P.current);if(Y.current)clearInterval(Y.current);document.fonts.removeEventListener("loadingdone",G),H.disconnect()}},[$,z,T,x,f]),K0("span",{ref:W,className:"alttab-thinking"})});export{A1 as ThinkingCycle,B1 as TextSection,i0 as SideNote,R as Quote,c0 as PullQuote,v0 as Prose,o as PROSE_H2_SIZE,C as PROSE_H1_SIZE,Y0 as PROSE_CODE_SIZE,I as PROSE_BODY_SIZE,G0 as PROSE_BLOCKQUOTE_SIZE,g as Markdown,JJ as MarginNote,d as MIX_SUBTLE,w as MIX_HOVER,Q0 as MIX_BADGE,U1 as LinkCard,z1 as Epigraph,H0 as Container,h as BREAKPOINT_WIDE,E as BREAKPOINT_PROSE,c as BREAKPOINT_MARGIN_NOTES};
