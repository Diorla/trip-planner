const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/client/js/index.js",
    explore: "./src/client/js/explore.js",
    search: "./src/client/js/search.js",
    location: "./src/client/js/location.js",
    confirm: "./src/client/js/confirm.js",
    history: "./src/client/js/history.js",
    saved: "./src/client/js/saved.js",
    upcoming: "./src/client/js/upcoming.js",
  },
  mode: "production",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/explore.html",
      filename: "./explore.html",
      chunks: ["explore"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/search.html",
      filename: "./search.html",
      chunks: ["search"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/location.html",
      filename: "./location.html",
      chunks: ["location"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/confirm.html",
      filename: "./confirm.html",
      chunks: ["confirm"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/history.html",
      filename: "./history.html",
      chunks: ["history"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/saved.html",
      filename: "./saved.html",
      chunks: ["saved"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/upcoming.html",
      filename: "./upcoming.html",
      chunks: ["upcoming"],
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
