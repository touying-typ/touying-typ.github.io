"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2559],{2887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(5893),s=n(1151);const i={sidebar_position:6},l="Global Settings",a={id:"global-settings",title:"Global Settings",description:"Global Styles",source:"@site/versioned_docs/version-0.5.x/global-settings.md",sourceDirName:".",slug:"/global-settings",permalink:"/docs/global-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/global-settings.md",tags:[],version:"0.5.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Page Layout",permalink:"/docs/layout"},next:{title:"Multi-File Architecture",permalink:"/docs/multi-file"}},r={},d=[{value:"Global Styles",id:"global-styles",level:2},{value:"Global Information",id:"global-information",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"global-settings",children:"Global Settings"}),"\n",(0,o.jsx)(t.h2,{id:"global-styles",children:"Global Styles"}),"\n",(0,o.jsxs)(t.p,{children:["For Touying, global styles refer to set rules or show rules that need to be applied everywhere, such as ",(0,o.jsx)(t.code,{children:"#set text(size: 20pt)"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Themes in Touying encapsulate some of their own global styles, which are placed in ",(0,o.jsx)(t.code,{children:"#self.methods.init"}),". For example, the simple theme encapsulates:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typst",children:"config-methods(\n  init: (self: none, body) => {\n    set text(fill: self.colors.neutral-darkest, size: 25pt)\n    show footnote.entry: set text(size: .6em)\n    show strong: self.methods.alert.with(self: self)\n    show heading.where(level: self.slide-level + 1): set text(1.4em)\n\n    body\n  },\n)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you are not a theme creator but simply want to add some of your own global styles to your slides, you can easily place them before or after ",(0,o.jsx)(t.code,{children:"#show: xxx-theme.with()"}),". For example, the metropolis theme recommends that you add the following global styles yourself:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typst",children:'#set text(font: "Fira Sans", weight: "light", size: 20pt)\n#show math.equation: set text(font: "Fira Math")\n#set strong(delta: 100)\n#set par(justify: true)\n'})}),"\n",(0,o.jsx)(t.h2,{id:"global-information",children:"Global Information"}),"\n",(0,o.jsx)(t.p,{children:"Like Beamer, Touying helps you better maintain global information through a unified API design, allowing you to easily switch between different themes. Global information is a typical example of this."}),"\n",(0,o.jsx)(t.p,{children:"You can set the title, subtitle, author, date, and institution information of your slides with:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typc",children:"config-info(\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Later on, you can access them through ",(0,o.jsx)(t.code,{children:"self.info"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This information is generally used in the theme's ",(0,o.jsx)(t.code,{children:"title-slide"}),", ",(0,o.jsx)(t.code,{children:"header"}),", and ",(0,o.jsx)(t.code,{children:"footer"}),", such as ",(0,o.jsx)(t.code,{children:'#show: metropolis-theme.with(aspect-ratio: "16-9", footer: self => self.info.institution)'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"date"})," can accept ",(0,o.jsx)(t.code,{children:"datetime"})," format and ",(0,o.jsx)(t.code,{children:"content"})," format, and the date display format of the ",(0,o.jsx)(t.code,{children:"datetime"})," format can be changed with:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typc",children:'config-common(datetime-format: "[year]-[month]-[day]")\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var o=n(7294);const s={},i=o.createContext(s);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);