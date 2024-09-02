"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3209],{8135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(5893),s=t(1151);const o={sidebar_position:2},l="Metropolis Theme",r={id:"themes/metropolis",title:"Metropolis Theme",description:"image",source:"@site/docs/themes/metropolis.md",sourceDirName:"themes",slug:"/themes/metropolis",permalink:"/docs/next/themes/metropolis",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/themes/metropolis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Simple Theme",permalink:"/docs/next/themes/simple"},next:{title:"Dewdrop Theme",permalink:"/docs/next/themes/dewdrop"}},d={},a=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"<code>slides</code> Function",id:"slides-function",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"metropolis-theme",children:"Metropolis Theme"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/383ceb22-f696-4450-83a6-c0f17e4597e1",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["This theme draws inspiration from Matthias Vogelgesang's ",(0,i.jsx)(n.a,{href:"https://github.com/matze/mtheme",children:"Metropolis beamer"})," theme and has been modified by ",(0,i.jsx)(n.a,{href:"https://github.com/Enivex",children:"Enivex"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The Metropolis theme is elegant and suitable for everyday use. It is recommended to have Fira Sans and Fira Math fonts installed on your computer for the best results."}),"\n",(0,i.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(n.p,{children:"You can initialize it using the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.0": *\n#import themes.metropolis: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: metropolis-theme.with(\n  aspect-ratio: "16-9",\n  footer: self => self.info.institution,\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.city,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"metropolis-theme"})," in the theme accepts the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, which can be "16-9" or "4-3", with a default of "16-9".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"align"}),": The alignment of the content within the slides, with a default of ",(0,i.jsx)(n.code,{children:"horizon"})," (horizontal alignment)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"header"}),": The content displayed in the header of the slides, with a default that displays the current heading adjusted to fit the width (",(0,i.jsx)(n.code,{children:"utils.display-current-heading(setting: utils.fit-to-width.with(grow: false, 100%))"}),"). Alternatively, you can provide a function like ",(0,i.jsx)(n.code,{children:"self => self.info.title"})," to customize the header content."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"header-right"}),": The content displayed on the right side of the header, with a default that shows the logo specified in ",(0,i.jsx)(n.code,{children:"self.info.logo"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer"}),": The content displayed in the footer of the slides, with a default of an empty array ",(0,i.jsx)(n.code,{children:"[]"}),". You can customize it with a function, for example, to display the author's information: ",(0,i.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-right"}),": The content displayed on the right side of the footer, with a default that shows the slide number and the total number of slides (",(0,i.jsx)(n.code,{children:'context utils.slide-counter.display() + " / " + utils.last-slide-number'}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-progress"}),": A boolean value indicating whether to display a progress bar at the bottom of the slides, with a default of ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,i.jsx)(n.p,{children:"Metropolis uses the following default color theme:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typc",children:'config-colors(\n  primary: rgb("#eb811b"),\n  primary-light: rgb("#d6c6b7"),\n  secondary: rgb("#23373b"),\n  neutral-lightest: rgb("#fafafa"),\n  neutral-dark: rgb("#23373b"),\n  neutral-darkest: rgb("#23373b"),\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can modify this color theme using ",(0,i.jsx)(n.code,{children:"config-colors()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,i.jsx)(n.p,{children:"The Metropolis theme provides a variety of custom slide functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"title-slide"})," reads information from ",(0,i.jsx)(n.code,{children:"self.info"})," for display, and you can also pass in an ",(0,i.jsx)(n.code,{children:"extra"})," parameter to display additional information."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide(\n  config: (:),\n  repeat: auto,\n  setting: body => body,\n  composer: components.side-by-side,\n  // metropolis theme\n  title: auto,\n  footer: auto,\n  align: horizon,\n)[\n  ...\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"A default slide with headers and footers, where the title defaults to the current section title, and the footer is what you set."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Used to draw attention, with the background color set to ",(0,i.jsx)(n.code,{children:"self.colors.primary-dark"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#new-section-slide(short-title: auto, title)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Creates a new section with the given title."}),"\n",(0,i.jsxs)(n.h2,{id:"slides-function",children:[(0,i.jsx)(n.code,{children:"slides"})," Function"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"slides"})," function has the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title-slide"}),": Defaults to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"outline-slide"}),": Defaults to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"slide-level"}),": Defaults to ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can set these using ",(0,i.jsx)(n.code,{children:"#show: slides.with(..)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["PS: You can modify the outline title using ",(0,i.jsx)(n.code,{children:"#(s.outline-title = [Outline])"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["And the function of automatically adding ",(0,i.jsx)(n.code,{children:"new-section-slide"})," can be turned off by ",(0,i.jsx)(n.code,{children:"#(s.methods.touying-new-section-slide = none)"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n\n#let s = themes.metropolis.register(aspect-ratio: "16-9", footer: self => self.info.institution)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, new-section-slide, focus-slide, touying-outline, alert) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/4ab45ee6-09f7-498b-b349-e889d6e42e3e",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.0": *\n#import themes.metropolis: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: metropolis-theme.with(\n  aspect-ratio: "16-9",\n  footer: self => self.info.institution,\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.city,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n\n= Outline <touying:hidden>\n\n#outline(title: none, indent: 1em, depth: 1)\n\n= First Section\n\nA slide without a title but with some *important* information.\n\n== A long long long long long long long long long long long long long long long long long long long long long long long long Title\n\nA slide with equation:\n\n$ x_(n+1) = (x_n + a/x_n) / 2 $\n\n#lorem(200)\n\n= Second Section\n\n#focus-slide[\n  Wake up!\n]\n\n== Simple Animation\n\nWe can use `#pause` to #pause display something later.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to display other content synchronously.\n\n#speaker-note[\n  + This is a speaker note.\n  + You won\'t see it unless you use `#let s = (s.math.show-notes-on-second-screen)(self: s, right)`\n]\n\n#show: appendix\n\n= Appendix\n\nPlease pay attention to the current slide number.\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(7294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);