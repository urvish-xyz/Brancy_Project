import React from 'react';

function DiscountImage({ imageUrl }) {
  return (
    <div className="overflow-hidden border-2 my-28 w-80 min-w-20 rounded-2xl max-sm:w-72">
      <div className="">
        <img
          className="w-full transition duration-150 ease-out hover:scale-105"
          src={imageUrl}
          alt=""
        />
      </div>
    </div>
  );
}

export default DiscountImage;
