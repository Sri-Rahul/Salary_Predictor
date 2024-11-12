// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Set deterministic module IDs
    config.optimization.moduleIds = 'deterministic';
    
    // Silence webpack cache warnings
    config.infrastructureLogging = {
      level: 'error',
      debug: false
    };

    return config;
  },
};

module.exports = nextConfig;