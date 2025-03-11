'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[rgb(74,48,22)] p-4">
      <div className="max-w-screen-[1600px] mx-auto flex justify-around items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
            <Image
            src={'/logo.png'}
            height={50}
            width={50}
            alt='Logo'
            />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* Desktop Navbar (hidden on mobile, visible on md and larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button (visible on mobile view) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible when 'isMenuOpen' is true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
