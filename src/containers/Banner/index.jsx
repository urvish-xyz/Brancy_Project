import React from 'react';

function Banner() {
  return (
    <div className="flex items-center h-[130vh] md:flex-wrap">
      {/* Left side content */}
      <div className="flex flex-col items-center w-1/2">
        <div className="relative flex flex-col items-start justify-center flex-1 px-32 mt-52">
          <div className="absolute -top-24 w-[330px] -z-10">
            <img
              src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4 ">
            <h1 className="text-6xl font-bold uppercase">clean fresh</h1>
            <p className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              ut, aspernatur recusandae aliquid illo nulla eum officia{' '}
            </p>
          </div>
        </div>
      </div>

      {/* right side image */}
      <div className="w-1/2 h-full bg-[#d9f1e1] items-center flex">
        <img
          className="absolute w-[50vw] right-40"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
