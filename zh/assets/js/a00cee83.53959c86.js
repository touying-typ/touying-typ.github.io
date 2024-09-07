"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1349],{8321:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(5893),i=s(1151);const r={sidebar_position:6},l="Stargazer \u4e3b\u9898",o={id:"themes/stargazer",title:"Stargazer \u4e3b\u9898",description:"image",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.x/themes/stargazer.md",sourceDirName:"themes",slug:"/themes/stargazer",permalink:"/zh/docs/themes/stargazer",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/themes/stargazer.md",tags:[],version:"0.5.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Aqua \u4e3b\u9898",permalink:"/zh/docs/themes/aqua"},next:{title:"\u5b9a\u5236\u4e3b\u9898",permalink:"/zh/docs/themes/custom"}},c={},a=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u989c\u8272\u4e3b\u9898",id:"\u989c\u8272\u4e3b\u9898",level:2},{value:"slide \u51fd\u6570\u65cf",id:"slide-\u51fd\u6570\u65cf",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"stargazer-\u4e3b\u9898",children:"Stargazer \u4e3b\u9898"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/4950008f-ac64-47ab-a7ca-cdf15361ba0f",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4e3b\u9898\u539f\u672c\u6765\u81ea ",(0,t.jsx)(n.a,{href:"https://github.com/Coekjan/",children:"Coekjan"})," \u521b\u4f5c\u7684 ",(0,t.jsx)(n.a,{href:"https://github.com/Coekjan/touying-buaa",children:"touying-buaa"})," \u4e3b\u9898\uff0c\u7f8e\u89c2\u5927\u65b9\uff0c\u5f88\u9002\u5408\u65e5\u5e38\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u521d\u59cb\u5316\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.2": *\n#import themes.stargazer: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: stargazer-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Stargazer in Touying: Customize Your Slide Title Here],\n    subtitle: [Customize Your Slide Subtitle Here],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n\n#outline-slide()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"stargazer-theme"})," \u63a5\u6536\u53c2\u6570:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aspect-ratio"}),': \u5e7b\u706f\u7247\u7684\u957f\u5bbd\u6bd4\u4e3a "16-9" \u6216 "4-3"\uff0c\u9ed8\u8ba4\u4e3a "16-9"\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"align"}),": \u5e7b\u706f\u7247\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"horizon"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"alpha"}),": \u5e7b\u706f\u7247\u7684\u900f\u660e\u5ea6\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"20%"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"title"}),": \u663e\u793a\u5728\u9875\u7709\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"utils.display-current-heading()"}),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u5f62\u5982 ",(0,t.jsx)(n.code,{children:"self => self.info.title"})," \u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"progress-bar"}),": \u662f\u5426\u663e\u793a slide \u5e95\u90e8\u7684\u8fdb\u5ea6\u6761\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-columns"}),": \u5e95\u90e8\u4e09\u680f Footer \u7684\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"(25%, 25%, 1fr, 5em)"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-a"}),": \u7b2c\u4e00\u680f\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"self => self.info.author"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-b"}),": \u7b2c\u4e8c\u680f\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"self => utils.display-info-date(self)"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-c"}),": \u7b2c\u4e09\u680f\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"self => if self.info.short-title == auto { self.info.title } else { self.info.short-title }"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-d"}),": \u7b2c\u56db\u680f\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:'context utils.slide-counter.display() + " / " + utils.last-slide-number'}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u989c\u8272\u4e3b\u9898",children:"\u989c\u8272\u4e3b\u9898"}),"\n",(0,t.jsx)(n.p,{children:"Stargazer \u9ed8\u8ba4\u4f7f\u7528\u4e86"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typc",children:'config-colors(\n  primary: rgb("#005bac"),\n  primary-dark: rgb("#004078"),\n  secondary: rgb("#ffffff"),\n  tertiary: rgb("#005bac"),\n  neutral-lightest: rgb("#ffffff"),\n  neutral-darkest: rgb("#000000"),\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u989c\u8272\u4e3b\u9898\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"config-colors()"})," \u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"slide-\u51fd\u6570\u65cf",children:"slide \u51fd\u6570\u65cf"}),"\n",(0,t.jsx)(n.p,{children:"Stargazer \u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49 slide \u51fd\u6570\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"title-slide"})," \u4f1a\u8bfb\u53d6 ",(0,t.jsx)(n.code,{children:"self.info"})," \u91cc\u7684\u4fe1\u606f\u7528\u4e8e\u663e\u793a\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e3a\u5176\u4f20\u5165 ",(0,t.jsx)(n.code,{children:"extra"})," \u53c2\u6570\uff0c\u663e\u793a\u989d\u5916\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(\n  config: (:),\n  repeat: auto,\n  setting: body => body,\n  composer: components.side-by-side,\n  // stargazer theme\n  title: auto,\n  footer: auto,\n  align: horizon,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u62e5\u6709\u6807\u9898\u548c\u9875\u811a\u7684\u666e\u901a slide \u51fd\u6570\uff0c\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"title"})," \u9ed8\u8ba4\u4e3a\u5f53\u524d section title\uff0c\u9875\u811a\u4e3a\u60a8\u8bbe\u7f6e\u7684\u9875\u811a\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#outline-slide[\n  ...\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u52a0\u5165\u5927\u7eb2\u9875\u3002"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4e8e\u5f15\u8d77\u89c2\u4f17\u7684\u6ce8\u610f\u529b\u3002\u80cc\u666f\u8272\u4e3a ",(0,t.jsx)(n.code,{children:"self.colors.primary-dark"}),"\u3002"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#new-section-slide(short-title: auto, title)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u7ed9\u5b9a\u6807\u9898\u5f00\u542f\u4e00\u4e2a\u65b0\u7684 section\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.2": *\n#import themes.stargazer: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: stargazer-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Stargazer in Touying: Customize Your Slide Title Here],\n    subtitle: [Customize Your Slide Subtitle Here],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n\n#outline-slide()\n\n= Section A\n\n== Subsection A.1\n\n#tblock(title: [Theorem])[\n  A simple theorem.\n\n  $ x_(n+1) = (x_n + a / x_n) / 2 $\n]\n\n== Subsection A.2\n\nA slide without a title but with *important* information.\n\n= Section B\n\n== Subsection B.1\n\n#lorem(80)\n\n#focus-slide[\n  Wake up!\n]\n\n== Subsection B.2\n\nWe can use `#pause` to #pause display something later.\n\n#pause\n\nJust like this.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n\n#show: appendix\n\n= Appendix\n\n== Appendix\n\nPlease pay attention to the current slide number.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var t=s(7294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);