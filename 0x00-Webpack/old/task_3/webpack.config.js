const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    header: path.resolve(__dirname, "./header/header.js"),
    body: path.resolve(__dirname, './body/body.js'),
    footer: path.resolve(__dirname, './footer/footer.js'),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "public") },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jp?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
