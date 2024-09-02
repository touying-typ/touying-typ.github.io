"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9095],{6917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(5893),s=n(1151);const a={sidebar_position:2},o="MiTeX",r={id:"integration/mitex",title:"MiTeX",description:"During the process of creating slides, we often already have a LaTeX math equation that we simply want to paste into the slides without transcribing it into a Typst math equation. In such cases, we can use MiTeX.",source:"@site/docs/integration/mitex.md",sourceDirName:"integration",slug:"/integration/mitex",permalink:"/docs/next/integration/mitex",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/integration/mitex.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pinit",permalink:"/docs/next/integration/pinit"},next:{title:"CeTZ",permalink:"/docs/next/integration/cetz"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mitex",children:"MiTeX"}),"\n",(0,i.jsxs)(t.p,{children:["During the process of creating slides, we often already have a LaTeX math equation that we simply want to paste into the slides without transcribing it into a Typst math equation. In such cases, we can use ",(0,i.jsx)(t.a,{href:"https://github.com/mitex-rs/mitex",children:"MiTeX"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:'#import "@preview/mitex:0.2.3": *\n\nWrite inline equations like #mi("x") or #mi[y].\n\nAlso block equations (this case is from #text(blue.lighten(20%), link("https://katex.org/")[katex.org])):\n\n#mitex(`\n  \\newcommand{\\f}[2]{#1f(#2)}\n  \\f\\relax{x} = \\int_{-\\infty}^\\infty\n    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n    \\,d\\xi\n`)\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/mitex-rs/mitex/assets/34951714/c425b2ae-b50b-46a8-a451-4d9e8e70626b",alt:"image"})}),"\n",(0,i.jsxs)(t.p,{children:["Touying also provides a ",(0,i.jsx)(t.code,{children:"touying-mitex"})," function, which can be used for example"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:"#touying-mitex(mitex, `\n  f(x) &= \\pause x^2 + 2x + 1  \\\\\n      &= \\pause (x + 1)^2  \\\\\n`)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(7294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);