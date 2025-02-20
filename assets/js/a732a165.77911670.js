"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4288],{75349:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(85893),t=s(11151);const o={sidebar_position:1},a="Simple Animations",d={id:"dynamic/simple",title:"Simple Animations",description:"Touying provides two markers for simple animation effects: #pause and #meanwhile.",source:"@site/versioned_docs/version-0.4.0+/dynamic/simple.md",sourceDirName:"dynamic",slug:"/dynamic/simple",permalink:"/docs/0.4.0+/dynamic/simple",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.0+/dynamic/simple.md",tags:[],version:"0.4.0+",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dynamic Slides",permalink:"/docs/0.4.0+/category/dynamic-slides"},next:{title:"Complex Animations",permalink:"/docs/0.4.0+/dynamic/complex"}},c={},l=[{value:"pause",id:"pause",level:2},{value:"meanwhile",id:"meanwhile",level:2},{value:"Handling layout functions",id:"handling-layout-functions",level:2}];function r(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"simple-animations",children:"Simple Animations"}),"\n",(0,i.jsxs)(n.p,{children:["Touying provides two markers for simple animation effects: ",(0,i.jsx)(n.code,{children:"#pause"})," and ",(0,i.jsx)(n.code,{children:"#meanwhile"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"pause",children:"pause"}),"\n",(0,i.jsxs)(n.p,{children:["The purpose of ",(0,i.jsx)(n.code,{children:"#pause"})," is straightforward \u2013 it separates the subsequent content into the next subslide. You can use multiple ",(0,i.jsx)(n.code,{children:"#pause"})," to create multiple subslides. Here's a simple example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide[\n  First #pause Second\n\n  #pause\n\n  Third\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/a3bed1d3-e660-456d-8a54-a914436f43bf",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"This example will create three subslides, gradually revealing the content."}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, ",(0,i.jsx)(n.code,{children:"#pause"})," can be used inline or on a separate line."]}),"\n",(0,i.jsx)(n.h2,{id:"meanwhile",children:"meanwhile"}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, you may need to display additional content simultaneously with ",(0,i.jsx)(n.code,{children:"#pause"}),". In such cases, you can use ",(0,i.jsx)(n.code,{children:"#meanwhile"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:"#slide[\n  First\n  \n  #pause\n  \n  Second\n\n  #meanwhile\n\n  Third\n\n  #pause\n\n  Fourth\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/24ca19a3-b27c-4d31-ab75-09c37911e6ac",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:'This example will create only two subslides, with "First" and "Third" displayed simultaneously, and "Second" and "Fourth" displayed simultaneously.'}),"\n",(0,i.jsx)(n.h2,{id:"handling-layout-functions",children:"Handling layout functions"}),"\n",(0,i.jsxs)(n.p,{children:["If you use layout functions like ",(0,i.jsx)(n.code,{children:"grid"})," inside ",(0,i.jsx)(n.code,{children:"slide[..]"}),", you might be surprised to find that subsequent ",(0,i.jsx)(n.code,{children:"#pause"})," and ",(0,i.jsx)(n.code,{children:"#meanwhile"})," do not work. This is because Touying cannot detect the content inside layout functions. But you can use the ",(0,i.jsx)(n.code,{children:"composer"})," parameter of ",(0,i.jsx)(n.code,{children:"#slide()"})," to meet most requirements."]}),"\n",(0,i.jsx)(n.admonition,{title:"Internals",type:"tip",children:(0,i.jsxs)(n.p,{children:["Touying doesn't rely on ",(0,i.jsx)(n.code,{children:"counter"})," and ",(0,i.jsx)(n.code,{children:"locate"})," to implement ",(0,i.jsx)(n.code,{children:"#pause"}),". Instead, it has a parser written in Typst script. It parses the input content block as a sequence and then transforms and reorganizes this sequence into the series of subslides we need."]})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var i=s(67294);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);