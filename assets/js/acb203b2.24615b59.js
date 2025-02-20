"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1956],{74955:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var n=i(85893),s=i(11151);const o={sidebar_position:2},d="Fit to Height / Width",h={id:"utilities/fit-to",title:"Fit to Height / Width",description:"Thanks to ntjess for the code.",source:"@site/versioned_docs/version-0.4.1/utilities/fit-to.md",sourceDirName:"utilities",slug:"/utilities/fit-to",permalink:"/docs/0.4.1/utilities/fit-to",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/utilities/fit-to.md",tags:[],version:"0.4.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Object-Oriented Programming",permalink:"/docs/0.4.1/utilities/oop"},next:{title:"Changelog",permalink:"/docs/0.4.1/changelog"}},r={},c=[{value:"Fit to Height",id:"fit-to-height",level:2},{value:"Fit to Width",id:"fit-to-width",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fit-to-height--width",children:"Fit to Height / Width"}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/ntjess",children:"ntjess"})," for the code."]}),"\n",(0,n.jsx)(t.h2,{id:"fit-to-height",children:"Fit to Height"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to make an image fill the remaining slide height, you can try the ",(0,n.jsx)(t.code,{children:"fit-to-height"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#utils.fit-to-height(1fr)[BIG]\n"})}),"\n",(0,n.jsx)(t.p,{children:"Function definition:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#let fit-to-height(\n  width: none, prescale-width: none, grow: true, shrink: true, height, body\n) = { .. }\n"})}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"width"}),": If specified, this will determine the width of the content after scaling. So, if you want the scaled content to fill half of the slide width, you can use ",(0,n.jsx)(t.code,{children:"width: 50%"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"prescale-width"}),": This parameter allows you to make Typst's layout assume that the given content is to be laid out in a container of a certain width before scaling. For example, you can use ",(0,n.jsx)(t.code,{children:"prescale-width: 200%"})," assuming the slide's width is twice the original."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"grow"}),": Whether it can grow, default is ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"shrink"}),": Whether it can shrink, default is ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"height"}),": The specified height."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"body"}),": The specific content."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"fit-to-width",children:"Fit to Width"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to limit the title width to exactly fill the slide width, you can try the ",(0,n.jsx)(t.code,{children:"fit-to-width"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#utils.fit-to-width(1fr)[#lorem(20)]\n"})}),"\n",(0,n.jsx)(t.p,{children:"Function definition:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"#let fit-to-width(grow: true, shrink: true, width, body) = { .. }\n"})}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"grow"}),": Whether it can grow, default is ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"shrink"}),": Whether it can shrink, default is ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"width"}),": The specified width."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"body"}),": The specific content."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>h,a:()=>d});var n=i(67294);const s={},o=n.createContext(s);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);