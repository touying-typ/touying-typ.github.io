"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8563],{7027:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var n=s(5893),i=s(1151);const o={sidebar_position:11},l="Creating Your Own Theme",r={id:"build-your-own-theme",title:"Creating Your Own Theme",description:"Creating your own theme with Touying might seem a bit complex initially due to the introduction of various concepts. However, fear not; if you successfully create a custom theme with Touying, you'll likely experience the convenience and powerful customization features it offers. You can refer to the source code of existing themes for guidance. The key steps to implement are:",source:"@site/versioned_docs/version-0.4.1/build-your-own-theme.md",sourceDirName:".",slug:"/build-your-own-theme",permalink:"/docs/0.4.1/build-your-own-theme",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.4.1/build-your-own-theme.md",tags:[],version:"0.4.1",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Aqua Theme",permalink:"/docs/0.4.1/themes/aqua"},next:{title:"Progress",permalink:"/docs/0.4.1/category/progress"}},d={},a=[{value:"Modifying Existing Themes",id:"modifying-existing-themes",level:2},{value:"Import",id:"import",level:2},{value:"Register Function and Init Method",id:"register-function-and-init-method",level:2},{value:"Color Theme",id:"color-theme",level:2},{value:"Practical: Custom Alert Method",id:"practical-custom-alert-method",level:2},{value:"Custom Header and Footer",id:"custom-header-and-footer",level:2},{value:"Custom Special Slide",id:"custom-special-slide",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"creating-your-own-theme",children:"Creating Your Own Theme"}),"\n",(0,n.jsxs)(t.p,{children:["Creating your own theme with Touying might seem a bit complex initially due to the introduction of various concepts. However, fear not; if you successfully create a custom theme with Touying, you'll likely experience the convenience and powerful customization features it offers. You can refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/touying-typ/touying/tree/main/themes",children:"source code of existing themes"})," for guidance. The key steps to implement are:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Customize the ",(0,n.jsx)(t.code,{children:"register"})," function to initialize the global singleton ",(0,n.jsx)(t.code,{children:"s"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Customize the ",(0,n.jsx)(t.code,{children:"init"})," method."]}),"\n",(0,n.jsxs)(t.li,{children:["Define a color theme by modifying the ",(0,n.jsx)(t.code,{children:"self.colors"})," member variable."]}),"\n",(0,n.jsxs)(t.li,{children:["Customize the ",(0,n.jsx)(t.code,{children:"alert"})," method (optional)."]}),"\n",(0,n.jsx)(t.li,{children:"Customize the header."}),"\n",(0,n.jsx)(t.li,{children:"Customize the footer."}),"\n",(0,n.jsxs)(t.li,{children:["Customize the ",(0,n.jsx)(t.code,{children:"slide"})," method."]}),"\n",(0,n.jsxs)(t.li,{children:["Customize special slide methods, such as ",(0,n.jsx)(t.code,{children:"title-slide"})," and ",(0,n.jsx)(t.code,{children:"focus-slide"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Customize the ",(0,n.jsx)(t.code,{children:"slides"})," method (optional)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To demonstrate creating a simple and elegant Bamboo theme, let's follow the steps."}),"\n",(0,n.jsx)(t.h2,{id:"modifying-existing-themes",children:"Modifying Existing Themes"}),"\n",(0,n.jsx)(t.p,{children:"If you wish to modify a theme within the Touying package locally instead of creating one from scratch, you can achieve this by following these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Copy the ",(0,n.jsx)(t.a,{href:"https://github.com/touying-typ/touying/tree/main/themes",children:"theme code"})," from the ",(0,n.jsx)(t.code,{children:"themes"})," directory to your local machine. For example, copy ",(0,n.jsx)(t.code,{children:"themes/university.typ"})," to a local file named ",(0,n.jsx)(t.code,{children:"university.typ"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Remove all ",(0,n.jsx)(t.code,{children:'#import "../xxx.typ"'})," commands at the top of the ",(0,n.jsx)(t.code,{children:"university.typ"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.code,{children:'#import "@preview/touying:0.4.1": *'})," at the top of the ",(0,n.jsx)(t.code,{children:"university.typ"})," file to import all modules."]}),"\n",(0,n.jsxs)(t.li,{children:["Replace ",(0,n.jsx)(t.code,{children:"self: s"})," in the ",(0,n.jsx)(t.code,{children:"register"})," function with ",(0,n.jsx)(t.code,{children:"self: themes.default.register()"})," ",(0,n.jsx)(t.strong,{children:"(Important)"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can then import and use the theme by:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n#import "university.typ"\n\n#let s = university.register(aspect-ratio: "16-9")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For a specific example, refer to: ",(0,n.jsx)(t.a,{href:"https://typst.app/project/rqRuzg0keo_ZEB5AdxjweA",children:"https://typst.app/project/rqRuzg0keo_ZEB5AdxjweA"})]}),"\n",(0,n.jsx)(t.h2,{id:"import",children:"Import"}),"\n",(0,n.jsx)(t.p,{children:"Depending on whether the theme is for personal use or part of Touying, you can import in two ways:"}),"\n",(0,n.jsx)(t.p,{children:"If for personal use:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'#import "@preview/touying:0.4.1": *\n'})}),"\n",(0,n.jsx)(t.p,{children:"If part of Touying themes:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'#import "../utils/utils.typ"\n#import "../utils/states.typ"\n#import "../utils/components.typ"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, add the import statement in Touying's ",(0,n.jsx)(t.code,{children:"themes/themes.typ"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'#import "bamboo.typ"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"register-function-and-init-method",children:"Register Function and Init Method"}),"\n",(0,n.jsx)(t.p,{children:"Next, we'll distinguish between the bamboo.typ template file and the main.typ file, the latter of which is sometimes omitted."}),"\n",(0,n.jsx)(t.p,{children:"Generally, the first step in creating slides is to determine font size and page aspect ratio. Therefore, we need to register an initialization method:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'// bamboo.typ\n#import "@preview/touying:0.4.1": *\n\n#let register(\n  self: themes.default.register(),\n  aspect-ratio: "16-9",\n) = {\n  self.page-args += (\n    paper: "presentation-" + aspect-ratio,\n  )\n  self.methods.init = (self: none, body) => {\n    set text(size: 20pt)\n    body\n  }\n  self\n}\n\n// main.typ\n#import "@preview/touying:0.4.1": *\n#import "bamboo.typ"\n\n#let s = bamboo.register(aspect-ratio: "16-9")\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= First Section\n\n== First Slide\n\n#slide[\n  A slide with a title and an *important* information.\n]\n'})}),"\n",(0,n.jsxs)(t.p,{children:["As you can see, we created a ",(0,n.jsx)(t.code,{children:"register"})," function and passed an ",(0,n.jsx)(t.code,{children:"aspect-ratio"})," parameter to set the page aspect ratio. We get default ",(0,n.jsx)(t.code,{children:"self"})," by ",(0,n.jsx)(t.code,{children:"self: themes.default.register()"}),". As you might already know, in Touying, we should not use ",(0,n.jsx)(t.code,{children:"set page(..)"})," to set page parameters but rather use the syntax ",(0,n.jsx)(t.code,{children:"self.page-args += (..)"})," to set them, as explained in the Page Layout section."]}),"\n",(0,n.jsxs)(t.p,{children:["In addition, we registered a ",(0,n.jsx)(t.code,{children:"self.methods.init"})," method, which can be used for some global style settings. For example, in this case, we added ",(0,n.jsx)(t.code,{children:"set text(size: 20pt)"})," to set the font size. You can also place additional global style settings here, such as ",(0,n.jsx)(t.code,{children:"set par(justify: true)"}),". Since the ",(0,n.jsx)(t.code,{children:"init"})," function is placed inside ",(0,n.jsx)(t.code,{children:"self.methods"}),", it is a method, not a regular function. Therefore, we need to add the parameter ",(0,n.jsx)(t.code,{children:"self: none"})," to use it properly."]}),"\n",(0,n.jsxs)(t.p,{children:["As you can see, later in ",(0,n.jsx)(t.code,{children:"main.typ"}),", we apply the global style settings in ",(0,n.jsx)(t.code,{children:"init"})," using ",(0,n.jsx)(t.code,{children:"#show: init"}),", where ",(0,n.jsx)(t.code,{children:"init"})," is bound and unpacked through ",(0,n.jsx)(t.code,{children:"utils.methods(s)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you pay extra attention, you'll notice that the ",(0,n.jsx)(t.code,{children:"register"})," function has an independent ",(0,n.jsx)(t.code,{children:"self"})," at the end. This actually represents returning the modified ",(0,n.jsx)(t.code,{children:"self"})," as the return value, which will be saved in ",(0,n.jsx)(t.code,{children:"#let s = .."}),". This line is therefore indispensable."]}),"\n",(0,n.jsx)(t.h2,{id:"color-theme",children:"Color Theme"}),"\n",(0,n.jsxs)(t.p,{children:["Choosing an attractive color theme for your slides is crucial. Touying provides built-in color theme support to minimize API differences between different themes. Touying offers two dimensions of color selection: the first is ",(0,n.jsx)(t.code,{children:"neutral"}),", ",(0,n.jsx)(t.code,{children:"primary"}),", ",(0,n.jsx)(t.code,{children:"secondary"}),", and ",(0,n.jsx)(t.code,{children:"tertiary"})," for hue distinction, with ",(0,n.jsx)(t.code,{children:"primary"})," being the most commonly used; the second is ",(0,n.jsx)(t.code,{children:"default"}),", ",(0,n.jsx)(t.code,{children:"light"}),", ",(0,n.jsx)(t.code,{children:"lighter"}),", ",(0,n.jsx)(t.code,{children:"lightest"}),", ",(0,n.jsx)(t.code,{children:"dark"}),", ",(0,n.jsx)(t.code,{children:"darker"}),", and ",(0,n.jsx)(t.code,{children:"darkest"})," for brightness distinction."]}),"\n",(0,n.jsxs)(t.p,{children:["As we are creating the Bamboo theme, we chose a color for the ",(0,n.jsx)(t.code,{children:"primary"})," theme, similar to bamboo (",(0,n.jsx)(t.code,{children:'rgb("#5E8B65")'}),"), and included neutral lightest/darkest as background and font colors."]}),"\n",(0,n.jsxs)(t.p,{children:["As shown in the code below, we use ",(0,n.jsx)(t.code,{children:"(self.methods.colors)(self: self, ..)"})," to modify the color theme. Essentially, it is a wrapper for ",(0,n.jsx)(t.code,{children:"self.colors += (..)"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'#let register(\n  self: themes.default.register(),\n  aspect-ratio: "16-9",\n) = {\n  // color theme\n  self = (self.methods.colors)(\n    self: self,\n    primary: rgb("#5E8B65"),\n    neutral-lightest: rgb("#ffffff"),\n    neutral-darkest: rgb("#000000"),\n  )\n  self.page-args += (\n    paper: "presentation-" + aspect-ratio,\n  )\n  self.methods.init = (self: none, body) => {\n    set text(size: 20pt)\n    body\n  }\n  self\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["After adding the color theme, we can access the color using syntax like ",(0,n.jsx)(t.code,{children:"self.colors.primary"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"It's worth noting that users can change the theme color at any time using:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'#let s = (s.methods.colors)(self: s, primary: rgb("#3578B9"))\n'})}),"\n",(0,n.jsx)(t.p,{children:"This flexibility demonstrates Touying's powerful customization capabilities."}),"\n",(0,n.jsx)(t.h2,{id:"practical-custom-alert-method",children:"Practical: Custom Alert Method"}),"\n",(0,n.jsxs)(t.p,{children:["In general, we need to provide a ",(0,n.jsx)(t.code,{children:"#alert[..]"})," function for users, similar to ",(0,n.jsx)(t.code,{children:"#strong[..]"}),". Typically, ",(0,n.jsx)(t.code,{children:"#alert[..]"})," emphasizes text using the primary theme color for aesthetics. We add a line in the ",(0,n.jsx)(t.code,{children:"register"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:"self.methods.alert = (self: none, it) => text(fill: self.colors.primary, it)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This code sets the text color to ",(0,n.jsx)(t.code,{children:"self.colors.primary"}),", utilizing the theme's primary color."]}),"\n",(0,n.jsx)(t.h2,{id:"custom-header-and-footer",children:"Custom Header and Footer"}),"\n",(0,n.jsx)(t.p,{children:"Here, assuming you've already read the Page Layout section, we know we should add headers and footers to the slides."}),"\n",(0,n.jsxs)(t.p,{children:["Firstly, we add ",(0,n.jsx)(t.code,{children:"self.bamboo-title = []"}),". This means we save the title of the current slide as a member variable ",(0,n.jsx)(t.code,{children:"self.bamboo-title"}),", stored in ",(0,n.jsx)(t.code,{children:"self"}),". This makes it easy to use in the header and later modifications. Similarly, we create ",(0,n.jsx)(t.code,{children:"self.bamboo-footer"}),", saving the ",(0,n.jsx)(t.code,{children:"footer: []"})," parameter from the ",(0,n.jsx)(t.code,{children:"register"})," function for displaying in the bottom-left corner."]}),"\n",(0,n.jsxs)(t.p,{children:["It's worth noting that our header is actually a content function in the form of ",(0,n.jsx)(t.code,{children:"let header(self) = { .. }"})," with the ",(0,n.jsx)(t.code,{children:"self"})," parameter, allowing us to get the latest information from ",(0,n.jsx)(t.code,{children:"self"}),". For example, ",(0,n.jsx)(t.code,{children:"self.bamboo-title"}),". The footer is similar."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"components.cell"})," used inside is actually ",(0,n.jsx)(t.code,{children:"#let cell = block.with(width: 100%, height: 100%, above: 0pt, below: 0pt, breakable: false)"}),", and ",(0,n.jsx)(t.code,{children:"show: components.cell"})," is shorthand for ",(0,n.jsx)(t.code,{children:"components.cell(body)"}),". The ",(0,n.jsx)(t.code,{children:"show: pad.with(.4em)"})," in the footer is similar."]}),"\n",(0,n.jsxs)(t.p,{children:["Another point to note is the ",(0,n.jsx)(t.code,{children:"states"})," module, which contains many counters and state-related content. For example, ",(0,n.jsx)(t.code,{children:"states.current-section-title"})," is used to display the current ",(0,n.jsx)(t.code,{children:"section"}),", and ",(0,n.jsx)(t.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'})," is used to display the current page number and total number of pages."]}),"\n",(0,n.jsxs)(t.p,{children:["We observe the usage of ",(0,n.jsx)(t.code,{children:"utils.call-or-display(self, self.bamboo-footer)"})," to display ",(0,n.jsx)(t.code,{children:"self.bamboo-footer"}),". This is used to handle situations like ",(0,n.jsx)(t.code,{children:"self.bamboo-footer = (self) => {..}"}),", ensuring a unified approach to displaying content functions and content."]}),"\n",(0,n.jsxs)(t.p,{children:["To ensure proper display of the header and footer and sufficient spacing from the main content, we also set margins, such as ",(0,n.jsx)(t.code,{children:"self.page-args += (margin: (top: 4em, bottom: 1.5em, x: 2em))"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We also need to customize a ",(0,n.jsx)(t.code,{children:"slide"})," method that accepts ",(0,n.jsx)(t.code,{children:"slide(self: none, title: auto, ..args)"}),". The first ",(0,n.jsx)(t.code,{children:"self: none"})," is a required method parameter for getting the latest ",(0,n.jsx)(t.code,{children:"self"}),". The second ",(0,n.jsx)(t.code,{children:"title"})," is used to update ",(0,n.jsx)(t.code,{children:"self.bamboo-title"})," for displaying in the header. The third ",(0,n.jsx)(t.code,{children:"..args"})," collects the remaining parameters and passes them to ",(0,n.jsx)(t.code,{children:"(self.methods.touying-slide)(self: self, ..args)"}),", which is necessary for the Touying ",(0,n.jsx)(t.code,{children:"slide"})," functionality to work properly. Additionally, we need to register this method in the ",(0,n.jsx)(t.code,{children:"register"})," function with ",(0,n.jsx)(t.code,{children:"self.methods.slide = slide"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typst",children:'// bamboo.typ\n#import "@preview/touying:0.4.1": *\n\n#let slide(self: none, title: auto, ..args) = {\n  if title != auto {\n    self.bamboo-title = title\n  }\n  (self.methods.touying-slide)(self: self, ..args)\n}\n\n#let register(\n  self: themes.default.register(),\n  aspect-ratio: "16-9",\n  footer: [],\n) = {\n  // color theme\n  self = (self.methods.colors)(\n    self: self,\n    primary: rgb("#5E8B65"),\n    neutral-lightest: rgb("#ffffff"),\n    neutral-darkest: rgb("#000000"),\n  )\n  // variables for later use\n  self.bamboo-title = []\n  self.bamboo-footer = footer\n  // set page\n  let header(self) = {\n    set align(top)\n    show: components.cell.with(fill: self.colors.primary, inset: 1em)\n    set align(horizon)\n    set text(fill: self.colors.neutral-lightest, size: .7em)\n    states.current-section-title\n    linebreak()\n    set text(size: 1.5em)\n    utils.call-or-display(self, self.bamboo-title)\n  }\n  let footer(self) = {\n    set align(bottom)\n    show: pad.with(.4em)\n    set text(fill: self.colors.neutral-darkest, size: .8em)\n    utils.call-or-display(self, self.bamboo-footer)\n    h(1fr)\n    states.slide-counter.display() + " / " + states.last-slide-number\n  }\n  self.page-args += (\n    paper: "presentation-" + aspect-ratio,\n    header: header,\n    footer: footer,\n    margin: (top: 4em, bottom: 1.5em, x: 2em),\n  )\n  // register methods\n  self.methods.slide = slide\n  self.methods.alert = (self: none, it) => text(fill: self.colors.primary, it)\n  self.methods.init = (self: none, body) => {\n    set text(size: 20pt)\n    body\n  }\n  self\n}\n\n\n// main.typ\n#import "@preview/touying:0.4.1": *\n#import "bamboo.typ"\n\n#let s = bamboo.register(aspect-ratio: "16-9", footer: self => self.info.institution)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide) = utils.slides(s)\n#show: slides\n\n= First Section\n\n== First Slide\n\n#slide[\n  A slide with a title and an *important* information.\n]\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/d33bcda7-c032-4b11-b392-5b939d9a0a47",alt:"image"})}),"\n",(0,n.jsx)(t.h2,{id:"custom-special-slide",children:"Custom Special Slide"}),"\n",(0,n.jsxs)(t.p,{children:["Building upon the basic slide, we further add some special slide functions such as ",(0,n.jsx)(t.code,{children:"title-slide"}),", ",(0,n.jsx)(t.code,{children:"focus-slide"}),", and a custom ",(0,n.jsx)(t.code,{children:"slides"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.code,{children:"title-slide"})," method, first, we call ",(0,n.jsx)(t.code,{children:"self = utils.empty-page(self)"}),". This function clears ",(0,n.jsx)(t.code,{children:"self.page-args.header"}),", ",(0,n.jsx)(t.code,{children:"self.page-args.footer"}),", and sets ",(0,n.jsx)(t.code,{children:"margin"})," to ",(0,n.jsx)(t.code,{children:"0em"}),", creating a blank page effect. Then, we use ",(0,n.jsx)(t.code,{children:"let info = self.info + args.named()"})," to get information stored in ",(0,n.jsx)(t.code,{children:"self.info"})," and update it with the passed ",(0,n.jsx)(t.code,{children:"args.named()"})," for later use as ",(0,n.jsx)(t.code,{children:"info.title"}),". The specific page content ",(0,n.jsx)(t.code,{children:"body"})," will vary for each theme, so we won't go into details here. Finally, we call `(self.methods.touying-slide)(self: self, repeat: none, body"]}),"\n",(0,n.jsxs)(t.p,{children:[")",(0,n.jsx)(t.code,{children:", where "}),"repeat: none",(0,n.jsx)(t.code,{children:"indicates that this page does not require animation effects, and passing the"}),"body` parameter displays its content."]}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.code,{children:"new-section-slide"})," method, the process is similar. The only thing to note is that in ",(0,n.jsx)(t.code,{children:"(self.methods.touying-slide)(self: self, repeat: none, section: section, body)"}),", we pass an additional ",(0,n.jsx)(t.code,{children:"section: section"})," parameter to declare the creation of a new section. Another point to note is that besides ",(0,n.jsx)(t.code,{children:"self.methods.new-section-slide = new-section-slide"}),", we also register ",(0,n.jsx)(t.code,{children:"self.methods.touying-new-section-slide = new-section-slide"}),", so ",(0,n.jsx)(t.code,{children:"new-section-slide"})," will be automatically called when encountering a first-level title."]}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.code,{children:"focus-slide"})," method, most of the content is similar, but it's worth noting that we use ",(0,n.jsx)(t.code,{children:"self.page-args += (..)"})," to update the page's background color."]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, we update the ",(0,n.jsx)(t.code,{children:"slides(self: none, title-slide: true, slide-level: 1, ..args)"})," method. When ",(0,n.jsx)(t.code,{children:"title-slide"})," is ",(0,n.jsx)(t.code,{children:"true"}),", using ",(0,n.jsx)(t.code,{children:"#show: slides"})," will automatically create a ",(0,n.jsx)(t.code,{children:"title-slide"}),". Setting ",(0,n.jsx)(t.code,{children:"slide-level: 1"})," indicates that the first-level and second-level titles correspond to ",(0,n.jsx)(t.code,{children:"section"})," and ",(0,n.jsx)(t.code,{children:"title"}),", respectively."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'// bamboo.typ\n#import "@preview/touying:0.4.1": *\n\n#let slide(self: none, title: auto, ..args) = {\n  if title != auto {\n    self.bamboo-title = title\n  }\n  (self.methods.touying-slide)(self: self, ..args)\n}\n\n#let title-slide(self: none, ..args) = {\n  self = utils.empty-page(self)\n  let info = self.info + args.named()\n  let body = {\n    set align(center + horizon)\n    block(\n      fill: self.colors.primary,\n      width: 80%,\n      inset: (y: 1em),\n      radius: 1em,\n      text(size: 2em, fill: self.colors.neutral-lightest, weight: "bold", info.title)\n    )\n    set text(fill: self.colors.neutral-darkest)\n    if info.author != none {\n      block(info.author)\n    }\n    if info.date != none {\n      block(if type(info.date) == datetime { info.date.display(self.datetime-format) } else { info.date })\n    }\n  }\n  (self.methods.touying-slide)(self: self, repeat: none, body)\n}\n\n#let new-section-slide(self: none, section) = {\n  self = utils.empty-page(self)\n  let body = {\n    set align(center + horizon)\n    set text(size: 2em, fill: self.colors.primary, weight: "bold", style: "italic")\n    section\n  }\n  (self.methods.touying-slide)(self: self, repeat: none, section: section, body)\n}\n\n#let focus-slide(self: none, body) = {\n  self = utils.empty-page(self)\n  self.page-args += (\n    fill: self.colors.primary,\n    margin: 2em,\n  )\n  set text(fill: self.colors.neutral-lightest, size: 2em)\n  (self.methods.touying-slide)(self: self, repeat: none, align(horizon + center, body))\n}\n\n#let slides(self: none, title-slide: true, slide-level: 1, ..args) = {\n  if title-slide {\n    (self.methods.title-slide)(self: self)\n  }\n  (self.methods.touying-slides)(self: self, slide-level: slide-level, ..args)\n}\n\n#let register(\n  self: themes.default.register(),\n  aspect-ratio: "16-9",\n  footer: [],\n) = {\n  // color theme\n  self = (self.methods.colors)(\n    self: self,\n    primary: rgb("#5E8B65"),\n    neutral-lightest: rgb("#ffffff"),\n    neutral-darkest: rgb("#000000"),\n  )\n  // variables for later use\n  self.bamboo-title = []\n  self.bamboo-footer = footer\n  // set page\n  let header(self) = {\n    set align(top)\n    show: components.cell.with(fill: self.colors.primary, inset: 1em)\n    set align(horizon)\n    set text(fill: self.colors.neutral-lightest, size: .7em)\n    states.current-section-title\n    linebreak()\n    set text(size: 1.5em)\n    utils.call-or-display(self, self.bamboo-title)\n  }\n  let footer(self) = {\n    set align(bottom)\n    show: pad.with(.4em)\n    set text(fill: self.colors.neutral-darkest, size: .8em)\n    utils.call-or-display(self, self.bamboo-footer)\n    h(1fr)\n    states.slide-counter.display() + " / " + states.last-slide-number\n  }\n  self.page-args += (\n    paper: "presentation-" + aspect-ratio,\n    header: header,\n    footer: footer,\n    margin: (top: 4em, bottom: 1.5em, x: 2em),\n  )\n  // register methods\n  self.methods.slide = slide\n  self.methods.title-slide = title-slide\n  self.methods.new-section-slide = new-section-slide\n  self.methods.touying-new-section-slide = new-section-slide\n  self.methods.focus-slide = focus-slide\n  self.methods.slides = slides\n  self.methods.alert = (self: none, it) => text(fill: self.colors.primary, it)\n  self.methods.init = (self: none, body) => {\n    set text(size: 20pt)\n    body\n  }\n  self\n}\n\n\n// main.typ\n#import "@preview/touying:0.4.1": *\n#import "bamboo.typ"\n\n#let s = bamboo.register(aspect-ratio: "16-9", footer: self => self.info.institution)\n#let s = (s.methods.info)(\n  self: s,\n  title: [Title],\n  subtitle: [Subtitle],\n  author: [Authors],\n  date: datetime.today(),\n  institution: [Institution],\n)\n#let (init, slides, touying-outline, alert, speaker-note) = utils.methods(s)\n#show: init\n\n#show strong: alert\n\n#let (slide, empty-slide, title-slide, focus-slide) = utils.slides(s)\n#show: slides\n\n= First Section\n\n== First Slide\n\n#slide[\n  A slide with a title and an *important* information.\n]\n\n#focus-slide[\n  Focus on it!\n]\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/touying-typ/touying/assets/34951714/03c5ad02-8ff4-4068-9664-d9cfad79baaf",alt:"image"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You've created a simple and elegant theme. Perhaps you may find that Touying introduces a wealth of concepts, making it initially challenging to grasp. This is normal, as Touying opts for functionality over simplicity. However, thanks to Touying's comprehensive and unified approach, you can easily extract commonalities between different themes and transfer your knowledge seamlessly. You can also save global variables, modify existing themes, or switch between themes effortlessly, showcasing the benefits of Touying's decoupling and object-oriented programming."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>l});var n=s(7294);const i={},o=n.createContext(i);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);