/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dilliprasadmogarala.vercel.app',
          },
        ],
        destination: 'https://dilliprasad.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dilliprasad-portfolio.vercel.app',
          },
        ],
        destination: 'https://dilliprasad.vercel.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
