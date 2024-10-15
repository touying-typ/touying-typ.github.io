"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9619],{4057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(5893),r=t(1151);const o={sidebar_position:5},s="Other Animations",c={id:"dynamic/other",title:"Other Animations",description:"Touying also provides touying-reducer, which adds pause and meanwhile animations to cetz and fletcher.",source:"@site/docs/dynamic/other.md",sourceDirName:"dynamic",slug:"/dynamic/other",permalink:"/docs/next/dynamic/other",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/dynamic/other.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cover Function",permalink:"/docs/next/dynamic/cover"},next:{title:"Handout Mode",permalink:"/docs/next/dynamic/handout"}},a={},d=[{value:"Simple Animations",id:"simple-animations",level:2},{value:"only and uncover",id:"only-and-uncover",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"other-animations",children:"Other Animations"}),"\n",(0,i.jsxs)(n.p,{children:["Touying also provides ",(0,i.jsx)(n.code,{children:"touying-reducer"}),", which adds ",(0,i.jsx)(n.code,{children:"pause"})," and ",(0,i.jsx)(n.code,{children:"meanwhile"})," animations to cetz and fletcher."]}),"\n",(0,i.jsx)(n.h2,{id:"simple-animations",children:"Simple Animations"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.3": *\n#import themes.university: *\n#import "@preview/cetz:0.2.2"\n#import "@preview/fletcher:0.5.1" as fletcher: node, edge\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)\n\n#show: university-theme.with(aspect-ratio: "16-9")\n\n// cetz animation\n#slide[\n  Cetz in Touying:\n\n  #cetz-canvas({\n    import cetz.draw: *\n    \n    rect((0,0), (5,5))\n\n    (pause,)\n\n    rect((0,0), (1,1))\n    rect((1,1), (2,2))\n    rect((2,2), (3,3))\n\n    (pause,)\n\n    line((0,0), (2.5, 2.5), name: "line")\n  })\n]\n\n// fletcher animation\n#slide[\n  Fletcher in Touying:\n\n  #fletcher-diagram(\n    node-stroke: .1em,\n    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n    spacing: 4em,\n    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n    node((0,0), `reading`, radius: 2em),\n    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n    pause,\n    edge(`read()`, "-|>"),\n    node((1,0), `eof`, radius: 2em),\n    pause,\n    edge(`close()`, "-|>"),\n    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n  )\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/9ba71f54-2a5d-4144-996c-4a42833cc5cc",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"only-and-uncover",children:"only and uncover"}),"\n",(0,i.jsxs)(n.p,{children:["In fact, we can also use ",(0,i.jsx)(n.code,{children:"only"})," and ",(0,i.jsx)(n.code,{children:"uncover"})," within cetz, just requiring a bit of skill:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only) = utils.methods(self)\n\n  Cetz in Touying in subslide #self.subslide:\n\n  #cetz.canvas({\n    import cetz.draw: *\n    let self = utils.merge-dicts(\n      self,\n      config-methods(cover: utils.method-wrapper(hide.with(bounds: true))),\n    )\n    let (uncover,) = utils.methods(self)\n    \n    rect((0,0), (5,5))\n\n    uncover("2-3", {\n      rect((0,0), (1,1))\n      rect((1,1), (2,2))\n      rect((2,2), (3,3))\n    })\n\n    only(3, line((0,0), (2.5, 2.5), name: "line"))\n  })\n])\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);