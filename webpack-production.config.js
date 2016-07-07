var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/components/App.jsx'), './src/index.html', './src/help.html'],
    vendors: ['react', 'react-dom', 'superagent', 'flux', 'jquery', 'moment', 'ramda']
  },
  output: {
      filename: '/js/app.js',
      path: __dirname + "/dist"
  },
  plugins: [
    new ExtractTextPlugin('app.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it/),
    new CopyWebpackPlugin([
      {from: './node_modules/Base64/base64.min.js', to: './js/'},
      {from: './src/images/harvard.png', to: './'}
    ],{}),
    new HtmlWebpackPlugin({
      //apiUrl: 'http://healthyplateapi.herokuapp.com',
      apiUrl: 'http://hep.unibs.it:8000',
      favicon: 'src/favicon.ico',
      filename: 'login.html', 
      template: path.resolve(__dirname, 'src/login.ejs'),
      inject: false
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias:{
      'env':'../environments/prod'
    }
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
