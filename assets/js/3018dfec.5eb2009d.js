"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[308],{158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const a={sidebar_position:5},s="Page Layout",r={id:"layout",title:"Page Layout",description:"Basic Concepts",source:"@site/versioned_docs/version-0.5.x/layout.md",sourceDirName:".",slug:"/layout",permalink:"/docs/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/layout.md",tags:[],version:"0.5.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Code Style",permalink:"/docs/code-styles"},next:{title:"Global Settings",permalink:"/docs/global-settings"}},d={},c=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Page Management",id:"page-management",level:2},{value:"Page Columnization",id:"page-columnization",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"page-layout",children:"Page Layout"}),"\n",(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsx)(n.p,{children:"To create stylish slides using Typst, it's essential to understand Typst's page model correctly. If you're not concerned with customizing page styles, you can choose to skip this section. However, it's still recommended to go through it."}),"\n",(0,i.jsx)(n.p,{children:"Let's illustrate Typst's default page model through a specific example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#let container = rect.with(height: 100%, width: 100%, inset: 0pt)\n#let innerbox = rect.with(stroke: (dash: "dashed"))\n\n#set text(size: 30pt)\n#set page(\n  paper: "presentation-16-9",\n  header: container[#innerbox[Header]],\n  header-ascent: 30%,\n  footer: container[#innerbox[Footer]],\n  footer-descent: 30%,\n)\n\n#place(top + right)[Margin\u2192]\n#container[\n  #container[\n    #innerbox[Content]\n  ]\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/70d48053-c777-4253-a9ca-ada360b5a987",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"We need to distinguish the following concepts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Model:"})," Typst has a model similar to the CSS Box Model, divided into Margin, Padding, and Content. However, padding is not a property of ",(0,i.jsx)(n.code,{children:"set page(..)"})," but is obtained by manually adding ",(0,i.jsx)(n.code,{children:"#pad(..)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Margin:"})," Margins are the edges of the page, divided into top, bottom, left, and right. They are the core of Typst's page model, and all other properties are influenced by margins, especially Header and Footer. Header and Footer are actually located within the Margin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Header:"})," The Header is the content at the top of the page, divided into container and innerbox. We can observe that the edge of the header container and padding does not align but has some space in between, which is actually ",(0,i.jsx)(n.code,{children:"header-ascent: 30%"}),", where the percentage is relative to the margin-top. Additionally, we notice that the header innerbox is actually located at the bottom left corner of the header container, meaning innerbox defaults to ",(0,i.jsx)(n.code,{children:"#set align(left + bottom)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Footer:"})," The Footer is the content at the bottom of the page, similar to the Header but in the opposite direction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Place:"})," The ",(0,i.jsx)(n.code,{children:"place"})," function enables absolute positioning relative to the parent container without affecting other elements inside the parent container. It allows specifying ",(0,i.jsx)(n.code,{children:"alignment"}),", ",(0,i.jsx)(n.code,{children:"dx"}),", and ",(0,i.jsx)(n.code,{children:"dy"}),", making it suitable for placing decorative elements like logos."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Therefore, to apply Typst to create slides, we only need to set:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#set page(\n  margin: (x: 4em, y: 2em),\n  header: align(top)[Header],\n  footer: align(bottom)[Footer],\n  header-ascent: 0em,\n  footer-descent: 0em,\n)\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, we still need to address how the header occupies the entire page width. Here, we use negative padding to achieve this. For instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#let container = rect.with(stroke: (dash: "dashed"), height: 100%, width: 100%, inset: 0pt)\n#let innerbox = rect.with(fill: rgb("#d0d0d0"))\n#let margin = (x: 4em, y: 2em)\n\n// negative padding for header and footer\n#let negative-padding = pad.with(x: -margin.x, y: 0em)\n\n#set text(size: 30pt)\n#set page(\n  paper: "presentation-16-9",\n  margin: margin,\n  header: negative-padding[#container[#align(top)[#innerbox(width: 100%)[Header]]]],\n  header-ascent: 0em,\n  footer: negative-padding[#container[#align(bottom)[#innerbox(width: 100%)[Footer]]]],\n  footer-descent: 0em,\n)\n\n#place(top + right)[\u2191Margin\u2192]\n#container[\n  #container[\n    #innerbox[Content]\n  ]\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/d74896f4-90e7-4b36-a5a9-9c44307eb192",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"page-management",children:"Page Management"}),"\n",(0,i.jsxs)(n.p,{children:["In Typst, using the ",(0,i.jsx)(n.code,{children:"set page(..)"})," command to modify page parameters results in the creation of a new page, rather than modifying the current one. Therefore, Touying opts to maintain a ",(0,i.jsx)(n.code,{children:"self.page"})," member variable."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the previous example can be rewritten as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#show: default-theme.with(\n  config-page(\n    margin: (x: 4em, y: 2em),\n    header: align(top)[Header],\n    footer: align(bottom)[Footer],\n    header-ascent: 0em,\n    footer-descent: 0em,\n  ),\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Touying will automatically detect the value of ",(0,i.jsx)(n.code,{children:"margin.x"})," and determine whether to apply negative padding to the header if ",(0,i.jsx)(n.code,{children:"config-common(zero-margin-header: true)"})," is set, which is equivalent to ",(0,i.jsx)(n.code,{children:"self.zero-margin-header = true"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Similarly, if you are not satisfied with the style of the header or footer of a particular theme, you can also modify it through:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"config-page(footer: [Custom Footer])\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,i.jsxs)(n.p,{children:["Therefore, you should not use the ",(0,i.jsx)(n.code,{children:"set page(..)"})," command yourself, as it will be reset by Touying."]})}),"\n",(0,i.jsxs)(n.p,{children:["With this approach, we can also query the current page parameters in real-time using ",(0,i.jsx)(n.code,{children:"self.page"}),", which is very useful for functions that need to obtain the page margins or the current page background color, such as ",(0,i.jsx)(n.code,{children:"transparent-cover"}),". This is somewhat equivalent to context get rule, and in practice, it is more convenient to use."]}),"\n",(0,i.jsx)(n.h2,{id:"page-columnization",children:"Page Columnization"}),"\n",(0,i.jsxs)(n.p,{children:["If you need to divide a page into two or three columns, you can use the ",(0,i.jsx)(n.code,{children:"composer"})," feature provided by the default ",(0,i.jsx)(n.code,{children:"slide"})," function in Touying. The simplest example is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/a39f88a2-f1ba-4420-8f78-6a0fc644704e",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to change the way columns are divided, you can modify the ",(0,i.jsx)(n.code,{children:"composer"})," parameter of ",(0,i.jsx)(n.code,{children:"slide"}),", where the default parameter is ",(0,i.jsx)(n.code,{children:"components.side-by-side.with(columns: auto, gutter: 1em)"}),". If we want the left column to take up the remaining width, we can use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide(composer: (1fr, auto))[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/aa84192a-4082-495d-9773-b06df32ab8dc",alt:"image"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);