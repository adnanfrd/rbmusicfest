/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // This will completely ignore the problematic packages
    config.resolve.alias = {
      ...config.resolve.alias,
      "@radix-ui/react-accordion": false,
      "@radix-ui/react-dialog": false,
      "@radix-ui/react-toast": false,
      "@radix-ui/react-use-effect-event": false,
    }
    return config
  },
}

module.exports = nextConfig
