/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chova-cinema.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // output: 'standalone', // for docker use
  async rewrites() {
    return [
      {
        source: '/Media/:path*',
        destination: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Media/:path*`,
      },
      {
        source: '/CarouselMedia/:path*',
        destination: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/CarouselMedia/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
