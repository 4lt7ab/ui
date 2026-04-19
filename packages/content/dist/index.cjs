var GJ=Object.create;var{getPrototypeOf:KJ,defineProperty:b,getOwnPropertyNames:h,getOwnPropertyDescriptor:YJ}=Object,c=Object.prototype.hasOwnProperty;function o(J){return this[J]}var qJ,NJ,a=(J,z,F)=>{var U=J!=null&&typeof J==="object";if(U){var V=z?qJ??=new WeakMap:NJ??=new WeakMap,Y=V.get(J);if(Y)return Y}F=J!=null?GJ(KJ(J)):{};let Z=z||!J||!J.__esModule?b(F,"default",{value:J,enumerable:!0}):F;for(let W of h(J))if(!c.call(Z,W))b(Z,W,{get:o.bind(J,W),enumerable:!0});if(U)V.set(J,Z);return Z},HJ=(J)=>{var z=(x??=new WeakMap).get(J),F;if(z)return z;if(z=b({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var U of h(J))if(!c.call(z,U))b(z,U,{get:o.bind(J,U),enumerable:!(F=YJ(J,U))||F.enumerable})}return x.set(J,z),z},x;var DJ=(J)=>J;function BJ(J,z){this[J]=DJ.bind(null,z)}var OJ=(J,z)=>{for(var F in z)b(J,F,{get:z[F],enumerable:!0,configurable:!0,set:BJ.bind(z,F)})};var z0={};OJ(z0,{ThinkingCycle:()=>$0,Quote:()=>nJ,Prose:()=>TJ,PROSE_H2_SIZE:()=>S,PROSE_H1_SIZE:()=>I,PROSE_CODE_SIZE:()=>PJ,PROSE_BODY_SIZE:()=>E,PROSE_BLOCKQUOTE_SIZE:()=>vJ,Markdown:()=>JJ,MarginNote:()=>tJ,MIX_SUBTLE:()=>j,MIX_HOVER:()=>C,MIX_BADGE:()=>MJ,BREAKPOINT_WIDE:()=>AJ,BREAKPOINT_PROSE:()=>R,BREAKPOINT_MARGIN_NOTES:()=>g});module.exports=HJ(z0);var R="680px",AJ="900px",g="1100px",E="1.0625rem",I="clamp(2rem, 5vw, 2.75rem)",S="1.35em",PJ="0.875rem",vJ="1.25rem",j="5%",C="8%",MJ="14%";var d=require("react"),r=require("../../core/dist/index.cjs");var i=require("react/jsx-runtime"),LJ="alttab-prose-styles",_J=`
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
    font-size: ${I};
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
    border-radius: var(--radius-sm);
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
    border-radius: var(--radius-sm);
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

  @media (max-width: ${R}) {
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
`,TJ=d.forwardRef(function({children:z,id:F,"data-testid":U},V){return r.useInjectStyles(LJ,_J),i.jsx("div",{ref:V,className:"alttab-prose",id:F,"data-testid":U,children:z})});var X=require("react"),m=a(require("react-markdown")),u=a(require("remark-gfm")),Q=require("../../core/dist/index.cjs");var $=require("react/jsx-runtime");function f(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(f).join("");if(J&&typeof J==="object"&&"props"in J)return f(J.props.children);return""}function yJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var s={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function n(){return $.jsxs("svg",{viewBox:"0 0 24 24",...s,children:[$.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function t(){return $.jsx("svg",{viewBox:"0 0 24 24",...s,children:$.jsx("path",{d:"M20 6L9 17l-5-5"})})}function kJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var p={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function wJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...p,children:[$.jsx("circle",{cx:"12",cy:"12",r:"10"}),$.jsx("path",{d:"M12 16v-4"}),$.jsx("path",{d:"M12 8h.01"})]})}function bJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...p,children:$.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function EJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...p,children:[$.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$.jsx("path",{d:"M12 8v3"}),$.jsx("path",{d:"M12 14h.01"})]})}function IJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...p,children:[$.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$.jsx("path",{d:"M12 9v4"}),$.jsx("path",{d:"M12 17h.01"})]})}function pJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...p,children:[$.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$.jsx("path",{d:"M15 9l-6 6"}),$.jsx("path",{d:"M9 9l6 6"})]})}var CJ="alttab-markdown-codeblock",RJ=`
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
    border: ${Q.semantic.borderWidthDefault} solid ${Q.semantic.colorBorder};
    border-radius: ${Q.semantic.radiusSm};
    background: ${Q.semantic.colorSurface};
    color: ${Q.semantic.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity ${Q.semantic.transitionBase}, color ${Q.semantic.transitionBase}, border-color ${Q.semantic.transitionBase};
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${Q.semantic.colorText};
    border-color: ${Q.semantic.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${Q.semantic.colorSuccess};
    border-color: ${Q.semantic.colorSuccess};
  }
`;function gJ({children:J}){Q.useInjectStyles(CJ,RJ);let[z,F]=X.useState(!1),U=X.useRef(null),V=X.useCallback(()=>{let Y="",Z=(W)=>{if(typeof W==="string"){Y+=W;return}if(Array.isArray(W)){W.forEach(Z);return}if(W&&typeof W==="object"&&"props"in W)Z(W.props.children)};if(Z(J),navigator.clipboard.writeText(Y.replace(/\n$/,"")),F(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>F(!1),1500)},[J]);return $.jsxs("div",{className:"alttab-codeblock",children:[$.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:V,"aria-label":"Copy code",...z?{"data-copied":""}:{},children:z?$.jsx(t,{}):$.jsx(n,{})}),$.jsx("pre",{children:J})]})}function k({level:J,children:z}){let F=`h${J}`,U=f(z),V=yJ(U);return $.jsxs(F,{id:V,children:[z,$.jsx("a",{href:`#${V}`,className:"alttab-md-anchor","aria-label":`Link to "${U}"`,children:$.jsx(kJ,{})})]})}var SJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,jJ={NOTE:{label:"Note",icon:wJ,attr:"note"},TIP:{label:"Tip",icon:bJ,attr:"tip"},IMPORTANT:{label:"Important",icon:EJ,attr:"important"},WARNING:{label:"Warning",icon:IJ,attr:"warning"},CAUTION:{label:"Caution",icon:pJ,attr:"caution"}};function mJ(J){let z=X.Children.toArray(J),F=z.findIndex(X.isValidElement);if(F===-1)return null;let U=z[F],V=X.Children.toArray(U.props.children),Y=V[0];if(typeof Y!=="string")return null;let Z=Y.match(SJ);if(!Z)return null;let W=Z[1],D=Y.slice(Z[0].length);if(D||V.length>1){let M=D?[D,...V.slice(1)]:V.slice(1),B=X.cloneElement(U,{},...M);return{type:W,content:[...z.slice(0,F),B,...z.slice(F+1)]}}return{type:W,content:z.slice(F+1)}}function uJ({children:J}){let z=mJ(J);if(z){let F=jJ[z.type],U=F.icon;return $.jsxs("div",{className:"alttab-callout","data-callout":F.attr,children:[$.jsxs("div",{className:"alttab-callout-title",children:[$.jsx(U,{}),$.jsx("span",{children:F.label})]}),$.jsx("div",{className:"alttab-callout-body",children:z.content})]})}return $.jsx("blockquote",{children:J})}var fJ="alttab-markdown-styles",xJ=`
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
    font-size: ${I};
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
    border-radius: var(--radius-sm);
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
`;function hJ({children:J}){let z=0,F=X.Children.map(J,(U)=>{if(!X.isValidElement(U))return U;let V=z%2===1;if(z++,!V)return U;let Y=X.Children.map(U.props.children,(Z)=>{if(!X.isValidElement(Z))return Z;let W=Z.props;return X.cloneElement(Z,{style:{...W.style,background:`color-mix(in srgb, var(--color-text) ${j}, transparent)`}})});return X.cloneElement(U,{},Y)});return $.jsx("tbody",{children:F})}var cJ="alttab-markdown-editable",oJ=`
  .alttab-md-editable-display {
    position: relative;
    border-radius: ${Q.semantic.radiusMd};
    transition: background ${Q.semantic.transitionBase};
  }

  .alttab-md-editable-display:hover,
  .alttab-md-editable-display:focus-within {
    background: color-mix(in srgb, ${Q.semantic.colorText} ${C}, transparent);
  }

  /*
   * Transparent overlay that carries the click-to-edit affordance. Rendering
   * the outer wrapper as a real <button> would create a nested-interactive
   * ARIA violation as soon as the rendered markdown emits an <a> or <button>;
   * giving the wrapper role="button" is the same violation spelled different.
   * Instead, the overlay is the <button> and the markdown sits above it with
   * pointer-events: none — letting blank-area clicks fall through to the
   * overlay while <a> descendants (which opt back in) stay clickable.
   */
  .alttab-md-editable-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: inherit;
    cursor: pointer;
    z-index: 0;
  }

  .alttab-md-editable-overlay:focus-visible {
    outline: ${Q.semantic.focusRingWidth} solid ${Q.semantic.focusRingColor};
    outline-offset: ${Q.semantic.focusRingOffset};
  }

  .alttab-md-editable-display > .alttab-markdown {
    position: relative;
    z-index: 1;
    pointer-events: none;
  }

  /*
   * Opt interactive descendants back into pointer events so links emitted
   * from markdown remain clickable. The markdown container blocks pointer
   * events in the middle to let blank-area clicks reach the overlay button.
   */
  .alttab-md-editable-display > .alttab-markdown a,
  .alttab-md-editable-display > .alttab-markdown button,
  .alttab-md-editable-display > .alttab-markdown input,
  .alttab-md-editable-display > .alttab-markdown textarea,
  .alttab-md-editable-display > .alttab-markdown select,
  .alttab-md-editable-display > .alttab-markdown summary {
    pointer-events: auto;
  }

  .alttab-md-editable-empty {
    cursor: pointer;
    border-radius: ${Q.semantic.radiusMd};
    padding: ${Q.semantic.spaceSm} ${Q.semantic.spaceMd};
    font-style: italic;
    color: ${Q.semantic.colorTextMuted};
    transition: background ${Q.semantic.transitionBase};
  }

  .alttab-md-editable-empty:hover {
    background: color-mix(in srgb, ${Q.semantic.colorText} ${C}, transparent);
  }
`,e={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:Q.semantic.spaceSm,padding:`${Q.semantic.spaceSm} ${Q.semantic.spaceMd}`,fontFamily:Q.semantic.fontSans,fontSize:Q.semantic.fontSizeSm,fontWeight:Q.semantic.fontWeightMedium,lineHeight:Q.semantic.lineHeightTight,borderRadius:Q.semantic.radiusMd,cursor:"pointer",transition:`background ${Q.semantic.transitionBase}, border-color ${Q.semantic.transitionBase}, opacity ${Q.semantic.transitionBase}`},aJ={...e,background:Q.semantic.colorActionPrimary,color:Q.semantic.colorTextInverse,border:"none"},dJ={...e,background:Q.semantic.colorActionSecondary,color:Q.semantic.colorText,border:`${Q.semantic.borderWidthDefault} solid ${Q.semantic.colorBorder}`},l={pre:gJ,blockquote:uJ,tbody:hJ,h1:({children:J})=>$.jsx(k,{level:1,children:J}),h2:({children:J})=>$.jsx(k,{level:2,children:J}),h3:({children:J})=>$.jsx(k,{level:3,children:J}),h4:({children:J})=>$.jsx(k,{level:4,children:J}),h5:({children:J})=>$.jsx(k,{level:5,children:J}),h6:({children:J})=>$.jsx(k,{level:6,children:J})};function JJ({children:J,id:z,"data-testid":F,editable:U=!1,editing:V=!1,value:Y,onStartEdit:Z,onEditChange:W,onSave:D,onCancel:M,fieldLabel:B,rows:L=4,placeholder:_="Click to add content...",components:y,remarkPlugins:T}){Q.useInjectStyles(fJ,xJ),Q.useInjectStyles(cJ,oJ);let[G,O]=X.useState(!1),K=X.useRef(null),q=J??"",w=X.useMemo(()=>y?{...y,...l}:l,[y]),A=X.useMemo(()=>T&&T.length>0?[u.default,...T]:[u.default],[T]),H=X.useCallback(()=>{if(navigator.clipboard.writeText(q),O(!0),K.current)clearTimeout(K.current);K.current=setTimeout(()=>O(!1),1500)},[q]),ZJ=X.useCallback((P)=>{if(P.key==="Escape")P.preventDefault(),M?.();else if(P.key==="Enter"&&(P.metaKey||P.ctrlKey))P.preventDefault(),D?.()},[M,D]);if(U){if(V)return $.jsxs("div",{role:"group","aria-label":B,children:[$.jsx("textarea",{value:Y??"",onChange:(P)=>W?.(P.target.value),onKeyDown:ZJ,rows:L,"aria-label":B?`Edit ${B}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:Q.semantic.spaceSm,fontFamily:Q.semantic.fontMono,fontSize:Q.semantic.fontSizeSm,lineHeight:Q.semantic.lineHeightRelaxed,color:Q.semantic.colorText,background:Q.semantic.colorSurfacePage,border:`${Q.semantic.borderWidthDefault} solid ${Q.semantic.colorBorder}`,borderRadius:Q.semantic.radiusMd,resize:"vertical",outline:"none"}}),$.jsxs("div",{style:{display:"flex",gap:Q.semantic.spaceSm,marginTop:Q.semantic.spaceSm},children:[$.jsx("button",{type:"button",onClick:D,style:aJ,children:"Save"}),$.jsx("button",{type:"button",onClick:M,style:dJ,children:"Cancel"})]})]});if(!q)return $.jsx("div",{className:"alttab-md-editable-empty",role:"button",tabIndex:0,"aria-label":B?`Add ${B}`:"Add content",onClick:Z,onKeyDown:(P)=>{if(P.key==="Enter"||P.key===" ")P.preventDefault(),Z?.()},children:_});return $.jsxs("div",{className:"alttab-md-editable-display",children:[$.jsx("button",{type:"button",className:"alttab-md-editable-overlay","aria-label":B?`Edit ${B}`:"Edit content",onClick:Z}),$.jsx("div",{className:"alttab-markdown",id:z,"data-testid":F,children:$.jsx(m.default,{remarkPlugins:A,components:w,children:q})})]})}return $.jsxs("div",{className:"alttab-markdown",id:z,"data-testid":F,children:[$.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:H,"aria-label":"Copy markdown source",title:"Copy markdown",...G?{"data-copied":""}:{},children:G?$.jsx(t,{}):$.jsx(n,{})}),$.jsx(m.default,{remarkPlugins:A,components:w,children:q})]})}var $J=require("react"),zJ=require("../../core/dist/index.cjs"),v=require("react/jsx-runtime"),rJ="alttab-epigraph",iJ=`
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
`;function lJ({children:J,cite:z,innerRef:F}){return v.jsxs("blockquote",{ref:F,"data-pull-quote":"",children:[v.jsx("p",{children:J}),z&&v.jsx("footer",{children:z})]})}function sJ({children:J,cite:z,innerRef:F}){return zJ.useInjectStyles(rJ,iJ),v.jsxs("blockquote",{ref:F,className:"alttab-epigraph",children:[v.jsx("p",{children:J}),z&&v.jsx("footer",{children:z})]})}var nJ=$J.forwardRef(function({children:z,variant:F="pull",cite:U},V){if(F==="epigraph")return v.jsx(sJ,{innerRef:V,cite:U,children:z});return v.jsx(lJ,{innerRef:V,cite:U,children:z})});var QJ=require("react"),FJ=require("react/jsx-runtime"),tJ=QJ.forwardRef(function({children:z,side:F="left"},U){return FJ.jsx("small",{ref:U,"data-margin-note":"","data-side":F,children:z})});var N=require("react"),XJ=require("../../core/dist/index.cjs"),VJ=require("react/jsx-runtime"),UJ="abcdefghijklmnopqrstuvwxyz!?*~+#",eJ="alttab-thinking-cycle",J0=`
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
`;function WJ(){return UJ[Math.random()*UJ.length|0]}var $0=N.forwardRef(function({words:z,holdMs:F=2000,scrambleTicks:U=4,tickMs:V=50,staggerMs:Y=30},Z){XJ.useInjectStyles(eJ,J0);let W=N.useRef(null);N.useImperativeHandle(Z,()=>W.current);let D=N.useRef(0),M=N.useRef([]),B=N.useRef(null),L=N.useRef(null),_=N.useCallback(()=>{let G=W.current;if(!G)return;let O=G.innerHTML;G.style.width="";let K=[];for(let q of z)G.textContent=q,K.push(Math.ceil(G.getBoundingClientRect().width));G.innerHTML=O||"",M.current=K,G.style.width=K[D.current]+"px"},[z]),y=N.useCallback((G)=>{let O=W.current;if(!O)return;O.innerHTML="";for(let K=0;K<G.length;K++){let q=document.createElement("span");q.className="alttab-char",q.textContent=G[K],q.style.animationDelay=`${K*Y}ms`,O.appendChild(q)}},[Y]),T=N.useCallback((G,O)=>{let K=W.current;if(!K)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){K.textContent=G,O();return}K.innerHTML="";let w=[];for(let A=0;A<G.length;A++){let H=document.createElement("span");H.className="alttab-char",H.style.animationDelay=`${A*Y}ms`,H.textContent=G[A]===" "?" ":WJ(),K.appendChild(H),w.push({span:H,final:G[A],ticks:0,maxTicks:U+A*2})}L.current=setInterval(()=>{let A=!0;for(let H of w)if(H.ticks>=H.maxTicks)H.span.textContent=H.final;else A=!1,H.ticks++,H.span.textContent=H.final===" "?" ":WJ();if(A)clearInterval(L.current),L.current=null,O()},V)},[U,V,Y]);return N.useEffect(()=>{if(z.length<2)return;_(),document.fonts.ready.then(_);let G=()=>_();document.fonts.addEventListener("loadingdone",G);let O=new MutationObserver(()=>requestAnimationFrame(_));O.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),D.current=0,y(z[0]);function K(){D.current=(D.current+1)%z.length;let q=W.current;if(q)q.style.width=M.current[D.current]+"px";T(z[D.current],()=>{B.current=setTimeout(K,F)})}return B.current=setTimeout(K,F),()=>{if(B.current)clearTimeout(B.current);if(L.current)clearInterval(L.current);document.fonts.removeEventListener("loadingdone",G),O.disconnect()}},[z,F,_,y,T]),VJ.jsx("span",{ref:W,className:"alttab-thinking"})});
