var k="680px",x="900px",f="1100px",E="1.0625rem",p="clamp(2rem, 5vw, 2.75rem)",h="1.35em",UQ="0.875rem",ZQ="1.25rem",c="5%",w="8%",qQ="14%";import{forwardRef as XJ}from"react";import{jsx as qJ}from"react/jsx-runtime";var UJ={narrow:"32rem",prose:k,wide:x,full:"100%"},ZJ={none:"0",sm:"0.75rem",md:"1.5rem",lg:"3rem"},GQ=XJ(function({width:Q="prose",padding:z="md",children:X,id:q,"data-testid":F},W){return qJ("div",{ref:W,id:q,"data-testid":F,style:{boxSizing:"border-box",width:"100%",maxWidth:UJ[Q],marginInline:"auto",paddingInline:ZJ[z],overflow:"visible"},children:X})});import{forwardRef as FJ}from"react";import{useInjectStyles as WJ}from"../../core/dist/index.js";import{jsx as KJ}from"react/jsx-runtime";var VJ="alttab-prose-styles",GJ=`
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
    font-size: ${h};
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

  @media (min-width: ${f}) {
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
`,AQ=FJ(function({children:Q,id:z,"data-testid":X},q){return WJ(VJ,GJ),KJ("div",{ref:q,className:"alttab-prose",id:z,"data-testid":X,children:Q})});import{useState as o,useCallback as l,useRef as a,Children as b,cloneElement as I,isValidElement as R}from"react";import YJ from"react-markdown";import BJ from"remark-gfm";import{semantic as D,useInjectStyles as d}from"../../core/dist/index.js";import{jsx as $,jsxs as N}from"react/jsx-runtime";function C(J){if(typeof J==="string")return J;if(typeof J==="number")return String(J);if(Array.isArray(J))return J.map(C).join("");if(J&&typeof J==="object"&&"props"in J)return C(J.props.children);return""}function DJ(J){return J.toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/^-+|-+$/g,"")}var r={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function s(){return N("svg",{viewBox:"0 0 24 24",...r,children:[$("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),$("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function i(){return $("svg",{viewBox:"0 0 24 24",...r,children:$("path",{d:"M20 6L9 17l-5-5"})})}function HJ(){return N("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[$("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),$("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})}var T={width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function NJ(){return N("svg",{viewBox:"0 0 24 24",...T,children:[$("circle",{cx:"12",cy:"12",r:"10"}),$("path",{d:"M12 16v-4"}),$("path",{d:"M12 8h.01"})]})}function PJ(){return $("svg",{viewBox:"0 0 24 24",...T,children:$("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function AJ(){return N("svg",{viewBox:"0 0 24 24",...T,children:[$("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"}),$("path",{d:"M12 8v3"}),$("path",{d:"M12 14h.01"})]})}function vJ(){return N("svg",{viewBox:"0 0 24 24",...T,children:[$("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),$("path",{d:"M12 9v4"}),$("path",{d:"M12 17h.01"})]})}function OJ(){return N("svg",{viewBox:"0 0 24 24",...T,children:[$("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),$("path",{d:"M15 9l-6 6"}),$("path",{d:"M9 9l6 6"})]})}var LJ="alttab-markdown-codeblock",_J=`
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
`;function MJ({children:J}){d(LJ,_J);let[Q,z]=o(!1),X=a(null),q=l(()=>{let F="",W=(Z)=>{if(typeof Z==="string"){F+=Z;return}if(Array.isArray(Z)){Z.forEach(W);return}if(Z&&typeof Z==="object"&&"props"in Z)W(Z.props.children)};if(W(J),navigator.clipboard.writeText(F.replace(/\n$/,"")),z(!0),X.current)clearTimeout(X.current);X.current=setTimeout(()=>z(!1),1500)},[J]);return N("div",{className:"alttab-codeblock",children:[$("button",{type:"button",className:"alttab-codeblock-copy",onClick:q,"aria-label":"Copy code",...Q?{"data-copied":""}:{},children:Q?$(i,{}):$(s,{})}),$("pre",{children:J})]})}function L({level:J,children:Q}){let z=`h${J}`,X=C(Q),q=DJ(X);return N(z,{id:q,children:[Q,$("a",{href:`#${q}`,className:"alttab-md-anchor","aria-label":`Link to "${X}"`,children:$(HJ,{})})]})}var TJ=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,yJ={NOTE:{label:"Note",icon:NJ,attr:"note"},TIP:{label:"Tip",icon:PJ,attr:"tip"},IMPORTANT:{label:"Important",icon:AJ,attr:"important"},WARNING:{label:"Warning",icon:vJ,attr:"warning"},CAUTION:{label:"Caution",icon:OJ,attr:"caution"}};function kJ(J){let Q=b.toArray(J),z=Q.findIndex(R);if(z===-1)return null;let X=Q[z],q=b.toArray(X.props.children),F=q[0];if(typeof F!=="string")return null;let W=F.match(TJ);if(!W)return null;let Z=W[1],Y=F.slice(W[0].length);if(Y||q.length>1){let O=Y?[Y,...q.slice(1)]:q.slice(1),P=I(X,{},...O);return{type:Z,content:[...Q.slice(0,z),P,...Q.slice(z+1)]}}return{type:Z,content:Q.slice(z+1)}}function EJ({children:J}){let Q=kJ(J);if(Q){let z=yJ[Q.type],X=z.icon;return N("div",{className:"alttab-callout","data-callout":z.attr,children:[N("div",{className:"alttab-callout-title",children:[$(X,{}),$("span",{children:z.label})]}),$("div",{className:"alttab-callout-body",children:Q.content})]})}return $("blockquote",{children:J})}var pJ="alttab-markdown-styles",bJ=`
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
`;function wJ({children:J}){let Q=0,z=b.map(J,(X)=>{if(!R(X))return X;let q=Q%2===1;if(Q++,!q)return X;let F=b.map(X.props.children,(W)=>{if(!R(W))return W;let Z=W.props;return I(W,{style:{...Z.style,background:`color-mix(in srgb, var(--color-text) ${c}, transparent)`}})});return I(X,{},F)});return $("tbody",{children:z})}var IJ={pre:MJ,blockquote:EJ,tbody:wJ,h1:({children:J})=>$(L,{level:1,children:J}),h2:({children:J})=>$(L,{level:2,children:J}),h3:({children:J})=>$(L,{level:3,children:J}),h4:({children:J})=>$(L,{level:4,children:J}),h5:({children:J})=>$(L,{level:5,children:J}),h6:({children:J})=>$(L,{level:6,children:J})};function m({children:J,id:Q,"data-testid":z}){d(pJ,bJ);let[X,q]=o(!1),F=a(null),W=l(()=>{if(navigator.clipboard.writeText(J),q(!0),F.current)clearTimeout(F.current);F.current=setTimeout(()=>q(!1),1500)},[J]);return N("div",{className:"alttab-markdown",id:Q,"data-testid":z,children:[$("button",{type:"button",className:"alttab-md-copy-source",onClick:W,"aria-label":"Copy markdown source",title:"Copy markdown",...X?{"data-copied":""}:{},children:X?$(i,{}):$(s,{})}),$(YJ,{remarkPlugins:[BJ],components:IJ,children:J})]})}import{forwardRef as RJ}from"react";import{jsx as n}from"react/jsx-runtime";var RQ=RJ(function({children:Q},z){return n("blockquote",{ref:z,"data-pull-quote":"",children:n("p",{children:Q})})});import{forwardRef as CJ}from"react";import{jsx as mJ}from"react/jsx-runtime";var t=CJ(function({children:Q,side:z="left"},X){return mJ("small",{ref:X,"data-margin-note":"","data-side":z,children:Q})});import{forwardRef as gJ}from"react";import{jsx as SJ}from"react/jsx-runtime";var fQ=gJ(function({children:Q},z){return SJ(t,{ref:z,side:"right",children:Q})});import{forwardRef as jJ}from"react";import{useInjectStyles as uJ}from"../../core/dist/index.js";import{jsx as e,jsxs as hJ}from"react/jsx-runtime";var xJ="alttab-epigraph",fJ=`
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
`,aQ=jJ(function({children:Q,cite:z},X){return uJ(xJ,fJ),hJ("blockquote",{ref:X,className:"alttab-epigraph",children:[e("p",{children:Q}),z&&e("footer",{children:z})]})});import{forwardRef as cJ}from"react";import{useInjectStyles as oJ}from"../../core/dist/index.js";import{jsx as JJ,jsxs as dJ}from"react/jsx-runtime";var lJ="alttab-link-card",aJ=`
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
`,nQ=cJ(function({title:Q,description:z,external:X,href:q,target:F,rel:W,onClick:Z,id:Y,"aria-label":O,"data-testid":P},V){return oJ(lJ,aJ),dJ("a",{ref:V,className:"alttab-link-card",href:q,target:X?"_blank":F,rel:X?"noopener noreferrer":W,onClick:Z,id:Y,"aria-label":O,"data-testid":P,children:[JJ("span",{className:"alttab-link-card__title",children:Q}),z&&JJ("span",{className:"alttab-link-card__desc",children:z})]})});import{useCallback as rJ}from"react";import{semantic as U,useInjectStyles as sJ}from"../../core/dist/index.js";import{jsx as _,jsxs as QJ}from"react/jsx-runtime";var iJ="alttab-text-section",nJ=`
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${U.radiusMd};
    transition: background ${U.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${U.colorText} ${w}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${U.radiusMd};
    padding: ${U.spaceSm} ${U.spaceMd};
    font-style: italic;
    color: ${U.colorTextMuted};
    transition: background ${U.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${U.colorText} ${w}, transparent);
  }
`;function X0({content:J,editing:Q,editValue:z,onStartEdit:X,onEditChange:q,onSave:F,onCancel:W,fieldLabel:Z,rows:Y=4,placeholder:O="Click to add content..."}){sJ(iJ,nJ);let P=rJ((V)=>{if(V.key==="Escape")V.preventDefault(),W();else if(V.key==="Enter"&&(V.metaKey||V.ctrlKey))V.preventDefault(),F()},[W,F]);if(Q)return QJ("div",{role:"group","aria-label":Z,children:[_("textarea",{value:z,onChange:(V)=>q(V.target.value),onKeyDown:P,rows:Y,"aria-label":Z?`Edit ${Z}`:"Edit content",style:{display:"block",width:"100%",boxSizing:"border-box",padding:U.spaceSm,fontFamily:U.fontMono,fontSize:"0.875rem",lineHeight:"1.6",color:U.colorText,background:U.colorSurfacePage,border:`${U.borderWidthDefault} solid ${U.colorBorder}`,borderRadius:U.radiusMd,resize:"vertical",outline:"none"}}),QJ("div",{style:{display:"flex",gap:U.spaceSm,marginTop:U.spaceSm},children:[_("button",{type:"button",onClick:F,style:{padding:`${U.spaceXs} ${U.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:U.fontSans,color:U.colorTextInverse,background:U.colorActionPrimary,border:"none",borderRadius:U.radiusSm,cursor:"pointer"},children:"Save"}),_("button",{type:"button",onClick:W,style:{padding:`${U.spaceXs} ${U.spaceMd}`,fontSize:"0.8125rem",fontWeight:600,fontFamily:U.fontSans,color:U.colorTextSecondary,background:"transparent",border:`${U.borderWidthDefault} solid ${U.colorBorder}`,borderRadius:U.radiusSm,cursor:"pointer"},children:"Cancel"})]})]});if(J)return _("div",{className:"alttab-text-section-content",role:"button",tabIndex:0,"aria-label":Z?`Edit ${Z}`:"Edit content",onClick:X,onKeyDown:(V)=>{if(V.key==="Enter"||V.key===" ")V.preventDefault(),X()},children:_(m,{children:J})});return _("div",{className:"alttab-text-section-empty",role:"button",tabIndex:0,"aria-label":Z?`Add ${Z}`:"Add content",onClick:X,onKeyDown:(V)=>{if(V.key==="Enter"||V.key===" ")V.preventDefault(),X()},children:O})}import{forwardRef as tJ,useEffect as eJ,useRef as y,useCallback as g,useImperativeHandle as JQ}from"react";import{useInjectStyles as QQ}from"../../core/dist/index.js";import{jsx as XQ}from"react/jsx-runtime";var $J="abcdefghijklmnopqrstuvwxyz!?*~+#",$Q="alttab-thinking-cycle",zQ=`
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
`;function zJ(){return $J[Math.random()*$J.length|0]}var W0=tJ(function({words:Q,holdMs:z=2000,scrambleTicks:X=4,tickMs:q=50,staggerMs:F=30},W){QQ($Q,zQ);let Z=y(null);JQ(W,()=>Z.current);let Y=y(0),O=y([]),P=y(null),V=y(null),M=g(()=>{let G=Z.current;if(!G)return;let H=G.innerHTML;G.style.width="";let K=[];for(let A of Q)G.textContent=A,K.push(Math.ceil(G.getBoundingClientRect().width));G.innerHTML=H||"",O.current=K,G.style.width=K[Y.current]+"px"},[Q]),S=g((G)=>{let H=Z.current;if(!H)return;H.innerHTML="";for(let K=0;K<G.length;K++){let A=document.createElement("span");A.className="alttab-char",A.textContent=G[K],A.style.animationDelay=`${K*F}ms`,H.appendChild(A)}},[F]),j=g((G,H)=>{let K=Z.current;if(!K)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){K.textContent=G,H();return}K.innerHTML="";let u=[];for(let v=0;v<G.length;v++){let B=document.createElement("span");B.className="alttab-char",B.style.animationDelay=`${v*F}ms`,B.textContent=G[v]===" "?" ":zJ(),K.appendChild(B),u.push({span:B,final:G[v],ticks:0,maxTicks:X+v*2})}V.current=setInterval(()=>{let v=!0;for(let B of u)if(B.ticks>=B.maxTicks)B.span.textContent=B.final;else v=!1,B.ticks++,B.span.textContent=B.final===" "?" ":zJ();if(v)clearInterval(V.current),V.current=null,H()},q)},[X,q,F]);return eJ(()=>{if(Q.length<2)return;M(),document.fonts.ready.then(M);let G=()=>M();document.fonts.addEventListener("loadingdone",G);let H=new MutationObserver(()=>requestAnimationFrame(M));H.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),Y.current=0,S(Q[0]);function K(){Y.current=(Y.current+1)%Q.length;let A=Z.current;if(A)A.style.width=O.current[Y.current]+"px";j(Q[Y.current],()=>{P.current=setTimeout(K,z)})}return P.current=setTimeout(K,z),()=>{if(P.current)clearTimeout(P.current);if(V.current)clearInterval(V.current);document.fonts.removeEventListener("loadingdone",G),H.disconnect()}},[Q,z,M,S,j]),XQ("span",{ref:Z,className:"alttab-thinking"})});export{W0 as ThinkingCycle,X0 as TextSection,fQ as SideNote,RQ as PullQuote,AQ as Prose,h as PROSE_H2_SIZE,p as PROSE_H1_SIZE,UQ as PROSE_CODE_SIZE,E as PROSE_BODY_SIZE,ZQ as PROSE_BLOCKQUOTE_SIZE,m as Markdown,t as MarginNote,c as MIX_SUBTLE,w as MIX_HOVER,qQ as MIX_BADGE,nQ as LinkCard,aQ as Epigraph,GQ as Container,x as BREAKPOINT_WIDE,k as BREAKPOINT_PROSE,f as BREAKPOINT_MARGIN_NOTES};
