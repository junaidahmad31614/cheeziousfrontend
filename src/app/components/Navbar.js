'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                className="h-6 w-auto md:h-8"
                src="/logo.png"
                alt="Cheezious"
                width={120}
                height={28}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 cursor-not-allowed"
              disabled
            >
              <svg
                className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              CART
              <span className="ml-1.5 md:ml-2 bg-red-500 text-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
            <button
              className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 border border-transparent text-sm font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50 border-yellow-500 cursor-not-allowed"
              disabled
            >
              LOGIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-200`}
      >
        <div className="pt-2 pb-3 space-y-1">
          <button
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full cursor-not-allowed"
            disabled
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Cart
            <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </button>
          <button
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full cursor-not-allowed"
            disabled
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
} 