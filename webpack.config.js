var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
    entry: [
    './app/index.js'
  ],
  module: {
    rules: [
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
        {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}
