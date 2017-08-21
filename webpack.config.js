var path = require("path");

module.exports = {
  entry: "./app/default.module.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: "/",
    filename: "default.bundle.js",
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  }
}
