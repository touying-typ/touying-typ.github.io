"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1074],{94992:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(85893),s=i(11151);const o={sidebar_position:4},l="University Theme",r={id:"themes/university",title:"University Theme",description:"image",source:"@site/versioned_docs/version-0.5.x/themes/university.md",sourceDirName:"themes",slug:"/themes/university",permalink:"/docs/0.5.x/themes/university",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/themes/university.md",tags:[],version:"0.5.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dewdrop Theme",permalink:"/docs/0.5.x/themes/dewdrop"},next:{title:"Aqua Theme",permalink:"/docs/0.5.x/themes/aqua"}},d={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Slide Function Family",id:"slide-function-family",level:2},{value:"Focus Slide",id:"focus-slide",level:3},{value:"Matrix Slide",id:"matrix-slide",level:3},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"university-theme",children:"University Theme"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/4095163c-0c16-4760-b370-8adc1cdd7e6c",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["This aesthetically pleasing theme is courtesy of ",(0,t.jsx)(n.a,{href:"https://github.com/drupol",children:"Pol Dellaiera"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"You can initialize the theme with the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.5": *\n#import themes.university: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: university-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"register"})," function accepts the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aspect-ratio"}),': The aspect ratio of the slides, either "16-9" or "4-3", with a default of "16-9".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"progress-bar"}),": Whether to display a progress bar at the top of the slide, with a default of ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"header"}),": The content displayed in the header, with a default of ",(0,t.jsx)(n.code,{children:"utils.display-current-heading(level: 2)"}),", or you can pass a function like ",(0,t.jsx)(n.code,{children:"self => self.info.title"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"header-right"}),": The content displayed on the right side of the header, with a default of ",(0,t.jsx)(n.code,{children:"self => self.info.logo"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-columns"}),": The widths of the three columns in the footer, with a default of ",(0,t.jsx)(n.code,{children:"(25%, 1fr, 25%)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-a"}),": The first column, with a default of ",(0,t.jsx)(n.code,{children:"self => self.info.author"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-b"}),": The second column, with a default of ",(0,t.jsx)(n.code,{children:"self => if self.info.short-title == auto { self.info.title } else { self.info.short-title }"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"footer-c"}),": The third column, with a default of"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'self => {\n  h(1fr)\n  utils.display-info-date(self)\n  h(1fr)\n  context utils.slide-counter.display() + " / " + utils.last-slide-number\n  h(1fr)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,t.jsx)(n.p,{children:"The University theme uses the following color scheme by default:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typc",children:'config-colors(\n  primary: rgb("#04364A"),\n  secondary: rgb("#176B87"),\n  tertiary: rgb("#448C95"),\n  neutral-lightest: rgb("#ffffff"),\n  neutral-darkest: rgb("#000000"),\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can modify this color scheme using ",(0,t.jsx)(n.code,{children:"config-colors()"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"slide-function-family",children:"Slide Function Family"}),"\n",(0,t.jsx)(n.p,{children:"The University theme provides a series of custom slide functions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#title-slide(logo: none, authors: none, ..args)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"title-slide"})," function reads information from ",(0,t.jsx)(n.code,{children:"self.info"})," for display, and you can also pass a ",(0,t.jsx)(n.code,{children:"logo"})," parameter and an array-type ",(0,t.jsx)(n.code,{children:"authors"})," parameter."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(\n  config: (:),\n  repeat: auto,\n  setting: body => body,\n  composer: components.side-by-side,\n  // university theme\n  title: none,\n)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A standard slide function with a title and footer by default, where ",(0,t.jsx)(n.code,{children:"title"})," defaults to the current section title, and the footer is the one you set."]}),"\n",(0,t.jsx)(n.h3,{id:"focus-slide",children:"Focus Slide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#focus-slide(background-img: ..., background-color: ...)[\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Used to capture the audience's attention. The default background color is ",(0,t.jsx)(n.code,{children:"self.colors.primary"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"matrix-slide",children:"Matrix Slide"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#matrix-slide(columns: ..., rows: ...)[\n  ...\n][\n  ...\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/themes/gallery/university.html",children:"documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.5": *\n#import themes.university: *\n\n#import "@preview/numbly:0.1.0": numbly\n\n#show: university-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#title-slide(authors: ([Author A], [Author B]))\n\n= The Section\n\n== Slide Title\n\n#lorem(40)\n\n#focus-slide[\n  Another variant with primary color in background...\n]\n\n#matrix-slide[\n  left\n][\n  middle\n][\n  right\n]\n\n#matrix-slide(columns: 1)[\n  top\n][\n  bottom\n]\n\n#matrix-slide(columns: (1fr, 2fr, 1fr), ..(lorem(8),) * 9)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(67294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);