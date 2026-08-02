/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation — emit a fully static site into ./out
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image optimization is unavailable in a static export
    unoptimized: true,
    // Hotlink the original site's real assets
    remotePatterns: [
      { protocol: 'https', hostname: 'ucarecdn.com' },
      { protocol: 'https', hostname: 'www.beatcyclingclub.com' },
      { protocol: 'https', hostname: 'assets.gemcommerce.com' },
    ],
  },
};

export default nextConfig;
