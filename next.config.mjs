/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lively-fish-cdf5e01986.media.strapiapp.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  