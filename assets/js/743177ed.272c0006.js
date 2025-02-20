"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4432],{69230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(85893),o=t(11151);const a={sidebar_position:5},s="Page Layout",r={id:"layout",title:"Page Layout",description:"Basic Concepts",source:"@site/versioned_docs/version-0.4.1/layout.md",sourceDirName:".",slug:"/layout",permalink:"/docs/0.4.1/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/layout.md",tags:[],version:"0.4.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Code Style",permalink:"/docs/0.4.1/code-styles"},next:{title:"Global Settings",permalink:"/docs/0.4.1/global-settings"}},d={},l=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Page Management",id:"page-management",level:2},{value:"Application: Adding a Logo",id:"application-adding-a-logo",level:2},{value:"Page Columns",id:"page-columns",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"page-layout",children:"Page Layout"}),"\n",(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsx)(n.p,{children:"To create stylish slides using Typst, it's essential to understand Typst's page model correctly. If you're not concerned with customizing page styles, you can choose to skip this section. However, it's still recommended to go through it."}),"\n",(0,i.jsx)(n.p,{children:"Let's illustrate Typst's default page model through a specific example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#let container = rect.with(height: 100%, width: 100%, inset: 0pt)\n#let innerbox = rect.with(stroke: (dash: "dashed"))\n\n#set text(size: 30pt)\n#set page(\n  paper: "presentation-16-9",\n  header: container[#innerbox[Header]],\n  header-ascent: 30%,\n  footer: container[#innerbox[Footer]],\n  footer-descent: 30%,\n)\n\n#place(top + right)[Margin\u2192]\n#container[\n  #container[\n    #innerbox[Content]\n  ]\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/70d48053-c777-4253-a9ca-ada360b5a987",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"We need to distinguish the following concepts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Model:"})," Typst has a model similar to the CSS Box Model, divided into Margin, Padding, and Content. However, padding is not a property of ",(0,i.jsx)(n.code,{children:"set page(..)"})," but is obtained by manually adding ",(0,i.jsx)(n.code,{children:"#pad(..)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Margin:"})," Margins are the edges of the page, divided into top, bottom, left, and right. They are the core of Typst's page model, and all other properties are influenced by margins, especially Header and Footer. Header and Footer are actually located within the Margin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Header:"})," The Header is the content at the top of the page, divided into container and innerbox. We can observe that the edge of the header container and padding does not align but has some space in between, which is actually ",(0,i.jsx)(n.code,{children:"header-ascent: 30%"}),", where the percentage is relative to the margin-top. Additionally, we notice that the header innerbox is actually located at the bottom left corner of the header container, meaning innerbox defaults to ",(0,i.jsx)(n.code,{children:"#set align(left + bottom)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Footer:"})," The Footer is the content at the bottom of the page, similar to the Header but in the opposite direction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Place:"})," The ",(0,i.jsx)(n.code,{children:"place"})," function enables absolute positioning relative to the parent container without affecting other elements inside the parent container. It allows specifying ",(0,i.jsx)(n.code,{children:"alignment"}),", ",(0,i.jsx)(n.code,{children:"dx"}),", and ",(0,i.jsx)(n.code,{children:"dy"}),", making it suitable for placing decorative elements like logos."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Therefore, to apply Typst to create slides, we only need to set:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#set page(\n  margin: (x: 4em, y: 2em),\n  header: align(top)[Header],\n  footer: align(bottom)[Footer],\n  header-ascent: 0em,\n  footer-descent: 0em,\n)\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, we still need to address how the header occupies the entire page width. Here, we use negative padding to achieve this. For instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#let container = rect.with(stroke: (dash: "dashed"), height: 100%, width: 100%, inset: 0pt)\n#let innerbox = rect.with(fill: rgb("#d0d0d0"))\n#let margin = (x: 4em, y: 2em)\n\n// negative padding for header and footer\n#let negative-padding = pad.with(x: -margin.x, y: 0em)\n\n#set text(size: 30pt)\n#set page(\n  paper: "presentation-16-9",\n  margin: margin,\n  header: negative-padding[#container[#align(top)[#innerbox(width: 100%)[Header]]]],\n  header-ascent: 0em,\n  footer: negative-padding[#container[#align(bottom)[#innerbox(width: 100%)[Footer]]]],\n  footer-descent: 0em,\n)\n\n#place(top + right)[\u2191Margin\u2192]\n#container[\n  #container[\n    #innerbox[Content]\n  ]\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/d74896f4-90e7-4b36-a5a9-9c44307eb192",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"page-management",children:"Page Management"}),"\n",(0,i.jsxs)(n.p,{children:["Since modifying page parameters using the ",(0,i.jsx)(n.code,{children:"set page(..)"})," command in Typst creates a new page instead of modifying the current one, Touying chooses to maintain a ",(0,i.jsx)(n.code,{children:"s.page-args"})," member variable and a ",(0,i.jsx)(n.code,{children:"s.padding"})," member variable. These parameters are only applied when Touying creates a new slide, so users only need to focus on ",(0,i.jsx)(n.code,{children:"s.page-args"})," and ",(0,i.jsx)(n.code,{children:"s.padding"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the previous example can be modified as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#(s.page-args += (\n  margin: (x: 4em, y: 2em),\n  header: align(top)[Header],\n  footer: align(bottom)[Footer],\n  header-ascent: 0em,\n  footer-descent: 0em,\n))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Touying automatically detects the value of ",(0,i.jsx)(n.code,{children:"margin.x"})," and adds negative padding to the header if ",(0,i.jsx)(n.code,{children:"self.full-header == true"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Similarly, if you're unsatisfied with the header or footer style of a particular theme, you can change it using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#(s.page-args.footer = [Custom Footer])\n"})}),"\n",(0,i.jsxs)(n.p,{children:["However, it's essential to note that if you change page parameters in this way, you need to place it before ",(0,i.jsx)(n.code,{children:"#let (slide, empty-slide) = utils.slides(s)"}),", or you'll have to call ",(0,i.jsx)(n.code,{children:"#let (slide, empty-slide) = utils.slides(s)"})," again."]}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,i.jsxs)(n.p,{children:["Therefore, you should not use the ",(0,i.jsx)(n.code,{children:"set page(..)"})," command directly but instead modify the ",(0,i.jsx)(n.code,{children:"s.page-args"})," member variable internally."]})}),"\n",(0,i.jsxs)(n.p,{children:["This approach also allows us to query the current page parameters in real-time using ",(0,i.jsx)(n.code,{children:"s.page-args"}),", which is useful for functions that need to obtain margins or the current page's background color, such as ",(0,i.jsx)(n.code,{children:"transparent-cover"}),". This is partially equivalent to context get rule and is actually more convenient to use."]}),"\n",(0,i.jsx)(n.h2,{id:"application-adding-a-logo",children:"Application: Adding a Logo"}),"\n",(0,i.jsxs)(n.p,{children:["Adding a logo to slides is a very common but also a very versatile requirement. The difficulty lies in the fact that the required size and position of the logo often vary from person to person. Therefore, most of Touying's themes do not include configuration options for logos. But with the concepts of page layout mentioned in this section, we know that we can use the ",(0,i.jsx)(n.code,{children:"place"})," function in the header or footer to place a logo image."]}),"\n",(0,i.jsx)(n.p,{children:"For example, suppose we decide to add the GitHub icon to the metropolis theme. We can implement it like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n#import "@preview/octique:0.1.0": *\n\n#let s = themes.metropolis.register(aspect-ratio: "16-9")\n#(s.page-args.header = self => {\n  // display the original header\n  utils.call-or-display(self, s.page-args.header)\n  // place logo at the top-right\n  place(top + right, dx: -0.5em, dy: 0.3em)[\n    #octique("mark-github", color: rgb("#fafafa"), width: 1.5em, height: 1.5em)\n  ]\n})\n#let (init, slide) = utils.methods(s)\n#show: init\n\n#slide(title: [Title])[\n  Logo example.\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/055d77e7-5087-4248-b969-d8ef9d50c54b",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"utils.call-or-display(self, body)"})," can be used to display ",(0,i.jsx)(n.code,{children:"body"})," as content or a callback function in the form ",(0,i.jsx)(n.code,{children:"self => content"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"page-columns",children:"Page Columns"}),"\n",(0,i.jsxs)(n.p,{children:["If you need to divide the page into two or three columns, you can use the ",(0,i.jsx)(n.code,{children:"compose"})," feature provided by the default ",(0,i.jsx)(n.code,{children:"slide"})," function in Touying. The simplest example is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/a39f88a2-f1ba-4420-8f78-6a0fc644704e",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to change the way columns are composed, you can modify the ",(0,i.jsx)(n.code,{children:"composer"})," parameter of ",(0,i.jsx)(n.code,{children:"slide"}),". The default parameter is ",(0,i.jsx)(n.code,{children:"utils.side-by-side.with(columns: auto, gutter: 1em)"}),". If we want the left column to occupy the remaining width, we can use"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide(composer: (1fr, auto))[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/aa84192a-4082-495d-9773-b06df32ab8dc",alt:"image"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);