"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3280],{40567:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(85893),a=i(11151);const o={sidebar_position:3},s="Math Equation Animations",c={id:"dynamic/equation",title:"Math Equation Animations",description:"Touying also provides a unique and highly useful feature\u2014math equation animations, allowing you to conveniently use pause and meanwhile within math equations.",source:"@site/docs/dynamic/equation.md",sourceDirName:"dynamic",slug:"/dynamic/equation",permalink:"/docs/next/dynamic/equation",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/docs/dynamic/equation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Complex Animations",permalink:"/docs/next/dynamic/complex"},next:{title:"Cover Function",permalink:"/docs/next/dynamic/cover"}},r={},l=[{value:"Simple Animation",id:"simple-animation",level:2},{value:"Complex Animation",id:"complex-animation",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"math-equation-animations",children:"Math Equation Animations"}),"\n",(0,t.jsxs)(n.p,{children:["Touying also provides a unique and highly useful feature\u2014math equation animations, allowing you to conveniently use ",(0,t.jsx)(n.code,{children:"pause"})," and ",(0,t.jsx)(n.code,{children:"meanwhile"})," within math equations."]}),"\n",(0,t.jsx)(n.h2,{id:"simple-animation",children:"Simple Animation"}),"\n",(0,t.jsx)(n.p,{children:"Let's start with an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide[\n  Touying equation with pause:\n\n  $\n    f(x) &= pause x^2 + 2x + 1  \\\n         &= pause (x + 1)^2  \\\n  $\n\n  #meanwhile\n\n  Touying equation is very simple.\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/d176e61f-c0da-4c2a-a1bf-52621be5adb2",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"touying-equation"})," function to incorporate ",(0,t.jsx)(n.code,{children:"pause"})," and ",(0,t.jsx)(n.code,{children:"meanwhile"})," within the text of math equations (in fact, you can also use ",(0,t.jsx)(n.code,{children:"#pause"})," or ",(0,t.jsx)(n.code,{children:"#pause;"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"As you would expect, the math equation is displayed step by step, making it suitable for presenters to demonstrate their math reasoning."}),"\n",(0,t.jsx)(n.h2,{id:"complex-animation",children:"Complex Animation"}),"\n",(0,t.jsxs)(n.p,{children:["In fact, we can also use ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n  $\n    f(x) &= pause x^2 + 2x + uncover("3-", 1)  \\\n         &= pause (x + 1)^2  \\\n  $\n])\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f2df14a2-6424-4c53-81f7-1595aa330660",alt:"image"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var t=i(67294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);