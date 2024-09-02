"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2875],{5804:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var s=t(5893),i=t(1151);const o={sidebar_position:7},l="\u591a\u6587\u4ef6\u67b6\u6784",c={id:"multi-file",title:"\u591a\u6587\u4ef6\u67b6\u6784",description:"Touying \u6709\u7740\u5982\u540c\u539f\u751f Typst \u6587\u6863\u4e00\u822c\u7b80\u6d01\u7684\u8bed\u6cd5\uff0c\u4ee5\u53ca\u7e41\u591a\u7684\u53ef\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879\uff0c\u5374\u4e5f\u4ecd\u80fd\u591f\u7ef4\u6301\u7740\u5b9e\u65f6\u7684\u589e\u91cf\u7f16\u8bd1\u6027\u80fd\uff0c\u56e0\u6b64\u5f88\u9002\u5408\u7528\u6765\u7f16\u5199\u5927\u578b slides\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/multi-file.md",sourceDirName:".",slug:"/multi-file",permalink:"/touying/zh/docs/next/multi-file",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/multi-file.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5168\u5c40\u8bbe\u7f6e",permalink:"/touying/zh/docs/next/global-settings"},next:{title:"Dynamic Slides",permalink:"/touying/zh/docs/next/category/dynamic-slides"}},d={},r=[{value:"\u914d\u7f6e\u548c\u5185\u5bb9\u5206\u79bb",id:"\u914d\u7f6e\u548c\u5185\u5bb9\u5206\u79bb",level:2},{value:"\u591a\u7ae0\u8282",id:"\u591a\u7ae0\u8282",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u591a\u6587\u4ef6\u67b6\u6784",children:"\u591a\u6587\u4ef6\u67b6\u6784"}),"\n",(0,s.jsx)(e.p,{children:"Touying \u6709\u7740\u5982\u540c\u539f\u751f Typst \u6587\u6863\u4e00\u822c\u7b80\u6d01\u7684\u8bed\u6cd5\uff0c\u4ee5\u53ca\u7e41\u591a\u7684\u53ef\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879\uff0c\u5374\u4e5f\u4ecd\u80fd\u591f\u7ef4\u6301\u7740\u5b9e\u65f6\u7684\u589e\u91cf\u7f16\u8bd1\u6027\u80fd\uff0c\u56e0\u6b64\u5f88\u9002\u5408\u7528\u6765\u7f16\u5199\u5927\u578b slides\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u5199\u4e00\u4e2a\u8f83\u5927\u7684 slides\uff0c\u4f8b\u5982\u4e00\u4e2a\u51e0\u5341\u9875\u51e0\u767e\u9875\u7684\u8bfe\u7a0b\u8bb2\u4e49\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0b Touying \u7684\u591a\u6587\u4ef6\u67b6\u6784\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u914d\u7f6e\u548c\u5185\u5bb9\u5206\u79bb",children:"\u914d\u7f6e\u548c\u5185\u5bb9\u5206\u79bb"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e00\u4e2a\u6700\u7b80\u5355\u7684 Touying \u591a\u6587\u4ef6\u67b6\u6784\u5305\u62ec\u4e09\u4e2a\u6587\u4ef6\uff1a\u5168\u5c40\u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(e.code,{children:"globals.typ"}),"\u3001\u4e3b\u5165\u53e3\u6587\u4ef6 ",(0,s.jsx)(e.code,{children:"main.typ"})," \u548c\u5b58\u653e\u5185\u5bb9\u7684 ",(0,s.jsx)(e.code,{children:"content.typ"})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5206\u6210\u4e09\u4e2a\u6587\u4ef6\u662f\u7531\u4e8e\u8981\u8ba9 ",(0,s.jsx)(e.code,{children:"main.typ"})," \u548c ",(0,s.jsx)(e.code,{children:"content.typ"})," \u5747\u53ef\u4ee5\u5f15\u5165 ",(0,s.jsx)(e.code,{children:"globals.typ"}),"\uff0c\u4ece\u800c\u907f\u514d\u5faa\u73af\u5f15\u7528\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"globals.typ"})," \u53ef\u4ee5\u7528\u4e8e\u5b58\u653e\u4e00\u4e9b\u5168\u5c40\u7684\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u4ee5\u53ca\u5bf9 Touying \u4e3b\u9898\u8fdb\u884c\u521d\u59cb\u5316\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typst",children:'// globals.typ\n#import "@preview/touying:0.4.2": *\n\n#let s = themes.university.register(aspect-ratio: "16-9")\n#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#let (slide, empty-slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n\n// as well as some utility functions\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"main.typ"})," \u4f5c\u4e3a\u9879\u76ee\u7684\u4e3b\u5165\u53e3\uff0c\u901a\u8fc7\u5bfc\u5165 ",(0,s.jsx)(e.code,{children:"globals.typ"})," \u5e94\u7528 show rules\uff0c\u4ee5\u53ca\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"#include"})," \u7f6e\u5165 ",(0,s.jsx)(e.code,{children:"content.typ"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typst",children:'// main.typ\n#import "/globals.typ": *\n\n#show: init\n#show strong: alert\n#show: slides\n\n#include "content.typ"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"content.typ"})," \u4fbf\u662f\u7528\u4e8e\u4e66\u5199\u5177\u4f53\u5185\u5bb9\u7684\u6587\u4ef6\u4e86\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typst",children:'// content.typ\n#import "/globals.typ": *\n\n= The Section\n\n== Slide Title\n\nHello, Touying!\n\n#focus-slide[\n  Focus on me.\n]\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u591a\u7ae0\u8282",children:"\u591a\u7ae0\u8282"}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u5b9e\u73b0\u591a\u7ae0\u8282\u4e5f\u5341\u5206\u7b80\u5355\uff0c\u53ea\u9700\u8981\u65b0\u5efa\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"sections"})," \u76ee\u5f55\uff0c\u5e76\u5c06\u4e0a\u9762\u7684 ",(0,s.jsx)(e.code,{children:"content.typ"})," \u6587\u4ef6\u79fb\u52a8\u81f3 ",(0,s.jsx)(e.code,{children:"sections.typ"})," \u76ee\u5f55\u5373\u53ef\uff0c\u4f8b\u5982"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typst",children:'// main.typ\n#import "/globals.typ": *\n\n#show: init\n#show strong: alert\n#show: slides\n\n#include "sections/content.typ"\n// #include "sections/another-section.typ"\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u548c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typst",children:'// sections/content.typ\n#import "/globals.typ": *\n\n= The Section\n\n== Slide Title\n\nHello, Touying!\n\n#focus-slide[\n  Focus on me.\n]\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\uff0c\u60a8\u5c31\u638c\u63e1\u4e86\u5982\u4f55\u4f7f\u7528 Touying \u5b9e\u73b0\u5927\u578b slides \u7684\u591a\u6587\u4ef6\u67b6\u6784\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>l});var s=t(7294);const i={},o=s.createContext(i);function l(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);