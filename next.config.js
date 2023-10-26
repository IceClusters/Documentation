const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = {
  ...withNextra(),
  rewrites: null,
  basePath: 'https://iceclusters.github.io/documentation/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};
