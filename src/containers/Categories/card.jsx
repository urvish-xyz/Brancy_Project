import React from 'react';
import clsx from 'clsx';
import '../../style.css';

// eslint-disable-next-line react/prop-types
function Card({ title, imageUrl, className }) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4 items-center justify-center max-w-40 h-60 aspect-4/3 md:aspect-3/4 rounded-2xl flip-container',
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
    </div>
  );
}

export default Card;
