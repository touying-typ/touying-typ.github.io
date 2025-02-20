"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7256],{14149:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(85893),o=i(11151);const s={sidebar_position:3},a="Math Equation Animations",c={id:"dynamic/equation",title:"Math Equation Animations",description:"Touying also provides a unique and highly useful feature\u2014math equation animations, allowing you to conveniently use pause and meanwhile within math equations.",source:"@site/versioned_docs/version-0.4.1/dynamic/equation.md",sourceDirName:"dynamic",slug:"/dynamic/equation",permalink:"/docs/0.4.1/dynamic/equation",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/dynamic/equation.md",tags:[],version:"0.4.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Complex Animations",permalink:"/docs/0.4.1/dynamic/complex"},next:{title:"Cover Function",permalink:"/docs/0.4.1/dynamic/cover"}},r={},l=[{value:"Simple Animation",id:"simple-animation",level:2},{value:"Complex Animation",id:"complex-animation",level:2},{value:"Parameters",id:"parameters",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"math-equation-animations",children:"Math Equation Animations"}),"\n",(0,t.jsxs)(n.p,{children:["Touying also provides a unique and highly useful feature\u2014math equation animations, allowing you to conveniently use ",(0,t.jsx)(n.code,{children:"pause"})," and ",(0,t.jsx)(n.code,{children:"meanwhile"})," within math equations."]}),"\n",(0,t.jsx)(n.h2,{id:"simple-animation",children:"Simple Animation"}),"\n",(0,t.jsx)(n.p,{children:"Let's start with an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#slide[\n  Touying equation with pause:\n\n  #touying-equation(`\n    f(x) &= pause x^2 + 2x + 1  \\\n         &= pause (x + 1)^2  \\\n  `)\n\n  #meanwhile\n\n  Touying equation is very simple.\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/d176e61f-c0da-4c2a-a1bf-52621be5adb2",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"touying-equation"})," function to incorporate ",(0,t.jsx)(n.code,{children:"pause"})," and ",(0,t.jsx)(n.code,{children:"meanwhile"})," within the text of math equations (in fact, you can also use ",(0,t.jsx)(n.code,{children:"#pause"})," or ",(0,t.jsx)(n.code,{children:"#pause;"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"As you would expect, the math equation is displayed step by step, making it suitable for presenters to demonstrate their math reasoning."}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,t.jsxs)(n.p,{children:["While the ",(0,t.jsx)(n.code,{children:"touying-equation"})," function is convenient, you should always be aware that it doesn't perform complex syntax analysis. It simply splits the string using regular expressions. Therefore, you should not use ",(0,t.jsx)(n.code,{children:"pause"})," or ",(0,t.jsx)(n.code,{children:"meanwhile"})," within functions like ",(0,t.jsx)(n.code,{children:"display(..)"}),"!"]})}),"\n",(0,t.jsx)(n.h2,{id:"complex-animation",children:"Complex Animation"}),"\n",(0,t.jsxs)(n.p,{children:["In fact, we can also use ",(0,t.jsx)(n.code,{children:"only"}),", ",(0,t.jsx)(n.code,{children:"uncover"}),", and ",(0,t.jsx)(n.code,{children:"alternatives"})," within ",(0,t.jsx)(n.code,{children:"touying-equation"})," with a little trick:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:'#slide(repeat: 3, self => [\n  #let (uncover, only, alternatives) = utils.methods(self)\n\n    #touying-equation(scope: (uncover: uncover), `\n    f(x) &= pause x^2 + 2x + uncover("3-", 1)  \\\n         &= pause (x + 1)^2  \\\n  `)\n])\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/touying-typ/touying/assets/34951714/f2df14a2-6424-4c53-81f7-1595aa330660",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["We can pass the functions we need into the ",(0,t.jsx)(n.code,{children:"touying-equation"})," through the ",(0,t.jsx)(n.code,{children:"scope"})," parameter, such as ",(0,t.jsx)(n.code,{children:"uncover"})," in this example."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The function definition of ",(0,t.jsx)(n.code,{children:"touying-equation"})," is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typst",children:"#let touying-equation(block: true, numbering: none, supplement: auto, scope: (:), body) = { .. }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, you can pass parameters like ",(0,t.jsx)(n.code,{children:"block"}),", ",(0,t.jsx)(n.code,{children:"numbering"}),", and ",(0,t.jsx)(n.code,{children:"supplement"})," to ",(0,t.jsx)(n.code,{children:"touying-equation"})," just like using normal math equations."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var t=i(67294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);