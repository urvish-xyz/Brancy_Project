import React from 'react';
import '../../style.css';
import Products from './products';
// import ImageDiv from '../../components/ImageDiv';

function ProductsDivider() {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-10 p-10 md:grid-cols-3 px-container">
      <Products
        ProductTitle="Readable content DX22"
        badge="new"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/1.webp"
        reviewCount="150 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="hot"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/2.webp"
        reviewCount="153 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="new"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/3.webp"
        reviewCount="625 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="new"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/4.webp"
        reviewCount="7634 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="new"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/5.webp"
        reviewCount="625 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="hot"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/6.webp"
        reviewCount="7634 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />

      {/* <ImageDiv /> */}

      <Products
        ProductTitle="Readable content DX22"
        badge="new"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/4.webp"
        reviewCount="7634 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="new"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/5.webp"
        reviewCount="625 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
      <Products
        ProductTitle="Readable content DX22"
        badge="hot"
        imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/6.webp"
        reviewCount="7634 review"
        Price="$210.00"
        ScratchdPrice="300.00"
      />
    </div>
  );
}

export default ProductsDivider;
