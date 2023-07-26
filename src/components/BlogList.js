import { formatDate } from '@/utils/generalUtils';
import Link from 'next/link';
import React, { useState } from 'react';

export default function BlogList({ posts, tag }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = tag ? 6 : 7; // Change posts per page based on the presence of the 'tag' prop

  // Calculate the number of pages
  const totalPages = Math.ceil(posts?.length / postsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts?.slice(startIndex, endIndex);

  // Handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Generate page navigation buttons
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={i === currentPage ? 'active text-pHighlight' : 'hover:text-pHighlight'}
        >
          {i}&nbsp;&nbsp;&nbsp;
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      {tag && <h2 className="text-4xl font-sansM mb-4 text-pHighlight">#{tag}</h2>}

      {currentPosts?.map(post => (
        <div key={post._id} className='mb-4'>
          <p className="text-[75%] font-nums text-sText">
            {formatDate(post.date)}
          </p>
            <Link
              className='font-sansM text-neutral-200'
              href="/blog/posts/[post]"
              as={`/blog/posts/${post.slug.current}`}
            >
              {post.title}
            </Link>

        </div>
      ))}
      <div className="mt-7 text-2xl font-nums w-full flex justify-center md:justify-start">
        {renderPageButtons()}
      </div>
    </div>
  );
}

BlogList.defaultProps = {
  tag: undefined,
};
