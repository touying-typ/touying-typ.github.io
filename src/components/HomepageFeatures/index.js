import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '✍️',
    title: 'Concise Syntax',
    description: (
      <>
        Write presentations in Typst's clean, expressive markup language.
        Structure your slides with headings or <code>#slide[…]</code> blocks —
        pick the style that suits you.
      </>
    ),
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: (
      <>
        Typst compiles in <strong>milliseconds</strong>. Live previews update
        as you type, giving you the instant feedback that LaTeX Beamer
        could never provide.
      </>
    ),
  },
  {
    icon: '🎨',
    title: 'Beautiful Themes',
    description: (
      <>
        Choose from a growing collection of professionally designed themes —
        Simple, University, Metropolis, Dewdrop, Aqua, Stargazer — or build
        your own.
      </>
    ),
    link: '/themes',
    linkLabel: 'Browse themes',
    secondaryLink: 'https://typst.app/universe/search/?q=touying',
    secondaryLinkLabel: 'Browse universe',
  },
  {
    icon: '🎬',
    title: 'Dynamic Slides',
    description: (
      <>
        Reveal content step-by-step with <code>#pause</code> and
        {' '}<code>#meanwhile</code>. Animate text, lists, equations and
        custom drawings with no extra tooling.
      </>
    ),
    link: '/docs/tutorials/dynamic/simple',
    linkLabel: 'Learn more',
  },
  {
    icon: '🔢',
    title: 'First-class Math',
    description: (
      <>
        Typst's built-in math mode renders beautiful equations natively.
        No external packages, no compromises.
      </>
    ),
  },
  {
    icon: '🔌',
    title: 'Rich Ecosystem',
    description: (
      <>
        Integrate with{' '}
        <a href="/docs/integration/cetz">CeTZ</a>,{' '}
        <a href="/docs/integration/fletcher">Fletcher</a>,{' '}
        <a href="/docs/integration/pinit">Pinit</a>,{' '}
        <a href="/docs/integration/codly">Codly</a> and more.
        Touying plays nicely with the whole Typst package ecosystem.
      </>
    ),
  },
];

function Feature({ icon, title, description, link, linkLabel, secondaryLink, secondaryLinkLabel }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={clsx('feature-card', styles.featureCard)}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
        {link && (
          <Link className={styles.featureLink} to={link}>
            {linkLabel} →
          </Link>
        )}
        {secondaryLink && (
          <Link className={styles.featureLink} to={secondaryLink}>
            {secondaryLinkLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
