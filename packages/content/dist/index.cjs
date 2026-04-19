var VJ=Object.create;var{getPrototypeOf:ZJ,defineProperty:w,getOwnPropertyNames:x,getOwnPropertyDescriptor:GJ}=Object,h=Object.prototype.hasOwnProperty;function c(J){return this[J]}var KJ,YJ,o=(J,z,F)=>{var U=J!=null&&typeof J==="object";if(U){var X=z?KJ??=new WeakMap:YJ??=new WeakMap,K=X.get(J);if(K)return K}F=J!=null?VJ(ZJ(J)):{};let V=z||!J||!J.__esModule?w(F,"default",{value:J,enumerable:!0}):F;for(let W of x(J))if(!h.call(V,W))w(V,W,{get:c.bind(J,W),enumerable:!0});if(U)X.set(J,V);return V},qJ=(J)=>{var z=(f??=new WeakMap).get(J),F;if(z)return z;if(z=w({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var U of x(J))if(!h.call(z,U))w(z,U,{get:c.bind(J,U),enumerable:!(F=GJ(J,U))||F.enumerable})}return f.set(J,z),z},f;var NJ=(J)=>J;function HJ(J,z){this[J]=NJ.bind(null,z)}var DJ=(J,z)=>{for(var F in z)w(J,F,{get:z[F],enumerable:!0,configurable:!0,set:HJ.bind(z,F)})};var J0={};DJ(J0,{ThinkingCycle:()=>eJ,Quote:()=>sJ,Prose:()=>LJ,PROSE_H2_SIZE:()=>m,PROSE_H1_SIZE:()=>p,PROSE_CODE_SIZE:()=>BJ,PROSE_BODY_SIZE:()=>b,PROSE_BLOCKQUOTE_SIZE:()=>OJ,Markdown:()=>e,MarginNote:()=>lJ,MIX_SUBTLE:()=>R,MIX_HOVER:()=>I,MIX_BADGE:()=>AJ,BREAKPOINT_WIDE:()=>PJ,BREAKPOINT_PROSE:()=>C,BREAKPOINT_MARGIN_NOTES:()=>g});module.exports=qJ(J0);var C="680px",PJ="900px",g="1100px",b="1.0625rem",p="clamp(2rem, 5vw, 2.75rem)",m="1.35em",BJ="0.875rem",OJ="1.25rem",R="5%",I="8%",AJ="14%";var a=require("react"),r=require("../../core/dist/index.cjs");var d=require("react/jsx-runtime"),MJ="alttab-prose-styles",vJ=`
  /* ── Typography ── */
  .alttab-prose {
    font-size: ${b};
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: ${m};
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

  @media (max-width: ${C}) {
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
`,LJ=a.forwardRef(function({children:z,id:F,"data-testid":U},X){return r.useInjectStyles(MJ,vJ),d.jsx("div",{ref:X,className:"alttab-prose",id:F,"data-testid":U,children:z})});var Z=require("react"),u=o(require("react-markdown")),S=o(require("remark-gfm")),Q=require("../../core/dist/index.cjs");var $=require("react/jsx-runtime");function j(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(j).join("");if(J&&typeof J==="object"&&"props"in J)return j(J.props.children);return""}function kJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var s={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function l(){return $.jsxs("svg",{viewBox:"0 0 24 24",...s,children:[$.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function n(){return $.jsx("svg",{viewBox:"0 0 24 24",...s,children:$.jsx("path",{d:"M20 6L9 17l-5-5"})})}function _J(){return $.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var E={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function TJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[$.jsx("circle",{cx:"12",cy:"12",r:"10"}),$.jsx("path",{d:"M12 16v-4"}),$.jsx("path",{d:"M12 8h.01"})]})}function yJ(){return $.jsx("svg",{viewBox:"0 0 24 24",...E,children:$.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function wJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[$.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$.jsx("path",{d:"M12 8v3"}),$.jsx("path",{d:"M12 14h.01"})]})}function bJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[$.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$.jsx("path",{d:"M12 9v4"}),$.jsx("path",{d:"M12 17h.01"})]})}function pJ(){return $.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[$.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$.jsx("path",{d:"M15 9l-6 6"}),$.jsx("path",{d:"M9 9l6 6"})]})}var EJ="alttab-markdown-codeblock",IJ=`
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
`;function CJ({children:J}){Q.useInjectStyles(EJ,IJ);let[z,F]=Z.useState(!1),U=Z.useRef(null),X=Z.useCallback(()=>{let K="",V=(W)=>{if(typeof W==="string"){K+=W;return}if(Array.isArray(W)){W.forEach(V);return}if(W&&typeof W==="object"&&"props"in W)V(W.props.children)};if(V(J),navigator.clipboard.writeText(K.replace(/\n$/,"")),F(!0),U.current)clearTimeout(U.current);U.current=setTimeout(()=>F(!1),1500)},[J]);return $.jsxs("div",{className:"alttab-codeblock",children:[$.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:X,"aria-label":"Copy code",...z?{"data-copied":""}:{},children:z?$.jsx(n,{}):$.jsx(l,{})}),$.jsx("pre",{children:J})]})}function _({level:J,children:z}){let F=`h${J}`,U=j(z),X=kJ(U);return $.jsxs(F,{id:X,children:[z,$.jsx("a",{href:`#${X}`,className:"alttab-md-anchor","aria-label":`Link to "${U}"`,children:$.jsx(_J,{})})]})}var gJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,mJ={NOTE:{label:"Note",icon:TJ,attr:"note"},TIP:{label:"Tip",icon:yJ,attr:"tip"},IMPORTANT:{label:"Important",icon:wJ,attr:"important"},WARNING:{label:"Warning",icon:bJ,attr:"warning"},CAUTION:{label:"Caution",icon:pJ,attr:"caution"}};function RJ(J){let z=Z.Children.toArray(J),F=z.findIndex(Z.isValidElement);if(F===-1)return null;let U=z[F],X=Z.Children.toArray(U.props.children),K=X[0];if(typeof K!=="string")return null;let V=K.match(gJ);if(!V)return null;let W=V[1],D=K.slice(V[0].length);if(D||X.length>1){let v=D?[D,...X.slice(1)]:X.slice(1),P=Z.cloneElement(U,{},...v);return{type:W,content:[...z.slice(0,F),P,...z.slice(F+1)]}}return{type:W,content:z.slice(F+1)}}function uJ({children:J}){let z=RJ(J);if(z){let F=mJ[z.type],U=F.icon;return $.jsxs("div",{className:"alttab-callout","data-callout":F.attr,children:[$.jsxs("div",{className:"alttab-callout-title",children:[$.jsx(U,{}),$.jsx("span",{children:F.label})]}),$.jsx("div",{className:"alttab-callout-body",children:z.content})]})}return $.jsx("blockquote",{children:J})}var SJ="alttab-markdown-styles",jJ=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: ${b};
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
`;function fJ({children:J}){let z=0,F=Z.Children.map(J,(U)=>{if(!Z.isValidElement(U))return U;let X=z%2===1;if(z++,!X)return U;let K=Z.Children.map(U.props.children,(V)=>{if(!Z.isValidElement(V))return V;let W=V.props;return Z.cloneElement(V,{style:{...W.style,background:`color-mix(in srgb, var(--color-text) ${R}, transparent)`}})});return Z.cloneElement(U,{},K)});return $.jsx("tbody",{children:F})}var xJ="alttab-markdown-editable",hJ=`
  .alttab-md-editable-display {
    position: relative;
    border-radius: ${Q.semantic.radiusMd};
    transition: background ${Q.semantic.transitionBase};
  }

  .alttab-md-editable-display:hover,
  .alttab-md-editable-display:focus-within {
    background: color-mix(in srgb, ${Q.semantic.colorText} ${I}, transparent);
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
    background: color-mix(in srgb, ${Q.semantic.colorText} ${I}, transparent);
  }
`,t={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:Q.semantic.spaceSm,padding:`${Q.semantic.spaceSm} ${Q.semantic.spaceMd}`,fontFamily:Q.semantic.fontSans,fontSize:Q.semantic.fontSizeSm,fontWeight:Q.semantic.fontWeightMedium,lineHeight:Q.semantic.lineHeightTight,borderRadius:Q.semantic.radiusMd,cursor:"pointer",transition:`background ${Q.semantic.transitionBase}, border-color ${Q.semantic.transitionBase}, opacity ${Q.semantic.transitionBase}`},cJ={...t,background:Q.semantic.colorActionPrimary,color:Q.semantic.colorTextInverse,border:"none"},oJ={...t,background:Q.semantic.colorActionSecondary,color:Q.semantic.colorText,border:`${Q.semantic.borderWidthDefault} solid ${Q.semantic.colorBorder}`},i={pre:CJ,blockquote:uJ,tbody:fJ,h1:({children:J})=>$.jsx(_,{level:1,children:J}),h2:({children:J})=>$.jsx(_,{level:2,children:J}),h3:({children:J})=>$.jsx(_,{level:3,children:J}),h4:({children:J})=>$.jsx(_,{level:4,children:J}),h5:({children:J})=>$.jsx(_,{level:5,children:J}),h6:({children:J})=>$.jsx(_,{level:6,children:J})};function e({children:J,id:z,"data-testid":F,editable:U=!1,editing:X=!1,value:K,onStartEdit:V,onEditChange:W,onSave:D,onCancel:v,fieldLabel:P,rows:L=4,placeholder:k="Click to add content..."}){Q.useInjectStyles(SJ,jJ),Q.useInjectStyles(xJ,hJ);let[T,y]=Z.useState(!1),G=Z.useRef(null),q=J??"",Y=Z.useCallback(()=>{if(navigator.clipboard.writeText(q),y(!0),G.current)clearTimeout(G.current);G.current=setTimeout(()=>y(!1),1500)},[q]),O=Z.useCallback((H)=>{if(H.key==="Escape")H.preventDefault(),v?.();else if(H.key==="Enter"&&(H.metaKey||H.ctrlKey))H.preventDefault(),D?.()},[v,D]);if(U){if(X)return $.jsxs("div",{role:"group","aria-label":P,children:[$.jsx("textarea",{value:K??"",onChange:(H)=>W?.(H.target.value),onKeyDown:O,rows:L,"aria-label":P?`Edit ${P}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:Q.semantic.spaceSm,fontFamily:Q.semantic.fontMono,fontSize:Q.semantic.fontSizeSm,lineHeight:Q.semantic.lineHeightRelaxed,color:Q.semantic.colorText,background:Q.semantic.colorSurfacePage,border:`${Q.semantic.borderWidthDefault} solid ${Q.semantic.colorBorder}`,borderRadius:Q.semantic.radiusMd,resize:"vertical",outline:"none"}}),$.jsxs("div",{style:{display:"flex",gap:Q.semantic.spaceSm,marginTop:Q.semantic.spaceSm},children:[$.jsx("button",{type:"button",onClick:D,style:cJ,children:"Save"}),$.jsx("button",{type:"button",onClick:v,style:oJ,children:"Cancel"})]})]});if(!q)return $.jsx("div",{className:"alttab-md-editable-empty",role:"button",tabIndex:0,"aria-label":P?`Add ${P}`:"Add content",onClick:V,onKeyDown:(H)=>{if(H.key==="Enter"||H.key===" ")H.preventDefault(),V?.()},children:k});return $.jsxs("div",{className:"alttab-md-editable-display",children:[$.jsx("button",{type:"button",className:"alttab-md-editable-overlay","aria-label":P?`Edit ${P}`:"Edit content",onClick:V}),$.jsx("div",{className:"alttab-markdown",id:z,"data-testid":F,children:$.jsx(u.default,{remarkPlugins:[S.default],components:i,children:q})})]})}return $.jsxs("div",{className:"alttab-markdown",id:z,"data-testid":F,children:[$.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:Y,"aria-label":"Copy markdown source",title:"Copy markdown",...T?{"data-copied":""}:{},children:T?$.jsx(n,{}):$.jsx(l,{})}),$.jsx(u.default,{remarkPlugins:[S.default],components:i,children:q})]})}var JJ=require("react"),$J=require("../../core/dist/index.cjs"),A=require("react/jsx-runtime"),aJ="alttab-epigraph",rJ=`
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
`;function dJ({children:J,cite:z,innerRef:F}){return A.jsxs("blockquote",{ref:F,"data-pull-quote":"",children:[A.jsx("p",{children:J}),z&&A.jsx("footer",{children:z})]})}function iJ({children:J,cite:z,innerRef:F}){return $J.useInjectStyles(aJ,rJ),A.jsxs("blockquote",{ref:F,className:"alttab-epigraph",children:[A.jsx("p",{children:J}),z&&A.jsx("footer",{children:z})]})}var sJ=JJ.forwardRef(function({children:z,variant:F="pull",cite:U},X){if(F==="epigraph")return A.jsx(iJ,{innerRef:X,cite:U,children:z});return A.jsx(dJ,{innerRef:X,cite:U,children:z})});var zJ=require("react"),QJ=require("react/jsx-runtime"),lJ=zJ.forwardRef(function({children:z,side:F="left"},U){return QJ.jsx("small",{ref:U,"data-margin-note":"","data-side":F,children:z})});var N=require("react"),WJ=require("../../core/dist/index.cjs"),XJ=require("react/jsx-runtime"),FJ="abcdefghijklmnopqrstuvwxyz!?*~+#",nJ="alttab-thinking-cycle",tJ=`
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
`;function UJ(){return FJ[Math.random()*FJ.length|0]}var eJ=N.forwardRef(function({words:z,holdMs:F=2000,scrambleTicks:U=4,tickMs:X=50,staggerMs:K=30},V){WJ.useInjectStyles(nJ,tJ);let W=N.useRef(null);N.useImperativeHandle(V,()=>W.current);let D=N.useRef(0),v=N.useRef([]),P=N.useRef(null),L=N.useRef(null),k=N.useCallback(()=>{let G=W.current;if(!G)return;let q=G.innerHTML;G.style.width="";let Y=[];for(let O of z)G.textContent=O,Y.push(Math.ceil(G.getBoundingClientRect().width));G.innerHTML=q||"",v.current=Y,G.style.width=Y[D.current]+"px"},[z]),T=N.useCallback((G)=>{let q=W.current;if(!q)return;q.innerHTML="";for(let Y=0;Y<G.length;Y++){let O=document.createElement("span");O.className="alttab-char",O.textContent=G[Y],O.style.animationDelay=`${Y*K}ms`,q.appendChild(O)}},[K]),y=N.useCallback((G,q)=>{let Y=W.current;if(!Y)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Y.textContent=G,q();return}Y.innerHTML="";let H=[];for(let M=0;M<G.length;M++){let B=document.createElement("span");B.className="alttab-char",B.style.animationDelay=`${M*K}ms`,B.textContent=G[M]===" "?" ":UJ(),Y.appendChild(B),H.push({span:B,final:G[M],ticks:0,maxTicks:U+M*2})}L.current=setInterval(()=>{let M=!0;for(let B of H)if(B.ticks>=B.maxTicks)B.span.textContent=B.final;else M=!1,B.ticks++,B.span.textContent=B.final===" "?" ":UJ();if(M)clearInterval(L.current),L.current=null,q()},X)},[U,X,K]);return N.useEffect(()=>{if(z.length<2)return;k(),document.fonts.ready.then(k);let G=()=>k();document.fonts.addEventListener("loadingdone",G);let q=new MutationObserver(()=>requestAnimationFrame(k));q.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),D.current=0,T(z[0]);function Y(){D.current=(D.current+1)%z.length;let O=W.current;if(O)O.style.width=v.current[D.current]+"px";y(z[D.current],()=>{P.current=setTimeout(Y,F)})}return P.current=setTimeout(Y,F),()=>{if(P.current)clearTimeout(P.current);if(L.current)clearInterval(L.current);document.fonts.removeEventListener("loadingdone",G),q.disconnect()}},[z,F,k,T,y]),XJ.jsx("span",{ref:W,className:"alttab-thinking"})});
