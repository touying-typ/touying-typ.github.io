"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[834],{6481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const o={sidebar_position:6},r="Stargazer Theme",l={id:"themes/stargazer",title:"Stargazer Theme",description:"image",source:"@site/versioned_docs/version-0.5.x/themes/stargazer.md",sourceDirName:"themes",slug:"/themes/stargazer",permalink:"/docs/themes/stargazer",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/themes/stargazer.md",tags:[],version:"0.5.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Aqua Theme",permalink:"/docs/themes/aqua"},next:{title:"Custom Theme",permalink:"/docs/themes/custom"}},a={},d=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"stargazer-theme",children:"Stargazer Theme"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/user-attachments/assets/4950008f-ac64-47ab-a7ca-cdf15361ba0f",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["The Stargazer theme, originally created by ",(0,i.jsx)(n.a,{href:"https://github.com/Coekjan/",children:"Coekjan"})," for the ",(0,i.jsx)(n.a,{href:"https://github.com/Coekjan/touying-buaa",children:"touying-buaa"})," project, is an aesthetically pleasing and versatile theme suitable for everyday use."]}),"\n",(0,i.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(n.p,{children:"You can initialize the theme with the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.2": *\n#import themes.stargazer: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: stargazer-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Stargazer in Touying: Customize Your Slide Title Here],\n    subtitle: [Customize Your Slide Subtitle Here],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n\n#outline-slide()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"stargazer-theme"})," accepts the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, either "16-9" or "4-3", with a default of "16-9".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"align"}),": The alignment of the slides, with a default of ",(0,i.jsx)(n.code,{children:"horizon"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alpha"}),": The transparency of the slides, with a default of ",(0,i.jsx)(n.code,{children:"20%"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title"}),": The content displayed in the header, with a default of ",(0,i.jsx)(n.code,{children:"utils.display-current-heading()"}),", or you can pass a function like ",(0,i.jsx)(n.code,{children:"self => self.info.title"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"progress-bar"}),": Whether to display a progress bar at the bottom of the slide, with a default of ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-columns"}),": The widths of the three footer columns, with a default of ",(0,i.jsx)(n.code,{children:"(25%, 25%, 1fr, 5em)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-a"}),": The first column, with a default of ",(0,i.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-b"}),": The second column, with a default of ",(0,i.jsx)(n.code,{children:"self => utils.display-info-date(self)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-c"}),": The third column, with a default of ",(0,i.jsx)(n.code,{children:"self => if self.info.short-title == auto { self.info.title } else { self.info.short-title }"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"footer-d"}),": The fourth column, with a default of ",(0,i.jsx)(n.code,{children:'context utils.slide-counter.display() + " / " + utils.last-slide-number'}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,i.jsx)(n.p,{children:"The Stargazer theme uses the following color scheme by default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typc",children:'config-colors(\n  primary: rgb("#005bac"),\n  primary-dark: rgb("#004078"),\n  secondary: rgb("#ffffff"),\n  tertiary: rgb("#005bac"),\n  neutral-lightest: rgb("#ffffff"),\n  neutral-darkest: rgb("#000000"),\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can modify this color scheme using ",(0,i.jsx)(n.code,{children:"config-colors()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,i.jsx)(n.p,{children:"The Stargazer theme offers a variety of custom slide functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#title-slide(extra: none, ..args)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"title-slide"})," reads information from ",(0,i.jsx)(n.code,{children:"self.info"})," for display, and you can also pass an ",(0,i.jsx)(n.code,{children:"extra"})," parameter for additional information."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide(\n  config: (:),\n  repeat: auto,\n  setting: body => body,\n  composer: components.side-by-side,\n  // stargazer theme\n  title: auto,\n  footer: auto,\n  align: horizon,\n)[  \n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A standard slide function with a title and footer by default, where ",(0,i.jsx)(n.code,{children:"title"})," defaults to the current section title, and the footer is the one you set."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#outline-slide[  \n  ...\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Used to add a table of contents slide."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#focus-slide[  \n  ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Used to draw the audience's attention. The background color is ",(0,i.jsx)(n.code,{children:"self.colors.primary-dark"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#new-section-slide(short-title: auto, title)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Start a new section with the given title."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.2": *\n#import themes.stargazer: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: stargazer-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Stargazer in Touying: Customize Your Slide Title Here],\n    subtitle: [Customize Your Slide Subtitle Here],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n\n#outline-slide()\n\n= Section A\n\n== Subsection A.1\n\n#tblock(title: [Theorem])[\n  A simple theorem.\n\n  $ x_(n+1) = (x_n + a / x_n) / 2 $\n]\n\n== Subsection A.2\n\nA slide without a title but with *important* information.\n\n= Section B\n\n== Subsection B.1\n\n#lorem(80)\n\n#focus-slide[\n  Wake up!\n]\n\n== Subsection B.2\n\nWe can use `#pause` to #pause display something later.\n\n#pause\n\nJust like this.\n\n#meanwhile\n\nMeanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.\n\n#show: appendix\n\n= Appendix\n\n== Appendix\n\nPlease pay attention to the current slide number.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);