"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[410],{91448:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=t(85893),r=t(11151);const i={sidebar_position:6},s="Theorion",a={id:"integration/theorion",title:"Theorion",description:'Touying \u80fd\u591f\u4e0e Theorion \u5305\u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Theorion \u5305\u3002\u5176\u4e2d\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 #set heading(numbering: "1.1") \u4e3a sections \u548c subsections \u8bbe\u7f6e numbering\u3002',source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integration/theorion.md",sourceDirName:"integration",slug:"/integration/theorion",permalink:"/zh/docs/next/integration/theorion",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/integration/theorion.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Codly",permalink:"/zh/docs/next/integration/codly"},next:{title:"Themes",permalink:"/zh/docs/next/category/themes"}},c={},h=[];function u(n){const e={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"theorion",children:"Theorion"}),"\n",(0,o.jsxs)(e.p,{children:["Touying \u80fd\u591f\u4e0e ",(0,o.jsx)(e.a,{href:"https://github.com/OrangeX4/typst-theorion",children:"Theorion"})," \u5305\u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,o.jsx)(e.a,{href:"https://github.com/OrangeX4/typst-theorion",children:"Theorion"})," \u5305\u3002\u5176\u4e2d\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:'#set heading(numbering: "1.1")'})," \u4e3a sections \u548c subsections \u8bbe\u7f6e numbering\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.strong,{children:["\u6ce8\u610f\uff1a\u4e3a\u4e86\u8ba9 ",(0,o.jsx)(e.code,{children:"#pause"})," \u7b49\u52a8\u753b\u547d\u4ee4\u4e0e theorion \u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"config-common(frozen-counters: (theorem-counter,))"})," \u6765\u7ed1\u5b9a\u9700\u8981\u51bb\u7ed3\u7684 counter\u3002"]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typst",children:'#import "@preview/touying:0.6.1": *\n#import themes.university: *\n#import "@preview/numbly:0.1.0": numbly\n#import "@preview/theorion:0.3.2": *\n#import cosmos.clouds: *\n#show: show-theorion\n\n#show: university-theme.with(\n  aspect-ratio: "16-9",\n  config-common(frozen-counters: (theorem-counter,)),  // freeze theorem counter for animation\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n= Theorems\n\n== Prime numbers\n\n#definition[\n  A natural number is called a #highlight[_prime number_] if it is greater\n  than 1 and cannot be written as the product of two smaller natural numbers.\n]\n#example[\n  The numbers $2$, $3$, and $17$ are prime.\n  @cor_largest_prime shows that this list is not exhaustive!\n]\n\n#pause\n\n#theorem(title: "Euclid")[\n  There are infinitely many primes.\n]\n\n#pagebreak(weak: true)\n\n#proof[\n  Suppose to the contrary that $p_1, p_2, dots, p_n$ is a finite enumeration\n  of all primes. Set $P = p_1 p_2 dots p_n$. Since $P + 1$ is not in our list,\n  it cannot be prime. Thus, some prime factor $p_j$ divides $P + 1$. Since\n  $p_j$ also divides $P$, it must divide the difference $(P + 1) - P = 1$, a\n  contradiction.\n]\n\n#corollary[\n  There is no largest prime number.\n] <cor_largest_prime>\n#corollary[\n  There are infinitely many composite numbers.\n]\n\n#theorem[\n  There are arbitrarily long stretches of composite numbers.\n]\n\n#proof[\n  For any $n > 2$, consider $\n    n! + 2, quad n! + 3, quad ..., quad n! + n\n  $\n]\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/user-attachments/assets/f54dd873-aa20-4703-b83e-8748658b569a",alt:"image"})})]})}function m(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);