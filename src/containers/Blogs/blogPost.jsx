import React from 'react';

function BlogPost({ imageUrl, title, ProductBy, ProductDate, bgcolor }) {
  const displayLabel = () => {
    switch (bgcolor) {
      case 'beauty':
        return <p className="BlogPost-label BlogPost-label--red">{bgcolor}</p>;

      case 'hot':
        return (
          <p className="BlogPost-label BlogPost-label--green">{bgcolor}</p>
        );
      case 'sale':
        return (
          <p className="BlogPost-label BlogPost-label--purple">{bgcolor}</p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-3 mb-28 w-80 max-lg:mb-2">
      <div className="overflow-hidden border-2 rounded-2xl max-sm:w-72">
        <div className="">
          <img
            className="w-full transition duration-150 ease-out hover:scale-105"
            src={imageUrl}
            alt=""
          />
        </div>
      </div>
      <p className="">{displayLabel()}</p>
      <p className="text-xl font-semibold">{title}</p>
      <div className="flex justify-between text-sm">
        <p>{ProductBy}</p>
        <p>{ProductDate}</p>
      </div>
    </div>
  );
}

export default BlogPost;
