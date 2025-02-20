"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6465],{13418:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(85893),i=n(11151);const o={sidebar_position:2},r="Pympress",a={id:"external/pympress",title:"Pympress",description:"Pympress \u662f\u4e00\u79cd PDF \u6f14\u793a\u5de5\u5177\uff0c\u4e13\u4e3a\u6f14\u793a\u6587\u7a3f\u548c\u516c\u5f00\u6f14\u8bb2\u7b49\u53cc\u5c4f\u8bbe\u7f6e\u800c\u8bbe\u8ba1\u3002\u9ad8\u5ea6\u53ef\u914d\u7f6e\u3001\u529f\u80fd\u9f50\u5168\u4e14\u53ef\u79fb\u690d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.2/external/pympress.md",sourceDirName:"external",slug:"/external/pympress",permalink:"/zh/docs/0.4.2/external/pympress",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/external/pympress.md",tags:[],version:"0.4.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"pdfpc",permalink:"/zh/docs/0.4.2/external/pdfpc"},next:{title:"Typst Preview",permalink:"/zh/docs/0.4.2/external/typst-preview"}},p={},c=[{value:"\u7b14\u8bb0\u652f\u6301",id:"\u7b14\u8bb0\u652f\u6301",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"pympress",children:"Pympress"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/Cimbali/pympress",children:"Pympress"})," \u662f\u4e00\u79cd PDF \u6f14\u793a\u5de5\u5177\uff0c\u4e13\u4e3a\u6f14\u793a\u6587\u7a3f\u548c\u516c\u5f00\u6f14\u8bb2\u7b49\u53cc\u5c4f\u8bbe\u7f6e\u800c\u8bbe\u8ba1\u3002\u9ad8\u5ea6\u53ef\u914d\u7f6e\u3001\u529f\u80fd\u9f50\u5168\u4e14\u53ef\u79fb\u690d\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u7b14\u8bb0\u652f\u6301",children:"\u7b14\u8bb0\u652f\u6301"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.university.register(aspect-ratio: "16-9")\n\n// Set the speaker notes configuration, you can show it by pympress\n#let s = (s.methods.show-notes-on-second-screen)(self: s, right)\n\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Animation\n\n== Simple Animation\n\nWe can use `#pause` to #pause display something later.\n\n#pause\n\nJust like this.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n\n#speaker-note[\n  + This is a speaker note.\n  + You won\'t see it unless you use `#let s = (s.math.show-notes-on-second-screen)(self: s, right)`\n]\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/b43c7f99-c5f9-4084-aa70-c1561e8aafee",alt:"image"})}),"\n",(0,t.jsx)(s.p,{children:"\u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 pympress \u653e\u6620\u4e86\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/afbe17cb-46d4-4507-90e8-959c53de95d5",alt:"image"})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var t=n(67294);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);