// @flow strict
import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  postTitle: string,
  postSlug: string
};

const Comments = ({ postTitle, postSlug, link }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <Disqus config={{
      identifier: link ? undefined : postTitle,
      title: postTitle,
      url: link || url + postSlug,
      language: typeof window === 'undefined' ? 'ko' : navigator.language.slice(0, 2),
    }} />
  );
};

export default Comments;
