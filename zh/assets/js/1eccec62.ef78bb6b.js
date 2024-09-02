"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7798],{7162:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(5893),s=t(1151);const o={sidebar_position:2},r="\u5f00\u59cb",a={id:"start",title:"\u5f00\u59cb",description:"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Typst \u73af\u5883\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4f7f\u7528 Web App \u6216 VS Code \u7684 Tinymist LSP \u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.2/start.md",sourceDirName:".",slug:"/start",permalink:"/touying/zh/docs/start",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/start.md",tags:[],version:"0.4.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touying \u4ecb\u7ecd",permalink:"/touying/zh/docs/intro"},next:{title:"\u8282\u4e0e\u5c0f\u8282",permalink:"/touying/zh/docs/sections"}},l={},d=[{value:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",id:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5f00\u59cb",children:"\u5f00\u59cb"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Typst \u73af\u5883\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"https://typst.app/",children:"Web App"})," \u6216 VS Code \u7684 ",(0,i.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=myriad-dreamin.tinymist",children:"Tinymist LSP"})," \u63d2\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u4f7f\u7528 Touying\uff0c\u60a8\u53ea\u9700\u8981\u5728\u6587\u6863\u91cc\u52a0\u5165"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.simple.register()\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f5bdbf8f-7bf9-45fd-9923-0fa5d66450b2",alt:"image"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u5f88\u7b80\u5355\uff0c\u60a8\u521b\u5efa\u4e86\u60a8\u7684\u7b2c\u4e00\u4e2a Touying slides\uff0c\u606d\u559c\uff01\ud83c\udf89"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u63d0\u793a:"})," \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:'#import "config.typ": *'})," \u6216 ",(0,i.jsx)(e.code,{children:'#include "content.typ"'})," \u7b49 Typst \u8bed\u6cd5\u6765\u5b9e\u73b0 Touying \u7684\u591a\u6587\u4ef6\u67b6\u6784\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8b66\u544a:"})," ",(0,i.jsx)(e.code,{children:"#let (slide, empty-slide) = utils.slides(s)"})," \u91cc\u7684\u9017\u53f7\u5bf9\u4e8e\u89e3\u5305\u8bed\u6cd5\u6765\u8bf4\u662f\u5fc5\u8981\u7684\uff01"]}),"\n",(0,i.jsx)(e.h2,{id:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50",children:"\u66f4\u590d\u6742\u7684\u4f8b\u5b50"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e8b\u5b9e\u4e0a\uff0cTouying \u63d0\u4f9b\u4e86\u591a\u79cd slides \u7f16\u5199\u98ce\u683c\uff0c\u5b9e\u9645\u4e0a\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"#slide[..]"})," \u7684\u5199\u6cd5\uff0c\u4ee5\u83b7\u5f97 Touying \u63d0\u4f9b\u7684\u66f4\u591a\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n#import "@preview/cetz:0.2.2"\n#import "@preview/fletcher:0.4.4" as fletcher: node, edge\n#import "@preview/ctheorems:1.1.2": *\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)\n\n// Register university theme\n// You can replace it with other themes and it can still work normally\n#let s = themes.university.register(aspect-ratio: "16-9")\n\n// Set the numbering of section and subsection\n#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")\n\n// Set the speaker notes configuration\n// #let s = (s.methods.show-notes-on-second-screen)(self: s, right)\n\n// Global information configuration\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n\n// Pdfpc configuration\n// typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc\n#let s = (s.methods.append-preamble)(self: s, pdfpc.config(\n  duration-minutes: 30,\n  start-time: datetime(hour: 14, minute: 10, second: 0),\n  end-time: datetime(hour: 14, minute: 40, second: 0),\n  last-minutes: 5,\n  note-font-size: 12,\n  disable-markdown: false,\n  default-transition: (\n    type: "push",\n    duration-seconds: 2,\n    angle: ltr,\n    alignment: "vertical",\n    direction: "inward",\n  ),\n))\n\n// Theorems configuration by ctheorems\n#show: thmrules.with(qed-symbol: $square$)\n#let theorem = thmbox("theorem", "Theorem", fill: rgb("#eeffee"))\n#let corollary = thmplain(\n  "corollary",\n  "Corollary",\n  base: "theorem",\n  titlefmt: strong\n)\n#let definition = thmbox("definition", "Definition", inset: (x: 1.2em, top: 1em))\n#let example = thmplain("example", "Example").with(numbering: none)\n#let proof = thmproof("proof", "Proof")\n\n// Extract methods\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n// Extract slide functions\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Animation\n\n== Simple Animation\n\nWe can use `#pause` to #pause display something later.\n\n#pause\n\nJust like this.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n\n#speaker-note[\n  + This is a speaker note.\n  + You won\'t see it unless you use `#let s = (s.math.show-notes-on-second-screen)(self: s, right)`\n]\n\n\n== Complex Animation - Mark-Style\n\nAt subslide #utils.touying-wrapper((self: none) => str(self.subslide)), we can\n\nuse #uncover("2-")[`#uncover` function] for reserving space,\n\nuse #only("2-")[`#only` function] for not reserving space,\n\n#alternatives[call `#only` multiple times \\u{2717}][use `#alternatives` function #sym.checkmark] for choosing one of the alternatives.\n\n\n== Complex Animation - Callback-Style\n\n#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  At subslide #self.subslide, we can\n\n  use #uncover("2-")[`#uncover` function] for reserving space,\n\n  use #only("2-")[`#only` function] for not reserving space,\n\n  #alternatives[call `#only` multiple times \\u{2717}][use `#alternatives` function #sym.checkmark] for choosing one of the alternatives.\n])\n\n\n== Math Equation Animation\n\nTouying equation with `pause`:\n\n#touying-equation(`\n  f(x) &= pause x^2 + 2x + 1  \\\n        &= pause (x + 1)^2  \\\n`)\n\n#meanwhile\n\nHere, #pause we have the expression of $f(x)$.\n\n#pause\n\nBy factorizing, we can obtain this result.\n\n\n== CeTZ Animation\n\nCeTZ Animation in Touying:\n\n#cetz-canvas({\n  import cetz.draw: *\n  \n  rect((0,0), (5,5))\n\n  (pause,)\n\n  rect((0,0), (1,1))\n  rect((1,1), (2,2))\n  rect((2,2), (3,3))\n\n  (pause,)\n\n  line((0,0), (2.5, 2.5), name: "line")\n})\n\n\n== Fletcher Animation\n\nFletcher Animation in Touying:\n\n#fletcher-diagram(\n  node-stroke: .1em,\n  node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n  spacing: 4em,\n  edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n  node((0,0), `reading`, radius: 2em),\n  edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n  pause,\n  edge(`read()`, "-|>"),\n  node((1,0), `eof`, radius: 2em),\n  pause,\n  edge(`close()`, "-|>"),\n  node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n  edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n)\n\n\n= Theorems\n\n== Prime numbers\n\n#definition[\n  A natural number is called a #highlight[_prime number_] if it is greater\n  than 1 and cannot be written as the product of two smaller natural numbers.\n]\n#example[\n  The numbers $2$, $3$, and $17$ are prime.\n  @cor_largest_prime shows that this list is not exhaustive!\n]\n\n#theorem("Euclid")[\n  There are infinitely many primes.\n]\n#proof[\n  Suppose to the contrary that $p_1, p_2, dots, p_n$ is a finite enumeration\n  of all primes. Set $P = p_1 p_2 dots p_n$. Since $P + 1$ is not in our list,\n  it cannot be prime. Thus, some prime factor $p_j$ divides $P + 1$.  Since\n  $p_j$ also divides $P$, it must divide the difference $(P + 1) - P = 1$, a\n  contradiction.\n]\n\n#corollary[\n  There is no largest prime number.\n] <cor_largest_prime>\n#corollary[\n  There are infinitely many composite numbers.\n]\n\n#theorem[\n  There are arbitrarily long stretches of composite numbers.\n]\n\n#proof[\n  For any $n > 2$, consider $\n    n! + 2, quad n! + 3, quad ..., quad n! + n #qedhere\n  $\n]\n\n\n= Others\n\n== Side-by-side\n\n#slide(composer: (1fr, 1fr))[\n  First column.\n][\n  Second column.\n]\n\n\n== Multiple Pages\n\n#lorem(200)\n\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide, empty-slide) = utils.slides(s)\n\n== Appendix\n\n#slide[\n  Please pay attention to the current slide number.\n]\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/touying-typ/touying/assets/34951714/fcecb505-d2d1-4e36-945a-225f4661a694",alt:"image"})}),"\n",(0,i.jsx)(e.p,{children:"Touying \u63d0\u4f9b\u4e86\u5f88\u591a\u5185\u7f6e\u7684\u4e3b\u9898\uff0c\u80fd\u591f\u7b80\u5355\u5730\u7f16\u5199\u7cbe\u7f8e\u7684 slides\uff0c\u4f8b\u5982\u6b64\u5904\u7684"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'#let s = themes.university.register(aspect-ratio: "16-9")\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528 university \u4e3b\u9898\u3002\u5173\u4e8e\u4e3b\u9898\u66f4\u8be6\u7ec6\u7684\u6559\u7a0b\uff0c\u60a8\u53ef\u4ee5\u53c2\u9605\u540e\u9762\u7684\u7ae0\u8282\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);