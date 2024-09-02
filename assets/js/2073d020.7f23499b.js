"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2964],{3701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(5893),c=t(1151);const s={sidebar_position:4},i="Cover Function",r={id:"dynamic/cover",title:"Cover Function",description:"As you already know, both uncover and #pause use the cover function to conceal content that is not visible. So, what exactly is the cover function here?",source:"@site/versioned_docs/version-0.4.2/dynamic/cover.md",sourceDirName:"dynamic",slug:"/dynamic/cover",permalink:"/docs/0.4.2/dynamic/cover",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/dynamic/cover.md",tags:[],version:"0.4.2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Math Equation Animations",permalink:"/docs/0.4.2/dynamic/equation"},next:{title:"Other Animations",permalink:"/docs/0.4.2/dynamic/other"}},a={},d=[{value:"Default Cover Function: <code>hide</code>",id:"default-cover-function-hide",level:2},{value:"Updating the Cover Function",id:"updating-the-cover-function",level:2},{value:"hack: handle enum and list",id:"hack-handle-enum-and-list",level:2},{value:"Semi-Transparent Cover Function",id:"semi-transparent-cover-function",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"cover-function",children:"Cover Function"}),"\n",(0,o.jsxs)(n.p,{children:["As you already know, both ",(0,o.jsx)(n.code,{children:"uncover"})," and ",(0,o.jsx)(n.code,{children:"#pause"})," use the ",(0,o.jsx)(n.code,{children:"cover"})," function to conceal content that is not visible. So, what exactly is the ",(0,o.jsx)(n.code,{children:"cover"})," function here?"]}),"\n",(0,o.jsxs)(n.h2,{id:"default-cover-function-hide",children:["Default Cover Function: ",(0,o.jsx)(n.code,{children:"hide"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"cover"})," function is a method stored in ",(0,o.jsx)(n.code,{children:"s.methods.cover"}),", which is later used by ",(0,o.jsx)(n.code,{children:"uncover"})," and ",(0,o.jsx)(n.code,{children:"#pause"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The default ",(0,o.jsx)(n.code,{children:"cover"})," function is the ",(0,o.jsx)(n.a,{href:"https://typst.app/docs/reference/layout/hide/",children:"hide"})," function. This function makes the internal content invisible without affecting the layout."]}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-cover-function",children:"Updating the Cover Function"}),"\n",(0,o.jsxs)(n.p,{children:["In some cases, you might want to use your own ",(0,o.jsx)(n.code,{children:"cover"})," function. In that case, you can set your own ",(0,o.jsx)(n.code,{children:"cover"})," function using:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typst",children:"let s = (s.methods.update-cover)(self: s, is-method: true, cover-fn)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here, if you set ",(0,o.jsx)(n.code,{children:"is-method: false"}),", Touying will wrap ",(0,o.jsx)(n.code,{children:"cover-fn"})," into a method for you."]}),"\n",(0,o.jsx)(n.h2,{id:"hack-handle-enum-and-list",children:"hack: handle enum and list"}),"\n",(0,o.jsxs)(n.p,{children:["You will find that the existing cover function cannot hide the mark of enum and list, refer to ",(0,o.jsx)(n.a,{href:"https://github.com/touying-typ/touying/issues/10",children:"here"}),", so you can hack:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typst",children:"#let s = (s.methods.update-cover)(self: s, body => box(scale(x: 0%, body)))\n"})}),"\n",(0,o.jsx)(n.h2,{id:"semi-transparent-cover-function",children:"Semi-Transparent Cover Function"}),"\n",(0,o.jsx)(n.p,{children:"Touying supports a semi-transparent cover function, which can be enabled by adding:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typst",children:"#let s = (s.methods.enable-transparent-cover)(self: s)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can adjust the transparency through the ",(0,o.jsx)(n.code,{children:"alpha: .."})," parameter."]}),"\n",(0,o.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"transparent-cover"})," here does not preserve text layout like ",(0,o.jsx)(n.code,{children:"hide"})," does because it adds an extra layer of ",(0,o.jsx)(n.code,{children:"box"}),", which may disrupt the original structure of the page."]})}),"\n",(0,o.jsxs)(n.admonition,{title:"Internals",type:"tip",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"enable-transparent-cover"})," method is defined as:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typst",children:"#let s.methods.enable-transparent-cover = (\n  self: none,\n  constructor: rgb,\n  alpha: 85%,\n) => {\n  self.methods.cover = (self: none, body) => {\n    utils.cover-with-rect(\n      fill: utils.update-alpha(\n        constructor: constructor,\n        self.page-args.fill,\n        alpha,\n      ),\n      body\n    )\n  }\n  self\n}\n"})}),(0,o.jsxs)(n.p,{children:["It creates a semi-transparent rectangular mask with the same color as the background to simulate the effect of transparent content. Here, ",(0,o.jsx)(n.code,{children:"constructor: rgb"})," and ",(0,o.jsx)(n.code,{children:"alpha: 85%"})," indicate the background color's construction function and transparency level, respectively."]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const c={},s=o.createContext(c);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);