"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5850],{8714:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=s(5893),i=s(1151);const o={sidebar_position:6},l="\u5168\u5c40\u8bbe\u7f6e",d={id:"global-settings",title:"\u5168\u5c40\u8bbe\u7f6e",description:"\u5168\u5c40\u6837\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/global-settings.md",sourceDirName:".",slug:"/global-settings",permalink:"/touying/zh/docs/next/global-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/global-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u9875\u9762\u5e03\u5c40",permalink:"/touying/zh/docs/next/layout"},next:{title:"\u591a\u6587\u4ef6\u67b6\u6784",permalink:"/touying/zh/docs/next/multi-file"}},r={},c=[{value:"\u5168\u5c40\u6837\u5f0f",id:"\u5168\u5c40\u6837\u5f0f",level:2},{value:"\u5168\u5c40\u4fe1\u606f",id:"\u5168\u5c40\u4fe1\u606f",level:2},{value:"\u72b6\u6001\u521d\u59cb\u5316",id:"\u72b6\u6001\u521d\u59cb\u5316",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5168\u5c40\u8bbe\u7f6e",children:"\u5168\u5c40\u8bbe\u7f6e"}),"\n",(0,t.jsx)(n.h2,{id:"\u5168\u5c40\u6837\u5f0f",children:"\u5168\u5c40\u6837\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9 Touying \u800c\u8a00\uff0c\u5168\u5c40\u6837\u5f0f\u5373\u4e3a\u9700\u8981\u5e94\u7528\u5230\u6240\u6709\u5730\u65b9\u7684 set rules \u6216 show rules\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"#set text(size: 20pt)"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0cTouying \u7684\u4e3b\u9898\u4f1a\u5c01\u88c5\u4e00\u4e9b\u81ea\u5df1\u7684\u5168\u5c40\u6837\u5f0f\uff0c\u4ed6\u4eec\u4f1a\u88ab\u653e\u5728 ",(0,t.jsx)(n.code,{children:"#show: init"})," \u4e2d\uff0c\u4f8b\u5982 university \u4e3b\u9898\u5c31\u5c01\u88c5\u4e86"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"self.methods.init = (self: none, body) => {\n  set text(size: 25pt)\n  show footnote.entry: set text(size: .6em)\n  body\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e76\u975e\u4e00\u4e2a\u4e3b\u9898\u5236\u4f5c\u8005\uff0c\u800c\u53ea\u662f\u60f3\u7ed9\u4f60\u7684 slides \u6dfb\u52a0\u4e00\u4e9b\u81ea\u5df1\u7684\u5168\u5c40\u6837\u5f0f\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u5b83\u4eec\u653e\u5728 ",(0,t.jsx)(n.code,{children:"#show: init"})," \u4e4b\u540e\uff0c\u4ee5\u53ca ",(0,t.jsx)(n.code,{children:"#show: slides"})," \u4e4b\u524d\uff0c\u4f8b\u5982 metropolis \u4e3b\u9898\u5c31\u63a8\u8350\u4f60\u81ea\u884c\u52a0\u5165\u4ee5\u4e0b\u5168\u5c40\u6837\u5f0f\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#let s = themes.metropolis.register(aspect-ratio: "16-9")\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n// global styles\n#set text(font: "Fira Sans", weight: "light", size: 20pt)\n#show math.equation: set text(font: "Fira Math")\n#set strong(delta: 100)\n#set par(justify: true)\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, new-section-slide, focus-slide) = utils.slides(s)\n#show: slides\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f46\u662f\u6ce8\u610f\uff0c\u4f60\u4e0d\u5e94\u8be5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"#set page(..)"}),"\uff0c\u800c\u662f\u5e94\u8be5\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"s.page-args"})," \u548c ",(0,t.jsx)(n.code,{children:"s.padding"}),"\uff0c\u4f8b\u5982"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#(s.page-args += (\n  margin: (x: 0em, y: 2em),\n  header: align(top)[Header],\n  footer: align(bottom)[Footer],\n  header-ascent: 0em,\n  footer-descent: 0em,\n))\n#(s.padding += (x: 4em, y: 0em))\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5168\u5c40\u4fe1\u606f",children:"\u5168\u5c40\u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:"\u5c31\u50cf Beamer \u4e00\u6837\uff0cTouying \u901a\u8fc7 OOP \u98ce\u683c\u7684\u7edf\u4e00 API \u8bbe\u8ba1\uff0c\u80fd\u591f\u5e2e\u52a9\u60a8\u66f4\u597d\u5730\u7ef4\u62a4\u5168\u5c40\u4fe1\u606f\uff0c\u8ba9\u60a8\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u4e0d\u540c\u7684\u4e3b\u9898\u4e4b\u95f4\u5207\u6362\uff0c\u5168\u5c40\u4fe1\u606f\u5c31\u662f\u4e00\u4e2a\u5f88\u5178\u578b\u7684\u4f8b\u5b50\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u522b\u8bbe\u7f6e slides \u7684\u6807\u9898\u3001\u526f\u6807\u9898\u3001\u4f5c\u8005\u3001\u65e5\u671f\u548c\u673a\u6784\u4fe1\u606f\u3002\u5728\u540e\u7eed\uff0c\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"s.info"})," \u6216 ",(0,t.jsx)(n.code,{children:"self.info"})," \u8fd9\u6837\u7684\u65b9\u5f0f\u8bbf\u95ee\u5b83\u4eec\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e9b\u4fe1\u606f\u4e00\u822c\u4f1a\u5728\u4e3b\u9898\u7684 ",(0,t.jsx)(n.code,{children:"title-slide"}),"\u3001",(0,t.jsx)(n.code,{children:"header"})," \u548c ",(0,t.jsx)(n.code,{children:"footer"})," \u88ab\u4f7f\u7528\u5230\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:'#let s = themes.metropolis.register(aspect-ratio: "16-9", footer: self => self.info.institution)'}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"date"})," \u53ef\u4ee5\u63a5\u6536 ",(0,t.jsx)(n.code,{children:"datetime"})," \u683c\u5f0f\u548c ",(0,t.jsx)(n.code,{children:"content"})," \u683c\u5f0f\uff0c\u5e76\u4e14 ",(0,t.jsx)(n.code,{children:"datetime"})," \u683c\u5f0f\u7684\u65e5\u671f\u663e\u793a\u683c\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#let s = (s.methods.datetime-format)(self: s, "[year]-[month]-[day]")\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7684\u65b9\u5f0f\u66f4\u6539\u3002"}),"\n",(0,t.jsxs)(n.admonition,{title:"\u539f\u7406",type:"tip",children:[(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f1a\u7a0d\u5fae\u5f15\u5165\u4e00\u70b9 Touying \u7684 OOP \u6982\u5ff5\u3002"}),(0,t.jsxs)(n.p,{children:["\u60a8\u5e94\u8be5\u77e5\u9053\uff0cTypst \u662f\u4e00\u4e2a\u652f\u6301\u589e\u91cf\u6e32\u67d3\u7684\u6392\u7248\u8bed\u8a00\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0cTypst \u4f1a\u7f13\u5b58\u4e4b\u524d\u7684\u51fd\u6570\u8c03\u7528\u7ed3\u679c\uff0c\u8fd9\u5c31\u8981\u6c42 Typst \u91cc\u53ea\u6709\u7eaf\u51fd\u6570\uff0c\u5373\u65e0\u6cd5\u6539\u53d8\u5916\u90e8\u53d8\u91cf\u7684\u51fd\u6570\u3002\u56e0\u6b64\u6211\u4eec\u5f88\u96be\u771f\u6b63\u610f\u4e49\u4e0a\u5730\u50cf LaTeX \u90a3\u6837\u4fee\u6539\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u3002\u5373\u4f7f\u662f\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"state"})," \u6216 ",(0,t.jsx)(n.code,{children:"counter"}),"\uff0c\u4e5f\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"locate"})," \u4e0e\u56de\u8c03\u51fd\u6570\u6765\u83b7\u53d6\u91cc\u9762\u7684\u503c\uff0c\u4e14\u5b9e\u9645\u4e0a\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5bf9\u6027\u80fd\u6709\u5f88\u5927\u7684\u5f71\u54cd\u3002"]}),(0,t.jsxs)(n.p,{children:["Touying \u5e76\u6ca1\u6709\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"state"})," \u548c ",(0,t.jsx)(n.code,{children:"counter"}),"\uff0c\u4e5f\u6ca1\u6709\u8fdd\u53cd Typst \u7eaf\u51fd\u6570\u7684\u539f\u5219\uff0c\u800c\u662f\u4f7f\u7528\u4e86\u4e00\u79cd\u5de7\u5999\u7684\u65b9\u5f0f\uff0c\u5e76\u4ee5\u9762\u5411\u5bf9\u8c61\u98ce\u683c\u7684\u4ee3\u7801\uff0c\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5168\u5c40\u5355\u4f8b ",(0,t.jsx)(n.code,{children:"s"}),"\u3002\u5728 Touying \u4e2d\uff0c\u4e00\u4e2a\u5bf9\u8c61\u6307\u62e5\u6709\u81ea\u5df1\u7684\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\u7684 Typst \u5b57\u5178\uff0c\u5e76\u4e14\u6211\u4eec\u7ea6\u5b9a\u65b9\u6cd5\u5747\u6709\u4e00\u4e2a\u547d\u540d\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"self"})," \u7528\u4e8e\u4f20\u5165\u5bf9\u8c61\u81ea\u8eab\uff0c\u5e76\u4e14\u65b9\u6cd5\u5747\u653e\u5728 ",(0,t.jsx)(n.code,{children:".methods"})," \u57df\u91cc\u3002\u6709\u4e86\u8fd9\u4e2a\u7406\u5ff5\uff0c\u6211\u4eec\u5c31\u4e0d\u96be\u5199\u51fa\u66f4\u65b0 ",(0,t.jsx)(n.code,{children:"info"})," \u7684\u65b9\u6cd5\u4e86\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#let s = (\n  info: (:),\n  methods: (\n    // update info\n    info: (self: none, ..args) => {\n      self.info += args.named()\n      self\n    },\n  )\n)\n\n#let s = (s.methods.info)(self: s, title: [title])\n\nTitle is #s.info.title\n"})}),(0,t.jsxs)(n.p,{children:["\u8fd9\u6837\uff0c\u4f60\u4e5f\u80fd\u591f\u7406\u89e3 ",(0,t.jsx)(n.code,{children:"utils.methods()"})," \u51fd\u6570\u7684\u7528\u9014\u4e86\uff1a\u5c06 ",(0,t.jsx)(n.code,{children:"self"})," \u7ed1\u5b9a\u5230 ",(0,t.jsx)(n.code,{children:"s"})," \u7684\u6240\u6709\u65b9\u6cd5\u4e0a\u5e76\u8fd4\u56de\uff0c\u5e76\u901a\u8fc7\u89e3\u5305\u8bed\u6cd5\u7b80\u5316\u540e\u7eed\u7684\u4f7f\u7528\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#let (init, slides, alert) = utils.methods(s)\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u72b6\u6001\u521d\u59cb\u5316",children:"\u72b6\u6001\u521d\u59cb\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u822c\u800c\u8a00\uff0c\u4e0a\u9762\u7684\u4e24\u79cd\u65b9\u5f0f\u5c31\u5df2\u7ecf\u8db3\u591f\u7528\u4e8e\u52a0\u5165\u5168\u5c40\u8bbe\u7f6e\u4e86\uff0c\u4f46\u662f\u4ecd\u7136\u4f1a\u6709\u90e8\u5206\u60c5\u51b5\uff0c\u6211\u4eec\u9700\u8981\u521d\u59cb\u5316 counters \u6216 states\u3002\u5982\u679c\u5c06\u8fd9\u4e9b\u4ee3\u7801\u653e\u5728 ",(0,t.jsx)(n.code,{children:"#show: slides"})," \u4e4b\u524d\uff0c\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\u7a7a\u767d\u9875\uff0c\u8fd9\u662f\u6211\u4eec\u4e0d\u60f3\u770b\u89c1\u7684\uff0c\u56e0\u6b64\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"s.methods.append-preamble"})," \u65b9\u6cd5\u3002\u4f8b\u5982\u5728\u4f7f\u7528 codly \u5305\u7684\u65f6\u5019\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.2": *\n#import "@preview/codly:0.2.0": *\n\n#let s = themes.simple.register(aspect-ratio: "16-9")\n#let s = (s.methods.append-preamble)(self: s)[\n  #codly(languages: (\n    rust: (name: "Rust", icon: "\\u{fa53}", color: rgb("#CE412B")),\n  ))\n]\n#let (init, slides) = utils.methods(s)\n#show heading.where(level: 2): set block(below: 1em)\n#show: init\n#show: codly-init.with()\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n#slide[\n  == First slide\n\n  #raw(lang: "rust", block: true,\n`pub fn main() {\n  println!("Hello, world!");\n}`.text)\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/0be2fbaf-cc03-4776-932f-259503d5e23a",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"\u53c8\u6216\u8005\u662f\u8fdb\u884c Pdfpc \u7684\u914d\u7f6e\u7684\u65f6\u5019\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'// Pdfpc configuration\n// typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc\n#let s = (s.methods.append-preamble)(self: s, pdfpc.config(\n  duration-minutes: 30,\n  start-time: datetime(hour: 14, minute: 10, second: 0),\n  end-time: datetime(hour: 14, minute: 40, second: 0),\n  last-minutes: 5,\n  note-font-size: 12,\n  disable-markdown: false,\n  default-transition: (\n    type: "push",\n    duration-seconds: 2,\n    angle: ltr,\n    alignment: "vertical",\n    direction: "inward",\n  ),\n))\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var t=s(7294);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);