var vJ=Object.create;var{getPrototypeOf:OJ,defineProperty:y,getOwnPropertyNames:a,getOwnPropertyDescriptor:LJ}=Object,d=Object.prototype.hasOwnProperty;function r(J){return this[J]}var _J,MJ,s=(J,Q,z)=>{var X=J!=null&&typeof J==="object";if(X){var F=Q?_J??=new WeakMap:MJ??=new WeakMap,W=F.get(J);if(W)return W}z=J!=null?vJ(OJ(J)):{};let q=Q||!J||!J.__esModule?y(z,"default",{value:J,enumerable:!0}):z;for(let U of a(J))if(!d.call(q,U))y(q,U,{get:r.bind(J,U),enumerable:!0});if(X)F.set(J,q);return q},TJ=(J)=>{var Q=(l??=new WeakMap).get(J),z;if(Q)return Q;if(Q=y({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var X of a(J))if(!d.call(Q,X))y(Q,X,{get:r.bind(J,X),enumerable:!(z=LJ(J,X))||z.enumerable})}return l.set(J,Q),Q},l;var yJ=(J)=>J;function kJ(J,Q){this[J]=yJ.bind(null,Q)}var EJ=(J,Q)=>{for(var z in Q)y(J,z,{get:Q[z],enumerable:!0,configurable:!0,set:kJ.bind(Q,z)})};var HQ={};EJ(HQ,{ThinkingCycle:()=>DQ,TextSection:()=>KQ,SideNote:()=>zQ,PullQuote:()=>$Q,Prose:()=>SJ,PROSE_H2_SIZE:()=>S,PROSE_H1_SIZE:()=>p,PROSE_CODE_SIZE:()=>pJ,PROSE_BODY_SIZE:()=>E,PROSE_BLOCKQUOTE_SIZE:()=>bJ,Markdown:()=>C,MarginNote:()=>f,MIX_SUBTLE:()=>j,MIX_HOVER:()=>R,MIX_BADGE:()=>wJ,LinkCard:()=>WQ,Epigraph:()=>ZQ,Container:()=>CJ,BREAKPOINT_WIDE:()=>m,BREAKPOINT_PROSE:()=>k,BREAKPOINT_MARGIN_NOTES:()=>g});module.exports=TJ(HQ);var k="680px",m="900px",g="1100px",E="1.0625rem",p="clamp(2rem, 5vw, 2.75rem)",S="1.35em",pJ="0.875rem",bJ="1.25rem",j="5%",R="8%",wJ="14%";var i=require("react");var n=require("react/jsx-runtime"),IJ={narrow:"32rem",prose:k,wide:m,full:"100%"},RJ={none:"0",sm:"0.75rem",md:"1.5rem",lg:"3rem"},CJ=i.forwardRef(function({width:Q="prose",padding:z="md",children:X,id:F,"data-testid":W},q){return n.jsx("div",{ref:q,id:F,"data-testid":W,style:{boxSizing:"border-box",width:"100%",maxWidth:IJ[Q],marginInline:"auto",paddingInline:RJ[z],overflow:"visible"},children:X})});var t=require("react"),e=require("../../core/dist/index.cjs");var JJ=require("react/jsx-runtime"),mJ="alttab-prose-styles",gJ=`
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
    font-size: ${S};
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

  @media (max-width: ${k}) {
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

  @media (min-width: ${g}) {
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
`,SJ=t.forwardRef(function({children:Q,id:z,"data-testid":X},F){return e.useInjectStyles(mJ,gJ),JJ.jsx("div",{ref:F,className:"alttab-prose",id:z,"data-testid":X,children:Q})});var G=require("react"),QJ=s(require("react-markdown")),$J=s(require("remark-gfm")),B=require("../../core/dist/index.cjs");var $=require("react/jsx-runtime");function u(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(u).join("");if(J&&typeof J==="object"&&"props"in J)return u(J.props.children);return""}function jJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var zJ={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function XJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...zJ,children:[$.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function UJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...zJ,children:$.jsx("path",{d:"M20 6L9 17l-5-5"})})}function uJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var b={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function xJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[$.jsx("circle",{cx:"12",cy:"12",r:"10"}),$.jsx("path",{d:"M12 16v-4"}),$.jsx("path",{d:"M12 8h.01"})]})}function fJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...b,children:$.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function hJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[$.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$.jsx("path",{d:"M12 8v3"}),$.jsx("path",{d:"M12 14h.01"})]})}function cJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[$.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$.jsx("path",{d:"M12 9v4"}),$.jsx("path",{d:"M12 17h.01"})]})}function oJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[$.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$.jsx("path",{d:"M15 9l-6 6"}),$.jsx("path",{d:"M9 9l6 6"})]})}var lJ="alttab-markdown-codeblock",aJ=`
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
`;function dJ({children:J}){B.useInjectStyles(lJ,aJ);let[Q,z]=G.useState(!1),X=G.useRef(null),F=G.useCallback(()=>{let W="",q=(U)=>{if(typeof U==="string"){W+=U;return}if(Array.isArray(U)){U.forEach(q);return}if(U&&typeof U==="object"&&"props"in U)q(U.props.children)};if(q(J),navigator.clipboard.writeText(W.replace(/\n$/,"")),z(!0),X.current)clearTimeout(X.current);X.current=setTimeout(()=>z(!1),1500)},[J]);return $.jsxs("div",{className:"alttab-codeblock",children:[$.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:F,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$.jsx(UJ,{}):$.jsx(XJ,{})}),$.jsx("pre",{children:J})]})}function M({level:J,children:Q}){let z=`h${J}`,X=u(Q),F=jJ(X);return $.jsxs(z,{id:F,children:[Q,$.jsx("a",{href:`#${F}`,className:"alttab-md-anchor","aria-label":`Link to "${X}"`,children:$.jsx(uJ,{})})]})}var rJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,sJ={NOTE:{label:"Note",icon:xJ,attr:"note"},TIP:{label:"Tip",icon:fJ,attr:"tip"},IMPORTANT:{label:"Important",icon:hJ,attr:"important"},WARNING:{label:"Warning",icon:cJ,attr:"warning"},CAUTION:{label:"Caution",icon:oJ,attr:"caution"}};function iJ(J){let Q=G.Children.toArray(J),z=Q.findIndex(G.isValidElement);if(z===-1)return null;let X=Q[z],F=G.Children.toArray(X.props.children),W=F[0];if(typeof W!=="string")return null;let q=W.match(rJ);if(!q)return null;let U=q[1],H=W.slice(q[0].length);if(H||F.length>1){let _=H?[H,...F.slice(1)]:F.slice(1),A=G.cloneElement(X,{},..._);return{type:U,content:[...Q.slice(0,z),A,...Q.slice(z+1)]}}return{type:U,content:Q.slice(z+1)}}function nJ({children:J}){let Q=iJ(J);if(Q){let z=sJ[Q.type],X=z.icon;return $.jsxs("div",{className:"alttab-callout","data-callout":z.attr,children:[$.jsxs("div",{className:"alttab-callout-title",children:[$.jsx(X,{}),$.jsx("span",{children:z.label})]}),$.jsx("div",{className:"alttab-callout-body",children:Q.content})]})}return $.jsx("blockquote",{children:J})}var tJ="alttab-markdown-styles",eJ=`
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
`;function JQ({children:J}){let Q=0,z=G.Children.map(J,(X)=>{if(!G.isValidElement(X))return X;let F=Q%2===1;if(Q++,!F)return X;let W=G.Children.map(X.props.children,(q)=>{if(!G.isValidElement(q))return q;let U=q.props;return G.cloneElement(q,{style:{...U.style,background:`color-mix(in srgb, var(--color-text) ${j}, transparent)`}})});return G.cloneElement(X,{},W)});return $.jsx("tbody",{children:z})}var QQ={pre:dJ,blockquote:nJ,tbody:JQ,h1:({children:J})=>$.jsx(M,{level:1,children:J}),h2:({children:J})=>$.jsx(M,{level:2,children:J}),h3:({children:J})=>$.jsx(M,{level:3,children:J}),h4:({children:J})=>$.jsx(M,{level:4,children:J}),h5:({children:J})=>$.jsx(M,{level:5,children:J}),h6:({children:J})=>$.jsx(M,{level:6,children:J})};function C({children:J,id:Q,"data-testid":z}){B.useInjectStyles(tJ,eJ);let[X,F]=G.useState(!1),W=G.useRef(null),q=G.useCallback(()=>{if(navigator.clipboard.writeText(J),F(!0),W.current)clearTimeout(W.current);W.current=setTimeout(()=>F(!1),1500)},[J]);return $.jsxs("div",{className:"alttab-markdown",id:Q,"data-testid":z,children:[$.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:q,"aria-label":"Copy markdown source",title:"Copy markdown",...X?{"data-copied":""}:{},children:X?$.jsx(UJ,{}):$.jsx(XJ,{})}),$.jsx(QJ.default,{remarkPlugins:[$J.default],components:QQ,children:J})]})}var ZJ=require("react"),x=require("react/jsx-runtime"),$Q=ZJ.forwardRef(function({children:Q},z){return x.jsx("blockquote",{ref:z,"data-pull-quote":"",children:x.jsx("p",{children:Q})})});var qJ=require("react"),FJ=require("react/jsx-runtime"),f=qJ.forwardRef(function({children:Q,side:z="left"},X){return FJ.jsx("small",{ref:X,"data-margin-note":"","data-side":z,children:Q})});var WJ=require("react");var VJ=require("react/jsx-runtime"),zQ=WJ.forwardRef(function({children:Q},z){return VJ.jsx(f,{ref:z,side:"right",children:Q})});var GJ=require("react"),KJ=require("../../core/dist/index.cjs"),w=require("react/jsx-runtime"),XQ="alttab-epigraph",UQ=`
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
`,ZQ=GJ.forwardRef(function({children:Q,cite:z},X){return KJ.useInjectStyles(XQ,UQ),w.jsxs("blockquote",{ref:X,className:"alttab-epigraph",children:[w.jsx("p",{children:Q}),z&&w.jsx("footer",{children:z})]})});var YJ=require("react"),BJ=require("../../core/dist/index.cjs"),I=require("react/jsx-runtime"),qQ="alttab-link-card",FQ=`
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
`,WQ=YJ.forwardRef(function({title:Q,description:z,external:X,href:F,target:W,rel:q,onClick:U,id:H,"aria-label":_,"data-testid":A},V){return BJ.useInjectStyles(qQ,FQ),I.jsxs("a",{ref:V,className:"alttab-link-card",href:F,target:X?"_blank":W,rel:X?"noopener noreferrer":q,onClick:U,id:H,"aria-label":_,"data-testid":A,children:[I.jsx("span",{className:"alttab-link-card__title",children:Q}),z&&I.jsx("span",{className:"alttab-link-card__desc",children:z})]})});var DJ=require("react"),Z=require("../../core/dist/index.cjs");var O=require("react/jsx-runtime"),VQ="alttab-text-section",GQ=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${Z.semantic.radiusMd};
    transition: background ${Z.semantic.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${Z.semantic.colorText} ${R}, transparent);
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
    background: color-mix(in srgb, ${Z.semantic.colorText} ${R}, transparent);
  }
`;function KQ({content:J,editing:Q,editValue:z,onStartEdit:X,onEditChange:F,onSave:W,onCancel:q,fieldLabel:U,rows:H=4,placeholder:_="Click to add content..."}){Z.useInjectStyles(VQ,GQ);let A=DJ.useCallback((V)=>{if(V.key==="Escape")V.preventDefault(),q();else if(V.key==="Enter"&&(V.metaKey||V.ctrlKey))V.preventDefault(),W()},[q,W]);if(Q)return O.jsxs("div",{role:"group","aria-label":U,children:[O.jsx("textarea",{value:z,onChange:(V)=>F(V.target.value),onKeyDown:A,rows:H,"aria-label":U?`Edit ${U}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:Z.semantic.spaceSm,fontFamily:Z.semantic.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:Z.semantic.colorText,background:Z.semantic.colorSurfacePage,border:`${Z.semantic.borderWidthDefault} solid ${Z.semantic.colorBorder}`,borderRadius:Z.semantic.radiusMd,resize:"vertical",outline:"none"}}),O.jsxs("div",{style:{display:"flex",gap:Z.semantic.spaceSm,marginTop:Z.semantic.spaceSm},children:[O.jsx("button",{type:"button",onClick:W,style:{padding:`${Z.semantic.spaceXs} ${Z.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.semantic.fontSans,color:Z.semantic.colorTextInverse,background:Z.semantic.colorActionPrimary,border:"none",borderRadius:Z.semantic.radiusSm,cursor:"pointer"},children:"Save"}),O.jsx("button",{type:"button",onClick:q,style:{padding:`${Z.semantic.spaceXs} ${Z.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.semantic.fontSans,color:Z.semantic.colorTextSecondary,background:"transparent",border:`${Z.semantic.borderWidthDefault} solid ${Z.semantic.colorBorder}`,borderRadius:Z.semantic.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return O.jsx("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":U?`Edit ${U}`:"Edit content",onClick:X,onKeyDown:(V)=>{if(V.key==="Enter"||V.key===" ")V.preventDefault(),X()},children:O.jsx(C,{children:J})});return O.jsx("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":U?`Add ${U}`:"Add content",onClick:X,onKeyDown:(V)=>{if(V.key==="Enter"||V.key===" ")V.preventDefault(),X()},children:_})}var D=require("react"),PJ=require("../../core/dist/index.cjs"),AJ=require("react/jsx-runtime"),HJ="abcdefghijklmnopqrstuvwxyz!?*~+#",YQ="alttab-thinking-cycle",BQ=`
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
`;function NJ(){return HJ[Math.random()*HJ.length|0]}var DQ=D.forwardRef(function({words:Q,holdMs:z=2000,scrambleTicks:X=4,tickMs:F=50,staggerMs:W=30},q){PJ.useInjectStyles(YQ,BQ);let U=D.useRef(null);D.useImperativeHandle(q,()=>U.current);let H=D.useRef(0),_=D.useRef([]),A=D.useRef(null),V=D.useRef(null),T=D.useCallback(()=>{let K=U.current;if(!K)return;let P=K.innerHTML;K.style.width="";let Y=[];for(let v of Q)K.textContent=v,Y.push(Math.ceil(K.getBoundingClientRect().width));K.innerHTML=P||"",_.current=Y,K.style.width=Y[H.current]+"px"},[Q]),h=D.useCallback((K)=>{let P=U.current;if(!P)return;P.innerHTML="";for(let Y=0;Y<K.length;Y++){let v=document.createElement("span");v.className="alttab-char",v.textContent=K[Y],v.style.animationDelay=`${Y*W}ms`,P.appendChild(v)}},[W]),c=D.useCallback((K,P)=>{let Y=U.current;if(!Y)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Y.textContent=K,P();return}Y.innerHTML="";let o=[];for(let L=0;L<K.length;L++){let N=document.createElement("span");N.className="alttab-char",N.style.animationDelay=`${L*W}ms`,N.textContent=K[L]===" "?" ":NJ(),Y.appendChild(N),o.push({span:N,final:K[L],ticks:0,maxTicks:X+L*2})}V.current=setInterval(()=>{let L=!0;for(let N of o)if(N.ticks>=N.maxTicks)N.span.textContent=N.final;else L=!1,N.ticks++,N.span.textContent=N.final===" "?" ":NJ();if(L)clearInterval(V.current),V.current=null,P()},F)},[X,F,W]);return D.useEffect(()=>{if(Q.length<2)return;T(),document.fonts.ready.then(T);let K=()=>T();document.fonts.addEventListener("loadingdone",K);let P=new MutationObserver(()=>requestAnimationFrame(T));P.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),H.current=0,h(Q[0]);function Y(){H.current=(H.current+1)%Q.length;let v=U.current;if(v)v.style.width=_.current[H.current]+"px";c(Q[H.current],()=>{A.current=setTimeout(Y,z)})}return A.current=setTimeout(Y,z),()=>{if(A.current)clearTimeout(A.current);if(V.current)clearInterval(V.current);document.fonts.removeEventListener("loadingdone",K),P.disconnect()}},[Q,z,T,h,c]),AJ.jsx("span",{ref:U,className:"alttab-thinking"})});
