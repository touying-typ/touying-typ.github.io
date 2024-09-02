"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[294],{9761:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var s=i(5893),l=i(1151);const d={sidebar_position:14},r="Changelog",t={id:"changelog",title:"Changelog",description:"v0.5.0",source:"@site/versioned_docs/version-0.5.x/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/touying-typ/touying/tree/main/docs/versioned_docs/version-0.5.x/changelog.md",tags:[],version:"0.5.x",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Fit to Height / Width",permalink:"/docs/utilities/fit-to"},next:{title:"External Tools",permalink:"/docs/category/external-tools"}},o={},c=[{value:"v0.5.0",id:"v050",level:2},{value:"v0.4.2",id:"v042",level:2},{value:"v0.4.1",id:"v041",level:2},{value:"Features",id:"features",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Miscellaneous Improvements",id:"miscellaneous-improvements",level:3},{value:"v0.4.0",id:"v040",level:2},{value:"Features",id:"features-1",level:3},{value:"Fixes",id:"fixes-1",level:3},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"v0.3.3",id:"v033",level:2},{value:"v0.3.2",id:"v032",level:2},{value:"v0.3.1",id:"v031",level:2},{value:"v0.3.0",id:"v030",level:2},{value:"Features",id:"features-2",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Refactor",id:"refactor",level:3},{value:"Fix",id:"fix",level:3},{value:"v0.2.1",id:"v021",level:2},{value:"Features",id:"features-3",level:3},{value:"Fix",id:"fix-1",level:3},{value:"v0.2.0",id:"v020",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(n.h2,{id:"v050",children:"v0.5.0"}),"\n",(0,s.jsx)(n.p,{children:"This is a significant disruptive version update. Touying has removed many mistakes that resulted from incorrect decisions. We have redesigned numerous features. The goal of this version is to make Touying more user-friendly, more flexible, and more powerful."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Major changes include:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Avoiding closures and OOP syntax, which makes Touying's configuration simpler and allows for the use of document comments to provide more auto-completion information for the slide function.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The existing ",(0,s.jsx)(n.code,{children:"#let slide(self: none, ..args) = { .. }"})," is now ",(0,s.jsx)(n.code,{children:"#let slide(..args) = touying-slide-wrapper(self => { .. })"}),", where ",(0,s.jsx)(n.code,{children:"self"})," is automatically injected."]}),"\n",(0,s.jsxs)(n.li,{children:["We can use ",(0,s.jsx)(n.code,{children:"config-xxx"})," syntax to configure Touying, for example, ",(0,s.jsx)(n.code,{children:'#show: university-theme.with(aspect-ratio: "16-9", config-colors(primary: blue))'}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"touying-slide"})," function no longer includes parameters like ",(0,s.jsx)(n.code,{children:"section"}),", ",(0,s.jsx)(n.code,{children:"subsection"}),", and ",(0,s.jsx)(n.code,{children:"title"}),". These will be automatically inserted into the slide as invisible level 1, 2, or 3 headings via ",(0,s.jsx)(n.code,{children:"self.headings"})," (controlled by the ",(0,s.jsx)(n.code,{children:"slide-level"})," configuration).","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We can leverage the powerful headings provided by Typst to support numbering, outlines, and bookmarks."}),"\n",(0,s.jsxs)(n.li,{children:["Headings within the ",(0,s.jsx)(n.code,{children:"#slide[= XXX]"})," function will be adjusted to level ",(0,s.jsx)(n.code,{children:"slide-level + 1"})," using the ",(0,s.jsx)(n.code,{children:"offset"})," parameter."]}),"\n",(0,s.jsxs)(n.li,{children:["We can use labels on headings to control many aspects, such as supporting  the ",(0,s.jsx)(n.code,{children:"<touying:hidden>"})," and other special labels, implementing short headings, or recalling a slide with ",(0,s.jsx)(n.code,{children:"#touying-recall()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Touying now supports the normal use of ",(0,s.jsx)(n.code,{children:"set"})," and ",(0,s.jsx)(n.code,{children:"show"})," rules at any position, without requiring them to be in specific locations."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A simple usage example is shown below, and more examples can be found in the ",(0,s.jsx)(n.code,{children:"examples"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typst",children:'#import "@preview/touying:0.5.0": *\n#import themes.university: *\n\n#show: university-theme.with(\n  aspect-ratio: "16-9",\n  config-info(\n    title: [Title],\n    subtitle: [Subtitle],\n    author: [Authors],\n    date: datetime.today(),\n    institution: [Institution],\n    logo: emoji.school,\n  ),\n)\n\n#set heading(numbering: "1.1")\n\n#title-slide()\n\n= The Section\n\n== Slide Title\n\n#lorem(40)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Theme Migration Guide:"})}),"\n",(0,s.jsxs)(n.p,{children:["For detailed changes to specific themes, you can refer to the ",(0,s.jsx)(n.code,{children:"themes"})," directory. Generally, if you want to migrate an existing theme, you should:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Rename the ",(0,s.jsx)(n.code,{children:"register"})," function to ",(0,s.jsx)(n.code,{children:"xxx-theme"})," and remove the ",(0,s.jsx)(n.code,{children:"self"})," parameter."]}),"\n",(0,s.jsxs)(n.li,{children:["Add a ",(0,s.jsx)(n.code,{children:"show: touying-slides.with(..)"})," configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"self.methods.colors"})," to ",(0,s.jsx)(n.code,{children:'config-colors(primary: rgb("#xxxxxx"))'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"self.page-args"})," to ",(0,s.jsx)(n.code,{children:"config-page()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"self.methods.slide = slide"})," to ",(0,s.jsx)(n.code,{children:"config-methods(slide: slide)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"self.methods.new-section-slide = new-section-slide"})," to ",(0,s.jsx)(n.code,{children:"config-methods(new-section-slide: new-section-slide)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Change private theme variables like ",(0,s.jsx)(n.code,{children:"self.xxx-footer"})," to ",(0,s.jsx)(n.code,{children:"config-store(footer: [..])"}),", which you can access through ",(0,s.jsx)(n.code,{children:"self.store.footer"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Move the configuration of headers and footers into the ",(0,s.jsx)(n.code,{children:"slide"})," function rather than in the ",(0,s.jsx)(n.code,{children:"xxx-theme"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["You can directly use ",(0,s.jsx)(n.code,{children:"set"})," or ",(0,s.jsx)(n.code,{children:"show"})," rules in ",(0,s.jsx)(n.code,{children:"xxx-theme"})," or configure them through ",(0,s.jsx)(n.code,{children:"config-methods(init: (self: none, body) => { .. })"})," to fully utilize the ",(0,s.jsx)(n.code,{children:"self"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.code,{children:"states.current-section-with-numbering"}),", you can use ",(0,s.jsx)(n.code,{children:"utils.display-current-heading(level: 1)"})," instead.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you only need the previous heading regardless of whether it is a section or a subsection, use ",(0,s.jsx)(n.code,{children:"utils.display-current-heading()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"alert"})," function can be replaced with ",(0,s.jsx)(n.code,{children:"config-methods(alert: utils.alert-with-primary-color)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"touying-outline()"})," function is no longer needed; you can use ",(0,s.jsx)(n.code,{children:"components.adaptive-columns(outline())"})," instead. Consider using ",(0,s.jsx)(n.code,{children:"components.progressive-outline()"})," or ",(0,s.jsx)(n.code,{children:"components.custom-progressive-outline()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'})," with ",(0,s.jsx)(n.code,{children:'context utils.slide-counter.display() + " / " + utils.last-slide-number'}),". That is, we no longer use ",(0,s.jsx)(n.code,{children:"states"})," but ",(0,s.jsx)(n.code,{children:"utils"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Remove the ",(0,s.jsx)(n.code,{children:"slides"})," function; we no longer need this function. Instead of implicitly injecting ",(0,s.jsx)(n.code,{children:"title-slide()"}),", explicitly use ",(0,s.jsx)(n.code,{children:"#title-slide()"}),". If necessary, consider adding it in the ",(0,s.jsx)(n.code,{children:"xxx-theme"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"#let slide(self: none, ..args) = { .. }"})," to ",(0,s.jsx)(n.code,{children:"#let slide(..args) = touying-slide-wrapper(self => { .. })"}),", where ",(0,s.jsx)(n.code,{children:"self"})," is automatically injected.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change specific parameter configurations to ",(0,s.jsx)(n.code,{children:"self = utils.merge-dicts(self, config-page(fill: self.colors.neutral-lightest))"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.code,{children:"self = utils.empty-page(self)"})," and use ",(0,s.jsx)(n.code,{children:"config-common(freeze-slide-counter: true)"})," and ",(0,s.jsx)(n.code,{children:"config-page(margin: 0em)"})," instead."]}),"\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"(self.methods.touying-slide)()"})," to ",(0,s.jsx)(n.code,{children:"touying-slide()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["You can insert visible headings into slides by configuring ",(0,s.jsx)(n.code,{children:'config-common(subslide-preamble: self => text(1.2em, weight: "bold", utils.display-current-heading(depth: self.slide-level)))'}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Finally, don't forget to add document comments to your functions so your users can get better auto-completion hints, especially when using the Tinymist plugin."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Other Changes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["theme(stargazer): new stargazer theme modified from ",(0,s.jsx)(n.a,{href:"https://github.com/Coekjan/touying-buaa",children:"Coekjan/touying-buaa"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: implemented fake frozen states support, allowing you to use numbering and ",(0,s.jsx)(n.code,{children:"#pause"})," normally. This behavior can be controlled with ",(0,s.jsx)(n.code,{children:"enable-frozen-states-and-counters"}),", ",(0,s.jsx)(n.code,{children:"frozen-states"}),", and ",(0,s.jsx)(n.code,{children:"frozen-counters"})," in ",(0,s.jsx)(n.code,{children:"config-common()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: implemented ",(0,s.jsx)(n.code,{children:"label-only-on-last-subslide"})," functionality to prevent non-unique label warnings when working with ",(0,s.jsx)(n.code,{children:"@equation"})," and ",(0,s.jsx)(n.code,{children:"@figure"})," in conjunction with ",(0,s.jsx)(n.code,{children:"#pause"})," animations."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: added the ",(0,s.jsx)(n.code,{children:"touying-recall(<label>)"})," function to replay a specific slide."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: implemented ",(0,s.jsx)(n.code,{children:"nontight-list-enum-and-terms"}),", which defaults to ",(0,s.jsx)(n.code,{children:"true"})," and forces ",(0,s.jsx)(n.code,{children:"list"}),", ",(0,s.jsx)(n.code,{children:"enum"}),", and ",(0,s.jsx)(n.code,{children:"terms"})," to have their ",(0,s.jsx)(n.code,{children:"tight"})," parameter set to ",(0,s.jsx)(n.code,{children:"false"}),". You can control spacing size with ",(0,s.jsx)(n.code,{children:"#set list(spacing: 1em)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: replaced ",(0,s.jsx)(n.code,{children:"list"})," with ",(0,s.jsx)(n.code,{children:"terms"})," implementation to achieve ",(0,s.jsx)(n.code,{children:"align-list-marker-with-baseline"}),", which is off by default."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: implemented ",(0,s.jsx)(n.code,{children:"scale-list-items"}),", scaling list items by a factor, e.g., ",(0,s.jsx)(n.code,{children:"scale-list-items: 0.8"})," scales list items by 0.8."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: supported direct use of ",(0,s.jsx)(n.code,{children:"#pause"})," and ",(0,s.jsx)(n.code,{children:"#meanwhile"})," in math expressions, such as ",(0,s.jsx)(n.code,{children:"$x + pause y$"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: provided ",(0,s.jsx)(n.code,{children:"#pause"})," and ",(0,s.jsx)(n.code,{children:"#meanwhile"})," support for most layout functions, such as ",(0,s.jsx)(n.code,{children:"grid"})," and ",(0,s.jsx)(n.code,{children:"table"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: added ",(0,s.jsx)(n.code,{children:"#show: appendix"})," support, essentially equivalent to ",(0,s.jsx)(n.code,{children:"#show: touying-set-config.with((appendix: true))"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: Introduced special labels ",(0,s.jsx)(n.code,{children:"<touying:hidden>"}),", ",(0,s.jsx)(n.code,{children:"<touying:unnumbered>"}),", ",(0,s.jsx)(n.code,{children:"<touying:unoutlined>"}),", ",(0,s.jsx)(n.code,{children:"<touying:unbookmarked>"})," to simplify control over heading behavior."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: added basic ",(0,s.jsx)(n.code,{children:"utils.short-heading"})," support to display short headings using labels, such as displaying ",(0,s.jsx)(n.code,{children:"<sec:my-section>"}),' as "My Section".']}),"\n",(0,s.jsxs)(n.li,{children:["feat: added ",(0,s.jsx)(n.code,{children:"#components.adaptive-columns()"})," to achieve adaptive columns that span a page, typically used with the ",(0,s.jsx)(n.code,{children:"outline()"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: added ",(0,s.jsx)(n.code,{children:'#show: magic.bibliography-as-footnote.with(bibliography("ref.bib"))'})," to display the bibliography in footnotes."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: added components like ",(0,s.jsx)(n.code,{children:"custom-progressive-outline"}),", ",(0,s.jsx)(n.code,{children:"mini-slides"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["feat: removed ",(0,s.jsx)(n.code,{children:"touying-outline()"}),", which can be directly replaced with ",(0,s.jsx)(n.code,{children:"outline()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["fix: replaced potentially incompatible code, such as ",(0,s.jsx)(n.code,{children:'type(s) == "string"'})," and ",(0,s.jsx)(n.code,{children:"locate(loc => { .. })"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"fix: Fixed some bugs."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v042",children:"v0.4.2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["theme(metropolis): decoupled text color with ",(0,s.jsx)(n.code,{children:"neutral-dark"})," (Breaking change)"]}),"\n",(0,s.jsx)(n.li,{children:"feat: add mark-style uncover, only and alternatives"}),"\n",(0,s.jsx)(n.li,{children:"feat: add warning for styled block for slides"}),"\n",(0,s.jsx)(n.li,{children:"feat: add warning for touying-temporary-mark"}),"\n",(0,s.jsx)(n.li,{children:"feat: add markup-text for speaker-note"}),"\n",(0,s.jsx)(n.li,{children:"fix: fix bug of slides"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v041",children:"v0.4.1"}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"feat: support builtin outline and bookmark"}),"\n",(0,s.jsx)(n.li,{children:"feat: support speaker note for dual-screen"}),"\n",(0,s.jsx)(n.li,{children:"feat: add touying-mitex function"}),"\n",(0,s.jsxs)(n.li,{children:["feat: touying offers ",(0,s.jsx)(n.a,{href:"https://github.com/touying-typ/touying/wiki",children:"a gallery page"})," via wiki"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"fix: add outline-slide for dewdrop theme"}),"\n",(0,s.jsx)(n.li,{children:'fix: fix regression of default value "auto" for repeat'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"miscellaneous-improvements",children:"Miscellaneous Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feat: add list support for ",(0,s.jsx)(n.code,{children:"touying-outline"})," function"]}),"\n",(0,s.jsx)(n.li,{children:"feat: add auto-reset-footnote"}),"\n",(0,s.jsxs)(n.li,{children:["feat: add ",(0,s.jsx)(n.code,{children:"freeze-in-empty-page"})," for better page counter"]}),"\n",(0,s.jsxs)(n.li,{children:["feat: add ",(0,s.jsx)(n.code,{children:"..args"})," for register method to capture unused arguments"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v040",children:"v0.4.0"}),"\n",(0,s.jsx)(n.h3,{id:"features-1",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," support ",(0,s.jsx)(n.code,{children:"#footnote[]"})," for all themes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," access subslide and repeat in footer and header by ",(0,s.jsx)(n.code,{children:"self => self.subslide"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," support numbered theorem environments by ",(0,s.jsx)(n.a,{href:"https://typst.app/universe/package/ctheorems",children:"ctheorems"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," support numbering for sections and subsections."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fixes-1",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fix:"})," make nested includes work correctly."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fix:"})," disable multi-page slides from creating the same section multiple times."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"refactor:"})," remove ",(0,s.jsx)(n.code,{children:"self.padding"})," and add ",(0,s.jsx)(n.code,{children:"self.full-header"})," ",(0,s.jsx)(n.code,{children:"self.full-footer"})," config."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v033",children:"v0.3.3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"template:"})," move template to ",(0,s.jsx)(n.code,{children:"touying-aqua"})," package, make Touying searchable in ",(0,s.jsx)(n.a,{href:"https://typst.app/universe/search?kind=packages",children:"Typst Universe Packages"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"themes:"})," fix bugs in university and dewdrop theme"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," make set-show rule work without ",(0,s.jsx)(n.code,{children:"setting"})," parameter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," make ",(0,s.jsx)(n.code,{children:"composer"})," parameter more simpler"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," add ",(0,s.jsx)(n.code,{children:"empty-slide"})," function"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v032",children:"v0.3.2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fix critical bug:"})," fix ",(0,s.jsx)(n.code,{children:"is-sequence"})," function, make ",(0,s.jsx)(n.code,{children:"grid"})," and ",(0,s.jsx)(n.code,{children:"table"})," work correctly in touying"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"theme:"})," add aqua theme, thanks for pride7"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"theme:"})," make university theme more configurable"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"refactor:"})," don't export variable ",(0,s.jsx)(n.code,{children:"s"})," by default anymore, it will be extracted by ",(0,s.jsx)(n.code,{children:"register"})," function (",(0,s.jsx)(n.strong,{children:"Breaking Change"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"meta:"})," add ",(0,s.jsx)(n.code,{children:"categories"})," and ",(0,s.jsx)(n.code,{children:"template"})," config to ",(0,s.jsx)(n.code,{children:"typst.toml"})," for Typst 0.11"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v031",children:"v0.3.1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"fix some typos"}),"\n",(0,s.jsx)(n.li,{children:"fix slide-level bug"}),"\n",(0,s.jsx)(n.li,{children:"fix bug of pdfpc label"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v030",children:"v0.3.0"}),"\n",(0,s.jsx)(n.h3,{id:"features-2",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"better show-slides mode."}),"\n",(0,s.jsx)(n.li,{children:"support align and pad."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add more detailed documentation."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"refactor",children:"Refactor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"simplify theme."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fix",children:"Fix"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"fix many bugs."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v021",children:"v0.2.1"}),"\n",(0,s.jsx)(n.h3,{id:"features-3",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Touying-reducer"}),": support cetz and fletcher animation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"university theme"}),": add university theme"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fix-1",children:"Fix"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"fix footer progress in metropolis theme"}),"\n",(0,s.jsx)(n.li,{children:"fix some bugs in simple and dewdrop themes"}),"\n",(0,s.jsx)(n.li,{children:"fix bug that outline does not display more than 4 sections"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"v020",children:"v0.2.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object-oriented programming:"})," Singleton ",(0,s.jsx)(n.code,{children:"s"}),", binding methods ",(0,s.jsx)(n.code,{children:"utils.methods(s)"})," and ",(0,s.jsx)(n.code,{children:"(self: obj, ..) => {..}"})," methods."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Page arguments management:"})," Instead of using ",(0,s.jsx)(n.code,{children:"#set page(..)"}),", you should use ",(0,s.jsx)(n.code,{children:"self.page-args"})," to retrieve or set page parameters, thereby avoiding unnecessary creation of new pages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"#pause"})," for sequence content:"]})," You can use #pause at the outermost level of a slide, including inline and list."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"#pause"})," for layout functions:"]})," You can use the ",(0,s.jsx)(n.code,{children:"composer"})," parameter to add yourself layout function like ",(0,s.jsx)(n.code,{children:"utils.side-by-side"}),", and simply use multiple pos parameters like ",(0,s.jsx)(n.code,{children:"#slide[..][..]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"#meanwhile"})," for synchronous display:"]})," Provide a ",(0,s.jsx)(n.code,{children:"#meanwhile"})," for resetting subslides counter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"#pause"})," and ",(0,s.jsx)(n.code,{children:"#meanwhile"})," for math equation:"]})," Provide a ",(0,s.jsx)(n.code,{children:'#touying-equation("x + y pause + z")'})," for math equation animations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Slides:"})," Create simple slides using standard headings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Callback-style ",(0,s.jsx)(n.code,{children:"uncover"}),", ",(0,s.jsx)(n.code,{children:"only"})," and ",(0,s.jsx)(n.code,{children:"alternatives"}),":"]})," Based on the concise syntax provided by Polylux, allow precise control of the timing for displaying content.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You should manually control the number of subslides using the ",(0,s.jsx)(n.code,{children:"repeat"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Transparent cover:"})," Enable transparent cover using oop syntax like ",(0,s.jsx)(n.code,{children:"#let s = (s.methods.enable-transparent-cover)(self: s)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Handout mode:"})," enable handout mode by ",(0,s.jsx)(n.code,{children:"#let s = (s.methods.enable-handout-mode)(self: s)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fit-to-width and fit-to-height:"})," Fit-to-width for title in header and fit-to-height for image.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"utils.fit-to-width(grow: true, shrink: true, width, body)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"utils.fit-to-height(width: none, prescale-width: none, grow: true, shrink: true, height, body)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Slides counter:"})," ",(0,s.jsx)(n.code,{children:'states.slide-counter.display() + " / " + states.last-slide-number'})," and ",(0,s.jsx)(n.code,{children:"states.touying-progress(ratio => ..)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Appendix:"})," Freeze the ",(0,s.jsx)(n.code,{children:"last-slide-number"})," to prevent the slide number from increasing further."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sections:"})," Touying's built-in section support can be used to display the current section title and show progress.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"section"})," and ",(0,s.jsx)(n.code,{children:"subsection"})," parameter in ",(0,s.jsx)(n.code,{children:"#slide"})," to register a new section or subsection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"states.current-section-title"})," to get the current section."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"states.touying-outline"})," or ",(0,s.jsx)(n.code,{children:"s.methods.touying-outline"})," to display a outline of sections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"states.touying-final-sections(sections => ..)"})," for custom outline display."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"states.touying-progress-with-sections((current-sections: .., final-sections: .., current-slide-number: .., last-slide-number: ..) => ..)"})," for powerful progress display."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Navigation bar"}),": Navigation bar like ",(0,s.jsx)(n.a,{href:"https://github.com/zbowang/BeamerTheme",children:"here"})," by ",(0,s.jsx)(n.code,{children:"states.touying-progress-with-sections(..)"}),", in ",(0,s.jsx)(n.code,{children:"dewdrop"})," theme."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pdfpc:"})," pdfpc support and export ",(0,s.jsx)(n.code,{children:".pdfpc"})," file without external tool by ",(0,s.jsx)(n.code,{children:"typst query"})," command simply."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>r});var s=i(7294);const l={},d=s.createContext(l);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);