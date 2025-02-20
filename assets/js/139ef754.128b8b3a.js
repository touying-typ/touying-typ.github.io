"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8016],{53717:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=i(85893),s=i(11151);const o={sidebar_position:3},l="Dewdrop Theme",d={id:"themes/dewdrop",title:"Dewdrop Theme",description:"image",source:"@site/versioned_docs/version-0.5.x/themes/dewdrop.md",sourceDirName:"themes",slug:"/themes/dewdrop",permalink:"/docs/0.5.x/themes/dewdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/themes/dewdrop.md",tags:[],version:"0.5.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Metropolis Theme",permalink:"/docs/0.5.x/themes/metropolis"},next:{title:"University Theme",permalink:"/docs/0.5.x/themes/university"}},r={},a=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dewdrop-theme",children:"Dewdrop Theme"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/0b5b2bb2-c6ec-45c0-9cea-0af2ed896bba",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["This theme takes inspiration from Zhibo Wang's ",(0,t.jsx)(n.a,{href:"https://github.com/zbowang/BeamerTheme",children:"BeamerTheme"})," and has been modified by ",(0,t.jsx)(n.a,{href:"https://github.com/OrangeX4",children:"OrangeX4"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The Dewdrop theme features an elegantly designed navigation, including two modes: ",(0,t.jsx)(n.code,{children:"sidebar"})," and ",(0,t.jsx)(n.code,{children:"mini-slides"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"You can initialize it using the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.5": *\n#import themes.dewdrop: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: dewdrop-theme.with(\n  aspect-ratio: "16-9",\n  footer: self => self.info.institution,\n  navigation: "mini-slides",\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n  ),\n)\n\n#title-slide()\n\n#outline-slide()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"register"})," function in the Dewdrop theme accepts the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, which can be "16-9" or "4-3", with a default of "16-9".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navigation"}),": The style of the navigation bar, which can be ",(0,t.jsx)(n.code,{children:'"sidebar"'}),", ",(0,t.jsx)(n.code,{children:'"mini-slides"'}),", or ",(0,t.jsx)(n.code,{children:"none"}),", with a default of ",(0,t.jsx)(n.code,{children:'"sidebar"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sidebar"}),": Settings for the sidebar navigation, with default values of ",(0,t.jsx)(n.code,{children:"(width: 10em, filled: false, numbered: false, indent: .5em, short-heading: true)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mini-slides"}),": Settings for the mini-slides navigation, with default values of ",(0,t.jsx)(n.code,{children:"(height: 4em, x: 2em, display-section: false, display-subsection: true, short-heading: true)"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"height"}),": The height of the mini-slides, with a default of ",(0,t.jsx)(n.code,{children:"2em"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x"}),": The x-axis padding for the mini-slides, with a default of ",(0,t.jsx)(n.code,{children:"2em"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"section"}),": Whether to display slides after the section and before the subsection, with a default of ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subsection"}),": Whether to separate mini-slides based on subsections, with a default of ",(0,t.jsx)(n.code,{children:"true"}),". Setting this to ",(0,t.jsx)(n.code,{children:"false"})," will squash them into a single line."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer"}),": The content displayed in the footer of the slides, with a default of an empty array ",(0,t.jsx)(n.code,{children:"[]"}),". You can customize it with a function, such as ",(0,t.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-right"}),": The content displayed on the right side of the footer, with a default of ",(0,t.jsx)(n.code,{children:'context utils.slide-counter.display() + " / " + utils.last-slide-number'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"primary"}),": The primary color of the theme, with a default of ",(0,t.jsx)(n.code,{children:'rgb("#0c4842")'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"alpha"}),": The transparency level, with a default of ",(0,t.jsx)(n.code,{children:"70%"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, the Dewdrop theme provides a ",(0,t.jsx)(n.code,{children:"#alert[..]"})," function, which you can use with the ",(0,t.jsx)(n.code,{children:"#show strong: alert"})," syntax to create emphasized alert text."]}),"\n",(0,t.jsx)(n.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,t.jsx)(n.p,{children:"The Dewdrop theme uses the following color scheme by default:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typc",children:'config-colors(\n  neutral-darkest: rgb("#000000"),\n  neutral-dark: rgb("#202020"),\n  neutral-light: rgb("#f3f3f3"),\n  neutral-lightest: rgb("#ffffff"),\n  primary: primary,\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can modify this color scheme using the ",(0,t.jsx)(n.code,{children:"config-colors()"})," function. This allows you to tailor the color palette of your slides to match the aesthetic you're aiming for or to conform to a specific branding guideline."]}),"\n",(0,t.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,t.jsx)(n.p,{children:"The Dewdrop theme provides a variety of custom slide functions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"title-slide"})," reads information from ",(0,t.jsx)(n.code,{children:"self.info"})," for display, and you can also pass in an ",(0,t.jsx)(n.code,{children:"extra"})," parameter to display additional information."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(\n  config: (:),\n  repeat: auto,\n  setting: body => body,\n  composer: components.side-by-side,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:"A default slide with navigation and footer, where the footer is what you set."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#focus-slide[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Used to draw attention, with the background color set to ",(0,t.jsx)(n.code,{children:"self.colors.primary"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.5": *\n#import themes.dewdrop: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: dewdrop-theme.with(\n  aspect-ratio: "16-9",\n  footer: self => self.info.institution,\n  navigation: "mini-slides",\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n\n#outline-slide()\n\n= Section A\n\n== Subsection A.1\n\n$ x_(n+1) = (x_n + a/x_n) / 2 $\n\n== Subsection A.2\n\nA slide without a title but with *important* infos\n\n= Section B\n\n== Subsection B.1\n\n#lorem(80)\n\n#focus-slide[\n  Wake up!\n]\n\n== Subsection B.2\n\nWe can use `#pause` to #pause display something later.\n\n#pause\n\nJust like this.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n\n#show: appendix\n\n= Appendix\n\n== Appendix\n\nPlease pay attention to the current slide number.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var t=i(67294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);