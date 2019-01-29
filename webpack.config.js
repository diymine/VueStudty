const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        login: './login.js',
        index: './index.js',
        index_ts: './src/index.ts',

    },
    module: {
        rules: [{
                test: /\.(scss)$/,
                use: [{
                        loader: 'style-loader', // inject CSS to page
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function() { // post css plugins, can be exported to postcss.config.js
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
                test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/,
                use: {
                    loader: 'file-loader'
                }

            },
            {
                test: /\.(ts|js)x?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'JS')
    }
};