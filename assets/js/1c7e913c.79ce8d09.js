"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2083],{51141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(85893),r=t(11151);const o={sidebar_position:4},c="Fletcher",s={id:"integration/fletcher",title:"Fletcher",description:"Touying provides the touying-reducer, which adds pause and meanwhile animations to Fletcher.",source:"@site/versioned_docs/version-0.6.x/integration/fletcher.md",sourceDirName:"integration",slug:"/integration/fletcher",permalink:"/docs/integration/fletcher",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.6.x/integration/fletcher.md",tags:[],version:"0.6.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CeTZ",permalink:"/docs/integration/cetz"},next:{title:"Codly",permalink:"/docs/integration/codly"}},a={},d=[];function l(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fletcher",children:"Fletcher"}),"\n",(0,i.jsxs)(n.p,{children:["Touying provides the ",(0,i.jsx)(n.code,{children:"touying-reducer"}),", which adds ",(0,i.jsx)(n.code,{children:"pause"})," and ",(0,i.jsx)(n.code,{children:"meanwhile"})," animations to Fletcher."]}),"\n",(0,i.jsx)(n.p,{children:"An example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.6.0": *\n#import themes.metropolis: *\n#import "@preview/cetz:0.3.1"\n#import "@preview/fletcher:0.5.3" as fletcher: node, edge\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)\n\n#show: metropolis-theme.with(aspect-ratio: "16-9")\n\n// cetz animation\n#slide[\n  Cetz in Touying:\n\n  #cetz-canvas({\n    import cetz.draw: *\n    \n    rect((0,0), (5,5))\n\n    (pause,)\n\n    rect((0,0), (1,1))\n    rect((1,1), (2,2))\n    rect((2,2), (3,3))\n\n    (pause,)\n\n    line((0,0), (2.5, 2.5), name: "line")\n  })\n]\n\n// fletcher animation\n#slide[\n  Fletcher in Touying:\n\n  #fletcher-diagram(\n    node-stroke: .1em,\n    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n    spacing: 4em,\n    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n    node((0,0), `reading`, radius: 2em),\n    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n    pause,\n    edge(`read()`, "-|>"),\n    node((1,0), `eof`, radius: 2em),\n    pause,\n    edge(`close()`, "-|>"),\n    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n  )\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/9ba71f54-2a5d-4144-996c-4a42833cc5cc",alt:"image"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var i=t(67294);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);