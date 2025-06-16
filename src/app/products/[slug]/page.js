'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const sizes = [
    { name: 'Regular', price: 1600 },
    { name: 'Large', price: 2450 },
  ];

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://lively-fish-cdf5e01986.strapiapp.com/api/products?filters[slug][$eq]=${params.slug}&populate=*`
        );
        const data = await res.json();
        const item = data.data[0];

        const productData = {
          id: item.id,
          title: item.name,
          slug: item.slug,
          description: item.description,
          image: item.images?.[0]?.formats?.small?.url || item.images?.[0]?.url,
          price: item.price || 0
        };

        setProduct(productData);
      } catch (error) {
        console.error('Error loading product:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert(`Added to cart: ${quantity} x ${selectedSize.name} ${product.title}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <p className="text-xl text-red-600 mb-4">{error || 'Product not found'}</p>
            <a href="/" className="text-yellow-500 hover:text-yellow-600 underline">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-gray-600 text-lg mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  Variation
                  <span className="ml-2 text-sm text-white bg-yellow-500 px-2 py-1 rounded">REQUIRED</span>
                </h3>
                <div className="space-y-4">
                  {sizes.map((size) => (
                    <label
                      key={size.name}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedSize?.name === size.name
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-200'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          checked={selectedSize?.name === size.name}
                          onChange={() => setSelectedSize(size)}
                        />
                        <span className="text-lg text-gray-900">{size.name}</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        PKR {size.price.toLocaleString()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center mb-8">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
                >
                  -
                </button>
                <span className="mx-6 text-xl font-semibold text-gray-900">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-auto w-full bg-yellow-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 transition-colors flex items-center justify-center"
              >
                ADD Rs: {selectedSize ? (selectedSize.price * quantity).toLocaleString() : '0'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

