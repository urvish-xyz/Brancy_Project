import React from 'react';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
function Card({ title, imageUrl, className, badge }) {
  const displayBadge = () => {
    switch (badge) {
      case 'new':
        return <p className="badge badge--red">{badge}</p>;
      case 'hot':
        return <p className="badge badge--green">{badge}</p>;
      case 'sale':
        return <p className="badge badge--purple">{badge}</p>;

      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(
        'container aspect-4/3 md:aspect-3/4 flex flex-col items-center justify-between bg-red-100 p-6 rounded-2xl relative flip-container',
        {
          [className]: !!className,
        },
      )}
    >
      <div className="flip-card">
        <img src={imageUrl} alt="icon" height={70} width={70} />
      </div>
      <div className="w-10 h-1 bg-red-500 rounded-lg" />
      <h3>{title}</h3>
      {/* {badge ? <p>{badge}</p> : <p>Badge Not available</p>} */}
      {displayBadge()}
    </div>
  );
}

export default Card;
