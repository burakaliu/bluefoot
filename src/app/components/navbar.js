'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-md rounded-full shadow-lg mx-auto w-[70%] sticky top-4 z-50">
      <div className="max-w-6xl mx-auto px-4 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center ml-4">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              bluefoot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link 
              href="/home" 
              className="px-4 py-2 rounded-full text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-full text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 rounded-full text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className="px-4 py-2 rounded-full text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              Contact
            </Link>
          </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md rounded-xl shadow-lg mx-4 mb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                About
              </Link>
              <Link 
                href="/services"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Services
              </Link>
              <Link 
                href="/pricing"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Pricing
              </Link>
              <Link 
                href="/contact"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
          {/* Mobile Navigation Button */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md rounded-xl shadow-lg mx-4 mb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                About
              </Link>
              <Link 
                href="/services"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
