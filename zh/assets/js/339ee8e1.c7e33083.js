"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5329],{607:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(5893),i=s(1151);const l={sidebar_position:2},o="Metropolis \u4e3b\u9898",r={id:"themes/metropolis",title:"Metropolis \u4e3b\u9898",description:"image",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/themes/metropolis.md",sourceDirName:"themes",slug:"/themes/metropolis",permalink:"/touying/zh/docs/next/themes/metropolis",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/themes/metropolis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Simple \u4e3b\u9898",permalink:"/touying/zh/docs/next/themes/simple"},next:{title:"Dewdrop \u4e3b\u9898",permalink:"/touying/zh/docs/next/themes/dewdrop"}},d={},c=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u989c\u8272\u4e3b\u9898",id:"\u989c\u8272\u4e3b\u9898",level:2},{value:"slide \u51fd\u6570\u65cf",id:"slide-\u51fd\u6570\u65cf",level:2},{value:"<code>slides</code> \u51fd\u6570",id:"slides-\u51fd\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"metropolis-\u4e3b\u9898",children:"Metropolis \u4e3b\u9898"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/383ceb22-f696-4450-83a6-c0f17e4597e1",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4e3b\u9898\u7684\u7075\u611f\u6765\u81ea Matthias Vogelgesang \u521b\u4f5c\u7684 ",(0,t.jsx)(n.a,{href:"https://github.com/matze/mtheme",children:"Metropolis beamer"})," \u4e3b\u9898\uff0c\u7531 ",(0,t.jsx)(n.a,{href:"https://github.com/Enivex",children:"Enivex"})," \u6539\u9020\u800c\u6765\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u4e3b\u9898\u7f8e\u89c2\u5927\u65b9\uff0c\u5f88\u9002\u5408\u65e5\u5e38\u4f7f\u7528\uff0c\u5e76\u4e14\u4f60\u6700\u597d\u5728\u7535\u8111\u4e0a\u5b89\u88c5 Fira Sans \u548c Fira Math \u5b57\u4f53\uff0c\u4ee5\u53d6\u5f97\u6700\u4f73\u6548\u679c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u521d\u59cb\u5316\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.metropolis.register(aspect-ratio: "16-9", footer: self => self.info.institution)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"register"})," \u63a5\u6536\u53c2\u6570:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aspect-ratio"}),': \u5e7b\u706f\u7247\u7684\u957f\u5bbd\u6bd4\u4e3a "16-9" \u6216 "4-3"\uff0c\u9ed8\u8ba4\u4e3a "16-9"\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"header"}),": \u663e\u793a\u5728\u9875\u7709\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"states.current-section-title"}),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u5f62\u5982 ",(0,t.jsx)(n.code,{children:"self => self.info.title"})," \u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer"}),": \u5c55\u793a\u5728\u9875\u811a\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"[]"}),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u5f62\u5982 ",(0,t.jsx)(n.code,{children:"self => self.info.author"})," \u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-right"}),": \u5c55\u793a\u5728\u9875\u811a\u53f3\u4fa7\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-progress"}),": \u662f\u5426\u663e\u793a slide \u5e95\u90e8\u7684\u8fdb\u5ea6\u6761\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5e76\u4e14 Metropolis \u4e3b\u9898\u4f1a\u63d0\u4f9b\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"#alert[..]"})," \u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"#show strong: alert"})," \u6765\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"*alert text*"})," \u8bed\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u989c\u8272\u4e3b\u9898",children:"\u989c\u8272\u4e3b\u9898"}),"\n",(0,t.jsx)(n.p,{children:"Metropolis \u9ed8\u8ba4\u4f7f\u7528\u4e86"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  neutral-lightest: rgb("#fafafa"),\n  primary-dark: rgb("#23373b"),\n  secondary-light: rgb("#eb811b"),\n  secondary-lighter: rgb("#d6c6b7"),\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u989c\u8272\u4e3b\u9898\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"#let s = (s.methods.colors)(self: s, ..)"})," \u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"slide-\u51fd\u6570\u65cf",children:"slide \u51fd\u6570\u65cf"}),"\n",(0,t.jsx)(n.p,{children:"Metropolis \u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49 slide \u51fd\u6570\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"title-slide"})," \u4f1a\u8bfb\u53d6 ",(0,t.jsx)(n.code,{children:"self.info"})," \u91cc\u7684\u4fe1\u606f\u7528\u4e8e\u663e\u793a\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e3a\u5176\u4f20\u5165 ",(0,t.jsx)(n.code,{children:"extra"})," \u53c2\u6570\uff0c\u663e\u793a\u989d\u5916\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // metropolis theme\n  title: auto,\n  footer: auto,\n  align: horizon,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u62e5\u6709\u6807\u9898\u548c\u9875\u811a\u7684\u666e\u901a slide \u51fd\u6570\uff0c\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"title"})," \u9ed8\u8ba4\u4e3a\u5f53\u524d section title\uff0c\u9875\u811a\u4e3a\u60a8\u8bbe\u7f6e\u7684\u9875\u811a\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4e8e\u5f15\u8d77\u89c2\u4f17\u7684\u6ce8\u610f\u529b\u3002\u80cc\u666f\u8272\u4e3a ",(0,t.jsx)(n.code,{children:"self.colors.primary-dark"}),"\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#new-section-slide(short-title: auto, title)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u7ed9\u5b9a\u6807\u9898\u5f00\u542f\u4e00\u4e2a\u65b0\u7684 section\u3002"}),"\n",(0,t.jsxs)(n.h2,{id:"slides-\u51fd\u6570",children:[(0,t.jsx)(n.code,{children:"slides"})," \u51fd\u6570"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"slides"})," \u51fd\u6570\u62e5\u6709\u53c2\u6570"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"title-slide"}),": \u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"outline-slide"}),": \u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"slide-level"}),": \u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"#show: slides.with(..)"})," \u7684\u65b9\u5f0f\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["PS: \u5176\u4e2d outline title \u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"#(s.outline-title = [Outline])"})," \u7684\u65b9\u5f0f\u4fee\u6539\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u53ca\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"#(s.methods.touying-new-section-slide = none)"})," \u7684\u65b9\u5f0f\u5173\u95ed\u81ea\u52a8\u52a0\u5165 ",(0,t.jsx)(n.code,{children:"new-section-slide"})," \u7684\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.metropolis.register(aspect-ratio: "16-9", footer: self => self.info.institution)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, new-section-slide, focus-slide, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/4ab45ee6-09f7-498b-b349-e889d6e42e3e",alt:"image"})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.metropolis.register(aspect-ratio: "16-9", footer: self => self.info.institution)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#set text(font: "Fira Sans", weight: "light", size: 20pt)\n#show math.equation: set text(font: "Fira Math")\n#set strong(delta: 100)\n#set par(justify: true)\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= First Section\n\n#slide[\n  A slide without a title but with some *important* information.\n]\n\n== A long long long long long long long long long long long long long long long long long long long long long long long long Title\n\n#slide[\n  A slide with equation:\n\n  $ x_(n+1) = (x_n + a/x_n) / 2 $\n\n  #lorem(200)\n]\n\n= Second Section\n\n#focus-slide[\n  Wake up!\n]\n\n== Simple Animation\n\n#slide[\n  A simple #pause dynamic slide with #alert[alert]\n\n  #pause\n  \n  text.\n]\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide, empty-slide) = utils.slides(s)\n\n= Appendix\n\n#slide[\n  Appendix.\n]\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(7294);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);