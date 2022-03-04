const githubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;
const basePath = githubPages ? '/f1' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    GITHUB_PAGES: githubPages
  }
};
