import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './themes.module.css';

const THEMES = [
  {
    id: 'simple',
    name: 'Simple',
    description:
      "A clean, minimal theme originating from Polylux. Great for any presentation where you want the content to shine.",
    image: '/img/themes/simple.png',
    docLink: '/docs/themes/simple',
  },
  {
    id: 'metropolis',
    name: 'Metropolis',
    description:
      "Inspired by Matthias Vogelgesang's Metropolis Beamer theme. Elegant and suitable for everyday academic use.",
    image: '/img/themes/metropolis.png',
    docLink: '/docs/themes/metropolis',
  },
  {
    id: 'dewdrop',
    name: 'Dewdrop',
    description:
      "Features elegant navigation with two modes: sidebar and mini-slides. Inspired by the BeamerTheme project.",
    image: '/img/themes/dewdrop.png',
    docLink: '/docs/themes/dewdrop',
  },
  {
    id: 'university',
    name: 'University',
    description:
      'An aesthetically pleasing theme courtesy of Pol Dellaiera. Well-suited for academic or institutional presentations.',
    image: '/img/themes/university.png',
    docLink: '/docs/themes/university',
  },
  {
    id: 'aqua',
    name: 'Aqua',
    description:
      "Created by @pride7, featuring beautiful backgrounds made with Typst's built-in visualization capabilities.",
    image: '/img/themes/aqua.png',
    docLink: '/docs/themes/aqua',
  },
  {
    id: 'stargazer',
    name: 'Stargazer',
    description:
      'Originally created by Coekjan for the touying-buaa project. Versatile and visually striking.',
    image: '/img/themes/stargazer.png',
    docLink: '/docs/themes/stargazer',
  },
];

function ThemeCard({ name, description, image, docLink }) {
  const imageSrc = useBaseUrl(image);
  return (
    <div className={clsx('col col--6', styles.themeCol)}>
      <div className={styles.themeCard}>
        <div className={styles.themeImageWrap}>
          <img src={imageSrc} alt={`${name} theme preview`} className={styles.themeImage} loading="lazy" />
        </div>
        <div className={styles.themeBody}>
          <Heading as="h3" className={styles.themeName}>{name}</Heading>
          <p className={styles.themeDesc}>{description}</p>
          <Link className="button button--primary button--sm" to={docLink}>
            View Docs →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  return (
    <Layout
      title="Themes"
      description="Browse all Touying presentation themes for Typst">
      <main>
        <div className={styles.themesHero}>
          <div className="container">
            <Heading as="h1">Themes</Heading>
            <p className={styles.themesSubtitle}>
              Choose from six professionally designed themes — or{' '}
              <Link to="/docs/tutorials/build-your-own-theme">build your own</Link>.
            </p>
          </div>
        </div>
        <div className="container" style={{ padding: '2rem 0 4rem' }}>
          <div className="row">
            {THEMES.map((theme) => (
              <ThemeCard key={theme.id} {...theme} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
