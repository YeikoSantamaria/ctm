import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Beneficios',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Asesorias',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Servicios',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    categoryUrl: 'docs/thank-you',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, categoryUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  const catgUrl = useBaseUrl(categoryUrl);
  return (
    
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}></img></div>
      )}
        <a href={catgUrl}>
        <h3>{title}</h3>
        </a>
      <p>{description}</p>
    </div>
    
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hola from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary shadow--tl', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Empezar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="conteiner">
          <div className="row">
            
               <iframe
                  className="col col--4 col--offset-4"
                  src='https://webchat.botframework.com/embed/WorkAssesstmen?s=iTVwkeqh-RA.6j5-CwCoqR8QDJ8-Yclau-is8HMI0zP43zETTiAFjj4'
                  min-width={400}
                  //width="100%"
                  height={500}

                  title="QnA Chat Bot"
                />
            
          </div>
        </section>
      </main>
    </Layout>
  );
}
