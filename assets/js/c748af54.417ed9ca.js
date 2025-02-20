"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4095],{99947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(85893),r=t(11151);const o={sidebar_position:3},s="CeTZ",c={id:"integration/cetz",title:"CeTZ",description:"Touying provides the touying-reducer, which adds pause and meanwhile animations to CeTZ and Fletcher.",source:"@site/versioned_docs/version-0.5.x/integration/cetz.md",sourceDirName:"integration",slug:"/integration/cetz",permalink:"/docs/0.5.x/integration/cetz",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/integration/cetz.md",tags:[],version:"0.5.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MiTeX",permalink:"/docs/0.5.x/integration/mitex"},next:{title:"Fletcher",permalink:"/docs/0.5.x/integration/fletcher"}},a={},d=[{value:"Simple Animation",id:"simple-animation",level:2},{value:"only and uncover",id:"only-and-uncover",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cetz",children:"CeTZ"}),"\n",(0,i.jsxs)(n.p,{children:["Touying provides the ",(0,i.jsx)(n.code,{children:"touying-reducer"}),", which adds ",(0,i.jsx)(n.code,{children:"pause"})," and ",(0,i.jsx)(n.code,{children:"meanwhile"})," animations to CeTZ and Fletcher."]}),"\n",(0,i.jsx)(n.h2,{id:"simple-animation",children:"Simple Animation"}),"\n",(0,i.jsx)(n.p,{children:"An example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.5": *\n#import themes.metropolis: *\n#import "@preview/cetz:0.3.1"\n#import "@preview/fletcher:0.5.3" as fletcher: node, edge\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)\n\n#show: metropolis-theme.with(aspect-ratio: "16-9")\n\n// cetz animation\n#slide[\n  Cetz in Touying:\n\n  #cetz-canvas({\n    import cetz.draw: *\n    \n    rect((0,0), (5,5))\n\n    (pause,)\n\n    rect((0,0), (1,1))\n    rect((1,1), (2,2))\n    rect((2,2), (3,3))\n\n    (pause,)\n\n    line((0,0), (2.5, 2.5), name: "line")\n  })\n]\n\n// fletcher animation\n#slide[\n  Fletcher in Touying:\n\n  #fletcher-diagram(\n    node-stroke: .1em,\n    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n    spacing: 4em,\n    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n    node((0,0), `reading`, radius: 2em),\n    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n    pause,\n    edge(`read()`, "-|>"),\n    node((1,0), `eof`, radius: 2em),\n    pause,\n    edge(`close()`, "-|>"),\n    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n  )\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/9ba71f54-2a5d-4144-996c-4a42833cc5cc",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"only-and-uncover",children:"only and uncover"}),"\n",(0,i.jsxs)(n.p,{children:["In fact, we can also use ",(0,i.jsx)(n.code,{children:"only"})," and ",(0,i.jsx)(n.code,{children:"uncover"})," within CeTZ, but it requires a bit of technique:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only) = utils.methods(self)\n\n  Cetz in Touying in subslide #self.subslide:\n\n  #cetz.canvas({\n    import cetz.draw: *\n    let self = (self.methods.update-cover)(self: self, hide.with(bounds: true))\n    let (uncover,) = utils.methods(self)\n    \n    rect((0,0), (5,5))\n\n    uncover("2-3", {\n      rect((0,0), (1,1))\n      rect((1,1), (2,2))\n      rect((2,2), (3,3))\n    })\n\n    only(3, line((0,0), (2.5, 2.5), name: "line"))\n  })\n])\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);