var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/components/App.jsx'), './src/index.html'],
    vendors: ['react', 'react-dom', 'react-router', 'superagent', 'ramda']
  },
  output: {
      filename: '/js/app.js',
      path: __dirname + "/dist"
  },
  plugins: [
    new ExtractTextPlugin('app.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'), 
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loaders: ["file?name=[name].[ext]"],
    },{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')

    },{
      test: /\.css$/,
      loader: 'style!css?root=../'
    },{
      test: /\.(woff|woff2|eot|svg|ttf)$/,
      loader: 'url?limit=10000000'
    },{
      test: /\.png$/,
      loaders: ['file']
    }]
  }
};
