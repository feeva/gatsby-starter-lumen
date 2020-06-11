// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import FeedLink from '../FeedLink';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';
import { formatDate } from '../../utils';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={new Date(edge.node.frontmatter.date).toJSON()}>
            {formatDate(edge.node.frontmatter.date)}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <FeedLink className={styles['feed__item-title-link']} edge={edge}>
          <h2 className={styles['feed__item-title']}>
            {edge.node.frontmatter.title}
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        </FeedLink>
      </div>
    ))}
  </div>
);

export default Feed;
