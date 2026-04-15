var vJ=Object.create;var{getPrototypeOf:AJ,defineProperty:k,getOwnPropertyNames:a,getOwnPropertyDescriptor:OJ}=Object,d=Object.prototype.hasOwnProperty;function l(J){return this[J]}var LJ,MJ,r=(J,Q,z)=>{var U=J!=null&&typeof J==="object";if(U){var F=Q?LJ??=new WeakMap:MJ??=new WeakMap,V=F.get(J);if(V)return V}z=J!=null?vJ(AJ(J)):{};let q=Q||!J||!J.__esModule?k(z,"default",{value:J,enumerable:!0}):z;for(let X of a(J))if(!d.call(q,X))k(q,X,{get:l.bind(J,X),enumerable:!0});if(U)F.set(J,q);return q},TJ=(J)=>{var Q=(o??=new WeakMap).get(J),z;if(Q)return Q;if(Q=k({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var U of a(J))if(!d.call(Q,U))k(Q,U,{get:l.bind(J,U),enumerable:!(z=OJ(J,U))||z.enumerable})}return o.set(J,Q),Q},o;var _J=(J)=>J;function kJ(J,Q){this[J]=_J.bind(null,Q)}var yJ=(J,Q)=>{for(var z in Q)k(J,z,{get:Q[z],enumerable:!0,configurable:!0,set:kJ.bind(Q,z)})};var DQ={};yJ(DQ,{ThinkingCycle:()=>BQ,TextSection:()=>YQ,SideNote:()=>$Q,PullQuote:()=>JQ,Prose:()=>gJ,PROSE_H2_SIZE:()=>j,PROSE_H1_SIZE:()=>b,PROSE_CODE_SIZE:()=>IJ,PROSE_BODY_SIZE:()=>I,PROSE_BLOCKQUOTE_SIZE:()=>bJ,Markdown:()=>R,MarginNote:()=>QQ,MIX_SUBTLE:()=>S,MIX_HOVER:()=>p,MIX_BADGE:()=>wJ,LinkCard:()=>FQ,Epigraph:()=>XQ,Container:()=>CJ,BREAKPOINT_WIDE:()=>g,BREAKPOINT_PROSE:()=>y,BREAKPOINT_MARGIN_NOTES:()=>m});module.exports=TJ(DQ);var y="680px",g="900px",m="1100px",I="1.0625rem",b="clamp(2rem, 5vw, 2.75rem)",j="1.35em",IJ="0.875rem",bJ="1.25rem",S="5%",p="8%",wJ="14%";var i=require("react");var s=require("react/jsx-runtime"),EJ={prose:y,wide:g},CJ=i.forwardRef(function({width:Q="prose",maxWidth:z,padding:U="1.5rem",children:F,style:V,...q},X){return s.jsx("div",{ref:X,style:{boxSizing:"border-box",width:"100%",maxWidth:z??EJ[Q],marginInline:"auto",paddingInline:U,overflow:"visible",...V},...q,children:F})});var n=require("react"),t=require("../../core/dist/index.cjs");var e=require("react/jsx-runtime"),pJ="alttab-prose-styles",RJ=`
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
`,gJ=n.forwardRef(function({children:Q,style:z,...U},F){return t.useInjectStyles(pJ,RJ),e.jsx("div",{ref:F,className:"alttab-prose",style:z,...U,children:Q})});var Y=require("react"),JJ=r(require("react-markdown")),QJ=r(require("remark-gfm")),B=require("../../core/dist/index.cjs");var $=require("react/jsx-runtime");function u(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(u).join("");if(J&&typeof J==="object"&&"props"in J)return u(J.props.children);return""}function mJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var $J={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function zJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...$J,children:[$.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function UJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...$J,children:$.jsx("path",{d:"M20 6L9 17l-5-5"})})}function jJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var w={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function SJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[$.jsx("circle",{cx:"12",cy:"12",r:"10"}),$.jsx("path",{d:"M12 16v-4"}),$.jsx("path",{d:"M12 8h.01"})]})}function uJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...w,children:$.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function fJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[$.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$.jsx("path",{d:"M12 8v3"}),$.jsx("path",{d:"M12 14h.01"})]})}function xJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[$.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$.jsx("path",{d:"M12 9v4"}),$.jsx("path",{d:"M12 17h.01"})]})}function hJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[$.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$.jsx("path",{d:"M15 9l-6 6"}),$.jsx("path",{d:"M9 9l6 6"})]})}var cJ="alttab-markdown-codeblock",oJ=`
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
    border: ${B.semantic.borderWidthDefault} solid ${B.semantic.colorBorder};
    border-radius: ${B.semantic.radiusSm};
    background: ${B.semantic.colorSurface};
    color: ${B.semantic.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${B.semantic.transitionBase}, color ${B.semantic.transitionBase}, border-color ${B.semantic.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${B.semantic.colorText};
    border-color: ${B.semantic.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${B.semantic.colorSuccess};
    border-color: ${B.semantic.colorSuccess};
  }
`;function aJ({children:J}){B.useInjectStyles(cJ,oJ);let[Q,z]=Y.useState(!1),U=Y.useRef(null),F=Y.useCallback(()=>{let V="",q=(X)=>{if(typeof X==="string"){V+=X;return}if(Array.isArray(X)){X.forEach(q);return}if(X&&typeof X==="object"&&"props"in X)q(X.props.children)};if(q(J),navigator.clipboard.writeText(V.replace(/\n$/,"")),z(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>z(!1),1500)},[J]);return $.jsxs("div",{className:"alttab-codeblock",children:[$.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:F,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$.jsx(UJ,{}):$.jsx(zJ,{})}),$.jsx("pre",{children:J})]})}function T({level:J,children:Q}){let z=`h${J}`,U=u(Q),F=mJ(U);return $.jsxs(z,{id:F,children:[Q,$.jsx("a",{href:`#${F}`,className:"alttab-md-anchor","aria-label":`Link to "${U}"`,children:$.jsx(jJ,{})})]})}var dJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,lJ={NOTE:{label:"Note",icon:SJ,attr:"note"},TIP:{label:"Tip",icon:uJ,attr:"tip"},IMPORTANT:{label:"Important",icon:fJ,attr:"important"},WARNING:{label:"Warning",icon:xJ,attr:"warning"},CAUTION:{label:"Caution",icon:hJ,attr:"caution"}};function rJ(J){let Q=Y.Children.toArray(J),z=Q.findIndex(Y.isValidElement);if(z===-1)return null;let U=Q[z],F=Y.Children.toArray(U.props.children),V=F[0];if(typeof V!=="string")return null;let q=V.match(dJ);if(!q)return null;let X=q[1],N=V.slice(q[0].length);if(N||F.length>1){let M=N?[N,...F.slice(1)]:F.slice(1),L=Y.cloneElement(U,{},...M);return{type:X,content:[...Q.slice(0,z),L,...Q.slice(z+1)]}}return{type:X,content:Q.slice(z+1)}}function iJ({children:J}){let Q=rJ(J);if(Q){let z=lJ[Q.type],U=z.icon;return $.jsxs("div",{className:"alttab-callout","data-callout":z.attr,children:[$.jsxs("div",{className:"alttab-callout-title",children:[$.jsx(U,{}),$.jsx("span",{children:z.label})]}),$.jsx("div",{className:"alttab-callout-body",children:Q.content})]})}return $.jsx("blockquote",{children:J})}var sJ="alttab-markdown-styles",nJ=`
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
`;function tJ({children:J}){let Q=0,z=Y.Children.map(J,(U)=>{if(!Y.isValidElement(U))return U;let F=Q%2===1;if(Q++,!F)return U;let V=Y.Children.map(U.props.children,(q)=>{if(!Y.isValidElement(q))return q;let X=q.props;return Y.cloneElement(q,{style:{...X.style,background:`color-mix(in srgb, var(--color-text) ${S}, transparent)`}})});return Y.cloneElement(U,{},V)});return $.jsx("tbody",{children:z})}var eJ={pre:aJ,blockquote:iJ,tbody:tJ,h1:({children:J})=>$.jsx(T,{level:1,children:J}),h2:({children:J})=>$.jsx(T,{level:2,children:J}),h3:({children:J})=>$.jsx(T,{level:3,children:J}),h4:({children:J})=>$.jsx(T,{level:4,children:J}),h5:({children:J})=>$.jsx(T,{level:5,children:J}),h6:({children:J})=>$.jsx(T,{level:6,children:J})};function R({children:J,className:Q,...z}){B.useInjectStyles(sJ,nJ);let[U,F]=Y.useState(!1),V=Y.useRef(null),q=Y.useCallback(()=>{if(navigator.clipboard.writeText(J),F(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>F(!1),1500)},[J]);return $.jsxs("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...z,children:[$.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:q,"aria-label":"Copy markdown source",title:"Copy markdown",...U?{"data-copied":""}:{},children:U?$.jsx(UJ,{}):$.jsx(zJ,{})}),$.jsx(JJ.default,{remarkPlugins:[QJ.default],components:eJ,children:J})]})}var XJ=require("react"),f=require("react/jsx-runtime"),JQ=XJ.forwardRef(function({children:Q},z){return f.jsx("blockquote",{ref:z,"data-pull-quote":"",children:f.jsx("p",{children:Q})})});var ZJ=require("react"),qJ=require("react/jsx-runtime"),QQ=ZJ.forwardRef(function({children:Q},z){return qJ.jsx("small",{ref:z,"data-margin-note":"",children:Q})});var FJ=require("react"),VJ=require("react/jsx-runtime"),$Q=FJ.forwardRef(function({children:Q},z){return VJ.jsx("small",{ref:z,"data-side-note":"",children:Q})});var WJ=require("react"),YJ=require("../../core/dist/index.cjs"),E=require("react/jsx-runtime"),zQ="alttab-epigraph",UQ=`
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
`,XQ=WJ.forwardRef(function({children:Q,cite:z},U){return YJ.useInjectStyles(zQ,UQ),E.jsxs("blockquote",{ref:U,className:"alttab-epigraph",children:[E.jsx("p",{children:Q}),z&&E.jsx("footer",{children:z})]})});var GJ=require("react"),KJ=require("../../core/dist/index.cjs"),C=require("react/jsx-runtime"),ZQ="alttab-link-card",qQ=`
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
`,FQ=GJ.forwardRef(function({title:Q,description:z,external:U,children:F,...V},q){return KJ.useInjectStyles(ZQ,qQ),C.jsxs("a",{ref:q,className:"alttab-link-card",...U?{target:"_blank",rel:"noopener noreferrer"}:{},...V,children:[C.jsx("span",{className:"alttab-link-card__title",children:Q}),z&&C.jsx("span",{className:"alttab-link-card__desc",children:z}),F]})});var BJ=require("react"),Z=require("../../core/dist/index.cjs");var A=require("react/jsx-runtime"),VQ="alttab-text-section",WQ=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${Z.semantic.radiusMd};
    transition: background ${Z.semantic.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${Z.semantic.colorText} ${p}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${Z.semantic.radiusMd};
    padding: ${Z.semantic.spaceSm} ${Z.semantic.spaceMd};
    font-style: italic;
    color: ${Z.semantic.colorTextMuted};
    transition: background ${Z.semantic.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${Z.semantic.colorText} ${p}, transparent);
  }
`;function YQ({content:J,editing:Q,editValue:z,onStartEdit:U,onEditChange:F,onSave:V,onCancel:q,fieldLabel:X,rows:N=4,placeholder:M="Click to add content..."}){Z.useInjectStyles(VQ,WQ);let L=BJ.useCallback((W)=>{if(W.key==="Escape")W.preventDefault(),q();else if(W.key==="Enter"&&(W.metaKey||W.ctrlKey))W.preventDefault(),V()},[q,V]);if(Q)return A.jsxs("div",{role:"group","aria-label":X,children:[A.jsx("textarea",{value:z,onChange:(W)=>F(W.target.value),onKeyDown:L,rows:N,"aria-label":X?`Edit ${X}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:Z.semantic.spaceSm,fontFamily:Z.semantic.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:Z.semantic.colorText,background:Z.semantic.colorSurfacePage,border:`${Z.semantic.borderWidthDefault} solid ${Z.semantic.colorBorder}`,borderRadius:Z.semantic.radiusMd,resize:"vertical",outline:"none"}}),A.jsxs("div",{style:{display:"flex",gap:Z.semantic.spaceSm,marginTop:Z.semantic.spaceSm},children:[A.jsx("button",{type:"button",onClick:V,style:{padding:`${Z.semantic.spaceXs} ${Z.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.semantic.fontSans,color:Z.semantic.colorTextInverse,background:Z.semantic.colorActionPrimary,border:"none",borderRadius:Z.semantic.radiusSm,cursor:"pointer"},children:"Save"}),A.jsx("button",{type:"button",onClick:q,style:{padding:`${Z.semantic.spaceXs} ${Z.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.semantic.fontSans,color:Z.semantic.colorTextSecondary,background:"transparent",border:`${Z.semantic.borderWidthDefault} solid ${Z.semantic.colorBorder}`,borderRadius:Z.semantic.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return A.jsx("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":X?`Edit ${X}`:"Edit content",onClick:U,onKeyDown:(W)=>{if(W.key==="Enter"||W.key===" ")W.preventDefault(),U()},children:A.jsx(R,{children:J})});return A.jsx("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":X?`Add ${X}`:"Add content",onClick:U,onKeyDown:(W)=>{if(W.key==="Enter"||W.key===" ")W.preventDefault(),U()},children:M})}var D=require("react"),NJ=require("../../core/dist/index.cjs"),PJ=require("react/jsx-runtime"),DJ="abcdefghijklmnopqrstuvwxyz!?*~+#",GQ="alttab-thinking-cycle",KQ=`
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
`;function HJ(){return DJ[Math.random()*DJ.length|0]}var BQ=D.forwardRef(function({words:Q,holdMs:z=2000,scrambleTicks:U=4,tickMs:F=50,staggerMs:V=30},q){NJ.useInjectStyles(GQ,KQ);let X=D.useRef(null);D.useImperativeHandle(q,()=>X.current);let N=D.useRef(0),M=D.useRef([]),L=D.useRef(null),W=D.useRef(null),_=D.useCallback(()=>{let G=X.current;if(!G)return;let P=G.innerHTML;G.style.width="";let K=[];for(let v of Q)G.textContent=v,K.push(Math.ceil(G.getBoundingClientRect().width));G.innerHTML=P||"",M.current=K,G.style.width=K[N.current]+"px"},[Q]),x=D.useCallback((G)=>{let P=X.current;if(!P)return;P.innerHTML="";for(let K=0;K<G.length;K++){let v=document.createElement("span");v.className="alttab-char",v.textContent=G[K],v.style.animationDelay=`${K*V}ms`,P.appendChild(v)}},[V]),h=D.useCallback((G,P)=>{let K=X.current;if(!K)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){K.textContent=G,P();return}K.innerHTML="";let c=[];for(let O=0;O<G.length;O++){let H=document.createElement("span");H.className="alttab-char",H.style.animationDelay=`${O*V}ms`,H.textContent=G[O]===" "?" ":HJ(),K.appendChild(H),c.push({span:H,final:G[O],ticks:0,maxTicks:U+O*2})}W.current=setInterval(()=>{let O=!0;for(let H of c)if(H.ticks>=H.maxTicks)H.span.textContent=H.final;else O=!1,H.ticks++,H.span.textContent=H.final===" "?" ":HJ();if(O)clearInterval(W.current),W.current=null,P()},F)},[U,F,V]);return D.useEffect(()=>{if(Q.length<2)return;_(),document.fonts.ready.then(_);let G=()=>_();document.fonts.addEventListener("loadingdone",G);let P=new MutationObserver(()=>requestAnimationFrame(_));P.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),N.current=0,x(Q[0]);function K(){N.current=(N.current+1)%Q.length;let v=X.current;if(v)v.style.width=M.current[N.current]+"px";h(Q[N.current],()=>{L.current=setTimeout(K,z)})}return L.current=setTimeout(K,z),()=>{if(L.current)clearTimeout(L.current);if(W.current)clearInterval(W.current);document.fonts.removeEventListener("loadingdone",G),P.disconnect()}},[Q,z,_,x,h]),PJ.jsx("span",{ref:X,className:"alttab-thinking"})});
