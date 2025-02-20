"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3543],{42694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(85893),i=t(11151);const o={sidebar_position:5},r="\u9875\u9762\u5e03\u5c40",d={id:"layout",title:"\u9875\u9762\u5e03\u5c40",description:"\u57fa\u7840\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.1/layout.md",sourceDirName:".",slug:"/layout",permalink:"/zh/docs/0.4.1/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/layout.md",tags:[],version:"0.4.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7801\u98ce\u683c",permalink:"/zh/docs/0.4.1/code-styles"},next:{title:"\u5168\u5c40\u8bbe\u7f6e",permalink:"/zh/docs/0.4.1/global-settings"}},a={},c=[{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u9875\u9762\u7ba1\u7406",id:"\u9875\u9762\u7ba1\u7406",level:2},{value:"\u5e94\u7528\uff1a\u6dfb\u52a0 Logo",id:"\u5e94\u7528\u6dfb\u52a0-logo",level:2},{value:"\u9875\u9762\u5206\u680f",id:"\u9875\u9762\u5206\u680f",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u9875\u9762\u5e03\u5c40",children:"\u9875\u9762\u5e03\u5c40"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u7840\u6982\u5ff5",children:"\u57fa\u7840\u6982\u5ff5"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u60f3\u4f7f\u7528 Typst \u5236\u4f5c\u4e00\u4e2a\u6837\u5f0f\u7f8e\u89c2\u7684 slides\uff0c\u6b63\u786e\u7406\u89e3 Typst \u7684\u9875\u9762\u6a21\u578b\u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4f60\u4e0d\u5173\u5fc3\u81ea\u5b9a\u4e49\u9875\u9762\u6837\u5f0f\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u8df3\u8fc7\u8fd9\u90e8\u5206\uff0c\u5426\u5219\u8fd8\u662f\u63a8\u8350\u770b\u4e00\u904d\u8fd9\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u6765\u8bf4\u660e Typst \u7684\u9ed8\u8ba4\u9875\u9762\u6a21\u578b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#let container = rect.with(height: 100%, width: 100%, inset: 0pt)\n#let innerbox = rect.with(stroke: (dash: "dashed"))\n\n#set text(size: 30pt)\n#set page(\n  paper: "presentation-16-9",\n  header: container[#innerbox[Header]],\n  header-ascent: 30%,\n  footer: container[#innerbox[Footer]],\n  footer-descent: 30%,\n)\n\n#place(top + right)[Margin\u2192]\n#container[\n  #container[\n    #innerbox[Content]\n  ]\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/70d48053-c777-4253-a9ca-ada360b5a987",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u533a\u5206\u4ee5\u4e0b\u6982\u5ff5\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model:"})," Typst \u62e5\u6709\u4e0e CSS Box Model \u7c7b\u4f3c\u7684\u6a21\u578b\uff0c\u5206\u4e3a Margin\u3001Padding \u548c Content\uff0c\u4f46\u5176\u4e2d padding \u5e76\u975e ",(0,s.jsx)(n.code,{children:"set page(..)"})," \u7684\u5c5e\u6027\uff0c\u800c\u662f\u6211\u4eec\u624b\u52a8\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"#pad(..)"})," \u5f97\u5230\u7684\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Margin:"})," \u9875\u8fb9\u8ddd\uff0c\u5206\u4e3a\u4e0a\u4e0b\u5de6\u53f3\u56db\u4e2a\u65b9\u5411\uff0c\u662f Typst \u9875\u9762\u6a21\u578b\u7684\u6838\u5fc3\uff0c\u5176\u4ed6\u5c5e\u6027\u90fd\u4f1a\u53d7\u5230\u9875\u8fb9\u8ddd\u7684\u5f71\u54cd\uff0c\u5c24\u5176\u662f Header \u548c Footer\u3002Header \u548c Footer \u5b9e\u9645\u4e0a\u662f\u4f4d\u4e8e Margin \u5185\u90e8\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Header:"})," Header \u662f\u9875\u9762\u9876\u90e8\u7684\u5185\u5bb9\uff0c\u53c8\u5206\u4e3a container \u548c innerbox\u3002\u6211\u4eec\u53ef\u4ee5\u6ce8\u610f\u5230 header container \u548c padding \u7684\u8fb9\u7f18\u5e76\u4e0d\u8d34\u5408\uff0c\u800c\u662f\u4e5f\u6709\u4e00\u5b9a\u7684\u7a7a\u9699\uff0c\u8fd9\u4e2a\u7a7a\u9699\u5b9e\u9645\u4e0a\u5c31\u662f ",(0,s.jsx)(n.code,{children:"header-ascent: 30%"}),"\uff0c\u800c\u8fd9\u91cc\u7684\u767e\u5206\u6bd4\u662f\u76f8\u5bf9\u4e8e margin-top \u800c\u8a00\u7684\u3002\u5e76\u4e14\uff0c\u6211\u4eec\u6ce8\u610f\u5230 header innerbox \u5b9e\u9645\u4e0a\u4f4d\u4e8e header container \u5de6\u4e0b\u89d2\uff0c\u4e5f\u5373 innerbox \u5b9e\u9645\u4e0a\u9ed8\u8ba4\u6709\u5c5e\u6027 ",(0,s.jsx)(n.code,{children:"#set align(left + bottom)"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Footer:"})," Footer \u662f\u9875\u9762\u5e95\u90e8\u7684\u5185\u5bb9\uff0c\u4e0e Header \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7\u65b9\u5411\u76f8\u53cd\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Place:"})," ",(0,s.jsx)(n.code,{children:"place"})," \u51fd\u6570\u53ef\u4ee5\u5b9e\u73b0\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u5728\u4e0d\u5f71\u54cd\u7236\u5bb9\u5668\u5185\u5176\u4ed6\u5143\u7d20\u7684\u60c5\u51b5\u4e0b\uff0c\u76f8\u5bf9\u4e8e\u7236\u5bb9\u5668\u6765\u5b9a\u4f4d\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f20\u5165 ",(0,s.jsx)(n.code,{children:"alignment"}),"\u3001",(0,s.jsx)(n.code,{children:"dx"})," \u548c ",(0,s.jsx)(n.code,{children:"dy"}),"\uff0c\u5f88\u9002\u5408\u7528\u6765\u653e\u7f6e\u4e00\u4e9b\u4fee\u9970\u5143\u7d20\uff0c\u4f8b\u5982 Logo \u4e4b\u7c7b\u7684\u56fe\u7247\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u8981\u5c06 Typst \u5e94\u7528\u5230\u5236\u4f5c slides \u4e0a\uff0c\u6211\u4eec\u53ea\u9700\u8981\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#set page(\n  margin: (x: 4em, y: 2em),\n  header: align(top)[Header],\n  footer: align(bottom)[Footer],\n  header-ascent: 0em,\n  footer-descent: 0em,\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5373\u53ef\u3002\u4f46\u662f\u6211\u4eec\u8fd8\u9700\u8981\u89e3\u51b3 header \u5982\u4f55\u5360\u636e\u6574\u4e2a\u9875\u9762\u5bbd\u5ea6\u7684\u95ee\u9898\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 negative padding \u5b9e\u73b0\uff0c\u4f8b\u5982\u6211\u4eec\u6709"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#let container = rect.with(stroke: (dash: "dashed"), height: 100%, width: 100%, inset: 0pt)\n#let innerbox = rect.with(fill: rgb("#d0d0d0"))\n#let margin = (x: 4em, y: 2em)\n\n// negative padding for header and footer\n#let negative-padding = pad.with(x: -margin.x, y: 0em)\n\n#set text(size: 30pt)\n#set page(\n  paper: "presentation-16-9",\n  margin: margin,\n  header: negative-padding[#container[#align(top)[#innerbox(width: 100%)[Header]]]],\n  header-ascent: 0em,\n  footer: negative-padding[#container[#align(bottom)[#innerbox(width: 100%)[Footer]]]],\n  footer-descent: 0em,\n)\n\n#place(top + right)[\u2191Margin\u2192]\n#container[\n  #container[\n    #innerbox[Content]\n  ]\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/d74896f4-90e7-4b36-a5a9-9c44307eb192",alt:"image"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9875\u9762\u7ba1\u7406",children:"\u9875\u9762\u7ba1\u7406"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e Typst \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"set page(..)"})," \u547d\u4ee4\u6765\u4fee\u6539\u9875\u9762\u53c2\u6570\uff0c\u4f1a\u5bfc\u81f4\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u9875\u9762\uff0c\u800c\u4e0d\u80fd\u4fee\u6539\u5f53\u524d\u9875\u9762\uff0c\u56e0\u6b64 Touying \u9009\u62e9\u7ef4\u62a4\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"s.page-args"})," \u6210\u5458\u53d8\u91cf\u548c\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"s.padding"})," \u6210\u5458\u53d8\u91cf\uff0c\u53ea\u5728 Touying \u81ea\u5df1\u521b\u5efa\u65b0 slide \u65f6\u624d\u4f1a\u81ea\u5df1\u5e94\u7528\u8fd9\u4e9b\u53c2\u6570\uff0c\u56e0\u6b64\u7528\u6237\u53ea\u9700\u8981\u5173\u6ce8 ",(0,s.jsx)(n.code,{children:"s.page-args"})," \u548c ",(0,s.jsx)(n.code,{children:"s.padding"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u4e0a\u9762\u7684\u4f8b\u5b50\u5c31\u53ef\u4ee5\u6539\u6210"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#(s.page-args += (\n  margin: (x: 4em, y: 2em),\n  header: align(top)[Header],\n  footer: align(bottom)[Footer],\n  header-ascent: 0em,\n  footer-descent: 0em,\n))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Touying \u4f1a\u81ea\u52a8\u68c0\u6d4b ",(0,s.jsx)(n.code,{children:"margin.x"})," \u7684\u503c\uff0c\u5e76\u4e14\u5224\u65ad\u5982\u679c ",(0,s.jsx)(n.code,{children:"self.full-header == true"}),"\uff0c\u5c31\u4f1a\u81ea\u52a8\u4e3a header \u52a0\u5165\u8d1f\u586b\u5145\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u7406\uff0c\u5982\u679c\u4f60\u5bf9\u67d0\u4e2a\u4e3b\u9898\u7684 header \u6216 footer \u6837\u5f0f\u4e0d\u6ee1\u610f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#(s.page-args.footer = [Custom Footer])\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u6837\u65b9\u5f0f\u8fdb\u884c\u66f4\u6362\u3002\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8fd9\u6837\u66f4\u6362\u4e86\u9875\u9762\u53c2\u6570\uff0c\u4f60\u9700\u8981\u5c06\u5176\u653e\u5728 ",(0,s.jsx)(n.code,{children:"#let (slide, empty-slide) = utils.slides(s)"})," \u4e4b\u524d\uff0c\u5426\u5219\u5c31\u9700\u8981\u91cd\u65b0\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"#let (slide, empty-slide) = utils.slides(s)"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u8b66\u544a",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u4f60\u4e0d\u5e94\u8be5\u81ea\u5df1\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"set page(..)"})," \u547d\u4ee4\uff0c\u800c\u662f\u5e94\u8be5\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"s"})," \u5185\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"s.page-args"})," \u6210\u5458\u53d8\u91cf\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u501f\u52a9\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"s.page-args"})," \u5b9e\u65f6\u67e5\u8be2\u5f53\u524d\u9875\u9762\u7684\u53c2\u6570\uff0c\u8fd9\u5bf9\u4e00\u4e9b\u9700\u8981\u83b7\u53d6\u9875\u8fb9\u8ddd\u6216\u5f53\u524d\u9875\u9762\u80cc\u666f\u989c\u8272\u7684\u51fd\u6570\u5f88\u6709\u7528\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"transparent-cover"}),"\u3002\u8fd9\u91cc\u5c31\u90e8\u5206\u7b49\u4ef7\u4e8e context get rule\uff0c\u800c\u4e14\u5b9e\u9645\u4e0a\u7528\u8d77\u6765\u4f1a\u66f4\u65b9\u4fbf\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e94\u7528\u6dfb\u52a0-logo",children:"\u5e94\u7528\uff1a\u6dfb\u52a0 Logo"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a slides \u6dfb\u52a0\u4e00\u4e2a Logo \u662f\u53ca\u5176\u666e\u904d\uff0c\u4f46\u662f\u53c8\u53ca\u5176\u591a\u53d8\u7684\u4e00\u4e2a\u9700\u6c42\u3002\u5176\u4e2d\u7684\u96be\u70b9\u5728\u4e8e\uff0c\u6240\u9700\u8981\u7684 Logo \u5927\u5c0f\u548c\u4f4d\u7f6e\u5f80\u5f80\u56e0\u4eba\u800c\u5f02\u3002\u56e0\u6b64\uff0cTouying \u7684\u4e3b\u9898\u5927\u90e8\u5206\u90fd\u4e0d\u5305\u542b Logo \u7684\u914d\u7f6e\u9009\u9879\u3002\u4f46\u501f\u52a9\u672c\u7ae0\u8282\u63d0\u5230\u7684\u9875\u9762\u5e03\u5c40\u7684\u6982\u5ff5\uff0c\u6211\u4eec\u77e5\u9053\u53ef\u4ee5\u5728 header \u6216 footer \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"place"})," \u51fd\u6570\u6765\u653e\u7f6e Logo \u56fe\u7247\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u6211\u4eec\u51b3\u5b9a\u7ed9 metropolis \u4e3b\u9898\u52a0\u5165 GitHub \u7684\u56fe\u6807\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9e\u73b0\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n#import "@preview/octique:0.1.0": *\n\n#let s = themes.metropolis.register(aspect-ratio: "16-9")\n#(s.page-args.header = self => {\n  // display the original header\n  utils.call-or-display(self, s.page-args.header)\n  // place logo to top-right\n  place(top + right, dx: -0.5em, dy: 0.3em)[\n    #octique("mark-github", color: rgb("#fafafa"), width: 1.5em, height: 1.5em)\n  ]\n})\n#let (init, slide) = utils.methods(s)\n#show: init\n\n#slide(title: [Title])[\n  Logo example.\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/055d77e7-5087-4248-b969-d8ef9d50c54b",alt:"image"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"utils.call-or-display(self, body)"})," \u53ef\u4ee5\u7528\u4e8e\u663e\u793a ",(0,s.jsx)(n.code,{children:"body"})," \u4e3a content \u6216 ",(0,s.jsx)(n.code,{children:"body"})," \u4e3a\u5f62\u5982 ",(0,s.jsx)(n.code,{children:"self => content"})," \u5f62\u5f0f\u7684\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9875\u9762\u5206\u680f",children:"\u9875\u9762\u5206\u680f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u5c06\u9875\u9762\u5206\u4e3a\u4e24\u680f\u6216\u4e09\u680f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Touying ",(0,s.jsx)(n.code,{children:"slide"})," \u51fd\u6570\u9ed8\u8ba4\u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"compose"})," \u529f\u80fd\uff0c\u6700\u7b80\u5355\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/a39f88a2-f1ba-4420-8f78-6a0fc644704e",alt:"image"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u66f4\u6539\u5206\u680f\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"slide"})," \u7684 ",(0,s.jsx)(n.code,{children:"composer"})," \u53c2\u6570\uff0c\u5176\u4e2d\u9ed8\u8ba4\u7684\u53c2\u6570\u662f ",(0,s.jsx)(n.code,{children:"utils.side-by-side.with(columns: auto, gutter: 1em)"}),"\uff0c\u5982\u679c\u6211\u4eec\u8981\u8ba9\u5de6\u8fb9\u90a3\u4e00\u680f\u5360\u636e\u5269\u4f59\u5bbd\u5ea6\uff0c\u53ef\u4ee5\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:"#slide(composer: (1fr, auto))[\n  First column.\n][\n  Second column.\n]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/aa84192a-4082-495d-9773-b06df32ab8dc",alt:"image"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);