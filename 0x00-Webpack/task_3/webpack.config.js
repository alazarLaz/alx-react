const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
    new CleanWebpackPlugin(),
  ],
  entry: {
    header: path.resolve(__dirname, "./header/header.js"),
    body: path.resolve(__dirname, "./body/body.js"),
    footer: path.resolve(__dirname, "./footer/footer.js"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: '8564',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
