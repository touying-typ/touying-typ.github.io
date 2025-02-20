"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5030],{35362:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=s(85893),t=s(11151);const l={sidebar_position:1},o="Simple Theme",d={id:"themes/simple",title:"Simple Theme",description:"image",source:"@site/versioned_docs/version-0.4.0+/themes/simple.md",sourceDirName:"themes",slug:"/themes/simple",permalink:"/docs/0.4.0+/themes/simple",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.0+/themes/simple.md",tags:[],version:"0.4.0+",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Themes",permalink:"/docs/0.4.0+/category/themes"},next:{title:"Metropolis Theme",permalink:"/docs/0.4.0+/themes/metropolis"}},r={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"simple-theme",children:"Simple Theme"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/83d5295e-f961-4ffd-bc56-a7049848d408",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["This theme originates from ",(0,i.jsx)(n.a,{href:"https://polylux.dev/book/themes/gallery/simple.html",children:"Polylux"}),", created by Andreas Kr\xf6pelin."]}),"\n",(0,i.jsx)(n.p,{children:"Considered a relatively straightforward theme, you can use it to create simple slides and freely incorporate features you like."}),"\n",(0,i.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(n.p,{children:"You can initialize it using the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.0": *\n\n#let s = themes.simple.register(aspect-ratio: "16-9", footer: [Simple slides])\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide, empty-slide, title-slide, centered-slide, focus-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"register"})," function takes the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, either "16-9" or "4-3," defaulting to "16-9."']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer"}),": Content displayed in the footer, defaulting to ",(0,i.jsx)(n.code,{children:"[]"}),", or it can be passed as a function like ",(0,i.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-right"}),": Content displayed on the right side of the footer, defaulting to ",(0,i.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"background"}),": Background color, defaulting to white."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"foreground"}),": Text color, defaulting to black."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"primary"}),": Theme color, defaulting to ",(0,i.jsx)(n.code,{children:"aqua.darken(50%)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,i.jsx)(n.p,{children:"The Simple theme provides a variety of custom slide functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#centered-slide(section: ..)[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A slide with content centered, and the ",(0,i.jsx)(n.code,{children:"section"})," parameter can be used to create a new section."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#title-slide[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.code,{children:"centered-slide"}),", this is provided for consistency with Polylux syntax."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // simple theme args\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"A default slide with headers and footers, where the header corresponds to the current section, and the footer is what you set."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#focus-slide(foreground: ..., background: ...)[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Used to draw attention, it optionally accepts a foreground color (defaulting to ",(0,i.jsx)(n.code,{children:"white"}),") and a background color (defaulting to ",(0,i.jsx)(n.code,{children:"auto"}),", i.e., ",(0,i.jsx)(n.code,{children:"self.colors.primary"}),")."]}),"\n",(0,i.jsxs)(n.h2,{id:"slides-function",children:[(0,i.jsx)(n.code,{children:"slides"})," Function"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"slides"})," function has the following parameter:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"slide-level"}),": Defaults to ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can set it using ",(0,i.jsx)(n.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["And the function of automatically adding ",(0,i.jsx)(n.code,{children:"new-section-slide"})," can be turned off by ",(0,i.jsx)(n.code,{children:"#(s.methods.touying-new-section-slide = none)"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.0": *\n\n#let s = themes.simple.register(aspect-ratio: "16-9", footer: [Simple slides])\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide, empty-slide, title-slide, centered-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/2c599bd1-6250-497f-a65b-f19ae02a16cb",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.0": *\n\n#let s = themes.simple.register(aspect-ratio: "16-9", footer: [Simple slides])\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide, empty-slide, title-slide, centered-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n#title-slide[\n  = Keep it simple!\n  #v(2em)\n\n  Alpha #footnote[Uni Augsburg] #h(1em)\n  Bravo #footnote[Uni Bayreuth] #h(1em)\n  Charlie #footnote[Uni Chemnitz] #h(1em)\n\n  July 23\n]\n\n== First slide\n\n#slide[\n  #lorem(20)\n]\n\n#focus-slide[\n  _Focus!_\n\n  This is very important.\n]\n\n= Let\'s start a new section!\n\n== Dynamic slide\n\n#slide[\n  Did you know that...\n\n  #pause\n\n  ...you can see the current section at the top of the slide?\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var i=s(67294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);