/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Generate static HTML files for each page
  generateStaticParams: true,
  // Ensure all routes are statically generated
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig