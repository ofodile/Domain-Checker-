"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`); // Redirect with query
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div className="sticky bg-customNav">
      <nav className="bg-gray z-50 shadow-md font-roboto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <img 
               src="Logo.png"
               className="logo"
            />
          </a>

          <div className="flex md:order-2">
            {/* Hamburger Menu */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex text-black items-center p-2 w-10 h-10 justify-center text-gray-500 dark:text-black active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none md:hidden"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-customNav md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-customNav dark:bg-white md:dark:bg-white">
              {/* Menu Items */}
              <li>
                <a href="https://Learnwithjossy.com" className="block py-2 text-black px-3 text-gray-900 dark:text-white dark:font-bold font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="https://Learnwithjossy.com/blog" className="block py-2 text-black px-3 text-gray-900 dark:text-white dark:font-bold font-bold">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://Learnwithjossy.com/services" className="block py-2 text-black px-3 text-gray-900 dark:text-white dark:font-bold font-bold">
                  Services
                </a>
              </li>
              <li>
                <a href="https://Learnwithjossy.com/tools" className="block py-2 text-black px-3 text-gray-900 dark:text-white dark:font-bold font-bold">
                  Tools
                </a>
              </li>
              <li>
                <a href="https://Learnwithjossy.com/store" className="block py-2 text-black px-3 text-gray-900 dark:text-white font-bold">
                  Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;