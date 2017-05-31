const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devtool: 'source-map',  
    entry: {
      app: path.resolve(__dirname, 'src/app/App.jsx'),
      vendor: require('./vendor-lib')
    },
    output: {
        filename: 'js/[name].js',
    },
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('./node_modules'),
      ],
      extensions: ['.js', '.jsx'],
      alias:{
        settings:  path.resolve(__dirname, 'src/environments/dev')
      }
    },
    plugins: [
      // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
      new webpack.optimize.CommonsChunkPlugin({name:'vendor', minChunks: Infinity}),  
      //new webpack.NoErrorsPlugin(),
      //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it|en/),
      new HtmlWebpackPlugin({
        filename: 'index.html', 
        css: '',
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
        {test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader?sourceMap=true&root=../', 'sass-loader?sourceMap=true&root=../']},
        {test: /\.otf?$/, use: [{loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }]},
        {test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: [{loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}}]},
      ]
    }
};
