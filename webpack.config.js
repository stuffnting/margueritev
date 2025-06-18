const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = function (env, argv) {
  const mode = env.development ? "development" : "production";
  const devtool = env.development ? "source-map" : false;
  const folder = env.development ? "start" : "build";
  const minify = env.production;
  const minimize = env.production;
  //const clean = env.production;
  const clean = true;
  const assetsFolder = env.development ? "start/assets" : "build/assets";
  const imagesFolder = env.development ? "start/images" : "build/images";

  return {
    mode,
    devtool,
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, folder),
      clean,
    },
    optimization: {
      minimize,
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/home.html",
        hash: true,
        minify,
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src/images"),
            to: path.resolve(__dirname, imagesFolder),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|webp|svg|ico)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]",
          },
        },
        {
          test: /\.html$/i,
          use: "html-loader",
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
