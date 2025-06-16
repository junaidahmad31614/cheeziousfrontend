'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mt-16">
      <Image
        src="/image.jpeg"
        alt="Cheezious Banner"
        fill
        className="object-contain md:object-cover"
        priority
      />
    </div>
  );
}