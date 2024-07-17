const path = require("path");
const webpack = require("webpack");
const Base = require("./webpack.base.config");

const pkg = require("./package.json");
const libraryName = pkg.name.split("/").pop();

module.exports = {
  ...Base,
  mode: "development",

  entry: {
    app: "./index.js"
  },

  devtool: "inline-source-map",

  module: {
    rules: [...Base.module.rules]
  },

  plugins: [
    ...Base.plugins,

    new webpack.SourceMapDevToolPlugin({
      test: new RegExp(".[js|css|mjs].*")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    ...Base.output,

    publicPath: "/",
    path: path.resolve(__dirname, "dist"),

    library: libraryName,
    libraryTarget: "var",
    globalObject: "this"
  },

  target: "web",

  devServer: {
    historyApiFallback: true,
    hot: true
  }
};
