// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import FeedItem from '../FeedItem';
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
            {
              edge.node.frontmatter.categories.map((c, idx) => (
                <Link key={c} to={edge.node.fields.categorySlugs[idx]} className={styles['feed__item-meta-category-link']}>{c}</Link>
              )).reduce((prev, curr) => [prev, ' | ', curr])
            }
          </span>
        </div>
        <FeedItem node={edge.node}/>
      </div>
    ))}
  </div>
);

export default Feed;
