"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6193],{66602:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=n(85893),s=n(11151);const l={sidebar_position:4},o="University Theme",r={id:"themes/university",title:"University Theme",description:"image",source:"@site/versioned_docs/version-0.3.x/themes/university.md",sourceDirName:"themes",slug:"/themes/university",permalink:"/docs/0.3.x/themes/university",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.x/themes/university.md",tags:[],version:"0.3.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dewdrop Theme",permalink:"/docs/0.3.x/themes/dewdrop"},next:{title:"Creating Your Own Theme",permalink:"/docs/0.3.x/build-your-own-theme"}},d={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Title Slide",id:"title-slide",level:3},{value:"Regular Slide",id:"regular-slide",level:3},{value:"Focus Slide",id:"focus-slide",level:3},{value:"Matrix Slide",id:"matrix-slide",level:3},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"university-theme",children:"University Theme"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://github.com/touying-typ/touying/assets/34951714/4095163c-0c16-4760-b370-8adc1cdd7e6c",alt:"image"})}),"\n",(0,t.jsxs)(i.p,{children:["This aesthetically pleasing theme is courtesy of ",(0,t.jsx)(i.a,{href:"https://github.com/drupol",children:"Pol Dellaiera"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(i.p,{children:"You can initialize the University theme using the following code:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.university.register(s, aspect-ratio: "16-9")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#let (slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"register"})," function accepts the following parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aspect-ratio"}),': Sets the aspect ratio of the slides to "16-9" or "4-3," with the default being "16-9."']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"progress-bar"}),": Controls whether the progress bar at the top of each slide is displayed, with the default being ",(0,t.jsx)(i.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Additionally, the University theme provides an ",(0,t.jsx)(i.code,{children:"#alert[..]"})," function, which you can use with the ",(0,t.jsx)(i.code,{children:"#show strong: alert"})," syntax for emphasizing text with ",(0,t.jsx)(i.code,{children:"*alert text*"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,t.jsx)(i.p,{children:"The University theme defaults to the following color theme:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  primary: rgb("#04364A"),\n  secondary: rgb("#176B87"),\n  tertiary: rgb("#448C95"),\n)\n'})}),"\n",(0,t.jsxs)(i.p,{children:["You can modify this color theme using ",(0,t.jsx)(i.code,{children:"#let s = (s.methods.colors)(self: s, ..)"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,t.jsx)(i.p,{children:"The University theme provides a series of custom slide functions:"}),"\n",(0,t.jsx)(i.h3,{id:"title-slide",children:"Title Slide"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:"#title-slide(logo: none, authors: none, ..args)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"title-slide"})," function reads information from ",(0,t.jsx)(i.code,{children:"self.info"})," for display. You can also pass the ",(0,t.jsx)(i.code,{children:"logo"})," parameter and an array-type ",(0,t.jsx)(i.code,{children:"authors"})," parameter."]}),"\n",(0,t.jsx)(i.h3,{id:"regular-slide",children:"Regular Slide"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // university theme\n  title: none,\n  subtitle: none,\n  header: none,\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The default slide function with a title and footer. The ",(0,t.jsx)(i.code,{children:"title"})," defaults to the current section title, and the footer is set as per your configuration."]}),"\n",(0,t.jsx)(i.h3,{id:"focus-slide",children:"Focus Slide"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:"#focus-slide(background-img: ..., background-color: ...)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Used to capture the audience's attention. The default background color is ",(0,t.jsx)(i.code,{children:"self.colors.primary"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"matrix-slide",children:"Matrix Slide"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:"#matrix-slide(columns: ..., rows: ...)[\n  ...\n][\n  ...\n]\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Refer to the ",(0,t.jsx)(i.a,{href:"https://polylux.dev/book/themes/gallery/university.html",children:"documentation"}),"."]}),"\n",(0,t.jsxs)(i.h2,{id:"slides-function",children:[(0,t.jsx)(i.code,{children:"slides"})," Function"]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"slides"})," function has parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"title-slide"}),": Defaults to ",(0,t.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"slide-level"}),": Defaults to ",(0,t.jsx)(i.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["You can set these parameters using ",(0,t.jsx)(i.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.university.register(s, aspect-ratio: "16-9")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#let (slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://github.com/touying-typ/touying/assets/34951714/58971045-0b0d-46cb-acc2-caf766c2432d",alt:"image"})}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.university.register(s, aspect-ratio: "16-9")\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#let (slide, title-slide, focus-slide, matrix-slide) = utils.slides(s)\n#show: slides.with(title-slide: false)\n\n#title-slide(authors: ([Author A], [Author B]))\n\n= The Section\n\n== Slide Title\n\n#slide[\n  #lorem(40)\n]\n\n#slide(subtitle: emph[What is the problem?])[\n  #lorem(40)\n]\n\n#focus-slide[\n  *Another variant with primary color in background...*\n]\n\n#matrix-slide[\n  left\n][\n  middle\n][\n  right\n]\n\n#matrix-slide(columns: 1)[\n  top\n][\n  bottom\n]\n\n#matrix-slide(columns: (1fr, 2fr, 1fr), ..(lorem(8),) * 9)\n'})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(67294);const s={},l=t.createContext(s);function o(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);