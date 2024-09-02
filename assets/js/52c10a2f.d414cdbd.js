"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5671],{8741:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(5893),s=i(1151);const o={sidebar_position:1},l="Simple Theme",r={id:"themes/simple",title:"Simple Theme",description:"image",source:"@site/versioned_docs/version-0.5.x/themes/simple.md",sourceDirName:"themes",slug:"/themes/simple",permalink:"/docs/themes/simple",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/themes/simple.md",tags:[],version:"0.5.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Themes",permalink:"/docs/category/themes"},next:{title:"Metropolis Theme",permalink:"/docs/themes/metropolis"}},d={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"simple-theme",children:"Simple Theme"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/83d5295e-f961-4ffd-bc56-a7049848d408",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["This theme originates from ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/themes/gallery/simple.html",children:"Polylux"}),", created by Andreas Kr\xf6pelin."]}),"\n",(0,t.jsx)(n.p,{children:"Considered a relatively straightforward theme, you can use it to create simple slides and freely incorporate features you like."}),"\n",(0,t.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"You can initialize it using the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.0": *\n#import themes.simple: *\n\n#show: simple-theme.with(\n  aspect-ratio: "16-9",\n  footer: [Simple slides],\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"register"})," function in the theme accepts the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, which can be "16-9" or "4-3", with a default of "16-9".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"header"}),": The content displayed in the header, with a default of ",(0,t.jsx)(n.code,{children:"utils.display-current-heading(setting: utils.fit-to-width.with(grow: false, 100%))"}),". You can also pass a function like ",(0,t.jsx)(n.code,{children:"self => self.info.title"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"header-right"}),": The content displayed on the right side of the header, with a default of ",(0,t.jsx)(n.code,{children:"self => self.info.logo"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer"}),": The content displayed in the footer, with a default of ",(0,t.jsx)(n.code,{children:"[]"})," (empty). You can also pass a function like ",(0,t.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-right"}),": The content displayed on the right side of the footer, with a default of ",(0,t.jsx)(n.code,{children:'context utils.slide-counter.display() + " / " + utils.last-slide-number'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"primary"}),": The primary color of the theme, with a default of ",(0,t.jsx)(n.code,{children:"aqua.darken(50%)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subslide-preamble"}),": By default, it adds the subsection title to the current slide."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,t.jsx)(n.p,{children:"The Simple theme provides a variety of custom slide functions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#centered-slide(section: ..)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A slide with content centered, and the ",(0,t.jsx)(n.code,{children:"section"})," parameter can be used to create a new section."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#title-slide[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.code,{children:"centered-slide"}),", this is provided for consistency with Polylux syntax."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(\n  config: (:),\n  repeat: auto,\n  setting: body => body,\n  composer: components.side-by-side,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:"A default slide with headers and footers, where the header corresponds to the current section, and the footer is what you set."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#focus-slide(foreground: ..., background: ...)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Used to draw attention, it optionally accepts a foreground color (defaulting to ",(0,t.jsx)(n.code,{children:"white"}),") and a background color (defaulting to ",(0,t.jsx)(n.code,{children:"auto"}),", i.e., ",(0,t.jsx)(n.code,{children:"self.colors.primary"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.0": *\n#import themes.simple: *\n\n#show: simple-theme.with(\n  aspect-ratio: "16-9",\n  footer: [Simple slides],\n)\n\n#title-slide[\n  = Keep it simple!\n  #v(2em)\n\n  Alpha #footnote[Uni Augsburg] #h(1em)\n  Bravo #footnote[Uni Bayreuth] #h(1em)\n  Charlie #footnote[Uni Chemnitz] #h(1em)\n\n  July 23\n]\n\n== First slide\n\n#lorem(20)\n\n#focus-slide[\n  _Focus!_\n\n  This is very important.\n]\n\n= Let\'s start a new section!\n\n== Dynamic slide\n\nDid you know that...\n\n#pause\n\n...you can see the current section at the top of the slide?\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);