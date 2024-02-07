/* eslint-disable react/prop-types */
import React from 'react';
import StarRating from '../../components/star-rating/StarRating';

// eslint-disable-next-line react/prop-types
function Products({
  ProductTitle,
  badge,
  imageUrl,
  reviewCount,
  ScratchdPrice,
  Price,
}) {
  const displayBadge = () => {
    switch (badge) {
      case 'new':
        return <p className="product-badge product-badge--red">{badge}</p>;

      case 'hot':
        return <p className="product-badge product-badge--green">{badge}</p>;

      case 'sale':
        return <p className="product-badge product-badge--purple">{badge}</p>;

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <div className="w-full mb-5 overflow-hidden border-2 min-w-20 rounded-2xl max-sm:w-72">
        <div className="w-full">
          <img
            className="w-full transition duration-150 ease-out hover:scale-105"
            src={imageUrl}
            alt=""
          />
        </div>
        <div>{displayBadge()}</div>
      </div>
      <div className="flex items-center justify-between">
        <StarRating />
        <p>{reviewCount}</p>
      </div>
      <p className="py-3 font-serif text-xl font-semibold">{ProductTitle}</p>
      <div className="flex items-center gap-2 ">
        <p className="text-xl font-semibold">{Price}</p>
        <s>{ScratchdPrice}</s>
      </div>
    </div>
  );
}

export default Products;
