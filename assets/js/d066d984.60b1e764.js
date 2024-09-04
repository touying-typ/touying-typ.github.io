"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3042],{5098:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.5.x","label":"0.5.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.5.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to Touying","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Getting Started","href":"/docs/start","docId":"start","unlisted":false},{"type":"link","label":"Sections and Subsections","href":"/docs/sections","docId":"sections","unlisted":false},{"type":"link","label":"Code Style","href":"/docs/code-styles","docId":"code-styles","unlisted":false},{"type":"link","label":"Page Layout","href":"/docs/layout","docId":"layout","unlisted":false},{"type":"link","label":"Global Settings","href":"/docs/global-settings","docId":"global-settings","unlisted":false},{"type":"link","label":"Multi-File Architecture","href":"/docs/multi-file","docId":"multi-file","unlisted":false},{"type":"category","label":"Dynamic Slides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple Animations","href":"/docs/dynamic/simple","docId":"dynamic/simple","unlisted":false},{"type":"link","label":"Complex Animations","href":"/docs/dynamic/complex","docId":"dynamic/complex","unlisted":false},{"type":"link","label":"Math Equation Animations","href":"/docs/dynamic/equation","docId":"dynamic/equation","unlisted":false},{"type":"link","label":"Cover Function","href":"/docs/dynamic/cover","docId":"dynamic/cover","unlisted":false},{"type":"link","label":"Other Animations","href":"/docs/dynamic/other","docId":"dynamic/other","unlisted":false},{"type":"link","label":"Handout Mode","href":"/docs/dynamic/handout","docId":"dynamic/handout","unlisted":false}],"href":"/docs/category/dynamic-slides"},{"type":"category","label":"Package Integration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pinit","href":"/docs/integration/pinit","docId":"integration/pinit","unlisted":false},{"type":"link","label":"MiTeX","href":"/docs/integration/mitex","docId":"integration/mitex","unlisted":false},{"type":"link","label":"CeTZ","href":"/docs/integration/cetz","docId":"integration/cetz","unlisted":false},{"type":"link","label":"Fletcher","href":"/docs/integration/fletcher","docId":"integration/fletcher","unlisted":false},{"type":"link","label":"Codly","href":"/docs/integration/codly","docId":"integration/codly","unlisted":false},{"type":"link","label":"Ctheorems","href":"/docs/integration/ctheorems","docId":"integration/ctheorems","unlisted":false}],"href":"/docs/category/package-integration"},{"type":"category","label":"Themes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple Theme","href":"/docs/themes/simple","docId":"themes/simple","unlisted":false},{"type":"link","label":"Metropolis Theme","href":"/docs/themes/metropolis","docId":"themes/metropolis","unlisted":false},{"type":"link","label":"Dewdrop Theme","href":"/docs/themes/dewdrop","docId":"themes/dewdrop","unlisted":false},{"type":"link","label":"University Theme","href":"/docs/themes/university","docId":"themes/university","unlisted":false},{"type":"link","label":"Aqua Theme","href":"/docs/themes/aqua","docId":"themes/aqua","unlisted":false},{"type":"link","label":"Stargazer Theme","href":"/docs/themes/stargazer","docId":"themes/stargazer","unlisted":false}],"href":"/docs/category/themes"},{"type":"link","label":"Build Your Own Theme","href":"/docs/build-your-own-theme","docId":"build-your-own-theme","unlisted":false},{"type":"category","label":"Progress","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Touying Counters","href":"/docs/progress/counters","docId":"progress/counters","unlisted":false},{"type":"link","label":"Touying Sections","href":"/docs/progress/sections","docId":"progress/sections","unlisted":false}],"href":"/docs/category/progress"},{"type":"category","label":"Utilities","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Fit to Height / Width","href":"/docs/utilities/fit-to","docId":"utilities/fit-to","unlisted":false}],"href":"/docs/category/utilities"},{"type":"link","label":"Changelog","href":"/docs/changelog","docId":"changelog","unlisted":false},{"type":"category","label":"External Tools","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pdfpc","href":"/docs/external/pdfpc","docId":"external/pdfpc","unlisted":false},{"type":"link","label":"Pympress","href":"/docs/external/pympress","docId":"external/pympress","unlisted":false},{"type":"link","label":"Typst Preview in Tinymist","href":"/docs/external/typst-preview","docId":"external/typst-preview","unlisted":false}],"href":"/docs/category/external-tools"}]},"docs":{"build-your-own-theme":{"id":"build-your-own-theme","title":"Build Your Own Theme","description":"Creating your own theme with Touying can be a bit complex due to the many concepts we\'ve introduced. But rest assured, if you do create a theme with Touying, you might deeply appreciate the convenience and powerful customizability that Touying offers. You can refer to the source code of the themes. The main things you need to implement are:","sidebar":"tutorialSidebar"},"changelog":{"id":"changelog","title":"Changelog","description":"v0.5.1","sidebar":"tutorialSidebar"},"code-styles":{"id":"code-styles","title":"Code Style","description":"Simple Style","sidebar":"tutorialSidebar"},"dynamic/complex":{"id":"dynamic/complex","title":"Complex Animations","description":"Thanks to the syntax provided by Polylux, we can also use only, uncover, and alternatives in Touying.","sidebar":"tutorialSidebar"},"dynamic/cover":{"id":"dynamic/cover","title":"Cover Function","description":"As you already know, both uncover and #pause use the cover function to conceal content that is not visible. So, what exactly is the cover function here?","sidebar":"tutorialSidebar"},"dynamic/equation":{"id":"dynamic/equation","title":"Math Equation Animations","description":"Touying also provides a unique and highly useful feature\u2014math equation animations, allowing you to conveniently use pause and meanwhile within math equations.","sidebar":"tutorialSidebar"},"dynamic/handout":{"id":"dynamic/handout","title":"Handout Mode","description":"While watching slides and attending lectures, the audience often wishes to have handouts for reviewing challenging concepts. Therefore, it\'s beneficial for the author to provide handouts for the audience, preferably before the lecture for better preparation.","sidebar":"tutorialSidebar"},"dynamic/other":{"id":"dynamic/other","title":"Other Animations","description":"Touying also provides touying-reducer, which adds pause and meanwhile animations to cetz and fletcher.","sidebar":"tutorialSidebar"},"dynamic/simple":{"id":"dynamic/simple","title":"Simple Animations","description":"Touying provides two markers for simple animation effects: #pause and #meanwhile.","sidebar":"tutorialSidebar"},"external/pdfpc":{"id":"external/pdfpc","title":"Pdfpc","description":"pdfpc is a \\"Presenter Console with multi-monitor support for PDF files.\\" This means you can use it to display slides in the form of PDF pages and it comes with some known excellent features, much like PowerPoint.","sidebar":"tutorialSidebar"},"external/pympress":{"id":"external/pympress","title":"Pympress","description":"Pympress is a PDF presentation tool designed for dual-screen setups such as presentations and public talks. Highly configurable, fully-featured, and portable","sidebar":"tutorialSidebar"},"external/typst-preview":{"id":"external/typst-preview","title":"Typst Preview in Tinymist","description":"The Tinymist extension for VS Code provides an excellent slide mode, allowing us to preview and present slides.","sidebar":"tutorialSidebar"},"global-settings":{"id":"global-settings","title":"Global Settings","description":"Global Styles","sidebar":"tutorialSidebar"},"integration/cetz":{"id":"integration/cetz","title":"CeTZ","description":"Touying provides the touying-reducer, which adds pause and meanwhile animations to CeTZ and Fletcher.","sidebar":"tutorialSidebar"},"integration/codly":{"id":"integration/codly","title":"Codly","description":"When using Codly, we should initialize it using the config-common(preamble: {..}) method.","sidebar":"tutorialSidebar"},"integration/ctheorems":{"id":"integration/ctheorems","title":"Ctheorems","description":"Touying can work seamlessly with the ctheorems package, allowing you to directly use the ctheorems package.","sidebar":"tutorialSidebar"},"integration/fletcher":{"id":"integration/fletcher","title":"Fletcher","description":"Touying provides the touying-reducer, which adds pause and meanwhile animations to Fletcher.","sidebar":"tutorialSidebar"},"integration/mitex":{"id":"integration/mitex","title":"MiTeX","description":"During the process of creating slides, we often already have a LaTeX math equation that we simply want to paste into the slides without transcribing it into a Typst math equation. In such cases, we can use MiTeX.","sidebar":"tutorialSidebar"},"integration/pinit":{"id":"integration/pinit","title":"Pinit","description":"Pinit package provides the ability to perform absolute positioning based on the page and relative positioning based on \\"pins,\\" making it convenient to implement arrow pointing and explanatory effects for slides.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction to Touying","description":"Touying is a slide/presentation package developed for Typst. Touying is similar to LaTeX Beamer but benefits from Typst, providing faster rendering speed and a more concise syntax. After, we use \\"slides\\" to refer to slideshows, \\"slide\\" for a single slide, and \\"subslide\\" for a sub-slide.","sidebar":"tutorialSidebar"},"layout":{"id":"layout","title":"Page Layout","description":"Basic Concepts","sidebar":"tutorialSidebar"},"multi-file":{"id":"multi-file","title":"Multi-File Architecture","description":"Touying features a syntax as concise as native Typst documents, along with numerous customizable configuration options, yet it still maintains real-time incremental compilation performance, making it suitable for writing large-scale slides.","sidebar":"tutorialSidebar"},"progress/counters":{"id":"progress/counters","title":"Touying Counters","description":"The utils of Touying are placed under the utils namespace, including all counters.","sidebar":"tutorialSidebar"},"progress/sections":{"id":"progress/sections","title":"Touying Sections","description":"Touying adds invisible headings to each slide, so you can use query(heading) to retrieve the current section information.","sidebar":"tutorialSidebar"},"sections":{"id":"sections","title":"Sections and Subsections","description":"Structure","sidebar":"tutorialSidebar"},"start":{"id":"start","title":"Getting Started","description":"Before you begin, make sure you have the Typst environment installed. If not, you can use the Web App or install the Tinymist LSP plugins for VS Code.","sidebar":"tutorialSidebar"},"themes/aqua":{"id":"themes/aqua","title":"Aqua Theme","description":"image","sidebar":"tutorialSidebar"},"themes/dewdrop":{"id":"themes/dewdrop","title":"Dewdrop Theme","description":"image","sidebar":"tutorialSidebar"},"themes/metropolis":{"id":"themes/metropolis","title":"Metropolis Theme","description":"image","sidebar":"tutorialSidebar"},"themes/simple":{"id":"themes/simple","title":"Simple Theme","description":"image","sidebar":"tutorialSidebar"},"themes/stargazer":{"id":"themes/stargazer","title":"Stargazer Theme","description":"image","sidebar":"tutorialSidebar"},"themes/university":{"id":"themes/university","title":"University Theme","description":"image","sidebar":"tutorialSidebar"},"utilities/fit-to":{"id":"utilities/fit-to","title":"Fit to Height / Width","description":"Thanks to ntjess for the code.","sidebar":"tutorialSidebar"}}}')}}]);