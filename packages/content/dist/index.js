import{forwardRef as k}from"react";import{jsx as j}from"react/jsx-runtime";var b={prose:"680px",wide:"900px"},zJ=k(function({width:J="prose",maxWidth:K,padding:Z="1.5rem",children:U,style:z,...G},F){return j("div",{ref:F,style:{boxSizing:"border-box",width:"100%",maxWidth:K??b[J],marginInline:"auto",paddingInline:Z,overflow:"visible",...z},...G,children:U})});import{forwardRef as S}from"react";import{useInjectStyles as R}from "../../core/dist/index.js";import{jsx as g}from"react/jsx-runtime";var w="alttab-prose-styles",m=`
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

  .alttab-prose pre code {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.875rem;
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

  /* ── Strong ── */
  .alttab-prose strong {
    font-weight: 600;
  }
`,P=S(function({children:J,style:K,...Z},U){return R(w,m),g("div",{ref:U,className:"alttab-prose",style:K,...Z,children:J})});import p from"react-markdown";import u from"remark-gfm";import{jsx as T}from"react/jsx-runtime";function h({children:O,...J}){return T(P,{...J,children:T(p,{remarkPlugins:[u],children:O})})}import{forwardRef as f}from"react";import{jsx as y}from"react/jsx-runtime";var yJ=f(function({children:J},K){return y("blockquote",{ref:K,"data-pull-quote":"",children:y("p",{children:J})})});import{forwardRef as c}from"react";import{jsx as o}from"react/jsx-runtime";var xJ=c(function({children:J},K){return o("small",{ref:K,"data-margin-note":"",children:J})});import{forwardRef as d}from"react";import{jsx as l}from"react/jsx-runtime";var SJ=d(function({children:J},K){return l("small",{ref:K,"data-side-note":"",children:J})});import{forwardRef as n}from"react";import{useInjectStyles as a}from "../../core/dist/index.js";import{jsx as v,jsxs as s}from"react/jsx-runtime";var i="alttab-epigraph",t=`
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
`,pJ=n(function({children:J,cite:K},Z){return a(i,t),s("blockquote",{ref:Z,className:"alttab-epigraph",children:[v("p",{children:J}),K&&v("footer",{children:K})]})});import{forwardRef as r}from"react";import{useInjectStyles as e}from "../../core/dist/index.js";import{jsx as C,jsxs as NJ}from"react/jsx-runtime";var JJ="alttab-link-card",KJ=`
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
`,oJ=r(function({title:J,description:K,external:Z,children:U,...z},G){return e(JJ,KJ),NJ("a",{ref:G,className:"alttab-link-card",...Z?{target:"_blank",rel:"noopener noreferrer"}:{},...z,children:[C("span",{className:"alttab-link-card__title",children:J}),K&&C("span",{className:"alttab-link-card__desc",children:K}),U]})});import{forwardRef as QJ,useEffect as VJ,useRef as W,useCallback as H,useImperativeHandle as XJ}from"react";import{useInjectStyles as ZJ}from "../../core/dist/index.js";import{jsx as BJ}from"react/jsx-runtime";var M="abcdefghijklmnopqrstuvwxyz!?*~+#",$J="alttab-thinking-cycle",OJ=`
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
`;function x(){return M[Math.random()*M.length|0]}var iJ=QJ(function({words:J,holdMs:K=2000,scrambleTicks:Z=4,tickMs:U=50,staggerMs:z=30},G){ZJ($J,OJ);let F=W(null);XJ(G,()=>F.current);let A=W(0),L=W([]),D=W(null),Y=W(null),q=H(()=>{let N=F.current;if(!N)return;let X=N.innerHTML;N.style.width="";let Q=[];for(let $ of J)N.textContent=$,Q.push(Math.ceil(N.getBoundingClientRect().width));N.innerHTML=X||"",L.current=Q,N.style.width=Q[A.current]+"px"},[J]),_=H((N)=>{let X=F.current;if(!X)return;X.innerHTML="";for(let Q=0;Q<N.length;Q++){let $=document.createElement("span");$.className="alttab-char",$.textContent=N[Q],$.style.animationDelay=`${Q*z}ms`,X.appendChild($)}},[z]),E=H((N,X)=>{let Q=F.current;if(!Q)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Q.textContent=N,X();return}Q.innerHTML="";let I=[];for(let B=0;B<N.length;B++){let V=document.createElement("span");V.className="alttab-char",V.style.animationDelay=`${B*z}ms`,V.textContent=N[B]===" "?" ":x(),Q.appendChild(V),I.push({span:V,final:N[B],ticks:0,maxTicks:Z+B*2})}Y.current=setInterval(()=>{let B=!0;for(let V of I)if(V.ticks>=V.maxTicks)V.span.textContent=V.final;else B=!1,V.ticks++,V.span.textContent=V.final===" "?" ":x();if(B)clearInterval(Y.current),Y.current=null,X()},U)},[Z,U,z]);return VJ(()=>{if(J.length<2)return;q(),document.fonts.ready.then(q);let N=()=>q();document.fonts.addEventListener("loadingdone",N);let X=new MutationObserver(()=>requestAnimationFrame(q));X.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),A.current=0,_(J[0]);function Q(){A.current=(A.current+1)%J.length;let $=F.current;if($)$.style.width=L.current[A.current]+"px";E(J[A.current],()=>{D.current=setTimeout(Q,K)})}return D.current=setTimeout(Q,K),()=>{if(D.current)clearTimeout(D.current);if(Y.current)clearInterval(Y.current);document.fonts.removeEventListener("loadingdone",N),X.disconnect()}},[J,K,q,_,E]),BJ("span",{ref:F,className:"alttab-thinking"})});export{iJ as ThinkingCycle,SJ as SideNote,yJ as PullQuote,P as Prose,h as Markdown,xJ as MarginNote,oJ as LinkCard,pJ as Epigraph,zJ as Container};
