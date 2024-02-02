import React from 'react';
import Card from '../../card';

function Categories() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center h-[70vh] gap-4">
        <Card
          title="Tatti"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/6.webp"
          className="flex-grow flex-shrink-0 bg-red-200 flip-container basis-44"
        />
        <Card
          title="Garage"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/5.webp"
          className="flex-grow flex-shrink-0 bg-green-200 basis-44"
        />
        <Card
          title="Ameero ke chochle"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp"
          className="flex-grow flex-shrink-0 bg-blue-200 basis-44"
        />
        <Card
          title="Orange jam"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/2.webp"
          className="flex-grow flex-shrink-0 bg-orange-200 basis-44"
        />
      </div>
    </div>
  );
}

export default Categories;
