import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-10 mb-10 max-md:flex-col">
        {/* Company */}
        <div className="flex flex-col flex-1 gap-10 px-20 max-lg:px-5 max-lg:w-full">
          <img
            className="w-24"
            src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
            alt="logo"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
        </div>

        {/* Information */}
        <div className="flex flex-col flex-1 gap-6 max-lg:px-5">
          <p className="text-2xl font-bold">Information</p>

          <ul className="flex flex-wrap flex-1 gap-y-7">
            <li className="w-1/3">Blog</li>
            <li className="w-1/3">About us</li>
            <li className="w-1/3">Contact</li>
            <li className="w-1/3">Privacy</li>
            <li className="w-1/3">Login</li>
            <li className="w-1/3">Shop</li>
            <li className="w-1/3">My Account</li>
            <li className="w-1/3">FAQs</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col flex-1 gap-10 px-20 max-lg:px-5 max-lg:w-full">
          <div className="flex flex-col flex-1 gap-6 min-lg:px-10">
            <p className="text-2xl font-bold">Social Info</p>

            <ul className="flex flex-wrap w-full gap-y-7">
              <li className="w-1/3">
                <FaTwitter />
              </li>
              <li className="w-1/3">
                <FaFacebookF />
              </li>
              <li className="w-1/3">
                <FaPinterest />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p>
          © 2022 Brancy. Made with 💖 by{' '}
          <a
            className="font-mono font-bold underline"
            href="https://www.instagram.com/urvish.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Urvish Patel
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
