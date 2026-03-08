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
  baseUrl: '/',

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
          {to: '/blog', label: 'Blog', position: 'left'},
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
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog',      to: '/blog' },
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
