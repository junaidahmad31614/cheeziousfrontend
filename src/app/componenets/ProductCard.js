'use client';

import Image from 'next/image';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-gray-50 rounded-3xl shadow hover:shadow-lg transition flex flex-col items-center text-center relative h-[480px]">
      {/* Heart Icon */}
      <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>

      {/* Product Image Section */}
      <div className="w-full h-[260px] relative rounded-t-3xl overflow-hidden p-4 flex items-center justify-center bg-white">
        <div className="relative w-[85%] h-[85%]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col w-full p-6 bg-white rounded-b-3xl flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2 text-base">{product.description}</p>
        
        {/* Price Section */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-yellow-500">Rs. {product.price}</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-yellow-500 text-white py-3 rounded-xl font-bold text-lg hover:bg-yellow-600 transition flex items-center justify-center gap-2 mt-auto">
          <span className="text-xl">+</span>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
