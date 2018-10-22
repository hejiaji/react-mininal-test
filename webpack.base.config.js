const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new webpack.EnvironmentPlugin([
			'NODE_ENV',
		]),
		new HtmlWebpackPlugin({
			template: __dirname + '/public/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};