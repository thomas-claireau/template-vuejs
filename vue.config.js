module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/fcc/palindrome/dist/' : '/',
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.options({
				svgo: {
					plugins: [{ removeViewBox: false }],
				},
			})
			.loader('vue-svg-loader');
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/styles/_vars.scss";
					@import "@/styles/_container.scss";
				`,
			},
		},
	},
};
