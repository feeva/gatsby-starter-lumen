// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../Feed/Feed.module.scss';

const zoomImage = (e, edge) => {
  e.preventDefault();
};

const FeedLink = ({ className, edge, children }) => {
  let image;

  if (edge.node.frontmatter.featuredImage) {
    image = <Img className={styles['feed__item-image']} sizes={{ ...edge.node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16 / 9 }} />;
  }

  return edge.node.frontmatter.postType === 'pop'
    ? (
      <a href={edge.node.frontmatter.featuredImage} className={className}
        onClick={(e) => zoomImage(e, edge)}>
        {children}
        {image}
      </a>
    )
    : (
      <Link className={className} to={edge.node.fields.slug}>
        {children}
        {image}
      </Link>
    );
};

export default FeedLink;
