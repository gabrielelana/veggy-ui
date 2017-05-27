const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
      app: path.resolve(__dirname, 'src/app/App.jsx'),
      vendor: require('./vendor-lib')
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('./node_modules'),
      ],
      extensions: ['.js', '.jsx'],
      alias:{
        settings:  path.resolve(__dirname, 'src/environments/prod')
      }
    },
    plugins: [
      new ExtractTextPlugin({ filename: 'css/app.css', allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({minimize: true}),
      new webpack.optimize.CommonsChunkPlugin({name:'vendor', minChunks: Infinity}), 
      new webpack.optimize.OccurrenceOrderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html', 
        css: 'css/app.css',
        template: path.resolve(__dirname, 'src/index.ejs'),
        inject: false
      })
    ],
    module: {
      noParse: /lodash\/lodash.js/,
      rules: [
        {test: /\.jsx?$/, loader: 'eslint-loader', include: path.resolve(__dirname, 'src'), enforce: 'pre'},
        {test: /\.html$/, use: [{loader: 'file-loader?name=[name].[ext]'}]},
        {test: /\.css$/, use: [{loader: 'style-loader!css?sourceMap'}]},
        {test: /\.jsx?$/, use: [{loader: 'babel-loader'}]},
        {test: /\.s[ac]ss$/, 
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })  
      },
        {test: /\.otf?$/, use: [{loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }]},
        {test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: [{loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}}]},
      ]
    }
}