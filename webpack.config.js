const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: {
		login: './login.js',
		index: './index.js',

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
				},
				{
					test: /\.css$/,
					use: [
						'vue-style-loader',
						'css-loader'
					]
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: {
						loader: 'file-loader'
					}

				}
			]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin()
	],
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'JS')
	}
};