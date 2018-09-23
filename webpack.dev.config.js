const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'eval-source-map',

	devServer: {
		contentBase: path.join(__dirname, '/public'),
		port: '3008',
		historyApiFallback: true,
	}
});