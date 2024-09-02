"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[728],{95:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(5893),s=n(1151);const i={sidebar_position:5},r="Codly",l={id:"integration/codly",title:"Codly",description:"\u5728\u4f7f\u7528 codly \u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e94\u8be5\u4f7f\u7528 s.methods.append-preamble \u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.2/integration/codly.md",sourceDirName:"integration",slug:"/integration/codly",permalink:"/zh/docs/integration/codly",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/integration/codly.md",tags:[],version:"0.4.2",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fletcher",permalink:"/zh/docs/integration/fletcher"},next:{title:"Ctheorems",permalink:"/zh/docs/integration/ctheorems"}},c={},d=[];function a(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"codly",children:"Codly"}),"\n",(0,o.jsxs)(t.p,{children:["\u5728\u4f7f\u7528 codly \u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e94\u8be5\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"s.methods.append-preamble"})," \u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n#import "@preview/codly:0.2.0": *\n\n#let s = themes.simple.register(aspect-ratio: "16-9")\n#let s = (s.methods.append-preamble)(self: s)[\n  #codly(languages: (\n    rust: (name: "Rust", icon: "\\u{fa53}", color: rgb("#CE412B")),\n  ))\n]\n#let (init, slides) = utils.methods(s)\n#show heading.where(level: 2): set block(below: 1em)\n#show: init\n#show: codly-init.with()\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n#slide[\n  == First slide\n\n  #raw(lang: "rust", block: true,\n`pub fn main() {\n  println!("Hello, world!");\n}`.text)\n]\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/0be2fbaf-cc03-4776-932f-259503d5e23a",alt:"image"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);