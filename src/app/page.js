'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './componenets/ProductCard.js';
import Image from 'next/image';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://lively-fish-cdf5e01986.strapiapp.com/api/products?populate=*');
        const data = await res.json();

        const items = data.data || data;

        const productsData = items.map((item) => {
          return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            description: item.description,
            image: item.images?.[0]?.formats?.small?.url || item.images?.[0]?.url,
            price: item.price,
          };
        });

        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      setSubscriptionStatus('Thanks for subscribing!');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(''), 3000);
    } catch (error) {
      setSubscriptionStatus('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Explore Menu */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Menu
            </h2>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50 border-yellow-500 cursor-not-allowed"
              disabled
            >
              VIEW ALL
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>

          {/* Marketing Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 py-16">
            <div className="text-center">
              <Image
                src="/images/image 1.jpeg"
                alt="Delivering cheezy khushiyan"
                width={400}
                height={300}
                className="w-full rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">Delivering cheezy khushiyan</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/image 2.jpeg"
                alt="Award"
                width={400}
                height={300}
                className="w-full rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">Fastest Growing Brand of the Year</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/image 3.jpeg"
                alt="Local Flavors"
                width={400}
                height={300}
                className="w-full rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">Made with fresh, local ingredients and love</h3>
            </div>
          </div>

          {/* App Banner */}
          <div className="relative w-full mb-20">
            <Image
              src="/app-banner.png"
              alt="Download our app"
              width={1920}
              height={500}
              className="w-full"
            />
            {/* Store Links Container */}
            <div className="absolute bottom-[22%] right-[12%]">
              <div className="flex gap-4 items-center">
                {/* Google Play Store Link */}
                <a 
                  href="https://play.google.com/store/apps/details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[135px] h-[45px] cursor-pointer"
                ></a>
                {/* App Store Link */}
                <a 
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[135px] h-[45px] cursor-pointer"
                ></a>
              </div>
            </div>
          </div>

          {/* Subscription Section INSIDE Megaphone Image */}
          <div className="relative w-full h-[500px] mb-20 rounded-lg overflow-hidden">
            <Image
              src="/megaphone.png"
              alt="Let's Talk Cheezy"
              fill
              className="object-cover"
            />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/90 p-8 rounded-lg max-w-md shadow-lg">
              <h2 className="text-3xl font-bold text-orange-500 mb-2">
                Special Offers & News
              </h2>
              <p className="text-gray-700 mb-4">
                Subscribe now for news, promotions and more delivered right to your inbox
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 rounded-md border border-gray-300 w-full"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-3 rounded-md"
                >
                  SUBSCRIBE
                </button>
              </form>
              {subscriptionStatus && (
                <p className="text-green-600 mt-4">{subscriptionStatus}</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
