import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;
  // Prism components work on the Prism instance on the window, while
  // prism-react-renderer uses its own Prism instance. We temporarily mount
  // the instance onto globalThis, import components to enhance it, then
  // remove it to avoid polluting the global namespace.
  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang) => {
    if (lang === 'php') {
      require('prismjs/components/prism-markup-templating.js');
    }
    require(`prismjs/components/prism-${lang}`);
  });

  // Register the custom Typst grammar
  require('@site/src/prism-languages/prism-typst');

  delete globalThis.Prism;
}
