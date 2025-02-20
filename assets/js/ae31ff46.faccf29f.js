"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2528],{58497:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.2.x","label":"0.2.x","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.2.x","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to Touying","href":"/docs/0.2.x/intro","docId":"intro","unlisted":false},{"type":"link","label":"Getting Started","href":"/docs/0.2.x/start","docId":"start","unlisted":false},{"type":"link","label":"Layout Your Contents","href":"/docs/0.2.x/layout","docId":"layout","unlisted":false},{"type":"link","label":"Code Styles","href":"/docs/0.2.x/style","docId":"style","unlisted":false},{"type":"category","label":"Dynamic Slides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple Animations","href":"/docs/0.2.x/dynamic/simple","docId":"dynamic/simple","unlisted":false},{"type":"link","label":"Complex Animations","href":"/docs/0.2.x/dynamic/complex","docId":"dynamic/complex","unlisted":false},{"type":"link","label":"Math Equation Animations","href":"/docs/0.2.x/dynamic/equation","docId":"dynamic/equation","unlisted":false},{"type":"link","label":"Cover Function","href":"/docs/0.2.x/dynamic/cover","docId":"dynamic/cover","unlisted":false},{"type":"link","label":"Handout Mode","href":"/docs/0.2.x/dynamic/handout","docId":"dynamic/handout","unlisted":false},{"type":"link","label":"Other Animations","href":"/docs/0.2.x/dynamic/other","docId":"dynamic/other","unlisted":false}],"href":"/docs/0.2.x/category/dynamic-slides"},{"type":"category","label":"Themes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple Theme","href":"/docs/0.2.x/themes/simple","docId":"themes/simple","unlisted":false},{"type":"link","label":"Metropolis Theme","href":"/docs/0.2.x/themes/metropolis","docId":"themes/metropolis","unlisted":false},{"type":"link","label":"Dewdrop Theme","href":"/docs/0.2.x/themes/dewdrop","docId":"themes/dewdrop","unlisted":false},{"type":"link","label":"University Theme","href":"/docs/0.2.x/themes/university","docId":"themes/university","unlisted":false}],"href":"/docs/0.2.x/category/themes"},{"type":"link","label":"Build Your Own Theme","href":"/docs/0.2.x/build-your-own-theme","docId":"build-your-own-theme","unlisted":false},{"type":"category","label":"Progress","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Touying Counters","href":"/docs/0.2.x/progress/counters","docId":"progress/counters","unlisted":false},{"type":"link","label":"Touying Sections","href":"/docs/0.2.x/progress/sections","docId":"progress/sections","unlisted":false}],"href":"/docs/0.2.x/category/progress"},{"type":"category","label":"Utilities","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Object-Oriented Programming","href":"/docs/0.2.x/utilities/oop","docId":"utilities/oop","unlisted":false},{"type":"link","label":"Fit to Height / Width","href":"/docs/0.2.x/utilities/fit-to","docId":"utilities/fit-to","unlisted":false}],"href":"/docs/0.2.x/category/utilities"},{"type":"category","label":"External Tools","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pdfpc","href":"/docs/0.2.x/external/pdfpc","docId":"external/pdfpc","unlisted":false},{"type":"link","label":"Typst Preview","href":"/docs/0.2.x/external/typst-preview","docId":"external/typst-preview","unlisted":false}],"href":"/docs/0.2.x/category/external-tools"},{"type":"link","label":"Changelog","href":"/docs/0.2.x/changelog","docId":"changelog","unlisted":false}]},"docs":{"build-your-own-theme":{"id":"build-your-own-theme","title":"Build Your Own Theme","description":"You can refer to the source code of themes. The main things to implement are:","sidebar":"tutorialSidebar"},"changelog":{"id":"changelog","title":"Changelog","description":"v0.2.1","sidebar":"tutorialSidebar"},"dynamic/complex":{"id":"dynamic/complex","title":"Complex Animations","description":"Thanks to the syntax provided by Polylux, we can also use only, uncover, and alternatives in Touying.","sidebar":"tutorialSidebar"},"dynamic/cover":{"id":"dynamic/cover","title":"Cover Function","description":"As you already know, both uncover and #pause use the cover function to conceal content that is not visible. So, what exactly is the cover function here?","sidebar":"tutorialSidebar"},"dynamic/equation":{"id":"dynamic/equation","title":"Math Equation Animations","description":"Touying also provides a unique and highly useful feature\u2014math equation animations, allowing you to conveniently use pause and meanwhile within math equations.","sidebar":"tutorialSidebar"},"dynamic/handout":{"id":"dynamic/handout","title":"Handout Mode","description":"While watching slides and attending lectures, the audience often wishes to have handouts for reviewing challenging concepts. Therefore, it\'s beneficial for the author to provide handouts for the audience, preferably before the lecture for better preparation.","sidebar":"tutorialSidebar"},"dynamic/other":{"id":"dynamic/other","title":"Other Animations","description":"Touying also provides touying-reducer, which adds pause and meanwhile animations to cetz and fletcher.","sidebar":"tutorialSidebar"},"dynamic/simple":{"id":"dynamic/simple","title":"Simple Animations","description":"Touying provides two markers for simple animation effects: #pause and #meanwhile.","sidebar":"tutorialSidebar"},"external/pdfpc":{"id":"external/pdfpc","title":"Pdfpc","description":"pdfpc is a \\"Presenter Console with multi-monitor support for PDF files.\\" This means you can use it to display slides in the form of PDF pages and it comes with some known excellent features, much like PowerPoint.","sidebar":"tutorialSidebar"},"external/typst-preview":{"id":"external/typst-preview","title":"Typst Preview","description":"The Typst Preview extension for VS Code provides an excellent slide mode, allowing us to preview and present slides.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction to Touying","description":"Touying is a slide/presentation package developed for Typst, based on Polylux. Touying is similar to LaTeX Beamer but benefits from Typst, providing faster rendering speed and a more concise syntax. Hereafter, we use \\"slides\\" to refer to slideshows, \\"slide\\" for a single slide, and \\"subslide\\" for a sub-slide.","sidebar":"tutorialSidebar"},"layout":{"id":"layout","title":"Layout Your Contents","description":"To better manage every detail in the slides and achieve better rendering results, like Beamer, Touying has introduced some unique concepts. This helps you maintain global information better and easily switch between different themes.","sidebar":"tutorialSidebar"},"progress/counters":{"id":"progress/counters","title":"Touying Counters","description":"The states of Touying are placed under the states namespace, including all counters.","sidebar":"tutorialSidebar"},"progress/sections":{"id":"progress/sections","title":"Touying Sections","description":"Touying maintains its own sections state to record the sections and subsections of slides.","sidebar":"tutorialSidebar"},"start":{"id":"start","title":"Getting Started","description":"Before you begin, make sure you have installed the Typst environment. If not, you can use the Web App or the Tinymist LSP and Typst Preview plugins for VS Code.","sidebar":"tutorialSidebar"},"style":{"id":"style","title":"Code Styles","description":"show-slides Style","sidebar":"tutorialSidebar"},"themes/dewdrop":{"id":"themes/dewdrop","title":"Dewdrop Theme","description":"image","sidebar":"tutorialSidebar"},"themes/metropolis":{"id":"themes/metropolis","title":"Metropolis Theme","description":"image","sidebar":"tutorialSidebar"},"themes/simple":{"id":"themes/simple","title":"Simple Theme","description":"image","sidebar":"tutorialSidebar"},"themes/university":{"id":"themes/university","title":"University Theme","description":"image","sidebar":"tutorialSidebar"},"utilities/fit-to":{"id":"utilities/fit-to","title":"Fit to Height / Width","description":"Thanks to ntjess for the code.","sidebar":"tutorialSidebar"},"utilities/oop":{"id":"utilities/oop","title":"Object-Oriented Programming","description":"Touying provides some convenient utility functions for object-oriented programming.","sidebar":"tutorialSidebar"}}}')}}]);