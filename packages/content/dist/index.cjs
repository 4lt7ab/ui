var BJ=Object.create;var{getPrototypeOf:HJ,defineProperty:M,getOwnPropertyNames:x,getOwnPropertyDescriptor:LJ}=Object,h=Object.prototype.hasOwnProperty;function o(J){return this[J]}var NJ,vJ,a=(J,Q,X)=>{var z=J!=null&&typeof J==="object";if(z){var V=Q?NJ??=new WeakMap:vJ??=new WeakMap,q=V.get(J);if(q)return q}X=J!=null?BJ(HJ(J)):{};let Z=Q||!J||!J.__esModule?M(X,"default",{value:J,enumerable:!0}):X;for(let U of x(J))if(!h.call(Z,U))M(Z,U,{get:o.bind(J,U),enumerable:!0});if(z)V.set(J,Z);return Z},PJ=(J)=>{var Q=(f??=new WeakMap).get(J),X;if(Q)return Q;if(Q=M({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var z of x(J))if(!h.call(Q,z))M(Q,z,{get:o.bind(J,z),enumerable:!(X=LJ(J,z))||X.enumerable})}return f.set(J,Q),Q},f;var AJ=(J)=>J;function OJ(J,Q){this[J]=AJ.bind(null,Q)}var MJ=(J,Q)=>{for(var X in Q)M(J,X,{get:Q[X],enumerable:!0,configurable:!0,set:OJ.bind(Q,X)})};var FQ={};MJ(FQ,{ThinkingCycle:()=>qQ,SideNote:()=>eJ,PullQuote:()=>nJ,Prose:()=>IJ,PROSE_H2_SIZE:()=>p,PROSE_H1_SIZE:()=>b,PROSE_CODE_SIZE:()=>TJ,PROSE_BODY_SIZE:()=>_,PROSE_BLOCKQUOTE_SIZE:()=>_J,Markdown:()=>QJ,MarginNote:()=>sJ,MIX_SUBTLE:()=>g,MIX_HOVER:()=>bJ,MIX_BADGE:()=>kJ,LinkCard:()=>VQ,Epigraph:()=>$Q,Container:()=>EJ,BREAKPOINT_WIDE:()=>C,BREAKPOINT_PROSE:()=>T,BREAKPOINT_MARGIN_NOTES:()=>I});module.exports=PJ(FQ);var T="680px",C="900px",I="1100px",_="1.0625rem",b="clamp(2rem, 5vw, 2.75rem)",p="1.35em",TJ="0.875rem",_J="1.25rem",g="5%",bJ="8%",kJ="14%";var c=require("react");var d=require("react/jsx-runtime"),yJ={prose:T,wide:C},EJ=c.forwardRef(function({width:Q="prose",maxWidth:X,padding:z="1.5rem",children:V,style:q,...Z},U){return d.jsx("div",{ref:U,style:{boxSizing:"border-box",width:"100%",maxWidth:X??yJ[Q],marginInline:"auto",paddingInline:z,overflow:"visible",...q},...Z,children:V})});var l=require("react"),i=require("../../core/dist/index.cjs");var r=require("react/jsx-runtime"),wJ="alttab-prose-styles",CJ=`
  /* ── Typography ── */
  .alttab-prose {
    font-size: ${_};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: ${p};
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

  @media (max-width: ${T}) {
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

  @media (min-width: ${I}) {
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
`,IJ=l.forwardRef(function({children:Q,style:X,...z},V){return i.useInjectStyles(wJ,CJ),r.jsx("div",{ref:V,className:"alttab-prose",style:X,...z,children:Q})});var F=require("react"),t=a(require("react-markdown")),n=a(require("remark-gfm")),D=require("../../core/dist/index.cjs");var $=require("react/jsx-runtime");function R(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(R).join("");if(J&&typeof J==="object"&&"props"in J)return R(J.props.children);return""}function pJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var s={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function e(){return $.jsxs("svg",{viewBox:"0 0 24 24",...s,children:[$.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function JJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...s,children:$.jsx("path",{d:"M20 6L9 17l-5-5"})})}function gJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var k={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function RJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...k,children:[$.jsx("circle",{cx:"12",cy:"12",r:"10"}),$.jsx("path",{d:"M12 16v-4"}),$.jsx("path",{d:"M12 8h.01"})]})}function SJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...k,children:$.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function mJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...k,children:[$.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$.jsx("path",{d:"M12 8v3"}),$.jsx("path",{d:"M12 14h.01"})]})}function jJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...k,children:[$.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$.jsx("path",{d:"M12 9v4"}),$.jsx("path",{d:"M12 17h.01"})]})}function uJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...k,children:[$.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$.jsx("path",{d:"M15 9l-6 6"}),$.jsx("path",{d:"M9 9l6 6"})]})}var fJ="alttab-markdown-codeblock",xJ=`
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
    border: 1px solid ${D.semantic.colorBorder};
    border-radius: ${D.semantic.radiusSm};
    background: ${D.semantic.colorSurface};
    color: ${D.semantic.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${D.semantic.colorText};
    border-color: ${D.semantic.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${D.semantic.colorSuccess};
    border-color: ${D.semantic.colorSuccess};
  }
`;function hJ({children:J}){D.useInjectStyles(fJ,xJ);let[Q,X]=F.useState(!1),z=F.useRef(null),V=F.useCallback(()=>{let q="",Z=(U)=>{if(typeof U==="string"){q+=U;return}if(Array.isArray(U)){U.forEach(Z);return}if(U&&typeof U==="object"&&"props"in U)Z(U.props.children)};if(Z(J),navigator.clipboard.writeText(q.replace(/\n$/,"")),X(!0),z.current)clearTimeout(z.current);z.current=setTimeout(()=>X(!1),1500)},[J]);return $.jsxs("div",{className:"alttab-codeblock",children:[$.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:V,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$.jsx(JJ,{}):$.jsx(e,{})}),$.jsx("pre",{children:J})]})}function P({level:J,children:Q}){let X=`h${J}`,z=R(Q),V=pJ(z);return $.jsxs(X,{id:V,children:[Q,$.jsx("a",{href:`#${V}`,className:"alttab-md-anchor","aria-label":`Link to "${z}"`,children:$.jsx(gJ,{})})]})}var oJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,aJ={NOTE:{label:"Note",icon:RJ,attr:"note"},TIP:{label:"Tip",icon:SJ,attr:"tip"},IMPORTANT:{label:"Important",icon:mJ,attr:"important"},WARNING:{label:"Warning",icon:jJ,attr:"warning"},CAUTION:{label:"Caution",icon:uJ,attr:"caution"}};function cJ(J){let Q=F.Children.toArray(J),X=Q.findIndex(F.isValidElement);if(X===-1)return null;let z=Q[X],V=F.Children.toArray(z.props.children),q=V[0];if(typeof q!=="string")return null;let Z=q.match(oJ);if(!Z)return null;let U=Z[1],H=q.slice(Z[0].length);if(H||V.length>1){let w=H?[H,...V.slice(1)]:V.slice(1),v=F.cloneElement(z,{},...w);return{type:U,content:[...Q.slice(0,X),v,...Q.slice(X+1)]}}return{type:U,content:Q.slice(X+1)}}function dJ({children:J}){let Q=cJ(J);if(Q){let X=aJ[Q.type],z=X.icon;return $.jsxs("div",{className:"alttab-callout","data-callout":X.attr,children:[$.jsxs("div",{className:"alttab-callout-title",children:[$.jsx(z,{}),$.jsx("span",{children:X.label})]}),$.jsx("div",{className:"alttab-callout-body",children:Q.content})]})}return $.jsx("blockquote",{children:J})}var lJ="alttab-markdown-styles",iJ=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: ${_};
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
`;function rJ({children:J}){let Q=0,X=F.Children.map(J,(z)=>{if(!F.isValidElement(z))return z;let V=Q%2===1;if(Q++,!V)return z;let q=F.Children.map(z.props.children,(Z)=>{if(!F.isValidElement(Z))return Z;let U=Z.props;return F.cloneElement(Z,{style:{...U.style,background:`color-mix(in srgb, var(--color-text) ${g}, transparent)`}})});return F.cloneElement(z,{},q)});return $.jsx("tbody",{children:X})}var tJ={pre:hJ,blockquote:dJ,tbody:rJ,h1:({children:J})=>$.jsx(P,{level:1,children:J}),h2:({children:J})=>$.jsx(P,{level:2,children:J}),h3:({children:J})=>$.jsx(P,{level:3,children:J}),h4:({children:J})=>$.jsx(P,{level:4,children:J}),h5:({children:J})=>$.jsx(P,{level:5,children:J}),h6:({children:J})=>$.jsx(P,{level:6,children:J})};function QJ({children:J,className:Q,...X}){D.useInjectStyles(lJ,iJ);let[z,V]=F.useState(!1),q=F.useRef(null),Z=F.useCallback(()=>{if(navigator.clipboard.writeText(J),V(!0),q.current)clearTimeout(q.current);q.current=setTimeout(()=>V(!1),1500)},[J]);return $.jsxs("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...X,children:[$.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:Z,"aria-label":"Copy markdown source",title:"Copy markdown",...z?{"data-copied":""}:{},children:z?$.jsx(JJ,{}):$.jsx(e,{})}),$.jsx(t.default,{remarkPlugins:[n.default],components:tJ,children:J})]})}var $J=require("react"),S=require("react/jsx-runtime"),nJ=$J.forwardRef(function({children:Q},X){return S.jsx("blockquote",{ref:X,"data-pull-quote":"",children:S.jsx("p",{children:Q})})});var XJ=require("react"),zJ=require("react/jsx-runtime"),sJ=XJ.forwardRef(function({children:Q},X){return zJ.jsx("small",{ref:X,"data-margin-note":"",children:Q})});var VJ=require("react"),UJ=require("react/jsx-runtime"),eJ=VJ.forwardRef(function({children:Q},X){return UJ.jsx("small",{ref:X,"data-side-note":"",children:Q})});var ZJ=require("react"),qJ=require("../../core/dist/index.cjs"),y=require("react/jsx-runtime"),JQ="alttab-epigraph",QQ=`
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
`,$Q=ZJ.forwardRef(function({children:Q,cite:X},z){return qJ.useInjectStyles(JQ,QQ),y.jsxs("blockquote",{ref:z,className:"alttab-epigraph",children:[y.jsx("p",{children:Q}),X&&y.jsx("footer",{children:X})]})});var FJ=require("react"),WJ=require("../../core/dist/index.cjs"),E=require("react/jsx-runtime"),XQ="alttab-link-card",zQ=`
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
`,VQ=FJ.forwardRef(function({title:Q,description:X,external:z,children:V,...q},Z){return WJ.useInjectStyles(XQ,zQ),E.jsxs("a",{ref:Z,className:"alttab-link-card",...z?{target:"_blank",rel:"noopener noreferrer"}:{},...q,children:[E.jsx("span",{className:"alttab-link-card__title",children:Q}),X&&E.jsx("span",{className:"alttab-link-card__desc",children:X}),V]})});var K=require("react"),GJ=require("../../core/dist/index.cjs"),DJ=require("react/jsx-runtime"),YJ="abcdefghijklmnopqrstuvwxyz!?*~+#",UQ="alttab-thinking-cycle",ZQ=`
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
`;function KJ(){return YJ[Math.random()*YJ.length|0]}var qQ=K.forwardRef(function({words:Q,holdMs:X=2000,scrambleTicks:z=4,tickMs:V=50,staggerMs:q=30},Z){GJ.useInjectStyles(UQ,ZQ);let U=K.useRef(null);K.useImperativeHandle(Z,()=>U.current);let H=K.useRef(0),w=K.useRef([]),v=K.useRef(null),A=K.useRef(null),O=K.useCallback(()=>{let W=U.current;if(!W)return;let B=W.innerHTML;W.style.width="";let Y=[];for(let L of Q)W.textContent=L,Y.push(Math.ceil(W.getBoundingClientRect().width));W.innerHTML=B||"",w.current=Y,W.style.width=Y[H.current]+"px"},[Q]),m=K.useCallback((W)=>{let B=U.current;if(!B)return;B.innerHTML="";for(let Y=0;Y<W.length;Y++){let L=document.createElement("span");L.className="alttab-char",L.textContent=W[Y],L.style.animationDelay=`${Y*q}ms`,B.appendChild(L)}},[q]),j=K.useCallback((W,B)=>{let Y=U.current;if(!Y)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Y.textContent=W,B();return}Y.innerHTML="";let u=[];for(let N=0;N<W.length;N++){let G=document.createElement("span");G.className="alttab-char",G.style.animationDelay=`${N*q}ms`,G.textContent=W[N]===" "?" ":KJ(),Y.appendChild(G),u.push({span:G,final:W[N],ticks:0,maxTicks:z+N*2})}A.current=setInterval(()=>{let N=!0;for(let G of u)if(G.ticks>=G.maxTicks)G.span.textContent=G.final;else N=!1,G.ticks++,G.span.textContent=G.final===" "?" ":KJ();if(N)clearInterval(A.current),A.current=null,B()},V)},[z,V,q]);return K.useEffect(()=>{if(Q.length<2)return;O(),document.fonts.ready.then(O);let W=()=>O();document.fonts.addEventListener("loadingdone",W);let B=new MutationObserver(()=>requestAnimationFrame(O));B.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),H.current=0,m(Q[0]);function Y(){H.current=(H.current+1)%Q.length;let L=U.current;if(L)L.style.width=w.current[H.current]+"px";j(Q[H.current],()=>{v.current=setTimeout(Y,X)})}return v.current=setTimeout(Y,X),()=>{if(v.current)clearTimeout(v.current);if(A.current)clearInterval(A.current);document.fonts.removeEventListener("loadingdone",W),B.disconnect()}},[Q,X,O,m,j]),DJ.jsx("span",{ref:U,className:"alttab-thinking"})});
