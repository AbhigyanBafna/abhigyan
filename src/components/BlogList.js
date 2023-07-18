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
          className={i === currentPage ? 'active text-pHighlight' : 'hover:text-pHighlight'}
        >
            {i}&nbsp;&nbsp;&nbsp;
        </button>
      );
    }
    return buttons;
  };

  //Date Formatting.
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    let daySuffix;
    if (day >= 11 && day <= 13) {
      daySuffix = 'th';
    } else {
      switch (day % 10) {
        case 1:
          daySuffix = 'st';
          break;
        case 2:
          daySuffix = 'nd';
          break;
        case 3:
          daySuffix = 'rd';
          break;
        default:
          daySuffix = 'th';
      }
    }
  
    return `${day}${daySuffix} ${month},\u00A0\u00A0${year}`;
  };

  return (
    <div>
      {currentPosts.map(post => (
        <div key={post._id} className='mb-4'>
          <p className="text-[75%] font-nums text-pHighlight">{formatDate(post.date)}</p>
          <h2 className='font-sansM'>{post.title}</h2>
        </div>
      ))}
      <div className="mt-7 text-2xl font-nums w-full flex justify-center sm:justify-start">
        {renderPageButtons()}
      </div>
    </div>
  );
}
