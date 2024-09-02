"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8814],{8079:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(5893),i=s(1151);const o={sidebar_position:2},c="Complex Animations",l={id:"dynamic/complex",title:"Complex Animations",description:"Thanks to the syntax provided by Polylux, we can also use only, uncover, and alternatives in Touying.",source:"@site/versioned_docs/version-0.2.x/dynamic/complex.md",sourceDirName:"dynamic",slug:"/dynamic/complex",permalink:"/docs/0.2.x/dynamic/complex",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.2.x/dynamic/complex.md",tags:[],version:"0.2.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Simple Animations",permalink:"/docs/0.2.x/dynamic/simple"},next:{title:"Math Equation Animations",permalink:"/docs/0.2.x/dynamic/equation"}},a={},d=[{value:"Callback-Style Functions",id:"callback-style-functions",level:2},{value:"only",id:"only",level:2},{value:"uncover",id:"uncover",level:2},{value:"alternatives",id:"alternatives",level:2}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"complex-animations",children:"Complex Animations"}),"\n",(0,t.jsxs)(n.p,{children:["Thanks to the syntax provided by ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/dynamic/syntax.html",children:"Polylux"}),", we can also use ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"})," in Touying."]}),"\n",(0,t.jsx)(n.h2,{id:"callback-style-functions",children:"Callback-Style Functions"}),"\n",(0,t.jsxs)(n.p,{children:["To overcome the limitations of ",(0,t.jsx)(n.code,{children:"styled"})," and ",(0,t.jsx)(n.code,{children:"layout"})," mentioned earlier, Touying cleverly implements always-effective ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"})," using callback functions. Specifically, you need to introduce these three functions as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  In subslide #self.subslide,\n\n  test #uncover("2-")[uncover] function,\n\n  and test #only("2-")[only] function,\n\n  #pause\n\n  and paused text.\n])\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/e9a6b8c5-daf0-4cf2-8d39-1a768ce1dfea",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["Notice that we no longer pass a content block but instead pass a callback function with a ",(0,t.jsx)(n.code,{children:"self"})," parameter. Later, we extract ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"})," functions from ",(0,t.jsx)(n.code,{children:"self"})," using:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#let (uncover, only, alternatives) = utils.methods(self)\n"})}),"\n",(0,t.jsx)(n.p,{children:"We then call these functions in subsequent steps."}),"\n",(0,t.jsxs)(n.p,{children:["Here's an interesting fact: the ",(0,t.jsx)(n.code,{children:"self.subslide"})," of type int indicates the current subslide index, and in fact, the ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"})," functions rely on ",(0,t.jsx)(n.code,{children:"self.subslide"})," to determine the current subslide index."]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,t.jsxs)(n.p,{children:["We manually specify the ",(0,t.jsx)(n.code,{children:"repeat: 3"})," parameter, indicating the display of 3 subslides. We need to do this manually because Touying cannot infer how many subslides ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"})," should display."]})}),"\n",(0,t.jsx)(n.h2,{id:"only",children:"only"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"only"})," function means it \"appears\" only on selected subslides. If it doesn't appear, it completely disappears and doesn't occupy any space. In other words, ",(0,t.jsx)(n.code,{children:"#only(index, body)"})," is either ",(0,t.jsx)(n.code,{children:"body"})," or ",(0,t.jsx)(n.code,{children:"none"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The index can be an int type or a str type like ",(0,t.jsx)(n.code,{children:'"2-"'})," or ",(0,t.jsx)(n.code,{children:'"2-3"'}),". For more usage, refer to ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/dynamic/complex.html",children:"Polylux"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"uncover",children:"uncover"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"uncover"}),' function means it "displays" only on selected subslides; otherwise, it will be covered by the ',(0,t.jsx)(n.code,{children:"cover"})," function but still occupies the original space. In other words, ",(0,t.jsx)(n.code,{children:"#uncover(index, body)"})," is either ",(0,t.jsx)(n.code,{children:"body"})," or ",(0,t.jsx)(n.code,{children:"cover(body)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The index can be an int type or a str type like ",(0,t.jsx)(n.code,{children:'"2-"'})," or ",(0,t.jsx)(n.code,{children:'"2-3"'}),". For more usage, refer to ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/dynamic/complex.html",children:"Polylux"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You may also have noticed that ",(0,t.jsx)(n.code,{children:"#pause"})," actually uses the ",(0,t.jsx)(n.code,{children:"cover"})," function, providing a more convenient syntax. In reality, their effects are almost identical."]}),"\n",(0,t.jsx)(n.h2,{id:"alternatives",children:"alternatives"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"alternatives"})," function displays a series of different content in different subslides. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  #alternatives[Ann][Bob][Christopher]\n  likes\n  #alternatives[chocolate][strawberry][vanilla]\n  ice cream.\n])\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/392707ea-0bcd-426b-b232-5bc63b9a13a3",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, ",(0,t.jsx)(n.code,{children:"alternatives"})," can automatically expand to the most suitable width and height, a capability that ",(0,t.jsx)(n.code,{children:"only"})," and ",(0,t.jsx)(n.code,{children:"uncover"})," lack. In fact, ",(0,t.jsx)(n.code,{children:"alternatives"})," has other parameters, such as ",(0,t.jsx)(n.code,{children:"start: 2"}),", ",(0,t.jsx)(n.code,{children:"repeat-last: true"}),", and ",(0,t.jsx)(n.code,{children:"position: center + horizon"}),". For more usage, refer to ",(0,t.jsx)(n.a,{href:"https://polylux.dev/book/dynamic/alternatives.html",children:"Polylux"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var t=s(7294);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);