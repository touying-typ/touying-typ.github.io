"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5149],{14084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=t(85893),r=t(11151);const i={sidebar_position:6},s="Theorion",a={id:"integration/theorion",title:"Theorion",description:'Touying can work properly with the Theorion package, you can directly use the theorion package. Additionally, you can use #set heading(numbering: "1.1") to set numbering for sections and subsections.',source:"@site/docs/integration/theorion.md",sourceDirName:"integration",slug:"/integration/theorion",permalink:"/docs/next/integration/theorion",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/integration/theorion.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Codly",permalink:"/docs/next/integration/codly"},next:{title:"Themes",permalink:"/docs/next/category/themes"}},c={},h=[];function u(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"theorion",children:"Theorion"}),"\n",(0,o.jsxs)(n.p,{children:["Touying can work properly with the ",(0,o.jsx)(n.a,{href:"https://github.com/OrangeX4/typst-theorion",children:"Theorion"})," package, you can directly use the ",(0,o.jsx)(n.a,{href:"https://github.com/OrangeX4/typst-theorion",children:"theorion"})," package. Additionally, you can use ",(0,o.jsx)(n.code,{children:'#set heading(numbering: "1.1")'})," to set numbering for sections and subsections."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Note: To make animation commands like ",(0,o.jsx)(n.code,{children:"#pause"})," work properly with theorion, you need to use ",(0,o.jsx)(n.code,{children:"config-common(frozen-counters: (theorem-counter,))"})," to bind counters that need to be frozen."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.6.1": *\n#import themes.university: *\n#import "@preview/numbly:0.1.0": numbly\n#import "@preview/theorion:0.3.2": *\n#import cosmos.clouds: *\n#show: show-theorion\n\n#show: university-theme.with(\n  aspect-ratio: "16-9",\n  config-common(frozen-counters: (theorem-counter,)),  // freeze theorem counter for animation\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n= Theorems\n\n== Prime numbers\n\n#definition[\n  A natural number is called a #highlight[_prime number_] if it is greater\n  than 1 and cannot be written as the product of two smaller natural numbers.\n]\n#example[\n  The numbers $2$, $3$, and $17$ are prime.\n  @cor_largest_prime shows that this list is not exhaustive!\n]\n\n#pause\n\n#theorem(title: "Euclid")[\n  There are infinitely many primes.\n]\n\n#pagebreak(weak: true)\n\n#proof[\n  Suppose to the contrary that $p_1, p_2, dots, p_n$ is a finite enumeration\n  of all primes. Set $P = p_1 p_2 dots p_n$. Since $P + 1$ is not in our list,\n  it cannot be prime. Thus, some prime factor $p_j$ divides $P + 1$. Since\n  $p_j$ also divides $P$, it must divide the difference $(P + 1) - P = 1$, a\n  contradiction.\n]\n\n#corollary[\n  There is no largest prime number.\n] <cor_largest_prime>\n#corollary[\n  There are infinitely many composite numbers.\n]\n\n#theorem[\n  There are arbitrarily long stretches of composite numbers.\n]\n\n#proof[\n  For any $n > 2$, consider $\n    n! + 2, quad n! + 3, quad ..., quad n! + n\n  $\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/user-attachments/assets/f54dd873-aa20-4703-b83e-8748658b569a",alt:"image"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);