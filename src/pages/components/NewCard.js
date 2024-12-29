import React from 'react';
import ValoracionEstrella from './Rating';

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
        className="image"
        src={image}
        alt={title}
        style={{ display: image ? 'block' : 'none' }}
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <p className="source">Source: {source}</p>
        <p className="days-ago">
          {daysAgo === 0
            ? 'Published today'
            : daysAgo === 1
            ? `Published yesterday`
            : `Publicado ${daysAgo} days ago`}
        </p>
        <a className="link" href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
        <ValoracionEstrella/>
      </div>
    </div>
  );
};

export default NewCard;
