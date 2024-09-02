"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7828],{3304:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=n(5893),t=n(1151);const o={sidebar_position:4},l="\u4ee3\u7801\u98ce\u683c",d={id:"style",title:"\u4ee3\u7801\u98ce\u683c",description:"show-slides \u98ce\u683c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.2.x/style.md",sourceDirName:".",slug:"/style",permalink:"/zh/docs/0.2.x/style",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.2.x/style.md",tags:[],version:"0.2.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6392\u7bc7\u5e03\u5c40",permalink:"/zh/docs/0.2.x/layout"},next:{title:"Dynamic Slides",permalink:"/zh/docs/0.2.x/category/dynamic-slides"}},c={},r=[{value:"show-slides \u98ce\u683c",id:"show-slides-\u98ce\u683c",level:2},{value:"slide-block \u98ce\u683c",id:"slide-block-\u98ce\u683c",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u4ee3\u7801\u98ce\u683c",children:"\u4ee3\u7801\u98ce\u683c"}),"\n",(0,i.jsx)(s.h2,{id:"show-slides-\u98ce\u683c",children:"show-slides \u98ce\u683c"}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u6211\u4eec\u53ea\u662f\u9700\u8981\u7b80\u5355\u4f7f\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(s.code,{children:"#show: slides"})," \u5b9e\u73b0\u66f4\u7b80\u6d01\u7684\u8bed\u6cd5\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u4f46\u662f\u8fd9\u6837\u505a\u4e5f\u6709\u5bf9\u5e94\u7684\u5f0a\u7aef\uff1a\u7b2c\u4e00\u4e2a\u5f0a\u7aef\u662f\u8fd9\u79cd\u65b9\u5f0f\u53ef\u80fd\u4f1a\u6781\u5927\u5730\u5f71\u54cd\u6587\u6863\u6e32\u67d3\u6027\u80fd\uff0c\u7b2c\u4e8c\u4e2a\u5f0a\u7aef\u662f\u540e\u7eed\u4e0d\u80fd\u76f4\u63a5\u52a0\u5165 ",(0,i.jsx)(s.code,{children:"#slide(..)"}),"\uff0c\u800c\u662f\u9700\u8981\u624b\u52a8\u6807\u8bb0 ",(0,i.jsx)(s.code,{children:"#slides-end"}),"\uff0c\u4ee5\u53ca\u6700\u5927\u7684\u5f0a\u7aef\u662f\u5b9e\u73b0\u4e0d\u4e86\u590d\u6742\u7684\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let (init, slide, slides) = utils.methods(s)\n#show: init\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n\n#slides-end\n\n#slide[\n  A new slide.\n]\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/db2a1b60-bc56-4fa9-a317-ee9ecc6f3895",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5e76\u4e14\u4f60\u53ef\u4ee5\u4f7f\u7528\u7a7a\u6807\u9898 ",(0,i.jsx)(s.code,{children:"=="})," \u521b\u5efa\u4e00\u4e2a\u65b0\u9875\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"slide-block-\u98ce\u683c",children:"slide-block \u98ce\u683c"}),"\n",(0,i.jsx)(s.p,{children:"\u4e3a\u4e86\u66f4\u4f18\u79c0\u7684\u6027\u80fd\u548c\u66f4\u5f3a\u5927\u7684\u80fd\u529b\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u6211\u4eec\u8fd8\u662f\u9700\u8981\u4f7f\u7528"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:"#slide[\n  A new slide.\n]\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u8fd9\u6837\u7684\u4ee3\u7801\u98ce\u683c\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>l});var i=n(7294);const t={},o=i.createContext(t);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);