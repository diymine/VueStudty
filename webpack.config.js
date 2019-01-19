const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
	entry: {
		login: '././Front/JS/Login.js',
		index: '././Front/JS/Index.js',

	},
	module: {
		rules:
			[
				{
					test: /\.(scss)$/,
					use:
						[
							{
								loader: 'style-loader', // inject CSS to page
							},
							{
								loader: 'css-loader', // translates CSS into CommonJS modules
							},
							{
								loader: 'postcss-loader', // Run post css actions
								options: {
									plugins: function () { // post css plugins, can be exported to postcss.config.js
										return [
											require('precss'),
											require('autoprefixer')
										];
									}
								}
							},
							{
								loader: 'sass-loader' // compiles Sass to CSS
							}
						]
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				}
			]
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin()
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'wwwroot/JS')
	}
};