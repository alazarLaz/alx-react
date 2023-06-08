const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
  entry: './js/dashboard_main.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
