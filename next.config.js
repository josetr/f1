const githubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;
const basePath = githubPages ? '/f1' : '';

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    GITHUB_PAGES: githubPages
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
