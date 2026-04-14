var XJ=Object.create;var{getPrototypeOf:ZJ,defineProperty:P,getOwnPropertyNames:x,getOwnPropertyDescriptor:$J}=Object,j=Object.prototype.hasOwnProperty;function S(N){return this[N]}var KJ,UJ,w=(N,J,Q)=>{var V=N!=null&&typeof N==="object";if(V){var F=J?KJ??=new WeakMap:UJ??=new WeakMap,q=F.get(N);if(q)return q}Q=N!=null?XJ(ZJ(N)):{};let A=J||!N||!N.__esModule?P(Q,"default",{value:N,enumerable:!0}):Q;for(let Z of x(N))if(!j.call(A,Z))P(A,Z,{get:S.bind(N,Z),enumerable:!0});if(V)F.set(N,A);return A},zJ=(N)=>{var J=(C??=new WeakMap).get(N),Q;if(J)return J;if(J=P({},"__esModule",{value:!0}),N&&typeof N==="object"||typeof N==="function"){for(var V of x(N))if(!j.call(J,V))P(J,V,{get:S.bind(N,V),enumerable:!(Q=$J(N,V))||Q.enumerable})}return C.set(N,J),J},C;var FJ=(N)=>N;function AJ(N,J){this[N]=FJ.bind(null,J)}var GJ=(N,J)=>{for(var Q in J)P(N,Q,{get:J[Q],enumerable:!0,configurable:!0,set:AJ.bind(J,Q)})};var wJ={};GJ(wJ,{ThinkingCycle:()=>SJ,SideNote:()=>IJ,PullQuote:()=>TJ,Prose:()=>I,Markdown:()=>l,MarginNote:()=>_J,LinkCard:()=>CJ,Epigraph:()=>MJ,Container:()=>BJ});module.exports=zJ(wJ);var R=require("react"),g=require("react/jsx-runtime"),qJ={prose:"680px",wide:"900px"},BJ=R.forwardRef(function({width:J="prose",maxWidth:Q,padding:V="1.5rem",children:F,style:q,...A},Z){return g.jsx("div",{ref:Z,style:{boxSizing:"border-box",width:"100%",maxWidth:Q??qJ[J],marginInline:"auto",paddingInline:V,overflow:"visible",...q},...A,children:F})});var m=require("react"),p=require("../../core/dist/index.cjs"),u=require("react/jsx-runtime"),OJ="alttab-prose-styles",WJ=`
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
`,I=m.forwardRef(function({children:J,style:Q,...V},F){return p.useInjectStyles(OJ,WJ),u.jsx("div",{ref:F,className:"alttab-prose",style:Q,...V,children:J})});var H=require("react"),h=w(require("react-markdown")),f=w(require("remark-gfm")),O=require("../../core/dist/index.cjs");var z=require("react/jsx-runtime"),c={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function YJ(){return z.jsxs("svg",{viewBox:"0 0 24 24",...c,children:[z.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),z.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function HJ(){return z.jsx("svg",{viewBox:"0 0 24 24",...c,children:z.jsx("path",{d:"M20 6L9 17l-5-5"})})}var DJ="alttab-markdown-codeblock",LJ=`
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
    border: 1px solid ${O.semantic.colorBorder};
    border-radius: ${O.semantic.radiusSm};
    background: ${O.semantic.colorSurface};
    color: ${O.semantic.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${O.semantic.colorText};
    border-color: ${O.semantic.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${O.semantic.colorSuccess};
    border-color: ${O.semantic.colorSuccess};
  }
`;function PJ({children:N}){O.useInjectStyles(DJ,LJ);let[J,Q]=H.useState(!1),V=H.useRef(null),F=H.useCallback(()=>{let q=document.querySelector(".alttab-codeblock pre code"),A="",Z=(U)=>{if(typeof U==="string"){A+=U;return}if(Array.isArray(U)){U.forEach(Z);return}if(U&&typeof U==="object"&&"props"in U)Z(U.props.children)};if(Z(N),navigator.clipboard.writeText(A.replace(/\n$/,"")),Q(!0),V.current)clearTimeout(V.current);V.current=setTimeout(()=>Q(!1),1500)},[N]);return z.jsxs("div",{className:"alttab-codeblock",children:[z.jsx("button",{type:"button",className:"alttab-codeblock-copy",onClick:F,"aria-label":"Copy code",...J?{"data-copied":""}:{},children:J?z.jsx(HJ,{}):z.jsx(YJ,{})}),z.jsx("pre",{children:N})]})}var EJ={pre:PJ};function l({children:N,...J}){return z.jsx(I,{...J,children:z.jsx(h.default,{remarkPlugins:[f.default],components:EJ,children:N})})}var d=require("react"),v=require("react/jsx-runtime"),TJ=d.forwardRef(function({children:J},Q){return v.jsx("blockquote",{ref:Q,"data-pull-quote":"",children:v.jsx("p",{children:J})})});var o=require("react"),a=require("react/jsx-runtime"),_J=o.forwardRef(function({children:J},Q){return a.jsx("small",{ref:Q,"data-margin-note":"",children:J})});var n=require("react"),i=require("react/jsx-runtime"),IJ=n.forwardRef(function({children:J},Q){return i.jsx("small",{ref:Q,"data-side-note":"",children:J})});var t=require("react"),r=require("../../core/dist/index.cjs"),E=require("react/jsx-runtime"),vJ="alttab-epigraph",yJ=`
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
`,MJ=t.forwardRef(function({children:J,cite:Q},V){return r.useInjectStyles(vJ,yJ),E.jsxs("blockquote",{ref:V,className:"alttab-epigraph",children:[E.jsx("p",{children:J}),Q&&E.jsx("footer",{children:Q})]})});var s=require("react"),e=require("../../core/dist/index.cjs"),T=require("react/jsx-runtime"),bJ="alttab-link-card",kJ=`
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
`,CJ=s.forwardRef(function({title:J,description:Q,external:V,children:F,...q},A){return e.useInjectStyles(bJ,kJ),T.jsxs("a",{ref:A,className:"alttab-link-card",...V?{target:"_blank",rel:"noopener noreferrer"}:{},...q,children:[T.jsx("span",{className:"alttab-link-card__title",children:J}),Q&&T.jsx("span",{className:"alttab-link-card__desc",children:Q}),F]})});var K=require("react"),QJ=require("../../core/dist/index.cjs"),VJ=require("react/jsx-runtime"),JJ="abcdefghijklmnopqrstuvwxyz!?*~+#",xJ="alttab-thinking-cycle",jJ=`
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
`;function NJ(){return JJ[Math.random()*JJ.length|0]}var SJ=K.forwardRef(function({words:J,holdMs:Q=2000,scrambleTicks:V=4,tickMs:F=50,staggerMs:q=30},A){QJ.useInjectStyles(xJ,jJ);let Z=K.useRef(null);K.useImperativeHandle(A,()=>Z.current);let U=K.useRef(0),y=K.useRef([]),_=K.useRef(null),D=K.useRef(null),L=K.useCallback(()=>{let X=Z.current;if(!X)return;let B=X.innerHTML;X.style.width="";let $=[];for(let W of J)X.textContent=W,$.push(Math.ceil(X.getBoundingClientRect().width));X.innerHTML=B||"",y.current=$,X.style.width=$[U.current]+"px"},[J]),M=K.useCallback((X)=>{let B=Z.current;if(!B)return;B.innerHTML="";for(let $=0;$<X.length;$++){let W=document.createElement("span");W.className="alttab-char",W.textContent=X[$],W.style.animationDelay=`${$*q}ms`,B.appendChild(W)}},[q]),b=K.useCallback((X,B)=>{let $=Z.current;if(!$)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){$.textContent=X,B();return}$.innerHTML="";let k=[];for(let Y=0;Y<X.length;Y++){let G=document.createElement("span");G.className="alttab-char",G.style.animationDelay=`${Y*q}ms`,G.textContent=X[Y]===" "?" ":NJ(),$.appendChild(G),k.push({span:G,final:X[Y],ticks:0,maxTicks:V+Y*2})}D.current=setInterval(()=>{let Y=!0;for(let G of k)if(G.ticks>=G.maxTicks)G.span.textContent=G.final;else Y=!1,G.ticks++,G.span.textContent=G.final===" "?" ":NJ();if(Y)clearInterval(D.current),D.current=null,B()},F)},[V,F,q]);return K.useEffect(()=>{if(J.length<2)return;L(),document.fonts.ready.then(L);let X=()=>L();document.fonts.addEventListener("loadingdone",X);let B=new MutationObserver(()=>requestAnimationFrame(L));B.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),U.current=0,M(J[0]);function $(){U.current=(U.current+1)%J.length;let W=Z.current;if(W)W.style.width=y.current[U.current]+"px";b(J[U.current],()=>{_.current=setTimeout($,Q)})}return _.current=setTimeout($,Q),()=>{if(_.current)clearTimeout(_.current);if(D.current)clearInterval(D.current);document.fonts.removeEventListener("loadingdone",X),B.disconnect()}},[J,Q,L,M,b]),VJ.jsx("span",{ref:Z,className:"alttab-thinking"})});
