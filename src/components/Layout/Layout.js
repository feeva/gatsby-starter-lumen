// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string,
  url?: string,
};

const Layout = ({
  children,
  title,
  description,
  socialImage,
  url,
}: Props) => {
  const { author, url: siteUrl } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = siteUrl + withPrefix(metaImage);

  const ldJson = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@id': url || siteUrl,
    },
    url: url || siteUrl,
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author.name
    },
    image: {
      '@type': 'ImageObject',
      url: metaImageUrl,
      // width: '800px',
      // height: '800px'
    },
  };

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url || siteUrl} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
