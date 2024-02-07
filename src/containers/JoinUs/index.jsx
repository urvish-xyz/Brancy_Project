import React from 'react';
import { BsSendFill } from 'react-icons/bs';

function JoinUs() {
  return (
    <section className="mx-auto px-container">
      <div
        className="flex items-center mx-auto mb-32 bg-orange-300 rounded-lg w-96 max-lg:flex-col max-lg:gap-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://generations.krea.ai/images/f1650a09-518b-4c0b-8ba4-18ba145f9a46.webp")`,
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        }}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-3 h-60">
          <p className="text-4xl font-semibold">Join With Us</p>
          <p className="w-[70%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="flex items-center justify-center flex-1 mb-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="enter you email"
            className="border border-[orange] px-2 rounded-lg py-2 focus:outline-orange-400"
          />
          <div className="text-2xl bg-[orange] p-2 rounded-lg">
            <BsSendFill />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
