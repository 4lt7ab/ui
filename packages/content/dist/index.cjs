var UJ=Object.create;var{getPrototypeOf:qJ,defineProperty:E,getOwnPropertyNames:S,getOwnPropertyDescriptor:BJ}=Object,g=Object.prototype.hasOwnProperty;function p(J){return this[J]}var FJ,YJ,m=(J,Q,$)=>{var V=J!=null&&typeof J==="object";if(V){var X=Q?FJ??=new WeakMap:YJ??=new WeakMap,K=X.get(J);if(K)return K}$=J!=null?UJ(qJ(J)):{};let U=Q||!J||!J.__esModule?E($,"default",{value:J,enumerable:!0}):$;for(let z of S(J))if(!g.call(U,z))E(U,z,{get:p.bind(J,z),enumerable:!0});if(V)X.set(J,U);return U},GJ=(J)=>{var Q=(C??=new WeakMap).get(J),$;if(Q)return Q;if(Q=E({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var V of S(J))if(!g.call(Q,V))E(Q,V,{get:p.bind(J,V),enumerable:!($=BJ(J,V))||$.enumerable})}return C.set(J,Q),Q},C;var PJ=(J)=>J;function WJ(J,Q){this[J]=PJ.bind(null,Q)}var NJ=(J,Q)=>{for(var $ in Q)E(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:WJ.bind(Q,$)})};var tJ={};NJ(tJ,{ThinkingCycle:()=>rJ,SideNote:()=>xJ,PullQuote:()=>uJ,Prose:()=>_J,Markdown:()=>i,MarginNote:()=>fJ,LinkCard:()=>dJ,Epigraph:()=>oJ,Container:()=>DJ});module.exports=GJ(tJ);var j=require("react"),u=require("react/jsx-runtime"),OJ={prose:"680px",wide:"900px"},DJ=j.forwardRef(function({width:Q="prose",maxWidth:$,padding:V="1.5rem",children:X,style:K,...U},z){return u.jsx("div",{ref:z,style:{boxSizing:"border-box",width:"100%",maxWidth:$??OJ[Q],marginInline:"auto",paddingInline:V,overflow:"visible",...K},...U,children:X})});var f=require("react"),x=require("../../core/dist/index.cjs"),h=require("react/jsx-runtime"),HJ="alttab-prose-styles",LJ=`
  /* ── Typography ── */
  .alttab-prose {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  /* Lead paragraph — serif, larger */
  .alttab-prose > p:first-child {
    font-family: var(--font-serif);
    font-size: 1.35em;
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
    font-size: clamp(2rem, 5vw, 2.75rem);
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

  @media (max-width: 680px) {
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

  @media (min-width: 1100px) {
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
    margin-block: 1em;
  }

  .alttab-prose li + li {
    margin-top: 0.5em;
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
`,_J=f.forwardRef(function({children:Q,style:$,...V},X){return x.useInjectStyles(HJ,LJ),h.jsx("div",{ref:X,className:"alttab-prose",style:$,...V,children:Q})});var F=require("react"),c=m(require("react-markdown")),o=m(require("remark-gfm")),P=require("../../core/dist/index.cjs"),Z=require("react/jsx-runtime");function b(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(b).join("");if(J&&typeof J==="object"&&"props"in J)return b(J.props.children);return""}function AJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var a={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function l(){return Z.jsxs("svg",{viewBox:"0 0 24 24",...a,children:[Z.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),Z.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function d(){return Z.jsx("svg",{viewBox:"0 0 24 24",...a,children:Z.jsx("path",{d:"M20 6L9 17l-5-5"})})}function EJ(){return Z.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Z.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),Z.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var v={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function vJ(){return Z.jsxs("svg",{viewBox:"0 0 24 24",...v,children:[Z.jsx("circle",{cx:"12",cy:"12",r:"10"}),Z.jsx("path",{d:"M12 16v-4"}),Z.jsx("path",{d:"M12 8h.01"})]})}function MJ(){return Z.jsx("svg",{viewBox:"0 0 24 24",...v,children:Z.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function TJ(){return Z.jsxs("svg",{viewBox:"0 0 24 24",...v,children:[Z.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),Z.jsx("path",{d:"M12 8v3"}),Z.jsx("path",{d:"M12 14h.01"})]})}function IJ(){return Z.jsxs("svg",{viewBox:"0 0 24 24",...v,children:[Z.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),Z.jsx("path",{d:"M12 9v4"}),Z.jsx("path",{d:"M12 17h.01"})]})}function bJ(){return Z.jsxs("svg",{viewBox:"0 0 24 24",...v,children:[Z.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),Z.jsx("path",{d:"M15 9l-6 6"}),Z.jsx("path",{d:"M9 9l6 6"})]})}var kJ="alttab-markdown-codeblock",yJ=`
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
    border: 1px solid ${P.semantic.colorBorder};
    border-radius: ${P.semantic.radiusSm};
    background: ${P.semantic.colorSurface};
    color: ${P.semantic.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${P.semantic.colorText};
    border-color: ${P.semantic.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${P.semantic.colorSuccess};
    border-color: ${P.semantic.colorSuccess};
  }
`;function wJ({children:J}){P.useInjectStyles(kJ,yJ);let[Q,$]=F.useState(!1),V=F.useRef(null),X=F.useCallback(()=>{let K="",U=(z)=>{if(typeof z==="string"){K+=z;return}if(Array.isArray(z)){z.forEach(U);return}if(z&&typeof z==="object"&&"props"in z)U(z.props.children)};if(U(J),navigator.clipboard.writeText(K.replace(/\n$/,"")),$(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>$(!1),1500)},[J]);return Z.jsxs("div",{className:"alttab-codeblock",children:[Z.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:X,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?Z.jsx(d,{}):Z.jsx(l,{})}),Z.jsx("pre",{children:J})]})}function L({level:J,children:Q}){let $=`h${J}`,V=b(Q),X=AJ(V);return Z.jsxs($,{id:X,children:[Q,Z.jsx("a",{href:`#${X}`,className:"alttab-md-anchor","aria-label":`Link to "${V}"`,children:Z.jsx(EJ,{})})]})}var RJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,CJ={NOTE:{label:"Note",icon:vJ,attr:"note"},TIP:{label:"Tip",icon:MJ,attr:"tip"},IMPORTANT:{label:"Important",icon:TJ,attr:"important"},WARNING:{label:"Warning",icon:IJ,attr:"warning"},CAUTION:{label:"Caution",icon:bJ,attr:"caution"}};function SJ(J){let Q=F.Children.toArray(J),$=Q.findIndex(F.isValidElement);if($===-1)return null;let V=Q[$],X=F.Children.toArray(V.props.children),K=X[0];if(typeof K!=="string")return null;let U=K.match(RJ);if(!U)return null;let z=U[1],N=K.slice(U[0].length);if(N||X.length>1){let I=N?[N,...X.slice(1)]:X.slice(1),H=F.cloneElement(V,{},...I);return{type:z,content:[...Q.slice(0,$),H,...Q.slice($+1)]}}return{type:z,content:Q.slice($+1)}}function gJ({children:J}){let Q=SJ(J);if(Q){let $=CJ[Q.type],V=$.icon;return Z.jsxs("div",{className:"alttab-callout","data-callout":$.attr,children:[Z.jsxs("div",{className:"alttab-callout-title",children:[Z.jsx(V,{}),Z.jsx("span",{children:$.label})]}),Z.jsx("div",{className:"alttab-callout-body",children:Q.content})]})}return Z.jsx("blockquote",{children:J})}var pJ="alttab-markdown-styles",mJ=`
  /* ── Base ── */
  .alttab-markdown {
    position: relative;
    font-size: 1.0625rem;
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
    font-size: clamp(2rem, 5vw, 2.75rem);
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
    margin-block: 1em;
  }

  .alttab-markdown li + li {
    margin-top: 0.4em;
  }

  .alttab-markdown li::marker {
    color: var(--color-action-primary);
  }

  .alttab-markdown ul ul,
  .alttab-markdown ol ol,
  .alttab-markdown ul ol,
  .alttab-markdown ol ul {
    margin-block: 0.4em;
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

  .alttab-markdown tbody tr:hover {
    background: var(--color-surface-raised);
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
`,jJ={pre:wJ,blockquote:gJ,h1:({children:J})=>Z.jsx(L,{level:1,children:J}),h2:({children:J})=>Z.jsx(L,{level:2,children:J}),h3:({children:J})=>Z.jsx(L,{level:3,children:J}),h4:({children:J})=>Z.jsx(L,{level:4,children:J}),h5:({children:J})=>Z.jsx(L,{level:5,children:J}),h6:({children:J})=>Z.jsx(L,{level:6,children:J})};function i({children:J,className:Q,...$}){P.useInjectStyles(pJ,mJ);let[V,X]=F.useState(!1),K=F.useRef(null),U=F.useCallback(()=>{if(navigator.clipboard.writeText(J),X(!0),K.current)clearTimeout(K.current);K.current=setTimeout(()=>X(!1),1500)},[J]);return Z.jsxs("div",{className:Q?`alttab-markdown ${Q}`:"alttab-markdown",...$,children:[Z.jsx("button",{type:"button",className:"alttab-md-copy-source",onClick:U,"aria-label":"Copy markdown source",title:"Copy markdown",...V?{"data-copied":""}:{},children:V?Z.jsx(d,{}):Z.jsx(l,{})}),Z.jsx(c.default,{remarkPlugins:[o.default],components:jJ,children:J})]})}var n=require("react"),k=require("react/jsx-runtime"),uJ=n.forwardRef(function({children:Q},$){return k.jsx("blockquote",{ref:$,"data-pull-quote":"",children:k.jsx("p",{children:Q})})});var r=require("react"),t=require("react/jsx-runtime"),fJ=r.forwardRef(function({children:Q},$){return t.jsx("small",{ref:$,"data-margin-note":"",children:Q})});var s=require("react"),e=require("react/jsx-runtime"),xJ=s.forwardRef(function({children:Q},$){return e.jsx("small",{ref:$,"data-side-note":"",children:Q})});var JJ=require("react"),QJ=require("../../core/dist/index.cjs"),M=require("react/jsx-runtime"),hJ="alttab-epigraph",cJ=`
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
`,oJ=JJ.forwardRef(function({children:Q,cite:$},V){return QJ.useInjectStyles(hJ,cJ),M.jsxs("blockquote",{ref:V,className:"alttab-epigraph",children:[M.jsx("p",{children:Q}),$&&M.jsx("footer",{children:$})]})});var ZJ=require("react"),$J=require("../../core/dist/index.cjs"),T=require("react/jsx-runtime"),aJ="alttab-link-card",lJ=`
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
`,dJ=ZJ.forwardRef(function({title:Q,description:$,external:V,children:X,...K},U){return $J.useInjectStyles(aJ,lJ),T.jsxs("a",{ref:U,className:"alttab-link-card",...V?{target:"_blank",rel:"noopener noreferrer"}:{},...K,children:[T.jsx("span",{className:"alttab-link-card__title",children:Q}),$&&T.jsx("span",{className:"alttab-link-card__desc",children:$}),X]})});var Y=require("react"),zJ=require("../../core/dist/index.cjs"),KJ=require("react/jsx-runtime"),VJ="abcdefghijklmnopqrstuvwxyz!?*~+#",iJ="alttab-thinking-cycle",nJ=`
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
`;function XJ(){return VJ[Math.random()*VJ.length|0]}var rJ=Y.forwardRef(function({words:Q,holdMs:$=2000,scrambleTicks:V=4,tickMs:X=50,staggerMs:K=30},U){zJ.useInjectStyles(iJ,nJ);let z=Y.useRef(null);Y.useImperativeHandle(U,()=>z.current);let N=Y.useRef(0),I=Y.useRef([]),H=Y.useRef(null),_=Y.useRef(null),A=Y.useCallback(()=>{let q=z.current;if(!q)return;let W=q.innerHTML;q.style.width="";let B=[];for(let O of Q)q.textContent=O,B.push(Math.ceil(q.getBoundingClientRect().width));q.innerHTML=W||"",I.current=B,q.style.width=B[N.current]+"px"},[Q]),y=Y.useCallback((q)=>{let W=z.current;if(!W)return;W.innerHTML="";for(let B=0;B<q.length;B++){let O=document.createElement("span");O.className="alttab-char",O.textContent=q[B],O.style.animationDelay=`${B*K}ms`,W.appendChild(O)}},[K]),w=Y.useCallback((q,W)=>{let B=z.current;if(!B)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){B.textContent=q,W();return}B.innerHTML="";let R=[];for(let D=0;D<q.length;D++){let G=document.createElement("span");G.className="alttab-char",G.style.animationDelay=`${D*K}ms`,G.textContent=q[D]===" "?" ":XJ(),B.appendChild(G),R.push({span:G,final:q[D],ticks:0,maxTicks:V+D*2})}_.current=setInterval(()=>{let D=!0;for(let G of R)if(G.ticks>=G.maxTicks)G.span.textContent=G.final;else D=!1,G.ticks++,G.span.textContent=G.final===" "?" ":XJ();if(D)clearInterval(_.current),_.current=null,W()},X)},[V,X,K]);return Y.useEffect(()=>{if(Q.length<2)return;A(),document.fonts.ready.then(A);let q=()=>A();document.fonts.addEventListener("loadingdone",q);let W=new MutationObserver(()=>requestAnimationFrame(A));W.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),N.current=0,y(Q[0]);function B(){N.current=(N.current+1)%Q.length;let O=z.current;if(O)O.style.width=I.current[N.current]+"px";w(Q[N.current],()=>{H.current=setTimeout(B,$)})}return H.current=setTimeout(B,$),()=>{if(H.current)clearTimeout(H.current);if(_.current)clearInterval(_.current);document.fonts.removeEventListener("loadingdone",q),W.disconnect()}},[Q,$,A,y,w]),KJ.jsx("span",{ref:z,className:"alttab-thinking"})});
