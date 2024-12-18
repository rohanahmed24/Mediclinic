/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mediclinic-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mediclinic-app/' : '',
  trailingSlash: true
}

module.exports = nextConfig
