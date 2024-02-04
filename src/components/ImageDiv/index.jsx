import React from 'react';
import DiscountImage from './main';

function ImageDiv() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-6 h-fit">
      <DiscountImage imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/1.webp" />
      <DiscountImage imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/2.webp" />
      <DiscountImage imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/3.webp" />
    </div>
  );
}

export default ImageDiv;
