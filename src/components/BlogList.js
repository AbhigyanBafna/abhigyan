import React, { useState } from 'react';

export default function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the number of pages
  const totalPages = Math.ceil(posts.length / 7);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * 7;
  const endIndex = startIndex + 7;
  const currentPosts = posts.slice(startIndex, endIndex);

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
          className={i === currentPage ? 'active' : ''}
        >
            {i}&nbsp;&nbsp;
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      {currentPosts.map(post => (
        <div key={post._id} className='mb-4'>
          <h2>{post.title}</h2>
          <p className="text-[20px]">{post.date}</p>
        </div>
      ))}
      <div className="page-navigation">
        {renderPageButtons()}
      </div>
    </div>
  );
}
