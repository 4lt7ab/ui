var BJ=Object.create;var{getPrototypeOf:PJ,defineProperty:I,getOwnPropertyNames:o,getOwnPropertyDescriptor:OJ}=Object,d=Object.prototype.hasOwnProperty;function s(J){return this[J]}var AJ,LJ,l=(J,$,X)=>{var W=J!=null&&typeof J==="object";if(W){var K=$?AJ??=new WeakMap:LJ??=new WeakMap,Y=K.get(J);if(Y)return Y}X=J!=null?BJ(PJ(J)):{};let V=$||!J||!J.__esModule?I(X,"default",{value:J,enumerable:!0}):X;for(let Z of o(J))if(!d.call(V,Z))I(V,Z,{get:s.bind(J,Z),enumerable:!0});if(W)K.set(J,V);return V},_J=(J)=>{var $=(c??=new WeakMap).get(J),X;if($)return $;if($=I({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var W of o(J))if(!d.call($,W))I($,W,{get:s.bind(J,W),enumerable:!(X=OJ(J,W))||X.enumerable})}return c.set(J,$),$},c;var MJ=(J)=>J;function TJ(J,$){this[J]=MJ.bind(null,$)}var vJ=(J,$)=>{for(var X in $)I(J,X,{get:$[X],enumerable:!0,configurable:!0,set:TJ.bind($,X)})};var Y1={};vJ(Y1,{ThinkingCycle:()=>U1,TextSection:()=>K1,SideNote:()=>W1,Quote:()=>R,PullQuote:()=>X1,Prose:()=>RJ,PROSE_H2_SIZE:()=>S,PROSE_H1_SIZE:()=>C,PROSE_CODE_SIZE:()=>yJ,PROSE_BODY_SIZE:()=>E,PROSE_BLOCKQUOTE_SIZE:()=>IJ,Markdown:()=>p,MarginNote:()=>h,MIX_SUBTLE:()=>j,MIX_HOVER:()=>b,MIX_BADGE:()=>EJ,Epigraph:()=>Z1,BREAKPOINT_WIDE:()=>kJ,BREAKPOINT_PROSE:()=>m,BREAKPOINT_MARGIN_NOTES:()=>g});module.exports=_J(Y1);var m="680px",kJ="900px",g="1100px",E="1.0625rem",C="clamp(2rem, 5vw, 2.75rem)",S="1.35em",yJ="0.875rem",IJ="1.25rem",j="5%",b="8%",EJ="14%";var r=require("react"),a=require("../../core/dist/index.cjs");var i=require("react/jsx-runtime"),CJ="alttab-prose-styles",wJ=`
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

  @media (max-width: ${m}) {
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
`,RJ=r.forwardRef(function({children:$,id:X,"data-testid":W},K){return a.useInjectStyles(CJ,wJ),i.jsx("div",{ref:K,className:"alttab-prose",id:X,"data-testid":W,children:$})});var G=require("react"),x=l(require("react-markdown")),f=l(require("remark-gfm")),F=require("../../core/dist/index.cjs");var z=require("react/jsx-runtime");function u(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(u).join("");if(J&&typeof J==="object"&&"props"in J)return u(J.props.children);return""}function bJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var t={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function e(){return z.jsxs("svg",{viewBox:"0 0 24 24",...t,children:[z.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),z.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function JJ(){return z.jsx("svg",{viewBox:"0 0 24 24",...t,children:z.jsx("path",{d:"M20 6L9 17l-5-5"})})}function pJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),z.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var w={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function mJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[z.jsx("circle",{cx:"12",cy:"12",r:"10"}),z.jsx("path",{d:"M12 16v-4"}),z.jsx("path",{d:"M12 8h.01"})]})}function gJ(){return z.jsx("svg",{viewBox:"0 0 24 24",...w,children:z.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function SJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[z.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),z.jsx("path",{d:"M12 8v3"}),z.jsx("path",{d:"M12 14h.01"})]})}function jJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[z.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),z.jsx("path",{d:"M12 9v4"}),z.jsx("path",{d:"M12 17h.01"})]})}function xJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...w,children:[z.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),z.jsx("path",{d:"M15 9l-6 6"}),z.jsx("path",{d:"M9 9l6 6"})]})}var fJ="alttab-markdown-codeblock",uJ=`
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
    border: ${F.semantic.borderWidthDefault} solid ${F.semantic.colorBorder};
    border-radius: ${F.semantic.radiusSm};
    background: ${F.semantic.colorSurface};
    color: ${F.semantic.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${F.semantic.transitionBase}, color ${F.semantic.transitionBase}, border-color ${F.semantic.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${F.semantic.colorText};
    border-color: ${F.semantic.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${F.semantic.colorSuccess};
    border-color: ${F.semantic.colorSuccess};
  }
`;function hJ({children:J}){F.useInjectStyles(fJ,uJ);let[$,X]=G.useState(!1),W=G.useRef(null),K=G.useCallback(()=>{let Y="",V=(Z)=>{if(typeof Z==="string"){Y+=Z;return}if(Array.isArray(Z)){Z.forEach(V);return}if(Z&&typeof Z==="object"&&"props"in Z)V(Z.props.children)};if(V(J),navigator.clipboard.writeText(Y.replace(/\n$/,"")),X(!0),W.current)clearTimeout(W.current);W.current=setTimeout(()=>X(!1),1500)},[J]);return z.jsxs("div",{className:"alttab-codeblock",children:[z.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:K,"aria-label":"Copy code",...$?{"data-copied":""}:{},children:$?z.jsx(JJ,{}):z.jsx(e,{})}),z.jsx("pre",{children:J})]})}function v({level:J,children:$}){let X=`h${J}`,W=u($),K=bJ(W);return z.jsxs(X,{id:K,children:[$,z.jsx("a",{href:`#${K}`,className:"alttab-md-anchor","aria-label":`Link to "${W}"`,children:z.jsx(pJ,{})})]})}var cJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,oJ={NOTE:{label:"Note",icon:mJ,attr:"note"},TIP:{label:"Tip",icon:gJ,attr:"tip"},IMPORTANT:{label:"Important",icon:SJ,attr:"important"},WARNING:{label:"Warning",icon:jJ,attr:"warning"},CAUTION:{label:"Caution",icon:xJ,attr:"caution"}};function dJ(J){let $=G.Children.toArray(J),X=$.findIndex(G.isValidElement);if(X===-1)return null;let W=$[X],K=G.Children.toArray(W.props.children),Y=K[0];if(typeof Y!=="string")return null;let V=Y.match(cJ);if(!V)return null;let Z=V[1],D=Y.slice(V[0].length);if(D||K.length>1){let A=D?[D,...K.slice(1)]:K.slice(1),B=G.cloneElement(W,{},...A);return{type:Z,content:[...$.slice(0,X),B,...$.slice(X+1)]}}return{type:Z,content:$.slice(X+1)}}function sJ({children:J}){let $=dJ(J);if($){let X=oJ[$.type],W=X.icon;return z.jsxs("div",{className:"alttab-callout","data-callout":X.attr,children:[z.jsxs("div",{className:"alttab-callout-title",children:[z.jsx(W,{}),z.jsx("span",{children:X.label})]}),z.jsx("div",{className:"alttab-callout-body",children:$.content})]})}return z.jsx("blockquote",{children:J})}var lJ="alttab-markdown-styles",rJ=`
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
`;function aJ({children:J}){let $=0,X=G.Children.map(J,(W)=>{if(!G.isValidElement(W))return W;let K=$%2===1;if($++,!K)return W;let Y=G.Children.map(W.props.children,(V)=>{if(!G.isValidElement(V))return V;let Z=V.props;return G.cloneElement(V,{style:{...Z.style,background:`color-mix(in srgb, var(--color-text) ${j}, transparent)`}})});return G.cloneElement(W,{},Y)});return z.jsx("tbody",{children:X})}var iJ="alttab-markdown-editable",nJ=`
  .alttab-md-editable-display {
    cursor: pointer;
    border-radius: ${F.semantic.radiusMd};
    transition: background ${F.semantic.transitionBase};
  }

  .alttab-md-editable-display:hover {
    background: color-mix(in srgb, ${F.semantic.colorText} ${b}, transparent);
  }

  .alttab-md-editable-empty {
    cursor: pointer;
    border-radius: ${F.semantic.radiusMd};
    padding: ${F.semantic.spaceSm} ${F.semantic.spaceMd};
    font-style: italic;
    color: ${F.semantic.colorTextMuted};
    transition: background ${F.semantic.transitionBase};
  }

  .alttab-md-editable-empty:hover {
    background: color-mix(in srgb, ${F.semantic.colorText} ${b}, transparent);
  }
`,$J={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:F.semantic.spaceSm,padding:`${F.semantic.spaceSm} ${F.semantic.spaceMd}`,fontFamily:F.semantic.fontSans,fontSize:F.semantic.fontSizeSm,fontWeight:F.semantic.fontWeightMedium,lineHeight:F.semantic.lineHeightTight,borderRadius:F.semantic.radiusMd,cursor:"pointer",transition:`background ${F.semantic.transitionBase}, border-color ${F.semantic.transitionBase}, opacity ${F.semantic.transitionBase}`},tJ={...$J,background:F.semantic.colorActionPrimary,color:F.semantic.colorTextInverse,border:"none"},eJ={...$J,background:F.semantic.colorActionSecondary,color:F.semantic.colorText,border:`${F.semantic.borderWidthDefault} solid ${F.semantic.colorBorder}`},n={pre:hJ,blockquote:sJ,tbody:aJ,h1:({children:J})=>z.jsx(v,{level:1,children:J}),h2:({children:J})=>z.jsx(v,{level:2,children:J}),h3:({children:J})=>z.jsx(v,{level:3,children:J}),h4:({children:J})=>z.jsx(v,{level:4,children:J}),h5:({children:J})=>z.jsx(v,{level:5,children:J}),h6:({children:J})=>z.jsx(v,{level:6,children:J})};function p({children:J,id:$,"data-testid":X,editable:W=!1,editing:K=!1,value:Y,onStartEdit:V,onEditChange:Z,onSave:D,onCancel:A,fieldLabel:B,rows:M=4,placeholder:T="Click to add content..."}){F.useInjectStyles(lJ,rJ),F.useInjectStyles(iJ,nJ);let[k,y]=G.useState(!1),U=G.useRef(null),H=J??"",q=G.useCallback(()=>{if(navigator.clipboard.writeText(H),y(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>y(!1),1500)},[H]),O=G.useCallback((Q)=>{if(Q.key==="Escape")Q.preventDefault(),A?.();else if(Q.key==="Enter"&&(Q.metaKey||Q.ctrlKey))Q.preventDefault(),D?.()},[A,D]);if(W){if(K)return z.jsxs("div",{role:"group","aria-label":B,children:[z.jsx("textarea",{value:Y??"",onChange:(Q)=>Z?.(Q.target.value),onKeyDown:O,rows:M,"aria-label":B?`Edit ${B}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:F.semantic.spaceSm,fontFamily:F.semantic.fontMono,fontSize:F.semantic.fontSizeSm,lineHeight:F.semantic.lineHeightRelaxed,color:F.semantic.colorText,background:F.semantic.colorSurfacePage,border:`${F.semantic.borderWidthDefault} solid ${F.semantic.colorBorder}`,borderRadius:F.semantic.radiusMd,resize:"vertical",outline:"none"}}),z.jsxs("div",{style:{display:"flex",gap:F.semantic.spaceSm,marginTop:F.semantic.spaceSm},children:[z.jsx("button",{type:"button",onClick:D,style:tJ,children:"Save"}),z.jsx("button",{type:"button",onClick:A,style:eJ,children:"Cancel"})]})]});if(!H)return z.jsx("div",{className:"alttab-md-editable-empty",role:"button",tabIndex:0,"aria-label":B?`Add ${B}`:"Add content",onClick:V,onKeyDown:(Q)=>{if(Q.key==="Enter"||Q.key===" ")Q.preventDefault(),V?.()},children:T});return z.jsx("div",{className:"alttab-md-editable-display",role:"button",tabIndex:0,"aria-label":B?`Edit ${B}`:"Edit content",onClick:V,onKeyDown:(Q)=>{if(Q.key==="Enter"||Q.key===" ")Q.preventDefault(),V?.()},children:z.jsx("div",{className:"alttab-markdown",id:$,"data-testid":X,children:z.jsx(x.default,{remarkPlugins:[f.default],components:n,children:H})})})}return z.jsxs("div",{className:"alttab-markdown",id:$,"data-testid":X,children:[z.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:q,"aria-label":"Copy markdown source",title:"Copy markdown",...k?{"data-copied":""}:{},children:k?z.jsx(JJ,{}):z.jsx(e,{})}),z.jsx(x.default,{remarkPlugins:[f.default],components:n,children:H})]})}var zJ=require("react"),FJ=require("../../core/dist/index.cjs"),L=require("react/jsx-runtime"),J1="alttab-epigraph",$1=`
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
`;function z1({children:J,cite:$,innerRef:X}){return L.jsxs("blockquote",{ref:X,"data-pull-quote":"",children:[L.jsx("p",{children:J}),$&&L.jsx("footer",{children:$})]})}function F1({children:J,cite:$,innerRef:X}){return FJ.useInjectStyles(J1,$1),L.jsxs("blockquote",{ref:X,className:"alttab-epigraph",children:[L.jsx("p",{children:J}),$&&L.jsx("footer",{children:$})]})}var R=zJ.forwardRef(function({children:$,variant:X="pull",cite:W},K){if(X==="epigraph")return L.jsx(F1,{innerRef:K,cite:W,children:$});return L.jsx(z1,{innerRef:K,cite:W,children:$})});var XJ=require("react");var WJ=require("react/jsx-runtime"),X1=XJ.forwardRef(function({children:$},X){return WJ.jsx(R,{ref:X,variant:"pull",children:$})});var ZJ=require("react"),KJ=require("react/jsx-runtime"),h=ZJ.forwardRef(function({children:$,side:X="left"},W){return KJ.jsx("small",{ref:W,"data-margin-note":"","data-side":X,children:$})});var VJ=require("react");var GJ=require("react/jsx-runtime"),W1=VJ.forwardRef(function({children:$},X){return GJ.jsx(h,{ref:X,side:"right",children:$})});var UJ=require("react");var YJ=require("react/jsx-runtime"),Z1=UJ.forwardRef(function({children:$,cite:X},W){return YJ.jsx(R,{ref:W,variant:"epigraph",cite:X,children:$})});var QJ=require("react/jsx-runtime");function K1({content:J,editing:$,editValue:X,onStartEdit:W,onEditChange:K,onSave:Y,onCancel:V,fieldLabel:Z,rows:D,placeholder:A}){return QJ.jsx(p,{editable:!0,editing:$,value:X,onStartEdit:W,onEditChange:K,onSave:Y,onCancel:V,fieldLabel:Z,rows:D,placeholder:A,children:J??""})}var N=require("react"),DJ=require("../../core/dist/index.cjs"),NJ=require("react/jsx-runtime"),qJ="abcdefghijklmnopqrstuvwxyz!?*~+#",V1="alttab-thinking-cycle",G1=`
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
`;function HJ(){return qJ[Math.random()*qJ.length|0]}var U1=N.forwardRef(function({words:$,holdMs:X=2000,scrambleTicks:W=4,tickMs:K=50,staggerMs:Y=30},V){DJ.useInjectStyles(V1,G1);let Z=N.useRef(null);N.useImperativeHandle(V,()=>Z.current);let D=N.useRef(0),A=N.useRef([]),B=N.useRef(null),M=N.useRef(null),T=N.useCallback(()=>{let U=Z.current;if(!U)return;let H=U.innerHTML;U.style.width="";let q=[];for(let O of $)U.textContent=O,q.push(Math.ceil(U.getBoundingClientRect().width));U.innerHTML=H||"",A.current=q,U.style.width=q[D.current]+"px"},[$]),k=N.useCallback((U)=>{let H=Z.current;if(!H)return;H.innerHTML="";for(let q=0;q<U.length;q++){let O=document.createElement("span");O.className="alttab-char",O.textContent=U[q],O.style.animationDelay=`${q*Y}ms`,H.appendChild(O)}},[Y]),y=N.useCallback((U,H)=>{let q=Z.current;if(!q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){q.textContent=U,H();return}q.innerHTML="";let Q=[];for(let _=0;_<U.length;_++){let P=document.createElement("span");P.className="alttab-char",P.style.animationDelay=`${_*Y}ms`,P.textContent=U[_]===" "?" ":HJ(),q.appendChild(P),Q.push({span:P,final:U[_],ticks:0,maxTicks:W+_*2})}M.current=setInterval(()=>{let _=!0;for(let P of Q)if(P.ticks>=P.maxTicks)P.span.textContent=P.final;else _=!1,P.ticks++,P.span.textContent=P.final===" "?" ":HJ();if(_)clearInterval(M.current),M.current=null,H()},K)},[W,K,Y]);return N.useEffect(()=>{if($.length<2)return;T(),document.fonts.ready.then(T);let U=()=>T();document.fonts.addEventListener("loadingdone",U);let H=new MutationObserver(()=>requestAnimationFrame(T));H.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),D.current=0,k($[0]);function q(){D.current=(D.current+1)%$.length;let O=Z.current;if(O)O.style.width=A.current[D.current]+"px";y($[D.current],()=>{B.current=setTimeout(q,X)})}return B.current=setTimeout(q,X),()=>{if(B.current)clearTimeout(B.current);if(M.current)clearInterval(M.current);document.fonts.removeEventListener("loadingdone",U),H.disconnect()}},[$,X,T,k,y]),NJ.jsx("span",{ref:Z,className:"alttab-thinking"})});
