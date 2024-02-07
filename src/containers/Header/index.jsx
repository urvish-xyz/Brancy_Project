import React from 'react';
import { FaRegUser, FaShoppingBasket, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <li className="hover:text-[#ff6565] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#ff6565] cursor-pointer">
              <Link to="about">About</Link>
            </li>
            <li className="hover:text-[#ff6565] cursor-pointer">
              <Link to="shop">Shop</Link>
            </li>
            <li className="hover:text-[#ff6565] cursor-pointer">
              <Link to="blog">Blog</Link>
            </li>
            <li className="hover:text-[#ff6565] cursor-pointer">
              <Link to="pages">Pages</Link>
            </li>
            <li className="hover:text-[#ff6565] cursor-pointer">
              Contact
              <Link to="contact">Contact</Link>
            </li>
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
