"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[819],{84847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(85893),s=t(11151);const o={sidebar_position:2},r="Getting Started",a={id:"start",title:"Getting Started",description:"Before you begin, make sure you have the Typst environment installed. If not, you can use the Web App or install the Tinymist LSP plugins for VS Code.",source:"@site/versioned_docs/version-0.4.1/start.md",sourceDirName:".",slug:"/start",permalink:"/docs/0.4.1/start",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/start.md",tags:[],version:"0.4.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Touying",permalink:"/docs/0.4.1/intro"},next:{title:"Sections and Subsections",permalink:"/docs/0.4.1/sections"}},l={},d=[{value:"More Complex Examples",id:"more-complex-examples",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["Before you begin, make sure you have the Typst environment installed. If not, you can use the ",(0,i.jsx)(n.a,{href:"https://typst.app/",children:"Web App"})," or install the ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=myriad-dreamin.tinymist",children:"Tinymist LSP"})," plugins for VS Code."]}),"\n",(0,i.jsx)(n.p,{children:"To use Touying, you just need to include the following in your document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n\n#let s = themes.simple.register()\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f5bdbf8f-7bf9-45fd-9923-0fa5d66450b2",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"It's that simple! You've created your first Touying slides. Congratulations! \ud83c\udf89"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," You can use Typst syntax like ",(0,i.jsx)(n.code,{children:'#import "config.typ": *'})," or ",(0,i.jsx)(n.code,{children:'#include "content.typ"'})," to implement Touying's multi-file architecture."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," The comma in ",(0,i.jsx)(n.code,{children:"#let (slide, empty-slide) = utils.slides(s)"})," is necessary for the unpacking syntax."]}),"\n",(0,i.jsx)(n.h2,{id:"more-complex-examples",children:"More Complex Examples"}),"\n",(0,i.jsxs)(n.p,{children:["In fact, Touying provides various styles for slide writing. You can also use the ",(0,i.jsx)(n.code,{children:"#slide[..]"})," syntax to access more powerful features provided by Touying."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/fcecb505-d2d1-4e36-945a-225f4661a694",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"Touying offers many built-in themes to easily create beautiful slides. For example, in this case:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'#let s = themes.university.register(aspect-ratio: "16-9")\n'})}),"\n",(0,i.jsx)(n.p,{children:"you can use the university theme. For more detailed tutorials on themes, you can refer to the following sections."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n#import "@preview/cetz:0.3.1"\n#import "@preview/fletcher:0.4.4" as fletcher: node, edge\n#import "@preview/ctheorems:1.1.3": *\n\n// cetz and fletcher bindings for touying\n#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))\n#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)\n\n// Register university theme\n// You can replace it with other themes and it can still work normally\n#let s = themes.university.register(aspect-ratio: "16-9")\n\n// Set the numbering of section and subsection\n#let s = (s.methods.numbering)(self: s, section: "1.", "1.1")\n\n// Global information configuration\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n\n// Pdfpc configuration\n// typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc\n#let s = (s.methods.append-preamble)(self: s, pdfpc.config(\n  duration-minutes: 30,\n  start-time: datetime(hour: 14, minute: 10, second: 0),\n  end-time: datetime(hour: 14, minute: 40, second: 0),\n  last-minutes: 5,\n  note-font-size: 12,\n  disable-markdown: false,\n  default-transition: (\n    type: "push",\n    duration-seconds: 2,\n    angle: ltr,\n    alignment: "vertical",\n    direction: "inward",\n  ),\n))\n\n// Theorems configuration by ctheorems\n#show: thmrules.with(qed-symbol: $square$)\n#let theorem = thmbox("theorem", "Theorem", fill: rgb("#eeffee"))\n#let corollary = thmplain(\n  "corollary",\n  "Corollary",\n  base: "theorem",\n  titlefmt: strong\n)\n#let definition = thmbox("definition", "Definition", inset: (x: 1.2em, top: 1em))\n#let example = thmplain("example", "Example").with(numbering: none)\n#let proof = thmproof("proof", "Proof")\n\n// Extract methods\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n// Extract slide functions\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= Animation\n\n== Simple Animation\n\nWe can use `#pause` to #pause display something later.\n\n#pause\n\nJust like this.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n\n\n== Complex Animation\n\n#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  At subslide #self.subslide, we can\n\n  use #uncover("2-")[`#uncover` function] for reserving space,\n\n  use #only("2-")[`#only` function] for not reserving space,\n\n  #alternatives[call `#only` multiple times \\u{2717}][use `#alternatives` function #sym.checkmark] for choosing one of the alternatives.\n])\n\n\n== Math Equation Animation\n\nTouying equation with `pause`:\n\n#touying-equation(`\n  f(x) &= pause x^2 + 2x + 1  \\\n        &= pause (x + 1)^2  \\\n`)\n\n#meanwhile\n\nHere, #pause we have the expression of $f(x)$.\n\n#pause\n\nBy factorizing, we can obtain this result.\n\n\n== CeTZ Animation\n\nCeTZ Animation in Touying:\n\n#cetz-canvas({\n  import cetz.draw: *\n  \n  rect((0,0), (5,5))\n\n  (pause,)\n\n  rect((0,0), (1,1))\n  rect((1,1), (2,2))\n  rect((2,2), (3,3))\n\n  (pause,)\n\n  line((0,0), (2.5, 2.5), name: "line")\n})\n\n\n== Fletcher Animation\n\nFletcher Animation in Touying:\n\n#fletcher-diagram(\n  node-stroke: .1em,\n  node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),\n  spacing: 4em,\n  edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),\n  node((0,0), `reading`, radius: 2em),\n  edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),\n  pause,\n  edge(`read()`, "-|>"),\n  node((1,0), `eof`, radius: 2em),\n  pause,\n  edge(`close()`, "-|>"),\n  node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),\n  edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),\n)\n\n\n= Theorems\n\n== Prime numbers\n\n#definition[\n  A natural number is called a #highlight[_prime number_] if it is greater\n  than 1 and cannot be written as the product of two smaller natural numbers.\n]\n#example[\n  The numbers $2$, $3$, and $17$ are prime.\n  @cor_largest_prime shows that this list is not exhaustive!\n]\n\n#theorem("Euclid")[\n  There are infinitely many primes.\n]\n#proof[\n  Suppose to the contrary that $p_1, p_2, dots, p_n$ is a finite enumeration\n  of all primes. Set $P = p_1 p_2 dots p_n$. Since $P + 1$ is not in our list,\n  it cannot be prime. Thus, some prime factor $p_j$ divides $P + 1$.  Since\n  $p_j$ also divides $P$, it must divide the difference $(P + 1) - P = 1$, a\n  contradiction.\n]\n\n#corollary[\n  There is no largest prime number.\n] <cor_largest_prime>\n#corollary[\n  There are infinitely many composite numbers.\n]\n\n#theorem[\n  There are arbitrarily long stretches of composite numbers.\n]\n\n#proof[\n  For any $n > 2$, consider $\n    n! + 2, quad n! + 3, quad ..., quad n! + n #qedhere\n  $\n]\n\n\n= Others\n\n== Side-by-side\n\n#slide(composer: (1fr, 1fr))[\n  First column.\n][\n  Second column.\n]\n\n\n== Multiple Pages\n\n#lorem(200)\n\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide, empty-slide) = utils.slides(s)\n\n== Appendix\n\n#slide[\n  Please pay attention to the current slide number.\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/fcecb505-d2d1-4e36-945a-225f4661a694",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"Touying offers many built-in themes to easily create beautiful slides. For example, in this case:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'#let s = themes.university.register(aspect-ratio: "16-9")\n'})}),"\n",(0,i.jsx)(n.p,{children:"you can use the university theme. For more detailed tutorials on themes, you can refer to the following sections."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);