var NJ=Object.create;var{getPrototypeOf:PJ,defineProperty:k,getOwnPropertyNames:o,getOwnPropertyDescriptor:AJ}=Object,d=Object.prototype.hasOwnProperty;function l(J){return this[J]}var OJ,LJ,s=(J,$,X)=>{var W=J!=null&&typeof J==="object";if(W){var K=$?OJ??=new WeakMap:LJ??=new WeakMap,V=K.get(J);if(V)return V}X=J!=null?NJ(PJ(J)):{};let U=$||!J||!J.__esModule?k(X,"default",{value:J,enumerable:!0}):X;for(let F of o(J))if(!d.call(U,F))k(U,F,{get:l.bind(J,F),enumerable:!0});if(W)K.set(J,U);return U},_J=(J)=>{var $=(c??=new WeakMap).get(J),X;if($)return $;if($=k({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var W of o(J))if(!d.call($,W))k($,W,{get:l.bind(J,W),enumerable:!(X=AJ(J,W))||X.enumerable})}return c.set(J,$),$},c;var MJ=(J)=>J;function TJ(J,$){this[J]=MJ.bind(null,$)}var vJ=(J,$)=>{for(var X in $)k(J,X,{get:$[X],enumerable:!0,configurable:!0,set:TJ.bind($,X)})};var Y0={};vJ(Y0,{ThinkingCycle:()=>V0,TextSection:()=>F0,SideNote:()=>z0,Quote:()=>b,PullQuote:()=>$0,Prose:()=>wJ,PROSE_H2_SIZE:()=>S,PROSE_H1_SIZE:()=>E,PROSE_CODE_SIZE:()=>kJ,PROSE_BODY_SIZE:()=>I,PROSE_BLOCKQUOTE_SIZE:()=>IJ,Markdown:()=>R,MarginNote:()=>x,MIX_SUBTLE:()=>g,MIX_HOVER:()=>w,MIX_BADGE:()=>EJ,Epigraph:()=>X0,BREAKPOINT_WIDE:()=>yJ,BREAKPOINT_PROSE:()=>p,BREAKPOINT_MARGIN_NOTES:()=>m});module.exports=_J(Y0);var p="680px",yJ="900px",m="1100px",I="1.0625rem",E="clamp(2rem, 5vw, 2.75rem)",S="1.35em",kJ="0.875rem",IJ="1.25rem",g="5%",w="8%",EJ="14%";var a=require("react"),r=require("../../core/dist/index.cjs");var i=require("react/jsx-runtime"),CJ="alttab-prose-styles",bJ=`
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

  @media (max-width: ${p}) {
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

  @media (min-width: ${m}) {
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
`,wJ=a.forwardRef(function({children:$,id:X,"data-testid":W},K){return r.useInjectStyles(CJ,bJ),i.jsx("div",{ref:K,className:"alttab-prose",id:X,"data-testid":W,children:$})});var G=require("react"),n=s(require("react-markdown")),t=s(require("remark-gfm")),B=require("../../core/dist/index.cjs");var z=require("react/jsx-runtime");function j(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(j).join("");if(J&&typeof J==="object"&&"props"in J)return j(J.props.children);return""}function RJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var e={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function JJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...e,children:[z.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),z.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function $J(){return z.jsx("svg",{viewBox:"0 0 24 24",...e,children:z.jsx("path",{d:"M20 6L9 17l-5-5"})})}function pJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),z.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var C={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function mJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...C,children:[z.jsx("circle",{cx:"12",cy:"12",r:"10"}),z.jsx("path",{d:"M12 16v-4"}),z.jsx("path",{d:"M12 8h.01"})]})}function SJ(){return z.jsx("svg",{viewBox:"0 0 24 24",...C,children:z.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function gJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...C,children:[z.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),z.jsx("path",{d:"M12 8v3"}),z.jsx("path",{d:"M12 14h.01"})]})}function jJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...C,children:[z.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),z.jsx("path",{d:"M12 9v4"}),z.jsx("path",{d:"M12 17h.01"})]})}function xJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...C,children:[z.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),z.jsx("path",{d:"M15 9l-6 6"}),z.jsx("path",{d:"M9 9l6 6"})]})}var fJ="alttab-markdown-codeblock",uJ=`
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
`;function hJ({children:J}){B.useInjectStyles(fJ,uJ);let[$,X]=G.useState(!1),W=G.useRef(null),K=G.useCallback(()=>{let V="",U=(F)=>{if(typeof F==="string"){V+=F;return}if(Array.isArray(F)){F.forEach(U);return}if(F&&typeof F==="object"&&"props"in F)U(F.props.children)};if(U(J),navigator.clipboard.writeText(V.replace(/\n$/,"")),X(!0),W.current)clearTimeout(W.current);W.current=setTimeout(()=>X(!1),1500)},[J]);return z.jsxs("div",{className:"alttab-codeblock",children:[z.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:K,"aria-label":"Copy code",...$?{"data-copied":""}:{},children:$?z.jsx($J,{}):z.jsx(JJ,{})}),z.jsx("pre",{children:J})]})}function v({level:J,children:$}){let X=`h${J}`,W=j($),K=RJ(W);return z.jsxs(X,{id:K,children:[$,z.jsx("a",{href:`#${K}`,className:"alttab-md-anchor","aria-label":`Link to "${W}"`,children:z.jsx(pJ,{})})]})}var cJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,oJ={NOTE:{label:"Note",icon:mJ,attr:"note"},TIP:{label:"Tip",icon:SJ,attr:"tip"},IMPORTANT:{label:"Important",icon:gJ,attr:"important"},WARNING:{label:"Warning",icon:jJ,attr:"warning"},CAUTION:{label:"Caution",icon:xJ,attr:"caution"}};function dJ(J){let $=G.Children.toArray(J),X=$.findIndex(G.isValidElement);if(X===-1)return null;let W=$[X],K=G.Children.toArray(W.props.children),V=K[0];if(typeof V!=="string")return null;let U=V.match(cJ);if(!U)return null;let F=U[1],N=V.slice(U[0].length);if(N||K.length>1){let T=N?[N,...K.slice(1)]:K.slice(1),M=G.cloneElement(W,{},...T);return{type:F,content:[...$.slice(0,X),M,...$.slice(X+1)]}}return{type:F,content:$.slice(X+1)}}function lJ({children:J}){let $=dJ(J);if($){let X=oJ[$.type],W=X.icon;return z.jsxs("div",{className:"alttab-callout","data-callout":X.attr,children:[z.jsxs("div",{className:"alttab-callout-title",children:[z.jsx(W,{}),z.jsx("span",{children:X.label})]}),z.jsx("div",{className:"alttab-callout-body",children:$.content})]})}return z.jsx("blockquote",{children:J})}var sJ="alttab-markdown-styles",aJ=`
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
`;function rJ({children:J}){let $=0,X=G.Children.map(J,(W)=>{if(!G.isValidElement(W))return W;let K=$%2===1;if($++,!K)return W;let V=G.Children.map(W.props.children,(U)=>{if(!G.isValidElement(U))return U;let F=U.props;return G.cloneElement(U,{style:{...F.style,background:`color-mix(in srgb, var(--color-text) ${g}, transparent)`}})});return G.cloneElement(W,{},V)});return z.jsx("tbody",{children:X})}var iJ={pre:hJ,blockquote:lJ,tbody:rJ,h1:({children:J})=>z.jsx(v,{level:1,children:J}),h2:({children:J})=>z.jsx(v,{level:2,children:J}),h3:({children:J})=>z.jsx(v,{level:3,children:J}),h4:({children:J})=>z.jsx(v,{level:4,children:J}),h5:({children:J})=>z.jsx(v,{level:5,children:J}),h6:({children:J})=>z.jsx(v,{level:6,children:J})};function R({children:J,id:$,"data-testid":X}){B.useInjectStyles(sJ,aJ);let[W,K]=G.useState(!1),V=G.useRef(null),U=G.useCallback(()=>{if(navigator.clipboard.writeText(J),K(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>K(!1),1500)},[J]);return z.jsxs("div",{className:"alttab-markdown",id:$,"data-testid":X,children:[z.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:U,"aria-label":"Copy markdown source",title:"Copy markdown",...W?{"data-copied":""}:{},children:W?z.jsx($J,{}):z.jsx(JJ,{})}),z.jsx(n.default,{remarkPlugins:[t.default],components:iJ,children:J})]})}var zJ=require("react"),XJ=require("../../core/dist/index.cjs"),O=require("react/jsx-runtime"),nJ="alttab-epigraph",tJ=`
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
`;function eJ({children:J,cite:$,innerRef:X}){return O.jsxs("blockquote",{ref:X,"data-pull-quote":"",children:[O.jsx("p",{children:J}),$&&O.jsx("footer",{children:$})]})}function J0({children:J,cite:$,innerRef:X}){return XJ.useInjectStyles(nJ,tJ),O.jsxs("blockquote",{ref:X,className:"alttab-epigraph",children:[O.jsx("p",{children:J}),$&&O.jsx("footer",{children:$})]})}var b=zJ.forwardRef(function({children:$,variant:X="pull",cite:W},K){if(X==="epigraph")return O.jsx(J0,{innerRef:K,cite:W,children:$});return O.jsx(eJ,{innerRef:K,cite:W,children:$})});var WJ=require("react");var ZJ=require("react/jsx-runtime"),$0=WJ.forwardRef(function({children:$},X){return ZJ.jsx(b,{ref:X,variant:"pull",children:$})});var FJ=require("react"),KJ=require("react/jsx-runtime"),x=FJ.forwardRef(function({children:$,side:X="left"},W){return KJ.jsx("small",{ref:W,"data-margin-note":"","data-side":X,children:$})});var UJ=require("react");var VJ=require("react/jsx-runtime"),z0=UJ.forwardRef(function({children:$},X){return VJ.jsx(x,{ref:X,side:"right",children:$})});var YJ=require("react");var GJ=require("react/jsx-runtime"),X0=YJ.forwardRef(function({children:$,cite:X},W){return GJ.jsx(b,{ref:W,variant:"epigraph",cite:X,children:$})});var QJ=require("react"),Z=require("../../core/dist/index.cjs");var L=require("react/jsx-runtime"),W0="alttab-text-section",Z0=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${Z.semantic.radiusMd};
    transition: background ${Z.semantic.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${Z.semantic.colorText} ${w}, transparent);
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
    background: color-mix(in srgb, ${Z.semantic.colorText} ${w}, transparent);
  }
`;function F0({content:J,editing:$,editValue:X,onStartEdit:W,onEditChange:K,onSave:V,onCancel:U,fieldLabel:F,rows:N=4,placeholder:T="Click to add content..."}){Z.useInjectStyles(W0,Z0);let M=QJ.useCallback((Y)=>{if(Y.key==="Escape")Y.preventDefault(),U();else if(Y.key==="Enter"&&(Y.metaKey||Y.ctrlKey))Y.preventDefault(),V()},[U,V]);if($)return L.jsxs("div",{role:"group","aria-label":F,children:[L.jsx("textarea",{value:X,onChange:(Y)=>K(Y.target.value),onKeyDown:M,rows:N,"aria-label":F?`Edit ${F}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:Z.semantic.spaceSm,fontFamily:Z.semantic.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:Z.semantic.colorText,background:Z.semantic.colorSurfacePage,border:`${Z.semantic.borderWidthDefault} solid ${Z.semantic.colorBorder}`,borderRadius:Z.semantic.radiusMd,resize:"vertical",outline:"none"}}),L.jsxs("div",{style:{display:"flex",gap:Z.semantic.spaceSm,marginTop:Z.semantic.spaceSm},children:[L.jsx("button",{type:"button",onClick:V,style:{padding:`${Z.semantic.spaceXs} ${Z.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.semantic.fontSans,color:Z.semantic.colorTextInverse,background:Z.semantic.colorActionPrimary,border:"none",borderRadius:Z.semantic.radiusSm,cursor:"pointer"},children:"Save"}),L.jsx("button",{type:"button",onClick:U,style:{padding:`${Z.semantic.spaceXs} ${Z.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:Z.semantic.fontSans,color:Z.semantic.colorTextSecondary,background:"transparent",border:`${Z.semantic.borderWidthDefault} solid ${Z.semantic.colorBorder}`,borderRadius:Z.semantic.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return L.jsx("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":F?`Edit ${F}`:"Edit content",onClick:W,onKeyDown:(Y)=>{if(Y.key==="Enter"||Y.key===" ")Y.preventDefault(),W()},children:L.jsx(R,{children:J})});return L.jsx("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":F?`Add ${F}`:"Add content",onClick:W,onKeyDown:(Y)=>{if(Y.key==="Enter"||Y.key===" ")Y.preventDefault(),W()},children:T})}var D=require("react"),DJ=require("../../core/dist/index.cjs"),HJ=require("react/jsx-runtime"),qJ="abcdefghijklmnopqrstuvwxyz!?*~+#",K0="alttab-thinking-cycle",U0=`
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
`;function BJ(){return qJ[Math.random()*qJ.length|0]}var V0=D.forwardRef(function({words:$,holdMs:X=2000,scrambleTicks:W=4,tickMs:K=50,staggerMs:V=30},U){DJ.useInjectStyles(K0,U0);let F=D.useRef(null);D.useImperativeHandle(U,()=>F.current);let N=D.useRef(0),T=D.useRef([]),M=D.useRef(null),Y=D.useRef(null),y=D.useCallback(()=>{let Q=F.current;if(!Q)return;let P=Q.innerHTML;Q.style.width="";let q=[];for(let A of $)Q.textContent=A,q.push(Math.ceil(Q.getBoundingClientRect().width));Q.innerHTML=P||"",T.current=q,Q.style.width=q[N.current]+"px"},[$]),f=D.useCallback((Q)=>{let P=F.current;if(!P)return;P.innerHTML="";for(let q=0;q<Q.length;q++){let A=document.createElement("span");A.className="alttab-char",A.textContent=Q[q],A.style.animationDelay=`${q*V}ms`,P.appendChild(A)}},[V]),u=D.useCallback((Q,P)=>{let q=F.current;if(!q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){q.textContent=Q,P();return}q.innerHTML="";let h=[];for(let _=0;_<Q.length;_++){let H=document.createElement("span");H.className="alttab-char",H.style.animationDelay=`${_*V}ms`,H.textContent=Q[_]===" "?" ":BJ(),q.appendChild(H),h.push({span:H,final:Q[_],ticks:0,maxTicks:W+_*2})}Y.current=setInterval(()=>{let _=!0;for(let H of h)if(H.ticks>=H.maxTicks)H.span.textContent=H.final;else _=!1,H.ticks++,H.span.textContent=H.final===" "?" ":BJ();if(_)clearInterval(Y.current),Y.current=null,P()},K)},[W,K,V]);return D.useEffect(()=>{if($.length<2)return;y(),document.fonts.ready.then(y);let Q=()=>y();document.fonts.addEventListener("loadingdone",Q);let P=new MutationObserver(()=>requestAnimationFrame(y));P.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),N.current=0,f($[0]);function q(){N.current=(N.current+1)%$.length;let A=F.current;if(A)A.style.width=T.current[N.current]+"px";u($[N.current],()=>{M.current=setTimeout(q,X)})}return M.current=setTimeout(q,X),()=>{if(M.current)clearTimeout(M.current);if(Y.current)clearInterval(Y.current);document.fonts.removeEventListener("loadingdone",Q),P.disconnect()}},[$,X,y,f,u]),HJ.jsx("span",{ref:F,className:"alttab-thinking"})});
