"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8694],{5129:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(5893),s=i(1151);const o={sidebar_position:2},a="MiTeX",r={id:"integration/mitex",title:"MiTeX",description:"During the process of creating slides, we often already have a LaTeX math equation that we simply want to paste into the slides without transcribing it into a Typst math equation. In such cases, we can use MiTeX.",source:"@site/versioned_docs/version-0.4.0+/integration/mitex.md",sourceDirName:"integration",slug:"/integration/mitex",permalink:"/docs/0.4.0+/integration/mitex",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.0+/integration/mitex.md",tags:[],version:"0.4.0+",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pinit",permalink:"/docs/0.4.0+/integration/pinit"},next:{title:"CeTZ",permalink:"/docs/0.4.0+/integration/cetz"}},c={},d=[];function m(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"mitex",children:"MiTeX"}),"\n",(0,n.jsxs)(t.p,{children:["During the process of creating slides, we often already have a LaTeX math equation that we simply want to paste into the slides without transcribing it into a Typst math equation. In such cases, we can use ",(0,n.jsx)(t.a,{href:"https://github.com/mitex-rs/mitex",children:"MiTeX"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'#import "@preview/mitex:0.2.3": *\n\nWrite inline equations like #mi("x") or #mi[y].\n\nAlso block equations (this case is from #text(blue.lighten(20%), link("https://katex.org/")[katex.org])):\n\n#mitex(`\n  \\newcommand{\\f}[2]{#1f(#2)}\n  \\f\\relax{x} = \\int_{-\\infty}^\\infty\n    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n    \\,d\\xi\n`)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/mitex-rs/mitex/assets/34951714/c425b2ae-b50b-46a8-a451-4d9e8e70626b",alt:"image"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var n=i(7294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);