import React from 'react';
import { FaRegUser, FaShoppingBasket, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className="fixed flex items-center justify-between w-full mx-3 my-2 bg-transparent">
      <div className="flex justify-between gap-16">
        <img
          className="h-14"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt="Logo"
        />
        <div className="flex items-center">
          <ul className="flex gap-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mx-5 text-xl gap-9">
        <FaSearch />
        <FaShoppingBasket />
        <FaRegUser />
      </div>
    </div>
  );
}

export default Header;
