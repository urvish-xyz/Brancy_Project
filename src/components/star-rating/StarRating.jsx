import React, { useState } from 'react';
import './StarRating.css';

function StarRating({ rating, onRatingChange }) {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarHover = index => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`star ${index + 1 <= (hoveredRating || rating) ? 'filled' : ''}`}
          onMouseOver={() => handleStarHover(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
