const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig