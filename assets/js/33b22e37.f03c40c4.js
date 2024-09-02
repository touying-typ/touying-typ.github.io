"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8937],{4911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),i=t(1151);const s={sidebar_position:6},r="Ctheorems",a={id:"integration/ctheorems",title:"Ctheorems",description:"Touying can work seamlessly with the ctheorems package, allowing you to directly use the ctheorems package.",source:"@site/versioned_docs/version-0.4.1/integration/ctheorems.md",sourceDirName:"integration",slug:"/integration/ctheorems",permalink:"/docs/0.4.1/integration/ctheorems",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/integration/ctheorems.md",tags:[],version:"0.4.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Codly",permalink:"/docs/0.4.1/integration/codly"},next:{title:"Themes",permalink:"/docs/0.4.1/category/themes"}},c={},l=[];function m(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ctheorems",children:"Ctheorems"}),"\n",(0,o.jsxs)(n.p,{children:["Touying can work seamlessly with the ",(0,o.jsx)(n.code,{children:"ctheorems"})," package, allowing you to directly use the ",(0,o.jsx)(n.code,{children:"ctheorems"})," package."]}),"\n",(0,o.jsxs)(n.p,{children:["Moreover, you can utilize ",(0,o.jsx)(n.code,{children:'#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")'})," to set numbering for sections and subsections."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n#import "@preview/ctheorems:1.1.2": *\n\n// Register university theme\n#let s = themes.simple.register(aspect-ratio: "16-9")\n\n// Set the numbering of section and subsection\n#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")\n\n// Theorems configuration by ctheorems\n#show: thmrules.with(qed-symbol: $square$)\n#let theorem = thmbox("theorem", "Theorem", fill: rgb("#eeffee"))\n#let corollary = thmplain(\n  "corollary",\n  "Corollary",\n  base: "theorem",\n  titlefmt: strong\n)\n#let definition = thmbox("definition", "Definition", inset: (x: 1.2em, top: 1em))\n#let example = thmplain("example", "Example").with(numbering: none)\n#let proof = thmproof("proof", "Proof")\n\n// Extract methods\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n// Extract slide functions\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Theorems\n\n== Prime numbers\n\n#definition[\n  A natural number is called a #highlight[_prime number_] if it is greater\n  than 1 and cannot be written as the product of two smaller natural numbers.\n]\n#example[\n  The numbers $2$, $3$, and $17$ are prime.\n  @cor_largest_prime shows that this list is not exhaustive!\n]\n\n#theorem("Euclid")[\n  There are infinitely many primes.\n]\n#proof[\n  Suppose to the contrary that $p_1, p_2, dots, p_n$ is a finite enumeration\n  of all primes. Set $P = p_1 p_2 dots p_n$. Since $P + 1$ is not in our list,\n  it cannot be prime. Thus, some prime factor $p_j$ divides $P + 1$.  Since\n  $p_j$ also divides $P$, it must divide the difference $(P + 1) - P = 1$, a\n  contradiction.\n]\n\n#corollary[\n  There is no largest prime number.\n] <cor_largest_prime>\n#corollary[\n  There are infinitely many composite numbers.\n]\n\n#theorem[\n  There are arbitrarily long stretches of composite numbers.\n]\n\n#proof[\n  For any $n > 2$, consider $\n    n! + 2, quad n! + 3, quad ..., quad n! + n #qedhere\n  $\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/b506da7e-b7d6-4493-b35a-2307cfd38ddc",alt:"image"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);