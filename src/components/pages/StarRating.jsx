import React from 'react';

const renderStar = (index, rating) => {
  if (index < Math.floor(rating)) {
    return '★'; 
  } else if (index < rating) {
    return '⯨'; 
  } else {
    return '☆';
  }
};

const StarRating = ({ rating }) => {
  return (
    <div className="card-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ color: index < rating ? 'orange' : '#ccc' }}
        >
          {renderStar(index, rating)}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
