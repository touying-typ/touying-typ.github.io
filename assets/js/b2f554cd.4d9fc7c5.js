"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"touying-0-2-0","metadata":{"permalink":"/blog/touying-0-2-0","editUrl":"https://github.com/touying-typ/touying/tree/main/docs/blog/2024-01-17-touying-0-2-0.md","source":"@site/blog/2024-01-17-touying-0-2-0.md","title":"Touying 0.2.0","description":"Touying 0.2.0 is done.","date":"2024-01-17T00:00:00.000Z","formattedDate":"January 17, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":1.875,"hasTruncateMarker":false,"authors":[{"name":"OrangeX4","title":"Maintainer of Touying.","url":"https://github.com/OrangeX4","imageURL":"https://orangex4.cool/images/icons/profile.jpg","key":"orangex4"}],"frontMatter":{"slug":"touying-0-2-0","title":"Touying 0.2.0","authors":"orangex4","tags":["development"]},"unlisted":false},"content":"Touying 0.2.0 is done.\\n\\n## Implemented Features\\n\\n- [x] **Object-oriented programming:** Singleton `s`, binding methods `utils.methods(s)` and `(self: obj, ..) => {..}` methods.\\n- [x] **Page arguments management:** Instead of using `#set page(..)`, you should use `self.page-args` to retrieve or set page parameters, thereby avoiding unnecessary creation of new pages.\\n- [x] **`#pause` for sequence content:** You can use #pause at the outermost level of a slide, including inline and list.\\n- [x] **`#pause` for layout functions:** You can use the `composer` parameter to add yourself layout function like `utils.side-by-side`, and simply use multiple pos parameters like `#slide[..][..]`.\\n- [x] **`#meanwhile` for synchronous display:** Provide a `#meanwhile` for resetting subslides counter.\\n- [x] **`#pause` and `#meanwhile` for math equation:** Provide a `#touying-equation(\\"x + y pause + z\\")` for math equation animations.\\n- [x] **Slides:** Create simple slides using standard headings.\\n- [x] **Callback-style `uncover`, `only` and `alternatives`:** Based on the concise syntax provided by Polylux, allow precise control of the timing for displaying content.\\n  - You should manually control the number of subslides using the `repeat` parameter.\\n- [x] **Transparent cover:** Enable transparent cover using oop syntax like `#let s = (s.methods.enable-transparent-cover)(self: s)`.\\n- [x] **Handout mode:** enable handout mode by `#let s = (s.methods.enable-handout-mode)(self: s)`.\\n- [x] **Fit-to-width and fit-to-height:** Fit-to-width for title in header and fit-to-height for image.\\n  - `utils.fit-to-width(grow: true, shrink: true, width, body)`\\n  - `utils.fit-to-height(width: none, prescale-width: none, grow: true, shrink: true, height, body)`\\n- [x] **Slides counter:** `states.slide-counter.display() + \\" / \\" + states.last-slide-number` and `states.touying-progress(ratio => ..)`.\\n- [x] **Appendix:** Freeze the `last-slide-number` to prevent the slide number from increasing further.\\n- [x] **Sections:** Touying\'s built-in section support can be used to display the current section title and show progress.\\n  - [x] `section` and `subsection` parameter in `#slide` to register a new section or subsection.\\n  - [x] `states.current-section-title` to get the current section.\\n  - [x] `states.touying-outline` or `s.methods.touying-outline` to display a outline of sections.\\n  - [x] `states.touying-final-sections(sections => ..)` for custom outline display.\\n  - [x] `states.touying-progress-with-sections((current-sections: .., final-sections: .., current-slide-number: .., last-slide-number: ..) => ..)` for powerful progress display.\\n- [x] **Navigation bar**: Navigation bar like [here](https://github.com/zbowang/BeamerTheme) by `states.touying-progress-with-sections(..)`, in `dewdrop` theme.\\n- [x] **Pdfpc:** pdfpc support and export `.pdfpc` file without external tool by `typst query` command simply."}]}')}}]);