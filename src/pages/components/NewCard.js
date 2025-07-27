import React from 'react';
import Rating from './Rating';

import '/pages/styles/new.css'

// Esta es la plantilla de las tarjetas de noticias
const NewCard = ({ title, description, source, image, link, date }) => {
  const calculateDaysAgo = (date) => {
    const publishedDate = new Date(date);
    const currentDate = new Date();

    const publishedDate_ms =
      publishedDate.getTime() - publishedDate.getTimezoneOffset() * (1000 * 60);
    const currentDate_ms =
      currentDate.getTime() - currentDate.getTimezoneOffset() * (1000 * 60);

    return Math.floor((currentDate_ms - publishedDate_ms) / (1000 * 3600 * 24));
  };

  const daysAgo = calculateDaysAgo(date);

  return (
    <div className="card">
      <img
        className="new-image"
        src={image}
        style={{ display: image ? 'block' : 'none' }}
      />
      <div className="content">
        <p className="days-ago">
            {daysAgo === 0
              ? 'Published today'
              : daysAgo === 1
              ? `Published yesterday`
              : `Published ${daysAgo} days ago`}
          </p>
        <h3 className="new-title">{title}</h3>
        <p className="description">{description}</p>
        <a className="link" href={link} target="_blank" rel="noopener noreferrer">
            Read more
        </a>
        <div className="new-foot">
          <p className="source">Source: {source}</p>
          <Rating/>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
