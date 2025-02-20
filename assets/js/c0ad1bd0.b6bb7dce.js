"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6603],{48423:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(85893),i=s(11151);const o={sidebar_position:3},c="Sections and Subsections",r={id:"sections",title:"Sections and Subsections",description:"Structure",source:"@site/versioned_docs/version-0.6.x/sections.md",sourceDirName:".",slug:"/sections",permalink:"/docs/sections",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.6.x/sections.md",tags:[],version:"0.6.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/start"},next:{title:"Code Style",permalink:"/docs/code-styles"}},d={},l=[{value:"Structure",id:"structure",level:2},{value:"Numbering",id:"numbering",level:2},{value:"Table of Contents",id:"table-of-contents",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sections-and-subsections",children:"Sections and Subsections"}),"\n",(0,t.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"Like Beamer, Touying also has the concept of sections and subsections."}),"\n",(0,t.jsx)(n.p,{children:"Generally, first-level, second-level, and third-level headings correspond to sections, subsections, and subsubsections, respectively, such as in the dewdrop theme."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.6.0": *\n#import themes.dewdrop: *\n\n#show: dewdrop-theme.with(aspect-ratio: "16-9")\n\n= Section\n\n== Subsection\n\n=== Title\n\nHello, Touying!\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/34f5e293-29e3-4aa3-bb74-c2d4914560c6",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"However, there are many times when we do not need subsections, so we also use first-level and second-level headings to correspond to sections and titles, respectively, such as in the university theme."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.6.0": *\n#import themes.university: *\n\n#show: university-theme.with(aspect-ratio: "16-9")\n\n= Section\n\n== Title\n\nHello, Touying!\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/eb38627c-58ef-4319-897e-846697576a6b",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["In fact, we can control this behavior through the ",(0,t.jsx)(n.code,{children:"slide-level"})," parameter of the ",(0,t.jsx)(n.code,{children:"config-common"})," function. ",(0,t.jsx)(n.code,{children:"slide-level"})," represents the complexity of the nesting structure, starting from 0. For example, ",(0,t.jsx)(n.code,{children:"#show: university-theme.with(config-common(slide-level: 2))"})," is equivalent to both ",(0,t.jsx)(n.code,{children:"section"})," and ",(0,t.jsx)(n.code,{children:"subsection"})," creating new slides; while ",(0,t.jsx)(n.code,{children:"#show: university-theme.with(config-common(slide-level: 3))"})," is equivalent to ",(0,t.jsx)(n.code,{children:"section"}),", ",(0,t.jsx)(n.code,{children:"subsection"}),", and ",(0,t.jsx)(n.code,{children:"subsubsection"})," all creating new slides."]}),"\n",(0,t.jsx)(n.h2,{id:"numbering",children:"Numbering"}),"\n",(0,t.jsx)(n.p,{children:"To add numbering to sections and subsections, we simply use"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#set heading(numbering: "1.1")\n#show heading.where(level: 1): set heading(numbering: "1.")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This sets the default numbering to ",(0,t.jsx)(n.code,{children:"1.1"}),", and the section corresponds to the numbering ",(0,t.jsx)(n.code,{children:"1."}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(n.p,{children:"Displaying a table of contents in Touying is straightforward:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.6.0": *\n#import themes.simple: *\n#import "@preview/numbly:0.1.0": numbly\n\n#set heading(numbering: numbly("{1}.", default: "1.1"))\n\n#show: simple-theme.with(aspect-ratio: "16-9")\n\n= Section\n\n== Subsection\n\n#components.adaptive-columns(outline(indent: 1em))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/2674a632-e881-432f-a212-a55bcc7207c1",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"outline(indent: 1em)"})," is a native Typst function for the table of contents. The ",(0,t.jsx)(n.code,{children:"#components.adaptive-columns()"})," function ensures that the table of contents occupies only one page, adapting by setting ",(0,t.jsx)(n.code,{children:"#columns(1, body)"})," or ",(0,t.jsx)(n.code,{children:"#columns(2, body)"}),", and so on."]}),"\n",(0,t.jsxs)(n.p,{children:["If you need a ",(0,t.jsx)(n.code,{children:"outline"})," function that can display the current progress, you might consider using ",(0,t.jsx)(n.code,{children:"#components.progressive-outline()"})," or ",(0,t.jsx)(n.code,{children:"#components.custom-progressive-outline()"}),", as seen in the dewdrop theme."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var t=s(67294);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);