/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- tells Next.js to build static HTML for every route
  reactStrictMode: true,
  experimental: {
    missingSuspenseWithCSRBailout: true, // optional, only if you need it
  },
}

module.exports = nextConfig