const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/introduction" : "";
module.exports = {
	...withNextra(),
	assetPrefix,
	basePath: "/docs/" + assetPrefix,
	images: {
		unoptimized: true,
	},
};

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })