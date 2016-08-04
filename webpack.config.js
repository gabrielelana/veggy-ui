var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      app:[
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        'font-awesome-sass-loader',
        path.resolve(__dirname, 'src/components/App.jsx'),
        './src/index.html'
      ],
      vendors: ['react', 'react-dom', 'superagent', 'ramda']
    },
    output: {
        filename: '/js/app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: path.resolve(__dirname, 'src'),
      alias:{
        'env':'../environments/dev'
      }
    },
    eslint: {
      configFile: 'eslint.config.json'
    },
    plugins: [
      //new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),  
      new webpack.optimize.OccurenceOrderPlugin(),
      //new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include:  path.resolve(__dirname, 'src')
        }
      ],
      loaders: [
        {test: /\.html$/, loaders: ['file?name=[name].[ext]']},
        {test: /\.css$/, loader: 'style!css?sourceMap'},
        {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.scss$/, loaders: ["style", "css?sourceMap=true&root=../", "sass?sourceMap=true&root=../"]},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        {test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: "url?limit=10000" }]
    }
};
