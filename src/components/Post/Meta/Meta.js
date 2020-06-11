// @flow strict
import React from 'react';
import styles from './Meta.module.scss';
import { formatDate } from '../../../utils';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>게시일 - {formatDate(date)}</p>
  </div>
);

export default Meta;
