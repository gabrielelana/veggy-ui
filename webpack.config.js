const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',  
    entry: {
      app: path.resolve(__dirname, 'src/app/App.jsx'),
      vendors: require('./vendor-lib')
    },
   
    output: {
        filename: 'js/[name].js',
    },
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      extensions: ['.js', '.jsx'],
      alias:{
        settings:  path.resolve(__dirname, 'src/environments/dev')
      }
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name:'vendors', minChunks: Infinity}),  
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
      rules: [
        {test: /\.jsx?$/, loader: 'eslint-loader', include: path.resolve(__dirname, 'src'), enforce: 'pre'},
        {test: /\.html$/, use: [{loader: 'file-loader?name=[name].[ext]'}]},
        {test: /\.css$/, use: [{loader: 'style-loader!css?sourceMap'}]},
        {test: /\.jsx?$/, use: [{loader: 'babel-loader'}]},
        {test: /\.scss$/, use: ["style-loader", "css-loader?sourceMap=true&root=../", "sass-loader?sourceMap=true&root=../"]},
        {test: /\.otf?$/, use: [{loader: "url-loader?limit=10000&mimetype=application/octet-stream" }]},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: "url-loader?limit=10000&mimetype=application/octet-stream" }]},
        // {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: "url?limit=10000&mimetype=application/font-woff" }]},
        // {test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: "file" }]},
        // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: "url?limit=10000&mimetype=image/svg+xml" }]},
        // {test: /\.(png|jpg|jpeg|gif|woff)$/, use: [{loader: "url?limit=10000" }]}
      ]
    }
};
