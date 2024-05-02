const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpachPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") mode = "production";

module.exports = {
  mode: mode,
  devServer: {
    static: "./dist",
    hot: true,
  },

  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },

  devtool: "source-map",
  plugins: [
    new HTMLWebpachPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(css|scss|less|sass)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
