var path = require('path')
var webpack = require('webpack')
module.exports = {
  devtool: 'eval-source-map',
  name: 'browser',
  entry: [
    './src/index'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?compact=false']
    },{ 
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?sourceMap']
    },{
      test: /\.json$/, 
      loader: "json-loader" 
    },{
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'url-loader'
    },{
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
      loader: 'url-loader'
    }]
  },
  eslint: {
    configFile: path.join(__dirname, './.eslintrc.json')
  },
  resolve: {
    extensions: ['','.js','.jsx','.scss','.css']
  }
}