// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Touying',
  tagline: 'Powerful Slides in Typst',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://touying-typ.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // DOCUSAURUS_BASE_URL can be set by CI for PR previews (e.g. /pr-preview/pr-3/)
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? '/',

  // GitHub pages deployment config.
  organizationName: 'touying-typ',
  projectName: 'touying-typ.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization: English (default) and Chinese
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: { label: 'English' },
      zh: { label: '中文' },
    },
  },

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      { languages: ['en', 'zh'] },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/touying-typ/touying-typ.github.io/tree/main/',
          // Single version – no versioning drop-down
          disableVersioning: true,
          includeCurrentVersion: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent News',
          editUrl: 'https://github.com/touying-typ/touying-typ.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Touying',
        logo: {
          alt: 'Touying Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {to: '/themes', label: 'Themes', position: 'left'},
          {to: '/docs/reference', label: 'Reference', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/touying-typ/touying',
            position: 'right',
            className: 'navbar--github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://deepwiki.com/touying-typ/touying',
            position: 'right',
            className: 'navbar--deepwiki-link',
            'aria-label': 'Ask DeepWiki',
          },
          {
            href: 'https://zread.ai/touying-typ/touying',
            position: 'right',
            className: 'navbar--zread-link',
            'aria-label': 'Ask Zread',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: '/docs/start' },
              { label: 'Themes',          to: '/docs/themes/simple' },
              { label: 'Dynamic Slides',  to: '/docs/dynamic/simple' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/touying-typ/touying/discussions',
              },
              {
                label: 'Typst Universe',
                href: 'https://typst.app/universe/package/touying',
              },
              {
                label: 'Ask DeepWiki (AI)',
                href: 'https://deepwiki.com/touying-typ/touying',
              },
              {
                label: 'Ask Zread (AI)',
                href: 'https://zread.ai/touying-typ/touying',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'News',      to: '/blog' },
              { label: 'Themes',    to: '/themes' },
              { label: 'GitHub',    href: 'https://github.com/touying-typ/touying' },
              { label: 'Changelog', to: '/docs/changelog' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Touying Contributors`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
