import React from 'react';

function Banner() {
  return (
    <div className="flex items-center min-h-[130vh] max-sm:flex-col ">
      {/* Left side content */}
      <div className="flex flex-col items-center w-1/2">
        <div className="relative flex flex-col items-start justify-center flex-1 lg:px-32 mt-52">
          <div className="absolute -top-24 -z-10">
            <img
              src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4 ">
            <h1 className="text-[4em] font-bold uppercase">clean fresh</h1>
            <p className="text-[1.2rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              ut, aspernatur recusandae aliquid illo nulla eum official
            </p>
            <input
              type="button"
              value="Buy Now"
              className="px-4 py-3 tracking-[5px] border-2 border-[#231942] hover:bg-[#ff6565] hover:border-[#ff6565] hover:text-white rounded-full w-fit font-semibold"
            />
          </div>
        </div>
      </div>

      {/* right side image */}
      <div className="w-1/2 max-h-[130vh] bg-[#d9f1e1] items-center flex max-sm:w-full">
        <img
          className="w-full right-40 max-md:right-0"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
