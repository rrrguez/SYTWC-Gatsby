import React, { useState } from 'react';

// Componente de valoración
// Este será incrustado en los componentes de tarjeta de noticia
const Rating = ({ onRatingChange }) => {
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
    </div>
  );
};

export default Rating;
