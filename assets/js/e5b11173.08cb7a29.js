"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5332],{11847:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var i=n(85893),t=n(11151);const l={sidebar_position:4},o="Code Style",d={id:"code-styles",title:"Code Style",description:"Simple Style",source:"@site/versioned_docs/version-0.3.x/code-styles.md",sourceDirName:".",slug:"/code-styles",permalink:"/docs/0.3.x/code-styles",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.3.x/code-styles.md",tags:[],version:"0.3.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sections and Subsections",permalink:"/docs/0.3.x/sections"},next:{title:"Page Layout",permalink:"/docs/0.3.x/layout"}},c={},r=[{value:"Simple Style",id:"simple-style",level:2},{value:"Block Style",id:"block-style",level:2},{value:"Convention Over Configuration",id:"convention-over-configuration",level:2}];function a(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"code-style",children:"Code Style"}),"\n",(0,i.jsx)(s.h2,{id:"simple-style",children:"Simple Style"}),"\n",(0,i.jsxs)(s.p,{children:["If we only need simplicity, we can directly input content under the heading, just like writing a normal Typst document. The heading here serves to divide the pages, and we can use commands like ",(0,i.jsx)(s.code,{children:"#pause"})," to achieve animation effects."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f5bdbf8f-7bf9-45fd-9923-0fa5d66450b2",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["You can use an empty heading ",(0,i.jsx)(s.code,{children:"=="})," to create a new page. This skill also helps clear the continuation of the previous title."]}),"\n",(0,i.jsxs)(s.p,{children:["PS: We can use the ",(0,i.jsx)(s.code,{children:"#slides-end"})," marker to signify the end of ",(0,i.jsx)(s.code,{children:"#show: slides"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"block-style",children:"Block Style"}),"\n",(0,i.jsxs)(s.p,{children:["Many times, using simple style alone cannot achieve all the functions we need. For more powerful features and clearer structure, we can also use block style in the form of ",(0,i.jsx)(s.code,{children:"#slide[...]"}),". The ",(0,i.jsx)(s.code,{children:"#slide"})," function needs to be unpacked using the syntax ",(0,i.jsx)(s.code,{children:"#let (slide,) = utils.slides(s)"})," to be used correctly after ",(0,i.jsx)(s.code,{children:"#show: slides"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"For example, the previous example can be transformed into:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\n#slide[\n  Hello, Touying!\n\n  #pause\n\n  Hello, Typst!\n]\n'})}),"\n",(0,i.jsx)(s.p,{children:"There are many advantages to doing this:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Many times, we not only need the default ",(0,i.jsx)(s.code,{children:"#slide[...]"})," but also special ",(0,i.jsx)(s.code,{children:"slide"})," functions like ",(0,i.jsx)(s.code,{children:"#focus-slide[...]"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Different themes' ",(0,i.jsx)(s.code,{children:"#slide[...]"})," functions may have more parameters than the default, such as the university theme's ",(0,i.jsx)(s.code,{children:"#slide[...]"})," function having a ",(0,i.jsx)(s.code,{children:"subtitle"})," parameter."]}),"\n",(0,i.jsxs)(s.li,{children:["Only ",(0,i.jsx)(s.code,{children:"slide"})," functions can use the callback-style content block to achieve complex animation effects with ",(0,i.jsx)(s.code,{children:"#only"})," and ",(0,i.jsx)(s.code,{children:"#uncover"})," functions."]}),"\n",(0,i.jsxs)(s.li,{children:["It has a clearer structure. By identifying ",(0,i.jsx)(s.code,{children:"#slide[...]"})," blocks, we can easily distinguish the specific pagination effects of slides."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"convention-over-configuration",children:"Convention Over Configuration"}),"\n",(0,i.jsxs)(s.p,{children:["You may have noticed that when using the simple theme, using a level-one heading automatically creates a new section slide. This is because the simple theme registers an ",(0,i.jsx)(s.code,{children:"s.methods.touying-new-section-slide"})," method, so Touying will automatically call this method."]}),"\n",(0,i.jsx)(s.p,{children:"If we don't want it to automatically create such a section slide, we can delete this method:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#(s.methods.touying-new-section-slide = none)\n#let (init, slides) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/17a89a59-9491-4e1f-95c0-09a22105ab35",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:"As you can see, there are only two pages left, and the default section slide is gone."}),"\n",(0,i.jsx)(s.p,{children:"Similarly, we can register a new section slide:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#(s.methods.touying-new-section-slide = (self: none, section, ..args) => {\n  self = utils.empty-page(self)\n  (s.methods.touying-slide)(self: self, section: section, {\n    set align(center + horizon)\n    set text(size: 2em, fill: s.colors.primary, style: "italic", weight: "bold")\n    section\n  }, ..args)\n})\n#let (init, slides, touying-outline) = utils.methods(s)\n#show: init\n\n#let (slide,) = utils.slides(s)\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/5305efda-0cd4-42eb-9f2e-89abc30b6ca2",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["Similarly, we can modify ",(0,i.jsx)(s.code,{children:"s.methods.touying-new-subsection-slide"})," to do the same for ",(0,i.jsx)(s.code,{children:"subsection"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In fact, besides ",(0,i.jsx)(s.code,{children:"s.methods.touying-new-section-slide"}),", another special ",(0,i.jsx)(s.code,{children:"slide"})," function is the ",(0,i.jsx)(s.code,{children:"s.methods.slide"})," function, which will be called by default in simple style when ",(0,i.jsx)(s.code,{children:"#slide[...]"})," is not explicitly used."]}),"\n",(0,i.jsxs)(s.p,{children:["Also, since ",(0,i.jsx)(s.code,{children:"#slide[...]"})," is registered in ",(0,i.jsx)(s.code,{children:'s.slides = ("slide",)'}),", the ",(0,i.jsx)(s.code,{children:"section"}),", ",(0,i.jsx)(s.code,{children:"subsection"}),", and ",(0,i.jsx)(s.code,{children:"title"})," parameters will be automatically passed, while others like ",(0,i.jsx)(s.code,{children:"#focus-slide[...]"})," will not automatically receive these three parameters."]}),"\n",(0,i.jsxs)(s.admonition,{title:"Principle",type:"tip",children:[(0,i.jsxs)(s.p,{children:["In fact, you can also not use ",(0,i.jsx)(s.code,{children:"#show: slides"})," and ",(0,i.jsx)(s.code,{children:"utils.slides(s)"}),", but only use ",(0,i.jsx)(s.code,{children:"utils.methods(s)"}),", for example:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.3.1": *\n\n#let s = themes.simple.register(s)\n#let (init, touying-outline, slide) = utils.methods(s)\n#show: init\n\n#slide(section: [Title], title: [First Slide])[\n  Hello, Touying!\n\n  #pause\n\n  Hello, Typst!\n]\n'})}),(0,i.jsxs)(s.p,{children:["Here, you need to manually pass in ",(0,i.jsx)(s.code,{children:"section"}),", ",(0,i.jsx)(s.code,{children:"subsection"}),", and ",(0,i.jsx)(s.code,{children:"title"}),", but it will have better performance, suitable for cases where faster performance is needed, such as when there are more than dozens or hundreds of pages."]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>o});var i=n(67294);const t={},l=i.createContext(t);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);