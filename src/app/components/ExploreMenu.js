'use client';

import Link from 'next/link';

export default function ExploreMenu() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Menu
        </h2>
        <Link
          href="/menu"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50 border-yellow-500"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* ProductCard components will be rendered here */}
      </div>
    </div>
  );
} 