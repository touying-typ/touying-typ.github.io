import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <img
            src="/img/logo.png"
            alt="Touying Logo"
            className={styles.heroLogo}
          />
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/start">
              Get Started →
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.heroButtonOutline)}
              to="https://github.com/touying-typ/touying">
              View on GitHub
            </Link>
          </div>
          <p className={styles.heroBadges}>
            <a href="https://typst.app/universe/package/touying">
              <img
                src="https://img.shields.io/badge/typst-universe-239dad?logo=typst&logoColor=white"
                alt="Typst Universe"
              />
            </a>
            {' '}
            <a href="https://github.com/touying-typ/touying/stargazers">
              <img
                src="https://img.shields.io/github/stars/touying-typ/touying?style=flat&logo=github"
                alt="GitHub Stars"
              />
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Touying – powerful slide creation in Typst">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
