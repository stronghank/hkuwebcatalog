/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '/hkuwebcatalog',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/auth/error',
        destination: `${process.env.NEXT_PUBLIC_SUB_PATH}/api/auth/error`,
      },
      {
        source: '/api/auth/access-denied',
        destination: `${process.env.NEXT_PUBLIC_SUB_PATH}/api/auth/access-denied`,
      },
    ];
  },
});
