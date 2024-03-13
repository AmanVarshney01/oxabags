/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/webp"],
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

module.exports = nextConfig;
