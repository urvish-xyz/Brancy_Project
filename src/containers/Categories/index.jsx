import React from 'react';
import Card from './card';
import '../../style.css';

const categories = [
  {
    id: 1,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    className: 'bg-green-200',
    title: 'Skin Care',
  },
  {
    id: 2,
    // badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/2.webp',
    className: 'bg-yellow-200',
    title: 'Skin Care',
  },
  {
    id: 3,
    badge: 'sale',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/3.webp',
    className: 'bg-purple-200',
    title: 'Skin Care',
  },
  {
    id: 4,
    // badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/4.webp',
    className: 'bg-yellow-200',
    title: 'Skin Care',
  },
  {
    id: 5,
    // badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/5.webp',
    className: 'bg-pink-200',
    title: 'Skin Care',
  },
  {
    id: 6,
    // badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/6.webp',
    className: 'bg-yellow-200',
    title: 'lotion',
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="grid grid-cols-2 gap-5 px-container md:grid-cols-3 lg:grid-cols-6"
    >
      {categories.map(x => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={x.id} {...x} />
      ))}
    </section>
  );
}

export default Categories;
