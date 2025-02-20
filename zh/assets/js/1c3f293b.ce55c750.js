"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3881],{76840:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(85893),t=n(11151);const l={sidebar_position:1},r="Simple \u4e3b\u9898",d={id:"themes/simple",title:"Simple \u4e3b\u9898",description:"image",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.2.x/themes/simple.md",sourceDirName:"themes",slug:"/themes/simple",permalink:"/zh/docs/0.2.x/themes/simple",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.2.x/themes/simple.md",tags:[],version:"0.2.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Themes",permalink:"/zh/docs/0.2.x/category/themes"},next:{title:"Metropolis \u4e3b\u9898",permalink:"/zh/docs/0.2.x/themes/metropolis"}},o={},c=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"slide \u51fd\u6570\u65cf",id:"slide-\u51fd\u6570\u65cf",level:2},{value:"<code>slides</code> \u51fd\u6570",id:"slides-\u51fd\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"simple-\u4e3b\u9898",children:"Simple \u4e3b\u9898"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/83d5295e-f961-4ffd-bc56-a7049848d408",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["\u8fd9\u4e2a\u4e3b\u9898\u6765\u6e90\u4e8e ",(0,i.jsx)(s.a,{href:"https://polylux.dev/book/themes/gallery/simple.html",children:"Polylux"}),"\uff0c\u4f5c\u8005\u662f Andreas Kr\xf6pelin\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u8fd9\u4e2a\u4e3b\u9898\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u76f8\u5bf9\u7b80\u5355\u7684\u4e3b\u9898\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355 slides\uff0c\u5e76\u4e14\u53ef\u4ee5\u968f\u610f\u52a0\u5165\u4f60\u559c\u6b22\u7684\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u521d\u59cb\u5316\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let s = themes.simple.register(s, aspect-ratio: "16-9", footer: [Simple slides])\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, centered-slide, focus-slide) = utils.methods(s)\n#show: init\n'})}),"\n",(0,i.jsxs)(s.p,{children:["\u5176\u4e2d ",(0,i.jsx)(s.code,{children:"register"})," \u63a5\u6536\u53c2\u6570:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"aspect-ratio"}),': \u5e7b\u706f\u7247\u7684\u957f\u5bbd\u6bd4\u4e3a "16-9" \u6216 "4-3"\uff0c\u9ed8\u8ba4\u4e3a "16-9"\u3002']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"footer"}),": \u5c55\u793a\u5728\u9875\u811a\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(s.code,{children:"[]"}),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u5f62\u5982 ",(0,i.jsx)(s.code,{children:"self => self.info.author"})," \u7684\u51fd\u6570\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"footer-right"}),": \u5c55\u793a\u5728\u9875\u811a\u53f3\u4fa7\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(s.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"background"}),": \u80cc\u666f\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"foreground"}),": \u6587\u672c\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a\u9ed1\u8272\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"primary"}),": \u4e3b\u9898\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(s.code,{children:"aqua.darken(50%)"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"slide-\u51fd\u6570\u65cf",children:"slide \u51fd\u6570\u65cf"}),"\n",(0,i.jsx)(s.p,{children:"simple \u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49 slide \u51fd\u6570\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:"#centered-slide(section: ..)[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5185\u5bb9\u4f4d\u4e8e\u5e7b\u706f\u7247\u4e2d\u592e\u7684\u5e7b\u706f\u7247\uff0c",(0,i.jsx)(s.code,{children:"section"})," \u53c2\u6570\u53ef\u4ee5\u7528\u4e8e\u65b0\u5efa\u4e00\u4e2a section\u3002"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:"#title-slide[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u548c ",(0,i.jsx)(s.code,{children:"centered-slide"})," \u76f8\u540c\uff0c\u8fd9\u91cc\u53ea\u662f\u4e3a\u4e86\u4fdd\u6301\u548c Polylux \u8bed\u6cd5\u4e0a\u7684\u4e00\u81f4\u6027\u3002"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:"#slide(\n  repeat: auto,\n  setting: body => body,\n  composer: utils.side-by-side,\n  section: none,\n  subsection: none,\n  // simple theme args\n  footer: auto,\n)[\n  ...\n]\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u9ed8\u8ba4\u62e5\u6709\u9875\u7709\u548c\u9875\u811a\u7684\u666e\u901a slide \u51fd\u6570\uff0c\u5176\u4e2d\u9875\u7709\u4e3a\u5f53\u524d section\uff0c\u9875\u811a\u4e3a\u60a8\u8bbe\u7f6e\u7684\u9875\u811a\u3002"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:"#focus-slide(foreground: ..., background: ...)[\n  ...\n]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u7528\u4e8e\u5f15\u8d77\u89c2\u4f17\u7684\u6ce8\u610f\u529b\u3002\u53ef\u9009\u63a5\u53d7\u4e00\u4e2a\u524d\u666f\u8272 (\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(s.code,{children:"white"}),") \u548c\u4e00\u4e2a\u80cc\u666f\u8272 (\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(s.code,{children:"auto"}),"\uff0c\u5373 ",(0,i.jsx)(s.code,{children:"self.colors.primary"}),")\u3002"]}),"\n",(0,i.jsxs)(s.h2,{id:"slides-\u51fd\u6570",children:[(0,i.jsx)(s.code,{children:"slides"})," \u51fd\u6570"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let s = themes.simple.register(s, aspect-ratio: "16-9", footer: [Simple slides])\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, centered-slide, focus-slide) = utils.methods(s)\n#show: init\n\n#show: slides\n\n= Title\n\n== First Slide\n\nHello, Touying!\n\n#pause\n\nHello, Typst!\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://github.com/touying-typ/touying/assets/34951714/2c599bd1-6250-497f-a65b-f19ae02a16cb",alt:"image"})}),"\n",(0,i.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typst",children:'#import "@preview/touying:0.2.1": *\n\n#let s = themes.simple.register(s, aspect-ratio: "16-9", footer: [Simple slides])\n#let s = (s.methods.enable-transparent-cover)(self: s)\n#let (init, slide, slides, title-slide, centered-slide, focus-slide) = utils.methods(s)\n#show: init\n\n#title-slide[\n  = Keep it simple!\n  #v(2em)\n\n  Alpha #footnote[Uni Augsburg] #h(1em)\n  Bravo #footnote[Uni Bayreuth] #h(1em)\n  Charlie #footnote[Uni Chemnitz] #h(1em)\n\n  July 23\n]\n\n#slide[\n  == First slide\n\n  #lorem(20)\n]\n\n#focus-slide[\n  _Focus!_\n\n  This is very important.\n]\n\n#centered-slide(section: [Let\'s start a new section!])\n\n#slide[\n  == Dynamic slide\n  Did you know that...\n\n  #pause\n  ...you can see the current section at the top of the slide?\n]\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>r});var i=n(67294);const t={},l=i.createContext(t);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);