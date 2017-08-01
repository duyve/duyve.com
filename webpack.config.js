var path = require("path");

module.exports = {
  entry: "./app/entry.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: 'public/assets/'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  }
}
