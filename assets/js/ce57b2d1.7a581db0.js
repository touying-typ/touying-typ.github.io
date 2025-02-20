"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2868],{18575:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=i(85893),t=i(11151);const l={sidebar_position:3},o="Dewdrop Theme",d={id:"themes/dewdrop",title:"Dewdrop Theme",description:"image",source:"@site/versioned_docs/version-0.2.x/themes/dewdrop.md",sourceDirName:"themes",slug:"/themes/dewdrop",permalink:"/docs/0.2.x/themes/dewdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.2.x/themes/dewdrop.md",tags:[],version:"0.2.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Metropolis Theme",permalink:"/docs/0.2.x/themes/metropolis"},next:{title:"University Theme",permalink:"/docs/0.2.x/themes/university"}},r={},a=[{value:"Initialization",id:"initialization",level:2},{value:"Color Themes",id:"color-themes",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Special Functions",id:"special-functions",level:2},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dewdrop-theme",children:"Dewdrop Theme"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/23a8a9be-1f7c-43f7-88d4-40604dd6b01b",alt:"image"})}),"\n",(0,s.jsxs)(n.p,{children:["This theme is inspired by ",(0,s.jsx)(n.a,{href:"https://github.com/zbowang/BeamerTheme",children:"BeamerTheme"})," created by Zhibo Wang and transformed by ",(0,s.jsx)(n.a,{href:"https://github.com/OrangeX4",children:"OrangeX4"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The Dewdrop theme features an elegant and aesthetic navigation, including ",(0,s.jsx)(n.code,{children:"sidebar"})," and ",(0,s.jsx)(n.code,{children:"mini-slides"})," modes."]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(n.p,{children:"You can initialize the Dewdrop theme using the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let s = themes.dewdrop.register(\n  s,\n  aspect-ratio: "16-9",\n  footer: [Dewdrop],\n  navigation: "mini-slides",\n  // navigation: "sidebar",\n  // navigation: none,\n)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, focus-slide, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"register"})," function takes parameters such as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, either "16-9" or "4-3," with the default being "16-9."']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"navigation"}),': Style of the navigation bar, which can be "sidebar," "mini-slides," or ',(0,s.jsx)(n.code,{children:"none"}),', with the default being "sidebar."']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sidebar"}),": Settings for the sidebar navigation, with the default being ",(0,s.jsx)(n.code,{children:"(width: 10em)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mini-slides"}),": Settings for mini-slides, with the default being ",(0,s.jsx)(n.code,{children:"(height: 2em, x: 2em, section: false, subsection: true)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer"}),": Content to be displayed in the footer, with the default being ",(0,s.jsx)(n.code,{children:"[]"}),". You can also pass a function like ",(0,s.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer-right"}),": Content to be displayed on the right side of the footer, with the default being ",(0,s.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"primary"}),": Primary color, with the default being ",(0,s.jsx)(n.code,{children:'rgb("#0c4842")'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alpha"}),": Transparency, with the default being ",(0,s.jsx)(n.code,{children:"70%"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The Dewdrop theme also provides an ",(0,s.jsx)(n.code,{children:"#alert[..]"})," function that you can use with the ",(0,s.jsx)(n.code,{children:"#show strong: alert"})," syntax."]}),"\n",(0,s.jsx)(n.h2,{id:"color-themes",children:"Color Themes"}),"\n",(0,s.jsx)(n.p,{children:"Dewdrop uses the following default color theme:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.colors)(\n  self: s,\n  neutral-darkest: rgb("#000000"),\n  neutral-dark: rgb("#202020"),\n  neutral-light: rgb("#f3f3f3"),\n  neutral-lightest: rgb("#ffffff"),\n  primary: primary,\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the color theme using ",(0,s.jsx)(n.code,{children:"#let s = (s.methods.colors)(self: s, ..)"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,s.jsx)(n.p,{children:"Dewdrop theme provides a series of custom slide functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"title-slide"})," reads information from ",(0,s.jsx)(n.code,{children:"self.info"})," for display. You can also pass an ",(0,s.jsx)(n.code,{children:"extra"})," parameter to display additional information."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // Dewdrop theme\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is the default ordinary slide function with a navigation bar and footer according to your settings."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Used to draw attention. The background color is ",(0,s.jsx)(n.code,{children:"self.colors.primary"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"special-functions",children:"Special Functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#d-outline(enum-args: (:), list-args: (:), cover: true)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Displays the current outline. The ",(0,s.jsx)(n.code,{children:"cover"})," parameter specifies whether to hide sections that are inactive."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#d-sidebar()\n"})}),"\n",(0,s.jsx)(n.p,{children:"An internal function for displaying the sidebar."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#d-mini-slides()\n"})}),"\n",(0,s.jsx)(n.p,{children:"An internal function for displaying mini-slides."}),"\n",(0,s.jsxs)(n.h2,{id:"slides-function",children:[(0,s.jsx)(n.code,{children:"slides"})," Function"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"slides"})," function has parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title-slide"}),": Default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outline-slide"}),": Default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outline-title"}),": Default is ",(0,s.jsx)(n.code,{children:"[Outline]"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can set these using ",(0,s.jsx)(n.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let s = themes.dewdrop.register(s, aspect-ratio: "16-9", footer: [Dewdrop])\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, focus-slide, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/09ddfb40-4f97-4062-8261-23f87690c33e",alt:"image"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let s = themes.dewdrop.register(\n  s,\n  aspect-ratio: "16-9",\n  footer: [Dewdrop],\n  navigation: "mini-slides",\n  // navigation: "sidebar",\n  // navigation: none,\n)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let s = (s.methods.enable-transparent-cover)(self: s)\n// #let s = (s.methods.appendix-in-outline)(self: s, false)\n#let (init, slide, title-slide, focus-slide, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#title-slide()\n\n#slide[\n  == Outline\n  \n  #touying-outline(cover: false)\n]\n\n#slide(section: [Section A])[\n  == Outline\n  \n  #touying-outline()\n]\n\n#slide(subsection: [Subsection A.1])[\n  == Title\n\n  A slide with equation:\n\n  $ x_(n+1) = (x_n + a/x_n) / 2 $\n]\n\n#slide(subsection: [Subsection A.2])[\n  == Important\n\n  A slide without a title but with *important* infos\n]\n\n#slide(section: [Section B])[\n  == Outline\n  \n  #touying-outline()\n]\n\n#slide(subsection: [Subsection B.1])[\n  == Another Subsection\n\n  #lorem(80)\n]\n\n#focus-slide[\n  Wake up!\n]\n\n// simple animations\n#slide(subsection: [Subsection B.2])[\n  == Dynamic\n\n  a simple #pause dynamic slide with #alert[alert]\n\n  #pause\n  \n  text.\n]\n\n// appendix by freezing last-slide-number\n#let s = (s.methods.appendix)(self: s)\n#let (slide,) = utils.methods(s)\n\n#slide(section: [Appendix])[\n  == Outline\n  \n  #touying-outline()\n]\n\n#slide[\n  appendix\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(67294);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);