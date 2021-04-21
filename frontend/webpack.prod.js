const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			  },
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
		],
	},
	externals: {
		react: 'React',
		axios: 'axios',
		recoil: 'Recoil',
		'react-dom': 'ReactDOM',
		'react-router-dom': 'ReactRouterDOM',
	},
	plugins: [
		new DefinePlugin({
			'process.env.API_URL': JSON.stringify(
				'http://127.0.0.1:5000/api'
			),
		}),
		new HtmlWebpackPlugin({
			template: './template.prod.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'main-bundle-[hash].css',
		}),
		new FaviconsWebpackPlugin({
			logo: './public/favicon.png',
		}),
	],
});
