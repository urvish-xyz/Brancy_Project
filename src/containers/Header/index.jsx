import React from 'react';
import { FaRegUser, FaShoppingBasket, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full bg-white/30 backdrop-blur-sm">
      <div className="flex justify-between gap-16 mx-3 my-2">
        <img
          className="h-14"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt="Logo"
        />
        <div className="flex items-center max-md:hidden">
          <ul className="flex font-semibold gap-7">
            <li className="hover:text-[#ff6565] cursor-pointer">Home</li>
            <li className="hover:text-[#ff6565] cursor-pointer">About</li>
            <li className="hover:text-[#ff6565] cursor-pointer">Shop</li>
            <li className="hover:text-[#ff6565] cursor-pointer">Blog</li>
            <li className="hover:text-[#ff6565] cursor-pointer">Pages</li>
            <li className="hover:text-[#ff6565] cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex mx-5 text-xl gap-9">
        <FaSearch className="hover:text-[#ff6565] cursor-pointer" />
        <FaShoppingBasket className="hover:text-[#ff6565] cursor-pointer" />
        <FaRegUser className="hover:text-[#ff6565] cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
