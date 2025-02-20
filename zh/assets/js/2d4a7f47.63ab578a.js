"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9183],{19763:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var n=t(85893),i=t(11151);const c={slug:"touying-0-2-0",title:"Touying 0.2.0",authors:"orangex4",tags:["development"]},l=void 0,o={permalink:"/zh/blog/touying-0-2-0",editUrl:"https://github.com/touying-typ/touying/tree/main/docs/blog/2024-01-17-touying-0-2-0.md",source:"@site/blog/2024-01-17-touying-0-2-0.md",title:"Touying 0.2.0",description:"Touying 0.2.0 is done.",date:"2024-01-17T00:00:00.000Z",formattedDate:"2024\u5e741\u670817\u65e5",tags:[{label:"development",permalink:"/zh/blog/tags/development"}],readingTime:1.875,hasTruncateMarker:!1,authors:[{name:"OrangeX4",title:"Maintainer of Touying.",url:"https://github.com/OrangeX4",imageURL:"https://orangex4.cool/images/icons/profile.jpg",key:"orangex4"}],frontMatter:{slug:"touying-0-2-0",title:"Touying 0.2.0",authors:"orangex4",tags:["development"]},unlisted:!1},d={authorsImageUrls:[void 0]},r=[{value:"Implemented Features",id:"implemented-features",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Touying 0.2.0 is done."}),"\n",(0,n.jsx)(s.h2,{id:"implemented-features",children:"Implemented Features"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Object-oriented programming:"})," Singleton ",(0,n.jsx)(s.code,{children:"s"}),", binding methods ",(0,n.jsx)(s.code,{children:"utils.methods(s)"})," and ",(0,n.jsx)(s.code,{children:"(self: obj, ..) => {..}"})," methods."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Page arguments management:"})," Instead of using ",(0,n.jsx)(s.code,{children:"#set page(..)"}),", you should use ",(0,n.jsx)(s.code,{children:"self.page-args"})," to retrieve or set page parameters, thereby avoiding unnecessary creation of new pages."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"#pause"})," for sequence content:"]})," You can use #pause at the outermost level of a slide, including inline and list."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"#pause"})," for layout functions:"]})," You can use the ",(0,n.jsx)(s.code,{children:"composer"})," parameter to add yourself layout function like ",(0,n.jsx)(s.code,{children:"utils.side-by-side"}),", and simply use multiple pos parameters like ",(0,n.jsx)(s.code,{children:"#slide[..][..]"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"#meanwhile"})," for synchronous display:"]})," Provide a ",(0,n.jsx)(s.code,{children:"#meanwhile"})," for resetting subslides counter."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"#pause"})," and ",(0,n.jsx)(s.code,{children:"#meanwhile"})," for math equation:"]})," Provide a ",(0,n.jsx)(s.code,{children:'#touying-equation("x + y pause + z")'})," for math equation animations."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Slides:"})," Create simple slides using standard headings."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsxs)(s.strong,{children:["Callback-style ",(0,n.jsx)(s.code,{children:"uncover"}),", ",(0,n.jsx)(s.code,{children:"only"})," and ",(0,n.jsx)(s.code,{children:"alternatives"}),":"]})," Based on the concise syntax provided by Polylux, allow precise control of the timing for displaying content.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["You should manually control the number of subslides using the ",(0,n.jsx)(s.code,{children:"repeat"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Transparent cover:"})," Enable transparent cover using oop syntax like ",(0,n.jsx)(s.code,{children:"#let s = (s.methods.enable-transparent-cover)(self: s)"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Handout mode:"})," enable handout mode by ",(0,n.jsx)(s.code,{children:"#let s = (s.methods.enable-handout-mode)(self: s)"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Fit-to-width and fit-to-height:"})," Fit-to-width for title in header and fit-to-height for image.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"utils.fit-to-width(grow: true, shrink: true, width, body)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"utils.fit-to-height(width: none, prescale-width: none, grow: true, shrink: true, height, body)"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Slides counter:"})," ",(0,n.jsx)(s.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'})," and ",(0,n.jsx)(s.code,{children:"states.touying-progress(ratio => ..)"}),"."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Appendix:"})," Freeze the ",(0,n.jsx)(s.code,{children:"last-slide-number"})," to prevent the slide number from increasing further."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Sections:"})," Touying's built-in section support can be used to display the current section title and show progress.","\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.code,{children:"section"})," and ",(0,n.jsx)(s.code,{children:"subsection"})," parameter in ",(0,n.jsx)(s.code,{children:"#slide"})," to register a new section or subsection."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.code,{children:"states.current-section-title"})," to get the current section."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.code,{children:"states.touying-outline"})," or ",(0,n.jsx)(s.code,{children:"s.methods.touying-outline"})," to display a outline of sections."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.code,{children:"states.touying-final-sections(sections => ..)"})," for custom outline display."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.code,{children:"states.touying-progress-with-sections((current-sections: .., final-sections: .., current-slide-number: .., last-slide-number: ..) => ..)"})," for powerful progress display."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Navigation bar"}),": Navigation bar like ",(0,n.jsx)(s.a,{href:"https://github.com/zbowang/BeamerTheme",children:"here"})," by ",(0,n.jsx)(s.code,{children:"states.touying-progress-with-sections(..)"}),", in ",(0,n.jsx)(s.code,{children:"dewdrop"})," theme."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,n.jsx)(s.strong,{children:"Pdfpc:"})," pdfpc support and export ",(0,n.jsx)(s.code,{children:".pdfpc"})," file without external tool by ",(0,n.jsx)(s.code,{children:"typst query"})," command simply."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>l});var n=t(67294);const i={},c=n.createContext(i);function l(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);