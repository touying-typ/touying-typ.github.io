"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1250],{7619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(5893),s=n(1151);const o={sidebar_position:2},r="MiTeX",a={id:"integration/mitex",title:"MiTeX",description:"\u5728\u521b\u5efa slides \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f80\u5f80\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a LaTeX \u6570\u5b66\u516c\u5f0f\uff0c\u53ea\u662f\u60f3\u8d34\u5230 slides \u7684\u91cc\u9762\uff0c\u800c\u4e0d\u60f3\u628a\u5b83\u8f6c\u5199\u6210 Typst \u6570\u5b66\u516c\u5f0f\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u7528 MiTeX \u4e86\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.2/integration/mitex.md",sourceDirName:"integration",slug:"/integration/mitex",permalink:"/zh/docs/integration/mitex",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/integration/mitex.md",tags:[],version:"0.4.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pinit",permalink:"/zh/docs/integration/pinit"},next:{title:"CeTZ",permalink:"/zh/docs/integration/cetz"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mitex",children:"MiTeX"}),"\n",(0,i.jsxs)(t.p,{children:["\u5728\u521b\u5efa slides \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f80\u5f80\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a LaTeX \u6570\u5b66\u516c\u5f0f\uff0c\u53ea\u662f\u60f3\u8d34\u5230 slides \u7684\u91cc\u9762\uff0c\u800c\u4e0d\u60f3\u628a\u5b83\u8f6c\u5199\u6210 Typst \u6570\u5b66\u516c\u5f0f\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u7528 ",(0,i.jsx)(t.a,{href:"https://github.com/mitex-rs/mitex",children:"MiTeX"})," \u4e86\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:'#import "@preview/mitex:0.2.3": *\n\nWrite inline equations like #mi("x") or #mi[y].\n\nAlso block equations (this case is from #text(blue.lighten(20%), link("https://katex.org/")[katex.org])):\n\n#mitex(`\n  \\newcommand{\\f}[2]{#1f(#2)}\n  \\f\\relax{x} = \\int_{-\\infty}^\\infty\n    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n    \\,d\\xi\n`)\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/mitex-rs/mitex/assets/34951714/c425b2ae-b50b-46a8-a451-4d9e8e70626b",alt:"image"})}),"\n",(0,i.jsxs)(t.p,{children:["Touying \u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,i.jsx)(t.code,{children:"touying-mitex"})," \u51fd\u6570\uff0c\u7528\u6cd5\u5982"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:"#touying-mitex(mitex, `\n  f(x) &= \\pause x^2 + 2x + 1  \\\\\n      &= \\pause (x + 1)^2  \\\\\n`)\n"})})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);