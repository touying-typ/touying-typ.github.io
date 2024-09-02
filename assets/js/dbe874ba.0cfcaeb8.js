"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1712],{8843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(5893),o=n(1151);const s={sidebar_position:5},r="Codly",l={id:"integration/codly",title:"Codly",description:"When using Codly, we should initialize it using the s.methods.append-preamble method.",source:"@site/versioned_docs/version-0.4.2/integration/codly.md",sourceDirName:"integration",slug:"/integration/codly",permalink:"/touying/docs/integration/codly",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/integration/codly.md",tags:[],version:"0.4.2",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fletcher",permalink:"/touying/docs/integration/fletcher"},next:{title:"Ctheorems",permalink:"/touying/docs/integration/ctheorems"}},d={},c=[];function a(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"codly",children:"Codly"}),"\n",(0,i.jsxs)(t.p,{children:["When using Codly, we should initialize it using the ",(0,i.jsx)(t.code,{children:"s.methods.append-preamble"})," method."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n#import "@preview/codly:0.2.0": *\n\n#let s = themes.simple.register(aspect-ratio: "16-9")\n#let s = (s.methods.append-preamble)(self: s)[\n  #codly(languages: (\n    rust: (name: "Rust", icon: "\\u{fa53}", color: rgb("#CE412B")),\n  ))\n]\n#let (init, slides) = utils.methods(s)\n#show heading.where(level: 2): set block(below: 1em)\n#show: init\n#show: codly-init.with()\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n#slide[\n  == First slide\n\n  #raw(lang: "rust", block: true,\n`pub fn main() {\n  println!("Hello, world!");\n}`.text)\n]\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/0be2fbaf-cc03-4776-932f-259503d5e23a",alt:"image"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(7294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);