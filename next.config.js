const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
  })
   
  module.exports = {
    ...withNextra(),
    basePath: "/docs",
    images: {
      unoptimized: true,
    },
  };
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })