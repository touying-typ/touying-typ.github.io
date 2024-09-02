"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4245],{2936:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(5893),s=i(1151);const l={sidebar_position:4},o="University Theme",r={id:"themes/university",title:"University Theme",description:"image",source:"@site/versioned_docs/version-0.4.2/themes/university.md",sourceDirName:"themes",slug:"/themes/university",permalink:"/touying/docs/themes/university",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.2/themes/university.md",tags:[],version:"0.4.2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dewdrop Theme",permalink:"/touying/docs/themes/dewdrop"},next:{title:"Aqua Theme",permalink:"/touying/docs/themes/aqua"}},d={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Title Slide",id:"title-slide",level:3},{value:"Regular Slide",id:"regular-slide",level:3},{value:"Focus Slide",id:"focus-slide",level:3},{value:"Matrix Slide",id:"matrix-slide",level:3},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"university-theme",children:"University Theme"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/4095163c-0c16-4760-b370-8adc1cdd7e6c",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["This aesthetically pleasing theme is courtesy of ",(0,t.jsx)(n.a,{href:"https://github.com/drupol",children:"Pol Dellaiera"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"You can initialize the University theme using the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.university.register(aspect-ratio: "16-9")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"register"})," function accepts the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aspect-ratio"}),': Sets the aspect ratio of the slides to "16-9" or "4-3," with the default being "16-9."']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"progress-bar"}),": Controls whether the progress bar at the top of each slide is displayed, with the default being ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"display-current-section"}),": Whether to display the current section."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-columns"}),": The width of the footer in the bottom three columns, the default is ",(0,t.jsx)(n.code,{children:"(25%, 1fr, 25%)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-a"}),": The first column, default is ",(0,t.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-b"}),": Second column, default is ",(0,t.jsx)(n.code,{children:"self => if self.info.short-title == auto { self.info.title } else { self.info.short-title }"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-c"}),": third column, default is"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'self => {\n  h(1fr)\n  utils.info-date(self)\n  h(1fr)\n  states.slide-counter.display() + " / " + states.last-slide-number\n  h(1fr)\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, the University theme provides an ",(0,t.jsx)(n.code,{children:"#alert[..]"})," function, which you can use with the ",(0,t.jsx)(n.code,{children:"#show strong: alert"})," syntax for emphasizing text with ",(0,t.jsx)(n.code,{children:"*alert text*"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,t.jsx)(n.p,{children:"The University theme defaults to the following color theme:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  primary: rgb("#04364A"),\n  secondary: rgb("#176B87"),\n  tertiary: rgb("#448C95"),\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can modify this color theme using ",(0,t.jsx)(n.code,{children:"#let s = (s.methods.colors)(self: s, ..)"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,t.jsx)(n.p,{children:"The University theme provides a series of custom slide functions:"}),"\n",(0,t.jsx)(n.h3,{id:"title-slide",children:"Title Slide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#title-slide(logo: none, authors: none, ..args)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"title-slide"})," function reads information from ",(0,t.jsx)(n.code,{children:"self.info"})," for display. You can also pass the ",(0,t.jsx)(n.code,{children:"logo"})," parameter and an array-type ",(0,t.jsx)(n.code,{children:"authors"})," parameter."]}),"\n",(0,t.jsx)(n.h3,{id:"regular-slide",children:"Regular Slide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // university theme\n  title: none,\n  subtitle: none,\n  header: none,\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default slide function with a title and footer. The ",(0,t.jsx)(n.code,{children:"title"})," defaults to the current section title, and the footer is set as per your configuration."]}),"\n",(0,t.jsx)(n.h3,{id:"focus-slide",children:"Focus Slide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#focus-slide(background-img: ..., background-color: ...)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Used to capture the audience's attention. The default background color is ",(0,t.jsx)(n.code,{children:"self.colors.primary"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"matrix-slide",children:"Matrix Slide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#matrix-slide(columns: ..., rows: ...)[\n  ...\n][\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/themes/gallery/university.html",children:"documentation"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"slides-function",children:[(0,t.jsx)(n.code,{children:"slides"})," Function"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"slides"})," function has parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"title-slide"}),": Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"slide-level"}),": Defaults to ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can set these parameters using ",(0,t.jsx)(n.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["And the function of automatically adding ",(0,t.jsx)(n.code,{children:"new-section-slide"})," can be turned off by ",(0,t.jsx)(n.code,{children:"#(s.methods.touying-new-section-slide = none)"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.university.register(aspect-ratio: "16-9")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/58971045-0b0d-46cb-acc2-caf766c2432d",alt:"image"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.university.register(aspect-ratio: "16-9")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n#show: slides.with(title-slide: false)\n\n#title-slide(authors: ([Author A], [Author B]))\n\n= The Section\n\n== Slide Title\n\n#slide[\n  #lorem(40)\n]\n\n#slide(subtitle: emph[What is the problem?])[\n  #lorem(40)\n]\n\n#focus-slide[\n  Another variant with primary color in background...\n]\n\n#matrix-slide[\n  left\n][\n  middle\n][\n  right\n]\n\n#matrix-slide(columns: 1)[\n  top\n][\n  bottom\n]\n\n#matrix-slide(columns: (1fr, 2fr, 1fr), ..(lorem(8),) * 9)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(7294);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);