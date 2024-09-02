"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9931],{873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var i=t(5893),o=t(1151);const r={sidebar_position:5},s="Ctheorems",a={id:"integration/ctheorems",title:"Ctheorems",description:"Touying \u80fd\u591f\u4e0e ctheorems \u5305\u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ctheorems \u5305\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integration/ctheorems.md",sourceDirName:"integration",slug:"/integration/ctheorems",permalink:"/zh/docs/next/integration/ctheorems",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/integration/ctheorems.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fletcher",permalink:"/zh/docs/next/integration/fletcher"},next:{title:"Themes",permalink:"/zh/docs/next/category/themes"}},c={},m=[];function l(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ctheorems",children:"Ctheorems"}),"\n",(0,i.jsx)(n.p,{children:"Touying \u80fd\u591f\u4e0e ctheorems \u5305\u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ctheorems \u5305\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:'#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")'})," \u4e3a sections \u548c subsections \u8bbe\u7f6e numbering\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n#import "@preview/ctheorems:1.1.2": *\n\n// Register university theme\n#let s = themes.simple.register(aspect-ratio: "16-9")\n\n// Set the numbering of section and subsection\n#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")\n\n// Theorems configuration by ctheorems\n#show: thmrules.with(qed-symbol: $square$)\n#let theorem = thmbox("theorem", "Theorem", fill: rgb("#eeffee"))\n#let corollary = thmplain(\n  "corollary",\n  "Corollary",\n  base: "theorem",\n  titlefmt: strong\n)\n#let definition = thmbox("definition", "Definition", inset: (x: 1.2em, top: 1em))\n#let example = thmplain("example", "Example").with(numbering: none)\n#let proof = thmproof("proof", "Proof")\n\n// Extract methods\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n// Extract slide functions\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Theorems\n\n== Prime numbers\n\n#definition[\n  A natural number is called a #highlight[_prime number_] if it is greater\n  than 1 and cannot be written as the product of two smaller natural numbers.\n]\n#example[\n  The numbers $2$, $3$, and $17$ are prime.\n  @cor_largest_prime shows that this list is not exhaustive!\n]\n\n#theorem("Euclid")[\n  There are infinitely many primes.\n]\n#proof[\n  Suppose to the contrary that $p_1, p_2, dots, p_n$ is a finite enumeration\n  of all primes. Set $P = p_1 p_2 dots p_n$. Since $P + 1$ is not in our list,\n  it cannot be prime. Thus, some prime factor $p_j$ divides $P + 1$.  Since\n  $p_j$ also divides $P$, it must divide the difference $(P + 1) - P = 1$, a\n  contradiction.\n]\n\n#corollary[\n  There is no largest prime number.\n] <cor_largest_prime>\n#corollary[\n  There are infinitely many composite numbers.\n]\n\n#theorem[\n  There are arbitrarily long stretches of composite numbers.\n]\n\n#proof[\n  For any $n > 2$, consider $\n    n! + 2, quad n! + 3, quad ..., quad n! + n #qedhere\n  $\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/b506da7e-b7d6-4493-b35a-2307cfd38ddc",alt:"image"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);