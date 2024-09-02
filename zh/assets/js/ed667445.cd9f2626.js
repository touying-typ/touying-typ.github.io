"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7580],{5799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(5893),i=n(1151);const o={sidebar_position:6},l="\u5168\u5c40\u8bbe\u7f6e",r={id:"global-settings",title:"\u5168\u5c40\u8bbe\u7f6e",description:"\u5168\u5c40\u6837\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.x/global-settings.md",sourceDirName:".",slug:"/global-settings",permalink:"/zh/docs/global-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/global-settings.md",tags:[],version:"0.5.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u9875\u9762\u5e03\u5c40",permalink:"/zh/docs/layout"},next:{title:"\u591a\u6587\u4ef6\u67b6\u6784",permalink:"/zh/docs/multi-file"}},d={},c=[{value:"\u5168\u5c40\u6837\u5f0f",id:"\u5168\u5c40\u6837\u5f0f",level:2},{value:"\u5168\u5c40\u4fe1\u606f",id:"\u5168\u5c40\u4fe1\u606f",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u5168\u5c40\u8bbe\u7f6e",children:"\u5168\u5c40\u8bbe\u7f6e"}),"\n",(0,s.jsx)(t.h2,{id:"\u5168\u5c40\u6837\u5f0f",children:"\u5168\u5c40\u6837\u5f0f"}),"\n",(0,s.jsxs)(t.p,{children:["\u5bf9 Touying \u800c\u8a00\uff0c\u5168\u5c40\u6837\u5f0f\u5373\u4e3a\u9700\u8981\u5e94\u7528\u5230\u6240\u6709\u5730\u65b9\u7684 set rules \u6216 show rules\uff0c\u4f8b\u5982 ",(0,s.jsx)(t.code,{children:"#set text(size: 20pt)"}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5176\u4e2d\uff0cTouying \u7684\u4e3b\u9898\u4f1a\u5c01\u88c5\u4e00\u4e9b\u81ea\u5df1\u7684\u5168\u5c40\u6837\u5f0f\uff0c\u4ed6\u4eec\u4f1a\u88ab\u653e\u5728 ",(0,s.jsx)(t.code,{children:"#self.methods.init"})," \u4e2d\uff0c\u4f8b\u5982 simple \u4e3b\u9898\u5c31\u5c01\u88c5\u4e86"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typst",children:"config-methods(\n  init: (self: none, body) => {\n    set text(fill: self.colors.neutral-darkest, size: 25pt)\n    show footnote.entry: set text(size: .6em)\n    show strong: self.methods.alert.with(self: self)\n    show heading.where(level: self.slide-level + 1): set text(1.4em)\n\n    body\n  },\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u5e76\u975e\u4e00\u4e2a\u4e3b\u9898\u5236\u4f5c\u8005\uff0c\u800c\u53ea\u662f\u60f3\u7ed9\u4f60\u7684 slides \u6dfb\u52a0\u4e00\u4e9b\u81ea\u5df1\u7684\u5168\u5c40\u6837\u5f0f\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u5b83\u4eec\u653e\u5728 ",(0,s.jsx)(t.code,{children:"#show: xxx-theme.with()"})," \u4e4b\u524d\u6216\u4e4b\u540e\u3002\u4f8b\u5982 metropolis \u4e3b\u9898\u5c31\u63a8\u8350\u4f60\u81ea\u884c\u52a0\u5165\u4ee5\u4e0b\u5168\u5c40\u6837\u5f0f\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typst",children:'#set text(font: "Fira Sans", weight: "light", size: 20pt)\n#show math.equation: set text(font: "Fira Math")\n#set strong(delta: 100)\n#set par(justify: true)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u5168\u5c40\u4fe1\u606f",children:"\u5168\u5c40\u4fe1\u606f"}),"\n",(0,s.jsx)(t.p,{children:"\u5c31\u50cf Beamer \u4e00\u6837\uff0cTouying \u901a\u8fc7\u7edf\u4e00 API \u8bbe\u8ba1\uff0c\u80fd\u591f\u5e2e\u52a9\u60a8\u66f4\u597d\u5730\u7ef4\u62a4\u5168\u5c40\u4fe1\u606f\uff0c\u8ba9\u60a8\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u4e0d\u540c\u7684\u4e3b\u9898\u4e4b\u95f4\u5207\u6362\uff0c\u5168\u5c40\u4fe1\u606f\u5c31\u662f\u4e00\u4e2a\u5f88\u5178\u578b\u7684\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typst",children:"#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5206\u522b\u8bbe\u7f6e slides \u7684\u6807\u9898\u3001\u526f\u6807\u9898\u3001\u4f5c\u8005\u3001\u65e5\u671f\u548c\u673a\u6784\u4fe1\u606f\u3002\u5728\u540e\u7eed\uff0c\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"self.info"})," \u8fd9\u6837\u7684\u65b9\u5f0f\u8bbf\u95ee\u5b83\u4eec\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u4e9b\u4fe1\u606f\u4e00\u822c\u4f1a\u5728\u4e3b\u9898\u7684 ",(0,s.jsx)(t.code,{children:"title-slide"}),"\u3001",(0,s.jsx)(t.code,{children:"header"})," \u548c ",(0,s.jsx)(t.code,{children:"footer"})," \u88ab\u4f7f\u7528\u5230\uff0c\u4f8b\u5982 ",(0,s.jsx)(t.code,{children:'#show: metropolis-theme.with(aspect-ratio: "16-9", footer: self => self.info.institution)'}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5176\u4e2d ",(0,s.jsx)(t.code,{children:"date"})," \u53ef\u4ee5\u63a5\u6536 ",(0,s.jsx)(t.code,{children:"datetime"})," \u683c\u5f0f\u548c ",(0,s.jsx)(t.code,{children:"content"})," \u683c\u5f0f\uff0c\u5e76\u4e14 ",(0,s.jsx)(t.code,{children:"datetime"})," \u683c\u5f0f\u7684\u65e5\u671f\u663e\u793a\u683c\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typc",children:'config-common(datetime-format: "[year]-[month]-[day]")\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u7684\u65b9\u5f0f\u66f4\u6539\u3002"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var s=n(7294);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);