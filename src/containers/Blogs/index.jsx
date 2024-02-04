import React from 'react';
import BlogPost from './blogPost';

function Blogs() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-6 my-20">
        <h1 className="text-6xl font-extrabold">Blog Post</h1>
        <p className="max-w-[70vh] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full h-auto gap-10 max-lg:gap-3">
        <BlogPost
          title="Lorem ipsum dolor sit amet consectetur adipiscing."
          bgcolor="beauty"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/blog/1.webp"
          ProductBy="BY: TOMAS DE MOMEN"
          ProductDate="FEBRUARY 13, 2022"
        />
        <BlogPost
          bgcolor="beauty"
          title="Facial Scrub is natural treatment for face."
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/blog/2.webp"
          ProductBy="BY: TOMAS DE MOMEN"
          ProductDate="FEBRUARY 13, 2022"
        />
        <BlogPost
          bgcolor="beauty"
          title="Benefit of Hot Ston Spa for your health & life."
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/blog/3.webp"
          ProductBy="BY: TOMAS DE MOMEN"
          ProductDate="FEBRUARY 13, 2022"
        />
      </div>
    </div>
  );
}

export default Blogs;
