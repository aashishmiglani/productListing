// components/Rating.js
import React from 'react';

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(
        <svg
          key={i}
          className="fill-current text-yellow-400 w-4 h-4 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15.66l-4.194 2.356.804-4.72-3.39-3.312 4.72-.688L10 5.31l1.06 5.587 4.72.688-3.39 3.312.804 4.72z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="fill-current text-gray-400 w-4 h-4 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15.66l-4.194 2.356.804-4.72-3.39-3.312 4.72-.688L10 5.31l1.06 5.587 4.72.688-3.39 3.312.804 4.72z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
