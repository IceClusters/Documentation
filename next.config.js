global.Headers = global.Headers || require('node-fetch').Headers;

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx'
  })
   
  module.exports = withNextra()