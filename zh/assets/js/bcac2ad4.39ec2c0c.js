"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3748],{951:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var i=n(5893),l=n(1151);const t={sidebar_position:4},d="\u4ee3\u7801\u98ce\u683c",o={id:"code-styles",title:"\u4ee3\u7801\u98ce\u683c",description:"\u7b80\u5355\u98ce\u683c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.3.x/code-styles.md",sourceDirName:".",slug:"/code-styles",permalink:"/touying/zh/docs/0.3.x/code-styles",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.x/code-styles.md",tags:[],version:"0.3.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u8282\u4e0e\u5c0f\u8282",permalink:"/touying/zh/docs/0.3.x/sections"},next:{title:"\u9875\u9762\u5e03\u5c40",permalink:"/touying/zh/docs/0.3.x/layout"}},c={},r=[{value:"\u7b80\u5355\u98ce\u683c",id:"\u7b80\u5355\u98ce\u683c",level:2},{value:"\u5757\u98ce\u683c",id:"\u5757\u98ce\u683c",level:2},{value:"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e",id:"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e",level:2}];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u4ee3\u7801\u98ce\u683c",children:"\u4ee3\u7801\u98ce\u683c"}),"\n",(0,i.jsx)(s.h2,{id:"\u7b80\u5355\u98ce\u683c",children:"\u7b80\u5355\u98ce\u683c"}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u6211\u4eec\u53ea\u662f\u9700\u8981\u7b80\u5355\u4f7f\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u6807\u9898\u4e0b\u8f93\u5165\u5185\u5bb9\uff0c\u5c31\u50cf\u662f\u5728\u7f16\u5199\u6b63\u5e38 Typst \u6587\u6863\u4e00\u6837\u3002\u8fd9\u91cc\u7684\u6807\u9898\u6709\u7740\u5206\u5272\u9875\u9762\u7684\u4f5c\u7528\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u80fd\u6b63\u5e38\u5730\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#pause"})," \u7b49\u547d\u4ee4\u5b9e\u73b0\u52a8\u753b\u6548\u679c\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f5bdbf8f-7bf9-45fd-9923-0fa5d66450b2",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5e76\u4e14\u4f60\u53ef\u4ee5\u4f7f\u7528\u7a7a\u6807\u9898 ",(0,i.jsx)(s.code,{children:"=="})," \u521b\u5efa\u4e00\u4e2a\u65b0\u9875\uff0c\u8fd9\u4e2a\u6280\u5de7\u4e5f\u6709\u52a9\u4e8e\u6e05\u9664\u4e0a\u4e00\u4e2a\u6807\u9898\u7684\u7ee7\u7eed\u5e94\u7528\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["PS\uff1a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#slides-end"})," \u8bb0\u53f7\u6765\u6807\u5fd7 ",(0,i.jsx)(s.code,{children:"#show: slides"})," \u7684\u7ed3\u675f\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u5757\u98ce\u683c",children:"\u5757\u98ce\u683c"}),"\n",(0,i.jsxs)(s.p,{children:["\u5f88\u591a\u65f6\u5019\uff0c\u4ec5\u4ec5\u4f7f\u7528\u7b80\u5355\u98ce\u683c\u5e76\u4e0d\u80fd\u5b9e\u73b0\u6211\u4eec\u9700\u8981\u7684\u6240\u6709\u529f\u80fd\uff0c\u4e3a\u4e86\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u548c\u66f4\u6e05\u6670\u7684\u7ed3\u6784\uff0c\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#slide[...]"})," \u5f62\u5f0f\u7684\u5757\u98ce\u683c\uff0c\u5176\u4e2d ",(0,i.jsx)(s.code,{children:"#slide"})," \u51fd\u6570\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#let (slide,) = utils.slides(s)"})," \u8bed\u6cd5\u8fdb\u884c\u89e3\u5305\uff0c\u624d\u80fd\u6b63\u5e38\u5728 ",(0,i.jsx)(s.code,{children:"#show: slides"})," \u540e\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u4f8b\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\u5c31\u53ef\u4ee5\u6539\u9020\u6210"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\n#slide[\n  Hello, Touying!\n\n  #pause\n\n  Hello, Typst!\n]\n'})}),"\n",(0,i.jsx)(s.p,{children:"\u8fd9\u6837\u505a\u7684\u597d\u5904\u6709\u5f88\u591a\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\u5f88\u591a\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u53ea\u662f\u9700\u8981\u9ed8\u8ba4\u7684 ",(0,i.jsx)(s.code,{children:"#slide[...]"}),"\uff0c\u8fd8\u9700\u8981 ",(0,i.jsx)(s.code,{children:"#focus-slide[...]"})," \u8fd9\u4e9b\u7279\u6b8a\u7684 ",(0,i.jsx)(s.code,{children:"slide"})," \u51fd\u6570\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u4e0d\u540c\u4e3b\u9898\u7684 ",(0,i.jsx)(s.code,{children:"#slide[...]"})," \u51fd\u6570\u53ef\u80fd\u6709\u6bd4\u9ed8\u8ba4\u66f4\u591a\u7684\u53c2\u6570\uff0c\u4f8b\u5982 university \u4e3b\u9898\u7684 ",(0,i.jsx)(s.code,{children:"#slide[...]"})," \u51fd\u6570\u5c31\u4f1a\u6709\u7740 ",(0,i.jsx)(s.code,{children:"subtitle"})," \u53c2\u6570\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u53ea\u6709 ",(0,i.jsx)(s.code,{children:"slide"})," \u51fd\u6570\u624d\u53ef\u4ee5\u901a\u8fc7\u56de\u8c03\u98ce\u683c\u7684\u5185\u5bb9\u5757\u6765\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#only"})," \u548c ",(0,i.jsx)(s.code,{children:"#uncover"})," \u51fd\u6570\u5b9e\u73b0\u590d\u6742\u7684\u52a8\u753b\u6548\u679c\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u80fd\u6709\u7740\u66f4\u6e05\u6670\u7684\u7ed3\u6784\uff0c\u901a\u8fc7\u8fa8\u522b ",(0,i.jsx)(s.code,{children:"#slide[...]"})," \u5757\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5206\u8fa8\u51fa slides \u7684\u5177\u4f53\u5206\u9875\u6548\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e",children:"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e"}),"\n",(0,i.jsxs)(s.p,{children:["\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\uff0c\u5728\u4f7f\u7528 simple \u4e3b\u9898\u65f6\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u7ea7\u6807\u9898\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a section slide\uff0c\u8fd9\u662f\u56e0\u4e3a simple \u4e3b\u9898\u6ce8\u518c\u4e86\u4e00\u4e2a ",(0,i.jsx)(s.code,{children:"s.methods.touying-new-section-slide"})," \u65b9\u6cd5\uff0c\u56e0\u6b64 touying \u4f1a\u9ed8\u8ba4\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u5982\u679c\u6211\u4eec\u4e0d\u5e0c\u671b\u5b83\u81ea\u52a8\u521b\u5efa\u8fd9\u6837\u4e00\u4e2a section slide\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u65b9\u6cd5\u5220\u9664\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#(s.methods.touying-new-section-slide = none)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/17a89a59-9491-4e1f-95c0-09a22105ab35",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:"\u5982\u4f60\u6240\u89c1\uff0c\u8fd9\u6837\u5c31\u53ea\u4f1a\u5269\u4e0b\u4e24\u9875\uff0c\u800c\u9ed8\u8ba4\u7684 section slide \u5c31\u4f1a\u6d88\u5931\u4e86\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u540c\u7406\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u6ce8\u518c\u4e00\u4e2a\u65b0\u7684 section slide\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#(s.methods.touying-new-section-slide = (self: none, section, ..args) => {\n  self = utils.empty-page(self)\n  (s.methods.touying-slide)(self: self, section: section, {\n    set align(center + horizon)\n    set text(size: 2em, fill: s.colors.primary, style: "italic", weight: "bold")\n    section\n  }, ..args)\n})\n#let (init, slides, touying-outline) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/5305efda-0cd4-42eb-9f2e-89abc30b6ca2",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["\u540c\u6837\u5730\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4fee\u6539 ",(0,i.jsx)(s.code,{children:"s.methods.touying-new-subsection-slide"})," \u6765\u5bf9 ",(0,i.jsx)(s.code,{children:"subsection"})," \u505a\u540c\u6837\u7684\u4e8b\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5b9e\u9645\u4e0a\uff0c\u9664\u4e86 ",(0,i.jsx)(s.code,{children:"s.methods.touying-new-section-slide"}),"\uff0c\u53e6\u4e00\u4e2a\u7279\u6b8a\u7684 ",(0,i.jsx)(s.code,{children:"slide"})," \u51fd\u6570\u5c31\u662f ",(0,i.jsx)(s.code,{children:"s.methods.slide"})," \u51fd\u6570\uff0c\u5b83\u4f1a\u5728\u7b80\u5355\u98ce\u683c\u91cc\u6ca1\u6709\u663e\u793a\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#slide[...]"})," \u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u88ab\u8c03\u7528\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u540c\u65f6\uff0c\u7531\u4e8e ",(0,i.jsx)(s.code,{children:"#slide[...]"})," \u88ab\u6ce8\u518c\u5728\u4e86 ",(0,i.jsx)(s.code,{children:'s.slides = ("slide",)'})," \u91cc\uff0c\u56e0\u6b64 ",(0,i.jsx)(s.code,{children:"section"}),"\uff0c",(0,i.jsx)(s.code,{children:"subsection"})," \u548c ",(0,i.jsx)(s.code,{children:"title"})," \u53c2\u6570\u4f1a\u88ab\u81ea\u52a8\u4f20\u5165\uff0c\u800c\u5176\u4ed6\u7684\u5982 ",(0,i.jsx)(s.code,{children:"#focus-slide[...]"})," \u5219\u4e0d\u4f1a\u81ea\u52a8\u4f20\u5165\u8fd9\u4e09\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,i.jsxs)(s.admonition,{title:"\u539f\u7406",type:"tip",children:[(0,i.jsxs)(s.p,{children:["\u5b9e\u9645\u4e0a\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"#show: slides"})," \u548c ",(0,i.jsx)(s.code,{children:"utils.slides(s)"}),"\uff0c\u800c\u662f\u53ea\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"utils.methods(s)"}),"\uff0c\u4f8b\u5982"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#let (init, touying-outline, slide) = utils.methods(s)\n#show: init\n\n#slide(section: [Title], title: [First Slide])[\n  Hello, Touying!\n\n  #pause\n\n  Hello, Typst!\n]\n'})}),(0,i.jsxs)(s.p,{children:["\u8fd9\u65f6\u5019\u9700\u8981\u624b\u52a8\u4f20\u5165 ",(0,i.jsx)(s.code,{children:"section"}),"\u3001",(0,i.jsx)(s.code,{children:"subsection"})," \u548c ",(0,i.jsx)(s.code,{children:"title"}),"\uff0c\u4f46\u662f\u4f1a\u6709\u66f4\u597d\u7684\u6027\u80fd\uff0c\u9002\u5408\u9700\u8981\u66f4\u5feb\u7684\u6027\u80fd\u7684\u60c5\u51b5\uff0c\u4f8b\u5982\u8d85\u8fc7\u6570\u5341\u6570\u767e\u9875\u7684\u60c5\u5f62\u3002"]})]})]})}function u(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>d});var i=n(7294);const l={},t=i.createContext(l);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);