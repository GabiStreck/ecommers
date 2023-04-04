// `next-pwa` config should be passed here
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:woff2)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /^https?.*/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'offline',
        expiration: {
          maxEntries: 200,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

// Use `withPWA` and pass general Next.js config
module.exports = withPWA({
  reactStrictMode: true,
  disable: process.env.NODE_ENV === 'development',
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ['picsum.photos', 'media.graphassets.com'],
  },
  output: 'standalone',
});
