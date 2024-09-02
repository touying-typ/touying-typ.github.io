"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9195],{3667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var i=t(5893),r=t(1151);const c={sidebar_position:5},o="\u5176\u4ed6\u52a8\u753b",s={id:"dynamic/other",title:"\u5176\u4ed6\u52a8\u753b",description:"Touying \u8fd8\u63d0\u4f9b\u4e86 touying-reducer\uff0c\u5b83\u80fd\u4e3a cetz \u4e0e fletcher \u52a0\u5165 pause \u548c meanwhile \u52a8\u753b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.x/dynamic/other.md",sourceDirName:"dynamic",slug:"/dynamic/other",permalink:"/zh/docs/dynamic/other",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/dynamic/other.md",tags:[],version:"0.5.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cover \u51fd\u6570",permalink:"/zh/docs/dynamic/cover"},next:{title:"\u521b\u5efa\u8bb2\u4e49",permalink:"/zh/docs/dynamic/handout"}},d={},a=[{value:"\u7b80\u5355\u52a8\u753b",id:"\u7b80\u5355\u52a8\u753b",level:2},{value:"only \u4e0e uncover",id:"only-\u4e0e-uncover",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5176\u4ed6\u52a8\u753b",children:"\u5176\u4ed6\u52a8\u753b"}),"\n",(0,i.jsxs)(n.p,{children:["Touying \u8fd8\u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"touying-reducer"}),"\uff0c\u5b83\u80fd\u4e3a cetz \u4e0e fletcher \u52a0\u5165 ",(0,i.jsx)(n.code,{children:"pause"})," \u548c ",(0,i.jsx)(n.code,{children:"meanwhile"})," \u52a8\u753b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7b80\u5355\u52a8\u753b",children:"\u7b80\u5355\u52a8\u753b"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.0": *\n#import themes.university: *\n#import "@preview/cetz:0.2.2"\n#import "@preview/fletcher:0.5.1" as fletcher: node, edge\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)\n\n#show: university-theme.with(aspect-ratio: "16-9")\n\n// cetz animation\n#slide[\n  Cetz in Touying:\n\n  #cetz-canvas({\n    import cetz.draw: *\n    \n    rect((0,0), (5,5))\n\n    (pause,)\n\n    rect((0,0), (1,1))\n    rect((1,1), (2,2))\n    rect((2,2), (3,3))\n\n    (pause,)\n\n    line((0,0), (2.5, 2.5), name: "line")\n  })\n]\n\n// fletcher animation\n#slide[\n  Fletcher in Touying:\n\n  #fletcher-diagram(\n    node-stroke: .1em,\n    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n    spacing: 4em,\n    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n    node((0,0), `reading`, radius: 2em),\n    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n    pause,\n    edge(`read()`, "-|>"),\n    node((1,0), `eof`, radius: 2em),\n    pause,\n    edge(`close()`, "-|>"),\n    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n  )\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/9ba71f54-2a5d-4144-996c-4a42833cc5cc",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"only-\u4e0e-uncover",children:"only \u4e0e uncover"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728 cetz \u5185\u90e8\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"only"})," \u548c ",(0,i.jsx)(n.code,{children:"uncover"}),"\uff0c\u53ea\u662f\u9700\u8981\u4e00\u70b9\u6280\u5de7\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only) = utils.methods(self)\n\n  Cetz in Touying in subslide #self.subslide:\n\n  #cetz.canvas({\n    import cetz.draw: *\n    let self = (self.methods.update-cover)(self: self, hide.with(bounds: true))\n    let (uncover,) = utils.methods(self)\n    \n    rect((0,0), (5,5))\n\n    uncover("2-3", {\n      rect((0,0), (1,1))\n      rect((1,1), (2,2))\n      rect((2,2), (3,3))\n    })\n\n    only(3, line((0,0), (2.5, 2.5), name: "line"))\n  })\n])\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);