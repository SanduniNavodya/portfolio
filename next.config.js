/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable React Strict Mode to avoid issues with third-party libraries
    webpack(config, { isServer }) {
      if (!isServer) {
        // Fix issues with React in the client-side code for SSR disabled components
        config.resolve.fallback = {
          fs: false,
          module: false,
          path: false,
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  