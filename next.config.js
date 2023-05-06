/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  c: {
    domains: ["kiles.s3.us-west-1.amazonaws.com"],
  },
}

module.exports = nextConfig
