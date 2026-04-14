import{forwardRef as S}from"react";import{jsx as R}from"react/jsx-runtime";var w={prose:"680px",wide:"900px"},_J=S(function({width:J="prose",maxWidth:N,padding:Z="1.5rem",children:F,style:q,...O},U){return R("div",{ref:U,style:{boxSizing:"border-box",width:"100%",maxWidth:N??w[J],marginInline:"auto",paddingInline:Z,overflow:"visible",...q},...O,children:F})});import{forwardRef as g}from"react";import{useInjectStyles as m}from "../../core/dist/index.js";import{jsx as h}from"react/jsx-runtime";var p="alttab-prose-styles",u=`
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
`,v=g(function({children:J,style:N,...Z},F){return m(p,u),h("div",{ref:F,className:"alttab-prose",style:N,...Z,children:J})});import{useState as f,useCallback as c,useRef as l}from"react";import d from"react-markdown";import o from"remark-gfm";import{semantic as W,useInjectStyles as a}from "../../core/dist/index.js";import{jsx as G,jsxs as M}from"react/jsx-runtime";var y={width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};function n(){return M("svg",{viewBox:"0 0 24 24",...y,children:[G("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),G("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})}function i(){return G("svg",{viewBox:"0 0 24 24",...y,children:G("path",{d:"M20 6L9 17l-5-5"})})}var t="alttab-markdown-codeblock",r=`
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
    border: 1px solid ${W.colorBorder};
    border-radius: ${W.radiusSm};
    background: ${W.colorSurface};
    color: ${W.colorTextMuted};
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .alttab-codeblock:hover .alttab-codeblock-copy {
    opacity: 1;
  }
  .alttab-codeblock-copy:hover {
    color: ${W.colorText};
    border-color: ${W.colorTextMuted};
  }
  .alttab-codeblock-copy[data-copied] {
    opacity: 1;
    color: ${W.colorSuccess};
    border-color: ${W.colorSuccess};
  }
`;function s({children:$}){a(t,r);let[J,N]=f(!1),Z=l(null),F=c(()=>{let q=document.querySelector(".alttab-codeblock pre code"),O="",U=(X)=>{if(typeof X==="string"){O+=X;return}if(Array.isArray(X)){X.forEach(U);return}if(X&&typeof X==="object"&&"props"in X)U(X.props.children)};if(U($),navigator.clipboard.writeText(O.replace(/\n$/,"")),N(!0),Z.current)clearTimeout(Z.current);Z.current=setTimeout(()=>N(!1),1500)},[$]);return M("div",{className:"alttab-codeblock",children:[G("button",{type:"button",className:"alttab-codeblock-copy",onClick:F,"aria-label":"Copy code",...J?{"data-copied":""}:{},children:J?G(i,{}):G(n,{})}),G("pre",{children:$})]})}var e={pre:s};function JJ({children:$,...J}){return G(v,{...J,children:G(d,{remarkPlugins:[o],components:e,children:$})})}import{forwardRef as NJ}from"react";import{jsx as b}from"react/jsx-runtime";var hJ=NJ(function({children:J},N){return b("blockquote",{ref:N,"data-pull-quote":"",children:b("p",{children:J})})});import{forwardRef as QJ}from"react";import{jsx as VJ}from"react/jsx-runtime";var dJ=QJ(function({children:J},N){return VJ("small",{ref:N,"data-margin-note":"",children:J})});import{forwardRef as XJ}from"react";import{jsx as ZJ}from"react/jsx-runtime";var iJ=XJ(function({children:J},N){return ZJ("small",{ref:N,"data-side-note":"",children:J})});import{forwardRef as $J}from"react";import{useInjectStyles as KJ}from "../../core/dist/index.js";import{jsx as k,jsxs as FJ}from"react/jsx-runtime";var UJ="alttab-epigraph",zJ=`
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
`,JN=$J(function({children:J,cite:N},Z){return KJ(UJ,zJ),FJ("blockquote",{ref:Z,className:"alttab-epigraph",children:[k("p",{children:J}),N&&k("footer",{children:N})]})});import{forwardRef as AJ}from"react";import{useInjectStyles as GJ}from "../../core/dist/index.js";import{jsx as C,jsxs as OJ}from"react/jsx-runtime";var qJ="alttab-link-card",BJ=`
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
`,ZN=AJ(function({title:J,description:N,external:Z,children:F,...q},O){return GJ(qJ,BJ),OJ("a",{ref:O,className:"alttab-link-card",...Z?{target:"_blank",rel:"noopener noreferrer"}:{},...q,children:[C("span",{className:"alttab-link-card__title",children:J}),N&&C("span",{className:"alttab-link-card__desc",children:N}),F]})});import{forwardRef as WJ,useEffect as YJ,useRef as D,useCallback as P,useImperativeHandle as HJ}from"react";import{useInjectStyles as DJ}from "../../core/dist/index.js";import{jsx as EJ}from"react/jsx-runtime";var x="abcdefghijklmnopqrstuvwxyz!?*~+#",LJ="alttab-thinking-cycle",PJ=`
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
`;function j(){return x[Math.random()*x.length|0]}var FN=WJ(function({words:J,holdMs:N=2000,scrambleTicks:Z=4,tickMs:F=50,staggerMs:q=30},O){DJ(LJ,PJ);let U=D(null);HJ(O,()=>U.current);let X=D(0),E=D([]),L=D(null),Y=D(null),H=P(()=>{let Q=U.current;if(!Q)return;let z=Q.innerHTML;Q.style.width="";let V=[];for(let A of J)Q.textContent=A,V.push(Math.ceil(Q.getBoundingClientRect().width));Q.innerHTML=z||"",E.current=V,Q.style.width=V[X.current]+"px"},[J]),T=P((Q)=>{let z=U.current;if(!z)return;z.innerHTML="";for(let V=0;V<Q.length;V++){let A=document.createElement("span");A.className="alttab-char",A.textContent=Q[V],A.style.animationDelay=`${V*q}ms`,z.appendChild(A)}},[q]),_=P((Q,z)=>{let V=U.current;if(!V)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){V.textContent=Q,z();return}V.innerHTML="";let I=[];for(let B=0;B<Q.length;B++){let K=document.createElement("span");K.className="alttab-char",K.style.animationDelay=`${B*q}ms`,K.textContent=Q[B]===" "?" ":j(),V.appendChild(K),I.push({span:K,final:Q[B],ticks:0,maxTicks:Z+B*2})}Y.current=setInterval(()=>{let B=!0;for(let K of I)if(K.ticks>=K.maxTicks)K.span.textContent=K.final;else B=!1,K.ticks++,K.span.textContent=K.final===" "?" ":j();if(B)clearInterval(Y.current),Y.current=null,z()},F)},[Z,F,q]);return YJ(()=>{if(J.length<2)return;H(),document.fonts.ready.then(H);let Q=()=>H();document.fonts.addEventListener("loadingdone",Q);let z=new MutationObserver(()=>requestAnimationFrame(H));z.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),X.current=0,T(J[0]);function V(){X.current=(X.current+1)%J.length;let A=U.current;if(A)A.style.width=E.current[X.current]+"px";_(J[X.current],()=>{L.current=setTimeout(V,N)})}return L.current=setTimeout(V,N),()=>{if(L.current)clearTimeout(L.current);if(Y.current)clearInterval(Y.current);document.fonts.removeEventListener("loadingdone",Q),z.disconnect()}},[J,N,H,T,_]),EJ("span",{ref:U,className:"alttab-thinking"})});export{FN as ThinkingCycle,iJ as SideNote,hJ as PullQuote,v as Prose,JJ as Markdown,dJ as MarginNote,ZN as LinkCard,JN as Epigraph,_J as Container};
