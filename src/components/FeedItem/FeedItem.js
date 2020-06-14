// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../Feed/Feed.module.scss';

const FeedItem = ({ node }) => {
  let image;
  let result;

  if (node.frontmatter.featuredImage) {
    image = <Img className={styles['feed__item-image']}
        fluid={{ ...node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16 / 9 }}
      />;
  }

  // if (node.frontmatter.postType === 'pop') {
  //   if (node.frontmatter.featuredImage) {
  //     result = (
  //       <a href={node.frontmatter.featuredImage.childImageSharp.fluid.src} className={styles['feed__item-title-link']}>
  //         <p className={styles['feed__item-description']}>{node.frontmatter.description}</p>
  //         {image}
  //       </a>
  //     );
  //   } else {
  //     result = <p className={styles['feed__item-description']}>{node.frontmatter.description}</p>;
  //   }
  // } else {
    result = (
      <Link className={styles['feed__item-title-link']} to={node.fields.slug}>
        <h2 className={styles['feed__item-title']}>
          {node.frontmatter.title}
        </h2>
        <p className={styles['feed__item-description']}>{node.frontmatter.description}</p>
        {image}
      </Link>
    );
  // }

  return result;
};

export default FeedItem;
