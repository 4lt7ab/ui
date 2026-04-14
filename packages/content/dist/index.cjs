var KJ=Object.create;var{getPrototypeOf:NJ,defineProperty:D,getOwnPropertyNames:x,getOwnPropertyDescriptor:QJ}=Object,k=Object.prototype.hasOwnProperty;function b(K){return this[K]}var VJ,XJ,j=(K,J,N)=>{var Q=K!=null&&typeof K==="object";if(Q){var B=J?VJ??=new WeakMap:XJ??=new WeakMap,U=B.get(K);if(U)return U}N=K!=null?KJ(NJ(K)):{};let F=J||!K||!K.__esModule?D(N,"default",{value:K,enumerable:!0}):N;for(let O of x(K))if(!k.call(F,O))D(F,O,{get:b.bind(K,O),enumerable:!0});if(Q)B.set(K,F);return F},ZJ=(K)=>{var J=(M??=new WeakMap).get(K),N;if(J)return J;if(J=D({},"__esModule",{value:!0}),K&&typeof K==="object"||typeof K==="function"){for(var Q of x(K))if(!k.call(J,Q))D(J,Q,{get:b.bind(K,Q),enumerable:!(N=QJ(K,Q))||N.enumerable})}return M.set(K,J),J},M;var $J=(K)=>K;function OJ(K,J){this[K]=$J.bind(null,J)}var BJ=(K,J)=>{for(var N in J)D(K,N,{get:J[N],enumerable:!0,configurable:!0,set:OJ.bind(J,N)})};var yJ={};BJ(yJ,{ThinkingCycle:()=>TJ,SideNote:()=>qJ,PullQuote:()=>GJ,Prose:()=>E,Markdown:()=>h,MarginNote:()=>YJ,LinkCard:()=>EJ,Epigraph:()=>HJ,Container:()=>zJ});module.exports=ZJ(yJ);var S=require("react"),R=require("react/jsx-runtime"),UJ={prose:"680px",wide:"900px"},zJ=S.forwardRef(function({width:J="prose",maxWidth:N,padding:Q="1.5rem",children:B,style:U,...F},O){return R.jsx("div",{ref:O,style:{boxSizing:"border-box",width:"100%",maxWidth:N??UJ[J],marginInline:"auto",paddingInline:Q,overflow:"visible",...U},...F,children:B})});var w=require("react"),m=require("../../core/dist/index.cjs"),g=require("react/jsx-runtime"),FJ="alttab-prose-styles",AJ=`
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
    background: var(--color-surface-raised);
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
    font-size: 0.875rem;
    line-height: 1.6;
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
`,E=w.forwardRef(function({children:J,style:N,...Q},B){return m.useInjectStyles(FJ,AJ),g.jsx("div",{ref:B,className:"alttab-prose",style:N,...Q,children:J})});var p=j(require("react-markdown")),u=j(require("remark-gfm"));var I=require("react/jsx-runtime");function h({children:K,...J}){return I.jsx(E,{...J,children:I.jsx(p.default,{remarkPlugins:[u.default],children:K})})}var f=require("react"),P=require("react/jsx-runtime"),GJ=f.forwardRef(function({children:J},N){return P.jsx("blockquote",{ref:N,"data-pull-quote":"",children:P.jsx("p",{children:J})})});var c=require("react"),o=require("react/jsx-runtime"),YJ=c.forwardRef(function({children:J},N){return o.jsx("small",{ref:N,"data-margin-note":"",children:J})});var d=require("react"),l=require("react/jsx-runtime"),qJ=d.forwardRef(function({children:J},N){return l.jsx("small",{ref:N,"data-side-note":"",children:J})});var n=require("react"),a=require("../../core/dist/index.cjs"),H=require("react/jsx-runtime"),WJ="alttab-epigraph",DJ=`
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
`,HJ=n.forwardRef(function({children:J,cite:N},Q){return a.useInjectStyles(WJ,DJ),H.jsxs("blockquote",{ref:Q,className:"alttab-epigraph",children:[H.jsx("p",{children:J}),N&&H.jsx("footer",{children:N})]})});var i=require("react"),t=require("../../core/dist/index.cjs"),L=require("react/jsx-runtime"),LJ="alttab-link-card",_J=`
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
`,EJ=i.forwardRef(function({title:J,description:N,external:Q,children:B,...U},F){return t.useInjectStyles(LJ,_J),L.jsxs("a",{ref:F,className:"alttab-link-card",...Q?{target:"_blank",rel:"noopener noreferrer"}:{},...U,children:[L.jsx("span",{className:"alttab-link-card__title",children:J}),N&&L.jsx("span",{className:"alttab-link-card__desc",children:N}),B]})});var Z=require("react"),e=require("../../core/dist/index.cjs"),JJ=require("react/jsx-runtime"),s="abcdefghijklmnopqrstuvwxyz!?*~+#",IJ="alttab-thinking-cycle",PJ=`
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
`;function r(){return s[Math.random()*s.length|0]}var TJ=Z.forwardRef(function({words:J,holdMs:N=2000,scrambleTicks:Q=4,tickMs:B=50,staggerMs:U=30},F){e.useInjectStyles(IJ,PJ);let O=Z.useRef(null);Z.useImperativeHandle(F,()=>O.current);let Y=Z.useRef(0),T=Z.useRef([]),_=Z.useRef(null),q=Z.useRef(null),W=Z.useCallback(()=>{let V=O.current;if(!V)return;let z=V.innerHTML;V.style.width="";let X=[];for(let A of J)V.textContent=A,X.push(Math.ceil(V.getBoundingClientRect().width));V.innerHTML=z||"",T.current=X,V.style.width=X[Y.current]+"px"},[J]),y=Z.useCallback((V)=>{let z=O.current;if(!z)return;z.innerHTML="";for(let X=0;X<V.length;X++){let A=document.createElement("span");A.className="alttab-char",A.textContent=V[X],A.style.animationDelay=`${X*U}ms`,z.appendChild(A)}},[U]),v=Z.useCallback((V,z)=>{let X=O.current;if(!X)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){X.textContent=V,z();return}X.innerHTML="";let C=[];for(let G=0;G<V.length;G++){let $=document.createElement("span");$.className="alttab-char",$.style.animationDelay=`${G*U}ms`,$.textContent=V[G]===" "?" ":r(),X.appendChild($),C.push({span:$,final:V[G],ticks:0,maxTicks:Q+G*2})}q.current=setInterval(()=>{let G=!0;for(let $ of C)if($.ticks>=$.maxTicks)$.span.textContent=$.final;else G=!1,$.ticks++,$.span.textContent=$.final===" "?" ":r();if(G)clearInterval(q.current),q.current=null,z()},B)},[Q,B,U]);return Z.useEffect(()=>{if(J.length<2)return;W(),document.fonts.ready.then(W);let V=()=>W();document.fonts.addEventListener("loadingdone",V);let z=new MutationObserver(()=>requestAnimationFrame(W));z.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),Y.current=0,y(J[0]);function X(){Y.current=(Y.current+1)%J.length;let A=O.current;if(A)A.style.width=T.current[Y.current]+"px";v(J[Y.current],()=>{_.current=setTimeout(X,N)})}return _.current=setTimeout(X,N),()=>{if(_.current)clearTimeout(_.current);if(q.current)clearInterval(q.current);document.fonts.removeEventListener("loadingdone",V),z.disconnect()}},[J,N,W,y,v]),JJ.jsx("span",{ref:O,className:"alttab-thinking"})});
