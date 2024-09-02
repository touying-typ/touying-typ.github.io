"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[417],{137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const s={sidebar_position:1},d="Pdfpc",r={id:"external/pdfpc",title:"Pdfpc",description:'pdfpc is a "Presenter Console with multi-monitor support for PDF files." This means you can use it to display slides in the form of PDF pages and it comes with some known excellent features, much like PowerPoint.',source:"@site/versioned_docs/version-0.3.x/external/pdfpc.md",sourceDirName:"external",slug:"/external/pdfpc",permalink:"/docs/0.3.x/external/pdfpc",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.x/external/pdfpc.md",tags:[],version:"0.3.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"External Tools",permalink:"/docs/0.3.x/category/external-tools"},next:{title:"Typst Preview",permalink:"/docs/0.3.x/external/typst-preview"}},a={},c=[{value:"Adding Metadata",id:"adding-metadata",level:2},{value:"Pdfpc Configuration",id:"pdfpc-configuration",level:2},{value:"Exporting .pdfpc File",id:"exporting-pdfpc-file",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pdfpc",children:"Pdfpc"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://pdfpc.github.io/",children:"pdfpc"}),' is a "Presenter Console with multi-monitor support for PDF files." This means you can use it to display slides in the form of PDF pages and it comes with some known excellent features, much like PowerPoint.']}),"\n",(0,i.jsxs)(n.p,{children:["pdfpc has a JSON-formatted ",(0,i.jsx)(n.code,{children:".pdfpc"})," file that can provide additional information for PDF slides. While you can manually write this file, you can also manage it through Touying."]}),"\n",(0,i.jsx)(n.h2,{id:"adding-metadata",children:"Adding Metadata"}),"\n",(0,i.jsxs)(n.p,{children:["Touying remains consistent with ",(0,i.jsx)(n.a,{href:"https://polylux.dev/book/external/pdfpc.html",children:"Polylux"})," to avoid conflicts between APIs."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can add notes using ",(0,i.jsx)(n.code,{children:'#pdfpc.speaker-note("This is a note that only the speaker will see.")'}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"pdfpc-configuration",children:"Pdfpc Configuration"}),"\n",(0,i.jsx)(n.p,{children:"To add pdfpc configurations, you can use"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.append-preamble)(self: s, pdfpc.config(\n  duration-minutes: 30,\n  start-time: datetime(hour: 14, minute: 10, second: 0),\n  end-time: datetime(hour: 14, minute: 40, second: 0),\n  last-minutes: 5,\n  note-font-size: 12,\n  disable-markdown: false,\n  default-transition: (\n    type: "push",\n    duration-seconds: 2,\n    angle: ltr,\n    alignment: "vertical",\n    direction: "inward",\n  ),\n))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Add the corresponding configurations. Refer to ",(0,i.jsx)(n.a,{href:"https://polylux.dev/book/external/pdfpc.html",children:"Polylux"})," for specific configuration details."]}),"\n",(0,i.jsx)(n.h2,{id:"exporting-pdfpc-file",children:"Exporting .pdfpc File"}),"\n",(0,i.jsxs)(n.p,{children:["Assuming your document is ",(0,i.jsx)(n.code,{children:"./example.typ"}),", you can export the ",(0,i.jsx)(n.code,{children:".pdfpc"})," file directly using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc\n'})}),"\n",(0,i.jsx)(n.p,{children:"With the compatibility of Touying and Polylux, you can make Polylux also support direct export by adding the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1"\n\n#locate(loc => touying.pdfpc.pdfpc-file(loc))\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var i=t(7294);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);