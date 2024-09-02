"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4607],{1764:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=i(5893),s=i(1151);const d={sidebar_position:2},r="Fit to height / width",o={id:"utilities/fit-to",title:"Fit to height / width",description:"\u611f\u8c22 ntjess \u7684\u4ee3\u7801\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.1/utilities/fit-to.md",sourceDirName:"utilities",slug:"/utilities/fit-to",permalink:"/zh/docs/0.4.1/utilities/fit-to",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/utilities/fit-to.md",tags:[],version:"0.4.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",permalink:"/zh/docs/0.4.1/utilities/oop"},next:{title:"External Tools",permalink:"/zh/docs/0.4.1/category/external-tools"}},c={},l=[{value:"Fit to height",id:"fit-to-height",level:2},{value:"Fit to width",id:"fit-to-width",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fit-to-height--width",children:"Fit to height / width"}),"\n",(0,n.jsxs)(t.p,{children:["\u611f\u8c22 ",(0,n.jsx)(t.a,{href:"https://github.com/ntjess",children:"ntjess"})," \u7684\u4ee3\u7801\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"fit-to-height",children:"Fit to height"}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u5c06\u56fe\u7247\u5360\u6ee1\u5269\u4f59\u7684 slide \u9ad8\u5ea6\uff0c\u4f60\u53ef\u4ee5\u6765\u8bd5\u8bd5 ",(0,n.jsx)(t.code,{children:"fit-to-height"})," \u51fd\u6570\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#utils.fit-to-height(1fr)[BIG]\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u51fd\u6570\u5b9a\u4e49\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#let fit-to-height(\n  width: none, prescale-width: none, grow: true, shrink: true, height, body\n) = { .. }\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"width"}),": \u5982\u679c\u6307\u5b9a\uff0c\u8fd9\u5c06\u786e\u5b9a\u7f29\u653e\u540e\u5185\u5bb9\u7684\u5bbd\u5ea6\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u7f29\u653e\u7684\u5185\u5bb9\u586b\u5145\u5e7b\u706f\u7247\u5bbd\u5ea6\u7684\u4e00\u534a\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"width: 50%"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"prescale-width"}),": \u6b64\u53c2\u6570\u5141\u8bb8\u60a8\u4f7f Typst \u7684\u5e03\u5c40\u5047\u8bbe\u7ed9\u5b9a\u7684\u5185\u5bb9\u5728\u7f29\u653e\u4e4b\u524d\u8981\u5e03\u5c40\u5728\u4e00\u5b9a\u5bbd\u5ea6\u7684\u5bb9\u5668\u4e2d\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"prescale-width: 200%"})," \u5047\u8bbe\u5e7b\u706f\u7247\u7684\u5bbd\u5ea6\u4e3a\u539f\u6765\u7684\u4e24\u500d\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"grow"}),": \u662f\u5426\u53ef\u6269\u5f20\uff0c\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(t.code,{children:"true"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"shrink"}),": \u662f\u5426\u53ef\u6536\u7f29\uff0c\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(t.code,{children:"true"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"height"}),": \u9700\u8981\u6307\u5b9a\u7684\u9ad8\u5ea6\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"body"}),": \u5177\u4f53\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"fit-to-width",children:"Fit to width"}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u9650\u5236\u6807\u9898\u5bbd\u5ea6\u521a\u597d\u5360\u6ee1 slide \u7684\u5bbd\u5ea6\uff0c\u4f60\u53ef\u4ee5\u6765\u8bd5\u8bd5 ",(0,n.jsx)(t.code,{children:"fit-to-width"})," \u51fd\u6570\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#utils.fit-to-width(1fr)[#lorem(20)]\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u51fd\u6570\u5b9a\u4e49\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#let fit-to-width(grow: true, shrink: true, width, body) = { .. }\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"grow"}),": \u662f\u5426\u53ef\u6269\u5f20\uff0c\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(t.code,{children:"true"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"shrink"}),": \u662f\u5426\u53ef\u6536\u7f29\uff0c\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(t.code,{children:"true"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"width"}),": \u9700\u8981\u6307\u5b9a\u7684\u5bbd\u5ea6\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"body"}),": \u5177\u4f53\u7684\u5185\u5bb9\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var n=i(7294);const s={},d=n.createContext(s);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);