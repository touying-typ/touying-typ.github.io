import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoSrc = useBaseUrl('/img/logo-hero.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <img
            src={logoSrc}
            alt="Touying Logo"
            className={styles.heroLogo}
          />
          {/* <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading> */}
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/quick-start/start">
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
                src="https://img.shields.io/badge/dynamic/xml?url=https%3A%2F%2Ftypst.app%2Funiverse%2Fpackage%2Ftouying&query=%2Fhtml%2Fbody%2Fdiv%2Fmain%2Fdiv%5B2%5D%2Faside%2Fsection%5B2%5D%2Fdl%2Fdd%5B3%5D&logo=typst&label=universe&color=%2339cccc"
                alt="Typst Universe"
              />
            </a>
            {' '}
            <a href="https://touying-typ.github.io/">
              <img src="https://img.shields.io/badge/docs-book-green" alt="Touying documentation" />
            </a>
            {' '}
            <a href="https://github.com/touying-typ/touying/wiki">
              <img src="https://img.shields.io/badge/demo-gallery-red" alt="Gallery" />
            </a>
            {' '}
            <img src="https://img.shields.io/github/license/touying-typ/touying" alt="License" />
            {' '}
            <img src="https://img.shields.io/github/v/release/touying-typ/touying" alt="Release" />
            {' '}
            <a href="https://github.com/touying-typ/touying/stargazers">
              <img
                src="https://img.shields.io/github/stars/touying-typ/touying?style=flat&logo=github"
                alt="GitHub Stars"
              />
            </a>
            {' '}
            <img src="https://img.shields.io/badge/themes-6-aqua" alt="Themes" />
          </p>
          <p className={styles.heroBadges} style={{marginTop: '0.35rem'}}>
            <a href="https://deepwiki.com/touying-typ/touying">
              <img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki" />
            </a>
            {' '}
            <a href="https://zread.ai/touying-typ/touying">
              <img
                src="https://img.shields.io/badge/Ask_Zread-_.svg?style=flat&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff"
                alt="Ask Zread"
              />
            </a>
          </p>
          <p className={styles.heroAiHelp}>
            Have a question?&nbsp;
            <a href="https://deepwiki.com/touying-typ/touying">Ask DeepWiki</a>
            &nbsp;or&nbsp;
            <a href="https://zread.ai/touying-typ/touying">Ask Zread</a>
            &nbsp;for AI-powered help.
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
