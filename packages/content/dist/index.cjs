var MJ=Object.create;var{getPrototypeOf:vJ,defineProperty:k,getOwnPropertyNames:l,getOwnPropertyDescriptor:TJ}=Object,s=Object.prototype.hasOwnProperty;function a(J){return this[J]}var yJ,kJ,r=(J,$,z)=>{var Z=J!=null&&typeof J==="object";if(Z){var U=$?yJ??=new WeakMap:kJ??=new WeakMap,K=U.get(J);if(K)return K}z=J!=null?MJ(vJ(J)):{};let V=$||!J||!J.__esModule?k(z,"default",{value:J,enumerable:!0}):z;for(let F of l(J))if(!s.call(V,F))k(V,F,{get:a.bind(J,F),enumerable:!0});if(Z)U.set(J,V);return V},EJ=(J)=>{var $=(d??=new WeakMap).get(J),z;if($)return $;if($=k({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of l(J))if(!s.call($,Z))k($,Z,{get:a.bind(J,Z),enumerable:!(z=TJ(J,Z))||z.enumerable})}return d.set(J,$),$},d;var IJ=(J)=>J;function CJ(J,$){this[J]=IJ.bind(null,$)}var bJ=(J,$)=>{for(var z in $)k(J,z,{get:$[z],enumerable:!0,configurable:!0,set:CJ.bind($,z)})};var L0={};bJ(L0,{ThinkingCycle:()=>O0,TextSection:()=>N0,SideNote:()=>Y0,Quote:()=>R,PullQuote:()=>K0,Prose:()=>fJ,PROSE_H2_SIZE:()=>j,PROSE_H1_SIZE:()=>C,PROSE_CODE_SIZE:()=>RJ,PROSE_BODY_SIZE:()=>I,PROSE_BLOCKQUOTE_SIZE:()=>wJ,Markdown:()=>p,MarginNote:()=>u,MIX_SUBTLE:()=>x,MIX_HOVER:()=>m,MIX_BADGE:()=>mJ,LinkCard:()=>B0,Epigraph:()=>G0,Container:()=>gJ,BREAKPOINT_WIDE:()=>S,BREAKPOINT_PROSE:()=>E,BREAKPOINT_MARGIN_NOTES:()=>g});module.exports=EJ(L0);var E="680px",S="900px",g="1100px",I="1.0625rem",C="clamp(2rem, 5vw, 2.75rem)",j="1.35em",RJ="0.875rem",wJ="1.25rem",x="5%",m="8%",mJ="14%";var n=require("react");var i=require("react/jsx-runtime"),pJ={narrow:"32rem",prose:E,wide:S,full:"100%"},SJ={none:"0",sm:"0.75rem",md:"1.5rem",lg:"3rem"},gJ=n.forwardRef(function({width:$="prose",padding:z="md",children:Z,id:U,"data-testid":K},V){return i.jsx("div",{ref:V,id:U,"data-testid":K,style:{boxSizing:"border-box",width:"100%",maxWidth:pJ[$],marginInline:"auto",paddingInline:SJ[z],overflow:"visible"},children:Z})});var t=require("react"),e=require("../../core/dist/index.cjs");var JJ=require("react/jsx-runtime"),jJ="alttab-prose-styles",xJ=`
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
`,fJ=t.forwardRef(function({children:$,id:z,"data-testid":Z},U){return e.useInjectStyles(jJ,xJ),JJ.jsx("div",{ref:U,className:"alttab-prose",id:z,"data-testid":Z,children:$})});var G=require("react"),$J=r(require("react-markdown")),zJ=r(require("remark-gfm")),B=require("../../core/dist/index.cjs");var X=require("react/jsx-runtime");function f(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(f).join("");if(J&&typeof J==="object"&&"props"in J)return f(J.props.children);return""}function uJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var XJ={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function ZJ(){return X.jsxs("svg",{viewBox:"0 0 24 24",...XJ,children:[X.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),X.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function FJ(){return X.jsx("svg",{viewBox:"0 0 24 24",...XJ,children:X.jsx("path",{d:"M20 6L9 17l-5-5"})})}function hJ(){return X.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[X.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),X.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var b={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function cJ(){return X.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[X.jsx("circle",{cx:"12",cy:"12",r:"10"}),X.jsx("path",{d:"M12 16v-4"}),X.jsx("path",{d:"M12 8h.01"})]})}function oJ(){return X.jsx("svg",{viewBox:"0 0 24 24",...b,children:X.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function dJ(){return X.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[X.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),X.jsx("path",{d:"M12 8v3"}),X.jsx("path",{d:"M12 14h.01"})]})}function lJ(){return X.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[X.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),X.jsx("path",{d:"M12 9v4"}),X.jsx("path",{d:"M12 17h.01"})]})}function sJ(){return X.jsxs("svg",{viewBox:"0 0 24 24",...b,children:[X.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),X.jsx("path",{d:"M15 9l-6 6"}),X.jsx("path",{d:"M9 9l6 6"})]})}var aJ="alttab-markdown-codeblock",rJ=`
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
`;function nJ({children:J}){B.useInjectStyles(aJ,rJ);let[$,z]=G.useState(!1),Z=G.useRef(null),U=G.useCallback(()=>{let K="",V=(F)=>{if(typeof F==="string"){K+=F;return}if(Array.isArray(F)){F.forEach(V);return}if(F&&typeof F==="object"&&"props"in F)V(F.props.children)};if(V(J),navigator.clipboard.writeText(K.replace(/\n$/,"")),z(!0),Z.current)clearTimeout(Z.current);Z.current=setTimeout(()=>z(!1),1500)},[J]);return X.jsxs("div",{className:"alttab-codeblock",children:[X.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:U,"aria-label":"Copy code",...$?{"data-copied":""}:{},children:$?X.jsx(FJ,{}):X.jsx(ZJ,{})}),X.jsx("pre",{children:J})]})}function T({level:J,children:$}){let z=`h${J}`,Z=f($),U=uJ(Z);return X.jsxs(z,{id:U,children:[$,X.jsx("a",{href:`#${U}`,className:"alttab-md-anchor","aria-label":`Link to "${Z}"`,children:X.jsx(hJ,{})})]})}var iJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,tJ={NOTE:{label:"Note",icon:cJ,attr:"note"},TIP:{label:"Tip",icon:oJ,attr:"tip"},IMPORTANT:{label:"Important",icon:dJ,attr:"important"},WARNING:{label:"Warning",icon:lJ,attr:"warning"},CAUTION:{label:"Caution",icon:sJ,attr:"caution"}};function eJ(J){let $=G.Children.toArray(J),z=$.findIndex(G.isValidElement);if(z===-1)return null;let Z=$[z],U=G.Children.toArray(Z.props.children),K=U[0];if(typeof K!=="string")return null;let V=K.match(iJ);if(!V)return null;let F=V[1],H=K.slice(V[0].length);if(H||U.length>1){let v=H?[H,...U.slice(1)]:U.slice(1),A=G.cloneElement(Z,{},...v);return{type:F,content:[...$.slice(0,z),A,...$.slice(z+1)]}}return{type:F,content:$.slice(z+1)}}function J0({children:J}){let $=eJ(J);if($){let z=tJ[$.type],Z=z.icon;return X.jsxs("div",{className:"alttab-callout","data-callout":z.attr,children:[X.jsxs("div",{className:"alttab-callout-title",children:[X.jsx(Z,{}),X.jsx("span",{children:z.label})]}),X.jsx("div",{className:"alttab-callout-body",children:$.content})]})}return X.jsx("blockquote",{children:J})}var $0="alttab-markdown-styles",z0=`
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
`;function X0({children:J}){let $=0,z=G.Children.map(J,(Z)=>{if(!G.isValidElement(Z))return Z;let U=$%2===1;if($++,!U)return Z;let K=G.Children.map(Z.props.children,(V)=>{if(!G.isValidElement(V))return V;let F=V.props;return G.cloneElement(V,{style:{...F.style,background:`color-mix(in srgb, var(--color-text) ${x}, transparent)`}})});return G.cloneElement(Z,{},K)});return X.jsx("tbody",{children:z})}var Z0={pre:nJ,blockquote:J0,tbody:X0,h1:({children:J})=>X.jsx(T,{level:1,children:J}),h2:({children:J})=>X.jsx(T,{level:2,children:J}),h3:({children:J})=>X.jsx(T,{level:3,children:J}),h4:({children:J})=>X.jsx(T,{level:4,children:J}),h5:({children:J})=>X.jsx(T,{level:5,children:J}),h6:({children:J})=>X.jsx(T,{level:6,children:J})};function p({children:J,id:$,"data-testid":z}){B.useInjectStyles($0,z0);let[Z,U]=G.useState(!1),K=G.useRef(null),V=G.useCallback(()=>{if(navigator.clipboard.writeText(J),U(!0),K.current)clearTimeout(K.current);K.current=setTimeout(()=>U(!1),1500)},[J]);return X.jsxs("div",{className:"alttab-markdown",id:$,"data-testid":z,children:[X.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:V,"aria-label":"Copy markdown source",title:"Copy markdown",...Z?{"data-copied":""}:{},children:Z?X.jsx(FJ,{}):X.jsx(ZJ,{})}),X.jsx($J.default,{remarkPlugins:[zJ.default],components:Z0,children:J})]})}var WJ=require("react"),UJ=require("../../core/dist/index.cjs"),L=require("react/jsx-runtime"),F0="alttab-epigraph",W0=`
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
`;function U0({children:J,cite:$,innerRef:z}){return L.jsxs("blockquote",{ref:z,"data-pull-quote":"",children:[L.jsx("p",{children:J}),$&&L.jsx("footer",{children:$})]})}function V0({children:J,cite:$,innerRef:z}){return UJ.useInjectStyles(F0,W0),L.jsxs("blockquote",{ref:z,className:"alttab-epigraph",children:[L.jsx("p",{children:J}),$&&L.jsx("footer",{children:$})]})}var R=WJ.forwardRef(function({children:$,variant:z="pull",cite:Z},U){if(z==="epigraph")return L.jsx(V0,{innerRef:U,cite:Z,children:$});return L.jsx(U0,{innerRef:U,cite:Z,children:$})});var VJ=require("react");var KJ=require("react/jsx-runtime"),K0=VJ.forwardRef(function({children:$},z){return KJ.jsx(R,{ref:z,variant:"pull",children:$})});var YJ=require("react"),GJ=require("react/jsx-runtime"),u=YJ.forwardRef(function({children:$,side:z="left"},Z){return GJ.jsx("small",{ref:Z,"data-margin-note":"","data-side":z,children:$})});var QJ=require("react");var qJ=require("react/jsx-runtime"),Y0=QJ.forwardRef(function({children:$},z){return qJ.jsx(u,{ref:z,side:"right",children:$})});var BJ=require("react");var DJ=require("react/jsx-runtime"),G0=BJ.forwardRef(function({children:$,cite:z},Z){return DJ.jsx(R,{ref:Z,variant:"epigraph",cite:z,children:$})});var HJ=require("react"),NJ=require("../../core/dist/index.cjs"),w=require("react/jsx-runtime"),Q0="alttab-link-card",q0=`
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
`,B0=HJ.forwardRef(function({title:$,description:z,external:Z,href:U,target:K,rel:V,onClick:F,id:H,"aria-label":v,"data-testid":A},Y){return NJ.useInjectStyles(Q0,q0),w.jsxs("a",{ref:Y,className:"alttab-link-card",href:U,target:Z?"_blank":K,rel:Z?"noopener noreferrer":V,onClick:F,id:H,"aria-label":v,"data-testid":A,children:[w.jsx("span",{className:"alttab-link-card__title",children:$}),z&&w.jsx("span",{className:"alttab-link-card__desc",children:z})]})});var PJ=require("react"),W=require("../../core/dist/index.cjs");var _=require("react/jsx-runtime"),D0="alttab-text-section",H0=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${W.semantic.radiusMd};
    transition: background ${W.semantic.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${W.semantic.colorText} ${m}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${W.semantic.radiusMd};
    padding: ${W.semantic.spaceSm} ${W.semantic.spaceMd};
    font-style: italic;
    color: ${W.semantic.colorTextMuted};
    transition: background ${W.semantic.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${W.semantic.colorText} ${m}, transparent);
  }
`;function N0({content:J,editing:$,editValue:z,onStartEdit:Z,onEditChange:U,onSave:K,onCancel:V,fieldLabel:F,rows:H=4,placeholder:v="Click to add content..."}){W.useInjectStyles(D0,H0);let A=PJ.useCallback((Y)=>{if(Y.key==="Escape")Y.preventDefault(),V();else if(Y.key==="Enter"&&(Y.metaKey||Y.ctrlKey))Y.preventDefault(),K()},[V,K]);if($)return _.jsxs("div",{role:"group","aria-label":F,children:[_.jsx("textarea",{value:z,onChange:(Y)=>U(Y.target.value),onKeyDown:A,rows:H,"aria-label":F?`Edit ${F}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:W.semantic.spaceSm,fontFamily:W.semantic.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:W.semantic.colorText,background:W.semantic.colorSurfacePage,border:`${W.semantic.borderWidthDefault} solid ${W.semantic.colorBorder}`,borderRadius:W.semantic.radiusMd,resize:"vertical",outline:"none"}}),_.jsxs("div",{style:{display:"flex",gap:W.semantic.spaceSm,marginTop:W.semantic.spaceSm},children:[_.jsx("button",{type:"button",onClick:K,style:{padding:`${W.semantic.spaceXs} ${W.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:W.semantic.fontSans,color:W.semantic.colorTextInverse,background:W.semantic.colorActionPrimary,border:"none",borderRadius:W.semantic.radiusSm,cursor:"pointer"},children:"Save"}),_.jsx("button",{type:"button",onClick:V,style:{padding:`${W.semantic.spaceXs} ${W.semantic.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:W.semantic.fontSans,color:W.semantic.colorTextSecondary,background:"transparent",border:`${W.semantic.borderWidthDefault} solid ${W.semantic.colorBorder}`,borderRadius:W.semantic.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return _.jsx("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":F?`Edit ${F}`:"Edit content",onClick:Z,onKeyDown:(Y)=>{if(Y.key==="Enter"||Y.key===" ")Y.preventDefault(),Z()},children:_.jsx(p,{children:J})});return _.jsx("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":F?`Add ${F}`:"Add content",onClick:Z,onKeyDown:(Y)=>{if(Y.key==="Enter"||Y.key===" ")Y.preventDefault(),Z()},children:v})}var D=require("react"),LJ=require("../../core/dist/index.cjs"),_J=require("react/jsx-runtime"),AJ="abcdefghijklmnopqrstuvwxyz!?*~+#",P0="alttab-thinking-cycle",A0=`
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
`;function OJ(){return AJ[Math.random()*AJ.length|0]}var O0=D.forwardRef(function({words:$,holdMs:z=2000,scrambleTicks:Z=4,tickMs:U=50,staggerMs:K=30},V){LJ.useInjectStyles(P0,A0);let F=D.useRef(null);D.useImperativeHandle(V,()=>F.current);let H=D.useRef(0),v=D.useRef([]),A=D.useRef(null),Y=D.useRef(null),y=D.useCallback(()=>{let Q=F.current;if(!Q)return;let P=Q.innerHTML;Q.style.width="";let q=[];for(let O of $)Q.textContent=O,q.push(Math.ceil(Q.getBoundingClientRect().width));Q.innerHTML=P||"",v.current=q,Q.style.width=q[H.current]+"px"},[$]),h=D.useCallback((Q)=>{let P=F.current;if(!P)return;P.innerHTML="";for(let q=0;q<Q.length;q++){let O=document.createElement("span");O.className="alttab-char",O.textContent=Q[q],O.style.animationDelay=`${q*K}ms`,P.appendChild(O)}},[K]),c=D.useCallback((Q,P)=>{let q=F.current;if(!q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){q.textContent=Q,P();return}q.innerHTML="";let o=[];for(let M=0;M<Q.length;M++){let N=document.createElement("span");N.className="alttab-char",N.style.animationDelay=`${M*K}ms`,N.textContent=Q[M]===" "?" ":OJ(),q.appendChild(N),o.push({span:N,final:Q[M],ticks:0,maxTicks:Z+M*2})}Y.current=setInterval(()=>{let M=!0;for(let N of o)if(N.ticks>=N.maxTicks)N.span.textContent=N.final;else M=!1,N.ticks++,N.span.textContent=N.final===" "?" ":OJ();if(M)clearInterval(Y.current),Y.current=null,P()},U)},[Z,U,K]);return D.useEffect(()=>{if($.length<2)return;y(),document.fonts.ready.then(y);let Q=()=>y();document.fonts.addEventListener("loadingdone",Q);let P=new MutationObserver(()=>requestAnimationFrame(y));P.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),H.current=0,h($[0]);function q(){H.current=(H.current+1)%$.length;let O=F.current;if(O)O.style.width=v.current[H.current]+"px";c($[H.current],()=>{A.current=setTimeout(q,z)})}return A.current=setTimeout(q,z),()=>{if(A.current)clearTimeout(A.current);if(Y.current)clearInterval(Y.current);document.fonts.removeEventListener("loadingdone",Q),P.disconnect()}},[$,z,y,h,c]),_J.jsx("span",{ref:F,className:"alttab-thinking"})});
