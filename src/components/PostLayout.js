import React from 'react';

import { Analytics } from '@vercel/analytics/react';
import PostBar from './PostBar';

const PostLayout = ({ children, post, nextSlug }) => {

  console.log(nextSlug);

  return (
    <div>
      <PostBar post = {post} nextSlug={nextSlug} />
      {children}
      <Analytics />

    </div>
  );
};

export default PostLayout;
