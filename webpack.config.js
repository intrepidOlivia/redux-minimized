const HtmlWebpackPlugin = require('html-webpack-plugin');

const LOCAL_PORT = 8080;

module.exports = {
	entry: {
		'main': './src/index.js'
	},
	output: {
		path: '/public',
		filename: 'demo.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env", "@babel/react"]
					},
				}
			}
		]
	},
	mode: 'development',
	devServer: {
		host: '0.0.0.0',
		port: LOCAL_PORT,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
	],

};
