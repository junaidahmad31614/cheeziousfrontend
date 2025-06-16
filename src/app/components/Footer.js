'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Section */}
          <div className="flex items-center gap-2 text-gray-600">
            <Image
              src="/logo.png"
              alt="Cheezious"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span>Cheezious Copyright © 2025. All Rights Reserved.</span>
          </div>

          {/* Links Section */}
          <div className="flex items-center gap-4">
            <button 
              className="text-gray-600 hover:text-gray-900 cursor-not-allowed"
              disabled
            >
              TERMS & CONDITIONS
            </button>
            <span className="text-gray-300">|</span>
            <button 
              className="text-gray-600 hover:text-gray-900 cursor-not-allowed"
              disabled
            >
              PRIVACY POLICY
            </button>
          </div>

          {/* Order Now Button - Visible on Mobile */}
          <button
            className="md:hidden bg-[#F97316] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#EA580C] transition cursor-not-allowed"
            disabled
          >
            ORDER NOW
          </button>

          {/* Order Now Button - Visible on Desktop */}
          <button
            className="hidden md:block fixed bottom-8 right-8 bg-[#F97316] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#EA580C] transition shadow-lg cursor-not-allowed"
            disabled
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </footer>
  );
} 