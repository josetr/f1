const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/f1' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
