import React, { useState } from 'react';

const ValoracionEstrella = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value); // Emitir un callback si se pasa como prop
    }
  };

  return (
    <div className="stars-container">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={`star ${rating >= starValue ? 'selected' : ''}`}
          onClick={() => handleRating(starValue)}
        >
          ★
        </span>
      ))}
      <style>
        {`
          .star {
            font-size: 20px;
            cursor: pointer;
            color: #ddd;
          }
          .star.selected {
            color: #f0c014;
          }
        `}
      </style>
    </div>
  );
};

export default ValoracionEstrella;
